"use client"
import { Roboto } from '@next/font/google'
import confetti from 'canvas-confetti'
import Image from 'next/image'
import { useState } from 'react'
import styles from './page.module.css'


const roboto = Roboto({ subsets: ['latin'], weight: "400" })

function Profile({ displayProfile = true, toggleProfile }: { displayProfile: boolean, toggleProfile: any }) {
  return (
    <div style={{ display: displayProfile ? 'flex' : 'none' }} className={styles.profile}>
      <Image
        src="./images/profile.jpg"
        alt="Profile picture"
        className={styles.profilePicture}
        width={0}
        height={0}
        priority
        onClick={() => confetti()}
      />
      <h2 className={styles.profileName}>Juan Ignacio Sánchez Sampayo</h2>

      <p className={styles.description}>I am a senior backend engineer, based in Montevideo, Uruguay, and have 9+ years
        of experience working with Python/Django and similar technologies. I build systems,
        robust RESTful APIs and web applications for many clients, focusing on the product,
        finding solutions with autonomy, well balanced regarding delivery time and quality.
        My strongest suit is in backend technologies but I am currently learning React/Next.js, this website is powered by such framework.</p>
    </div>
  )
}

function PageCard({ initialTitle, description, icon }: { initialTitle: string, description: string, icon: string }) {
  const [title, setTitle] = useState(initialTitle);

  return (
    <a
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={`./images/${icon}.svg`}
        alt="Profile picture"
        width={100}
        height={100}
        priority
        onClick={() => confetti()}
      />

      <span>
        <h2>
          {title}
        </h2>
        <p>{description}</p>
      </span>

    </a >
  )
}

export default function Home() {
  const [displayProfile, setDisplayProfile] = useState(true);

  function toggleProfile() {
    setDisplayProfile(!displayProfile)
  }
  return (
    <span className={roboto.className}>
      <main className={styles.main}>
        <Profile displayProfile={displayProfile} toggleProfile={toggleProfile} />

        <div className={styles.grid}>
          <PageCard initialTitle="Projects" description="If you would like to do business, please reach out!" icon="science" />
          <PageCard initialTitle="Skills" description="If you would like to do business, please reach out!" icon="flask" />
          <PageCard initialTitle="About me" description="If you would like to do business, please reach out!" icon="about" />

        </div>
      </main>
    </span>
  )
}
