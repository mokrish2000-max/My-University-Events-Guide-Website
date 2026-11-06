// بيانات فعاليات تجريبية. يمكن إضافة فعاليات جديدة إلى هذه المصفوفة.
const eventsData = [
  {id:1,title:"ليلة موسيقية تحت النجوم",category:"موسيقى",mode:"in-person",date:"2026-10-29",time:"18:30",place:"الساحة المركزية",organizer:"النادي الموسيقي الطلابي",durationMinutes:120,registrationRequired:false,image:"assets/img/optimized/music.jpg",imageAlt:"صورة مرتبطة بفعالية موسيقية",desc:"أمسية موسيقية تجمع المواهب الطلابية في أجواء مفتوحة مليئة بالطاقة والإبداع."},
  {id:2,title:"مختبر الابتكار: من الفكرة إلى النموذج",category:"تقنية",mode:"hybrid",date:"2026-10-30",time:"11:00",place:"مركز الابتكار — قاعة 2 ورابط بث مباشر",organizer:"مركز الابتكار الجامعي",durationMinutes:180,registrationRequired:true,image:"assets/img/optimized/technology.jpg",imageAlt:"صورة مرتبطة بورشة تقنية",desc:"ورشة تطبيقية لتطوير الأفكار وتحويلها إلى نماذج أولية بالتعاون مع زملائك، حضورياً أو عن بُعد."},
  {id:3,title:"بطولة الجامعة لكرة السلة",category:"رياضة",mode:"in-person",date:"2026-10-31",time:"16:00",place:"ملعب رياضي مجتمعي",organizer:"النادي الرياضي الطلابي",durationMinutes:180,registrationRequired:true,image:"assets/img/optimized/basketball.jpg",imageAlt:"صورة مرتبطة بفعالية رياضية",desc:"شجّع فريقك وشارك أجواء المنافسة الرياضية في بطولة مفتوحة للطلاب."},
  {id:4,title:"معرض الفن والتصوير الطلابي",category:"ثقافة",mode:"online",date:"2026-11-02",time:"10:00",place:"المعرض الافتراضي — رابط المشاركة يُرسل للمسجلين",organizer:"النادي الثقافي الطلابي",durationMinutes:240,registrationRequired:false,image:"assets/img/optimized/culture.jpg",imageAlt:"صورة مرتبطة بفعالية ثقافية",desc:"تصفّح أعمالاً فنية وصوراً فوتوغرافية رقمياً وتعرّف إلى قصص أصحابها."},
  {id:5,title:"يوم القراءة وتبادل الكتب",category:"ثقافة",mode:"hybrid",date:"2026-11-04",time:"12:30",place:"لقاء محلي أو غرفة نقاش افتراضية",organizer:"نادي القراءة الطلابي",durationMinutes:120,registrationRequired:false,image:"assets/img/optimized/culture.jpg",imageAlt:"صورة مرتبطة بفعالية ثقافية",desc:"شارك باقتباس من كتاب تحبه، واكتشف ترشيحات جديدة من زملائك حضورياً أو عبر الإنترنت."},
  {id:6,title:"هاكاثون حلول الاستدامة",category:"تقنية",mode:"online",date:"2026-11-06",time:"09:00",place:"منصة الهاكاثون الافتراضية",organizer:"مركز الابتكار الجامعي",durationMinutes:1440,registrationRequired:true,image:"assets/img/optimized/technology.jpg",imageAlt:"صورة مرتبطة بورشة تقنية",desc:"فريقك لديه 24 ساعة عبر الإنترنت لتصميم حل مبتكر لتحدٍّ بيئي قريب من مجتمعنا."},
  {id:7,title:"يوم العائلة والألعاب",category:"عائلي",mode:"in-person",date:"2026-11-07",time:"14:00",place:"مركز مجتمعي محلي",organizer:"مبادرة الأنشطة الطلابية",durationMinutes:180,registrationRequired:false,image:"assets/img/optimized/family.jpg",imageAlt:"صورة مرتبطة بفعالية عائلية",desc:"أنشطة خفيفة وألعاب جماعية مناسبة للطلاب وعائلاتهم في لقاء محلي."},
  {id:8,title:"جلسة مهنية: أول خطوة في سوق العمل",category:"تعليم",mode:"online",date:"2026-11-09",time:"13:00",place:"قاعة اجتماعات افتراضية",organizer:"مجموعة الإرشاد المهني الطلابية",durationMinutes:90,registrationRequired:true,image:"assets/img/optimized/education.jpg",imageAlt:"صورة مرتبطة بجلسة تعليمية",desc:"نصائح عملية عبر الإنترنت حول السيرة الذاتية والمقابلات وبناء شبكة علاقات مهنية."},
  {id:9,title:"تحدي التصوير من مدينتك",category:"ثقافة",mode:"online",date:"2026-11-11",time:"08:30",place:"منصة المشاركة الافتراضية",organizer:"النادي الثقافي الطلابي",durationMinutes:120,registrationRequired:false,image:"assets/img/optimized/culture.jpg",imageAlt:"صورة مرتبطة بتحدي التصوير",desc:"التقط صورة تعبّر عن مدينتك أو محيطك، وشاركها في معرض رقمي مفتوح لطلاب الجامعة."}
];

