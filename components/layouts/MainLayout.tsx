import { FC, ReactNode } from 'react'
import Head from 'next/head'
import styles from './MainLayout.module.css'
import NavBar from '../NavBar'
type Props = {
  children: ReactNode
}
const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home Next App</title>
        <meta name='description' content='holaaa next' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default MainLayout
