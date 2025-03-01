var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

let blogName = "gio's blog";
let authorName = "gio";
let authorLink = "https://x.com/cakegioo"; 

let postsArray = [
//[ "posts/template.html" ],
[ "posts/guide-to-hacking-and-opsec.html" ] ];

let url = window.location.pathname;

const postDateFormat = /\d{4}\-\d{2}\-\d{2}\-/;

let relativePath = ".";
if ( url.includes("posts/") ) {
  relativePath = "..";
}


let headerHTML = '<ul> <li><a href="' + relativePath + '/index.html">home</a></li>' + 
'<li><a href="' + relativePath + '/archive.html">posts</a></li>' +
'<li><a href="' + relativePath + '/about.html">about</a></li> </ul>';

let footerHTML = "<hr><p>rewritten by <a href='" + authorLink + "'>" + authorName + "</a>.</p>";

let currentIndex = -1;
let currentFilename = url.substring(url.lastIndexOf('posts/'));

if ( ! currentFilename.endsWith(".html") ) {
    currentFilename += ".html";
}
let i;
for (i = 0; i < postsArray.length; i++) {
  if ( postsArray[i][0] === currentFilename ) {
    currentIndex = i;
  }
}

function formatPostTitle(i) {

  if ( postsArray[i].length > 1 ) {
    return decodeURI(postsArray[i][1]);
  } else { 
	if (  postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
	  return postsArray[i][0].slice(17,-5).replace(/-/g," ");
    } else {
      return postsArray[i][0].slice(6,-5).replace(/-/g," ");
    }
  }
}

let currentPostTitle = "";
let niceDate = "";
if ( currentIndex > -1 ) {
  currentPostTitle = formatPostTitle( currentIndex );
  if (  postDateFormat.test ( postsArray[currentIndex][0].slice( 6,17 ) ) ) {
    let monthSlice = postsArray[currentIndex][0].slice( 11,13 );
    let month = "";
    if ( monthSlice === "01") { month = "Jan";}
    else if ( monthSlice === "02") { month = "Feb";}
    else if ( monthSlice === "03") { month = "Mar";}
    else if ( monthSlice === "04") { month = "Apr";}
    else if ( monthSlice === "05") { month = "May";}
    else if ( monthSlice === "06") { month = "Jun";}
    else if ( monthSlice === "07") { month = "Jul";}
    else if ( monthSlice === "08") { month = "Aug";}
    else if ( monthSlice === "09") { month = "Sep";}
    else if ( monthSlice === "10") { month = "Oct";}
    else if ( monthSlice === "11") { month = "Nov";}
    else if ( monthSlice === "12") { month = "Dec";}
	niceDate = postsArray[currentIndex][0].slice( 14,16 ) + " " + month + ", " + postsArray[currentIndex][0].slice( 6,10 );
  }
}


function formatPostLink(i) {
  let postTitle_i = "";
  if ( postsArray[i].length > 1 ) {
    postTitle_i = decodeURI(postsArray[i][1]);
  } else {
	if (  postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
	  postTitle_i = postsArray[i][0].slice(17,-5).replace(/-/g," ");
    } else {
      postTitle_i = postsArray[i][0].slice(6,-5).replace(/-/g," ");
    }
  }
  if (  postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
    return '<p><li><a href="' + relativePath + '/'+ postsArray[i][0] +'">' + postsArray[i][0].slice(6,16) + " \u00BB " + postTitle_i + '</a></li></p>';
  } else {
    return '<p><li><a href="' + relativePath + '/'+ postsArray[i][0] +'">' + postTitle_i + '</a></li></p>';
  }
}

let postListHTML = "<ul>";
for ( let i = 0; i < postsArray.length; i++ ) {
  postListHTML += formatPostLink(i);
}
postListHTML += "</ul>";

let recentPostsCutoff = 3; 
let recentPostListHTML = "<h2>Recent Posts:</h2><ul>";
let numberOfRecentPosts = Math.min( recentPostsCutoff, postsArray.length );
for ( let i = 0; i < numberOfRecentPosts; i++ ) {
  recentPostListHTML += formatPostLink(i);
}

