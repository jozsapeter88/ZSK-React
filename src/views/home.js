import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Includes from '../components/includes'
import FlipCard from '../components/flip-card'
import Mark from '../components/mark'
import Card from '../components/card'
import Accordion from '../components/accordion'
import Review from '../components/review'
import Article from '../components/article'
import './home.css'
import FAQ from '../components/faq'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Zseton Klinika</title>
        <meta property="og:title" content="Zseton Klinika" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section id="top" className="home-section">
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
                    =<p className="colorful-text">Befektetés</p>
                  </span>
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
                <a href="#packages" className="home-link">
                  <div className="button">
                    <span className="home-text004">Csomagok</span>
                  </div>
                </a>
                <a href="#faq" className="home-link1">
                  <div className="home-get-started1 button">
                    <span className="home-text005">
                      <span>Gyakori kérdések</span>
                      <br></br>
                    </span>
                  </div>
                </a>
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
      <div class="row">
        <div class="card">
            <h1>Csak dőlj hátra!</h1>
            <p>Tipprofesszorunk és Tippdoktorunk leveszik a terhet a válladról, nem
            kell többé a statisztikákat és eredményeket bújnod, csak az
            elkészített terveket követni. <br></br><br></br> Ők azért dolgoznak, hogy neked már ne
            kelljen!</p>
        </div>
      </div>
      <div class="row">
        <div class="card">
            <h1>Ne legyen több zöldfülű hiba!</h1>
            <p>Tipprofesszor és Tippdoktor körültekintő munkájának köszönhetően a
            fogadásból adódó stressz a lehető legalacsonyabb legyen. <br></br><br></br> Profi
            csapatunkkal folyamatosan azon dolgozunk, hogy minden apró részletet
            észrevegyünk és a hibafaktor minimumra csökkenjen.</p>
        </div>
      </div>
      <div class="row">
        <div class="card">
            <h1>Láss át rajtunk!</h1>
            <p>Az átláthatóság nagyon fontos számunkra, így a statisztikáinkat az
              oldal indulásától kezdve folyamatosan nyomon követheted. A jó és
              rossz szériáink is látszanak, nem árulunk zsákbamacskát, mert
              nincs szükségünk rá!<br></br><br></br>
              Ha ezek ellenére sem hiszel a statisztikáinknak, gyere, és nézd
              vissza! Telegram csoportunkban korábbi teljesítményünk
              visszatekinthető. Keress fel minket Instagram-on, vagy
              Facebook-on!</p>
        </div>
      </div>
      </section>
      <section id="telegram" className="home-section03">
        <main className="home-content1">
          <header className="home-header01">
            <h2 className="home-heading01 section-heading">
              Csatlakozz ingyenes Telegram csoportunkhoz!
            </h2>
            <div className="home-buttons1">
              <div className="btn button">
                <img
                  alt="pastedImage"
                  src="/Icons/telegram-200h.png"
                  className="home-pasted-image"
                />
                <p className="home-text051">Csatlakozom</p>
              </div>
            </div>
          </header>
          <img
            alt="image"
            src="/SectionImages/telegram_grafika.png"
            className="home-image1"
          />
        </main>
      </section>
      <div className="home-container">
      <section id="packages" className="home-section04">
        <main className="home-pricing">
          <header className="home-header02">
            <header className="home-left">
              <span className="section-head">Csomagjaink</span>
            </header>
          </header>
          <div className="home-plans-container">
            <main className="home-plans">
              <div className="home-plan">
                <div className="home-details">
                  <div className="home-header03">
                    <label className="home-name">Ping-Gold</label>
                  </div>
                </div>
                <div className="home-buy-details">
                  <div className="home-features">
                    <span className="home-heading03">Tartalmazza:</span>
                    <div className="home-list">
                      <Includes
                        Label="több éve profitot termelő, asztalitenisz tippek"
                        rootClassName="includes-root-class-name39"
                      ></Includes>
                      <Includes rootClassName="includes-root-class-name40"></Includes>
                      <Includes
                        Label="Tipprofesszorunk által heti/napi forma elemzés"
                        rootClassName="includes-root-class-name41"
                      ></Includes>
                      <Includes
                        Label="átlagosan napi 2 tipp (kínálat függvénye)"
                        rootClassName="includes-root-class-name42"
                      ></Includes>
                      <Includes
                        Label="oddsok 1.40-3.00 között, átlagosan 1.65"
                        rootClassName="includes-root-class-name43"
                      ></Includes>
                      <Includes
                        Label="a tippek beküldési idejének meghatározása"
                        rootClassName="includes-root-class-name44"
                      ></Includes>
                      <Includes
                        Label="pénzvisszatérítési garancia másképp"
                        rootClassName="includes-root-class-name44"
                      ></Includes>
                    </div>
                  </div>
                </div>

                <button
                  className="primary"
                  onClick={() => window.dialog.showModal()}
                >
                  <span>Megnézem</span>
                </button>

                <dialog id="dialog">
                  <h2>50.000 ft</h2>
                  <p>
                    Ez a csomag azoknak szól, akik hosszú távon szeretnének a
                    sportfogadással foglalkozni, úgy, hogy az profitot is
                    termeljen. Ebben az összeállításban Tipprofesszorunk által
                    analizált objektív és szubjektív statisztikákra és emellett
                    aktuális formaelemzésekre alapuló tippekhez férhetnek hozzá.
                  </p>
                  <button
                    onClick={() => window.dialog.close()}
                    aria-label="close"
                    className="x"
                  >
                    ❌
                  </button>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <button className="buyBtn" onClick="">
                    <span>Vásárlás</span>
                  </button>
                </dialog>
                <br />
              </div>
              <div className="home-plan1">
                <div className="home-details01">
                  <div className="home-header04">
                    <label className="home-name1">Silver-Pong</label>
                  </div>
                </div>
                <div className="home-buy-details1">
                  <div className="home-features1">
                    <span className="home-heading04">Tartalmazza:</span>
                    <div className="home-list1">
                      <Includes
                        Label="asztalitenisz tippek"
                        rootClassName="includes-root-class-name69"
                      ></Includes>
                      <Includes rootClassName="includes-root-class-name70"></Includes>
                      <Includes
                        Label="Tippdoktorunk által ajánlott tippek"
                        rootClassName="includes-root-class-name71"
                      ></Includes>
                      <Includes
                        Label="átlagosan napi 2-3 tipp"
                        rootClassName="includes-root-class-name72"
                      ></Includes>
                      <Includes
                        Label="oddsok 1.50 - 3.00 között, átlagosan 1.70"
                        rootClassName="includes-root-class-name73"
                      ></Includes>
                    </div>
                  </div>
                </div>
                <button
                  className="primary"
                  onClick={() => window.dialog1.showModal()}
                >
                  <span>Megnézem</span>
                </button>

                <dialog id="dialog1">
                  <h2>30.000 ft</h2>
                  <p>
                    Ez a csomag azoknak szól, akik kisebb tőkével rendelkeznek,
                    de kipróbálnák magukat az asztalitenisz világában. Ezekben
                    az összeállításokban Tippdoktorunk által analizált
                    statisztikákra és aktuális formaelemzésekre alapuló tippjei
                    szerint fogadhatnak, Tippmesterünk koordinációja mellett.
                    Tökéletes kezdőcsomag ahhoz, hogy idővel szintet lépve a
                    Ping-Gold tagjai lehessenek. E csomag fő célja, hogy
                    fenntartsa a lehetőséget a kisebb tőkével rendelkező
                    potenciális ügyfeleknek, a későbbi Ping-Gold csomaghoz való
                    csatlakozáshoz. Ebből kifolyólag, ebben az előfizetésben
                    maximum 2 hónapot lehet tölteni!
                  </p>
                  <button
                    onClick={() => window.dialog1.close()}
                    aria-label="close"
                    className="x"
                  >
                    ❌
                  </button>
                  <button className="buyBtn" onClick="">
                    <span>Vásárlás</span>
                  </button>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </dialog>
                <br />
              </div>
              <div className="home-plan2">
                <div className="home-details02">
                  <div className="home-header05">
                    <label className="home-name2">Safety-Days</label>
                  </div>
                </div>
                <div className="home-buy-details2">
                  <div className="home-features2">
                    <span className="home-heading05">Tartalmazza:</span>
                    <div className="home-list2">
                      <Includes
                        Label="túlnyomó részben tenisztippek"
                        rootClassName="includes-root-class-name45"
                      ></Includes>
                      <Includes
                        Label="Tipprofesszorunk és Tippdoktorunk általi formaelemzés"
                        rootClassName="includes-root-class-name46"
                      ></Includes>
                      <Includes
                        Label="napi 1 tipp "
                        rootClassName="includes-root-class-name47"
                      ></Includes>
                      <Includes
                        Label="odds 1.50-2.30 között, átlagosan 1.60"
                        rootClassName="includes-root-class-name48"
                      ></Includes>
                      <Includes
                        Label="legkésőbb délután 1-ig küldjük a tippet"
                        rootClassName="includes-root-class-name49"
                      ></Includes>
                      <Includes
                        Label="pénzvisszatérítési garancia másképp"
                        rootClassName="includes-root-class-name49"
                      ></Includes>
                    </div>
                  </div>
                </div>
                <button
                  className="primary"
                  onClick={() => window.dialog2.showModal()}
                >
                  <span>Megnézem</span>
                </button>

                <dialog id="dialog2">
                  <h2>50.000</h2>
                  <p>
                    Ez a csomag azoknak szól, akik lassabban és
                    biztonságosabban, hosszú távon szeretnének a sportfogadással
                    foglalkozni, úgy, hogy az profitot is termeljen. Ebben az
                    összeállításban Tipprofesszorunk és 👀Tippdoktorunk által
                    közösen analizált statisztikákra és aktuális
                    formaelemzésekre alapuló tippjeire fogadhatnak. Mivel napi 1
                    tipp ajánlás érkezik a délelőtt folyamán, így akinek esetleg
                    kevesebb ideje van a hétköznapokban a sportfogadással
                    foglalkozni, annak ez a csomag tökéletes választás lehet.
                    Ettől függetlenül kiegészítő csomagként ajánljuk bármelyik
                    asztalitenisz csoportunk mellé.
                  </p>
                  <button
                    onClick={() => window.dialog2.close()}
                    aria-label="close"
                    className="x"
                  >
                    ❌
                  </button>
                  <button className="buyBtn" onClick="">
                    <span>Vásárlás</span>
                  </button>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </dialog>
                <br />
              </div>
            </main>
            <main className="home-plans1">
              <div className="home-plan3">
                <div className="home-details04">
                  <div className="home-header07">
                    <label className="home-name">Green-Health</label>
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
                        Label="30 perc (+15 gratis) konzultáció"
                        rootClassName="includes-root-class-name26"
                      ></Includes>
                    </div>
                  </div>
                </div>
                <button
                  className="primary"
                  onClick={() => window.dialog4.showModal()}
                >
                  <span>Megnézem</span>
                </button>

                <dialog id="dialog4">
                  <h2>̶̶̶̶1̶2̶0̶.̶0̶0̶0̶ 90.000</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque varius metus non tortor lacinia molestie.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Sed gravida, massa vel consectetur condimentum,
                    nisl metus eleifend tortor, non commodo dolor nisi sit amet
                    odio. Nulla facilisi.
                  </p>
                  <button
                    onClick={() => window.dialog4.close()}
                    aria-label="close"
                    className="x"
                  >
                    ❌
                  </button>
                  <button className="buyBtn" onClick="">
                    <span>Vásárlás</span>
                  </button>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </dialog>
                <br />
              </div>
              <div className="home-plan4">
                <div className="home-details05">
                  <div className="home-header08">
                    <label className="home-name">Green-Harmony</label>
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
                <button
                  className="primary"
                  onClick={() => window.dialog5.showModal()}
                >
                  <span>Megnézem</span>
                </button>

                <dialog id="dialog5">
                  <h2>̶̶8̶0̶.̶0̶0̶0̶ 65.000</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque varius metus non tortor lacinia molestie.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Sed gravida, massa vel consectetur condimentum,
                    nisl metus eleifend tortor, non commodo dolor nisi sit amet
                    odio. Nulla facilisi.
                  </p>
                  <button
                    onClick={() => window.dialog5.close()}
                    aria-label="close"
                    className="x"
                  >
                    ❌
                  </button>
                  <button className="buyBtn" onClick="">
                    <span>Vásárlás</span>
                  </button>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </dialog>
                <br />
              </div>
            </main>
          </div>
        </main>
        </section>
        <section id="courses" className="home-section04">
        <header className="home-header02">
          <header className="home-left">
            <span className="section-head">Kurzusaink</span>
          </header>
        </header>
        <div className="home-plans-container">
          <main className="home-plans">
            <div className="home-plan5">
              <div className="home-details04">
                <div className="home-header07">
                <label className="home-name">Konzultáció</label>
                  </div>
                </div>
                <div className="home-buy-details3">
                  <div className="home-features3">
                    <span className="home-heading06">
                      A profitábilis sportfogadás nem csak néhány kattintás,
                      hanem sokkal összetettebb. Fontos tényező például a pénz
                      menedzselése, a megfelelő tétválasztás, a tétemelés
                      gyakorisága és időzítése, stb. (Részletek a konzultáción.)
                    </span>
                    <span className="home-heading06">Kinek ajánljuk?</span>

                    <div className="home-list3">
                      <Includes
                        Label="úgy érzed, hogy nem sikerült profitálnod hosszútávon a sportfogadásból."
                        rootClassName="includes-root-class-name21"
                      ></Includes>
                      <Includes
                        Label="még mindig a gól-gól meg a szöglet fogadásokat erőlteted."
                        rootClassName="includes-root-class-name22"
                      ></Includes>
                      <Includes
                        Label="még mindig azt hiszed, hogy csapatsportból lehet hosszútávon profitálni."
                        rootClassName="includes-root-class-name22"
                      ></Includes>
                      <Includes
                        Label="úgy érzed a cashouton sokat dilemmázol, és többször jössz ki belőle rosszul."
                        rootClassName="includes-root-class-name22"
                      ></Includes>
                      <Includes
                        Label="régóta vagy sportfogadó, sosem árt frissíteni tudásod!"
                        rootClassName="includes-root-class-name22"
                      ></Includes>
                      <Includes
                        Label="ha a GY.I.K. érdekel jobban kiboncolva, kivesézve."
                        rootClassName="includes-root-class-name22"
                      ></Includes>
                      <Includes
                        Label="nem régóta vagy sportfogadó."
                        rootClassName="includes-root-class-name22"
                      ></Includes>
                      <Includes
                        Label="úgy érzed most jött el a pillanat, hogy kipróbáld magad ebben a világban és pár zöldfülű hibát szeretnél elkerülni."
                        rootClassName="includes-root-class-name22"
                      ></Includes>
                      <Includes
                        Label="bajban vagy a tétemeléssel, és a befektetett tőkéd kezelésével."
                        rootClassName="includes-root-class-name22"
                      ></Includes>
                      <Includes
                        Label="szeretnél egy olyan személlyel beszélgetni, aki életvitelszerűen él sportfogadásból."
                        rootClassName="includes-root-class-name22"
                      ></Includes>
                    </div>
                  </div>
                </div>
                <button
                  className="primary"
                  onClick={() => window.dialog6.showModal()}
                >
                  <span>Megnézem</span>
                </button>

              <dialog id="dialog6">
                <h2>̶̶̶̶1̶2̶0̶.̶0̶0̶0̶ 90.000</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque varius metus non tortor lacinia molestie.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Sed gravida, massa vel consectetur condimentum, nisl metus
                  eleifend tortor, non commodo dolor nisi sit amet odio. Nulla
                  facilisi.
                </p>
                <button
                  onClick={() => window.dialog6.close()}
                  aria-label="close"
                  className="x"
                >
                  ❌
                </button>
                <button className="buyBtn" onClick="">
                  <span>Vásárlás</span>
                </button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </dialog>
              <br />
            </div>
            <div className="home-plan6">
              <div className="home-details05">
                <div className="home-header08">
                  <label className="home-name">Study for Money</label>
                </div>
              </div>
              <div className="home-buy-details5">
                <div className="home-features5">
                  <span className="home-heading08">Mit tartalmaz?</span>
                  <div className="home-list5">
                    <Includes
                      Label="Egy olyan tananyagot, amely egy átfogó tudást biztosít arról, amiből Tippprofesszorunk évek óta profitál. "
                      rootClassName="includes-root-class-name31"
                    ></Includes>
                    <Includes
                      Label="A sportfogadás tematikáját, pszichológiáját és stratégiáját tanulhatjátok meg elméleti es gyakorlati kurzuson keresztül."
                      rootClassName="includes-root-class-name32"
                    ></Includes>
                    <Includes
                      Label="Szakmai tudást (asztalitenisz játékelemek, döntő fontosságú technikai es taktikai tényezők), sportbeli tapasztalatot (mentális háttere, pszichológiája az asztalitenisznek) és objektív elemzésének irányait (szakmai,{másképp szubjektív}+objektív skála ötvözete) is egyaránt megoszt veletek Tipprofesszorunk."
                      rootClassName="includes-root-class-name32"
                    ></Includes>
                    <Includes
                      Label="  Telegram csoportot hozunk létre az ügyfeleknek, ahol Tipprofesszorunk felügyelete alatt egymással is meg tudjátok osztani a tapasztalataitokat, ezáltal elősegítendő a gyorsabb fejlődést illetve megadva a közösséghez való tartozás élményét."
                      rootClassName="includes-root-class-name32"
                    ></Includes>
                  </div>
                </div>
              </div>
              <button
                className="primary"
                onClick={() => window.dialog5.showModal()}
              >
                <span>Megnézem</span>
              </button>

              <dialog id="dialog7">
                <h2>̶̶8̶0̶.̶0̶0̶0̶ 65.000</h2>
                <p>
                  Kinek ajánljuk? * Azoknak, akik kellő mennyiségű időt és
                  energiát tudnak szánni a program teljesítésére (idő, energia,
                  stb.). * Azoknak, akik tisztában vannak azzal, hogy ez a
                  tanulási folyamat hosszabb időt vesz igénybe, de szélesebb
                  körű tudást biztosít. * Azoknak, akik készen állnak pénzt
                  keresni másképp, akár többszázezreket, milliókat.
                </p>
                <button
                  onClick={() => window.dialog7.close()}
                  aria-label="close"
                  className="x"
                >
                  ❌
                </button>
                <button className="buyBtn" onClick="">
                  <span>Vásárlás</span>
                </button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </dialog>
              <br />
            </div>
          </main>
        </div>
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
    </div>
      <section id="forwho" className="home-section08">
        <h2 className="home-text076">Kinek ajánljuk szolgáltatásainkat?</h2>
        <p className="home-paragraph2">
          <span>✅ K</span>
          <span>ezdő, illetve haladó sportfogadóknak</span>
          <br className="home-text079"></br>
          <br></br>
          <span>✅</span>
          <span> Sportszeretőknek</span>
          <br className="home-text083"></br>
          <br></br>
          <span>✅</span>
          <span>
            {' '}
            Olyanoknak, akik hisznek a mottónkban. „Sportfogadás=befektetés.”
          </span>
          <br className="home-text087"></br>
          <br></br>
          <span>✅</span>
          <span> Olyanoknak, akik képesek hosszútávon gondolkodni.</span>
          <br className="home-text091"></br>
          <br></br>
          <span>✅</span>
          <span>
            {' '}
            Olyanoknak, akik képesek betartani tipp és tét javaslatainkat.
          </span>
          <br></br>
        </p>
        <h2 className="home-text096">Kinek nem ajánljuk szolgáltatásainkat?</h2>
        <p className="home-paragraph3">
          <span> ⛔</span>
          <span>
            {' '}
            Aki azt gondolja, hogy minden beküldött tipp a forgatókönyv szerint
            alakul.
          </span>
          <br className="home-text099"></br>
          <br></br>
          <span>
            ⛔ Aki megkérdőjelezi Tippmesterünk és Tippkuktánk
            munkáját/elemzéseit.
          </span>
          <br className="home-text102"></br>
          <br></br>
          <span>
            ⛔ Aki nem ért egyet a mottónkkal. „Sportfogadás=befektetés.”
          </span>
          <br className="home-text105"></br>
          <br></br>
          <span>
            ⛔ Aki azt gondolja, hogy 10-20 ezer forintból egy két héten belul
            milliókat fog nyerni.
          </span>
          <br className="home-text108"></br>
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
          <br className="home-text111"></br>
          <br></br>
          <span className="home-text113">
            EZEK MEGSÉRTÉSE AZONNALI KIZÁRÁSSAL JÁR!
          </span>
          <br className="home-text114"></br>
          <br></br>
          <br></br>
        </p>
      </section>
      <section className="home-section09">
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
      <section className="home-section11">
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
      <section className="home-section13">
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
              <span className="home-text117">Get started</span>
            </div>
            <div className="home-book-demo button">
              <span className="home-text118">Book a demo</span>
            </div>
          </div>
        </main>
      </section>
      <section className="home-section14">
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
          <p className="home-text119">View more</p>
        </div>
      </section>
      <section className="home-section16">
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
      <section id="faq" className="home-section18">
        <header className="home-header15">
          <span className="section-head">Gyakran Ismételt Kérdések</span>
        </header>
        <main className="home-accordion">
          {/* Replace the existing section with the FAQ component */}
          <FAQ  />
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
                    src="/Branding/Logo_szines_feketen.png"
                    className="home-branding"
                  />
                  <span className="home-text165">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
                <div className="home-socials">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
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
                    className="home-link3"
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
                    className="home-link4"
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
            <svg viewBox="0 0 1024 1024" className="home-icon18">
              <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM554.667 682.667v-238.336l97.835 97.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-170.667-170.667c-4.096-4.096-8.789-7.168-13.824-9.259s-10.539-3.243-16.341-3.243c-5.547 0-11.136 1.067-16.341 3.243-5.035 2.091-9.728 5.163-13.824 9.259l-170.667 170.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l97.835-97.835v238.336c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667z"></path>
            </svg>
            <section className="home-copyright">
              <span className="home-text179">
                © 2023 ZsetonKlinika
              </span>
            </section>
          </main>
          <main className="home-subscribe">
            <main className="home-main3">
              <h1 className="home-heading18">Iratkozz fel hírlevelünkre</h1>
              <div className="home-input-field">
                <input
                  type="email"
                  placeholder="Email cím"
                  className="home-textinput input"
                />
                <div className="home-buy6 button">
                  <span className="home-text180">-&gt;</span>
                  <span className="home-text181">
                    <span>Feliratkozás</span>
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
            <span className="home-text184">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div className="home-slide-to-top">
        <a href="#top" className="home-link5">
          <svg viewBox="0 0 1024 1024" className="home-icon20">
            <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM554.667 682.667v-238.336l97.835 97.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-170.667-170.667c-4.096-4.096-8.789-7.168-13.824-9.259s-10.539-3.243-16.341-3.243c-5.547 0-11.136 1.067-16.341 3.243-5.035 2.091-9.728 5.163-13.824 9.259l-170.667 170.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l97.835-97.835v238.336c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667z"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Home
