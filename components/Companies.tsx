export default function Companies() {
  return (
    <div className="bg-white" id="companies">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              I&apos;ve founded and worked with some amazing companies.
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              I&apos;ve always enjoyed working on forward-thinking, disruptive brands that solve technical problems for individuals and businesses of all sizes.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-6 opacity-70"
                src="https://cal.com/logo.svg"
                alt="Cal.com"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-8 opacity-50"
                src="/griffincode.svg"
                alt="GriffinCode"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-6 opacity-50 mt-2"
                src="/verial.svg"
                alt="Verial"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-8 opacity-50 mt-2"
                src="/assurestor.png"
                alt="AssureStor"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-14 opacity-50"
                src="https://lirp.cdn-website.com/fe048c94/dms3rep/multi/opt/2-5491e2f3-294w.png"
                alt="CPGTL"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-14"
                src="https://lirp.cdn-website.com/fe048c94/dms3rep/multi/opt/4-ca49a460-324w.png"
                alt="Oregano Racing"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
