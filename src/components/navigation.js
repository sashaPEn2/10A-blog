/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import Theme from "../components/theme"

const MenuItems = [
  {
    path: "/",
    title: "Главная",
  },
  {
    path: "/blog",
    title: "Новости",
  },
  {
    path: "/site-home",
    title: "Наш сайт",
  },
  {
    path: "/contact",
    title: "Обратная связь",
  },
]

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showMenu: false }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }))
  }

  render() {
    const listMenuItems = MenuItems.map((menuItem, index) => (
      <ListLink key={index} to={menuItem.path}>
        {menuItem.title}
      </ListLink>
    ))
    return (
      <nav className="site-navigation" sx={navStyle.menu}>
        <button
          aria-label="toggle menu"
          onClick={this.handleToggleClick}
          className={"menu-trigger" + (this.state.showMenu ? " is-active" : "")}
        >
          <div className="icon-menu-line">
            <RiMenu3Line />
          </div>
          <div className="icon-menu-close">
            <RiCloseLine />
          </div>
        </button>
        <script>
   window.onload = function() {
      window.YaAuthSuggest.init({
                  client_id: 'c46f0c53093440c39f12eff95a9f2f93',
                  response_type: 'token',
                  redirect_uri: 'https://examplesite.com/suggest/token'
               },
               'https://examplesite.com', {
                  view: 'button',
                  parentId: 'container',
                  buttonView: 'main',
                  buttonTheme: 'light',
                  buttonSize: 'm',
                  buttonBorderRadius: 12
               }
            )
            .then(function(result) {
               return result.handler()
            })
            .then(function(data) {
               console.log('Сообщение с токеном: ', data);
               document.body.innerHTML += `Сообщение с токеном: ${JSON.stringify(data)}`;
            })
            .catch(function(error) {
               console.log('Что-то пошло не так: ', error);
               document.body.innerHTML += `Что-то пошло не так: ${JSON.stringify(error)}`;
            })};
    
   </script>
        <ul>
          {listMenuItems}
          <div sx={navStyle.border}></div>
          <div sx={navStyle.theme}>
            <Theme />
          </div>
        </ul>
      </nav>
    )
  }
}

export default Navigation

const navStyle = {
  menu: {
    ul: {
      bg: "siteColor",
    },
  },
  theme: {
    display: ["block", "block", "block", "none"],
    p: " 25px 20px 20px",
  },
  border: {
    bg: "borderColor",
    borderTop: "1px solid transparent",
    display: ["block", "block", "block", "none"],
  },
}
