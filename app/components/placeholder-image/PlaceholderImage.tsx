"use client";

import { useState } from "react";

interface PlaceholderImageProps {
  width: number;
  height: number;
  text: string;
  filename: string;
  
}

const PlaceholderImage = ({ width, height, text, filename }: PlaceholderImageProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const generateImage = async () => {
    setIsDownloading(true);
    
    try {
      // Create canvas
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      
      if (!ctx) return;
      
      canvas.width = width;
      canvas.height = height;
      
      // Fill background
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(0, 0, width, height);
      
      // Add text
      ctx.fillStyle = "#00DC82";
      ctx.font = `${Math.min(width, height) / 10}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, width / 2, height / 2);
      
      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = filename;
          a.click();
          URL.revokeObjectURL(url);
        }
        setIsDownloading(false);
      }, "image/jpeg", 0.9);
    } catch (error) {
      console.error("Error generating image:", error);
      setIsDownloading(false);
    }
  };

  return (
    <div className="card-hover rounded-lg p-6">
      <div 
        className="mb-4 flex items-center justify-center rounded-lg bg-background-light border border-foreground/10"
        style={{ width: width / 4, height: height / 4 }}
      >
        <span className="text-primary font-semibold">{text}</span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{text}</h3>
          <p className="text-sm text-foreground/60">
            {width} × {height}px
          </p>
        </div>
        <button
          onClick={generateImage}
          disabled={isDownloading}
          className="glow-button rounded-lg px-4 py-2 text-sm font-medium text-black disabled:opacity-50"
        >
          {isDownloading ? "Generating..." : "Download"}
        </button>
      </div>
    </div>
  );
};

export default PlaceholderImage; 