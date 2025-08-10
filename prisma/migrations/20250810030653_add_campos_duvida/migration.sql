/*
  Warnings:

  - Added the required column `email` to the `duvidas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `duvidas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."duvidas" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;
