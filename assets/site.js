/* WTOcreation : affichage du site (données dans data.js). Chaque page HTML porte data-route, data-lang et data-base. */
(function () {
  const root = document.documentElement;
  const BASE = root.dataset.base || '';
  const ROUTE = root.dataset.route || 'accueil';
  const lang = root.dataset.lang === 'en' ? 'en' : 'fr';
  const LB = lang === 'en' ? BASE + 'en/' : BASE;      /* racine des pages dans la langue courante */
  const OTHER = lang === 'en' ? BASE : BASE + 'en/';   /* racine des pages dans l'autre langue */
  const PATHS = { accueil: '', videos: 'videos/', 'a-propos': 'a-propos/', portfolio: 'portfolio/', contact: 'contact/', liens: 'liens/', remerciements: 'remerciements/' };
  const NAV_KEYS = ['accueil', 'videos', 'a-propos', 'portfolio', 'contact', 'liens', 'remerciements'];

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const md = s => esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  const $ = id => document.getElementById(id);
  const t = UI[lang];

  /* Fichiers du site d'origine (photos du portfolio, PDF) : lus sur l'ancien site tant qu'ils ne sont pas dans ce dépôt */
  const asset = p => (CONFIG.localAssets ? BASE + p : CONFIG.oldSite + p);
  const imgFallback = p => CONFIG.localAssets ? `this.onerror=function(){this.remove()};this.src='${CONFIG.oldSite}${p}'` : `this.remove()`;

  const wtoLogo = () => `<a class="wto-logo" href="https://www.wto.org/" target="_blank" rel="noopener"><img src="${BASE}assets/img/wto-logo-light.png" alt="World Trade Organization" width="259" height="77"></a>`;
  const playSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z"/></svg>';
  const chev = '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9l7 7 7-7"/></svg>';
  const icoGoal = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/></svg>';
  const icoRules = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16M6 20h12M5 8h14"/><path d="M5 8l-2.5 6a3 3 0 0 0 5 0L5 8zM19 8l-2.5 6a3 3 0 0 0 5 0L19 8z"/></svg>';
  const icoResult = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V8M10 20v-6M16 20v-9M22 20H2"/><path d="M3 5l6 3 5-4 7 3"/></svg>';

  /* ---------- Vidéos Vimeo ---------- */
  const vthumb = id => VM[id] ? `https://i.vimeocdn.com/video/${VM[id][1]}-d_640x360?&r=pad&region=us` : '';
  const vlink = id => `${LB}videos/?video=${id}`;
  const dur = s => { const m = Math.floor(s / 60), r = s % 60; return `${m}:${String(r).padStart(2, '0')}`; };
  const label = v => COUNTRY[v[0]] ? `${v[1]} (${COUNTRY[v[0]][lang === 'en' ? 1 : 0]})` : v[1];
  const initials = n => n.replace(/\(.*\)/, '').replace(/,.*/, '').trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('');
  const vimeoSrc = (id, auto) => `https://player.vimeo.com/video/${id}?dnt=1${auto ? '&autoplay=1' : ''}`;
  const iframe = (id, title, auto) => `<iframe src="${vimeoSrc(id, auto)}" title="${esc(title)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
  /* facade : vignette puis lecteur au clic (accueil) ; lecteur direct (page vidéo) */
  function player(id, title, facade) {
    if (!facade) return `<div class="player live">${iframe(id, title, false)}</div>`;
    return `<div class="player" data-id="${id}" data-title="${esc(title)}">
      ${VM[id] ? `<img src="${vthumb(id)}" alt="" loading="lazy" onerror="this.remove()">` : ''}
      <button type="button" class="ring" aria-label="${esc(t.watch)} : ${esc(title)}">${playSvg}</button>
    </div>`;
  }
  const vimeoLink = id => `<p class="vlink"><a href="https://vimeo.com/${id}" target="_blank" rel="noopener">${esc(t.onVimeo)}</a></p>`;

  /* ---------- Textes propres à cette version ---------- */
  Object.assign(UI.fr, { mhA: "Entretiens", mhB: "Près de 40 témoignages", kA: "Le choix", kB: "L’essentiel", kC: "L’hommage", readFull: "À propos de ce projet", foldFull: "Replier le texte", briefTitle: "L'OMC en bref", tranCta: "Voir son entretien", watch: "Lire la vidéo", onVimeo: "Voir sur Vimeo" });
  Object.assign(UI.en, { mhA: "Interviews", mhB: "Nearly 40 testimonies", kA: "The choice", kB: "In brief", kC: "The tribute", readFull: "About this project", foldFull: "Fold the text", briefTitle: "The WTO in brief", tranCta: "Watch his interview", watch: "Play the video", onVimeo: "Watch on Vimeo" });

  const HERO = {
    fr: {
      lead: "Ils ont créé l’OMC. Ils racontent.",
      sub: "L’Organisation mondiale du commerce est née en 1994, avec l’accord de Marrakech qui a conclu le Cycle d’Uruguay. Près de 40 ministres, ambassadeurs et négociateurs racontent, avec leurs propres mots, comment elle a été créée, de 1982 à 1994."
    },
    en: {
      lead: "They created the WTO. They tell the story.",
      sub: "The World Trade Organization was born in 1994, with the Marrakech Agreement that concluded the Uruguay Round. Nearly 40 ministers, ambassadors and negotiators tell, in their own words, how it was created, from 1982 to 1994."
    }
  };
  const BRIDGE = {
    fr: { l1: "En 1994, des hommes et des femmes ont fait un choix.", l2: "Des règles communes, plutôt que le rapport de force.", l3: "Aujourd’hui, ces règles vacillent.",
      h: "Revenir aux intentions d’origine",
      p1: "L’OMC reposait sur une idée simple : des règles négociées par tous, appliquées à tous, et un système efficace pour régler les différends. Ce dernier pilier est aujourd’hui grippé. Depuis décembre 2019, faute d’accord entre les membres sur la nomination de nouveaux juges, l’Organe d’appel n’a plus le quorum pour statuer. Les tentatives de réforme n’ont pas abouti à ce jour, et des solutions provisoires, entre une partie seulement des membres, ont pris le relais.",
      p2: "Une règle sans arbitre commun, c’est un retour progressif vers le rapport de force. C’est précisément ce que ces hommes et ces femmes avaient voulu dépasser.",
      p3: "Pour savoir ce qu’il faut préserver, il faut entendre ceux qui l’ont construit." },
    en: { l1: "In 1994, men and women made a choice.", l2: "Common rules, rather than the balance of power.", l3: "Today, those rules are wavering.",
      h: "Going back to the original intentions",
      p1: "The WTO rested on a simple idea: rules negotiated by all, applied to all, and an effective system to settle disputes. That last pillar is now stuck. Since December 2019, for lack of agreement among members on appointing new judges, the Appellate Body no longer has a quorum to rule. Reform attempts have not succeeded to date, and interim solutions between only some of the members have taken over.",
      p2: "A rule without a common arbiter is a gradual return to the balance of power. That is precisely what these men and women had set out to move beyond.",
      p3: "To know what must be preserved, we have to hear those who built it." }
  };
  const BRIEF = {
    fr: {
      goalT: "Le but", goalP: "Instaurer un ordre international pour développer les échanges commerciaux de façon équitable, stimuler la croissance et assurer un développement durable mondial.",
      chips: ["Des échanges équitables", "La croissance", "Un développement durable"],
      meansT: "Le moyen", meansP: "Des règles négociées, et un système efficace de règlement des différends.",
      resultT: "Le résultat", resultP: "Les obstacles aux échanges commerciaux mondiaux ont été considérablement réduits, dans un cadre qui assure une concurrence équitable pour tous les membres de l’OMC, qu’ils soient en développement ou industrialisés.",
      mile: [
        ["1982", "", "Début de la période racontée par les témoignages, parfois même avant."],
        ["Septembre 1986", "Punta del Este (Uruguay)", "Lancement officiel du Cycle d’Uruguay, qui lui doit son nom. Les ministres se donnent quatre ans pour conclure. Les négociations se dérouleront ensuite surtout à Genève, au siège du GATT."],
        ["Décembre 1988", "Montréal (Canada)", "Réunion ministérielle à mi-parcours. Les ministres s’accordent sur un premier paquet de résultats ; l’examen sera achevé à Genève en avril 1989."],
        ["Décembre 1990", "Bruxelles (Belgique)", "La réunion ministérielle censée conclure le cycle s’achève sur une impasse, notamment sur l’agriculture. Le cycle se prolonge."],
        ["Décembre 1991", "Genève (Suisse)", "Arthur Dunkel, directeur général du GATT, présente le premier projet d’Acte final. Il servira de base à l’accord définitif."],
        ["Novembre 1992", "Washington (États-Unis)", "Accord de Blair House : les États-Unis et la Communauté européenne règlent l’essentiel de leur différend sur l’agriculture."],
        ["Juillet 1993", "Tokyo (Japon)", "Au sommet du G7, le « Quad » (États-Unis, Union européenne, Japon, Canada) annonce une percée sur l’accès aux marchés."],
        ["Décembre 1993", "Genève (Suisse)", "Fin de la plupart des négociations ; quelques discussions sur l’accès aux marchés se poursuivent."],
        ["Avril 1994", "Marrakech (Maroc)", "Les ministres des 124 gouvernements et des Communautés européennes participants signent l’Acte final reprenant les résultats des négociations commerciales multilatérales du Cycle d’Uruguay : c’est l’accord de Marrakech, qui crée l’OMC. Le monde salue l’OMC comme la première pierre angulaire d’un nouvel état de droit multilatéral pour les échanges économiques à l’échelle mondiale."]
      ]
    },
    en: {
      goalT: "The goal", goalP: "A trading system that promotes fair commercial relations, stimulates economic growth and supports sustainable development.",
      chips: ["Fair trade relations", "Economic growth", "Sustainable development"],
      meansT: "The means", meansP: "A transparent rules-based system and a formal mechanism for the settlement of disputes.",
      resultT: "The result", resultP: "The WTO continues to reduce obstacles to trade and offers a level playing field for all Members, irrespective of their level of economic development.",
      mile: [
        ["1982", "", "The period covered by the recollections starts here, sometimes even earlier."],
        ["September 1986", "Punta del Este (Uruguay)", "Official launch of the Uruguay Round, which takes its name from the venue. Ministers give themselves four years to conclude. Most of the negotiations then take place in Geneva, at the GATT headquarters."],
        ["December 1988", "Montreal (Canada)", "Ministerial mid-term review. Ministers agree a package of early results; the review is completed in Geneva in April 1989."],
        ["December 1990", "Brussels (Belgium)", "The ministerial meeting meant to close the round ends in deadlock, notably over agriculture. The round is extended."],
        ["December 1991", "Geneva (Switzerland)", "Arthur Dunkel, GATT Director-General, tables the first draft of the Final Act. It becomes the basis of the final agreement."],
        ["November 1992", "Washington (United States)", "The Blair House accord: the United States and the European Community settle most of their differences on agriculture."],
        ["July 1993", "Tokyo (Japan)", "At the G7 summit, the “Quad” (United States, European Union, Japan, Canada) announces a breakthrough on market access."],
        ["December 1993", "Geneva (Switzerland)", "Most negotiations end; some market-access talks continue."],
        ["April 1994", "Marrakech (Morocco)", "Ministers of the 124 participating governments and the European Communities sign the Final Act Embodying the Results of the Uruguay Round of Multilateral Trade Negotiations: the Marrakech Agreement, which creates the WTO. With it, developing and developed countries joined together in a shared commitment to an equitable world."]
      ]
    }
  };
  const TRAN = {
    fr: {
      name: "L’ambassadeur Paul Trân Van Thinh", sub: "Une contribution exceptionnelle",
      p1: "Ce projet a commencé comme un documentaire pour capter la contribution exceptionnelle d’un homme, l’ambassadeur Paul Trân Van Thinh. Il est devenu un recueil d’entretiens de près de 40 ministres, ambassadeurs et négociateurs.",
      p2: "Ambassadeur et Représentant permanent de la Communauté européenne à Genève de 1979 à 1994. À l’origine, ce projet se voulait un hommage à l’occasion de ses 80 ans.",
      says: [["31350755", "David Hartridge", "relate l’importance des relations personnelles et professionnelles entre Arthur Dunkel et Paul Trân Van Thinh, et le rôle spécial que Paul Trân Van Thinh occupait tout au long du Cycle d’Uruguay."],
             ["31948123", "Benny Berg Sorensen", "décrit comme membre clé de l’équipe de Paul Trân Van Thinh dans la négociation des textiles."]]
    },
    en: {
      name: "Ambassador Paul Trân Van Thinh", sub: "An exceptional contribution",
      p1: "This documentary project began as an effort to capture the exceptional contribution of one individual, Ambassador Paul Trân Van Thinh, who played an instrumental role in the Uruguay Round negotiations.",
      p2: "Ambassador and Permanent Representative of the European Community in Geneva from 1979 to 1994. The project started as a tribute to him, through interviews of people who worked with him.",
      says: [["31350755", "David Hartridge", "describes the importance of the personal and professional relationship between Arthur Dunkel and Paul Trân Van Thinh, and the special role Paul Trân Van Thinh played throughout the Uruguay Round."],
             ["31948123", "Benny Berg Sorensen", "is described as a key member of Paul Trân Van Thinh's team in the textile negotiations."]]
    }
  };
  const TRAN_ID = '31350676';

  /* ---------- Pages ---------- */
  const card = v => {
    const i = V.indexOf(v), m = VM[v[0]];
    return `<li class="card ${v[0] === TRAN_ID ? 'key' : ''}"><a href="${vlink(v[0])}"><div class="th" style="--h:${150 + (i * 14) % 110}"><span class="ini">${esc(initials(v[1]))}</span>${m ? `<img src="${vthumb(v[0])}" alt="" loading="lazy" onerror="this.remove()">` : ''}${m ? `<span class="dur">${dur(m[0])}</span>` : ''}</div><b>${esc(label(v))}</b><span class="ds" lang="fr">${esc(v[2])}</span></a></li>`;
  };
  const cards = items => items.length ? items.map(card).join('') : `<li class="empty">${esc(t.none)}</li>`;
  let query = '';
  const filtered = () => V.filter(v => !query || (label(v) + ' ' + v[2]).toLowerCase().includes(query.toLowerCase()));

  const URU_T = {
    fr: { k: "Le Cycle d’Uruguay", s0: "Début du Cycle d’Uruguay", n1: "Accord de Marrakech", s1: "Création · Naissance de l’OMC", hint: "Passez la souris (ou touchez la ligne) pour dérouler les étapes, de 1986 à 1994.", toggle: "Dérouler ou replier les étapes du Cycle d’Uruguay" },
    en: { k: "The Uruguay Round", s0: "Start of the Uruguay Round", n1: "Marrakech Agreement", s1: "Creation · Birth of the WTO", hint: "Hover (or tap the line) to unroll the milestones, from 1986 to 1994.", toggle: "Unroll or fold the milestones of the Uruguay Round" }
  };
  const MONTHS_FR = { janvier: 'janv.', février: 'févr.', mars: 'mars', avril: 'avr.', mai: 'mai', juin: 'juin', juillet: 'juil.', août: 'août', septembre: 'sept.', octobre: 'oct.', novembre: 'nov.', décembre: 'déc.' };
  const dateParts = d => { const w = d.split(' '); const y = w.pop(); const m = w.join(' '); return { y, m, abbr: lang === 'fr' ? (MONTHS_FR[m.toLowerCase()] || m) : m.slice(0, 3) }; };
  const city = p => p.split(' (')[0];
  function uru(list) {
    const T = URU_T[lang], last = list.length - 1;
    const node = (m, i) => { const d = dateParts(m[0]); return `<li class="uru-i" style="--i:${i}"><button type="button" class="uru-node" data-i="${i}"><span class="y">${esc(d.y)}</span><span class="mo">${esc(d.abbr)}</span></button></li>`; };
    const end = (m, i, cls) => { const d = dateParts(m[0]); return `<button type="button" class="uru-end ${cls} uru-node" data-i="${i}"><b>${esc(d.y)}</b><span>${esc(city(m[1]))}</span>${i === 0 ? `<small>${esc(T.s0)}</small>` : `<strong class="uru-name">${esc(T.n1)}</strong><small>${esc(T.s1)}</small>`}</button>`; };
    return `<div class="uru" id="uru">
        <p class="kicker">${esc(T.k)}</p>
        <div class="uru-row">
          ${end(list[0], 0, 'left')}
          <div class="uru-track">
            <button type="button" class="uru-line" id="uruToggle" aria-expanded="false" aria-controls="uruMid" aria-label="${esc(T.toggle)}"></button>
            <ol class="uru-mid" id="uruMid">${list.slice(1, last).map((m, k) => node(m, k + 1)).join('')}</ol>
          </div>
          ${end(list[last], last, 'right')}
        </div>
        <div class="uru-panel" aria-live="polite">
          <p class="uru-hint">${esc(T.hint)}</p>
          <div class="uru-detail"><p class="uru-when"><b id="uruWhen"></b> <span id="uruWhere"></span></p><p class="uru-what" id="uruWhat"></p></div>
        </div>
      </div>`;
  }
  function viewHome() {
    const h = HOME[lang], H = HERO[lang], G = BRIDGE[lang], B = BRIEF[lang], T = TRAN[lang], v0 = V[0];
    return `
    <div class="masthead"><a href="https://www.wto.org/" target="_blank" rel="noopener" aria-label="World Trade Organization"><img src="${BASE}assets/img/wto-logo-light.png" alt="World Trade Organization" width="260" height="77"></a>
      <p class="meta"><span>${esc(t.mhA)}</span><i></i><span>1982 — 1994</span><i></i><span>${esc(t.mhB)}</span></p></div>
    <section class="hero">
      <div><h1>${esc(H.lead)}</h1><p class="sub">${esc(H.sub)}</p></div>
      <div>${player(v0[0], v0[1], true)}<p class="cap"><a href="${vlink(v0[0])}">${esc(v0[1])}</a></p></div>
    </section>
    <section class="bridge" aria-labelledby="bridge-h"><p class="kicker">${esc(t.kA)}</p>
      <p class="b1">${esc(G.l1)}</p><p class="b2">${esc(G.l2)}</p><p class="b3">${esc(G.l3)}</p>
      <div class="back">
        <h2 id="bridge-h">${esc(G.h)}</h2>
        <p>${esc(G.p1)}</p><p>${esc(G.p2)}</p><p class="close">${esc(G.p3)}</p>
      </div>
    </section>
    <details class="full" id="full">
      <summary><span id="fullLbl">${esc(t.readFull)}</span>${chev}</summary>
      <div class="body">${h.p.map(p => `<p>${md(p)}</p>`).join('')}<p class="note">${esc(h.note)}</p></div>
    </details>
    <section class="brief" aria-labelledby="brief-h"><p class="kicker">${esc(t.kB)}</p>
      <h2 id="brief-h">${esc(t.briefTitle)}</h2>
      <div class="trio">
        <article class="step"><span class="ico">${icoGoal}</span><h3>${esc(B.goalT)}</h3><p>${esc(B.goalP)}</p><ul class="chips">${B.chips.map(c => `<li>${esc(c)}</li>`).join('')}</ul></article>
        <article class="step"><span class="ico">${icoRules}</span><h3>${esc(B.meansT)}</h3><p>${esc(B.meansP)}</p></article>
        <article class="step"><span class="ico">${icoResult}</span><h3>${esc(B.resultT)}</h3><p>${esc(B.resultP)}</p></article>
      </div>
      ${uru(B.mile.slice(1))}
    </section>
    <section class="tran" aria-labelledby="tran-h">
      <div><p class="kicker">${esc(t.kC)}</p>
        <h2 id="tran-h">${esc(T.name)}</h2>
        <p class="sub">${esc(T.sub)}</p>
        <p>${esc(T.p1)}</p><p>${esc(T.p2)}</p>
        <ul class="says">${T.says.map(s => `<li><a href="${vlink(s[0])}">${esc(s[1])}</a> ${esc(s[2])}</li>`).join('')}</ul>
        <a class="btn" href="${vlink(TRAN_ID)}">${esc(t.tranCta)}</a>
      </div>
      <div>${player(TRAN_ID, label(V.find(x => x[0] === TRAN_ID)), true)}</div>
    </section>
    <div class="index-head">
      <h2>${esc(t.videosTitle)}</h2>
      <div class="search"><label for="q">${esc(t.search)}</label><input id="q" type="search" value="" autocomplete="off"></div>
    </div>
    <p class="index-note">${esc(h.note)}</p>
    <ul class="grid" id="grid">${cards(filtered())}</ul>`;
  }
  function viewVideo() {
    const want = new URLSearchParams(location.search).get('video');
    let i = V.findIndex(v => v[0] === want); if (i < 0) i = 0;
    const v = V[i], prev = V[i - 1], next = V[i + 1];
    document.title = `${label(v)} | ${document.title}`;
    return `
    <div class="video-grid">
      <article class="video-main">
        <div class="crumbs">
          <a href="${LB}">${esc(t.back)}</a>
          <div class="pn">
            ${prev ? `<a href="${vlink(prev[0])}">${esc(t.prev)}</a>` : `<span>${esc(t.prev)}</span>`}
            ${next ? `<a href="${vlink(next[0])}">${esc(t.next)}</a>` : `<span>${esc(t.next)}</span>`}
          </div>
        </div>
        ${player(v[0], label(v), false)}
        ${vimeoLink(v[0])}
        <h1>${esc(label(v))}</h1>
        <p class="desc" lang="${lang === 'en' && DESC_EN[v[0]] ? 'en' : 'fr'}">${esc(lang === 'en' && DESC_EN[v[0]] ? DESC_EN[v[0]] : v[2])}</p>
        ${v[3] ? `<p style="margin-top:14px"><a class="btn ghost" href="${esc(asset(v[3]))}" target="_blank" rel="noopener">${esc(t.translation)}</a></p>` : ''}
        <p class="note">${esc(HOME[lang].note)}</p>
      </article>
      <nav class="side" aria-label="${esc(t.others)}">
        <h2>${esc(t.others)}</h2>
        <ul>${V.map(x => `<li><a href="${vlink(x[0])}" ${x[0] === v[0] ? 'aria-current="true"' : ''}>${esc(label(x))}</a></li>`).join('')}</ul>
      </nav>
    </div>`;
  }
  function viewAbout() {
    const a = ABOUT[lang];
    return `<div class="prose">${a.p.map((p, i) => p === '@pdf' ? `<a class="btn ghost" href="${esc(asset(a.pdf))}" target="_blank" rel="noopener">${esc(t.questionsPdf)}</a>` : `<p class="${i === 0 ? 'first' : ''}">${md(p)}</p>`).join('')}</div>`;
  }
  function viewPortfolio() {
    return `<div class="gallery">${PORTFOLIO.map((p, i) => {
      const small = 'portfolio_images/' + p[3] + '.jpg';
      return `<figure class="tile" style="--d:${i * 60}ms"><button type="button" data-i="${i}" aria-label="${esc(p[0] || t.photo + ' ' + (i + 1))}"><div class="ph" style="--h:${p[2]}"><img src="${esc(asset(small))}" alt="${esc(p[0] || t.photo + ' ' + (i + 1))}" loading="lazy" onerror="${imgFallback(small)}"></div></button>${p[0] ? `<figcaption>${esc(p[0])}</figcaption>` : ''}</figure>`;
    }).join('')}</div>
    <div class="lightbox" id="lb" hidden role="dialog" aria-modal="true" aria-label="${esc(t.photo)}">
      <div class="lb-box">
        <div class="lb-count" id="lbCount" aria-live="polite"></div>
        <div class="lb-img" id="lbStage"><img id="lbImg" alt="" draggable="false"></div>
        <div class="lb-cap" id="lbCap"></div>
        <div class="lb-bar"><button type="button" id="lbPrev" aria-label="${esc(t.prev)}">‹</button><button type="button" id="lbClose" aria-label="${esc(t.close)}">×</button><button type="button" id="lbNext" aria-label="${esc(t.next)}">›</button></div>
        <div class="lb-thumbs" id="lbThumbs">${PORTFOLIO.map((p, i) => `<button type="button" data-i="${i}" aria-label="${t.photo} ${i + 1}"><img src="${esc(asset('portfolio_images/' + p[3] + '.jpg'))}" alt="" loading="lazy"></button>`).join('')}</div>
      </div>
    </div>`;
  }
  function viewContact() {
    const c = CONTACT[lang];
    return `<form class="form" id="form" novalidate>
      <label for="f1">${esc(c.name)}<input id="f1" type="text" required></label>
      <label for="f2">${esc(c.email)}<input id="f2" type="email" required></label>
      <label for="f3">${esc(c.subject)}<input id="f3" type="text"></label>
      <label for="f4">${esc(c.msg)}<textarea id="f4"></textarea></label>
      <button type="submit">${esc(t.send)}</button>
      <div class="form-msg" id="fm" hidden></div>
    </form>`;
  }
  function viewLinks() {
    return `<ul class="links">${LINKS[lang].map((l, i) => `<li>${i === 1 ? wtoLogo() : ''}<span class="lb">${esc(l[0])}</span><a href="${esc(l[1])}" target="_blank" rel="noopener">${esc(l[1])}</a></li>`).join('')}</ul>`;
  }
  function viewThanks() {
    const T = THANKS[lang];
    const list = arr => `<ul class="plain">${arr.map(x => `<li>${md(x)}</li>`).join('')}</ul>`;
    return `
    <p class="thanks-intro">${esc(T.intro)}</p>
    <nav class="thanks-nav" aria-label="${esc(UI[lang].nav[6][1])}">${T.tabs.map(x => `<a href="#${x[0]}">${esc(x[1])}</a>`).join('')}</nav>
    <section class="sec" id="donateurs"><h2>${esc(T.tabs[0][1])}</h2>
      <p class="lead">${esc(T.donorsLead)}</p>
      <ul class="names">${DONORS.map(d => `<li><strong>${esc(d[0])}</strong>, ${esc(d[1])}</li>`).join('')}</ul>
      <p class="lead">${md(T.orgs)}</p>${wtoLogo()}</section>
    <section class="sec" id="benevoles"><h2>${esc(T.tabs[1][1])}</h2><p class="lead">${esc(T.volLead)}</p>${list(T.vol)}</section>
    <section class="sec" id="interviews"><h2>${esc(T.tabs[2][1])}</h2><p class="lead">${esc(T.intLead)}</p>${list(T.int)}</section>
    <section class="sec" id="techniciens"><h2>${esc(T.tabs[3][1])}</h2>
      <p class="lead">${md(T.techLead)}</p>${list(T.tech)}
      <p class="lead">${md(T.camLead)}</p>${list(T.cam)}</section>`;
  }

  /* ---------- En-tête et rendu ---------- */
  function renderHead() {
    const other = OTHER + PATHS[ROUTE];
    $('mark').href = LB;
    $('nav').innerHTML = NAV_KEYS.map((k, i) => `<a href="${LB + PATHS[k]}" ${k === ROUTE ? 'aria-current="page"' : ''}>${esc(t.nav[i][1])}</a>`).join('');
    $('menuBtn').textContent = t.menu;
    $('langFr').href = lang === 'fr' ? '' : other + location.search;
    $('langEn').href = lang === 'en' ? '' : other + location.search;
    $('langFr').setAttribute('aria-current', String(lang === 'fr'));
    $('langEn').setAttribute('aria-current', String(lang === 'en'));
    if (lang === 'fr') $('langFr').removeAttribute('href'); else $('langEn').removeAttribute('href');
  }
  const VIEWS = { accueil: viewHome, videos: viewVideo, 'a-propos': viewAbout, portfolio: viewPortfolio, contact: viewContact, liens: viewLinks, remerciements: viewThanks };
  renderHead();
  $('view').innerHTML = VIEWS[ROUTE]();

  /* ---------- Interactions ---------- */
  document.querySelectorAll('.player[data-id] .ring').forEach(b => b.addEventListener('click', () => {
    const p = b.closest('.player');
    p.classList.add('live');
    p.innerHTML = iframe(p.dataset.id, p.dataset.title, true);
  }));
  const q = $('q');
  if (q) q.addEventListener('input', () => { query = q.value; $('grid').innerHTML = cards(filtered()); });
  const full = $('full');
  if (full) full.addEventListener('toggle', () => { $('fullLbl').textContent = full.open ? t.foldFull : t.readFull; });
  const uruEl = document.getElementById('uru');
  if (uruEl) {
    const URU = BRIEF[lang].mile.slice(1);
    const showU = i => {
      const m = URU[i], d = dateParts(m[0]);
      document.getElementById('uruWhen').textContent = d.m + ' ' + d.y + (m[1] ? ' ·' : '');
      document.getElementById('uruWhere').textContent = m[1];
      document.getElementById('uruWhat').textContent = m[2];
      uruEl.querySelectorAll('.uru-node').forEach(n => n.classList.toggle('on', +n.dataset.i === i));
    };
    const pnl = uruEl.querySelector('.uru-panel'), det = uruEl.querySelector('.uru-detail');
    const wide = () => window.matchMedia('(min-width: 721px)').matches;
    const place = n => {
      if (!wide()) return;
      const pr = pnl.getBoundingClientRect(), nr = n.getBoundingClientRect();
      const w = Math.min(448, pr.width), nx = nr.left + nr.width / 2 - pr.left;
      const left = Math.max(0, Math.min(nx - w / 2, pr.width - w));
      det.style.left = left + 'px'; det.style.setProperty('--ax', (nx - left) + 'px');
    };
    const nodesU = [...uruEl.querySelectorAll('.uru-node')];
    const nearest = x => { let b = nodesU[0], bd = Infinity; nodesU.forEach(n => { const r = n.getBoundingClientRect(), d = Math.abs(r.left + r.width / 2 - x); if (d < bd) { bd = d; b = n; } }); return b; };
    uruEl.querySelector('.uru-row').addEventListener('mousemove', e => { const n = nearest(e.clientX); showU(+n.dataset.i); place(n); });
    showU(0);
    uruEl.querySelectorAll('.uru-node').forEach(n => {
      const i = +n.dataset.i;
      n.addEventListener('mouseenter', () => { showU(i); place(n); });
      n.addEventListener('focus', () => { showU(i); place(n); });
      n.addEventListener('click', () => { showU(i); if (!uruEl.classList.contains('open')) { uruEl.classList.add('open'); document.getElementById('uruToggle').setAttribute('aria-expanded', 'true'); } });
    });
    document.getElementById('uruToggle').addEventListener('click', e => { const o = uruEl.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', String(o)); });
  }
  $('menuBtn').addEventListener('click', () => { const o = $('nav').classList.toggle('open'); $('menuBtn').setAttribute('aria-expanded', String(o)); });

  const form = $('form');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const msg = $('fm');
    if (!form.checkValidity() || !$('f1').value.trim() || !$('f2').value.trim()) { msg.textContent = t.formInvalid; msg.hidden = false; return; }
    if (!CONFIG.contactEmail) { msg.textContent = t.formUnset; msg.hidden = false; return; }
    const body = `${CONTACT[lang].name}: ${$('f1').value}\n${CONTACT[lang].email}: ${$('f2').value}\n\n${$('f4').value}`;
    location.href = `mailto:${CONFIG.contactEmail}?subject=${encodeURIComponent($('f3').value || 'WTOcreation')}&body=${encodeURIComponent(body)}`;
    msg.textContent = t.formOpened; msg.hidden = false;
  });

  /* Apparition progressive des vignettes */
  const tiles = document.querySelectorAll('.tile');
  if (tiles.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('seen'); io.unobserve(en.target); } }), { threshold: .1 });
    tiles.forEach(el => { el.classList.add('rv'); io.observe(el); });
  }

  /* Visionneuse des photos */
  const lb = $('lb');
  if (lb) {
    let cur = 0;
    const open = i => {
      cur = (i + PORTFOLIO.length) % PORTFOLIO.length;
      const p = PORTFOLIO[cur], big = 'portfolio_images/' + p[3] + '.jpg';
      const im = $('lbImg'); im.onerror = () => { im.onerror = null; im.src = CONFIG.oldSite + big; };
      im.classList.remove('in'); im.classList.remove('zoom'); im.src = asset(big); im.alt = p[0] || t.photo + ' ' + (cur + 1);
      im.onload = () => requestAnimationFrame(() => im.classList.add('in'));
      $('lbCount').textContent = (cur + 1) + ' / ' + PORTFOLIO.length;
      document.querySelectorAll('#lbThumbs button').forEach((b, k) => { b.classList.toggle('on', k === cur); if (k === cur) b.scrollIntoView({ block: 'nearest', inline: 'center' }); });
      [cur - 1, cur + 1].forEach(k => { new Image().src = asset('portfolio_images/' + PORTFOLIO[(k + PORTFOLIO.length) % PORTFOLIO.length][3] + '.jpg'); });
      document.body.style.overflow = 'hidden';
      $('lbCap').innerHTML = esc(p[0]) + (p[1] ? ` <a href="${esc(asset('pdf/Dec_15_1993_Green_Room_FR.pdf'))}" target="_blank" rel="noopener">${esc(t.more)}</a>` : '');
      lb.hidden = false; $('lbClose').focus();
    };
    document.querySelectorAll('.tile button').forEach(b => b.addEventListener('click', () => open(+b.dataset.i)));
    $('lbPrev').onclick = () => open(cur - 1);
    $('lbNext').onclick = () => open(cur + 1);
    const shut = () => { lb.hidden = true; document.body.style.overflow = ''; };
    $('lbClose').onclick = shut;
    lb.addEventListener('click', e => { if (e.target === lb) shut(); });
    document.querySelectorAll('#lbThumbs button').forEach(b => b.addEventListener('click', () => open(+b.dataset.i)));
    $('lbImg').addEventListener('click', e => { e.stopPropagation(); e.currentTarget.classList.toggle('zoom'); });
    let x0 = null;
    const stage = $('lbStage');
    stage.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; x0 = null; if (Math.abs(dx) > 50) open(cur + (dx < 0 ? 1 : -1)); });
    document.addEventListener('keydown', e => {
      if (lb.hidden) return;
      if (e.key === 'Escape') shut();
      if (e.key === 'ArrowLeft') open(cur - 1);
      if (e.key === 'ArrowRight') open(cur + 1);
    });
  }

  /* Ancre dans la page des remerciements */
  if (location.hash) { const el = document.getElementById(location.hash.slice(1)); if (el) el.scrollIntoView(); }
})();
