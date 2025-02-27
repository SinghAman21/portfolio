
import './App.css'
import Landing from './sections/landing';
import Terminal from './sections/terminal';
import AsciiArt from './support-components/AsciiArt';
import End from './sections/End';
import Start from './sections/Start';

function App() {
  return (
    <>
      <Start/>
      <Landing />
      <Terminal/>
      {/* <AsciiArt/> */}
      <End/>
    </>
  );
};


export default App
