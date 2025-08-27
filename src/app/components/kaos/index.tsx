"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shirt, ShoppingBag, X, ArrowLeft } from "lucide-react";

export default function Kaos() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen font-sans bg-gray-50 flex flex-col"
    >
      {/* HERO */}
      <header className="relative w-full h-[60vh] flex items-center justify-center text-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/kaos.jpg"
            alt="Kaos Background"
            fill
            className="object-cover opacity-40"
          />
        </div>
         <div className="absolute top-6 left-6 z-20">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-medium shadow hover:bg-gray-200 transition"
          >
            <ArrowLeft className="w-5 h-5" /> Kembali
          </Link>
        </div>

        <div className="relative z-10 px-6 max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold flex items-center justify-center gap-3">
            <Shirt className="w-10 h-10" /> Kaos Custom
          </h1>
          <p className="mt-4 text-xl text-gray-200">
            Nyaman dipakai, desain eksklusif, bahan premium.
          </p>
        </div>
      </header>

      {/* SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Kenapa Pilih Kaos Xavello?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Kaos Xavello dibuat dari bahan katun premium dengan potongan modern
            yang nyaman dipakai seharian. Sablon eksklusif awet meski dicuci
            berkali-kali, cocok untuk lo yang mau tampil beda dengan gaya elegan.
          </p>
        </motion.div>

        {/* GRID CARD */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "/images/desain1.jpeg",
            "/images/desain2.jpeg",
            "/images/desain3.jpeg",
            "/images/desain4.jpeg",
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer p-4 flex flex-col items-center group"
              onClick={() => setSelectedImage(src)}
            >
              <motion.div
                className="overflow-hidden rounded-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={src}
                  alt={`Desain Kaos ${i + 1}`}
                  width={300}
                  height={300}
                  className="rounded-xl transition-transform duration-500"
                />
              </motion.div>

              <h3 className="mt-4 text-lg font-semibold">Desain {i + 1}</h3>
              <p className="text-gray-600 text-sm mt-2">
                Kaos Xavello edisi {i + 1}, elegan & nyaman.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL FULL IMAGE */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
            >
              <Image
                src={selectedImage}
                alt="Preview"
                width={1200}
                height={800}
                className="rounded-lg w-full h-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 text-center mt-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Miliki Kaos Xavello Sekarang
        </h2>
        <a
          href="https://wa.me/6289646466047"
          className="inline-block px-10 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
        >
          <ShoppingBag className="w-5 h-5 inline mr-2" />
          Pesan Sekarang
        </a>
      </footer>
    </motion.div>
  );
}
