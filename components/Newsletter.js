import styles from "../styles/Home.module.css"

const Newsletter = () => {
  const handleSubmit = () => {
    window.open("https://buttondown.email/TSBSankara", "popupwindow")
  }

  return (
    <>
      <section className={styles.newsletter}>
        <h2 style={{ textAlign: "center" }}>
          Newsletter and <span className={styles.span}>promo codes</span>
        </h2>
        {/* <div>
          <p>
            By subscribing to my newsletter, you will get access to the latest
            news and promotion codes that I send out and get the most benefits
            out of all the services I provide. Don’t worry, I will never send
            you any spam, and if you are unsatisfied, then you can unsubscribe
            at any time!
          </p>
        </div> */}

        <div>
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/TSBSankara"
            method="post"
            target="popupwindow"
            onSubmit={handleSubmit}
            className={styles.newsletterForm}
          >
            <label htmlFor="bd-email">Enter your email</label>
            <input type="email" name="email" id="bd-email" />
            <input type="hidden" value="1" name="embed" />
            <input type="submit" value="Subscribe" className={styles.btn} />
            <small className={styles.smallText}>
              Receive articles and coupon codes directly to your email. No spam,
              and unsubscribe at any time!
            </small>
            <p>
              <a href="https://buttondown.email" target="_blank">
                Powered by Buttondown.
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  )
}

export default Newsletter
