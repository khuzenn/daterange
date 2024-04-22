-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2024 at 05:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `daterange`
--

-- --------------------------------------------------------

--
-- Table structure for table `pegawai`
--

CREATE TABLE `pegawai` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) DEFAULT NULL,
  `jabatan` varchar(50) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `order` varchar(50) NOT NULL,
  `paid` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pegawai`
--

INSERT INTO `pegawai` (`id`, `nama`, `jabatan`, `gender`, `tanggal`, `order`, `paid`) VALUES
(1, 'Cullie Meugens', 'VP Sales', 'Male', '2024-02-10', '350000', '50000'),
(2, 'Fletch Manuello', 'Executive Secretary', 'Male', '2024-03-01', '120000', '20000'),
(3, 'Dina Ketts', 'Programmer II', 'Female', '2024-02-14', '130000', '30000'),
(4, 'Adrian Meale', 'Systems Administrator III', 'Female', '2024-02-02', '140000', '40000'),
(5, 'Gordon Marrett', 'Account Executive', 'Male', '2024-03-01', '150000', '50000'),
(6, 'Jeannette Jordanson', 'Account Coordinator', 'Female', '2024-02-25', '160000', '60000'),
(7, 'Merilyn Bernadot', 'Sales Associate', 'Agender', '2024-02-20', '170000', '70000'),
(8, 'Grant Innerstone', 'Occupational Therapist', 'Male', '2024-03-02', '180000', '80000'),
(9, 'Maire Chessell', 'Account Executive', 'Female', '2024-03-19', '190000', '90000'),
(10, 'Nick Aldins', 'Statistician I', 'Male', '2024-03-16', '200000', '10000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pegawai`
--
ALTER TABLE `pegawai`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
