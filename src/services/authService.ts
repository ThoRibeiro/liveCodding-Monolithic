import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

const secretKey = process.env.JWT_SECRET || 'defaultSecretKey'

if (!process.env.JWT_SECRET) {
    console.warn('JWT_SECRET is not defined. Using default secret key.');
}

export class AuthService {
    static async register(email: string, password: string): Promise<{ message: string }> {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            throw new Error('Email already in use');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ email, password: hashedPassword });

        return { message: 'User registered successfully' };
    }

    static async login(email: string, password: string): Promise<{ token: string }> {
        const user = await User.findOne({ 
            where: { email },
            attributes: ['id', 'email', 'password']
        });
        if (!user) {
            throw new Error('Invalid email');
        }
        
        const hashedPassword = user.getDataValue('password')
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);
        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }

        const token = jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
        return { token };
    }
}
