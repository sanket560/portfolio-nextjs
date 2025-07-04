"use client";
import React, { useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import MagicButton from "./ui/MagicButton";
import { TbDownload } from "react-icons/tb";

const ResumeModal = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const zoomPluginInstance = zoomPlugin();
  const { ZoomIn, ZoomOut, Zoom } = zoomPluginInstance;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/sanket_mane_resume.pdf";
    link.download = "Sanket_Mane_Resume.pdf";
    link.click();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10000]">
      <div className="dark:bg-black-100 bg-white p-4 rounded w-[700px] shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-xl font-bold"
          onClick={onClose}
        >
          ✖
        </button>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ZoomOut>
              {(props) => (
                <button className="px-2 py-1 bg-gray-200 dark:bg-gray-700 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600" {...props}>
                  Zoom out
                </button>
              )}
            </ZoomOut>
            <Zoom>
              {(props) => (
                <span className="px-2 bg-gray-100 dark:bg-gray-800 dark:text-white rounded">
                  {Math.round(props.scale * 100)}%
                </span>
              )}
            </Zoom>
            <ZoomIn>
              {(props) => (
                <button className="px-2 py-1 bg-gray-200 dark:bg-gray-700 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600" {...props}>
                  Zoom in
                </button>
              )}
            </ZoomIn>
          </div>
          <div className="overflow-auto max-h-[70vh]">
            <Viewer 
              fileUrl="/sanket_mane_resume.pdf" 
              plugins={[zoomPluginInstance]}
              defaultScale={1}
            />
          </div>
        </Worker>
        <div className="w-max mx-auto py-3">
          <MagicButton
            title="Download"
            className="!w-40"
            icon={<TbDownload />}
            position="left"
            handleClick={handleDownload}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
