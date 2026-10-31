// ---------- Data ----------
// Conference start (Athens time, UTC+2 in November)
const START = new Date("2026-11-20T15:00:00+02:00");

// Past sessions, newest first. Source: kalamari.gr/kmec
const SESSIONS = [
  { n: 20, next: true,
    date: { en: "20–22 November 2026", el: "20–22 Νοεμβρίου 2026" },
    title: { en: "20th session · anniversary edition", el: "20ή Σύνοδος · επετειακή διοργάνωση" },
    text: { en: "Our 20th year, with about 170 delegates and more guest schools than ever. You could be part of it.", el: "Η 20ή μας χρονιά, με περίπου 170 συνέδρους και περισσότερα φιλοξενούμενα σχολεία από ποτέ. Έλα κι εσύ." },
    chips: { en: ["~170 delegates", "Open to all schools"], el: ["~170 σύνεδροι", "Ανοιχτό σε όλα τα σχολεία"] } },
  { n: 19,
    date: { en: "22–23 November 2025", el: "22–23 Νοεμβρίου 2025" },
    title: { en: "19th session", el: "19η Σύνοδος" },
    text: { en: "172 participants in 6 English and 1 French committee, with 11 guest students from the 1st Lyceum of Alexandroupoli. Officially supported by the European Parliament Liaison Office in Greece.", el: "172 συμμετέχοντες σε 6 αγγλόφωνες και 1 γαλλόφωνη επιτροπή, με 11 καλεσμένους μαθητές από το 1ο Λύκειο Αλεξανδρούπολης. Με την επίσημη υποστήριξη του Γραφείου του Ευρωπαϊκού Κοινοβουλίου στην Ελλάδα." },
    chips: { en: ["172 participants", "7 committees"], el: ["172 συμμετέχοντες", "7 επιτροπές"] } },
  { n: 18,
    date: { en: "9–10 November 2024", el: "9–10 Νοεμβρίου 2024" },
    title: { en: "18th session", el: "18η Σύνοδος" },
    text: { en: "187 participants, with 26 guest students from the 1st Lyceum of Alexandroupoli and the 30th Lyceum of Thessaloniki. Greetings from the EP Liaison Office and EUROPE DIRECT.", el: "187 συμμετέχοντες, με 26 καλεσμένους μαθητές από το 1ο Λύκειο Αλεξανδρούπολης και το 30ό ΓΕΛ Θεσσαλονίκης. Χαιρετισμοί από το Γραφείο του ΕΚ και το EUROPE DIRECT." },
    chips: { en: ["187 participants", "2 guest schools"], el: ["187 συμμετέχοντες", "2 φιλοξενούμενα σχολεία"] } },
  { n: 17,
    date: { en: "25–26 November 2023", el: "25–26 Νοεμβρίου 2023" },
    title: { en: "17th session", el: "17η Σύνοδος" },
    text: { en: "181 participants, with 35 guest students from the 1st Gymnasium of Soufli, the 1st Lyceum of Alexandroupoli and the 30th Lyceum of Thessaloniki.", el: "181 συμμετέχοντες, με 35 καλεσμένους μαθητές από το 1ο Γυμνάσιο Σουφλίου, το 1ο Λύκειο Αλεξανδρούπολης και το 30ό ΓΕΛ Θεσσαλονίκης." },
    chips: { en: ["181 participants", "3 guest schools"], el: ["181 συμμετέχοντες", "3 φιλοξενούμενα σχολεία"] } },
  { n: 16,
    date: { en: "4–5 March 2023", el: "4–5 Μαρτίου 2023" },
    title: { en: "16th session · back after the pandemic", el: "16η Σύνοδος · η επιστροφή μετά την πανδημία" },
    text: { en: "178 participants and 32 guest students from Soufli and the 30th Lyceum of Thessaloniki, as KMEC returned after two years away.", el: "178 συμμετέχοντες και 32 καλεσμένοι μαθητές από το Σουφλί και το 30ό ΓΕΛ Θεσσαλονίκης, καθώς το KMEC επέστρεψε δυναμικά μετά από δύο χρόνια." },
    chips: { en: ["178 participants", "Video"], el: ["178 συμμετέχοντες", "Βίντεο"] } },
  { n: 15,
    date: { en: "21–23 February 2020", el: "21–23 Φεβρουαρίου 2020" },
    title: { en: "15th session", el: "15η Σύνοδος" },
    text: { en: "160 participants in 7 committees. Greetings from the Regional Director of Education of Central Macedonia and MEP Anna-Michelle Asimakopoulou. Third year in the EP Ambassador School programme.", el: "160 συμμετέχοντες σε 7 επιτροπές. Χαιρετισμοί από τον Περιφερειακό Διευθυντή Εκπαίδευσης Κεντρικής Μακεδονίας και την Ευρωβουλευτή Άννα-Μισέλ Ασημακοπούλου. Τρίτη χρονιά στο πρόγραμμα «Σχολεία-Πρέσβεις»." },
    chips: { en: ["160 participants", "Video"], el: ["160 συμμετέχοντες", "Βίντεο"] } },
  { n: 14,
    date: { en: "22–24 February 2019", el: "22–24 Φεβρουαρίου 2019" },
    title: { en: "14th session", el: "14η Σύνοδος" },
    text: { en: "149 students, chairs and alumni, with 20 guests from Soufli and the 30th Lyceum of Charilaos.", el: "149 μαθητές, συντονιστές και απόφοιτοι, με 20 καλεσμένους από το Σουφλί και το 30ό Λύκειο Χαριλάου." },
    chips: { en: ["149 participants"], el: ["149 συμμετέχοντες"] } },
  { n: 13,
    date: { en: "3–4 March 2018", el: "3–4 Μαρτίου 2018" },
    title: { en: "13th session", el: "13η Σύνοδος" },
    text: { en: "144 participants and 20 guests from Soufli. MEP Maria Spyraki addressed the delegates.", el: "144 συμμετέχοντες και 20 καλεσμένοι από το Σουφλί. Η Ευρωβουλευτής Μαρία Σπυράκη απευθύνθηκε στους συνέδρους." },
    chips: { en: ["144 participants", "Video"], el: ["144 συμμετέχοντες", "Βίντεο"] } },
  { n: 12,
    date: { en: "17–19 February 2017", el: "17–19 Φεβρουαρίου 2017" },
    title: { en: "12th session", el: "12η Σύνοδος" },
    text: { en: "102 students and 16 alumni. Keynote by the Head of the European Parliament Office in Greece.", el: "102 μαθητές και 16 απόφοιτοι. Κεντρικός ομιλητής ο Επικεφαλής του Γραφείου του ΕΚ στην Ελλάδα." },
    chips: { en: ["118 participants", "Video"], el: ["118 συμμετέχοντες", "Βίντεο"] } },
  { n: 11,
    date: { en: "4–6 March 2016", el: "4–6 Μαρτίου 2016" },
    title: { en: "11th session", el: "11η Σύνοδος" },
    text: { en: "107 students and 12 alumni, part of the European programme “Europe4you – School Ambassadors”.", el: "107 μαθητές και 12 απόφοιτοι, στο πλαίσιο του προγράμματος «Europe4you – School Ambassadors»." },
    chips: { en: ["119 participants"], el: ["119 συμμετέχοντες"] } },
  { n: 10,
    date: { en: "27 February – 1 March 2015", el: "27 Φεβρουαρίου – 1 Μαρτίου 2015" },
    title: { en: "10th session", el: "10η Σύνοδος" },
    text: { en: "The 10th anniversary session, with 128 students and 13 alumni.", el: "Η 10η επετειακή Σύνοδος, με 128 μαθητές και 13 αποφοίτους." },
    chips: { en: ["141 participants"], el: ["141 συμμετέχοντες"] } },
  { n: 9,
    date: { en: "8–9 March 2014", el: "8–9 Μαρτίου 2014" },
    title: { en: "9th session", el: "9η Σύνοδος" },
    text: { en: "135 students and 10 alumni. The first French-speaking committee, during the School's 120th anniversary.", el: "135 μαθητές και 10 απόφοιτοι. Η πρώτη γαλλόφωνη επιτροπή, στα 120 χρόνια της Σχολής." },
    chips: { en: ["145 participants"], el: ["145 συμμετέχοντες"] } },
  { n: 8,
    date: { en: "3 March 2013", el: "3 Μαρτίου 2013" },
    title: { en: "8th session", el: "8η Σύνοδος" },
    text: { en: "6 committees with 130 Gymnasium and Lyceum students.", el: "6 επιτροπές με 130 μαθητές Γυμνασίου και Λυκείου." },
    chips: { en: ["130 participants"], el: ["130 συμμετέχοντες"] } },
  { n: 7,
    date: { en: "19 February 2012", el: "19 Φεβρουαρίου 2012" },
    title: { en: "7th session", el: "7η Σύνοδος" },
    text: { en: "110 students and 6 alumni.", el: "110 μαθητές και 6 απόφοιτοι." },
    chips: { en: ["116 participants"], el: ["116 συμμετέχοντες"] } },
];

