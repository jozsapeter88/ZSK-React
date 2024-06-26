import React from "react";
import Includes from "../components/includes";
import Card from "../components/card";
import Accordion from "../components/accordion";
import "./home.css";
import BackToTopButton from "../components/backtotop";
import Wip from "../components/wip";
import Navbar2 from "../components/navbar2";
import Intro from "../components/intro";

const Home = (props) => {

  return (
    <>
      <div className="navbar-area">
        <Navbar2 />
        <Wip />
      </div>
      <div className="home-container">
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
                          __html: " ",
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      =<p className="colorful-text home-heading">Befektetés</p>
                    </span>
                  </h1>

                  <span className="home-caption">
                    Csapatunk változást hoz annak érdekében, hogy a sportfogadás
                    többé ne csak pénz és időpazarlás, hanem fontos bevételi
                    forrás legyen.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
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
          <Intro />
          <div className="home-paragraph">
            <div className="why-us">
              <h2 className="why-us-header">Miért pont mi?</h2>
              <div className="why-us-text">
                Tudjuk jól, hogy nem egyszerű meghozni a döntést. Azon tűnődsz,
                hogy megéri-e.
                <br></br>
                <br></br>A válasz: igen!
                <div className="why-us-text2">
                  <br></br>Megmutatjuk, hogy a sportfogadás többről szól, mint
                  csupán szerencse.
                  <br></br>Gondosan felépített stratégia, segítőkész, barátságos
                  csapat vár rád a Zsetonklinikán.
                  <br></br>Időszakosan frissülő, többhónapnyi játékos analízis,
                  a játékosok eredményeit és aktuális formájukat folyamatosan
                  monitorozzuk.
                  <br></br> Tipprofesszorunk és Tippdoktorunk együttesen több,
                  mint harminc év sportban szerzett tapasztalata is hozzá fog
                  segíteni a sikerhez.
                  <br></br>Hogy mi kell még? Egy boldogító igen, egy jó döntés
                  választ el a profitábilis sportfogadástól!
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-section02">
          <Card />
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
                  <a href="https://t.me/zskfree"><p className="home-text051">Csatlakozom</p></a>
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
                  <span className="section-head">Csomagok</span>
                </header>
              </header>
              <div className="home-plans-container">
                <main className="home-plans">
                  <div className="home-plan0">
                    <div className="home-details">
                      <div className="home-header03">
                        <label className="home-name">Ping-Gold</label>
                      </div>
                    </div>
                    <div className="home-buy-details">
                      <img
                        src="/SectionImages/pinggold.png"
                        alt="pinggold"
                        width="150px"
                        height="150px"
                      ></img>
                      <div className="home-features">
                        <span className="home-heading03">Tartalmazza:</span>
                        <div className="home-list">
                          <Includes
                            Label="több éve profitot termelő, asztalitenisz tippek"
                            rootClassName="includes-root-class-name39"
                          ></Includes>
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

                    <dialog
                      id="dialog"
                      style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <h2>75.000 ft</h2>
                      <p>
                        Ez az összeállítás azoknak szól, akik hosszú távon
                        szeretnének a sportfogadással foglalkozni, úgy, hogy az
                        profitot is termeljen.
                        <br></br>
                        <br></br>Ebben az összeállításban Tipprofesszorunk által
                        analizált objektív és szubjektív statisztikákra és
                        emellett aktuális formaelemzésekre alapuló tippekhez
                        férhetnek hozzá.
                      </p>
                      <button
                        onClick={() => window.dialog.close()}
                        aria-label="close"
                        className="x"
                      >
                        ❌
                      </button>
                      {/* <a href="https://buy.stripe.com/test_3cs5oo7gzb8l50c4gh">
                      <button
                        className="buyBtn"
                      >
                        <span>
                          Vásárlás
                        </span>
                      </button>
                      </a> */}
                    </dialog>
                  </div>
                  <div className="home-plan1">
                    <div className="home-details01">
                      <div className="home-header04">
                        <label className="home-name1">Silver-Pong</label>
                      </div>
                    </div>
                    <div className="home-buy-details">
                      <img
                        src="/SectionImages/silverpong.png"
                        alt="silverpong"
                        width="150px"
                        height="150px"
                      ></img>
                      <div className="home-features1">
                        <span className="home-heading04">Tartalmazza:</span>
                        <div className="home-list1">
                          <Includes
                            Label="asztalitenisz tippek"
                            rootClassName="includes-root-class-name69"
                          ></Includes>
                          <Includes
                            Label="Tippdoktorunk által ajánlott tippek"
                            rootClassName="includes-root-class-name71"
                          ></Includes>
                          <Includes
                            Label="átlagosan napi 2 tipp"
                            rootClassName="includes-root-class-name72"
                          ></Includes>
                          <Includes
                            Label="oddsok 1.50 - 3.00 között, átlagosan 1.65"
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

                    <dialog
                      id="dialog1"
                      style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <h2>30.000 ft</h2>
                      <p>
                        Ez a csomag azoknak szól, akik kisebb tőkével
                        rendelkeznek, de kipróbálnák magukat az asztalitenisz
                        világában.
                        <br></br>
                        <br></br>Ezekben az összeállításokban Tippdoktorunk
                        által analizált statisztikákra és aktuális
                        formaelemzésekre alapuló tippjei szerint fogadhatnak,
                        Tippmesterünk koordinációja mellett.
                        <br></br>
                        <br></br>Tökéletes kezdőcsomag ahhoz, hogy idővel
                        szintet lépve a Ping-Gold tagjai lehessenek.
                        <br></br>
                        <br></br>E csomag fő célja, hogy fenntartsa a
                        lehetőséget a kisebb tőkével rendelkező potenciális
                        ügyfeleknek, a későbbi Ping-Gold csomaghoz való
                        csatlakozáshoz.
                        <br></br>
                        <br></br>Ebből kifolyólag, ebben az előfizetésben
                        maximum 2 hónapot lehet tölteni!
                      </p>
                      <button
                        onClick={() => window.dialog1.close()}
                        aria-label="close"
                        className="x"
                      >
                        ❌
                      </button>
                      {/* <a href="https://buy.stripe.com/test_3cs5oo7gzb8l50c4gh">
                        <button
                          className="buyBtn"
                        >
                          <span>
                            Vásárlás
                          </span>
                        </button>
                      </a> */}
                    </dialog>
                  </div>
                  <div className="home-plan2">
                    <div className="home-details02">
                      <div className="home-header05">
                        <label className="home-name2">Safety-Days</label>
                      </div>
                    </div>
                    <img
                      src="/SectionImages/safetydays.png"
                      alt="safetydays"
                      width="150px"
                      height="150px"
                    ></img>
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
                        </div>
                      </div>
                    </div>
                    <button
                      className="primary"
                      onClick={() => window.dialog2.showModal()}
                    >
                      <span>Megnézem</span>
                    </button>

                    <dialog
                      id="dialog2"
                      style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <h2>40.000</h2>
                      <p>
                        Ez a csomag azoknak szól, akik lassabban és
                        biztonságosabban, hosszú távon szeretnének a
                        sportfogadással foglalkozni, úgy, hogy az profitot is
                        termeljen.
                        <br></br>
                        <br></br>Ebben az összeállításban Tipprofesszorunk és
                        Tippdoktorunk által közösen analizált statisztikákra és
                        aktuális formaelemzésekre alapuló tippjeire fogadhatnak.
                        <br></br>
                        <br></br>Mivel napi 1 tipp ajánlás érkezik a délelőtt
                        folyamán, így akinek esetleg kevesebb ideje van a
                        hétköznapokban a sportfogadással foglalkozni, annak ez a
                        csomag tökéletes választás lehet.
                        <br></br>
                        <br></br>Ettől függetlenül kiegészítő csomagként
                        ajánljuk bármelyik asztalitenisz csoportunk mellé.
                      </p>
                      <button
                        onClick={() => window.dialog2.close()}
                        aria-label="close"
                        className="x"
                      >
                        ❌
                      </button>
                      {/* <button className="buyBtn">
                        <span>Vásárlás</span>
                      </button> */}
                    </dialog>
                  </div>
                </main>
                <main className="home-plans1">
                  <div className="home-plan" style={{ height: "auto" }}>
                    <div className="home-details04">
                      <div className="home-header07">
                        <label className="home-name">Green-Health</label>
                      </div>
                    </div>
                    <div className="">
                      <img
                        src="/SectionImages/greenhealth.png"
                        alt="penzdoki"
                        width="300px"
                        height="300px"
                      ></img>
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

                    <dialog
                      id="dialog4"
                      style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <h2 className="linethrough">115.000</h2>
                      <h2>105.000</h2>
                      <p>
                        Tartalmazzaa Ping-Gold csomagot és a 30(+15 gratis) perc
                        konzultációt.
                      </p>
                      <button
                        onClick={() => window.dialog4.close()}
                        aria-label="close"
                        className="x"
                      >
                        ❌
                      </button>
                      {/* <button className="buyBtn">
                        <span>Vásárlás</span>
                      </button> */}
                    </dialog>
                  </div>
                  <div className="home-plan" style={{ height: "auto" }}>
                    <div className="home-details05">
                      <div className="home-header08">
                        <label className="home-name">Green-Harmony</label>
                      </div>
                    </div>
                    <div className="">
                      <img
                        src="/SectionImages/greenharmony.png"
                        alt="penzdoki"
                        width="300px"
                        height="300px"
                      ></img>
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

                    <dialog
                      id="dialog5"
                      style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <h2 className="linethrough">70.000</h2>
                      <h2>60.000</h2>
                      <p>Tartalmazzaa Silver-Pong és a Safety-Days csomagot.</p>
                      <button
                        onClick={() => window.dialog5.close()}
                        aria-label="close"
                        className="x"
                      >
                        ❌
                      </button>
                      {/* <button className="buyBtn">
                        <span>Vásárlás</span>
                      </button> */}
                    </dialog>
                  </div>
                  <div className="home-plan" style={{ height: "auto" }}>
                    <div className="home-details05">
                      <div className="home-header08">
                        <label className="home-name">Gold-Harmony</label>
                      </div>
                    </div>
                    <div className="">
                      <img
                        src="/SectionImages/goldharmony.png"
                        alt="penzdoki"
                        width="300px"
                        height="300px"
                      ></img>
                    </div>
                    <div className="home-buy-details5">
                      <div className="home-features5">
                        <span className="home-heading08">Tartalmazza:</span>
                        <div className="home-list5">
                          <Includes
                            Label="Ping-Gold csomag"
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
                      onClick={() => window.dialog6.showModal()}
                    >
                      <span>Megnézem</span>
                    </button>

                    <dialog
                      id="dialog6"
                      style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <h2 className="linethrough">115.000</h2>
                      <h2>105.000</h2>
                      <p>Tartalmazza a Ping-Gold és Safety-Days a csomagot.</p>
                      <button
                        onClick={() => window.dialog6.close()}
                        aria-label="close"
                        className="x"
                      >
                        ❌
                      </button>
                      {/* <button className="buyBtn">
                        <span>Vásárlás</span>
                      </button> */}
                    </dialog>
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
                <div className="home-plan" style={{ height: "60vh" }}>
                  <div className="home-details04">
                    <div className="home-header07">
                      <label className="home-name">PénzDoki kurzus</label>
                    </div>
                  </div>
                  <div className="home-header-image">
                    <img
                      src="/SectionImages/penzdoki.png"
                      alt="penzdoki"
                      width="300px"
                      height="300px"
                    ></img>
                  </div>
                  <div className="home-buy-details3">
                    <div className="home-features3">
                      <span className="home-heading06"></span>
                      <span className="home-heading06"></span>

                      <div className="home-list3"></div>
                    </div>
                  </div>
                  <button
                    className="primary"
                    onClick={() => window.dialog8.showModal()}
                  >
                    <span>Megnézem</span>
                  </button>

                  <dialog
                    id="dialog8"
                    style={{
                      position: "fixed",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <h2 className="linethrough">600.000</h2>
                    <h2>450.000</h2>
                    <p className="paddingBottom">
                      <div>
                        <h1>Mit tartalmaz?</h1>
                        <br></br>Egy olyan tananyagot, amely átfogó tudást
                        biztosít arról, amiből Tipprofesszorunk évek óta
                        profitál.
                        <br></br>A sportfogadás tematikáját, pszichológiáját és
                        stratégiáját tanulhatjátok meg elméleti es gyakorlati
                        kurzuson keresztül, önálló és Tipprofesszorunkkal
                        együttesen végzett munkával/feladatokkal.
                        <br></br>Mindezek mellett, hogy ennél is értékesebb
                        legyen a szolgáltatás, létrehoztunk egy Telegram
                        beszélgetős csoportot, ahol a{" "}
                        <span className="colorful-text2">
                          {" "}
                          Pénzdoki kurzust{" "}
                        </span>
                        elvégzett társakkal meg tudjátok beszélni
                        meglátásaitokat, elemzéseiteket és több szem többet lát
                        alapon, akár közösen is fogadhattok, profitálhattok. Nem
                        mellesleg a csoportban Tipprofesszorunk is félaktívan
                        résztvesz majd, ő is ki tudja egészíteni
                        meglátásaitokat, kérdéseiteket fel tudjátok tenni neki.
                        A kurzus sikeres elvégzése után, postázásra kerül a
                        névre szóló Zsetonklinika diplomád.
                      </div>

                      <div>
                        <br></br>
                        <h1>Miről szól?</h1>
                        <br></br>Szakmai tudást (asztalitenisz játékelemek,
                        döntő fontosságú technikai es taktikai tényezők),
                        sportbeli tapasztalatot (mentális háttere,
                        pszichológiája az asztalitenisznek) és objektív
                        elemzésének irányait (szakmai,(másképp
                        szubjektív+objektív) skála ötvözete) is egyaránt megoszt
                        veletek Tipprofesszorunk.
                      </div>

                      <div>
                        <br></br>
                        <h1>Kinek ajánljuk?</h1>
                        <br></br>✅ Azoknak, akik kellő mennyiségű munkát tudnak
                        fektetni a program teljesítésébe (idő, energia, pénz,
                        stb.).
                        <br></br>✅ Azoknak, akik tisztában vannak azzal, hogy
                        ez a tanulási folyamat hosszabb időt vesz igénybe,
                        viszont szélesebb körű tudást biztosít.
                        <br></br>✅ Azoknak, akik készen állnak pénzt keresni
                        másképp, akár százezreket, milliókat. További hasonló
                        tartalmakért létrehoztunk nektek egy Telegram csoportot,
                        ahol visszakövethetitek korábbi kiemelkedő
                        eredményeinket.
                      </div>
                    </p>
                    <button
                      onClick={() => window.dialog8.close()}
                      aria-label="close"
                      className="x"
                    >
                      ❌
                    </button>
                    {/* <button className="buyBtn2 buyBtn">
                      <span>Vásárlás</span>
                    </button> */}
                  </dialog>
                </div>
                <div className="home-plan" style={{ height: "60vh" }}>
                  <div className="home-details04">
                    <div className="home-header07">
                      <label className="home-name">Konzultáció</label>
                    </div>
                  </div>
                  <div className="home-header-image">
                    <img
                      src="/SectionImages/konzultacio.png"
                      alt="penzdoki"
                      width="300px"
                      height="300px"
                    ></img>
                  </div>
                  <div className="home-buy-details3">
                    <div className="home-features3">
                      <span className="home-heading06"></span>
                      <span className="home-heading06"></span>

                      <div className="home-list3"></div>
                    </div>
                  </div>
                  <button
                    className="primary"
                    onClick={() => window.dialog9.showModal()}
                  >
                    <span>Megnézem</span>
                  </button>

                  <dialog
                    id="dialog9"
                    style={{
                      position: "fixed",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <h2>40.000 / 30 perc</h2>
                    <p className="paddingBottom">
                      A profitábilis sportfogadás nem csak néhány kattintás,
                      annál sokkal összetettebb. Fontos tényező például a pénz
                      menedzselése, a megfelelő tétválasztás, a tétemelés
                      gyakorisága és időzítése, stb. (Részletek a konzultáción.)
                      <br></br>
                      <br></br>
                      <h1>Kinek ajánljuk?</h1>
                      <br></br>Hasznos lehet számodra, ha:
                      <br></br>✅ úgy érzed, hogy nem sikerült profitálnod
                      hosszútávon a sportfogadásból.
                      <br></br>✅ még mindig a gól-gól meg a szöglet fogadásokat
                      erőlteted.
                      <br></br>✅ úgy érzed a cashout-on sokat dilemmázol, és
                      többször jössz ki belőle rosszul.
                      <br></br>✅ régóta vagy sportfogadó, sosem árt frissíteni
                      tudásod!
                      <br></br>✅ ha a GY.I.K. érdekel jobban kiboncolva,
                      kivesézve.
                      <br></br>✅ nem régóta vagy sportfogadó.
                      <br></br>✅ úgy érzed most jött el a pillanat, hogy
                      kipróbáld magad ebben a világban és pár zöldfülű hibát
                      szeretnél elkerülni.
                      <br></br>✅ bajban vagy a tétemeléssel, és a befektetett
                      tőkéd kezelésével.
                      <br></br>✅ szeretnél egy olyan személlyel beszélgetni,
                      aki életvitelszerűen él sportfogadásból.
                    </p>
                    <button
                      onClick={() => window.dialog9.close()}
                      aria-label="close"
                      className="x"
                    >
                      ❌
                    </button>
                    {/* <button className="buyBtn2 buyBtn">
                      <span>Vásárlás</span>
                    </button> */}
                  </dialog>
                </div>
                <div className="home-plan" style={{ height: "60vh" }}>
                  <div className="home-details05">
                    <div className="home-header08">
                      <label className="home-name">
                        Játékosállomány Analízis
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <img
                      src="/SectionImages/jatekosallomany.png"
                      alt="penzdoki"
                      width="300px"
                      height="300px"
                    ></img>
                  </div>
                  <div className="home-buy-details5">
                    <div className="home-features5">
                      <span className="home-heading08"></span>
                      <div className="home-list5"></div>
                    </div>
                  </div>
                  <button
                    className="primary"
                    onClick={() => window.dialog10.showModal()}
                  >
                    <span>Megnézem</span>
                  </button>

                  <dialog
                    id="dialog10"
                    style={{
                      position: "fixed",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <h2>500.000 / 250.000</h2>
                    <p>
                      Azoknak, akik sikeresen diplomát szereztek a Pénzdoki
                      kurzusunkon!
                      <br></br>
                      <br></br>Tipprofesszorunk és Tippdoktorunk közösen
                      kielemezték a liga (majdnem) összes játékosát! Egy komplex
                      szempontrendszer alapján, amit Tipprofesszorunk dolgozott
                      ki az eddig látott 6-8 ezer asztalitenisz mérkőzés során.
                      Végigmentek a játékosok legtöbb tulajdonságán, olyanokon
                      is, amelyekre más nem gondolna.
                      <br></br>
                      <br></br>Több hónapnyi kőkemény munka, energia, fogadási
                      stratégián alapuló szempontok és tűpontos, extrafontos
                      információk várnak rád, ha elkötelezed magad!
                    </p>
                    <button
                      onClick={() => window.dialog10.close()}
                      aria-label="close"
                      className="x"
                    >
                      ❌
                    </button>
                    {/* <button className="buyBtn">
                      <span>Vásárlás</span>
                    </button> */}
                  </dialog>
                </div>
              </main>
            </div>
            <div className="home-help">
              <span className="home-text069">
                <span>Segítségre van szükséged?</span>
              </span>
              <div className="home-contact-support">
                <a href="mailto: zsetonklinikakft@gmail.com">
                <p className="home-text072">Lépj velünk kapcsolatba  -&gt;</p>
                </a>
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
              {" "}
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
              {" "}
              Olyanoknak, akik képesek betartani tipp és tét javaslatainkat.
            </span>
            <br></br>
          </p>
          <h2 className="home-text096">
            Kinek nem ajánljuk szolgáltatásainkat?
          </h2>
          <p className="home-paragraph3">
            <span> ⛔</span>
            <span>
              {" "}
              Aki azt gondolja, hogy minden beküldött tipp a forgatókönyv
              szerint alakul.
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
                  __html: " ",
                }}
              />
            </span>
            <br className="home-text111"></br>
            <br></br>
            <span className="home-text113">
              EZEK MEGSÉRTÉSE AZONNALI KIZÁRÁSSAL JÁR!
            </span>
            <br className="home-text114"></br>
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
        <section id="faq" className="home-section18">
          <header className="home-header15">
            <span className="section-head">Gyakran Ismételt Kérdések</span>
          </header>
          <span className="home-accordion">
            <Accordion />
          </span>
        </section>
        <footer className="home-footer">
          <div className="home-content3">
            <main className="home-main-content">
              <div className="home-content4">
                <header className="home-main2">
                  <div className="home-header16">
                    <img
                      alt="image"
                      src="/Branding/logo.png"
                      className="home-branding"
                    />
                    <span className="home-text165"></span>
                  </div>
                  <div className="home-socials">
                    <a
                      href="https://www.instagram.com/zsetonklinika/"
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
                      <span className="footer-link">
                        Static Website Builder
                      </span>
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
                <span className="home-text179">© 2023 ZsetonKlinika</span>
              </section>
            </main>
            {/* <main className="home-subscribe">
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
                    </span>
                  </div>
                </div>
              </main>
              <h1 className="home-notice">
                Hírlevél feliratkozással elfogadod a szabályzatunkat.
              </h1>
            </main> */}
            <section className="home-copyright1">
              <span className="home-text184"></span>
            </section>
          </div>
        </footer>
        <BackToTopButton />
      </div>
    </>
  );
};

export default Home;