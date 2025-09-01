<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include __DIR__ . '/db.php';


$data = json_decode(file_get_contents("php://input"), true);
$table = $data['table'] ?? '';

if (!$table) {
    echo json_encode(["error" => "Table non spécifiée"]);
    exit();
}

// Construire dynamiquement la requête INSERT
$columns = array_keys($data['values']);
$values = array_values($data['values']);
$placeholders = implode(',', array_fill(0, count($values), '?'));

$sql = "INSERT INTO $table (" . implode(',', $columns) . ") VALUES ($placeholders)";
$stmt = $pdo->prepare($sql);

try {
    $stmt->execute($values);
    echo json_encode(["success" => true]);
} catch (\PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
