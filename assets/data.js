const UI = {
  fr: {
    nav: [["accueil","Accueil"],["videos","Vidéos"],["a-propos","A Propos"],["portfolio","Photos"],["contact","Contact"],["liens","Liens"],["remerciements","Remerciements"]],
    videosTitle: "Vidéos", search: "Chercher un nom ou un poste", none: "Aucune vidéo ne correspond.",
    prev: "Précédente", next: "Suivante", back: "Toutes les vidéos", others: "Vidéos", opening: "Voir la vidéo",
    translation: "Traduction", questionsPdf: "Questions des entrevues (PDF)", more: "En savoir plus...",
    send: "Envoyer", sentNote: "Aperçu : le message n'est pas envoyé. Sur le vrai site, ce formulaire sera relié à une boîte mail.",
    menu: "Menu", close: "Fermer", photo: "Photo", formInvalid: "Renseignez votre nom et une adresse e-mail valide.", formUnset: "Ce formulaire n'est pas encore relié à une adresse e-mail.", formOpened: "Votre application de messagerie s'ouvre avec le message prêt à envoyer."
  },
  en: {
    nav: [["accueil","Home"],["videos","Videos"],["a-propos","About us"],["portfolio","Photos"],["contact","Contact"],["liens","Links"],["remerciements","Thanks"]],
    videosTitle: "Videos", search: "Search a name or a position", none: "No video matches.",
    prev: "Previous", next: "Next", back: "All videos", others: "Videos", opening: "Watch the video",
    translation: "Translation", questionsPdf: "Interview questions (PDF)", more: "Learn more...",
    send: "Send", sentNote: "Preview: the message is not sent. On the live site, this form will be connected to a mailbox.",
    menu: "Menu", close: "Close", photo: "Photo", formInvalid: "Enter your name and a valid email address.", formUnset: "This form is not connected to an email address yet.", formOpened: "Your mail app opens with the message ready to send."
  }
};

const HOME = {
  fr: {
    p: [
      "Les hommes et les femmes qui ont créé l’OMC partageaient une vision commune de la croissance économique et du développement durable pour tous. Ce site est une pièce de l’héritage de ces hommes et de ces femmes. Il raconte leur histoire avec leurs propres mots, pour la période allant de 1982, parfois même avant, jusqu’en 1994.",
      "Tout est parti d’un projet de documentaire pour saisir la contribution exceptionnelle d’un homme, l’ambassadeur Trân Van Thinh Paul. Il est devenu un recueil d’entretiens avec près de 40 ministres, ambassadeurs et négociateurs, une ressource inestimable pour les membres de l’OMC, les universitaires, les chercheurs, les étudiants et les générations de demain."
    ],
    note: "Les vidéos sont présentées par ordre chronologique. Les entrevues sur ce site ont été réalisées entre janvier 2009 et décembre 2011."
  },
  en: {
    p: [
      "The creation of the World Trade Organization in 1994 set the stage for an international trading system that promotes fair commercial relations, stimulates economic growth, and supports sustainable development. With the adoption of the historic Marrakech Agreement at the conclusion of the Uruguay Round, developing and developed countries joined together in a shared commitment to an equitable world, where resources are used efficiently and all people can benefit from greater economic growth. The result of years of negotiation, the WTO now provides a transparent rules-based system and formal mechanism for the settlement of disputes. The WTO continues to reduce obstacles to trade and offers a level playing field for all Members, irrespective of their level of economic development.",
      "This documentary project began as an effort to capture the exceptional contribution of one individual, Ambassador Trân Van Thinh Paul, who played an instrumental role in the Uruguay Round negotiations. The project has now grown into a collection of interviews from nearly 40 ministers, ambassadors, chief negotiators, and other key figures. With recollections that span the 1982 – 1994 period, this project tells the story of the WTO in the words of the men and women who created it.",
      "The interviews offer insights into a variety of issues and topics: from the importance of the historic “green room” meetings, to the struggle to achieve real progress in the negotiations on agriculture, to the realization of new institutional architecture. Most importantly, these interviews capture the true spirit of the Uruguay Round negotiations, and provide an invaluable resource for WTO Members, academics and students as well as the economic actors of today and tomorrow."
    ],
    note: "Videos are presented in chronological order. The interviews on this site were recorded between January 2009 and December 2011."
  }
};

/* Descriptions en anglais (optionnelles) : affichées sur la version EN quand elles existent, sinon le texte français. */
const DESC_EN = {
 "30838690": "Herman Van Rompuy was the first permanent President of the European Council, from December 2009 to November 2014, after serving as Prime Minister of Belgium (2008–2009). Since 2019 he has chaired the board of the College of Europe. In this video, recorded while he held the presidency of the European Council, Mr Van Rompuy gives the introduction to this WTO documentary project. He stresses the importance of multilateralism, a source of the WTO's success, and what it can mean for students, workers, legislators and diplomats today."
};

