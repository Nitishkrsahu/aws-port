import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [bgColor, setBgColor] = useState("Home");
  const collapseRef = useRef(null);

  const handleNavClick = (section) => {
    setBgColor(section);

    if (collapseRef.current) {
      const collapseEl = collapseRef.current;
      if (window.bootstrap && window.bootstrap.Collapse) {
        const bsCollapse = window.bootstrap.Collapse.getInstance(collapseEl);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg animate__animated animate__bounce position-sticky top-0 z-3" style={{ backgroundColor: '#000' }}>
      <div className="container">
        <Link className="navbar-brand" to="/"><span className='text-white'>Nitish Web</span></Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src='/app-menu.svg' className='bg-dark p-2 rounded rounded-1' alt="menu" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav ms-auto border border-1 rounded rounded-2 text-center border-dark">
            {['Home', 'About', 'Services', 'Contact'].map((name) => (
              <li className="nav-item" key={name}>
                <Link className="nav-link" to={`/${name.toLowerCase() === 'home' ? '' : name.toLowerCase()}`}>
                  <span
                    className='btn w-100 btn-dark'
                    style={{
                      backgroundColor: bgColor === name ? "#fe0087" : "#0E1616",
                      transition: '1s'
                    }}
                    onClick={() => handleNavClick(name)}
                  >
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
