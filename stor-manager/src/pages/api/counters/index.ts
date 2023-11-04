import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/dbConnect'
import Counter   from '@/models/counter'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  await dbConnect()

  try {
    const count = await Counter.findOneAndUpdate({ type: 'tenantId' }, { $inc: { count: 1 } })
    res.status(200).json({ success: true, data: count })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}