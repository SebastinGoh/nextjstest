import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <span className="code">Hello World</span>
        <Link href="test/">Test</Link>
      </div>
    </main>
  )
}
