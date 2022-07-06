import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./components/addUser/AddUser";
import UpdateUser from "./components/updateUser/UpdateUser";
import UserList from "./components/userList/UserList";


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AddUser/>} />
            <Route path="/home" element={<AddUser/>} />
            <Route path="/user-list" element={<UserList/>} />
            <Route path="/updateUser/:id" element={<UpdateUser/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
