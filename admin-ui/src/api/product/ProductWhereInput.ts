import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  itemPrice?: FloatNullableFilter;
  description?: StringNullableFilter;
};
