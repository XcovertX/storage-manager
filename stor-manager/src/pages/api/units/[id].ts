import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/dbConnect'
import Unit      from '@/models/unit'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const unit = await Unit.findById(id)
        if (!unit) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: unit })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const unit = await Unit.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!unit) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: unit })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedUnit = await Unit.deleteOne({ _id: id })
        if (!deletedUnit) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: deletedUnit })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}