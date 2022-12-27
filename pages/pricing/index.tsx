import Link from 'next/link'
import DarkLayout from '../../components/layouts/DarkLayout'
import MainLayout from '../../components/layouts/MainLayout'
import styles from '../../components/layouts/MainLayout.module.css'

const Pricing = () => {
  return (
    <>
      <div className={styles.description}>
        <div>
          <Link href='/'>Ir a Home</Link>
        </div>
      </div>
      <h4>PRICING PAGE</h4>
    </>
  )
}

Pricing.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}

export default Pricing
