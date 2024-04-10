import "bootstrap/dist/css/bootstrap.min.css";
import User from "./User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./CreateUser";
import UpdateUser from "./Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />}></Route>
          <Route path="/create" element={<CreateUser />}></Route>
          <Route path="/edit/:id" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
