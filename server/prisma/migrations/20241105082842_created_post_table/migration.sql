-- CreateTable
CREATE TABLE "post_tbl" (
    "id" SERIAL NOT NULL,
    "blog_img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "user_Id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "post_tbl_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "post_tbl" ADD CONSTRAINT "post_tbl_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "user_tbl"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
