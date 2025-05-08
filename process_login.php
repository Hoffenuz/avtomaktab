<?php
session_start();

// Oddiy login va parol
$admin_username = 'umid';
$admin_password = '1121';

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if ($username === $admin_username && $password === $admin_password) {
    $_SESSION['admin_logged_in'] = true;
    header('Location: admin.php');
    exit();
} else {
    // Login.php ga qaytib, error=1 parametrini yuboramiz
    header('Location: login.php?error=1');
    exit();
}
?>
