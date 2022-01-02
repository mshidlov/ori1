import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TadaTitle } from "../tada/TadaTitle";

export const BlaBlaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="tada.id" reference="Tada" label="Tada">
          <SelectInput optionText={TadaTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
