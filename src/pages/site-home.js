import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine, RiAlertFill } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <Seo title="Наш сайт" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <RiAlertFill
          style={{
            fontSize: "128px",
            color: "var(--primary-color)",
          }}
        />
        <h1>Извините, но наш сайт ещё не готов</h1>
      </header>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Вернуться на главную
      </Link>
    </div>
  </Layout>
)

export default NotFound
