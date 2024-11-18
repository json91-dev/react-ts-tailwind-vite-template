import { Route, Routes, Navigate } from 'react-router-dom'
import { lazy } from 'react'
const MainPage = lazy(() => import('@src/pages/main.tsx'))
const ImagePage = lazy(() => import('@src/pages/image.tsx'))

export default function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path={'/image'} element={<ImagePage />} />
      <Route path='/*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}
