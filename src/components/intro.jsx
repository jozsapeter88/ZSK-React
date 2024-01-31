import React from "react";
import "./intro.css";

function Intro() {
  return (
    <div class="main">
      <ul class="cards">
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img
                src="/SectionImages/tipprofesszor.png"
                alt="mixed vegetable salad in a mason jar."
              />
            </div>
            <div class="card_content">
              <h2 class="card_title">Tipprofesszor</h2>
              <div class="card_text">
                <p>
                  Két sportdiplomával rendelkező Tipprofesszorunk több, mint 3
                  éve profitál sportfogadásból, az utóbbi években pedig az
                  egyéni sportágakra specializálódva üzletszerűen foglalkozik
                  vele. Mindemellett a profi asztalitenisz világában is
                  gyerekkora óta aktívan vesz részt, aminek köszönhetően nem
                  csak az objektív elemekre, hanem a rendkívül lényeges
                  szubjektív tényezőkre is alapoz a tippek megalkotásakor.
                </p>
              </div>
            </div>
          </div>
        </li>

        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img
                src="/SectionImages/tippdoktor.png"
                alt="a Reuben sandwich on wax paper."
              />
            </div>
            <div class="card_content">
              <h2 class="card_title">Tippdoktor</h2>
              <div class="card_text">
                <p>
                  Tippdoktorunk a Zsetonklinika megálmodója, emellett aktív
                  sportoló és hobbi szinten pingpongozik, a sportfogadás
                  profitábilis oldalával pedig Tipprofesszorunk által
                  ismerkedett meg.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Intro;
