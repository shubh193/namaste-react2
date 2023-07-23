/*
const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'hello react first example'
);
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
*/
/**
 *
 *<div id="parent">
 *  <div id = "child">
 *      <h1>
 *          i am a h1 tag inside child
 *      </h1>
 *  </div>
 *</div>
 *
 */

/*
const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'i am a h1 tag inside child'),
    React.createElement('h2', {}, 'i am a h2 tag inside child'),
  ])
);
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
*/

/*
 *
 *<div id="parent">
 *  <div id = "child">
 *      <h1>
 *          i am a h1 tag inside child
 *      </h1>
 *  </div>
 * <div id = "child2">
 *      <h1>
 *          i am a h1 tag inside child
 *      </h1>
 *  </div>
 *</div>
 *
 */

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'i am a h1 tag inside child'),
    React.createElement('h2', {}, 'i am a h2 tag inside child'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'i am a h1 tag inside child'),
    React.createElement('h2', {}, 'i am a h2 tag inside child'),
  ]),
]);
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
