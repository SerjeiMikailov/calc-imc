import { Level } from "../helpers/imc"
import styles from "./gridItem.module.css"
import downImg from "../assets/down.png"
import upImg from "../assets/up.png"

type Props = {
    item: Level
}

export const GridItem = ({item}: Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                {item.icon === 'up' && <img src={upImg} alt="Carregando" width="30px"/>}
                {item.icon === 'down' && <img src={downImg} alt="Carregando" width="30px"/>}
            </div>
            <div className={styles.gridTitle}>
                {item.title}
            </div>

            {item.yourImc && 
            <div className={styles.yourImc}>
                Seu Imc é de {item.yourImc} kg/m²
            </div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}   