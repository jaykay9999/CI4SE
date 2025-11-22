import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MoatazChouchen from "./pages/speakers/MoatazChouchen";
import BruceMaxim from "./pages/speakers/BruceMaxim";
import MichelChaudron from "./pages/speakers/MichelChaudron";
import LionelBriand from "./pages/speakers/LionelBriand";
import WalidMaalej from "./pages/speakers/WalidMaalej";
import SimonPeytonJones from "./pages/speakers/SimonPeytonJones";
import AhmedHassan from "./pages/speakers/AhmedHassan";
import FatemehFard from "./pages/speakers/FatemehFard";
import RaulaKula from "./pages/speakers/RaulaKula";
import KatsuroInoue from "./pages/speakers/KatsuroInoue";
import SarahNadi from "./pages/speakers/SarahNadi";
import HouariSahraoui from "./pages/speakers/HouariSahraoui";
import AlvineBelle from "./pages/speakers/AlvineBelle";
import ZadiaCodabux from "./pages/speakers/ZadiaCodabux";
import MohamedSaied from "./pages/speakers/MohamedSaied";
import FatimaTambajang from "./pages/speakers/FatimaTambajang";
import ManelAbdellatif from "./pages/speakers/ManelAbdellatif";
import HafedhMili from "./pages/speakers/HafedhMili";
import PrasunLala from "./pages/speakers/PrasunLala";
import YannGaelGueheneuc from "./pages/speakers/YannGaelGueheneuc";
import AbdelmajidKhelil from "./pages/speakers/AbdelmajidKhelil";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.pathname) {
      navigate(redirect);
    }
  }, [navigate]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/ASEAI2025">
        <ScrollToTop />
        <RedirectHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/speakers/moataz-chouchen" element={<MoatazChouchen />} />
          <Route path="/speakers/bruce-maxim" element={<BruceMaxim />} />
          <Route path="/speakers/michel-chaudron" element={<MichelChaudron />} />
          <Route path="/speakers/lionel-briand" element={<LionelBriand />} />
          <Route path="/speakers/walid-maalej" element={<WalidMaalej />} />
          <Route path="/speakers/simon-peyton-jones" element={<SimonPeytonJones />} />
          <Route path="/speakers/ahmed-hassan" element={<AhmedHassan />} />
          <Route path="/speakers/fatemeh-fard" element={<FatemehFard />} />
          <Route path="/speakers/raula-kula" element={<RaulaKula />} />
          <Route path="/speakers/katsuro-inoue" element={<KatsuroInoue />} />
          <Route path="/speakers/sarah-nadi" element={<SarahNadi />} />
          <Route path="/speakers/houari-sahraoui" element={<HouariSahraoui />} />
          <Route path="/speakers/alvine-belle" element={<AlvineBelle />} />
          <Route path="/speakers/zadia-codabux" element={<ZadiaCodabux />} />
          <Route path="/speakers/mohamed-saied" element={<MohamedSaied />} />
          <Route path="/speakers/fatima-tambajang" element={<FatimaTambajang />} />
          <Route path="/speakers/manel-abdellatif" element={<ManelAbdellatif />} />
          <Route path="/speakers/hafedh-mili" element={<HafedhMili />} />
          <Route path="/speakers/prasun-lala" element={<PrasunLala />} />
          <Route path="/speakers/yann-gael-gueheneuc" element={<YannGaelGueheneuc />} />
          <Route path="/speakers/abdelmajid-khelil" element={<AbdelmajidKhelil />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
