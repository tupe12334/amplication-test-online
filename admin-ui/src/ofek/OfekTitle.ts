import { Ofek as TOfek } from "../api/ofek/Ofek";

export const OFEK_TITLE_FIELD = "id";

export const OfekTitle = (record: TOfek): string => {
  return record.id || record.id;
};
