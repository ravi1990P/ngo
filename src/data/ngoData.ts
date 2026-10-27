import { Program, TimelineEvent, MentorOrLeader, GalleryItem, ImpactStory } from '../types';

export const NGO_INFO = {
  name: 'Mahatma Gandhi Agriculture and Rural Welfare Society',
  hindiName: 'महात्मा गाँधी एग्रीकल्चर एण्ड रूरल वेलफेयर सोसायटी',
  slogan: 'राष्ट्र विकास एवं जन कल्याणकारी बहुउद्देशीय कार्यों के लिये समर्पित 1987 से निरन्तर',
  subSlogan: 'Dedicated to National Development and Multi-Purpose Public Welfare continuously since 1987',
  regNumber: '23259/1989',
  isoCert: 'ISO 9001:2015',
  citExemption: 'CIT Exemption Bhopal / 80G/43/2015-16',
  foundedYear: '1987',
  registeredYear: '1989',
  address: '20-A, Main Street, Mhow, District Indore, Madhya Pradesh - 453441',
  hindiAddress: '20-ए, मेनस्ट्रीट, महू जिला इन्दौर (म.प्र.) - 453441',
  phone: '07324-272670',
  mobiles: ['+91-9827097716', '+91-9424877625'],
  email: 'mg20101989@gmail.com',
  website: 'www.mahatmagandhiagricultureandruralwelfaresociety.org',
  facebook: 'https://www.facebook.com/mahatmagandhingo/',
  bankDetails: {
    bankName: 'State Bank of India',
    branch: 'Mhow Cantt, Indore (M.P.)',
    accountName: 'Mahatma Gandhi Agriculture and Rural Welfare Society',
    accountNumber: '31092847521',
    ifscCode: 'SBIN0000424',
    upiId: 'mg20101989@sbi',
  },
  pdfDocumentPath: '/assets/aistudio/1000613302_b8eb161b.pdf',
  logoPath: '/assets/aistudio/310232869_405548791732957_5103624318666767262_n_c1281e31.jpg'
};

export const POEM = {
  title: 'भारत की अभिलाषा',
  englishTitle: 'The Aspiration of India',
  author: 'पं. डॉ. भूपेन्द्र भाई धारवा',
  year: 'सन् 1987',
  stanzas: [
    'प्यार की ज्योत बन जलते रहो, दीप आशा का बन प्रज्वलित होते रहो',
    'जय भारत जय भारत जय भारत...',
    'राष्ट्रीयता नस-नस में हो तुम्हारी, अमर जवानों की अमर निशानी हो तुम',
    'शहीदों की आन को बढ़ाओं तुम, औद्योगिक प्रगति के अंश हो तुम',
    'राष्ट्र की धरोहर हो तुम, छोटो बड़ों में न भेदभाव समझो तुम',
    'भारत के हो तुम भारतीयता अमर निशानी तुम्हारी, राष्ट्र का विकास हो तुम',
    'भारत की आशा हो तुम, उठो जागो तकनीक से आगे बढ़ो',
    'राष्ट्र की प्रगति में सहयोग है तुम्हारा छोटा विचार न करो तुम',
    'भारतीय हैं त्याग कर्मों से किया है हमने, प्रगति संस्कृति का सूचक है हमारी',
    'वंदे मातरम जय भारत जय हिन्द...',
    'अमर जवानों की कहानी हो तुम, हम सब एक हैं एक ही रहेंगे',
    'न धर्म न जाति का भेदभाव होगा हमारे बीच, भारतीय हे भारत माँ के सपूत हैं',
    'मरते दम तक करेंगे सेवा भारत माता की आन की, जय भारत जय भारत जय भारत...'
  ]
};

