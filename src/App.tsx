import { Helmet } from "react-helmet";
import Router from "./Router";

function App() {
  return (
    <>
      {/* Google Tag Manager no HEAD */}
      <Helmet>
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PVBDZDCF');`}
        </script>
      </Helmet>

      {/* Google Tag Manager no BODY */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PVBDZDCF"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Carrega as rotas da aplicação */}
      <Router />
    </>
  );
}

export default App;
