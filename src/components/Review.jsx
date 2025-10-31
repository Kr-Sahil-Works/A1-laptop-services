import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const reviews = [
  {
    name: "Pavan Kumar",
    text: "I would like to thank you for the excellent service provided for my laptop. The issue was resolved quickly, and I appreciated your clear communication throughout the process. The pickup and delivery were smooth, and the device is working well now I’m very satisfied with your professionalism and timely support. Keep up the good work!",
    rating: 5,
    image: "https://www.google.com/maps/place/A1+Computers+laptop+service+center/@12.9047077,77.6250535,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOeysLwAzknL9Fi8RullK8PcIwtIOw15iv2hOw!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipOeysLwAzknL9Fi8RullK8PcIwtIOw15iv2hOw%3Dw86-h114-k-no!7i3072!8i4096!4m17!1m9!3m8!1s0x3bae15eb788164cf:0xc9f110eda2f3da8f!2sA1+Computers+laptop+service+center!8m2!3d12.9047075!4d77.6250559!9m1!1b1!16s%2Fg%2F11vd9rjvg0!3m6!1s0x3bae15eb788164cf:0xc9f110eda2f3da8f!8m2!3d12.9047075!4d77.6250559!10e5!16s%2Fg%2F11vd9rjvg0?hl=en&entry=ttu&g_ep=EgoyMDI1MTAyOS4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Gopal Naik",
    text: "I had my laptop keyboard replaced, and the technician provided excellent service. He opened the laptop in front of me and handled the work with great care. The keyboard was delicate, but he did a great job. I'm very satisfied with the service.",
    rating: 5,
    image: "https://maps.app.goo.gl/Z5uyvMH8C2ukJjCdA",
  },
  {
    name: "Guruprasad A",
    text: "I had a great experience with A1 Computers Laptop Service Center. My Lenovo laptop was repaired quickly and professionally. The team explained the issue clearly and fixed it at a very reasonable price. Highly recommend their service for anyone looking for trusted Lenovo laptop repair in Bommanahalli.",
    rating: 4,
    image: "https://maps.app.goo.gl/Mj1eQMDQKKGmtMCk7",
  },
  {
    name: "Sarthak S Kumar",
    text: "I have been availing services from A1 Computers from last 1 year. I will highly recommend to give a chance to A1 computer. Owner is great guy with polite behaviour. Not a guy who will cheat for money. Unbelievable support and quality. Truly appreciate it | Services I have availed so far : | Repaired my ASUS FX505DT | Fixed hinge problem with ASUS FX505DT | Cleaning service for HP Pavilion 15S | HP Pavilion Ram IC Fix and BIOS Setup Fix | Laptop Charger for FX505DT | Chip Level Servicing for Dell Laptop",
    rating: 5,
    image: "https://maps.app.goo.gl/bkuaLcTVwtEjLA9m6",
  },
  {
    name: "Sahil Kr",
    text: "My Asus G15 advantage editon gpu  chipset got burned dead and service centre charges almost double about 70-80k for its replacement but luckily I found this service centre and it saved me in 43k my motherboard got  replacement and 3 months warranty as well very genuine and trusted and professional service.  Loved it 💖♥️ very honest, transparent and share details  upfront, worth it ♥️",
    rating: 5,
    image: "https://maps.app.goo.gl/oNGrVi8srWirpxDZ9",
  },
  {
    name: "Ravi Raj Sigh Shekhawat",
    text: "I will highly recommend to give a chance to A1 computer. Owner is great guy with polite behaviour. I had given him dead laptop and he service well. Thank you keep going",
    rating: 5,
    image: "https://maps.app.goo.gl/mf88eAuAw9SFskfz6",
  },
  {
    name: "Siddhant Vijay",
    text: "amazing experience good service. original parts given. service center was asking to replace display and battery at apple care service center but here everything was fine and phone got up and running. apple care was asking for 20k but here they did for 7.5k",
    rating: 5,
    image: "https://maps.app.goo.gl/DFW92azMpEVP7jNS8",
  },
  {
    name: "Tathagata Sau",
    text: "Best Laptop - mobile service you'll ever get. You can trust the guy blindly. The IC s were burnt and Then It got fixed. The laptop is starting and working fine.",
    rating: 5,
    image: "https://maps.app.goo.gl/LUMshA9kreFpksW39",
  },
  {
    name: "Pratham Patel",
    text: "Very nice experience, was not sure if I could away without replacing the motherboard but the owner helped replace only the faulty ICs and ended up saving money. Post servicing laptop looked as good as new 🙂 ",
    rating: 5,
    image: "https://maps.app.goo.gl/v7CqNkoynJqXLikB8",
  },
  {
    name: "Channabasavana Gowda",
    text: "Exceptional service from A1 Computers! My laptop was badly damaged after a water spill,  The SSD, motherboard, and keyboard were all affected, but A1 computers managed to repair the SSD and motherboard and replaced the keyboard. What impressed me the most was that they were able to recover all my data without any loss. Their service was quick, efficient, and professional. Highly recommend A1 Computers for any laptop repair needs.",
    rating: 5,
    image: "https://maps.app.goo.gl/2TBh2W5qcc2HGwzv8",
  },
];

export default function ReviewCarousel() {
  const controls = useAnimation();
  const scrollRef = useRef(null);

  // Infinite scroll effect
  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth / 2;

    const animateScroll = async () => {
      while (true) {
        await controls.start({
          x: -scrollWidth,
          transition: { duration: 55, ease: "linear" },
        });
        controls.set({ x: 0 });
      }
    };

    animateScroll();
  }, [controls]);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>

      <div className="overflow-hidden w-full max-w-7xl">
        <motion.div
          ref={scrollRef}
          animate={controls}
          className="flex space-x-6 px-4"
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="min-w-[300px] max-w-[320px] bg-white shadow-lg rounded-2xl p-5 border border-gray-100 hover:shadow-xl transition-all duration-300 flex-shrink-0"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-14 h-14 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <p className="font-semibold text-gray-800">{r.name}</p>
                  <p className="text-yellow-500 text-sm">
                    {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-3 italic">“{r.text}”</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
