import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect'
import Tenant from '../../../models/tenant'

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
        const tenant = await Tenant.findById(id)
        if (!tenant) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: tenant })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const tenant = await Tenant.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!tenant) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: tenant })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedPet = await Tenant.deleteOne({ _id: id })
        if (!deletedPet) {
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