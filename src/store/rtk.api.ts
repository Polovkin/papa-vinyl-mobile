import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';
import AsyncStorageService, {
  STORAGE_KEYS,
} from '../services/storage/async-storage.service';
import {API_TAGS} from '../../types/store.types';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/',
    prepareHeaders: async headers => {
      const accessToken = await AsyncStorageService.getItem<string>(
        STORAGE_KEYS.ACCESS_TOKEN,
      );

      if (accessToken) {
        headers.set('Authorization', `Token ${accessToken}`);
      }

      headers.set('Content-Type', 'application/json');

      return headers;
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: [API_TAGS.PAPA_VINYLS],
});
