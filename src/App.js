import Router from "./shared/Router";
import GlobalStyle from "./shared/globalStyle";
import Layout from "./layout/Layout";
import HelmetComponent from "./shared/HelmetComponent";

function App() {
  return (
    <>
      <HelmetComponent />
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
