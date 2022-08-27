import Pages from "./pages/Pages";
import Category from "./componants/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./componants/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
