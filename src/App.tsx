import axios from 'axios'
import { useEffect, useState } from 'react'

interface IAppState {
	id: number
	name: string
	// description: string
	// image: string
	// price: number
	// category: string
	// countInStock: number
	// brand: string
	// createdAt: string
	// updatedAt: string
}

function App() {
	const [value, setValue] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState([])
	const API =
		'https://api-v2.elchocrud.pro/api/v1/4fd13522fed9865f45ac422983126904/get-lesson'
	const getData = async () => {
		try {
			const { data } = await axios.get(API)
			console.log('Successfully get', data)
			setIsLoading(false)
			setData(data)
		} catch (e: any) {
			console.log('Error getting data:', e)
			setIsLoading(false)
		}
	}
	useEffect(() => {
		getData()
	}, [])
	async function postData() {
		try {
			const { data } = await axios.post(
				'https://api-v2.elchocrud.pro/api/v1/4fd13522fed9865f45ac422983126904/get-lesson',
				{
					name: value
				}
			)
			console.log('Successfully post', data)
		} catch (e: any) {
			console.log('Error posting data:', e)
		}
		getData()
	}

	async function handleDel(id: number) {
		try {
			const { data } = await axios.delete(`${API}/${id}`)
			console.log('Successfully delete', data)
		} catch (e: any) {
			console.log('Error deleting data:', e)
		}
		getData()
	}

	return (
		<>
			{isLoading ? (
				<h1>loading...</h1>
			) : (
				<>
					{data.map((el: IAppState) => (
						<h1>
							<span>{el.name}</span>
							<button onClick={() => handleDel(el.id)}>delete</button>
						</h1>
					))}
				</>
			)}
			<div className=''>
				<input
					value={value}
					onChange={e => setValue(e.target.value)}
					type='text'
				/>
				<button onClick={() => postData()}>add</button>
			</div>
		</>
	)
}

export default App
