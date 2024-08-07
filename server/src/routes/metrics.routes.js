// Import express and your controller using ES module syntax
import express from 'express';
import { analyzeWebsite } from '../controller/metrics.controller.js'; // Ensure to add the .js extension

const router = express.Router();

// Define your route using the imported handler
router.post('/analyze', analyzeWebsite);

export default router;
