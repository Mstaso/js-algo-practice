const fetch = require('node-fetch');


// fetch("https://api.nasa.gov/planetary/apod?api_key=qotF19nroUG154WhThRdruORC5PfWy2kBC0pj85O")
fetch("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=compositepars&format=json")
.then(res => res.json())
.catch(error => console.error(error))
.then(res => console.log(res))
