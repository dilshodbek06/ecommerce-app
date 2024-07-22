import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";
import Logo from "./logo";
import SearchForm from "./search-form";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <div className="h-[80px] shadow-lg flex items-center">
      <div className="container max-w-6xl px-3 sm:px-8 flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className="hidden md:block">
          <SearchForm />
        </div>
        <div className="flex gap-2 items-center">
          <Button>cart (0)</Button>
          <Button
            className={cn(
              "animate-bg-shine border-[1px] rounded-lg shadow bg-[length:200%_100%] tracking-wide",
              "dark:bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)] dark:text-zinc-200 dark:border-zinc-800",
              "bg-[linear-gradient(110deg,#FFF,45%,#E4E4E7,55%,#FFF)] text-zinc-800 border-zinc-300"
            )}
            variant={"outline"}
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
