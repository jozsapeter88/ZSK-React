import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Mark from '../components/mark'
import Includes from '../components/includes'
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
                  <span className="home-text004">Tudj meg többet</span>
                </div>
                <div className="home-get-started1 button">
                  <span className="home-text005">Csomagok</span>
                </div>
              </div>
            </main>
          </div>
          <div className="home-image">
            <img
              alt="image"
              src="/SectionImages/heroimage-600h.png"
              className="home-image01"
            />
          </div>
          <div className="home-image02">
            <img
              alt="image"
              src="/SectionImages/heroimage-600h.png"
              className="home-image03"
            />
          </div>
        </div>
      </section>
      <section className="home-section01">
        <h2 className="home-text006">Kik vagyunk mi?</h2>
        <p className="home-paragraph">
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Tippmesterünk</span>
          <span>🤵</span>
          <span> és Tippkuktánk</span>
          <span>👨‍🍳</span>
          <span>
            {' '}
            körülbelül 8 éve ismerkedett meg, amikor egy csapatban játszottak,
            most pedig újra egy csapatot erősítenek, a Zseton Klinikát!
          </span>
          <br className="home-text013"></br>
          <br className="home-text014"></br>
          <span>
            {' '}
            Tippmesterünk több, mint 10 éve profitál sportfogadásból, az utóbbi
            években pedig az egyéni sportágakra specializálódva üzletszerűen
            foglalkozik vele. Mindemellett a profi asztalitenisz világában is
            gyerekkora óta aktívan részt vesz, aminek köszönhetően belső
            tapasztalatokra is tud alapozni a tippek megalkotásakor.
          </span>
          <br className="home-text016"></br>
          <br className="home-text017"></br>
          <span>
            {' '}
            Tippkuktánk a Zseton Klinika megálmodója, emellett aktív sportoló és
            hobbi szinten pingpongozik, a sportfogadás profitábilis oldalával
            pedig tippmesterünk által ismerkedett meg. Miért válassz minket?
          </span>
          <br className="home-text019"></br>
          <br className="home-text020"></br>
          <span className="home-text021">Miért pont mi?</span>
          <br className="home-text022"></br>
          <br className="home-text023"></br>
          <span>
            Tudjuk jól, hogy nem egyszerű meghozni a döntést. Filózol az
            anyagiakon, hogy megéri e. A válasz: igen
          </span>
          <br className="home-text025"></br>
          <br className="home-text026"></br>
          <span>
            Megmutatjuk, hogy a sportfogadás többről szól, mint csupán
            szerencse.
          </span>
          <br className="home-text028"></br>
          <br className="home-text029"></br>
          <span>
            Gondosan felépített stratégia, segítőkész, barátságos csapat vár rád
            a ZsetonKlinikán.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="home-text031"></br>
          <br className="home-text032"></br>
          <span>
            Folyamatosan frissülő, többhónapnyi játékos analízis a játékosok
            eredményeit és aktuális formájukat folyamatosan monitorozzuk
          </span>
          <br className="home-text034"></br>
          <br className="home-text035"></br>
          <span>
            Tippmesterünk és Tippkuktánk együttesen több mint harminc éves sport
            tapasztalata is hozzá fog segíteni a sikerhez.
          </span>
          <br className="home-text037"></br>
          <br className="home-text038"></br>
          <span>
            Mi kell még? Egy boldogító igen. egy jó döntés választ el a
            profitábilis sportfogadástól.
          </span>
          <br className="home-text040"></br>
          <br className="home-text041"></br>
          <br></br>
        </p>
      </section>
      <section className="home-section02">
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
                <span className="home-text043">Csatlakozok</span>
              </div>
            </div>
          </header>
          <img
            alt="image"
            src="/SectionImages/telegram1-600w.png"
            className="home-image04"
          />
        </main>
      </section>
      <section className="home-section03">
        <section className="home-note">
          <div className="home-image05">
            <img
              alt="image"
              src="/SectionImages/guarantee-400w.png"
              className="home-image06"
            />
          </div>
          <div className="home-content2">
            <div className="home-main1">
              <div className="home-caption1">
                <span className="section-head">Biztonság</span>
              </div>
              <div className="home-heading02">
                <h2 className="section-heading">Pénzvisszatérítési garancia</h2>
                <p className="section-description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae.
                </p>
              </div>
            </div>
            <div className="home-get-started2 button">
              <span className="home-text044">Csomagjaink</span>
            </div>
          </div>
        </section>
        <section className="home-note1">
          <div className="home-image07">
            <img
              alt="image"
              src="/SectionImages/chat-2100h.png"
              className="home-image08"
            />
          </div>
          <div className="home-content3">
            <main className="home-main2">
              <header className="home-caption2">
                <span className="home-section05 section-head">
                  Ügyfélszolgálat
                </span>
              </header>
              <main className="home-heading04">
                <header className="home-header02">
                  <h2 className="section-heading">
                    Rendelkezésedre állunk, ha segítség kell.
                  </h2>
                  <p className="section-description">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </header>
                <div className="home-checkmarks">
                  <Mark Label="Ügyfeleink közvetlenül elérhetnek minket"></Mark>
                  <Mark Label="Széleskörű rendelkezésreállás"></Mark>
                  <Mark Label="Kérdezz bármit, mi segítünk"></Mark>
                </div>
              </main>
            </main>
            <div className="home-get-started3 button">
              <span className="home-text045">Tudj meg többet</span>
            </div>
          </div>
        </section>
      </section>
      <section className="home-section06">
        <section className="home-note2">
          <div className="home-image09">
            <img
              alt="image"
              src="/SectionImages/consultation-600w.png"
              className="home-image10"
            />
            <main className="home-main3">
              <header className="home-caption3">
                <span className="home-section07 section-head">Konzultáció</span>
              </header>
              <main className="home-heading06">
                <header className="home-header03">
                  <h2 className="home-heading07 section-heading">
                    Kinek ajánljuk?
                  </h2>
                </header>
                <div className="home-checkmarks1">
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
      <section className="home-section08">
        <main className="home-pricing">
          <header className="home-header04">
            <header className="home-left">
              <span className="section-head">Csomagjaink</span>
              <h2 className="section-heading home-heading08">
                Segítünk választani
              </h2>
            </header>
            <div className="home-right">
              <p className="home-paragraph3 section-description">
                Csomagjaink széleskörűen rendelkezésedre állnak, így
                kiválaszthatod a neked megfelelőt.
              </p>
            </div>
          </header>
          <div className="home-plans-container">
            <div className="home-switch">
              <div className="switch">
                <label className="home-text046">Havi</label>
              </div>
              <div className="home-switch2 switch">
                <label className="home-text047">Éves</label>
              </div>
            </div>
            <main className="home-plans">
              <div className="home-plan">
                <div className="home-details">
                  <div className="home-header05">
                    <label className="home-name">Silver-Pong</label>
                    <div className="home-pricing1">
                      <h1 className="home-price">50.000FT</h1>
                      <span className="home-duration">/hó</span>
                    </div>
                  </div>
                  <p className="home-description">
                    <span>
                      Ez a csomag azoknak szól, akik kisebb tőkével
                      rendelkeznek, de kipróbálnák magukat az asztalitenisz
                      világában. Ezekben az összeállításokban Tippkuktánk által
                      analizált statisztikákra és aktuális formaelemzésekre
                      alapuló tippjei szerint fogadhatnak, Tippmesterünk
                      koordinációja mellett. Tökéletes kezdőcsomag ahhoz, hogy
                      idővel szintet lépve a Ping-Gold tagjai lehessenek. Ezzel
                      fenntartva a lehetőséget a kisebb tőkével rendelkező
                      lehetséges ügyfeleknek, mivel a csoport létszáma limitálva
                      lesz. Ebben az előfizetésben maximum 2 hónapot lehet
                      tölteni!
                    </span>
                    <br></br>
                  </p>
                </div>
                <div className="home-buy-details">
                  <div className="home-features">
                    <span className="home-heading09">Tartalmazza:</span>
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
                  <span className="home-text050">
                    <span>Megvásárolom</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-details1">
                  <div className="home-header06">
                    <label className="home-name1">Ping-Gold</label>
                    <div className="home-pricing2">
                      <h1 className="home-price01">75.000FT</h1>
                      <span className="home-duration1">/hó</span>
                    </div>
                  </div>
                  <p className="home-description1">
                    <span>
                      Ez a csomag azoknak szól, akik hosszú távon szeretnének a
                      sportfogadással foglalkozni, úgy, hogy az profitot is
                      termeljen. Ezekben az összeállításokban profi
                      Tippmesterünk által analizált statisztikákra és aktuális
                      formaelemzésekre alapuló tippjei szerint fogadhatnak.
                    </span>
                    <br></br>
                  </p>
                </div>
                <div className="home-buy-details1">
                  <div className="home-features1">
                    <span className="home-heading10">Tartalmazza:</span>
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
                  <span className="home-text055">
                    <span>Megvásárolom</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-details2">
                  <div className="home-header07">
                    <label className="home-name2">Safety-Days</label>
                    <div className="home-pricing3">
                      <span className="home-price02">50.000</span>
                      <span className="home-duration2">/hó</span>
                    </div>
                  </div>
                  <p className="home-description2">
                    <span>
                      Ez a csomag azoknak szól, akik lassabban és
                      biztonságosabban hosszú távon szeretnének a
                      sportfogadással foglalkozni, úgy, hogy az profitot is
                      termeljen. Ezekben az összeállításokban profi
                      Tippmesterünk által analizált statisztikákra és aktuális
                      formaelemzésekre alapuló tippjei szerint fogadhatnak.
                      Mivel napi 1 tipp ajánlás érkezik a délelőtt folyamán, így
                      akinek esetleg kevesebb ideje van a hétköznapokban a
                      sportfogadással foglalkozni, annak ez a csomag tökéletes
                      választás lehet. Ettől függetlenül kiegészítő csomagként
                      ajánljuk a Ping-Gold csomag mellé.
                    </span>
                    <br></br>
                    <br></br>
                  </p>
                </div>
                <div className="home-buy-details2">
                  <div className="home-features2">
                    <span className="home-heading11">Tartalmazza:</span>
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
                  <span className="home-text061">
                    <span>Megvásárolom</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <main className="home-plans1">
              <div className="home-plan3">
                <div className="home-details3">
                  <div className="home-header08">
                    <label className="home-name3">Mr. Connection</label>
                    <div className="home-pricing4">
                      <h1 className="home-price03">40.000FT</h1>
                    </div>
                  </div>
                  <div className="home-container1">
                    <h1 className="home-price04">150.000FT</h1>
                  </div>
                  <div className="home-container2">
                    <h1 className="home-price05">200.000FT</h1>
                    <span className="home-duration3">/hó</span>
                  </div>
                  <p className="home-description3">
                    <br></br>
                    <br></br>
                    <span>
                      Ez a csomag azoknak szól, akik nagyobb tőkével
                      rendelkeznek. 1/5/10 db-os csomagok közül lehet
                      választani. Itt csapatunk nem Bunda tippeket ad(ezt
                      szeretnénk kihangsúlyozni!), hanem Tippmesterünk és
                      Tippkuktánk a sportkarrierjük során szerzett
                      tapasztalataikra és kapcsolati tőkéjükre alapozott
                      tippeket ad. A fent megadott darabszámok a győztes
                      tippekre vonatkoznak, az elvesztett meccseket nem
                      számoljuk!
                    </span>
                    <br></br>
                  </p>
                </div>
                <div className="home-buy-details3">
                  <div className="home-features3">
                    <span className="home-heading12">Tartalmazza:</span>
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
                  <span className="home-text068">
                    <span>Megvásárolom</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-plan4">
                <div className="home-details4">
                  <div className="home-header09">
                    <label className="home-name4">Green-Health</label>
                    <div className="home-pricing5">
                      <h1 className="home-price06">120.000FT</h1>
                    </div>
                  </div>
                  <div className="home-container3">
                    <h1 className="home-price07">90.000FT</h1>
                    <span className="home-duration4">/hó</span>
                  </div>
                  <p className="home-description4">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span>
                      Tartalmazza
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text076">Ping-Gold</span>
                    <span> csomagot és </span>
                    <span className="home-text078">30 perc konzultációt</span>
                    <span>. Egyszeri előfizetésnek ajánlott.</span>
                    <br></br>
                  </p>
                </div>
                <div className="home-buy-details4">
                  <div className="home-features4">
                    <span className="home-heading13">Tartalmazza:</span>
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
                  <span className="home-text081">
                    <span>Megvásárolom</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-plan5">
                <div className="home-details5">
                  <div className="home-header10">
                    <label className="home-name5">Green-Harmony</label>
                    <div className="home-pricing6">
                      <span className="home-price08">80.000FT</span>
                    </div>
                  </div>
                  <div className="home-container4">
                    <span className="home-price09">65.000FT</span>
                    <span className="home-duration5">/hó</span>
                  </div>
                  <p className="home-description5">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span>
                      Tartalmazza a
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text089">Silver-Pong</span>
                    <span>
                      {' '}
                      és a
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text091">
                      Safety-Days
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      csomagot.  Egyszeri és rendszeres előfizetésnek is
                      ajánlott.
                    </span>
                    <br></br>
                  </p>
                </div>
                <div className="home-buy-details5">
                  <div className="home-features5">
                    <span className="home-heading14">Tartalmazza:</span>
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
                  <span className="home-text094">
                    <span>Megvásárolom</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
          </div>
        </main>
        <div className="home-help">
          <span className="home-text097">
            <span>Segítségre van szükséged?</span>
            <br></br>
          </span>
          <div className="home-contact-support">
            <p className="home-text100">Lépj velünk kapcsolatba  -&gt;</p>
          </div>
        </div>
      </section>
      <section className="home-section10">
        <h2 className="home-text101">Kinek ajánljuk szolgáltatásainkat?</h2>
        <p className="home-paragraph4">
          <span> • K</span>
          <span>ezdő, illetve haladó sportfogadóknak</span>
          <br className="home-text104"></br>
          <br></br>
          <span>• Sportszeretőknek</span>
          <br className="home-text107"></br>
          <br></br>
          <span>
            • Olyanoknak, akik hisznek a mottónkban. „Sportfogadás=befektetés.”
          </span>
          <br className="home-text110"></br>
          <br></br>
          <span>• Olyanoknak, akik képesek hosszútávon gondolkodni.</span>
          <br className="home-text113"></br>
          <br></br>
          <span>
            • Olyanoknak, akik képesek betartani tipp és tét javaslatainkat.
          </span>
          <br></br>
        </p>
        <h2 className="home-text117">Kinek nem ajánljuk szolgáltatásainkat?</h2>
        <p className="home-paragraph5">
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            • Aki azt gondolja, hogy minden beküldött tipp a forgatókönyv
            szerint alakul.
          </span>
          <br className="home-text120"></br>
          <br></br>
          <span>
            • Aki megkérdőjelezi Tippmesterünk és Tippkuktánk
            munkáját/elemzéseit.
          </span>
          <br className="home-text123"></br>
          <br></br>
          <span>
            • Aki nem ért egyet a mottónkkal. „Sportfogadás=befektetés.”
          </span>
          <br className="home-text126"></br>
          <br></br>
          <span>
            • Aki azt gondolja, hogy 10-20 ezer forintból egy két héten belul
            milliókat fog nyerni.
          </span>
          <br className="home-text129"></br>
          <br></br>
          <span>
            • Aki egy esetleges rossz szériában nyomdafestéket nem tűrő módon
            ír, vagy bármilyen módon a rossz hírűnket kelti.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="home-text132"></br>
          <br></br>
          <span>EZEK MEGSÉRTÉSE AZONNALI KIZÁRÁSSAL JÁR!</span>
          <br className="home-text135"></br>
          <br></br>
          <br></br>
        </p>
      </section>
      <section className="home-section11">
        <header className="home-header11">
          <header className="home-left1">
            <span className="section-head">Kik vagyunk mi?</span>
            <h2 className="section-heading">Ismerd meg profi csapatunkat</h2>
          </header>
          <div className="home-right1">
            <p className="home-paragraph6 section-description">
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
      <section className="home-section13">
        <div className="home-note3">
          <div className="home-image11">
            <img
              alt="image"
              src="/SectionImages/iphone%2014%20pro%20max-1200w.png"
              className="home-image12"
            />
          </div>
          <div className="home-content4">
            <div className="home-caption4">
              <span className="section-head">Tempor incididunt</span>
            </div>
            <div className="home-heading16">
              <div className="home-header12">
                <h2 className="section-heading">
                  Tips to get care, answers and advice faster
                </h2>
              </div>
              <Accordion rootClassName="accordion-root-class-name"></Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section15">
        <div className="home-cube">
          <div className="home-top side"></div>
          <div className="home-front side"></div>
          <div className="home-left2 side"></div>
        </div>
        <main className="home-banner">
          <div className="home-header13">
            <h2 className="section-heading">
              Planical makes online doctor visits easier
            </h2>
            <p className="home-description6 section-description">
              Lorem ipsum dolor sit amet!
            </p>
          </div>
          <div className="home-buttons2">
            <div className="home-get-started4 button">
              <span className="home-text138">Get started</span>
            </div>
            <div className="home-book-demo button">
              <span className="home-text139">Book a demo</span>
            </div>
          </div>
        </main>
      </section>
      <section className="home-section16">
        <header className="home-header14">
          <header className="home-left3">
            <span className="section-head">Vélemények</span>
            <h2 className="home-heading19 section-heading">
              Amiket ügyfeleink mondanak rólunk
            </h2>
          </header>
          <div className="home-right2">
            <p className="home-paragraph7 section-description">
              Számunkra nagyon fontos ügyfeleink visszajelzése, mert így
              tudhatjuk, hogy jól dolgozunk.
            </p>
          </div>
        </header>
        <main className="home-cards1">
          <div className="home-container5">
            <Review rootClassName="review-root-class-name"></Review>
            <Review
              Quote="“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.\u2028\u2028Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.”"
              rootClassName="review-root-class-name"
            ></Review>
          </div>
          <div className="home-container6">
            <Review
              Quote="“Illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”"
              rootClassName="review-root-class-name"
            ></Review>
            <Review
              Quote="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”"
              rootClassName="review-root-class-name"
            ></Review>
          </div>
          <div className="home-container7">
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
          <p className="home-text140">View more</p>
        </div>
      </section>
      <section className="home-section18">
        <header className="home-header15">
          <span className="section-head">Articles about us</span>
          <h2 className="home-heading20 section-heading">
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
      <section className="home-section20">
        <header className="home-header16">
          <span className="section-head">GYIK</span>
          <h2 className="home-heading21 section-heading">
            Gyakran Ismételt Kérdések
          </h2>
        </header>
        <main className="home-accordion">
          <FAQ rootClassName="faq-root-class-name"></FAQ>
        </main>
      </section>
      <footer className="home-footer">
        <div className="home-content5">
          <main className="home-main-content">
            <div className="home-content6">
              <header className="home-main4">
                <div className="home-header17">
                  <img
                    alt="image"
                    src="https://i.imgur.com/92TCidp.png"
                    className="home-branding"
                  />
                  <span className="home-text141">
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
                  <div className="home-header18">
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
                  <div className="home-header19">
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
              <span className="home-text155">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </main>
          <main className="home-subscribe">
            <main className="home-main5">
              <h1 className="home-heading22">Iratkozz fel hírlevelünkre</h1>
              <div className="home-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="home-textinput input"
                />
                <div className="home-buy6 button">
                  <span className="home-text156">-&gt;</span>
                  <span className="home-text157">
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
            <span className="home-text160">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <Script
          html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
        ></Script>
      </div>
    </div>
  )
}

export default Home
