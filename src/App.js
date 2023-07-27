import React from 'react';
//  import './App.css'; 
import PrimaryNavbar from './components/navbar/primarynavbar';
import SecondaryNavbar from './components/navbar/secondrynavbar';
import OldPage from './components/page/oldpage/oldpage';
import HomePage from './components/page/home/home';
function App() {
  return (
    <div className="App">
      <PrimaryNavbar />
      <SecondaryNavbar />
      <HomePage/>
      <OldPage/>
    </div>
  );
}
export default App;

