import styles from "./page.module.css";

export default function RooMe() {
  return (
    <>
      <header>
        <h1>
          Roo<span className={styles.titleHighlight}>Me</span>
        </h1>
        <h2>
          Find Your Ideal Space, <span>Share It with the Perfect Roommate</span>
        </h2>
        <footer>
          <a href="#main-section">
            Let&apos;s go
            <img src="./images/icons/arrow.svg" width="32px" height="32px" />
          </a>
        </footer>
      </header>
      <main id="main-section">
        <section>
          <h1>1. The place</h1>
          <span className={styles.stepCard}>
            <img src="./images/landing/living_room.jpg" />
            <span className={styles.stepCardContent}>
              <h2>
                Find your ideal place with us. Explore options, set a budget,
                and decide where your next adventure begins.
              </h2>
              <a href="/about">Find your ideal home</a>
            </span>
          </span>
        </section>

        <section>
          <h1>2. The people</h1>
          <span className={styles.stepCard}>
            <img
              style={{ objectPosition: "center" }}
              src="./images/landing/boots.jpg"
            />
            <span className={styles.stepCardContent}>
              <h2>
                Discover a compatible match, share a living space, and embark on
                this journey together.
              </h2>
              <a href="/about">Meet your next roommate</a>
            </span>
          </span>
        </section>
        <section>
          <h1>3. Make an offer</h1>
          <span className={styles.stepCard}>
            <img
              style={{ objectPosition: "center" }}
              src="./images/landing/future.jpg"
            />
            <span className={styles.stepCardContent}>
              <h2>
                Send your offer, secure your new place, and embark on your next
                chapter.
              </h2>
              <a href="/about">Send an offer now</a>
            </span>
          </span>
        </section>
      </main>
      <footer>
        <p>About us</p>
        <p>Contact</p>
      </footer>
    </>
  );
}
