import LessonsOverview from "@/components/lessons-overview"
import ModuleAnnouncer from "@/components/module-announcer"

const OSS = () => {
  return (
    <div>
      <ModuleAnnouncer module="Foundation in OSS" noOfStudents={2356} />
      <LessonsOverview />
    </div>
  )
}

export default OSS
