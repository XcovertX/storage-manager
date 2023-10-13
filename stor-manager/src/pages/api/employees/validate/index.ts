import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../../lib/dbConnect'
import Employee from '../../../../models/employee'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  await dbConnect()
  console.log('here')
  switch (method) {
    case 'POST':
      try {
        const employee = await Employee.findOne(
          req.body
        )
        
        console.log(req.body)
        res.status(201).json({ success: true, data: employee })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      console.log('default')
      res.status(400).json({ success: false })
      break
  }
}