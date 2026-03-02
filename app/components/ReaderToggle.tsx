"use client";
import { useState, useEffect, createContext, useContext } from "react";

const ReaderContext = createContext(false);

export function useReaderMode() {
  return useContext(ReaderContext);
}

export default function ReaderToggle({ children }: { children: React.ReactNode }) {
  const [reader, setReader] = useState(false);

  // Inject a <style> tag to force all backgrounds transparent in reader mode
  useEffect(() => {
    if (!reader) return;
    const style = document.createElement("style");
    style.setAttribute("data-reader-mode", "true");
    style.textContent = `
      .reader-mode,
      .reader-mode * {
        background-color: transparent !important;
      }
      .reader-mode {
        background-color: #FAFAF8 !important;
        color: #1a1a1a !important;
      }
      .reader-mode * {
        color: inherit !important;
        border-color: rgba(0,0,0,0.1) !important;
      }
      .reader-mode [class*="text-muted"],
      .reader-mode [class*="text-paper"] {
        color: #333 !important;
      }
      .reader-mode [style*="color: #C9A55C"],
      .reader-mode [class*="text-\\[#C9A55C\\]"] {
        color: #8B6914 !important;
      }
      .reader-mode .cursor-glow,
      .reader-mode [class*="CursorGlow"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, [reader]);

  return (
    <ReaderContext.Provider value={reader}>
      {/* Toggle button */}
      <div className="fixed top-4 right-4 z-[9999] transition-all duration-300">
        <button
          onClick={() => setReader(!reader)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs uppercase tracking-[0.15em] backdrop-blur-sm transition-all duration-300 cursor-pointer ${
            reader
              ? "bg-white/90 text-black border border-black/10 shadow-sm"
              : "bg-white/5 text-muted/60 border border-paper/10 hover:border-paper/20 hover:text-muted"
          }`}
          style={reader ? { backgroundColor: "rgba(255,255,255,0.9)", color: "#000", borderColor: "rgba(0,0,0,0.1)" } : {}}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          {reader ? "Rich view" : "Reader"}
        </button>
      </div>

      <div className={reader ? "reader-mode min-h-screen pb-24" : ""}>
        {children}
      </div>
    </ReaderContext.Provider>
  );
}
