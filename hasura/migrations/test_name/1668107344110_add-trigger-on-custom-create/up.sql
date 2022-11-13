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
IS 'VALUE of column "updated_at_custom" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;