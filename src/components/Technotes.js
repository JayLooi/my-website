import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown-dark.css';
import './Technotes.css';

class Technotes extends React.Component {
   constructor (props) {
       super(props);
       this.state = {
           contents: [], 
           currentPageContent: '',
           currentPageFullIndex: [], 
           currentPageFullPath: ''
        };
   }

   componentDidMount () {
       this.fetchNotes('https://api.github.com/repos/jaylooi/technical-notes/contents')
       .then(data => this.setState({contents: data}, () => this.updateContent([])));
   }

   fetchNotes = (url) => {
       return (
           fetch(url)
           .then(res => res.json())
           .then(async (data) => {
               let contents = data.map(async ({name, path, url, type, download_url}) => {
                   let content = {name, path, url, type, download_url};
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
           <div className='Technotes-loading-container'>
               <div>
                    <div className='Technotes-loading-pattern'>
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

   renderContentTable = (contents, fullIndexRecorder) => {
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
                                            { this.renderContentTable(content.children, [...fullIndexRecorder, index]) }
                                        </details> : 
                                        <button onClick={() => this.updateContent([...fullIndexRecorder, index])}>
                                            { content.name } 
                                        </button>
                               }
                           </li>
                       );
                   })
               }
           </ul>
       );
   }

   updateContent = async (pageFullIndex) => {
       const {currentPage, fullIndex} = await this.updateContentPagePath(pageFullIndex);
       this.setState({currentPageFullIndex: fullIndex});

       let currentContent = <h1> Welcome to my Technical Notes Page </h1>;

       if (fullIndex.length > 0) {
           if (currentPage.type == 'dir') {
               currentContent = <h1> {currentPage.name} </h1>
            } else if (currentPage.type == 'file') {
                await fetch(currentPage.download_url)
                .then(res => res.text())
                .then(data => { currentContent = <ReactMarkdown children={data} remarkPlugins={[remarkGfm]}/> });
            }
       }

       this.setState({currentPageContent: currentContent})
   }

   updateContentPagePath = async (pageFullIndex) => {
       const lastIndex = pageFullIndex.length - 1;
       let correctedFullIndex = [];
       let currentPage = await pageFullIndex.reduce(
           async (parentPromise, currPageIndex, index) => {
               const parent = await parentPromise;
               if (parent.type == 'file') {
                   return Promise.resolve(parent);
               }
               let correctedCurrentPageIndex = currPageIndex < parent.length ? currPageIndex : parent.length - 1;
               correctedFullIndex.push(correctedCurrentPageIndex);
               let parentContent = parent[correctedCurrentPageIndex];
               return Promise.resolve(
                   (parentContent.type == 'dir' && index != lastIndex) ? 
                   parentContent.children : parentContent
                );
           }, 
           Promise.resolve(this.state.contents)
        )
        
        let currentPageFullPath = ''
        if (currentPage != null && currentPage != undefined && currentPage != this.state.contents) {
            currentPageFullPath = currentPage.path;
        }

        this.setState({currentPageFullPath: currentPageFullPath});

        return {currentPage: currentPage, fullIndex: correctedFullIndex};
   }

   renderContentHeader = () => {
       return (
           <>
           <div>
                <button onClick={() => this.updateContent([])}>
                    Technical Notes
                </button>
            </div>
            {
                this.state.currentPageFullPath.split('/').map((name, index) => {
                    return (
                            name === ''? 
                                null : 
                                <div key={index + name}>
                                    <span/>
                                    <button onClick={() => this.updateContent(this.state.currentPageFullIndex.slice(0, index + 1))}>
                                        {name}
                                    </button>
                                </div>
                    );
                })
            }
            </>
       );
   }

   renderTechnotesPage = () => {
       return (
           <div className='Technotes-main'>
               {/* <div className='Technotes-toggle-contents-table'></div> */}
               <div className='Technotes-content-header'>
                   { this.renderContentHeader() }
               </div>
               <div className='Technotes-contents-table'> { this.renderContentTable(this.state.contents, []) } </div>
               <div className='markdown-body Technotes-content'> {this.state.currentPageContent} </div>
           </div>
       );
   }

   render () {
       return (
           (this.state.contents.length > 0 && this.renderTechnotesPage()) || this.renderDataLoadingView()
       );
   }
};

export default Technotes;
