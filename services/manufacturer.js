const { apiClient } = require("./apiClient");

async function getManufacturers({ limit = 20, offset = 0 }) {
  const response = await apiClient.get(
    `/manufacturers/?limit=${limit}&offset=${offset}`
  );
  return response;
}

async function getManufacturer(id) {
  const response = await apiClient.get(`/manufacturers/${id}`);
  return response;
}

async function getManufacturersBySearch(search, { limit = 20, offset = 0 }) {
  const response = await apiClient.get(
    `/manufacturers/search?search=${search}&limit=${limit}&offset=${offset}`
  );
  return response;
}

// export { getManufacturer, getManufacturers, getManufacturersBySearch };
module.exports = {
  getManufacturer,
  getManufacturers,
  getManufacturersBySearch,
};