const eventEnglish = {
  1: {title:"Starlit Music Night",category:"Music",place:"Central Square",organizer:"Student Music Club",desc:"An evening of live music showcasing student talent in an open, energetic, and creative atmosphere.",imageAlt:"Image related to a music event"},
  2: {title:"Innovation Lab: From Idea to Prototype",category:"Technology",place:"Innovation Center — Room 2 and live stream",organizer:"University Innovation Center",desc:"A hands-on workshop to develop ideas and turn them into prototypes with your peers, in person or online.",imageAlt:"Image related to a technology workshop"},
  3: {title:"University Basketball Championship",category:"Sports",place:"Community Sports Court",organizer:"Student Sports Club",desc:"Cheer for your team and enjoy the excitement of an open student basketball championship.",imageAlt:"Image related to a sports event"},
  4: {title:"Student Art and Photography Exhibition",category:"Culture",place:"Virtual exhibition — access link sent to registrants",organizer:"Student Culture Club",desc:"Browse artworks and photographs online and discover the stories behind them.",imageAlt:"Image related to a cultural event"},
  5: {title:"Reading Day and Book Exchange",category:"Culture",place:"Local meetup or virtual discussion room",organizer:"Student Reading Club",desc:"Share a favorite book quote and discover new recommendations from fellow students in person or online.",imageAlt:"Image related to a cultural event"},
  6: {title:"Sustainability Solutions Hackathon",category:"Technology",place:"Virtual hackathon platform",organizer:"University Innovation Center",desc:"Your team has 24 hours online to design an innovative solution to an environmental challenge in our community.",imageAlt:"Image related to a technology workshop"},
  7: {title:"Family and Games Day",category:"Family",place:"Local community center",organizer:"Student Activities Initiative",desc:"Enjoy casual activities and group games with students and their families at a local meetup.",imageAlt:"Image related to a family event"},
  8: {title:"Career Session: Your First Step into the Job Market",category:"Education",place:"Virtual meeting room",organizer:"Student Career Guidance Group",desc:"Practical online advice on resumes, interviews, and building a professional network.",imageAlt:"Image related to an educational session"},
  9: {title:"Photography Challenge: Your City",category:"Culture",place:"Virtual submission platform",organizer:"Student Culture Club",desc:"Capture a photo that represents your city or surroundings and share it in a digital exhibition open to university students.",imageAlt:"Image related to a photography challenge"}
};

function eventText(event, key) {
  return window.riwaqLanguage === "en" ? eventEnglish[event.id][key] : event[key];
}

function translate(text) {
  return window.riwaqTranslate ? window.riwaqTranslate(text) : text;
}

const siteNav = document.querySelector(".site-nav");
if (siteNav) {
  const updateNavSize = () => siteNav.classList.toggle("is-compact", window.scrollY > 40);
  window.addEventListener("scroll", updateNavSize, {passive:true});
  updateNavSize();
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat(window.riwaqLanguage === "en" ? "en" : "ar", {day:"numeric", month:"short", year:"numeric"})
    .format(new Date(dateString + "T12:00:00"));
}

function getEventDateTime(event) {
  return new Date(`${event.date}T${event.time}:00`);
}

