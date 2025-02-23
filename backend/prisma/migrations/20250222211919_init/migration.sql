/*
  Warnings:

  - Added the required column `type` to the `Brain` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brain" ADD COLUMN     "type" TEXT NOT NULL;
