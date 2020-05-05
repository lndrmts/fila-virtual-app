/*
 Navicat Premium Data Transfer

 Source Server         : zerafilas @ locaweb
 Source Server Type    : MySQL
 Source Server Version : 50717
 Source Host           : zerafilas.mysql.dbaas.com.br:3306
 Source Schema         : zerafilas

 Target Server Type    : MySQL
 Target Server Version : 50717
 File Encoding         : 65001

 Date: 04/05/2020 22:29:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for zf_line
-- ----------------------------
DROP TABLE IF EXISTS `zf_line`;
CREATE TABLE `zf_line`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_ci NULL DEFAULT NULL,
  `status` int(64) NULL DEFAULT NULL,
  `checkIn` datetime(0) NULL DEFAULT NULL,
  `checkOut` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of zf_line
-- ----------------------------
INSERT INTO `zf_line` VALUES (1, '5511971778203', 1, '2020-05-04 22:27:29', NULL);
INSERT INTO `zf_line` VALUES (2, '55985841337', 1, '2020-05-04 22:27:42', NULL);

SET FOREIGN_KEY_CHECKS = 1;
