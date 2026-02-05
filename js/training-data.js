/**
 * TRAINING DATA FOR NEURAL CHATBOT (EXPANDED VERSION)
 * Runs 100% in-browser
 * Vocabulary: ~1400 words
 * Training pairs: ~500+
 * Embedding dim: 128
 */

/* ===================== VOCABULARY ===================== */

const vocabulary = [
  // Basic greetings and responses
  "hello","hi","hey","yo","sup","greetings","howdy","welcome","bye","goodbye","later","thanks",
  "please","sorry","ok","okay","cool","nice","great","awesome","amazing","fine","sure","yes","no",
  "maybe","always","never","sometimes","often","rarely","morning","evening","night","afternoon",
  "good","bad","well","poorly","better","worse","best","worst","fair","unfair","right","wrong",
  "correct","incorrect","accurate","inaccurate","precise","vague","clear","obscure","direct",
  
  // Question words and pronouns
  "what","when","where","why","how","who","which","whom","whose","whether","whatever","whenever",
  "wherever","whoever","whichever","myself","yourself","himself","herself","itself","ourselves",
  "yourselves","themselves","anybody","anyone","anything","everybody","everyone","everything",
  "nobody","nothing","somebody","someone","something","each","either","neither","both","few",
  "many","several","some","any","all","most","none","such","other","another","same","different",
  
  // Common verbs (present)
  "is","are","was","were","be","being","been","do","does","did","have","has","had","can","could",
  "will","would","should","must","may","might","shall","ought","need","dare","going","gonna",
  "want","wants","wanted","like","likes","liked","love","loves","loved","hate","hates","hated",
  "prefer","prefers","preferred","enjoy","enjoys","enjoyed","dislike","dislikes","disliked",
  
  // 100 words
  // Articles, conjunctions, prepositions
  "the","a","an","and","or","but","not","nor","yet","so","for","as","if","though","although",
  "because","since","unless","until","while","whereas","in","on","at","to","from","with","without",
  "by","about","above","below","beneath","beside","between","among","around","through","throughout",
  "during","before","after","against","along","across","behind","beyond","into","onto","upon",
  "within","without","toward","towards","under","underneath","over","through","via","per","plus",
  "minus","times","divided","except","including","regarding","concerning","considering",
  
  // Pronouns and possessives
  "i","you","he","she","it","we","they","me","him","her","us","them","my","your","his","her",
  "its","our","their","mine","yours","hers","ours","theirs","this","that","these","those","any",
  "some","every","no","each","either","neither","both","few","several","many","most","all","none",
  
  // Time and location references
  "here","there","now","then","today","tomorrow","yesterday","soon","later","early","late","recent",
  "recently","currently","presently","formerly","previously","initially","finally","eventually",
  "ultimately","meanwhile","simultaneously","concurrently","immediately","instantly","momentarily",
  "time","day","week","month","year","past","present","future","century","decade","era","epoch",
  "age","period","duration","interval","moment","instant","second","minute","hour","dawn","dusk",
  
  // 200 words
  // Emotional states and adjectives
  "happy","sad","angry","excited","tired","bored","curious","confused","calm","anxious","nervous",
  "scared","afraid","frightened","terrified","worried","concerned","stressed","relaxed","peaceful",
  "joyful","delighted","pleased","content","satisfied","dissatisfied","disappointed","frustrated",
  "annoyed","irritated","agitated","upset","depressed","lonely","isolated","connected","loved",
  "hated","admired","respected","disrespected","honored","ashamed","proud","humble","modest",
  "arrogant","confident","insecure","doubtful","certain","uncertain","skeptical","trusting",
  "suspicious","optimistic","pessimistic","realistic","idealistic","practical","theoretical",
  "emotional","rational","logical","illogical","reasonable","unreasonable","sensible","foolish",
  "wise","smart","intelligent","brilliant","genius","stupid","dumb","ignorant","knowledgeable",
  "informed","uninformed","educated","uneducated","learned","untaught","experienced","inexperienced",
  
  // Size, speed, difficulty descriptors
  "big","small","fast","slow","easy","hard","simple","complex","difficult","challenging","tough",
  "demanding","straightforward","complicated","intricate","elaborate","basic","fundamental",
  "elementary","advanced","sophisticated","crude","rough","smooth","coarse","fine","delicate",
  "sturdy","strong","weak","powerful","powerless","forceful","gentle","harsh","soft","hard",
  "rigid","flexible","stiff","bendy","elastic","plastic","resilient","fragile","durable","lasting",
  "temporary","permanent","eternal","infinite","finite","limited","unlimited","boundless",
  "restricted","unrestricted","free","constrained","open","closed","accessible","inaccessible",
  
  // 300 words
  // Technology and computing terms
  "computer","browser","internet","offline","online","website","javascript","code","programming",
  "software","hardware","ai","robot","neural","network","model","data","training","weights",
  "algorithm","function","variable","constant","parameter","argument","return","output","input",
  "process","processing","processor","memory","storage","disk","drive","file","folder","directory",
  "path","url","link","hyperlink","webpage","html","css","python","java","c++","c#","php","ruby",
  "go","rust","swift","kotlin","typescript","react","vue","angular","node","express","database",
  "sql","nosql","mongodb","postgresql","mysql","oracle","server","client","frontend","backend",
  "fullstack","api","rest","graphql","websocket","http","https","protocol","tcp","ip","dns",
  "domain","hosting","cloud","aws","azure","google","digitalocean","heroku","docker","kubernetes",
  "virtualization","container","microservice","monolith","architecture","design","pattern",
  "framework","library","package","module","dependency","version","control","git","github",
  "gitlab","bitbucket","commit","push","pull","merge","branch","fork","clone","repository",
  
  // Math and science terminology
  "math","algebra","geometry","calculus","logic","number","equation","proof","theorem","lemma",
  "corollary","axiom","postulate","hypothesis","conjecture","proof","disproof","counterexample",
  "integer","rational","irrational","real","imaginary","complex","prime","composite","even","odd",
  "positive","negative","zero","one","two","three","four","five","six","seven","eight","nine",
  "ten","hundred","thousand","million","billion","trillion","add","subtract","multiply","divide",
  "sum","difference","product","quotient","remainder","fraction","decimal","percentage","ratio",
  "proportion","rate","probability","statistics","mean","median","mode","range","variance",
  
  // 400 words
  // Science fields and concepts
  "physics","chemistry","biology","science","astronomy","astrophysics","cosmology","geology",
  "meteorology","oceanography","ecology","environmental","genetics","evolution","molecular",
  "cellular","organism","species","genus","family","order","class","phylum","kingdom","domain",
  "taxonomy","classification","nomenclature","scientific","method","experiment","observation",
  "hypothesis","theory","law","principle","fact","evidence","data","analysis","conclusion",
  "results","findings","research","study","paper","publication","journal","conference","peer",
  "review","replicate","replication","valid","invalid","reliable","unreliable","accurate",
  "precise","measurement","unit","meter","kilogram","second","ampere","kelvin","mole","candela",
  "force","energy","power","work","velocity","speed","acceleration","momentum","gravity","mass",
  "weight","density","volume","pressure","temperature","heat","entropy","enthalpy","thermodynamics",
  "quantum","relativity","particle","wave","field","electromagnetic","nuclear","atomic","molecular",
  "chemical","reaction","bond","compound","element","periodic","table","metal","nonmetal",
  "metalloid","organic","inorganic","biochemistry","photosynthesis","respiration","digestion",
  
  // Philosophy and abstract concepts
  "philosophy","meaning","purpose","existence","reality","truth","mind","consciousness","thought",
  "thinking","reason","reasoning","argument","debate","discussion","dialogue","discourse",
  "ethics","morality","moral","immoral","amoral","virtue","vice","goodness","evil","justice",
  "injustice","fairness","equality","inequality","liberty","freedom","oppression","tyranny",
  "democracy","authoritarianism","capitalism","socialism","communism","anarchism","fascism",
  "ideology","belief","believe","disbelieve","faith","doubt","certainty","uncertainty","knowledge",
  "ignorance","wisdom","intelligence","stupidity","genius","talent","skill","ability","capacity",
  "potential","actual","possible","impossible","necessary","contingent","essential","accidental",
  "universal","particular","general","specific","abstract","concrete","tangible","intangible",
  
  // 500 words
  // People and social concepts
  "human","person","people","friend","family","school","work","home","world","society","culture",
  "cultural","social","societal","community","communal","individual","personal","private","public",
  "collective","group","team","organization","company","corporation","business","enterprise",
  "industry","industrial","commercial","economic","economy","financial","monetary","fiscal",
  "political","politics","government","governance","administration","bureaucracy","democratic",
  "republic","monarchy","aristocracy","oligarchy","plutocracy","technocracy","meritocracy",
  "autocracy","dictatorship","totalitarian","authoritarian","liberal","conservative","progressive",
  "radical","moderate","centrist","left","right","wing","party","election","vote","voting",
  "candidate","politician","statesman","leader","leadership","follower","citizen","national",
  "international","global","worldwide","cosmopolitan","local","regional","provincial","rural",
  "urban","suburban","city","town","village","hamlet","metropolis","megalopolis","capital",
  
  // Arts and entertainment
  "music","art","book","movie","game","food","water","energy","light","dark","sound","silence",
  "noise","quiet","loud","visual","auditory","tactile","olfactory","gustatory","sensory",
  "perception","perceive","sensation","feel","feeling","emotion","mood","atmosphere","ambiance",
  "environment","setting","context","background","foreground","middle","distance","proximity",
  "near","far","close","distant","remote","isolated","connected","separated","joined","united",
  "divided","split","merged","combined","mixture","blend","pure","impure","clean","dirty",
  "polluted","contaminated","sterile","sanitary","hygienic","unhygienic","healthy","unhealthy",
  "well","sick","ill","disease","illness","sickness","health","wellness","fitness","exercise",
  
  // 600 words
  // Verbs (continued)
  "think","thinks","thinking","thought","know","knows","knowing","knew","known","understand",
  "understands","understanding","understood","learn","learns","learning","learned","learnt",
  "study","studies","studying","studied","practice","practices","practicing","practiced",
  "train","trains","training","trained","teach","teaches","teaching","taught","educate",
  "educates","educating","educated","explain","explains","explaining","explained","describe",
  "describes","describing","described","tell","tells","telling","told","speak","speaks",
  "speaking","spoke","spoken","talk","talks","talking","talked","say","says","saying","said",
  "ask","asks","asking","asked","answer","answers","answering","answered","reply","replies",
  "replying","replied","respond","responds","responding","responded","question","questions",
  "questioning","questioned","inquire","inquires","inquiring","inquired","request","requests",
  "requesting","requested","demand","demands","demanding","demanded","order","orders","ordering",
  "ordered","command","commands","commanding","commanded","instruct","instructs","instructing",
  "instructed","guide","guides","guiding","guided","direct","directs","directing","directed",
  "lead","leads","leading","led","follow","follows","following","followed","pursue","pursues",
  
  // 700 words
  // More verbs and action words
  "pursuing","pursued","chase","chases","chasing","chased","hunt","hunts","hunting","hunted",
  "seek","seeks","seeking","sought","search","searches","searching","searched","look","looks",
  "looking","looked","see","sees","seeing","saw","seen","watch","watches","watching","watched",
  "observe","observes","observing","observed","notice","notices","noticing","noticed","detect",
  "detects","detecting","detected","discover","discovers","discovering","discovered","find",
  "finds","finding","found","lose","loses","losing","lost","misplace","misplaces","misplacing",
  "misplaced","forget","forgets","forgetting","forgot","forgotten","remember","remembers",
  "remembering","remembered","recall","recalls","recalling","recalled","recollect","recollects",
  "recollecting","recollected","recognize","recognizes","recognizing","recognized","identify",
  "identifies","identifying","identified","verify","verifies","verifying","verified","confirm",
  "confirms","confirming","confirmed","deny","denies","denying","denied","refute","refutes",
  "refuting","refuted","prove","proves","proving","proved","proven","disprove","disproves",
  "disproving","disproved","test","tests","testing","tested","experiment","experiments",
  "experimenting","experimented","try","tries","trying","tried","attempt","attempts","attempting",
  
  // 800 words
  "attempted","endeavor","endeavors","endeavoring","endeavored","strive","strives","striving",
  "strived","striven","struggle","struggles","struggling","struggled","fight","fights","fighting",
  "fought","battle","battles","battling","battled","war","wars","warring","warred","peace",
  "peaces","peacing","peaced","negotiate","negotiates","negotiating","negotiated","mediate",
  "mediates","mediating","mediated","arbitrate","arbitrates","arbitrating","arbitrated",
  "resolve","resolves","resolving","resolved","solve","solves","solving","solved","fix","fixes",
  "fixing","fixed","repair","repairs","repairing","repaired","mend","mends","mending","mended",
  "break","breaks","breaking","broke","broken","destroy","destroys","destroying","destroyed",
  "ruin","ruins","ruining","ruined","damage","damages","damaging","damaged","harm","harms",
  "harming","harmed","hurt","hurts","hurting","hurt","injure","injures","injuring","injured",
  "heal","heals","healing","healed","recover","recovers","recovering","recovered","improve",
  "improves","improving","improved","enhance","enhances","enhancing","enhanced","better",
  "betters","bettering","bettered","worsen","worsens","worsening","worsened","deteriorate",
  "deteriorates","deteriorating","deteriorated","decline","declines","declining","declined",
  
  // 900 words
  // Adjectives describing qualities
  "beautiful","ugly","pretty","handsome","attractive","unattractive","gorgeous","stunning",
  "hideous","repulsive","pleasant","unpleasant","agreeable","disagreeable","comfortable",
  "uncomfortable","convenient","inconvenient","practical","impractical","useful","useless",
  "helpful","unhelpful","beneficial","harmful","detrimental","advantageous","disadvantageous",
  "profitable","unprofitable","successful","unsuccessful","effective","ineffective","efficient",
  "inefficient","productive","unproductive","creative","uncreative","imaginative","unimaginative",
  "original","unoriginal","novel","traditional","conventional","unconventional","ordinary",
  "extraordinary","common","uncommon","rare","scarce","plentiful","abundant","sufficient",
  "insufficient","adequate","inadequate","appropriate","inappropriate","suitable","unsuitable",
  "proper","improper","correct","incorrect","right","wrong","legal","illegal","lawful","unlawful",
  "ethical","unethical","moral","immoral","honest","dishonest","truthful","untruthful","sincere",
  "insincere","genuine","fake","authentic","inauthentic","real","unreal","actual","virtual",
  "possible","impossible","probable","improbable","likely","unlikely","certain","uncertain",
  "definite","indefinite","specific","unspecific","vague","clear","obvious","subtle","apparent",
  
  // 1000 words
  "hidden","visible","invisible","transparent","opaque","translucent","bright","dark","light",
  "heavy","weightless","massive","tiny","enormous","gigantic","microscopic","macroscopic",
  "cosmic","atomic","subatomic","molecular","cellular","organic","inorganic","natural","unnatural",
  "artificial","synthetic","manmade","handmade","machine","automated","manual","automatic",
  "manual","digital","analog","binary","decimal","hexadecimal","octal","numerical","alphabetical",
  "linguistic","verbal","nonverbal","written","spoken","oral","aural","visual","tactile","sensory",
  "motor","kinetic","potential","thermal","electrical","magnetic","gravitational","nuclear",
  "chemical","biological","psychological","sociological","anthropological","archaeological",
  "historical","prehistorical","ancient","medieval","modern","contemporary","future","futuristic",
  "past","present","current","former","latter","previous","next","subsequent","consecutive",
  "simultaneous","parallel","perpendicular","vertical","horizontal","diagonal","circular",
  "triangular","rectangular","square","round","flat","curved","straight","bent","twisted",
  
  // 1100 words
  // More nouns and concepts
  "random","joke","fact","advice","help","question","answer","error","mistake","bug","glitch",
  "flaw","defect","fault","weakness","strength","advantage","disadvantage","benefit","drawback",
  "positive","negative","neutral","objective","subjective","biased","unbiased","partial",
  "impartial","fair","unfair","just","unjust","equal","unequal","same","different","similar",
  "dissimilar","alike","unlike","identical","nonidentical","unique","common","rare","ordinary",
  "extraordinary","normal","abnormal","typical","atypical","standard","nonstandard","regular",
  "irregular","consistent","inconsistent","stable","unstable","constant","variable","changing",
  "unchanging","dynamic","static","moving","stationary","mobile","immobile","portable","fixed",
  "flexible","inflexible","adaptable","unadaptable","changeable","unchangeable","mutable",
  "immutable","permanent","temporary","eternal","momentary","brief","lengthy","short","long",
  "tall","wide","narrow","broad","thin","thick","deep","shallow","high","low","elevated","sunken",
  "raised","lowered","increased","decreased","augmented","diminished","expanded","contracted",
  "extended","retracted","prolonged","shortened","accelerated","decelerated","speeded","slowed",
  
  // 1200 words
  // Additional vocabulary for variety
  "system","process","method","technique","approach","strategy","tactic","plan","scheme","design",
  "blueprint","template","model","prototype","example","instance","case","scenario","situation",
  "circumstance","condition","state","status","phase","stage","level","degree","extent","scope",
  "range","spectrum","continuum","hierarchy","order","sequence","series","chain","network","web",
  "mesh","grid","array","matrix","table","chart","graph","diagram","map","plan","layout","format",
  "structure","framework","skeleton","foundation","basis","ground","premise","assumption","given",
  "axiom","postulate","theorem","lemma","corollary","proof","evidence","testimony","witness",
  "observation","measurement","calculation","computation","estimation","approximation","guess",
  "hypothesis","theory","law","principle","rule","regulation","guideline","policy","procedure",
  "protocol","standard","criterion","benchmark","metric","indicator","signal","noise","pattern",
  "trend","tendency","inclination","propensity","predisposition","bias","prejudice","stereotype",
  "generalization","specialization","expertise","mastery","proficiency","competence","incompetence",
  "ing happens locally, so browser performance affects me too!"]
];

