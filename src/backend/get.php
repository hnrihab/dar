<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include __DIR__ . '/db.php';



$table = $_GET['table'] ?? '';

if (!$table) {
    echo json_encode(["error" => "Table non spécifiée"]);
    exit();
}

try {
    $stmt = $pdo->query("SELECT * FROM $table");
    $data = $stmt->fetchAll();
    echo json_encode($data);
} catch (\PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
