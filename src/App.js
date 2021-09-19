import { Route, Switch } from "react-router-dom";

import Layout from "./components/ui/Layout/Layout";
import Main from "./pages/main/Main";

function App() {
  return (
    <Switch>
      <Layout>
        <Route path="/" exact>
          <Main />
        </Route>
      </Layout>
    </Switch>
  );
}

export default App;
