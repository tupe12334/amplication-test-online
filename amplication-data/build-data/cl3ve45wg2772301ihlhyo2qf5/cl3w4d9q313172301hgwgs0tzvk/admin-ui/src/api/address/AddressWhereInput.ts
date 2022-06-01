import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  state?: StringNullableFilter;
  zip?: IntNullableFilter;
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
};
