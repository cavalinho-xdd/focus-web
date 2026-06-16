import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About",
        "download": "Download App",
        "scroll": "Scroll to discover"
      },
      "hero": {
        "subtitle": "\"Where attention goes, energy flows\""
      },
      "demo": {
        "question": "What do you want to learn?",
        "goal": "Learn Rust lifetimes",
        "focusingOn": "Focusing on:",
        "evaluation": "AI Evaluation",
        "aiAsk": "Focus session complete. What did you learn about",
        "userAnswer": "Borrow checker rules and memory safety.",
        "xpAwarded": "+50 XP",
        "aiResponse": "Excellent summary. Your conceptual understanding is expanding."
      },
      "manifest": {
        "p1": "In today's fast-paced world, it's hard to stop and focus on what truly matters.",
        "p2": "Our minds constantly wander. We multitask. Branching out in a thousand directions.",
        "p3": "Yet it should flow with absolute clarity. Like a wave of light in the dark.",
        "p4": "The first step is simply to start. That's why this app exists. To forcefully pull you out of the chaos and make you find that calm."
      },
      "features": {
        "title": "Reclaim your",
        "titleHighlight": "time",
        "subtitle": "An app that doesn't just count down. It actively forces you to focus.",
        "blocker": "System Blocker",
        "blockerDesc": "Mercilessly terminates distracting applications. No Discord, no games. It's time to focus.",
        "hardcore": "Hardcore Mode",
        "hardcoreDesc": "When things get tough. If you activate Hardcore mode, the app cannot be closed in any way.",
        "ai": "AI Evaluation",
        "aiDesc": "After the session, Google Gemini will test what you learned. Earn a rating and XP."
      },
      "cta": {
        "title": "Enter the Flow.",
        "button": "Download AppImage"
      },
      "apiGuide": {
        "button": "How to get free AI features?",
        "title": "Get free AI features",
        "subtitle": "It takes 3 clicks. No technical knowledge required.",
        "step1": {
          "title": "Step 1: Log In",
          "desc": "Go to Google AI Studio and sign in with your normal Google account.",
          "btn": "Open Google AI Studio"
        },
        "step2": {
          "title": "Step 2: Create Key",
          "desc": "Click the blue 'Create API Key' button and copy the generated text.",
          "tooltip": "Ctrl+C (Copy)"
        },
        "step3": {
          "title": "Step 3: Paste in Focus App",
          "desc": "Open settings in Focus App and paste the code into the box. Done!",
          "settings": "Settings",
          "apiKey": "Gemini API Key",
          "tip": "Tip: Use Ctrl+V (Paste)"
        },
        "back": "Back",
        "next": "Next Step",
        "done": "Got it, let's go!"
      },
      "legal": {
        "privacyTitle": "Privacy Policy",
        "privacyEffective": "Effective Date: June 16, 2026",
        "privacyIntro": "Welcome to Focus App! Your privacy is critically important to us. This Privacy Policy explains how we collect, use, and protect your personal data when you use our application.",
        "section1Title": "1. What Data We Collect",
        "section1Desc": "When you use Focus App, we only collect the minimum amount of data required to provide you with a working application:",
        "s1Item1": "Email Address:",
        "s1Item1Desc": "Used exclusively for account creation, login, password resets, and friend requests.",
        "s1Item2": "Nickname (Display Name):",
        "s1Item2Desc": "Your public identifier on the global leaderboard and among friends.",
        "s1Item3": "App Usage Stats:",
        "s1Item3Desc": "Your XP, level, current streak, total focus minutes, and the number of completed goals.",
        "section2Title": "2. What Data We Do NOT Collect",
        "s2Item1": "Passwords:",
        "s2Item1Desc": "We do not store or see your password. All authentication is securely handled by Google Firebase.",
        "s2Item2": "API Keys:",
        "s2Item2Desc": "Your Gemini API Key is stored locally on your device. We do not have access to it.",
        "s2Item3": "Process Data (Blocker):",
        "s2Item3Desc": "The list of applications running on your PC during a Focus session is processed locally by your computer and is never sent to our servers.",
        "section3Title": "3. Third-Party Services",
        "section3Desc": "Focus App relies on third-party services to function:",
        "s3Item1": "Google Firebase:",
        "s3Item1Desc": "Used for authentication and database storage (leaderboards, friend lists).",
        "s3Item2": "Google Gemini API:",
        "s3Item2Desc": "If you provide your own API key, your prompt data (goal topics) is sent directly to Google for AI evaluation.",
        "section4Title": "4. How We Protect Your Data",
        "section4Desc": "We implement standard security measures, including Firebase Authentication, to protect your account. However, no method of transmission over the internet or electronic storage is 100% secure.",
        "section5Title": "5. Changes to This Policy",
        "section5Desc": "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page."
      },
      "downloadWarning": {
        "title": "Installation Warning (Windows & Mac)",
        "desc": "As Focus App is an independent project, it does not currently include expensive corporate \"Code Signing\" certificates. Your system might warn you upon first launch. The application is 100% safe and contains no malicious code.",
        "winTitle": "Windows Installation:",
        "winDesc": "If you see a blue \"Windows SmartScreen\", click on \"More info\" and then on the \"Run anyway\" button.",
        "macTitle": "macOS Installation:",
        "macDesc": "If your Mac says the application cannot be opened (unidentified developer), right-click (or two-finger tap) the app icon and select \"Open\"."
      },
      "downloadPage": {
        "title": "Alpha Release",
        "subtitle": "Focus is in active development. Try out the initial release on your platform."
      }
    }
  },
  cs: {
    translation: {
      "nav": {
        "home": "Domů",
        "about": "O aplikaci",
        "download": "Stáhnout aplikaci",
        "scroll": "Skrolujte pro objevení"
      },
      "hero": {
        "subtitle": "\"Where attention goes, energy flows\""
      },
      "demo": {
        "question": "Jaký je tvůj úkol?",
        "goal": "Naučit se Rust lifetimes",
        "focusingOn": "Soustředění na:",
        "evaluation": "AI Shrnutí",
        "aiAsk": "Focus blok dokončen. Co ses naučil o tématu",
        "userAnswer": "Pravidla borrow checkeru a memory safety.",
        "xpAwarded": "+50 XP",
        "aiResponse": "Skvělé shrnutí. Tvé porozumění konceptu se rozšiřuje."
      },
      "manifest": {
        "p1": "V dnešním zrychleném světě je těžké se zastavit a soustředit na to, co je opravdu důležité.",
        "p2": "Naše mysl neustále těká. Multitaskuje. Rozvětvuje se do tisíce směrů.",
        "p3": "Přitom by měla plynout naprosto čistě. Jako vlna světla v temnotě.",
        "p4": "Prvním krokem je zkrátka začít. Proto vznikla tahle aplikace. Aby vás na sílu vytrhla z chaosu a donutila vás najít ten klid."
      },
      "features": {
        "title": "Získejte zpět svůj",
        "titleHighlight": "čas",
        "subtitle": "Aplikace, která se nespokojí jen s odpočítáváním. Aktivně vás nutí soustředit se.",
        "blocker": "Systémový Blocker",
        "blockerDesc": "Nemilosrdně ukončuje aplikace, které vás rozptylují. Žádný Discord, žádné hry. Je čas se soustředit.",
        "hardcore": "Hardcore Mód",
        "hardcoreDesc": "Když jde do tuhého. Pokud aktivujete Hardcore mód, aplikaci nelze absolutně nijak vypnout.",
        "ai": "AI Evaluace",
        "aiDesc": "Po skončení se vás Google Gemini zeptá na to, co jste se učili. Získáte hodnocení a XP."
      },
      "cta": {
        "title": "Vstupte do Flow.",
        "button": "Stáhnout AppImage"
      },
      "apiGuide": {
        "button": "Jak získat AI funkce zdarma?",
        "title": "Získej AI funkce zdarma",
        "subtitle": "Zabere to 3 kliknutí. Nepotřebuješ žádné technické znalosti.",
        "step1": {
          "title": "Krok 1: Přihlášení",
          "desc": "Přejdi na stránku Google AI Studio a přihlas se svým normálním Google účtem.",
          "btn": "Otevřít Google AI Studio"
        },
        "step2": {
          "title": "Krok 2: Vytvoření klíče",
          "desc": "Klikni na modré tlačítko 'Create API Key' a zkopíruj si vygenerovaný text.",
          "tooltip": "Ctrl+C (Kopírovat)"
        },
        "step3": {
          "title": "Krok 3: Vložení do Focus App",
          "desc": "Otevři nastavení ve Focus App a vlož kód do políčka. Hotovo!",
          "settings": "Nastavení (Settings)",
          "apiKey": "Gemini API Klíč",
          "tip": "Tip: Použij Ctrl+V (Vložit)"
        },
        "back": "Zpět",
        "next": "Další krok",
        "done": "Rozumím, jdu na to!"
      },
      "legal": {
        "privacyTitle": "Zásady ochrany osobních údajů",
        "privacyEffective": "Datum účinnosti: 16. června 2026",
        "privacyIntro": "Vítejte ve Focus App! Vaše soukromí je pro nás nesmírně důležité. Tyto Zásady vysvětlují, jak shromažďujeme, používáme a chráníme vaše osobní údaje při používání naší aplikace.",
        "section1Title": "1. Jaká data shromažďujeme",
        "section1Desc": "Při používání aplikace Focus App shromažďujeme pouze minimum dat potřebných pro fungování aplikace:",
        "s1Item1": "E-mailová adresa:",
        "s1Item1Desc": "Slouží výhradně k vytvoření účtu, přihlášení, resetování hesla a žádostem o přátelství.",
        "s1Item2": "Přezdívka (Display Name):",
        "s1Item2Desc": "Váš veřejný identifikátor v globálním žebříčku a mezi přáteli.",
        "s1Item3": "Statistiky používání aplikace:",
        "s1Item3Desc": "Vaše XP, úroveň, aktuální streak, celkový čas soustředění a počet splněných cílů.",
        "section2Title": "2. Jaká data NEShromažďujeme",
        "s2Item1": "Hesla:",
        "s2Item1Desc": "Hesla neukládáme ani je nevidíme. Veškeré ověřování bezpečně zpracovává Google Firebase.",
        "s2Item2": "API klíče:",
        "s2Item2Desc": "Váš klíč k Gemini API je uložen lokálně na vašem zařízení. Nemáme k němu přístup.",
        "s2Item3": "Procesní data (Blocker):",
        "s2Item3Desc": "Seznam aplikací běžících na vašem počítači během Focus bloku je zpracováván lokálně a nikdy není odesílán na naše servery.",
        "section3Title": "3. Služby třetích stran",
        "section3Desc": "Focus App ke svému fungování využívá služby třetích stran:",
        "s3Item1": "Google Firebase:",
        "s3Item1Desc": "Slouží k ověřování a ukládání do databáze (žebříčky, seznamy přátel).",
        "s3Item2": "Google Gemini API:",
        "s3Item2Desc": "Pokud zadáte vlastní API klíč, vaše zadání (témata cílů) se odesílají přímo společnosti Google k vyhodnocení umělou inteligencí.",
        "section4Title": "4. Jak chráníme vaše data",
        "section4Desc": "Implementujeme standardní bezpečnostní opatření, včetně autentizace Firebase, abychom ochránili váš účet. Žádná metoda přenosu přes internet nebo elektronické ukládání však není 100% bezpečná.",
        "section5Title": "5. Změny těchto zásad",
        "section5Desc": "Tyto Zásady ochrany osobních údajů můžeme občas aktualizovat. O případných změnách vás budeme informovat zveřejněním nových zásad na této stránce."
      },
      "downloadWarning": {
        "title": "Upozornění pro instalaci (Windows & Mac)",
        "desc": "Jelikož je Focus App nezávislý projekt, neobsahuje zatím drahé korporátní \"Code Signing\" certifikáty. Váš systém vás může při prvním spuštění varovat. Aplikace je 100% bezpečná a neobsahuje žádný škodlivý kód.",
        "winTitle": "Při instalaci na Windows:",
        "winDesc": "Pokud na vás vyskočí modrá obrazovka \"Windows SmartScreen\", klikněte na text \"Více informací\" (More info) a následně na tlačítko \"Přesto spustit\" (Run anyway).",
        "macTitle": "Při spuštění na macOS:",
        "macDesc": "Pokud vám Mac napíše, že aplikaci nelze otevřít (neznámý vývojář), klikněte na ikonku aplikace pravým tlačítkem (nebo dvěma prsty) a z nabídky vyberte \"Otevřít\" (Open)."
      },
      "downloadPage": {
        "title": "Alfa Verze",
        "subtitle": "Focus je v aktivním vývoji. Vyzkoušejte si prvotní verzi na vaší platformě."
      }
    }
  }
};

const savedLang = localStorage.getItem('focus-web-lang') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
