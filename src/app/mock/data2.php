<?php 
header("Access-Control-Allow-Origin:*");
header("Content-type:text/json");  

$id = $_GET['id'];

$data='[
  {"id": 11, "name": "Mr. 1Nice"},
  {"id": 12, "name": "Narc1o"},
  {"id": 13, "name": "Bombast1o"},
  {"id": 14, "name": "Celeri1tas"},
  {"id": 15, "name": "Magneta"},
  {"id": 16, "name": "RubberMan1111"},
  {"id": 17, "name": "Dyna1ma"},
  {"id": 18, "name": "Dr1 IQ"},
  {"id": 19, "name": "Mag1ma"},
  {"id": 20, "name": "Torn1ado"}
]
';
$arr = json_decode($data,true);
$num = count($arr); 
for($i=0;$i<$num;++$i){
	if($id==$arr[$i]["id"]){
		echo json_encode($arr[$i]);
		break;
	}
}
?>




