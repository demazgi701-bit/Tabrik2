
const pages = [
    {
        title: "I. Hammasi boshlangan kun",

        quote: "Ba'zan bir insonning kelishi butun dunyoni go'zallashtiradi.",

        text: `Men o'z shirin o'ylarim va xayollarim bilan yashab yurgan paytlarimda hayotim juda oddiy va zerikarli edi. Kunlar bir-biriga o'xshardi, vaqt esa sezilmasdan o'tardi.

        Va bir kuni sen... Ha, aynan sen hayotimga kirib kelding. Quvnoq, samimiy va o'zingga xos inson bo'lib.

        Seni uchratganimdan keyin oddiy kunlarim ham boshqacha ma'no kasb eta boshladi. Avvallari e'tibor bermagan kichik lahzalarim ham qadrli bo'lib qoldi.

        Hayotda ba'zi uchrashuvlar tasodifan sodir bo'ladi, lekin ular insonning xotirasida uzoq vaqt saqlanib qoladi.

        Seni uchratganim ham men uchun ana shunday go'zal voqealardan biri bo'ldi.

        Balki sen uchun bu oddiy tanishuv bo'lgandir. Ammo men uchun bu chiroyli bir hikoyaning boshlanishi edi.`
    },

    {
        title: "II. Sening tabassuming",

        quote: "Eng go'zal xotiralar eng oddiy lahzalarda yashirinadi.",

        text: `Bilasanmi, seni har safar ko'rganimda beixtiyor xursand bo'laman. Yuragim boshqacha uradi va ichimda qandaydir iliq tuyg'u paydo bo'ladi.

        Ba'zan sen bilan gaplashish uchun juda ko'p mavzular o'ylayman. Lekin seni ko'rganimda ularning barchasini unutib qo'yaman.

        Sening kulishing, samimiy gaplaring, oddiy hazillaring ham men uchun chiroyli xotiraga aylanadi.

        Sen bilan o'tkazgan vaqtim qanchalik oddiy bo'lmasin, uni qadrlayman. Chunki insonning xotirasida ba'zan katta voqealar emas, kichik va samimiy lahzalar qolarkan.

        Men sening tabassumingni qadrlayman. Har bir kuningda kulishing uchun biror sabab bo'lishini istayman.

        Hayotingda quvonchli kunlar ko'p, tashvishli kunlar esa kam bo'lsin.

        Yuzingdagi tabassum hech qachon yo'qolmasin.`
    },

    {
        title: "III. Aytilmagan so'zlar",

        quote: "Ba'zi so'zlarni til emas, qalb aytadi.",

        text: `Men senga juda ko'p gaplarni aytmoqchi bo'lganman. Ammo har safar qarshingda turganimda qandaydir hayajon sababli jim qolganman.

        Bu qo'rquvmi, tortinchoqlikmi yoki sevgimi, bilmayman.

        Ba'zan insonning qalbida shunchalik ko'p gaplar yig'iladiki, ularni oddiy so'zlar bilan ifodalash juda qiyin bo'ladi.

        Shuning uchun ham ushbu kitobni yaratdim. Har bir sahifasiga ayta olmagan gaplarimni, samimiy tuyg'ularimni joylashtirdim.

        Seni chin yurakdan yaxshi ko'raman. Bu gapni aytishdan maqsadim sendan biror javob talab qilish emas.

        Shunchaki sen men uchun qanchalik qadrli inson ekaningni bilishingni istadim.

        Men sening fikrlaringni, hislaringni va qarorlaringni hurmat qilaman.

        Chunki insonni chin dildan qadrlash uning erkin tanlovini ham hurmat qilish demakdir.`
    },

    {
        title: "IV. Eng go'zal tilaklarim",

        quote: "Baxt — qalbning xotirjamligi va yuzdagi samimiy tabassumdir.",

        text: `Men sening har bir kuning chiroyli o'tishini istayman. Har bir yangi tong senga yangi umid, yangi imkoniyat va yangi quvonch olib kelsin.

        Qalbingdagi barcha ezgu orzularing birin-ketin amalga oshsin.

        Hayot yo'lingda seni tushunadigan, qadrlaydigan va hurmat qiladigan insonlar uchrasin.

        Hech qachon o'zingga bo'lgan ishonchingni yo'qotma. Chunki sening oldingda hali juda ko'p go'zal imkoniyatlar bor.

        Ba'zan hayot biz kutgandek bo'lmasligi mumkin. Ammo har bir qiyin kundan keyin yangi tong otadi.

        Ko'p kul, o'zing sevgan ishlar bilan shug'ullan, orzularing sari intil va o'zing uchun chiroyli xotiralar yarat.

        Hayotingning har bir sahifasi ushbu kitob sahifalaridan ham go'zalroq bo'lsin.

        Bu mening senga chin qalbimdan tilagan eng samimiy tilaklarim.`
    },

    {
        title: "V. Qalbimdagi so'nggi so'zlar",

        quote: "Samimiy kechirim so'zlardan boshlanib, amallarda namoyon bo'ladi.",

        text: `Mana, ushbu kitobning so'nggi sahifasiga ham yetib keldik.

        Balki men ba'zan noto'g'ri gapirgandirman. Balki bilib yoki bilmay seni ranjitgandirman.

        Agar shunday bo'lgan bo'lsa, sendan chin qalbimdan uzr so'rayman.

        Men o'z xatolarimni tushunishni va ulardan saboq olishni istayman. Chunki kechirim so'rash faqat chiroyli so'zlarni aytish emas, kelajakda o'z xatolarini takrorlamaslikka harakat qilishdir.

        Ushbu kitobni yaratishimdan maqsad qalbimdagi aytilmagan gaplarni senga yetkazish edi.

        Har bir sahifani o'qiganing, vaqt ajratganing va mening so'zlarimga e'tibor berganing uchun rahmat.

        Qanday javob berishingdan qat'i nazar, sening qaroringni hurmat qilaman.

        Va nihoyat, qalbimdagi eng samimiy so'z...

        Meni kechira qol...`
    }
];

