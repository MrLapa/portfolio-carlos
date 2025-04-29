"use client"

import { useTranslation } from "react-i18next"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"

const LanguageToggle = () => {
  const { i18n, t } = useTranslation()
  const [currentLang, setCurrentLang] = useState("en")

  useEffect(() => {
    setCurrentLang(i18n.language)
  }, [i18n.language])

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "es" : "en"
    i18n.changeLanguage(newLang)
    setCurrentLang(newLang)
  }

  return (
    <div
      className={`${styles["language-wrapper"]}} d-flex flex-lg-column flex-row align-items-center gap-2`}
    >
      <span className={styles["language-label"]}>{t("sidebar.language")}</span>
      <button
        onClick={toggleLanguage}
        className={styles["language-toggle"]}
        aria-label="Toggle language"
      >
        {currentLang === "en" ? "EN" : "ES"}
      </button>
    </div>
  )
}

export default LanguageToggle
