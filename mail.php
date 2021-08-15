<?php
$message = 'Мы создали новую лягушку с именем ' . $_POST['name'] . ', которая обитает в ' . $_POST['habitat'] . ', с описанием: ' . $_POST['description'];
$message = wordwrap($message, 70, "\r\n");
mail('yanessa_n@mail.ru', 'Новая лягушка', $message);

$connect = new mysqli('localhost', 'annetsimon_dzenf', '1512Maks', 'annetsimon_dzenf');
$connect->query("INSERT INTO `Frogs` (`name`, `habitat`, `description`) VALUES ('$_POST[name]', '$_POST[habitat]', '$_POST[description]')");
$connect->close();

header('Location: /form.html');
