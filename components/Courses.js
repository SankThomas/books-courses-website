import styles from "../styles/Home.module.css"

const Courses = () => {
  return (
    <>
      <section className={styles.coursesGrid}>
        <div>
          <h3>
            <span className={styles.span}>Check out</span> my Udemy Course
          </h3>
          <p>
            Just like with the book, I was wondering whether I should really
            make a web development course, because I wasn’t sure I could deliver
            anything that people wanted to buy and learn from - the feedback is
            anything but that. I’ve got good reviews and a few students and I
            appreciate them! In the course, we build a modern Hotel Website
            using HTML and CSS and a bit of JavaScript to enable our toggle
            functionality. Check it out by clicking the link below and learn how
            the modern web works!
          </p>
          <a
            href="https://www.udemy.com/course/tsbdesigns-web-development-course/"
            target="_blank"
            rel="noopenner noreferrer"
            className={styles.btn}
          >
            Get my Udemy Course for $19.99
          </a>
        </div>
        <div>
          <a
            href="https://www.udemy.com/course/tsbdesigns-web-development-course/"
            target="noopenner noreferrer"
          >
            <img src="/images/figma-course.png" alt="" />
          </a>
        </div>
      </section>
    </>
  )
}

export default Courses
