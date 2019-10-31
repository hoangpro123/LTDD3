CREATE TABLE `tbsanpham` (
    `id` int(11) NOT NULL,
    `masp` varchar(500) NOT NULL,
    `tensp` varchar(5000) NOT NULL,
    `soluong` int(255) NOT NULL,
    `HinhAnh` varchar(5000) NOT NULL DEFAULT 'https://facebook.github.io/react/logo-og.png'
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
  
  --
  -- Dumping data for table `tbsanpham`
  --
  
  INSERT INTO `tbsanpham` (`id`, `masp`, `tensp`, `soluong`, `HinhAnh`) VALUES
  (3, 'sp001', 'ao', 10, 'http://icons.iconarchive.com/icons/michael/nike/128/Nike-Shirt-14-icon.png'),
  (7, 'sp100', 'ao them', 10, 'http://cf.shopee.vn/file/8617824621ddcb68cb8d33af6eb13690'),
  (20, 'sp00020', 'Giày nam', 1, 'https://cf.shopee.vn/file/168b9d14e86fc4f6cb8b5837b3b0f022'),
  (21, 'sp00021', 'quần tây', 11, 'https://cf.shopee.vn/file/c89ddb2e7ecd8f061106bb8acd540255');


  
  CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `username`, `password`, `email`) VALUES
(1, 'asdasd', '123', 'asdasd@gmail.com'),
(2, 'phuc', '202cb962ac59075b964b07152d234b70', 'phuc@gmail.com'),
(3, 'hoang', '202cb962ac59075b964b07152d234b70', 'hoang@gmail.com'),
(4, 'quan_vo', 'e10adc3949ba59abbe56e057f20f883e', 'quan@gmail.com'),
(5, 'ahii', 'b59c67bf196a4758191e42f76670ceba', 'aa@gmai.com'),
(6, 'admin', '4297f44b13955235245b2497399d7a93', 'admin@admin.com'),
(7, 'hoang1', 'e10adc3949ba59abbe56e057f20f883e', 'hoang1@gmail.com'),
(8, 'test', '4297f44b13955235245b2497399d7a93', 'test@admin.com');

  