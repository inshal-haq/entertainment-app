import express from 'express'
import {
	getTrendingMedia,
	getRecommendedMedia,
	getSearchedMedia,
} from '../controllers/mediaController'

const router = express.Router()

// Get trending media
router.get('/trending', getTrendingMedia)

// Get recommended media
router.get('/recommended', getRecommendedMedia)

// Get searched media
router.get('/search', getSearchedMedia)

export default router
