import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(`${process.env.REACT_APP_API_URL}/graphql`)


// Aquí se inicializa el client de apollo con graphql
export const apolloClient = new ApolloClient({
    uri: `${process.env.REACT_APP_API_URL}/graphql` as any,
    cache: new InMemoryCache()
});