// zoom: the YouTube preview has black side bars (4:3 video), so crop them off
const VIDEOS = [
  { id: "589rcE4R3WM", n: 16, zoom: true },
  { id: "tEGMFp-XYmU", n: 15, zoom: true },
  { id: "XX-naBT-MT0", n: 13 },
  { id: "G-HIyEHSGFU", n: 12, zoom: true },
];

const range = (prefix, nums) => nums.map((i) => `${prefix}-${i}.jpg`);
const GALLERY = [
  { n: 19, files: range("s19", [2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 11]) },
  { n: 18, files: range("s18", [3, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12]) },
  { n: 17, files: range("s17", [9, 8, 3, 1, 2, 4, 5, 6, 7]) },
  { n: 16, files: range("s16", [1, 2, 3, 4, 5, 6, 7, 8, 9]) },
  { n: 15, files: range("s15", [2, 3, 1, 4, 5]) },
  { n: 13, files: range("s13", [1, 4, 2, 5, 6]) },
];

// ---------- Registration ----------
// Paste the Google Form link here (the normal "viewform" link). Leave "" until it exists.
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfbYg_AkIAgW6rIFhAjzr88U6Va8E6M3G7tVozOzXMV-ZTFwQ/viewform";
const FALLBACK_EMAIL = "vkarfis1@gmail.com";

// ---------- Committees ----------
const t = (en, el) => ({ en, el });
// title = topic title (shown in the site's language), text = topic description in the
// committee's working language, level = difficulty stars (1–5).
// chairs / guide (study guide PDF link) can be added later; null shows "to be announced" / nothing.
const COMMITTEES = [
  { lang: "EN", code: "INTA", level: 5,
    name: t("Committee on International Trade", "Επιτροπή Διεθνούς Εμπορίου"),
    title: t("US-Iran war and the Oil Crisis", "Ο πόλεμος ΗΠΑ-Ιράν και η πετρελαϊκή κρίση"),
    text: "Since the 28th of February 2026, the United States of America and Israel have been at war with Iran and its regional allies. Iran borders the Strait of Hormuz, a vital waterway for oil exports from the Persian Gulf to the rest of the world. The Iranian Revolutionary Guard Corps (IRGC) issued warnings forbidding passage through the strait, boarded and attacked merchant ships and laid sea mines in the strait, causing the oil exports to drop to near zero levels and the prices worldwide to skyrocket. How can the European Union protect its energy security and economic stability in the face of global trade disruptions such as this?",
    chairs: null, guide: null },
  { lang: "EN", code: "AFET", level: 4,
    name: t("Committee on Foreign Affairs", "Επιτροπή Εξωτερικών Υποθέσεων"),
    title: t("EU Enlargement", "Η διεύρυνση της ΕΕ"),
    text: "The European Union is on the precipice of one of its largest enlargements. 9 countries (Albania, Bosnia, Montenegro, North Macedonia, Serbia, Georgia, Moldova, Ukraine and Turkey) have been granted candidate status, with Canada having been invited to serve as an “associate member” and even the UK rejoining the bloc is now on the table. How can the EU treat these negotiations to ensure its sociopolitical and economic benefits, is this enlargement going to strengthen the EU or spark a major debate about whether the bloc can manage growth without breaking its internal stability?",
    chairs: null, guide: null },
  { lang: "EN", code: "DROI", level: 3,
    name: t("Subcommittee on Human Rights", "Υποεπιτροπή Ανθρωπίνων Δικαιωμάτων"),
    title: t("Immigration", "Μετανάστευση"),
    text: "In August of 2026, an unprecedented 72,000 migrants from Morocco flooded the Spanish city of Ceuta in just 24 hours, creating concerns about the EU’s massive illegal immigration problem. Many also voiced fear of Islamic terrorism. In what ways can the EU tackle the never-ending waves of immigrants reaching its shores while also dealing with the problem's true causes such as war, famine and exploitation from “First-World” countries?",
    chairs: null, guide: null },
  { lang: "EN", code: "ENVI", level: 2,
    name: t("Committee on Environment, Climate and Food Safety", "Επιτροπή Περιβάλλοντος, Κλίματος και Ασφάλειας Τροφίμων"),
    title: t("AI and its Impact on the Environment", "Η τεχνητή νοημοσύνη και ο αντίκτυπός της στο περιβάλλον"),
    text: "According to the United Nations, by the end of the decade, Generative AI data centres would consume 945 terawatt-hours of electricity, which is almost triple the combined annual electricity use of Pakistan, Bangladesh, and Nigeria, as well as water equal to the basic annual domestic needs of 1.3 billion people. The stats reveal that GenAI’s greenhouse gas emissions are intense and heavily impact the environment (i.e. rising temperatures). What action can the EU take moving forward to regulate the use of GenAI while also pressuring the main actors of the space to turn to more environmentally friendly ways of running their data centres?",
    chairs: null, guide: null },
  { lang: "EN", code: "IMCO", level: 2,
    name: t("Committee on Internal Market and Consumer Protection", "Επιτροπή Εσωτερικής Αγοράς και Προστασίας των Καταναλωτών"),
    title: t("Subscription Based Economy", "Η οικονομία των συνδρομών"),
    text: "The subscription-based model started with on-demand video and music platforms giving people access to huge libraries of content for a fair price. Once-convenient, now it has permeated to every part of daily life. A subscription is needed now for computer software or storage space to even services in a car that someone has already bought. The sense that genuine ownership is becoming obsolete is vivid amongst the general public. Could an EU-wide programme be implemented to safeguard consumer’s interests and limit the ever-rising costs of the subscription-based model?",
    chairs: null, guide: null },
  { lang: "EN", code: "FEMM", level: 1,
    name: t("Committee on Women’s Rights and Gender Equality", "Επιτροπή Δικαιωμάτων των Γυναικών και Ισότητας των Φύλων"),
    title: t("Wage Gap", "Το μισθολογικό χάσμα"),
    text: "According to the estimates released on September 18th, 2026 by the International Labour Organization (ILO), the gap between the earnings of women and men has narrowed by just 2% since the last release in 2018. These findings blatantly reveal that progress towards closing the gender pay gap has been slow, which assuredly underlines the necessity for gender equality in the workforce. Globally women still earn, on average, around 18% less than men, hence millions of women’s work across diverse sectors and occupations continues to be too often undervalued. What measures can the EU take to ensure equal pay for equal work for all women?",
    chairs: null, guide: null },
  { lang: "FR", code: "CULT", level: 2,
    name: t("Commission de la culture et de l'éducation", "Commission de la culture et de l'éducation"),
    title: t("La crise de l'éducation aux médias", "La crise de l'éducation aux médias"),
    subtitle: t("The media literacy crisis", "Η κρίση του γραμματισμού στα μέσα ενημέρωσης"),
    text: "L'essor des plateformes de réseaux sociaux et de l'IA générative permet la diffusion rapide de la désinformation auprès d'un public mondial. Cet essor, conjugué à l'influence des algorithmes et au manque d'esprit critique, révèle que l'éducation aux médias est en crise. Les publics plus jeunes formulent leurs opinions sur les questions politiques et sociales uniquement sur des plateformes comme TikTok, où la vérité est facilement déformée. Le paysage numérique a rendu l'information et la vérité relatives, augmentant ainsi la méfiance du public et la polarisation de la société. Comment l'UE peut-elle agir afin de favoriser une culture de l'éducation aux médias et sauvegarder l'intégrité de nos démocraties?",
    chairs: null, guide: null },
];

// ---------- Committee picker labels ----------
const PICK = {
  en: { lang: "Language", level: "Difficulty", all: "All", any: "Any", en: "English", fr: "French", easy: "Easier", mid: "Medium", hard: "Challenging",
    count: (n) => n === 1 ? "1 committee matches" : `${n} committees match`, none: "No committee matches. Try another combination." },
  el: { lang: "Γλώσσα", level: "Δυσκολία", all: "Όλες", any: "Όλες", en: "Αγγλικά", fr: "Γαλλικά", easy: "Πιο εύκολες", mid: "Μέτριες", hard: "Απαιτητικές",
    count: (n) => n === 1 ? "1 επιτροπή ταιριάζει" : `${n} επιτροπές ταιριάζουν`, none: "Καμία επιτροπή δεν ταιριάζει. Δοκίμασε άλλο συνδυασμό." },
};
// Difficulty bands from the star ratings: 1-2 easier, 3 medium, 4-5 challenging.
const BANDS = { easy: [1, 2], mid: [3, 3], hard: [4, 5] };

