import { useState, useEffect } from 'react'
import circleImg from './assets/6101592217eb71ba8acdb1cbe2b211f2.jpg'
import successCircleImg from './assets/ebcd957822ce842a267c633ad3735cd3.jpg'

import localVideo from './assets/Download.mp4'

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
  caption: string;
  rotation: string;
}

function App() {
  const [view, setView] = useState<'question' | 'gifts' | 'gift-1' | 'gift-2' | 'gift-3'>('question')
  const [noClickCount, setNoClickCount] = useState<number>(0)
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState<boolean>(false)
  const [hearts, setHearts] = useState<Heart[]>([])
  const [zoomPolaroid, setZoomPolaroid] = useState<PolaroidData | null>(null)

  const noPhrases = [
    "Wait... are you sure?",
    "nah that's not right...",
    "try again",
    "be serious...",
    "okay now you're just playing...",
    "okay last chance...",
    "okay you leave me no choice...",
    "Click YES please! ❤️"
  ]

  // Get current "NO" button text
  const getNoButtonText = () => {
    if (noClickCount === 0) return "NO"
    const index = Math.min(noClickCount - 1, noPhrases.length - 1)
    return noPhrases[index]
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
    // Add extra temporary heart on each click!
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

  // Polaroid memories details utilizing the user's uploaded images
  const polaroids: PolaroidData[] = [
    { id: 1, img: "", caption: "", rotation: "-rotate-3" },
    { id: 2, img: "", caption: "", rotation: "rotate-2" },
    { id: 3, img: "", caption: "", rotation: "-rotate-2" },
    { id: 4, img: "", caption: "", rotation: "rotate-3" },
    { id: 5, img: "", caption: "", rotation: "-rotate-1" },
    { id: 6, img: "", caption: "", rotation: "rotate-1" },
    { id: 7, img: "", caption: "", rotation: "-rotate-2" },
    { id: 8, img: "", caption: "", rotation: "rotate-2" },
    { id: 9, img: "", caption: "", rotation: "-rotate-3" },
    { id: 10, img: "", caption: "", rotation: "rotate-1" },
    { id: 11, img: "", caption: "", rotation: "-rotate-2" },
    { id: 12, img: "", caption: "", rotation: "rotate-3" }
  ]

  return (
    <div className="min-h-screen bg-rose-50 text-rose-950 flex flex-col items-center justify-center font-hand p-4 relative overflow-hidden">

      {/* Floating Hearts in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {hearts.map((h) => (
          <div
            key={h.id}
            className="absolute bottom-[-50px] text-rose-300/40 animate-float-heart"
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

      {/* VIEW 1: THE QUESTION PAGE (without white card container style) */}
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
              Do you love me?
            </h1>
            <p className="text-rose-400 text-lg">Please answer honestly...</p>
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
              YES! 💕
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
              I knew you'd say yes 💕
            </h1>
            <p className="text-lg text-rose-400 max-w-md font-light">
              I have prepared three little gifts for you. Click on each box to reveal its contents!
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
                <span className="absolute -top-1.5 -right-1.5 text-xs bg-rose-500 text-white rounded-full px-1.5 font-bold shadow">1</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-rose-950">Gift 1</h3>
                <p className="text-sm text-rose-400 font-caveat">Captured Memories</p>
              </div>
            </div>

            {/* Gift 2 Box */}
            <div
              onClick={() => setView('gift-2')}
              className="bg-white/60 hover:bg-white/90 border-2 border-rose-100/50 rounded-3xl p-6 flex flex-col items-center gap-4 shadow-xl hover:shadow-2xl hover:border-rose-300 active:scale-95 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-20 h-20 bg-rose-100 rounded-2xl flex items-center justify-center group-hover:-rotate-12 transition-transform duration-300 relative">
                <span className="text-4xl">🎥</span>
                <span className="absolute -top-1.5 -right-1.5 text-xs bg-rose-500 text-white rounded-full px-1.5 font-bold shadow">2</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-rose-950">Gift 2</h3>
                <p className="text-sm text-rose-400 font-caveat">Our Video</p>
              </div>
            </div>

            {/* Gift 3 Box */}
            <div
              onClick={() => setView('gift-3')}
              className="bg-white/60 hover:bg-white/90 border-2 border-rose-100/50 rounded-3xl p-6 flex flex-col items-center gap-4 shadow-xl hover:shadow-2xl hover:border-rose-300 active:scale-95 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-20 h-20 bg-rose-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                <span className="text-4xl">✉️</span>
                <span className="absolute -top-1.5 -right-1.5 text-xs bg-rose-500 text-white rounded-full px-1.5 font-bold shadow">3</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-rose-950">Gift 3</h3>
                <p className="text-sm text-rose-400 font-caveat">A Special Letter</p>
              </div>
            </div>

          </div>

          {/* Reset Button (Optional back to start) */}
          <button
            onClick={() => {
              setView('question')
              setNoClickCount(0)
            }}
            className="text-xs text-rose-300 hover:text-rose-500 transition-colors mt-8 underline"
          >
            Go back to the start
          </button>

        </div>
      )}

      {/* GIFT 1 VIEW: POLAROID GALLERY */}
      {view === 'gift-1' && (
        <div className="max-w-4xl w-full flex flex-col items-center gap-8 z-10 px-4 animate-fade-in">

          <div className="text-center space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-rose-600 font-caveat">
              Captured memories 💕
            </h1>
            <p className="text-rose-400 max-w-md mx-auto">
              Click on any photograph to enlarge and zoom into our favorite times together.
            </p>
          </div>

          {/* Polaroid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full pt-4 relative">
            {polaroids.map((p) => (
              <div
                key={p.id}
                onClick={() => p.img && setZoomPolaroid(p)}
                className={`polaroid ${p.rotation} ${p.img ? 'cursor-pointer' : 'cursor-default'} relative group`}
              >
                {/* Adhesive Tape Effect */}
                <div className="w-16 h-6 bg-pink-100/60 backdrop-blur-[1px] absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-5deg] border-l border-r border-dashed border-rose-200/30 z-10 shadow-sm"></div>

                <div className="w-full aspect-[4/3] bg-rose-50 rounded-sm overflow-hidden border border-rose-100 shadow-inner relative">
                  {p.img && (
                    <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={p.caption} />
                  )}
                </div>
                {p.caption && (
                  <div className="pt-4 text-center font-caveat text-xl sm:text-2xl text-rose-800 tracking-wide font-bold">
                    {p.caption}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Go Back Button */}
          <button
            onClick={() => setView('gifts')}
            className="mt-6 px-6 py-2.5 bg-rose-500 hover:bg-rose-400 active:scale-95 text-white font-medium rounded-full shadow-md shadow-rose-500/10 transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            &larr; Go back
          </button>
        </div>
      )}

      {/* GIFT 2 VIEW: VIDEO PLAYER */}
      {view === 'gift-2' && (
        <div className="max-w-2xl w-full flex flex-col items-center gap-8 z-10 px-4 animate-fade-in">

          <div className="text-center space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-rose-600 font-caveat">
              Our Love Song 🎶🎥
            </h1>
            <p className="text-rose-400">
              Our song. Press play to listen.
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
              "Every moment spent with you is a frame in my favorite song. I love you!"
            </p>
          </div>

          {/* Go Back Button */}
          <button
            onClick={() => setView('gifts')}
            className="mt-2 px-6 py-2.5 bg-rose-500 hover:bg-rose-400 active:scale-95 text-white font-medium rounded-full shadow-md shadow-rose-500/10 transition-all duration-200 cursor-pointer"
          >
            &larr; Go back
          </button>
        </div>
      )}

      {/* GIFT 3 VIEW: DIGITAL LETTER */}
      {view === 'gift-3' && (
        <div className="max-w-xl w-full flex flex-col items-center gap-8 z-10 px-4 animate-fade-in">

          <div className="text-center space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-rose-600 font-caveat">
              A Special Letter ✉️
            </h1>
            <p className="text-rose-400">
              Click the wax seal heart to open the envelope and slide out the letter.
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
                  <span>My Dearest,</span>
                  <span>💕</span>
                </div>

                {/* Scrollable Letter Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar text-rose-800 pr-1 text-lg sm:text-xl font-caveat leading-relaxed tracking-wide space-y-4">
                  <p>
                    Honestly, I don't even know how I fell for you so quickly, but you've truly awakened so many feelings inside me. I miss you so much, I care about you deeply, and I get so protective of you.
                  </p>
                  <p>
                    I want you to know that I’m always right here by your side, and I would honestly do anything for you. I hope we stay together forever and that you are always with me.
                  </p>
                  <p>
                    I love you so much, and I really hope you like what I made for you.
                  </p>
                  <p className="text-right font-bold text-rose-600 pt-2 font-caveat text-2xl">
                    Yours always, <br />
                    Mo❤️
                  </p>
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
            className="px-6 py-2.5 bg-rose-500 hover:bg-rose-400 active:scale-95 text-white font-medium rounded-full shadow-md shadow-rose-500/10 transition-all duration-200 cursor-pointer"
          >
            &larr; Go back
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
            <div className="w-16 h-6 bg-pink-100/70 absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-3deg] border-l border-r border-dashed border-rose-200/30 z-10 shadow-sm"></div>

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
            <span className="text-xs text-rose-300 font-light mt-1 uppercase tracking-wider">Click anywhere to close</span>
          </div>
        </div>
      )}

    </div>
  )
}

export default App