export const PROGRAMS: Program[] = [
  {
    id: 'child-nutrition',
    title: 'Child Nutrition Program',
    hindiTitle: 'बाल पोषण एवं शुद्ध पेयजल अभियान',
    category: 'nutrition',
    shortDesc: 'Combating child malnutrition through hot fortified meals, clean drinking water filters, and hygiene kits across underprivileged rural clusters.',
    fullDesc: 'Inspired by the findings documented in our public health initiatives on water purity and digestive health, our Child Nutrition Program targets children in remote rural schools and slums. As 88% of waterborne illnesses stem from unsafe water, we pair nutritious cooked food with chlorine/alum water purification tablets and hand-washing sanitation routines.',
    keyHighlights: [
      'Daily wholesome midday nutrition with pulses, seasonal greens, and jaggery',
      'Safe water filtration systems in village anganwadis and schools',
      'Over 4,500 children educated on proper hand hygiene to slash disease incidence by 50%',
      'Regular growth monitoring & micro-nutrient supplements'
    ],
    impactMetric: '4,500+',
    impactLabel: 'Children Provided Safe Nutrition & Hygiene Support',
    location: 'Mhow, Dhar, Indore Rural Blocks',
    featured: true,
    image: '/assets/aistudio/189502448_114830537454254_2191313892699588364_n_edb23059.jpg',
    beneficiaryStory: {
      quote: 'My children no longer fall sick from water-borne fever every monsoon. The hot meal and water filter at school gave them their strength back.',
      person: 'Radha Bai',
      village: 'Gram Kodariya, Mhow'
    }
  },
  {
    id: 'homeless-mothers-food',
    title: 'Food Assistance for Homeless & Underprivileged People',
    hindiTitle: 'असहाय एवं निराश्रित माताओं हेतु अन्नपूर्णा सेवा',
    category: 'nutrition',
    shortDesc: 'Respectful hot meal distribution drives for destitute mothers, elderly women, and daily-wage laborers living without shelter or security.',
    fullDesc: 'Started with grassroots community kitchens, the Annapurna Seva provides nutritious, warm meals directly to homeless mothers and stranded laborers at railway junctions, bus depots, and peri-urban construction belts, ensuring no mother sleeps hungry.',
    keyHighlights: [
      'Mobile food van delivering freshly cooked vegetarian meals twice daily',
      'Special focus on expectant mothers and destitute senior citizens',
      'Emergency ration kits with grain, cooking oil, lentils, and salt during cold waves',
      'Zero food waste protocol partnering with local wedding halls and caterers'
    ],
    impactMetric: '120,000+',
    impactLabel: 'Nutritious Meals Served to Homeless Individuals',
    location: 'Mhow Station, Indore Suburbs & Highway Belts',
    featured: true,
    image: '/assets/aistudio/186291815_106857721584869_2193140446088829324_n_8fa82cf3.jpg',
    beneficiaryStory: {
      quote: 'When my husband passed away, I had no family left. The volunteers bring hot khichdi and fresh rotis every evening with deep respect.',
      person: 'Kamala Dadi',
      village: 'Old Cantonment Periphery, Mhow'
    }
  },
  {
    id: 'rural-agriculture',
    title: 'Agriculture & Rural Development',
    hindiTitle: 'कृषि एवं ग्रामीण स्वावलंबन विकास परिषद',
    category: 'rural',
    shortDesc: 'Equipping marginal farmers with sustainable farming practices, modern harvest safety camps, seed banks, and women-led Self-Help Groups (SHGs).',
    fullDesc: 'Since 1987, the society has spearheaded agricultural revitalization in Madhya Pradesh. In collaboration with national agricultural scientists and institutions (including free safety awareness camps with Ashok Leyland and tractor mechanics), we guide farmers on Panchatattva conservation (Soil, Water, Air, Sun, Nature) and micro-enterprise development.',
    keyHighlights: [
      'Self-Help Groups (SHGs) launched since 2000 empowering over 1,500 women artisans & farmers',
      'Crop diversity and organic manure workshops (Jaivik Kheti)',
      'Free harvester and machinery safety training for farm laborers',
      'Advocacy for rural infrastructure, including historic proposals for the Kurel River Bridge'
    ],
    impactMetric: '120+',
    impactLabel: 'Village Panchayats & Farmer Clusters Supported',
    location: 'Malwa-Nimar Region, Ujjain-Ratlam Border',
    featured: true,
    image: '/assets/extracted/photo_grape_seminar.jpg',
    beneficiaryStory: {
      quote: 'The technical guidance on organic crop rotation and seed preservation doubled my yield while reducing expensive chemical inputs.',
      person: 'Rameshwar Patel',
      village: 'Gram Datoda, Indore'
    }
  },
  {
    id: 'education-awareness',
    title: 'Education & Awareness Program',
    hindiTitle: 'शिक्षा, साक्षरता एवं जन चेतना कार्यक्रम',
    category: 'education',
    shortDesc: 'Promoting girl-child schooling, vocational skills, computer literacy, voter education, and anti-exploitation civic campaigns.',
    fullDesc: 'Under the national leadership of our founder Pt. Dr. Bhupendra Dharwa (Member, National Child Labour Committee 1999), the society has worked tirelessly to pull children from hazardous work into schools, conduct voter awareness campaigns with the Election Commission, and educate rural youth in modern technology.',
    keyHighlights: [
      'Vidya Setu scholarship and school supplies for daughters of farm laborers',
      'Free digital literacy and basic computer skills for rural teenagers',
      'Voter awareness campaigns endorsed with national leaders and media since 1988',
      'Protection campaigns against fraudulent investment schemes protecting rural families'
    ],
    impactMetric: '8,200+',
    impactLabel: 'Students & Youth Trained in Literacy and Civic Rights',
    location: 'Indore, Mhow & Dhar Rural Districts',
    featured: true,
    image: '/assets/extracted/photo_awards_ceremony.jpg',
    beneficiaryStory: {
      quote: 'I learned basic computer operations and digital accounting here. Today I assist our village co-operative society with pride.',
      person: 'Pooja Verma',
      village: 'Simrol, Indore'
    }
  },
  {
    id: 'animal-welfare',
    title: 'Animal Feeding & Welfare (Gau Seva)',
    hindiTitle: 'गौ सेवा, मूक पशु-पक्षी आहार एवं रक्षा',
    category: 'animal',
    shortDesc: 'Compassionate care for abandoned cattle, street animals, and native birds with regular fodder drives, water troughs, and veterinary aid.',
    fullDesc: 'Sanstha believes deeply that true social welfare includes all living beings. We manage daily green fodder distribution to village Gaushalas, install clay drinking bowls for birds in summer, and rescue injured street animals with volunteer veterinarians.',
    keyHighlights: [
      'Year-round green fodder and nutritious feed for aged and non-milking cows',
      'Summer water pot distribution across 500+ locations for birds and stray animals',
      'Emergency first-aid and wound dressing for road accident animal victims',
      'Awareness among cattle owners against plastic garbage ingestion'
    ],
    impactMetric: '1,200+',
    impactLabel: 'Cows & Domestic Animals Fed and Rescued Annually',
    location: 'Mhow Gaushalas, Pithampur & Indore Outskirts',
    featured: true,
    image: '/assets/aistudio/186523968_109005234703451_4681535782306803869_n_f776c8d8.jpg',
    beneficiaryStory: {
      quote: 'The society supplies green grass and medical care to our shelter cows during tough summer months when fodder prices shoot up.',
      person: 'Shyamdas Ji',
      village: 'Gau Seva Ashram, Mhow'
    }
  },
  {
    id: 'disaster-relief',
    title: 'Disaster Relief & Emergency Assistance',
    hindiTitle: 'आपदा प्रबंधन एवं आपातकालीन जन राहत',
    category: 'relief',
    shortDesc: 'Rapid deployment teams delivering grain packets, tarpaulins, warm blankets, and medical kits during floods, heatwaves, and seasonal crises.',
    fullDesc: 'From the Simhastha Mahakumbh service camps to seasonal flash flood relief in the Malwa river belts, the society activates on-ground volunteer networks within hours to distribute shelter kits, clean water tankers, and dry rations.',
    keyHighlights: [
      '24/7 volunteer response network ready for flood and severe drought response',
      'Distribution of heavy blankets and thermal clothing during harsh winters',
      'Safe temporary shelter arrangements in coordination with local administration',
      'Simhastha pilgrim assistance camps serving over 50,000 devotees'
    ],
    impactMetric: '50+',
    impactLabel: 'Relief Missions & Seasonal Response Camps Conducted',
    location: 'Madhya Pradesh & Regional Disaster Zones',
    featured: true,
    image: '/assets/aistudio/189312192_114830564120918_6198032234799367481_n_34b7bd1b.jpg',
    beneficiaryStory: {
      quote: 'When the river overflowed our settlement in 2021, the society arrived by evening with tarpaulins, dry rations, and chlorine drops.',
      person: 'Bhanwar Singh',
      village: 'Kurel Riverside Settlement'
    }
  },
  {
    id: 'medical-emergency',
    title: 'Medical Emergency Assistance',
    hindiTitle: 'आकस्मिक चिकित्सा एवं स्वास्थ्य सुरक्षा सहयोग',
    category: 'medical',
    shortDesc: 'Free health diagnostic camps, ambulance coordination, life-saving medicine grants, and hygiene education for unorganized sector workers.',
    fullDesc: 'Affordable healthcare remains out of reach for unorganized agricultural laborers. We coordinate with senior Ayurvedic and Allopathic doctors to provide free diagnoses, distribute essential medicines, and arrange emergency patient transport to Indore district hospitals.',
    keyHighlights: [
      'Quarterly multi-specialty health diagnosis and eye screening camps',
      'Ayurvedic and wellness guidance inspired by founding mentor Vaidya Ramchandra Soni',
      'Subsidized medicine bank for chronic elderly patients',
      'Emergency ambulance tie-ups for critical village deliveries and accidents'
    ],
    impactMetric: '18,500+',
    impactLabel: 'Patients Treated in Free Health & Diagnostic Camps',
    location: 'Mhow Cantonment & Surrounding Tehsils',
    featured: false,
    image: '/assets/extracted/photo_health_checkup.jpg',
    beneficiaryStory: {
      quote: 'At the health camp, doctors diagnosed my cataract early and arranged surgery without cost. I can see my grandchildren clearly now.',
      person: 'Gokul Ram',
      village: 'Hasalpur, Mhow'
    }
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '1987',
    title: 'Establishment of the Council',
    hindiTitle: 'संस्था की नींव - इंडियन एग्रीकल्चर एण्ड रूरल डेवलपमेन्ट काउन्सिल',
    description: 'Founded with divine blessings of Mahamandaleshwar 1008 Swami Gurumukhanand Ji Maharaj and guidance of Smt. Parvati Devi and Basantilal Dharwa to protect the five elements of nature (Panchatattva: Jal, Zameen, Agni, Aakash, Vayu) and empower rural farmers and women.',
    significance: 'First conceptual framework for holistic rural agro-welfare.'
  },
  {
    year: '1989',
    title: 'Official Society Registration',
    hindiTitle: 'महात्मा गाँधी एग्रीकल्चर एण्ड रूरल वेलफेयर सोसायटी के रूप में पंजीयन',
    description: 'Officially registered under the Society Registration Act (Reg. No. 23259/1989), formally establishing institutional bylaws, non-profit governance, and multi-purpose social mandate.',
    significance: 'Official legal incorporation under Government of Madhya Pradesh.'
  },
  {
    year: '1990',
    title: 'Women Co-operative & Rajmata Scindia Meeting',
    hindiTitle: 'महिला सहकारी साख संस्था एवं राजमाता विजयाराजे सिंधिया का मार्गदर्शन',
    description: 'Established the Mahila Sahkari Sakh Sanstha with active guidance and support from Rajmata Vijaya Raje Scindia for rural women economic independence.',
    keyDignitaries: ['Rajmata Vijaya Raje Scindia'],
    significance: 'Women empowerment and micro-credit groundwork.'
  },
  {
    year: '1991',
    title: 'Plant Conservation Accord with Union Agriculture Minister',
    hindiTitle: 'केन्द्रीय कृषि मंत्री डॉ. बलराम जाखड़ से कृषि विकास पर वार्ता',
    description: 'Formal delegation led to Union Agriculture Minister Dr. Balram Jakhar and Agriculture Secretary Shyamji Suri at Krishi Mantralaya, Delhi, securing support for regional plant conservation and horticulture.',
    keyDignitaries: ['Dr. Balram Jakhar', 'Shri Shyamji Suri'],
    significance: 'National level policy advocacy for crop diversity.'
  },
  {
    year: '1992',
    title: 'Grape Seminar, Bollywood Dialogue & Simhastha Camp',
    hindiTitle: 'अंगूर संगोष्ठी, रामानंद सागर से संवाद एवं सिंहस्थ सेवा शिविर',
    description: 'Organized the National Grape & Crop Expansion Seminar. Met legendary film creator Dr. Ramanand Sagar and Subhash Sagar in Mumbai for rural welfare media outreach; hosted Simhastha 1992 service camp in Ujjain.',
    keyDignitaries: ['Dr. Ramanand Sagar', 'Subhash Sagar'],
    significance: 'Mass cultural and pilgrim welfare mobilization.'
  },
  {
    year: '1993',
    title: 'Rs. 31.94 Cr Proposal to PM Narasimha Rao & Mass Wedding',
    hindiTitle: 'प्रधानमंत्री नरसिंहराव को 31.94 करोड़ की परियोजना व सामूहिक विवाह',
    description: 'Presented a Rs 31.94 Crore rural technical training and women TRYSEM proposal to Prime Minister P.V. Narasimha Rao. Founder Dr. Bhupendra Dharwa celebrated his own wedding in an Adarsh Samuhik Vivah alongside rural couples.',
    keyDignitaries: ['PM P.V. Narasimha Rao', 'Asha Dharwa', 'Dr. Bhupendra Dharwa'],
    significance: 'Pioneered equality in social weddings and rural employment schemes.'
  },
  {
    year: '1994',
    title: 'Ministry of Environment & Forests Committee',
    hindiTitle: 'पर्यावरण एवं वन मंत्रालय राष्ट्रीय समिति सदस्यता',
    description: 'Founder Dr. Bhupendra Dharwa appointed to the National Advisory Committee of Ministry of Environment & Forests, working on public safety, agricultural safety, and factory emissions.',
    significance: 'Direct contribution to national environmental safety policy.'
  },
  {
    year: '1996',
    title: 'Historic Model Code of Conduct Suggestions',
    hindiTitle: 'आदर्श चुनाव आचार संहिता - मुख्य चुनाव आयुक्त टी.एन. शेषन को सुझाव',
    description: 'Submitted an influential comprehensive project on Model Code of Conduct for clean elections to CEC T.N. Seshan, President Dr. Shankar Dayal Sharma, CJI A.M. Ahmadi, PM Narasimha Rao, and opposition leader Atal Bihari Vajpayee.',
    keyDignitaries: ['T.N. Seshan', 'Dr. Shankar Dayal Sharma', 'Atal Bihari Vajpayee'],
    significance: 'National democratic reform contribution.'
  },
  {
    year: '1999',
    title: 'National Child Labour Committee Appointment',
    hindiTitle: 'राष्ट्रीय बाल श्रम सलाहकार समिति - श्रम मंत्रालय भारत सरकार',
    description: 'On account of impactful field work rescuing child laborers and assisting the disabled, visually impaired, and unorganized workers, Dr. Bhupendra Dharwa was appointed National Member of the National Child Labour Advisory Committee, Ministry of Labour, Govt. of India.',
    significance: 'Cabinet-level national appointment for child protection.'
  },
  {
    year: '2000-2002',
    title: 'Self-Help Groups (SHGs) & Kurel River Bridge',
    hindiTitle: 'स्वयं सहायता समूह (SHG) गठन एवं कुरेल नदी पुल निर्माण पहल',
    description: 'Spearheaded formation of women Self-Help Groups with banking linkages. Successfully persuaded the MP Chief Minister and administration for the Kurel River bridge connecting Ujjain and Ratlam districts.',
    significance: 'Permanent physical infrastructure and financial inclusion.'
  },
  {
    year: '2006',
    title: 'National Water Parliament (Rashtriya Jal Sansad)',
    hindiTitle: 'राष्ट्रीय जल संसद - पूर्व केन्द्रीय मंत्री सोमपाल शास्त्री एवं मोहन भागवत',
    description: 'Convened the National Water Parliament for river basin conservation, clean drinking water, and environmental security with former Union Minister Dr. Sompal Shastri and RSS Chief Mohan Bhagwat.',
    keyDignitaries: ['Dr. Sompal Shastri', 'Dr. Mohan Bhagwat'],
    significance: 'High-level civil society water preservation consensus.'
  },
  {
    year: '2011-2017',
    title: 'Farmer Safety Drives with Ashok Leyland & Gau Seva Expansion',
    hindiTitle: 'अशोक लीलैंड सुरक्षा शिविर, स्वास्थ्य अभियान एवं गौ सेवा विस्तार',
    description: 'Partnered with commercial manufacturers like Ashok Leyland to train harvesters and tractor drivers free of cost. Expanded permanent cow shelters, bird grain centers, and water conservation workshops.',
    significance: 'Zero-accident agricultural machinery initiative and animal welfare.'
  },
  {
    year: 'Present',
    title: 'Continuous Grassroots Service',
    hindiTitle: '1987 से निरन्तर - समग्र जन कल्याण की अविरल धारा',
    description: 'Continuing 37+ unbroken years of multi-purpose rural welfare, child nutrition, emergency disaster readiness, and transparent community stewardship.',
    significance: 'Impact across over 120 panchayats and thousands of families.'
  }
];

