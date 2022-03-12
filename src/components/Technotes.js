import React from 'react';
import './Technotes.css'

class Technotes extends React.Component {
   constructor (props) {
       super(props);
       this.state = {contents: []};
   }

   componentDidMount () {
       this.fetchNotes('https://api.github.com/repos/JayLooi/my-website/contents')
       .then(data => this.setState({contents: data}));
   }

   fetchNotes = (url) => {
       return (
           fetch(url)
           .then(res => res.json())
           .then(async (data) => {
               let contents = data.map(async ({name, url, type}) => {
                   let content = {name, url, type};
                   if (type == 'dir') {
                       const children = await this.fetchNotes(url)
                       content['children'] = children;
                   }

                   return content;
                });
                
                return await Promise.all(contents);
            })
       );
   }

   renderDataLoadingView = () => {
       return (
           <div className='Technote-loading-container'>
               <div>
                    <div className='Technote-loading-pattern'>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                    </div>
               </div>

               <p>
                   Loading
                   <span> . </span>
                   <span> . </span>
                   <span> . </span>
               </p>
           </div>
       )
   };

   renderContentTable = (contents) => {
       return (
           <ul>
               {
                   contents.map((content, index) => {
                       return (
                           <li key={index + content.name}>
                               {
                                   content.type == 'dir' ? 
                                        <details>
                                            <summary> { content.name } </summary>
                                            { this.renderContentTable(content.children) }
                                        </details> : 
                                        <div> { content.name } </div>
                               }
                           </li>
                       );
                   })
               }
           </ul>
       );
   }

   renderContent = () => {
       return (
           <div className='Technotes-main'>
               {/* <div className='Technotes-toggle-contents-table'></div> */}
               <div className='Technotes-content-header'></div>
               <div className='Technotes-contents-table'> { this.renderContentTable(this.state.contents) } </div>
               <div className='Technotes-content'></div>
           </div>
       );
   }

   render () {
       return (
           (this.state.contents.length > 0 && this.renderContent()) || this.renderDataLoadingView()
       );
   }
};

export default Technotes;
