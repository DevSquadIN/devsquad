import LessonsOverview from "@/components/lessons-overview"
import ModuleAnnouncer from "@/components/module-announcer"

const React = () => {
  return (
    <div>
      <ModuleAnnouncer module="Foundation in React" noOfStudents={2356} />
      <LessonsOverview />
    </div>
  )
}

export default React
