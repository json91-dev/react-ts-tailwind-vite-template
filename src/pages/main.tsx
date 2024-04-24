import React from 'react'
import MainLayout from '@src/layouts/MainLayout.tsx'
import { useNavigate } from 'react-router-dom'
export default function MainPage() {
  const navigate = useNavigate()
  return (
    <div className={'flex justify-center border-2 text-[2rem]'} onClick={() => navigate('/ar')}>
      <p>AR 페이지 이동2</p>
    </div>
  )
}
