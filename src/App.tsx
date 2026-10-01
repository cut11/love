import { useState, useEffect } from 'react'
import circleImg from './assets/6101592217eb71ba8acdb1cbe2b211f2.jpg'
import successCircleImg from './assets/ebcd957822ce842a267c633ad3735cd3.jpg'
import localVideo from './assets/Download.mp4'

import nonImg1 from './assets/non.jpeg'
import nonImg2 from './assets/non1 (1).jpeg'
import nonImg3 from './assets/non1 (2).jpeg'
import nonImg4 from './assets/non1 (3).jpeg'
import nonImg5 from './assets/non1 (4).jpeg'
import nonImg6 from './assets/non1 (5).jpeg'
import nonImg7 from './assets/non1 (6).jpeg'
import nonImg8 from './assets/non1 (7).jpeg'
import nonImg9 from './assets/non1 (8).jpeg'
import nonImg10 from './assets/non1 (9).jpeg'
import nonImg11 from './assets/non1 (10).jpeg'
import nonImg12 from './assets/non1 (11).jpeg'

// Aliases for WhatsApp images (wpImg1 - wpImg12)
const wpImg1 = nonImg1
const wpImg2 = nonImg2
const wpImg3 = nonImg3
const wpImg4 = nonImg4
const wpImg5 = nonImg5
const wpImg6 = nonImg6
const wpImg7 = nonImg7
const wpImg8 = nonImg8
const wpImg9 = nonImg9
const wpImg10 = nonImg10
const wpImg11 = nonImg11
const wpImg12 = nonImg12

interface Heart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

interface PolaroidData {
  id: number;
  img: string;
  caption?: string;
  captionAr?: string;
  captionEn?: string;
  rotation: string;
}

export type Language = 'ar' | 'en'