// ---------- Glossary ----------
const GLOSSARY = [
  { term: t("Delegate", "Σύνεδρος"),
    def: t("A student taking part in a committee. That's you.", "Μαθητής ή μαθήτρια που συμμετέχει σε μια επιτροπή. Δηλαδή εσύ.") },
  { term: t("Committee", "Επιτροπή"),
    def: t("A group of delegates working on one topic, named after a real European Parliament committee (INTA, AFET, ENVI…).", "Ομάδα συνέδρων που δουλεύει πάνω σε ένα θέμα. Παίρνει το όνομά της από μια πραγματική επιτροπή του Ευρωπαϊκού Κοινοβουλίου (INTA, AFET, ENVI…).") },
  { term: t("Chair", "Συντονιστής/Συντονίστρια"),
    def: t("An experienced student who guides the committee's discussion and helps it reach agreement.", "Έμπειρος μαθητής ή μαθήτρια που καθοδηγεί τη συζήτηση της επιτροπής και τη βοηθά να καταλήξει σε συμφωνία.") },
  { term: t("Teambuilding", "Teambuilding"),
    def: t("Games at the start of the conference so your committee gets to know each other before the debate begins.", "Παιχνίδια στην αρχή του συνεδρίου, για να γνωριστεί η επιτροπή σου πριν ξεκινήσει η συζήτηση.") },
  { term: t("Committee work", "Εργασία επιτροπών"),
    def: t("The sessions where your committee researches the topic, debates ideas and writes its resolution.", "Οι συνεδριάσεις όπου η επιτροπή σου ερευνά το θέμα, συζητά ιδέες και γράφει το ψήφισμά της.") },
  { term: t("Lobbying", "Διαπραγματεύσεις"),
    def: t("Talking to other delegates to win support for an idea before it is written down or voted on.", "Συζητήσεις με άλλους συνέδρους για να κερδίσεις υποστήριξη για μια ιδέα, πριν γραφτεί ή ψηφιστεί.") },
  { term: t("Resolution", "Ψήφισμα"),
    def: t("The document each committee writes: what the problem is and what Europe should do about it.", "Το κείμενο που γράφει κάθε επιτροπή: ποιο είναι το πρόβλημα και τι πρέπει να κάνει η Ευρώπη γι' αυτό.") },
  { term: t("Introductory clauses", "Εισαγωγικές ρήτρες"),
    def: t("The first part of a resolution. They set out the facts and explain why the problem matters.", "Το πρώτο μέρος του ψηφίσματος. Παρουσιάζουν τα δεδομένα και εξηγούν γιατί το πρόβλημα είναι σημαντικό.") },
  { term: t("Operative clauses", "Διατακτικές ρήτρες"),
    def: t("The second part: the actions your committee proposes. Each one starts with a verb such as \"Calls for\" or \"Encourages\".", "Το δεύτερο μέρος: οι ενέργειες που προτείνει η επιτροπή σου. Η καθεμία ξεκινά με ένα ρήμα, όπως «Calls for» ή «Encourages».") },
  { term: t("General Assembly", "Γενική Συνέλευση"),
    def: t("The final day, when all committees meet. Each one presents its resolution, the others debate it, and everyone votes.", "Η τελευταία μέρα, όταν συναντιούνται όλες οι επιτροπές. Η καθεμία παρουσιάζει το ψήφισμά της, οι άλλες το συζητούν και όλοι ψηφίζουν.") },
  { term: t("For, against, abstain", "Υπέρ, κατά, αποχή"),
    def: t("Your three choices in a vote. Abstaining means you choose not to vote either way.", "Οι τρεις επιλογές σου σε μια ψηφοφορία. Αποχή σημαίνει ότι επιλέγεις να μην ψηφίσεις ούτε υπέρ ούτε κατά.") },
  { term: t("Presidency", "Προεδρείο"),
    def: t("The team of older students who lead the conference and run the General Assembly.", "Η ομάδα μεγαλύτερων μαθητών που διοργανώνει το συνέδριο και διευθύνει τη Γενική Συνέλευση.") },
];

// ---------- Resources (files in assets/docs) ----------
const RESOURCES = {
  delegates: [
    { file: "resolution-writing-guide.pdf", eyp: true, pages: 11, size: "83 KB",
      title: t("Guide to Writing a Resolution", "Οδηγός σύνταξης ψηφίσματος"),
      desc: t("What a resolution is, its three parts, and how to write strong introductory and operative clauses.", "Τι είναι ένα ψήφισμα, τα τρία μέρη του και πώς γράφονται καλές εισαγωγικές και διατακτικές ρήτρες.") },
    { file: "resolution-phrases.pdf", eyp: true, pages: 4, size: "45 KB",
      title: t("Resolution Phrases", "Φράσεις ψηφίσματος"),
      desc: t("The list of opening phrases for introductory and operative clauses. Keep it open while you write.", "Η λίστα με τις φράσεις έναρξης για εισαγωγικές και διατακτικές ρήτρες. Κράτα τη δίπλα σου όσο γράφεις.") },
  ],
  chairs: [
    { file: "chairs-guide-committee-work.pdf", eyp: true, pages: 32, size: "443 KB",
      title: t("Chairs' Guide to Committee Work", "Οδηγός συντονιστών για τη δουλειά της επιτροπής"),
      desc: t("European Youth Parliament handbook on structuring committee work, brainstorming, facilitating discussion and feedback.", "Εγχειρίδιο του Ευρωπαϊκού Κοινοβουλίου Νέων για την οργάνωση της επιτροπής, τον καταιγισμό ιδεών, τη διευκόλυνση της συζήτησης και την ανατροφοδότηση.") },
    { file: "teambuilding.pdf", eyp: true, pages: 21, size: "3.6 MB",
      title: t("Teambuilding Handbook (2004)", "Εγχειρίδιο teambuilding (2004)"),
      desc: t("European Youth Parliament handbook of teambuilding games, each with step-by-step instructions and the equipment needed (2004 edition, scanned).", "Εγχειρίδιο παιχνιδιών teambuilding του Ευρωπαϊκού Κοινοβουλίου Νέων, με οδηγίες βήμα προς βήμα και τα απαραίτητα υλικά (έκδοση 2004, σκαναρισμένο).") },
    { file: "teambuilding-games.pdf", eyp: true, pages: 16, size: "2.3 MB",
      title: t("Teambuilding Games (2005)", "Παιχνίδια teambuilding (2005)"),
      desc: t("Updated edition with an index: name games, warm-ups, energisers, trust and problem-solving games (2005 edition, scanned).", "Ενημερωμένη έκδοση με ευρετήριο: παιχνίδια γνωριμίας, ζεστάματος, ενέργειας, εμπιστοσύνης και επίλυσης προβλημάτων (έκδοση 2005, σκαναρισμένο).") },
  ],
};

// ---------- Schedule (provisional) ----------
const SCHEDULE = [
  { date: "2026-11-20", label: t("Fri 20 Nov", "Παρ 20 Νοε"), items: [
    ["15:00", t("Arrival and registration", "Άφιξη και εγγραφές"), t("Pick up your badge and conference pack.", "Παραλαβή καρτελάκι και φακέλου συνεδρίου.")],
    ["16:00", t("Opening ceremony", "Τελετή έναρξης"), t("Welcome speeches and guests in the main hall.", "Χαιρετισμοί και προσκεκλημένοι στην αίθουσα τελετών.")],
    ["17:30", t("Ice-breakers", "Γνωριμία"), t("Meet your committee and your chairs.", "Γνωρίστε την επιτροπή και τους συντονιστές σας.")],
    ["18:00", t("Committee session I", "1η συνεδρίαση επιτροπών"), t("Introducing the topic and first positions.", "Παρουσίαση του θέματος και πρώτες θέσεις.")],
    ["20:00", t("End of day 1", "Λήξη 1ης ημέρας"), null],
  ]},
  { date: "2026-11-21", label: t("Sat 21 Nov", "Σάβ 21 Νοε"), items: [
    ["09:00", t("Committee session II", "2η συνεδρίαση επιτροπών"), t("Debate and lobbying.", "Συζήτηση και διαπραγματεύσεις.")],
    ["11:00", t("Break", "Διάλειμμα"), null],
    ["11:30", t("Committee session III", "3η συνεδρίαση επιτροπών"), t("Drafting the committee's proposal.", "Σύνταξη της πρότασης της επιτροπής.")],
    ["13:30", t("Lunch", "Γεύμα"), null],
    ["14:30", t("Committee session IV", "4η συνεδρίαση επιτροπών"), t("Finalising and submitting proposals.", "Οριστικοποίηση και κατάθεση προτάσεων.")],
    ["17:30", t("End of day 2", "Λήξη 2ης ημέρας"), null],
  ]},
  { date: "2026-11-22", label: t("Sun 22 Nov", "Κυρ 22 Νοε"), items: [
    ["09:30", t("General Assembly I", "Γενική Συνέλευση Ι"), t("Committees present, debate and vote on proposals.", "Οι επιτροπές παρουσιάζουν, συζητούν και ψηφίζουν τις προτάσεις.")],
    ["11:30", t("Break", "Διάλειμμα"), null],
    ["12:00", t("General Assembly II", "Γενική Συνέλευση ΙΙ"), t("Final proposals and votes.", "Τελευταίες προτάσεις και ψηφοφορίες.")],
    ["14:00", t("Closing ceremony", "Τελετή λήξης"), t("Thanks, certificates and photos.", "Ευχαριστίες, βεβαιώσεις και φωτογραφίες.")],
  ]},
];

