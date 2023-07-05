import './App.css';
import {Header,WhatGPT3,FeaturesSection,Possibility,Blog, Footer} from './containers/Container'
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
      <h1 className='gradient-text'>A lot is happening, 
      We are blogging about it.</h1>
      <Blog />
      
      <Footer />
    </div>
  );
}

export default App;
