import Image from "next/image"
import styles from "../styles/Navbar.module.css"


const Navbar = () => {
    return (
        <div className={styles.container}>


        <div className={styles.item}>
        <Image src="/img/logoWhite.png" alt="" width={160} height={69}/>
            <ul className={styles.list}>
                <li className={styles.listItem}>Menu</li>
                <li className={styles.listItem}>Pedidos</li>


            </ul>
        </div>
        <div className={styles.item}>
            <li className={styles.listItemL}>Login Funcionários</li>
            <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width={30} height={30}/>
            <div className={styles.counter}>2</div>
            </div>
        </div>


        </div>
    );
};

export default Navbar;