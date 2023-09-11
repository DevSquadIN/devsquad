import { GeneralIcons } from "./icons"

type ModuleAnnouncerTypes = {
  module: string
  noOfStudents: number
}

const ModuleAnnouncer = ({ module, noOfStudents }: ModuleAnnouncerTypes) => {
  return (
    <div className="border-t border-indigo-50 shadow-md shadow-indigo-50">
      <div className="mx-auto flex max-w-[1450px] gap-4 p-4 sm:px-6 md:gap-6">
        <h2 className="text-3xl font-semibold text-indigo-800 md:text-4xl">
          {module}
        </h2>
        <div className="flex items-start gap-1 text-gray-500 sm:gap-2">
          <GeneralIcons.users />
          <span className="sr-only">Users</span>
          <span className="font-medium">{noOfStudents} students</span>
        </div>
      </div>
    </div>
  )
}

export default ModuleAnnouncer
