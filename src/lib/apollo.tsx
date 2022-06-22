import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4ovv6fc1gf601w7b5t03xxq/master",
    cache: new InMemoryCache(),
})
