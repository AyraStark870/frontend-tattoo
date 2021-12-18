import '../styles/globals.css'
//import { StoreProvider } from "../utils/Store";
import  {CRMContext, CRMProvider} from "../utils/CRMContext";
import { useContext } from "react";

function MyApp({ Component, pageProps }) {

    const [auth, guardarAuth] = useContext(CRMContext);

   return (
     <CRMProvider value={[auth, guardarAuth]}>
       <Component {...pageProps} />
     </CRMProvider>
    //  <StoreProvider>
    //    <Component {...pageProps} />
    //  </StoreProvider>
   );
}

export default MyApp
