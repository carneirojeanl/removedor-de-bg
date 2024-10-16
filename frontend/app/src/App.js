import './App.css';

import UploadImage from './components/UploadImage';
import HowItWorks from './components/HowItWorks';
import Examples from './components/Examples';

function App() {
  return (
    <main className="App">
      <UploadImage/>
      <HowItWorks/>
      <Examples/>
    </main>
  );
}

export default App;
