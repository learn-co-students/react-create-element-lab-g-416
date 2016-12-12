//Code React element here
const meInReact =
  React.createElement('div', {className: 'me'},
    React.createElement('h1', {}, 'An Awesome Person'),
    React.createElement('p', {}, "Who is learning React"),
    React.createElement('ul', {},
      [
        React.createElement('li', {className: 'deep'}, 'JavaScript'),
        React.createElement('li', {className: 'NotSo'}, 'React'),
        React.createElement('li', {className: 'Girls'}, 'Movies'),
        React.createElement('li', {className: 'Girls'}, 'Ice cream')
      ]
    ));

ReactDOM.render(meInReact, document.getElementById('main'));
