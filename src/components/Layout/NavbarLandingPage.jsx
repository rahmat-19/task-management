import { AnimatePresence, animate, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavbarLandingPage() {
  const [scrollDirection, setScrollDirection] = useState("up"); // Default to down
  const [scrolling, setScrolling] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setScrolling(window.scrollY == 0);
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setScrollDirection("down");
        setIsOpen(false);
      } else if (currentScrollTop < lastScrollTop) {
        // Scrolling up
        setScrollDirection("up");
      }

      lastScrollTop = currentScrollTop;
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust the breakpoint as needed
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check for mobile on component mount
    handleResize();

    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [controls]);

  return (
    scrollDirection == "up" && (
      <motion.nav
        initial={{ top: -60 }}
        animate={{ top: 0 }}
        exit={{ top: -60 }}
        transition={{ duration: 0.3 }}
        className={`w-full fixed p-2 z-30 ${
          scrollDirection == "up" && scrolling
            ? "transition ease-in-out delay-150 duration 500 bg-transparent"
            : "bg-white scolling-lower-active"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-around">
            <div
              className={`font-bold flex justify-center items-center space-x-2  shadow-custome`}
            >
              {/* <FiCpu
                      className={`text-5xl ${
                        scrollDirection == "up" && scrolling
                          ? "transition ease-in-out delay-150 text-white"
                          : "text-green-400"dlkgjz
                      }`}
                    /> */}
              <p
                className={`text-3xl ${
                  scrollDirection == "up" && scrolling
                    ? "transition ease-in-out delay-150 text-white"
                    : "text-slate-800"
                }`}
              >
                RHT
              </p>
            </div>
            <div
              className={`flex space-x-10 font-semibold text-white shadow-custome shadow-custome `}
            >
              {menus.map((data, index) => (
                <Link
                  key={index}
                  href={data.link}
                  className={`${
                    scrollDirection == "up" && scrolling
                      ? "transition ease-in-out delay-150 text-white"
                      : "text-slate-700"
                  }`}
                >
                  {data.label}
                </Link>
              ))}
            </div>
            <div className="flex space-x-4 justify-evenly items-center">
              {/* <FaFacebookF
                      className={`${
                        scrollDirection == "up" && scrolling
                          ? "transition ease-in-out delay-150 text-white"
                          : "text-black"
                      } text-xl`}
                    />
                    <FaInstagram
                      className={`${
                        scrollDirection == "up" && scrolling
                          ? "transition ease-in-out delay-150 text-white"
                          : "text-black"
                      } text-xl`}
                    />
                    <FaLinkedinIn
                      className={`${
                        scrollDirection == "up" && scrolling
                          ? "transition ease-in-out delay-150 text-white"
                          : "text-black"
                      } text-xl`}
                    /> */}
            </div>
          </div>
        </div>
      </motion.nav>
    )
  );
  //   !isMobile
  //     ?

  // : scrollDirection == "up" && (
  //     <motion.nav
  //       initial={{ top: -60, opacity: 0 }}
  //       animate={{ top: 0, opacity: 1 }}
  //       exit={{ top: -100, opacity: 0 }}
  //       transition={{ duration: 0.3 }}
  //       className={`w-full fixed z-30 bg-white scolling-lower-active`}
  //     >
  //       <div className="container p-4 mx-auto relative">
  //         <div className="flex items-center justify-between">
  //           <div
  //             className={`font-bold flex justify-center items-center space-x-2  shadow-custome`}
  //           >
  //             {/* <FiCpu className={`text-3xl text-green-500`} /> */}
  //             <p className={`text-2xl text-slate-800`}>RHT</p>
  //           </div>

  //           <div className="flex space-x-4 justify-evenly items-center">
  //             {/* <div>
  //               <FaFacebookF className={`text-black text-xl`} />
  //             </div>
  //             <div>
  //               <FaInstagram className={`text-black text-xl`} />
  //             </div>
  //             <div>
  //               <FaLinkedinIn className={`text-black text-xl`} />
  //             </div>
  //             <div style={{ margin: "0 0 0 3rem" }}>
  //               <Hamburger
  //                 size={25}
  //                 direction="right"
  //                 toggled={isOpen}
  //                 toggle={setIsOpen}
  //               />
  //             </div> */}
  //           </div>
  //         </div>
  //       </div>
  //       <AnimatePresence>
  //         {isOpen && (
  //           <motion.nav
  //             initial={{ y: -13, opacity: 0 }}
  //             animate={{ y: 0, opacity: 1 }}
  //             exit={{ y: -13, opacity: 0 }}
  //             transition={{ duration: 0.3 }}
  //             className={`w-full absolute z-0 bg-white `}
  //           >
  //             <div className="px-2 pt-2 z-0 pb-3 sm:px-3">
  //               {menus.map((item, index) => (
  //                 <Link
  //                   href="#"
  //                   key={index}
  //                   className={`${
  //                     item.curent
  //                       ? "bg-gray-900 text-white"
  //                       : "text-black hover:bg-gray-700 hover:text-white"
  //                   } block rounded-md px-3 py-2 text-base font-medium`}
  //                 >
  //                   {item.label}
  //                 </Link>
  //               ))}
  //             </div>
  //           </motion.nav>
  //         )}
  //       </AnimatePresence>
  //     </motion.nav>
  //   );
}
