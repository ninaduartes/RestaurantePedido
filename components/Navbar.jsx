import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux";
import Link from "next/link";


const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);

  const handleOrderSearch = () => {
    window.location.href = '/orders/cpf';
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/logoWhite.png" alt="" width={160} height={69} />
        <ul className={styles.list}>
          <Link href="/">
            <li className={styles.listItem}>Menu</li>
          </Link>
          <li className={styles.listItem} onClick={handleOrderSearch}>Pedidos</li>
        </ul>
      </div>
      <Link href="/admin/login">
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItemL}>Login Funcionários</li>
          </ul>
        </div>
      </Link>
      <Link href="/cart">
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width={30} height={30} />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;