-- AlterTable
CREATE SEQUENCE sharedtext_id_seq;
ALTER TABLE "SharedText" ALTER COLUMN "id" SET DEFAULT nextval('sharedtext_id_seq'),
ADD CONSTRAINT "SharedText_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE sharedtext_id_seq OWNED BY "SharedText"."id";

-- DropIndex
DROP INDEX "SharedText_id_key";
