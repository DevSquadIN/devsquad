const mentors = [
  {
    name: "Oscar Fernandez",
    src: "https://i.pravatar.cc/700",
    highlight: "Creator of NextJs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non purus arcu. Cras sed ante in ante gravida facilisis in eget purus. Suspendisse sed volutpat dui.",
    stats: [
      {
        name: "stat ##",
      },
      {
        name: "stat ##",
      },
      {
        name: "stat ##",
      },
      {
        name: "stat ##",
      },
      {
        name: "stat ##",
      },
    ],
  },
  {
    name: "Oscar Fernandez",
    src: "https://i.pravatar.cc/800",
    highlight: "Creator of NextJs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non purus arcu. Cras sed ante in ante gravida facilisis in eget purus. Suspendisse sed volutpat dui.",
    stats: [
      {
        name: "stat ##",
      },
      {
        name: "stat ##",
      },
      {
        name: "stat ##",
      },
      {
        name: "stat ##",
      },
      {
        name: "stat ##",
      },
    ],
  },
  {
    name: "Oscar Fernandez",
    src: "https://i.pravatar.cc/900",
    highlight: "Creator of NextJs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non purus arcu. Cras sed ante in ante gravida facilisis in eget purus. Suspendisse sed volutpat dui.",
    stats: [
      {
        name: "stat ##",
      },
      {
        name: "stat ##",
      },
      {
        name: "stat ##",
      },
      {
        name: "stat ##",
      },
      {
        name: "stat ##",
      },
    ],
  },
]

const MentorsPage = () => {
  return (
    <section className="mx-auto max-w-[1450px] px-4 sm:px-6 md:flex">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {mentors.map((mentor, id) => (
          <div
            key={id}
            className="flex flex-col gap-5 rounded-lg border px-4 py-3"
          >
            <div className="flex items-end gap-2">
              <img
                className="h-20 w-20 rounded-full object-cover"
                src={mentor.src}
                alt="Profile Pic"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {mentor.name}
                </h3>
                <h4 className="text-base font-medium text-gray-600">
                  {mentor.highlight}
                </h4>
              </div>
            </div>
            <p>{mentor.description}</p>
            <div className="flex flex-wrap gap-3">
              {mentor.stats.map((stat, id) => (
                <span
                  className="rounded-full bg-indigo-100 px-2 py-0.5 text-sm font-medium text-indigo-700"
                  key={id}
                >
                  {stat.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MentorsPage
