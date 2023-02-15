import React, { useState } from 'react';
import styles from './app.module.css';
import imclogo from './assets/imclogo.jpg'
import { GridItem } from './components';
import leftArrowImg from './assets/leftarrow.png'

import { levels, calculateImc, Level } from './helpers/imc';

const App = () => {
const [heightField, setheightField] = useState<number> (0);
const [weightField, setweightField] = useState<number> (0);
const [showItem, setShowItem] = useState<Level | null>(null)


const handleCalculateButton = () => {
  if(heightField && weightField) {
    setShowItem(calculateImc(heightField, weightField))
  } else {
    alert('Preencha todos os campos')
  }
}

const handleBackButton = () => {
  setShowItem(null)
  setheightField(0)
  setweightField(0)
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
              disabled={showItem ? true : false}
              />
              <input 
              type="number"
              placeholder='Digite o seu peso (em kg)'
              value={weightField > 0 ? weightField : ""}
              onChange={e => setweightField(parseFloat(e.target.value))}
              disabled={showItem ? true : false}
              />
              <button disabled={showItem ? true : false} onClick={handleCalculateButton}>Calcular</button>
            </div>
            <div className={styles.rightSide}>
              {!showItem &&
              <div className={styles.grid}>
                  {levels.map((item, key)=> (
                    <GridItem key={key} item={item}/>
                  ))}
              </div>
              }
              {showItem &&
              <div className={styles.rightBig}>
                <div className={styles.rightArrow}>
                  <img onClick={handleBackButton} src={leftArrowImg} alt='Carregando' width={25}/>
                </div>
                <GridItem item={showItem}/>
              </div>
              }
            </div>
      </div>
    </div>
  )
}

export default App;
