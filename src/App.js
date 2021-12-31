import Topbar from './components/topbar/topbar.component';
import Sidebar from './components/sidebar/sidebar.component';
import HomePage from './pages/home-page/home.page';

import './app.styles.css';

const App = () => {
  return (
    <div>
      <Topbar />
      <div className="app-body-container">
        <Sidebar />
        {/* <div className="others">OTHER PAGE CONTENT GOES HERE</div> */}
        <HomePage />
      </div>
    </div>
  );
};

export default App;
