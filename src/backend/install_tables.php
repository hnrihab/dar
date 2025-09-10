<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Connexion BDD
$host = "localhost";
$dbname = "violet_vision";
$user = "root";
$pass = "";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connexion échouée: " . $e->getMessage());
}

// ⚡ Désactiver temporairement les FK
$pdo->exec("SET FOREIGN_KEY_CHECKS=0");

// 1️⃣ Supprimer les tables si elles existent
$tables = [
    "products", "prix_supplement_feuille", "prix_finition_feuille",
    "prix_decoupe_feuille", "prix_coins_feuille", "prix_impr_feuille",
    "prix_plastification_feuille", "prix_papier_feuille", "carte_feuille"
];
foreach ($tables as $table) {
    $pdo->exec("DROP TABLE IF EXISTS $table");
}

// 2️⃣ Créer les tables
$tables_sql = [
    "CREATE TABLE carte_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        Cartes_par_feuille INT DEFAULT 1
    )",
    "CREATE TABLE prix_papier_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Papier VARCHAR(255),
        Prix_papier_dh_par_feuille DECIMAL(10,2)
    )",
    "CREATE TABLE prix_plastification_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Plastification VARCHAR(255),
        Prix_plastif_dh_par_feuille DECIMAL(10,2)
    )",
    "CREATE TABLE prix_impr_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Impression VARCHAR(255),
        Prix_impression_dh_par_feuille DECIMAL(10,2)
    )",
    "CREATE TABLE prix_coins_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Coins VARCHAR(255),
        Prix_coins_dh_par_feuille DECIMAL(10,2)
    )",
    "CREATE TABLE prix_decoupe_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Decoupe VARCHAR(255),
        Prix_Decoupe_dh_par_feuille DECIMAL(10,2)
    )",
    "CREATE TABLE prix_finition_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Finition VARCHAR(255),
        Prix_Finition_dh_par_feuille DECIMAL(10,2)
    )",
    "CREATE TABLE prix_supplement_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Supplement VARCHAR(255),
        Prix_Supplément_dh_par_feuille DECIMAL(10,2)
    )",
    "CREATE TABLE products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        description TEXT,
        price DECIMAL(10,2),
        promo DECIMAL(10,2),
        caracteristique TEXT,
        url_image VARCHAR(255)
    )"
];


// ⚡ Réactiver les FK
$pdo->exec("SET FOREIGN_KEY_CHECKS=1");

echo "✅ Tables créées avec succès.<br>";

// 3️⃣ Remplir depuis alldata.json
$jsonFile = __DIR__ . '/alldata.json';
if (!file_exists($jsonFile)) {
    die("❌ Fichier JSON introuvable : $jsonFile");
}
$jsonData = file_get_contents($jsonFile);
$data = json_decode($jsonData, true);
if (!$data) die("❌ JSON invalide ou vide.");

// 4️⃣ Mapping JSON → colonnes MySQL
$mapping = [
    "carte_feuille" => ["Format"=>"name","Cartes_par_feuille"=>"Cartes_par_feuille"],
    "prix_papier_feuille" => ["Papier"=>"Papier","Prix_papier_dh_par_feuille"=>"Prix_papier_dh_par_feuille"],
    "prix_plastification_feuille" => ["Plastification"=>"Plastification","Prix_plastif_dh_par_feuille"=>"Prix_plastif_dh_par_feuille"],
    "prix_impr_feuille" => ["Impression"=>"Impression","Prix_impression_dh_par_feuille"=>"Prix_impression_dh_par_feuille"],
    "prix_coins_feuille" => ["Coins_arrondis"=>"Coins","Prix_coins_dh_par_feuille"=>"Prix_coins_dh_par_feuille"],
    "prix_decoupe_feuille" => ["Découpe"=>"Decoupe","Prix_Découpe_dh_par_feuille"=>"Prix_Decoupe_dh_par_feuille"],
    "prix_finition_feuille" => ["Finition_par_feuille"=>"Finition","Prix_Finition_dh_par_feuille"=>"Prix_Finition_dh_par_feuille"],
    "prix_supplement_feuille" => ["Supplément"=>"Supplement","Prix_Supplément_dh_par_feuille"=>"Prix_Supplément_dh_par_feuille"]
];

foreach ($data as $table => $rows) {
    if (empty($rows)) continue;

    foreach ($rows as $row) {
        if (isset($mapping[$table])) {
            $newRow = [];
            foreach ($mapping[$table] as $jsonKey => $colName) {
                $newRow[$colName] = $row[$jsonKey] ?? null;
            }
            $row = $newRow;
        }

        foreach ($row as $k => $v) {
            if (is_string($v) && preg_match('/^\d+,\d+$/',$v)) $row[$k] = str_replace(',', '.', $v);
        }

        $cols = implode(',', array_keys($row));
        $placeholders = ':'.implode(',:', array_keys($row));
        $stmt = $pdo->prepare("INSERT INTO $table ($cols) VALUES ($placeholders)");
        foreach ($row as $k=>$v) $stmt->bindValue(":$k",$v);
        $stmt->execute();
    }
}

echo "✅ Toutes les tables ont été remplies depuis alldata.json.";
?>
