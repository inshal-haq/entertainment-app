import express from 'express'
import media from './routes/media'

const app = express()

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

// Routes
app.use('/api/media', media)

app.listen(8000, () => console.log('Server running on port 8000'))

export default app
