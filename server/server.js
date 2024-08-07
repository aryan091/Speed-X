import express from 'express';
import metricsRouter from './src/routes/metrics.routes.js'; // Make sure to add the .js extension

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Use the metrics router
app.use('/metrics', metricsRouter);

app.get('/api/health', (req, res) => {
    res.json({ 
        service:'Speed-X Backend Server',
        status:'ACTIVE',
        time:new Date() 
})
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