if ( postsArray.length > recentPostsCutoff ) {
  recentPostListHTML += '<li class="moreposts"><a href=' + relativePath + '/archive.html>\u00BB more posts</a></li></ul>';
} else {
  recentPostListHTML += "</ul>";
}

let nextprevHTML = "";
let nextlink = "";
let prevlink = "";

if ( postsArray.length < 2 ) {
  nextprevHTML = '<a href="' + relativePath + '/index.html">Home</a>';
} else if ( currentIndex === 0 ) {
  prevlink = postsArray[currentIndex + 1][0];
  nextprevHTML = '<a href="' + relativePath + '/index.html">Home</a> | <a href="'+ relativePath + '/' + prevlink +'">Previous Post \u00BB</a>';
} else if ( currentIndex === postsArray.length - 1 ) {
  nextlink = postsArray[currentIndex - 1][0];
  nextprevHTML = '<a href="' + relativePath + '/' + nextlink +'">\u00AB Next Post</a> | <a href="' + relativePath + '/index.html">Home</a>';
} else if ( 0 < currentIndex && currentIndex < postsArray.length - 1 ) {
  nextlink = postsArray[currentIndex - 1][0];
  prevlink = postsArray[currentIndex + 1][0];
  nextprevHTML = '<a href="' + relativePath + '/'+ nextlink +'">\u00AB Next Post</a> | <a href="' + relativePath + '/index.html">Home</a> | <a href="' + relativePath + '/'+ prevlink +'">Previous Post \u00BB</a>';
}


if (document.getElementById("nextprev")) {
  document.getElementById("nextprev").innerHTML = nextprevHTML;
}
if (document.getElementById("postlistdiv")) {
  document.getElementById("postlistdiv").innerHTML = postListHTML;
}
if (document.getElementById("recentpostlistdiv")) {
  document.getElementById("recentpostlistdiv").innerHTML = recentPostListHTML;
}
if (document.getElementById("header")) {
  document.getElementById("header").innerHTML = headerHTML;
}
if (document.getElementById("blogTitleH1")) {
  document.getElementById("blogTitleH1").innerHTML = blogTitle;
}
if (document.getElementById("postTitleH1")) {
  document.getElementById("postTitleH1").innerHTML = currentPostTitle;
}
if (document.getElementById("postDate")) {
  document.getElementById("postDate").innerHTML = niceDate;
}
if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}

if (document.title === "Blog Post") {
  document.title = currentPostTitle;
}

