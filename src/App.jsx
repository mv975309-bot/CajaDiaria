import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Caja from "./paginas/Caja";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/caja" replace />} />
        <Route path="/caja" element={<MainLayout><Caja /></MainLayout>} />
        <Route path="*" element={<Navigate to="/caja" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
