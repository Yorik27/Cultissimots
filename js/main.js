const els = {
  accueilScreen: null,
  listeScreen: null,
  jeuScreen: null,
  accueilBtn: null,
  btnRetourListe: null,
  ol: null
};

let trackList = [
  {
    acteur: "Franck Pitiot",
    personnage: "Perceval",
    film: "Kaamelot",
    texte: "C'est pas moi qui explique mal,<br/>c'est les autres qui sont cons\u00a0!",
    path: "sources/sons/Kaamelot01.mp3"

  },
  {
    acteur: "Lino Ventura",
    personnage: "Fernand Naudin",
    film: "Les Tontons flingueurs",
    texte: "Les cons, ça ose tout,<br/>c'est même à ça qu'on les reconnaît.",
    path: "sources/sons/Tontons.mp3"
    
  },
  {
    acteur: "Joséphine de Meaux",
    personnage: "Caroline",
    film: "Nos jours heureux",
    texte: "T'es le roi des cons. <br/>Au pays des emmerdeurs. <br/>Un, un petit con, casse-couilles, qui prend la tête, d'accord, hein\u00a0? <br/>Hein espèce de petit enculé, de merdeux qui chiale sa race toute la journée. <br/>Voilà ce que t'es… <br/>Connard\u00a0! Connard\u00a0! Connard\u00a0!",
    path: "sources/sons/Jours.mp3"
  },
  {
    acteur: "Théo Fernandez",
    personnage: "Coin-coin",
    film: "Les Tuche",
    texte: "Mes parents m'ont appelé Donald. <br/>Tout ça parce que la sage-femme qui a accouché ma mère a dit en me voyant\u00a0: Comme il est mignon, comment vous allez l'appeler ce petit canard\u00a0? <br/>Et là, mon père, sans réfléchir a dit\u00a0: ben, Donald.",
    path: "sources/sons/Canard.mp3"
  },
  {
    acteur: "Jean Carmet",
    personnage: "Le Bombé",
    film: "La Soupe aux choux",
    texte: "C'est quand même ben foutu, tiens, les étoiles.",
    path: "sources/sons/Carmet.mp3"
  },
  {
    acteur: "Pascal Vincent",
    personnage: "Pierre",
    film: "Rrrr",
    texte: "–\u00a0Ça va être tout noir\u00a0!<br/>–\u00a0Ta gueule\u00a0!<br/>–\u00a0Ça va être tout noir\u00a0!<br/>–\u00a0Ta gueule\u00a0!<br/>–\u00a0Ça va être tout noir\u00a0!<br/>–\u00a0Ta gueule\u00a0!<br/>–\u00a0Ça va être tout noir\u00a0!<br/>–\u00a0Ta gueule\u00a0!<br/>–\u00a0Ça va être tout noir\u00a0!<br/>–\u00a0Ta gueule\u00a0!<br/>–\u00a0Ça va être tout noir\u00a0!<br/>",
    path: "sources/sons/Rrrr.mp3"
  },
  {
    acteur: "Franck Pitiot",
    personnage: "Perceval",
    film: "Kaamelot",
    texte: "Ouais, c'est pas faux.",
    path: "sources/sons/Kaamelot02.mp3"
  },
  {
    acteur: "Jean-Pierre Darroussin",
    personnage: "Dany",
    film: "Mes Meilleurs Copains",
    texte: "Ben quoi, y a pas mort d'homme.",
    path: "sources/sons/Darroussin.mp3"
  },
  {
    acteur: "Jean  Dujardin",
    personnage: "OSS 117",
    film: "OSS 117 Rio ne répond plus",
    texte: "Je voulais vous dire, je sais que vous êtes très admirative de moi, de ma carrière, vous connaissez ma vie, vous connaissez mon métier, vous savez que j'ai toujours été un rempart à la barbarie. Malheureusement tout cela a un prix. Dolorès, je vais être un petit peu brutal, mais si jamais il devait se passer quelque chose entre nous, il m'est impossible de m'engager avec une femme. Avec moi les histoires d'amour ne s'écrivent pas dans le temps. Ce sont, des histoires courtes, compactes, passionnelles. Je ne sais pas vivre autrement Dolorès. D'aucuns ont des aventures. Je suis une aventure.",
    path: "sources/sons/OSS.mp3"
  },
  {
    acteur: "Jean-Pierre Marielle",
    personnage: "Castellard",
    film: "L'entourloupe",
    texte: "Le plaisir d'un vrai vendeur, <br/>c'est de vendre à des gens qui n'ont absolument pas besoin de ce qu'on leur propose, ou qui n'ont pas de quoi se le payer. <br/>Quand ces deux cas sont réunis, alors c'est là, que le sport commence.",
    path: "sources/sons/Marielle.mp3"
  },
  {
    acteur: "Gérard Darmon",
    personnage: "Le commissaire Bialès",
    film: "La Cité de la peur",
    texte: "–\u00a0Vous voulez un whisky\u00a0?<br/>–\u00a0Juste un doigt.<br/>–\u00a0Vous voulez pas un whisky d'abord\u00a0?",
    path: "sources/sons/Darmon.mp3"
  },
  {
    acteur: "Bernard Blier",
    personnage: "Mitch-Mitch",
    film: "100 000 dollars au soleil",
    texte: "Tu la connais mon histoire avec la Finlandaise\u00a0? <br/>Ouais\u00a0! Eh bah toi qui la connaît pas, tu vas te poiler. <br/>Figure-toi qu'un jour sur la piste d'Insaoud, je tombe sur un petit ingénieur des pétroles avec sa Land Rover en rideau. <br/>Il avait sa bonne-femme avec lui, là, une grande blonde avec des yeux qui avaient l'air de rêver et pis un sourire d'enfant. <br/>Une salope, quoi\u00a0! <br/>Moi, je repère ça tout de suite, parce que les femmes c'est mon truc\u00a0!",
    path: "sources/sons/Finlandaise.mp3"
  },
  {
    acteur: "Jean Gabin",
    personnage: "Grandgil",
    film: "La Traversée de Paris",
    texte: "Non mais regarde-moi le mignon-là, avec sa face d'alcoolique et sa viande grise. <br/>Avec du mou partout. Du mou, du mou, y a que du mou. <br/>Non mais tu ne vas pas changer de gueule un jour, non\u00a0?<br/>Et l'autre, là, la rombière, la gueule en gélatine et saindoux, trois mentons, les nichons qui déballent sur la brioche, cinquante ans chacun, cent ans pour le lot, cent ans de connerie\u00a0!",
    path: "sources/sons/Gabin.mp3"
  },
  {
    acteur: "Michel Blanc",
    personnage: "Jean-Claude Dusse",
    film: "Les Bronzés font du ski",
    texte: "Ecoute Bernard, je crois que toi et moi on a un peu le même problème. <br/>C'est-à-dire qu'on peut pas vraiment tout miser sur notre physique, surtout toi. <br/>Alors si je peux me permettre de te donner un conseil, c'est\u00a0: oublie que tu n'as aucune chance, vas-y, fonce\u00a0! <br/>On sait jamais, sur un malentendu ça peut marcher\u00a0!",
    path: "sources/sons/Blanc.mp3"
  },
  {
    acteur: "Alexandre Astier",
    personnage: "Le Roi Arthur",
    film: "Kaamelot",
    texte: "C'est systématiquement débile, <br/>mais c'est toujours inattendu.",
    path: "sources/sons/Kaamelot03.mp3"
  },
  {
    acteur: "Jean-Pierre Marielle",
    personnage: "Paul Dufour",
    film: "Calmos",
    texte: "L'admirable cholestérol qu'on va se payer. Ça vaut quand même mieux que des barbituriques. <br/>–\u00a0Ah ouais <br/>—\u00a0Quand on mange sain, sans produits chimiques y a jamais de contradication. <br/>Dans le sommeil, le plus important, le plus réparateur, c'est le premier sommeil. <br/>Alors, là, en coupant la nuit en deux, ça fait deux premiers sommeils.<br/>Tu me suis ?",
    path: "sources/sons/Calmos.mp3"
  },
  {
    acteur: " Marie-Anne Chazel",
    personnage: "Zézette",
    film: "Le Père-Noël est une ordure",
    texte: "–\u00a0Tu crois qu'il a un gros bazar\u00a0? <br/> –\u00a0Un gros quoi\u00a0?<br/> –\u00a0Tu crois qu'il a un gros kiki\u00a0?",
    path: "sources/sons/Chazel.mp3"
  },
  {
    acteur: "Kad Merad",
    personnage: "Philippe Abrams",
    film: "Bienvenue chez les Ch'tis",
    texte: "Bonsoir Biloute, hein ! Mi, avecque cht' équipe deul poste, on voudrait…<br/>–\u00a0On voudrons, on voudrons<br/>–\u00a0On voudrons, on voudrons à recommander eul même cos, ch'il vous plait, hein\u00a0!",
    path: "sources/sons/Merad.mp3"
  },
  {
    acteur: "Jacqueline Maillan",
    personnage: "Jacqueline",
    film: "Les Saisons du plaisir",
    texte: "–\u00a0Flora déboutonne son corsage. <br/>Il s'en échappe un énorme mamelon; cinq kilos au moins. <br/>Cinq kilos, ils exagèrent\u00a0! <br/>Ça pèse pas cinq kilos, ou p't'être la paire, je sais pas, enfin, enfin bref, un très gros, un très gros sein.",
    path: "sources/sons/Maillan.mp3"
  },
  {
    acteur: "Michel Serrault",
    personnage: "Albert",
    film: "Albert est méchant",
    texte: "Je suis pour l'abolition de l'argent\u00a0!<br/>–\u00a0Mais le chauffage, l'électricité, il faut bien la payer!<br/>–\u00a0Bah je me suis directement branché aux poteaux de l'EDF, ça évite les factures. Et l'hiver, bah je me chauffe au vin. Voilà. Et même l'été  d'ailleurs.",
    path: "sources/sons/Albert.mp3"
  },
  {
    acteur: "Louis de Funès",
    personnage: "Don Salluste",
    film: "La Folie des grandeurs",
    texte: "Qu'est-ce que je vais devenir\u00a0?<br/>Je suis ministre, je ne sais rien faire\u00a0!",
    path: "sources/sons/Folie.mp3"
  },
  {
    acteur: "Charles Denner",
    personnage: "Simon",
    film: "L'Aventure c'est l'aventure",
    texte: "Notre nouveau champ d'action, d'après moi, c'est d'utiliser les contradictions de tous ces gens qui disent \u00ab \u00a0aimez-vous les uns les autres\u00a0\u00bb et qui tuent les autres. <br/>Alors, notre spécialité, toujours d'après moi, ce serait d'être les spécialistes de la clarté dans la confusion. <br/>Vous me suivez\u00a0?",
    path: "sources/sons/Denner.mp3"
  },
];
console.log(trackList.length);
let reponse = document.querySelector(".reponse");
let trackTexte= document.querySelector(".texte");
let trackActeur= document.querySelector(".acteur");
let trackPersonnage= document.querySelector(".personnage");
let trackFilm= document.querySelector(".film");


