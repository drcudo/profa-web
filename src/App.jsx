import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
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


const AppRoutes = () => {
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

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App