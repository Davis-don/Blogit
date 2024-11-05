-- DropForeignKey
ALTER TABLE "post_tbl" DROP CONSTRAINT "post_tbl_user_Id_fkey";

-- AddForeignKey
ALTER TABLE "post_tbl" ADD CONSTRAINT "post_tbl_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "user_tbl"("id") ON DELETE CASCADE ON UPDATE CASCADE;
