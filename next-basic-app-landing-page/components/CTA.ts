import React from 'react';
import styles from '../styles/CTA.module.css';
export default function CTA() {
  return (
    <section className='section bg-emerald-600 text-slate-100'>
      <div className={styles.contentWrapper}>
        <h3>Download our mobile app</h3>
        <p>
          With lots of unique blocks, you can easily build a page without
          coding. Build your newst landing page
        </p>
      </div>
      <div className={styles.linkWrapper}>
        <picture>
          <source srcSet='/app_store.webp' type='image/webp' />
          <source srcSet='/app_store.png' type='image/png' />
          <img src='./assets/app_store.png' alt='' />
        </picture>
        <picture>
          <source srcSet='/gplay.webp' type='image/webp' />
          <source srcSet='/gplay.png' type='image/png' />
          <img src='/gplay.png' alt='' />
        </picture>
      </div>
    </section>
  );
}
