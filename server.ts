import express from 'express';
import sequelize from './src/config/database';
import authRoutes from './src/routes/authRoute';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', authRoutes);

const startServer = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connected to SQLite database.');

        // Lancement du serveur
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();
