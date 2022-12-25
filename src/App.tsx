import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './Styles/Themes/defaultTheme';
import { GlobalStyles } from './Styles/globalStyle';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes';
import { PostContextProvider } from './Contexts/postContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <PostContextProvider>
          <Router />
        </PostContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
