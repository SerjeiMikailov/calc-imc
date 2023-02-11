import React, { useState } from 'react';
import styles from './app.module.css';
import imclogo from './assets/imclogo.jpg'

import { levels, calculateImc } from './helpers/imc';

const App = () => {
const [heightField, setheightField] = useState<number> (0);
const [weightField, setweightField] = useState<number> (0);
const handleCalculateButton = () => {
  if(heightField && weightField) {
    
  } else {
    alert('Preencha todos os campos')
  }
}

  return (
    <div>
      <header>
        <div className={styles.headerContainer}>
            <img src={imclogo} alt="Loading" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
            <div className={styles.leftSide}>
              <h1>Calcule o seu IMC</h1>
              <p>IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde(OMS) para calcular o peso ideal de cada pessoa.</p>

              <input 
              type="number"
              placeholder='Digite a sua Altura. Ex: 1.5 (em métros)'
              value={heightField > 0 ? heightField : ""}
              onChange={e => setheightField(parseFloat(e.target.value))}
              />
              <input 
              type="number"
              placeholder='Digite o seu peso (em kg)'
              value={weightField > 0 ? weightField : ""}
              onChange={e => setweightField(parseFloat(e.target.value))}
              />
              <button onClick={handleCalculateButton}>Calcular</button>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.grid}>
                  {levels.map((item, key)=> (
                    <div>{item.title}</div>
                  ))}
              </div>
            </div>
      </div>
    </div>
  )
}

export default App;
