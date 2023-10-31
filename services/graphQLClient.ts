import { GraphQLClient } from "graphql-request"

export const getClient = () => {
  const endpoint = `https://${process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN}.hasura.${process.env.NEXT_PUBLIC_NHOST_REGION}.nhost.run/v1/graphql`
  const client = new GraphQLClient(endpoint)

  return client
}