/* Les descriptions des vidéos sont en français sur les deux versions du site actuel. */
const V = [
 ["30838690","Herman Van Rompuy","Herman Van Rompuy a été le premier président permanent du Conseil européen, de décembre 2009 à novembre 2014, après avoir été Premier ministre de Belgique (2008-2009). Il préside depuis 2019 le conseil d'administration du Collège d'Europe. Dans cette vidéo, enregistrée alors qu'il exerçait la présidence du Conseil européen, M. Van Rompuy nous fournit l'introduction de ce projet de documentaire de l'OMC, et souligne l'importance du multilatéralisme, source de succès de l'OMC, et de ce que cela peut signifier pour les étudiants, les travailleurs, les législateurs et les diplomates d'aujourd'hui."],
 ["29521250","Pascal Lamy","DG de l'OMC de Septembre 2005 à Septembre 2013 ;. Ancien commissaire européen au Commerce (2000-2004); Chef de cabinet pour le président de la Commission Delors CE (1983-1993)."],
 ["31135707","Peter Sutherland","Peter Sutherland, Directeur Général de l'OMC/GATT (1993-1995); Président LSE (2009- )."],
 ["31350676","Paul Trân","Ambassadeur et Représentant permanent de la Communauté européenne à Genève de 1979 à 1994."],
 ["30495229","Rufus Yerxa (USA)","OMC DDG (1995 -), USTR adjoint (1993-1995), ambassadeur au GATT (1989-1993)"],
 ["31948117","Julio Lacarte (Uruguay)","Julio Lacarte (Uruguay), ministre de l'Industrie et du Commerce et Représentant permanent du GATT (1984-1993); président et membre de l'Organe d'appel de l'OMC (1995-2002)."],
 ["29516230","Luiz Felipe Lampreia (Brazil)","Le ministre des Affaires étrangères (1996-2001); ambassadeur au GATT (1992-1995)."],
 ["31012116","Germain Denis (Canada)","Germain Denis (Canada), Président du Conseil international des céréales et aide alimentaire du Comité (1995-2006) basé à Londres; président du processus d'accès au marché de négociation globale (1990 -); négociateur en chef de l'Uruguay Round (1986-1994). U.R."],
 ["31135731","Warren Lavorel (USA)","Warren Lavorel, (Etats-Unis), Directeur général adjoint du GATT / OMC (1993-1999) et (1987-1993); Coordinateur au cycle d'Uruguay (1987-1993); ambassadeur et négociateur en chef du Cycle d'Uruguay (1987-1993) Délégué au Tokyo Round et au GATT (1975-1987)."],
 ["31135682","B. K. Zutshi (India)","BK Zutshi (Inde), Ambassadeur et Représentant Permanent auprès du GATT et de l'Uruguay Round négociateur en chef (1989-1994)."],
 ["31949939","Hassan Abouyoub (Morocco)","Hassan Abouyoub (Maroc), Ambassadeur au GATT (1988-1993)"],
 ["31350701","Minoru Endo (Japan)","Ambassadeur au GATT (1993-1996)."],
 ["29364630","Long Yongtu (China)","Long Yongtu, (Chine) vice-ministre, ministère du Commerce extérieur et coopération économique, République populaire de Chine (MOFTEC) (2002-2003); négociateur en chef pour l'adhésion de la Chine à l'OMC (1997-2001); ministre adjoint, MOFTEC (1994-1997) ; Directeur général du Département des relations internationales, le MOFTEC (1993-1994)."],
 ["31350709","Tim Groser, New Zealand","Tim Groser, actuellement ministre du Commerce et changement climatique pour la Nouvelle-Zélande (2005 -), a également été ambassadeur (2000-2004) et ancien ambassadeur adjoint de Genève (1990 - 1993)."],
 ["30505854","Rubens Ricupero","Rubens Ricupero a été ambassadeur du Brésil auprès du GATT de 1987 à 1991. Par la suite, il a occupé plusieurs postes importants dont celui de ministre des Finances (1994) pour le Brésil et secrétaire général de la CNUCED (1995-2004)."],
 ["31171021","John Weekes (Canada)","John Weekes (Canada), Président du Conseil général (1998), l'ambassadeur à l'OMC (1995-1999) Ambassadeur auprès du GATT (1987 - 1991); président du Conseil du GATT (1989)."],
 ["31363704","Yoshio Hatano (Japan)","GATT Ambassadeur extraordinaire et plénipotentiaire ; Représentant permanent auprès des Organisations internationales à Genève (1987-1990), chancelier de l'école Gakushuin."],
 ["29505552","Pierre-Louis Girard (Switzerland)","Ambassadeur de l'OMC (2000-2007); Haut responsable de l'OMC/GATT (1991-2000); Ambassadeur du GATT (1984-1988)."],
 ["30480359","Michael Samuels (USA)","Ambassadeur de Genève et négociateur en chef pour l'USTR (1985-1989)."],
 ["29505470","Renaldo Figueredo (Venezuela)","Renaldo Figueredo (Venezuela) Directeur de la CNUCED (1999-2004); conseiller spécial du Secrétaire général de la CNUCED, M. Rubens Ricupero, ministre des Affaires étrangères (1989-1991)."],
 ["31170991","Alan Oxley (Australia)","Alan Oxley (Australie), ambassadeur du GATT (1986-1989); président du Conseil du GATT (1987)."],
 ["29505563","Anthony Hill (Jamaica)","Ambassadeur (1978-1989); Mission de l'Organisation des Nations Unies (1968-1971)."],
 ["31933652","Richard Nottage (NZ)","Richard Nottage (NZ), ambassadeur auprès de l'Office de l'ONU et le GATT, (1984-1987)."],
 ["31949174","B.L. Das (India)","B.L. Das (Inde), directeur, Programmes Commerce international, UNCTAD (1985-1990); Président des Parties contractantes du GATT (1983); président du Conseil du GATT (1982), l'Ambassadeur et Représentant permanent auprès du GATT (1980 - 1983)."],
 ["29516222","Alexjandro Jara (Chile)","OMC DDG (2005 -), ambassadeur à l'OMC (2000-2002); chef de la politique commerciale du Chili (1999), secrétaire de la Mission au GATT (1979-1984)."],
 ["31170976","Celso Lafer (Brazil)","Celso Lafer (Brésil), ministre des Affaires étrangères (2001-2002) et (1992); Ministre du Commerce (1999), ambassadeur à l'OMC (1996 -1998)."],
 ["30480336","Mark Ritchie (USA)","Secrétaire d'État du Minnesota (2006-2010); président de l'Institut pour l'agriculture et la politique commerciale (1988-2006)."],
 ["31598549","Arif Hussain (India)","Arif Hussain (Inde), chef de cabinet de M. Dunkel, 1985-1993."],
 ["31350755","David Hartridge","David Hartridge a été chef de cabinet d'Arthur Dunkel directeur général du GATT, un poste qu'il a occupé de 1980 à 1985. Dans cette vidéo, M. Hartridge relate l'importance des relations personnelles et professionnelles entre Arthur Dunkel et Paul Tran, mais aussi le rôle spécial que Paul Tran occupait tout au long du Cycle d'Uruguay."],
 ["29469079","Karl Falkenberg","(Commission européenne); directeur général de l'Environnement (2008 -), Délégué à Genève, Coordination politique commerciale multilatérale à Bruxelles (1993-2000); Négociations pour le cycle de l'Uruguay (1986-1993); recrutés par TVT en 1977 pour les négociations sur le textile (1977 - 1982)"],
 ["29516228","Hervé Jouanjean","Délégué auprès du GATT (1987-1989), chef adjoint de la Délégation de la Commission européenne permanente au GATT / OMC (1993-1995), Directeur des affaires de l'OMC à la direction générale du commerce, Commission européenne (1996-2003) et actuellement directeur général du budget (Commission européenne)"],
 ["29523389","Robert Madelin","(Commission européenne), directeur général de la santé et de la protection des consommateurs (2004); Coordonnateur du GATT au Royaume-Uni(1993); chef de cabinet adjoint de Sir Leon Brittan."],
 ["31012132","Lê Van Loi","Ambassadeur Lê a servi comme Représentant permanent de la République du Vietnam à la CNUCED et d'autres organisations internationales à Genève (1966 - 1975). Dans cette vidéo, l'ambassadeur Lê aborde plusieurs thèmes clés, notamment le rôle des pays en développement dans la création de la CNUCED."],
 ["30717737","Ngô Quang Xuân","Ngô Quang Xuân (Viet Nam) a servi comme ambassadeur du Vietnam auprès des Nations Unies à Genève de 2002 à 2008.","pdf/30717737.pdf"],
 ["30495085","Nguyên Manh Cam","(Vietnam) Vice-Premier Ministre et Ministre des Affaires étrangères (1997 à 2002)","pdf/30495085.pdf"],
 ["31598540","Hamid Mamdouh","Hamid Mamdouh, Conseiller, Mission d'Egypte au GATT 1985 - 1989, Conseiller juridique auprès du service de négociation du GATT , secrétaire du Conseil des services (1995-2001), Directeur du services des divisions de l'OMC (2001 -)"],
 ["31681853","Åke Linden","Åke Linden, Secrétariat du GATT (1961-1994), Directeur du Bureau des affaires juridiques (1983-84), Conseiller spécial du Directeur général de 1989 à 1993, Assistant du Directeur général (1993-94)."],
 ["31935884","Paul Ramadier","fonctionnaire de la Commission européenne (1965-2003), Direction Générale du Commerce"],
 ["31948123","Benny Berg Sorensen","Benny Berg Sorensen: fonctionnaire de la Commission européenne, Direction Générale du Commerce (1977-2009). Membre clé de l'équipe de Paul Tran dans la négociation des textiles."],
 ["33176624","Stéphane Hessel","Ambassadeur de France, y compris pour les Nations Unies à Genève entre le cycle de Tokyo et les travaux préparatoires de l'U.R., auteur de Indignez-vous (2010)"]
];

