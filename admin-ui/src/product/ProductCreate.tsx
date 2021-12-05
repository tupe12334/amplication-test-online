import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput label="Item Price" source="itemPrice" />
        <TextInput label="Description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
