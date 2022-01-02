import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TadaTitle } from "../tada/TadaTitle";

export const BlaBlaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="tada.id" reference="Tada" label="Tada">
          <SelectInput optionText={TadaTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
