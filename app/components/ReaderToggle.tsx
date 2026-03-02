"use client";
import { useState, createContext, useContext } from "react";

const ReaderContext = createContext(false);

export function useReaderMode() {
  return useContext(ReaderContext);
}

export default function ReaderToggle({ children }: { children: React.ReactNode }) {
  const [reader, setReader] = useState(false);

  return (
    <ReaderContext.Provider value={reader}>
      {/* Toggle button */}
      <div className={`fixed top-4 right-4 z-[9999] transition-all duration-300`}>
        <button
          onClick={() => setReader(!reader)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs uppercase tracking-[0.15em] backdrop-blur-sm transition-all duration-300 cursor-pointer ${
            reader
              ? "bg-white/90 text-black border border-black/10 shadow-sm"
              : "bg-white/5 text-muted/60 border border-paper/10 hover:border-paper/20 hover:text-muted"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          {reader ? "Rich view" : "Reader"}
        </button>
      </div>

      {/* Reader mode overlay */}
      {reader ? (
        <div className="reader-mode min-h-screen bg-[#FAFAF8] text-[#1a1a1a] pb-24">
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </ReaderContext.Provider>
  );
}
