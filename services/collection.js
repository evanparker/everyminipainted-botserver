const { apiClient } = require("./apiClient");

async function getCollections({ limit = 20, offset = 0 }) {
  const response = await apiClient.get(
    `/collections/?limit=${limit}&offset=${offset}`
  );
  return response;
}

async function getCollection(id) {
  const response = await apiClient.get(`/collections/${id}`);
  return response;
}

async function getCollectionsBySearch(search, { limit = 20, offset = 0 }) {
  const response = await apiClient.get(
    `/collections/search?search=${search}&limit=${limit}&offset=${offset}`
  );
  return response;
}

// export { getCollection, getCollections, getCollectionsBySearch };
module.exports = { getCollection, getCollections, getCollectionsBySearch };
