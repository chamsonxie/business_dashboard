import React from 'react';
import style from './App.module.scss'

import Container from './components/Container/Container'
import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">
      <div className={style.app_header}>
        <Header></Header>
      </div>
      <div className={style.app_body}>
        <Container></Container>
      </div>
      <div className={style.app_footer}>
        
      </div>
    </div>
  );
}

export default App;
