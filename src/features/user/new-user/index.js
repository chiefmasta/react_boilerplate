import React from "react";
import { useDispatch } from "react-redux";
import { addNewUser } from "./ressources/action";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import Input from "../../../components/ui-kit/Input";
import get from "lodash/get";
import { initialValues } from "./ressources/constant";
export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={get(
          history,
          ["location", "state", "values"],
          initialValues
        )}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          if (values.select === "a") errors.select = "error b";
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(addNewUser(values));
        }}
      >
        {({ isSubmitting, errors, handleChange }) => (
          <Form>
            <Input type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <select name="select" onChange={handleChange}>
              <option key="a">a</option>
              <option key="b">b</option>
            </select>
            <ErrorMessage name="select" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
