// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  id:{
    name: any
    age: any
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe',id:{
    name:process.env.NEXT_PUBLIC_CLIENT_ID,
    age:process.env.NEXT_PUBLIC_CLIENT_SECRET
  } })
}
