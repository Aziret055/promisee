import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Scope from './Scope.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		{/* <App /> */}
		<Scope />
	</React.StrictMode>
)
