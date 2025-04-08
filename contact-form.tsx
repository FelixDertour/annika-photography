"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    quelle: "",
    emotionen: "",
    story: "",
    thema: "",
    wunschfotos: "",
    telefon: "",
    datum: "",
    location: "",
    nachricht: "Lass alles raus ❤️",
    datenschutz: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission, like sending to a server
    console.log("Form submitted:", formData)
    // Reset form or show success message
  }

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto bg-[#f3f0e7] rounded-xl shadow-md mb-16">
      <h2 className="text-4xl font-cormorant text-center mb-8 text-[#4d463b]">Erzähl mir von euch 💌</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-cormorant text-[#4d463b] mb-2">
            Wer seid ihr? / Wer bist du? *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg font-cormorant"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-cormorant text-[#4d463b] mb-2">
            E-Mail-Adresse *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg font-cormorant"
          />
        </div>

        <div>
          <label htmlFor="quelle" className="block text-lg font-cormorant text-[#4d463b] mb-2">
            Wie habt ihr von mir erfahren?
          </label>
          <select
            id="quelle"
            name="quelle"
            value={formData.quelle}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg font-cormorant appearance-none bg-white bg-no-repeat bg-right pr-10"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml;utf8,<svg fill="%236d6450" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>\')',
              backgroundPosition: "right 12px center",
              backgroundSize: "16px",
            }}
          >
            <option>Bitte auswählen</option>
            <option>Empfehlung</option>
            <option>Google</option>
            <option>Instagram</option>
            <option>Facebook</option>
            <option>Auf einer Hochzeit gesehen</option>
            <option>Tipp von einem Fotografen</option>
            <option>Anders</option>
          </select>
        </div>

        <div>
          <label htmlFor="emotionen" className="block text-lg font-cormorant text-[#4d463b] mb-2">
            Welche 3 Emotionen möchtet ihr beim Anschauen eurer Bilder verspüren?
          </label>
          <input
            type="text"
            id="emotionen"
            name="emotionen"
            value={formData.emotionen}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg font-cormorant"
          />
        </div>

        <div>
          <label htmlFor="story" className="block text-lg font-cormorant text-[#4d463b] mb-2">
            Erzähl/t mir etwas über euch / über dich
          </label>
          <textarea
            id="story"
            name="story"
            rows={5}
            value={formData.story}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg font-cormorant"
          />
        </div>

        <div>
          <label htmlFor="thema" className="block text-lg font-cormorant text-[#4d463b] mb-2">
            Welche emotionalen Momente darf ich festhalten?
          </label>
          <select
            id="thema"
            name="thema"
            value={formData.thema}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg font-cormorant appearance-none bg-white bg-no-repeat bg-right pr-10"
            style={{
              backgroundImage:
                'url(\'data:image/svg+xml;utf8,<svg fill="%236d6450" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>\')',
              backgroundPosition: "right 12px center",
              backgroundSize: "16px",
            }}
          >
            <option>Bitte auswählen</option>
            <option>Kids</option>
            <option>Portrait</option>
            <option>Standesamt</option>
            <option>Hochzeit</option>
            <option>Pärchen</option>
            <option>Familien</option>
            <option>Female</option>
            <option>Male</option>
            <option>Schwangerschaft</option>
            <option>Andere</option>
          </select>
        </div>

        <div>
          <label htmlFor="wunschfotos" className="block text-lg font-cormorant text-[#4d463b] mb-2">
            Welche Fotos wünschst du dir?
          </label>
          <input
            type="text"
            id="wunschfotos"
            name="wunschfotos"
            value={formData.wunschfotos}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg font-cormorant"
          />
        </div>

        <div>
          <label htmlFor="telefon" className="block text-lg font-cormorant text-[#4d463b] mb-2">
            Telefonnummer
          </label>
          <input
            type="tel"
            id="telefon"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg font-cormorant"
          />
        </div>

        <div>
          <label htmlFor="datum" className="block text-lg font-cormorant text-[#4d463b] mb-2">
            Wunschdatum
          </label>
          <input
            type="date"
            id="datum"
            name="datum"
            value={formData.datum}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg font-cormorant"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-lg font-cormorant text-[#4d463b] mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg font-cormorant"
          />
        </div>

        <div>
          <label htmlFor="nachricht" className="block text-lg font-cormorant text-[#4d463b] mb-2">
            Deine Nachricht
          </label>
          <textarea
            id="nachricht"
            name="nachricht"
            rows={5}
            value={formData.nachricht}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg font-cormorant"
          />
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="datenschutz"
            name="datenschutz"
            required
            checked={formData.datenschutz}
            onChange={handleChange}
            className="mt-1 mr-2"
          />
          <label htmlFor="datenschutz" className="text-base text-[#4d463b]">
            Ich habe die{" "}
            <a href="/datenschutz" target="_blank" className="text-[#6d6450] underline" rel="noreferrer">
              Datenschutzerklärung
            </a>{" "}
            gelesen und stimme zu.
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#4d463b] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#2e2a23] transition-colors"
          >
            An Annika senden
          </button>
        </div>
      </form>
    </section>
  )
}
