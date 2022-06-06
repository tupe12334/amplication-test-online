import { FgdWhereInput } from "./FgdWhereInput";
import { FgdOrderByInput } from "./FgdOrderByInput";

export type FgdFindManyArgs = {
  where?: FgdWhereInput;
  orderBy?: Array<FgdOrderByInput>;
  skip?: number;
  take?: number;
};
