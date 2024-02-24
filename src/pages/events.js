import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine, RiAlertFill } from "react-icons/ri"
import { MdEvent } from "react-icons/md";


import Seo from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <Seo title="Мероприятия" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <div class="event-2"><MdEvent
          style={{
            fontSize: "64px",
            color: "var(--primary-color)",
          }}
        />
         <h1>Мероприятия</h1>
        </div>
<table class="events">
<thead>
  <tr>
    <th class="tg-0pky">Дата</th>
    <th class="tg-0pky">Название мероприятия</th>
    <th class="tg-0pky">Время</th>
    <th class="tg-0pky">Место</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">01.11.2023</td>
    <td class="tg-0pky"><a href="https://blog-10a.netlify.app/museum-david" target="_blank" rel="noopener noreferrer">Экскурсия в музей истории Давид-Городка</a></td>
    <td class="tg-0pky">10:00</td>
    <td class="tg-0pky">г. Давид-Городок</td>
  </tr>
  <tr>
    <td class="tg-0pky">17.11.2023</td>
    <td class="tg-0pky"><a href="https://blog-10a.netlify.app/cinema-k" target="_blank" rel="noopener noreferrer">Поход на премьеру фильма «Киношники»</a></td>
    <td class="tg-0pky">18:00</td>
    <td class="tg-0pky">Кинотеатр «Экран»</td>
  </tr>
  <tr>
    <td class="tg-0pky">02.12.2023</td>
    <td class="tg-0pky"><a href="https://blog-10a.netlify.app/bibliotheca/kvest" target="_blank" rel="noopener noreferrer">Квест «Наша малая Родина»</a></td>
    <td class="tg-0pky">11:00</td>
    <td class="tg-0pky">Центральная библиотека</td>
  </tr>
  <tr>
    <td class="tg-0lax">10.02.2024</td>
    <td class="tg-0lax"><a href="https://blog-10a.netlify.app/game-practice" target="_blank" rel="noopener noreferrer">Игра-практикум «Глаза - наши незаменимые помощники»</a></td>
    <td class="tg-0lax">12:00</td>
    <td class="tg-0lax">Кабинет №32</td>
  </tr>
  <tr>
    <td class="tg-0lax">02.03.2024</td>
    <td class="tg-0lax">Квест «По страницам истории»</td>
    <td class="tg-0lax">11:30</td>
    <td class="tg-0lax">Центральная библиотека</td>
  </tr>
  <tr>
    <td class="tg-0lax">20.04.2024</td>
    <td class="tg-0lax">Психологический тест «Дороги, которые мы выбираем»</td>
    <td class="tg-0lax">12:00</td>
    <td class="tg-0lax">Кабинет №32</td>
  </tr>
</tbody>
</table>
      </header>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Вернуться на главную
      </Link>
    </div>
  </Layout>
)

export default NotFound
