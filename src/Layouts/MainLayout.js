import { useEffect, useState } from 'react';
import { appConfig } from '../config';

function MainLayout({ navLinks, children }) {
  const [active, setActive] = useState('home');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.2, 0.5, 0.8] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <>
      <header className="layout-header">
        <div>
          <p className="brand">{appConfig.appName}</p>
          <p className="brand-sub">Animated Portfolio</p>
        </div>
        <nav>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`layout-link ${active === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="layout-footer">© {new Date().getFullYear()} Yasir Ansari</footer>
    </>
  );
}

export default MainLayout;
