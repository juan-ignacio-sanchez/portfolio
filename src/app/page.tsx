import Image from 'next/image'
import styles from './page.module.css'

function PageCard({ title, description }: { title: string, description: string }) {

  return (
    <a
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        {title}
      </h2>
      <p>{description}</p>
    </a>
  )
}

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <div className={styles.description}>
          <Image
            src="./images/profile.jpg"
            alt="Profile picture"
            className={styles.profilePicture}
            width={200}
            height={200}
            priority
          />
        </div>
        <h2 className={styles.profileName}>Juan Ignacio Sánchez Sampayo</h2>
        <div className={styles.description}>

          <p>I am a senior backend engineer, based in Montevideo, Uruguay, and have 9+ years
            of experience working with Python/Django and similar technologies. I build systems,
            robust RESTful APIs and web applications for many clients, focusing on the product,
            finding solutions with autonomy, well balanced regarding delivery time and quality.
            My strongest suit is in backend technologies but I`&apos;`m currently learning React/Next.js, this website is powered by such framework.</p>
        </div>
      </div>


      <div className={styles.grid}>
        <PageCard title="Contact Information" description="If you would like to do business, please reach out!" />
        <PageCard title="Work Experience" description="If you would like to do business, please reach out!" />
        <PageCard title="Education" description="If you would like to do business, please reach out!" />
        <PageCard title="Personal Projects" description="If you would like to do business, please reach out!" />
      </div>
    </main>
  )
}
