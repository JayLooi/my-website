import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

class Navbar extends React.Component {
   constructor (props) {
       super(props);
       this.state = {
           windowInnerWidth: window.innerWidth, 
           currentActiveIndex: -1
       };
   }

   componentDidMount () {
       window.addEventListener('resize', this.windowResizeHandler);
       this.navDrawerToggle = document.querySelector('.Nav-drawer-toggle');
       this.navDrawerToggleIcon = this.navDrawerToggle.querySelector('span');
       this.navLinkList = document.querySelector('.Nav-link-list');
       this.navLinks = this.navLinkList.querySelectorAll('.Nav-link-content');
       this.navDrawerToggle.addEventListener('click', this.toggleDrawer);
       this.navLinks.forEach((el, index) => el.addEventListener('click', () => this.setTransitionDirection(el, index)))
   }

   windowResizeHandler = () => {
       if (((window.innerWidth <= 700) && (this.state.windowInnerWidth > 700)) ||
           ((window.innerWidth > 700) && (this.state.windowInnerWidth <= 700))) {
            
            if (window.innerWidth <= 700) {
                this.props.listenDrawerToggle(this.navDrawerToggle.classList.contains('open'));
                this.navLinks.forEach((el) => el.classList.remove('active-from-left', 'active-from-right', 'active-to-left', 'active-to-right'));
            } else {
                this.props.listenDrawerToggle(false);
            }
            
            this.setState({windowInnerWidth: window.innerWidth});
        }
   };

   toggleDrawer = () => {
       if (window.innerWidth <= 700) {
           this.navDrawerToggle.classList.toggle('open');
           this.navDrawerToggleIcon.classList.toggle('open');
           this.navLinkList.classList.toggle('open');
           if (this.props.listenDrawerToggle !== null && this.props.listenDrawerToggle !== undefined) {
               this.props.listenDrawerToggle(this.navDrawerToggle.classList.contains('open'));
           }
       }
   };

   setTransitionDirection = (element, index) => {
        if (window.innerWidth > 700) {
            let currActiveIndex = this.state.currentActiveIndex;
            if (currActiveIndex >= 0) {
                let currActiveNavLink = this.navLinks[currActiveIndex];
                let willBeActiveNavLink = element;
                
                if (currActiveIndex > index) {
                    willBeActiveNavLink.classList.remove('active-from-left', 'active-to-left', 'active-to-right');
                    willBeActiveNavLink.classList.add('active-from-right');
                    currActiveNavLink.classList.remove('active-to-right', 'active-from-right', 'active-from-left');
                    currActiveNavLink.classList.add('active-to-left');
                } else {
                    willBeActiveNavLink.classList.remove('active-from-right', 'active-to-left', 'active-to-right');
                    willBeActiveNavLink.classList.add('active-from-left');
                    currActiveNavLink.classList.remove('active-to-left', 'active-from-right', 'active-from-left');
                    currActiveNavLink.classList.add('active-to-right');
                }
            }
        }
       
       this.setState({currentActiveIndex: index});
   }

   componentWillUnmount () {
       window.removeEventListener('resize', this.windowResizeHandler);
       this.navDrawerToggle.removeEventListener('click', this.toggleDrawer);
       this.navLinks.forEach((el, index) => el.removeEventListener('click', () => this.setTransitionDirection(el, index)));
   }

   render () {
       return (
            <div className='Nav-main'>
                <div className='Nav-drawer-toggle'>
                    <span/>
                </div>
                <div className='Nav-link-list'>
                    <ul>
                        {
                            this.props.navlinks.map((item, itemIndex) => 
                                <li key={itemIndex}>
                                    <NavLink to={item.to} className={({isActive}) => (isActive ? 'Nav-link-active' : 'Nav-link-normal')} onClick={(window.innerWidth <= 700) ? this.toggleDrawer : null}>
                                        <div className='Nav-link-content'>
                                            {item.name}
                                            <span/>
                                        </div>
                                    </NavLink>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
       );
   }
};

export default Navbar;
