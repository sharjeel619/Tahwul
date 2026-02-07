import { Menu, ChevronDown } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon, Notification01Icon } from "@hugeicons/core-free-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="h-16 bg-white border-b border-muted flex items-center justify-between px-4 md:px-6 sticky top-0 z-30">
      <div className="flex items-center space-x-2 md:space-x-4 flex-1">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-secondary hover:bg-slate-100"
          onClick={onMenuClick}
        >
          <Menu size={22} />
        </Button>
        <div className="relative max-w-xs md:max-w-md w-full ml-12">
          <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 z-10 pointer-events-none">
            <HugeiconsIcon icon={Search01Icon} size={16} />
          </span>
          <Input
            placeholder="Search..."
            className="pl-12 pr-1 bg-grey-1 border-muted h-9 text-xs"
          />
        </div>
      </div>

      <div className="flex items-center space-x-1 md:space-x-4">
        <Button variant="ghost" size="icon" className="relative h-9 w-9">
          <HugeiconsIcon
            className="text-secondary"
            icon={Notification01Icon}
            size={18}
          />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red border-2 border-white rounded-full"></span>
        </Button>

        <Button
          variant="ghost"
          className="flex items-center rounded-full px-2! bg-slate-100/50 transition-colors"
        >
          <Avatar className="w-8 h-8 border border-slate-200">
            <AvatarImage
              src="https://picsum.photos/seed/user/80/80"
              alt="User"
            />
            <AvatarFallback>MO</AvatarFallback>
          </Avatar>
          <div className="text-right hidden md:block">
            <p className="text-xs text-primary font-bold">Mohamed</p>
          </div>

          <ChevronDown size={14} className="text-primary hidden sm:block" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
