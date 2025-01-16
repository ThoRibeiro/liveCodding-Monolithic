import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';


export class AuthService {
    static async register(email: string, password: string): Promise<{ message: string }> {
        
    }

    static async login(email: string, password: string): Promise<{ token: string }> {
        
    }
}
