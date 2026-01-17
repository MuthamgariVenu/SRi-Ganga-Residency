"use client";

import { motion } from "framer-motion";

export default function LocationCard() {
  return (
    <motion.div
      whileTap={{ scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg p-4 mt-4"
    >
      {/* Heading – FINAL LOCKED */}
      <h2 className="text-lg font-extrabold text-gray-900 mb-1">
        📍 Location
      </h2>

      {/* Address – Subtitle standard */}
      <p className="text-sm text-gray-700 font-medium">
         Road No 9,Siddiq Nagar,Gachibowli, Hyderabad, Telangana 500032

      </p>

      {/* Nearby Info */}
<div className="mt-3 space-y-1 text-sm text-gray-700 font-medium">

  <p>🏢 Near IT Offices</p>
  <p>🛍️ AMB Mall – 1 km</p>
  <p>🚇 10 mins to Raidurga Metro</p>
</div>

      {/* Directions Button */}
      <a
        href="https://maps.app.goo.gl/yWnLp5oCUoyWdGGx5?g_st=im"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white font-semibold"
      >
        📍 Get Directions
      </a>
    </motion.div>
  );
}
