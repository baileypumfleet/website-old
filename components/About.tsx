export default function About() {
  return (
    <div className="relative py-16 bg-white overflow-hidden my-24" id="about">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h2>
            <span className="mt-2 block text-3xl text-center font-cal text-gray-900 sm:text-4xl">
              A few words about myself
            </span>
          </h2>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            From a very young age, technology has always been my passion. I&apos;ve been coding for as long as I remember, particularly in frontend development. For most of my adult life I&apos;ve been building apps, with an emphasis on design and user experience.
          </p>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            In April 2021, Peer and I co-founded Cal.com, our first open-source startup. After starting out as a small open-source project called Calendso, we hit tremendous growth from day one, leading us to later acquire the Cal.com brand name. In September 2021, we launched the Cal.com rebrand, our version 1.0 and the introduction of a free plan, and the growth has rocketed since then. Today, we have a huge community of loyal users and are working with an incredible set of enterprises and government organisations to provide scheduling infrastructure for them to run their businesses upon.
          </p>
          <p className="mt-8 text-xl text-gray-500 leading-8">
              We&apos;re continuing to grow even further, with the team and product functionality constantly expanding, all driven by the same goal to power scheduling for everyone from yoga teachers to entire governments.
          </p>
        </div>
      </div>
    </div>
  );
}
