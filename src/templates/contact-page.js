/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/Banner"
export const pageQuery = graphql`
  query ContactQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Contact = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout className="contact-page" sx={contactStyles.contactPage}>
      <Seo
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <form
          className="contact-form"
          action="/thanks"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Имя
              <input type="text" name="Имя" required />
            </label>
          </p>
          <p>
            <label>
              Почта
              <input type="email" name="Почта" required />
            </label>
          </p>
          <p>
            <label>
              Тема письма
              <input type="text" name="Тема письма" required />
            </label>
          </p>
          <p>
            <label>
              Текст<textarea name="Текст" required></textarea>
            </label>
          </p>
          <p>
            <label>
              Прекрепить вложение<input type="file" name="Вложение"/>
            </label>
          </p>
          <p className="text-align-right">
            <button
              className="button"
              sx={{
                variant: "variants.button",
              }}
              type="submit"
            >
              Отправить {" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>
          </p>
        </form>
      </div>
      <Banner />
    </Layout>
  )
}

export default Contact

const contactStyles = {
  contactPage: {
    input: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
    textarea: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none",
    },
  },
}
