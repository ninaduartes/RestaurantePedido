import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Horários de funcionamento:</h1>
                    <p className={styles.text}>
                        De segunda a sexta
                        <br /> 24 horas por dia
                    </p>
                </div>

                <div className={styles.cardL}>
                    <h1 className={styles.title}>ENCONTRE OS NOSSOS RESTAURANTES</h1>
                    <p className={styles.text}>
                        Em alguns filmes da Pixar.
                        <br /> É possível encontrar os aliens em todas as unidades.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Footer