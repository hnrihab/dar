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

// Tables à créer
$tables = [
    "CREATE TABLE IF NOT EXISTS carte_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );",
    "CREATE TABLE IF NOT EXISTS prix_papier_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Papier VARCHAR(255),
        Prix_papier_dh_par_feuille DECIMAL(10,2)
    );",
    "CREATE TABLE IF NOT EXISTS prix_coins_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Coins VARCHAR(255),
        Prix_coins_dh_par_feuille DECIMAL(10,2)
    );",
    "CREATE TABLE IF NOT EXISTS prix_decoupe_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Decoupe VARCHAR(255),
        Prix_Decoupe_dh_par_feuille DECIMAL(10,2)
    );",
    "CREATE TABLE IF NOT EXISTS prix_finition_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Finition VARCHAR(255),
        Prix_Finition_dh_par_feuille DECIMAL(10,2)
    );",
    "CREATE TABLE IF NOT EXISTS prix_impr_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Impression VARCHAR(255),
        Prix_impression_dh_par_feuille DECIMAL(10,2)
    );",
    "CREATE TABLE IF NOT EXISTS prix_plastification_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Plastification VARCHAR(255),
        Prix_plastif_dh_par_feuille DECIMAL(10,2)
    );",
    "CREATE TABLE IF NOT EXISTS prix_supplement_feuille (
        id INT AUTO_INCREMENT PRIMARY KEY,
        Supplement VARCHAR(255),
        Prix_Supplément_dh_par_feuille DECIMAL(10,2)
    );",
    "CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        description TEXT,
        price DECIMAL(10,2),
        promo DECIMAL(10,2),
        caracteristique TEXT,
        url_image VARCHAR(255)
    );"
];

// Exécuter toutes les requêtes
foreach ($tables as $sql) {
    $pdo->exec($sql);
}

echo "Toutes les tables sont créées ou existent déjà.";
