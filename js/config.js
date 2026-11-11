/* =====================================================================
   PRIME RELAX SPA - EDIT THIS FILE ONLY
   Upload just this file after changing it. Visitors always get the newest
   version (the website loads it fresh every time, so no cache problems).
   ===================================================================== */

var CONFIG = {
  whatsapp: "97474040509",             // country code + number, no + or spaces
  phoneText: "+974 74040509",
  hours: "Daily: 9:00 AM – 2:00 AM",
  hoursAr: "يومياً: 9:00 ص – 2:00 منتصف الليل",
  instagram: "https://www.instagram.com/primerelaxspaqa",
  facebook: "https://www.facebook.com/profile.php?id=61596102883465",
 
  mapLink: "https://www.google.com/maps/search/?api=1&query=25.4077053%2C51.4448891",                          // paste your Google Maps link here
  heroSeconds: 6                        // seconds each hero slide stays
};

/* OFFER BAR (shows above the hero on every page).
   Add, edit or delete lines. Several offers rotate automatically.
   Make the list empty  []  and the bar disappears. */
var OFFERS = [
  { text: "Welcome to Prime Relax Spa for Men.",
    textAr: "مرحباً بكم في برايم ريلاكس سبا للرجال" },
  // { text: "View Our Services",
  //   textAr: "استكشف خدماتنا" }
];

/* HOME PAGE HERO. One slide = a fixed hero image (as now).
   Add more slides to the list and it becomes a carousel again.
   image: path to a photo (best size 1920 x 1080 or larger).
   TIP: when you replace a photo, give it a NEW file name (e.g. hero-new.jpg)
   and write that name here, so visitors never see the old cached photo. */
// var HERO = [
//   { image: "images/entrance.png",
//     eyebrow: "Umm Salal, Qatar", eyebrowAr: "أم صلال، قطر",
//     title: "The relaxation men deserve.", titleAr: "الاسترخاء الذي يستحقه الرجال.",
//     text: "Private treatment rooms. Complete discretion. Men only.",
//     textAr: "غرف علاج خاصة. خصوصية تامة. للرجال فقط." }
// ];

