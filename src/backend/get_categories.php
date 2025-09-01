<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

require __DIR__ . '/config.php'; // connexion PDO

try {
    $stmt = $pdo->query("SELECT id, name FROM categories"); // colonne correcte
    $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($categories);
} catch (PDOException $e) {
    echo json_encode(["error" => "Erreur récupération catégories : " . $e->getMessage()]);
}
