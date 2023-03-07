import express from 'express'
import { postBankDetails } from '../controllers/bankAccountDetails.js'

const router = express.Router()

router.post('/bankacc', postBankDetails  )

export default router