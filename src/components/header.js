import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Header() {
  return (
    <>
    <div className="container py-3">
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <a href="#">
          <Image
            className={styles.logo}
            src="/logo-a.png"
            alt="Imagen del Logo del proyecto"
            width={180}
            height={37}
            priority
          />          
          </a>
        </div>
      </header>  
    </div>
    </>
  )
}
