import React from "react";

import "./aboutus.style.scss";

const AboutUs = () => {
  return (
    <div className="book-box-about">
      <div class="cover">
        <div class="book">
          <label htmlFor="page-1" class="book__page book__page--1">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/193203/1111.jpg"
              alt=""
            />
          </label>

          <label htmlFor="page-2" class="book__page book__page--4">
            <div class="page__content">
              <h1 class="page__content-title">I</h1>
              <div class="page__content-blockquote">
                <p class="page__content-blockquote-text">
                  HARI SELDON — . . . born in the 11,988th year of the Galactic
                  Era; died 12,069. The dates are more commonly given in terms
                  of the current Foundational Era as -79 to the year 1 F.E. Born
                  to middle-class parents on Helicon, Arcturus sector (where his
                  father, in a legend of doubtful authenticity, was a tobacco
                  grower in the hydroponic plants of the planet), he early
                  showed amazing ability in mathematics. Anecdotes concerning
                  his ability are innumerable, and some are contradictory. At
                  the age of two, he is said to have. . .{" "}
                </p>
                <p class="page__content-blockquote-text">
                  . . . Undoubtedly his greatest contributions were in the field
                  of psychohistory. Seldon found the field little more than a
                  set of vague axioms; he left it a profound statistical
                  science. . . .{" "}
                </p>
                <p class="page__content-blockquote-text">
                  . . . The best existing authority we have for the details of
                  his life is the biography written by Gaal Dornick who, as a
                  young man, met Seldon two years before the great
                  mathematician's death. The story of the meeting . . .
                </p>
                <span class="page__content-blockquote-reference">
                  Encyclopedia Galactica*
                </span>
              </div>
              <div class="page__number">3</div>
            </div>
          </label>

          <input type="radio" name="page" id="page-1" />

          <input type="radio" name="page" id="page-2" />
          <label class="book__page book__page--2">
            <div class="book__page-front">
              <div class="page__content">
                <h1 class="page__content-book-title">WE ARE ODYSSEY</h1>
                <h2 class="page__content-author">
                  THE LITERATURE SOCIETY OF KIET
                </h2>

                <p class="page__content-credits">
                  Introduction by
                  <span>FACULTY HEAD</span>
                </p>

                <p class="page__content-credits">
                  Illustrations by
                  <span>FACULTY COORDINATORS</span>
                </p>

                <div class="page__content-copyright">
                  <p>IN LIBERAS</p>
                  <p>-LIBERTAS</p>
                </div>
              </div>
            </div>
            <div class="book__page-back">
              <div class="page__content">
                <h1 class="page__content-title">WHAT WE DO, YOU ASK?</h1>
                <table class="page__content-table">
                  <tbody>
                    <tr>
                      <td align="left">Part I</td>
                      <td align="left">THE LITFEST</td>
                      <td align="right">3</td>
                    </tr>
                    <tr>
                      <td align="left">Part II</td>
                      <td align="left">SESSIONS</td>
                      <td align="right">43</td>
                    </tr>
                    <tr>
                      <td align="left">Part III</td>
                      <td align="left">WORKSHOPS</td>
                      <td align="right">87</td>
                    </tr>
                    <tr>
                      <td align="left">Part IV</td>
                      <td align="left">EXCHANGE BOOKS</td>
                      <td align="right">147</td>
                    </tr>
                    <tr>
                      <td align="left">Part V</td>
                      <td align="left">ATTAIN DISTINCTION</td>
                      <td align="right">173</td>
                    </tr>
                  </tbody>
                </table>

                <div class="page__number">2</div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
