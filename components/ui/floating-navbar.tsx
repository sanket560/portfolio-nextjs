"use client"
import { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import Link from "next/link"
import { IoHome, IoMail, IoSchool } from "react-icons/io5"
import { cn } from "@/utils/cn"
import { FaCode, FaLaptopCode } from "react-icons/fa"
import { MdWork } from "react-icons/md"

type NavItem = {
  name: string
  link: string
  icon?: string
}

const IconMap: any = {
  home: IoHome,
  education: IoSchool,
  projects: FaLaptopCode,
  experience: MdWork,
  skills: FaCode,
  contact: IoMail,
}

export const FloatingNav = ({
  navItems,
  className,
  position = "top", // Add position prop with default "top"
}: {
  navItems: NavItem[]
  className?: string
  position?: "top" | "bottom" // Type for position
}) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(true)
      } else {
        // For bottom nav, we want to show when scrolling down (opposite of top nav)
        setVisible(position === "top" ? direction < 0 : direction > 0)
      }
    }
  })

  // Adjust initial and animate properties based on position
  const positionStyles = {
    initial: position === "top" ? { opacity: 1, y: -100 } : { opacity: 1, y: 100 },
    animate:
      position === "top"
        ? { y: visible ? 0 : -100, opacity: visible ? 1 : 0 }
        : { y: visible ? 0 : 100, opacity: visible ? 1 : 0 },
    className: cn(
      "flex fixed z-[5000] inset-x-0 mx-auto border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center",
      position === "top"
        ? "top-10 max-w-fit px-10 py-5 rounded-lg justify-center space-x-4"
        : "bottom-5 px-6 py-4 rounded-full justify-around w-[90%] max-w-xs",
      className,
    ),
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={positionStyles.initial}
        animate={positionStyles.animate}
        transition={{
          duration: 0.2,
        }}
        className={positionStyles.className}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: position === "top" ? "12px" : "9999px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) => {
          const IconComponent = navItem.icon ? IconMap[navItem.icon] : null

          return (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 flex flex-col md:flex-row items-center",
                position === "bottom" ? "justify-center" : "justify-center space-x-2",
                "text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
              )}
            >
              {IconComponent && (
                <span className={cn("block", position === "bottom" ? "text-xl" : "")}>
                  <IconComponent />
                </span>
              )}
              <span className="hidden md:inline text-sm">
                {navItem.name}
              </span>
            </Link>
          )
        })}
      </motion.div>
    </AnimatePresence>
  )
}

