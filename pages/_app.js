import "@/styles/app.scss";
import { ThemeProvider } from "@mui/material";
import theme from "@/util/theme";
import Header from "@/components/layout/Header";
import {AuthProvider} from "@/context/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
   
      <ThemeProvider theme={theme}>
      <AuthProvider>
        <Header/>
          <main className="main">
            <Component {...pageProps} />
            <ToastContainer />
          </main>
        </AuthProvider>
      </ThemeProvider>
  );
}

export default MyApp;
