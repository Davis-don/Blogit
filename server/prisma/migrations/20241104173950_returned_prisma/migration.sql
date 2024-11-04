/*
  Warnings:

  - You are about to drop the column `email` on the `user_tbl` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `user_tbl` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `user_tbl` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `user_tbl` table. All the data in the column will be lost.
  - You are about to drop the `post_tbl` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[Email]` on the table `user_tbl` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_Name]` on the table `user_tbl` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Email` to the `user_tbl` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_Name` to the `user_tbl` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_Name` to the `user_tbl` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_Name` to the `user_tbl` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "post_tbl" DROP CONSTRAINT "post_tbl_userId_fkey";

-- DropIndex
DROP INDEX "user_tbl_email_key";

-- DropIndex
DROP INDEX "user_tbl_userName_key";

-- AlterTable
ALTER TABLE "user_tbl" DROP COLUMN "email",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "userName",
ADD COLUMN     "Email" TEXT NOT NULL,
ADD COLUMN     "first_Name" TEXT NOT NULL,
ADD COLUMN     "last_Name" TEXT NOT NULL,
ADD COLUMN     "user_Name" TEXT NOT NULL;

-- DropTable
DROP TABLE "post_tbl";

-- CreateIndex
CREATE UNIQUE INDEX "user_tbl_Email_key" ON "user_tbl"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "user_tbl_user_Name_key" ON "user_tbl"("user_Name");
