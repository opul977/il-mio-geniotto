"use client";
import React, { useEffect, useState } from "react";

export default function ReviewCheckbox() {
  const [checked, setChecked] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Carica stato da localStorage e controlla parametri URL sul client
  useEffect(() => {
    const saved = localStorage.getItem("reviewChecked");
    if (saved === "true") {
      setChecked(true);
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get("admin") === "true" || saved === "true") {
      setIsVisible(true);
    }
  }, []);

  const toggle = () => {
    const newVal = !checked;
    setChecked(newVal);
    localStorage.setItem("reviewChecked", String(newVal));
  };

  if (!isVisible) return null;

  return (
    <div className="flex items-center justify-center my-8">
      <label className="flex items-center space-x-2 cursor-pointer bg-white/80 backdrop-blur border border-slate-200 px-6 py-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        <input
          type="checkbox"
          checked={checked}
          onChange={toggle}
          className="w-5 h-5 text-primary bg-white border-gray-300 rounded focus:ring-primary cursor-pointer"
        />
        <span className="text-sm font-bold text-slate-800">✅ Stato AdSense: Ho richiesto la revisione</span>
      </label>
    </div>
  );
}

