import { HugeiconsIcon } from "@hugeicons/react";
import {
  ChartBarLineIcon,
  File01Icon,
  Home09Icon,
  MedicalFileIcon,
  Profile02Icon,
  UserMultiple02Icon,
  ArrowLeft05Icon,
  XCircle,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const Sidebar = ({ isOpen, onClose, onToggleCollapse }: SidebarProps) => {
  const pathname = usePathname();

  const menuItems = [
    { icon: Home09Icon, label: "Dashboard", link: "/" },
    {
      icon: MedicalFileIcon,
      label: "Perspectives",
      link: "/strategy-planning",
    },
    { icon: Profile02Icon, label: "Tasks", link: "" },
    { icon: File01Icon, label: "Documents", link: "" },
    { icon: ChartBarLineIcon, label: "Reports", link: "" },
    { icon: UserMultiple02Icon, label: "Users & Roles", link: "" },
  ];

  return (
    <aside
      className={`
        w-64 fixed inset-y-0 left-0 z-50 bg-primary text-slate-300 flex flex-col border-r border-slate-800 transition-transform duration-300 ease-in-out -translate-x-full lg:translate-x-0
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
    `}
    >
      <Button
        className="absolute top-4 -right-5 rounded-full border border-muted bg-white cursor-pointer hidden lg:flex"
        size="icon"
        variant="outline"
        onClick={onToggleCollapse}
      >
        <HugeiconsIcon
          icon={ArrowLeft05Icon}
          className="text-slate-500"
          size={16}
        />
      </Button>
      <div className="py-4 px-6 flex items-center justify-between">
        <Image src={"/images/logo.svg"} alt="Logo" width={100} height={50} />
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-slate-400 hover:text-white"
          onClick={onClose}
        >
          <HugeiconsIcon icon={XCircle} size={20} />
        </Button>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map((item, idx) => (
          <Link key={idx} href={item.link}>
            <Button
              variant={item.link === pathname ? "secondary" : "ghost"}
              className={`w-full justify-between px-3 h-11 transition-colors group rounded-xl ${
                item.link === pathname
                  ? "bg-[#98AEC01A] text-white"
                  : "text-slate-400 hover:bg-[#98AEC01A] hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-3">
                <span
                  className={`${item.link === pathname ? "white" : "text-slate-400"}`}
                >
                  <HugeiconsIcon icon={item.icon} />
                </span>
                <span className="font-medium text-sm">{item.label}</span>
              </div>
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
