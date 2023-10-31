import { getAllConceptsProjects } from "@/data/course"

const WalkThrough = async () => {
  const concepts_projects = await getAllConceptsProjects()

  return (
    <div className="container bg-blue-300 p-4 px-3">
      <h2> WalkThrough</h2>
      <pre>{JSON.stringify(concepts_projects, undefined, 2)}</pre>
    </div>
  )
}

export default WalkThrough
