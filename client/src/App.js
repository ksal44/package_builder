import React, { useEffect } from 'react';
import './App.css';
import PackagePage from './packagePage';
// import { buildBronzePackage, buildSilverPackage, buildGoldPackage } from './functions';

function App() {
  useEffect(() => {
    fetch('/api/myfunction')
      .then(response => response.text())
      .then(message => {
        console.log(message, "app is Listening!!!!!");
        // const silverPackage = buildSilverPackage('TX', 30, 'Family');
        // console.log(silverPackage);
        // const goldPackage = buildGoldPackage('FL', 30, 'Family');
        // console.log(goldPackage);      
        // const bronzePackage = buildBronzePackage('TX', 22, 'Individual');
        // console.log(bronzePackage);



      });
  }, []);

  return (
    <div>
      <PackagePage />
    </div>
  );
}

export default App;

