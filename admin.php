<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header('Location: login.php');
    exit();
}

// Online ma'lumotlar bazasiga ulanish
$conn = new mysqli('sql8.freesqldatabase.com', 'sql8777665', '6FjIuz37c5', 'sql8777665', 3306);

// Ulanishni tekshirish
if ($conn->connect_error) {
    die("Bazaga ulanib bo‘lmadi: " . $conn->connect_error);
}

// Ma'lumotlarni olish
$sql = "SELECT * FROM aloqa ORDER BY yuborilgan_vaqt DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    <style>
        body {
            background: #f1f8e9;
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        h1 {
            text-align: center;
            color: #33691e;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background: white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        th, td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid #c5e1a5;
        }
        th {
            background-color: #8bc34a;
            color: white;
        }
        tr:hover {
            background: #f0f4c3;
        }
        .logout {
            text-align: center;
            margin-top: 20px;
        }
        .logout a {
            color: #33691e;
            text-decoration: none;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h1>Admin Panel - Xabarlar</h1>

    <table>
        <tr>
            <th>ID</th>
            <th>Ism</th>
            <th>Email</th>
            <th>Xabar</th>
            <th>Vaqt</th>
        </tr>
        <?php while ($row = $result->fetch_assoc()): ?>
        <tr>
            <td><?= $row['id']; ?></td>
            <td><?= htmlspecialchars($row['ism']); ?></td>
            <td><?= htmlspecialchars($row['email']); ?></td>
            <td><?= nl2br(htmlspecialchars($row['xabar'])); ?></td>
            <td><?= $row['yuborilgan_vaqt']; ?></td>
        </tr>
        <?php endwhile; ?>
    </table>

    <div class="logout">
        <a href="login.php">Chiqish</a>
    </div>

</body>
</html>

<?php $conn->close(); ?>