//oneko script
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function oneko() {
  const nekoEl = document.createElement("div");
  let nekoPosX = getRandomInt(32, window.innerWidth - 63);
  let nekoPosY = getRandomInt(32, window.innerHeight - 63);
  let mousePosX = nekoPosX - 32;
  let mousePosY = nekoPosY - 32;
  let frameCount = 0;
  let idleTime = 0;
  let idleAnimation = null;
  let idleAnimationFrame = 0;
  const nekoSpeed = 10;
  const spriteSets = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratchSelf: [
      [-5, 0],
      [-6, 0],
      [-7, 0],
    ],
    scratchWallN: [
      [0, 0],
      [0, -1],
    ],
    scratchWallS: [
      [-7, -1],
      [-6, -2],
    ],
    scratchWallE: [
      [-2, -2],
      [-2, -3],
    ],
    scratchWallW: [
      [-4, 0],
      [-4, -1],
    ],
    tired: [[-3, -2]],
    sleeping: [
      [-2, 0],
      [-2, -1],
    ],
    N: [
      [-1, -2],
      [-1, -3],
    ],
    NE: [
      [0, -2],
      [0, -3],
    ],
    E: [
      [-3, 0],
      [-3, -1],
    ],
    SE: [
      [-5, -1],
      [-5, -2],
    ],
    S: [
      [-6, -3],
      [-7, -2],
    ],
    SW: [
      [-5, -3],
      [-6, -1],
    ],
    W: [
      [-4, -2],
      [-4, -3],
    ],
    NW: [
      [-1, 0],
      [-1, -1],
    ],
  };

  function create() {
    nekoEl.id = "oneko";
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.position = "fixed";
    nekoEl.style.pointerEvents = "none";
    nekoEl.style.backgroundImage = "url('https://web.archive.org/web/20240822034327/https://cybercrime.sbs/images/obsidio.gif')";
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.left = `${nekoPosX}px`;
    nekoEl.style.top = `${nekoPosY}px`;

    document.body.appendChild(nekoEl);

    document.onmousemove = (event) => {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    };

    window.onekoInterval = setInterval(frame, 100);
  }

  function setSprite(name, frame) {
    const sprite = spriteSets[name][frame % spriteSets[name].length];
    nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
  }

  function resetIdleAnimation() {
    idleAnimation = null;
    idleAnimationFrame = 0;
  }

  function idle() {
    idleTime += 1;

    if (idleTime > 10 && true && idleAnimation == null) {
      let avalibleIdleAnimations = ["sleeping", "scratchSelf"];
      if (nekoPosX < 32) {
        avalibleIdleAnimations.push("scratchWallW");
      }
      if (nekoPosY < 32) {
        avalibleIdleAnimations.push("scratchWallN");
      }
      if (nekoPosX > window.innerWidth - 32) {
        avalibleIdleAnimations.push("scratchWallE");
      }
      if (nekoPosY > window.innerHeight - 32) {
        avalibleIdleAnimations.push("scratchWallS");
      }
      idleAnimation =
        avalibleIdleAnimations[
        Math.floor(Math.random() * avalibleIdleAnimations.length)
        ];
    }

    switch (idleAnimation) {
      case "sleeping":
        if (idleAnimationFrame < 8) {
          setSprite("tired", 0);
          break;
        }
        setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
        if (idleAnimationFrame > 192) {
          resetIdleAnimation();
        }
        break;
      case "scratchWallN":
      case "scratchWallS":
      case "scratchWallE":
      case "scratchWallW":
      case "scratchSelf":
        setSprite(idleAnimation, idleAnimationFrame);
        if (idleAnimationFrame > 9) {
          resetIdleAnimation();
        }
        break;
      default:
        setSprite("idle", 0);
        return;
    }
    idleAnimationFrame += 1;
  }

  function frame() {
    frameCount += 1;
    const diffX = nekoPosX - mousePosX;
    const diffY = nekoPosY - mousePosY;
    const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

    if (distance < nekoSpeed || distance < 48) {
      idle();
      return;
    }

    idleAnimation = null;
    idleAnimationFrame = 0;

    if (idleTime > 1) {
      setSprite("alert", 0);
      idleTime = Math.min(idleTime, 7);
      idleTime -= 1;
      return;
    }

    direction = diffY / distance > 0.5 ? "N" : "";
    direction += diffY / distance < -0.5 ? "S" : "";
    direction += diffX / distance > 0.5 ? "W" : "";
    direction += diffX / distance < -0.5 ? "E" : "";
    setSprite(direction, frameCount);

    nekoPosX -= (diffX / distance) * nekoSpeed;
    nekoPosY -= (diffY / distance) * nekoSpeed;

    nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
    nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
  }

  create();
};

const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
if (!isReduced) {
  oneko();
}

