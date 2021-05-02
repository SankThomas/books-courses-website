import Link from "next/link"
import styles from "../styles/Home.module.css"

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link href="/">
            <a>
              <h2>Sankara's Pitch To You</h2>
            </a>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
