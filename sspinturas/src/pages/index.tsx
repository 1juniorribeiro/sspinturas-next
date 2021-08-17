import Head from 'next/head';
import { GetStaticProps } from 'next';
import Image from 'next/image';

import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>SS Pinturas Mecanizadas</title>
      </Head>
      <body>
        <header id="header" className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <nav>
              <a className={styles.logo} href="#home"
              ><Image
                  src="/images/logo-horizontal.png"
                  alt="Logomarca Escrito SS Pinturas mecanizadas"
                  width={150}
                  height={100}
                  layout="responsive"
                /></a>
              <div className={styles.menu}>
                <ul className={styles.grid}>
                  <li><a className={styles.title} href="#home">Início</a></li>
                  <li><a className={styles.title} href="#about">Sobre</a></li>
                  <li><a className={styles.title} href="#services">Serviços</a></li>
                  <li><a className={styles.title} href="#videos">Vídeos</a></li>
                  <li><a className={styles.title} href="#contact">Contato</a></li>
                </ul>
              </div>
              <div className={styles.toggle}></div> 
              <div className={styles.toggle}></div>
            </nav>
          </div>
        </header>

        <main>

        </main>
      </body>
    </>
  )
}
// icon-menu icon-close
// export const getStaticProps: GetStaticProps = async () => {
//   const nav = document.querySelector('#header nav')
//   const toggle = document.querySelectorAll('nav .toggle')

// for(const element of toggle) {
//     element.addEventListener('click', function () {
//       nav.classList.toggle('show')
//     })
//   }

// // close the menu when click in the item

// const links = document.querySelectorAll('nav ul li a')

// for(const link of links) {
//     link.addEventListener('click', function () {
//       nav.classList.remove('show')
//     })
//   }

//  return {
//    props: {

//    },
//    revalidate: 60 * 60 * 24 * 30 //30 days
//  }
// }
