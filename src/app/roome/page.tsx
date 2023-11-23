import styles from "./page.module.css";

// const pacifico = Pacifico({ subsets: ["latin"] });

function Section({
  title,
  description,
  imgSrc,
}: {
  title: string;
  description: string;
  imgSrc: string;
}) {
  let titleArr = title.trim().split(" ");
  let titleHead = titleArr.slice(0, -1).join(" ");
  let titleTail = titleArr.slice(-1).join(" ");

  return (
    <>
      <section>
        <h1>
          {titleHead} <span className={styles.titleHighlight}>{titleTail}</span>
        </h1>
        <span className={styles.stepCard}>
          <img src={imgSrc} />
          <span className={styles.stepCardContent}>
            <p>{description}</p>
          </span>
        </span>
      </section>
    </>
  );
}

export default function RooMe() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <nav>
            <p>
              <span>Roo</span>
              <span className={styles.titleHighlight}>Me</span>
            </p>
            <img src="/images/icons/menu.svg" width="32px" />
          </nav>

          <h1>
            Your Home Awaits<span className={styles.titleHighlight}>.</span>
          </h1>
          <p>Join the revolution in co-living with RooMe</p>
          <button>Start for free</button>
        </div>
      </header>
      <main>
        <div className={styles.bulletList}>
          <h1>
            Co-Living, <span className={styles.titleHighlight}>Simplified</span>
          </h1>
          <img src="/images/landing/coffee_break.svg" />
          <p>
            Explore across hundreds of beautiful houses, set your budget and
            will find great options for you
          </p>
          <img src="/images/landing/step1_0.jpg" />
          <h2>Share the space with the perfect match</h2>
          <p>
            Finding a roommate can be hard but with our AI powered system
            connecting with people matching your core values has never been
            easier
          </p>
          <img src="/images/landing/boots.jpg" />
          <h2>Affordable but neat</h2>
          <p>Explore across hundreds of beautiful houses</p>
          <img src="/images/landing/coffee.jpg" />
        </div>
      </main>
    </>
  );
}