const ABOUT = {
  fr: {
    p: [
      "Ce projet a été initié par Gabrielle Marceau, et a été réalisé avec l’aide d’une équipe d’étudiants, de jeunes professionnels et des bénévoles qui se sont engagés à partager l’histoire de l’OMC, en suscitant des débats sur des questions d’importance pour l’ordre commercial international.",
      "**Gabrielle Marceau** est une experte du droit du commerce international avec une longue carrière de service au sein du Secrétariat de l’OMC, qu’elle a rejoint en 1994. Elle est actuellement conseiller à la Division des affaires juridiques. De 2005 à 2010, Gabrielle Marceau a travaillé comme conseiller juridique au Cabinet du Directeur général Pascal Lamy. Elle est professeur associé à l’Université de Genève et à l’Institut universitaire d’études du développement international (IHEID) et elle enseigne régulièrement dans d’autres institutions. Professeur Marceau est l’auteur de nombreux ouvrages dans le domaine du droit du commerce international et des lois économiques internationales.",
      "A Genève, **Jean-Phillippe Uldry**, a agi comme premier caméraman et conseil pour la publication de ces entrevues; même chose pour multiples conseils. **Mathieu Quehen**, a également agi comme caméraman principal et a fait le montage des entrevues. De Paris, **Pierre Steene** et **Mathieu Rasse** on conçut et construit ce site internet et l’ont rendu opérationnel. **Bassanr El Attar** et **Mikella Hurley**, mes assistantes à Genève, ont notamment créé la page YouTube de ce projet et édité plusieurs entrevues.",
      "Ce projet, à l’origine, se voulait un hommage à l’Ambassadeur Paul Trân Van Thinh à l’occasion de ses 80 ans; nous voulions interviewer ses collègues et les ambassadeurs, ministres et négociateurs qui ont travaillé avec lui à la finalisation du Cycle de l’Uruguay et la création de l’OMC. Les questions que nous avons utilisées comme base de ces entrevues sont annexées à cette page. À mesure que des participants de plus en plus nombreux venaient offrir leur témoignage, il est devenu évident qu’il s’agissait d’une occasion extraordinaire. Outre des souvenirs précis du travail de Paul Trân et de l’empreinte européenne qu’il a laissée, chacun faisait aussi part de ses réflexions sur le multilatéralisme et sur ce qui ce qui a permis de poser les jalons de l’OMC – l’engagement collectif des participants.",
      "@pdf",
      "Nous espérons que ce projet continuera d’évoluer et que d’autres témoignages et observations sur le multilatéralisme de l’OMC seront recueillis pour enrichir ce projet – cette bibliothèque électronique."
    ],
    pdf: "pdf/questionnaire.pdf"
  },
  en: {
    p: [
      "This project was initiated by Gabrielle Marceau, and was realized with the support of a team of students, young professionals and volunteers who are committed to sharing the history of the WTO, and encouraging debate on issues of importance for the international trading order.",
      "**Gabrielle Marceau** is an international trade law expert with a distinguished career at the WTO Secretariat, which she joined in 1994. She currently serves as Counsellor in the Legal Affairs Division. From 2005 to 2010 she served as legal advisor in the Cabinet of Director-General Pascal Lamy, . She is an Associate Professor of Law at the University of Geneva and at the Graduate Institute for International Development Studies (IHEID); she also teaches in other institutions. Professor Marceau is a prolific scholar, as the author of several books, articles and essays in the fields of WTO law and international economic law.",
      "**Jean-Phillippe Uldry**, served as a cameraman in Geneva but he also provided media and general advice for both this website and the clips on the YouTube page. **Mathieu Quehen**, also served as cameraman in Geneva and he edited each interview. From Paris, **Pierre Steene** and **Mathieu Rasse**, created the website and ensured its operation. Finally, **Bassant El Attar** and **Mikella Hurley**, my assistants in Geneva, created the related YouTube page and edited videos for both the YouTube page and this website.",
      "This project started as a tribute to Ambassador Trân Van Thinh Paul through interviews of people who worked with him: fellow ambassadors, chief negotiators, ministers, colleagues and others. The questions used during those interviews can be found below. As more and more participants came forward to be interviewed, it became clear that we were dealing with an extraordinary opportunity. While these individuals offered rich accounts of Paul Trân’s work, and the mark he left on Europe and the multilateral trading order, they also shared their thoughts and visions of multilateralism that paved the way for today’s WTO. As a result, we decided to enlarge the circle of interviewees and expand the objectives of the original project.",
      "@pdf",
      "We hope that this initiative continues as an evolving electronic library comprising experts’ comments and observations on the WTO and its multilateral trading system."
    ],
    pdf: "pdf/questionnaire_en.pdf"
  }
};

