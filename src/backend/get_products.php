<?php
header("Access-Control-Allow-Origin: *"); // autorise toutes les origines
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

require 'config.php';

try {
    $sql = "SELECT * FROM products WHERE 1"; // toujours vrai
    $params = [];

    // Filtre par catégorie
    if (!empty($_GET['categorie_id'])) {
        $sql .= " AND categorie_id = :categorie_id";
        $params[':categorie_id'] = $_GET['categorie_id'];
    }

    // Filtre par recherche
    if (!empty($_GET['search'])) {
        $sql .= " AND name LIKE :search";
        $params[':search'] = "%" . $_GET['search'] . "%";
    }

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Récupérer les options associées
    foreach ($products as &$prod) {
        $stmt2 = $pdo->prepare("SELECT option_name, option_value FROM product_options WHERE product_id=?");
        $stmt2->execute([$prod['id']]);
        $optionsRaw = $stmt2->fetchAll(PDO::FETCH_ASSOC);

        $options = [];
        foreach ($optionsRaw as $opt) {
            $options[$opt['option_name']][] = $opt['option_value'];
        }

        $prod['options'] = $options;
    }

    echo json_encode($products);
} catch (Exception $e) {
    echo json_encode(["error" => "Erreur récupération produits : " . $e->getMessage()]);
}
?>
