import puppeteer from 'puppeteer';
import lighthouse from 'lighthouse';
import { URL } from 'url';
import asyncHandler from '../utils/asyncHandler.js'; // Add .js for ESM
import ApiResponse from '../utils/apiResponse.js';
import ApiError from '../utils/apiError.js';

const runLighthouse = async (url) => {
  const browser = await puppeteer.launch({ headless: true });
  const { lhr } = await lighthouse(url, {
    port: new URL(browser.wsEndpoint()).port,
    output: 'json',
    logLevel: 'info',
  });
  await browser.close();
  return lhr;
};

const completeAnalyzeWebsite = asyncHandler(async (req, res, next) => {
  const { url } = req.body;

  if (!url) {
    throw new ApiError(400, 'URL is required', null, false, ['URL is missing']);
  }

  try {
    const lhr = await runLighthouse(url);

    const metrics = {
      url,
      loadTime: lhr.audits['speed-index'].displayValue,
      totalRequestSize: lhr.audits['total-byte-weight'].displayValue,
      numberOfRequests: lhr.audits['network-requests'].details.items.length,
      ttfb: lhr.audits['server-response-time'].displayValue,
      fcp: lhr.audits['first-contentful-paint'].displayValue,
      lcp: lhr.audits['largest-contentful-paint'].displayValue,
      cls: lhr.audits['cumulative-layout-shift'].displayValue,
      tbt: lhr.audits['total-blocking-time'].displayValue,
      timestamp: new Date(),
    };

    return res.status(201).json(
      new ApiResponse(200, metrics, 'Metrics created successfully', true)
    );
  } catch (error) {
    console.error(error);
    next(new ApiError(500, 'Failed to analyze website', null, false, [error.message]));
  }
});

const analyzeWebsite = asyncHandler(async (req, res, next) => {
    const { url } = req.body;
  
    if (!url) {
      throw new ApiError(400, 'URL is required', null, false, ['URL is missing']);
    }
  
    try {
      const lhr = await runLighthouse(url);
  
      const metrics = {
        url,
        loadTime: lhr.audits['speed-index'].displayValue,
        totalRequestSize: lhr.audits['total-byte-weight'].displayValue,
        numberOfRequests: lhr.audits['network-requests'].details.items.length,
        timestamp: new Date(),
      };
  
      return res.status(201).json(
        new ApiResponse(200, metrics, 'Metrics created successfully', true)
      );
    } catch (error) {
      console.error(error);
      next(new ApiError(500, 'Failed to analyze website', null, false, [error.message]));
    }
  });

export { analyzeWebsite , completeAnalyzeWebsite };