const PORTFOLIO = [
 [
  "Fin des négociations du cycle d'Uruguay le 15 Décembre 1993",
  0,
  205,
  "Photo_GMarceau_01"
 ],
 [
  "",
  0,
  160,
  "Photo_GMarceau_02"
 ],
 [
  "",
  0,
  175,
  "UrurguayRoundphoto"
 ],
 [
  "",
  0,
  190,
  "UrurguayRoundphoto1"
 ],
 [
  "Siège de l'OMC à Genève",
  0,
  215,
  "wto"
 ],
 [
  "Siège de l'OMC à Genève - nouveau bâtiment",
  0,
  225,
  "WTO_Building"
 ],
 [
  "Siège de l'OMC à Genève",
  0,
  200,
  "WTO_Entrance"
 ],
 [
  "",
  0,
  150,
  "photo"
 ],
 [
  "Réunion en \"Green room\" à 9:00 le 15 décembre 1993, après l'accord de principe intervenu plus tôt le même jour dans le cadre d'une réunion des chefs de délégations approuvant la proposition de Rufus Yerxa qui avait proposé que le nom utilisé tout au long de la négociation, \"Organisation multilatérale du commerce\" soit changée pour \"Organisation mondiale du commerce.\"",
  1,
  168,
  "Dec_15_1993_am_Green_Room"
 ]
];
/* Ordre : WTO_Building (accueil du portfolio) puis les images 4 à 12 ; l'image 12 renvoie vers le PDF de la Green room. */

