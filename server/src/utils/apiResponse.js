class ApiResponse {

  /**
     * A constructor function for ApiResponse.
     *
     * @param {type} statusCode - description of statusCode
     * @param {type} data - description of data
     * @param {type} message - description of message
     */
    constructor(statusCode, data, message = 'Success') {
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
      this.success = statusCode < 400;
    }
  }
  
  export default ApiResponse;
  