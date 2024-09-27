"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const waNumber = "https://wa.me/+6281292979890";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const products = [
    {
      name: "🌟 Semua Varian ",
      image: "/placeholder.svg",
      price: "💰 Rp 59.900",
      description:
        "Satu kotak berisi 10 buah Laffet dengan semua varian rasa kami. Pas banget buat kamu yang penasaran dan ingin mencoba semua kelezatan Laffet! 🎉🥳",
    },
    {
      name: "🌟 2 Varian ",
      image: "/placeholder.svg",
      price: "💰 Rp 54.900",
      description:
        "Satu kotak berisi 10 buah Laffet dengan 2 varian rasa (pilih rasa yang kamu suka). Cocok untuk kamu yang punya lebih dari satu rasa favorit dan ingin menikmati keduanya! 😉✨",
    },
    {
      name: "🌟 1 Varian",
      image: "/placeholder.svg",
      price: "💰 Rp 49.000 - Rp 54.900",
      description:
        "Satu kotak berisi 10 buah Laffet dengan 1 varian rasa pilihanmu. Pas banget buat kamu yang sudah ngefans berat sama satu rasa favorit! 😍",
    },
  ];

  const reviews = [
    {
      name: "Ay Ay",
      text: "Sudah sampai, Kak. Ternyata lapetnya enak banget, nggak terlalu manis dan rasanya pas! 😍 Nanti mau order lagi deh, suka banget sama rasanya.",
      star: "⭐⭐⭐⭐⭐",
      image: "/3.jpg",
    },
    {
      name: "Atie Bustomi",
      text: "Aku udah coba lapet labu kuning dan matcha, enak banget, Kak! Isiannya banyak dan rasanya pas, nggak terlalu manis. 👍👍. Sepertinya aku bakal repeat order lagi nih, Kak! 😊",
      star: "⭐⭐⭐⭐⭐",
      image: "/2.jpg",
    },
    {
      name: "Marlina",
      text: "Udah dimakan mamaku 2 sekaligus. Katanya enak banget.",
      star: "⭐⭐⭐⭐⭐",
      image: "/1.jpg",
    },
  ];

  return (
    <div className="min-h-screen text-gray-800">
      <header
        className="fixed top-0 left-0 right-0 bg-green-50 z-10 transition-all duration-300"
        style={{
          boxShadow: scrollY > 20 ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* <h1 className="text-2xl font-bold text-green-600">Laffet</h1> */}
          <Image src="/icon.png" alt="Laffet Icon" width={40} height={40} />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="#about"
                  className="hover:text-green-600 transition-colors"
                >
                  Profil
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="hover:text-green-600 transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#reviews"
                  className="hover:text-green-600 transition-colors"
                >
                  Ulasan
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-green-600 transition-colors"
                >
                  Pesan
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
        
      <main className="pt-20 md:pt-30">
        <section
          id="hero"
          className="min-h-screen flex items-center bg-green-50"
        >
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-4"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                Lengkapi Perayaan Anda.
              </motion.h2>
              <motion.p
                className="text-xl mb-8"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Hidangan istimewa untuk setiap acara dan momen penting Anda. 🌿<br></br>
                Dari acara pribadi hingga profesional, Laffet siap menemani. 🥳
              </motion.p>
              <motion.a
                href={waNumber}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <MessageCircle className="mr-2" size={20} />
                Pesan di WhatsApp
              </motion.a>
            </div>
            <div className="w-full md:w-1/2">
              <motion.div
                className="rounded-lg overflow-hidden"
                // shadow-lg"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <Image
                  src="/lafet.png"
                  alt="Laffet Hero"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <motion.div
              className="w-full md:w-1/2 mb-8 md:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Image
                src="/AboutUs.jpg"
                alt="Profil"
                width={600}
                height={400}
                // className="rounded-lg shadow-lg"
              />
            </motion.div>
            <div className="w-full md:w-1/2 md:pl-8">
              <motion.h3
                className="text-3xl font-bold mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Profil
              </motion.h3>
              <motion.p
                className="text-lg mb-4 text-justify"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Di Laffet, kami percaya bahwa lapet adalah lebih dari sekadar
                makanan; ia adalah jalinan kisah, kenangan, dan perasaan yang
                mendalam. Arti lapet bagi kami adalah cinta yang diwariskan dari
                generasi ke generasi, sebuah simbol kehangatan keluarga dan
                kebersamaan.
              </motion.p>
              <motion.p
                className="text-lg text-justify"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                Terinspirasi oleh kenangan masa kecil di dapur nenek, aroma
                manis kue lapet yang baru matang, dan tawa bersama keluarga,
                kami menciptakan Laffet untuk menghidupkan kembali momen-momen
                berharga itu. Kami memadukan kue lapet tradisional dengan
                sentuhan modern, menawarkan rasa seperti matcha, ubi ungu, dan
                labu yang membawa Anda pada petualangan rasa dan emosi.
              </motion.p>
            </div>
          </div>
        </section>

        <section id="products" className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <motion.h3
              className="text-3xl font-bold mb-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Menu
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* <div
                    className="mb-4 cursor-pointer"
                    // onClick={() => setSelectedImage(product.image)}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div> */}
                  <h4 className="text-xl font-semibold mb-2 text-center">
                    {product.name}
                  </h4>
                  <h5 className="text-xl font-semibold mb-2 text-center">
                    {product.price}
                  </h5>
                  <p className="text-gray-600 mb-4 text-center">
                    {product.description}
                  </p>
                  <div className="text-center">
                    <a
                      href={waNumber}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors text-sm"
                    >
                      <MessageCircle className="mr-2" size={16} />
                      Pesan di WhatsApp
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h3
              className="text-3xl font-bold mb-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Ulasan
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className="mb-4 cursor-pointer"
                    onClick={() => setSelectedImage(review.image)}
                  >
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={100}
                      height={100}
                      className="w-24 h-24 object-cover rounded-full mx-auto"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-center">
                    {review.name}
                  </h4>
                  <p className="text-center text-gray-600">{review.text}</p>
                  <p className="text-center">{review.star}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <motion.h3
              className="text-3xl font-bold mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Pesan Sekarang!
            </motion.h3>
            <motion.h4
              className="text-2xl font-semibold mb-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              🎉 Siap membuat acara kamu semakin istimewa dengan kelezatan
              varian Laffet? 🎉
            </motion.h4>
            <motion.p
              className="text-lg mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Yuk, langsung chat kami di WhatsApp! Kami dengan senang hati
              akan membantu menjadikan momen spesialmu penuh rasa dan keceriaan.
              😊💬
            </motion.p>
            <motion.a
              href={waNumber}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <MessageCircle className="mr-2" size={20} />
              Pesan di WhatsApp
            </motion.a>
          </div>
        </section>
      </main>

      <footer className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Laffet</h4>
            <p className="text-justify">
              Inspirasi masa kecil dan impian masa depan. Simbol kehangatan
              keluarga dan kebersamaan. Membawa anda berpetualang ke rasa-rasa
              yang baru.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Jam Kerja</h4>
            <ul>
              <li className="flex items-center mb-2">
                <Clock className="mr-2" size={16} /> Selasa - Minggu: 10.00 - 16.00 WIB
              </li>
              <li className="flex items-center mb-2">
                <Clock className="mr-2" size={16} /> Senin: Libur
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Sosial Media</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/laffet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-200 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="min-h-screen p-4">
            <Image
              src={selectedImage}
              alt="Full size image"
              width={300}
              height={300}
              className="min-h-screen object-cover"
            />
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4 z-40">
        <a
          href="https://wa.me/+6281292979890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors shadow-lg"
        >
          <MessageCircle className="mr-2" size={20} />
          Pesan di WhatsApp
        </a>
      </div>
    </div>
  );
}