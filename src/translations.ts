export type Language = 'ar' | 'en'

export interface TranslationData {
  pageTitle: string
  // Question View
  questionTitle: string
  questionSubtitle: string
  yesBtn: string
  noBtnInitial: string
  noPhrases: string[]
  // Gifts View
  giftsTitle: string
  giftsSubtitle: string
  gift1Title: string
  gift1Desc: string
  gift2Title: string
  gift2Desc: string
  gift3Title: string
  gift3Desc: string
  backToStart: string
  // Polaroid View
  polaroidTitle: string
  polaroidSubtitle: string
  polaroidCaptions: string[]
  zoomCloseText: string
  // Video View
  videoTitle: string
  videoSubtitle: string
  videoQuote: string
  // Letter View
  letterTitle: string
  letterSubtitle: string
  letterGreeting: string
  letterP1: string
  letterP2: string
  letterP3: string
  letterSignOff: string
  letterSender: string
  // Common
  goBack: string
}

export const translations: Record<Language, TranslationData> = {
  ar: {
    pageTitle: "لأغلى وأحب شخص على قلبي 💕",
    // Question View
    questionTitle: "بتحبيني؟",
    questionSubtitle: "جاوبي بصراحة من قلبك... 🥺",
    yesBtn: "أيوا! 💕",
    noBtnInitial: "لا",
    noPhrases: [
      "لحظة... متأكدة؟ 🥺",
      "لا لا أكيد ضغطتي بالغلط...",
      "فكري منيح وجربي تانية 🙄",
      "خليكِ جادة شوي... 🥺",
      "أكيد عم تمزحي معي صح؟ 😂",
      "آخر فرصة إلك... ⏳",
      "ما تركتي لي أي خيار تاني... 💖",
      "اضغطي أيوا أرجوكِ! ❤️"
    ],
    // Gifts View
    giftsTitle: "كنت عارف إنك رح تقولي أيوا 💕",
    giftsSubtitle: "حضرت لكِ 3 هدايا صغيرة، اضغطي على كل صندوق لتشوفي شو مخبيلك جواته! 🎁",
    gift1Title: "الهدية الأولى",
    gift1Desc: "ذكرياتنا الحلوة 📸",
    gift2Title: "الهدية الثانية",
    gift2Desc: "فيديونا الخاص 🎥",
    gift3Title: "الهدية الثالثة",
    gift3Desc: "رسالة من القلب ✉️",
    backToStart: "الرجوع إلى البداية",
    // Polaroid View
    polaroidTitle: "ذكرياتنا الجميلة 💕",
    polaroidSubtitle: "اضغطي على أي صورة لتكبيرها واسترجاع أجمل لحظاتنا مع بعض.",
    polaroidCaptions: [
      "أحلى الذكريات 💕",
      "معاً للأبد ✨",
      "ضحكتي المفضلة 😊",
      "لحظة ما بنساها 💖",
      "قمة السعادة 🌸",
      "صناعة الذكريات 📸",
      "يوم مميز جداً 🌟",
      "دائماً وللأبد ❤️",
      "معك وبس 💕",
      "أغلى الأوقات 🥰",
      "يوم حلو متلك ☀️",
      "دائماً بقلبي 💓"
    ],
    zoomCloseText: "اضغطي في أي مكان للإغلاق",
    // Video View
    videoTitle: "أغنيتنا المفضلة 🎶🎥",
    videoSubtitle: "أغنيتنا الخاصة.. اضغطي تشغيل لتسمعيها.",
    videoQuote: "«كل لحظة بقضيها معك هي نغمة بأغنيتي المفضلة.. بحبك من كل قلبي!»",
    // Letter View
    letterTitle: "رسالة خاصة ✉️",
    letterSubtitle: "اضغطي على ختم القلب الشمعي لفتح المظروف وقراءة الرسالة.",
    letterGreeting: "حبيبتي وأغلى ما عندي،",
    letterP1: "بصراحة، مش عارف حتى كيف حبيتك بهالسرعة، بس بجد صحّيتي جواتي مشاعر كتيرة ما حسيت فيها من قبل. مشتاق لكِ كتييير، وبهتم فيكِ من كل قلبي وبخاف عليكِ من أي شيء.",
    letterP2: "بدي ياكِ تعرفي إني دايماً جنبك ومعك، ومستعد أعمل أي شي كرمالك. بتمنى نضل سوا للأبد وتكوني دايماً معي وبحياتي.",
    letterP3: "بحبك كتييييير، ومن كل قلبي بتمنى يعجبك هالشي الصغير اللي عملته عشانك.",
    letterSignOff: "حبيبك دائماً،",
    letterSender: "Mo❤️",
    // Common
    goBack: "رجوع"
  },
  en: {
    pageTitle: "For My Favorite Person 💕",
    // Question View
    questionTitle: "Do you love me?",
    questionSubtitle: "Please answer honestly...",
    yesBtn: "YES! 💕",
    noBtnInitial: "NO",
    noPhrases: [
      "Wait... are you sure?",
      "nah that's not right...",
      "try again",
      "be serious...",
      "okay now you're just playing...",
      "okay last chance...",
      "okay you leave me no choice...",
      "Click YES please! ❤️"
    ],
    // Gifts View
    giftsTitle: "I knew you'd say yes 💕",
    giftsSubtitle: "I have prepared three little gifts for you. Click on each box to reveal its contents!",
    gift1Title: "Gift 1",
    gift1Desc: "Captured Memories",
    gift2Title: "Gift 2",
    gift2Desc: "Our Video",
    gift3Title: "Gift 3",
    gift3Desc: "A Special Letter",
    backToStart: "Go back to the start",
    // Polaroid View
    polaroidTitle: "Captured memories 💕",
    polaroidSubtitle: "Click on any photograph to enlarge and zoom into our favorite times together.",
    polaroidCaptions: [
      "Sweet Memories 💕",
      "Together Forever ✨",
      "My Favorite Smile 😊",
      "Unforgettable Moment 💖",
      "Pure Happiness 🌸",
      "Making Memories 📸",
      "Special Day 🌟",
      "Forever & Always ❤️",
      "With You 💕",
      "Precious Times 🥰",
      "Beautiful Day ☀️",
      "Always In My Heart 💓"
    ],
    zoomCloseText: "Click anywhere to close",
    // Video View
    videoTitle: "Our Love Song 🎶🎥",
    videoSubtitle: "Our song. Press play to listen.",
    videoQuote: '"Every moment spent with you is a frame in my favorite song. I love you!"',
    // Letter View
    letterTitle: "A Special Letter ✉️",
    letterSubtitle: "Click the wax seal heart to open the envelope and slide out the letter.",
    letterGreeting: "My Dearest,",
    letterP1: "Honestly, I don't even know how I fell for you so quickly, but you've truly awakened so many feelings inside me. I miss you so much, I care about you deeply, and I get so protective of you.",
    letterP2: "I want you to know that I’m always right here by your side, and I would honestly do anything for you. I hope we stay together forever and that you are always with me.",
    letterP3: "I love you so much, and I really hope you like what I made for you.",
    letterSignOff: "Yours always,",
    letterSender: "Mo❤️",
    // Common
    goBack: "Go back"
  }
}
