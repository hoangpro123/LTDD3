<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);
 $masp= $obj["masp"];
 $tensp =$obj["tensp"];
 $gia =$obj["gia"];
 $des =$obj["des"];
 $img =$obj["img"];
 $Sql_Query = "UPDATE tbSanPham SET `tensp` = '$tensp', `gia` = '$gia',`des` = '$des',`img` = '$img' 
 WHERE `tensp` = '$masp'";
 
 if(mysqli_query($con,$Sql_Query)){
 $MSG = 'Successfully' ;

 $json = json_encode($MSG);
 echo $json ; 
 }
 else{
 
 echo 'Wrong';
 
 }
 mysqli_close($con);
 
