import './App.css';
import Community from './components/community/Community';
import Monitoring from './components/monitoring/Monitoring';
import Portfolio from './components/portfolio/Portfolio';
import Reports from './components/reports/Reports';
import Signup from './components/signup/Signup';
function App() {
  return (
    <div className="App">
      <Signup />
      <Community />
      <Portfolio />
      <Monitoring />
      <Reports />
    </div>
  );
}

export default App;
