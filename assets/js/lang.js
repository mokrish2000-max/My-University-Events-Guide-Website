// Language toggle and translations.
(() => {
  const translations = {
    "الرئيسية": "Home",
    "كل الفعاليات": "All events",
    "عن الدليل": "About",
    "اتصل بنا": "Contact",
    "فتح القائمة": "Open menu",
    "✦ نبض الحياة الجامعية": "✦ The pulse of campus life",
    "خطّط لأسبوع مليء": "Plan a week full of",
    "بالحكايات.": "stories.",
    "من ورش العمل إلى الموسيقى والرياضة — اكتشف فعاليات الجامعة التي تستحق أن تكون جزءاً من يومك.": "From workshops to music and sports, discover university events worth making part of your day.",
    "اكتشف الفعاليات ←": "Explore events ←",
    "أقرب الفعاليات": "Upcoming events",
    "الفعاليات القادمة مرتبة حسب موعدها.": "Upcoming events, sorted by date.",
    "عرض كل الفعاليات ←": "View all events ←",
    "تصفّح حسب التصنيف": "Browse by category",
    "اختر ما يناسب اهتماماتك.": "Choose what matches your interests.",
    "ثقافة": "Culture",
    "رياضة": "Sports",
    "موسيقى": "Music",
    "تقنية": "Technology",
    "عائلي": "Family",
    "تعليم": "Education",
    "فعاليات قادمة لاحقاً": "Coming up later",
    "خطّط مسبقاً لما يناسب اهتماماتك.": "Plan ahead for events that match your interests.",
    "عرض الكل ←": "View all ←",
    "فريق المشروع": "Project team",
    "أضف أسماء أعضاء الفريق ومعرّفاتهم الجامعية قبل التسليم.": "Add the team members' names and university IDs before submission.",
    "عن الفريق ←": "About the team ←",
    "اسم عضو الفريق 1": "Team member 1",
    "علي الحاج حسين": "Ali Al-Haj Hussein",
    "اسم عضو الفريق 2": "Team member 2",
    "اسم عضو الفريق 3": "Team member 3",
    "المعرّف الجامعي: يُضاف لاحقاً": "University ID: to be added",
    "المعرّف الجامعي: Ali_446068": "University ID: Ali_446068",
    "لديك فعالية تستحق أن تُكتشف؟": "Have an event worth discovering?",
    "ساعدنا في جعل الحرم الجامعي أكثر حيوية بمشاركة نشاطك القادم.": "Help make campus more vibrant by sharing your upcoming event.",
    "اقترح فعالية ←": "Suggest an event ←",
    "رواق — دليل فعاليات الجامعة": "Riwaq — University Events Guide",
    "اكتشف الأنشطة، جرّب اهتمامات جديدة، وكن جزءاً من مجتمعك الجامعي.": "Discover activities, try new interests, and be part of your university community.",
    "روابط سريعة": "Quick links",
    "الفعاليات": "Events",
    "التفاصيل ←": "Details ←",
    "تواصل معنا": "Contact us",
    "تصفّح الفعاليات": "Browse events",
    "© 2026 رواق — مشروع جامعي تجريبي. الفعاليات أمثلة افتراضية، وبيانات التواصل غير المكتملة قيد الاستكمال.": "© 2026 Riwaq — A university project prototype. Events are fictional examples; incomplete contact details are being finalized.",
    "مساحة واحدة لكل ما يحدث في مجتمع الجامعة.": "One place for everything happening in the university community.",
    "بحث": "Search",
    "ابحث عن فعالية أو مكان...": "Search events or venues...",
    "التصنيف": "Category",
    "طريقة المشاركة": "Participation mode",
    "كل الطرق": "All modes",
    "أونلاين": "Online",
    "هجين": "Hybrid",
    "حضوري": "In person",
    "كل التصنيفات": "All categories",
    "التاريخ": "Date",
    "كل التواريخ": "Any date",
    "خلال 7 أيام": "Within 7 days",
    "خلال 30 يوماً": "Within 30 days",
    "الترتيب": "Sort",
    "الأقرب موعداً": "Soonest",
    "الأبعد موعداً": "Latest",
    "الاسم: أ–ي": "Name: A–Z",
    "التفاصيل ←": "Details ←",
    "تفاصيل الفعالية": "Event details",
    "فعالية": "Event",
    "بيانات الفعالية توضيحية ضمن المشروع التجريبي.": "Event information is illustrative and part of this project prototype.",
    "لم نعثر على هذه الفعالية": "Event not found",
    "قد يكون الرابط غير صحيح أو أن الفعالية لم تعد متاحة.": "The link may be incorrect, or the event may no longer be available.",
    "عن الفعالية": "About this event",
    "＋ أضف إلى التقويم": "＋ Add to calendar",
    "↗ شارك الفعالية": "↗ Share event",
    "احجز مكاناً تجريبياً": "Try the demo booking",
    "صور توضيحية": "Illustrative photos",
    "صور من تصنيفات الدليل، وليست صوراً موثقة لهذه الفعالية.": "Category images from the guide; they are not verified photos of this event.",
    "معلومات الفعالية": "Event information",
    "التاريخ:": "Date:",
    "الوقت:": "Time:",
    "المدة:": "Duration:",
    "المكان:": "Venue:",
    "المكان أو المنصة:": "Venue or platform:",
    "طريقة المشاركة:": "Participation mode:",
    "الجهة المنظمة:": "Organizer:",
    "التسجيل:": "Registration:",
    "مخطط توضيحي للمكان": "Illustrative location diagram",
    "رسم تخطيطي زخرفي للحرم الجامعي، لا يمثل مواقع أو مسارات حقيقية": "Decorative campus illustration; it does not show real locations or routes",
    "مخطط بصري فقط، وليس خريطة جغرافية أو دليلاً للملاحة.": "Illustrative only; not a geographic map or navigation guide.",
    "المكان المذكور:": "Venue:",
    "موقع الفعالية": "Event location",
    "ابحث عن المكان على خرائط Google": "Search for this venue on Google Maps",
    "يفتح بحثاً نصياً عن اسم المكان، وقد لا يحدد موقع الفعالية بدقة.": "Opens a text search for the venue name and may not identify the exact event location.",
    "فعاليات ذات صلة": "Related events",
    "قد تجد شيئاً آخر يناسبك.": "You may find something else you like.",
    "تحقق تجريبي من الاسم": "Demo name check",
    "إغلاق": "Close",
    "الاسم الكامل": "Full name",
    "اكتب اسمك": "Enter your name",
    "هذا نموذج للواجهة فقط: لا ينشئ حجزاً فعلياً ولا يحفظ البيانات.": "This is a demo only: it does not create a real booking or save data.",
    "التحقق من الاسم": "Validate name",
    "عن رواق": "About Riwaq",
    "لأن أجمل ما في الجامعة يحدث خارج المحاضرة أيضاً.": "Because some of the best university moments happen outside the classroom.",
    "قصتنا": "Our story",
    "نجعل اكتشاف الفعاليات أسهل، والمشاركة أقرب.": "Making events easier to discover and participation more accessible.",
    "رواق نموذج دليل جامعي يجمع الأنشطة الثقافية والرياضية والفنية والتقنية في مكان واحد. هدفنا اختصار رحلة البحث عن الفعاليات ومساعدة الطلاب على اكتشاف اهتمامات جديدة والتواصل مع مجتمعهم.": "Riwaq is a university events guide that brings cultural, sports, arts, and technology activities together in one place. Our goal is to make events easier to find and help students discover new interests and connect with their community.",
    "نؤمن بأن تجربة الجامعة لا تُقاس بالمحاضرات وحدها؛ بل بالأفكار التي نتشاركها، والمهارات التي نطوّرها، والذكريات التي نصنعها معاً.": "We believe the university experience is about more than lectures: it is also the ideas we share, the skills we develop, and the memories we make together.",
    "رؤيتنا": "Our vision",
    "مجتمع جامعي متصل ونشط.": "A connected, active university community.",
    "رسالتنا": "Our mission",
    "إتاحة الفرص وتشجيع المشاركة.": "Create opportunities and encourage participation.",
    "قيمنا": "Our values",
    "التنوع والمبادرة والتعاون.": "Diversity, initiative, and collaboration.",
    "فريق العمل": "Our team",
    "صورة مؤقتة؛ تستبدل بصورة عضو الفريق": "Placeholder image; replace with a team member photo",
    "الدور في المشروع": "Project role",
    "مؤسس ومصمم واجهة الموقع": "Founder and website interface designer",
    "معايير نشر الفعاليات": "Event publishing guidelines",
    "نفضّل الفعاليات ذات التفاصيل الواضحة والموعد والمكان المحددين والجهة المنظمة المعروفة. يجب أن يكون المحتوى مناسباً للمجتمع الجامعي وألا يتضمن معلومات مضللة. يمكن إرسال الاقتراحات من صفحة التواصل لمراجعتها.": "We prefer events with clear details, a set date and venue, and a known organizer. Content should suit the university community and must not be misleading. Submit suggestions through the contact page for review.",
    "سؤال، اقتراح، أو فعالية جديدة؟ يسعدنا أن نسمع منك.": "A question, suggestion, or new event? We would love to hear from you.",
    "أرسل رسالة": "Send a message",
    "جميع الحقول مطلوبة.": "All fields are required.",
    "كيف نناديك؟": "What should we call you?",
    "يرجى إدخال اسم من حرفين على الأقل.": "Please enter a name of at least two characters.",
    "البريد الإلكتروني": "Email address",
    "يرجى إدخال بريد إلكتروني صحيح.": "Please enter a valid email address.",
    "موضوع الرسالة": "Message subject",
    "اختر الموضوع": "Choose a subject",
    "استفسار عام": "General inquiry",
    "اقتراح فعالية": "Event suggestion",
    "تصحيح معلومات": "Information correction",
    "شراكة جامعية": "University partnership",
    "رسالتك": "Your message",
    "اكتب رسالتك هنا...": "Write your message here...",
    "اكتب رسالة لا تقل عن 10 أحرف.": "Please enter a message of at least 10 characters.",
    "رسالة من موقع رواق": "Message from the Riwaq website",
    "إرسال الرسالة": "Send message",
    "معلومات التواصل": "Contact information",
    "البريد العام": "Contact email",
    "الجامعة": "University",
    "الجامعة السورية الافتراضية": "Syrian Virtual University",
    "ساعات الرد": "Response hours",
    "على مدار الساعة (24/7)": "Around the clock (24/7)",
    "التسجيل مطلوب": "Registration required",
    "الدخول مفتوح": "Open entry",
    "يتطلب التسجيل": "Registration required",
    "لا توجد فعاليات قادمة حالياً.": "There are no upcoming events right now.",
    "تابعنا، ستُضاف فعاليات قادمة قريباً.": "Stay tuned—more events will be added soon.",
    "لم نعثر على فعاليات مطابقة. جرّب تغيير البحث أو الفلاتر.": "No matching events found. Try changing your search or filters.",
    "تم تجهيز ملف التقويم.": "Calendar file is ready.",
    "تم نسخ رابط الفعالية.": "Event link copied.",
    "انسخ رابط الفعالية:": "Copy the event link:",
    "تعذرت مشاركة الرابط. يمكنك نسخه من شريط العنوان.": "Could not share the link. You can copy it from the address bar.",
    "يرجى إدخال اسم صحيح من حرفين على الأقل.": "Please enter a valid name of at least two characters.",
    "تم التحقق من الاسم": "Name validated",
    "فقط؛ هذا النموذج لا ينشئ حجزاً فعلياً ولا يحفظ البيانات.": "only; this demo does not create a real booking or save data.",
    "تحقق من الحقول المطلوبة وصيغة البريد الإلكتروني؛ لم تُرسل الرسالة.": "Check the required fields and email format. The message was not sent.",
    "جارٍ إرسال الرسالة...": "Sending message...",
    "جارٍ إرسال رسالتك...": "Sending your message...",
    "تم إرسال رسالتك بنجاح. شكراً لتواصلك معنا.": "Your message was sent successfully. Thank you for contacting us.",
    "تعذر إرسال الرسالة الآن. تحقق من اتصال الإنترنت وتأكيد البريد لدى FormSubmit، ثم حاول مجدداً.": "The message could not be sent. Check your internet connection and FormSubmit email confirmation, then try again.",
    "Switch language to English": "Switch language to English",
    "التبديل إلى العربية": "Switch language to Arabic",
    "يرجى اختيار موضوع الرسالة.": "Please choose a message subject.",
    "صورة مرتبطة بفعالية موسيقية": "Image related to a music event",
    "صورة مرتبطة بورشة تقنية": "Image related to a technology workshop",
    "صورة مرتبطة بفعالية رياضية": "Image related to a sports event",
    "صورة مرتبطة بفعالية ثقافية": "Image related to a cultural event",
    "صورة مرتبطة بفعالية عائلية": "Image related to a family event",
    "صورة مرتبطة بجلسة تعليمية": "Image related to an educational session",
    "صورة مرتبطة بتحدي التصوير": "Image related to a photography challenge",
    "صورة توضيحية لتصنيف الموسيقى": "Illustrative image for the music category",
    "صورة توضيحية لتصنيف الثقافة": "Illustrative image for the culture category",
    "صورة توضيحية للحياة الجامعية": "Illustrative image of campus life",
    "صورة توضيحية لتصنيف التقنية": "Illustrative image for the technology category",
    "صورة توضيحية لتصنيف التعليم": "Illustrative image for the education category",
    "صورة توضيحية لتصنيف الرياضة": "Illustrative image for the sports category",
    "صورة توضيحية للفعاليات العائلية": "Illustrative image for family events"
  };

  const pageTitles = {
    "index.html": "Home | Riwaq",
    "events.html": "All events | Riwaq",
    "event.html": "Event details | Riwaq",
    "about.html": "About | Riwaq",
    "contact.html": "Contact | Riwaq"
  };
  const language = localStorage.getItem("riwaq-language") === "en" ? "en" : "ar";

  function translateStaticContent() {
    if (language !== "en") return;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const trimmed = node.nodeValue.trim();
      if (translations[trimmed]) {
        node.nodeValue = node.nodeValue.replace(trimmed, translations[trimmed]);
      }
    }

    document.querySelectorAll("[placeholder], [aria-label], [alt]").forEach(element => {
      ["placeholder", "aria-label", "alt"].forEach(attribute => {
        const value = element.getAttribute(attribute);
        if (value && translations[value]) element.setAttribute(attribute, translations[value]);
      });
      document.querySelectorAll('input[type="hidden"][value]').forEach(element => {
        const value = element.getAttribute("value");
        if (value && translations[value]) element.value = translations[value];
      });
    });

    const page = location.pathname.split("/").pop() || "index.html";
    if (page === "event.html") {
      document.title = document.getElementById("eventContent")?.classList.contains("d-none")
        ? "Event not found | Riwaq"
        : `${document.getElementById("detailTitle").textContent} | Riwaq`;
    } else {
      document.title = pageTitles[page] || pageTitles["index.html"];
    }
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    const bootstrapStyles = document.getElementById("bootstrapStyles");
    if (bootstrapStyles) {
      bootstrapStyles.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    translateStaticContent();
    const toggle = document.getElementById("languageToggle");
    if (!toggle) return;

    toggle.textContent = language === "ar" ? "🌐 EN" : "🌐 عربي";
    toggle.setAttribute("aria-label", language === "ar" ? "Switch language to English" : "التبديل إلى العربية");
    toggle.title = toggle.getAttribute("aria-label");
    toggle.addEventListener("click", () => {
      localStorage.setItem("riwaq-language", language === "ar" ? "en" : "ar");
      location.reload();
    });
  });

  window.riwaqLanguage = language;
  window.riwaqTranslate = text => language === "en" ? (translations[text] || text) : text;
})();
