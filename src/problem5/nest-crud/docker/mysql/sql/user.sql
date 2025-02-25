/*
 Navicat Premium Dump SQL

 Source Server         : mall
 Source Server Type    : MySQL
 Source Server Version : 80029 (8.0.29)
 Source Host           : localhost:3306
 Source Schema         : 99tech

 Target Server Type    : MySQL
 Target Server Version : 80029 (8.0.29)
 File Encoding         : 65001

 Date: 23/02/2025 01:17:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `firstName` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `lastName` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `createdAt`, `updatedAt`, `username`, `email`, `password`, `firstName`, `lastName`) VALUES (1, '2025-02-23 00:17:16.482830', '2025-02-23 00:57:05.111537', 'vanhung44993', 'vanhung44993@gmail.com', '$2b$10$tkqIGJPk72vS2MEtSRflO.3L4F07nMs9w99Xoxf5oKWXAKbwq1o1u', 'Hung', 'Nguyen');
INSERT INTO `user` (`id`, `createdAt`, `updatedAt`, `username`, `email`, `password`, `firstName`, `lastName`) VALUES (3, '2025-02-23 00:38:01.175516', '2025-02-23 00:57:21.895501', 'vanhung44991', 'vanhung44991@gmail.com', '$2b$10$tkqIGJPk72vS2MEtSRflO.3L4F07nMs9w99Xoxf5oKWXAKbwq1o1u', 'Hung', 'Nguyen');
INSERT INTO `user` (`id`, `createdAt`, `updatedAt`, `username`, `email`, `password`, `firstName`, `lastName`) VALUES (4, '2025-02-23 01:11:28.495708', '2025-02-23 01:11:28.495708', 'example1', 'example1@gmail.com', '$2b$10$cLsc9TcYtolL/q1BCm5fQurEyOrJOEc/G14UpLQNRKyKj0wEaIPlq', NULL, NULL);
INSERT INTO `user` (`id`, `createdAt`, `updatedAt`, `username`, `email`, `password`, `firstName`, `lastName`) VALUES (5, '2025-02-23 01:11:35.308030', '2025-02-23 01:11:35.308030', 'example2', 'example2@gmail.com', '$2b$10$lyMQKSM/KuOzhTEWxiDZaecCXrpKiwL90iv2mghv4VRsauzxzN26y', NULL, NULL);
INSERT INTO `user` (`id`, `createdAt`, `updatedAt`, `username`, `email`, `password`, `firstName`, `lastName`) VALUES (6, '2025-02-23 01:11:39.637668', '2025-02-23 01:11:39.637668', 'example3', 'example3@gmail.com', '$2b$10$fmR446QPdMEnqELnzrO6f.E2vn0zXJjrccCWKzI3NaiRnYQmvPx9S', NULL, NULL);
INSERT INTO `user` (`id`, `createdAt`, `updatedAt`, `username`, `email`, `password`, `firstName`, `lastName`) VALUES (7, '2025-02-23 01:11:45.348727', '2025-02-23 01:11:45.348727', 'example4', 'example4@gmail.com', '$2b$10$HYNPYzLoEqAZe/pbeyBYie1V2zABflJwaT8/FT50mofjsSQZl2uvO', NULL, NULL);
INSERT INTO `user` (`id`, `createdAt`, `updatedAt`, `username`, `email`, `password`, `firstName`, `lastName`) VALUES (8, '2025-02-23 01:12:24.869156', '2025-02-23 01:12:24.869156', 'example5', 'example5@gmail.com', '$2b$10$nLWfj4rlO8mf0O9Y.mSQF.zlDdWRhq3xfz/7uEbtvGOTNE8HvwvES', NULL, NULL);
INSERT INTO `user` (`id`, `createdAt`, `updatedAt`, `username`, `email`, `password`, `firstName`, `lastName`) VALUES (9, '2025-02-23 01:12:29.507700', '2025-02-23 01:12:29.507700', 'example6', 'example6@gmail.com', '$2b$10$mo0w5zI00hcHBU1wyukicejnKY62jHkPg4.peHxfOXuJhwrQCTd.2', NULL, NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