// ASOSIY ELEMENTLAR

const book = document.getElementById("book");
const cover = document.getElementById("cover");
const pagesContainer = document.getElementById("pages");
const next = document.getElementById("next");
const counter = document.getElementById("counter");

const bookScene = document.getElementById("bookScene");
const questionScene = document.getElementById("questionScene");
const finalScene = document.getElementById("finalScene");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

let opened = false;
let current = 0;
let busy = false;

const sheets = [];

// ORTIQCHA TUGMANI OLIB TASHLASH

document.querySelector(".play-area")?.remove();

// BESHTA VARAQNI YARATISH

pages.forEach((page, index) => {

    const sheet = document.createElement("div");

    sheet.className = "sheet";
    sheet.style.zIndex = 20 - index;

    const paragraphs = page.text
        .trim()
        .split(/\n\s*\n/)
        .map(text => `<p>${text.trim()}</p>`)
        .join("");

    sheet.innerHTML = `
        <div class="front">
            <div class="ornament">❦</div>

            <h2>${page.title}</h2>

            <div class="letter">
                ${paragraphs}
            </div>

            <div class="page-number">
                — ${index + 1} —
            </div>
        </div>

        <div class="back">
            <div class="ornament">❦</div>

            <div class="quote">
                ${page.quote}
            </div>

            <div class="cover-heart">♡</div>

            <div class="ornament">❦</div>
        </div>
    `;

    pagesContainer.appendChild(sheet);
    sheets.push(sheet);
});

// KITOBNI OCHISH

function openBook() {

    if (opened || busy) return;

    busy = true;
    opened = true;
    next.disabled = true;

    book.classList.add("open");
    cover.classList.add("flipped");

    setTimeout(() => {

        cover.style.zIndex = 2;

        counter.textContent = "1 / 5 sahifa";
        next.textContent = "Keyingi sahifa ❦";

        busy = false;
        next.disabled = false;

    }, 1900);
}

cover.addEventListener("click", openBook);

// VARAQLASH ANIMATSIYASI

next.addEventListener("click", () => {

    if (busy) return;

    if (!opened) {
        openBook();
        return;
    }

    busy = true;
    next.disabled = true;

    const sheet = sheets[current];

    sheet.style.zIndex = 60 + current;
    sheet.classList.add("flipped");

    setTimeout(() => {

        current++;

        if (current < pages.length) {

            counter.textContent =
                `${current + 1} / 5 sahifa`;

            next.textContent =
                current === 4
                    ? "Kitobni yopish ❦"
                    : "Keyingi sahifa ❦";

            busy = false;
            next.disabled = false;

        } else {

            closeBook();

        }

    }, 1850);
});

// KITOBNI YOPISH

function closeBook() {

    counter.textContent = "Qalbimdagi so'zlar...";
    next.style.visibility = "hidden";

    sheets.forEach((sheet, index) => {

        sheet.style.zIndex = 20 - index;
        sheet.classList.remove("flipped");

    });

    cover.style.zIndex = 100;
    cover.classList.remove("flipped");

    book.classList.remove("open");

    setTimeout(() => {

        bookScene.classList.add("hidden");

        document.body.classList.add("green");

        setTimeout(() => {

            questionScene.classList.remove("hidden");

        }, 900);

    }, 2100);
}

// YO'Q TUGMASINING ANIMATSIYASI

no.addEventListener("pointerenter", () => {

    no.animate([
        { transform: "translateX(0)" },
        { transform: "translateX(12px)" },
        { transform: "translateX(-12px)" },
        { transform: "translateX(0)" }
    ], {
        duration: 450,
        easing: "ease-in-out"
    });

});