// ---------- Greek translations ----------
const EL = {
  "nav.about": "Σχετικά", "nav.how": "Πώς λειτουργεί", "nav.goals": "Στόχοι", "nav.join": "Συμμετοχή",
  "nav.history": "Ιστορικό", "nav.gallery": "Φωτογραφίες", "nav.faq": "Ερωτήσεις", "nav.contact": "Επικοινωνία",
  "hero.eyebrow": "20ή Σύνοδος · Επετειακή διοργάνωση",
  "hero.title": "Kalamari Model European Conference",
  "hero.h1": "Μπες στο <span>Ευρωπαϊκό Κοινοβούλιο</span>",
  "hero.sub": "Το 20ό Kalamari Model European Conference. Συζήτησε τα θέματα που διαμορφώνουν την Ευρώπη, γράψε πραγματικές προτάσεις και ψήφισέ τες, μαζί με περίπου 170 μαθητές από όλη την Ελλάδα.",
  "hero.lead": "Μπες στο Ευρωπαϊκό Κοινοβούλιο. Συζήτησε τα θέματα που διαμορφώνουν την Ευρώπη, γράψε πραγματικές προτάσεις και ψήφισέ τες, μαζί με περίπου 170 μαθητές από όλη την Ελλάδα.",
  "hero.when": "Πότε", "hero.date": "20–22 Νοεμβρίου 2026",
  "hero.where": "Πού", "hero.place": "Ελληνογαλλική Σχολή Καλαμαρί, Θεσσαλονίκη",
  "hero.lang": "Γλώσσες", "hero.langs": "Αγγλικά &amp; Γαλλικά",
  "cd.d": "ημέρες", "cd.h": "ώρες", "cd.m": "λεπτά",
  "hero.cta1": "Δήλωσε συμμετοχή", "hero.cta2": "Δες τις προηγούμενες συνόδους",
  "stat.title": "Το KMEC σε αριθμούς", "stat.1": "σύνοδοι από το πρώτο KMEC", "stat.2": "μαθητές-σύνεδροι κάθε χρόνο",
  "stat.3": "επιτροπές: 6 αγγλόφωνες, 1 γαλλόφωνη", "stat.4": "ημέρες διαλόγου, με κατάληξη τη Γενική Συνέλευση",
  "about.eyebrow": "Σχετικά με το KMEC",
  "about.title": "Ένα μαθητικό κοινοβούλιο για τα μεγάλα ερωτήματα της Ευρώπης",
  "about.p1": "Το KMEC είναι ένα ως επί το πλείστον αγγλόφωνο μαθητικό συνέδριο που προσομοιάζει τη λειτουργία του <strong>Ευρωπαϊκού Κοινοβουλίου</strong>. Διοργανώνεται από απόφοιτους της Ελληνογαλλικής Σχολής Καλαμαρί, με τη στήριξη του Συλλόγου Αποφοίτων της Σχολής.",
  "about.p2": "Οι σύνεδροι πραγματεύονται ζητήματα ισότητας και κοινωνικού, πολιτικού, πολιτιστικού και περιβαλλοντικού χαρακτήρα, με έμφαση στη <strong>γεωπολιτική</strong>, τα <strong>ανθρώπινα δικαιώματα</strong> και την <strong>αειφόρο ανάπτυξη</strong>.",
  "about.p3": "Απευθύνεται σε μαθητές Γυμνασίου και Λυκείου του Καλαμαρί, άλλων σχολείων της Κεντρικής Μακεδονίας και όλης της Ελλάδας. Για πολλούς είναι το πρώτο τους συνέδριο.",
  "how.eyebrow": "Πώς λειτουργεί", "how.title": "Από την επιτροπή στη Γενική Συνέλευση",
  "how.s1t": "Μπες σε μια επιτροπή", "how.s1": "Οι σύνεδροι χωρίζονται σε επιτροπές, καθεμία με το δικό της θέμα ευρωπαϊκού ενδιαφέροντος.",
  "how.s2t": "Συζήτησε και μοιράσου ιδέες", "how.s2": "Με την καθοδήγηση έμπειρων συντονιστών, ερευνάς, συζητάς και ακούς άλλες οπτικές.",
  "how.s3t": "Γράψε μια πρόταση", "how.s3": "Μέσα από παραγωγικό διάλογο, κάθε επιτροπή καταλήγει σε προτάσεις για ένα κρίσιμο ζήτημα της Ευρώπης.",
  "how.s4t": "Ψήφισε στη Γενική Συνέλευση", "how.s4": "Οι επιτροπές παρουσιάζουν τις προτάσεις τους, ασκούν εποικοδομητική κριτική στις άλλες και ψηφίζουν, όπως στο Ευρωπαϊκό Κοινοβούλιο.",
  "goals.eyebrow": "Γιατί το κάνουμε", "goals.title": "Οι στόχοι του KMEC",
  "g1t": "Ουσιαστικός διάλογος", "g1": "Ένα ασφαλές περιβάλλον για ανταλλαγή απόψεων και έκφραση προσωπικών πεποιθήσεων. Σε μια εποχή διαρκούς πόλωσης, η εύρεση κοινού εδάφους μετράει περισσότερο από ποτέ.",
  "g2t": "Κριτική σκέψη", "g2": "Ακόνισε την κρίση σου εξετάζοντας ζητήματα που αφορούν άμεσα τους νέους.",
  "g3t": "Ενημέρωση", "g3": "Μάθε για τρέχοντα ζητήματα που αφορούν την Ευρώπη, την Ελλάδα και εσένα, και εξασκήσου στην έρευνα και τη συζήτηση.",
  "g4t": "Επίλυση προβλημάτων", "g4": "Καλλιέργησε την αναλυτική σου ικανότητα αναζητώντας λύσεις για φλέγοντα κοινωνικά ζητήματα.",
  "g5t": "Γλώσσες", "g5": "Εξασκήσου στα αγγλικά και τα γαλλικά σε πραγματικές συνθήκες.",
  "ng.title": "Νέοι στόχοι για τα 20 μας χρόνια",
  "ng1": "<strong>Περισσότερα σχολεία, περισσότερες φωνές.</strong> Θέλουμε περισσότερους μαθητές από άλλα σχολεία, ώστε να ακουστούν διαφορετικές οπτικές.",
  "ng2": "<strong>Σχολεία εκτός πόλης.</strong> Προσκαλούμε περισσότερα σχολεία από την επαρχία και στοχεύουμε στη μερική κάλυψη των εξόδων μετακίνησης και διαμονής των μαθητών τους.",
  "ng3": "<strong>Καλύτερη εμπειρία.</strong> Βελτιωμένες παροχές για κάθε συμμετέχοντα και επετειακό αναμνηστικό έντυπο υλικό.",
  "ng4": "<strong>Ευρύτερες συνεργασίες.</strong> Συνεργασία με την Περιφέρεια Κεντρικής Μακεδονίας ώστε να συμμετέχουν όσο το δυνατόν περισσότερα σχολεία.",
  "join.eyebrow": "Συμμετοχή", "join.title": "Ποιοι μπορούν να συμμετάσχουν;",
  "r1t": "Μαθητές", "r1": "Μαθητές Γυμνασίου και Λυκείου από κάθε σχολείο, με ή χωρίς εμπειρία σε συνέδρια. Έλα ως σύνεδρος και εκπροσώπησε την επιτροπή σου.",
  "r2t": "Σχολεία &amp; καθηγητές", "r2": "Φέρτε μια ομάδα από το σχολείο σας. Οι καθηγητές συνοδεύουν τους μαθητές τους και είναι ευπρόσδεκτοι σε όλη τη διάρκεια του συνεδρίου.",
  "r3t": "Έμπειροι μαθητές", "r3": "Μεγαλύτεροι μαθητές και απόφοιτοι στελεχώνουν το συνέδριο ως συντονιστές, μέλη του προεδρείου ή της δημοσιογραφικής ομάδας.",
  "join.note": "Θέλετε να φέρετε το σχολείο σας στο 20ό KMEC; Δηλώστε συμμετοχή παρακάτω και η οργανωτική επιτροπή θα επικοινωνήσει μαζί σας.",
  "join.btn": "Δηλώστε συμμετοχή",
  "hist.eyebrow": "Η ιστορία μας", "hist.title": "19 σύνοδοι, και συνεχίζουμε",
  "hist.lede": "Το KMEC ξεκίνησε ως πρωτοβουλία μαθητών του Λυκείου, σε συνεργασία με αποφοίτους, για να εξοικειωθούν οι νεότεροι μαθητές με τα αγγλόφωνα μαθητικά συνέδρια. Με τα χρόνια έγινε ένα περιφερειακό συνέδριο, με φιλοξενούμενα σχολεία από τη Θεσσαλονίκη, το Σουφλί και την Αλεξανδρούπολη, και την επίσημη υποστήριξη του Γραφείου του Ευρωπαϊκού Κοινοβουλίου στην Ελλάδα.",
  "hist.src": "Όλο το αρχείο στην ιστοσελίδα της Σχολής:",
  "vid.eyebrow": "Δες", "vid.title": "Το KMEC σε βίντεο",
  "news.eyebrow": "Διάβασε", "news.title": "19th KMEC News",
  "news.p": "Ένας 16σέλιδος φωτογραφικός απολογισμός του περσινού συνεδρίου, με ευχαριστίες σε όλους όσους συνέβαλαν.",
  "news.link": "Άνοιγμα PDF ↗",
  "gal.eyebrow": "Φωτογραφίες", "gal.title": "Στιγμές από προηγούμενες συνόδους",
  "faq.eyebrow": "Ερωτήσεις", "faq.title": "Συχνές ερωτήσεις",
  "q1": "Χρειάζομαι προηγούμενη εμπειρία σε συνέδρια;", "a1": "Όχι. Το KMEC είναι σχεδιασμένο ως πρώτη συνεδριακή εμπειρία. Μεγαλύτεροι μαθητές και απόφοιτοι συντονίζουν τις επιτροπές και καθοδηγούν τους νέους συνέδρους.",
  "q2": "Σε ποια γλώσσα γίνεται το συνέδριο;", "a2": "Κυρίως στα αγγλικά. Υπάρχουν έξι αγγλόφωνες επιτροπές και μία γαλλόφωνη.",
  "q3": "Ποιοι μπορούν να συμμετάσχουν;", "a3": "Μαθητές Γυμνασίου και Λυκείου, από την Ελληνογαλλική Σχολή Καλαμαρί και από κάθε άλλο σχολείο, εντός ή εκτός Κεντρικής Μακεδονίας.",
  "q4": "Ποια θέματα συζητιούνται;", "a4": "Ζητήματα που αφορούν την Ευρώπη: ισότητα, κοινωνικά, πολιτικά, πολιτιστικά και περιβαλλοντικά θέματα, με έμφαση στη γεωπολιτική, τα ανθρώπινα δικαιώματα και την αειφόρο ανάπτυξη. Δες τα επτά φετινά θέματα στην ενότητα <a href=\"#committees\">Επιτροπές</a>.",
  "q5": "Το σχολείο μας είναι μακριά από τη Θεσσαλονίκη. Μπορούμε να έρθουμε;", "a5": "Ναι, και το θέλουμε ιδιαίτερα. Φέτος στοχεύουμε στη μερική κάλυψη των εξόδων μετακίνησης και διαμονής για μαθητές σχολείων εκτός πόλης. Επικοινωνήστε μαζί μας για περισσότερα.",
  "q6": "Πώς δηλώνει συμμετοχή το σχολείο μου;", "a6": "Ο συνοδός καθηγητής συμπληρώνει τη φόρμα εγγραφής παραπάνω, μία φορά ανά σχολείο. Στη συνέχεια επιβεβαιώνουμε τις θέσεις και στέλνουμε τα επόμενα βήματα με email.",
  "ct.eyebrow": "Επικοινωνία", "ct.title": "Η οργανωτική επιτροπή",
  "ct.lede": "Ερωτήσεις, δηλώσεις συμμετοχής ή ιδέες συνεργασίας; Γράψτε σε οποιονδήποτε από εμάς.",
  "p1": "Βασίλειος Καρφής", "p2": "Χρήστος Κουνάδης", "p3": "Δήμητρα Παπαδοπούλου", "p4": "Βασίλειος Παπαζάχος",
  "sup.eyebrow": "Με την υποστήριξη",
  "sup1": "Ελληνογαλλική Σχολή Καλαμαρί", "sup2": "Σύλλογος Αποφοίτων Σχολής Καλαμαρί",
  "sup3": "Γραφείο του Ευρωπαϊκού Κοινοβουλίου στην Ελλάδα (προηγούμενες σύνοδοι)",
  "ft.date": "20–22 Νοεμβρίου 2026", "ft.top": "Επιστροφή στην κορυφή ↑",
  "nav.com": "Επιτροπές", "nav.res": "Υλικό", "nav.glo": "Λεξιλόγιο",
  "glo.title": "Λέξεις που θα ακούσεις", "glo.lede": "Πρώτη φορά σε συνέδριο; Αυτοί είναι οι όροι που θα ακούσεις από την πρώτη μέρα.",
  "res.eyebrow": "Υλικό", "res.title": "Προετοιμασία για το KMEC",
  "res.lede": "Οδηγοί για να προετοιμαστείς, είτε είναι το πρώτο σου συνέδριο είτε συντονίζεις επιτροπή. Όλα τα αρχεία είναι PDF που ανοίγουν στον browser ή κατεβαίνουν.",
  "res.del": "Για συνέδρους", "res.chair": "Για συντονιστές",
  "nav.venue": "Τοποθεσία", "gal.stk": "σύνοδοι",
  "pr.eyebrow": "Καλό να ξέρετε", "pr.title": "Πρακτικές πληροφορίες",
  "pr.feeT": "Κόστος συμμετοχής", "pr.feeBig": "10€ ανά σύνεδρο", "pr.fee": "Το ίδιο για κάθε σύνεδρο, από όποιο σχολείο κι αν προέρχεται.",
  "pr.dressT": "Ενδυμασία", "pr.dressBig": "Επίσημη, όπως στο EYP", "pr.dress": "Η ίδια με τις συνόδους του Ευρωπαϊκού Κοινοβουλίου Νέων, αλλά επιτρέπεται και κάτι λίγο πιο χαλαρό.",
  "pr.foodT": "Φαγητό &amp; διαλείμματα", "pr.foodBig": "2 διαλείμματα με φαγητό", "pr.food": "Δύο μεγάλα διαλείμματα με φαγητό και μικρότερα διαλείμματα με καφέ, χυμό και σνακ.",
  "pr.certT": "Βεβαιώσεις", "pr.certBig": "Από το EYP", "pr.cert": "Κάθε σύνεδρος λαμβάνει βεβαιώσεις που εκδίδονται από το Ευρωπαϊκό Κοινοβούλιο Νέων.",
  "q7": "Πόσο κοστίζει;", "a7": "Το κόστος συμμετοχής είναι 10€ ανά σύνεδρο.",
  "q8": "Τι να φορέσω;", "a8": "Η ενδυμασία είναι η ίδια με τις συνόδους του Ευρωπαϊκού Κοινοβουλίου Νέων: επίσημη, αλλά επιτρέπεται και κάτι λίγο πιο χαλαρό.",
  "q9": "Παρέχεται φαγητό;", "a9": "Ναι. Υπάρχουν δύο μεγάλα διαλείμματα με φαγητό και μικρότερα διαλείμματα με καφέ, χυμό και σνακ.",
  "q10": "Παίρνουν βεβαίωση οι σύνεδροι;", "a10": "Ναι. Κάθε σύνεδρος λαμβάνει βεβαιώσεις που εκδίδονται από το Ευρωπαϊκό Κοινοβούλιο Νέων (EYP).",
  "reg.c4": "Κόστος συμμετοχής: 10€ ανά σύνεδρο",
  "ann.title": "Οι εγγραφές κλείνουν τη Δευτέρα 2 Νοεμβρίου.", "ann.link": "Δηλώστε συμμετοχή →",
  "reg.c5": "<strong>Προθεσμία: Δευτέρα 2 Νοεμβρίου 2026</strong>",
  "reg.priv": "<strong>Προστασία δεδομένων:</strong> χρησιμοποιούμε τα στοιχεία αυτής της φόρμας μόνο για να οργανώσουμε τη συμμετοχή του σχολείου σας στο KMEC 2026 και για να επικοινωνήσουμε με τον συνοδό καθηγητή. Τα βλέπει μόνο η οργανωτική επιτροπή. Δεν τα μοιραζόμαστε με κανέναν άλλον και τα διαγράφουμε μετά το συνέδριο. Ερωτήσεις: <a href=\"mailto:vkarfis1@gmail.com\">vkarfis1@gmail.com</a>",
  "q11": "Ποια είναι η προθεσμία εγγραφής;", "a11": "Δευτέρα 2 Νοεμβρίου 2026. Ο συνοδός καθηγητής πρέπει να συμπληρώσει τη φόρμα εγγραφής μέχρι το τέλος εκείνης της ημέρας.",
  "prep.eyebrow": "Πριν έρθεις", "prep.title": "Η λίστα σου",
  "prep.1t": "Δήλωσε το σχολείο σου", "prep.1": "Ο συνοδός καθηγητής συμπληρώνει τη φόρμα έως τη Δευτέρα 2 Νοεμβρίου.",
  "prep.2t": "Διάβασε το θέμα της επιτροπής σου", "prep.2": "Επτά επιτροπές, έξι στα αγγλικά και μία στα γαλλικά. Κάθε θέμα έχει σύντομη περιγραφή.",
  "prep.3t": "Μάθε πώς γράφεται ένα ψήφισμα", "prep.3": "Διάβασε τον Οδηγό σύνταξης ψηφίσματος και κράτα δίπλα σου τις Φράσεις ψηφίσματος.",
  "prep.4t": "Σκέψου τι θα φορέσεις", "prep.4": "Επίσημα, όπως στις συνόδους του Ευρωπαϊκού Κοινοβουλίου Νέων. Επιτρέπεται και κάτι λίγο πιο χαλαρό.",
  "prep.5t": "Δες το πρόγραμμα", "prep.5": "Τρεις μέρες, από την Παρασκευή 20 έως την Κυριακή 22 Νοεμβρίου. Οι ώρες είναι ακόμα προσωρινές.",
  "prep.6t": "Οργάνωσε τη διαδρομή", "prep.6": "Η σχολή βρίσκεται στην Πυλαία Θεσσαλονίκης. Πρόσθεσε τις ημερομηνίες στο ημερολόγιό σου.",
  "pos.title": "Διαδώστε το στο σχολείο σας", "pos.p": "Εκτυπώστε την αφίσα Α4 για τον πίνακα ανακοινώσεων ή μοιραστείτε τη με τους μαθητές. Ο κωδικός QR οδηγεί κατευθείαν σε αυτή την ιστοσελίδα.",
  "pos.en": "Αφίσα στα αγγλικά (PDF)", "pos.el": "Αφίσα στα ελληνικά (PDF)",
  "ven.eyebrow": "Τοποθεσία", "ven.title": "Πώς θα έρθετε στο KMEC", "ven.name": "Ελληνογαλλική Σχολή Καλαμαρί",
  "ven.addr": "Λεωφ. Γεωργικής Σχολής 44<br>555 35 Πυλαία, Θεσσαλονίκη", "ven.gmaps": "Οδηγίες (Google Maps)", "ven.amaps": "Apple Maps",
  "ven.n1": "<strong>Έρχεστε από εκτός Θεσσαλονίκης;</strong> Στείλτε email στους διοργανωτές πριν ταξιδέψετε και θα σας στείλουμε οδηγίες άφιξης για την ομάδα σας.",
  "ven.n2": "<strong>Χρειάζεστε στήριξη μετακίνησης;</strong> Επιλέξτε «Ναι» στη φόρμα εγγραφής και θα επικοινωνήσουμε μαζί σας.",
  "ven.n3": "<strong>Προσθέστε τις ημερομηνίες στο ημερολόγιό σας</strong> ώστε να μην τις χάσει η ομάδα σας.",
  "res.credit": "Όλοι οι οδηγοί αυτής της ενότητας είναι υλικό του <a href=\"https://eyp.org\" target=\"_blank\" rel=\"noopener\">Ευρωπαϊκού Κοινοβουλίου Νέων (EYP)</a> και κοινοποιούνται εδώ για εκπαιδευτικούς σκοπούς. Όλα τα δικαιώματα ανήκουν στο EYP.", "nav.sch": "Πρόγραμμα", "nav.reg": "Εγγραφή",
  "com.eyebrow": "Επιτροπές", "com.title": "Επτά επιτροπές, μία Ευρώπη",
  "com.lede": "Έξι επιτροπές λειτουργούν στα αγγλικά και μία στα γαλλικά, με έμπειρους συντονιστές. Τα αστέρια δείχνουν τη δυσκολία κάθε θέματος, ώστε να επιλέξεις αυτό που σου ταιριάζει.",
  "sch.eyebrow": "Πρόγραμμα", "sch.title": "Τρεις μέρες στο KMEC", "sch.badge": "Προσωρινό",
  "sch.lede": "Το τελικό πρόγραμμα θα σταλεί στα σχολεία που συμμετέχουν πριν από το συνέδριο.",
  "reg.eyebrow": "Εγγραφές", "reg.title": "Δηλώστε συμμετοχή για το σχολείο σας",
  "reg.p1": "Μία φόρμα ανά σχολείο, από τον συνοδό καθηγητή. Πείτε μας πόσους μαθητές θέλετε να φέρετε και ποιες γλώσσες προτιμούν. Θα επιβεβαιώσουμε τις θέσεις με email.",
  "reg.c1": "Ευπρόσδεκτοι μαθητές Γυμνασίου και Λυκείου", "reg.c2": "Δεν απαιτείται προηγούμενη εμπειρία",
  "reg.c3": "Σχολεία εκτός Θεσσαλονίκης: ρωτήστε μας για στήριξη στη μετακίνηση",
};

