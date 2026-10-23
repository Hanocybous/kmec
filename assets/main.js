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

const VIDEOS = [
  { id: "589rcE4R3WM", n: 16 },
  { id: "tEGMFp-XYmU", n: 15 },
  { id: "XX-naBT-MT0", n: 13 },
  { id: "G-HIyEHSGFU", n: 12 },
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
const FORM_URL = "";
const FALLBACK_EMAIL = "vkarfis1@gmail.com";

// ---------- Committees ----------
// Fill in name/topic/chairs when announced. guide = link to a study guide PDF (optional).
// Leave a field as null to show "to be announced".
const COMMITTEES = [
  { lang: "EN", name: null, topic: null, chairs: null, guide: null },
  { lang: "EN", name: null, topic: null, chairs: null, guide: null },
  { lang: "EN", name: null, topic: null, chairs: null, guide: null },
  { lang: "EN", name: null, topic: null, chairs: null, guide: null },
  { lang: "EN", name: null, topic: null, chairs: null, guide: null },
  { lang: "EN", name: null, topic: null, chairs: null, guide: null },
  { lang: "FR", name: null, topic: null, chairs: null, guide: null },
];

// ---------- Schedule (provisional) ----------
const t = (en, el) => ({ en, el });
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
  "nav.history": "Προηγούμενες σύνοδοι", "nav.gallery": "Φωτογραφίες", "nav.faq": "Συχνές ερωτήσεις", "nav.contact": "Επικοινωνία",
  "hero.eyebrow": "20ή Σύνοδος · Επετειακή διοργάνωση",
  "hero.title": "Kalamari Model European Conference",
  "hero.lead": "Μπες στο Ευρωπαϊκό Κοινοβούλιο. Συζήτησε τα θέματα που διαμορφώνουν την Ευρώπη, γράψε πραγματικές προτάσεις και ψήφισέ τες, μαζί με περίπου 170 μαθητές από όλη την Ελλάδα.",
  "hero.when": "Πότε", "hero.date": "20–22 Νοεμβρίου 2026",
  "hero.where": "Πού", "hero.place": "Ελληνογαλλική Σχολή Καλαμαρί, Θεσσαλονίκη",
  "hero.lang": "Γλώσσες", "hero.langs": "Αγγλικά &amp; Γαλλικά",
  "cd.d": "ημέρες", "cd.h": "ώρες", "cd.m": "λεπτά",
  "hero.cta1": "Δήλωσε συμμετοχή", "hero.cta2": "Δες τις προηγούμενες συνόδους",
  "stat.1": "σύνοδοι από το πρώτο KMEC", "stat.2": "μαθητές-σύνεδροι κάθε χρόνο",
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
  "q4": "Ποια θέματα συζητιούνται;", "a4": "Ζητήματα που αφορούν την Ευρώπη: ισότητα, κοινωνικά, πολιτικά, πολιτιστικά και περιβαλλοντικά θέματα, με έμφαση στη γεωπολιτική, τα ανθρώπινα δικαιώματα και την αειφόρο ανάπτυξη. Τα φετινά θέματα των επιτροπών θα ανακοινωθούν εδώ.",
  "q5": "Το σχολείο μας είναι μακριά από τη Θεσσαλονίκη. Μπορούμε να έρθουμε;", "a5": "Ναι, και το θέλουμε ιδιαίτερα. Φέτος στοχεύουμε στη μερική κάλυψη των εξόδων μετακίνησης και διαμονής για μαθητές σχολείων εκτός πόλης. Επικοινωνήστε μαζί μας για περισσότερα.",
  "q6": "Πώς δηλώνει συμμετοχή το σχολείο μου;", "a6": "Ο συνοδός καθηγητής συμπληρώνει τη φόρμα εγγραφής παραπάνω, μία φορά ανά σχολείο. Στη συνέχεια επιβεβαιώνουμε τις θέσεις και στέλνουμε τα επόμενα βήματα με email.",
  "ct.eyebrow": "Επικοινωνία", "ct.title": "Η οργανωτική επιτροπή",
  "ct.lede": "Ερωτήσεις, δηλώσεις συμμετοχής ή ιδέες συνεργασίας; Γράψτε σε οποιονδήποτε από εμάς.",
  "p1": "Βασίλειος Καρφής", "p2": "Χρήστος Κουνάδης", "p3": "Δήμητρα Παπαδοπούλου", "p4": "Βασίλειος Παπαζάχος",
  "sup.eyebrow": "Με την υποστήριξη",
  "sup1": "Ελληνογαλλική Σχολή Καλαμαρί", "sup2": "Σύλλογος Αποφοίτων Σχολής Καλαμαρί",
  "sup3": "Γραφείο του Ευρωπαϊκού Κοινοβουλίου στην Ελλάδα (προηγούμενες σύνοδοι)",
  "ft.date": "20–22 Νοεμβρίου 2026", "ft.top": "Επιστροφή στην κορυφή ↑",
  "nav.com": "Επιτροπές", "nav.sch": "Πρόγραμμα", "nav.reg": "Εγγραφή",
  "com.eyebrow": "Επιτροπές", "com.title": "Επτά επιτροπές, μία Ευρώπη",
  "com.lede": "Έξι επιτροπές λειτουργούν στα αγγλικά και μία στα γαλλικά, με έμπειρους συντονιστές. Τα θέματα και οι οδηγοί μελέτης θα εμφανιστούν εδώ μόλις ανακοινωθούν.",
  "sch.eyebrow": "Πρόγραμμα", "sch.title": "Τρεις μέρες στο KMEC", "sch.badge": "Προσωρινό",
  "sch.lede": "Το τελικό πρόγραμμα θα σταλεί στα σχολεία που συμμετέχουν πριν από το συνέδριο.",
  "reg.eyebrow": "Εγγραφές", "reg.title": "Δηλώστε συμμετοχή για το σχολείο σας",
  "reg.p1": "Μία φόρμα ανά σχολείο, από τον συνοδό καθηγητή. Πείτε μας πόσους μαθητές θέλετε να φέρετε και ποιες γλώσσες προτιμούν. Θα επιβεβαιώσουμε τις θέσεις με email.",
  "reg.c1": "Ευπρόσδεκτοι μαθητές Γυμνασίου και Λυκείου", "reg.c2": "Δεν απαιτείται προηγούμενη εμπειρία",
  "reg.c3": "Σχολεία εκτός Θεσσαλονίκης: ρωτήστε μας για στήριξη στη μετακίνηση",
};

