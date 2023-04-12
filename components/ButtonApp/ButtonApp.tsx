import React from 'react'
import { FormattedMessage } from 'react-intl'
import style from './button-app.module.scss'

interface ButtonAppProps {
  labelID?: string,
  onClick: Function,
}

/** Button component for web
 * @param labelID ID for JSON translations
 * @param onClick onClick function
 * @returns 
 */

const ButtonApp = ({labelID, onClick}: ButtonAppProps) => {
  return (
    <button className={style.button} onClick={() => { onClick() }}>
      <span>
        <FormattedMessage id={labelID} />
      </span>
    </button>
  )
}

export default ButtonApp