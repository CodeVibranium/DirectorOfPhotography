import React from "react";
import AboutUsPage from "../src/pages/AboutUsPage";
import GlobalStyles from "../src/components/GlobalStyles";
import Navbar from "./components/Navbar";
import Work from "../src/pages/WorkPage";
import Contact from "../src/pages/ContactPage";
import MovieDetail from "./pages/MovieDetails";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <AboutUsPage />
        </Route>
        <Route path="/work" exact>
          <Work />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
