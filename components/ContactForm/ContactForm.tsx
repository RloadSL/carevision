import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputFormikApp from "../Forms/InputFormikApp";
import { FormattedMessage } from "react-intl";
import style from "./contact-form.module.scss";

/** Form field validation schema*/
const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required")
});

interface ContactFormProps {}

/**
 * Component that integrates the contact form with Formik and Yup.The elements of the form are customized
 * @param param0
 * @returns
 */

const ContactForm = ({}: ContactFormProps) => (
  <Formik
    initialValues={{ name: "", email: "" }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <InputFormikApp labelID="form.contact.label.nameSurname" type="text" name="fullname" />
        <InputFormikApp labelID="form.contact.label.company" type="text" name="company" />
        <InputFormikApp labelID="form.contact.label.phone" type="text" name="phone" />
        <InputFormikApp labelID="form.contact.label.email" type="email" name="email" />
        <button type="submit" disabled={isSubmitting} className={style.button}>
          <span>
            <FormattedMessage id="btn.label.send" />
          </span>
        </button>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
