import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import InputFormikApp from '../Forms/InputFormikApp'
import style from './contact-form.module.scss'
import ButtonApp from '../ButtonApp'
import InputCheckFormikApp from '../Forms/InputCheckFormikApp '
import { HTTP } from '@/services/http'

/***
 * Enviando los datos a la api proporcionada por Carevision
 */
const sendForm = async (body: {
  firstname: string
  lastname: string
  email: string
  phone: string
}) => {
  try {
    const res = await HTTP.post('https://api.care-vision.de/api/v1/add', body, {
      'Content-Type': 'application/json'
    })
    return true;
  } catch (error) {
    return false;
  }
 
}

/** Form field validation schema*/
const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('Firstname is required'),
  lastname: Yup.string().required('Lastname is required'),
  phone: Yup.string().required('Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required')
})

interface ContactFormProps {
  onSubmitted?: Function
}

/**
 * Component that integrates the contact form with Formik and Yup.The elements of the form are customized
 * @param param0
 * @returns
 */

const ContactForm = ({ onSubmitted }: ContactFormProps) => {
  const [loadin, setloadin] = useState(false)

  return (
    <Formik
      initialValues={{ firstname: '', lastname: '', email: '', phone: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        sendForm(values).then((result) => {
          if(!result) return;
          resetForm()
          onSubmitted ? onSubmitted() : null
        })
      }}
    >
      {() => (
        <Form className={style.contactForm}>
          <div className={style.contactForm_inputs}>
            <div
              className={`${style.contactForm_inputs_container} margin-right-10`}
            >
              <InputFormikApp
                labelID='form.name.input.label'
                type='text'
                name='firstname'
              />
            </div>
            <div className={`${style.contactForm_inputs_container} `}>
              <InputFormikApp
                labelID='form.lastname.input.label'
                type='text'
                name='lastname'
              />
            </div>
            <div
              className={`${style.contactForm_inputs_container} margin-right-10`}
            >
              <InputFormikApp
                labelID='form.phone.input.label'
                type='text'
                name='phone'
              />
            </div>
            <div className={`${style.contactForm_inputs_container}`}>
              <InputFormikApp
                labelID='form.email.input.label'
                type='email'
                name='email'
              />
            </div>
          </div>
          {/* <div>
            <InputCheckFormikApp>
              texto del label
              </InputCheckFormikApp>
          </div> */}
          {!loadin ? (
            <ButtonApp
              labelID='requestInfo.button.label'
              onClick={() => console.log('hola')}
              iconAlign='right'
              buttonType='submit'
            />
          ) : (
            <div>LOADING</div>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
