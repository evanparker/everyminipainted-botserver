const { apiClient } = require("./apiClient");

async function getFigures({ limit = 20, offset = 0 }) {
  const response = await apiClient.get(
    `/figures/?limit=${limit}&offset=${offset}`
  );
  return response;
}

async function getFigure(id) {
  const response = await apiClient.get(`/figures/${id}`);
  return response;
}

async function getFiguresBySearch(search, { limit = 20, offset = 0 }) {
  const response = await apiClient.get(
    `/figures/search?search=${search}&limit=${limit}&offset=${offset}`
  );
  return response;
}

// export { getFigure, getFigures, getFiguresBySearch };
module.exports = { getFigure, getFigures, getFiguresBySearch };
