-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2024 at 11:14 AM
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
-- Table structure for table `cse_results`
--

CREATE TABLE `cse_results` (
  `regno` varchar(20) NOT NULL,
  `subcode` varchar(20) NOT NULL,
  `sem` int NOT NULL,
  `grade` varchar(5) NOT NULL,
  `result` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  `programme` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
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
('GUNAALAN P G', 'Regular', '17 Jan 2002', '2015018', 'M', '9176987970', 'gunaalan777@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9994577758', 'O+', '3331150445400108', 9.0000),
('ABINAYA R', 'Regular', '12 Nov 2004', '91762115001', 'F', '9940775087', 'rajanabinaya05@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9894865088', 'B+', '3329070240400085', 9.0000),
('ABIRAMI K', 'Regular', '20 Jan 2004', '91762115002', 'F', '8778822870', 'abiramikanthasamy@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9994933547', 'B+', '3318070570300769', 9.0000),
('AKASH G', 'Regular', '29 Jan 2004', '91762115003', 'M', '9176097717', 'akashganesan1830@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9884891743', 'O+', '3322130310600822', 9.0000),
('ARAVIND KRISHNAN N', 'Regular', '5 Aug 2004', '91762115005', 'M', '8220225751', 'aravindhear@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '7708271654', 'A1+', '3326070890800030', 9.0000),
('AROCKIYA BELCY V S', 'Regular', '17 Mar 2004', '91762115006', 'F', '9487891749', 'arockiyabelcyvs@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '9443691533', 'O+', '3315100470904702', 9.0000),
('BOWSUL NILOFAR N', 'Regular', '25 Apr 2004', '91762115010', 'F', '9342572428', 'bowsulnilofar2004@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '9965115556', 'B+', '3322080400200254', 9.0000),
('DEEP R SHAH', 'Regular', '18 Apr 2004', '91762115011', 'M', '8610673845', 'deeprshah12345@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '8903642331', 'B+', '3323080151100444', 9.0000),
('DHAKSHANA R', 'Regular', '20 Jun 2003', '91762115012', 'F', '8754993113', 'sundarichandran1975@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '9597171435', 'A1B+', '3323080151200138', 9.0000),
('GOPIKA S D', 'Regular', '20 Jun 2004', '91762115014', 'F', '9360529049', 'sdgopikagopika@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9791041808', 'B+', '3302050071600628', 9.0000),
('HARISH I', 'Regular', '21 Jun 2004', '91762115015', 'M', '7845829241', 'isharish2004@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9965921876', 'A1B+', '3328051090800321', 9.0000),
('HEMA P', 'Regular', '29 Jul 2003', '91762115016', 'F', '7904507417', 'hema29parthiban@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9443004869', 'O+', '3327070530900097', 9.0000),
('JALISHA JOANS J', 'Regular', '28 Apr 2004', '91762115017', 'F', '9345659123', 'jalishajoans@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9443281277', 'O+', '3330020360201664', 9.0000),
('JAYASRI R', 'Regular', '18 Jul 2003', '91762115018', 'F', '9952395382', 'jayasri1872003@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9787017571', 'B+', '3326060470100302', 9.0000),
('KARTHIKEYAN V', 'Regular', '12 Nov 2003', '91762115019', 'M', '9629718100', 'karthiveeramalai2003@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9790107006', 'B+', '3314020261000638', 9.0000),
('KAVIYA B', 'Regular', '9 Dec 2003', '91762115020', 'F', '8072372927', 'kaviyab912@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '7010760032', 'B+', '3322040390400139', 9.0000),
('KAVYA K', 'Regular', '7 Feb 2004', '91762115021', 'F', '9489170204', 'ckichan03@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9489190268', 'O+', '3321010350301103', 9.0000),
('LOKANYA S', 'Regular', '20 Apr 2004', '91762115023', 'F', '9344055575', 'lokanyasekar77@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9788486472', 'B+', '3315110200601777', 9.0000),
('MADHUMITHA S', 'Regular', '9 Feb 2004', '91762115025', 'F', '6380043382', 'madhumitha0556@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '9344258588', 'AB+', '3323080115101901', 9.0000),
('MEENACHI KR', 'Regular', '12 Apr 2004', '91762115026', 'F', '7448372681', 'meenachikaruppaiah@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '9750836551', 'B+', '3323080151200190', 9.0000),
('MENAKA J', 'Regular', '2 Apr 2004', '91762115027', 'F', '8778805437', 'menakajk2004@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '6374150061', 'A1+', '3316060460400007', 9.0000),
('MUGESH M', 'Regular', '3 Oct 2003', '91762115028', 'M', '9360980648', 'mugeshmurugan185@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '6383392154', 'A+', '3327090750304822', 9.0000),
('MUTHUKRISHNAN M', 'Regular', '25 Aug 2003', '91762115029', 'M', '9363130574', 'muthukrishnan121317@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9843390129', 'A+', '3325010052400340', 9.0000),
('NITHYASRI S', 'Regular', '11 Jul 2003', '91762115030', 'F', '9597792897', 'umanithyacm@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9629586621', 'B+', '3307170131302996', 9.0000),
('PADMANABAN M', 'Regular', '8 Aug 2003', '91762115031', 'M', '9940999355', 'padmanaban8803@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9940999335', 'O+', '3326061271300017', 9.0000),
('PRIYADHARSHINI S', 'Regular', '2 Jul 2004', '91762115032', 'F', '8270413237', 'dharshugeeks2004@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '8973596360', 'A1B+', '3323080211000273', 9.0000),
('PUVIYARASAN S', 'Regular', '4 Jul 2004', '91762115033', 'M', '6385878804', 'puvicse042@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '6385232521', 'O+', '3316080010300423', 9.0000),
('ROSHAN FARHANA S', 'Regular', '27 Oct 2003', '91762115034', 'F', '7708849412', 'roshanfarhana03@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '9095993998', 'O+', '3323080115900057', 9.0000),
('SARASWATHI R', 'Regular', '31 Aug 2004', '91762115035', 'F', '9361599091', 'sarawork04@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9791744757', 'O+', '3304150250500293', 9.0000),
('SATHIYAN R', 'Regular', '19 Jul 2003', '91762115036', 'M', '9043740937', 'sathiyanr2003@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '8939940937', 'O+', '3303090329402001', 9.0000),
('SRIVENKATACHALAPATHY M', 'Regular', '1 Dec 2003', '91762115038', 'M', '9025196895', 'srivenkatachalapathym@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '9442321753', 'O-', '3323090050701028', 9.0000),
('SUGAN G', 'Regular', '1 Jan 2004', '91762115039', 'M', '7598110935', 'sugangopal44@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9443209935', 'O+', '3309050011300271', 9.0000),
('SUJITHA T', 'Regular', '1 Oct 2003', '91762115040', 'F', '9629171130', 'sujithathiru110@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '8754058771', 'B+', '330807012041824941', 9.0000),
('SWETHA S', 'Regular', '15 Sep 2003', '91762115041', 'F', '9841804543', 'swethashanmugaraj15@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '7092793398', 'A+', '3301091130800252', 9.0000),
('THASNEEM BANU S', 'Regular', '6 Aug 2003', '91762115042', 'F', '8056845861', 'thasneems068@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '9788756346', 'B+', '3322050730100888', 9.0000),
('THILAGARASAN B', 'Regular', '19 Nov 2003', '91762115043', 'M', '6380232362', 'thilagarasanb@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9751034558', 'O-', '3308160181101074', 9.0000),
('UDAYA GEETHA T', 'Regular', '10 Nov 2003', '91762115044', 'F', '6374804022', 'udayageetha2003@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9487046331', 'O+', '3304050140300168', 9.0000),
('VETRISELVAN M', 'Regular', '12 Nov 2003', '91762115045', 'M', '9786022718', 'vetriselvanm2003@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9751438429', 'B+', '3305020590300451', 9.0000),
('VIJAY MURUGA A', 'Regular', '1 Dec 2002', '91762115046', 'M', '6379364312', 'vijaymuruga200201@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9698396157', 'A1+', '3328010370700602', 9.0000),
('YAMUNAA R K', 'Regular', '28 Jul 2004', '91762115047', 'F', '9042747715', 'rkyamunaa23@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9443678339', 'O+', '3321070760300583', 9.0000),
('YOGADHARSHINII T', 'Regular', '18 May 2003', '91762115048', 'F', '6374689008', 'yogat003i@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9894696755', 'O+', '3331150445100518', 9.0000),
('SRISAKTHIDEVI J', 'Regular', '22 Jun 2003', '91762115049', 'F', '9500976286', 'srisakthidevi2003@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9566686286', 'O+', '3309060270700791', 9.0000),
('CHOUDRY  R', 'Lateral', '31 Mar 2004', '91762115201', 'M', '7305545054', 'choudryraj806@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9043190280', 'A+', '3308070270300072', 9.0000),
('HARIRAJ  K', 'Lateral', '1 Jun 2001', '91762115202', 'M', '6383551872', 'harirajkumaran2403@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9566430929', 'B+', '3306070370100083', 9.0000),
('JAWAHAR  RL', 'Lateral', '10 Aug 2003', '91762115203', 'M', '9003821773', 'jawaharrl2003@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '8681099917', 'O+', '3308210280100524', 9.0000),
('JEGATHEESWARI  P', 'Lateral', '7 Jun 2003', '91762115204', 'F', '7397771755', 'jeyasri2600@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '9842218578', 'O+', '322110400400190', 9.0000),
('JOSEPH CHRISTOPHER  B', 'Lateral', '26 Mar 2001', '91762115205', 'M', '9486893792', 'jijojoseph9486@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9486609379', 'B+', '3330020310500626', 9.0000),
('MAGIMMUTHU  K', 'Lateral', '29 Jan 2004', '91762115206', 'M', '8610712393', 'magim290104@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '7094694692', 'O+', '3329120620100041', 9.0000),
('NAVEENKUMAR  C', 'Lateral', '6 Oct 2002', '91762115207', 'M', '9360432889', 'aacnaveenkumar5@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9789306576', 'O+', '3316070081200082', 9.0000),
('PRASANNA SRIDHAR  M', 'Lateral', '16 Dec 2003', '91762115208', 'M', '9751796504', 'sridharprasanna868@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9751085125', 'B+', '3315080141000072', 9.0000),
('AISHWARYA  B', 'Transfer', '5 Sep 2003', '91762115301', 'F', '8148020496', 'eraish003@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9698030496', 'B+', '3324070380800228', 9.0000),
('ARJUN PRAKASH A S', 'Transfer', '22 Jun 2003', '91762115302', 'M', '9894913713', 'arjunprakashas03@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9443076958', 'O+', '3324071111100102', 9.0000),
('GAYATHIRI   N S', 'Transfer', '29 Nov 2003', '91762115303', 'F', '7904854374', 'nsgayathiri2003@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '9786202599', 'B+', '3323080080301571', 9.0000),
('KEERTHANA  S', 'Transfer', '25 Aug 2003', '91762115304', 'F', '6380110154', 'keerthana7cse@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '9865495694', 'O+', '3323080112901666', 9.0000),
('MOHAMAD SAMEER  S', 'Transfer', '5 Oct 2003', '91762115305', 'M', '8056489015', 'sammoham2003@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9865314890', 'O+', '3322010341100060', 9.0000),
('MOHANA SUNDARAM  V', 'Transfer', '18 Nov 2003', '91762115306', 'M', '9751772575', 'kyarasi642@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '9443635267', 'B+', '332308011291714798', 9.0000),
('MUTHUMANI G', 'Transfer', '26 Feb 2004', '91762115307', 'M', '7339163651', 'gmuthumani2004@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '7639458499', 'B-', '3323090150700057', 9.0000),
('PAVITHRA  M', 'Transfer', '20 Jan 2004', '91762115308', 'F', '8610807030', 'pavithrameyyappan@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '9003812025', 'B+', '3323080112102617', 9.0000),
('PONKUMAR  S', 'Transfer', '17 Jun 2003', '91762115309', 'M', '9500791425', 'pon2003kumar@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9843779669', 'O+', '3318120310500106', 9.0000),
('ROHITH  G', 'Transfer', '25 Oct 2003', '91762115310', 'M', '9025041907', 'rohithganapathy2003@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9943703292', 'AB+', '3323020250202475', 9.0000),
('SOLAI DHANUSH V', 'Transfer', '26 Oct 2003', '91762115311', 'M', '8148045071', 'solaidhanush@gmail.com', 'Yes', 'BE-Full Time', '2019A', '2021-25', '9360018322', 'O-', '3321010090300295', 9.0000),
('UMMAL FAJEELA  N', 'Transfer', '25 Oct 2003', '91762115312', 'F', '8610587749', 'ummalfajeela25@gmail.com', 'No', 'BE-Full Time', '2019A', '2021-25', '8778559316', 'O+', '3323080114002041', 9.0000);

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
('91762115000', 'accet25@', 1),
('91762115006', '$2b$12$b3zgKtyJRnoqSwKGnTuclujDNSYgtuE6WiQQsimE5.J68rPu4p.rS', 2),
('91762115020', 'kaviya', 1),
('91762115036', '$2b$12$7uEkkJNT6vG4PK2AfOY/Bet37jXFLFgsfsMHbGgqAMXrEexGivkuy', 1),
('91762115302', '$2b$12$3CrjkvX/qBeUxX8s7KhO3OSH1YiSc4Xpec7CULn9kOuxvnX3ccw1W', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cse_results`
--
ALTER TABLE `cse_results`
  ADD KEY `idx_cse_results` (`regno`,`subcode`,`current_sem`);

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
