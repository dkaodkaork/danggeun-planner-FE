import Router from "./shared/Router";
import GlobalStyle from "./shared/GlobalStyle";
import Layout from "./components/layout/Layout";

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
