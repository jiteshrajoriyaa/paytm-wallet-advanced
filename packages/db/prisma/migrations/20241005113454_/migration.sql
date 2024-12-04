/*
  Warnings:

  - You are about to drop the `p2pTransaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "p2pTransaction";

-- CreateTable
CREATE TABLE "P2PTransaction" (
    "id" SERIAL NOT NULL,
    "status" "SentOrReceive" NOT NULL,
    "timeStamp" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "P2PTransaction_pkey" PRIMARY KEY ("id")
);
