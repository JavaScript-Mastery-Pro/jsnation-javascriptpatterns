const fetchData = (key) => {
  console.log(`Fetching data for key: ${key}`);
  // Simulate an expensive operation, e.g., a database query
  return `Data for ${key}`;
};

// CacheProxy function
const createCacheProxy = (dataService) => {
  const cache = {};

  return {
    fetchData: (key) => {
      if (cache[key]) {
        console.log(`Returning cached data for key: ${key}`);
        return cache[key];
      }

      const data = dataService(key);
      cache[key] = data;
      return data;
    },
  };
};

// Create dataService and cacheProxy functions
const dataService = fetchData;
const cacheProxy = createCacheProxy(dataService);

// Fetch data without cache
console.log(cacheProxy.fetchData("key1")); // Expected output: Fetching data for key: key1
console.log(cacheProxy.fetchData("key2")); // Expected output: Fetching data for key: key2

// Fetch data with cache
console.log(cacheProxy.fetchData("key1")); // Expected output: Returning cached data for key: key1
console.log(cacheProxy.fetchData("key2")); // Expected output: Returning cached data for key: key2

// Fetch new data without cache
console.log(cacheProxy.fetchData("key3")); // Expected output: Fetching data for key: key3
