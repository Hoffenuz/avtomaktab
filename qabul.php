<?php
// Ma'lumotlar bazasi ulanish
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "maktabavto";

// Ulanish
$conn = new mysqli($servername, $username, $password, $dbname);

// Ulanishni tekshirish
if ($conn->connect_error) {
    die("Ulanishda xatolik: " . $conn->connect_error);
}

// Formadan ma'lumot olish
$ism = $_POST['ism'];
$yosh = $_POST['yosh'];
$guruh = $_POST['guruh'];
$oqituvchi_id = !empty($_POST['oqituvchi_id']) ? $_POST['oqituvchi_id'] : 'NULL';

// SQL query
$sql = "INSERT INTO oquvchi (ism, yosh, Guruh, oqituvchi_id) VALUES ('$ism', '$yosh', '$guruh', $oqituvchi_id)";

if ($conn->query($sql) === TRUE) {
    echo "<div style='text-align:center; margin-top:50px;'>
            <h2>Ma'lumot muvaffaqiyatli qo'shildi ✅</h2>
            <a href='index.html'>Yana qaytish</a>
          </div>";
} else {
    echo "Xatolik: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
