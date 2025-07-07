/*
  Warnings:

  - You are about to drop the column `email` on the `Insurance` table. All the data in the column will be lost.
  - You are about to drop the column `newNcbDiscount` on the `Insurance` table. All the data in the column will be lost.
  - Added the required column `NewNcbDiscount` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emial` to the `Insurance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Insurance" DROP COLUMN "email",
DROP COLUMN "newNcbDiscount",
ADD COLUMN     "NewNcbDiscount" TEXT NOT NULL,
ADD COLUMN     "emial" TEXT NOT NULL,
ALTER COLUMN "newDueDate" SET DATA TYPE TEXT,
ALTER COLUMN "newIssueDate" SET DATA TYPE TEXT,
ALTER COLUMN "premium" SET DATA TYPE TEXT,
ALTER COLUMN "dob" SET DATA TYPE TEXT,
ALTER COLUMN "annualIncome" SET DATA TYPE TEXT,
ALTER COLUMN "nomineeAge" SET DATA TYPE TEXT,
ALTER COLUMN "issueDate" SET DATA TYPE TEXT,
ALTER COLUMN "dueDate" SET DATA TYPE TEXT,
ALTER COLUMN "ncbDiscount" SET DATA TYPE TEXT;
