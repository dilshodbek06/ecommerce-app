import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Logo from "./logo";
import SearchForm from "./search-form";

const Header = () => {
  return (
    <div className="h-[80px] shadow-lg flex items-center">
      <div className="container max-w-6xl flex justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className="hidden md:block">
          <SearchForm />
        </div>
        <div className="flex gap-2 items-center">
          <Button>cart (0)</Button>
          <Button variant={"outline"}>
            <ShoppingBag className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;