function App() {
  // Default to Arabic as requested
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang') as Language
    return saved === 'en' || saved === 'ar' ? saved : 'ar'
  })

  const [view, setView] = useState<'question' | 'gifts' | 'gift-1' | 'gift-2' | 'gift-3'>('question')
  const [noClickCount, setNoClickCount] = useState<number>(0)
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState<boolean>(false)
  const [hearts, setHearts] = useState<Heart[]>([])
  const [zoomPolaroid, setZoomPolaroid] = useState<{ img: string; caption: string } | null>(null)

  // Configure RTL and document properties based on language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    document.title = lang === 'ar' ? 'لأغلى وأحب شخص على قلبي 💕' : 'For My Favorite Person 💕'
    localStorage.setItem('app_lang', lang)
  }, [lang])

  // Playful phrases when clicking NO
  const noPhrasesAr = [
    "استني بس... متأكدة؟ 🥺",
    "لا لا مش معقول... بتستهبلي صح؟ 😂",
    "فكري تاني كويس 🙄",
    "خليكِ جادة شوية... 🥺",
    "انتي بتلعبي بأعصابي دلوقتي! 😂",
    "آخر فرصة ليكي أهو... ⏳",
    "كده مسبتيليش أي حل تاني... 💖",
    "دوسي أيوا بقى عشان خاطري! ❤️"
  ]

  const noPhrasesEn = [
    "Wait... are you sure? 🥺",
    "nah that's not right... 😂",
    "try again 🙄",
    "be serious... 🥺",
    "okay now you're just playing... 😂",
    "okay last chance... ⏳",
    "okay you leave me no choice... 💖",
    "Click YES please! ❤️"
  ]

  // Get current "NO" button text
  const getNoButtonText = () => {
    if (noClickCount === 0) return lang === 'ar' ? "لا" : "NO"
    const list = lang === 'ar' ? noPhrasesAr : noPhrasesEn
    const index = Math.min(noClickCount - 1, list.length - 1)
    return list[index]
  }

  // Generate floating background hearts
  useEffect(() => {
    const initialHearts = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 24 + 12,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 6,
    }))
    setHearts(initialHearts)
  }, [])

  // Handle NO button click
  const handleNoClick = () => {
    setNoClickCount(noClickCount + 1)
    const newHeart: Heart = {
      id: Date.now(),
      x: Math.random() * 80 + 10,
      size: Math.random() * 20 + 20,
      duration: 3,
      delay: 0
    }
    setHearts(prev => [...prev, newHeart])
  }

  // YES button styles (padding and size grow larger on each NO click)
  const getYesStyle = () => {
    const fontSize = 18 + noClickCount * 14
    const paddingY = 12 + noClickCount * 6
    const paddingX = 24 + noClickCount * 12
    return {
      fontSize: `${fontSize}px`,
      padding: `${paddingY}px ${paddingX}px`,
      maxHeight: noClickCount > 6 ? '90vh' : 'auto',
      maxWidth: noClickCount > 6 ? '95vw' : 'auto',
      zIndex: noClickCount > 5 ? 50 : 10,
    }
  }

  // Polaroid memories with the user's custom images and Arabic captions
  const polaroids: PolaroidData[] = [
    { id: 1, img: wpImg1, caption: "اروش شابه فالدنيا 💕", captionAr: "اروش شابه فالدنيا 💕", captionEn: "The Coolest Girl Ever 💕", rotation: "-rotate-3" },
    { id: 2, img: wpImg2, caption: "The cutest cheeks I've ever seen in my life! ✨", captionAr: "أحلى وأجمل خدود شفتها في حياتي! ✨", captionEn: "The cutest cheeks I've ever seen in my life! ✨", rotation: "rotate-2" },
    { id: 3, img: wpImg3, caption: "Look at all that charisma! 😊", captionAr: "شوفي كل الكاريزما دي! 😊", captionEn: "Look at all that charisma! 😊", rotation: "-rotate-2" },
    { id: 4, img: wpImg4, caption: "You are so cute! 💖", captionAr: "أحلى يوم وأحلى ذكرى 💖", captionEn: "You are so cute! 💖", rotation: "rotate-3" },
    { id: 5, img: wpImg5, caption: "The most beautiful smile in my life 🌸", captionAr: "فرحة قلبي بيكي 🌸", captionEn: "The most beautiful smile in my life 🌸", rotation: "-rotate-1" },
    { id: 6, img: wpImg6, caption: "Well well, Miss Playing-Hard-To-Get! 📸", captionAr: "لحظات متتنسيش أبداً 📸", captionEn: "Well well, Miss Playing-Hard-To-Get! 📸", rotation: "rotate-1" },
    { id: 7, img: wpImg7, caption: "Your waist is unreal 🌟", captionAr: "يوم مميز أوي 🌟", captionEn: "Your waist is unreal 🌟", rotation: "-rotate-2" },
    { id: 8, img: wpImg8, caption: "El7ga btaa ❤️", captionAr: "مع بعض دايماً وللأبد ❤️", captionEn: "El7ga btaa ❤️", rotation: "rotate-2" },
    { id: 9, img: wpImg9, caption: "Words fail to describe how beautiful you are! 💕", captionAr: "معاكي الدنيا أحلى 💕", captionEn: "Words fail to describe how beautiful you are! 💕", rotation: "-rotate-3" },
    { id: 10, img: wpImg10, caption: "I've never seen anyone as gorgeous as you before! 🥰", captionAr: "أجمل وأغلى الأوقات 🥰", captionEn: "I've never seen anyone as gorgeous as you before! 🥰", rotation: "rotate-1" },
    { id: 11, img: wpImg11, caption: "look how lucky am i ☀️", captionAr: "يوم قمر شبهك ☀️", captionEn: "look how lucky am i ☀️", rotation: "-rotate-2" },
    { id: 12, img: wpImg12, caption: "Always In My Heart 💖", captionAr: "دايماً جوه قلبي 💓", captionEn: "Always In My Heart 💖", rotation: "rotate-3" }
  ]

  return (
    <div className="min-h-screen bg-rose-50 text-rose-950 flex flex-col items-center justify-center font-hand p-4 relative overflow-hidden">

      {/* Floating Language Switcher */}
      <div className="fixed top-4 right-4 rtl:right-auto rtl:left-4 z-40 flex items-center bg-white/80 backdrop-blur-md border border-rose-200/70 rounded-full p-1 shadow-md shadow-rose-200/30 text-xs sm:text-sm">
        <button
          onClick={() => setLang('ar')}
          className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer font-bold flex items-center gap-1 ${lang === 'ar'
            ? 'bg-rose-500 text-white shadow-sm'
            : 'text-rose-700 hover:text-rose-900 hover:bg-rose-100/50'
            }`}
          title="اللغة العربية"
        >
          <span>🇸🇦</span>
          <span>العربية</span>
        </button>
        <button
          onClick={() => setLang('en')}
          className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer font-bold flex items-center gap-1 ${lang === 'en'
            ? 'bg-rose-500 text-white shadow-sm'
            : 'text-rose-700 hover:text-rose-900 hover:bg-rose-100/50'
            }`}
          title="English Language"
        >
          <span>🇬🇧</span>
          <span>English</span>
        </button>
      </div>

      {/* Floating Hearts in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {hearts.map((h) => (
          <div
            key={h.id}
            className="absolute -bottom-12 text-rose-300/40 animate-float-heart"
            style={{
              left: `${h.x}%`,
              fontSize: `${h.size}px`,
              animationDuration: `${h.duration}s`,
              animationDelay: `${h.delay}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* VIEW 1: THE QUESTION PAGE */}
      {view === 'question' && (
        <div className="max-w-md w-full text-center flex flex-col items-center gap-6 z-10 transition-all duration-500 animate-pulse-slow">

          {/* Custom User Photo in Circle */}
          <div className="w-56 h-56 rounded-full border-4 border-white shadow-xl bg-white flex items-center justify-center overflow-hidden relative">
            <img
              src={circleImg}
              className="w-full h-full object-cover"
              alt="Romantic Photo"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-wide text-rose-600 font-caveat">
              {lang === 'ar' ? 'بتحبيني؟ 💕' : 'Do you love me? 💕'}
            </h1>
            <p className="text-rose-400 text-lg sm:text-xl font-medium">
              {lang === 'ar' ? 'جاوبي بصراحة من قلبك... 🥺' : 'Please answer honestly...'}
            </p>
          </div>

          {/* Interactive YES/NO Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-4">

            {/* YES Button */}
            <button
              onClick={() => {
                setView('gifts')
                // Spawn burst of hearts
                const burst = Array.from({ length: 30 }).map((_, i) => ({
                  id: Date.now() + i,
                  x: Math.random() * 100,
                  size: Math.random() * 30 + 15,
                  duration: Math.random() * 3 + 3,
                  delay: 0,
                }))
                setHearts(prev => [...prev, ...burst])
              }}
              style={getYesStyle()}
              className="bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/20 transition-all duration-300 cursor-pointer flex items-center justify-center text-center leading-none"
            >
              {lang === 'ar' ? 'أيوا طبعاً! 💕' : 'YES! 💕'}
            </button>

            {/* NO Button (Only shows if YES hasn't taken over everything) */}
            {noClickCount < 8 && (
              <button
                onClick={handleNoClick}
                className="bg-rose-500 hover:bg-rose-400 active:scale-95 text-white text-lg font-bold px-6 py-3 rounded-2xl shadow-lg shadow-rose-500/20 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                {getNoButtonText()}
              </button>
            )}
          </div>
        </div>
      )}

      {/* VIEW 2: THE GIFTS PAGE */}
      {view === 'gifts' && (
        <div className="max-w-4xl w-full text-center flex flex-col items-center gap-10 z-10 animate-fade-in px-4">

          <div className="flex flex-col items-center gap-4">
            {/* Custom Happy Photo in Circle */}
            <div className="w-44 h-44 rounded-full border-4 border-white shadow-xl bg-white flex items-center justify-center overflow-hidden">
              <img
                src={successCircleImg}
                className="w-full h-full object-cover"
                alt="Happy Circle Photo"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-rose-600 font-caveat animate-bounce">
              {lang === 'ar' ? "كنت عارف إنك هتقولي أيوا 💕" : "I knew you'd say yes 💕"}
            </h1>
            <p className="text-lg text-rose-400 max-w-md font-medium">
              {lang === 'ar'
                ? "محضرلك 3 هدايا صغيرة، دوسي على كل بوكس عشان تشوفي اللي جواه! 🎁"
                : "I have prepared three little gifts for you. Click on each box to reveal its contents!"}
            </p>
          </div>

          {/* Three Gift Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl pt-4">

            {/* Gift 1 Box */}
            <div
              onClick={() => setView('gift-1')}
              className="bg-white/60 hover:bg-white/90 border-2 border-rose-100/50 rounded-3xl p-6 flex flex-col items-center gap-4 shadow-xl hover:shadow-2xl hover:border-rose-300 active:scale-95 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-20 h-20 bg-rose-100 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 relative">
                <span className="text-4xl">📸</span>
                <span className="absolute -top-1.5 -right-1.5 rtl:-right-auto rtl:-left-1.5 text-xs bg-rose-500 text-white rounded-full px-1.5 font-bold shadow">1</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-rose-950">
                  {lang === 'ar' ? 'الهدية الأولى' : 'Gift 1'}
                </h3>
                <p className="text-sm text-rose-500 font-caveat">
                  {lang === 'ar' ? 'ذكرياتنا وصورنا القمر' : 'Captured Memories'}
                </p>
              </div>
            </div>

            {/* Gift 2 Box */}
            <div
              onClick={() => setView('gift-2')}
              className="bg-white/60 hover:bg-white/90 border-2 border-rose-100/50 rounded-3xl p-6 flex flex-col items-center gap-4 shadow-xl hover:shadow-2xl hover:border-rose-300 active:scale-95 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-20 h-20 bg-rose-100 rounded-2xl flex items-center justify-center group-hover:-rotate-12 transition-transform duration-300 relative">
                <span className="text-4xl">🎥</span>
                <span className="absolute -top-1.5 -right-1.5 rtl:-right-auto rtl:-left-1.5 text-xs bg-rose-500 text-white rounded-full px-1.5 font-bold shadow">2</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-rose-950">
                  {lang === 'ar' ? 'الهدية الثانية' : 'Gift 2'}
                </h3>
                <p className="text-sm text-rose-500 font-caveat">
                  {lang === 'ar' ? 'أغنيتنا المفضلة' : 'Our Video'}
                </p>
              </div>
            </div>

            {/* Gift 3 Box */}
            <div
              onClick={() => setView('gift-3')}
              className="bg-white/60 hover:bg-white/90 border-2 border-rose-100/50 rounded-3xl p-6 flex flex-col items-center gap-4 shadow-xl hover:shadow-2xl hover:border-rose-300 active:scale-95 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-20 h-20 bg-rose-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                <span className="text-4xl">✉️</span>
                <span className="absolute -top-1.5 -right-1.5 rtl:-right-auto rtl:-left-1.5 text-xs bg-rose-500 text-white rounded-full px-1.5 font-bold shadow">3</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-rose-950">
                  {lang === 'ar' ? 'الهدية الثالثة' : 'Gift 3'}
                </h3>
                <p className="text-sm text-rose-500 font-caveat">
                  {lang === 'ar' ? 'جواب من القلب' : 'A Special Letter'}
                </p>
              </div>
            </div>

          </div>

          {/* Reset Button */}
          <button
            onClick={() => {
              setView('question')
              setNoClickCount(0)
            }}
            className="text-xs sm:text-sm text-rose-400 hover:text-rose-600 transition-colors mt-8 underline font-medium cursor-pointer"
          >
            {lang === 'ar' ? 'الرجوع إلى البداية' : 'Go back to the start'}
          </button>

        </div>
      )}

      {/* GIFT 1 VIEW: POLAROID GALLERY */}
      {view === 'gift-1' && (
        <div className="max-w-4xl w-full flex flex-col items-center gap-8 z-10 px-4 animate-fade-in">

          <div className="text-center space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-rose-600 font-caveat">
              {lang === 'ar' ? 'ذكرياتنا الحلوة 💕' : 'Captured memories 💕'}
            </h1>
            <p className="text-rose-400 max-w-md mx-auto font-medium">
              {lang === 'ar'
                ? 'دوسي على أي صورة عشان تكبريها وتفتكري أحلى لحظاتنا سوا.'
                : 'Click on any photograph to enlarge and zoom into our favorite times together.'}
            </p>
          </div>

          {/* Polaroid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full pt-4 relative">
            {polaroids.map((p) => {
              const caption = (lang === 'ar' ? (p.captionAr || p.caption) : (p.captionEn || p.caption)) || p.caption || ''
              return (
                <div
                  key={p.id}
                  onClick={() => p.img && setZoomPolaroid({ img: p.img, caption })}
                  className={`polaroid ${p.rotation} ${p.img ? 'cursor-pointer' : 'cursor-default'} relative group`}
                >
                  {/* Adhesive Tape Effect */}
                  <div className="w-16 h-6 bg-pink-100/60 backdrop-blur-[1px] absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-5deg] border-l border-r border-dashed border-rose-200/30 z-10 shadow-sm"></div>

                  <div className="w-full aspect-4/3 bg-rose-50 rounded-sm overflow-hidden border border-rose-100 shadow-inner relative">
                    {p.img && (
                      <img
                        src={p.img}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        alt={caption}
                      />
                    )}
                  </div>
                  {caption && (
                    <div className="pt-4 text-center font-caveat text-xl sm:text-2xl text-rose-800 tracking-wide font-bold">
                      {caption}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Go Back Button */}
          <button
            onClick={() => setView('gifts')}
            className="mt-6 px-6 py-2.5 bg-rose-500 hover:bg-rose-400 active:scale-95 text-white font-medium rounded-full shadow-md shadow-rose-500/20 transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            <span className="inline-block rtl:rotate-180">&larr;</span>
            <span>{lang === 'ar' ? 'رجوع' : 'Go back'}</span>
          </button>
        </div>
      )}

      {/* GIFT 2 VIEW: VIDEO PLAYER */}
      {view === 'gift-2' && (
        <div className="max-w-2xl w-full flex flex-col items-center gap-8 z-10 px-4 animate-fade-in">

          <div className="text-center space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-rose-600 font-caveat">
              {lang === 'ar' ? 'أغنيتنا المفضلة 🎶🎥' : 'Our Love Song 🎶🎥'}
            </h1>
            <p className="text-rose-400 font-medium">
              {lang === 'ar' ? 'أغنيتنا الخاصة.. دوسي تشغيل عشان تسمعيها.' : 'Our song. Press play to listen.'}
            </p>
          </div>

          {/* Retro Styled video player wrapper */}
          <div className="w-full bg-white/70 backdrop-blur-md border border-rose-100/50 rounded-3xl p-6 sm:p-8 flex flex-col items-center gap-6 shadow-xl shadow-rose-200/30">

            {/* HTML5 Local Video Embed */}
            <div className="w-full relative overflow-hidden rounded-2xl shadow-lg border border-rose-200/50 bg-black aspect-video">
              <video
                src={localVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              ></video>
            </div>

            {/* Love Note */}
            <p className="text-lg text-center text-rose-700 italic font-caveat px-4 leading-relaxed font-bold">
              {lang === 'ar'
                ? "«كل لحظة بقضيها معاكي هي أجمل وأحلى جزء في حياتي.. بحبك أوي!»"
                : '"Every moment spent with you is a frame in my favorite song. I love you!"'}
            </p>
          </div>

          {/* Go Back Button */}
          <button
            onClick={() => setView('gifts')}
            className="mt-2 px-6 py-2.5 bg-rose-500 hover:bg-rose-400 active:scale-95 text-white font-medium rounded-full shadow-md shadow-rose-500/20 transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            <span className="inline-block rtl:rotate-180">&larr;</span>
            <span>{lang === 'ar' ? 'رجوع' : 'Go back'}</span>
          </button>
        </div>
      )}

      {/* GIFT 3 VIEW: DIGITAL LETTER */}
      {view === 'gift-3' && (
        <div className="max-w-xl w-full flex flex-col items-center gap-8 z-10 px-4 animate-fade-in">

          <div className="text-center space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-rose-600 font-caveat">
              {lang === 'ar' ? 'جواب من القلب ✉️' : 'A Special Letter ✉️'}
            </h1>
            <p className="text-rose-400 font-medium">
              {lang === 'ar'
                ? 'دوسي على ختم القلب الأحمر عشان تفتحي الظرف وتشوفي الجواب.'
                : 'Click the wax seal heart to open the envelope and slide out the letter.'}
            </p>
          </div>

          {/* Envelope & Letter Wrapper */}
          <div className="w-full flex items-center justify-center py-10">
            <div
              onClick={() => setIsEnvelopeOpen(!isEnvelopeOpen)}
              className={`envelope-wrapper ${isEnvelopeOpen ? 'open' : ''}`}
            >
              {/* Flap */}
              <div className="envelope-flap"></div>

              {/* Letter Sheet */}
              <div className="letter-sheet flex flex-col gap-4 overflow-hidden">
                <div className="border-b border-rose-200/50 pb-2 flex justify-between items-center text-rose-900 font-semibold font-caveat text-2xl">
                  <span>{lang === 'ar' ? 'حبيبتي وأغلى ما عندي،' : 'My Dearest,'}</span>
                  <span>💕</span>
                </div>

                {/* Scrollable Letter Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar text-rose-800 pr-1 rtl:pr-0 rtl:pl-1 text-lg sm:text-xl font-letter leading-relaxed space-y-4">
                  {lang === 'ar' ? (
                    <>
                      <p>
                        بصراحة، مش عارف حتى إزاي حبيتك بالسرعة دي كلها، بس بجد صحّيتي جوايا مشاعر عمري ما حسيت بيها قبل كده. بتوحشيني جداً، وبهتم بيكي من كل قلبي وبخاف عليكي أوي من أي حاجة.
                      </p>
                      <p>
                        عايزك تعرفي إني دايماً جنبك ومعاكي، ومستعد أعمل أي حاجة في الدنيا عشانك. بتمنى نفضل سوا على طول وتفضلي دايماً معايا ومنورة حياتي.
                      </p>

                      <div className="text-end font-bold text-rose-600 pt-2 font-caveat text-2xl">
                        <span>حبيبك دايماً،</span>
                        <br />
                        <span>Mo❤️</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <p>
                        Honestly, I don't even know how I fell for you so quickly, but you've truly awakened so many feelings inside me. I miss you so much, I care about you deeply, and I get so protective of you.
                      </p>
                      <p>
                        I want you to know that I’m always right here by your side, and I would honestly do anything for you. I hope we stay together forever and that you are always with me.
                      </p>
                      <p>
                        I love you so much, and I really hope you like what I made for you.
                      </p>
                      <div className="text-end font-bold text-rose-600 pt-2 font-caveat text-2xl">
                        <span>Yours always,</span>
                        <br />
                        <span>Mo❤️</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Pocket Cover */}
              <div className="envelope-pocket"></div>

              {/* Wax Seal / Heart Button */}
              {!isEnvelopeOpen && (
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-rose-600 hover:bg-rose-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg border-2 border-white z-10 transition-transform duration-200 active:scale-95 cursor-pointer">
                  ❤️
                </div>
              )}
            </div>
          </div>

          {/* Go Back Button */}
          <button
            onClick={() => {
              setView('gifts')
              setIsEnvelopeOpen(false)
            }}
            className="px-6 py-2.5 bg-rose-500 hover:bg-rose-400 active:scale-95 text-white font-medium rounded-full shadow-md shadow-rose-500/20 transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            <span className="inline-block rtl:rotate-180">&larr;</span>
            <span>{lang === 'ar' ? 'رجوع' : 'Go back'}</span>
          </button>
        </div>
      )}

      {/* POLAROID ZOOM LIGHTBOX MODAL */}
      {zoomPolaroid && (
        <div
          onClick={() => setZoomPolaroid(null)}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fade-in cursor-zoom-out"
        >
          <div className="polaroid max-w-[90vw] max-h-[85vh] scale-100 relative bg-white flex flex-col items-center">
            <div className="w-16 h-6 bg-pink-100/70 absolute -top-3 left-1/2 -translate-x-1/2 -rotate-3 border-l border-r border-dashed border-rose-200/30 z-10 shadow-sm"></div>

            <div className="w-full max-h-[60vh] overflow-hidden rounded-sm flex items-center justify-center bg-rose-50/20">
              <img
                src={zoomPolaroid.img}
                className="max-w-full max-h-[60vh] object-contain"
                alt={zoomPolaroid.caption}
              />
            </div>
            <div className="pt-6 pb-2 text-center font-caveat text-3xl text-rose-800 tracking-wide font-bold">
              {zoomPolaroid.caption}
            </div>
            <span className="text-xs text-rose-400 font-medium mt-1 uppercase tracking-wider">
              {lang === 'ar' ? 'دوسي في أي مكان عشان تقفلي' : 'Click anywhere to close'}
            </span>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
