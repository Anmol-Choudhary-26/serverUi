import './styles/App.css';
import LeftNav from './component/leftNav.js';
import ServerUi from './component/serverUi.js';
import RightNav from './component/rightNav.js';

function App() {
  return (
    <div className="serverDiv">
      <LeftNav />
      <ServerUi />
      <RightNav />
    </div>
  );
}

export default App;
