import React from "react";
import { FaSpinner } from "react-icons/fa";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  type = "button",
  loading = false,
  className,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  className? : string;
}) => {
  const iconStyle = { width: "25px", height: "25px" };

  return (
    <button
      className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none ${className}`}
      onClick={handleClick}
      type={type}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {loading ? (
          <FaSpinner className="animate-spin" style={iconStyle} />
        ) : (
          <>
            {position === "left" &&
              React.cloneElement(icon as React.ReactElement, { style: iconStyle })}
            {title}
            {position === "right" &&
              React.cloneElement(icon as React.ReactElement, { style: iconStyle })}
          </>
        )}
      </span>
    </button>
  );
};

export default MagicButton;
