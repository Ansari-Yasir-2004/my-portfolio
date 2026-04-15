import { appConfig } from '../config';

function MainLayout({ navLinks, children }) {
  return (
    <>
      <header className="layout-header">
        <h1>{appConfig.appName}</h1>
        <nav>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="layout-link">
              {link.label}
            </a>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="layout-footer">Structure ready for milestone-based implementation.</footer>
    </>
  );
}

export default MainLayout;
