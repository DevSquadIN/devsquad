import { getClient } from "@/services/graphQLClient"
import { gql } from "@apollo/client"

export const getAllConceptsProjects = async () => {
  const client = getClient()
  const gqlResponse: any = await client.request(gql`
    query ALL_CONCEPTS_AND_MINI_PROJECTS {
      modules {
        title
      }
    }
  `)

  return {
    data: gqlResponse,
  }
}
