import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PizzaList from '@/components/PizzaList'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home({pizzaList}) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Planet</title>
        <meta name="description" content="Pizza Planet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PizzaList pizzaList={pizzaList}/>
      </div>
  );
}

export const getServerSideProps = async() =>{
  const res = await axios.get("http://localhost:3000/api/products");
  return{
    props:{
      pizzaList: res.data,
    },
  }
};
