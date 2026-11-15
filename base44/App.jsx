import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ProtectedRoute from '@/components/ProtectedRoute';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';

// Javne stranice
import PublicLayout from '@/components/public/PublicLayout';
import Home from '@/pages/public/Home';
import MaturaA from '@/pages/public/MaturaA';
import MaturaB from '@/pages/public/MaturaB';
import NacionalniIspit from '@/pages/public/NacionalniIspit';
import Instrukcije from '@/pages/public/Instrukcije';
import OProfesoru from '@/pages/public/OProfesoru';
import CestaPitanja from '@/pages/public/CestaPitanja';
import Prijava from '@/pages/public/Prijava';
import Privatnost, { UvjetiKoristenja, Kolacici } from '@/pages/public/PravneStranice';

// Autentifikacija i administracija
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import ResetPassword from '@/pages/ResetPassword';
import Mfa from '@/pages/Mfa';
import Prijave from '@/pages/admin/Prijave';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      {/* Javne stranice */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/matura-a-razina" element={<MaturaA />} />
        <Route path="/matura-b-razina" element={<MaturaB />} />
        <Route path="/nacionalni-ispit" element={<NacionalniIspit />} />
        <Route path="/instrukcije" element={<Instrukcije />} />
        <Route path="/o-profesoru" element={<OProfesoru />} />
        <Route path="/cesta-pitanja" element={<CestaPitanja />} />
        <Route path="/prijava" element={<Prijava />} />
        <Route path="/privatnost" element={<Privatnost />} />
        <Route path="/uvjeti-koristenja" element={<UvjetiKoristenja />} />
        <Route path="/kolacici" element={<Kolacici />} />
      </Route>

      {/* Autentifikacija */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/mfa" element={<Mfa />} />

      {/* Administracija - pregled prijava */}
      <Route element={<ProtectedRoute unauthenticatedElement={<Navigate to="/login" replace />} />}>
        <Route path="/prijave" element={<Prijave />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App