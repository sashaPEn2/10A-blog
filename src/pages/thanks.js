import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Спасибо!" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>Письимо отправлено</h1>
      <p>Спасибо, что связались с нами. Мы свяжемся с вами в ближайшее время.</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Давайте вернемся на главную страницу
      </Link>
    </div>
  </Layout>
)

export default Thanks
