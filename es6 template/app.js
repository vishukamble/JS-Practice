const name = 'John';
const age = 33;
const job = 'Backend Developer';
const city = 'Chicago';
let html;

// without template string (es5)
html =
  '<ul><li>Name: ' +
  name +
  '</li><li>Age: ' +
  age +
  '</li><li>Job: ' +
  job +
  '</li><li>City: ' +
  city +
  '</li></ul>';

//with template strings
function hello() {
  return 'Hello World';
}

html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${3432 * 384}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>
`;

document.body.innerHTML = html;
