import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'
import styles from '../../components/layouts/MainLayout.module.css'
export default function ContactPage() {
  return (
    <MainLayout>
      <div className={styles.description}>
        <div>
          <Link href='/'>Ir a Home</Link>
        </div>
      </div>
      <h4>CONTACT PAGE</h4>
    </MainLayout>
  )
}
