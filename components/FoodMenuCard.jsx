"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FoodMenuCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Main Card */}
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpen(true)}
        className="bg-white rounded-2xl shadow-lg p-4 mt-4 cursor-pointer"
      >
        <h2 className="text-lg font-bold flex items-center gap-2">
          🍽️ Food Menu
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Homely food • Weekly breakfast menu
        </p>
        <p className="text-xs text-blue-600 mt-2 font-medium">
          👉 Tap to view food details
        </p>
      </motion.div>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-md rounded-2xl p-5"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">🍽️ Food Details</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="space-y-3 text-sm">
                {/* Breakfast */}
               {/* Breakfast */}
<div className="rounded-xl p-3 border bg-yellow-50">
  <p className="font-semibold mb-1">🍳 Breakfast (Weekly)</p>
  <p className="text-sm text-gray-700">
  7 days – 7 different breakfast items (rotational menu)
</p>

</div>


                {/* Lunch */}
                <div className="rounded-xl p-3 border bg-green-50">
                  <p className="font-semibold">🍛 Lunch (Daily)</p>
                  <p className="text-xs text-gray-700 mt-1">
                    Rice, Curry, Dal, Sambar
                  </p>
                </div>

                {/* Dinner */}
                <div className="rounded-xl p-3 border bg-blue-50">
                  <p className="font-semibold">🌙 Dinner (Daily)</p>
                  <p className="text-xs text-gray-700 mt-1">
                    Chapathi, Curry, Rasam, Buttermilk
                  </p>
                </div>

                {/* Non Veg */}
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-center">
                  <p className="font-semibold text-red-700">
                    🍗 Non-Veg Provided
                  </p>
                  <p className="text-xs text-red-600 mt-1">
                    2 times per week
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