// quotes :3
const quotes = [
  `all i want for christmas
  is the destruction of the government - vio`,
  `Every morning I wake up at 5:00 am and make some soup....its the best . Every night I get to lay in my bed alone all my life........its fantastic.`,
  `Wheres my geek`,
  `Adamn killa arrested for murdering bladee`,
  `i stole this from vio xd`,
  `we're going to warsaw! we're going to charlotte! `,
  `i already knoooo what u onnnn`,
  `<source src="/images/Straped.mp4" type="video/mp4">`,
  `next 2 that church is chicken`,
  `If you keep playing with fire you're going to start pissing the bed`,

  `who the fuck cheats on this game? you must be a lowlife loser`,
  `That one girl of my dreams`,

  `Some CNN Reporter Just walks on in`,
  

  `all i want for christmas
  is jake paul merch...`,
  
  `i must be doing something wrong
  if feds ain't on my dick - vio`,
  
  `i may hide behind a screen
  to fight for my rights,
  but you hide behind religion
  to attack the rights of others - vio`,
    

// ascii art :3c
  `###################################################################
###################################################################
###################################################################
###################################################################
###################################################################
###################################################################
###################################################################
######################################*############################
############################%#%%##**###**##########################
##########################%%%%###%%####*#*#########################
#########################%%%%%@@@@@@@%%*++#########################
#########################%%%@@@@@@@@@%#%#*#########################
########################%%%%@%@@@%#%%#*%*+*########################
#########################%%%%%%%%%###**#**######################%%%
###########################%%%%%%%###*#***#################%%%@@@@@
##############%@%%#########%@%%%%%%#**#%%#############%%%%%%@@@@@@@
##############%%%%##########@%%%%%#**##%##*########%%@@@%@@@@@@@@@@
##############@%%@#########*%%%%%###*%*###*########%%@@%@@@@@@@@@@@
%%%%%%%####################*#%%%%#***%#*############%@@@@@@@@@@@@@@
%%%%%%%%%%#***############**#%%####**%**#############@@@@@@@@@@@@@@
%%%%%%%%%%#***#####%%%%%#*####%%#%###################@@@@@@@@@@@@@@
%%%%%%%%%%##**#####%%%%%%%%%%%%%%##############*#####%@@@@@@@@@@@@@
%%#%%####%##**#%%##%#%%%%%%#%#################%#*####%@@@@@@@@@@@@@
#############%%%%#####%%%######%%%##########*#%#**###%@@@@@@@@@@@@@
#############%%%%####%%#########%%#%#######**#%#***##%@@@@@@@@@@@@@
#############%%%%###############%%%%#######**#%#****##@@@@@@@@@@@@@
############%%%##%%##############%%%######***#%#*****#%@@@@@@@@@@@@
###########%%%%%%%%%%############%%#%#####***###*****##%@@@@@@@@@@@
##########%%%%%##%%%%%###########%%%%#####****####****##%@@@@@@@@@@
##########%%%%%##%@%%%############%%#%####****#*#**###%@@@@@@@@@@@@
##########%%@@%##%%%%%############%%%%####***##*##**##@@@@@@@@@@@@@
############%%@@@@@@%%%###########%%%#%###******#***##@@@@@@@@@@@@@
############%%%%@@@%%%%###%########%%#%%##******##***#@@@@@@@@@@%@@
#############%%#%%%%%%#%%###########%%%%##******%%#**#@@@@@@@@@@%%@
############*#%%%%%%%%%%%############%%%##******%%##*#@@@@@@@@@@%%%
############**#%%%%%%%%#############%%%###******%%#***@@@@@@@@@%%%@
*###########******#%%%%%%%%#########%%%%#*******%%#***@@@@@@@%%%%%%
**###########*****#%%%%%%%%#########%%%%#******##%##**#%%%%%###%%%%
***##########*****%%%%%%%%#########%%%%%#******##%%#**#%%%%%###%%%%
#############*****%%%%%%%%%#######%%%%%##******%@%%#**#%%%%%%##%%##
#######%@##%#######@@@@%@%%%%%%%#%%%%%%##*****%**%%#**#%%%%%%%####%
####################@@@@@@@@@@@@@%%@@#@@%@%@%*+++%%#**#%%%%%%%#####
####################@@@@@@@@@@%%@@@*@%@@%%%@#++++*%#**#%%%%%%%%%%##
##########%########%@@@@@@@@@@@@%@@%%%%%%%%@%*+++###**##%##%%%####*
########%%%########@@@@@@@@@@@@%%#%%%%%%%%%%%##+*%#***#%%@%##%%@###
#####%%%%%%#######%@@@@@@@@@@@@@@%%%%%%%%%%%%###%%#***#@@@@@@@@@@@@
###%%%%%%%%%######%@@@@%%%%@@@@@@@%%%%%%%%%%####%%%#**#@@@@@@@@@@@@
%%%%%%%%%%%%######%@@@%%%%%%@@@%%%%%%%%%%@%%####@%%#**#@@@@@@@@@@@@
%%%%%%%%%%%%######%@@@%%%%%%@@@@%%@%#%%%%@%%###%@@%###@@@@@@@@@@@@@
%%%%%%%%%%%%####%%%@@@%%%%%%%@@%@@@%%%%%@@@%###%@%%%@@@@@@@@@@@@@@@
%%%%%%%%%%%%###%%%%%@@%%%%%%%@@%@@@%%%%@@@%%##*##%%%@@@@@@@@@@@@@@@
%%%%%%%%%%%%###%%%%%@@@%%%%%%@@%@@@%%@@@@@@%#**#%%%%@@@@@@@@@@@@@@@
%%%%%%%%%%%%##%%%%%%@@@%%%%%%@@%%@@%%@@@@@%%#**#@%%%@@@@@@@@@@@@@@@
%%%%%%%%%%%%##%%%%%%@@%%#%%%%@@@%@@@@@@@@@@%#*##%%%@@@@@@@@@@@@@@@@
%%%%%%%%%%%%##%%%%%%%@@%#%%%%%@@@@@@@@@@@@@%#*##%%%%@@@@@@@@@@@@@@@
%%%%%%%%%%%%##%%%%%%%@@%#%%%%%@@@@@@@@@@@@@%#**#%@%%@@@@@@@@@@@@@@@
%%%%%%%%%%%%###%%%%%%@@%###%%%@@@@@@@@@@@@%%#*##@@%%@@@@@@@@@@@@@@@
%%%%%%%%%%%%%#%%%%%%%@@%###%%%@@@@%@@@@@@@@%#*#%@@@@@@@@@@@@@@@@@@@
%%%%%%%%%%%%%%%%%%%@@@@%##%%%%@@@%%@@@@@@@%%#*#@@@@@@@@@@@@@@@@@@@@
%%%%%%%@@@@@@@@@@@@@@@@%###%%%@@@%%%@@@@@@%%#*#@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@%###%%%@@#%%%@@@@@@%%###@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@%###%%@@@%@@@@@@%%%%####@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@###%%@@@@@@@@@%%%%#*###@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@%###%@@@@@@@@@@%%##*##%@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@##%%@@@@@@@@@@@%#*###%@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@%#%%@@@@@@@@@@@%######@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@%#%%@@@@@@@@@@@%#####%@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@%%%%%@@@@@@@@@@%#%%%%##@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@%%%%%@@@@@@@@@@@@@%%%%#%@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@%%%%%%@@@@@@@@@@@@@@@@%%@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%@@@@@@@@@@@@%%%%%@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@%%%%%@@@@@@@@@@@%%%%%%@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%@@@@@@@@@@@%%%%%%@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@%%%@@@@@@@@@@@%%@%%%@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@%%@@@@@@@@@@@@@@%%%%%@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@%@@@@@@@@@@@@@%%%%%%@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@%%%@@@@@@@@@@@@@@@@%%%%%@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@%%%%%@@@@@@@@@@@@@@@%%%%%@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@%%%%##%%%@@@@@@@@@@@@@@@@%%####%@@@@@@@@@@@@%%%%%
@@@@@@@@@@@@@@@@@@%%##**#@@@@@@@@@@@@@@@@@@#*****#@@@@@@@@@%%%%%%%%
@@@@@@@@@@@@@@@@@@%%%##%@@@@@@@@@@@@@@@@@@@%*****+%@@@@%%%%%%%%%@@@`
  
];


function displayQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteContainer = document.getElementById("quote-container");
  quoteContainer.textContent = quotes[randomIndex];
}

window.onload = displayQuote;


}
/*
     FILE ARCHIVED ON 23:24:29 Sep 29, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:50:37 Feb 20, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.587
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 64.181
  LoadShardBlock: 260.976 (3)
  PetaboxLoader3.resolve: 130.798 (3)
  PetaboxLoader3.datanode: 180.717 (4)
  load_resource: 97.613
*/