//Code React element here

const title = React.createElement('h1', {}, 'An Awesome Person');
const subtitle = React.createElement('p', {}, 'Who is learning React');

const javascript = React.createElement('li', {}, "JavaScript")
const react = React.createElement('li', {}, "React")
const movies = React.createElement('li', {}, "Movies")
const icecream = React.createElement('li', {}, "Ice cream")

const list = React.createElement('ul', {className: "me__interests"}, [javascript, react, movies, icecream])

const meInReact = React.createElement('div', {className: "me"}, [title, subtitle, list]);

ReactDOM.render(
  meInReact,
  document.getElementById('main')
);