import React from 'react'
import ContactForm from '../ContactForm'
import style from './hero.module.scss'

interface HeroProps {
}

const Hero = ({}: HeroProps) => {
  return (
    <div className={style.hero}>
      <div className={style.hero_info}>
      <div className={style.hero_info__left}>
texto
        </div>
        <div className={style.hero_info__right}>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Hero