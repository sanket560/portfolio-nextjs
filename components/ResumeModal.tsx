"use client";
import React, { useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import MagicButton from "./ui/MagicButton";
import { TbDownload } from "react-icons/tb";

const ResumeModal = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/sanket_mane_resume.pdf";
    link.download = "Sanket_Mane_Resume.pdf";
    link.click();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10000]">
      <div className="dark:bg-black-100 bg-white p-4 rounded w-[500px] shadow-lg">
        <button className="absolute top-4 right-4 text-xl font-bold" onClick={onClose}>
          ✖
        </button>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
          <div className=" overflow-auto">
            <Viewer fileUrl="/sanket_mane_resume.pdf" />
          </div>
        </Worker>
        <p className="mt-4 text-center text-sm md:hidden text-gray-500">Please zoom to view the resume clearly.</p>
        <div className="w-max mx-auto py-3 md:mt-[-25px]">
          <MagicButton title="Download Resume" icon={<TbDownload />} position="left" handleClick={handleDownload} />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
