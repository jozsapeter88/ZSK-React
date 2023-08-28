import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './faq.css'

const FAQ = (props) => {
  const [isVisible7, setIsVisible7] = useState(false)
  const [isVisible8, setIsVisible8] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)
  const [isVisible5, setIsVisible5] = useState(false)
  const [isVisible4, setIsVisible4] = useState(false)
  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible6, setIsVisible6] = useState(false)
  return (
    <div className={`faq-accordion ${props.rootClassName} `}>
      <div
        id="1"
        data-role="accordion-container"
        className="faq-element accordion-element"
      >
        <div className="faq-details">
          <span className="faq-text">
            <span className="faq-text01"> Hogyan lehet befizetni?</span>
            <br className="faq-text02"></br>
            <span className="faq-text03">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          {!isVisible1 && (
            <span data-role="accordion-content" className="faq-text04">
              <span className="">Simplepay-en keresztül, bankkártyával.</span>
              <br className=""></br>
              <span className="">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          )}
        </div>
        <div data-role="accordion-icon" className="faq-icons">
          <svg
            viewBox="0 0 1024 1024"
            onClick={() => setIsVisible1(!isVisible1)}
            className="faq-icon"
          >
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        id="2"
        data-role="accordion-container"
        className="faq-element1 accordion-element"
      >
        <div className="faq-details1">
          <span className="faq-text08">
            <span className="">Mikor érdemes kezdeni?</span>
            <br className=""></br>
          </span>
          {!isVisible2 && (
            <span data-role="accordion-content" className="faq-text11">
              <span className="">
                Azonnal, és miért? Nem érdemes habozni, mert lehet, hogy egy
                kiugró szériáról maradsz le éppen.
              </span>
              <br className=""></br>
              <span className="">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          )}
        </div>
        <div data-role="accordion-icon" className="">
          <svg
            viewBox="0 0 1024 1024"
            onClick={() => setIsVisible2(!isVisible2)}
            className="faq-icon02"
          >
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        id="3"
        data-role="accordion-container"
        className="faq-element2 accordion-element"
      >
        <div className="faq-details2">
          <span className="faq-text15">
            <span className="">Csomag vásárlás után egyből él a tagságom?</span>
            <br className=""></br>
          </span>
          {!isVisible3 && (
            <span data-role="accordion-content" className="faq-text18">
              <span className="">
                Amint sikeresen feldolgoztuk a tranzakciót, kapsz egy Telegram
                linket tőlünk, amivel csatlakozni tudsz a csoporthoz.
              </span>
              <br className=""></br>
              <span className="">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          )}
        </div>
        <div data-role="accordion-icon" className="">
          <svg
            viewBox="0 0 1024 1024"
            onClick={() => setIsVisible3(!isVisible3)}
            className="faq-icon04"
          >
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        id="4"
        data-role="accordion-container"
        className="faq-element3 accordion-element"
      >
        <div className="faq-details3">
          <span className="faq-text22">Hol fogom kapni a tippeket?</span>
          {!isVisible4 && (
            <span data-role="accordion-content" className="faq-text23">
              Telegram alkalmazásban, egy privát csoportban.
            </span>
          )}
        </div>
        <div data-role="accordion-icon" className="">
          <svg
            viewBox="0 0 1024 1024"
            onClick={() => setIsVisible4(!isVisible4)}
            className="faq-icon06"
          >
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        id="5"
        data-role="accordion-container"
        className="faq-element4 accordion-element"
      >
        <div className="faq-details4">
          <span className="faq-text24">
            <span className="faq-text25">Mi az a Telegram?</span>
            <br className="faq-text26"></br>
            <span className="faq-text27">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          {!isVisible5 && (
            <span data-role="accordion-content" className="faq-text28">
              A Telegram egy alkalmazás, amit bármilyen készülékre letölthetsz.
              Az alkalmazás letöltéséhez az adott áruházban (App Store/Google
              Play) a Telegram applikációra kell rákeresned, majd azt letölteni.
              A letöltést követően a telefonszámod megadásával regisztrálhatsz.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          )}
        </div>
        <div data-role="accordion-icon" className="">
          <svg
            viewBox="0 0 1024 1024"
            onClick={() => setIsVisible5(!isVisible5)}
            className="faq-icon08"
          >
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        id="6"
        data-role="accordion-container"
        className="faq-element5 accordion-element"
      >
        <div className="faq-details5">
          <span className="faq-text29">
            <span className="">Garancia van?</span>
            <br className=""></br>
          </span>
          {!isVisible6 && (
            <span data-role="accordion-content" className="faq-text32">
              <span className="">
                Van! A megjelölt csomagoknál, méghozzá akkor, ha a találati
                arány nem éri el a 60%-ot. Ez azokra az előfizetőkre vonatkozik,
                akik teljes hónapra fizettek elő.
              </span>
              <br className=""></br>
            </span>
          )}
        </div>
        <div data-role="accordion-icon" className="">
          <svg
            viewBox="0 0 1024 1024"
            onClick={() => setIsVisible6(!isVisible6)}
            className="faq-icon10"
          >
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        id="7"
        data-role="accordion-container"
        className="faq-element6 accordion-element"
      >
        <div className="faq-details6">
          <span className="faq-text35">
            <span className="">Mi az a teljes hónap?</span>
            <br className=""></br>
          </span>
          {!isVisible7 && (
            <span data-role="accordion-content" className="faq-text38">
              <span className="">
                Nálunk rendszerben zajlik a befizetés, minden hónap tizedikén
                délig várjuk az előfizetések megújítását.
              </span>
              <br className=""></br>
            </span>
          )}
        </div>
        <div data-role="accordion-icon" className="">
          <svg
            viewBox="0 0 1024 1024"
            onClick={() => setIsVisible7(!isVisible7)}
            className="faq-icon12"
          >
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        id="8"
        data-role="accordion-container"
        className="faq-element7 accordion-element"
      >
        <div className="faq-details7">
          <span className="faq-text41">Másik napon elő se tudok fizetni?</span>
          {!isVisible8 && (
            <span data-role="accordion-content" className="faq-text42">
              De, méghozzá úgy, hogy a csomag árát időarányosan kiszámoljuk
              neked.
            </span>
          )}
        </div>
        <div data-role="accordion-icon" className="">
          <svg
            viewBox="0 0 1024 1024"
            onClick={() => setIsVisible8(!isVisible8)}
            className="faq-icon14"
          >
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div
        id="9"
        data-role="accordion-container"
        className="faq-element8 accordion-element"
      >
        <div className="faq-details8">
          <span className="faq-text43">
            Milyen tőke szükséges az indulásomhoz?
          </span>
          <span data-role="accordion-content" className="faq-text44">
            Mi azt javasoljuk, hogy legalább 150.000 forintos tőkével indulj,
            kivételt képez a Silver-Pong csomagunk, amit az előbb említett tőke
            összegyűjtésére hoztunk létre neked.
          </span>
        </div>
        <div data-role="accordion-icon" className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon16">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

FAQ.defaultProps = {
  rootClassName: '',
}

FAQ.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ
