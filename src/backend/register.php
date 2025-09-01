<?php
// Autoriser toutes les origines (frontend sur localhost:5173)
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Répondre à la requête OPTIONS (préflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
require 'config.php';

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'] ?? '';
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

if (!$username || !$email || !$password) {
    echo json_encode(['error' => 'Tous les champs sont obligatoires']);
    exit;
}

// Hachage du mot de passe
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$stmt = $pdo->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
try {
    $stmt->execute([$username, $email, $password]);
    echo json_encode(['success' => 'Utilisateur créé']);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Email ou username déjà utilisé']);
}
