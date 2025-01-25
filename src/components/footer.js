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
        2025 © 10А Столинской государственной гимназии. <a href="https://blog-10a.netlify.app/admin" style={{ 
        color: 'white',
        }}>Вход для администраторов</a></p>
    </div>
  </footer>
)

export default Footer
