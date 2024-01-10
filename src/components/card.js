import React from "react";

import PropTypes from "prop-types";

import "./card.css";

const Card = (props) => {
  return (
    <>
      <figure class="image-block">
        <h1> Csak dőlj hátra!</h1>
        <img src="/SectionImages/doljhatra.png" alt="" />
        <figcaption>
          <p>
            Tipprofesszorunk és Tippdoktorunk leveszik a terhet a válladról, nem
            kell többé a statisztikákat és eredményeket bújnod, csak az
            elkészített terveket követni. <br></br>
            <br></br> Ők azért dolgoznak, hogy neked már ne kelljen!
          </p>
          {/* <button>More Info</button> */}
        </figcaption>
      </figure>
      <figure class="image-block">
        <h1> Ne legyen több zöldfülű hiba!</h1>
        <img src="/SectionImages/zoldfulu.png" alt="" />
        <figcaption>
          <p>
            Tipprofesszor és Tippdoktor körültekintő munkájának köszönhetően a
            fogadásból adódó stressz a lehető legalacsonyabb legyen. <br></br>
            <br></br> Profi csapatunkkal folyamatosan azon dolgozunk, hogy
            minden apró részletet észrevegyünk és a hibafaktor minimumra
            csökkenjen.
          </p>
          {/* <button>More Info</button> */}
        </figcaption>
      </figure>
      <figure class="image-block">
        <h1> Láss át rajtunk!</h1>
        <img src="/SectionImages/lass.png" alt="" />
        <figcaption>
          <p>
            {" "}
            Az átláthatóság nagyon fontos számunkra, így a statisztikáinkat az
            oldal indulásától kezdve folyamatosan nyomon követheted. A jó és
            rossz szériáink is látszanak, nem árulunk zsákbamacskát, mert nincs
            szükségünk rá!<br></br>
            <br></br>
            Ha ezek ellenére sem hiszel a statisztikáinknak, gyere, és nézd
            vissza! Telegram csoportunkban korábbi teljesítményünk
            visszatekinthető. Keress fel minket Instagram-on, vagy Facebook-on!
          </p>
          {/* <button>More Info</button> */}
        </figcaption>
      </figure>
    </>
  );
};

export default Card;
