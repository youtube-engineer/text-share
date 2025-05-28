-- CreateTable
CREATE TABLE "SharedText" (
    "id" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "SharedText_id_key" ON "SharedText"("id");
