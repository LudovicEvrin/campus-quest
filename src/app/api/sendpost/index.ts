/*import { NextApiRequest, NextApiResponse } from 'next';
import conn from './../../api/db';

// Vous pouvez définir un type pour le corps de la requête si vous connaissez sa structure
interface RequestBody {
    content: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        console.log("req nom", req.body);
        const body: RequestBody = req.body;
        const query = 'INSERT INTO posts(content) VALUES($1)';
        const values = [body.content];

        const result = await conn.query(query, values);
        console.log("ttt", result);

        // Envoyer une réponse HTTP en cas de succès
        res.status(200).json({ message: 'Post created successfully', result });
    } catch (error) {
        console.error(error);

        // Envoyer une réponse HTTP en cas d'erreur
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};*/