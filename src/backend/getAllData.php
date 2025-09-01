<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

include __DIR__ . '/db.php';


// Les tables qui contiennent les prix
$tables = [
    "carte_feuille",
    "prix_papier_feuille",
    "prix_plastification_feuille",
    "prix_impr_feuille",
    "prix_coins_feuille",
    "prix_decoupe_feuille",
    "prix_finition_feuille",
    "prix_supplement_feuille"
];

$result = [];

foreach ($tables as $table) {
    $stmt = $pdo->query("SELECT * FROM $table");
    $result[$table] = $stmt->fetchAll(PDO::FETCH_ASSOC);
}

echo json_encode($result);
