import { apiClient } from "./apiClient.js";

async function getMinis({ limit = 20, offset = 0 }) {
  const response = await apiClient.get(
    `/minis/?limit=${limit}&offset=${offset}`
  );
  return response;
}

async function getMini(id) {
  const response = await apiClient.get(`/minis/${id}`);
  return response;
}

async function getMinisBySearch(search, { limit = 20, offset = 0 }) {
  const response = await apiClient.get(
    `/minis/search?search=${search}&limit=${limit}&offset=${offset}`
  );
  return response;
}

export { getMini, getMinis, getMinisBySearch };
