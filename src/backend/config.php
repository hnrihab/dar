<?php
// Configuration de la connexion à la base de données
$host = "localhost";
$db   = "violet_vision"; // nom de la base de données
$user = "root";
$pass = "";
$charset = "utf8mb4";

// DSN pour PDO
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

// Options PDO
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,          // Gestion des erreurs
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,    // Résultats sous forme de tableau associatif
    PDO::ATTR_EMULATE_PREPARES => false,                 // Prépare les requêtes réellement
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    // Affiche une erreur claire et stoppe le script
    die(json_encode(["error" => "Connexion échouée : " . $e->getMessage()]));
}

// Création automatique de la table 'users' si elle n'existe pas
try {
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            email VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ");
} catch (PDOException $e) {
    die(json_encode(["error" => "Erreur création table users : " . $e->getMessage()]));
}
