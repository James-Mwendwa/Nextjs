import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h2 className={styles.title}>Homepage</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          quaerat ducimus soluta ea excepturi. Nisi molestias nostrum labore,
          eligendi reiciendis tempore ut accusantium blanditiis laborum, cumque
          saepe. reiciendis tempore ut accusantium blanditiis laborum, cumque
          saepe
        </p>

        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
