import HomePage from './HomePage'
import ProductPage from './ProductPageLive'

export default function App() {
  return window.location.pathname.endsWith('/paquetes.html') ? (
    <ProductPage />
  ) : (
    <HomePage />
  )
}
