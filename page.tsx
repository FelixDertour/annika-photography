import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] bg-neutral-100 flex items-center justify-center overflow-hidden">
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-cormorant font-light mb-4">Photography by Annika</h1>
          <p className="text-xl font-cormorant">Unvergessliche Momente, eingefangen in Bildern</p>
        </div>

        {/* Bottom Gradient with Text */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent h-32 flex items-end">
          <div className="container mx-auto px-4 pb-6 flex justify-between items-center w-full text-white">
            <div className="flex items-center gap-2">
              <Image src="/icons/ic-cordinate.svg" alt="Koordinaten Icon" width={20} height={20} />
              <span className="text-sm">48° 10′ N , 10° 48′ O</span>
            </div>
            <div className="text-sm">Capturing Moments in Augsburg & Bavaria</div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {categories.map((category) => (
            <CategoryCard key={category.title} title={category.title} href={category.href} imageSrc={category.image} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="w-full md:w-1/3">
              <Image
                src="/images/annika-fendt-fotografin-augsburg.jpg"
                alt="Annika Fendt – Fotografin aus Augsburg"
                width={600}
                height={800}
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-cormorant mb-6">Über mich</h2>
              <div className="space-y-4 font-cormorant text-lg">
                <p>
                  Hallo, ich bin <strong>Annika Fendt</strong> – Fotografin mit Herz aus <strong>Augsburg</strong> und{" "}
                  <strong>München</strong>. Ich habe mich auf <strong>natürliche Portraits</strong>,{" "}
                  <strong>emotional berührende Hochzeitsreportagen</strong> und{" "}
                  <strong>liebevolle Familienfotos</strong> spezialisiert.
                </p>
                <p>
                  Ob <strong>Babybauch-Shooting in München</strong>, <strong>Hochzeitsfotografie in Augsburg</strong>{" "}
                  oder <strong>Porträts im Boho-Stil</strong> – mein Fokus liegt darauf, echte Emotionen sichtbar zu
                  machen. Für mich zählt nicht nur das perfekte Bild, sondern der Moment dahinter.
                </p>
                <p>
                  In einer entspannten Atmosphäre begleite ich dich mit Empathie, einem geschulten Blick für{" "}
                  <strong>Licht, Farbe und Gefühl</strong> – egal ob bei <strong>Pärchenshootings im Freien</strong>,{" "}
                  <strong>Newborn-Fotografie zuhause</strong> oder <strong>Business-Headshots</strong> für
                  Unternehmer*innen.
                </p>
                <p>
                  Meine Kund*innen sagen oft: „Mit dir fühlt es sich an, als wäre eine gute Freundin hinter der Kamera."
                </p>
                <p>
                  <em>
                    #FotografinMitHerz #authenticphotography #liebeimbild #natürlichePaarfotos
                    #BabybauchShootingAugsburg
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={800}
                  height={800}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-cormorant mb-8 text-center">Folge mir auf Instagram</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {instagramPosts.map((post, index) => (
              <Link
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden rounded-lg relative group"
              >
                <Image
                  src={post.imageSrc || "/placeholder.svg"}
                  alt="Instagram Post"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Instagram
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={32}
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-neutral-800 text-white rounded hover:bg-neutral-700 transition-colors">
              Mehr laden
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-cormorant mb-4 flex items-center justify-center gap-2">
            <Mail size={24} />
            <a href="mailto:hello@photographybyannika.com" className="hover:underline">
              hello@photographybyannika.com
            </a>
          </h2>
          <p className="max-w-2xl mx-auto">
            © 2025 Annika Photography · Code by Felix
            <br />
            <Link href="/datenschutz" className="mr-4 hover:underline">
              Datenschutz
            </Link>
            <Link href="/impressum" className="hover:underline">
              Impressum
            </Link>
            <br />
            Fotografin für <strong>Hochzeitsfotos, Babybauch, Familien & Portraits</strong> in{" "}
            <strong>Augsburg, München</strong> und Umgebung:
            <br />
            <span className="text-sm text-neutral-400">
              Lechhausen, Göggingen, Hochzoll, Haunstetten, Pfersee, Innenstadt, Maxvorstadt, Schwabing, Sendling,
              Untermeitingen, Obermeitingen, Pasing & mehr.
            </span>
          </p>
        </div>
      </footer>
    </main>
  )
}

// Sample data
const categories = [
  { title: "KIDS", href: "/kids", image: "/images/Kids.png" },
  { title: "WEDDING", href: "/wedding", image: "/images/Wedding.png" },
  { title: "PORTRAIT", href: "/portrait", image: "/images/Portarait.png" },
  { title: "COUPLE", href: "/couple", image: "/images/Couple.png" },
  { title: "MALE", href: "/male", image: "/images/Male.png" },
  { title: "MATERNITY", href: "/maternity", image: "/images/Maternity.png" },
  { title: "FRIENDS", href: "/friends", image: "/images/Friends.png" },
  { title: "FEMALE", href: "/female", image: "/images/Female.png" },
  { title: "FAMILY", href: "/family", image: "/images/family.png" },
]

const portfolioImages = [
  { src: "/images/pattyR-min.png", alt: "Portfolio image 1" },
  { src: "/images/VikingR.png", alt: "Portfolio image 2" },
  { src: "/images/lara-h.png", alt: "Portfolio image 3" },
  { src: "/images/AdrianH.png", alt: "Portfolio image 4" },
  { src: "/images/Kids1R.png", alt: "Portfolio image 5" },
]

const instagramPosts = [
  { imageSrc: "/placeholder.svg?height=400&width=400", link: "https://instagram.com" },
  { imageSrc: "/placeholder.svg?height=400&width=400", link: "https://instagram.com" },
  { imageSrc: "/placeholder.svg?height=400&width=400", link: "https://instagram.com" },
  { imageSrc: "/placeholder.svg?height=400&width=400", link: "https://instagram.com" },
]

function CategoryCard({ title, href, imageSrc }: { title: string; href: string; imageSrc: string }) {
  return (
    <Link href={href} className="block relative aspect-square overflow-hidden rounded-lg group">
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        width={400}
        height={400}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Jetzt ansehen</p>
      </div>
    </Link>
  )
}
