"use client";
import Image from "next/image";
import { Shirt, ShoppingBag, Crown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="relative w-full h-[90vh] flex items-center justify-center text-center bg-black text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/d.jpeg"
            alt="Xavello Background"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
            Xavello
          </h1>
          <p className="mt-4 text-xl italic text-gray-200">
            Defined by Elegance
          </p>
          <p className="mt-6 text-lg text-gray-300">
            Koleksi kaos & hoodie custom dengan desain eksklusif, bahan premium,
            dan kenyamanan maksimal. Xavello hadir untuk lo yang mau tampil beda
            dengan sentuhan elegan.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <a
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#products")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 inline mr-2" />
              Lihat Koleksi
            </a>

           <a
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="px-8 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition cursor-pointer"
            >
              <Crown className="w-5 h-5 inline mr-2" />
              Tentang Kami
            </a>

          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center justify-center gap-2">
          <Crown className="w-7 h-7 text-black" />
          Elegansi dalam Setiap Jahitan
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Xavello percaya kalau pakaian bukan sekadar penutup tubuh, tapi
          representasi gaya hidup. Dari desain, bahan, hingga sablon, semua
          kami pilih dengan detail agar menghadirkan kualitas terbaik untuk lo.
        </p>
      </section>

      {/* Product Section */}
      <section
        id="products"
        className="py-20 px-6 bg-gray-50 w-full flex flex-col items-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 flex items-center gap-2">
          <ShoppingBag className="w-7 h-7 text-black" />
          Koleksi Xavello
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
          {/* Kaos */}
          <Link
  href="/kaos"
  className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-center cursor-pointer"
>
  <Image
    src="/kaos.jpg"
    alt="Kaos Custom"
    width={300}
    height={300}
    className="rounded-xl"
  />
  <h3 className="text-xl font-semibold mt-4 flex items-center gap-2">
    <Shirt className="w-5 h-5 text-black" /> Kaos Custom
  </h3>
  <p className="text-gray-600 text-sm mt-2 text-center">
    Kaos dengan bahan adem & desain eksklusif. Cocok buat daily outfit.
  </p>
</Link>


          {/* Hoodie */}
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-center">
            <Image
              src="/hoodie.jpg"
              alt="Hoodie Custom"
              width={300}
              height={300}
              className="rounded-xl"
            />
            <h3 className="text-xl font-semibold mt-4 flex items-center gap-2">
              <Shirt className="w-5 h-5 text-black" /> Hoodie Custom
            </h3>
            <p className="text-gray-600 text-sm mt-2 text-center">
              Hoodie premium dengan sablon awet & gaya modern. Hangat & stylish.
            </p>
          </div>

          {/* Merchandise */}
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-center">
            <Image
              src="/merch.jpg"
              alt="Merchandise"
              width={300}
              height={300}
              className="rounded-xl"
            />
            <h3 className="text-xl font-semibold mt-4 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-black" /> Merchandise
            </h3>
            <p className="text-gray-600 text-sm mt-2 text-center">
              Topi, totebag, dan aksesoris untuk lengkapi style lo.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="bg-black text-white py-16 text-center mt-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Xavello – Defined by Elegance
        </h2>
        <a
          href="https://wa.me/6289646466047"
          className="inline-block px-10 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
        >
          <ShoppingBag className="w-5 h-5 inline mr-2" />
          Pesan Sekarang
        </a>
        <p className="mt-6 text-gray-400 text-sm">
          © {new Date().getFullYear()} Xavello. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
