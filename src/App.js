import { Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

import Navbar from './components/Navbar';
import Home from './components/Home.js'
import About from './components/About.js';
import Background from './components/Background.js';
import Achievements from './components/Achievements.js';
import Blog from './components/Blog.js';
import Projects from './components/Projects.js';
import Technotes from './components/Technotes.js';
import Contact from './components/Contact.js';

import './App.css';
import React from 'react';

const navlinks = [
  { name: 'About', to: '/about' }, 
  { name: 'Background', to: '/background' }, 
  { name: 'Achievements', to: '/achievements' }, 
  { name: 'Blog', to: '/blog' }, 
  { name: 'Projects', to: '/projects' }, 
  { name: 'Technotes', to: '/technotes' }, 
  // { name: 'Contact', to: '#contact' }, 
];

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      navDrawerOpened: false,
      showScrollToTopBtn: false
    };
  }

  componentDidMount () {
    document.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      if (!this.state.showScrollToTopBtn) {
        this.setState({showScrollToTopBtn: true});
      }
    } else {
      if (this.state.showScrollToTopBtn) {
        this.setState({showScrollToTopBtn: false});
      }
    }
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
            <a href='/' className='App-logo'> </a>
            <Navbar navlinks={navlinks} listenDrawerToggle={(drawerState) => this.setState({navDrawerOpened: drawerState})}/>
        </header>
        
        <div className={this.state.navDrawerOpened ? 'App-content App-content-lock-scroll' : 'App-content'}>
          <Routes>
            <Route index path='/' element={<Home/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='Background' element={<Background/>}/>
            <Route path='Achievements' element={<Achievements/>}/>
            <Route path='Blog' element={<Blog/>}/>
            <Route path='Projects' element={<Projects/>}/>
            <Route path='Technotes' element={<Technotes/>}/>
            <Route path='#Contact' element={<Contact/>}/>
          </Routes>

          <button className={this.state.showScrollToTopBtn ? 'App-scroll-to-top-enabled' : 'App-scroll-to-top-disabled'} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div>
              <span/>
              <span/>
              <span/>
            </div>
          </button>
        </div>

        <footer className='App-footer'>
          <div id='contact'>
            <h3>
              Looi Kian Seong
            </h3>
            
            <div>
              <FontAwesomeIcon icon={faEnvelope} size='sm'/>
              <a className='Email' href='mailto:kianseong.looi@gmail.com'> kianseong.looi@gmail.com </a>
            </div>
            
            <ul>
              <li>
                <a href='https://linkedin.com/in/kianseong' rel='noreferrer' target='_blank'>
                  <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                </a>
              </li>

              <li>
                <a href='https://github.com/JayLooi' rel='noreferrer' target='_blank'>
                  <FontAwesomeIcon icon={faGithub} size='2x'/>
                </a>
              </li>

              <li>
                <a href='https://medium.com/@kslooi' rel='noreferrer' target='_blank'>
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
}

export default App;
