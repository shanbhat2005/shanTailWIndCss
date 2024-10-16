const { SourceMapConsumer } = require("source-map-js");

let button=document.querySelector('explorebtn');

button.addEventListener('click',function(event){
    event.preventDefault();
})

let course=document.getElementById('courses');

course.scrollIntoView({behavior:"smooth"});