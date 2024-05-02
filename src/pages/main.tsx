import React from 'react'
import MainLayout from '@src/layouts/MainLayout.tsx'
import { Link } from 'react-router-dom'
export default function MainPage() {
  return (
    <div className={'flex h-full w-full items-center  justify-center'}>
      <Link to={'/image'}>
        <div className={'border-2 text-[2rem]'}>페이지 이동 (/image)</div>
      </Link>
    </div>
  )
}