export const MENTORS_AND_LEADERS: MentorOrLeader[] = [
  {
    name: 'Pt. Dr. Bhupendra Dharwa',
    title: 'Founder & National Environmentalist',
    role: 'संस्थापक एवं राष्ट्रीय पर्यावरणविद् ज्योतिर्विद वैज्ञानिक',
    bio: 'Visionary social reformer, former National Member of National Child Labour Committee (Ministry of Labour, GOI) and Ministry of Environment & Forests Advisor. Dedicated over 37 years to rural development, child nutrition, and Gandhian ideals.',
    image: '/assets/extracted/founder_portrait.jpg'
  },
  {
    name: 'Brahmalin Mahamandaleshwar 1008 Swami Gurumukhanand Ji Maharaj',
    title: 'Spiritual Guide & Eternal Mentor',
    role: 'परम पूज्य गुरुदेव - प्रेरणा स्रोत',
    bio: 'Revered spiritual leader whose divine blessings and commitment to selfless service form the moral foundation of the society.',
    image: '/assets/extracted/mentors_board.jpg'
  },
  {
    name: 'Late Smt. Parvati Devi & Late Shri Basantilal Dharwa',
    title: 'Guiding Pillars & Founding Patrons',
    role: 'मार्गदर्शक संरक्षक',
    bio: 'Guiding source of inspiration whose legacy of empathy and dedication to village welfare motivated the establishment of the society in 1987.',
    image: '/assets/extracted/mentors_board.jpg'
  },
  {
    name: 'Vaidya Pt. Dr. Dinesh Joshi & Smt. Prabha Joshi',
    title: 'Chief Patrons & Ayurvedic Advisors',
    role: 'वरिष्ठ प्रान्तीय उपाध्यक्ष अखिल भारतीय आयुर्वेदिक महासभा',
    bio: 'Leading Ayurvedic practitioners providing guidance on traditional health remedies, rural wellness camps, and ethical stewardship.',
    image: '/assets/extracted/mentors_board.jpg'
  },
  {
    name: 'Smt. Ganga Satish Vyas',
    title: 'Senior Patron',
    role: 'संरक्षक',
    bio: 'Pillar of community mobilization, advocating for rural women health, widow pension support, and girl-child education.',
    image: '/assets/extracted/mentors_board.jpg'
  },
  {
    name: 'Shri Bhalchandra Ji Bhatt',
    title: 'Chief Priest, Khajrana Ganesh Mandir',
    role: 'मुख्य पुजारी - खजराना गणेश मंदिर, इन्दौर',
    bio: 'Spiritual mentor supporting the Annapurna Seva food assistance drives and moral harmony conclaves.',
    image: '/assets/extracted/mentors_board.jpg'
  }
];

