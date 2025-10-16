
import { useState, useRef, useEffect } from "react";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
        setOpen(false);
      }
  };
  document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-md w-full">

      <div>
        <p className="text-sm text-gray-500">Hai, Petani 👋</p>
        <p className="font-semibold text-green-700">Selamat bekerja hari ini!</p>
      </div>

      <div className="flex items-center gap-4 relative" ref ={dropdownRef}>

        <button onClick={() => setOpen(!open)} className="bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 transition relative" >
          Notifikasi 🔔
        </button>

          {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-100 z-20">
            <div className="p-3 border-b font-semibold text-gray-700">
              Notifikasi
            </div>
            <ul className="max-h-60 overflow-auto">
              <li className="p-3 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">
                🌾 Panen jagung berhasil dicatat
              </li>
              <li className="p-3 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">
                🌧️ Cuaca besok: Hujan ringan
              </li>
              <li className="p-3 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">
                📈 Produksi meningkat 10% bulan ini
              </li>
            </ul>
            <div className="p-2 text-center border-t text-sm text-green-600 hover:bg-green-50 cursor-pointer">
              Lihat semua
            </div>
          </div>
        )}

        <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center rounded-full font-bold">
          P
        </div>

      </div>

    </header>
  );
}
