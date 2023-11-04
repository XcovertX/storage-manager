import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/dbConnect'
import Tenant    from '@/models/tenant'
import Contact from '@/models/contact'
import Address from '@/models/address'
import mongoose from 'mongoose'
import { buildTenantId } from '@/utils/tenant-id-builder'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const tenants = await Tenant.find({})
        res.status(200).json({ success: true, data: tenants })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        console.log("start: ", req.body)
        const address = new Address(
          {
            _id:      new mongoose.Types.ObjectId(),
            street:   req.body.street,
            city:     req.body.city,
            state:    req.body.state,
            zipcode:  req.body.zipcode
          }
        )
        console.log("address: ", address)
        await address.save()
        const contact = new Contact(
          {
            _id:        new mongoose.Types.ObjectId(),
            firstName:  req.body.firstName,
            lastName:   req.body.lastName,
            email:      req.body.email,
            phone:      req.body.phone,
            address:    address._id,
          }
        )
        await contact.save()
        const tenantId = await buildTenantId()
        const tenant = new Tenant(
          {
            _id:            new mongoose.Types.ObjectId(),
            tenantId:       tenantId,
            primaryContact: contact._id,
            gateAccess:     req.body.gateAccess,
            altGateAccess:  req.body.altGate
          }
        )
        await tenant.save();
        res.status(201).json({ success: true, data: tenant })
      } catch (error) {
        console.log("POST ERROR: ", error)
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}