export const IMPACT_METRICS = [
  { value: '37+', label: 'Years of Unbroken Grassroots Service', subtitle: 'Dedicated since 1987' },
  { value: '4,500+', label: 'Children Covered Under Nutrition & Safe Water', subtitle: 'Hygiene & midday meals' },
  { value: '120+', label: 'Village Panchayats & Clusters Supported', subtitle: 'Across Malwa-Nimar region' },
  { value: '1,200+', label: 'Rescued Cows & Animals Fed Annually', subtitle: 'Gaushala & street welfare' },
  { value: '120,000+', label: 'Hot Meals Served to Underprivileged', subtitle: 'Annapurna Seva drives' },
  { value: '100%', label: '80G Tax Exemption Certified', subtitle: 'CIT Exemption Bhopal' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'National Conference on Rural Welfare & Crop Expansion',
    category: 'archival',
    year: '1992',
    location: 'Bhopal / Delhi',
    description: 'High-level conference with agricultural scientists and national leaders discussing grassroots village empowerment.',
    caption: 'Historical assembly of agricultural directors and community workers.',
    image: '/assets/extracted/photo_meeting_leaders.jpg'
  },
  {
    id: 'g2',
    title: 'Child Nutrition & Clean Drinking Water Drive',
    category: 'nutrition',
    year: 'Recent',
    location: 'Gram Kodariya, Mhow',
    description: 'Distribution of chlorine-purified water filters and nutrient-rich cooked meals to rural primary school students.',
    caption: 'Promoting clean water and hygiene to prevent childhood gastrointestinal diseases.',
    image: '/assets/extracted/hygiene_washing.jpg'
  },
  {
    id: 'g3',
    title: 'Gau Seva & Green Fodder Provision Camp',
    category: 'animal',
    year: 'Recent',
    location: 'Mhow Gau Shala',
    description: 'Volunteers unloading and providing fresh green fodder and fresh water to elderly and rescued cows.',
    caption: 'Compassionate animal welfare and cattle health checkups.',
    image: '/assets/extracted/photo_rural_gathering.jpg'
  },
  {
    id: 'g4',
    title: 'Dialogue with National Ministers & Media',
    category: 'archival',
    year: '1996',
    location: 'New Delhi',
    description: 'Founder Pt. Dr. Bhupendra Dharwa presenting election reform and rural bridge project blueprints to national leaders.',
    caption: 'Archival record of democratic reform representations submitted to national leaders.',
    image: '/assets/extracted/photo_national_dignitaries.jpg'
  },
  {
    id: 'g5',
    title: 'Emergency Medical & Health Response Assistance',
    category: 'medical',
    year: 'Recent',
    location: 'Mhow Tehsil Rural & Highway',
    description: 'Volunteer health teams with protective equipment distributing hydration, medicines, and emergency medical assistance to migrant workers and laborers.',
    caption: 'On-ground medical safety & emergency relief response.',
    image: '/assets/aistudio/184309392_103384135265561_2248581701787032485_n_04c100ed.jpg'
  },
  {
    id: 'g6',
    title: 'Panchatattva Bhoomi & Rural Land Conservation Drive',
    category: 'rural',
    year: 'Recent',
    location: 'Malwa-Nimar Rural Region',
    description: 'Grassroots volunteers conducting soil restoration, ground cleaning, and agricultural eco-awareness across village lands.',
    caption: 'Active community participation in Panchatattva earth and environmental conservation.',
    image: '/assets/aistudio/186291815_106857721584869_2193140446088829324_n__1__8fa82cf3.jpg'
  },
  {
    id: 'g7',
    title: 'Simhastha Mahakumbh Pilgrim Assistance Camp',
    category: 'archival',
    year: 'Simhastha',
    location: 'Ujjain Pavitra Kshetra',
    description: 'Round-the-clock water and medical service camp for tens of thousands of pilgrims and sanyasis.',
    caption: 'Service camp operated during the holy Simhastha congregation.',
    image: '/assets/extracted/photo_simhastha_camp.jpg'
  },
  {
    id: 'g8',
    title: 'National Science & Water Hygiene Awareness Campaign (NCSTC DST)',
    category: 'nutrition',
    year: 'National Campaign',
    location: 'Indore & Mhow Villages',
    description: 'Educating 4,500 children and families on hand hygiene, boiling/filtering drinking water, and sanitation with NCSTC DST Govt. of India.',
    caption: 'Official civic hygiene pledge & water conservation campaign publication.',
    image: '/assets/aistudio/475066249_910197084601456_1680927011821460303_n_5967ae6f.jpg'
  },
  {
    id: 'g9',
    title: 'Mass Tree Plantation (Vriksharopan) for Panchatattva Protection',
    category: 'rural',
    year: 'Continuous',
    location: 'Malwa River Belts & Mhow',
    description: 'Planting native banyan, neem, and peepal saplings along riverside catchments to restore groundwater levels.',
    caption: 'Ecological conservation honoring the Panchatattva constitution.',
    image: '/assets/extracted/photo_tree_plantation.jpg'
  },
  {
    id: 'g10',
    title: 'Homeless Mother Annapurna Food Seva Distribution',
    category: 'nutrition',
    year: 'Daily',
    location: 'Mhow & Indore Highway Periphery',
    description: 'Respectfully distributing hot, nourishing meals twice daily to destitute mothers and stranded laborers.',
    caption: 'Annapurna Seva ensuring no mother sleeps on an empty stomach.',
    image: '/assets/extracted/photo_food_service.jpg'
  },
  {
    id: 'g11',
    title: 'National Recognition & Civic Honors Ceremony',
    category: 'archival',
    year: '1999',
    location: 'Delhi & Bhopal',
    description: 'Conferment of advisory honors for extensive social service in child labour rehabilitation and rural welfare.',
    caption: 'Official felicitation for distinguished humanitarian service.',
    image: '/assets/extracted/photo_awards_ceremony.jpg'
  },
  {
    id: 'g12',
    title: 'Parliamentary & Ministerial Dialogue on Water & Forestry',
    category: 'archival',
    year: '2006',
    location: 'New Delhi Sansad Bhawan',
    description: 'Consultation with Union Ministers on National Water Parliament (Rashtriya Jal Sansad) and rural watersheds.',
    caption: 'Advocacy for national river protection and rural irrigation rights.',
    image: '/assets/extracted/photo_minister_dialogue.jpg'
  },
  {
    id: 'g13',
    title: 'Hot Meals & Kadhi Distribution to Homeless & Stranded Citizens',
    category: 'nutrition',
    year: '2024',
    location: 'Mhow & Indore City Outskirts',
    description: 'Serving hot freshly-cooked kadhi, khichdi, and sabzi from large stainless steel vessels directly to laborers and homeless families.',
    caption: 'Daily Annapurna Seva in community camps.',
    image: '/assets/aistudio/189502448_114830537454254_2191313892699588364_n_edb23059.jpg'
  },
  {
    id: 'g14',
    title: 'Street Animal Care & Stray Dog Biscuit Feeding Drive',
    category: 'animal',
    year: '2024',
    location: 'Mhow Cantonment & Colony Roads',
    description: 'Compassionate volunteers feeding biscuits and treats to stray community dogs and checking for wounds.',
    caption: 'Promoting human-animal coexistence and kindness.',
    image: '/assets/aistudio/188765144_113913130879328_6067231000070454556_n_0366c5f5.jpg'
  },
  {
    id: 'g15',
    title: 'Emergency Packaged Drinking Water Distribution by Volunteers',
    category: 'nutrition',
    year: '2024',
    location: 'Indore & Mhow Junctions',
    description: 'Dedicated youth volunteers on two-wheelers distributing sealed water bottles to outdoor laborers in high summer temperatures.',
    caption: 'Heatwave and thirst relief across city transit points.',
    image: '/assets/aistudio/189312192_114830564120918_6198032234799367481_n_34b7bd1b.jpg'
  },
  {
    id: 'g16',
    title: 'Panchhi Dana Seva: Summer Bird Grain & Water Care',
    category: 'animal',
    year: '2024',
    location: 'Public Grounds & Sanstha Premises',
    description: 'Spreading grains and setting water bowls for pigeons, sparrows, and native birds in scorched open areas.',
    caption: 'Panchhi Seva during dry seasons.',
    image: '/assets/aistudio/185771362_105926505011324_7094578906130560191_n_10036882.jpg'
  },
  {
    id: 'g17',
    title: 'Swachhata, Shuddhata, Swasthata & Jal Sanrakshan Campaign',
    category: 'archival',
    year: 'Official',
    location: 'Mhow & Indore Central Office',
    description: 'Official society pledge and public awareness drive supported by National Council for Science and Technology Communication (N.C.S.T.C), DST, Govt. of India.',
    caption: 'Panchatattva protection pledge and office contacts.',
    image: '/assets/aistudio/475066249_910197084601456_1680927011821460303_n_5967ae6f.jpg'
  },
  {
    id: 'g18',
    title: 'Press Chronicle: Seva Se Milti Hai Mansik Shakti',
    category: 'archival',
    year: 'Press',
    location: 'Dainik Jagran & National Media',
    description: 'Published reflections on selfless humanitarian service and mental peace inspired by Swami Vivekananda and Mahatma Gandhi.',
    caption: 'Documented national media feature on moral service.',
    image: '/assets/aistudio/185628750_105926441677997_4962522418373883475_n_866e50e7.jpg'
  }
];

