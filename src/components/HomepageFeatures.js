import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: 'Aprender sobre wallets',
    description: (
      <>
        ¿Has comprado criptomonedas y quieres conocer las opciones que tienes para almacenarlas?

      </>
    ),
    emoji: '⛓️',
    link: 'wiki/blockchain-development-tutorial',
    cta: 'Go to "Getting Started" Guide'
  },
  {
    title: 'Aprende sobre criptomonedas',
    description: (
      <>
        Explora nuestra Wiki mantenido por la comunidad para descubrir tutoriales,
        herramientas y otros recursos que lo ayudarán a mejorar tu conocimiento
        sobre criptomonedas y tecnología Blockchain.
      </>
    ),
    emoji: '✍️',
    link: '/wiki',
    cta: 'Ir a la wiki'
  },
  {
    title: 'Connect with other Developers',
    description: (
      <>
        Join our Discord and talk to other Blockchain developers. Ask questions, team up or simply
        hang out and chat about all things Crypto.
      </>
    ),
    emoji: '💬',
    link: 'https://cryptodevhub.io/discord',
    cta: 'Join Discord'
  }

]

function Feature({ title, description, emoji, link, cta }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className="feature-emoji">{emoji}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--md" to={link}>
            {cta}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={`${styles.features} features`}>
      <div className="container">
        <h2 className="text--center">¿Qué te gustaría aprender hoy?</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
