import { Fhgsd as TFhgsd } from "../api/fhgsd/Fhgsd";

export const FHGSD_TITLE_FIELD = "id";

export const FhgsdTitle = (record: TFhgsd): string => {
  return record.id || record.id;
};
