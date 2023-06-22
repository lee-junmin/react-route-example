import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import ExternalRedirect from "./external";
 
function App() {
  return (
    <Routes>
      <Route path='/' element={<ul><li>try these urls: /page1 /page2 /page3 /page4</li><li>page3 will redirect to page1</li><li>page 4 will redirect to an external url</li><li>Anything else will redirect back here</li> </ul>} />
      <Route path='page1' element={<p>Component 1. /page3 will redirect back here</p>} />
      <Route path='page2' element={<p>Component 2.</p>} />
      <Route path='page3' element={<Navigate to='/page1' />} />
      <Route path='page4' Component={ExternalRedirect} />
      <Route path='*' element={<Navigate to='/' />} />    
    </Routes>
  );
}
 
export default App;
