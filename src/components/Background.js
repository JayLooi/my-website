import React from 'react';
import './Background.css';

const background = [
    {
        subsectionName: 'Experiences', 
        items: [
            {
                title: 'Embedded Software Engineer', 
                place: 'Continental Automotive Singapore Pte Ltd', 
                startDate: 'August 2021', 
                endDate: 'Present', 
                elaborations: [
                    'Software developer in functional safety feature for ECU. ', 
                    'Analyse software issues reported by tester as well as customer, and provide feasible solutions. ', 
                    'Automate repetitive process in software development with Python script. ', 
                    'Port over legacy code to AUTOSAR architecture. '
                ]
            }, 

            {
                title: 'Embedded Software Engineer', 
                place: 'Daviscomms Singapore Pte Ltd', 
                startDate: 'December 2020', 
                endDate: 'July 2021', 
                elaborations: [
                    'Responsible for board birng-up. ', 
                    'Embedded system debugging with J-Link debugger, Atmel-ICE, Oscilloscope and RF Spectrum Analyser. ', 
                    'Drivers development for peripherals on EFR32 microcontroller. ', 
                    'Applications development for EFR32 microcontroller such as RF communication, interfacing with ESP8266 WiFi module, LEDs indicator, battery level measurement and power saving mode. ', 
                    'State machine implementation on EFR32 microcontroller to work as a BLE co-processor. ', 
                    'Custom RF protocol implementation and application development on ATA8510 microcontroller. '
                ]
            }
        ]
    }, 

    {
        subsectionName: 'Educations', 
        items : [
            {
                title: 'Bachelor of Engineering (Electrical-Mechatronics)', 
                place: 'Universiti Teknologi Malaysia', 
                startDate: 'August 2016', 
                endDate: 'August 2020',
                elaborations: [
                    'First-class honours', 
                    'Dean-list award', 
                    'CGPA 3.88'
                ]
            }, 

            {
                title: 'Malaysian Higher School Certificate (STPM)', 
                place: 'SMK Horley Methodist', 
                startDate: 'May 2014', 
                endDate: 'December 2015',
                elaborations: [
                    'A-level equivalent', 
                    'CGPA 4.0',
                    'Subjects: Physics, Mathematics, Chemistry, General Studies'
                ]
            },
        ]
    }
]

class Background extends React.Component {
   constructor (props) {
       super(props);
       this.state = {};
   }

   renderBackgroundSubsection = (data, subsectionIndex) => {
       return (
           <div key={subsectionIndex} className='Background-subsection'>
               <h1>
                   {data.subsectionName}
               </h1>

               <div className='Background-subsection-main'>
                    <div className='Background-subsection-content'>
                        {
                                data.items.map((item, itemIndex) => {
                                    return (
                                        <div key={itemIndex}>
                                            <div className='Background-subsection-content-time'>
                                                <div className='Background-timeline-bullet'>
                                                    <div/>
                                                </div>
                                                <span>
                                                    {item.startDate} - {item.endDate}
                                                </span>
                                            </div>
                                            
                                            <div className='Background-content-title'>
                                                {item.title}
                                            </div>

                                            <div className='Background-content-place'>
                                                {item.place}
                                            </div>

                                            <ul>
                                                {
                                                    item.elaborations.map((point, pointIndex) => <li key={pointIndex}> {point} </li>)
                                                }
                                            </ul>
                                        </div>
                                    );
                                })
                            }
                    </div>
                </div>
           </div>
       )
   };

   render () {
       return (
           <div className='Background-main'>
                {
                    background.map(this.renderBackgroundSubsection)
                }
           </div>
       );
   }
};

export default Background;
