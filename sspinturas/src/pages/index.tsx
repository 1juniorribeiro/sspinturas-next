import Head from 'next/head';

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
          ><img
            src="/images/logo-horizontal.png"
            alt="Logomarca Escrito SS Pinturas mecanizadas"
        /></a>
        <div>
          <ul className={styles.grid}>
            <li><a class="title" href="#home">Início</a></li>
            <li><a class="title" href="#about">Sobre</a></li>
            <li><a class="title" href="#services">Serviços</a></li>
            <li><a class="title" href="#videos">Vídeos</a></li>
            <li><a class="title" href="#contact">Contato</a></li>
          </ul>
        </div>
        <div class="toggle icon-menu"></div>
        <div class="toggle icon-close"></div>
      </nav>
      </div>
    </header>
    </body>
    </>
   )
}
