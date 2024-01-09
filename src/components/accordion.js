import React from 'react'

import PropTypes from 'prop-types'

import './accordion.css'

const Accordion = (props) => {
  return (
    <div className={`accordion-accordion ${props.rootClassName} accordion-section`}>
      <section>
    <div class="container">
      <div class="accordion">
        <div class="accordion-item" id="question1">
          <a class="accordion-link" href="#question1">
            <div class="flex">
              <h3>Hogyan lehet befizetni?</h3>
              <ul>
                {/* <li>#Figma</li>
                <li>#Sketch</li>
                <li>#Adobe</li>
                <li>#Invision</li>
                <li>#Protopie</li> */}
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p> Simplepay-en keresztül, bankkártyával.</p>
          </div>
          <hr></hr>
      </div>
        <div class="accordion-item" id="question2">
          <a class="accordion-link" href="#question2">
            <div class="flex">
              <h3>Mikor érdemes kezdeni?</h3>
              <ul>
                {/* <li>#Figma</li>
                <li>#Sketch</li>
                <li>#Adobe</li>
                <li>#Invision</li>
                <li>#Protopie</li> */}
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p>Azonnal, és miért? Nem érdemes habozni, mert lehet, hogy egy
                kiugró szériáról maradsz le éppen.</p>
          </div>
          <hr></hr>
      </div>
        <div class="accordion-item" id="question3">
          <a class="accordion-link" href="#question3">
            <div class="flex">
              <h3>Csomag vásárlás után egyből él a tagságom?</h3>
              <ul>
                {/* <li>#Figma</li>
                <li>#Sketch</li>
                <li>#Adobe</li>
                <li>#Invision</li>
                <li>#Protopie</li> */}
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p>Amint sikeresen feldolgoztuk a tranzakciót, kapsz egy Telegram
                linket tőlünk, amivel csatlakozni tudsz a csoporthoz.</p>
          </div>
          <hr></hr>
      </div>
        <div class="accordion-item" id="question4">
          <a class="accordion-link" href="#question4">
            <div>
              <h3>Hol fogom kapni a tippeket?</h3>
              <ul>
                {/* <li>#Figma</li>
                <li>#Sketch</li>
                <li>#Adobe</li>
                <li>#Invision</li>
                <li>#Protopie</li> */}
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p>Telegram alkalmazásban, egy privát csoportban.</p>
          </div>
          <hr></hr>
      </div>
      <div class="accordion-item" id="question5">
          <a class="accordion-link" href="#question5">
            <div>
              <h3>Mi az a Telegram?</h3>
              <ul>
                {/* <li>#Figma</li>
                <li>#Sketch</li>
                <li>#Adobe</li>
                <li>#Invision</li>
                <li>#Protopie</li> */}
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p>A Telegram egy alkalmazás, amit bármilyen készülékre letölthetsz.
              Az alkalmazás letöltéséhez az adott áruházban (App Store/Google
              Play) a Telegram applikációra kell rákeresned, majd azt letölteni.
              A letöltést követően a telefonszámod megadásával regisztrálhatsz.</p>
          </div>
          <hr></hr>
      </div>
      <div class="accordion-item" id="question6">
          <a class="accordion-link" href="#question6">
            <div>
              <h3>Garancia van?</h3>
              <ul>
                {/* <li>#Figma</li>
                <li>#Sketch</li>
                <li>#Adobe</li>
                <li>#Invision</li>
                <li>#Protopie</li> */}
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p>Van! A megjelölt csomagoknál, méghozzá akkor, ha a találati
                arány nem éri el a 60%-ot. Ez azokra az előfizetőkre vonatkozik,
                akik teljes hónapra fizettek elő.</p>
          </div>
          <hr></hr>
      </div>
      <div class="accordion-item" id="question7">
          <a class="accordion-link" href="#question7">
            <div>
              <h3>Mi az a teljes hónap?</h3>
              <ul>
                {/* <li>#Figma</li>
                <li>#Sketch</li>
                <li>#Adobe</li>
                <li>#Invision</li>
                <li>#Protopie</li> */}
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p>Nálunk rendszerben zajlik a befizetés, minden hónap tizedikén
                délig várjuk az előfizetések megújítását.</p>
          </div>
          <hr></hr>
      </div>
      <div class="accordion-item" id="question8">
          <a class="accordion-link" href="#question8">
            <div>
              <h3>Másik napon elő se tudok fizetni?</h3>
              <ul>
                {/* <li>#Figma</li>
                <li>#Sketch</li>
                <li>#Adobe</li>
                <li>#Invision</li>
                <li>#Protopie</li> */}
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p>De, méghozzá úgy, hogy a csomag árát időarányosan kiszámoljuk
              neked.</p>
          </div>
          <hr></hr>
      </div>
      <div class="accordion-item" id="question9">
          <a class="accordion-link" href="#question9">
            <div>
              <h3>Milyen tőke szükséges az indulásomhoz?</h3>
              <ul>
                {/* <li>#Figma</li>
                <li>#Sketch</li>
                <li>#Adobe</li>
                <li>#Invision</li>
                <li>#Protopie</li> */}
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p>Mi azt javasoljuk, hogy legalább 150.000 forintos tőkével indulj,
              kivételt képez a Silver-Pong csomagunk, amit az előbb említett
              tőke összegyűjtésére hoztunk létre neked.</p>
          </div>
          <hr></hr>
      </div>
     </div>
    </div>
  </section>
    </div>
  )
}

export default Accordion
