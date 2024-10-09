import { useEffect, useState } from 'react';
import Navbar from './layouts/Navbar';
import Sidebar from './layouts/Sidebar';
import Homescreen from './screens/Homescreen';


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);


  useEffect(()=>{
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 768);
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
};
  
  

  return (
    <div className="app">
      <Navbar toggleSidebar={toggleSidebar}/>
      <div className="main-content">
         <Sidebar isOpen={isSidebarOpen}/>
         <Homescreen/>
      </div>
    </div>
  );
};

export default App;