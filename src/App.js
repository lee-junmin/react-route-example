import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
 
function App() {
  return (
    <Routes>
      <Route path='/' element={<p>try these urls: /page1 /page2 /page3. anything else will redirect back here</p>} />
      <Route path='page1' element={<p>Component 1. /page3 will redirect back here</p>} />
      <Route path='page2' element={<p>Component 2.</p>} />
      <Route path='page3' element={<Navigate to='/page1' />} />
      <Route path='*' element={<Navigate to='/' />} />    
    </Routes>
  );
}
 
export default App;