const UI = {
  en: { tba: "To be announced", topic: "Topic", chairs: "Chairs", guide: "Study guide ↗", comEN: "English", comFR: "French", pages: "pages", calAdd: "Add to calendar", calApple: "Apple Calendar (iPhone, Mac)", calIcs: "Other calendar (.ics file)", level: "Difficulty", readTopic: "Read the topic",
    annClosed: "Registration for KMEC 2026 is now closed. Thank you to every school that signed up!", regSoon: "The registration form opens soon", regSoonP: "Until it does, schools can register their interest by email. We will reply with the details.", regMail: "Email the organisers", regReady: "Ready to register?", regReadyP: "The registration form opens in a new tab. Fill it in once per school before Monday 2 November.", regOpen: "Open the registration form ↗", regSubject: "KMEC 2026 – School registration",
    all: "All", session: (n) => `${n}th`, video: (n) => `${n}th session`, more: "Show earlier sessions", less: "Show fewer", started: "KMEC 2026 is happening now!", photo: (n) => `${n}th session` },
  el: { tba: "Θα ανακοινωθεί", topic: "Θέμα", chairs: "Συντονιστές", guide: "Οδηγός μελέτης ↗", comEN: "Αγγλικά", comFR: "Γαλλικά", pages: "σελίδες", calAdd: "Προσθήκη στο ημερολόγιο", calApple: "Apple Calendar (iPhone, Mac)", calIcs: "Άλλο ημερολόγιο (αρχείο .ics)", level: "Δυσκολία", readTopic: "Διάβασε το θέμα",
    annClosed: "Οι εγγραφές για το KMEC 2026 έκλεισαν. Ευχαριστούμε όλα τα σχολεία που δήλωσαν συμμετοχή!", regSoon: "Η φόρμα εγγραφής ανοίγει σύντομα", regSoonP: "Μέχρι τότε, τα σχολεία μπορούν να δηλώσουν ενδιαφέρον με email. Θα σας απαντήσουμε με όλες τις λεπτομέρειες.", regMail: "Email στους διοργανωτές", regReady: "Έτοιμοι για εγγραφή;", regReadyP: "Η φόρμα εγγραφής ανοίγει σε νέα καρτέλα. Συμπληρώστε τη μία φορά ανά σχολείο έως τη Δευτέρα 2 Νοεμβρίου.", regOpen: "Άνοιγμα της φόρμας εγγραφής ↗", regSubject: "KMEC 2026 – Δήλωση συμμετοχής σχολείου",
    all: "Όλες", session: (n) => `${n}η`, video: (n) => `${n}η Σύνοδος`, more: "Προηγούμενες σύνοδοι", less: "Λιγότερες", started: "Το KMEC 2026 είναι σε εξέλιξη!", photo: (n) => `${n}η Σύνοδος` },
};

