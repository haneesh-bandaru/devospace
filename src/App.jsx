import {
  ParallaxProvider,
  Parallax,
  ParallaxBanner,
} from "react-scroll-parallax";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ModernHomepage() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        {/* Hero Section */}
        <ParallaxBanner
          layers={[
            {
              image:
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
              speed: -20,
            },
            {
              speed: -15,
              children: (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="text-center text-white">
                    <h1 className="text-6xl font-bold mb-6 tracking-tight">
                      Innovate. Build. Learn.
                    </h1>
                    <p className="text-2xl mb-8">All in One Dynamic Space</p>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
                      Explore Our Universe
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
          className="h-screen"
        />

        {/* Intro Section */}
        <section className="py-24 bg-white">
          <Parallax translateY={[-20, 20]} className="container mx-auto px-4">
            <p className="text-3xl text-center text-gray-700 font-light leading-relaxed max-w-4xl mx-auto">
              At Devospace.tech, we propel visionary ideas into the digital
              stratosphere and empower you through immersive, cutting-edge
              learning experiences.
            </p>
          </Parallax>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <Parallax translateY={[-10, 10]}>
              <h2 className="text-5xl font-bold mb-16 text-center text-gray-800">
                Our Stellar Services
              </h2>
            </Parallax>

            {/* Products We Build */}
            <div className="mb-24">
              <Parallax translateY={[-5, 5]}>
                <h3 className="text-3xl font-semibold mb-10 text-center text-gray-700">
                  Galactic Digital Solutions
                </h3>
              </Parallax>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  {
                    name: "Web Nebulae",
                    img: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?auto=format&fit=crop&w=1920&q=80",
                  },
                  {
                    name: "Mobile Constellations",
                    img: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=1920&q=80",
                  },
                  {
                    name: "E-Commerce Galaxies",
                    img: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=1920&q=80",
                  },
                  {
                    name: "SaaS Supernovas",
                    img: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=1920&q=80",
                  },
                ].map((product, index) => (
                  <Parallax
                    key={index}
                    translateY={[20, -20]}
                    className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={product.img}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="mb-6 rounded-lg object-cover w-full h-48"
                    />
                    <h4 className="text-2xl font-semibold mb-3 text-gray-800">
                      {product.name}
                    </h4>
                    <p className="text-gray-600">
                      Launching {product.name.toLowerCase()} tailored to your
                      cosmic vision and goals.
                    </p>
                  </Parallax>
                ))}
              </div>
            </div>

            {/* Classes We Offer */}
            <div>
              <Parallax translateY={[-5, 5]}>
                <h3 className="text-3xl font-semibold mb-10 text-center text-gray-700">
                  Interstellar Learning Voyages
                </h3>
              </Parallax>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  {
                    name: "Frontend Odyssey",
                    img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=1920&q=80",
                  },
                  {
                    name: "Backend & API Expedition",
                    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1920&q=80",
                  },
                  {
                    name: "Full-Stack Cosmic Journey",
                    img: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=1920&q=80",
                  },
                ].map((className, index) => (
                  <Parallax
                    key={index}
                    translateY={[10, -10]}
                    className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={className.img}
                      alt={className.name}
                      width={300}
                      height={200}
                      className="mb-6 rounded-lg object-cover w-full h-48"
                    />
                    <h4 className="text-2xl font-semibold mb-3 text-gray-800">
                      {className.name}
                    </h4>
                    <p className="text-gray-600">
                      Embark on a {className.name.toLowerCase()}, designed to
                      elevate your skills in the modern digital cosmos.
                    </p>
                  </Parallax>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <Parallax translateY={[-10, 10]}>
              <h2 className="text-5xl font-bold mb-16 text-center text-gray-800">
                Invest in Your Digital Ascension
              </h2>
            </Parallax>

            {/* Custom Projects Pricing */}
            <div className="mb-24">
              <Parallax translateY={[-5, 5]}>
                <h3 className="text-3xl font-semibold mb-10 text-center text-gray-700">
                  Customized Project Launchpads
                </h3>
              </Parallax>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  "Startup Missions",
                  "Enterprise Voyages",
                  "Galactic Transformations",
                ].map((projectSize, index) => (
                  <Parallax
                    key={index}
                    translateY={[15, -15]}
                    className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <h4 className="text-2xl font-semibold mb-3 text-gray-800">
                      {projectSize}
                    </h4>
                    <p className="text-gray-600 mb-6">Starting from $X,XXX</p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
                      Launch Your Project
                    </Button>
                  </Parallax>
                ))}
              </div>
              <p className="text-center mt-10 text-gray-600">
                We calibrate our pricing to align with your unique project
                trajectory—lets chart your course.
              </p>
            </div>

            {/* Hourly Classes Pricing */}
            <div>
              <Parallax translateY={[-5, 5]}>
                <h3 className="text-3xl font-semibold mb-10 text-center text-gray-700">
                  Skill Acceleration Programs
                </h3>
              </Parallax>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { name: "1-on-1 Cosmic Mentorship", price: "$95/hour" },
                  {
                    name: "Nebula Group Sessions",
                    price: "$60/hour per astronaut",
                  },
                  { name: "Corporate Space Program", price: "$150/hour" },
                ].map((classType, index) => (
                  <Parallax
                    key={index}
                    translateY={[15, -15]}
                    className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <h4 className="text-2xl font-semibold mb-3 text-gray-800">
                      {classType.name}
                    </h4>
                    <p className="text-gray-600 mb-6">{classType.price}</p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
                      Book Your Seat
                    </Button>
                  </Parallax>
                ))}
              </div>
              <p className="text-center mt-10 text-gray-600">
                <a
                  href="#"
                  className="text-purple-600 hover:text-purple-700 underline"
                >
                  Custom Learning Orbits Available
                </a>{" "}
                for extended educational journeys.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <ParallaxBanner
          layers={[
            {
              image:
                "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1920&q=80",
              speed: -10,
            },
            {
              speed: -5,
              children: (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="text-center text-white">
                    <h2 className="text-5xl font-bold mb-8">
                      Ready to Launch Your Digital Odyssey?
                    </h2>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-10 py-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">
                      Initiate Countdown
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
          className="h-[400px]"
        />

        {/* Footer */}
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
              <div className="md:col-span-4">
                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Devospace.tech
                </h3>
                <p className="text-gray-300 mb-6">Innovate. Build. Learn.</p>
                <p className="text-sm text-gray-400">
                  Launching dreams into the digital cosmos, one line of code at
                  a time.
                </p>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-lg font-semibold mb-4 text-purple-300">
                  Navigation
                </h4>
                <ul className="space-y-2">
                  {["Services", "Pricing", "About", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                      >
                        <ChevronRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-3">
                <h4 className="text-lg font-semibold mb-4 text-purple-300">
                  Connect
                </h4>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Linkedin, Instagram].map(
                    (Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors duration-300"
                        aria-label={`Connect on ${Icon.name}`}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    )
                  )}
                </div>
              </div>
              <div className="md:col-span-3">
                <h4 className="text-lg font-semibold mb-4 text-purple-300">
                  Stay in Orbit
                </h4>
                <form className="flex flex-col space-y-3">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="bg-gray-800 text-white border-gray-700 pr-10 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                    <Button
                      type="submit"
                      className="absolute right-1 top-1 bg-purple-600 hover:bg-purple-700 text-white p-1 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400">
                    Join our newsletter for cosmic updates and special offers.
                  </p>
                </form>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Devospace.tech. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Chatbot Widget */}
        <div className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-purple-700 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0  01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </div>
      </div>
    </ParallaxProvider>
  );
}
