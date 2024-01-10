import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <figure className="image-block">
      <h1>{props.title}</h1>
      <img src={props.imageSrc} alt={props.title} />
      <figcaption>
        <p>{props.description}</p>
      </figcaption>
    </figure>
  );
};

const CardContainer = () => {
  return (
    <div className="card-container">
      <Card
        title="Csak dőlj hátra!"
        imageSrc="/SectionImages/doljhatra.png"
        description="Tipprofesszorunk és Tippdoktorunk leveszik a terhet a válladról, nem kell többé a statisztikákat és eredményeket bújnod, csak az elkészített terveket követni. Ők azért dolgoznak, hogy neked már ne kelljen!"
      />
      <Card
        title="Ne legyen több zöldfülű hiba!"
        imageSrc="/SectionImages/zoldfulu.png"
        description="Tipprofesszor és Tippdoktor körültekintő munkájának köszönhetően a fogadásból adódó stressz a lehető legalacsonyabb legyen. Profi csapatunkkal folyamatosan azon dolgozunk, hogy minden apró részletet észrevegyünk és a hibafaktor minimumra csökkenjen."
      />
      <Card
        title="Láss át rajtunk!"
        imageSrc="/SectionImages/lass.png"
        description="Az átláthatóság nagyon fontos számunkra, így a statisztikáinkat az oldal indulásától kezdve folyamatosan nyomon követheted. A jó és rossz szériáink is látszanak, nem árulunk zsákbamacskát, mert nincs szükségünk rá! Ha ezek ellenére sem hiszel a statisztikáinknak, gyere, és nézd vissza! Telegram csoportunkban korábbi teljesítményünk visszatekinthető. Keress fel minket Instagram-on, vagy Facebook-on!"
      />
    </div>
  );
};

export default CardContainer;
