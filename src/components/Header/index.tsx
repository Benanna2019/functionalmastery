import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// ** Import Clerk/Convex Auth methods **

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const toggleMobileMenu = () => {
    setIsToggled(!isToggled);
  };

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
        <button
          aria-label="Open mobile nav"
          className="p-2 md:hidden"
          onClick={toggleMobileMenu}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "relative overflow-visible text-inherit transition-transform duration-500 ease-out",
              { "rotate-90": isToggled }
            )}
          >
            <path
              d="M20.4853 3.51473L3.51477 20.4853"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn("absolute origin-center translate-y-1 rotate-45", {
                "translate-y-0 rotate-90": isToggled,
              })}
            />
            <path
              d="M20.4853 20.4853L3.51477 3.51471"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                "absolute origin-center -translate-y-1 -rotate-45",
                {
                  "translate-y-0 rotate-90": isToggled,
                }
              )}
            />
          </svg>
        </button>
      </div>
      {isToggled && (
        <nav className="fade animate-fadeSm fixed top-0 h-screen w-full bg-black/50 px-6 pt-24 text-white backdrop-blur-2xl ease-out md:hidden">
          <nav className="flex gap-10 [@media(min-width:400px)]:gap-20">
            <div className="flex flex-col">
              <div className="mb-6 w-full">
                <ul>
                  <li className="my-2 w-full">
                    <a className="text-xl font-medium" href="/">
                      Home
                    </a>
                  </li>
                  <li className="my-2 w-full">
                    <a className="text-xl font-medium" href="/workshops">
                      Workshops
                    </a>
                  </li>
                  {/* <li className="my-2 w-full">
                    <a className="text-xl font-medium" href="/tips">
                      Tips
                    </a>
                  </li> */}
                  {/* <li className="my-2 w-full">
                    <a className="text-xl font-medium" href="/tutorials">
                      Tutorials
                    </a>
                  </li> */}
                  <li className="my-2 w-full">
                    <a className="text-xl font-medium" href="/posts">
                      Posts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="mt-10 flex gap-4 *:inline *:w-1/2 *:text-center *:text-base">
            {/* <a
              aria-label="Newsletter Sign Up"
              className="group flex w-max items-center gap-1 rounded-full border-white bg-neutral-200 px-3.5 py-2 text-sm font-semibold text-neutral-800 transition-colors sm:hover:bg-white sm:hover:text-black"
              href="https://faequeite.ck.page/eb37af7d8f"
            >
              Newsletter
            </a> */}
            {/* {user.state.user ? (
					<span
						aria-label="Profile"
						role="button"
						tabIndex={0}
						className="group flex w-max items-center gap-1 rounded-full border-white bg-neutral-200 px-3.5 py-2 text-sm font-semibold text-neutral-800 transition-colors sm:hover:bg-white sm:hover:text-black"
						onClick={handleSignOut}
						onKeyDown={handleSignOut}>Logout</span
					>
				) : (
					<Dialog>
						<DialogTrigger
							className={cn(
								'group flex w-max items-center gap-1 rounded-full border-white bg-neutral-200 px-3.5 py-2 text-sm font-semibold transition-colors sm:hover:bg-white sm:hover:text-black',
								{ 'text-white': !isScrolled, 'text-black': isScrolled }
							)}
						>
							<span aria-label="Profile">Login</span>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogDescription>
									{/* {@render modalContent()}
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				)} */}
          </div>
        </nav>
      )}
      <div className="pointer-events-none absolute left-0 top-0 h-screen w-full select-none bg-black/10 opacity-0 backdrop-blur-sm transition-opacity duration-500 ease-out"></div>
    </header>
  );
}

// Helper components for UserMenu and ModalContent would be defined here
