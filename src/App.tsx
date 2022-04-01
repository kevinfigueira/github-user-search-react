import { useState } from 'react';

//COMPONENTS
import Container from './components/Container';

//STYLES
import { GitHeader } from './components/GitHeader';
import GitMain from './components/GitMain';
import { GlobalStyles } from './assets/styles/global';
import { ThemeProvider } from 'styled-components';
import light from './assets/styles/light';
import dark from './assets/styles/dark';


function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark : light)
  }
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Container>
        <GitHeader toggleTheme={toggleTheme}/>
        <GitMain/>
      </Container>
    </ThemeProvider>
  )
}

export default App;
