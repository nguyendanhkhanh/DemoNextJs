import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { NextPageWithLayout } from '../../model'
import styles from '../../styles/home.module.scss'
import MainLayout from '../../components/Layout/MainLayout'

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Medlink</title>
        <link rel="icon" href="/images/logo1.png" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Link to {' '}
          <Link href="/map"> Map</Link>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <Image
          src="https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424"
          width={1000}
          height={500}
        />

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
    </div>
  )
}

Home.Layout = MainLayout

export default Home
