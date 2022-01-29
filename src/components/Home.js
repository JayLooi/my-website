import React from 'react';
import './Home.css'

var greeting = 'Hello,\nWorld!';

const charToBin = (c) => c.charCodeAt(0).toString(2);

class Home extends React.Component {
   constructor (props) {
       super(props);
       this.state = {};
   }

   render () {
       return (
           <div className='Home-main'>
               <div className='Home-greeting-box'>
                    {
                        greeting.split('\n').map((str, index) => {
                            return (
                                <p key={index} data={str.split('').map(charToBin).join(' ')} data-mobile={str}/>
                            );
                        })
                    }
                </div>
                <a href='/About'>
                    <div className='Home-find-more'>
                        Find out more
                    </div>
                </a>
           </div>
       );
   }
};

export default Home;