export const IMPACT_STORIES: ImpactStory[] = [
  {
    id: 'story-1',
    name: 'Sunita Bai',
    age: 38,
    location: 'Gram Datoda, Indore',
    program: 'Rural Agriculture & SHG Empowerment',
    story: 'Before joining the society\'s Self-Help Group, Sunita had no independent savings and struggled to afford school fees for her two daughters. Through micro-credit and organic vegetable cultivation training, she established a profitable kitchen garden and vermicompost bed.',
    outcome: 'Currently earns an independent income of ₹12,000/month and has funded both daughters\' high school education.',
    consentVerified: true
  },
  {
    id: 'story-2',
    name: 'Master Aryan',
    age: 9,
    location: 'Mhow Cantonment Slum Colony',
    program: 'Child Nutrition & Safe Water Program',
    story: 'Aryan suffered chronic bouts of dysentery and weakness due to contaminated borewell water in his locality, frequently missing school. The society installed a community gravity water filtration unit and provided daily fortified nutritional packets.',
    outcome: '100% school attendance over the last 18 months, with normal weight gain and full energetic participation in sports.',
    consentVerified: true
  },
  {
    id: 'story-3',
    name: 'Elderly Dadi Gangubai',
    age: 72,
    location: 'Mhow Railway Station Periphery',
    program: 'Food Assistance for Homeless Mothers',
    story: 'Left without family support in her twilight years, Gangubai survived on irregular temple prasad. The society\'s evening Annapurna Seva team registered her for daily hot meal deliveries and provided warm thermal blankets every winter.',
    outcome: 'Receives two hot nutritious meals daily with dignity, warm bedding, and regular basic geriatric medical checkups.',
    consentVerified: true
  }
];

