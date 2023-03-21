import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


    // Every api needs a reducer path which is enough to use in the redux store
    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',   // name of the slice of state that will store the data form the api
		baseQuery: fetchBaseQuery({
			baseUrl: 'https://shazam.p.rapidapi.com',
			// prepare headers for us so we won't have to set options each time we want to hit the api endpoint
			prepareHeaders: (headers) => {
				headers.set('X-RapidAPI-Key', '0e3ff0e060msh3c7860b5faba282p17e572jsn2d56a0e7768c')

				return headers;
			},
		}),
		// we want to build the endpoints for all the api calls we'll be making
		endpoints: (builder) => ({
			getTopCharts: builder.query({ query: () => '/charts/track' })   // RTK allows us call this as a hook. builder.quer method indicates that this is a get request
		})                                  // ideally query has to be dynamic and not just a string but a function that returns a string. query: () => '/charts/${pop}'
    })

	export const {
		useGetTopChartsQuery,
	} = shazamCoreApi


	// Overall, this code demonstrates how Redux Toolkit Query can be used to easily create a 
	// standardized API for fetching data in a Redux application, 
	// reducing the amount of boilerplate code that developers need to write.