function getUpcomingEvents(now = new Date()) {
  return eventsData
    .filter(event => getEventDateTime(event) >= now)
    .sort((a, b) => getEventDateTime(a) - getEventDateTime(b));
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function toLocalDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDuration(minutes) {
  if (window.riwaqLanguage === "en") {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (!hours) return `${remainingMinutes} min`;
    if (!remainingMinutes) return `${hours} hr`;
    return `${hours} hr ${remainingMinutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (!hours) return `${remainingMinutes} دقيقة`;
  const formattedHours = hours === 1 ? "ساعة" : hours === 2 ? "ساعتان" : hours >= 3 && hours <= 10 ? `${hours} ساعات` : `${hours} ساعة`;
  if (!remainingMinutes) return formattedHours;
  return `${formattedHours} و${remainingMinutes} دقيقة`;
}

function getGalleryImages(event) {
  const imagesByCategory = {
    "موسيقى": [["assets/img/optimized/music.jpg", "صورة توضيحية لتصنيف الموسيقى"], ["assets/img/optimized/culture.jpg", "صورة توضيحية لتصنيف الثقافة"], ["assets/img/optimized/walking.jpg", "صورة توضيحية للحياة الجامعية"]],
    "تقنية": [["assets/img/optimized/technology.jpg", "صورة توضيحية لتصنيف التقنية"], ["assets/img/optimized/education.jpg", "صورة توضيحية لتصنيف التعليم"], ["assets/img/optimized/basketball.jpg", "صورة توضيحية لتصنيف الرياضة"]],
    "رياضة": [["assets/img/optimized/basketball.jpg", "صورة توضيحية لتصنيف الرياضة"], ["assets/img/optimized/walking.jpg", "صورة توضيحية للحياة الجامعية"], ["assets/img/optimized/family.jpg", "صورة توضيحية للفعاليات العائلية"]],
    "ثقافة": [["assets/img/optimized/culture.jpg", "صورة توضيحية لتصنيف الثقافة"], ["assets/img/optimized/education.jpg", "صورة توضيحية لتصنيف التعليم"], ["assets/img/optimized/music.jpg", "صورة توضيحية لتصنيف الموسيقى"]],
    "عائلي": [["assets/img/optimized/family.jpg", "صورة توضيحية للفعاليات العائلية"], ["assets/img/optimized/walking.jpg", "صورة توضيحية للحياة الجامعية"], ["assets/img/optimized/culture.jpg", "صورة توضيحية لتصنيف الثقافة"]],
    "تعليم": [["assets/img/optimized/education.jpg", "صورة توضيحية لتصنيف التعليم"], ["assets/img/optimized/technology.jpg", "صورة توضيحية لتصنيف التقنية"], ["assets/img/optimized/culture.jpg", "صورة توضيحية لتصنيف الثقافة"]]
  };
  const images = imagesByCategory[event.category] || [[event.image, event.imageAlt]];
  return [[event.image, event.imageAlt], ...images.filter(([src]) => src !== event.image)].slice(0, 3);
}

function eventCard(event) {
  const category = eventText(event, "category");
  const registration = translate(event.registrationRequired ? "التسجيل مطلوب" : "الدخول مفتوح");
  return `<div class="col-md-6 col-lg-4">
    <article class="event-card">
      <div class="event-art"><img src="${event.image}" alt="${eventText(event, "imageAlt")}" loading="lazy"></div>
      <div class="event-body">
        <div class="d-flex flex-wrap gap-2"><span class="badge category-badge">${category}</span><span class="badge text-bg-info">${translate(event.mode === "online" ? "أونلاين" : event.mode === "hybrid" ? "هجين" : "حضوري")}</span><span class="badge ${event.registrationRequired ? "text-bg-warning" : "text-bg-success"}">${registration}</span></div>
        <h3>${eventText(event, "title")}</h3>
        <div class="event-meta mb-2">📅 ${formatDate(event.date)}<br>◷ ${event.time} · ${formatDuration(event.durationMinutes)}<br>⌖ ${eventText(event, "place")}<br>✦ ${eventText(event, "organizer")}<br>${registration}</div>
        <p>${eventText(event, "desc")}</p>
        <a class="btn btn-brand btn-sm" href="event.html?id=${event.id}">${translate("التفاصيل ←")}</a>
      </div>
    </article>
  </div>`;
}

function showToast(message) {
  const toastEl = document.getElementById("siteToast");
  const messageEl = document.getElementById("toastMessage");
  if (!toastEl || !messageEl || !window.bootstrap) return;
  messageEl.textContent = message;
  bootstrap.Toast.getOrCreateInstance(toastEl).show();
}

function getEventFromUrl() {
  const id = new URLSearchParams(window.location.search).get("id");
  if (!id || !/^\d+$/.test(id)) return null;
  return eventsData.find(event => event.id === Number(id)) || null;
}

// الصفحة الرئيسية: عرض الفعاليات القادمة مرتبة حسب موعدها.
const featuredEvents = document.getElementById("featuredEvents");
const latestEvents = document.getElementById("latestEvents");
if (featuredEvents || latestEvents) {
  const upcomingEvents = getUpcomingEvents();
  if (featuredEvents) {
    featuredEvents.innerHTML = upcomingEvents.length
      ? upcomingEvents.slice(0, 3).map(eventCard).join("")
      : `<div class="col-12"><p class="text-secondary">${translate("لا توجد فعاليات قادمة حالياً.")}</p></div>`;
  }
  if (latestEvents) {
    const laterEvents = eventsData.slice(-3).reverse();
    latestEvents.innerHTML = laterEvents.length
      ? laterEvents.map(eventCard).join("")
      : `<div class="col-12"><p class="text-secondary">${translate("تابعنا، ستُضاف فعاليات قادمة قريباً.")}</p></div>`;
  }
}

// صفحة الفعاليات: البحث والتصنيف والتاريخ والترتيب.
const eventsGrid = document.getElementById("eventsGrid");
if (eventsGrid) {
  const search = document.getElementById("searchInput");
  const category = document.getElementById("categoryFilter");
  const date = document.getElementById("dateFilter");
  const sort = document.getElementById("sortFilter");
  const mode = document.getElementById("modeFilter");
  const place = document.getElementById("placeFilter");
  [...new Set(eventsData.map(event => eventText(event, "place")))].forEach(location => {
    const option = document.createElement("option");
    option.value = location;
    option.textContent = location;
    place.appendChild(option);
  });
  const queryCategory = new URLSearchParams(location.search).get("category");
  if (queryCategory) category.value = queryCategory;

  function updateEvents() {
    const now = new Date();
    let list = eventsData.filter(event => {
      const text = `${eventText(event, "title")} ${eventText(event, "place")} ${eventText(event, "organizer")} ${eventText(event, "desc")}`.toLowerCase();
      return text.includes(search.value.trim().toLowerCase()) &&
        (!category.value || event.category === category.value) &&
        (!mode.value || event.mode === mode.value) &&
        (!place.value || eventText(event, "place") === place.value);
    });

    if (date.value === "week") list = list.filter(event => getEventDateTime(event) >= now && getEventDateTime(event) <= addDays(now, 7));
    if (date.value === "month") list = list.filter(event => getEventDateTime(event) >= now && getEventDateTime(event) <= addDays(now, 30));

    if (sort.value === "late") list.sort((a, b) => getEventDateTime(b) - getEventDateTime(a));
    else if (sort.value === "az") list.sort((a, b) => eventText(a, "title").localeCompare(eventText(b, "title"), window.riwaqLanguage === "en" ? "en" : "ar"));
    else list.sort((a, b) => getEventDateTime(a) - getEventDateTime(b));

    eventsGrid.innerHTML = list.length
      ? list.map(eventCard).join("")
      : `<div class="col-12"><div class="alert alert-warning">${translate("لم نعثر على فعاليات مطابقة. جرّب تغيير البحث أو الفلاتر.")}</div></div>`;

    document.getElementById("resultCount").textContent = window.riwaqLanguage === "en"
      ? `Showing ${list.length} of ${eventsData.length} events`
      : `عرض ${list.length} من ${eventsData.length} فعاليات`;
  }

  [search, category, date, sort, mode, place].filter(Boolean).forEach(control => control.addEventListener("input", updateEvents));
  updateEvents();
}

// صفحة تفاصيل الفعالية.
const detailTitle = document.getElementById("detailTitle");
if (detailTitle) {
  const event = getEventFromUrl();
  const eventContent = document.getElementById("eventContent");
  const eventNotFound = document.getElementById("eventNotFound");

  if (!event) {
    document.title = window.riwaqLanguage === "en" ? "Event not found | Riwaq" : "الفعالية غير موجودة | رواق";
    detailTitle.textContent = translate("لم نعثر على هذه الفعالية");
    eventContent.classList.add("d-none");
    eventNotFound.classList.remove("d-none");
  } else {
    document.title = `${eventText(event, "title")} | Riwaq`;

    document.getElementById("detailCategory").textContent = eventText(event, "category");
    detailTitle.textContent = eventText(event, "title");
    document.getElementById("detailDescription").textContent = eventText(event, "desc");
    document.getElementById("detailExtra").textContent = window.riwaqLanguage === "en"
      ? `Organized by ${eventText(event, "organizer")}. Starts at ${event.time} on ${formatDate(event.date)} and lasts ${formatDuration(event.durationMinutes)}. ${translate(event.registrationRequired ? "يتطلب التسجيل" : "الدخول مفتوح")}.`
      : `تنظم الفعالية ${event.organizer}، وتبدأ الساعة ${event.time} بتاريخ ${formatDate(event.date)}، ومدتها ${formatDuration(event.durationMinutes)}. ${event.registrationRequired ? "المشاركة تتطلب التسجيل." : "الدخول مفتوح ولا يتطلب التسجيل."}`;
    document.getElementById("detailDate").textContent = formatDate(event.date);
    document.getElementById("detailTime").textContent = event.time;
    document.getElementById("detailDuration").textContent = formatDuration(event.durationMinutes);
    document.getElementById("detailOrganizer").textContent = eventText(event, "organizer");
    document.getElementById("detailRegistration").textContent = translate(event.registrationRequired ? "يتطلب التسجيل" : "الدخول مفتوح");
    document.getElementById("detailMode").textContent = translate(event.mode === "online" ? "أونلاين" : event.mode === "hybrid" ? "هجين" : "حضوري");
    document.getElementById("detailPlace").textContent = eventText(event, "place");
    document.getElementById("mapPlace").textContent = eventText(event, "place");
    if (event.mode === "online") document.getElementById("mapPanel").classList.add("d-none");
    document.getElementById("mapLink").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${eventText(event, "place")} ${window.riwaqLanguage === "en" ? "university" : "الجامعة"}`)}`;

    const poster = document.getElementById("detailPoster");
    poster.src = event.image;
    poster.alt = eventText(event, "imageAlt");
    document.getElementById("eventGallery").innerHTML = getGalleryImages(event).map(([src, alt]) =>
      `<figure><img src="${src}" alt="${translate(alt)}" loading="lazy"><figcaption>${translate(alt)}</figcaption></figure>`
    ).join("");

    document.getElementById("relatedEvents").innerHTML = getUpcomingEvents()
      .filter(item => item.id !== event.id && item.category === event.category)
      .concat(getUpcomingEvents().filter(item => item.id !== event.id && item.category !== event.category))
      .slice(0, 3).map(eventCard).join("") ||
      `<div class="col-12"><p class="text-secondary">${translate("لا توجد فعاليات قادمة مشابهة حالياً.")}</p></div>`;

    document.getElementById("calendarButton").addEventListener("click", () => {
      const startAt = getEventDateTime(event);
      const endAt = new Date(startAt.getTime() + event.durationMinutes * 60000);
      const toCalendarDate = date => `${toLocalDateString(date).replaceAll("-", "")}T${String(date.getHours()).padStart(2, "0")}${String(date.getMinutes()).padStart(2, "0")}00`;
      const escapeCalendarText = text => text.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
      const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${escapeCalendarText(event.title)}\nDTSTART:${toCalendarDate(startAt)}\nDTEND:${toCalendarDate(endAt)}\nLOCATION:${escapeCalendarText(event.place)}\nDESCRIPTION:${escapeCalendarText(event.desc)}\nEND:VEVENT\nEND:VCALENDAR`;

      const blob = new Blob([ics], {type:"text/calendar;charset=utf-8"});
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `riwaq-event-${event.id}.ics`;
      link.click();
      URL.revokeObjectURL(url);
      showToast(translate("تم تجهيز ملف التقويم."));
    });

    document.getElementById("shareButton").addEventListener("click", async () => {
      const shareUrl = location.href;
      try {
        if (navigator.share) {
          await navigator.share({title:eventText(event, "title"), text:eventText(event, "desc"), url:shareUrl});
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(shareUrl);
          showToast(translate("تم نسخ رابط الفعالية."));
        } else {
          window.prompt(translate("انسخ رابط الفعالية:"), shareUrl);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          showToast(translate("تعذرت مشاركة الرابط. يمكنك نسخه من شريط العنوان."));
        }
      }
    });

    const bookingModalEl = document.getElementById("bookingModal");
    const bookingModal = bootstrap.Modal.getOrCreateInstance(bookingModalEl);

    document.getElementById("bookingButton").addEventListener("click", () => bookingModal.show());

    document.getElementById("confirmBooking").addEventListener("click", () => {
      const name = document.getElementById("bookingName").value.trim();
      const alert = document.getElementById("bookingAlert");
      alert.classList.remove("d-none", "alert-danger", "alert-warning");

      if (name.length < 2) {
        alert.classList.add("alert-danger");
        alert.textContent = translate("يرجى إدخال اسم صحيح من حرفين على الأقل.");
      } else {
        alert.classList.add("alert-warning");
        alert.textContent = window.riwaqLanguage === "en"
          ? `Name "${name}" validated only; this demo does not create a real booking or save data.`
          : `تم التحقق من الاسم ${name} فقط؛ هذا النموذج لا ينشئ حجزاً فعلياً ولا يحفظ البيانات.`;
      }
    });
  }
}

