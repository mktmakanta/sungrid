export default function GetQuote() {
  return (
    <div className=" bg-[url('/images/quotebackground.png')] bg-cover bg-right h-[40vh] overflow-hidden flex items-center px-4 py-4 text-white">
      {/* Content Section */}
      <div className="max-w-4xl space-y-2 md:space-y-3 lg:pl-32">
        <h1 className="text-xl font-bold md:text-2xl">
          Power that Doesnt Cost the Earth
        </h1>
        <p className="text-[0.8rem] md:text-base">
          Tired of high electricity bills? Want to save money and help the
          environment? Consider switching to solar power! <br />
          Give us a call on <span className="text-sm">08062482089</span> or hit
          the button below to request a call back!
        </p>
        <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm sm:text-lg py-2 px-4 md:py-3 md:px-6 transition-all duration-150 rounded-full shadow-md">
          Call Us Today
        </button>
      </div>
    </div>
  );
}
