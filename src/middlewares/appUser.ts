import type { Request, Response } from 'express';

export default function appUser(_request: Request, response: Response) {
    response.status(404).json({ message: 'Página não encontrada.' });
}