import AsyncStorage from '@react-native-async-storage/async-storage';

export enum STORAGE_KEYS {
  ACCESS_TOKEN = 'accessToken',
}

class AsyncStorageService {
  private readonly asyncStorage = AsyncStorage;

  async getItem<T>(key: STORAGE_KEYS): Promise<T | null> {
    try {
      const jsonValue = await this.asyncStorage.getItem(key);
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async setItem<T>(key: STORAGE_KEYS, value: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await this.asyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error(error);
    }
  }

  async removeItem(key: STORAGE_KEYS): Promise<void> {
    try {
      await this.asyncStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  }
}

export default new AsyncStorageService();
