import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'UsersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().contacts.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ['User'],

  endpoints: builder => ({
    fetchUser: builder.query({
      query: () => ' ',
    }),
    createUser: builder.mutation({
      query: ({ name, email, password }) => ({
        url: `/users/signup`,
        method: 'POST',
        body: {
          name,
          email,
          password,
        },
      }),
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: `/users/login`,
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});
export const {
  useFetchUserQuery,
  useCreateUserMutation,
  useLoginUserMutation,
} = usersApi;
