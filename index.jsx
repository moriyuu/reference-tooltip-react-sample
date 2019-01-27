import React from "react";
import ReactDOM from "react-dom";
import ReferenceTooltip from "reference-tooltip";

ReferenceTooltip.dictionary.define([
  {
    id: "los_angeles",
    content:
      'Los Angeles, officially the City of Los Angeles and known colloquially by its initials LA, is the most populous city in California and the second most populous city in the United States, after New York City. With an estimated population of four million, Los Angeles is the cultural, financial, and commercial center of Southern California. Nicknamed the "City of Angels" partly because of its name\'s Spanish meaning, Los Angeles is known for its Mediterranean climate, ethnic diversity, Hollywood and the entertainment industry, and sprawling metropolis.'
  },
  {
    id: "emma_stone",
    content:
      'Emily Jean "Emma" Stone is an American actress. The recipient of numerous accolades, including an Academy Award, a BAFTA Award, and a Golden Globe Award, she was the highest-paid actress in the world in 2017. Stone has appeared in Forbes Celebrity 100 in 2013 and 2017, and was featured by Time as one of the 100 most influential people in the world.'
  },
  {
    id: "ryan_gosling",
    content:
      "Ryan Thomas Gosling is a Canadian actor and musician. He began his career as a child star on the Disney Channel's The Mickey Mouse Club (1993–1995), and went on to appear in other family entertainment programs, including Are You Afraid of the Dark? (1995) and Goosebumps (1996). His first starring film role was as a Jewish neo-Nazi in The Believer (2001), and he went on to star in several independent films, including Murder by Numbers (2002), The Slaughter Rule (2002), and The United States of Leland (2003)."
  }
]);

const App = () => {
  return (
    <div style={{ width: "50%", minWidth: "350px", margin: "auto" }}>
      <h1>reference-tooltip-react-sample</h1>
      <p>
        <a href="https://github.com/moriyuu/reference-tooltip-react-sample">
          https://github.com/moriyuu/reference-tooltip-react-sample
        </a>
      </p>

      <p>
        <referenced-word rwid="lalaland" content="Awesome movie.">
          La La Land
        </referenced-word>
        is a 2016 American romantic musical film written and directed by Damien
        Chazelle. It stars
        <referenced-word rwid="ryan_gosling" content="foobar">
          Ryan Gosling (foobar)
        </referenced-word>
        as a jazz pianist and
        <referenced-word rwid="emma_stone">Emma Stone</referenced-word> as an
        aspiring actress, who meet and fall in love in
        <referenced-word rwid="los_angeles">Los Angeles</referenced-word> while
        pursuing their dreams.
      </p>
      <p>
        Having been fond of musicals during his time as a drummer, Chazelle
        first conceptualised the film alongside Justin Hurwitz while attending
        Harvard University together. Moving to
        <referenced-word rwid="los_angeles">Los Angeles</referenced-word> in
        2010, Chazelle wrote the screenplay but did not find a studio willing to
        finance the production without changes to his design. Following the
        success of his 2014 film Whiplash, the project was picked up by Summit
        Entertainment. Filming took place in
        <referenced-word rwid="los_angeles">Los Angeles</referenced-word> from
        August to September 2015, with the film's score composed by Hurwitz and
        the dance choreography by Mandy Moore. La La Land premiered at the 73rd
        Venice International Film Festival on August 31, 2016, and was released
        in the United States on December 9, 2016. It grossed $446 million
        worldwide against a production budget of $30 million.
      </p>

      <p>
        La La Land is a 2016 American romantic musical film written and directed
        by Damien Chazelle. It stars
        <referenced-word rwid="ryan_gosling">Ryan Gosling</referenced-word> as a
        jazz pianist and
        <referenced-word rwid="emma_stone">Emma Stone</referenced-word> as an
        aspiring actress, who meet and fall in love in
        <referenced-word rwid="los_angeles">Los Angeles</referenced-word> while
        pursuing their dreams.
      </p>
      <p>
        Having been fond of musicals during his time as a drummer, Chazelle
        first conceptualised the film alongside Justin Hurwitz while attending
        Harvard University together. Moving to
        <referenced-word rwid="los_angeles">Los Angeles</referenced-word> in
        2010, Chazelle wrote the screenplay but did not find a studio willing to
        finance the production without changes to his design. Following the
        success of his 2014 film Whiplash, the project was picked up by Summit
        Entertainment. Filming took place in
        <referenced-word rwid="los_angeles">Los Angeles</referenced-word> from
        August to September 2015, with the film's score composed by Hurwitz and
        the dance choreography by Mandy Moore. La La Land premiered at the 73rd
        Venice International Film Festival on August 31, 2016, and was released
        in the United States on December 9, 2016. It grossed $446 million
        worldwide against a production budget of $30 million.
      </p>

      <p>
        La La Land is a 2016 American romantic musical film written and directed
        by Damien Chazelle. It stars
        <referenced-word rwid="ryan_gosling">Ryan Gosling</referenced-word> as a
        jazz pianist and
        <referenced-word rwid="emma_stone">Emma Stone</referenced-word> as an
        aspiring actress, who meet and fall in love in
        <referenced-word rwid="los_angeles">Los Angeles</referenced-word> while
        pursuing their dreams.
      </p>
      <p>
        Having been fond of musicals during his time as a drummer, Chazelle
        first conceptualised the film alongside Justin Hurwitz while attending
        Harvard University together. Moving to
        <referenced-word rwid="los_angeles">Los Angeles</referenced-word> in
        2010, Chazelle wrote the screenplay but did not find a studio willing to
        finance the production without changes to his design. Following the
        success of his 2014 film Whiplash, the project was picked up by Summit
        Entertainment. Filming took place in
        <referenced-word rwid="los_angeles">Los Angeles</referenced-word> from
        August to September 2015, with the film's score composed by Hurwitz and
        the dance choreography by Mandy Moore. La La Land premiered at the 73rd
        Venice International Film Festival on August 31, 2016, and was released
        in the United States on December 9, 2016. It grossed $446 million
        worldwide against a production budget of $30 million.
      </p>

      <p>
        La La Land is a 2016 American romantic musical film written and directed
        by Damien Chazelle. It stars
        <referenced-word rwid="ryan_gosling">Ryan Gosling</referenced-word> as a
        jazz pianist and
        <referenced-word rwid="emma_stone">Emma Stone</referenced-word> as an
        aspiring actress, who meet and fall in love in
        <referenced-word rwid="los_angeles">Los Angeles</referenced-word> while
        pursuing their dreams.
      </p>
      <p>
        Having been fond of musicals during his time as a drummer, Chazelle
        first conceptualised the film alongside Justin Hurwitz while attending
        Harvard University together. Moving to
        <referenced-word rwid="los_angeles">Los Angeles</referenced-word> in
        2010, Chazelle wrote the screenplay but did not find a studio willing to
        finance the production without changes to his design. Following the
        success of his 2014 film Whiplash, the project was picked up by Summit
        Entertainment. Filming took place in
        <referenced-word rwid="los_angeles">Los Angeles</referenced-word> from
        August to September 2015, with the film's score composed by Hurwitz and
        the dance choreography by Mandy Moore. La La Land premiered at the 73rd
        Venice International Film Festival on August 31, 2016, and was released
        in the United States on December 9, 2016. It grossed $446 million
        worldwide against a production budget of $30 million.
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
