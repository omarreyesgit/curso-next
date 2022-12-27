import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'
import styles from '../components/layouts/MainLayout.module.css'
import DarkLayout from '../components/layouts/DarkLayout'
export default function About() {
  return (
    <>
      <div className={styles.description}>
        <div>
          <Link href='/'>Ir a Home</Link>
        </div>
      </div>
      <h4>ABOUT PAGE</h4>
    </>
  )
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}
