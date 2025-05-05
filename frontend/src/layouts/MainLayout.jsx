import Header from '../components/Header'
import Footer from '../components/Footer'
import CTA from '../components/CallToAction'

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <CTA />
      <Footer />
    </>
  )
} 