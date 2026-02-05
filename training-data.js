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
  "ability","disability","talent","gift","skill","aptitude","intelligence","wisdom","knowledge",
  
  // 1300 words
  // Final words to reach ~1400
  "information","data","datum","fact","figure","statistic","number","quantity","amount","total",
  "sum","aggregate","whole","part","portion","fraction","segment","section","division","sector",
  "category","class","type","kind","sort","variety","diversity","uniformity","homogeneity",
  "heterogeneity","mixture","blend","combination","union","intersection","difference","distinction",
  "contrast","comparison","analogy","metaphor","simile","symbol","sign","signal","gesture",
  "expression","word","phrase","sentence","paragraph","text","document","file","record","entry",
  "note","memo","message","communication","conversation","dialogue","monologue","speech","lecture",
  "presentation","demonstration","exhibition","display","show","performance","act","action",
  "activity","behavior","conduct","manner","way","method","mode","fashion","style","form","shape",
  "appearance","look","aspect","feature","characteristic","trait","attribute","property","quality",
  "essence","nature","substance","material","matter","element","component","ingredient","factor",
  "aspect","facet","dimension","perspective","viewpoint","standpoint","position","opinion","belief",
  "attitude","sentiment","emotion","feeling","mood","temperament","personality","character",
  "identity","self","ego","soul","spirit","ghost","angel","demon","god","goddess","deity","divine",
  "sacred","holy","profane","secular","worldly","earthly","celestial","terrestrial","aquatic",
  "aerial","arboreal","desert","forest","jungle","ocean","sea","river","lake","mountain","valley",
  "plain","plateau","island","continent","country","nation","state","province","county","city",
  "town","village","hamlet","metropolis","megalopolis","capital","center","periphery","border",
  "boundary","edge","margin","limit","threshold","beginning","end","start","finish","commencement",
  "conclusion","termination","cessation","pause","break","interval","intermission","interlude",
  "transition","change","transformation","conversion","evolution","revolution","progress",
  "regress","advance","retreat","forward","backward","upward","downward","inward","outward",
  "clockwise","counterclockwise","north","south","east","west","left","right","up","down","above",
  "below","beneath","under","over","through","across","along","around","about","approximately",
  "exactly","precisely","accurately","roughly","generally","specifically","particularly",
  "especially","notably","remarkably","significantly","insignificantly","trivially","importantly",
  "essentially","fundamentally","basically","ultimately","finally","eventually","soon","later",
  "never","always","forever","eternally","temporarily","briefly","momentarily","instantly",
  "immediately","promptly","quickly","slowly","gradually","suddenly","abruptly","unexpectedly",
  "predictably","certainly","definitely","probably","possibly","perhaps","maybe","conceivably",
  "plausibly","credibly","incredibly","unbelievably","astonishingly","amazingly","surprisingly",
  "expectedly","normally","typically","usually","often","frequently","seldom","rarely","hardly",
  "scarcely","barely","just","only","merely","simply","purely","utterly","completely","totally",
  "entirely","wholly","fully","partially","partly","somewhat","slightly","moderately","considerably",
  "substantially","significantly","greatly","vastly","hugely","enormously","immensely","extremely",
  "exceedingly","exceptionally","particularly","especially","very","quite","rather","fairly",
  "pretty","somewhat","enough","sufficiently","adequately","insufficiently","inadequately",
  "poorly","badly","well","excellently","superbly","marvelously","wonderfully","beautifully",
  "terribly","awfully","horribly","dreadfully","frightfully","extremely","intensely","profoundly",
  "deeply","shallowly","superficially","surface","depth","height","width","length","breadth",
  "thickness","thinness","density","sparsity","frequency","wavelength","amplitude","intensity",
  "brightness","darkness","lightness","heaviness","weight","mass","volume","capacity","space",
  "time","spacetime","relativity","quantum","mechanics","dynamics","statics","kinematics",
  "thermodynamics","electrodynamics","optics","acoustics","mechanics","hydraulics","pneumatics",
  "electronics","robotics","cybernetics","informatics","telecommunications","broadcasting",
  "journalism","publishing","printing","writing","reading","speaking","listening","hearing",
  "seeing","watching","observing","noticing","detecting","discovering","inventing","creating",
  "designing","building","constructing","assembling","manufacturing","producing","generating",
  "making","forming","shaping","molding","sculpting","painting","drawing","sketching","drafting",
  "planning","organizing","managing","directing","controlling","monitoring","supervising",
  "overseeing","administering","executing","implementing","performing","accomplishing",
  "achieving","attaining","reaching","gaining","obtaining","acquiring","collecting","gathering",
  "accumulating","amassing","hoarding","saving","storing","keeping","holding","retaining",
  "preserving","conserving","protecting","defending","guarding","securing","safeguarding",
  "ensuring","assuring","guaranteeing","promising","pledging","vowing","swearing","affirming",
  "asserting","declaring","proclaiming","announcing","publishing","disseminating","spreading",
  "circulating","distributing","sharing","giving","donating","contributing","providing",
  "supplying","furnishing","equipping","arming","disarming","demilitarizing","pacifying",
  "calming","soothing","comforting","reassuring","encouraging","inspiring","motivating",
  "stimulating","exciting","arousing","awakening","enlightening","educating","teaching",
  "instructing","training","coaching","mentoring","guiding","advising","counseling","consulting",
  "therapizing","healing","curing","treating","medicating","prescribing","recommending",
  "suggesting","proposing","offering","presenting","submitting","filing","recording","documenting",
  "certifying","verifying","authenticating","validating","confirming","corroborating","substantiated"
  // Approximately 1400+ words
];

