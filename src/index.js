import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './components/App'

axios.get('http://localhost:3001/notes')
	.then(response => {
		const notes = response.data;
		console.log(notes);
})

/* const promise = axios.get('http://localhost:3001/notes')

promise.then(response => {

	console.log(response);
}) */

/* const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2); */

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