// JAVOB TUGMALARI

yes.addEventListener("click", () => {
    finish(true);
});

no.addEventListener("click", () => {
    finish(false);
});

// YAKUNIY SAHIFA

function finish(accepted) {

    questionScene.classList.add("hidden");

    const title = document.getElementById("finalTitle");
    const text = document.getElementById("finalText");

    if (accepted) {

        title.textContent = "Chin qalbimdan rahmat! ♡";

        text.textContent =
            "Samimiyliging uchun katta rahmat. " +
            "Yuzingdan tabassum, qalbingdan quvonch hech qachon arimasin. " +
            "Har bir kuning go'zal lahzalarga to'lsin. " +
            "Barcha orzularing amalga oshsin. " +
            "O'zingni asra, chunki sen juda qadrli insonsan.";

    } else {

        title.textContent = "Tushunaman";

        text.textContent =
            "Qaroringni hurmat qilaman. " +
            "So'zlarimni oxirigacha o'qiganing uchun rahmat. " +
            "Senga chin qalbimdan baxt va yaxshilik tilayman.";

    }

    setTimeout(() => {

        finalScene.classList.remove("hidden");

        document.querySelectorAll(".particle")
            .forEach(particle => {

                particle.textContent = "♡";
                particle.style.color = "#ffe6ca";

            });

    }, 800);
}

// SEHRLI YULDUZLAR VA YURAKCHALAR

const particles = document.getElementById("particles");

for (let i = 0; i < 70; i++) {

    const particle = document.createElement("span");

    particle.className = "particle";

    particle.textContent =
        i % 5 === 0 ? "♡" : "✦";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.fontSize =
        5 + Math.random() * 20 + "px";

    particle.style.animationDuration =
        7 + Math.random() * 15 + "s";

    particle.style.animationDelay =
        -Math.random() * 20 + "s";

    particles.appendChild(particle);
}

// YANGI YAKUNIY SAHIFA

document.querySelector(".play-area")?.remove();

const newYes = document.getElementById("yes").cloneNode(true);
const newNo = document.getElementById("no").cloneNode(true);

document.getElementById("yes").replaceWith(newYes);
document.getElementById("no").replaceWith(newNo);

newYes.textContent = "Ha ♡";
newNo.textContent = "Yo'q";

newNo.addEventListener("pointerenter", () => {

    newNo.animate([
        { transform: "translateX(0)" },
        { transform: "translateX(25px)" },
        { transform: "translateX(-15px)" },
        { transform: "translateX(0)" }
    ], {
        duration: 500,
        easing: "ease-in-out"
    });

});

newYes.addEventListener("click", () => {
    showBeautifulFinal(true);
});

newNo.addEventListener("click", () => {
    showBeautifulFinal(false);
});

function showBeautifulFinal(accepted) {

    newYes.disabled = true;
    newNo.disabled = true;

    document.getElementById("questionScene")
        .classList.add("hidden");

    document.getElementById("finalTitle").textContent =
        accepted
        ? "Chin qalbimdan rahmat! ♡"
        : "Seni tushunaman";

    document.getElementById("finalText").textContent =
        accepted
        ? `Kechirganing uchun chin qalbimdan rahmat.

        Hayotingning har bir kuni quvonchga, 
        har bir tongi esa go'zal umidlarga to'lsin.

        Sening tabassuming doimo samimiy,
        qalbing esa xotirjam bo'lsin.

        Seni qadrlayman va bundan keyin
        hislaringga yanada e'tiborli bo'lishga
        harakat qilaman.

        Borliging uchun rahmat. ♡`
        : `Qaroringni hurmat qilaman.
        Ushbu kitobni oxirigacha o'qiganing
        uchun katta rahmat.
        Senga doimo baxt va yaxshilik tilayman.`;

    document.getElementById("finalText")
        .style.whiteSpace = "pre-line";

    setTimeout(() => {

        document.getElementById("finalScene")
            .classList.remove("hidden");

        if (accepted) {
            createBeautifulHearts();
        }

    }, 1200);
}

function createBeautifulHearts() {

    const symbols = ["♡", "♥", "✦", "❦"];

    for (let i = 0; i < 100; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "celebration-heart";

            heart.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            heart.style.left = Math.random() * 100 + "%";

            heart.style.fontSize =
                12 + Math.random() * 35 + "px";

            heart.style.color =
                ["#ffe4ab", "#ffffff", "#ffc1cc", "#e7c57b"][
                    Math.floor(Math.random() * 4)
                ];

            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 5000);

        }, i * 70);
    }
}

document.getElementById("questionScene")
    .addEventListener("pointerdown", () => {

        window.getSelection()?.removeAllRanges();

    });

document.getElementById("finalScene")
    .addEventListener("pointerdown", () => {

        window.getSelection()?.removeAllRanges();

    });
