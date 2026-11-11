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

/* Descriptions en anglais : affichées sur la version EN (le texte français reste utilisé si une entrée manque). */
const DESC_EN = {
 "30838690": "Herman Van Rompuy was the first permanent President of the European Council, from December 2009 to November 2014, after serving as Prime Minister of Belgium (2008–2009). Since 2019 he has chaired the board of the College of Europe. In this video, recorded while he held the presidency of the European Council, Mr Van Rompuy gives the introduction to this WTO documentary project. He stresses the importance of multilateralism, a source of the WTO's success, and what it can mean for students, workers, legislators and diplomats today.",
 "29521250": "Pascal Lamy: Director-General of the WTO from September 2005 to August 2013; European Trade Commissioner (1999–2004); Chief of Staff to European Commission President Jacques Delors (1985–1994). President emeritus of the Jacques Delors Institute, he has chaired the Climate Overshoot Commission since 2022.",
 "31135707": "Peter Sutherland: Director-General of the GATT, then the WTO (1993–1995); Chairman of Goldman Sachs International (1995–2015); Chairman of the Court and Council of the LSE (2008–2015). Died 7 January 2018.",
 "31350676": "Paul Trân Van Thinh: joined the European Commission in 1961; Special Representative for Textile Negotiations (1977–1979); Ambassador and Permanent Representative of the European Commission to the UN and the GATT in Geneva from 1979 to 1994, Geneva negotiator of the Uruguay Round for the Community and its twelve Member States.",
 "30495229": "Rufus Yerxa (USA): WTO Deputy Director-General (2002–2013), Deputy USTR (1993–1995), Ambassador to the GATT (1989–1993); President of the National Foreign Trade Council (2016–2021).",
 "31948117": "Julio Lacarte (Uruguay), Minister of Industry and Trade and Permanent Representative to the GATT (1984–1993); Chairman and member of the WTO Appellate Body (1995–2002). Died 4 March 2016.",
 "29516230": "Minister of Foreign Affairs of Brazil (1995–2001); Ambassador to the GATT (1992–1995). Died 2 February 2016.",
 "31012116": "Germain Denis (Canada), Assistant Deputy Minister for Multilateral Trade Negotiations at Canada's Department of Foreign Affairs and International Trade (appointed 1988), Canada's negotiator in the Uruguay Round and head of the negotiating office in Ottawa; Chairman of the International Grains Council and of the Food Aid Committee (1995–2006), based in London.",
 "31135731": "Warren Lavorel (USA), Deputy Director-General of the GATT/WTO (1993–1999) and (1987–1993); Uruguay Round Coordinator (1987–1993); Ambassador and Chief Negotiator of the Uruguay Round (1987–1993); Delegate to the Tokyo Round and the GATT (1975–1987).",
 "31135682": "B. K. Zutshi (India), Ambassador and Permanent Representative to the GATT, India's chief negotiator in the Uruguay Round (1989–1994); Chairman of the GATT Council (1992) and of the Contracting Parties (1993–1994); later first Vice-Chairman of TRAI, India's telecom regulator.",
 "31949939": "Hassan Abouyoub (Morocco), Ambassador to the GATT (1988–1993); led Morocco's accession to the GATT and its negotiations with the European Community; Minister of Agriculture; Moroccan Ambassador to France (1998–2004), to Italy (2010–2019), then to Romania and Moldova (since 2019).",
 "31350701": "Minoru Endo (Japan), Ambassador to the GATT (1993–1996); Chairman of the WTO Council for Trade in Goods (1995).",
 "29364630": "Long Yongtu (China): Vice-Minister of MOFTEC (Ministry of Foreign Trade and Economic Cooperation) (1997–2003); Chief Negotiator for China's accession to the WTO (1995–2001); Secretary-General of the Boao Forum for Asia (2003–2010); earlier Assistant Minister (1994–1997) and Director-General of MOFTEC's Department of International Relations (1993–1994).",
 "31350709": "Tim Groser (New Zealand): Minister of Trade (2008–2015) and Member of Parliament (2005–2015); New Zealand Ambassador to the United States (2016–2018); former Ambassador to the WTO (2002–2005) and Deputy Ambassador in Geneva (1990–1993).",
 "30505854": "Rubens Ricupero was Brazil's Ambassador to the GATT from 1987 to 1991. He later held several important posts, including Minister of Finance of Brazil (1994) and Secretary-General of UNCTAD (1995–2004).",
 "31171021": "John Weekes (Canada), Chairman of the General Council (1998), Ambassador to the WTO (1995–1999), Ambassador to the GATT (1987–1991); Chairman of the GATT Council (1989). Senior adviser at Sidley Austin (2003–2009), then at Bennett Jones (since 2010).",
 "31363704": "Yoshio Hatano (Japan), Ambassador Extraordinary and Plenipotentiary to the GATT; Permanent Representative to the International Organizations in Geneva (1987–1990); Japan's Permanent Representative to the United Nations in New York (in post in 1993); Chancellor of the Gakushuin school.",
 "29505552": "Pierre-Louis Girard (Switzerland), GATT Ambassador (1984–1988); Chairman of the Working Party on China's accession to the GATT, then the WTO (1987–2001); senior GATT/WTO official (1991–2000).",
 "30480359": "Michael Samuels (USA), Geneva Ambassador and Chief Negotiator for the USTR (1986–1989). Died 8 August 2022.",
 "29505470": "Renaldo Figueredo (Venezuela), Director at UNCTAD (1999–2004); Special Adviser to the UNCTAD Secretary-General, Mr Rubens Ricupero, Minister of Foreign Affairs (1989–1991).",
 "31170991": "Alan Oxley (Australia), GATT Ambassador (1985–1989); Chairman of the GATT Contracting Parties (1987); founder of ITS Global.",
 "29505563": "Anthony Hill (Jamaica), Ambassador (1978–1989), Permanent Representative to the GATT (in post in Geneva in 1987–1988); United Nations Mission (1968–1971).",
 "31933652": "Richard Nottage (New Zealand), Ambassador to the UN Office and the GATT (1984–1987); Secretary of the New Zealand Ministry of Foreign Affairs and Trade (1991–1999). Died in 2025.",
 "31949174": "B. L. Das (India), Director, International Trade Programmes, UNCTAD (1985–1990); Chairman of the GATT Contracting Parties (1983); Chairman of the GATT Council (1982); Ambassador and Permanent Representative to the GATT (1980–1983).",
 "29516222": "Alejandro Jara (Chile): WTO Deputy Director-General (2005–2013), WTO Ambassador (2000–2002); Head of Chile's trade policy (1999), Secretary of the Mission to the GATT (1979–1984).",
 "31170976": "Celso Lafer (Brazil), Minister of Foreign Affairs (2001–2002) and (1992); Minister of Trade (1999), Ambassador to the WTO (1996–1998). President of FAPESP from 2007; member of the Brazilian Academy of Letters.",
 "30480336": "Mark Ritchie (USA), Minnesota Secretary of State (2007–2015); President of the Institute for Agriculture and Trade Policy (1988–2006); President of Global Minnesota (2019–2022).",
 "31598549": "Arif Hussain (India), Director of the Office of GATT Director-General Arthur Dunkel (appointed 1990), then head of Market Access and Coordination at the Secretariat (1993).",
 "31350755": "David Hartridge was Chief of Staff to Arthur Dunkel, Director-General of the GATT, from 1980 to 1985. He later headed the WTO's Trade in Services Division and served as Acting Director-General in 1999. In this video, Mr Hartridge recounts the importance of the personal and professional relationship between Arthur Dunkel and Paul Tran, as well as the special role Paul Tran played throughout the Uruguay Round.",
 "29469079": "Karl Falkenberg (European Commission): Director-General for the Environment (2009–2015), then adviser at the European Political Strategy Centre (retired in 2017); President of the EU chapter of the Club of Rome. Earlier: delegate in Geneva, coordination of multilateral trade policy in Brussels (1993–2000); Uruguay Round negotiations (1986–1993); recruited by Trân Van Thinh in 1977 for the textiles negotiations (1977–1982).",
 "29516228": "Hervé Jouanjean: Delegate to the GATT (1987–1989), Deputy Head of the Permanent Delegation of the European Commission to the GATT/WTO (1993–1995), Director for WTO Affairs at the Directorate-General for Trade, European Commission (1996–2003), then Director-General for the Budget (2009–2014).",
 "29523389": "Robert Madelin (European Commission): Director-General for Health and Consumer Protection (2004–2010), then for Communications Networks, Content and Technology (2010–2015); retired in 2016, Chairman of FIPRA International. Earlier: GATT Coordinator in the United Kingdom (1993); Deputy Chief of Staff to Sir Leon Brittan.",
 "31012132": "Ambassador Lê served as Permanent Representative of the Republic of Vietnam to UNCTAD and other international organizations in Geneva (1966–1975). In this video, Ambassador Lê addresses several key themes, notably the role of developing countries in the creation of UNCTAD.",
 "30717737": "Ngô Quang Xuân (Viet Nam), Ambassador and head of Vietnam's Permanent Mission to the UN, the WTO and other international organizations in Geneva (2003–2008), after nearly seven years as Permanent Representative in New York (from 1996); he played an important role in Vietnam's WTO accession negotiations.",
 "30495085": "(Vietnam) Deputy Prime Minister (1997–2002), also Minister of Foreign Affairs (in office in 1995 and in 1999).",
 "31598540": "Hamid Mamdouh, Counsellor at the Egyptian Mission to the GATT (1985–1989), Legal Adviser to the GATT negotiating service, Secretary of the Council for Trade in Services (1995–2001), Director of the WTO Services and Investment Division (2001–2017).",
 "31681853": "Åke Linden, GATT Secretariat (1961–1994), Director of the Legal Affairs Office (1983–1985), Special Adviser to the Director-General from 1989 to 1993, Assistant to the Director-General (1993–1994).",
 "31935884": "Official of the European Commission (1965–2003), Directorate-General for Trade.",
 "31948123": "Benny Berg Sorensen: official of the European Commission, Directorate-General for Trade (1977–2009). Key member of Paul Tran's team in the textiles negotiations.",
 "33176624": "Ambassador of France, including to the United Nations in Geneva between the Tokyo Round and the preparatory work for the Uruguay Round; author of Indignez-vous! (Time for Outrage!, 2010). Died in February 2013.",
};

