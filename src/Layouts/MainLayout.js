import { appConfig } from '../config';

function MainLayout({ navLinks, children }) {
  return (
    <>
      <header className="layout-header">
        <div>
          <p className="brand">{appConfig.appName}</p>
          <p className="brand-sub">Animated Portfolio</p>
        </div>
        <nav>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="layout-link">
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
