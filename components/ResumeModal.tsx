"use client";
import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";

const ResumeModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10000]">
      <div className="dark:bg-black-100 bg-white p-4 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 shadow-lg">
        <button className="absolute top-4 right-4 text-xl font-bold" onClick={onClose}>
          ✖
        </button>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
          <div className="h-[80vh] overflow-auto">
            <Viewer fileUrl="/sanket_mane_resume.pdf" />
          </div>
        </Worker>
      </div>
    </div>
  );
};

export default ResumeModal;
