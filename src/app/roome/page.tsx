import styles from "./page.module.css";

export default function RooMe() {
  return (
    <>
      <header>
        <h1>
          Roo<span className={styles.titleHighlight}>Me</span>
        </h1>
        <h2>
          Find the right place, <span>with the right people</span>
        </h2>
        <footer>
          <a href="#main-section">
            Let's see how
            <img src="./images/icons/arrow.svg" width="32px" height="32px" />
          </a>
        </footer>
      </header>
      <main id="main-section">
        <section>
          <h1>1. Find a place</h1>
          <p>
            As they rounded a bend in the path that ran beside the river, Lara
            recognized the silhouette of a fig tree atop a nearby hill. The
            weather was hot and the days were long. The fig tree was in full
            leaf, but not yet bearing fruit. Soon Lara spotted other
            landmarks—an outcropping of limestone beside the path that had a
            silhouette like a man’s face, a marshy spot beside the river where
            the waterfowl were easily startled, a tall tree that looked like a
            man with his arms upraised. They were drawing near to the place
            where there was an island in the river. The island was a good spot
            to make camp.
          </p>
        </section>

        <section>
          <h2>2. Find people interested in that place</h2>
          <p>
            As they rounded a bend in the path that ran beside the river, Lara
            recognized the silhouette of a fig tree atop a nearby hill. The
            weather was hot and the days were long. The fig tree was in full
            leaf, but not yet bearing fruit. Soon Lara spotted other
            landmarks—an outcropping of limestone beside the path that had a
            silhouette like a man’s face, a marshy spot beside the river where
            the waterfowl were easily startled, a tall tree that looked like a
            man with his arms upraised. They were drawing near to the place
            where there was an island in the river. The island was a good spot
            to make camp.
          </p>
        </section>
        <section>
          <h2>3. Make an offer</h2>
          <p>
            As they rounded a bend in the path that ran beside the river, Lara
            recognized the silhouette of a fig tree atop a nearby hill. The
            weather was hot and the days were long. The fig tree was in full
            leaf, but not yet bearing fruit. Soon Lara spotted other
            landmarks—an outcropping of limestone beside the path that had a
            silhouette like a man’s face, a marshy spot beside the river where
            the waterfowl were easily startled, a tall tree that looked like a
            man with his arms upraised. They were drawing near to the place
            where there was an island in the river. The island was a good spot
            to make camp.
          </p>
        </section>
      </main>
    </>
  );
}
