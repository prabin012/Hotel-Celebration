import { Quote, User } from "lucide-react";

const Info = () => {
  return (
    <section id="about" className="py-20  text-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-4xl overflow-hidden  mx-auto  shadow-2xl">
              <div className="bg-gradient-to-br w-full h-full flex items-center justify-center">
                <img src="/images/k1.png" alt="" />
              </div>
            </div>
            <div className="absolute -bottom-8 sm:-right-28 bg-amber-500 p-4 rounded-lg shadow-lg text-center">
              <p className="font-bold text-lg">Pradip Kumar Mahato</p>
              <p className="text-sm">Owner & Head Chef</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Message From Our <span className="text-amber-400">Owner</span>
            </h2>

            <div className="relative bg-white/10 p-8 flex flex-col gap-4 rounded-xl ">
              <Quote className="absolute top-4 left-4 text-gray-900 opacity-30 w-8 h-8" />
              <p className="text-gray-900 leading-relaxed italic mb-6">
                "काटिया हाउसमा हामी केवल खाना मात्र पस्कदैनौँ — हामी सम्झना
                पस्किन्छौँ। हाम्रो यात्रा 2019 मा सुरु भएको हो, एउटा साधारण
                सपनासँग: हाम्रो समुदायमा वास्तविक नेपाली स्वाद पुर्‍याउने।
                काटिया मटनको यो परिकार पुस्तौंदेखि हाम्रो परिवारमा रहँदै आएको छ,
                र तपाईंहरूसँग बाँड्न पाउनु हाम्रो लागि ठूलो सम्मान हो।"
              </p>
              <p className="text-gray-900 leading-relaxed italic">
                "हामीले तयार गर्ने प्रत्येक परिकारमा त्यही माया र ख्याल राखिएको
                हुन्छ जुन हामी आफ्नै परिवारलाई दिन्छौँ। हामी सामग्री स्थानीय
                रूपमा प्राप्त गर्छौँ, किसानहरूलाई समर्थन गर्छौँ, र परम्परागत
                पाककला विधिलाई जोगाउँछौँ — ताकि तपाईंले नेपालकै वास्तविक स्वाद
                अनुभव गर्न सक्नुहोस्।"
              </p>

              <div className="mt-6 flex gap-3 items-center">
                <div className="bg-amber-500 p-2 rounded-full mr-4">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Pradip Kumar Mahato</p>
                  <p className="text-amber-200 text-sm">
                    Founder, Katiya House
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
