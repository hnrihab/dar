<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include __DIR__ . '/db.php';


$data = json_decode(file_get_contents("php://input"), true);
$table = $data['table'] ?? '';
$id = $data['id'] ?? 0;

if (!$table || !$id) {
    echo json_encode(["error" => "Données manquantes"]);
    exit();
}

$stmt = $pdo->prepare("DELETE FROM $table WHERE id = ?");
try {
    $stmt->execute([$id]);
    echo json_encode(["success" => true]);
} catch (\PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
