import { Tada as TTada } from "../api/tada/Tada";

export const TADA_TITLE_FIELD = "id";

export const TadaTitle = (record: TTada): string => {
  return record.id || record.id;
};
