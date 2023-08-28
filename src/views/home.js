import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Includes from '../components/includes'
import Mark from '../components/mark'
import Card from '../components/card'
import Accordion from '../components/accordion'
import Review from '../components/review'
import Article from '../components/article'
import FAQ from '../components/faq'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Zseton Klinika</title>
        <meta property="og:title" content="Zseton Klinika" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">
                  <span>
                    Ahol a sportfogadás
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    =
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>befektetés</span>
                </h1>
                <span className="home-caption">
                  Csapatunk változást hoz annak érdekében, hogy a sportfogadás
                  többé ne csak pénz és időpazarlás, hanem fontos bevételi
                  forrás legyen.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </header>
              <div className="home-buttons">
                <div className="home-get-started button">
                  <span className="home-text004">Csomagok</span>
                </div>
                <div className="home-get-started1 button">
                  <span className="home-text005">
                    <span>Gyakori kérdések</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
          </div>
          <img
            alt="image"
            src="/SectionImages/heroimage-700w.png"
            className="home-image"
          />
        </div>
      </section>
      <section id="about" className="home-section01">
        <h2 className="home-text008">Kik alkotják csapatunk?</h2>
        <p className="home-paragraph">
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            {' '}
            TippProfesszor és TippDoktor körülbelül 8 éve ismerkedett meg,
            amikor egy csapatban játszottak, most pedig újra egy csapatot
            erősítenek, a Zseton Klinikát
          </span>
          <br></br>
          <br></br>
          <span>
            {' '}
            Tippmesterünk több, mint 10 éve profitál sportfogadásból, az utóbbi
            években pedig az egyéni sportágakra specializálódva üzletszerűen
            foglalkozik vele. Mindemellett a profi asztalitenisz világában is
            gyerekkora óta aktívan részt vesz, aminek köszönhetően belső
            tapasztalatokra is tud alapozni a tippek megalkotásakor.
          </span>
          <br></br>
          <span>
            {' '}
            Tippkuktánk a Zseton Klinika megálmodója, emellett aktív sportoló és
            hobbi szinten pingpongozik, a sportfogadás profitábilis oldalával
            pedig tippmesterünk által ismerkedett meg. Miért válassz minket?
          </span>
          <br className="home-text016"></br>
          <br className="home-text017"></br>
          <span className="home-text018">Miért pont mi?</span>
          <br className="home-text019"></br>
          <br className="home-text020"></br>
          <span>
            Tudjuk jól, hogy nem egyszerű meghozni a döntést. Filózol az
            anyagiakon, hogy megéri e. A válasz: igen
          </span>
          <br></br>
          <span>
            Megmutatjuk, hogy a sportfogadás többről szól, mint csupán
            szerencse.
          </span>
          <br></br>
          <span>
            Gondosan felépített stratégia, segítőkész, barátságos csapat vár rád
            a ZsetonKlinikán.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            Folyamatosan frissülő, többhónapnyi játékos analízis a játékosok
            eredményeit és aktuális formájukat folyamatosan monitorozzuk
          </span>
          <br></br>
          <span>
            Tippmesterünk és Tippkuktánk együttesen több mint harminc éves sport
            tapasztalata is hozzá fog segíteni a sikerhez.
          </span>
          <br></br>
          <br></br>
          <span>
            Mi kell még? Egy boldogító igen. egy jó döntés választ el a
            profitábilis sportfogadástól.
          </span>
          <br className="home-text033"></br>
          <br className="home-text034"></br>
          <br></br>
        </p>
      </section>
      <section className="home-section02">
        <div className="home-container1">
          <h1 className="home-text036">
            <span className="home-text037">Csak dőlj hátra</span>
            <br></br>
          </h1>
          <span className="home-text039">
            TippProfesszor és TippDoktor leveszik a terhet a válladról, nem kell
            többé a statisztikákat és eredményeket bújnod, csak az elkészített
            terveket követni. Ők azért dolgoznak, hogy neked már ne kelljen!
          </span>
        </div>
        <div className="home-container2">
          <h1 className="home-text040">
            <span className="home-text041">Ne legyen több kezdő hiba</span>
            <br></br>
          </h1>
          <span className="home-text043">
            TippProfesszor és TippDoktor körültekintő munkájának köszönhetően a
            fogadásból adódó stressz a lehető legalacsonyabb legyen. Profi
            csapatunkkal folyamatosan azon dolgozunk, hogy minden apró részletet
            észrevegyünk és a hibafaktor minimumra csökkenjen.
          </span>
        </div>
        <div className="home-container3">
          <h1 className="home-text044">
            <span className="home-text045">Láss át rajtunk</span>
            <br></br>
          </h1>
          <span className="home-text047">
            A transzparencia nagyon fontos számunkra, így a statisztikáinkat az
            oldal indulásától kezdve folyamatosan nyomon követheted. A jó és
            rossz szériáink is látszanak, nem árulunk zsákbamacskát, mert nincs
            szükségünk rá!
          </span>
        </div>
      </section>
      <section id="telegram" className="home-section03">
        <main className="home-content1">
          <header className="home-header01">
            <h2 className="home-heading01 section-heading">
              Csatlakozz Telegram csoportunkhoz!
            </h2>
            <div className="home-buttons1">
              <div className="home-ios button">
                <img
                  alt="pastedImage"
                  src="/Icons/telegram-200h.png"
                  className="home-pasted-image"
                />
                <span className="home-text048">Csatlakozok</span>
              </div>
            </div>
          </header>
          <img
            alt="image"
            src="/SectionImages/telegram1-900h.png"
            className="home-image1"
          />
        </main>
      </section>
      <section id="packages" className="home-section04">
        <main className="home-pricing">
          <header className="home-header02">
            <header className="home-left">
              <span className="section-head">Csomagjaink</span>
              <h2 className="section-heading home-heading02">
                Segítünk választani
              </h2>
            </header>
            <div className="home-right">
              <p className="home-paragraph1 section-description">
                Csomagjaink széleskörűen rendelkezésedre állnak, így
                kiválaszthatod a neked megfelelőt.
              </p>
            </div>
          </header>
          <div className="home-plans-container">
            <div className="home-switch">
              <div className="switch">
                <label className="home-text049">Havi</label>
              </div>
              <div className="home-switch2 switch">
                <label className="home-text050">Éves</label>
              </div>
            </div>
            <main className="home-plans">
              <div className="home-plan">
                <div className="home-details">
                  <div className="home-header03">
                    <label className="home-name">Silver-Pong</label>
                  </div>
                </div>
                <div className="home-buy-details">
                  <div className="home-features">
                    <span className="home-heading03">Tartalmazza:</span>
                    <div className="home-list">
                      <Includes
                        Label="Pénzvisszatéritési garancia"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Asztalitenisz tippek"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Átlagosan napi 4-5 tipp"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Oddsok 1.50 - 3.00 között"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                    </div>
                  </div>
                </div>
                <div className="home-buy button">
                  <span className="home-text051">
                    <span className="home-text052">Megnézem</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-details1">
                  <div className="home-header04">
                    <label className="home-name1">Ping-Gold</label>
                  </div>
                </div>
                <div className="home-buy-details1">
                  <div className="home-features1">
                    <span className="home-heading04">Tartalmazza:</span>
                    <div className="home-list1">
                      <Includes
                        Label="Pénzvisszatéritési garancia"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes
                        Label="Átlagosan napi 3 tipp"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Oddsok 1.40 - 3.00 között"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Tippmesterünk általi napi/heti formaelemzés"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Tippek beküldési idejének meghatározása"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                    </div>
                  </div>
                </div>
                <div className="home-buy1 button">
                  <span className="home-text054">
                    <span className="home-text055">Megnézem</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-details2">
                  <div className="home-header05">
                    <label className="home-name2">Safety-Days</label>
                  </div>
                </div>
                <div className="home-buy-details2">
                  <div className="home-features2">
                    <span className="home-heading05">Tartalmazza:</span>
                    <div className="home-list2">
                      <Includes
                        Label="Pénzvisszatítési garancia"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Túlnyomórészt asztalitenisz tippek"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Átlagosan napi 1 tipp"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Oddsok 1.50 - 2.50 között"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Legkésőbb 13:00-ig küldjük"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                    </div>
                  </div>
                </div>
                <div className="home-buy2 button">
                  <span className="home-text057">
                    <span className="home-text058">Megnézem</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <main className="home-plans1">
              <div className="home-plan3">
                <div className="home-details3">
                  <div className="home-header06">
                    <label className="home-name3">Mr. Connection</label>
                  </div>
                </div>
                <div className="home-buy-details3">
                  <div className="home-features3">
                    <span className="home-heading06">Tartalmazza:</span>
                    <div className="home-list3">
                      <Includes
                        Label="Mindenféle sportot, ahol információhoz jutunk (érdemi hiányzók, sérültek, B kerettel való kiállás, stb.)"
                        rootClassName="includes-root-class-name21"
                      ></Includes>
                      <Includes
                        Label="Oddsok 1.5 - 4.00 között"
                        rootClassName="includes-root-class-name22"
                      ></Includes>
                    </div>
                  </div>
                </div>
                <div className="home-buy3 button">
                  <span className="home-text060">
                    <span className="home-text061">Megnézem</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-plan4">
                <div className="home-details4">
                  <div className="home-header07">
                    <label className="home-name4">Green-Health</label>
                  </div>
                </div>
                <div className="home-buy-details4">
                  <div className="home-features4">
                    <span className="home-heading07">Tartalmazza:</span>
                    <div className="home-list4">
                      <Includes
                        Label="Ping-Gold csomag"
                        rootClassName="includes-root-class-name25"
                      ></Includes>
                      <Includes
                        Label="30 perc konzultáció"
                        rootClassName="includes-root-class-name26"
                      ></Includes>
                    </div>
                  </div>
                </div>
                <div className="home-buy4 button">
                  <span className="home-text063">
                    <span className="home-text064">Megnézem</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-plan5">
                <div className="home-details5">
                  <div className="home-header08">
                    <label className="home-name5">Green-Harmony</label>
                  </div>
                </div>
                <div className="home-buy-details5">
                  <div className="home-features5">
                    <span className="home-heading08">Tartalmazza:</span>
                    <div className="home-list5">
                      <Includes
                        Label="Silver-Pong csomag"
                        rootClassName="includes-root-class-name31"
                      ></Includes>
                      <Includes
                        Label="Safety-Days csomag"
                        rootClassName="includes-root-class-name32"
                      ></Includes>
                    </div>
                  </div>
                </div>
                <div className="home-buy5 button">
                  <span className="home-text066">
                    <span className="home-text067">Megnézem</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
          </div>
        </main>
        <div className="home-help">
          <span className="home-text069">
            <span>Segítségre van szükséged?</span>
            <br></br>
          </span>
          <div className="home-contact-support">
            <p className="home-text072">Lépj velünk kapcsolatba  -&gt;</p>
          </div>
        </div>
      </section>
      <section className="home-section06">
        <section className="home-note">
          <div className="home-image2">
            <img
              alt="image"
              src="/SectionImages/consultation-600w.png"
              className="home-image3"
            />
            <main className="home-main1">
              <main className="home-heading09">
                <header className="home-header09">
                  <h2 className="home-heading10 section-heading">
                    Konzultáció
                  </h2>
                </header>
                <div className="home-checkmarks">
                  <Mark Label="Úgy érzed nem sikerült profitálnod hosszútávon a sportfogadásból?"></Mark>
                  <Mark Label="Még mindig azt hiszed, hogy csapatsportból lehet hosszútávon profitálni?"></Mark>
                  <Mark Label="Úgy érzed most jött el a pillanat, hogy kipróbáld magad ebben a világban és pár zöldfülű hibát szeretnél elkerülni?"></Mark>
                  <Mark Label="Szeretnél egy olyan személlyel beszélgetni, aki életvitelszerűen él sportfogadásból?"></Mark>
                  <Mark Label="Úgy érzed a cashouton sokat dilemmázol, és többször jössz ki belőle rosszul?"></Mark>
                  <Mark Label="Bajban vagy a tétemeléssel, és a befektetett tőkéd kezelésével?"></Mark>
                  <Mark Label="Még mindig a gól-gól meg a szöglet fogadásokat erőlteted?"></Mark>
                  <Mark Label="Régóta / nem régóta vagy sportfogadó?"></Mark>
                  <Mark Label="Érdekel a GYIK darabjaira szedve?"></Mark>
                </div>
              </main>
            </main>
          </div>
        </section>
      </section>
      <section id="forwho" className="home-section07">
        <h2 className="home-text073">Kinek ajánljuk szolgáltatásainkat?</h2>
        <p className="home-paragraph2">
          <span>✅ K</span>
          <span>ezdő, illetve haladó sportfogadóknak</span>
          <br className="home-text076"></br>
          <br></br>
          <span>✅</span>
          <span> Sportszeretőknek</span>
          <br className="home-text080"></br>
          <br></br>
          <span>✅</span>
          <span>
            {' '}
            Olyanoknak, akik hisznek a mottónkban. „Sportfogadás=befektetés.”
          </span>
          <br className="home-text084"></br>
          <br></br>
          <span>✅</span>
          <span> Olyanoknak, akik képesek hosszútávon gondolkodni.</span>
          <br className="home-text088"></br>
          <br></br>
          <span>✅</span>
          <span>
            {' '}
            Olyanoknak, akik képesek betartani tipp és tét javaslatainkat.
          </span>
          <br></br>
        </p>
        <h2 className="home-text093">Kinek nem ajánljuk szolgáltatásainkat?</h2>
        <p className="home-paragraph3">
          <span> ⛔</span>
          <span>
            {' '}
            Aki azt gondolja, hogy minden beküldött tipp a forgatókönyv szerint
            alakul.
          </span>
          <br className="home-text096"></br>
          <br></br>
          <span>
            ⛔ Aki megkérdőjelezi Tippmesterünk és Tippkuktánk
            munkáját/elemzéseit.
          </span>
          <br className="home-text099"></br>
          <br></br>
          <span>
            ⛔ Aki nem ért egyet a mottónkkal. „Sportfogadás=befektetés.”
          </span>
          <br className="home-text102"></br>
          <br></br>
          <span>
            ⛔ Aki azt gondolja, hogy 10-20 ezer forintból egy két héten belul
            milliókat fog nyerni.
          </span>
          <br className="home-text105"></br>
          <br></br>
          <span>
            ⛔ Aki egy esetleges rossz szériában nyomdafestéket nem tűrő módon
            ír, vagy bármilyen módon a rossz hírűnket kelti.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="home-text108"></br>
          <br></br>
          <span className="home-text110">
            EZEK MEGSÉRTÉSE AZONNALI KIZÁRÁSSAL JÁR!
          </span>
          <br className="home-text111"></br>
          <br></br>
          <br></br>
        </p>
      </section>
      <section className="home-section08">
        <header className="home-header10">
          <header className="home-left1">
            <span className="section-head">Kik vagyunk mi?</span>
            <h2 className="section-heading">Ismerd meg profi csapatunkat</h2>
          </header>
          <div className="home-right1">
            <p className="home-paragraph4 section-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </header>
        <main className="home-cards">
          <Card rootClassName="card-root-class-name"></Card>
          <Card
            Icon="/Icons/group%201314-200h.png"
            rootClassName="card-root-class-name1"
          ></Card>
        </main>
      </section>
      <section className="home-section10">
        <div className="home-note1">
          <div className="home-image4">
            <img
              alt="image"
              src="/SectionImages/iphone%2014%20pro%20max-1200w.png"
              className="home-image5"
            />
          </div>
          <div className="home-content2">
            <div className="home-caption1">
              <span className="section-head">Tempor incididunt</span>
            </div>
            <div className="home-heading12">
              <div className="home-header11">
                <h2 className="section-heading">
                  Tips to get care, answers and advice faster
                </h2>
              </div>
              <Accordion rootClassName="accordion-root-class-name"></Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section12">
        <div className="home-cube">
          <div className="home-top side"></div>
          <div className="home-front side"></div>
          <div className="home-left2 side"></div>
        </div>
        <main className="home-banner">
          <div className="home-header12">
            <h2 className="section-heading">
              Planical makes online doctor visits easier
            </h2>
            <p className="home-description section-description">
              Lorem ipsum dolor sit amet!
            </p>
          </div>
          <div className="home-buttons2">
            <div className="home-get-started2 button">
              <span className="home-text114">Get started</span>
            </div>
            <div className="home-book-demo button">
              <span className="home-text115">Book a demo</span>
            </div>
          </div>
        </main>
      </section>
      <section className="home-section13">
        <header className="home-header13">
          <header className="home-left3">
            <span className="section-head">Vélemények</span>
            <h2 className="home-heading15 section-heading">
              Amiket ügyfeleink mondanak rólunk
            </h2>
          </header>
          <div className="home-right2">
            <p className="home-paragraph5 section-description">
              Számunkra nagyon fontos ügyfeleink visszajelzése, mert így
              tudhatjuk, hogy jól dolgozunk.
            </p>
          </div>
        </header>
        <main className="home-cards1">
          <div className="home-container4">
            <Review rootClassName="review-root-class-name"></Review>
            <Review
              Quote="“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.\u2028\u2028Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.”"
              rootClassName="review-root-class-name"
            ></Review>
          </div>
          <div className="home-container5">
            <Review
              Quote="“Illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”"
              rootClassName="review-root-class-name"
            ></Review>
            <Review
              Quote="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”"
              rootClassName="review-root-class-name"
            ></Review>
          </div>
          <div className="home-container6">
            <Review
              Quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
              rootClassName="review-root-class-name"
            ></Review>
            <Review
              Quote="“Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
              rootClassName="review-root-class-name"
            ></Review>
          </div>
        </main>
        <div className="home-view-more">
          <p className="home-text116">View more</p>
        </div>
      </section>
      <section className="home-section15">
        <header className="home-header14">
          <span className="section-head">Articles about us</span>
          <h2 className="home-heading16 section-heading">
            We’re the app on everyone’s lips
          </h2>
        </header>
        <main className="home-cards2">
          <Article rootClassName="article-root-class-name"></Article>
          <Article
            Header="techeu"
            SpecialHeader="eu"
            rootClassName="article-root-class-name"
          ></Article>
          <Article
            Header="sifted/"
            rootClassName="article-root-class-name"
          ></Article>
        </main>
      </section>
      <section id="faq" className="home-section17">
        <header className="home-header15">
          <span className="section-head">GYIK</span>
          <h2 className="home-heading17 section-heading">
            Gyakran Ismételt Kérdések
          </h2>
        </header>
        <main className="home-accordion">
          <FAQ rootClassName="faq-root-class-name"></FAQ>
        </main>
      </section>
      <footer className="home-footer">
        <div className="home-content3">
          <main className="home-main-content">
            <div className="home-content4">
              <header className="home-main2">
                <div className="home-header16">
                  <img
                    alt="image"
                    src="https://i.imgur.com/92TCidp.png"
                    className="home-branding"
                  />
                  <span className="home-text117">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
                <div className="home-socials">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link"
                  >
                    <img
                      alt="image"
                      src="/Icons/linkedin-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    <img
                      alt="image"
                      src="/Icons/instagram-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <img
                      alt="image"
                      src="/Icons/twitter-200h.png"
                      className="social"
                    />
                  </a>
                </div>
              </header>
              <header className="home-categories">
                <div className="home-category">
                  <div className="home-header17">
                    <span className="footer-header">Solutions</span>
                  </div>
                  <div className="home-links">
                    <span className="footer-link">Responsive Web Design</span>
                    <span className="footer-link">Responsive Prototypes</span>
                    <span className="footer-link">Design to Code</span>
                    <span className="footer-link">Static Website Builder</span>
                    <span className="footer-link">
                      Static Website Generator
                    </span>
                  </div>
                </div>
                <div className="home-category1">
                  <div className="home-header18">
                    <span className="footer-header">Company</span>
                  </div>
                  <div className="home-links1">
                    <span className="footer-link">About</span>
                    <span className="footer-link">Team</span>
                    <span className="footer-link">News</span>
                    <span className="footer-link">Partners</span>
                    <span className="footer-link">Careers</span>
                    <span className="footer-link">Press &amp; Media</span>
                  </div>
                </div>
              </header>
            </div>
            <section className="home-copyright">
              <span className="home-text131">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </main>
          <main className="home-subscribe">
            <main className="home-main3">
              <h1 className="home-heading18">Iratkozz fel hírlevelünkre</h1>
              <div className="home-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="home-textinput input"
                />
                <div className="home-buy6 button">
                  <span className="home-text132">-&gt;</span>
                  <span className="home-text133">
                    <span>Subscribe now</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <h1 className="home-notice">
              Hírlevél feliratkozással elfogadod a szabályzatunkat.
            </h1>
          </main>
          <section className="home-copyright1">
            <span className="home-text136">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default Home
