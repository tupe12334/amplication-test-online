import { HgjWhereInput } from "./HgjWhereInput";
import { HgjOrderByInput } from "./HgjOrderByInput";

export type HgjFindManyArgs = {
  where?: HgjWhereInput;
  orderBy?: Array<HgjOrderByInput>;
  skip?: number;
  take?: number;
};
