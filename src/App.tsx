import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './Styles/Themes/defaultTheme';
import { GlobalStyles } from './Styles/globalStyle';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
