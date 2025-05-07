'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { LayoutDashboard, LogIn, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/auth";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { ScrollArea } from "../ui/scroll-area";

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = usePathname();
  const router = useRouter();
  const { user, setIsLoading } = useUser();

  const menuData = [
    { name: "Home", href: "/" },
    { name: "Tutors", href: "/tutors" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQ", href: "/faq" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    router.push('/');
  };

  return (
    <div className={clsx('fixed z-10 w-full transition-all', scrolling && 'bg-purple-600 shadow-md text-white')}>
      <nav className="flex justify-between px-8 items-center py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <FiMenu onClick={() => setMenu(true)} className="text-3xl cursor-pointer lg:hidden text-white" />
          <Link href={'/'}>
            <h2 className="text-4xl font-bold text-white">TutorXpert</h2>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {menuData.map((menu, i) => (
            <Link
              key={i}
              href={menu.href}
              className={clsx(
                'uppercase font-semibold transition-colors',
                location === menu.href
                  ? 'text-white underline underline-offset-4'
                  : 'text-purple-100 hover:text-white'
              )}
            >
              {menu.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className={clsx("fixed h-full w-screen bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all lg:hidden", isSideMenuOpen && "translate-x-0")}>
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <IoCloseOutline onClick={() => setMenu(false)} className="text-3xl cursor-pointer mb-6" />
            <ScrollArea className="h-96">
              {menuData.map((menu, i) => (
                <Link key={i} onClick={() => setMenu(false)} className="font-bold block" href={menu.href}>
                  {menu.name}
                </Link>
              ))}
            </ScrollArea>
          </section>
        </div>

        {/* User Section */}
        <section className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>User</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black border-purple-600 shadow-md shadow-purple-600">
                <DropdownMenuLabel className="text-white">{user.role}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={user.role === 'Student' ? "/student" : "/tutor"} className="flex gap-2 items-center text-purple-400">
                    <LayoutDashboard />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogOut} className="text-purple-400 flex gap-2 items-center">
                  <LogOut />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-2">
              <Link href={'/login'}>
                <Button className="bg-white text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white">
                  <LogIn />
                  Login
                </Button>
              </Link>
            </div>
          )}
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
