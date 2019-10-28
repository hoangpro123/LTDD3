<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);
 $masp= $obj["masp"];
  $tensp = $obj["tensp"];
 $gia =$obj["gia"];
 $des =$obj["des"];
 $img =$obj["img"];
  $Sql_Query = "INSERT INTO tbSanPham (`masp` ,  `tensp` ,  `gia`,`des`,`img` ) 
 VALUES ('$masp','$tensp','$gia','$des','$img')";
 
 if(mysqli_query($con,$Sql_Query)){
 $MSG = 'Successfully' ;

 $json = json_encode($MSG);
 echo $json ; 
 }
 else{
 
 echo 'Wrong';
 
 }
 mysqli_close($con);
 
