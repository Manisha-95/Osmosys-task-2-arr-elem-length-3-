// Import stylesheets
import './style.css';

var x=["cat","ball","mango"];
var m=[];
for(var i=0;i<x.length;i++)
{
if(x[i].length>3)
m.push(x[i]);
}
console.log(m);
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;