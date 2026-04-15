import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import { portfolioData } from './data';

function App() {
  return (
    <MainLayout navLinks={portfolioData.navLinks}>
      <Home data={portfolioData} />
    </MainLayout>
  );
}

export default App;
