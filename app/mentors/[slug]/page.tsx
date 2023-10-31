const skills = [
  {
    name: "fuchsia-300",
    description: "Technical skills",
  },
  {
    name: "cyan-100",
    description: "Mentoring: mentoring style",
  },
  {
    name: "teal-100",
    description: "services: cv review",
  },
  {
    name: "fuchsia-100",
    description: "services: interview prep",
  },
  {
    name: "rose-100",
    description: "services: blog review",
  },
  {
    name: "pink-200",
    description: "services: career guidance",
  },
]

const MentorProfile = ({ params }: { params: { slug: string } }) => {
  return (
    <section className="mx-auto max-w-[1450px] px-4 sm:px-6 md:flex">
      <div className="flex flex-col gap-4 rounded-lg bg-indigo-200 px-3 pb-6 pt-12 md:flex md:h-[89.7vh] md:w-1/4 md:flex-col md:pb-0 lg:px-10 lg:py-20">
        <img
          className="h-40 w-40 rounded-full object-cover xl:h-48 xl:w-48"
          src="https://i.pravatar.cc/800"
          alt="Avatar"
        />
        <h3 className="text-xl font-semibold text-gray-800 lg:text-3xl">
          Oscar Fernandez
        </h3>
        <h4 className="-mt-2 text-lg font-semibold text-gray-500 lg:text-xl">
          Highlight
        </h4>
        <p className="max-w-md text-sm font-medium leading-tight text-gray-700 lg:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore atque
          accusamus sapiente enim magnam nostrum. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </p>
        <div className="flex flex-wrap gap-x-2 gap-y-1 lg:gap-x-3 lg:gap-y-2">
          <span className="rounded-full bg-indigo-50 px-1 py-0.5 text-xs font-semibold leading-none text-indigo-600 lg:px-2 lg:text-sm">
            stats ##
          </span>
          <span className="rounded-full bg-indigo-50 px-1 py-0.5 text-xs font-semibold leading-none text-indigo-600 lg:px-2 lg:text-sm">
            stats ##
          </span>
          <span className="rounded-full bg-indigo-50 px-1 py-0.5 text-xs font-semibold leading-none text-indigo-600 lg:px-2 lg:text-sm">
            stats ##
          </span>
          <span className="rounded-full bg-indigo-50 px-1 py-0.5 text-xs font-semibold leading-none text-indigo-600 lg:px-2 lg:text-sm">
            stats ##
          </span>
          <span className="rounded-full bg-indigo-50 px-1 py-0.5 text-xs font-semibold leading-none text-indigo-600 lg:px-2 lg:text-sm">
            stats ##
          </span>
        </div>
      </div>
      <div className="mt-6 md:ml-4 md:mt-0 md:w-3/4">
        {/* skills */}
        {/* TODO: remove lg:h-72 */}

        <div className="grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-3 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <div
              className="rounded-lg first:bg-fuchsia-300 lg:first:col-span-2 lg:first:row-span-2 lg:first:h-96 [&:nth-child(2)]:bg-cyan-200 lg:[&:nth-child(2)]:col-span-2 [&:nth-child(3)]:bg-teal-100 [&:nth-child(4)]:bg-fuchsia-100 [&:nth-child(5)]:bg-rose-100 [&:nth-child(6)]:bg-pink-200"
              key={index}
            >
              <div>{skill.name}</div>
              <div>{skill.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}

        <div className="space-y-4 lg:my-6">
          <h3 className="text-gray-800 lg:text-3xl lg:font-semibold">
            Testimonials
          </h3>
          <div>Testimonial Cards</div>
        </div>

        {/* About me */}
        <div className="space-y-4 lg:my-6">
          <h3 className="text-gray-800 lg:text-3xl lg:font-semibold">
            About Me
          </h3>
          <p>
            Skill Section: Mentors are the embodiments of skills that are
            required in today&apos;s candidates. The skills will be those few
            that the candidates require to hone. Things that can go into the
            skills section. Hard skills and soft skills. Services provided.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MentorProfile
