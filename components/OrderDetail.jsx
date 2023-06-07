import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [cpf, setCPF] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, cpf, address, total, status:0, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay $12 after delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Nome e sobrenome</label>
          <input
            placeholder="John Doe"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>CPF</label>
          <input
            placeholder="000.000.000-00"
            type="text"
            className={styles.input}
            onChange={(e) => setCPF(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Telefone</label>
          <input
            type="text"
            placeholder="+1 234 567 89"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Endereço</label>
          <textarea
            rows={5}
            placeholder="Elton St. 505 NY"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Pedir
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
