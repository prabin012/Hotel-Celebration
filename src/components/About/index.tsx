import { Star, Wine } from "lucide-react";
import WhiskyPoster from "../wisky/Wiskys";

const About = () => {
  return (
    <>
      <section
        id="home"
        className=" bg-gray-900 text-white min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/dp.jpg')] opacity-30 bg-cover bg-center"></div>
        <div className="container flex items-center justify-center mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-600/20 border border-amber-500 text-amber-300 px-6 py-1 rounded-full text-sm font-medium mb-6">
              Nepal's Premier Fine Dining Experience
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              जहाँ दाउराको आगोमा{" "}
              <span className="text-amber-400">Flavor & Tradition</span> को
              अनमोल संगम हुन्छ
              {/* Where <span className="text-amber-400">Flavor & Tradition</span>{" "}
              Meet Over Firewood */}
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {/* Welcome to Katiya House — the ultimate destination for savoring
              Nepal’s most beloved Katiya Mutton, slow-cooked in traditional
              clay pots over a wood fire, paired with fresh, hand-tossed
              Tandoori Roti. Discover the taste of heritage with every bite. */}
              Welcome to Katiya House — नेपालकै प्रसिद्ध Katiya Mutton,
              परम्परागत माटोको भाँडामा दाउराको आगोमा बिस्तारै पकाइएको, served
              with ताजा hand-tossed Tandoori Roti. Experience the true taste of
              heritage with every bite.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-lg">
                Reserve Your Table
              </button>
              <a
                href="#menu"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-all shadow-lg"
              >
                Explore Our Menu
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="py-16 md:px-16 px-2 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-64 shadow-lg">
                <img
                  src="/images/gc.jpg"
                  alt="Chef preparing dish"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64 mt-8 shadow-lg">
                <img
                  src="/images/hb.jpg"
                  alt="Restaurant interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64 -mt-8 shadow-lg">
                <img
                  src="/images/eo.jpg"
                  alt="Dining experience"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64 shadow-lg">
                <img
                  src="/images/tr2.jpg"
                  alt="Gourmet dish"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
            {/* <div className="flex flex-col gap-3">
              <span className="w-30 text-center inline-block bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Redefining{" "}
                <span className="text-amber-600">Nepalese Cuisine</span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Grand Royale stands as Nepal's culinary landmark, where
                traditional recipes meet contemporary artistry. Our
                award-winning chefs combine generations of culinary wisdom with
                innovative techniques to create unforgettable dining experiences
                that celebrate Nepal's diverse gastronomic heritage.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We source our ingredients from local farmers and foragers,
                supporting Nepal's agricultural communities while ensuring the
                freshest flavors in every dish. Each plate tells a story of
                Nepal's rich cultural tapestry, presented with elegant
                sophistication.
              </p>
              <br />
              <p className="text-gray-700 mb-8 leading-relaxed">
                We source our ingredients from local farmers and foragers,
                supporting Nepal's agricultural communities while ensuring the
                freshest flavors in every dish. Each plate tells a story of
                Nepal's rich cultural tapestry, presented with elegant
                sophistication.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-3 items-center">
                  <div className="bg-amber-500 p-3 rounded-full mr-4">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">5-Star Dining</p>
                    <p className="text-gray-600 text-sm">
                      Highest standards of hospitality
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-amber-500 p-3 rounded-full mr-4">
                    <Wine className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Curated Pairings</p>
                    <p className="text-gray-600 text-sm">
                      Premium wine & spirit selection
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="flex flex-col gap-3">
              <span className="w-30 text-center inline-block bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
                हाम्रो कथा
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                नेपाली खानाको{" "}
                <span className="text-amber-600">नयाँ परिभाषा</span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Katiya House केवल एउटा रेस्टुरेन्ट मात्र होइन, यो नेपालकै
                स्वादको गन्तव्य हो। यहाँ परम्परागत परिकारहरू आधुनिक कलासँग
                भेटिन्छन्। हाम्रा पुरस्कारप्राप्त शेफहरूले पुस्तौंदेखि चलेका
                पाककला सीपलाई नवीनतम प्रविधिसँग मिलाएर अतुलनीय भान्साको अनुभव
                दिन्छन्।
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                हामीले प्रयोग गर्ने प्रत्येक सामग्री स्थानीय किसान र संकलकहरूबाट
                ल्याइन्छ, जसले नेपालको कृषि समुदायलाई समर्थन गर्छ र प्रत्येक
                परिकारमा ताजगीको स्वाद सुनिश्चित गर्छ। हरेक थाली नेपालकै
                सांस्कृतिक पहिचानको कथा बोकेको हुन्छ, जसलाई आधुनिक शैलीमा
                प्रस्तुत गरिन्छ।
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-3 items-center">
                  <div className="bg-amber-500 p-3 rounded-full mr-4">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">५-तारे भोजन</p>
                    <p className="text-gray-600 text-sm">
                      अतुलनीय सत्कार र उत्कृष्ट सेवा
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="bg-amber-500 p-3 rounded-full mr-4">
                    <Wine className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">विशेष जोडी</p>
                    <p className="text-gray-600 text-sm">
                      प्रिमियम वाइन र स्पिरिटको उत्तम संयोजन
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhiskyPoster />
    </>
  );
};

export default About;
