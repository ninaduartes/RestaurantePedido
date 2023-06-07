import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Cpf.module.css";
import Image from "next/image";
import axios from "axios";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      const intervalId = setInterval(tick, delay);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [delay]);
};

const Order = () => {
  const router = useRouter();
  const [cpf, setCpf] = useState("");
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/orders?cpf=${cpf}`);
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (cpf) {
      fetchOrders();
    }
  }, [cpf]);

  useInterval(() => {
    fetchOrders();
  }, 30000);

  const getOrderStatusText = (status) => {
    switch (status) {
      case 0:
        return "Recebido";
      case 1:
        return "Preparando";
      case 2:
        return "A caminho";
      case 3:
        return "Entregue";
      default:
        return "";
    }
  };

  const handleOrderDetails = (orderId) => {
    router.push(`/orders/${orderId}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form submission from refreshing the page

    try {
      const res = await axios.get(`http://localhost:3000/api/orders?cpf=${cpf}`);
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor="cpfInput">Digite seu CPF:</label>
          <input
            id="cpfInput"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.buttonSub}>
          Pesquisar
        </button>
      </form>
      <h1>Pedidos:</h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order._id} className={styles.left}>
            <div className={styles.row}>
              <table className={styles.table}>
                <tbody>
                  <tr className={styles.trTitle}>
                    <th>ID Pedido</th>
                    <th>Cliente</th>
                    <th>CPF</th>
                    <th>Endereço</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Detalhe do pedido</th>
                  </tr>
                  <tr className={styles.tr}>
                    <td>
                      <span className={styles.id}>{order._id}</span>
                    </td>
                    <td>
                      <span className={styles.name}>{order.customer}</span>
                    </td>
                    <td>
                      <span className={styles.cpf}>{order.cpf}</span>
                    </td>
                    <td>
                      <span className={styles.address}>{order.address}</span>
                    </td>
                    <td>
                      <span className={styles.total}>${order.total}</span>
                    </td>
                    <td>
                      <span className={styles.statusText}>{getOrderStatusText(order.status)}</span>
                    </td>
                    <td>
                      <button
                        className={styles.detailsButton}
                        onClick={() => handleOrderDetails(order._id)}
                      >
                        Detalhes
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))
      ) : (
        <p>No orders found for the given CPF.</p>
      )}
    </div>
  );
};

export default Order;
