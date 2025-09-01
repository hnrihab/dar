<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit(0);

// Connexion BDD
try {
    $pdo = new PDO("mysql:host=localhost;dbname=violet_vision;charset=utf8mb4", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo json_encode(['error' => 'Erreur connexion BDD: '.$e->getMessage()]);
    exit;
}

$table = $_GET['table'] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

if (!$table) {
    echo json_encode(['error'=>'Aucune table spécifiée']);
    exit;
}

try {
    // GET → récupérer toutes les lignes
    if ($method === 'GET') {
        $stmt = $pdo->query("SELECT * FROM `$table` ORDER BY id ASC");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }

    // POST → ajouter une ligne
    elseif ($method === 'POST') {
        $data = json_decode(file_get_contents("php://input"), true);
        $cols = array_keys($data);
        $sql = "INSERT INTO `$table` (`".implode("`,`",$cols)."`) VALUES (:".implode(",:",$cols).")";
        $stmt = $pdo->prepare($sql);
        $stmt->execute($data);
        echo json_encode(['status'=>'ok','id'=>$pdo->lastInsertId()]);
    }

    // PUT → modifier une seule ligne
    elseif ($method === 'PUT') {
        $data = json_decode(file_get_contents("php://input"), true);
        if (!isset($data['id'])) throw new Exception("ID manquant pour modification");
        $id = $data['id'];
        unset($data['id']);
        $sets = implode(",", array_map(fn($c)=>"$c=:$c", array_keys($data)));
        $sql = "UPDATE `$table` SET $sets WHERE id=:id";
        $stmt = $pdo->prepare($sql);
        $stmt->execute(array_merge($data,['id'=>$id]));
        echo json_encode(['status'=>'ok']);
    }

    // DELETE → supprimer une ligne
    elseif ($method === 'DELETE') {
        $id = $_GET['id'] ?? null;
        if (!$id) throw new Exception("ID manquant pour suppression");
        $stmt = $pdo->prepare("DELETE FROM `$table` WHERE id=?");
        $stmt->execute([$id]);
        echo json_encode(['status'=>'ok']);
    }

} catch(Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
