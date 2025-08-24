<?php
header("Access-Control-Allow-Origin: *"); // autorise toutes les origines
header("Content-Type: application/json; charset=UTF-8");

require 'config.php';

// ton code pour récupérer les produits ici
$stmt = $pdo->query("SELECT * FROM products");
$products = $stmt->fetchAll(PDO::FETCH_ASSOC);

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
