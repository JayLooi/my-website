import React from 'react';
import './Achievements.css';

const achievements = [
    {
        title: 'The Great Lab (TGL) Grand Design Challenge 2019', 
        award: 'First Runner-Up',
        description: 'Develop and improve water quality monitoring system. ', 
        roles: [
            {
                role: 'Embedded software developer', 
                responsibilities: [
                    'Developed application to interface with SD module', 
                    'Studied on SIM7000 wireless module, and ported over previous code to accommodate this new wireless module. '
                ]
            }, 

            {
                role: 'Mobile app developer', 
                responsibilities: [
                    'Improved the visualisation of previous mobile app. '
                ]
            }
        ]
    }, 

    {
        title: 'Hack for Good 2.0 Hackathon 2019', 
        award: 'First Prize', 
        description: 'Participated in a team to develop IoT-enabled water quality monitoring system. ', 
        roles: [
            {
                role: 'Embedded software developer', 
                responsibilities: [
                    'Studied on Neoway N20 NB-IoT wireless module, and developed interface for Arduino to communicate with. ', 
                    'Implemented MQTT protocol',  
                    'Tested water quality sensors. '
                ]
            }, 

            {
                role: 'Mobile app developer', 
                responsibilities: [
                    'Developed mobile app for water quality data visualisation. '
                ]
            }
        ]
    }, 

    {
        title: 'ABU ROBOCON 2018, Ninh Binh', 
        award: 'Quarterfinalist', 
        description: 'Robot contest organised by Asia-Pacific Broadcasting Union (ABU) in Vietnam.',
        roles: [
            {
                role: 'Team leader', 
                responsibilities: [
                    'Planned for each milestone of the team. ', 
                    'Prepared team activity reports and robot documentation. '
                ]
            },
            
            {
                role: 'Robot mechanical designer and fabricator', 
                responsibilities: [
                    'Designed robot from scratch using Solidworks and fabricated using various power tools. '
                ]
            }
        ]
    }, 

    {
        title: 'National ROBOCON Malaysia 2018', 
        award: 'Champion', 
        description: 'Domestic Robot contest in Malaysia where Champion qualified to represent Malaysia for international contest.',
        roles: [
            {
                role: 'Team leader', 
                responsibilities: [
                    'Planned for each milestone of the team. ', 
                    'Prepared team activity reports and robot documentation. '
                ]
            },
            
            {
                role: 'Robot mechanical designer and fabricator', 
                responsibilities: [
                    'Designed robot from scratch using Solidworks and fabricated using various power tools. '
                ]
            }
        ]
    }, 

    {
        title: 'ABU ROBOCON 2017, Tokyo', 
        award: 'First Runner-Up', 
        description: 'Robot contest organised by Asia-Pacific Broadcasting Union (ABU) in Japan.',
        roles: [
            {
                role: 'Robot mechanical designer and fabricator', 
                responsibilities: [
                    'Designed robot from scratch using Solidworks and fabricated using various power tools. '
                ]
            }
        ]
    }
];

class Achievements extends React.Component {
   constructor (props) {
       super(props);
       this.state = {};
   }

   render () {
       return (
           <div className='Achievements-main'>
               <div className='Achievements-container'>
                   <div className='Achievements-contents'>
                       {
                            achievements.map((item, itemIndex) => {
                                return (
                                    <div key={itemIndex}>
                                        <div className='Achievements-content-header'>
                                            <div className='Achievement-content-bullet'>
                                                <div/>
                                            </div>

                                            <div className='Achievements-content-title'>
                                                <h3>
                                                    {item.title}
                                                </h3>

                                                <h4>
                                                    {item.award}
                                                </h4>
                                            </div>
                                        </div>

                                        <p className='Achievements-content-description'>
                                            {item.description}
                                        </p>

                                        <ul className='Achievements-content-roles'>
                                            {
                                                item.roles.map((role, roleIndex) => {
                                                    return (
                                                            <details key={roleIndex}>
                                                                <summary>
                                                                    {role.role}
                                                                </summary>
                
                                                                <ul>
                                                                    {
                                                                        role.responsibilities.map((responsibility, responsibilityIndex) => {
                                                                            return (
                                                                                <li key={responsibilityIndex}>
                                                                                    {responsibility}
                                                                                </li>
                                                                            );
                                                                        })
                                                                    }
                                                                </ul>
                                                            </details> 
                                                    );
                                                })
                                            }                                      
                                        </ul>
                                                
                                    </div>
                                );
                            })
                       }
                   </div>
               </div>
           </div>
       );
   }
};

export default Achievements;
