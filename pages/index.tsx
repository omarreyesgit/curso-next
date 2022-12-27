import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import styles from '../components/layouts/MainLayout.module.css'
export default function Home() {
  return (
    <MainLayout>
      <div className={styles.description}>
        <div>
          <Link href='/about'>Ir a about</Link>
        </div>
      </div>
      <h4>Home</h4>
    </MainLayout>
  )
}
