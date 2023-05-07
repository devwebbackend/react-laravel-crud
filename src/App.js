import * as React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Route , Routes, Link } from 'react-router-dom';
import EditProduct from './components/EditProduct';
import CreateProduct from "./components/CreateProduct";
import ListProduct from "./components/ListProduct";
function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={"/"}>
          products
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={"/"}>
                products <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to={"/product/create"}>
                create
              </Link>
            </li>
            {/*   <li className="nav-item ">
              <Link className="nav-link" to={"/product/edit"}>
            edit
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/product/create" element={<CreateProduct />}></Route>
        <Route path="/product/edit/:id" element={<EditProduct />}></Route>
      {/*   <Route path="/product/edit:id" element={<EditProduct />}></Route>  slash error */}

        <Route path="/" element={<ListProduct />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
