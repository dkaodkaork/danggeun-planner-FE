import Router from "./shared/Router";
import GlobalStyle from "./shared/globalStyle";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
