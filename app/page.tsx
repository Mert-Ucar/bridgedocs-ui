// app/page.tsx

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 font-sans">
      <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-md sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-600">BridgeDocs</div>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#translation" className="hover:text-blue-600 transition">Translation</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>
      </nav>

      <section className="flex flex-col items-center justify-center text-center py-28 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Simplify Your Immigration Journey</h1>
        <p className="max-w-2xl text-lg text-gray-600 mb-8">
          Fast, affordable, and expert help for all your immigration paperwork and document needs.
        </p>
        <a href="#services" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition">
          Explore Our Services
        </a>
      </section>

      <section id="services" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <p className="max-w-xl mx-auto mb-12 text-gray-600">
          From green card applications to work permits, affidavits, translations, and more — we’ve got your back.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">USCIS Form Support</h3>
            <p className="text-gray-600">We help you prepare I-130, I-485, I-765, I-589 and more, professionally and correctly.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Certified Translations</h3>
            <p className="text-gray-600">Official document translations accepted by USCIS, courts, and agencies.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Apostille & Notary</h3>
            <p className="text-gray-600">End-to-end coordination for notarization and apostille in the US and abroad.</p>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-blue-50 text-center">
        <h2 className="text-4xl font-bold mb-6">Why BridgeDocs?</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          We are immigrants ourselves. We understand how overwhelming the paperwork can feel. Our mission is to provide affordable, human-centered, and accurate document support to help you feel confident and empowered.
        </p>
      </section>

      <section id="translation" className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Professional Translation Services</h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-10">
          We offer certified translations for Turkish, Spanish, Arabic, Farsi, Russian, French, and more.
        </p>
        <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Get a Free Quote
        </a>
      </section>

      <section id="contact" className="py-20 px-6 bg-blue-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="mb-4 text-gray-700">Email: support@bridgedocs.co</p>
        <p className="mb-4 text-gray-700">Location: New York, NY</p>
        <p className="text-gray-600 text-sm">We typically respond within 1 business day.</p>
      </section>

      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} BridgeDocs. All rights reserved.</p>
      </footer>
    </main>
  );
}
