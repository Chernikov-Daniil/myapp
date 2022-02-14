import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chats } from "../Pages/Chats";
import { Error } from "../Error";
import { Profile } from "../Pages/Profile";
import { Home } from "../Pages/Home";
import "./router.css";
import { ChatList } from "../ChatList";

export const Router = () => (
  <BrowserRouter>
    <ul className="list">
      <li className="list-item">
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li className="list-item">
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
          to="/chats"
        >
          Chats
        </NavLink>
      </li>

      <li className="list-item">
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
          to="/profile"
        >
          Profile
        </NavLink>
      </li>
    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="chats" element={<ChatList />}>
        <Route path=":chatId" element={<Chats />} />
      </Route>
      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
