<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);
 $masp= $obj["masp"];
  $tensp = $obj["tensp"];
 $soluong =$obj["soluong"];
  $Sql_Query = "INSERT INTO tbSanPham (`masp` ,  `tensp` ,  `soluong` ) 
 VALUES ('$masp','$tensp','$soluong')";
 
 if(mysqli_query($con,$Sql_Query)){
 $MSG = 'Successfully' ;

 $json = json_encode($MSG);
 echo $json ; 
 }
 else{
 
 echo 'Wrong';
 
 }
 mysqli_close($con);
 
?>
