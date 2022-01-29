import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faCode, faTools } from '@fortawesome/free-solid-svg-icons'

const skills = [{
  categoryName: 'Programming Language', 
  categoryIcon: <FontAwesomeIcon icon={faCode} style={{marginTop: '20px', color: 'white'}}/>,
  list: ['C', 'C++', 'Python', 'Javascript']
}, {
  categoryName: 'Technical skill', 
  categoryIcon: <FontAwesomeIcon icon={faCogs} style={{marginTop: '20px', color: 'white'}}/>,
  list: ['Embedded programming', 'Image processing', 'Machine learning', 'Mobile app development', 'Web app development']
}, {
  categoryName: 'Software tool', 
  categoryIcon: <FontAwesomeIcon icon={faTools} style={{marginTop: '20px', color: 'white'}}/>,
  list: ['MATLAB', 'Vector CANoe', 'Solidworks', 'Gazebo']
}];

const briefIntro = 'Hi, I\'m Looi Kian Seong. \n \
                    I am a highly motivated Software Engineer with focus on Embedded System, Robotics and Automotive. \n  \
                    I always get myself immersed in variety of interesting software projects. ';

class About extends React.Component {
   constructor (props) {
       super(props);
       this.state = {};
   }

   renderSkillCategories = (category, categoryIndex) => {
       return (
           <div key={categoryIndex} className='Skill-card'>
               <div>
                   {category.categoryIcon}
                   {category.categoryName}
               </div>
               <ul>
                   {category.list.map((item, itemIndex) => <li key={itemIndex}> {item} </li>)}
               </ul>
           </div>
       );
   };

   render () {
       return (
           <div className='About-main'>
               <h1> About Me </h1>
               <div className='About-intro'>
                 <p>
                  {briefIntro}
                 </p>
               </div>
               
               <div className='Skills-main'>
                   <h2> Skills </h2>
                   <div className='Skill-cards-container'>
                       {skills.map(this.renderSkillCategories)}
                    </div>
                </div>
           </div>
       );
   }
};

export default About;
