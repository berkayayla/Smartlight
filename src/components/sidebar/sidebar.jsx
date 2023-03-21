import Styles from "@/components/sidebar/sidebar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const handleClick = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
};
export default function Sidebar() {
  return (
    <>
      <aside className={`${Styles.sidebar} sidebar`}>
        <div className={Styles.sidebar_inner}>
          <button
            onClick={handleClick}
            className={`${Styles.toggleSidebar} btn btn-dark btn-sm toggleSidebar`}
          >
            <i class="bi bi-x-lg"></i>
          </button>

          <Link className={Styles.brand} href="/">
            <img src="/images/logo.svg" alt="smartlight" />
            <small>Powered by lotec</small>
          </Link>

          <nav className={Styles.paths}>
            <ul>
              {/* item */}
              <li className={Styles.divider}>General</li>
              <li>
                <Link className={Styles.activePath} href="/">
                  <i class="bi bi-grid-1x2-fill"></i>
                  <span className="label">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/starter">
                  <i class="bi bi-person-circle"></i>
                  <span className="label">Profile</span>
                </Link>
              </li>
              <li>
                <Link href="/reporting">
                  <i class="bi bi-clipboard2-data-fill"></i>
                  <span className="label">Reporting</span>
                </Link>
              </li>
              <li>
                <Link href="/reporting">
                  <i class="bi bi-save2"></i>
                  <span className="label">Inventory</span>
                </Link>
              </li>
              <li>
                <Link href="/reporting">
                  <i class="bi bi-window-dock"></i>
                  <span className="label">Terms</span>
                </Link>
              </li>
              <li className={Styles.divider}>Other</li>
              <li>
                <Link href="/reporting">
                  <i class="bi bi-person-square"></i>
                  <span className="label">Account</span>
                </Link>
              </li>
              <li>
                <Link href="/reporting">
                  <i class="bi bi-gear-fill"></i>
                  <span className="label">Settings</span>
                </Link>
              </li>
              {/* spacer */}
              <li className={Styles.liner}></li>
              {/* spacer end */}
              <li>
                <Link href="/reporting">
                  <i class="bi bi-bell-fill"></i>
                  <span className="label">Notifications</span>
                </Link>
              </li>
              <li>
                <Link href="/reporting">
                  <i class="bi bi-chat-square-dots"></i>
                  <span className="label">Learn</span>
                </Link>
              </li>
              <li>
                <Link href="/reporting">
                  <i class="bi bi-patch-question"></i>
                  <span className="label">What's New</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* user */}
          <div className={Styles.user}>
            <img src="/images/user.png" alt="Esther Howard" />
            <div className={Styles.info}>
              <strong>Esther Howard</strong>
              <small>Admin</small>
            </div>
          </div>
          {/* user end */}

          {/*footer */}
          <div className={Styles.footer}>
            <img src="/images/lotectransparan.png" alt="smartlight" />
          </div>
          {/*footer */}
        </div>
      </aside>
    </>
  );
}
