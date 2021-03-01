import { NextApiRequest, NextApiResponse } from 'next';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    const sampleUserData = {
        name: 'John Doe',
        age: 28,
    };
    try {
        res.status(200).json(sampleUserData);
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default handler;
