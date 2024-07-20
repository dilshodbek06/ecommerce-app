import ProductCard from "./product-card";

const NewProducts = () => {
  return (
    <div className="container px-3 sm:px-8 max-w-6xl ">
      <h1 className="font-bold text-3xl">
        <span className="text-sky-600">New</span> Products
      </h1>
      <div className="w-full  mt-5 gap-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default NewProducts;
