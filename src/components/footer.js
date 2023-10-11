/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        © 10А Столинской государственной гимназии. Все права защищены.
      </p>
    </div>
  </footer>
)

export default Footer
