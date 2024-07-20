import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
      <div className="relative">
        <Image
          className="w-full object-cover"
          src="/product.jpg"
          alt="Product Image"
          width={250}
          height={300}
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          NEW
        </div>
        <div className="absolute cursor-pointer hover:scale-105 transition top-0 left-0  px-2 py-1 m-2 rounded-md text-sm font-medium">
          <Heart />
        </div>
      </div>
      <div className="px-4 py-3">
        <h3 className="text-lg font-medium mb-2">Product Title</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
          ante vel eros fermentum faucibus sit amet euismod lorem.
        </p>
        <div className="flex gap-1 items-center justify-between">
          <span className="font-bold text-lg">$19.99</span>
          <Button className="scale-90 md:scale-100">add cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
