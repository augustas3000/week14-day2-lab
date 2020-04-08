import React from 'react';
import NewsItem from './NewsItem';



const NewsList = (props) => {

  const stories = props.stories.map((story, i) => {
    return (<NewsItem key={i} details={story} position={i+1} />);
  });

  return(
    <div>
      {stories}
    </div>
  )



}








export default NewsList;



// const newsItemsNodes = props.stories.map((story, index) => {
//     return (
//       <NewsItem
//         key={index}
//         title={story.title}
//         author={story.by}
//         storyUrl={story.url}
//         type={story.type}
//         score={story.score}
//       />
//     )
// });
