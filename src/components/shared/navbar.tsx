"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {  LayoutDashboard, LogIn, LogOut} from "lucide-react";
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
// import { protectedRoutes } from "@/constants";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { ScrollArea } from "../ui/scroll-area";

const Navbar = () => {
  // Hookes
    const [isSideMenuOpen, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false)
  const location = usePathname();
  const router = useRouter();
  const { user, setIsLoading } = useUser();


  // nav routes
  const menuData = [
    { name: "Home", href: "/" },
    { name: "Tutors", href: "/tutors" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQ", href: "/faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // handle log out
  const handleLogOut = () => {
    logout();
    setIsLoading(true);
    router.push('/');
  };

  // const linkClasses = (href: string) =>
  //   `text-lg font-bold transition transform hover:-translate-y-0.5 hover:scale-105 duration-200 ${
  //     pathname === href
  //       ? "text-blue-600 underline underline-offset-4"
  //       : "text-gray-700 hover:text-blue-600"
  //   }`;

  return (
    <div
    className={clsx(
      'fixed z-10 w-full transition-all text-white',
      scrolling && 'bg-blue-100 shadow-sm shadow-blue-200 text-black',
    )}
  >
    <nav className="flex justify-between px-8 items-center py-2 max-w-7xl mx-auto">
      <div className="flex items-center gap-8">
        {/* Mobile Menu Button */}
        <FiMenu
          onClick={() => setMenu(true)}
          className="text-3xl cursor-pointer lg:hidden"
        />
        {scrolling ? (
          <Link href={'/'}>
            {/* <Image src={logo} alt="logo" height={200} width={200} /> */}
          </Link>
        ) : (
          <Link href={'/'}>
            <h2 className="text-4xl text-white font-bold">TutorXpert</h2>
            {/* <Image src={logo2} alt="logo" height={200} width={200} /> */}
          </Link>
        )}
        {/* Logo */}
        {/* <Link href={'/'}>
          <Image src={logo} alt="logo" height={200} width={200} />
        </Link> */}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        {menuData.map((menu, i) =>
           (
            <Link
              key={i}
              className={clsx(
                'font-semibold uppercase',
                location === menu.href
                  ? 'text-blue-600 font-semibold  rounded-lg px-3'
                  : scrolling
                    ? 'text-black group flex  cursor-pointer flex-col hover:text-blue-600'
                    : 'text-white hover:text-blue-600 group flex  cursor-pointer flex-col',
              )}
              href={menu.href ?? ''}
            >
              {menu.name}
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ),
        )}
      </div>

      {/* Mobile Sidebar */}
      <div
        className={clsx(
          'fixed h-full w-screen bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all lg:hidden',
          isSideMenuOpen && 'translate-x-0',
        )}
      >
        <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
          <IoCloseOutline
            onClick={() => setMenu(false)}
            className="mt-0 mb-8 text-3xl cursor-pointer"
          />
          <ScrollArea className="h-96">
            {menuData.map((menu, i) => (
              <div key={i}>
               
               
                  <Link
                    onClick={() => setMenu(false)}
                    className="font-bold block"
                    href={menu.href ?? ''}
                  >
                    {menu.name}
                  </Link>
                
              </div>
            ))}
          </ScrollArea>
        </section>
      </div>

      {/* User Section */}
      <section className="flex items-center gap-4">
        {/* <CartSheet></CartSheet> */}
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" bg-black border-blue-600 shadow-[0px_0px_5px_theme(colors.blue.600)]">
              <DropdownMenuLabel className=" items-center text-gray-100 ">
                {user.role}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              {user.role == 'Student' ? (
                <DropdownMenuItem>
                  <Link
                    href="/student"
                    className=" flex gap-1 items-center text-lg text-blue-600 "
                  >
                    {' '}
                    <LayoutDashboard className=" text-blue-600" />
                    DashBoard
                  </Link>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem>
                  {' '}
                  <Link
                    className=" flex gap-1 items-center text-base text-blue-600 "
                    href="/tutor"
                  >
                    {' '}
                    <LayoutDashboard className=" text-blue-600" />
                    DashBoard
                  </Link>
                </DropdownMenuItem>
              )}

              <DropdownMenuItem
                className=" flex gap-1 items-center text-base text-blue-600 "
                onClick={handleLogOut}
              >
                <LogOut className=" text-blue-600" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className=" flex gap-2">
            <Link href={'/login'}>
              <Button
                variant="outline"
                className="hover:bg-blue-600 bg-white shadow-lg shadow-blue-600 hover:text-white text-blue-600 border-blue-600 flex items-center gap-2 "
              >
                <LogIn />
                Login
              </Button>
            </Link>
            {/* <Link href={'/register'}>
              <Button
                variant="outline"
                className="bg-blue-600 text-white shadow-lg shadow-blue-600 hover:text-blue-600 border-blue-600 flex items-center gap-2 "
              >
                <LogIn />
                SignUp
              </Button>
            </Link> */}
          </div>
        )}

        {/* avtar img */}
      </section>
    </nav>
  </div>
  );
};

export default Navbar;