// ---------- Language ----------
let lang = "en";
const EN = {};
document.querySelectorAll("[data-i18n]").forEach((el) => { EN[el.dataset.i18n] = el.innerHTML; });

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  const dict = l === "el" ? EL : EN;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v != null) el.innerHTML = v;
  });
  document.getElementById("langBtn").textContent = l === "el" ? "EN" : "ΕΛ";
  try { localStorage.setItem("kmec-lang", l); } catch (e) {}
  renderTimeline();
  renderVideos();
  renderCommittees();
  renderPicker();
  renderGlossary();
  renderCalendar();
  renderResources();
  renderSchedule();
  renderRegister();
  renderAnnounce();
  renderFilters();
  renderGallery();
}
document.getElementById("langBtn").addEventListener("click", () => setLang(lang === "en" ? "el" : "en"));

// ---------- EU star ring logo ----------
(function stars() {
  const g = document.getElementById("ring");
  const pts = (cx, cy, R, r) => Array.from({ length: 10 }, (_, i) => {
    const a = (Math.PI / 5) * i - Math.PI / 2, rad = i % 2 ? r : R;
    return `${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
  let s = "";
  for (let i = 0; i < 12; i++) {
    const a = (Math.PI / 6) * i;
    s += `<polygon points="${pts(20 + 13 * Math.cos(a), 20 + 13 * Math.sin(a), 2.6, 1.1)}"/>`;
  }
  g.innerHTML = s;
})();

// ---------- Mobile nav ----------
const burger = document.getElementById("burger");
const links = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => { if (e.target.tagName === "A") { links.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });

// ---------- Countdown ----------
function tick() {
  const ms = START - new Date();
  const cd = document.getElementById("countdown");
  if (ms <= 0) { cd.innerHTML = `<div><b>★</b><span>${UI[lang].started}</span></div>`; return; }
  const d = Math.floor(ms / 864e5), h = Math.floor((ms % 864e5) / 36e5), m = Math.floor((ms % 36e5) / 6e4);
  document.getElementById("cd-d").textContent = d;
  document.getElementById("cd-h").textContent = String(h).padStart(2, "0");
  document.getElementById("cd-m").textContent = String(m).padStart(2, "0");
}
tick();
setInterval(tick, 30000);

// ---------- Timeline ----------
let timelineOpen = false;
function renderTimeline() {
  const ol = document.getElementById("timeline");
  ol.innerHTML = SESSIONS.map((s) => `
    <li class="tl${s.next ? " tl--next" : ""}">
      <div class="tl__badge">${s.n}</div>
      <div class="tl__body">
        <div class="tl__date">${s.date[lang]}</div>
        <h3>${s.title[lang]}</h3>
        <p>${s.text[lang]}</p>
        <div class="tl__chips">${s.chips[lang].map((c) => `<span class="chip">${c}</span>`).join("")}</div>
      </div>
    </li>`).join("");
  ol.classList.toggle("collapsed", !timelineOpen);
  let btn = document.getElementById("tlMore");
  if (!btn) {
    btn = document.createElement("button");
    btn.id = "tlMore"; btn.className = "show-more"; btn.type = "button";
    ol.after(btn);
    btn.addEventListener("click", () => { timelineOpen = !timelineOpen; renderTimeline(); });
  }
  btn.textContent = timelineOpen ? UI[lang].less : UI[lang].more;
}

// ---------- Videos (load YouTube only on click) ----------
function renderVideos() {
  document.getElementById("videos-grid").innerHTML = VIDEOS.map((v) => `
    <div class="video">
      <div class="video__frame${v.zoom ? " video__frame--zoom" : ""}">
        <button type="button" data-yt="${v.id}" aria-label="Play video: ${UI[lang].video(v.n)}"
          style="background-image:url('https://i.ytimg.com/vi/${v.id}/hqdefault.jpg')"></button>
      </div>
      <p>KMEC · ${UI[lang].video(v.n)}</p>
    </div>`).join("");
}
document.getElementById("videos-grid").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-yt]");
  if (!b) return;
  const f = document.createElement("iframe");
  f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1`;
  f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
  f.allowFullscreen = true;
  f.title = "KMEC video";
  b.replaceWith(f);
});

// ---------- Gallery ----------
let filter = "all";
let shown = [];
function renderFilters() {
  const opts = ["all", ...GALLERY.map((g) => g.n)];
  document.getElementById("filters").innerHTML = opts.map((o) =>
    `<button type="button" role="tab" data-f="${o}" aria-selected="${String(o) === String(filter)}">${o === "all" ? UI[lang].all : UI[lang].session(o)}</button>`).join("");
}
function renderGallery() {
  shown = filter === "all"
    ? GALLERY.flatMap((g) => g.files.slice(0, 4).map((f) => ({ f, n: g.n })))
    : GALLERY.find((g) => String(g.n) === String(filter)).files.map((f) => ({ f, n: Number(filter) }));
  const tilt = [-3, 2, -1.5, 3, -2.5, 1.5];
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = shown.map((p, i) =>
    `<button type="button" data-i="${i}" style="--r:${tilt[i % tilt.length]}deg;--i:${i}"><img src="assets/img/${p.f}" alt="KMEC ${UI[lang].photo(p.n)}" loading="lazy"><span class="polaroid__cap" aria-hidden="true">${UI[lang].photo(p.n)}</span></button>`).join("");
  stickPhotos(grid);
}
// Scrapbook entrance: photos get "stuck" on one by one the first time the board scrolls into view,
// and again after each filter change. The delay is dropped once they land so hover stays snappy.
let boardSeen = false, settleTimer;
function stickPhotos(grid) {
  grid.classList.remove("stuck", "settled");
  if (!boardSeen) return;
  void grid.offsetWidth; // restart the transition
  grid.classList.add("stuck");
  clearTimeout(settleTimer);
  settleTimer = setTimeout(() => grid.classList.add("settled"), 1600);
}
if ("IntersectionObserver" in window) {
  const boardIo = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    boardSeen = true;
    document.getElementById("scrapBoard").classList.add("stuck");
    stickPhotos(document.getElementById("galleryGrid"));
    boardIo.disconnect();
  }, { threshold: 0.15 });
  boardIo.observe(document.getElementById("scrapBoard"));
} else {
  boardSeen = true;
  document.getElementById("scrapBoard").classList.add("stuck");
}
document.getElementById("filters").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-f]");
  if (!b) return;
  filter = b.dataset.f;
  renderFilters();
  renderGallery();
});

