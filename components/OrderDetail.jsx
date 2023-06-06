import { useState } from "react"
import styles from "../styles/OrderDetail.module.css"

const OrderDetail = ({ total, createOrder }) => {
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");
    const [cpf, setCPF] = useState("");

  
    const handleClick = () => {
      createOrder({ customer, cpf, address, total, method: 0 });
    };

    return (
        <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* <h1 className={styles.title}>Você vai pagar R$5 na entrega.</h1> */}
          <div className={styles.item}>
            <label className={styles.label}>Nome e sobrenome:</label>
            <input
              placeholder="Buzz LightYear"
              type="text"
              className={styles.input}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>CPF:</label>
            <input
              placeholder="000.000.000-00"
              type="text"
              className={styles.input}
              onChange={(e) => setCPF(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Telefone:</label>
            <input
              type="text"
              placeholder="(11) 99133-3344"
              className={styles.input}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Endereço</label>
            <textarea
              rows={5}
              placeholder="Rua Exemplo, 45, Bairro Exemplo"
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
    )
}

export default OrderDetail