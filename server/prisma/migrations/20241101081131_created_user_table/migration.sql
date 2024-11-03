-- CreateTable
CREATE TABLE "user_tbl" (
    "id" SERIAL NOT NULL,
    "first_Name" TEXT NOT NULL,
    "last_Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "user_Name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_tbl_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_tbl_Email_key" ON "user_tbl"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "user_tbl_user_Name_key" ON "user_tbl"("user_Name");
