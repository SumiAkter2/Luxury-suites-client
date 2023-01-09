import useSuites from "../Hooks/useSuites";
import AllSuite from "./AllSuite";

const AllSuites = () => {
  const [suites] = useSuites();

  return (
    <div>
      <div
        className="hero h-56"
        style={{ backgroundImage: "url(https://i.ibb.co/V91JZpN/coridor.png)" }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-serif">Search Luxury Suites</h1>
          </div>
        </div>
      </div>
      <div className=" lg:flex grid justify-evenly items-start px-6 my-12">
        <div className="w-60 my-12 sticky top-14">
          <h1 className="text-2xl font-bold mb-6">Check Available</h1>

          <div className=" font-bold bg-slate-100 rounded-lg my-2">
            <h1 className="mb-2"> Check In</h1>
            <input type="date" className="bg-yellow-200 rounded-md p-1 w-52" />
          </div>
          <div className=" font-bold bg-slate-100 rounded-lg my-2">
            <h1 className="mb-2"> Check Out</h1>
            <input
              type="date"
              className="bg-yellow-200 w-52 rounded-md p-1  "
            />
          </div>
          <div className=" font-bold bg-slate-100 w-40 rounded-lg my-2">
            <h1> Room</h1>
            <input
              type="number"
              placeholder="1"
              className="bg-yellow-200 rounded-md p-1 w-52"
            />
          </div>
          <div className="flex justify-start  font-bold bg-slate-100 rounded-lg my-2">
            <div>
              <h1> Guest</h1>
              <input
                className="w-24 bg-yellow-200 rounded-md p-1"
                type="number"
                placeholder="1"
              />
            </div>
            <div className="ml-4">
              <h1>Children</h1>
              <input
                className="w-24 bg-yellow-200 rounded-md p-1"
                type="number"
                placeholder="1"
              />
            </div>
          </div>
          <button className="btn bg-yellow-200 btn-primary w-52">Search</button>
        </div>
        {suites.length}
        <div className="gap-12 grid">
          {suites.map((suite) => (
            <AllSuite key={suite._id} suite={suite}></AllSuite>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSuites;
