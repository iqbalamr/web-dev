<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="stylesheet.css"
</head>

<body style="background: #D8232D">
<img src="logo-sicepat-2.png" style="width:300px;height:100px;" align="left">
    <div class="container">
        <div>
            <h1 style="text-align: center">INFORMASI PAKET</h1>
            Nama Pengirim : <?php echo $_GET["pengirim"]; ?><br>
            No. HP Pengirim : <?php echo $_GET["no_hp_pengirim"]; ?><br>
            Nama Penerima : <?php echo $_GET["penerima"]; ?><br>
            No. HP Penerima: <?php echo $_GET["no_hp_penerima"]; ?><br>
            Alamat Penerima: <?php echo $_GET["alamat"]; ?><br>
        </div>
    </div>
</body>

</html>