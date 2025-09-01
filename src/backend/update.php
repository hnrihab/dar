<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include __DIR__ . '/db.php';


$data = json_decode(file_get_contents("php://input"), true);
$table = $data['table'] ?? '';
$id = $data['id'] ?? 0;
$values = $data['values'] ?? [];

if (!$table || !$id || empty($values)) {
    echo json_encode(["error" => "Données manquantes"]);
    exit();
}

$set = [];
foreach ($values as $col => $val) {
    $set[] = "$col = ?";
}
$sql = "UPDATE $table SET " . implode(',', $set) . " WHERE id = ?";
$stmt = $pdo->prepare($sql);

try {
    $stmt->execute([...array_values($values), $id]);
    echo json_encode(["success" => true]);
} catch (\PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
