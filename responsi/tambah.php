<?php 
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$id = trim($data['id']);
$judul = trim($data['judul']);
$penyanyi = trim($data['penyanyi']);

if ($judul != '' and $penyanyi) {
	$query = mysqli_query($koneksi,"insert into lagu(id, judul, penyanyi) values('$id','$judul','$penyanyi')");

}else{
	$query = mysqli_query($koneksi,"delete from lagu where id='$id'");
}


// if ($query) {
// 	http_response_code(201);
// 	$pesan['status'] = 'sukses';
// }else{
// 	http_response_code(422);
// 	$pesan['status'] = 'gagal';
// }

echo json_encode($pesan);
echo mysqli_error($koneksi);

?>