// صفحة التواصل: تحقق أمامي وإرسال عبر FormSubmit.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async event => {
    event.preventDefault();

    const name = document.getElementById("fullName");
    const email = document.getElementById("emailAddress");
    const subject = document.getElementById("messageSubject");
    const message = document.getElementById("messageText");
    const alert = document.getElementById("contactAlert");
    // إزالة الفراغات قبل التحقق من طول الاسم والرسالة.
    name.value = name.value.trim();
    email.value = email.value.trim();
    message.value = message.value.trim();
    const submitButton = contactForm.querySelector('button[type="submit"]');

    [name, email, subject, message].forEach(field => {
      field.classList.toggle("is-invalid", !field.checkValidity());
    });

    alert.classList.remove("d-none", "alert-info", "alert-danger", "alert-success");

    if (!contactForm.checkValidity()) {
      alert.classList.add("alert-danger");
      alert.textContent = translate("تحقق من الحقول المطلوبة وصيغة البريد الإلكتروني؛ لم تُرسل الرسالة.");
      contactForm.classList.add("was-validated");
      alert.scrollIntoView({behavior:"smooth", block:"center"});
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = translate("جارٍ إرسال الرسالة...");
    alert.classList.add("alert-info");
    alert.textContent = translate("جارٍ إرسال رسالتك...");

    try {
      const response = await fetch("https://formsubmit.co/ajax/ali_446068@svuonline.org", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
      });
      const result = await response.json();

      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error(result.message || `خدمة الإرسال أعادت الحالة ${response.status}.`);
      }

      alert.classList.remove("alert-info");
      alert.classList.add("alert-success");
      alert.textContent = translate("تم إرسال رسالتك بنجاح. شكراً لتواصلك معنا.");
      contactForm.reset();
      contactForm.classList.remove("was-validated");
      [name, email, subject, message].forEach(field => field.classList.remove("is-invalid"));
    } catch (error) {
      console.error("تعذر إرسال رسالة التواصل عبر FormSubmit:", error);
      alert.classList.remove("alert-info");
      alert.classList.add("alert-danger");
      alert.textContent = translate("تعذر إرسال الرسالة الآن. تحقق من اتصال الإنترنت وتأكيد البريد لدى FormSubmit، ثم حاول مجدداً.");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = translate("إرسال الرسالة");
      alert.scrollIntoView({behavior:"smooth", block:"center"});
    }
  });
}