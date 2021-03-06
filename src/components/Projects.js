import React from 'react';
import './Projects.css';

class Struct extends Function {
    constructor (...keys) {
        super('...args', 'return this._call(...args)');
        this._this = this.bind(this);
        this._keys = keys;
        this._keys.forEach((k) => {
            if ((typeof(k) != "string") && (typeof(k) != "number")) {
                throw new Error("Error: Invalid key. \nkey of Struct member should be string or number.");
            }
        });
        return this._this;
    }

    _call = (...args) => {
        var struct = {};
        this._keys.forEach((k, i) => {
            struct[k] = args[i];
        });

        return struct;
    }
}

const projectsStruct = new Struct('title', 'brief', 'details');
const projectsList = [
    projectsStruct(
        'Code Change Impact Analysis', 
        'Internship Project: Scrape code change information for impact analysis', 
        [
            'Built with Python language. ', 
            'Consumed Jira API to fetch information of tickets. ', 
            'Developed Python script to perform git diff command to find code changes. ',
            'Developed Python script to parse XML files generated by Doxygen. ',
            'Utilised Python Django Framework to work with PostgreSQL database. ',  
            'Integrated all the functions into a GUI by using Python Tkinter library. '
        ]),
    projectsStruct(
        'Document Translation', 
        'UTM AIROST Team Project: A project to translate datasheet/user manual from Chinese to English', 
        [
            'Developed algorithm to detect horizontal and vertical lines in documents by using OpenCV. ', 
            'Developed GUI by using Python Tkinter library. '
        ]
    ),
    projectsStruct(
        'Remote Arduino', 
        'Hobbyist Project: Enable remote logging and OTA firmware update for Arduino UNO', 
        [
            'Established communication between Arduino UNO and ESP8266 via UART. ', 
            'Developed an MQTT client program for ESP8266 to communicate to remote host. ', 
            'Utilised a GPIO port of ESP8266 to control the reset line of Arduino UNO. ', 
            'Developed algorithm based on Optiboot (Arduino UNO\'s default bootloader) to update Arduino firmware through ESP8266 from remote host. ', 
            'Developed a Python program with GUI to act as the remote host program. '
        ]
    ),
    projectsStruct(
        'IoT System for Environment Monitoring', 
        'Industrial Project (Team-based): An IoT system to monitor environmental parameters near radio base station. ', 
        [
            'Developed Python modules to interface with Honeywell PM2.5 sensor, rain gauge and GPS connected to Raspberry Pi. ', 
            'Developed Python program to send sensors data from Raspberry Pi to backend server by using MQTT protocol. ', 
            'Created a bash script to setup MQTT broker in server. ', 
            'Developed an ExpressJS application to provide APIs for frontend to manage different devices (Raspberry Pi) in the MQTT broker. '
        ]
    ),
];

class Projects extends React.Component {
   constructor (props) {
       super(props);
       this.state = {};
   }

   renderProjectContainer = (project, index) => {
       return (
           <div className='Projects-item-container' key={index}>
               <div className='Projects-title'>
                   {project.title}
               </div>

               <div className='Projects-brief'>
                   {project.brief}
               </div>

               <ul className='Projects-details'>
                   {project.details.map((detail, detailIndex) => <li key={detailIndex}> {detail} </li>)}
               </ul>
           </div>
       );
   }

   render () {
       return (
           <div className='Projects-main'>
               {
                   projectsList.map(this.renderProjectContainer)
               }
           </div>
       );
   }
};

export default Projects;
