import styles from "./App.module.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Data from './components/Data/Data';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dashboard}>
       <Dashboard />
       </div>
       <div className={styles.bodyWrapper}>
      <Navbar />
      <Data />
      </div>
    </div>
  );
}

export default App;