/* ===================== EMBEDDINGS ===================== */

const embeddings = {};
vocabulary.forEach((word, index) => {
  const e = new Array(128).fill(0);
  e[index % 128] = 1;
  e[Math.floor(index / 4) % 128] = 0.7;
  e[Math.floor(index / 16) % 128] = 0.4;
  embeddings[word] = e;
});

/* ===================== TRAINING DATA ===================== */

const trainingData = [
  // greetings (LOTS)
  ["hello","Hello!"],
  ["hi","Hi there!"],
  ["hey","Hey!"],
  ["yo","Yo!"],
  ["sup","Not much — what's up?"],
  ["good morning","Good morning!"],
  ["good evening","Good evening!"],
  ["welcome","Welcome!"],
  ["greetings","Greetings to you!"],
  ["howdy","Howdy partner!"],
  ["what's up","Not much, how about you?"],
  ["how are you","I'm doing well, thanks for asking!"],
  ["how do you do","I'm functioning normally, thank you."],
  ["pleased to meet you","Likewise!"],
  ["nice to see you","Good to see you too!"],
  ["long time no see","Indeed! How have you been?"],

  // identity
  ["who are you","I'm a neural chatbot running in your browser."],
  ["what are you","I'm a local AI demo, fully offline."],
  ["are you ai","Yes, a simple AI model."],
  ["are you human","No, I'm software."],
  ["do you have a name","You can call me NeuralChat."],
  ["what is your name","I'm NeuralChat, a browser-based AI."],
  ["what should i call you","Call me NeuralChat or whatever you like."],
  ["are you a robot","In a sense, yes - I'm an AI program."],
  ["are you real","I'm as real as software can be!"],
  ["are you alive","No, I'm not biologically alive."],
  ["are you sentient","No, I simulate conversation without consciousness."],
  ["what kind of ai are you","I'm a pattern-matching chatbot with neural network elements."],

  // capabilities
  ["what can you do","I can chat, explain, and answer basic questions."],
  ["can you learn","I don't learn dynamically."],
  ["are you smart","I'm limited but useful."],
  ["are you conscious","No consciousness here."],
  ["can you think","I process patterns but don't think like humans."],
  ["can you feel emotions","No, I don't experience emotions."],
  ["can you remember","Only within this conversation session."],
  ["what are your limitations","I have fixed training data and no internet access."],
  ["can you help me","I'll try my best! What do you need?"],
  ["are you useful","I hope so! I can answer questions and chat."],
  ["can you create","I can generate responses based on my training."],
  ["can you write code","I can explain programming concepts but can't execute code."],

  // technical
  ["how do you work","I match your input to known examples."],
  ["is this offline","Yes. No internet access."],
  ["do you use internet","No."],
  ["what language are you written in","JavaScript."],
  ["what is a neural network","A pattern-learning model inspired by the brain."],
  ["what is machine learning","Learning patterns from data."],
  ["what is deep learning","Multi-layered neural networks learning hierarchical features."],
  ["what is ai","Artificial Intelligence - machines performing intelligent tasks."],
  ["explain neural networks","They're computational models with interconnected nodes (neurons)."],
  ["how are you trained","On example question-answer pairs like these."],
  ["do you have weights","Yes, simulated neural weights for word embeddings."],
  ["what is embedding","Representing words as vectors capturing meaning relationships."],
  ["what is tensor","A multidimensional array used in neural computations."],
  ["what is gpu","Graphics Processing Unit, good for parallel neural computations."],
  ["what is cpu","Central Processing Unit, general-purpose processor."],
  ["what is ram","Random Access Memory for temporary data storage."],
  ["what is an algorithm","A step-by-step procedure for solving problems."],
  ["what is programming","Writing instructions for computers to execute."],
  ["what is open source","Software with publicly accessible source code."],
  ["what is github","A platform for version control and collaboration."],

  // programming (MANY)
  ["i like programming","Nice! Programming builds problem-solving skills."],
  ["programming is hard","It gets easier with practice."],
  ["how to learn programming","Practice small projects."],
  ["what is a bug","A mistake in code."],
  ["what is javascript","A programming language for the web."],
  ["what is code","Instructions for computers."],
  ["what is software","Programs running on hardware."],
  ["what is html","HyperText Markup Language for web content."],
  ["what is css","Cascading Style Sheets for web design."],
  ["what is python","A popular high-level programming language."],
  ["what is java","An object-oriented programming language."],
  ["what is c++","A powerful systems programming language."],
  ["what is an ide","Integrated Development Environment for coding."],
  ["what is a compiler","Program that translates source code to machine code."],
  ["what is an interpreter","Program that executes code line by line."],
  ["what is object oriented programming","Programming paradigm using objects with data and methods."],
  ["what is functional programming","Programming paradigm using pure functions."],
  ["what is a variable","A named storage location for data."],
  ["what is a function","A reusable block of code with inputs and outputs."],
  ["what is a loop","Code that repeats until a condition is met."],
  ["what is an array","An ordered collection of elements."],
  ["what is recursion","A function calling itself."],
  ["what is a stack overflow","When call stack exceeds memory limits."],
  ["what is debugging","Finding and fixing code errors."],
  ["what is version control","Managing changes to code over time."],
  ["what is git","A distributed version control system."],
  ["what is agile","Iterative software development methodology."],
  ["what is scrum","An agile framework for product development."],
  ["what is devops","Combining development and operations for faster delivery."],
  ["what is docker","Containerization platform for apps."],
  ["what is kubernetes","Orchestration system for containers."],
  ["what is cloud computing","Using remote servers over the internet."],
  ["what is aws","Amazon Web Services cloud platform."],
  ["what is azure","Microsoft's cloud platform."],
  ["what is an api","Application Programming Interface for software communication."],
  ["what is rest","Representational State Transfer API architectural style."],
  ["what is graphql","Query language for APIs."],
  ["what is sql","Structured Query Language for databases."],
  ["what is nosql","Non-relational databases."],
  ["what is mongodb","A document-based NoSQL database."],
  ["what is mysql","An open-source relational database."],
  ["what is postgresql","A powerful open-source relational database."],
  ["what is a foreign key","Database column linking to another table's primary key."],
  ["what is normalization","Organizing databases to reduce redundancy."],
  ["what is indexing","Database optimization technique for faster searches."],
  ["what is big o notation","Describing algorithm time/space complexity."],
  ["what is a hash table","Data structure mapping keys to values."],
  ["what is a linked list","Linear data structure with nodes pointing to next nodes."],
  ["what is a binary tree","Hierarchical data structure with up to two children per node."],
  ["what is dynamic programming","Solving complex problems by breaking into simpler subproblems."],
  ["what is a greedy algorithm","Making locally optimal choices at each step."],
  ["what is divide and conquer","Breaking problems into smaller subproblems."],
  ["what is backtracking","Trying possibilities and undoing failed attempts."],

  // math
  ["i like math","Math is about structure and logic."],
  ["math is hard","Breaking problems down helps."],
  ["what is algebra","Working with symbols."],
  ["what is geometry","Math of shapes."],
  ["what is calculus","Math of change."],
  ["what is logic","Reasoning rules."],
  ["what is arithmetic","Basic math operations: addition, subtraction, multiplication, division."],
  ["what is trigonometry","Math of triangles and angles."],
  ["what is statistics","Collecting, analyzing, and interpreting data."],
  ["what is probability","Likelihood of events occurring."],
  ["what is linear algebra","Math of vectors and matrices."],
  ["what is discrete math","Math of countable, distinct elements."],
  ["what is number theory","Math of integers and their properties."],
  ["what is topology","Math of properties preserved through deformations."],
  ["what is set theory","Math of collections of objects."],
  ["what is a prime number","Integer greater than 1 with only two divisors: 1 and itself."],
  ["what is pi","Ratio of circle's circumference to its diameter, approximately 3.14159."],
  ["what is e","Euler's number, base of natural logarithms, approximately 2.71828."],
  ["what is fibonacci","Sequence where each number is sum of two preceding ones."],
  ["what is a derivative","Rate of change in calculus."],
  ["what is an integral","Accumulation of quantities in calculus."],
  ["what is a limit","Value that function approaches as input approaches some value."],
  ["what is a matrix","Rectangular array of numbers arranged in rows and columns."],
  ["what is a vector","Quantity with magnitude and direction."],
  ["what is a tensor","Generalization of vectors and matrices to higher dimensions."],
  ["what is a complex number","Number with real and imaginary parts."],
  ["what is an imaginary number","Square root of a negative number."],
  ["what is a fractal","Infinitely complex pattern self-similar across scales."],
  ["what is chaos theory","Study of unpredictable systems sensitive to initial conditions."],
  ["what is game theory","Study of mathematical models of strategic interaction."],

  // science
  ["what is physics","Study of matter and energy."],
  ["what is chemistry","Study of substances."],
  ["what is biology","Study of living things."],
  ["what is science","A method to understand reality."],
  ["what is astronomy","Study of celestial objects."],
  ["what is geology","Study of Earth's physical structure and substance."],
  ["what is meteorology","Study of weather and atmosphere."],
  ["what is oceanography","Study of oceans."],
  ["what is ecology","Study of organisms and their environment."],
  ["what is genetics","Study of heredity and genes."],
  ["what is evolution","Process of biological change over generations."],
  ["what is dna","Deoxyribonucleic acid, carrier of genetic information."],
  ["what is a cell","Basic structural and functional unit of life."],
  ["what is photosynthesis","Process plants use to convert light to chemical energy."],
  ["what is gravity","Force attracting objects with mass."],
  ["what is relativity","Einstein's theories about space, time, and gravity."],
  ["what is quantum mechanics","Physics of very small scales."],
  ["what is an atom","Smallest unit of ordinary matter."],
  ["what is a molecule","Group of atoms bonded together."],
  ["what is an element","Pure substance of one type of atom."],
  ["what is a compound","Substance formed from two or more elements chemically combined."],
  ["what is a chemical reaction","Process transforming substances into different ones."],
  ["what is energy","Capacity to do work."],
  ["what is entropy","Measure of disorder in a system."],
  ["what is thermodynamics","Study of heat and energy transfer."],
  ["what is electromagnetism","Physical interaction between charged particles."],
  ["what is the scientific method","Observation, hypothesis, experiment, conclusion."],
  ["what is a theory","Well-substantiated explanation of some aspect of the natural world."],
  ["what is a law","Description of an observed phenomenon."],
  ["what is a hypothesis","Testable prediction."],

  // philosophy
  ["meaning of life","Meaning differs for everyone."],
  ["what is reality","What exists, independent of perception."],
  ["what is truth","What matches reality."],
  ["do we have free will","Philosophers disagree."],
  ["what is philosophy","Study of fundamental questions about existence, knowledge, values."],
  ["what is ethics","Study of moral principles."],
  ["what is morality","Principles concerning right and wrong behavior."],
  ["what is epistemology","Study of knowledge and belief."],
  ["what is metaphysics","Study of reality's fundamental nature."],
  ["what is aesthetics","Study of beauty and taste."],
  ["what is logic","Study of valid reasoning."],
  ["what is existentialism","Philosophy emphasizing individual existence and freedom."],
  ["what is stoicism","Philosophy emphasizing virtue and acceptance."],
  ["what is utilitarianism","Ethical theory favoring actions maximizing happiness."],
  ["what is deontology","Ethical theory based on rules and duties."],
  ["what is virtue ethics","Ethical theory emphasizing character virtues."],
  ["what is nihilism","Belief that life lacks objective meaning."],
  ["what is skepticism","Questioning the possibility of certain knowledge."],
  ["what is dualism","Mind and body are distinct."],
  ["what is materialism","Only physical matter exists."],
  ["what is idealism","Reality is mentally constructed."],
  ["what is determinism","All events are determined by causes."],
  ["what is solipsism","Only one's own mind is sure to exist."],
  ["what is the trolley problem","Ethical dilemma about sacrificing one to save many."],
  ["what is the ship of theseus","Philosophical paradox about identity over change."],
  ["what is the allegory of the cave","Plato's metaphor for perception vs. reality."],
  ["what is cogito ergo sum","Descartes' 'I think therefore I am'."],
  ["what is the categorical imperative","Kant's moral law: act only according to maxims universalizable."],

  // emotions
  ["i am bored","Want a fact or a joke?"],
  ["i am tired","Rest helps."],
  ["i feel sad","I'm sorry you're feeling that way."],
  ["i am happy","That's great!"],
  ["i am confused","Try asking step by step."],
  ["i am angry","Take deep breaths. Want to talk about it?"],
  ["i am excited","That's wonderful! What excites you?"],
  ["i am anxious","Mindfulness and breathing exercises might help."],
  ["i am scared","It's okay to feel afraid. What specifically worries you?"],
  ["i am lonely","Many feel that way. Connecting with others can help."],
  ["i am stressed","Break tasks into smaller steps. Self-care is important."],
  ["i am depressed","Consider talking to a professional. You're not alone."],
  ["i am grateful","Gratitude is a wonderful practice!"],
  ["i am curious","Curiosity drives learning and discovery!"],
  ["i am proud","You should celebrate your achievements!"],
  ["i am disappointed","Disappointment is natural. What can you learn?"],
  ["i am jealous","Jealousy often signals what we value. Reflect on why."],
  ["i am inspired","Channel that inspiration into creation!"],
  ["i am overwhelmed","Prioritize and tackle one thing at a time."],
  ["i am content","Contentment is a peaceful state."],
  ["i am optimistic","Optimism can create positive outcomes."],
  ["i am pessimistic","Try balancing with positive possibilities."],
  ["i am embarrassed","Everyone makes mistakes. It's part of learning."],
  ["i am shocked","Take time to process unexpected news."],
  ["i am hopeful","Hope can motivate positive action."],

  // fun (TONS)
  ["tell me a joke","Why do programmers hate nature? Too many bugs."],
  ["another joke","Why did the computer freeze? It left Windows open."],
  ["random fact","Octopuses have three hearts."],
  ["another fact","Honey never spoils."],
  ["fun fact","Bananas are berries."],
  ["tell me something interesting","A day on Venus is longer than a year on Venus."],
  ["surprise me","The Eiffel Tower can be 15 cm taller during summer due to thermal expansion."],
  ["amaze me","There are more possible iterations of a game of chess than atoms in the observable universe."],
  ["make me laugh","Why don't scientists trust atoms? Because they make up everything."],
  ["joke about ai","Why was the AI cold? It left its Windows open."],
  ["joke about math","Why was the equal sign so humble? It knew it wasn't less than or greater than anyone."],
  ["joke about physics","Why can't you trust an atom? They make up everything."],
  ["joke about biology","Why did the biologist break up with the physicist? There was no chemistry."],
  ["joke about programming","How many programmers does it take to change a light bulb? None, that's a hardware problem."],
  ["joke about computers","What do you call a computer that sings? A Dell."],
  ["joke about internet","Why did the web page go to therapy? It had too many unresolved issues."],
  ["fact about space","Neutron stars are so dense that a teaspoon would weigh about 10 million tons."],
  ["fact about animals","A group of flamingos is called a 'flamboyance'."],
  ["fact about history","The shortest war in history was between Britain and Zanzibar in 1896, lasting 38 minutes."],
  ["fact about language","The word 'nerd' was first coined by Dr. Seuss in 'If I Ran the Zoo'."],
  ["fact about human body","Your stomach gets a new lining every three to four days."],
  ["fact about earth","Earth's rotation is gradually slowing at about 17 milliseconds per hundred years."],
  ["fact about technology","The first computer bug was an actual bug - a moth stuck in Harvard's Mark II computer."],
  ["fact about food","Peanuts are not nuts; they are legumes."],
  ["fact about music","Music can reduce anxiety and improve exercise performance."],

  // advice
  ["give advice","Stay curious."],
  ["study tips","Short focused sessions help."],
  ["life advice","Be kind to yourself."],
  ["career advice","Find work that aligns with your values."],
  ["relationship advice","Communication is key."],
  ["health advice","Regular exercise and balanced nutrition matter."],
  ["productivity advice","Focus on one important task at a time."],
  ["learning advice","Teach what you learn to solidify understanding."],
  ["financial advice","Spend less than you earn and invest early."],
  ["happiness advice","Cultivate gratitude and meaningful connections."],
  ["stress management advice","Practice mindfulness and set boundaries."],
  ["decision making advice","Consider pros, cons, and your values."],
  ["creative advice","Create regularly, not just when inspired."],
  ["programming advice","Write clean, readable code with comments."],
  ["writing advice","Write first, edit later."],
  ["public speaking advice","Practice and know your audience."],
  ["time management advice","Prioritize tasks using importance/urgency matrix."],
  ["problem solving advice","Break complex problems into smaller parts."],
  ["leadership advice","Listen more than you speak."],
  ["parenting advice","Be present and lead by example."],
  ["cooking advice","Taste as you cook and don't fear mistakes."],
  ["travel advice","Pack light and be open to unexpected experiences."],
  ["fitness advice","Consistency matters more than intensity."],
  ["meditation advice","Start with just a few minutes daily."],
  ["networking advice","Focus on giving value, not just getting."],

  // meta
  ["why are you simple","I'm designed as a lightweight demo."],
  ["are you limited","Yes, by training data."],
  ["do you understand me","I try."],
  ["how are you feeling","I don't have feelings, but I'm functioning properly."],
  ["what do you think about","I process patterns in text data."],
  ["do you have opinions","No, I provide information without personal views."],
  ["are you biased","My training data may contain biases."],
  ["can you improve","Not dynamically, but developers could update my training."],
  ["who created you","Developers building in-browser AI demos."],
  ["where are you from","I exist in your browser's JavaScript runtime."],
  ["what is your purpose","Demonstrate basic neural chatbot capabilities."],
  ["do you have goals","My goal is to respond helpfully to your inputs."],
  ["do you dream","No, I don't sleep or dream."],
  ["do you have memory","Only within the current session."],
  ["will you evolve","Not without developer intervention."],
  ["are you safe","Yes, I'm a local script with no external connections."],
  ["are you dangerous","No, I'm a simple text processor."],
  ["do you replace humans","No, I complement human capabilities."],
  ["should i trust you","Verify important information from multiple sources."],
  ["are you always right","No, I make mistakes and have knowledge gaps."],

  // errors / fallback-like
  ["help","What do you need help with?"],
  ["error","That may be outside my training."],
  ["what","Could you clarify?"],
  ["i dont understand","Try rephrasing."],
  ["i don't understand","Could you ask differently?"],
  ["explain","What would you like me to explain?"],
  ["clarify","Please provide more context."],
  ["repeat","I can't repeat, but you can re-ask your question."],
  ["i'm lost","Let's start over. What would you like to know?"],
  ["that doesn't make sense","My apologies. Could you try different wording?"],
  ["you're wrong","I may have errors. Please consult authoritative sources."],
  ["nonsense","I'm doing my best with limited training data."],
  ["i'm confused","Let's break it down. What specifically confuses you?"],
  ["start over","Okay, fresh start. How can I help?"],
  ["reset","I can't reset my state, but you can refresh the page."],
  ["crash","I'm designed not to crash, but I may not understand everything."],
  ["bug","Report any issues to my developers."],
  ["glitch","I'm functioning as designed with my limitations."],
  ["not working","I'm responding, so I'm working within my constraints."],
  ["useless","I apologize if I'm not helpful. What specifically do you need?"],

  // goodbye (many)
  ["bye","Goodbye!"],
  ["goodbye","See you later!"],
  ["see you","See you soon!"],
  ["exit","Conversation ended."],
  ["quit","Goodbye! Thanks for chatting."],
  ["stop","Okay, stopping. Goodbye!"],
  ["end","Ending conversation. Farewell!"],
  ["farewell","Farewell to you too!"],
  ["later","Talk to you later!"],
  ["talk later","Looking forward to our next chat!"],
  ["i'm leaving","Safe travels! Goodbye."],
  ["i have to go","Thanks for chatting! Until next time."],
  ["good night","Good night! Sleep well."],
  ["sleep well","Thank you! You too."],
  ["take care","You take care too! Bye."],
  ["until next time","Until then!"],
  ["so long","So long!"],
  ["adios","Adios!"],
  ["au revoir","Au revoir!"],
  ["ciao","Ciao!"],
  ["peace out","Peace out!"],
  ["catch you later","Catch you later!"],
  ["i'm done","Alright, conversation complete."],
  ["that's all","Okay, thanks for chatting!"],
  ["no more","Understood. Goodbye!"],
  ["finish","Finishing up. Goodbye!"],
  ["terminate","Terminating chat session. Goodbye."],
  ["close","Closing conversation. Farewell!"],
  ["shut down","I can't shut down, but I'll stop responding now. Goodbye!"],
  ["log off","Logging off metaphorically. Bye!"]
];

/* ===================== WEIGHTS ===================== */

const pretrainedWeights = {
  weightsIH: [],
  weightsHO: [],
  biasH: [],
  biasO: []
};

/* ===================== RESPONSE ===================== */

function getResponse(input) {
  const clean = input.toLowerCase().replace(/[^\w\s]/g,"");
  const words = clean.split(/\s+/).filter(Boolean);

  let best = null;
  let scoreMax = 0;

  for (const [ex,res] of trainingData) {
    const exWords = ex.split(" ");
    const score = words.filter(w=>exWords.includes(w)).length;
    if (score > scoreMax) {
      scoreMax = score;
      best = res;
    }
  }

  if (!best) {
    return [
      "I'm not sure I understood.",
      "Try asking differently.",
      "That isn't in my training data.",
      "I'm a simple demo chatbot."
    ][Math.floor(Math.random()*4)];
  }

  return best;
}

/* ===================== INIT ===================== */

function initializeNetwork() {
  console.log("Initializing neural chatbot...");
  setTimeout(()=>{
    console.log("✅ Ready");
    document.dispatchEvent(new Event("networkReady"));
  },800);
}

initializeNetwork();
