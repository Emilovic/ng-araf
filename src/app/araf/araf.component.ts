import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

export interface Player {
  imgurl: string;
  name: string;
  champion: string;
}

@Component({
  selector: 'app-araf',
  templateUrl: './araf.component.html',
  styleUrls: ['./araf.component.scss']
})
export class ArafComponent implements OnInit {
  backgrounds = [
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "a10",
    "a11",
    "a12"
  ]
  champions = [
      "Aatrox",
      "Ahri",
      "Akali",
      "Alistar",
      "Amumu",
      "Anivia",
      "Annie",
      "Ashe",
      "Aurelion Sol",
      "Azir",
      "Bard",
      "Blitzcrank",
      "Brand",
      "Braum",
      "Caitlyn",
      "Camille",
      "Cassiopeia",
      "Cho'Gath",
      "Corki",
      "Darius",
      "Diana",
      "Dr. Mundo",
      "Draven",
      "Ekko",
      "Elise",
      "Evelynn",
      "Ezreal",
      "Fiddlesticks",
      "Fiora",
      "Fizz",
      "Galio",
      "Gangplank",
      "Garen",
      "Gnar",
      "Gragas",
      "Graves",
      "Hecarim",
      "Heimerdinger",
      "Illaoi",
      "Irelia",
      "Ivern",
      "Janna",
      "Jarvan IV",
      "Jax",
      "Jayce",
      "Jhin",
      "Jinx",
      "Kai'Sa",
      "Kalista",
      "Karma",
      "Karthus",
      "Kassadin",
      "Katarina",
      "Kayle",
      "Kayn",
      "Kennen",
      "Kha'Zix",
      "Kindred",
      "Kled",
      "Kog'Maw",
      "LeBlanc",
      "Lee Sin",
      "Leona",
      "Lissandra",
      "Lucian",
      "Lulu",
      "Lux",
      "Malphite",
      "Malzahar",
      "Maokai",
      "Master Yi",
      "Miss Fortune",
      "Mordekaiser",
      "Morgana",
      "Nami",
      "Nasus",
      "Nautilus",
      "Neeko",
      "Nidalee",
      "Nocturne",
      "Nunu",
      "Olaf",
      "Orianna",
      "Ornn",
      "Pantheon",
      "Poppy",
      "Pyke",
      "Quinn",
      "Rakan",
      "Rammus",
      "Rek'Sai",
      "Renekton",
      "Rengar",
      "Riven",
      "Rumble",
      "Ryze",
      "Sejuani",
      "Shaco",
      "Shen",
      "Shyvana",
      "Singed",
      "Sion",
      "Sivir",
      "Skarner",
      "Sona",
      "Soraka",
      "Swain",
      "Sylas",
      "Syndra",
      "Tahm Kench",
      "Taliyah",
      "Talon",
      "Taric",
      "Teemo",
      "Thresh",
      "Tristana",
      "Trundle",
      "Tryndamere",
      "Twisted Fate",
      "Twitch",
      "Udyr",
      "Urgot",
      "Varus",
      "Vayne",
      "Veigar",
      "Vel'Koz",
      "Vi",
      "Viktor",
      "Vladimir",
      "Volibear",
      "Warwick",
      "Wukong",
      "Xayah",
      "Xerath",
      "Xin Zhao",
      "Yasuo",
      "Yorick",
      "Zac",
      "Zed",
      "Ziggs",
      "Zilean",
      "Zoe",
      "Zyra"
  ];
  selectedchampion

  player1: Player = {
    champion: "TBD",
    name: "Top",
    imgurl: "assets/images/1.png"
  }

  player2: Player = {
    champion: "TBD",
    name: "Jungle",
    imgurl: "assets/images/2.png"
  }

  player3: Player = {
    champion: "TBD",
    name: "Middle",
    imgurl: "assets/images/3.png"
  }

  player4: Player = {
    champion: "TBD",
    name: "ADC",
    imgurl: "assets/images/4.png"
  }

  player5: Player = {
    champion: "TBD",
    name: "Support",
    imgurl: "/assets/images/5.png"
  }

  noroll = false;

  constructor(private renderer: Renderer) { }

  ngOnInit() {
    var background = this.backgrounds[Math.floor(Math.random() * 12)];
    this.renderer.setElementClass(document.body, background, true);
    // background: url(/assets/images/5.jpg) no-repeat center center fixed;
   }
  
  champion() 
  {
    do  {
      var randomchampion = this.champions[Math.floor(Math.random() * this.champions.length)];
    } while (randomchampion == this.player1.champion || randomchampion == this.player2.champion  || randomchampion == this.player3.champion  || randomchampion == this.player4.champion  || randomchampion == this.player5.champion )
    return randomchampion;
  }

  picture(champion) 
  {
    champion = champion.replace(/\W/g, '');
    if(champion == "VelKoz")
    {
      return "https://www.mobafire.com/images/champion/skins/portrait/velkoz-classic.jpg";
    }
    if(champion == "Wukong")
    {
      champion = "MonkeyKing";
    }
    if(champion == "KhaZix")
    {
      return "https://lolskinshop.com/wp-content/uploads/2017/01/khazix-deathblossom.jpg";
    }
    if(champion == "KaiSa") 
    {
      return "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/56/Kai%27Sa_OriginalLoading.jpg/revision/latest?cb=20180304205429";
    }
    if(champion == "LeBlanc") 
    {
      return "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Leblanc_3.jpg";
    }
    if(champion == "ChoGath") 
    {
      return "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/69/Cho%27Gath_OriginalLoading.jpg/revision/latest?cb=20160524001707";
    }

    
    return "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + champion + "_0.jpg";
  }

  roll(number){
    this.noroll = true;
    switch (number) {
      case (0) :
        this.player1.champion = this.champion();
        this.player1.imgurl   = this.picture(this.player1.champion);
        this.player2.champion = this.champion();
        this.player2.imgurl   = this.picture(this.player2.champion);
        this.player3.champion = this.champion();
        this.player3.imgurl   = this.picture(this.player3.champion);
        this.player4.champion = this.champion();
        this.player4.imgurl   = this.picture(this.player4.champion);
        this.player5.champion = this.champion();
        this.player5.imgurl   = this.picture(this.player5.champion);
      break;
      case (1) :
        this.player1.champion = this.champion();
        this.player1.imgurl   = this.picture(this.player1.champion);
      break;
      case (2) :
          this.player2.champion = this.champion();
          this.player2.imgurl   = this.picture(this.player2.champion);
      break;
      case (3) :
          this.player3.champion = this.champion();
          this.player3.imgurl   = this.picture(this.player3.champion);
      break;
      case (4) :
          this.player4.champion = this.champion();
          this.player4.imgurl   = this.picture(this.player4.champion);
      break;
      case (5) :
          this.player5.champion = this.champion();
          this.player5.imgurl   = this.picture(this.player5.champion);
      break;                                        
    }
  }
}
