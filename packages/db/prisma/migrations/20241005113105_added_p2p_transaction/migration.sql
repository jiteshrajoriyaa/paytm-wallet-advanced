-- CreateEnum
CREATE TYPE "SentOrReceive" AS ENUM ('Sent', 'Received');

-- CreateTable
CREATE TABLE "p2pTransaction" (
    "id" SERIAL NOT NULL,
    "status" "SentOrReceive" NOT NULL,
    "timeStamp" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "p2pTransaction_pkey" PRIMARY KEY ("id")
);
