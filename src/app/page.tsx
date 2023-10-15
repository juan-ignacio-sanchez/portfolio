"use client";
import { Roboto } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

function LinkIcon({
  link,
  icon,
  alt,
}: {
  link: string;
  icon: string;
  alt: string;
}) {
  return (
    <Link href={link}>
      <Image
        src={`./images/icons/${icon}.svg`}
        alt={alt}
        width={32}
        height={32}
        priority
      />
    </Link>
  );
}

function Profile({
  displayProfile = true,
  toggleProfile,
}: {
  displayProfile: boolean;
  toggleProfile: any;
}) {
  return (
    <section className={styles.profile}>
      <Image
        src="./images/profile.jpg"
        alt="Profile picture"
        className={styles.profilePicture}
        width={0}
        height={0}
        priority
        onClick={toggleProfile}
      />
      <h1>Juan Ignacio Sánchez Sampayo </h1>

      <p>
        I am a software developer, based in Montevideo, Uruguay, and have 9+
        years of experience working with Python/Django and similar backend
        technologies.
      </p>

      <p>
        I recently rediscovered the beauty of frontend development and started
        my journey with React
      </p>
      <p>
        Take a look around &#128073; to know about my experience, tools
        I&apos;ve used in the past and more about myself.
      </p>
      <footer>
        <LinkIcon
          link="https://www.linkedin.com/in/jiss2891/"
          icon="linkedin"
          alt="LinkedIn profile"
        />
        <LinkIcon
          link="https://github.com/juan-ignacio-sanchez"
          icon="github"
          alt="Github profile"
        />
        <LinkIcon
          link="https://onthefly.itch.io/the-alchemist"
          icon="itch"
          alt="Itch page"
        />
      </footer>
    </section>
  );
}

function PageCard({
  initialTitle,
  description,
  icon,
  visible,
}: {
  initialTitle: string;
  description: string;
  icon: string;
  visible: boolean;
}) {
  const [title, setTitle] = useState(initialTitle);

  return (
    <Link href="/about" className={styles.card}>
      <span className={styles.description}>
        <h2>{title}</h2>
        <p>{description}</p>
      </span>
      <Image
        src={`./images/${icon}.svg`}
        alt="Profile picture"
        width={200}
        height={200}
        priority
      />
    </Link>
  );
}

export default function Home() {
  const [displayProfile, setDisplayProfile] = useState(true);
  const [menuVisibleArray, setMenuVisibleArray] = useState([true, true, true]);

  function toggleProfile() {
    setDisplayProfile(!displayProfile);
  }
  return (
    <>
      <main className={styles.main}>
        <Profile
          displayProfile={displayProfile}
          toggleProfile={toggleProfile}
        />
        <nav className={styles.grid}>
          <PageCard
            initialTitle="Projects"
            description="An overview of my most interesting and fun projects."
            icon="science"
            visible={menuVisibleArray[0]}
          />

          <PageCard
            initialTitle="Skills"
            description="Set of tools I'm comfortable with and some that challenge me too..."
            icon="flask"
            visible={menuVisibleArray[0]}
          />
          <PageCard
            initialTitle="About me"
            description="A little bit about my life"
            icon="about"
            visible={menuVisibleArray[0]}
          />
        </nav>
      </main>
    </>
  );
}
