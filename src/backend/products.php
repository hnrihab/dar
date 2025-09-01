<?php
header("Content-Type: application/json");
include __DIR__ . '/db.php';



$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        // Récupérer tous les produits
        $stmt = $pdo->query("SELECT * FROM products");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("INSERT INTO products (name, description, price, promo, caracteristique, url_image) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->execute([$data['name'], $data['description'], $data['price'], $data['promo'], $data['caracteristique'], $data['url_image']]);
        echo json_encode(['status' => 'success']);
        break;

    case 'PUT':
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("UPDATE products SET name=?, description=?, price=?, promo=?, caracteristique=?, url_image=? WHERE id=?");
        $stmt->execute([$data['name'], $data['description'], $data['price'], $data['promo'], $data['caracteristique'], $data['url_image'], $data['id']]);
        echo json_encode(['status' => 'success']);
        break;

    case 'DELETE':
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("DELETE FROM products WHERE id=?");
        $stmt->execute([$data['id']]);
        echo json_encode(['status' => 'success']);
        break;

    default:
        echo json_encode(['error' => 'Méthode non supportée']);
}
?>
