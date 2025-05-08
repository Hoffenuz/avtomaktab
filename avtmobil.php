<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mavjud Avtomobillar</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .navbar {
            background-color:cadetblue;
            padding: 15px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: white;
            box-shadow: 0 2px 5px white;
        }
        .navbar .menu a {
            color: white;
            text-decoration: none;
            margin-left: 20px;
            font-weight: bold;
            transition: color 0.3s;
        }
        .navbar .menu a:hover {
            color: #ffccbc;
        }
        .container {
            max-width: 1000px;
            margin: 40px auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px white;
        }
        h2 {
            text-align: center;
            color: cadetblue;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        thead {
            background-color:cadetblue;
            color: white;
        }
        th, td {
            padding: 12px;
            text-align: center;
            border-bottom: 1px solid #ddd;
        }
        tr:hover {
            background-color: #f2f2f2;
        }
        .footer {
            text-align: center;
            padding: 15px;
            background-color: cadetblue;
            color: white;
            margin-top: 40px;
        }
    </style>
</head>
<body>

    <div class="navbar" style="color: white">
        <div class="logo" >AvtoMaktab </div>
        <div class="menu">
            <a href="bosh.html" style="color: white ">Bosh sahifa</a>
            <a href="avtomaktab.html" style="color: white">Ro'yxatdan o'tish</a>
            <a href="aloqa.html" style="color: white">Aloqa</a>
        </div>
    </div>

    <div class="container">
        <h2> Mavjud O'qituvchilar Ro'yxati</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Ism</th>
                    <th>Telefon</th>
                    <th>Malumot</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // MySQL ulanishi
                $conn = new mysqli("localhost", "root", "", "maktabavto");

                if ($conn->connect_error) {
                    die("Xatolik: " . $conn->connect_error);
                }

                // Avtomobillarni olish
                $sql = "SELECT * FROM oqituvchi";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        echo "<tr>
                                <td>".$row["id"]."</td>
                                <td>".$row["ism"]."</td>
                                <td>".$row["telefon"]."</td>
                                <td>".$row["malumot"]."</td>
                              </tr>";
                    }
                } else {
                    echo "<tr><td colspan='5'> Hech qanday o'qituvchi topilmadi.</td></tr>";
                }

                $conn->close();
                ?>
            </tbody>
        </table>
    </div>
    <div class="container">
        <h2>🚘 Mavjud Avtomobillar Ro'yxati</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Davlat Raqami</th>
                    <th>Toifasi</th>
                    <th>Turi</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // MySQL ulanishi
                $conn = new mysqli("localhost", "root", "", "maktabavto");

                if ($conn->connect_error) {
                    die("Xatolik: " . $conn->connect_error);
                }

                // Avtomobillarni olish
                $sql = "SELECT * FROM avtomobil";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        echo "<tr>
                                <td>".$row["id"]."</td>
                                <td>".$row["nomi"]."</td>
                                <td>".$row["davlat_raqami"]."</td>
                                <td>".$row["Toifasi"]."</td>
                                <td>".$row["Turi"]."</td>
                              </tr>";
                    }
                } else {
                    echo "<tr><td colspan='5'>🚗 Hech qanday avtomobil topilmadi.</td></tr>";
                }

                $conn->close();
                ?>
            </tbody>
        </table>
    </div>


</body>
</html>
