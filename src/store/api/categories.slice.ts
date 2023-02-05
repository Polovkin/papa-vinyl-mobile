import {createApi} from '@reduxjs/toolkit/query/react';
import customBaseQuery, {
  HTTP_METHODS,
} from '../../services/http/custom-base.query';
import {API_TAGS} from '../../../types/store.types';
import {IPage, IQueryParams} from '../../../types';
import {CategoryRequest, ICategory} from '../../../types/categories.types';
import setQueryParams from '../../functions';

const path = '/categories';

export const categoriesSlice = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: customBaseQuery,
  tagTypes: [API_TAGS.CATEGORY],
  endpoints: build => ({
    getCategories: build.query<IPage<ICategory>, IQueryParams>({
      query: queryParams => {
        const query = setQueryParams(queryParams);
        return {
          url: `${path}?${query}`,
          method: HTTP_METHODS.GET,
        };
      },
      providesTags: () => [API_TAGS.CATEGORY],
    }),
    getCategory: build.query<ICategory, string>({
      query: id => {
        return {url: `${path}/${id}`, method: HTTP_METHODS.GET};
      },
      providesTags: () => [API_TAGS.CATEGORY],
    }),
    createCategory: build.mutation<ICategory, CategoryRequest>({
      query: category => {
        return {url: path, method: HTTP_METHODS.POST, body: category};
      },
      invalidatesTags: () => [API_TAGS.CATEGORY],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useCreateCategoryMutation,
  util: categoryApiUtil,
} = categoriesSlice;
export const {getCategories, getCategory} = categoriesSlice.endpoints;
