import puppeteer from 'puppeteer';
import lighthouse from 'lighthouse';
import { URL } from 'url';
import asyncHandler from '../utils/asyncHandler.js'; // Add .js for ESM
import ApiResponse from '../utils/apiResponse.js';
import ApiError from '../utils/apiError.js';
import {getScoreCategory} from '../utils/helper.js';
import axios from 'axios';

// Function to get performance data from PageSpeed Insights
const fetchPerformanceData = async (url) => {
    try {
      const apiKey = 'AIzaSyAJh3SVTqEQITNJC87xRCdgI8OP81uigkQ'; // Replace with your actual API key
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}`;
  
      // Fetch the data from the API
      const response = await axios.get(apiUrl);
      const data = response.data.lighthouseResult;

      console.log("Data - ",response.data);
  
      // Extract performance metrics and their ratings
      const metrics = {
        url: data.finalUrl,
        performanceScore: data.categories.performance.score * 100, // Performance score (0-100)
        fcp: {
          value: data.audits['first-contentful-paint'].numericValue / 1000, // FCP in seconds
          display: data.audits['first-contentful-paint'].displayValue,
          rating: data.audits['first-contentful-paint'].score * 100, // Rating from API
          category: getScoreCategory(data.audits['first-contentful-paint'].score),
        },
        lcp: {
          value: data.audits['largest-contentful-paint'].numericValue / 1000, // LCP in seconds
          display: data.audits['largest-contentful-paint'].displayValue,
          rating: data.audits['largest-contentful-paint'].score * 100,
          category: getScoreCategory(data.audits['largest-contentful-paint'].score),
        },
        cls: {
          value: data.audits['cumulative-layout-shift'].numericValue,
          display: data.audits['cumulative-layout-shift'].displayValue,
          rating: data.audits['cumulative-layout-shift'].score * 100,
          category: getScoreCategory(data.audits['cumulative-layout-shift'].score),
        },
        tbt: {
          value: data.audits['total-blocking-time'].numericValue, // TBT in milliseconds
          display: data.audits['total-blocking-time'].displayValue,
          rating: data.audits['total-blocking-time'].score * 100,
          category: getScoreCategory(data.audits['total-blocking-time'].score),
        },
        speedIndex: {
          value: data.audits['speed-index'].numericValue / 1000, // Speed Index in seconds
          display: data.audits['speed-index'].displayValue,
          rating: data.audits['speed-index'].score * 100,
          category: getScoreCategory(data.audits['speed-index'].score),
        },
        interactive: {
          value: data.audits['interactive'].numericValue / 1000, // TTI in seconds
          display: data.audits['interactive'].displayValue,
          rating: data.audits['interactive'].score * 100,
          category: getScoreCategory(data.audits['interactive'].score),
        },
        totalRequestSize: (data.audits['total-byte-weight'].numericValue / 1024).toFixed(2) + ' KB', // Total Request Size
        numberOfRequests: data.audits['network-requests'].details.items.length, // Number of Requests
        ttfb: data.audits['server-response-time'].displayValue, // Time to First Byte
        timestamp: new Date().toISOString(), // Timestamp of the analysis
      };
  
      return metrics; 
    } catch (error) {
      console.error('Error fetching performance data:', error.message);
      throw new ApiError(500, 'Failed to fetch performance data', null, false, [error.message]);
    }
  };
  
  // Route handler for analyzing website performance
  const analyzeWebsite = asyncHandler(async (req, res) => {
    const { url } = req.body;
  
    if (!url) {
      throw new ApiError(400, 'URL is required', null, false, ['URL is missing']);
    }
  
    try {
      const metrics = await fetchPerformanceData(url);
      res.status(200).json(new ApiResponse(200, metrics, 'Metrics fetched successfully', true));
    } catch (error) {
      throw error; // asyncHandler will catch this and send an appropriate response
    }
  });
  
  export { analyzeWebsite }