import { Layout } from "~/components";
import { Dashboard } from "~/pages";

import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
