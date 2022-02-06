import React from 'react';
import './Blog.css';

class Blog extends React.Component {
   constructor (props) {
       super(props);
       this.state = {blogData: []};
   }

   componentDidMount () {
       this.fetchListOfBlogsFromMedium();
   }

   fetchListOfBlogsFromMedium = () => {
       fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kslooi')
       .then(res => res.json())
       .then(data => data.items.forEach((item) => {
           this.fetchBlogPreviewData(item)
           .then((res) => this.setState(prev => {
               return { blogData: [...prev.blogData, res] }
           }))
       }))
       .catch(() => {});
   };

   fetchBlogPreviewData = (blog) => {
       return (
           fetch(`https://api.microlink.io/?url=${blog.link}`)
           .then(res => res.json())
           .then(data => {
               let previewData = data.data;
            //    console.log(previewData);
               return {
                   pubDate: new Date(blog.pubDate.replace(' ', 'T')).toLocaleDateString('default', {day: 'numeric',year: 'numeric', month: 'long'}), 
                   title: previewData.title, 
                   description: previewData.description,
                   img: previewData.image,
                   url: previewData.url
                };
            })
       );
   };

   renderDataLoadingView = () => {
       return (
           <div className='Blog-loading-container'>
               <div>
                    <div className='Blog-loading-pattern'>
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

   renderBlogPreviewData = () => {
       return (
        <div className='Blog-main'>
            <div className='Blog-preview-list'>
            {this.state.blogData.map((data, dataIndex) => {
                return (
                    <div key={dataIndex} className='Blog-preview-content'>
                        <a href={data.url} className='Blog-content-link'>
                            <img src={data.img.url} className='Blog-preview-image' alt=''/>
                            
                            <h1>
                                {data.title}
                            </h1>
                        </a>

                        <p className='Blog-preview-description'>
                            {data.description}
                        </p>

                        <p className='Blog-content-pub-date'>
                            ( {data.pubDate} )
                        </p>
                    </div>
                );
                })}
            </div>

            <a href='https://medium.com/@kslooi' className='Blog-findout-more' rel='noreferrer' target='_blank'>
                Find out more
            </a>
        </div>
       );
   };

   render () {
       return (
            (this.state.blogData.length === 0) ? 
                this.renderDataLoadingView() : 
                this.renderBlogPreviewData()
       );
   }
};

export default Blog;
