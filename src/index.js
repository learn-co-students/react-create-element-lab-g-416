import React from 'react';
import ReactDOM from 'react-dom';


const meInReact = React.createElement('div', {className: "me"},
  React.createElement('h1', {}, 'An Awesome Person'),
  React.createElement('p', {}, 'Who is learning React'),
  React.createElement('ul', {className: "my-interests"}, 
    React.createElement('ul', {}, 'JavaScript'),
    React.createElement('ul', {}, 'React'),
    React.createElement('ul', {}, 'Movies'),
    React.createElement('ul', {}, 'Ice cream')
  )

);



ReactDOM.render(
  meInReact, 
  document.getElementById('root')
);

export default meInReact


// IMPORTANT!!!! uncomment the lines below to make your tests work
/*
ReactDOM.render(
  meInReact, 
  document.getElementById('root')
);

export default meInReact
*/