/* Les descriptions des vidéos sont en français sur les deux versions du site actuel. */
const V = [
 ["30838690","Herman Van Rompuy","Herman Van Rompuy a été le premier président permanent du Conseil européen, de décembre 2009 à novembre 2014, après avoir été Premier ministre de Belgique (2008-2009). Il préside depuis 2019 le conseil d'administration du Collège d'Europe. Dans cette vidéo, enregistrée alors qu'il exerçait la présidence du Conseil européen, M. Van Rompuy nous fournit l'introduction de ce projet de documentaire de l'OMC, et souligne l'importance du multilatéralisme, source de succès de l'OMC, et de ce que cela peut signifier pour les étudiants, les travailleurs, les législateurs et les diplomates d'aujourd'hui."],
 ["29521250","Pascal Lamy","Pascal Lamy : directeur général de l'OMC de septembre 2005 à août 2013 ; commissaire européen au Commerce (1999-2004) ; chef de cabinet du président de la Commission Jacques Delors (1985-1994). Président émérite de l'Institut Jacques Delors, il préside la Commission sur le dépassement climatique depuis 2022."],
 ["31135707","Peter Sutherland","Peter Sutherland : directeur général du GATT puis de l'OMC (1993-1995) ; président de Goldman Sachs International (1995-2015) ; président du Court et du Conseil de la LSE (2008-2015). Décédé le 7 janvier 2018."],
 ["31350676","Paul Trân Van Thinh","Paul Trân Van Thinh : entré à la Commission européenne en 1961 ; représentant spécial pour les négociations sur le textile (1977-1979) ; ambassadeur et représentant permanent de la Commission européenne auprès de l'ONU et du GATT à Genève de 1979 à 1994, négociateur de l'Uruguay Round pour la Communauté et ses douze États membres."],
 ["30495229","Rufus Yerxa (USA)","Rufus Yerxa (États-Unis) : directeur général adjoint de l'OMC (2002-2013), USTR adjoint (1993-1995), ambassadeur au GATT (1989-1993) ; président du National Foreign Trade Council (2016-2021)."],
 ["31948117","Julio Lacarte (Uruguay)","Julio Lacarte (Uruguay), ministre de l'Industrie et du Commerce et Représentant permanent auprès du GATT (1984-1993) ; président et membre de l'Organe d'appel de l'OMC (1995-2002). Décédé le 4 mars 2016."],
 ["29516230","Luiz Felipe Lampreia (Brazil)","Ministre des Affaires étrangères du Brésil (1995-2001) ; ambassadeur au GATT (1992-1995). Décédé le 2 février 2016."],
 ["31012116","Germain Denis (Canada)","Germain Denis (Canada), sous-ministre adjoint chargé des négociations commerciales multilatérales au ministère canadien des Affaires étrangères et du Commerce international (nommé en 1988), négociateur du Canada dans l'Uruguay Round et responsable du bureau des négociations à Ottawa ; président du Conseil international des céréales et du Comité de l'aide alimentaire (1995-2006), basé à Londres."],
 ["31135731","Warren Lavorel (USA)","Warren Lavorel, (Etats-Unis), Directeur général adjoint du GATT / OMC (1993-1999) et (1987-1993); Coordinateur au cycle d'Uruguay (1987-1993); ambassadeur et négociateur en chef du Cycle d'Uruguay (1987-1993) Délégué au Tokyo Round et au GATT (1975-1987)."],
 ["31135682","B. K. Zutshi (India)","BK Zutshi (Inde), ambassadeur et représentant permanent auprès du GATT, négociateur en chef de l'Inde dans l'Uruguay Round (1989-1994) ; président du Conseil du GATT (1992) et des Parties contractantes (1993-1994) ; par la suite premier vice-président de la TRAI (autorité indienne de régulation des télécoms)."],
 ["31949939","Hassan Abouyoub (Morocco)","Hassan Abouyoub (Maroc), ambassadeur au GATT (1988-1993) ; a conduit l'adhésion du Maroc au GATT et les négociations avec la Communauté européenne ; ministre de l'Agriculture ; ambassadeur du Maroc en France (1998-2004), en Italie (2010-2019), puis en Roumanie et en Moldavie (depuis 2019)."],
 ["31350701","Minoru Endo (Japan)","Minoru Endo (Japon), ambassadeur au GATT (1993-1996) ; président du Conseil du commerce des marchandises de l'OMC (1995)."],
 ["29364630","Long Yongtu (China)","Long Yongtu (Chine) : vice-ministre du MOFTEC (ministère du Commerce extérieur et de la Coopération économique) (1997-2003) ; négociateur en chef pour l'adhésion de la Chine à l'OMC (1995-2001) ; secrétaire général du Forum de Boao pour l'Asie (2003-2010) ; auparavant ministre adjoint (1994-1997) et directeur général du Département des relations internationales du MOFTEC (1993-1994)."],
 ["31350709","Tim Groser, New Zealand","Tim Groser (Nouvelle-Zélande) : ministre du Commerce (2008-2015) et député (2005-2015) ; ambassadeur de Nouvelle-Zélande aux États-Unis (2016-2018) ; ancien ambassadeur auprès de l'OMC (2002-2005) et ambassadeur adjoint à Genève (1990-1993)."],
 ["30505854","Rubens Ricupero","Rubens Ricupero a été ambassadeur du Brésil auprès du GATT de 1987 à 1991. Par la suite, il a occupé plusieurs postes importants dont celui de ministre des Finances (1994) pour le Brésil et secrétaire général de la CNUCED (1995-2004)."],
 ["31171021","John Weekes (Canada)","John Weekes (Canada), président du Conseil général (1998), ambassadeur à l'OMC (1995-1999), ambassadeur auprès du GATT (1987-1991) ; président du Conseil du GATT (1989). Conseiller chez Sidley Austin (2003-2009), puis chez Bennett Jones (depuis 2010)."],
 ["31363704","Yoshio Hatano (Japan)","Yoshio Hatano (Japon), ambassadeur extraordinaire et plénipotentiaire auprès du GATT ; représentant permanent auprès des organisations internationales à Genève (1987-1990) ; représentant permanent du Japon auprès des Nations unies à New York (en poste en 1993) ; chancelier de l'école Gakushuin."],
 ["29505552","Pierre-Louis Girard (Switzerland)","Pierre-Louis Girard (Suisse), ambassadeur auprès du GATT (1984-1988) ; président du Groupe de travail sur l'adhésion de la Chine au GATT puis à l'OMC (1987-2001) ; haut responsable du GATT/OMC (1991-2000)."],
 ["30480359","Michael Samuels (USA)","Michael Samuels (États-Unis), ambassadeur à Genève et négociateur en chef pour l'USTR (1986-1989). Décédé le 8 août 2022."],
 ["29505470","Renaldo Figueredo (Venezuela)","Renaldo Figueredo (Venezuela) Directeur de la CNUCED (1999-2004); conseiller spécial du Secrétaire général de la CNUCED, M. Rubens Ricupero, ministre des Affaires étrangères (1989-1991)."],
 ["31170991","Alan Oxley (Australia)","Alan Oxley (Australie), ambassadeur auprès du GATT (1985-1989) ; président des Parties contractantes du GATT (1987) ; fondateur d'ITS Global."],
 ["29505563","Anthony Hill (Jamaica)","Anthony Hill (Jamaïque), ambassadeur (1978-1989), représentant permanent auprès du GATT (en poste à Genève en 1987-1988) ; mission auprès de l'Organisation des Nations unies (1968-1971)."],
 ["31933652","Richard Nottage (NZ)","Richard Nottage (Nouvelle-Zélande), ambassadeur auprès de l'Office de l'ONU et du GATT (1984-1987) ; secrétaire du ministère néo-zélandais des Affaires étrangères et du Commerce (1991-1999). Décédé en 2025."],
 ["31949174","B.L. Das (India)","B.L. Das (Inde), directeur, Programmes Commerce international, UNCTAD (1985-1990); Président des Parties contractantes du GATT (1983); président du Conseil du GATT (1982), l'Ambassadeur et Représentant permanent auprès du GATT (1980 - 1983)."],
 ["29516222","Alexjandro Jara (Chile)","Alejandro Jara (Chili) : directeur général adjoint de l'OMC (2005-2013), ambassadeur à l'OMC (2000-2002) ; chef de la politique commerciale du Chili (1999), secrétaire de la Mission au GATT (1979-1984)."],
 ["31170976","Celso Lafer (Brazil)","Celso Lafer (Brésil), ministre des Affaires étrangères (2001-2002) et (1992) ; ministre du Commerce (1999), ambassadeur à l'OMC (1996-1998). Président de la FAPESP à partir de 2007 ; membre de l'Académie brésilienne des lettres."],
 ["30480336","Mark Ritchie (USA)","Mark Ritchie (États-Unis), secrétaire d'État du Minnesota (2007-2015) ; président de l'Institut pour l'agriculture et la politique commerciale (1988-2006) ; président de Global Minnesota (2019-2022)."],
 ["31598549","Arif Hussain (India)","Arif Hussain (Inde), directeur du Bureau du Directeur général du GATT, Arthur Dunkel (nommé en 1990), puis responsable de l'accès aux marchés et de la coordination au Secrétariat (1993)."],
 ["31350755","David Hartridge","David Hartridge a été chef de cabinet d'Arthur Dunkel, directeur général du GATT, de 1980 à 1985. Il a ensuite dirigé la Division du commerce des services de l'OMC et assuré l'intérim de la direction générale en 1999. Dans cette vidéo, M. Hartridge relate l'importance des relations personnelles et professionnelles entre Arthur Dunkel et Paul Tran, mais aussi le rôle spécial que Paul Tran occupait tout au long du Cycle d'Uruguay."],
 ["29469079","Karl Falkenberg","Karl Falkenberg (Commission européenne) : directeur général de l'Environnement (2009-2015), puis conseiller au Centre européen de stratégie politique (retraité en 2017) ; président du chapitre UE du Club de Rome. Auparavant : délégué à Genève, coordination de la politique commerciale multilatérale à Bruxelles (1993-2000) ; négociations du cycle d'Uruguay (1986-1993) ; recruté par Trân Van Thinh en 1977 pour les négociations sur le textile (1977-1982)."],
 ["29516228","Hervé Jouanjean","Hervé Jouanjean : délégué auprès du GATT (1987-1989), chef adjoint de la Délégation permanente de la Commission européenne auprès du GATT/OMC (1993-1995), directeur des affaires de l'OMC à la direction générale du Commerce de la Commission européenne (1996-2003), puis directeur général du Budget (2009-2014)."],
 ["29523389","Robert Madelin","Robert Madelin (Commission européenne) : directeur général de la Santé et de la Protection des consommateurs (2004-2010), puis des Réseaux de communication, du contenu et des technologies (2010-2015) ; retraité en 2016, président de FIPRA International. Auparavant : coordonnateur du GATT au Royaume-Uni (1993) ; chef de cabinet adjoint de Sir Leon Brittan."],
 ["31012132","Lê Van Loi","Ambassadeur Lê a servi comme Représentant permanent de la République du Vietnam à la CNUCED et d'autres organisations internationales à Genève (1966 - 1975). Dans cette vidéo, l'ambassadeur Lê aborde plusieurs thèmes clés, notamment le rôle des pays en développement dans la création de la CNUCED."],
 ["30717737","Ngô Quang Xuân","Ngô Quang Xuân (Viet Nam), ambassadeur, chef de la Mission permanente du Vietnam auprès de l'ONU, de l'OMC et des autres organisations internationales à Genève (2003-2008), après près de sept ans comme représentant permanent à New York (à partir de 1996) ; il a joué un rôle important dans les négociations d'adhésion du Vietnam à l'OMC.","pdf/30717737.pdf"],
 ["30495085","Nguyên Manh Cam","(Vietnam) Vice-Premier ministre (1997-2002), également ministre des Affaires étrangères (en fonction en 1995 comme en 1999).","pdf/30495085.pdf"],
 ["31598540","Hamid Mamdouh","Hamid Mamdouh, conseiller à la Mission d'Égypte auprès du GATT (1985-1989), conseiller juridique auprès du service de négociation du GATT, secrétaire du Conseil du commerce des services (1995-2001), directeur de la Division des services et de l'investissement de l'OMC (2001-2017)."],
 ["31681853","Åke Linden","Åke Linden, Secrétariat du GATT (1961-1994), directeur du Bureau des affaires juridiques (1983-1985), conseiller spécial du Directeur général de 1989 à 1993, assistant du Directeur général (1993-1994)."],
 ["31935884","Paul Ramadier","fonctionnaire de la Commission européenne (1965-2003), Direction Générale du Commerce"],
 ["31948123","Benny Berg Sorensen","Benny Berg Sorensen: fonctionnaire de la Commission européenne, Direction Générale du Commerce (1977-2009). Membre clé de l'équipe de Paul Tran dans la négociation des textiles."],
 ["33176624","Stéphane Hessel","Ambassadeur de France, notamment auprès des Nations Unies à Genève entre le cycle de Tokyo et les travaux préparatoires de l'Uruguay Round ; auteur d'Indignez-vous ! (2010). Décédé en février 2013."]
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
