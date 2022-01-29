import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './TerminalSimulator.css';

class TerminalSimulator extends React.Component {
   constructor (props) {
       super(props);
       this.state = {};
   }

   render () {
       return (
           <div className="Terminal-main">
               <div className="Terminal-header">
                   <div className="Terminal-newtab">
                        <button className="Terminal-newtab-button">
                            <div/>
                            <div>
                                +
                            </div>
                            <div/>
                        </button>
                   </div>
                   <p>
                       kslooi@Ubuntu: ~
                   </p>
                   <div className="Terminal-window-control-panel">
                        <button className="Terminal-window-control-button maxmin">
                            <div className="Terminal-minimize"/>
                        </button>
                        <button className="Terminal-window-control-button maxmin">
                            <div className="Terminal-maximize"/>
                        </button>
                        <button className="Terminal-window-control-button close"> <FontAwesomeIcon icon={faTimes} size="xs"/> </button>
                    </div>
               </div>
               
               <div className="Terminal-body">
               </div>

           </div>
       );
   }
};

export default TerminalSimulator;
