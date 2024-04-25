import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed, Dashboard, Create, Signup, Login, MainPage, Upload, Url } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/url" element={<Url/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/upload" element={<Upload/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/employer" >
          <Route path="/employer/dashboard" element={<Dashboard />}/>
          <Route path="/employer/create" element={<Create />}/>
          </Route>
          <Route path="/employee/feed" element={<Feed />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
