class DataService {
  fetchData(key) {
    console.log(`Fetching data for key: ${key}`);
    // Simulate an expensive operation, e.g., a database query
    return `Data for ${key}`;
  }
}

class CacheProxy {
  constructor(dataService) {
    this.dataService = dataService;
    this.cache = {};
  }

  fetchData(key) {
    if (this.cache[key]) {
      console.log(`Returning cached data for key: ${key}`);
      return this.cache[key];
    }

    const data = this.dataService.fetchData(key);
    this.cache[key] = data;
    return data;
  }
}

const dataService = new DataService();
const cacheProxy = new CacheProxy(dataService);

// Fetch data without cache
console.log(cacheProxy.fetchData("key1")); // Expected output: Fetching data for key: key1
console.log(cacheProxy.fetchData("key2")); // Expected output: Fetching data for key: key2

// Fetch data with cache
console.log(cacheProxy.fetchData("key1")); // Expected output: Returning cached data for key: key1
console.log(cacheProxy.fetchData("key2")); // Expected output: Returning cached data for key: key2

// Fetch new data without cache
console.log(cacheProxy.fetchData("key3")); // Expected output: Fetching data for key: key3
