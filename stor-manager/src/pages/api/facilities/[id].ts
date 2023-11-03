import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/dbConnect'
import Facility  from '@/models/tenant'

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
        const facility = await Facility.findById(id)
        if (!facility) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: facility })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const facility = await Facility.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!facility) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: facility })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedFacility = await Facility.deleteOne({ _id: id })
        if (!deletedFacility) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: deletedFacility })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}