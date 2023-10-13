import { NextApiRequest, NextApiResponse } from 'next'
import Employee from '@/models/employee'
import dbConnect from '@/lib/dbConnect'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    body,
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const employee = await Employee.findById(id)
        if (!employee) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: employee })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const employee = await Employee.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!employee) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: employee })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedEmployee = await Employee.deleteOne({ _id: id })
        if (!deletedEmployee) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
    
  }
}