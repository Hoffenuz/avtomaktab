<?php
// Ma'lumotlar bazasiga ulanish
$mysqli = new mysqli("sql8.freesqldatabase.com", "sql8777665", "6FjIuz37c5", "sql8777665", 3306);

// Ulanishni tekshirish
if ($mysqli->connect_errno) {
    die("MySQLga ulanishda xatolik: " . $mysqli->connect_error);
}

// POST ma'lumotlarini olish va tekshirish
$ism = $_POST['ism'] ?? '';
$yosh = $_POST['yosh'] ?? '';
$guruh = $_POST['guruh'] ?? '';
$oqituvchi_id = $_POST['oqituvchi_id'] ?? '';

// Ma'lumotlar to'liq kiritilganligini tekshirish
if (empty($ism) || empty($yosh) || empty($guruh) || empty($oqituvchi_id)) {
    die("Iltimos, barcha maydonlarni to'ldiring.");
}

// Tayyorlangan so'rovni yaratish
$stmt = $mysqli->prepare("INSERT INTO talabalar (ism, yosh, guruh, oqituvchi_id) VALUES (?, ?, ?, ?)");

if (!$stmt) {
    die("So'rovni tayyorlashda xatolik: " . $mysqli->error);
}

// Parametrlarni bog'lash
$stmt->bind_param("ssss", $ism, $yosh, $guruh, $oqituvchi_id);

// So'rovni bajarish
if ($stmt->execute()) {
    echo "Ro'yxatdan o'tish muvaffaqiyatli amalga oshirildi!";
} else {
    echo "Xatolik yuz berdi: " . $stmt->error;
}

// Resurslarni yopish
$stmt->close();
$mysqli->close();
?>
