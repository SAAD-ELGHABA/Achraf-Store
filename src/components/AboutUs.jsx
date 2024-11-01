function AboutUs() {
  return (
    <section className="py-5  text-white " id="AboutUs">
      <div className="flex md:flex-row flex-col w-3/4 m-auto mt-5 text-slate-950 border-t-4 border-b-4 border-slate-950">
        <div className="w-full md:w-1/3 relative">
          <img
            src="src/assets/About-Us2.jpg"
            alt="About US"
            className="rounded-sm"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-start grid place-items-center align-center ">
          <div className="px-3 md:space-y-3 space-y-1 py-3">
            <h1 className="text-2xl md:text-2xl text-slate-50 font-bold ">About Us</h1>
            <p className="text-sm font-thin pb-2 md:pb-0 text-slate-50 ">
              Achraf-Store is dedicated to providing a seamless online shopping
              experience with a curated selection of quality products across
              various categories. Our focus is on delivering exceptional
              customer service, value, and convenience, making shopping simple,
              reliable, and enjoyable for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
