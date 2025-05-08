<?php
// Ma'lumotlar bazasiga ulanish
$mysqli = new mysqli("sql8.freesqldatabase.com", "sql8777665", "6FjIuz37c5", "sql8777665", 3306);

// Ulanishni tekshirish
if ($mysqli->connect_errno) {
    die("MySQLga ulanishda xatolik: " . $mysqli->connect_error);
}

// POST ma'lumotlarini olish va tekshirish
$ism = $_POST['ism'] ?? '';
$email = $_POST['email'] ?? '';
$xabar = $_POST['xabar'] ?? '';

// Ma'lumotlar to'liq kiritilganligini tekshirish
if (empty($ism) || empty($email) || empty($xabar)) {
    die("Iltimos, barcha maydonlarni to'ldiring.");
}

// Tayyorlangan so'rovni yaratish
$stmt = $mysqli->prepare("INSERT INTO aloqa (ism, email, xabar) VALUES (?, ?, ?)");

if (!$stmt) {
    die("So'rovni tayyorlashda xatolik: " . $mysqli->error);
}

// Parametrlarni bog'lash
$stmt->bind_param("sss", $ism, $email, $xabar);

// So'rovni bajarish
if ($stmt->execute()) {
    echo "Xabaringiz muvaffaqiyatli yuborildi!";
} else {
    echo "Xatolik yuz berdi: " . $stmt->error;
}

// Resurslarni yopish
$stmt->close();
$mysqli->close();
?>
