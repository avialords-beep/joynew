/*
 * App.tsx — JoyCasino SEO
 * Style: Editorial Trust Design
 * Routes: /, /obzory/joycasino, /bonusy, /igry/avtomaty, /igry/live-kazino, /faq, /o-nas
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ReviewPage from "./pages/ReviewPage";
import BonusPage from "./pages/BonusPage";
import SlotsPage from "./pages/SlotsPage";
import LiveCasinoPage from "./pages/LiveCasinoPage";
import FaqPage from "./pages/FaqPage";
import AboutPage from "./pages/AboutPage";
import ResponsiblePage from "./pages/ResponsiblePage";
import PrivacyPage from "./pages/PrivacyPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/obzory/joycasino" component={ReviewPage} />
      <Route path="/bonusy" component={BonusPage} />
      <Route path="/igry/avtomaty" component={SlotsPage} />
      <Route path="/igry/live-kazino" component={LiveCasinoPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/o-nas" component={AboutPage} />
      <Route path="/otvetstvennaya-igra" component={ResponsiblePage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
