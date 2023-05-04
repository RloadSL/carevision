import Link from 'next/link'
import React from 'react'
import style from './clinics.module.scss'

interface ClinicsProps {
}

const Clinics = ({}: ClinicsProps) => {
  return (
    <div>
      <Link href="standorte/berlin">
      Berlin
      </Link>
      <Link href="standorte/frankfurt">
      Frankfurt
      </Link>
    </div>
  )
}

export default Clinics