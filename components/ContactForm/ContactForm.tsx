import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputFormikApp from "../Forms/InputFormikApp";
import style from "./contact-form.module.scss";
import ButtonApp from "../ButtonApp";
import InputCheckFormikApp from "../Forms/InputCheckFormikApp ";

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
      <Form className={style.contactForm}>
        <div className={style.contactForm_inputs}>
          <div className={`${style.contactForm_inputs_container} margin-right-10`}>
            <InputFormikApp labelID="form.name.input.label" type="text" name="email" />
          </div>
          <div className={`${style.contactForm_inputs_container} `}>
            <InputFormikApp labelID="form.lastname.input.label" type="text" name="email" />
          </div>
          <div className={`${style.contactForm_inputs_container} margin-right-10`}>
            <InputFormikApp labelID="form.phone.input.label" type="text" name="email" />
          </div>
          <div className={`${style.contactForm_inputs_container}`}>
            <InputFormikApp labelID="form.email.input.label" type="email" name="email" />
          </div>
        </div>
        {/* <div>
          <InputCheckFormikApp>
            texto del label
            </InputCheckFormikApp>
        </div> */}
        <ButtonApp
          labelID="requestInfo.button.label"
          onClick={() => console.log("hola")}
          iconAlign="right"
          buttonType="submit"
        />
      </Form>
    )}
  </Formik>
);

export default ContactForm;
