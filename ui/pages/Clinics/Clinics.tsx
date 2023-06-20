import Link from 'next/link'
import React from 'react'
import style from './clinics.module.scss'
import RLDMap from '@/components/RLDMap'

interface ClinicsProps {
}

const Clinics = ({}: ClinicsProps) => {
  return (
    <div>
      <Link href="/standorte/berlin">
      Berlin
      </Link>
      <Link href="/standorte/frankfurt">
      Frankfurt
      </Link>
      <RLDMap></RLDMap>
    </div>
  )
}

export default Clinics