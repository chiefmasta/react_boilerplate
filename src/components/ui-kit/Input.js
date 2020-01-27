import React from "react";
import { Field } from "formik";
import Input from "../ui-base/Input";

export default props => {
  return (
    <Field
      name={props.name}
      render={({ field, form }) => <Input {...props} {...field} />}
    />
  );
};
