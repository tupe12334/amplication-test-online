import { Hgj as THgj } from "../api/hgj/Hgj";

export const HGJ_TITLE_FIELD = "id";

export const HgjTitle = (record: THgj): string => {
  return record.id || record.id;
};
