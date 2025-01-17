import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { FAQ } from './pages/FAQ';
import { Guide } from './pages/Guide';
import { ProductDetail } from './pages/ProductDetail';
import { SignIn } from './pages/auth/SignIn';
import { SignUp } from './pages/auth/SignUp';
import { Checkout } from './pages/Checkout';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { Toaster } from './components/ui/toaster';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-background">
            <Navigation />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/auth/sign-in" element={<SignIn />} />
                <Route path="/auth/sign-up" element={<SignUp />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </main>
          </div>
          <Toaster />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}