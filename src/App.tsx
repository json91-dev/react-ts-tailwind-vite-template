import {Route, Routes} from "react-router-dom";
import {lazy} from "react";
import MainLayout from "@src/layouts/MainLayout.tsx";
const MainPage = lazy(() => import('@src/pages/main.tsx'))
const ARPage = lazy(() => import('@src/pages/ar.tsx'))

export default function App() {
  
  return <Routes>
    <Route element={<MainLayout />}>
      <Route index element={<MainPage/>} />
      <Route path={'/ar'} element={<ARPage />} />
    </Route>
  </Routes>
}