let playpause_btn = document.querySelector(".play-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");


let trackIndex = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

const init = () =>{
  console.log('Page has loaded')
  els.accueilScreen = document.querySelector('.accueil-screen');
  els.listeScreen = document.querySelector('.liste-screen');
  els.jeuScreen = document.querySelector('.jeu-screen');
  els.ol =  els.listeScreen.querySelector('#ol');
  els.accueilBtn = document.querySelector('.accueil-btn');
    els.accueilBtn.addEventListener('click', () => {
    displayScreen('jeu');
    });
  els.pageListeBtn = document.querySelector('.pageListe-btn');
  els.retourListeBtn = document.querySelector('.btnRetourListe');
    els.retourListeBtn.addEventListener('click', () => {
    displayScreen('liste');
    });
}

let displayScreen = (screenName)=> {
  els.accueilScreen.style.display= "none";
  els.listeScreen.style.display= "none";
  els.jeuScreen.style.display= "none";
  
  const screen = els[screenName + 'Screen'];
  screen.style.display = 'flex';
};

//----------- construction lignes --------------------------
const oeuvres = trackList.map(titre=> titre.film);
oeuvres.forEach((oeuvre, i)=> {
  let lignes =document.createElement("LI");
  lignes.addEventListener('click', function(){(trackIndex= i);
  console.log(trackIndex);
  loadTrack(trackIndex);
  displayScreen('jeu');
  })

  let contenuLignes = document.createTextNode(oeuvre);
  lignes.appendChild(contenuLignes);
  document.getElementById("ol").appendChild(lignes);

});
//----------- fin construction lignes --------------------------

function gotoListe(){
  displayScreen('liste');
}

//--------- load and play track ---------------------------
function loadTrack(trackIndex) {
  clearInterval(updateTimer);
  
  // Load a new track
  curr_track.src = trackList[trackIndex].path;
  curr_track.load();
  
  trackTexte.innerHTML = trackList[trackIndex].texte;
  trackActeur.textContent = trackList[trackIndex].acteur;
  trackPersonnage.textContent = trackList[trackIndex].personnage;
  trackFilm.textContent = trackList[trackIndex].film;
}
function playTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;
}
function nextTrack() {
  // Go back to the first track if the
  // current one is the last in the track list
  isPlaying = false;
  
  if (trackIndex < trackList.length - 1)
  trackIndex += 1;
  else trackIndex = 0;

  // Load and play the new track
  loadTrack(trackIndex);
}
function prevTrack() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (trackIndex > 0)
  trackIndex -= 1;
  else trackIndex = trackList.length - 1;
  loadTrack(trackIndex);
}
// Load the first track in the tracklist
loadTrack(trackIndex);



window.addEventListener('load', init);




