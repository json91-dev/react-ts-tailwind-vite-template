import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import MainLayout from '@src/layouts/MainLayout.tsx'
import ArCanvasLayout from '@src/layouts/ArCanvasLayout.tsx'
const MainPage = lazy(() => import('@src/pages/main.tsx'))
const BoxPage = lazy(() => import('@src/pages/r3f/box.tsx'))

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>

      <Route element={<ArCanvasLayout />}>
        <Route path={'/r3f/box'} element={<BoxPage />} />
      </Route>
    </Routes>
  )
}
