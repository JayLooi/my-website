import React from 'react';

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
           .then(data => {
               let contents = data.map(({name, url, type}) => {
                   let content = {name, url, type};
                   if (type == 'dir') {
                       this.fetchNotes(url)
                       .then(data => content['children'] = data);
                   }

                   return content;
                });

                return contents;
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

   renderContent = () => {
       return (
           null
       );
   }

   render () {
       return (
           (this.state.contents.length == 0) ? 
                this.renderDataLoadingView() :
                this.renderContent()
       );
   }
};

export default Technotes;