const CONTACT = {
  fr: { name: "Votre nom (obligatoire)", email: "Votre email (obligatoire)", subject: "Sujet", msg: "Votre message" },
  en: { name: "Your Name (required)", email: "Your Email (required)", subject: "Subject", msg: "Your Message" }
};

const LINKS = {
  fr: [
    ["Page Youtube en relation", "http://www.youtube.com/thewtocreation"],
    ["Informations relatives à l’Organisation Mondiale du Commerce :", "http://wto.org/indexfr.htm"],
    ["Plus d’information sur le cycle d’Uruguay :", "http://www.wto.org/french/thewto_f/whatis_f/tif_f/fact5_f.htm"],
    ["Documents officiels de recherche concernant L’OMC :", "http://docsonline.wto.org/gen_home.asp?language=1&_=1"],
    ["Base de données de recherche de l’histoire des négociations du GATT et de l’OMC :", "http://gatt.stanford.edu/page/home"]
  ],
  en: [
    ["For the related Youtube Page :", "http://www.youtube.com/thewtocreation"],
    ["For general information on the World Trade Organization:", "http://www.wto.org/"],
    ["For more information on the history of the Uruguay Round:", "http://www.wto.org/english/thewto_e/whatis_e/tif_e/fact5_e.htm"],
    ["Official documents of the WTO for researchers:", "http://docsonline.wto.org/gen_home.asp?language=1&_=1"],
    ["For a searchable database of documents on the negotiating histories of the GATT and WTO:", "http://gatt.stanford.edu/page/home"]
  ]
};

const DONORS = [
 ["Abate","Antonino"],["Barrot","Jacques"],["Barthollet","Nicolas"],["Bayle","Jules"],["Bourgeois","Jacques"],["Bronckers","Marco"],["Coste","Vincent"],["Couniniotis","Yannis"],["Crosby","Daniel, Barbara"],["Davoudi","Léonardo"],["de Gouvion St Cyr","Laurent, Marie-Hélène"],["de Stampa","Patrick, Francine"],["Falkenberg","Karl, Angelika"],["Fourny","Patrick, Hélène, Alexandre"],["Garcia-Bercero","Ignacio"],["Goyer-Rozanes","René, Claire"],["He","Nong, Wang Qing, Liou"],["Idil","Umit, Catherine, Céline"],["Jouanjean","Hervé, Martine"],["Lafaye de Micheaux","Philippe"],["Lê","Thi My Dzung"],["Leleu","Stéphane"],["Loustau","Suzanne"],["Madelin","Robert, Marie-Christine"],["Magnus","John"],["Mossu","Laurent"],["Ngô","Kim Dông"],["Nguyên","Ngoc Son"],["Pavy","Pierre, Myriam"],["Peretti-Polat","Graziella"],["Petris","Richard"],["Ramadier","Paul, France"],["Rizkallah","Walid, Julie"],["Rueda-Caballero","Salvador, Celia"],["Scheele","Jonathan, Sarah"],["Smets","Roeland"],["Sorensen","Benny Berg"],["Steel","Piet, Carine"],["Trân","Thach Lan, Françoise,Valérie, Olivier, Christophe"],["Trân","Thi Trâm"],["Vermulst","Edwin"],["Wasesha-Trân","Luzius, Thu Lang"],["Wilson","Bruce"]
];

