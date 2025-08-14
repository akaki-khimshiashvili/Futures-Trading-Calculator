"use client";
import { useState } from "react";
import MarketSelector from "./MarketSelector";

export default function FuturesCalculator() {
  const [market, setMarket] = useState(null);

  const [risk, setRisk] = useState("");
  const [handles, setHandles] = useState("");
  const [contracts, setContracts] = useState("");
  const [editOrder, setEditOrder] = useState([]);

  const isNum = (v) => !isNaN(v) && v !== "" && v !== null;
  const toNum = (v) => (v === "" || v === null ? NaN : parseFloat(v));

  const updateField = (field, value) => {
    const snap = {
      risk: field === "risk" ? value : risk,
      handles: field === "handles" ? value : handles,
      contracts: field === "contracts" ? value : contracts,
    };

    setRisk(snap.risk);
    setHandles(snap.handles);
    setContracts(snap.contracts);

    const nextOrder = [...editOrder.filter((f) => f !== field), field].slice(
      -2
    );
    setEditOrder(nextOrder);

    if (!market || nextOrder.length < 2) return;

    const hv = market.handleValue;
    const derived = ["risk", "handles", "contracts"].find(
      (f) => !nextOrder.includes(f)
    );

    const R = toNum(snap.risk);
    const H = toNum(snap.handles);
    const C = toNum(snap.contracts);

    if (derived === "contracts" && isNum(R) && isNum(H) && hv) {
      const perContract = H * hv;
      const c = perContract > 0 ? R / perContract : "";
      setContracts(c !== "" ? String(parseFloat(c.toFixed(2))) : "");
    } else if (derived === "handles" && isNum(R) && isNum(C) && hv) {
      const h = C > 0 && hv > 0 ? R / (C * hv) : "";
      setHandles(h !== "" ? String(parseFloat(h.toFixed(2))) : "");
    } else if (derived === "risk" && isNum(H) && isNum(C) && hv) {
      const r = C * H * hv;
      setRisk(r !== "" ? String(parseFloat(r.toFixed(2))) : "");
    }
  };

  const reset = () => {
    setRisk("");
    setHandles("");
    setContracts("");
    setEditOrder([]);
  };

  return (
    <div
      className="flex flex-col w-full  max-w-[750px] mx-auto rounded-[5px] 
             p-4 sm:p-6 
             bg-gray-900 border border-gray-800 
              shadow-lg 
             gap-2 sm:gap-4 
             text-gray-100"
    >
      <h1 className="text-lg sm:text-xl font-bold text-center sm:text-left">
        Futures Risk Calculator
      </h1>

      <MarketSelector onSelect={(m) => setMarket(m)} />

      {/* Reserve space to prevent width jump */}
      <div className="min-h-[20px] text-m tracking-wider sm:text-sm text-[#08ff8c] truncate">
        {market && (
          <>
            Selected: <b>{market.symbol}</b> — {market.name} (Per handle per
            contract: ${market.handleValue})
          </>
        )}
      </div>

      <fieldset
        className={`flex flex-col gap-3 ${
          !market ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <div className="flex flex-col gap-1">
          <label className="text-xs sm:text-sm font-medium">
            Risk Amount ($)
          </label>
          <input
            className="w-full border border-gray-700 bg-gray-800 text-gray-100 
                       p-2 rounded outline-none focus:ring-2 focus:ring-[#08ff8c] 
                       focus:border-[#08ff8c] 
                       [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            inputMode="decimal"
            value={risk}
            onChange={(e) => updateField("risk", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs sm:text-sm font-medium">Handles</label>
          <input
            className="w-full border border-gray-700 bg-gray-800 text-gray-100 
                       p-2 rounded outline-none focus:ring-2 focus:ring-[#08ff8c] 
                       focus:border-[#08ff8c] 
                       [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            inputMode="decimal"
            step="any"
            value={handles}
            onChange={(e) => updateField("handles", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs sm:text-sm font-medium">Contracts</label>
          <input
            className="w-full border border-gray-700 bg-gray-800 text-gray-100 
                       p-2 rounded outline-none focus:ring-2 focus:ring-[#08ff8c] 
                       focus:border-[#08ff8c] 
                       [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            inputMode="decimal"
            value={contracts}
            onChange={(e) => updateField("contracts", e.target.value)}
          />
        </div>
      </fieldset>

      <button
        onClick={reset}
        className="mt-2 w-full sm:w-auto 
             bg-gray-800/70 border border-gray-700
             text-gray-200 text-sm font-medium 
             py-2 px-5 rounded-md
             transition-all duration-200
             hover:bg-[#08ff8c]/10 hover:text-[#08ff8c]
             hover:border-[#08ff8c]
             active:scale-97
             focus:outline-none focus:ring-2 focus:ring-[#08ff8c]/40"
      >
        Reset
      </button>

      {market && (
        <div className="text-xs text-gray-500 text-center tracking-wider sm:text-left">
          Tip: Enter any <b>two</b> fields, and the third will be calculated.
          <br />
          Example: Type Risk + Handles → Contracts auto-calculated.
        </div>
      )}
    </div>
  );
}