// therapy code
document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("treatmentModal");
  const modalBox = modal?.querySelector(".treatment-modal-box");
  const content = document.getElementById("treatmentModalContent");
  const closeBtn = modal?.querySelector(".treatment-modal-close");
  const cards = document.querySelectorAll(".therapy-card[data-treatment]");

  if (!modal || !content || !closeBtn || !modalBox) return;

  const treatments = {

    thai: {
      en: {
        number: "TREATMENT 01",
        title: "Thai Massage",
        subtitle: "An ancient approach to relaxation and bodywork.",
        about: [
          'Thai Massage, also known as <em>Nuad Bo-Rarn</em>, meaning "ancient massage", is a traditional Thai bodywork practice. It draws on the traditional concept of energy pathways known as SEN lines, using rhythmic pressure and assisted stretching as part of the treatment.',
          "Unlike many massage styles that primarily use gliding movements, Thai Massage may involve a combination of compression, gentle stretching and yoga-inspired positions. The experience is designed to help ease everyday muscle tension and encourage relaxation."
        ],
        techniques: [
          ["Rhythmic compression:", "Steady, controlled pressure applied to selected areas of the body."],
          ["Assisted stretching:", "Guided stretches that help support flexibility and comfortable movement."],
          ["Yoga-inspired movements:", "Supported positions and movements incorporated into traditional Thai massage."]
        ],
        benefits: [
          "Helps ease everyday muscle tension.",
          "Supports flexibility and range of motion.",
          "Encourages relaxation and a sense of well-being."
        ],
        pressure: "Medium to Firm",
        note: "Treatment techniques and pressure can be adjusted according to individual comfort and preference."
      },
      ar: {
        number: "العلاج 01",
        title: "المساج التايلاندي",
        subtitle: "أسلوب تقليدي للاسترخاء والعناية بالجسم.",
        about: [
          "يُعرف المساج التايلاندي أيضاً باسم <em>نُواد بوران</em>، ويعني التدليك القديم، وهو أسلوب تقليدي للعناية بالجسم نشأ في تايلاند. ويعتمد على مفهوم مسارات الطاقة التقليدية المعروفة باسم خطوط سين، مع استخدام الضغط الإيقاعي وتمديدات الجسم المساعدة.",
          "وعلى عكس العديد من أنواع التدليك التي تعتمد بشكل أساسي على الحركات الانسيابية، قد يجمع المساج التايلاندي بين الضغط والتمدد اللطيف ووضعيات مستوحاة من اليوغا، بهدف المساعدة على تخفيف التوتر العضلي اليومي وتعزيز الاسترخاء."
        ],
        techniques: [
          ["الضغط الإيقاعي:", "ضغط ثابت ومتحكم به على مناطق محددة من الجسم."],
          ["التمدد المساعد:", "تمديدات موجهة تساعد على دعم المرونة وسهولة الحركة."],
          ["حركات مستوحاة من اليوغا:", "وضعيات وحركات مدعومة تُستخدم ضمن تقنيات المساج التايلاندي التقليدي."]
        ],
        benefits: [
          "يساعد على تخفيف التوتر العضلي اليومي.",
          "يدعم المرونة ونطاق الحركة.",
          "يعزز الاسترخاء والشعور بالراحة."
        ],
        pressure: "متوسط إلى قوي",
        note: "يمكن تعديل تقنيات العلاج ومستوى الضغط وفقاً لراحة كل شخص وتفضيلاته."
      }
    },

    oil: {
      en: {
        number: "TREATMENT 02",
        title: "Oil Massage",
        subtitle: "A soothing experience with flowing massage movements.",
        about: [
          "Oil Massage is a relaxing treatment that uses massage oil to allow smooth, continuous movements across the body. The flowing technique creates a calming experience and is suited to those who enjoy a gentle, unhurried massage.",
          "The treatment focuses on comfort and relaxation, with the therapist adjusting the movements and pressure to suit individual preferences."
        ],
        techniques: [
          ["Flowing strokes:", "Smooth, continuous movements across selected areas of the body."],
          ["Gentle pressure:", "Comfortable pressure intended to help ease everyday tension."],
          ["Massage oil:", "Oil is used to support smooth movement during the massage."]
        ],
        benefits: [
          "Encourages a relaxed and comfortable experience.",
          "Helps ease everyday feelings of tension.",
          "Offers a calming pause from daily routines."
        ],
        pressure: "Light to Medium",
        note: "Oil type, technique and pressure may vary. Please let the therapist know about any skin sensitivities or allergies before the treatment."
      },
      ar: {
        number: "العلاج 02",
        title: "المساج بالزيوت",
        subtitle: "تجربة مهدئة بحركات تدليك انسيابية.",
        about: [
          "المساج بالزيوت هو علاج مريح يستخدم زيت التدليك لتسهيل الحركات السلسة والمتواصلة على الجسم. وتمنح هذه التقنية الانسيابية تجربة هادئة تناسب الأشخاص الذين يفضلون التدليك اللطيف والمريح.",
          "يركز العلاج على الراحة والاسترخاء، مع إمكانية تعديل الحركات ومستوى الضغط بما يتناسب مع تفضيلات كل شخص."
        ],
        techniques: [
          ["الحركات الانسيابية:", "حركات سلسة ومتواصلة على مناطق محددة من الجسم."],
          ["الضغط اللطيف:", "ضغط مريح يهدف إلى المساعدة في تخفيف التوتر اليومي."],
          ["زيوت التدليك:", "تُستخدم الزيوت لتسهيل حركة اليدين أثناء التدليك."]
        ],
        benefits: [
          "يعزز الشعور بالراحة والاسترخاء.",
          "يساعد على تخفيف الإحساس بالتوتر اليومي.",
          "يوفر لحظة هادئة بعيداً عن الروتين اليومي."
        ],
        pressure: "خفيف إلى متوسط",
        note: "قد يختلف نوع الزيت والتقنية ومستوى الضغط. يرجى إبلاغ المعالج عن أي حساسية جلدية أو تحسس من الزيوت قبل بدء العلاج."
      }
    },

    cream: {
      en: {
        number: "TREATMENT 03",
        title: "Cream Massage",
        subtitle: "Comfortable massage movements with a smooth cream.",
        about: [
          "Cream Massage uses a smooth massage cream to support comfortable, controlled movements across the body. It offers an alternative to oil-based massage for guests who prefer the feel and texture of cream.",
          "The treatment is centred on relaxation and comfort, with movements and pressure adapted to the guest's preference."
        ],
        techniques: [
          ["Cream application:", "A suitable massage cream is applied to support smooth movements."],
          ["Continuous movements:", "Gentle, flowing techniques are used across selected areas."],
          ["Personalised pressure:", "Pressure is adjusted to the guest's comfort level."]
        ],
        benefits: [
          "Provides a comfortable massage experience.",
          "Encourages relaxation and unwinding.",
          "Offers an alternative to oil-based massage."
        ],
        pressure: "Light to Medium",
        note: "The cream used and the exact treatment method should be confirmed with the spa before your session."
      },
      ar: {
        number: "العلاج 03",
        title: "المساج بالكريم",
        subtitle: "حركات تدليك مريحة باستخدام كريم ناعم.",
        about: [
          "يستخدم المساج بالكريم كريم تدليك ناعماً لتسهيل الحركات المريحة والمتحكم بها على الجسم. ويُعد خياراً بديلاً عن التدليك بالزيوت للأشخاص الذين يفضلون ملمس الكريم.",
          "يركز العلاج على الاسترخاء والراحة، مع تعديل الحركات ومستوى الضغط وفقاً لتفضيلات الشخص."
        ],
        techniques: [
          ["استخدام الكريم:", "يتم وضع كريم تدليك مناسب لتسهيل حركة اليدين."],
          ["الحركات المتواصلة:", "تُستخدم تقنيات لطيفة وانسيابية على مناطق محددة من الجسم."],
          ["ضغط يناسبك:", "يتم تعديل مستوى الضغط وفقاً لراحة الشخص."]
        ],
        benefits: [
          "يوفر تجربة تدليك مريحة.",
          "يساعد على الاسترخاء والهدوء.",
          "يقدم بديلاً عن التدليك باستخدام الزيوت."
        ],
        pressure: "خفيف إلى متوسط",
        note: "يرجى التأكد من نوع الكريم وطريقة العلاج المتبعة لدى السبا قبل بدء الجلسة."
      }
    },

    
    hotstone: {
      en: {
        number: "TREATMENT 04",
        title: "Hot Stone Massage",
        subtitle: "A warming experience for deep relaxation and muscle comfort.",
        about: [
          "Hot Stone Massage is a relaxing massage technique that uses smooth, heated stones, traditionally made from basalt, a type of volcanic rock known for its ability to retain heat.",
          "It is called Hot Stone Massage because specially heated stones are placed on selected areas of the body or gently glided across the muscles during the treatment. The warmth helps relax tight muscles, allowing the therapist to work with gentle, flowing massage movements. The combination of soothing warmth and massage techniques creates a calming experience that helps ease everyday muscle tension and encourages overall relaxation."
        ],
        techniques: [
          ["Heated stone placement:", "Smooth, warmed stones are placed on selected areas of the body to provide gentle, comforting warmth."],
          ["Warm stone massage:", "The therapist uses heated stones with controlled movements across the muscles to encourage relaxation."],
          ["Gentle massage movements:", "Flowing massage techniques are combined with the warmth of the stones to help ease muscular tightness."]
        ],
        benefits: [
          "Helps relax tight and tense muscles.",
          "Encourages relaxation and stress relief.",
          "Provides a soothing sense of warmth and comfort.",
          "May help improve local circulation temporarily.",
          "Supports a feeling of physical relaxation and well-being."
        ],
        pressure: "Gentle to Medium",
        note: "Stone temperature and massage pressure should always be adjusted according to individual comfort. Heated stones should never be uncomfortably hot."
      },

      ar: {
        number: "العلاج 04",
        title: "تدليك الأحجار الساخنة",
        subtitle: "تجربة دافئة للاسترخاء العميق وراحة العضلات.",
        about: [
          "يُعد تدليك الأحجار الساخنة من تقنيات التدليك المريحة التي تستخدم أحجاراً ناعمة ودافئة، وغالباً ما تكون مصنوعة من البازلت، وهو نوع من الصخور البركانية المعروف بقدرته على الاحتفاظ بالحرارة.",
          "وسُمّي بهذا الاسم لأن المعالج يستخدم أحجاراً يتم تسخينها بدرجة حرارة مناسبة، ثم يضعها على مناطق محددة من الجسم أو يمررها بلطف على العضلات أثناء جلسة التدليك. تساعد الحرارة على إرخاء العضلات المشدودة، مما يسمح باستخدام حركات تدليك هادئة وانسيابية. ويجمع هذا العلاج بين الدفء المريح وتقنيات التدليك اللطيفة للمساعدة على تخفيف التوتر العضلي اليومي وتعزيز الشعور بالاسترخاء."
        ],
        techniques: [
          ["وضع الأحجار الدافئة:", "توضع الأحجار الناعمة والدافئة على مناطق محددة من الجسم لتوفير دفء مريح ولطيف."],
          ["التدليك بالأحجار الدافئة:", "يستخدم المعالج الأحجار الدافئة بحركات مدروسة على العضلات للمساعدة على الاسترخاء."],
          ["حركات التدليك اللطيفة:", "تُدمج حركات التدليك الانسيابية مع دفء الأحجار للمساعدة على تخفيف شد العضلات."]
        ],
        benefits: [
          "يساعد على إرخاء العضلات المشدودة والمتوترة.",
          "يعزز الاسترخاء ويساعد على تخفيف التوتر.",
          "يوفر إحساساً مريحاً بالدفء والراحة.",
          "قد يساعد على تحسين الدورة الدموية الموضعية بشكل مؤقت.",
          "يعزز الشعور بالراحة الجسدية والعافية."
        ],
        pressure: "خفيف إلى متوسط",
        note: "يتم ضبط درجة حرارة الأحجار وقوة التدليك بما يتناسب مع راحة كل شخص، ويجب ألا تكون الأحجار ساخنة بدرجة تسبب أي انزعاج."
      }
    },


    arabic: {
      en: {
        number: "TREATMENT 04",
        title: "Arabic Massage",
        subtitle: "A traditional massage experience focused on comfort.",
        about: [
          "Arabic Massage is presented as a traditional-style massage experience using focused pressure and flowing hand movements. The session is intended to offer a comfortable setting to unwind and take a break from everyday routines.",
          "The exact techniques used can vary depending on the spa's treatment approach. Guests are encouraged to discuss their comfort preferences with the therapist before the session begins."
        ],
        techniques: [
          ["Focused movements:", "Massage movements directed towards selected areas of the body."],
          ["Flowing techniques:", "Smooth movements used as part of the massage experience."],
          ["Adjustable pressure:", "Pressure can be discussed and adjusted for comfort."]
        ],
        benefits: [
          "Encourages relaxation and comfort.",
          "Provides time to unwind from daily routines.",
          "Allows the session to be adjusted to personal preferences."
        ],
        pressure: "To Be Confirmed",
        note: "The spa should confirm the specific techniques and pressure level offered under this treatment name."
      },
      ar: {
        number: "العلاج 04",
        title: "المساج العربي",
        subtitle: "تجربة تدليك تقليدية تركز على الراحة والاسترخاء.",
        about: [
          "يُقدم المساج العربي كتجربة تدليك بطابع تقليدي، باستخدام ضغط موجه وحركات يدوية انسيابية. وتهدف الجلسة إلى توفير أجواء مريحة تساعد على الاسترخاء والابتعاد قليلاً عن الروتين اليومي.",
          "قد تختلف التقنيات المستخدمة وفقاً لطريقة العلاج المعتمدة لدى السبا. وننصح الضيوف بمناقشة مستوى الراحة والضغط المفضل مع المعالج قبل بدء الجلسة."
        ],
        techniques: [
          ["حركات موجهة:", "حركات تدليك تركز على مناطق محددة من الجسم."],
          ["تقنيات انسيابية:", "حركات سلسة تُستخدم ضمن تجربة التدليك."],
          ["ضغط قابل للتعديل:", "يمكن مناقشة مستوى الضغط وتعديله بما يناسب الراحة."]
        ],
        benefits: [
          "يعزز الاسترخاء والشعور بالراحة.",
          "يوفر وقتاً للابتعاد عن ضغوط الروتين اليومي.",
          "يسمح بتعديل الجلسة وفقاً للتفضيلات الشخصية."
        ],
        pressure: "يُحدد حسب الخدمة",
        note: "ينبغي على السبا تأكيد التقنيات المحددة ومستوى الضغط المقدم ضمن هذا النوع من العلاج."
      }
    },

    sports: {
      en: {
        number: "TREATMENT 05",
        title: "Sports Massage",
        subtitle: "Focused bodywork for areas used during physical activity.",
        about: [
          "Sports Massage is a focused massage approach that pays attention to muscle groups commonly used during physical activity. It may be suitable for people with active routines who prefer attention to particular areas of muscular tightness.",
          "The therapist may use a combination of targeted pressure and controlled movements, adapting the session to the guest's comfort and areas of focus."
        ],
        techniques: [
          ["Targeted pressure:", "Focused pressure applied to selected muscle areas."],
          ["Controlled movements:", "Massage movements adapted to the areas being addressed."],
          ["Personalised approach:", "The session is adjusted according to comfort and the guest's activity needs."]
        ],
        benefits: [
          "Helps ease feelings of muscular tightness.",
          "Encourages relaxation after physical activity.",
          "Focuses attention on selected areas of the body."
        ],
        pressure: "Medium to Firm",
        note: "Please inform the therapist about injuries, pain or health concerns before treatment. This massage is not a substitute for medical care."
      },
      ar: {
        number: "العلاج 05",
        title: "المساج الرياضي",
        subtitle: "تدليك موجه للمناطق المستخدمة أثناء النشاط البدني.",
        about: [
          "المساج الرياضي هو أسلوب تدليك يركز على مجموعات العضلات التي تُستخدم عادةً أثناء النشاط البدني. وقد يناسب الأشخاص ذوي نمط الحياة النشط الذين يفضلون الاهتمام بمناطق معينة من الشد العضلي.",
          "قد يستخدم المعالج مزيجاً من الضغط الموجه والحركات المتحكم بها، مع تعديل الجلسة وفقاً لراحة الشخص والمناطق التي يرغب في التركيز عليها."
        ],
        techniques: [
          ["الضغط الموجه:", "ضغط مركز على مناطق عضلية محددة."],
          ["الحركات المتحكم بها:", "حركات تدليك يتم تعديلها وفقاً للمناطق المستهدفة."],
          ["أسلوب يناسب احتياجاتك:", "يتم تعديل الجلسة وفقاً للراحة ومستوى النشاط البدني."]
        ],
        benefits: [
          "يساعد على تخفيف الشعور بالشد العضلي.",
          "يعزز الاسترخاء بعد النشاط البدني.",
          "يركز على مناطق محددة من الجسم."
        ],
        pressure: "متوسط إلى قوي",
        note: "يرجى إبلاغ المعالج عن أي إصابات أو آلام أو مخاوف صحية قبل العلاج. هذا التدليك لا يُعد بديلاً عن الرعاية الطبية."
      }
    },

    head: {
      en: {
        number: "TREATMENT 06",
        title: "Head Massage",
        subtitle: "A calming treatment for the head and scalp.",
        about: [
          "Head Massage is a soothing treatment that focuses on the scalp and head using gentle, repetitive massage movements. Depending on the spa's method, the session may also include attention to the neck and shoulder area.",
          "It is designed as a quiet moment to unwind, helping guests step away from daily distractions and enjoy a calming experience."
        ],
        techniques: [
          ["Scalp movements:", "Gentle massage movements across the scalp."],
          ["Focused attention:", "A treatment centred on the head and surrounding areas."],
          ["Comfort-led pressure:", "Pressure is adjusted to suit individual comfort."]
        ],
        benefits: [
          "Encourages a sense of calm and relaxation.",
          "Offers a restful break from daily routines.",
          "Provides gentle attention to the scalp and head."
        ],
        pressure: "Light to Medium",
        note: "Please let the therapist know if you have scalp sensitivity, discomfort or any relevant health concerns."
      },
      ar: {
        number: "العلاج 06",
        title: "مساج الرأس",
        subtitle: "جلسة مهدئة للرأس وفروة الرأس.",
        about: [
          "مساج الرأس هو علاج مريح يركز على فروة الرأس والرأس باستخدام حركات تدليك لطيفة ومتكررة. وقد تشمل الجلسة أيضاً منطقة الرقبة والكتفين، وذلك حسب الطريقة المتبعة لدى السبا.",
          "صُممت هذه الجلسة لتمنحك وقتاً هادئاً للاسترخاء والابتعاد عن مشتتات الحياة اليومية والاستمتاع بتجربة مريحة."
        ],
        techniques: [
          ["حركات فروة الرأس:", "حركات تدليك لطيفة على فروة الرأس."],
          ["تركيز محدد:", "علاج يركز على الرأس والمناطق المحيطة به."],
          ["ضغط مريح:", "يتم تعديل مستوى الضغط بما يناسب راحة الشخص."]
        ],
        benefits: [
          "يعزز الشعور بالهدوء والاسترخاء.",
          "يوفر استراحة مريحة من الروتين اليومي.",
          "يمنح فروة الرأس والرأس عناية لطيفة."
        ],
        pressure: "خفيف إلى متوسط",
        note: "يرجى إبلاغ المعالج إذا كنت تعاني من حساسية في فروة الرأس أو أي انزعاج أو مخاوف صحية ذات صلة."
      }
    },

    foot: {
      en: {
        number: "TREATMENT 07",
        title: "Foot Massage",
        subtitle: "A relaxing moment dedicated to your feet.",
        about: [
          "Foot Massage focuses on the feet using comfortable massage movements and pressure. It is a simple way to give tired feet some attention, especially after long periods of standing, walking or daily activity.",
          "Depending on the treatment offered, the session may focus on the soles, toes and other areas of the feet. Pressure can be adjusted according to personal comfort."
        ],
        techniques: [
          ["Foot massage movements:", "Gentle or focused movements across selected areas of the feet."],
          ["Sole and toe attention:", "The soles and toes may receive focused attention."],
          ["Adjustable pressure:", "Pressure is adapted to the guest's comfort."]
        ],
        benefits: [
          "Encourages comfort and relaxation.",
          "Offers a soothing break after long days.",
          "Gives focused attention to tired feet."
        ],
        pressure: "Light to Firm",
        note: "Please inform the therapist about any foot injuries, skin concerns or sensitivity before the treatment."
      },
      ar: {
        number: "العلاج 07",
        title: "مساج القدمين",
        subtitle: "لحظة من الاسترخاء مخصصة لقدميك.",
        about: [
          "يركز مساج القدمين على تدليك القدمين باستخدام حركات وضغط مريحين. وهو وسيلة بسيطة لمنح القدمين المتعبتين بعض العناية، خاصة بعد فترات طويلة من الوقوف أو المشي أو النشاط اليومي.",
          "وفقاً لنوع العلاج المقدم، قد تركز الجلسة على باطن القدمين وأصابع القدم ومناطق أخرى منهما. ويمكن تعديل مستوى الضغط وفقاً للراحة الشخصية."
        ],
        techniques: [
          ["حركات تدليك القدمين:", "حركات لطيفة أو مركزة على مناطق محددة من القدمين."],
          ["العناية ببطن القدم والأصابع:", "يمكن تخصيص عناية لمنطقة باطن القدم وأصابعها."],
          ["ضغط قابل للتعديل:", "يتم تعديل مستوى الضغط بما يناسب راحة الشخص."]
        ],
        benefits: [
          "يعزز الشعور بالراحة والاسترخاء.",
          "يوفر استراحة مهدئة بعد يوم طويل.",
          "يمنح القدمين المتعبتين عناية مركزة."
        ],
        pressure: "خفيف إلى قوي",
        note: "يرجى إبلاغ المعالج عن أي إصابات في القدمين أو مشكلات جلدية أو حساسية قبل بدء العلاج."
      }
    }
  };

  let previousFocus = null;

  function getLanguage() {
    return document.documentElement.lang.toLowerCase().startsWith("ar") ? "ar" : "en";
  }

  function renderTreatment(key) {
    const lang = getLanguage();
    const item = treatments[key];

    if (!item) return;

    const data = item[lang];
    const rtl = lang === "ar";

    content.dir = rtl ? "rtl" : "ltr";
    content.lang = lang;

    content.innerHTML = `
      <span class="treatment-modal-label">
        ${rtl ? "برايم ريلاكس سبا للرجال" : "PRIME RELAX SPA FOR MEN"}
      </span>

      <span class="treatment-modal-number">${data.number}</span>

      <h2 id="treatmentModalTitle">${data.title}</h2>

      <p class="treatment-modal-subtitle">${data.subtitle}</p>

      <div class="treatment-modal-divider"></div>

      <div class="treatment-modal-section">
        <h3>${rtl ? "عن العلاج" : "ABOUT THE TREATMENT"}</h3>
        ${data.about.map(p => `<p>${p}</p>`).join("")}
      </div>

      <div class="treatment-modal-section">
        <h3>${rtl ? "التقنيات المستخدمة" : "TECHNIQUES USED"}</h3>
        <ul>
          ${data.techniques.map(t => `<li><strong>${t[0]}</strong> ${t[1]}</li>`).join("")}
        </ul>
      </div>

      <div class="treatment-modal-section">
        <h3>${rtl ? "الفوائد المحتملة" : "POTENTIAL BENEFITS"}</h3>
        <ul>
          ${data.benefits.map(b => `<li>${b}</li>`).join("")}
        </ul>
      </div>

      <div class="treatment-modal-pressure">
        <span>${rtl ? "مستوى الضغط" : "PRESSURE LEVEL"}</span>
        <strong>${data.pressure}</strong>
      </div>

      <p class="treatment-modal-note">${data.note}</p>
    `;
  }

  function openModal(key) {
    previousFocus = document.activeElement;
    renderTreatment(key);

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (previousFocus) previousFocus.focus();
  }

  cards.forEach(card => {
    card.addEventListener("click", function () {
      openModal(this.dataset.treatment);
    });

    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(this.dataset.treatment);
      }
    });
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // Re-render an open popup if the visitor switches language.
  const languageButton = document.getElementById("langBtn");

  if (languageButton) {
    languageButton.addEventListener("click", function () {
      if (!modal.classList.contains("active")) return;

      const title = content.querySelector("#treatmentModalTitle");
      const currentTitle = title?.textContent;

      const currentKey = Object.keys(treatments).find(key =>
        treatments[key].en.title === currentTitle ||
        treatments[key].ar.title === currentTitle
      );

      if (currentKey) renderTreatment(currentKey);
    });
  }

});


