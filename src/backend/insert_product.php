<?php
require 'config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "No data received"]);
    exit;
}

$sql = "INSERT INTO products (id, name, description, price, promo, caracteristique, url_image, categorie_id) 
        VALUES (:id, :name, :description, :price, :promo, :caracteristique, :url_image, :categorie_id)";

$stmt = $pdo->prepare($sql);

try {
    $stmt->execute([
        ':id' => $data['id'],
        ':name' => $data['name'],
        ':description' => $data['description'],
        ':price' => $data['price'],
        ':promo' => $data['promo'],
        ':caracteristique' => $data['caracteristique'],
        ':url_image' => $data['url_image'],
        ':categorie_id' => $data['categorie_id']
    ]);
    echo json_encode(["status" => "success"]);
} catch (PDOException $e) {
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
