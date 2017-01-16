//Code React element here

const name = React.createElement('h1', {}, 'An Awesome Person');
const bio = React.createElement('p', {}, 'Who is learning React');
const interests = React.createElement('ul', {}, [
  React.createElement('li', {}, 'JavaScript'),
  React.createElement('li', {}, 'React'),
  React.createElement('li', {}, 'Movies'),
  React.createElement('li', {}, 'Ice cream')
]);
const meInReact = React.createElement('div', { className: 'me'}, [name, bio, interests]);

ReactDOM.render(meInReact, document.getElementById('main'));
