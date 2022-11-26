import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.page";
import DetailPage from "./pages/detail/detail.page";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      themeLight: true,
    };
  }

  render() {
    const { themeLight } = this.state;
    const body = document.body;
    if (!themeLight) {
      body.style.backgroundColor = "hsl(207, 26%, 17%)";
    } else {
      body.style.backgroundColor = "hsl(0, 0%, 98%)";
    }
    const switchTheme = () => {
      this.setState({ themeLight: !themeLight });
    };
    return (
      <Router>
        <div className="App" data-theme={themeLight ? "" : "dark"}>
          <Header switchTheme={switchTheme} />
          <Routes>
            <Route path="/" element={<HomePage />} />
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
