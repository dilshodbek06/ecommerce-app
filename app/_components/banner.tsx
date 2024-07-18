import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto px-14">
      <Carousel className="min-h-[230px] ">
        <CarouselContent>
          <CarouselItem className="bg-gradient-to-r from-teal-400 to-gray-600 py-5">
            <div className="mx-auto mt-10 text-center">
              <h1 className="text-5xl font-medium text-white">Product 1</h1>
              <p className="text-2xl mt-2 font-medium text-white">40$</p>
              <Button className="mt-3">Shop now</Button>
            </div>
          </CarouselItem>
          <CarouselItem className="bg-gradient-to-r from-teal-400 to-yellow-200">
            <div className="mx-auto mt-10 text-center">
              <h1 className="text-5xl font-medium text-white">Product 2</h1>
              <p className="text-2xl mt-2 font-medium text-white">40$</p>
              <Button className="mt-3">Shop now</Button>
            </div>
          </CarouselItem>
          <CarouselItem className="bg-gradient-to-r from-yellow-200 to-pink-400">
            <div className="mx-auto mt-10 text-center">
              <h1 className="text-5xl font-medium text-white">Product 3</h1>
              <p className="text-2xl mt-2 font-medium text-white">40$</p>
              <Button className="mt-3">Shop now</Button>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Banner;
