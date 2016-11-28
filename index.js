//Code React element here

const meH1 = React.createElement('h1', {}, "An Awesome Person");
const mePara = React.createElement('p',{}, "Who is learning React");
const interestChild1 = React.createElement('li', {}, 'JavaScript');
const interestChild2 = React.createElement('li', {}, 'React');
const interestChild3 = React.createElement('li', {}, 'Movies');
const interestChild4 = React.createElement('li', {}, 'Ice cream');

const meInterests = React.createElement('ul', {className: 'me__interests'}, [interestChild1,interestChild2,interestChild3, interestChild4]);

const meInReact = React.createElement('div', {className: 'me'}, [meH1,mePara,meInterests]);

ReactDOM.render(meParent, document.getElementById('main'));

