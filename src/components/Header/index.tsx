import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// ** Import Clerk/Convex Auth methods **

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-10 mx-auto flex h-12 items-center justify-center px-6 transition-colors duration-300 text-black border-b-[.5px] border-gray-600 "
      )}
    >
      <div className="z-10 flex w-full max-w-[90rem] items-center justify-between text-inherit">
        <nav className="w-full items-center justify-between md:flex">
          <a
            aria-label="Navigate to the homepage"
            href="/"
            className="w-[20%] text-lg font-mono"
          >
            Functional Mastery
          </a>
          <ul className="relative mx-auto hidden w-[60%] items-center justify-center text-sm font-medium md:flex">
            <li>
              <a
                aria-label="Workshops"
                className={cn(
                  "group flex w-max cursor-default items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors hover:cursor-pointer"
                )}
                href="/workshops"
              >
                Workshops
              </a>
            </li>
            {/* <li>
              <a
                aria-label="Tips"
                className={cn(
                  "group flex w-max cursor-default items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors hover:cursor-pointer"
                )}
                href="/tips"
              >
                Tips
              </a>
            </li> */}
            {/* <li>
              <a
                aria-label="Tutorials"
                className={cn(
                  "group flex w-max cursor-default items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors hover:cursor-pointer"
                )}
                href="/tutorials"
              >
                Tutorials
              </a>
            </li> */}
            <li>
              <a
                aria-label="Posts"
                className={cn(
                  "group flex w-max cursor-default items-center gap-1 px-3.5 py-2 text-sm font-medium transition-colors hover:cursor-pointer"
                )}
                href="/posts"
              >
                Posts
              </a>
            </li>
          </ul>
          <div className="hidden w-[20%] items-center justify-end gap-4 md:flex">
            <div className="">
              {/* Put user button and sign in logic here */}
              {/* <Unauthenticated>
                <SignInButton />
              </Unauthenticated>
              <Authenticated>
                <UserButton />
              </Authenticated> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

// Helper components for UserMenu and ModalContent would be defined here
