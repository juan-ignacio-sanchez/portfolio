import Link from "next/link";
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
      <nav className={styles.menu}>
        <p>
          <span>Roo</span>
          <span className={styles.titleHighlight}>Me</span>
        </p>
        <img src="/images/icons/menu.svg" width="32px" />
      </nav>
      <header className={styles.header}>
        <div>
          <h1>
            Your Home Awaits<span className={styles.titleHighlight}>.</span>
          </h1>
          <p>Join the revolution in co-living with RooMe</p>
          <Link href="/" className={styles.callToAction}>
            Start for free
          </Link>
        </div>
      </header>
      <main>
        <div className={styles.bulletList}>
          <h2>
            Co-Living, <span className={styles.titleHighlight}>Simplified</span>
          </h2>
          <img src="/images/landing/coffee_break.svg" />
          <p>
            Explore across hundreds of beautiful houses, set your budget and we
            will find great options for you
          </p>
          <hr></hr>

          <h2>
            Use your time in what{" "}
            <span className={styles.titleHighlight}>matters the most</span>
          </h2>
          <img src="/images/landing/learning.svg" />
          <p>
            Don't waste time and money looking day after day for the perfect
            place, let us find it for you.
          </p>
          <hr></hr>

          <h2>
            Start building your{" "}
            <span className={styles.titleHighlight}>next chapter!</span>
          </h2>
          <img src="/images/landing/house.svg" />
          <p>The perfect house is around the corner, just one click away!</p>
          <Link href="/" className={styles.callToAction}>
            Stay tuned!
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Made with ❤️ by Juan</p>
        <a href="https://storyset.com/people">
          People illustrations by Storyset
        </a>
      </footer>
    </>
  );
}
