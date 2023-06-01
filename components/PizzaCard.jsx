import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="200" height="200" />
      <h1 className={styles.title}>Pizza Planet</h1>
        <span className={styles.price}>R$19.90</span>
        <p className={styles.desc}>
            Pizza com molho de tomate
        </p>
    </div>
  );
};

export default PizzaCard;