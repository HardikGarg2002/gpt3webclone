import './App.css';
import {Header,WhatGPT3,FeaturesSection,Possibility} from './containers/Container'
import {Navbar,Brand,CTA} from './components/Components'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Brand />
      <WhatGPT3 />
      <FeaturesSection />
      <Possibility />
      <CTA />
    </div>
  );
}

export default App;
