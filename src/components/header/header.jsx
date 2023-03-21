import Styles from "@/components/header/header.module.scss";
import { useState } from "react";

const handleClick = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
  document.querySelector(".layout_content").classList.toggle("active");
};

export default function Header() {
  return (
    <>
      <header className={`${Styles.header} bg-white`}>
        <nav className={Styles.navbar}>
          <div className={`${Styles.navbar_container} container-fluid`}>
            {/* navbar_item */}
            <div
              className={`${Styles.navbar_item} ${Styles.navbar_item_brand}`}
            >
              <button className="btn" onClick={handleClick}>
                <i class="bi bi-list"></i>
              </button>
              <strong className="d-none d-lg-block">X-Y Otoyolu</strong>
              <small className="d-none d-lg-block">Workspace</small>
            </div>
            {/* navbar_item_search */}
            <div
              className={`${Styles.navbar_item} ${Styles.navbar_item_search} ms-auto`}
            >
              <form action="" className={`${Styles.searchForm} input-group`}>
                <span className={`${Styles.input_icon} input-group-text`}>
                  <i className="bi bi-search"></i>
                </span>
                <input type="text" className="form-control" />
              </form>
            </div>
            {/* navbar_item_search */}
            <div
              className={`${Styles.navbar_item} ${Styles.navbar_item_actions}`}
            >
              <a href="#">
                <i className="bi bi-gear"></i>
              </a>
              <a href="#">
                <i className="bi bi-bell"></i>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
