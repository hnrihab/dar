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

// Liste de toutes les tables
$tables = [
    "carte_feuille",
    "prix_papier_feuille",
    "prix_coins_feuille",
    "prix_decoupe_feuille",
    "prix_finition_feuille",
    "prix_impr_feuille",
    "prix_plastification_feuille",
    "prix_supplement_feuille",
    "products"
];

foreach ($tables as $table) {
    try {
        // Vérifie si la colonne 'id' existe
        $stmt = $pdo->query("SHOW COLUMNS FROM `$table` LIKE 'id'");
        $exists = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$exists) {
            // Vérifie s'il y a déjà une clé primaire
            $stmtPK = $pdo->query("SHOW INDEX FROM `$table` WHERE Key_name = 'PRIMARY'");
            $hasPK = $stmtPK->fetch(PDO::FETCH_ASSOC);

            if ($hasPK) {
                // Ajouter id sans clé primaire
                $pdo->exec("ALTER TABLE `$table` ADD COLUMN id INT AUTO_INCREMENT UNIQUE FIRST");
                echo "Colonne 'id' ajoutée à la table `$table` (sans clé primaire).<br>";
            } else {
                // Ajouter id comme clé primaire
                $pdo->exec("ALTER TABLE `$table` ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY FIRST");
                echo "Colonne 'id' ajoutée à la table `$table` comme clé primaire.<br>";
            }
        } else {
            echo "La table `$table` a déjà une colonne 'id'.<br>";
        }
    } catch (PDOException $e) {
        echo "Erreur sur la table `$table` : " . $e->getMessage() . "<br>";
    }
}

echo "<br>Toutes les tables ont été traitées automatiquement.";
?>
