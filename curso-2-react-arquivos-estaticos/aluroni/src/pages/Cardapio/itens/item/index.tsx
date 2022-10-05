import logo from 'assets/logo.svg';
import styles from './Item.module.scss';

export default function Item() {
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={logo} alt="Imagem" />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>Macarrão</h2>
                    <p>Desc do macarrão</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__tipo}>
                        Massa
                    </div>
                    <div className={styles.item__porcao}>
                        400g
                    </div>
                    <div className={styles.item__qtdpessoas}>
                        serve 50 pessoas
                    </div>
                    <div className={styles.item__valor}>
                        R$ 50,00
                    </div>
                </div>
            </div>
        </div>
    )
}