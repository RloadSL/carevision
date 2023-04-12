import React from 'react'
import TextApp from '../TextApp'
import style from './button-app.module.scss'

interface ButtonAppProps {
  labelID: string,
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
        <TextApp labelID={labelID} />
      </span>
    </button>
  )
}

export default ButtonApp