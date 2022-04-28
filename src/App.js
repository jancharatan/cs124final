import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StorePage from './pages/StorePage';
import ItemPage from './pages/ItemPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from './pages/PaymentPage';
import ConfirmPage from './pages/ConfirmPage';
import { storeItems } from './data/storeItems';

const App = () => {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/store" element={<StorePage />} exact />
          {Object.keys(storeItems).map(name => (
            <Route path={"/store/" + name.replaceAll(" ", "-").toLowerCase()} element={<ItemPage name={name} />} exact />)
          )}
          {Object.keys(storeItems).map(name => (
            <Route path={"/store/" + name.replaceAll(" ", "-").toLowerCase() + "/checkout"} element={<CheckoutPage />} exact />)
          )}
          {Object.keys(storeItems).map(name => (
            <Route path={"/store/" + name.replaceAll(" ", "-").toLowerCase() + "/checkout/pay"} element={<PaymentPage />} exact />)
          )}
          {Object.keys(storeItems).map(name => (
            <Route path={"/store/" + name.replaceAll(" ", "-").toLowerCase() + "/checkout/confirm"} element={<ConfirmPage />} exact />)
          )}
        </Routes>
      </HashRouter>
  )
}

export default App;
