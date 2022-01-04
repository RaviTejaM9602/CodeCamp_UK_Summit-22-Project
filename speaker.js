const FEATURED_PLAYERS = [{
  Id: '1',
  Name: 'Yochai Benkler',
  Img: './Images/Speaker_Images/speaker_01.png',
  Role: 'Berkman professor of Entrepreneurial legal Studies at Harvard Law School',
  Description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
},
{
 Id: '2',
  Name: 'SohYeong Noh',
  Img: './Images/Speaker_Images/speaker_02.png',
  Role: 'Director of Art Center Nabl and a board member of A.G.S Korea',
  Description: 'As the man venue for new media art production in Korea,Nabi promotes cross-discipinary collaboration and understanding among science technology, humanities, and the arts.',
},
{ 
 Id: '3',
  Name: 'Lila Tretikov',
  Img: './Images/Speaker_Images/speaker_03.png',
  Role: 'Executive Director of the Wikimedia Foundation',
  Description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a bilion people around the world every month',
},
{
  Id: '4',
  Name: 'Kilnam Chon',
  Img: './Images/Speaker_Images/speaker_04.png',
  Role: '',
  Description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons In 2012, he was inducted into the inaugural class of the Internet Societys (ISOC) Internet Hall of Fame.',
},
{
  Id: '5',
  Name: 'Julia Leda',
  Img: './Images/Speaker_Images/speaker_05.png',
  Role: 'President of Young Pirates of Europe',
  Description: 'European ingetration, political democracy and participation  of youth through online as her major condern,Redas report  outlining potential changes to EU copyright law was approved by the Parlament in July.',
},
{
 Id: '6',
  Name: 'Ryan Merkley',
  Img: './Images/Speaker_Images/speaker_06.png"',
  Role: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
  Description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source move-ment.',
}];


const MAIN_FEATURED = document.querySelector('.main-featured');

const MORE_BUTTON = document.createElement('button');
MORE_BUTTON.type = 'button';
MORE_BUTTON.innerHTML = 'MORE';
MORE_BUTTON.classList.add('web-button');

const MORE_ICON = document.querySelector('i');
MORE_ICON.classList.add('fa', 'fa-angle-down');
MORE_BUTTON.appendChild(MORE_ICON);

function loadFirstFeatured() {
  if (window.screen.width < 768) {
    for (let i = 0; i < 2; i += 1) {
      const FIRST_PLAYERS = `<div class="featured-player">
      <img src=${FEATURED_PLAYERS[i].Img}><div class="player-description">
      <h4>${FEATURED_PLAYERS[i].Name}</h4>
      <h5>${FEATURED_PLAYERS[i].Role}<hr></h5>
      <p>${FEATURED_PLAYERS[i].Description}</p></div></div>`;
      MAIN_FEATURED.innerHTML += FIRST_PLAYERS;
    }
  } else if (window.screen.width > 768) {
    MORE_BUTTON.style.display = 'none';
    for (let i = 0; i < FEATURED_PLAYERS.length; i += 1) {
      const ALL_PLAYERS = `<div class="featured-player">
      <img src=${FEATURED_PLAYERS[i].Img}>
      <div class="player-description"><h4>${FEATURED_PLAYERS[i].Name}</h4>
      <h5>${FEATURED_PLAYERS[i].Role}<hr></h5>
      <p>${FEATURED_PLAYERS[i].Description}</p>
      </div>
    </div>`;
      MAIN_FEATURED.innerHTML += ALL_PLAYERS;
    }
  }
}

loadFirstFeatured();
MAIN_FEATURED.appendChild(MORE_BUTTON);

MORE_BUTTON.addEventListener('click', () => {
  MORE_BUTTON.style.display = 'none';
  for (let i = 2; i < FEATURED_PLAYERS.length; i += 1) {
    const NEXT_PLAYERS = `<div class="featured-player" id="${FEATURED_PLAYERS[i].Id}"><img src=${FEATURED_PLAYERS[i].Img}><div class="player-description"><h4>${FEATURED_PLAYERS[i].Name}</h4><h5>${FEATURED_PLAYERS[i].Role}<hr></h5><p>${FEATURED_PLAYERS[i].Description}</p></div></div>`;
    MAIN_FEATURED.innerHTML += NEXT_PLAYERS;
  }
});