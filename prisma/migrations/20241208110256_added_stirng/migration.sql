/*
  Warnings:

  - You are about to alter the column `text` on the `SharedText` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10000)`.

*/
-- AlterTable
ALTER TABLE "SharedText" ALTER COLUMN "text" SET DATA TYPE VARCHAR(10000);
