/*
  Warnings:

  - Added the required column `coverage` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `features` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insurer` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ncb` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newBranch` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newDueDate` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newInsuranceCompany` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newIssueDate` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newNcbDiscount` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newPolicyNumber` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `newPolicyType` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `premium` to the `Insurance` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `dob` on the `Insurance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `annualIncome` on the `Insurance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `nomineeAge` on the `Insurance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `issueDate` on the `Insurance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dueDate` on the `Insurance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ncbDiscount` on the `Insurance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Insurance" ADD COLUMN     "coverage" TEXT NOT NULL,
ADD COLUMN     "features" TEXT NOT NULL,
ADD COLUMN     "insurer" TEXT NOT NULL,
ADD COLUMN     "ncb" TEXT NOT NULL,
ADD COLUMN     "newBranch" TEXT NOT NULL,
ADD COLUMN     "newDueDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "newInsuranceCompany" TEXT NOT NULL,
ADD COLUMN     "newIssueDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "newNcbDiscount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "newPolicyNumber" TEXT NOT NULL,
ADD COLUMN     "newPolicyType" TEXT NOT NULL,
ADD COLUMN     "premium" DOUBLE PRECISION NOT NULL,
DROP COLUMN "dob",
ADD COLUMN     "dob" TIMESTAMP(3) NOT NULL,
DROP COLUMN "annualIncome",
ADD COLUMN     "annualIncome" DOUBLE PRECISION NOT NULL,
DROP COLUMN "nomineeAge",
ADD COLUMN     "nomineeAge" INTEGER NOT NULL,
DROP COLUMN "issueDate",
ADD COLUMN     "issueDate" TIMESTAMP(3) NOT NULL,
DROP COLUMN "dueDate",
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL,
DROP COLUMN "ncbDiscount",
ADD COLUMN     "ncbDiscount" DOUBLE PRECISION NOT NULL;
