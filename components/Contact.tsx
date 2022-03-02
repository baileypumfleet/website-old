export default function Contact() {
  return (
    <div className="bg-white" id="contact">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Get in touch</h2>
        <p className="mt-2 text-lg text-gray-500 max-w-3xl">
          Want to reach out? I&apos;d love to hear from you.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Twitter</h3>
            <p className="mt-2 text-base text-gray-500">
              You can message me on Twitter over at&nbsp;
              <a href="https://twitter.com/baileypumfleet" className="text-cyan-500">@baileypumfleet</a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Email</h3>
            <p className="mt-2 text-base text-gray-500">
              <span className="block">Personal: <a href="mailto:pumfleet@hey.com" className="text-cyan-500">pumfleet@hey.com</a></span>
              <span className="block">Work: <a href="mailto:bailey@cal.com" className="text-cyan-500">bailey@cal.com</a></span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Call</h3>
            <p className="mt-2 text-base text-gray-500">
              If you&apos;d like to book a chat, head over to&nbsp;
              <a href="https://cal.com/bailey" className="text-cyan-500">cal.com/bailey</a>
              &nbsp;to book me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
