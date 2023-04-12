import React from 'react'
import { FormattedMessage } from 'react-intl'
import ContactForm from '../ContactForm/ContactForm'
import Footer from '../Footer'
import style from './bottom-section.module.scss'

interface BottomSectionProps {
}

/**
 * Component that includes the bottom section of the web with the contact form and the footer. It will appear in all pages
 * @param param0 
 * @returns 
 */

const BottomSection = ({ }: BottomSectionProps) => {
  return (
    <div className={style.bottomSection}>
      <div className={style.bottomSection_top}>
        <div className={style.bottomSection_content}>
          <div className={style.flexContainer}>
            <h3>
              <FormattedMessage id='section.contact.title' />
            </h3>
            <div className={style.form}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div className={style.bottomSection_bottom}>
        <Footer />
      </div>
    </div>
  )
}

export default BottomSection