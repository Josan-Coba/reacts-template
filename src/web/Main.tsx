import type { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import Footer from './Footer'
import './styles.css'

export default function Main(): ReactElement {
  const { t } = useTranslation()
  return (
    <div className="min-h-full max-w-7xl mx-4 sm:mx-8 xl:mx-auto">
      <main>
        <h1>{t('app.title')}</h1>
        <p>{t('app.description')}</p>
      </main>
      <Footer />
    </div>
  )
}