const THANKS = {
  fr: {
    intro: "La réalisation de ce projet n’aurait pas été possible sans l’effort combiné de techniciens et de la contribution financière de nombreux individus",
    tabs: [["donateurs","Les Donateurs"],["benevoles","Les Bénévoles"],["interviews","Interviews"],["techniciens","Les Techniciens"]],
    donorsLead: "Ces entrevues, la page Youtube et ce site internet n’auraient pas vu le jour sans la généreuse contribution financière de plusieurs amis de l’OMC et du GATT à travers le monde. Ils sont :",
    orgs: "Merci aussi à **OMC/WTO, China-Europa Forum, Fondation pour le Progrès de l’Homme, Gides & Associates, Pernod-Ricard, Rongead, Whiteford, Taylor and Preston, Lawyers.**",
    volLead: "Ce projet n’aurait pas été possible sans l’aide supplémentaire de plusieurs collègues et amis partout dans le monde. Pour n’en nommer que quelques uns d’entre eux :",
    vol: ["Mikella Hurley in Geneva","Bassant Al Attar in Cambridge","Shweta Bajaj in Delhi","Judith Fehevari in Washington","Julie Pain, Inger Bauer, Sandra Dondenne, Valerie Hughes, Keith Rockwell, Steve Cooper in Geneva","Brigitte, Paul Trân in Brussels","Shuo Yu, Yannong Zheng, Li Bai, Danni Lai in Beijing","Dale Wiehoff in Mineapolis","Institute for Agriculture and Trade Policy (IATP) in Minneapolis."],
    intLead: "Un remerciement spécifique aux personnes qui nous ont aidés à réaliser les entrevues sur place, sur cinq continents différents. Ils sont :",
    int: ["Ambassadeur et membre du corps d’appel **Shotaro Oshima**, qui a interviewé l’ambassadeur Hatano à Tokyo, Japon;","WTO Deputy Director General **Harsha Singh**, who Interviewed Ambassador Zutschi in Jaipur, India and Ambassador Das in Geneva;","Directeur général adjoint de l’OMC **Victor do Prado**, qui a interviewé Mr. Sutherland à Geneva et nous a assisté pour les interviews des ambassadeurs Lampreia, Ricupero et Lafer;","M. **Kazumochi Kometani**, qui a interviewé l’ambassadeur Endo à Tokyo, Japon;","Mlle **Fleur Thompson**, qui a interviewé le Ministre Groser à Auckland, Nouvelle Zeland;","Le Professeur **Vera Thorstensen**, qui a interviewé l’ambassadeur Lampreia à Sao Paulo, Bresil;","M. **Bruce Wilson**, qui a interviewé Samuels à Washington,Etats-Unis;","Dr. **Shuo YU** et Mlle **Li BAI** qui ont travaillé à la réalisation de l’entrevue du Ministre Long Yongtu à Beijing, Chine","M. **Quang Minh**, qui a interviewé le Vice Premier Ministre Nguyên Manh Câm, l’Ambassadeur Ngô Quang Xuân et l’Ambassadeur Phan Thuy Thanh à Hanoi, Vietnam;","M. **Joseph Rocher**, qui a interviewé l’ex Premier Ministre Rocard, K. Falkenberg, H. Jouanjean, R. Madelin, B B. et P. Ramadier."],
    techLead: "**Un remerciement spécial aux personnes en charge de l’assistance technique vidéo, internet et diverse :**",
    tech: ["Mr **Jean-Phillippe Uldry**, cadreur à Genève qui nous a fourni une expertise technique et de multiples conseils;","Mr **Mathieu Quehen**, cadreur et monteur à Genève qui nous a fourni une expertise technique et de multiples conseils;","Mr **Pierre Steene** and Mr **Mathieu Rasse**, à Paris, pour leur travail créatif de webdesigner et de développeur du site internet.","Ms **Mikella Hurley**, à Genève, qui a travaillé avec passion sur les pages Youtube et sur ce site Internet."],
    camLead: "**Merci également aux caméramans sur place qui sont :**",
    cam: ["**Daniel Vitalis Galano** à Sao Paulo au Brésil;","**Sharat Kumar** à Jaipur en Inde;","**Laurent Benchana** à Tokyo au Japon;","**Daniel Breton** à Rimouski au Canada;","**Shaoyang Fan** à Pékin en China;","**Richard Feather** à Washington aux Etats-Unis;","**Thierry Leclercq** à Bruxelles en Belgique;","**Pat Murray** à Auckland en Nouvelle Zélande;","**Sébastien Trân** à Paris, France;","**Catherine Trân** à Paris, France;","**Shaoyang Fan** à Pékin en Chine; et","**Quang Vinh** à Hanoi au Vietnam."]
  },
  en: {
    intro: "The realisation of this project would not have been possible without the combined efforts, technical assistance and financial contributions of numerous individuals.",
    tabs: [["donateurs","Donors"],["benevoles","Volunteers"],["interviews","Interviews"],["techniciens","Technicians"]],
    donorsLead: "Those interviews, the Youtube page and this website would not have been possible without the generous financial contributions from many friends of the GATT and WTO community in several continents. Among them :",
    orgs: "Thanks also to **OMC/WTO, China-Europa Forum, Fondation pour le Progrès de l’Homme, Gides & Associates, Pernod-Ricard, Rongead, Whiteford, Taylor and Preston, Lawyers.**",
    volLead: "This project would not have been possible without the additional assistance of several colleagues and friends all over the world. To name just of few of them:",
    vol: ["Mikella Hurley in Geneva","Bassant Al Attar in Cambridge","Shweta Bajaj in Delhi","Judith Fehevari in Washington","Julie Pain, Inger Bauer, Sandra Dondenne, Valerie Hughes, Keith Rockwell, Steve Cooper in Geneva","Brigitte, Paul Trân in Brussels","Shuo Yu, Yannong Zheng, Li Bai, Danni Lai in Beijing.","Dale Wiehoff in Mineapolis","Institute for Agriculture and Trade Policy (IATP) in Minneapolis."],
    intLead: "Very Special Thanks are due, in particular, to the individuals who helped to conduct the interviews on location, in five different continents. They are:",
    int: ["Ambassador and Appellate Body Member **Shotaro Oshima**, who interviewed Ambassador Hatano in Tokyo, Japan;","WTO Deputy Director General **Harsha Singh**, who Interviewed Ambassador Zutschi in Jaipur, India and Ambassador Das in Geneva;","Deputy Chief of Staff **Victor do Prado**, who interviewed Mr. Sutherland in Geneva and assisted us with the interviews of Ambassadors Lampreia, Ricupero and Lafer;","Mr **Kazumochi Kometani**, who interviewed Ambassador Endo in Tokyo, Japan;","Ms **Fleur Thompson**, who interviewed Minister Groser in Auckland, New Zealand;","Professor **Vera Thorstensen**, who interviewed Ambassador Lampreia in Sao Paulo, Brazil;","Mr **Bruce Wilson**, who interviewed Ambassador Samuels in Washington, United States;","Dr **Shuo YU** and Ms **Li BAI** who worked on the realisation of the interview of Minister Long Yongtu in Beijin, China","Mr **Quang Minh**, who interviewed Vice Premier Nguyên Manh Câm, Ambassador Ngô Quang Xuân and Ambassador Phan Thuy Thanh in Hanoi, Vietnam;","Mr **Joseph Rocher**, who interviewed ex French Prime Minister Rocard, K. Falkenberg, H. Jouanjean, R. Madelin, B B. et P. Ramadier.."],
    techLead: "**Special thanks to those who provided technical and audio-visual assistance, including:**",
    tech: ["Mr **Jean-Phillippe Uldry**, who served as cameraman in Geneva , and provided technical expertise and advice;","Mr **Mathieu Quehen**, who also served as cameraman and editor in Geneva, and provided technical expertise and advice;","Mr **Pierre Steene** and Mr **Mathieu Rasse**, in Paris, for their creative work on website design and implementation; and finally,","Ms **Mikella Hurley**, in Geneva, who worked endlessly on the related Youtube page and on this website."],
    camLead: "**Thanks also go to the cameramen on location**, including:",
    cam: ["**Daniel Vitalis Galano** in Sao Paulo in Brazil;","**Sharat Kumar** in Jaipur in India;","**Laurent Benchana** in Tokyo in Japan;","**Daniel Breton** in Rimouski in Canada;","**Shaoyang Fan** in Beijing in China;","**Richard Feather** in Washington in the United States;","**Thierry Leclercq** in Brussels in Belgium;","**Pat Murray** in Auckland in New Zealand;","**Sébastien Trân** in Paris, France;","**Catherine Trân** in Paris, France;","**Shaoyang Fan** in Beijin in China; and","**Quang Vinh** in Hanoi in Vietnam."]
  }
};


