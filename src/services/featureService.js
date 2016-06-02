const baseUri = CONFIG.BACKEND.URI;

const featureService = {
  getFeatures: async () => {
    const response = await fetch(`${baseUri}/features`);
    return await response.json();
  }
};

export default featureService;
