<?php 
//header untuk menangani cors policy
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, HEAD, DELETE, OPTIONS, POST');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
// header("Access-Control-Allow-Headers: Content-Type");
header( 'enctype: multipart/form-data');
header('Content-Type: charset=utf-8, application/json');
error_reporting(E_ERROR | E_PARSE);
//membuat variable koneksi ke mysql
$koneksi = mysqli_connect('localhost','root','','responsi') or die ('koneksi gagal');


?>