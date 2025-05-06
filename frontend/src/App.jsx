import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  )
}
