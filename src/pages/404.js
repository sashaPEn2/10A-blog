import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <Seo title="Page not found" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <RiSkullLine
          style={{
            fontSize: "128px",
            color: "var(--primary-color)",
          }}
        />
        <h1>Упс, мы не ожидали, что это произойдет</h1>
        <p>
        Вы отправлялись в неизведанное. Позвольте нам помочь вам, пожалуйста, ознакомьтесь
        с приведенными ниже вариантами
        </p>
      </header>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Вернуться на главную страницу
      </Link>
      <Link to="/contact" className="button -outline">
       Сообщить об этом <RiBugLine className="icon -right" />
      </Link>
    </div>
  </Layout>
)

export default NotFound
