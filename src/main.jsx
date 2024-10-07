import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

import info_en from "./assets/content/en/info_en.json"
import info_es from "./assets/content/es/info_es.json"
import info_de from "./assets/content/de/info_de.json"
import { IconProvider } from './context/IconProvider.jsx'

i18next.init({
  interpolation: { escapeValue: false},
  fallbackLng: "en",
  resources: {
    en: {
      global: info_en
    },
    es: {
      global: info_es
    },
    de: {
      global: info_de
    }
  }
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <IconProvider>
        <RouterProvider router={router}/>
      </IconProvider>
    </I18nextProvider>
  </StrictMode>,
)
