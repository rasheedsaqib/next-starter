import { NextApiHandler } from 'next'

interface Data {
  name: string
}

const handler: NextApiHandler<Data> = (request, response) => {
  response.status(200).json({ name: 'John Doe' })
}

export default handler
