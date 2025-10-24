import Cards from "../primitives/Cards";

function Products() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center text-center bg-[#08241D] pt-10 px-6 md:px-12 lg:px-20 relative">
      {/* Section Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#DEC79E] font-extrabold mb-10 tracking-wide">
        WHAT WE DO
      </h1>

      {/* Banner Section */}
      <div className="w-full bg-[#B5E099] py-3 flex justify-center shadow-md">
        <span className="text-lg font-bold text-black tracking-wide">
          MEMORIAL LAY-AWAY PROGRAMS
        </span>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-10 w-full max-w-7xl">
        <Cards />
      </div>
    </div>
  );
}

export default Products;
