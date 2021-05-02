import styles from "../styles/Home.module.css"

const Books = () => {
  return (
    <>
      <section className={styles.bookGrid}>
        <div>
          <a
            href="https://gumroad.com/tsbsankara"
            target="_blank"
            rel="noopenner noreferrer"
          >
            <img src="/images/figma-book.png" alt="Book Cover" />
          </a>
        </div>
        <div>
          <h3>
            <span className={styles.span}>Buy</span> my eBook
          </h3>
          <p>
            The story behind this book is quite interesting - well, at least for
            me it is. Originally, I had planned to write this book last year
            (2020) around July but I couldn’t get myself to start because I was
            always afraid thinking things like, “What will people say?”, “Will
            they like it?”, “Will anyone read it?” and as explained in the book,
            I got over the fear and began writing the book. When I had the first
            paragraph down, it just began to flow and I continued writing all
            the way to page 57 and that marvel became the book you see to the
            right. Out of this has been borne another book which I am currently
            writing. Be sure to look out for that as well by subscribing below ❤
          </p>
          <a
            href="https://gumroad.com/tsbsankara"
            target="_blank"
            rel="noopenner noreferrer"
            className={styles.btn}
          >
            Buy my eBook for $5.99
          </a>
        </div>
      </section>
    </>
  )
}

export default Books
