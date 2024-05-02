import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import MainLayout from '@src/layouts/MainLayout.tsx'
const MainPage = lazy(() => import('@src/pages/main.tsx'))
const ImagePage = lazy(() => import('@src/pages/image.tsx'))

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>
      <Route path={'/image'} element={<ImagePage />} />
    </Routes>
  )
}
