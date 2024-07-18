import { Media } from '../../src/types/media'

import express from 'express'
const app = express()

const baseApiUrl = 'https://api.themoviedb.org/3'
const TMDB_API_KEY = process.env.TMDB_API_KEY

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Logger middleware
app.use((req, res, next) => {
	console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
	next()
})

// Set headers
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
	next()
})

// Get trending medias
app.get('/api/trending', async (req, res) => {
	const { category, time } = req.query

	const response = await fetch(`${baseApiUrl}/trending/${category}/${time}?api_key=${TMDB_API_KEY}`)
	const data = await response.json()

	const media: Media[] = data.results

	res.json({
		media: media.map((item) => ({
			id: item.id,
			title: item.title,
			name: item.name,
			backdrop_path: item.backdrop_path,
			poster_path: item.poster_path,
			media_type: item.media_type,
			release_date: item.release_date,
			first_air_date: item.first_air_date,
		})),
	})
})

app.listen(8000, () => console.log('Server running on port 8000'))
