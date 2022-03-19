import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faCode, faTools } from '@fortawesome/free-solid-svg-icons'

const skills = [{
  categoryName: 'Programming Language', 
  categoryIcon: <FontAwesomeIcon icon={faCode} style={{marginTop: '20px', color: 'white'}}/>,
  list: ['C', 'C++', 'Python', 'JavaScript']
}, {
  categoryName: 'Technical skill', 
  categoryIcon: <FontAwesomeIcon icon={faCogs} style={{marginTop: '20px', color: 'white'}}/>,
  list: ['Embedded programming', 'Image processing', 'Machine learning', 'Mobile app development', 'Web app development']
}, {
  categoryName: 'Software / Tool', 
  categoryIcon: <FontAwesomeIcon icon={faTools} style={{marginTop: '20px', color: 'white'}}/>,
  list: ['MATLAB', 'Oracle VirtualBox', 'Solidworks', 'Gazebo']
}];

const briefIntro = 'A highly motivated Software Engineer with focus on Embedded System, Robotics and Automotive. ';

class About extends React.Component {
   constructor (props) {
       super(props);
       this.state = {};
   }

   renderSkillCategories = (category, categoryIndex) => {
       return (
           <div key={categoryIndex} className='About-skill-card'>
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
                   <p> {briefIntro} </p>
               </div>
               
               <div className='About-skills'>
                   <h2> Skills </h2>
                   <div className='About-skill-cards-container'>
                       {skills.map(this.renderSkillCategories)}
                    </div>
                </div>
           </div>
       );
   }
};

export default About;
