import { useState } from "react";
import "./styles/navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        NCCU.VR.LAB
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <span className="expand">
          <small>展開</small>
        </span>
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="https://apps.apple.com/us/app/%E9%9F%93%E4%BF%A1%E9%BB%9E%E5%85%B5-vr-nccu-edu-stagea/id1668599083">
              韓信點兵
            </a>
          </li>
          <li>
            <a href="https://apps.apple.com/us/app/nccuedu-vr/id1609854458">
              NCCUEDU VR
            </a>
          </li>
          <li>
            <a href="https://apps.apple.com/us/app/%E5%B3%B6%E5%B6%BC%E9%81%8A%E6%88%B2-%E8%B3%AA%E6%95%B8%E8%88%87%E5%90%88%E6%95%B8/id6447821110">
              島嶼遊戲
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
