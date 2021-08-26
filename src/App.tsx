import React from 'react';
import 'bootstrap/scss/bootstrap.scss'
import Header from "./components/Header/Header";
import styles from './App.module.scss'
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
    <div className={styles.app}>
        <Header/>
<MainPage/>
    </div>
  );
}

export default App;
