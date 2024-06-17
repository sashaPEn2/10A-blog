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
        
        <center></center>
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
    <td class="tg-0lax">18.11.2023</td>
    <td class="tg-0lax"><a href="https://blog-10a.netlify.app/quiz" target="_blank" rel="noopener noreferrer">Интеллектуальная викторина</a></td>
    <td class="tg-0lax">11:20</td>
    <td class="tg-0lax">Кабинет №32</td>
  </tr>
<tr>
    <td class="tg-0lax">01.12.2023</td>
    <td class="tg-0lax"><a href="https://blog-10a.netlify.app/quiz-2023" target="_blank" rel="noopener noreferrer">Молодежный квиз 2023</a></td>
    <td class="tg-0lax">13:20</td>
    <td class="tg-0lax">Актовый зал</td>
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
    <td class="tg-0lax">01.03.2024</td>
    <td class="tg-0lax"><a href="https://blog-10a.netlify.app/bibliotheca/1-march" target="_blank" rel="noopener noreferrer">1 марта — Международный день борьбы с наркоманией и наркобизнесом</a>
</td>
<td class="tg-0lax">13:20</td>
    <td class="tg-0lax">Центральная библиотека</td>
  </tr>
<tr>
    <td class="tg-0lax">02.03.2024</td>
    <td class="tg-0lax"><a href="https://blog-10a.netlify.app/pages-about-history" target="_blank" rel="noopener noreferrer">Квест «По страницам истории»</a></td>
    <td class="tg-0lax">11:30</td>
    <td class="tg-0lax">Кабинет №32</td>
  </tr>
    <tr>
    <td class="tg-0lax">16.03.2024</td>
    <td class="tg-0lax"><a href="https://blog-10a.netlify.app/Constitution-Day">15 марта — День Конституции Республики Беларусь</a></td>
    <td class="tg-0lax">13:20</td>
    <td class="tg-0lax">Центральная библиотека</td>
  </tr>
  <tr>
    <td class="tg-0lax">20.04.2024</td>
    <td class="tg-0lax"><a href="https://blog-10a.netlify.app/career-guidance-test">Психологический тест «Дороги, которые мы выбираем»</a></td>
    <td class="tg-0lax">12:00</td>
    <td class="tg-0lax">Кабинет №32</td>
  </tr>
</tbody>
</table>

<h2>Дни здоровья<a href="#cite-1">¹</a></h2>
<table class="events-health">
<thead>
  <tr>
    <th class="tg-0pky">Дата</th>
    <th class="tg-0pky">Название</th>
    <th class="tg-0pky">Время</th>
    <th class="tg-0pky">Место</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">09.01.2023</td>
    <td class="tg-acii">День здоровья, посвященный началу учебного года.</td>
    <td class="tg-xls6">11:00</td>
    <td class="tg-0pky">Двор гимназии</td>
  </tr>
  <tr>
    <td class="tg-0pky">11.11.2023</td>
    <td class="tg-acii"><a href="https://blog-10a.netlify.app/volleyball" target="_blank" rel="noopener noreferrer">Праздник волейбола</a></td>
    <td class="tg-xls6">10:00</td>
    <td class="tg-0pky">Спортзал</td>
  </tr>
  <tr>
    <td class="tg-0pky">09.12.2023</td>
    <td class="tg-acii"><a href="https://blog-10a.netlify.app/football-2023" target="_blank" rel="noopener noreferrer">Мини-футбол</a></td>
    <td class="tg-xls6">11:00</td>
    <td class="tg-0pky">Спортзал</td>
  </tr>
  <tr>
    <td class="tg-0pky">13.01.2024</td>
    <td class="tg-acii">Лыжные гонки «Снежный снайпер»</td>
    <td class="tg-xls6">10:00</td>
    <td class="tg-0pky">Двор гимназии</td>
  </tr>
  <tr>
    <td class="tg-0pky">11.05.2024</td>
    <td class="tg-acii">День здоровья, посвященный окончанию учебного года</td>
    <td class="tg-xls6">10:00</td>
    <td class="tg-0pky">Двор гимназии</td>
  </tr>
</tbody>
</table>

<h2>Общегимназические мероприятия<a href="#cite-1">¹</a></h2>

<center><table class="global-events">
<thead>
  <tr>
    <th class="tg-0lax">Дата</th>
    <th class="tg-0lax">Название</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">28.10</td>
    <td class="tg-0lax"><a href="https://blog-10a.netlify.app/yarmarka-2023" target="_blank" rel="noopener noreferrer">Ярмарка талантов 2023</a></td>
  </tr>
  <tr>
    <td class="tg-0lax">21.03</td>
    <td class="tg-0lax">Мисс гимназии 2024</td>
  </tr>
  <tr>
    <td class="tg-0lax">18.05</td>
    <td class="tg-0lax"><a href="https://blog-10a.netlify.app/den-gimnazii" target="_blank" rel="noopener noreferrer">День гимназии</a></td>
  </tr>
</tbody>
</table>
<cite><a id="cite-1">¹</a> — по данным сайта <a href="https://gim.roo-stolin.gov.by/%D1%83%D1%87%D0%B0%D1%89%D0%B8%D0%BC%D1%81%D1%8F/%D1%88%D0%B5%D1%81%D1%82%D0%BE%D0%B9-%D1%88%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B4%D0%B5%D0%BD%D1%8C">Столинской государственной гимназии.</a></cite>
</center>
      </header>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Вернуться на главную
      </Link>
    </div>
  </Layout>
)

export default NotFound