const UI = {
  en: { tba: "To be announced", topic: "Topic", chairs: "Chairs", guide: "Study guide ↗", comEN: "English", comFR: "French", comName: (i) => `Committee ${i}`, comFRName: "Comité francophone",
    regSoon: "The registration form opens soon", regSoonP: "Until it does, schools can register their interest by email. We will reply with the details.", regMail: "Email the organisers", regOpen: "Open the form in a new tab ↗", regSubject: "KMEC 2026 – School registration",
    all: "All", session: (n) => `${n}th`, video: (n) => `${n}th session`, more: "Show earlier sessions", less: "Show fewer", started: "KMEC 2026 is happening now!", photo: (n) => `${n}th session` },
  el: { tba: "Θα ανακοινωθεί", topic: "Θέμα", chairs: "Συντονιστές", guide: "Οδηγός μελέτης ↗", comEN: "Αγγλικά", comFR: "Γαλλικά", comName: (i) => `Επιτροπή ${i}`, comFRName: "Comité francophone",
    regSoon: "Η φόρμα εγγραφής ανοίγει σύντομα", regSoonP: "Μέχρι τότε, τα σχολεία μπορούν να δηλώσουν ενδιαφέρον με email. Θα σας απαντήσουμε με όλες τις λεπτομέρειες.", regMail: "Email στους διοργανωτές", regOpen: "Άνοιγμα της φόρμας σε νέα καρτέλα ↗", regSubject: "KMEC 2026 – Δήλωση συμμετοχής σχολείου",
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
  renderSchedule();
  renderRegister();
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
      <div class="video__frame">
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
  document.getElementById("galleryGrid").innerHTML = shown.map((p, i) =>
    `<button type="button" data-i="${i}"><img src="assets/img/${p.f}" alt="KMEC ${UI[lang].photo(p.n)}" loading="lazy"></button>`).join("");
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
function openLb(i) {
  cur = (i + shown.length) % shown.length;
  lbImg.src = `assets/img/${shown[cur].f}`;
  lbImg.alt = lbCap.textContent = `KMEC · ${UI[lang].photo(shown[cur].n)}`;
  lb.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeLb() { lb.hidden = true; document.body.style.overflow = ""; }
document.getElementById("galleryGrid").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-i]");
  if (b) openLb(Number(b.dataset.i));
});
document.getElementById("lbClose").onclick = closeLb;
document.getElementById("lbPrev").onclick = () => openLb(cur - 1);
document.getElementById("lbNext").onclick = () => openLb(cur + 1);
lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLb();
  if (e.key === "ArrowLeft") openLb(cur - 1);
  if (e.key === "ArrowRight") openLb(cur + 1);
});

