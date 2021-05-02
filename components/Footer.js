import { useState } from "react"
import { footer } from "../data/footer"
import styles from "../styles/Home.module.css"

const Footer = () => {
  // eslint-disable-next-line
  const [links, setLinks] = useState(footer)
  return (
    <>
      <footer className={styles.footer}>
        <ul>
          {links.map(({ id, title, url }) => (
            <li key={id}>
              <a href={url} target="_blank" rel="noopenner noreferrer">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  )
}

export default Footer
