CREATE TABLE "public"."user" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "update_at_custom" Timestamp NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("name"));COMMENT ON TABLE "public"."user" IS E'user table';
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_user_updated_at"
BEFORE UPDATE ON "public"."user"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_user_updated_at" ON "public"."user" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at_custom"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at_custom" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER "set_public_user_updated_at_custom"
BEFORE UPDATE ON "public"."user"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at_custom"();
COMMENT ON TRIGGER "set_public_user_updated_at_custom" ON "public"."user" 
IS 'a custom trigger test on "updated_at_custom" trigger function';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
