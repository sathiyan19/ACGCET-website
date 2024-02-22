-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2024 at 03:38 AM
-- Server version: 8.0.31
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clgdata`
--

-- --------------------------------------------------------

--
-- Table structure for table `cse_stud_details`
--

CREATE TABLE `cse_stud_details` (
  `studentname` varchar(50) DEFAULT NULL,
  `student_type` varchar(12) NOT NULL DEFAULT 'Regular',
  `dob` varchar(15) DEFAULT NULL,
  `regno` varchar(12) NOT NULL,
  `gender` varchar(4) DEFAULT NULL,
  `phoneno` varchar(10) NOT NULL,
  `mailid` varchar(40) DEFAULT NULL,
  `hosteller` varchar(15) DEFAULT NULL,
  `programme` varchar(10) DEFAULT NULL,
  `regulation` varchar(5) DEFAULT NULL,
  `batch` varchar(12) DEFAULT NULL,
  `parent_no` varchar(15) NOT NULL,
  `blood_grp` varchar(5) DEFAULT NULL,
  `emis_no` varchar(20) DEFAULT NULL,
  `cgpa` decimal(6,4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cse_stud_details`
--

INSERT INTO `cse_stud_details` (`studentname`, `student_type`, `dob`, `regno`, `gender`, `phoneno`, `mailid`, `hosteller`, `programme`, `regulation`, `batch`, `parent_no`, `blood_grp`, `emis_no`, `cgpa`) VALUES
('Arockiya Belcy VS', 'Regular', '17/03/2004', '91762115006', 'F', '9487891749', 'arockiyabelcyvs@gmail.com', 'No', 'BE', '2019A', '2025', '9443691533', 'O+', '123456', 9.8000);

-- --------------------------------------------------------

--
-- Table structure for table `login_cred`
--

CREATE TABLE `login_cred` (
  `reg_no` varchar(20) NOT NULL,
  `pswd` varchar(70) DEFAULT NULL,
  `p_flag` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `login_cred`
--

INSERT INTO `login_cred` (`reg_no`, `pswd`, `p_flag`) VALUES
('91762115006', '$2b$12$b3zgKtyJRnoqSwKGnTuclujDNSYgtuE6WiQQsimE5.J68rPu4p.rS', 2),
('91762115036', '$2b$12$7uEkkJNT6vG4PK2AfOY/Bet37jXFLFgsfsMHbGgqAMXrEexGivkuy', 1),
('91762115302', '$2b$12$3CrjkvX/qBeUxX8s7KhO3OSH1YiSc4Xpec7CULn9kOuxvnX3ccw1W', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cse_stud_details`
--
ALTER TABLE `cse_stud_details`
  ADD PRIMARY KEY (`regno`);

--
-- Indexes for table `login_cred`
--
ALTER TABLE `login_cred`
  ADD PRIMARY KEY (`reg_no`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
