<?php
require 'config.php';

$json = file_get_contents('products.json'); // ton JSON complet
$data = json_decode($json, true);

foreach ($data['categories'] as $cat) {
    $stmt = $pdo->prepare("INSERT IGNORE INTO categories (id, name) VALUES (?, ?)");
    $stmt->execute([$cat['id'], $cat['name']]);

    foreach ($cat['produits'] as $prod) {
        $stmt = $pdo->prepare("INSERT INTO products (id, name, categorie_id) VALUES (?, ?, ?)");
        $stmt->execute([$prod['id'], $prod['name'], $cat['id']]);

        foreach ($prod['options'] as $optName => $values) {
            foreach ($values as $val) {
                $stmt = $pdo->prepare("INSERT INTO product_options (product_id, option_name, option_value) VALUES (?, ?, ?)");
                $stmt->execute([$prod['id'], $optName, $val]);
            }
        }
    }
}

echo "Insertion terminée.";