export const PARTNERS = [
  { name: 'Ministry of Labour & Employment (GOI)', role: 'Historical National Child Labour Committee Collaboration (1999)', category: 'Govt. Advisory' },
  { name: 'Ministry of Environment & Forests (GOI)', role: 'Public Safety & Environmental Committee Representation', category: 'Govt. Advisory' },
  { name: 'Rajiv Gandhi Mission (Govt. of MP)', role: 'Watershed & Village Development Collaboration (1995)', category: 'State Program' },
  { name: 'Ashok Leyland & Technical Centers', role: 'Free Harvester & Tractor Operator Safety Camps', category: 'Corporate CSR' },
  { name: 'Khajrana Ganesh Mandir Trust, Indore', role: 'Spiritual Patronage & Annapurna Food Seva Assistance', category: 'Community Trust' },
  { name: 'ISO 9001:2015 Certification Body', role: 'Certified Quality Management in Non-Profit Operations', category: 'Quality Standard' }
];

export const DONATION_TIERS = [
  {
    amount: 500,
    title: 'Child Nutrition Week',
    hindiTitle: 'बाल पोषण सेवा',
    description: 'Provides 10 wholesome hot meals and water purification drops for an underprivileged child.',
    impact: '10 Nourishing Meals',
    badge: 'Popular'
  },
  {
    amount: 1500,
    title: 'Gau Seva & Fodder Month',
    hindiTitle: 'माहवारी गौ ग्रास सेवा',
    description: 'Sponsors nutritious green fodder, dry husk, and veterinary mineral mixture for rescued cattle.',
    impact: '1 Cow Fed for 1 Month',
    badge: 'Recommended'
  },
  {
    amount: 3000,
    title: 'Homeless Mother Food Packets',
    hindiTitle: 'निराश्रित माता अन्नपूर्णा राशन',
    description: 'Supplies monthly dry ration kits (wheat flour, pulses, oil, spices) to two destitute elderly women.',
    impact: '2 Monthly Family Rations',
    badge: 'High Impact'
  },
  {
    amount: 5000,
    title: 'Rural Education & Health Kit',
    hindiTitle: 'ग्रामीण शिक्षा एवं स्वास्थ्य किट',
    description: 'Funds school supplies, uniforms, water filters, and diagnostic health checkup for 5 village students.',
    impact: '5 Students Empowered',
    badge: 'Transformation'
  }
];