// ---------- Committees ----------
function renderCommittees() {
  const u = UI[lang];
  let enCount = 0;
  document.getElementById("committeesGrid").innerHTML = COMMITTEES.map((c) => {
    const fr = c.lang === "FR";
    const name = c.name || (fr ? u.comFRName : u.comName(++enCount));
    const tba = `<span class="tba">${u.tba}</span>`;
    return `
    <article class="committee${fr ? " committee--fr" : ""}">
      <span class="committee__lang">${fr ? "FR · " + u.comFR : "EN · " + u.comEN}</span>
      <h3>${name}</h3>
      <dl>
        <dt>${u.topic}</dt><dd>${c.topic || tba}</dd>
        <dt>${u.chairs}</dt><dd>${c.chairs || tba}</dd>
      </dl>
      ${c.guide ? `<a class="committee__guide" href="${c.guide}" target="_blank" rel="noopener">${u.guide}</a>` : ""}
    </article>`;
  }).join("");
}

// ---------- Schedule ----------
let dayIdx = Math.max(0, SCHEDULE.findIndex((d) => d.date === new Date().toISOString().slice(0, 10)));
function renderSchedule() {
  document.getElementById("dayTabs").innerHTML = SCHEDULE.map((d, i) =>
    `<button type="button" role="tab" data-day="${i}" aria-selected="${i === dayIdx}"><b>${lang === "el" ? "Ημέρα" : "Day"} ${i + 1}</b><span>${d.label[lang]}</span></button>`).join("");
  document.getElementById("agenda").innerHTML = SCHEDULE[dayIdx].items.map(([time, title, desc]) => `
    <li><time>${time}</time><div><h3>${title[lang]}</h3>${desc ? `<p>${desc[lang]}</p>` : ""}</div></li>`).join("");
}
document.getElementById("dayTabs").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-day]");
  if (!b) return;
  dayIdx = Number(b.dataset.day);
  renderSchedule();
});

// ---------- Registration ----------
function renderRegister() {
  const u = UI[lang], box = document.getElementById("registerBox");
  if (FORM_URL) {
    const src = FORM_URL + (FORM_URL.includes("?") ? "&" : "?") + "embedded=true";
    if (!box.querySelector("iframe")) {
      box.innerHTML = `<iframe src="${src}" title="KMEC registration form" loading="lazy">…</iframe><a class="register__open" href="${FORM_URL}" target="_blank" rel="noopener"></a>`;
    }
    box.querySelector(".register__open").textContent = u.regOpen;
  } else {
    const mail = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(u.regSubject)}`;
    box.innerHTML = `
      <div class="register__soon">
        <div class="register__icon">📝</div>
        <h3>${u.regSoon}</h3>
        <p>${u.regSoonP}</p>
        <a class="btn btn--gold" href="${mail}">${u.regMail}</a>
      </div>`;
  }
}

// ---------- Reveal on scroll ----------
const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: 0.12 }) : null;
document.querySelectorAll(".section h2, .card, .steps li, .role, .person, .photo-stack, .new-goals, .committee, .register").forEach((el) => {
  if (io) { el.classList.add("reveal"); io.observe(el); }
});

// ---------- Init ----------
let saved = null;
try { saved = localStorage.getItem("kmec-lang"); } catch (e) {}
if (!saved && (navigator.language || "").startsWith("el")) saved = "el";
setLang(saved === "el" ? "el" : "en");
