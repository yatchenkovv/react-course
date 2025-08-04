import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
    keepUnusedDataFor: 60,
    tagTypes: ["review"],
    endpoints: (builder) => ({
        // restaurants
        getRestaurants: builder.query({
            query: () => "/restaurants",
            keepUnusedDataFor: 5,
        }),
        getRestaurantById: builder.query({
            query: (id) => `/restaurant/${id}`,
            keepUnusedDataFor: 5,
        }),
        // dishes
        getDishesByRestaurantId: builder.query({
            query: (id) => `/dishes?restaurantId=${id}`,
            keepUnusedDataFor: 5,
        }),
        getDishById: builder.query({
            query: (id) => `/dish/${id}`,
            keepUnusedDataFor: 5,
        }),
        // reviews
        getReviewsByRestaurantId: builder.query({
            query: (id) => `/reviews?restaurantId=${id}`,
            providesTags: (_, __, id) => [{ type: "review", id }],
        }),
        addReview: builder.mutation({
            query: ({ restaurantId, review }) => ({
                url: `/review/${restaurantId}`,
                method: "POST",
                body: review,
            }),
            invalidatesTags: (_, __, { restaurantId }) => [{ type: "review", id: restaurantId }],
        }),
        editReview: builder.mutation({
            query: ({ reviewId, review }) => {
                return {
                url: `/review/${reviewId}`,
                method: "PATCH",
                body: review,
            }
            },
            invalidatesTags: () => [{ type: "review" }],
        }),
        // users
        getUsers: builder.query({
            query: () => '/users',
            keepUnusedDataFor: 5,
        }),
    }),
});

export const { 
    useGetRestaurantsQuery, 
    useLazyGetRestaurantsQuery, 
    useGetRestaurantByIdQuery,
    useAddReviewMutation,
    useGetReviewsByRestaurantIdQuery,
    useGetDishesByRestaurantIdQuery,
    useGetDishByIdQuery,
    useGetUsersQuery,
    useEditReviewMutation,
} = api;