/* Vimeo : [durée en secondes, chemin de la vignette] */
const VM = {
 "30838690": [
  195,
  "207362822-755368a4b2bc11c2654d67c740d801d2b2708c70dce6d6d7bff4fc51e7217167"
 ],
 "29521250": [
  1675,
  "197837694-da3b0c55a7cb65988d15cd5663c41d7800b1bb4a2e141d779e72f860abfba328"
 ],
 "31135707": [
  1717,
  "209642339-1a6159cc0030406a47bb267755658a9db72e369d077ce5b96534d2ec11991043"
 ],
 "31350676": [
  2006,
  "211293113-fe7c4672ed3d14b4863b93b731b76e551d84429c5670bb4cdd5164abc22cde92"
 ],
 "30495229": [
  2477,
  "204888931-caad7f3f357e9a362b40096cb35365b6f377b14f6521d4bb9f83afb8c059a7b1"
 ],
 "31948117": [
  2628,
  "215825549-76484af0d387e49426630b23629a03693df348f3d2ca6902771b1cc953b2784f"
 ],
 "29516230": [
  1782,
  "197794974-91b64c99b594361a03dd476817c3062d0aa34a1a024c7966848c8dc784864633"
 ],
 "31012116": [
  3084,
  "208694874-1236749c8023b426d40e70e2c7afb07da01f8a7a32059c40cabc798a4e983f16"
 ],
 "31135731": [
  2274,
  "209615210-d28feafbce400538764488ccb0b62c4aa7922950270c2cd650d5e14f149730ed"
 ],
 "31135682": [
  2614,
  "209641563-f73d645f38d7c2ddd9a04d2cf24498a49c7c8c7a8f41a3a0c428fe5a618d99b8"
 ],
 "31949939": [
  640,
  "215784980-f02f811ae2355bdc49a122596dec276482a8d7152064c15a7313f920606d7e9c"
 ],
 "31350701": [
  3418,
  "211286681-423b0ea200f68e5d31bb1d85ab8d509d7ab42aea957e9ee0a72ef126d0352dcb"
 ],
 "29364630": [
  1190,
  "196649992-4b316f2163109050282b8d6a990e3db11f6817a9cc93e4ecf7cd02cc2bf83851"
 ],
 "31350709": [
  372,
  "211227886-2034548cc119417e6c5c3b083bdb7795621a18efb7e7bcae7675acb4641b87a0"
 ],
 "30505854": [
  3061,
  "204975004-fb03090c42f5adacb2a90a812787ef94f38bdd1d32dc175d5b361bd22091753b"
 ],
 "31171021": [
  2000,
  "209943694-9e7cedbda69b8195dd3edf46efe3508689fb148d0dd138e2b43440f1db04ceb7"
 ],
 "31363704": [
  2704,
  "211352130-845c16232c8e934b9594a7ec4bdeb5103e22884db087d82556dfa2a18c0966df"
 ],
 "29505552": [
  1627,
  "197761351-ccb1f9cf01b2d7b299a55a4d71b071bec258c49ab7e371bb688861dcf9f7abc3"
 ],
 "30480359": [
  2214,
  "204842964-1c8f044fe65d4d79d7618770d6c078e1e888142c4709cff9f909ef5fbd928904"
 ],
 "29505470": [
  2324,
  "197756967-c210e79ce107ee34d62fc4824084dff4cd12278cc41975e45bac928f1896019b"
 ],
 "31170991": [
  2049,
  "209942980-8320708e20df24790d749ac798a485777c5ba438d6556c3d301db24399c289e9"
 ],
 "29505563": [
  2212,
  "197760625-780e78f6b40dc31e976c73c1eff8edb35b6d8b2609765cf53401fdb8bb5f31fd"
 ],
 "31933652": [
  2067,
  "215668922-e4a704ec8e4aecf1714403bac33b344d5443b7cdad7c25beff74b9c0bc1618c4"
 ],
 "31949174": [
  2553,
  "215823440-9652530689183ea4b5b4b195691f79e145859e18e3c300c266c2fef68c566d1e"
 ],
 "29516222": [
  1149,
  "197790388-c9c9653385a29e9571248eadc358745141bb4a88959e9379910c127fe39aa66c"
 ],
 "31170976": [
  3436,
  "209941108-95204408902a9b9141fb9c77cdb3891e3791dc5b830f204f125f750c63e03a0a"
 ],
 "30480336": [
  999,
  "204827275-c0933d74bc543d9419e027918361a43913c2d81638a5b1d5a5d8f27b76023af0"
 ],
 "31598549": [
  2220,
  "213134217-4e2a46e53cc048929467bdb837af37ecf381761318a646ca6bf9e594fcd7f098"
 ],
 "31350755": [
  2302,
  "211295496-28eb416c04461996fa7b248fc952405acb4de424a65e1962d8110753bd9521fd"
 ],
 "29469079": [
  1518,
  "197445378-e87cf7b3d6537a0b69e04811ffae7a6614c3be93a5c1bcb5b72b28e5402d6a50"
 ],
 "29516228": [
  551,
  "197783103-d5b47e668567e2859735da6cac0dbcaa304155b8f2a1282758b8f3ce716e1c8a"
 ],
 "29523389": [
  547,
  "197834939-ea9a91614226ec82d8ec091afdc36c7061fed5733c1b2458b9f7eff6ff75f4fe"
 ],
 "31012132": [
  1360,
  "208689185-ace778ec9b42f7a39d02bac0cebf41e590f04ccd838697802e59777340253626"
 ],
 "30717737": [
  1422,
  "206477233-edb643c1d8586425b6351c6ab8b6efeae36138629bd52c4e1a4abd00438e09de"
 ],
 "30495085": [
  1278,
  "204872124-f416e74df1c9bd9c3b3914cfe0588ffa3f973bd01fb9761c13e369ce05a89c43"
 ],
 "31598540": [
  1894,
  "213122631-aaac8f39cd47b90ed0bf83f00c961153b6d1a264ae47147084d46824ee0f21eb"
 ],
 "31681853": [
  1028,
  "213741145-6c460c6baee874d2850b1548817377323363739411a84a516a78509df2ed94dd"
 ],
 "31935884": [
  526,
  "215662732-abe91e468ab89a313db20e841ae33b475ab6b1482a113d0c6a9daf84f5f6253a"
 ],
 "31948123": [
  226,
  "215753374-24cd41995ebe63bfcf3afda6d39d713477cf6f7869a088624d43ca7ac4a24660"
 ],
 "33176624": [
  127,
  "224988863-7d6d8b3516022168611a666f9cb0dbf19ff587242a908460b9d43be1fa80549c"
 ]
};

const CONFIG = {
  oldSite: "https://www.wtocreation.org/",
  localAssets: true,    /* passer à true quand portfolio_images/ et pdf/ sont dans ce dépôt */
  contactEmail: "sebastientran@icloud.com"      /* adresse qui reçoit les messages du formulaire de contact */
};
