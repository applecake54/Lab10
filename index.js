class Movie {
    constructor(name, desc, rating, ratingImg, img, imgBanner, age){
        this.name = name
        this.desc = desc
        this.rating = rating
        this.ratingImg = ratingImg
        this.img = img
        this.imgBanner = imgBanner
        this.age = age
    }

    htmlBanner(){
        return `<div style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${this.imgBanner});;" class="header">
        <div class="navbardiv">
            <ul class="navbar">
                <li><img class="iconmenu" src="outline_menu_white_48dp.png" alt=""></li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Kids</li>
            </ul>
            <img class="iconmenu" src="outline_person_outline_white_48dp.png" alt="">
        </div>
        <div id="banner" class="description">
        <div class="nombreyrat">
            <h1>${this.name}</h1>
            <h3>(${this.rating} Ratings)</h3>
        </div>
        <p>${this.desc}</p>
        <div class="playnsave">
            <button class="buttonplay"> <img src="baseline_play_arrow_white_48dp.png" alt=""> Play</button>
            <button class="buttonsave"> <img src="baseline_bookmark_border_white_48dp.png" alt=""> Save</button>
            <h3>${this.age}</h3>
        </div>
        </div>
        `
    }

    htmlMovie(){
        return `<div class="listcataloge-div">
        <div class="imgitem">
            <img src="${this.img}" alt="">
        </div>
        <div class="bottomtext">
            <div class="stars">
                <p>Ratings</p>
                ${this.ratingImg}
            </div>
            <div class="bookmark">
                <img src="baseline_bookmark_border_white_48dp.png" alt="">
            </div>
        </div>
        </div>
        `
    }
}

const WhenMarnieWasThere = new Movie ("When Marnie Was There", 
"The film follows Anna Sasaki while she stays with her relatives in a town in the Kushiro wetlands in Hokkaido. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As summer progresses, Anna spends more time with Marnie and learns the truth about her family and foster care.",
"4.8", `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://m.media-amazon.com/images/M/MV5BZTlmYTJmMWEtNDRhNy00ODc1LTg2OTMtMjk2ODJhNTA4YTE1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
"https://www.gannett-cdn.com/-mm-/466bd10a3487fe4383118fcb6bb4e1c27c9f3bcd/c=45-0-2098-1160/local/-/media/2015/06/03/Phoenix/Phoenix/635689467267790860-marnie-hires-6.jpg",
"10+")

const HowlsMovingCastle = new Movie ("Howl's Moving Castle",
"The film is set in a fictional kingdom where both magic and early twentieth-century technology are prevalent, against the backdrop of a war with another kingdom. It tells the story of Sophie, a young milliner who is turned into an elderly woman by a witch who enters her shop and curses her. She encounters a wizard named Howl and gets caught up in his resistance to fighting for the king.",
"4.9", `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://i.ebayimg.com/images/g/AWUAAOSw1JhZYIb-/s-l1600.jpg",
"https://www.thefilmagazine.com/wp-content/uploads/2020/04/Howls-Moving-Castle-Review-Banner.jpg",
"7+")

const MyNeighborTotoro = new Movie ("My Neighbor Totoro", 
"Following a betrayal, a young man left for the dead is reborn as a powerful devil-human hybrid after merging with his pet devil and is soon enlisted into an organization dedicated to hunting devils.",
"4.8", `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://www.themoviedb.org/t/p/original/aYbj5uFxEBMewFIlBJFw3uwdf5P.jpg",
"https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/Graphics_web_2022-01-07_my-neighbor-totoro.jpg?itok=k77KbkRF",
"5+")

const Doukyuusei = new Movie ("Doukyuusei",
"Teenagers transported from Earth become pilots for robotic lions to fight in an intergalactic war. The Paladins of Voltron must learn to work as a team to assemble the robot Voltron and use its power to conquer the Galra Empire.",
"4.7", `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://www.themoviedb.org/t/p/original/cIfRCA5wEvj9tApca4UDUagQEiM.jpg",
"https://demenciamediacl.files.wordpress.com/2021/06/sin-titulo-sertyuklk.jpg?w=1200&h=675&crop=1",
"12+")

const BananaFish= new Movie ("Banana Fish", 
"Vietnam. Un soldado estadounidense pierde repentinamente la cordura tras musitar unas palabras: Banana Fish. Años después Ash Lynx, un joven de 17 años y líder de una pandilla en Nueva York recibe un misterioso recipiente de un hombre moribundo, quien antes de morir pronuncia la frase Banana",
"4.9", `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://es.web.img3.acsta.net/c_310_420/pictures/19/06/26/09/42/3599204.jpg",
"https://i0.wp.com/elpalomitron.com/wp-content/uploads/2018/12/La-relaci%C3%B3n-de-amor-entre-los-protagonistas-de-Banana-Fish-Ash-Eiji-el-palomitron.jpg?resize=700%2C393&ssl=1", 
"17+"
)

const SK8 = new Movie ("SK8",
"Reki, a high school student who loves skateboarding, becomes fond of S, a dangerous underground racing tournament with no rules in an abandoned mine. Ranga, who has returned to Japan from Canada, has never been on a skateboard, but gets stuck in S along with Reki.",
"4.9", `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://es.web.img3.acsta.net/pictures/21/01/04/13/07/2330737.jpg",
"https://somoskudasai.com/wp-content/uploads/2020/09/sk8-1.jpg", 
"7+")

const Given = new Movie ("Given", 
"Ritsuka Uenoyama is a high school student who begins to get bored with the guitar and basketball, two activities that he loved. Things begin to change when one day she meets Mafuyu Sato, a classmate from the same grade as hers, on the stairs of the institute, who is hugging a damaged guitar.",
"4.5", `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f7293b9a5d3b05325707d6ed613ebcb4.jpe",
"https://ramenparados.com/wp-content/uploads/2022/06/given-ova-1-e1655400115482-1000x600.png", "12+"
)

const BungōStrayDogs = new Movie ("Bungō Stray Dogs",
"Atsushi Nakajima is a teenager who was kicked out of his orphanage and as a result, is forced to live on the streets. As he stands by a river on the brink of famine, he rescues a man attempting suicide in the river.",
"5.0",  `<img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_fill_star.png" alt=""> <img src="yellow_outline_star.png" alt="">`,
"https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f97923c80c70c98675c4f66ddb6c3782.jpe",
"https://ramenparados.com/wp-content/uploads/2017/03/Bungou-Stray-Dogs-destacado-manga-1000x600.jpg", "12+")

const banner = document.getElementById("top")
banner.innerHTML = WhenMarnieWasThere.htmlBanner()

const recommend = document.getElementById("recommend")
const trending = document.getElementById("trending")

let movies = [WhenMarnieWasThere, HowlsMovingCastle, MyNeighborTotoro, Doukyuusei, BananaFish, SK8, Given, BungōStrayDogs]

for(let i = 0 ; i < movies.length ; i++){
    recommend.innerHTML += movies[i].htmlMovie()
    trending.innerHTML += movies[i].htmlMovie()
}



