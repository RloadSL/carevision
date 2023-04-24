import React from 'react'
import style from './modal.module.scss'

interface ModalProps {
  children:JSX.Element
  onClose: Function
}

const Modal = ({children, onClose}: ModalProps) => {
  const handleModal = () => {
    onClose()
  }

  return(
    <div className={style.modal_overlay}>
      <div className={style.modal_content}>
        <button className={style.close} type='button' onClick={()=>handleModal()}>X</button>
      <div>
        {children}
      </div>
      </div>
    </div>
  )
}

export default Modal