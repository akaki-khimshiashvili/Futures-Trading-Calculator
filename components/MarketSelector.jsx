"use client";
import { useState, useRef, useEffect } from "react";
import markets from "../data/markets";

const groupedMarkets = {
  "Equity Indexes": ["ES", "MES", "NQ", "MNQ", "YM", "MYM", "RTY", "M2K"],
  Commodities: ["CL", "MCL", "GC", "MGC", "SI", "SIL"],
  "Bonds / Treasuries": ["ZB", "ZN", "ZF", "ZT"],
  Currencies: ["6E", "M6E", "6J", "M6J"],
};

export default function MarketSelector({ onSelect }) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = (symbol) => {
    if (!search) return true;
    return symbol.toLowerCase().includes(search.toLowerCase());
  };

  const categorized = Object.entries(groupedMarkets).map(([group, symbols]) => {
    const items = symbols
      .map((s) => markets.find((m) => m.symbol === s))
      .filter((m) => m && (filtered(m.symbol) || filtered(m.name)));
    return { group, items };
  });

  return (
    <div className="relative w-full max-w-[900px] mx-auto" ref={ref}>
      <input
        type="text"
        placeholder="Search market..."
        className="w-full border border-gray-700 bg-gray-800 text-gray-100 
                   p-2 sm:p-3 rounded outline-none 
                   text-sm sm:text-base
                   focus:ring-2 focus:ring-[#08ff8c] focus:border-[#08ff8c]"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
      />

      {open && (
        <div
          className="absolute z-10 mt-1 w-full 
                     max-h-60 sm:max-h-80 overflow-y-auto dropdown-scroll
                     bg-gray-900 border border-gray-700 
                     rounded-lg shadow-lg"
        >
          {categorized.map(
            ({ group, items }) =>
              items.length > 0 && (
                <div key={group}>
                  <div
                    className="px-2 sm:px-3 py-1 text-xs uppercase font-bold 
                               text-gray-400 bg-gray-800 sticky top-0"
                  >
                    {group}
                  </div>
                  {items.map((m) => (
                    <div
                      key={m.symbol}
                      className="px-2 sm:px-3 py-2 
                                 hover:bg-gray-800 hover:text-[#08ff8c]
                                 transition-colors cursor-pointer 
                                 text-sm sm:text-base"
                      onClick={() => {
                        onSelect(m);
                        setOpen(false);
                        setSearch("");
                      }}
                    >
                      <span className="font-semibold">{m.symbol}</span> —{" "}
                      <span className="text-gray-300">{m.name}</span>
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}
