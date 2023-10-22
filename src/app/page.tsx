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
    <Link href={link} rel="noopener noreferrer" target="_blank">
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
      <span className={styles.contactCard}>
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
      </span>
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
    </section>
  );
}

function Card({
  initialTitle,
  description,
  endDescription,
  icon,
  visible,
  index,
  handleClick,
  width,
  height,
  styleClass,
}: {
  initialTitle: string;
  description: string;
  endDescription: string;
  icon: string;
  visible: boolean;
  index: number;
  handleClick: any;
  width: number;
  height: number;
  styleClass: string;
}) {
  const [title, setTitle] = useState(initialTitle);

  return (
    <>
      {visible && (
        <span className={styleClass} onClick={handleClick}>
          {description != "" && (
            <span className={styles.description}>
              <h2>{title}</h2>
              <p>{description}</p>
            </span>
          )}
          <Image
            src={`./images/${icon}.svg`}
            alt="card icon"
            width={width}
            height={height}
            priority
          />
          {endDescription != "" && (
            <span className={styles.description}>
              <p>{endDescription}</p>
            </span>
          )}
        </span>
      )}
    </>
  );
}

function PageCard(props: any) {
  return <Card {...props} width={200} height={200} styleClass={styles.card} />;
}

function BackCard(props: any) {
  const combinedClassNames = `${styles.card} ${styles.backCard}`;
  return (
    <Card {...props} width={50} height={50} styleClass={combinedClassNames} />
  );
}

function Content() {
  return (
    <article className={styles.content}>
      <h2>Limit Wholesale Brokers (May 2022 - Present)</h2>
      <ul>
        <li>
          Built and maintained integrations with 10+ third-party APIs using
          Python/Django.
        </li>
        <li>
          Established good communication channels to effectively reduce
          unforeseen changes in external API integration.
        </li>
        <li>
          Collaborating with our API&apos;s consumers was key to better incident
          response and reduce debugging clutter.
        </li>
        <li>
          Authored the integration with Trava Security to provide risk
          assessment reports.
        </li>
      </ul>

      <p>
        The interesting part of this project is to find common patterns among
        Carriers requirements to minimize users&apos; burden
      </p>
      <p>
        Integration tests are a pain-point in this kind of projects where you
        have 20+ integrations, this can be solved by prioritizing the most
        valuable ones if you want to deliver on time and keep good quality.
      </p>
      <h2>Rootstrap (Jan 2020 - Jan 2022)</h2>
      <p>
        Being part of Roostrap allowed me to join multiple teams of many shapes
        and sizes, the most remarkable ones are these:
      </p>
      <h3>Phylagen</h3>
      <p>
        Phylagen is a San Francisco based biotech company that combine microbial
        genomics and data analytics to solve complex problems. I built
        micro-services from scratch using Django, HUG, Flask and ocassionally
        AWS Lambda, which were integrated as part of a complex ETL pipeline.
      </p>
      <h3>Sentry DashCam</h3>
      <p>
        The Sentry DashCam app & Wireless Bridge (Elon-1) enable Tesla owners
        with auto-pilot cameras to wirelessly view their Tesla Sentry alarm
        systems, and store & share their DashCam videos. I configured a
        Raspberry PI (3b+ and Zero) to act as a usb gadget collecting all of the
        car&apos;s DVR , optimizing it using FFmpeg making it streaming-enabled
        and presenting them through a REST API built using Flask. The
        server&apos;s setup was automated using bash scripting, so any user
        could download an pre-packaged system image and install it on a board.
        The pain-point of this project was using C/C++ to run just the required
        part of FFMpeg and not the whole standard binary due to the limited
        amount of computing power of the Raspberry PI boards.
      </p>
      <h2>Hipcam (Jun 2018 - Jan 2020)</h2>
      <p>
        Hipcam is an IoT company, based in Buenos Aires, which develops a Smart
        Home Security system, here I worked with multiple of their
        micro-services such as videoprocessing (on-demand clip generation adding
        watermark and timestamps if required), the module in charge of tracking
        cameras and users, using Python/Django, and a Python/Tornado module in
        charge of consume cameras&apos; information in real-time such as room
        temperature and current location. I also helped maintaining the
        face-recognition micro-service as well as some work on the
        infrastructure side (AWS and DVR Server)
      </p>
      <h2>Cilan (Jun 2014 - May 2018)</h2>
      <p>
        Cilan is an IT solutions company, based in Uruguay, we provided several
        services from VoIP to web development. Here I worked as a fullstack
        developer, using django, django rest framework, knockoutJS, Postgresql
        and mysql.
      </p>
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="10"
          y1="190"
          x2="190"
          y2="190"
          stroke="black"
          stroke-width="2"
        />
        <line
          x1="10"
          y1="10"
          x2="10"
          y2="190"
          stroke="black"
          stroke-width="2"
        />
        <polyline
          points="20,190 40,170 60,140 80,100 100,60 120,20"
          fill="none"
          stroke="blue"
          stroke-width="2"
        />
      </svg>
    </article>
  );
}

export default function Home() {
  const [displayProfile, setDisplayProfile] = useState(true);
  const [menuVisibleArray, setMenuVisibleArray] = useState([true, true, true]);
  const [selectedCard, setSelectedCard] = useState(-1);

  function toggleProfile() {
    setDisplayProfile(!displayProfile);
  }

  function selectCard(index: number) {
    const menuVisibleArrayCopy = menuVisibleArray.slice();
    if (menuVisibleArray[index] === true && menuVisibleArray.includes(false)) {
      menuVisibleArrayCopy.fill(true);
      setSelectedCard(-1);
    } else {
      menuVisibleArrayCopy.fill(false);
      menuVisibleArrayCopy[index] = true;
      setSelectedCard(index);
    }

    setMenuVisibleArray(menuVisibleArrayCopy);
  }

  return (
    <>
      <main className={styles.main}>
        <Profile
          displayProfile={displayProfile}
          toggleProfile={toggleProfile}
        />
        <nav className={styles.grid}>
          <BackCard
            initialTitle=""
            description=""
            endDescription="Back"
            icon="back"
            visible={selectedCard != -1}
            index={0}
            handleClick={() => selectCard(-1)}
          />
          {selectedCard != -1 && <Content />}
          <PageCard
            initialTitle="Projects"
            description="An overview of my most interesting and fun projects."
            icon="science"
            visible={selectedCard == -1}
            index={0}
            handleClick={() => selectCard(0)}
          />

          <PageCard
            initialTitle="Skills"
            description="Set of tools I'm comfortable with and some that challenge me too..."
            icon="flask"
            visible={selectedCard == -1}
            index={1}
            handleClick={() => selectCard(1)}
          />

          <PageCard
            initialTitle="About me"
            description="A little bit about my life"
            icon="about"
            visible={selectedCard == -1}
            index={2}
            handleClick={() => selectCard(2)}
          />

          <PageCard
            initialTitle="Open Source Projects"
            description="A little bit about my life"
            icon="about"
            visible={selectedCard == -1}
            index={2}
            handleClick={() => selectCard(2)}
          />
        </nav>
      </main>
    </>
  );
}
