import { NextApiRequest, NextApiResponse} from 'next'



export default (request: NextApiRequest,  response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Victor'},
        {id: 2, name: 'Lucas'},
        {id: 3, name: 'Matheus'}
    ]

    return response.json(users)
}

// Serverless