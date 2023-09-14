import Image from "next/image";
import logo from "../Images/logo.png";
import miniarrow from "../Images/miniarrow.png";
import search from "../Images/search.png";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="container-fluid d-flex margins">
      <nav className="navbar navbar-expand-lg navbar-light bg-light glaven justify-content-between">
        <Link className="navbar-brand" href="/">
          <Image alt="picture" src={logo} />
          <span className="px-3 logotext">
            СУГС „Раде Јовчевски - Корчагин“
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse margin-l "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item d-flex w-100 justify-content-between">
              <div className="dropdown">
                <button
                  className="btn colordd font-weight-bold"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  За нас
                  <Image alt="picture" src={miniarrow} className="miniarrow" />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Директор
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Стефан Сидовски - Сидо
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Куќен ред
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Годишна програма
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Правилници и извештаи
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Завршни сметки
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Галерија
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <button
                  className="btn colordd font-weight-bold"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Настава
                  <Image alt="picture" src={miniarrow} className="miniarrow" />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" href="/Nastava">
                      Уписи
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/kadar">
                      Кадар
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Филозофија
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Распоред на часови
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Државна матура
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Билингвална паралелка
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <button
                  className="btn colordd font-weight-bold"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Новости
                  <Image alt="picture" src={miniarrow} className="miniarrow" />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" href="/Novosti">
                      Соопштенија
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="/Nastani">
                      Настани
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Отворен ден
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Наградени и успешни ученици
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <button
                  className="btn colordd font-weight-bold"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Кариерен центар
                  <Image alt="picture" src={miniarrow} className="miniarrow" />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                  
                    <Link className="dropdown-item" href="/KarierenCentar">
                    Алумни
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <button
                  className="btn colordd font-weight-bold"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Училишна заедница
                  <Image alt="picture" src={miniarrow} className="miniarrow" />
                </button>
              </div>
              <div className="dropdown">
                <button
                  className="btn colordd font-weight-bold"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Активности
                  <Image alt="picture" src={miniarrow} className="miniarrow" />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Радио Клуб
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Клубови и драмски секции
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <button
                  className="btn colordd font-weight-bold"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Услуги
                  <Image alt="picture" src={miniarrow} className="miniarrow" />
                </button>
              </div>
              <div className="dropdown">
                <button
                  className="btn colordd font-weight-bold"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Erasmus +
                </button>
              </div>
              <div className="dropdown">
                <button
                  className="btn colordd font-weight-bold"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Контакт
                </button>
              </div>
              <Image alt="picture" src={search} width={50} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
