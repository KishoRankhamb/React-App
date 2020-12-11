import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
function App() {
  return (
    <div className="App">
      <Navbar />
      <LineChart />
      <BarChart />
    </div>
  );
}

export default App;