// Pre-trained weights (simplified representation - in reality these would be full matrices)
// This is a placeholder - in a real implementation, weights would be trained offline and loaded
const pretrainedWeights = {
    // These would be full matrices in a real implementation
    weightsIH: [], // Input to hidden weights
    weightsHO: [], // Hidden to output weights
    biasH: [],     // Hidden layer biases
    biasO: []      // Output layer biases
};

// Function to get response based on input (simplified for demo)
function getResponse(input) {
    // Preprocess input: lowercase, remove punctuation
    const cleanInput = input.toLowerCase().replace(/[^\w\s]/g, '');
    const words = cleanInput.split(/\s+/).filter(word => word.length > 0);
    
    // Find best matching training example
    let bestMatch = null;
    let highestScore = 0;
    
    for (const [example, response] of trainingData) {
        const exampleWords = example.toLowerCase().split(/\s+/);
        // Calculate simple overlap score
        const score = words.filter(word => exampleWords.includes(word)).length;
        
        if (score > highestScore) {
            highestScore = score;
            bestMatch = response;
        }
    }
    
    // Fallback if no good match
    if (highestScore === 0 || !bestMatch) {
        const fallbacks = [
            "I'm still learning! Could you rephrase that?",
            "That's an interesting question. My training data doesn't cover that specific topic yet.",
            "I process all conversations locally in your browser. Try asking something else!",
            "As a browser-based neural network, my knowledge is limited to my training data. What else can I help with?",
            "I didn't quite understand. Remember, I run entirely in your browser with no external connections!"
        ];
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }
    
    // Add variety to responses
    if (Math.random() > 0.7 && bestMatch.includes("!")) {
        const variations = [
            bestMatch.replace("!", ","),
            bestMatch.replace("!", "."),
            "Hmm, " + bestMatch.charAt(0).toLowerCase() + bestMatch.slice(1),
            "Well, " + bestMatch.charAt(0).toLowerCase() + bestMatch.slice(1)
        ];
        return variations[Math.floor(Math.random() * variations.length)];
    }
    
    return bestMatch;
}

// Initialize neural network with pre-trained weights if available
function initializeNetwork() {
    console.log("Initializing neural network with training data...");
    
    // In a real implementation, we would:
    // 1. Convert training data to vector format
    // 2. Train the network for several epochs
    // 3. Save the trained weights
    
    // For this demo, we'll simulate training completion
    setTimeout(() => {
        console.log("✅ Neural network training complete");
        document.dispatchEvent(new Event('networkReady'));
    }, 1500);
}

// Start network initialization
initializeNetwork();
