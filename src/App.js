
import styled from 'styled-components';
import HomePage from './components/homePage/HomePage';

const App=()=> {
  return (
    <Wrapper >
     <HomePage/>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
width:100% ;
`
