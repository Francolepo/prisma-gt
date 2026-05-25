import HomePage from './HomePage'
import ProductPage from './ProductPageLive'
import { mountPage } from './bootstrap'

const Page =
  window.location.pathname.endsWith('/paquetes.html') ? ProductPage : HomePage

mountPage(Page)
