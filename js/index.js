import './../css/style.css'

const root = document.querySelector("#root")

root.innerHTML = 'Hello, Webpack!!!'

console.log('Running App version ' + VERSION);
console.log( PRODUCTION );
console.log( BROWSER_SUPPORTS_HTML5 );
console.log( INIT_DATA );
console.log( ONE );
console.log( TWO );
console.log( THREE );

console.log( process.env.NODE_ENV );
console.log( process.env.LOGGING_LEVEL );
console.log( process.env.DEBUG );

