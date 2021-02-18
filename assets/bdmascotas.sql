-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 17-02-2021 a las 09:19:27
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdmascotas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas`
--

CREATE TABLE `mascotas` (
  `id` int(11) NOT NULL,
  `raza` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `informacion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mascotas`
--

INSERT INTO `mascotas` (`id`, `raza`, `nombre`, `imagen`, `informacion`) VALUES
(1, 'Pastor Aleman', 'Tobi', 'https://bit.ly/3bf6SnW', 'https://es.wikipedia.org/wiki/Pastor_alem%C3%A1n'),
(2, 'Chihuahua', 'Matias', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Degaen.jpg/245px-Degaen.jpg', 'https://es.wikipedia.org/wiki/Chihuahua_(perro)'),
(3, 'Nueva', 'Desconocido', 'https://bit.ly/37ooVqx', 'https://www.infobae.com/tendencias/mascotas/2017/04/10/que-tan-peligroso-es-dejar-que-un-perro-te-de-besos/'),
(4, 'Beagle', 'Pepe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Beagle_Faraon.JPG/245px-Beagle_Faraon.JPG', 'https://es.wikipedia.org/wiki/Beagle'),
(5, 'Bichón maltés', 'Juana', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/1AKC_Maltese_Dog_Show_2011.jpg/250px-1AKC_Maltese_Dog_Show_2011.jpg', 'https://es.wikipedia.org/wiki/Bich%C3%B3n_malt%C3%A9s'),
(6, 'Rottweiler', 'Pirino', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rottweiler_mal_2.jpg/320px-Rottweiler_mal_2.jpg', 'https://es.wikipedia.org/wiki/Rottweiler');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
