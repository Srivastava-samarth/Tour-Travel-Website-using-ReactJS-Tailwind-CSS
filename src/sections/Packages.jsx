import PackageCard from "../components/PackageCard";

const Packages = () => {
  return (
    <div id="packages" className="container mx-auto padding-x lg:px-0 lg:mt-20 mt-20">
      <h2 className="text-3xl lg:text-4xl font-semibold mb-16 text-center">Choose Your Package</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center content-center lg:pl-32">
        <PackageCard title="Basic" price="$50" features={['Resort', 'Food', 'Beach']} />
        <PackageCard title="Pro" price="$150" features={['Resort', 'Food', 'Beach', 'Camping']} />
        <PackageCard title="Premium" price="$250" features={['Resort', 'Food', 'Beach', 'Camping', 'Travel']} />
      </div>
    </div>
  );
};


export default Packages;
