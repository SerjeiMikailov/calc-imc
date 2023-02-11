import React from 'react';
import styles from './app.module.css';
import imclogo from './assets/imclogo.jpg'

const App = () => {
  return (
    <div>
      <header>
        <div className={styles.headerContainer}>
            <img src={imclogo} alt="Loading" width={150}/>
        </div>
      </header>
    </div>
  )
}

export default App;
