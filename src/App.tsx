/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'
import { Globe, Mail, MessageSquare } from 'lucide-react'

const logo = '/logo_white.png'
const plugsImg = 'https://cdn.arcbyte.co/assets/maintenance_plugs.png'

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-outfit selection:bg-[#f55536] selection:text-white overflow-x-hidden">
      {/* Header Logo */}
      <header className="pt-24 lg:pt-32 pb-4 flex justify-center">
         <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="ArcByte" 
              className="w-8 h-8 lg:w-10 lg:h-10 object-contain invert" 
            />
            <span className="text-xl lg:text-2xl font-bold tracking-tighter text-black">ArcByte</span>
            <span className="text-xl lg:text-2xl font-light text-gray-300 mx-1">|</span>
            <img 
              src="/ttdlogo.png" 
              alt="TTD Logo" 
              className="h-8 lg:h-10 object-contain" 
            />
         </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center">
         <div className="max-w-2xl px-6 text-center space-y-4">
            <h1 className="text-[32px] sm:text-[44px] lg:text-[54px] font-bold text-black tracking-tight leading-[1.1] lg:leading-tight">
               System is currently <br />
               under maintenance
            </h1>
            
            <div className="space-y-1">
               <p className="text-[#888] text-base sm:text-lg font-medium leading-relaxed">
                  We're optimizing our core infrastructure.
               </p>
               <p className="text-[#888] text-base sm:text-lg font-medium leading-relaxed">
                  We'll be back online shortly.
               </p>
            </div>
         </div>

         {/* Illustration */}
         <div className="w-full max-w-4xl mt-6 lg:mt-12 mb-8 lg:mb-12 px-6 overflow-hidden">
            <motion.div 
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="relative flex justify-center items-center scale-90 sm:scale-100"
            >
               {/* Decorative Lines mimicking the image */}
               <div className="absolute left-0 right-0 h-[4px] lg:h-[6px] top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                  <div className="h-full w-1/2 bg-gradient-to-r from-blue-100 to-blue-400 opacity-50" />
                  <div className="h-full w-1/2 bg-gradient-to-r from-green-400 to-green-100 opacity-50" />
               </div>
               
               <img 
                 src={plugsImg} 
                 alt="Maintenance Illustration" 
                 className="relative z-10 w-full max-w-2xl object-contain mix-blend-multiply" 
               />
            </motion.div>
         </div>
      </main>

      {/* Footer Contact */}
      <footer className="py-12 border-t border-gray-100 px-6 bg-gray-50/30">
         <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-10 text-[13px] text-[#888] font-medium">
            <div className="flex flex-col items-center gap-6">
               <span className="font-bold text-black/40 tracking-wide text-xs">Connect with Support</span>
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-12">
                  <div className="flex items-center gap-2">
                     <Mail className="w-3.5 h-3.5 text-[#f55536]" />
                     <span className="text-black text-[13px]">hello@arcbyte.co</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Globe className="w-3.5 h-3.5 text-[#f55536]" />
                     <span className="text-black text-[13px]">arcbyte.co</span>
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-3">
               {[
                 { Icon: Globe, href: "https://arcbyte.co" },
                 { Icon: Mail, href: "mailto:hello@arcbyte.co" },
                 { Icon: MessageSquare, href: "https://wa.me/9380221281" }
               ].map((item, i) => (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:border-[#f55536]/50 hover:shadow-lg transition-all group">
                     <item.Icon className="w-4 h-4 text-gray-400 group-hover:text-[#f55536] transition-colors" />
                  </a>
               ))}
            </div>
         </div>
      </footer>
    </div>
  )
}
