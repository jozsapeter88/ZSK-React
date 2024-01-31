import React, { useState } from 'react'

import './faq.css'

const FAQ = (props) => {
  const [expandedAccordions, setExpandedAccordions] = useState([]);

  const handleAccordionClick = (accordionId) => {
    // Check if the clicked accordion is already expanded
    if (expandedAccordions.includes(accordionId)) {
      // Collapse the clicked accordion
      setExpandedAccordions(expandedAccordions.filter((id) => id !== accordionId));
    } else {
      // Expand the clicked accordion
      setExpandedAccordions([...expandedAccordions, accordionId]);
    }
  
    // Returning false to prevent the default behavior
    return false;
  };
  
  return (
    <div className={`faq-accordion`}>
      <div
        id="1"
        data-role="accordion-container"
        onClick={() => !handleAccordionClick(1)}
        className={`faq-element accordion-element ${expandedAccordions.includes(1) ? 'expanded' : ''}`}
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
          {expandedAccordion === 1 && (
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
        <div className="faq-icons">
          <svg viewBox="0 0 1024 1024" className="faq-icon">
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
        onClick={() => !handleAccordionClick(2)}
        className={`faq-element1 accordion-element ${expandedAccordions.includes(2) ? 'expanded' : ''}`}
      >
        <div className="faq-details1">
          <span className="faq-text08">
            <span className="">Mikor érdemes kezdeni?</span>
            <br className=""></br>
          </span>
          {expandedAccordion === 2 && (
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
        <div className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon02">
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
        onClick={() => !handleAccordionClick(3)}
        className={`faq-element2 accordion-element ${expandedAccordions.includes(3) ? 'expanded' : ''}`}
      >
        <div className="faq-details2">
          <span className="faq-text15">
            <span className="">Csomag vásárlás után egyből él a tagságom?</span>
            <br className=""></br>
          </span>
          {expandedAccordion === 3 && (
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
        <div className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon04">
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
        onClick={() => !handleAccordionClick(4)}
        className={`faq-element3 accordion-element ${expandedAccordions.includes(4) ? 'expanded' : ''}`}
      >
        <div className="faq-details3">
          <span className="faq-text22">Hol fogom kapni a tippeket?</span>
          {expandedAccordion === 4 && (
            <span data-role="accordion-content" className="faq-text23">
              Telegram alkalmazásban, egy privát csoportban.
            </span>
          )}
        </div>
        <div className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon06">
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
        onClick={() => !handleAccordionClick(5)}
        className={`faq-element4 accordion-element ${expandedAccordions.includes(5) ? 'expanded' : ''}`}
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
          {expandedAccordion === 5 && (
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
        <div className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon08">
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
        onClick={() => !handleAccordionClick(6)}
        className={`faq-element5 accordion-element ${expandedAccordions.includes(6) ? 'expanded' : ''}`}
      >
        <div className="faq-details5">
          <span className="faq-text29">
            <span className="">Garancia van?</span>
            <br className=""></br>
          </span>
          {expandedAccordion === 6 && (
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
        <div className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon10">
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
        onClick={() => !handleAccordionClick(7)}
        className={`faq-element6 accordion-element ${expandedAccordions.includes(7) ? 'expanded' : ''}`}
      >
        <div className="faq-details6">
          <span className="faq-text35">
            <span className="">Mi az a teljes hónap?</span>
            <br className=""></br>
          </span>
          {expandedAccordion === 7 && (
            <span data-role="accordion-content" className="faq-text38">
              <span className="">
                Nálunk rendszerben zajlik a befizetés, minden hónap tizedikén
                délig várjuk az előfizetések megújítását.
              </span>
              <br className=""></br>
            </span>
          )}
        </div>
        <div className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon12">
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
        onClick={() => !handleAccordionClick(8)}
        className={`faq-element7 accordion-element ${expandedAccordions.includes(8) ? 'expanded' : ''}`}
      >
        <div className="faq-details7">
          <span className="faq-text41">Másik napon elő se tudok fizetni?</span>
          {expandedAccordion === 8 && (
            <span data-role="accordion-content" className="faq-text42">
              De, méghozzá úgy, hogy a csomag árát időarányosan kiszámoljuk
              neked.
            </span>
          )}
        </div>
        <div className="">
          <svg viewBox="0 0 1024 1024" className="faq-icon14">
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
        onClick={() => !handleAccordionClick(9)}
        className={`faq-element8 accordion-element ${expandedAccordions.includes(9) ? 'expanded' : ''}`}
      >
        <div className="faq-details8">
          <span className="faq-text43">
            Milyen tőke szükséges az indulásomhoz?
          </span>
          {expandedAccordion === 9 && (
            <span data-role="accordion-content" className="faq-text44">
              Mi azt javasoljuk, hogy legalább 150.000 forintos tőkével indulj,
              kivételt képez a Silver-Pong csomagunk, amit az előbb említett
              tőke összegyűjtésére hoztunk létre neked.
            </span>
          )}
        </div>
        <div className="">
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

export default FAQ;
