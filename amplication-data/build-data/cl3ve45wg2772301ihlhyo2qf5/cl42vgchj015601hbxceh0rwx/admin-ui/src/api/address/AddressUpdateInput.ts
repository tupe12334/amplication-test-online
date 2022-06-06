import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  city?: string | null;
  state?: string | null;
  zip?: number | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  address_1?: string | null;
  address_2?: string | null;
};
