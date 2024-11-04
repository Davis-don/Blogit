/*
  Warnings:

  - Made the column `email` on table `user_tbl` required. This step will fail if there are existing NULL values in that column.
  - Made the column `firstName` on table `user_tbl` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastName` on table `user_tbl` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userName` on table `user_tbl` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user_tbl" ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "firstName" SET NOT NULL,
ALTER COLUMN "lastName" SET NOT NULL,
ALTER COLUMN "userName" SET NOT NULL;
