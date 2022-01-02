import { BlaBla as TBlaBla } from "../api/blaBla/BlaBla";

export const BLABLA_TITLE_FIELD = "id";

export const BlaBlaTitle = (record: TBlaBla): string => {
  return record.id || record.id;
};
