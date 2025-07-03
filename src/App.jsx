
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import BlogPage from '@/pages/BlogPage';
import DevocionaisPage from '@/pages/DevocionaisPage';
import GenericPage from '@/pages/GenericPage';
import ComunidadePage from '@/pages/ComunidadePage';
import PoliticaPrivacidadePage from '@/pages/PoliticaPrivacidadePage';
import TermosUsoPage from '@/pages/TermosUsoPage';
import PoliticaIAPage from '@/pages/PoliticaIAPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/educacao-financeira" element={<BlogPage categoryFilter="Educação Financeira" />} />
          <Route path="/devocionais" element={<DevocionaisPage />} />
          <Route path="/planejamento-financeiro" element={<GenericPage title="Planejamento Financeiro" />} />
          <Route path="/estudos-biblicos" element={<GenericPage title="Estudos Bíblicos" />} />
          <Route path="/comunidade" element={<ComunidadePage />} />
          <Route path="/metas-e-proposito" element={<GenericPage title="Metas & Propósito" />} />
          <Route path="/sobre" element={<GenericPage title="Sobre Nós" />} />
          <Route path="/contato" element={<GenericPage title="Contato" />} />
          <Route path="/politica-de-privacidade" element={<PoliticaPrivacidadePage />} />
          <Route path="/termos-de-uso" element={<TermosUsoPage />} />
          <Route path="/politica-de-ia" element={<PoliticaIAPage />} />
        </Routes>
        <Toaster />
      </Layout>
    </Router>
  );
}

export default App;
