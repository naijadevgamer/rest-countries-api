import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.page";
import DetailPage from "./pages/detail/detail.page";

class App extends React.Component {
  render() {
    // const { monsters, searchField } = this.state;

    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/detail" element={<DetailPage />} /> */}
            <Route path="/detail">
              <Route path=":id" element={<DetailPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
