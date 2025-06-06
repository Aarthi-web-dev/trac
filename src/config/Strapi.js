export const STRAPI_CONFIG = {
    API_URL: process.env.REACT_APP_STRAPI_URL || 'http://localhost:1337',
    ENDPOINTS: {
      FILES: '/api/files',
      MEDIA: '/api/upload'
    },
    HEADERS: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };