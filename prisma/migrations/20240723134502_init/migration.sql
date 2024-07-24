/*
  Warnings:

  - Added the required column `city` to the `School` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `School` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `School` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `School` ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `contact` VARCHAR(191) NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL;