// ---------- Lightbox ----------
const lb = document.getElementById("lightbox"), lbImg = document.getElementById("lbImg"), lbCap = document.getElementById("lbCap");
let cur = 0;
let lbTimer;
function openLb(i, fromKey) {
  const wasOpen = lb.classList.contains("open");
  cur = (i + shown.length) % shown.length;
  lbImg.src = `assets/img/${shown[cur].f}`;
  lbImg.alt = lbCap.textContent = `KMEC · ${UI[lang].photo(shown[cur].n)}`;
  clearTimeout(lbTimer);
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  // no crossfade for arrow keys: people step through quickly
  if (wasOpen && !fromKey) lbImg.animate?.([{ opacity: 0 }, { opacity: 1 }], { duration: 150, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
  else requestAnimationFrame(() => requestAnimationFrame(() => lb.classList.add("open")));
}
function closeLb() {
  lb.classList.remove("open");
  document.body.style.overflow = "";
  lbTimer = setTimeout(() => { lb.hidden = true; }, 150);
}
document.getElementById("galleryGrid").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-i]");
  if (b) openLb(Number(b.dataset.i));
});
document.getElementById("lbClose").onclick = closeLb;
document.getElementById("lbPrev").onclick = () => openLb(cur - 1);
document.getElementById("lbNext").onclick = () => openLb(cur + 1);
lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") openLb(cur - 1, true);
  if (e.key === "ArrowRight") openLb(cur + 1, true);
});

