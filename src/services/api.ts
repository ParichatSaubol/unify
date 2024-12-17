import config from '@/utils/config';
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  useQuery,
  gql,
} from '@apollo/client';

import { onError } from '@apollo/client/link/error';

const link = new HttpLink({
  uri: config.apiURL,
  fetchOptions: {
    reactNative: { textStreaming: true },
  },
});
// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

// Initialize Apollo Client
const client = new ApolloClient({
  link: ApolloLink.from([errorLink, link]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});



export { client };