// care page code 
document.addEventListener("DOMContentLoaded", function () {

  const grid = document.getElementById("careGrid");
  const modal = document.getElementById("treatmentModal");
  const modalBox = modal?.querySelector(".treatment-modal-box");
  const content = document.getElementById("treatmentModalContent");
  const closeBtn = modal?.querySelector(".treatment-modal-close");

  if (!grid || !modal || !modalBox || !content || !closeBtn) return;


  /* ==========================================
     PERSONAL CARE SERVICES — ENGLISH & ARABIC
  ========================================== */

  const careServices = {

    manicure: {
      image: "images/room.jpg",
      label: {
        en: "HAND & NAIL CARE",
        ar: "العناية باليدين والأظافر"
      },
      description: {
        en: "A grooming treatment for your hands and fingernails, with nail shaping and attention to the surrounding skin.",
        ar: "جلسة عناية لليدين وأظافر الأصابع، تشمل تشكيل الأظافر والاهتمام بالبشرة المحيطة بها."
      },
      en: {
        number: "SERVICE 01",
        title: "Manicure",
        subtitle: "Well-groomed hands, finished with care.",
        about: [
          "A manicure is a hand and nail grooming treatment designed to improve the appearance and feel of your hands. It gives attention to the fingernails, nail edges and surrounding skin.",
          "Depending on the selected service, a manicure may include nail cleaning, shaping, gentle cuticle care, hand exfoliation and moisturising. A nail finish may also be included if offered by the spa."
        ],
        techniques: [
          ["Nail shaping:", "Nails are trimmed and filed into a neat, comfortable shape."],
          ["Nail and cuticle care:", "The nail area is cleaned and the surrounding skin is gently cared for."],
          ["Hand care:", "A hand moisturiser may be applied to leave the skin feeling comfortable."]
        ],
        benefits: [
          "Improves the neat appearance of hands and nails.",
          "Helps keep nails looking well-groomed.",
          "Provides a moment of personal care and relaxation."
        ],
        note: "Please mention any nail infections, cuts, irritation or skin sensitivities before the service. Tools should be properly cleaned and disinfected between clients."
      },
      ar: {
        number: "الخدمة 01",
        title: "مانيكير",
        subtitle: "يدين مرتبتين وعناية بالتفاصيل.",
        about: [
          "المانيكير هو علاج للعناية باليدين والأظافر، يهدف إلى تحسين مظهرهما وملمسهما. ويشمل الاهتمام بأظافر الأصابع وحوافها والبشرة المحيطة بها.",
          "قد تشمل الجلسة، حسب نوع الخدمة المختارة، تنظيف الأظافر وتشكيلها والعناية اللطيفة بالجلد المحيط بها وتقشير اليدين وترطيبهما. وقد تشمل أيضاً وضع طلاء للأظافر إذا كانت هذه الخدمة متوفرة لدى السبا."
        ],
        techniques: [
          ["تشكيل الأظافر:", "يتم تقليم الأظافر وبردها للحصول على شكل مرتب ومريح."],
          ["العناية بالأظافر والجلد المحيط بها:", "يتم تنظيف منطقة الأظافر والعناية بلطف بالبشرة المحيطة بها."],
          ["العناية باليدين:", "قد يتم وضع مرطب لليدين لتمنح البشرة إحساساً بالراحة."]
        ],
        benefits: [
          "يحسن المظهر المرتب لليدين والأظافر.",
          "يساعد على الحفاظ على مظهر أنيق للأظافر.",
          "يوفر لحظة من العناية الشخصية والاسترخاء."
        ],
        note: "يرجى إبلاغ المختص عن أي التهابات في الأظافر أو جروح أو تهيج أو حساسية جلدية قبل الخدمة. يجب تنظيف وتعقيم الأدوات بشكل مناسب بين العملاء."
      }
    },


    pedicure: {
      image: "images/bath.jpg",
      label: {
        en: "FOOT & NAIL CARE",
        ar: "العناية بالقدمين والأظافر"
      },
      description: {
        en: "A complete grooming service for the feet and toenails, with attention to nail shaping and skin care.",
        ar: "خدمة عناية للقدمين وأظافرها، مع الاهتمام بتشكيل الأظافر والعناية بالبشرة."
      },
      en: {
        number: "SERVICE 02",
        title: "Pedicure",
        subtitle: "A fresh, well-groomed finish for your feet.",
        about: [
          "A pedicure is a grooming treatment focused on the feet and toenails. It combines nail care with attention to the skin of the feet, helping them look neat and feel refreshed.",
          "A typical pedicure may include a foot soak, nail trimming and shaping, gentle cuticle care, removal of superficial rough skin, moisturising and a relaxing foot massage. The exact steps depend on the service selected."
        ],
        techniques: [
          ["Foot soak:", "The feet may be soaked in warm water to prepare them for the treatment."],
          ["Nail grooming:", "Toenails are cleaned, trimmed and shaped."],
          ["Skin care:", "Suitable care is given to rough areas, followed by moisturiser."],
          ["Foot massage:", "A gentle massage may be included to complete the experience."]
        ],
        benefits: [
          "Improves the appearance of feet and toenails.",
          "Helps keep feet feeling clean and comfortable.",
          "Provides a relaxing grooming experience."
        ],
        note: "Please inform the therapist about cuts, wounds, bruising, fungal concerns or other foot conditions before treatment. Avoid treatment over irritated or broken skin."
      },
      ar: {
        number: "الخدمة 02",
        title: "باديكير",
        subtitle: "عناية تمنح قدميك مظهراً مرتباً ومنتعشاً.",
        about: [
          "الباديكير هو علاج تجميلي يركز على القدمين وأظافر أصابع القدم. ويجمع بين العناية بالأظافر والاهتمام ببشرة القدمين لمساعدتهما على الظهور بمظهر مرتب والشعور بالانتعاش.",
          "قد تشمل جلسة الباديكير نقع القدمين وتقليم الأظافر وتشكيلها والعناية اللطيفة بالجلد المحيط بها وإزالة الجلد الخشن السطحي والترطيب وتدليك القدمين. وتختلف الخطوات حسب نوع الخدمة المختارة."
        ],
        techniques: [
          ["نقع القدمين:", "قد يتم نقع القدمين في ماء دافئ لتحضيرهما للعلاج."],
          ["العناية بالأظافر:", "يتم تنظيف أظافر القدمين وتقليمها وتشكيلها."],
          ["العناية بالبشرة:", "تتم العناية بالمناطق الخشنة بشكل مناسب، ثم استخدام المرطب."],
          ["تدليك القدمين:", "قد يتم إضافة تدليك لطيف للقدمين لإكمال الجلسة."]
        ],
        benefits: [
          "يحسن مظهر القدمين وأظافر الأصابع.",
          "يساعد على إبقاء القدمين نظيفتين ومريحتين.",
          "يوفر تجربة عناية واسترخاء."
        ],
        note: "يرجى إبلاغ المختص عن أي جروح أو كدمات أو التهابات فطرية محتملة أو مشكلات أخرى في القدمين قبل العلاج. يجب تجنب العلاج على البشرة المتهيجة أو المجروحة."
      }
    },


    footspa: {
      image: "images/bath.jpg",
      label: {
        en: "RELAXATION & REFRESHMENT",
        ar: "الاسترخاء والانتعاش"
      },
      description: {
        en: "A relaxing foot-care experience with soaking and soothing care for tired feet.",
        ar: "تجربة مريحة للعناية بالقدمين، تشمل النقع والعناية المهدئة للقدمين المتعبتين."
      },
      en: {
        number: "SERVICE 03",
        title: "Foot Spa",
        subtitle: "Give your feet the time and attention they deserve.",
        about: [
          "A Foot Spa is a relaxing foot-care experience designed to give tired feet a refreshing break. It may combine a warm foot soak with gentle cleansing, exfoliation and moisturising.",
          "Depending on the spa's treatment routine, the session may also include a foot mask or a gentle foot massage. It is a comfortable way to pause, unwind and enjoy dedicated foot care."
        ],
        techniques: [
          ["Warm foot soak:", "The feet are immersed in comfortably warm water."],
          ["Gentle exfoliation:", "A suitable exfoliating product may be used to care for the surface of the skin."],
          ["Moisturising care:", "A foot cream or moisturiser may be applied."],
          ["Relaxing finish:", "The session may finish with a gentle foot massage."]
        ],
        benefits: [
          "Offers a relaxing break for tired feet.",
          "Leaves the feet feeling refreshed and cared for.",
          "Provides a comfortable personal-care experience."
        ],
        note: "The exact Foot Spa steps and products should be confirmed with the spa. Please mention any skin irritation, open wounds or foot sensitivities before the session."
      },
      ar: {
        number: "الخدمة 03",
        title: "سبا القدمين",
        subtitle: "امنح قدميك الوقت والعناية التي تستحقانها.",
        about: [
          "سبا القدمين هو تجربة مريحة للعناية بالقدمين، صُممت لمنح القدمين المتعبتين لحظة من الانتعاش. وقد تجمع الجلسة بين نقع القدمين في ماء دافئ والتنظيف اللطيف والتقشير والترطيب.",
          "وفقاً لروتين العلاج لدى السبا، قد تشمل الجلسة أيضاً قناعاً للقدمين أو تدليكاً لطيفاً. إنها طريقة مريحة للتوقف قليلاً والاسترخاء والاستمتاع بعناية مخصصة للقدمين."
        ],
        techniques: [
          ["نقع القدمين بالماء الدافئ:", "يتم وضع القدمين في ماء دافئ بدرجة حرارة مريحة."],
          ["التقشير اللطيف:", "قد يتم استخدام منتج تقشير مناسب للعناية بسطح البشرة."],
          ["الترطيب:", "قد يتم وضع كريم أو مرطب مخصص للقدمين."],
          ["اللمسة الختامية:", "قد تنتهي الجلسة بتدليك لطيف للقدمين."]
        ],
        benefits: [
          "يوفر استراحة مريحة للقدمين المتعبتين.",
          "يترك القدمين بإحساس من الانتعاش والعناية.",
          "يمنحك تجربة مريحة للعناية الشخصية."
        ],
        note: "يرجى التأكد من خطوات علاج سبا القدمين والمنتجات المستخدمة لدى السبا. أبلغ المختص عن أي تهيج جلدي أو جروح مفتوحة أو حساسية في القدمين قبل الجلسة."
      }
    },


    armswaxing: {
      image: "images/room.jpg",
      label: {
        en: "GROOMING & HAIR REMOVAL",
        ar: "العناية وإزالة الشعر"
      },
      description: {
        en: "A waxing service for the arms, leaving the skin with a smooth, clean finish.",
        ar: "خدمة لإزالة شعر الذراعين بالشمع، للحصول على ملمس ناعم ومظهر مرتب."
      },
      en: {
        number: "SERVICE 04",
        title: "Arms Waxing",
        subtitle: "A clean and smooth finish for your arms.",
        about: [
          "Arms Waxing is a hair-removal service that uses suitable waxing products to remove unwanted hair from the arms. It can be selected by guests who prefer a smooth finish without daily shaving.",
          "The therapist applies the wax to the chosen area and removes it using the appropriate technique. The service may cover the full arms or a selected section, depending on the option offered."
        ],
        techniques: [
          ["Skin preparation:", "The treatment area is checked and prepared before waxing."],
          ["Wax application:", "Suitable wax is applied to the selected area."],
          ["Hair removal:", "The wax is removed using the appropriate method."],
          ["Aftercare:", "The skin is gently cared for after the treatment."]
        ],
        benefits: [
          "Removes unwanted arm hair.",
          "Creates a smooth-looking finish.",
          "Offers an alternative to frequent shaving."
        ],
        note: "Waxing may cause temporary redness or sensitivity. Please tell the therapist about skin conditions, allergies, recent exfoliation or products that may make your skin sensitive. Do not wax over broken or irritated skin."
      },
      ar: {
        number: "الخدمة 04",
        title: "إزالة شعر الذراعين بالشمع",
        subtitle: "مظهر نظيف وناعم للذراعين.",
        about: [
          "إزالة شعر الذراعين بالشمع هي خدمة تستخدم منتجات شمع مناسبة لإزالة الشعر غير المرغوب فيه من الذراعين. وهي خيار لمن يفضلون الحصول على ملمس ناعم دون الحاجة إلى الحلاقة اليومية.",
          "يقوم المختص بوضع الشمع على المنطقة المحددة وإزالته بالطريقة المناسبة. وقد تشمل الخدمة الذراعين بالكامل أو جزءاً محدداً منهما حسب الخيار المتوفر."
        ],
        techniques: [
          ["تحضير البشرة:", "يتم فحص المنطقة المستهدفة وتحضيرها قبل إزالة الشعر."],
          ["وضع الشمع:", "يتم وضع الشمع المناسب على المنطقة المختارة."],
          ["إزالة الشعر:", "تتم إزالة الشمع باستخدام الطريقة المناسبة."],
          ["العناية بعد الجلسة:", "تتم العناية بالبشرة بلطف بعد انتهاء العلاج."]
        ],
        benefits: [
          "يزيل الشعر غير المرغوب فيه من الذراعين.",
          "يمنح البشرة مظهراً ناعماً.",
          "يوفر بديلاً عن الحلاقة المتكررة."
        ],
        note: "قد تسبب إزالة الشعر بالشمع احمراراً أو حساسية مؤقتة. يرجى إبلاغ المختص عن أي مشكلات جلدية أو حساسية أو تقشير حديث للبشرة أو استخدام منتجات قد تزيد حساسيتها. لا ينبغي إزالة الشعر بالشمع فوق البشرة المجروحة أو المتهيجة."
      }
    },


    halflegs: {
      image: "images/bath.jpg",
      label: {
        en: "GROOMING & HAIR REMOVAL",
        ar: "العناية وإزالة الشعر"
      },
      description: {
        en: "A targeted waxing service for the selected half of the legs.",
        ar: "خدمة إزالة شعر مخصصة لنصف الساقين حسب المنطقة المختارة."
      },
      en: {
        number: "SERVICE 05",
        title: "Half Legs Waxing",
        subtitle: "Focused grooming for a selected area of the legs.",
        about: [
          "Half Legs Waxing removes unwanted hair from a selected section of the legs. Depending on the spa's service definition, this may refer to the lower legs or upper legs.",
          "The area is prepared before suitable wax is applied and removed using the appropriate technique. The service is a convenient option for guests who do not require full-leg waxing."
        ],
        techniques: [
          ["Area selection:", "The therapist confirms which half of the legs is included."],
          ["Skin preparation:", "The selected area is checked and prepared."],
          ["Waxing:", "Wax is applied and removed using the suitable method."],
          ["Post-treatment care:", "The treated skin is gently cared for."]
        ],
        benefits: [
          "Removes unwanted hair from the selected area.",
          "Creates a smooth-looking finish.",
          "Provides a focused alternative to full-leg waxing."
        ],
        note: "Please confirm whether the service covers the upper or lower legs when arranging your appointment. Waxing can cause temporary redness or sensitivity."
      },
      ar: {
        number: "الخدمة 05",
        title: "إزالة شعر نصف الساقين",
        subtitle: "عناية مركزة بالمنطقة المختارة من الساقين.",
        about: [
          "تعمل خدمة إزالة شعر نصف الساقين بالشمع على إزالة الشعر غير المرغوب فيه من جزء محدد من الساقين. وقد يُقصد بذلك الجزء السفلي أو العلوي حسب تعريف الخدمة لدى السبا.",
          "يتم تحضير المنطقة قبل وضع الشمع المناسب وإزالته بالطريقة الصحيحة. وتعد هذه الخدمة خياراً مناسباً لمن لا يحتاجون إلى إزالة شعر الساقين بالكامل."
        ],
        techniques: [
          ["تحديد المنطقة:", "يؤكد المختص الجزء المشمول من الساقين."],
          ["تحضير البشرة:", "يتم فحص المنطقة المختارة وتحضيرها."],
          ["إزالة الشعر بالشمع:", "يتم وضع الشمع وإزالته بالطريقة المناسبة."],
          ["العناية بعد العلاج:", "تتم العناية بلطف بالبشرة المعالجة."]
        ],
        benefits: [
          "يزيل الشعر غير المرغوب فيه من المنطقة المختارة.",
          "يمنح البشرة مظهراً ناعماً.",
          "يوفر خياراً محدداً بدلاً من إزالة شعر الساقين بالكامل."
        ],
        note: "يرجى التأكد مما إذا كانت الخدمة تشمل الجزء العلوي أو السفلي من الساقين عند تحديد الموعد. قد تسبب إزالة الشعر بالشمع احمراراً أو حساسية مؤقتة."
      }
    },


    backwaxing: {
      image: "images/room.jpg",
      label: {
        en: "BODY GROOMING",
        ar: "العناية بالجسم"
      },
      description: {
        en: "A body-waxing service focused on removing unwanted hair from the back.",
        ar: "خدمة لإزالة الشعر غير المرغوب فيه من منطقة الظهر بالشمع."
      },
      en: {
        number: "SERVICE 06",
        title: "Back Waxing",
        subtitle: "A smoother finish for the back.",
        about: [
          "Back Waxing is a body-grooming service designed to remove unwanted hair from the back using suitable waxing products. It is useful for guests who prefer a smoother appearance without having to manage hard-to-reach areas themselves.",
          "The therapist prepares the skin, applies wax to the selected areas and removes it using an appropriate technique. The coverage can be discussed before the service begins."
        ],
        techniques: [
          ["Area preparation:", "The back is checked and prepared for the treatment."],
          ["Wax application:", "Wax is applied to the selected areas."],
          ["Hair removal:", "The wax is removed using a suitable technique."],
          ["Skin care:", "The area is gently cared for after waxing."]
        ],
        benefits: [
          "Removes unwanted hair from the back.",
          "Creates a smoother-looking finish.",
          "Helps with grooming in areas that are difficult to reach."
        ],
        note: "Please inform the therapist about back acne, irritation, skin conditions or sensitivities. Waxing should not be performed over broken or inflamed skin."
      },
      ar: {
        number: "الخدمة 06",
        title: "إزالة شعر الظهر بالشمع",
        subtitle: "ملمس أكثر نعومة لمنطقة الظهر.",
        about: [
          "إزالة شعر الظهر بالشمع هي خدمة للعناية بالجسم تهدف إلى إزالة الشعر غير المرغوب فيه من منطقة الظهر باستخدام منتجات شمع مناسبة. وهي خيار لمن يفضلون مظهراً أكثر نعومة دون الحاجة إلى التعامل مع المناطق التي يصعب الوصول إليها بأنفسهم.",
          "يقوم المختص بتحضير البشرة ووضع الشمع على المناطق المحددة ثم إزالته باستخدام التقنية المناسبة. ويمكن مناقشة المنطقة التي تشملها الخدمة قبل البدء."
        ],
        techniques: [
          ["تحضير المنطقة:", "يتم فحص الظهر وتحضيره للعلاج."],
          ["وضع الشمع:", "يتم وضع الشمع على المناطق المحددة."],
          ["إزالة الشعر:", "تتم إزالة الشمع باستخدام التقنية المناسبة."],
          ["العناية بالبشرة:", "تتم العناية بالمنطقة بلطف بعد إزالة الشعر."]
        ],
        benefits: [
          "يزيل الشعر غير المرغوب فيه من الظهر.",
          "يمنح البشرة مظهراً أكثر نعومة.",
          "يساعد في العناية بالمناطق التي يصعب الوصول إليها."
        ],
        note: "يرجى إبلاغ المختص عن حب الشباب في الظهر أو التهيج أو المشكلات الجلدية أو الحساسية. لا ينبغي استخدام الشمع على البشرة المجروحة أو الملتهبة."
      }
    },


    chest: {
      image: "images/hero-1.jpg",
      label: {
        en: "BODY GROOMING",
        ar: "العناية بالجسم"
      },
      description: {
        en: "A waxing service for unwanted hair across the chest and stomach area.",
        ar: "خدمة لإزالة الشعر غير المرغوب فيه من منطقة الصدر والبطن بالشمع."
      },
      en: {
        number: "SERVICE 07",
        title: "Chest & Stomach Waxing",
        subtitle: "A neat, groomed finish for the front of the body.",
        about: [
          "Chest and Stomach Waxing is a body-grooming treatment that removes unwanted hair from the chest and abdominal areas using suitable wax.",
          "The treatment area and coverage are agreed with the therapist before starting. The wax is applied and removed using an appropriate method, followed by gentle care for the treated skin."
        ],
        techniques: [
          ["Area consultation:", "The coverage of the chest and stomach is confirmed before treatment."],
          ["Skin preparation:", "The selected areas are checked and prepared."],
          ["Waxing:", "Suitable wax is applied and removed using the appropriate technique."],
          ["Aftercare:", "The treated skin is gently cared for."]
        ],
        benefits: [
          "Removes unwanted hair from the selected areas.",
          "Creates a neat, smooth-looking finish.",
          "Offers a convenient body-grooming option."
        ],
        note: "The chest and stomach can be sensitive areas. Please mention any skin conditions, allergies or recent skin treatments before waxing."
      },
      ar: {
        number: "الخدمة 07",
        title: "إزالة شعر الصدر والبطن بالشمع",
        subtitle: "مظهر مرتب ومهندم للجزء الأمامي من الجسم.",
        about: [
          "إزالة شعر الصدر والبطن بالشمع هي جلسة للعناية بالجسم تهدف إلى إزالة الشعر غير المرغوب فيه من منطقتي الصدر والبطن باستخدام شمع مناسب.",
          "يتم الاتفاق مع المختص على المنطقة التي ستشملها الخدمة قبل البدء. ثم يتم وضع الشمع وإزالته بالطريقة المناسبة، مع تقديم عناية لطيفة للبشرة بعد العلاج."
        ],
        techniques: [
          ["تحديد المنطقة:", "يتم تأكيد المنطقة التي تشمل الصدر والبطن قبل العلاج."],
          ["تحضير البشرة:", "يتم فحص المناطق المختارة وتحضيرها."],
          ["إزالة الشعر بالشمع:", "يتم وضع الشمع المناسب وإزالته بالتقنية الصحيحة."],
          ["العناية بعد العلاج:", "تتم العناية بلطف بالبشرة المعالجة."]
        ],
        benefits: [
          "يزيل الشعر غير المرغوب فيه من المناطق المحددة.",
          "يمنح البشرة مظهراً مرتباً وناعماً.",
          "يوفر خياراً عملياً للعناية بالجسم."
        ],
        note: "قد تكون منطقتا الصدر والبطن حسّاستين. يرجى إبلاغ المختص عن أي مشكلات جلدية أو حساسية أو علاجات جلدية حديثة قبل إزالة الشعر بالشمع."
      }
    },


    legs: {
      image: "images/bath.jpg",
      label: {
        en: "GROOMING & HAIR REMOVAL",
        ar: "العناية وإزالة الشعر"
      },
      description: {
        en: "A full-leg waxing service for a smooth and well-groomed finish.",
        ar: "خدمة لإزالة شعر الساقين بالكامل بالشمع للحصول على مظهر ناعم ومرتب."
      },
      en: {
        number: "SERVICE 08",
        title: "Legs Waxing",
        subtitle: "Complete waxing care for both legs.",
        about: [
          "Legs Waxing is a hair-removal service covering the selected full-leg area. It uses suitable wax to remove unwanted hair and create a smooth-looking finish.",
          "The therapist prepares the skin and works through the agreed areas using the appropriate waxing method. The service is suitable for guests who prefer a longer-lasting hair-removal option than regular shaving."
        ],
        techniques: [
          ["Skin preparation:", "The legs are checked and prepared before the treatment."],
          ["Wax application:", "Suitable wax is applied to the selected areas."],
          ["Hair removal:", "The wax is removed using the appropriate technique."],
          ["Post-wax care:", "The skin is gently cared for after the session."]
        ],
        benefits: [
          "Removes unwanted hair from the legs.",
          "Creates a smooth-looking finish.",
          "Offers an alternative to frequent shaving."
        ],
        note: "Please mention skin sensitivity, varicose veins, irritation, allergies or any recent skin treatment before waxing. The service should be avoided on broken or inflamed skin."
      },
      ar: {
        number: "الخدمة 08",
        title: "إزالة شعر الساقين",
        subtitle: "عناية كاملة لإزالة الشعر من الساقين.",
        about: [
          "إزالة شعر الساقين بالشمع هي خدمة لإزالة الشعر من منطقة الساقين بالكامل أو حسب التغطية المتفق عليها. وتستخدم شمعاً مناسباً لإزالة الشعر غير المرغوب فيه ومنح البشرة مظهراً ناعماً.",
          "يقوم المختص بتحضير البشرة والعمل على المناطق المتفق عليها باستخدام طريقة إزالة الشعر المناسبة. وتناسب هذه الخدمة من يفضلون خياراً لإزالة الشعر يدوم لفترة أطول مقارنة بالحلاقة المتكررة."
        ],
        techniques: [
          ["تحضير البشرة:", "يتم فحص الساقين وتحضيرهما قبل العلاج."],
          ["وضع الشمع:", "يتم وضع الشمع المناسب على المناطق المحددة."],
          ["إزالة الشعر:", "تتم إزالة الشمع باستخدام التقنية المناسبة."],
          ["العناية بعد الشمع:", "تتم العناية بالبشرة بلطف بعد الجلسة."]
        ],
        benefits: [
          "يزيل الشعر غير المرغوب فيه من الساقين.",
          "يمنح البشرة مظهراً ناعماً.",
          "يوفر بديلاً عن الحلاقة المتكررة."
        ],
        note: "يرجى إبلاغ المختص عن حساسية البشرة أو الدوالي أو التهيج أو الحساسية من المنتجات أو أي علاج جلدي حديث قبل إزالة الشعر بالشمع. يجب تجنب العلاج على البشرة المجروحة أو الملتهبة."
      }
    },


    fullbody: {
      image: "images/hero-1.jpg",
      label: {
        en: "COMPLETE BODY GROOMING",
        ar: "العناية الكاملة بالجسم"
      },
      description: {
        en: "A full-body waxing service with coverage discussed and agreed before the treatment.",
        ar: "خدمة لإزالة شعر الجسم بالكامل بالشمع، مع تحديد المناطق المشمولة قبل بدء العلاج."
      },
      en: {
        number: "SERVICE 09",
        title: "Full Body Waxing",
        subtitle: "A complete body-grooming experience.",
        about: [
          "Full Body Waxing is a grooming service designed to remove unwanted hair from multiple areas of the body using suitable waxing products.",
          "As coverage can vary between spas, the areas included should be confirmed before the session. The therapist works through the agreed areas and provides appropriate care after waxing."
        ],
        techniques: [
          ["Personal consultation:", "The areas included in the service are discussed before starting."],
          ["Skin preparation:", "Each selected area is checked and prepared."],
          ["Waxing process:", "Suitable wax is applied and removed using the appropriate method."],
          ["Aftercare:", "The skin is gently cared for after the treatment."]
        ],
        benefits: [
          "Provides hair removal across multiple body areas.",
          "Creates a smooth-looking finish.",
          "Offers a convenient, coordinated grooming session."
        ],
        note: "Full-body coverage must be confirmed with the spa before booking. Some areas may be excluded. Please disclose skin sensitivities, allergies and relevant skin conditions. Waxing is not suitable over broken or irritated skin."
      },
      ar: {
        number: "الخدمة 09",
        title: "إزالة شعر الجسم بالكامل",
        subtitle: "تجربة متكاملة للعناية بالجسم.",
        about: [
          "إزالة شعر الجسم بالكامل بالشمع هي خدمة للعناية الشخصية تهدف إلى إزالة الشعر غير المرغوب فيه من عدة مناطق من الجسم باستخدام منتجات شمع مناسبة.",
          "نظراً لاختلاف المناطق المشمولة من سبا إلى آخر، يجب تأكيد التغطية قبل الجلسة. ويعمل المختص على المناطق المتفق عليها مع تقديم العناية المناسبة للبشرة بعد إزالة الشعر."
        ],
        techniques: [
          ["استشارة شخصية:", "تتم مناقشة المناطق المشمولة بالخدمة قبل البدء."],
          ["تحضير البشرة:", "يتم فحص كل منطقة مختارة وتحضيرها."],
          ["عملية إزالة الشعر:", "يتم وضع الشمع المناسب وإزالته بالطريقة الصحيحة."],
          ["العناية بعد العلاج:", "تتم العناية بالبشرة بلطف بعد انتهاء الجلسة."]
        ],
        benefits: [
          "يوفر إزالة الشعر من عدة مناطق من الجسم.",
          "يمنح البشرة مظهراً ناعماً.",
          "يوفر جلسة عناية متكاملة ومريحة."
        ],
        note: "يجب تأكيد المناطق المشمولة بإزالة شعر الجسم بالكامل مع السبا قبل الحجز، فقد تُستثنى بعض المناطق. يرجى الإفصاح عن أي حساسية أو مشكلات جلدية. لا يناسب الشمع البشرة المجروحة أو المتهيجة."
      }
    },


    shaving: {
      image: "images/room.jpg",
      label: {
        en: "BODY GROOMING",
        ar: "العناية بالجسم"
      },
      description: {
        en: "A grooming service using shaving techniques to remove unwanted body hair.",
        ar: "خدمة للعناية بالجسم تستخدم تقنيات الحلاقة لإزالة الشعر غير المرغوب فيه."
      },
      en: {
        number: "SERVICE 10",
        title: "Full Body Shaving",
        subtitle: "A neat grooming service tailored to your preference.",
        about: [
          "Full Body Shaving is a body-grooming service that uses shaving tools to remove unwanted hair from the agreed areas of the body.",
          "The treatment begins by confirming the areas to be covered and preparing the skin. The therapist then uses suitable shaving techniques, followed by gentle skin care. Coverage and any excluded areas should be discussed before the session."
        ],
        techniques: [
          ["Area consultation:", "The areas included in the shaving service are agreed beforehand."],
          ["Skin preparation:", "The skin is prepared for a comfortable shaving process."],
          ["Shaving:", "Suitable shaving tools and techniques are used on the agreed areas."],
          ["Finishing care:", "The skin is gently cleaned and cared for after shaving."]
        ],
        benefits: [
          "Removes unwanted hair from the agreed areas.",
          "Creates a neat, groomed appearance.",
          "Offers an alternative to waxing for hair removal."
        ],
        note: "Please inform the therapist about cuts, irritation, skin sensitivity or allergies. The exact coverage and tools used should be confirmed with the spa before the service."
      },
      ar: {
        number: "الخدمة 10",
        title: "حلاقة الجسم بالكامل",
        subtitle: "خدمة عناية تناسب تفضيلاتك الشخصية.",
        about: [
          "حلاقة الجسم بالكامل هي خدمة للعناية بالجسم تستخدم أدوات الحلاقة لإزالة الشعر غير المرغوب فيه من المناطق المتفق عليها.",
          "تبدأ الجلسة بتحديد المناطق المشمولة وتحضير البشرة. ثم يستخدم المختص تقنيات الحلاقة المناسبة، تليها عناية لطيفة بالبشرة. وينبغي مناقشة التغطية وأي مناطق مستثناة قبل بدء الجلسة."
        ],
        techniques: [
          ["تحديد المناطق:", "يتم الاتفاق مسبقاً على المناطق المشمولة بخدمة الحلاقة."],
          ["تحضير البشرة:", "يتم تحضير البشرة لتوفير تجربة حلاقة مريحة."],
          ["الحلاقة:", "تُستخدم أدوات وتقنيات حلاقة مناسبة للمناطق المتفق عليها."],
          ["العناية الختامية:", "يتم تنظيف البشرة والعناية بها بلطف بعد الحلاقة."]
        ],
        benefits: [
          "يزيل الشعر غير المرغوب فيه من المناطق المتفق عليها.",
          "يمنح الجسم مظهراً مرتباً ومهندماً.",
          "يوفر بديلاً عن إزالة الشعر بالشمع."
        ],
        note: "يرجى إبلاغ المختص عن أي جروح أو تهيج أو حساسية جلدية أو تحسس من المنتجات. يجب تأكيد المناطق المشمولة والأدوات المستخدمة مع السبا قبل الخدمة."
      }
    },


    goldfacial: {
      image: "images/entrance.jpg",
      label: {
        en: "FACIAL & SKIN CARE",
        ar: "العناية بالوجه والبشرة"
      },
      description: {
        en: "A facial care experience using gold-themed products as part of a cleansing and skin-care routine.",
        ar: "تجربة للعناية بالوجه تستخدم منتجات بطابع ذهبي ضمن روتين تنظيف وعناية بالبشرة."
      },
      en: {
        number: "SERVICE 11",
        title: "Gold Facial",
        subtitle: "A refined facial-care experience.",
        about: [
          "A Gold Facial is a beauty treatment that uses facial products marketed as gold-based or gold-infused as part of a skincare routine. The exact products and steps can vary depending on the spa's selected facial range.",
          "A facial commonly includes cleansing, exfoliation, a mask and moisturising. Depending on the treatment, it may also include gentle facial massage or other suitable steps chosen for the guest's skin type."
        ],
        techniques: [
          ["Cleansing:", "The face is cleansed to remove surface impurities."],
          ["Exfoliation:", "A suitable exfoliating step may be used to refresh the skin's surface."],
          ["Facial mask:", "A selected facial mask is applied as part of the treatment."],
          ["Moisturising:", "A suitable moisturiser is applied to finish the facial."]
        ],
        benefits: [
          "Provides a complete facial-care experience.",
          "Leaves the skin feeling cleansed and moisturised.",
          "Offers a relaxing moment of personal care."
        ],
        note: "The products used in the Gold Facial should be confirmed with the spa. Please mention allergies, sensitive skin, active irritation or recent facial treatments before the session. Gold-themed products do not guarantee a particular skincare result."
      },
      ar: {
        number: "الخدمة 11",
        title: "الوجه الذهبي",
        subtitle: "تجربة مميزة للعناية بالوجه والبشرة.",
        about: [
          "الوجه الذهبي هو علاج تجميلي يستخدم منتجات للعناية بالوجه يتم تسويقها على أنها تحتوي على الذهب أو مستوحاة منه، وذلك ضمن روتين للعناية بالبشرة. وقد تختلف المنتجات والخطوات حسب مجموعة العناية التي يعتمدها السبا.",
          "تشمل جلسات العناية بالوجه عادةً التنظيف والتقشير والقناع والترطيب. وقد تتضمن أيضاً تدليكاً لطيفاً للوجه أو خطوات أخرى مناسبة يتم اختيارها وفقاً لنوع بشرة الشخص."
        ],
        techniques: [
          ["التنظيف:", "يتم تنظيف الوجه لإزالة الشوائب السطحية."],
          ["التقشير:", "قد تُستخدم خطوة تقشير مناسبة لإنعاش سطح البشرة."],
          ["قناع الوجه:", "يتم وضع قناع مختار كجزء من العلاج."],
          ["الترطيب:", "يتم وضع مرطب مناسب لإكمال جلسة العناية."]
        ],
        benefits: [
          "يوفر تجربة متكاملة للعناية بالوجه.",
          "يترك البشرة بإحساس من النظافة والترطيب.",
          "يمنحك لحظة مريحة من العناية الشخصية."
        ],
        note: "يرجى التأكد من المنتجات المستخدمة في علاج الوجه الذهبي لدى السبا. أبلغ المختص عن أي حساسية أو بشرة حساسة أو تهيج نشط أو علاجات حديثة للوجه قبل الجلسة. لا تضمن المنتجات ذات الطابع الذهبي نتيجة معينة للعناية بالبشرة."
      }
    }

  };


  /* ==========================================
     LANGUAGE
  ========================================== */

  function getLanguage() {
    return document.documentElement.lang.toLowerCase().startsWith("ar")
      ? "ar"
      : "en";
  }


  /* ==========================================
     CARD RENDERING
  ========================================== */

  function renderCards() {
    const lang = getLanguage();
    const rtl = lang === "ar";

    const keys = Object.keys(careServices);

    grid.innerHTML = keys.map(key => {
      const item = careServices[key];

      return `
        <article
          class="therapy-card"
          data-treatment="${key}"
          tabindex="0"
          role="button"
          aria-haspopup="dialog"
          aria-label="${item[lang].title}"
        >
          <div class="therapy-image">
            <img
              src="${item.image}"
              alt="${item[lang].title}"
              loading="lazy"
            >
            <span class="therapy-number">${item[lang].number.replace("SERVICE ", "").replace("الخدمة ", "")}</span>
          </div>

          <div class="therapy-info">
            <span class="therapy-label">${item.label[lang]}</span>
            <h3>${item[lang].title}</h3>
            <p>${item.description[lang]}</p>
            <span class="treatment-card-link">
              ${rtl ? "اقرأ المزيد" : "READ MORE"}
              <span>↗</span>
            </span>
          </div>
        </article>
      `;
    }).join("");

    grid.querySelectorAll(".therapy-card").forEach(card => {

      card.addEventListener("click", function () {
        openModal(this.dataset.treatment);
      });

      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal(this.dataset.treatment);
        }
      });

    });
  }


  /* ==========================================
     POPUP CONTENT
  ========================================== */

  function renderTreatment(key) {
    const lang = getLanguage();
    const rtl = lang === "ar";
    const data = careServices[key][lang];

    content.dir = rtl ? "rtl" : "ltr";
    content.lang = lang;

    content.innerHTML = `
      <span class="treatment-modal-label">
        ${rtl ? "برايم ريلاكس سبا للرجال" : "PRIME RELAX SPA FOR MEN"}
      </span>

      <span class="treatment-modal-number">
        ${data.number}
      </span>

      <h2 id="treatmentModalTitle">${data.title}</h2>

      <p class="treatment-modal-subtitle">
        ${data.subtitle}
      </p>

      <div class="treatment-modal-divider"></div>

      <div class="treatment-modal-section">
        <h3>${rtl ? "عن الخدمة" : "ABOUT THE SERVICE"}</h3>
        ${data.about.map(p => `<p>${p}</p>`).join("")}
      </div>

      <div class="treatment-modal-section">
        <h3>${rtl ? "ماذا تتضمن الخدمة؟" : "WHAT THE SERVICE MAY INCLUDE"}</h3>
        <ul>
          ${data.techniques.map(t => `
            <li><strong>${t[0]}</strong> ${t[1]}</li>
          `).join("")}
        </ul>
      </div>

      <div class="treatment-modal-section">
        <h3>${rtl ? "مميزات الخدمة" : "SERVICE HIGHLIGHTS"}</h3>
        <ul>
          ${data.benefits.map(b => `<li>${b}</li>`).join("")}
        </ul>
      </div>

      <div class="treatment-modal-section">
        <h3>${rtl ? "ملاحظات مهمة" : "PLEASE NOTE"}</h3>
        <p>${data.note}</p>
      </div>
    `;
  }


  /* ==========================================
     OPEN / CLOSE
  ========================================== */

  let previousFocus = null;

  function openModal(key) {
    previousFocus = document.activeElement;

    renderTreatment(key);

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (previousFocus) previousFocus.focus();
  }

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      modal.classList.contains("active")
    ) {
      closeModal();
    }
  });


  /* ==========================================
     LANGUAGE SWITCH
  ========================================== */

  const languageButton = document.getElementById("langBtn");

  if (languageButton) {
    languageButton.addEventListener("click", function () {

      renderCards();

      if (modal.classList.contains("active")) {
        const currentTitle = content.querySelector("#treatmentModalTitle")?.textContent;

        const currentKey = Object.keys(careServices).find(key =>
          careServices[key].en.title === currentTitle ||
          careServices[key].ar.title === currentTitle
        );

        if (currentKey) renderTreatment(currentKey);
      }

    });
  }


  /* INITIAL LOAD */

  renderCards();

});

