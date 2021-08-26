import React from 'react';
import 'bootstrap/scss/bootstrap.scss'
import Header from "./components/Header/Header";
import styles from './App.module.scss'


function App() {
  return (
    <div className={styles.app}>
        <Header/>
    </div>
  );
}

export default App;
