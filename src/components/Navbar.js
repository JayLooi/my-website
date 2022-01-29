import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

class Navbar extends React.Component {
   constructor (props) {
       super(props);
       this.state = {
           windowInnerWidth: window.innerWidth
       };
   }

   componentDidMount () {
       window.addEventListener('resize', this.windowResizeHandler);
       this.navDrawerToggle = document.querySelector('.Nav-drawer-toggle');
       this.navDrawerToggleIcon = this.navDrawerToggle.querySelector('span');
       this.navLinkList = document.querySelector('.Nav-link-list');
       this.navDrawerToggle.addEventListener('click', this.toggleDrawer);
   }

   windowResizeHandler = () => {
       if (((window.innerWidth <= 700) && (this.state.windowInnerWidth > 700)) ||
           ((window.innerWidth > 700) && (this.state.windowInnerWidth <= 700))) {
               this.setState({windowInnerWidth: window.innerWidth});
        }
   };

   toggleDrawer = () => {
       if (window.innerWidth <= 700) {
           this.navDrawerToggle.classList.toggle('open');
           this.navDrawerToggleIcon.classList.toggle('open');
           this.navLinkList.classList.toggle('open');
       }
   };

   componentWillUnmount () {
       window.removeEventListener('resize', this.windowResizeHandler);
       this.navDrawerToggle.removeEventListener('click', this.toggleDrawer);
   }

   render () {
       return (
            <div className='Nav-main'>
                <div className='Nav-drawer-toggle'>
                    <span/>
                </div>
                <div className='Nav-link-list'>
                    <ul style={{marginTop: (window.innerWidth <= 700)? this.props.contentTopOffset:'0px', marginBottom: (window.innerWidth <= 700)? this.props.contentTopOffset:'0px'}}>
                        {
                            this.props.navlinks.map((item, itemIndex) => 
                                <li key={itemIndex}>
                                    <NavLink to={item.to} className={({isActive}) => (isActive ? 'Nav-link-active' : 'Nav-link')} onClick={this.toggleDrawer}> 
                                        {item.name} 
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
