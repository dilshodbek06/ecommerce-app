import CategoryCircleItem from "./category-circle-item";

const CategoriesCircle = () => {
  const categories = [
    { id: 1, title: "Category 1", imageUrl: "", products: [] },
    { id: 2, title: "Category 2", imageUrl: "", products: [] },
    { id: 3, title: "Category 3", imageUrl: "", products: [] },
    { id: 4, title: "Category 4", imageUrl: "", products: [] },
  ];

  return (
    <div className="max-w-6xl container px-3 sm:px-8 gap-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-3">
      {categories.map((category, ind) => (
        <CategoryCircleItem
          key={ind}
          imageUrl={category.imageUrl}
          title={category.title}
          products={category.products}
        />
      ))}
    </div>
  );
};

export default CategoriesCircle;
