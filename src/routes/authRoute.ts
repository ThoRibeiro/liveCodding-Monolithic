import { Router } from 'express';
import { AuthController } from '../controllers/authController';

const authRoutes = Router();

// Endpoint pour l'inscription
authRoutes.post('/register', AuthController.register);

// Endpoint pour la connexion
authRoutes.post('/login', AuthController.login);

export default authRoutes;
