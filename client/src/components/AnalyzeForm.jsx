import React, { useState } from 'react';
import axios from 'axios';

/**
 * Renders a form for analyzing a website's performance. 
 * 
 * @param {Object} props - The props object containing the following properties:
 *   - setMetrics: A function to set the metrics data.
 *   - setLoading: A function to set the loading state.
 *   - loading: A boolean indicating if the form is currently loading.
 * 
 * @return {JSX.Element} The form component.
 */
const AnalyzeForm = ({ setMetrics, setLoading , loading }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  /**
 * Handles the form submission asynchronously.
 *
 * @param {Event} e - The form submission event.
 * @return {Promise<void>} A promise that resolves when the analysis is complete.
 */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the analysis starts
    setError('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/metrics/analyze`, { url });
      setMetrics(response.data.data);
    } catch (err) {
      setError('Failed to analyze website');
    } finally {
      setLoading(false); // Set loading to false once analysis is complete
    }
  };

  return (
    <div className='w-full h-full mb-6 z-10'>
      <form onSubmit={handleSubmit} className="flex gap-4 items-center max-w-2xl mx-auto">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter a web page URL"
          required
          className="border-2 border-blue-500 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded-md font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400"
        >
          Analyze
        </button>
      </form>
      {error && <p className="text-purple-100 mt-2 text-center text-extrabold">{error}</p>}
    </div>
  );
};

export default AnalyzeForm;