// ---------- Committees ----------
let pickLang = "all", pickLevel = "any";
function renderPicker(animate) {
  const p = PICK[lang];
  const group = (key, label, opts, cur) => `
    <div class="picker__group" role="group" aria-label="${label}">
      <span class="picker__label">${label}</span>
      ${opts.map(([v, txt]) => `<button type="button" data-${key}="${v}" aria-pressed="${v === cur}">${txt}</button>`).join("")}
    </div>`;
  document.getElementById("committeePicker").innerHTML =
    group("lang", p.lang, [["all", p.all], ["EN", p.en], ["FR", p.fr]], pickLang) +
    group("level", p.level, [["any", p.any], ["easy", p.easy], ["mid", p.mid], ["hard", p.hard]], pickLevel) +
    `<p class="picker__count" id="pickCount" aria-live="polite"></p>`;
  applyPicker(animate);
}
function applyPicker(animate) {
  let n = 0;
  document.querySelectorAll("#committeesGrid .committee").forEach((el) => {
    const lv = Number(el.dataset.level), band = BANDS[pickLevel];
    const ok = (pickLang === "all" || el.dataset.lang === pickLang) && (!band || (lv >= band[0] && lv <= band[1]));
    el.hidden = !ok;
    el.classList.remove("enter");
    if (ok && animate) {
      void el.offsetWidth; // restart the animation
      el.style.setProperty("--i", n);
      el.classList.add("enter");
    }
    if (ok) n++;
  });
  document.getElementById("pickCount").textContent = n ? PICK[lang].count(n) : PICK[lang].none;
}
document.getElementById("committeePicker").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.lang) pickLang = b.dataset.lang;
  if (b.dataset.level) pickLevel = b.dataset.level;
  renderPicker(true);
});

function renderGlossary() {
  document.getElementById("glossaryList").innerHTML = GLOSSARY.map((g) =>
    `<div><dt>${g.term[lang]}</dt><dd>${g.def[lang]}</dd></div>`).join("");
}

function renderCommittees() {
  const u = UI[lang];
  document.getElementById("committeesGrid").innerHTML = COMMITTEES.map((c) => {
    const fr = c.lang === "FR";
    const stars = "★".repeat(c.level) + `<span class="off">${"★".repeat(5 - c.level)}</span>`;
    return `
    <article class="committee${fr ? " committee--fr" : ""}" data-lang="${c.lang}" data-level="${c.level}">
      <div class="committee__top">
        <span class="committee__lang">${fr ? "FR · " + u.comFR : "EN · " + u.comEN}</span>
        <span class="stars" title="${u.level}: ${c.level}/5" aria-label="${u.level}: ${c.level}/5">${stars}</span>
      </div>
      <b class="committee__code">${c.code}</b>
      <p class="committee__name">${c.name[lang]}</p>
      <h3 class="committee__topic">${c.title[lang]}</h3>
      ${c.subtitle ? `<p class="committee__sub">${c.subtitle[lang]}</p>` : ""}
      <details class="committee__more">
        <summary>${u.readTopic}</summary>
        <p lang="${fr ? "fr" : "en"}">${c.text}</p>
      </details>
      <p class="committee__chairs"><span>${u.chairs}:</span> ${c.chairs || `<span class="tba">${u.tba}</span>`}</p>
      ${c.guide ? `<a class="committee__guide" href="${c.guide}" target="_blank" rel="noopener">${u.guide}</a>` : ""}
    </article>`;
  }).join("");
}

// ---------- Schedule ----------
let dayIdx = Math.max(0, SCHEDULE.findIndex((d) => d.date === new Date().toISOString().slice(0, 10)));
function renderSchedule() {
  document.getElementById("dayTabs").innerHTML = SCHEDULE.map((d, i) =>
    `<button type="button" role="tab" data-day="${i}" aria-selected="${i === dayIdx}"><b>${lang === "el" ? "Ημέρα" : "Day"} ${i + 1}</b><span>${d.label[lang]}</span></button>`).join("");
  document.getElementById("agenda").innerHTML = SCHEDULE[dayIdx].items.map(([time, title, desc], i) => `
    <li style="--i:${i}"><time>${time}</time><div><h3>${title[lang]}</h3>${desc ? `<p>${desc[lang]}</p>` : ""}</div></li>`).join("");
}
document.getElementById("dayTabs").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-day]");
  if (!b) return;
  dayIdx = Number(b.dataset.day);
  renderSchedule();
});

// ---------- Resources ----------
function renderResources() {
  const u = UI[lang];
  const item = (r) => `
    <li><a class="res" href="assets/docs/${r.file}" target="_blank" rel="noopener">
      <span class="res__icon" aria-hidden="true">PDF</span>
      <span class="res__body"><b>${r.title[lang]}</b><span>${r.desc[lang]}</span>
      <small>${r.pages} ${u.pages} · ${r.size}${r.eyp ? ` · <span class="res__eyp">European Youth Parliament</span>` : ""}</small></span>
      <span class="res__go" aria-hidden="true">↗</span>
    </a></li>`;
  document.getElementById("resDelegates").innerHTML = RESOURCES.delegates.map(item).join("");
  document.getElementById("resChairs").innerHTML = RESOURCES.chairs.map(item).join("");
}

// ---------- Add to calendar ----------
const CAL = {
  title: "KMEC 2026 – 20th Kalamari Model European Conference",
  details: "20th Kalamari Model European Conference, a student simulation of the European Parliament. https://hanocybous.github.io/kmec/",
  location: "Hellenic-French School of Kalamari, Georgikis Scholis Avenue 44, 555 35 Pylaia, Thessaloniki, Greece",
};
function renderCalendar() {
  const u = UI[lang], e = encodeURIComponent;
  const google = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${e(CAL.title)}&dates=20261120/20261123&details=${e(CAL.details)}&location=${e(CAL.location)}`;
  const outlook = `https://outlook.live.com/calendar/0/action/compose?subject=${e(CAL.title)}&startdt=2026-11-20&enddt=2026-11-23&allday=true&body=${e(CAL.details)}&location=${e(CAL.location)}`;
  document.querySelectorAll(".cal-slot").forEach((slot) => {
    slot.innerHTML = `
      <details class="cal">
        <summary class="btn btn--ghost btn--sm">${u.calAdd}</summary>
        <div class="cal__menu">
          <a href="${google}" target="_blank" rel="noopener">Google Calendar</a>
          <a href="assets/kmec-2026.ics" download>${u.calApple}</a>
          <a href="${outlook}" target="_blank" rel="noopener">Outlook.com</a>
          <a href="assets/kmec-2026.ics" download>${u.calIcs}</a>
        </div>
      </details>`;
  });
}
document.addEventListener("click", (ev) => {
  document.querySelectorAll("details.cal[open]").forEach((d) => { if (!d.contains(ev.target)) d.open = false; });
});

// ---------- Announcement bar ----------
const REG_CLOSES = new Date("2026-11-03T00:00:00+02:00"); // end of Monday 2 November, Greek time
function renderAnnounce() {
  if (new Date() < REG_CLOSES) return; // the default text from the page/translations is right
  document.getElementById("annText").textContent = UI[lang].annClosed;
}

// ---------- Registration ----------
function renderRegister() {
  const u = UI[lang], box = document.getElementById("registerBox");
  if (FORM_URL) {
    box.innerHTML = `
      <div class="register__soon">
        <h3>${u.regReady}</h3>
        <p>${u.regReadyP}</p>
        <a class="btn" href="${FORM_URL}" target="_blank" rel="noopener">${u.regOpen}</a>
      </div>`;
  } else {
    const mail = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(u.regSubject)}`;
    box.innerHTML = `
      <div class="register__soon">
        <h3>${u.regSoon}</h3>
        <p>${u.regSoonP}</p>
        <a class="btn" href="${mail}">${u.regMail}</a>
      </div>`;
  }
}

// ---------- Reveal on scroll ----------
const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: 0.12 }) : null;
// Each section's parts rise in one after another.
if (io && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".section").forEach((sec) => {
    sec.querySelectorAll(":scope > .wrap > *, :scope > :not(.wrap), .steps > li, .faq > details, .practical > .pr, .goals__list > div, .roles > .role, .team > .person, .checklist > li").forEach((el, i) => {
      el.classList.add("reveal");
      el.style.setProperty("--d", `${Math.min(i, 6) * 70}ms`);
      io.observe(el);
    });
  });
}

// ---------- Nav: highlight the section on screen ----------
if ("IntersectionObserver" in window) {
  const navLinks = [...document.querySelectorAll(".nav__menu a[href^='#']")];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      navLinks.forEach((a) => a.toggleAttribute("aria-current", a.getAttribute("href") === `#${en.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  navLinks.forEach((a) => { const s = document.querySelector(a.getAttribute("href")); if (s) spy.observe(s); });
}

// ---------- Init ----------
let saved = null;
try { saved = localStorage.getItem("kmec-lang"); } catch (e) {}
if (!saved && (navigator.language || "").startsWith("el")) saved = "el";
setLang(saved === "el" ? "el" : "en");
