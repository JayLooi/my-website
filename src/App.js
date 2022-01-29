import { Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

import Navbar from './components/Navbar';
import Home from './components/Home.js'
import About from './components/About.js';
import Background from './components/Background.js';
import Achievements from './components/Achievements.js';
import Contact from './components/Contact.js';

import './App.css';

const navlinks = [
  { name: 'About', to: '/about' }, 
  { name: 'Background', to: '/background' }, 
  { name: 'Achievements', to: '/achievements' }, 
  // { name: 'Contact', to: '#contact' }, 
];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
          <a href='/' className='App-logo'/>
          <Navbar navlinks={navlinks} contentTopOffset='70px'/>
      </header>
      
      <div className='App-content'>
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Background' element={<Background/>}/>
          <Route path='Achievements' element={<Achievements/>}/>
          <Route path='#Contact' element={<Contact/>}/>
        </Routes>
      </div>

      <footer className='App-footer'>
        <div id='contact'>
          <h3>
            Looi Kian Seong
          </h3>
          
          <p>
            <FontAwesomeIcon icon={faEnvelope} size='sm'/>
            <a className='Email' href='mailto:kianseong.looi@gmail.com'> kianseong.looi@gmail.com </a>
          </p>

          <hr/>
          
          <ul>
            <li>
              <a href='https://linkedin.com/in/kianseong' target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} size='2x'/>
              </a>
            </li>

            <li>
              <a href='https://github.com/JayLooi' target='_blank'>
                <FontAwesomeIcon icon={faGithub} size='2x'/>
              </a>
            </li>

            <li>
              <a href='https://medium.com/@kslooi' target='_blank'>
                <FontAwesomeIcon icon={faMedium} size='2x'/>
              </a>
            </li>
          </ul>

          <hr/>
        </div>
      </footer>
    </div>
  );
}

export default App;