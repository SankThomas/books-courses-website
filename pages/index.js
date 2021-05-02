import Head from "next/head"
import Books from "../components/Books"
import Courses from "../components/Courses"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TsbSankara Books and Courses</title>
        <meta
          name="description"
          content="TsbSankara Books and Courses Website bootstraped with create-next-app from vercel"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Books />
      <Courses />
      <Newsletter />
      <Footer />
    </div>
  )
}
