import Image from "next/image";

interface CategoryCircleItemProps {
  imageUrl: string;
  title: string;
  products: any[];
}

const CategoryCircleItem = ({
  imageUrl,
  products,
  title,
}: CategoryCircleItemProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="cursor-pointer w-48 h-48 flex justify-center items-center rounded-full bg-gradient-to-r from-green-200 to-cyan-200 mx-auto">
        <Image
          src={"/vercel.svg"}
          alt="category image"
          width={150}
          height={150}
          className="object-cover transition duration-300 hover:scale-105"
        />
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <h5 className="text-gray-500">{products.length + 10} products</h5>
      </div>
    </div>
  );
};

export default CategoryCircleItem;
