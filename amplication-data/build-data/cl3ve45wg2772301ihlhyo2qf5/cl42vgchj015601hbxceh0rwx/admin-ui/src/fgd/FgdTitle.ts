import { Fgd as TFgd } from "../api/fgd/Fgd";

export const FGD_TITLE_FIELD = "id";

export const FgdTitle = (record: TFgd): string => {
  return record.id || record.id;
};
