
import type { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export class AuthController {
    static async register(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;

        try {
            if (!email || !password) {
                res.status(400).json({ error: 'Email and password are required' });
                return;
            }

            const result = await AuthService.register(email, password);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    static async login(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;

        try {
            if (!email || !password) {
                res.status(400).json({ error: 'Email and password are required' });
                return;
            }

            const result = await AuthService.login(email, password);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }
}
