/*
  Warnings:

  - You are about to drop the column `Email` on the `user_tbl` table. All the data in the column will be lost.
  - You are about to drop the column `first_Name` on the `user_tbl` table. All the data in the column will be lost.
  - You are about to drop the column `last_Name` on the `user_tbl` table. All the data in the column will be lost.
  - You are about to drop the column `user_Name` on the `user_tbl` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `user_tbl` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userName]` on the table `user_tbl` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "user_tbl_Email_key";

-- DropIndex
DROP INDEX "user_tbl_user_Name_key";

-- AlterTable
ALTER TABLE "user_tbl" DROP COLUMN "Email",
DROP COLUMN "first_Name",
DROP COLUMN "last_Name",
DROP COLUMN "user_Name",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "userName" TEXT;

-- CreateTable
CREATE TABLE "post_tbl" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "excerpt" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "post_tbl_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_tbl_email_key" ON "user_tbl"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_tbl_userName_key" ON "user_tbl"("userName");

-- AddForeignKey
ALTER TABLE "post_tbl" ADD CONSTRAINT "post_tbl_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user_tbl"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
