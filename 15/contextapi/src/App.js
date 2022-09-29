import ColorBox from './components/ColorBox';
import './App.css';
import { ColorProvider } from './api/color';
import SelectColors from './components/SelectColors';


function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
