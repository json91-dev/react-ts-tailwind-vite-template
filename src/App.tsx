import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import MainLayout from '@src/layouts/MainLayout.tsx'
import ArCanvasLayout from '@src/layouts/ArCanvasLayout.tsx'
import NotFoundPage from '@src/pages/nofFound.tsx'
const MainPage = lazy(() => import('@src/pages/main.tsx'))
const BoxPage = lazy(() => import('@src/pages/r3f/box.tsx'))
const BubblePage = lazy(() => import('@src/pages/r3f/bubble/bubble.tsx'))

export default function App() {
  return (
    <Routes>
      {/*<Route element={<MainLayout />}>*/}
      {/*  */}
      {/*</Route>*/}

      <Route index element={<MainPage />} />
      <Route element={<ArCanvasLayout />}>
        <Route path={'/r3f/box'} element={<BoxPage />} />
        <Route path={'/r3f/bubble'} element={<BubblePage />} />
      </Route>
      <Route path='/*' element={<NotFoundPage />} />
    </Routes>
  )
}
