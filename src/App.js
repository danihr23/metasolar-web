import styled from "styled-components";
import HomePage from "./components/homePage/HomePage";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Navigation logoleft={'43px'} isWallet={true}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer/>
      </Wrapper>
    </Router>
  );
};

export default App;

const Wrapper = styled.div`
  width: 100%;
`;
