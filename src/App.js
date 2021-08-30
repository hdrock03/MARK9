import "./styles.css";
import React, { useState } from "react";
import Fade from 'react-reveal/Fade';
export default function App() {
  var movieDict = {
    THRILLER: [
      {
        poster: "net.jpg",
        head: "THE CALL",
        p:
          "A veteran operator for an emergency call-center, Jordan  saves lives daily as part of her job,"
      },
      {
        poster: "net2.jpg",
        head: "BIRD BOX",
        p:
          "When a mysterious force decimates the population, only one thing is certain -- if you see it, you die. "
      },
      {
        poster: "net3.jpg",
        head: "FORGOTTEN",
        p:
          "When his abducted brother returns, seemingly a different man with no memory of the past 19 days"
      },
      {
        poster: "net4.jpg",
        head: "TRAIN TO BUSAN",
        p:
          " the journey turns into a nightmare when they are trapped amidst a zombie outbreak in South Korea."
      }
    ],
    HORROR: [
      {
        poster: "h1.jpg",
        head: "CONJURING",
        p:
          "Paranormal investigators Ed and Lorraine Warren take on one of the most sensational cases of their careers "
      },
      {
        poster: "h2.jpg",
        head: "ANABELLE",
        p:
          "John and Mia Form are attacked by members of a satanic cult, who use their vintage doll as a conduit to make their life miserable. "
      },
      {
        poster: "h3.jpg",
        head: "VERONICA",
        p:
          "During a solar eclipse, a teenage girl and her friends want to summon the spirit of the girl's father using an Ouija board. "
      },
      {
        poster: "h4.jpg",
        head: "DOCTOR SLEEP",
        p:
          " While Danny Torrance struggles to overcome his traumatic past, he finds a little girl sharing his gift of the shine"
      }
    ],
    ROMANCE: [
      {
        poster: "R1.jpg",
        head: "TO ALL THE BOYS",
        p:
          "Senior year of high school takes center stage as Lara Jean returns from a family trip to Korea and considers her college plans with and without Peter."
      },
      {
        poster: "r2.jpg",
        head: "THE KISSING BOOTH",
        p:
          "The Kissing Booth is an upcoming American teen romantic comedy film  "
      },
      {
        poster: "r3.jpg",
        head: "ME BEFORE YOU",
        p:
          "After becoming unemployed, Louisa Clark is forced to accept one which requires her to take care of, a paralysed man"
      },
      {
        poster: "r4.jpg",
        head: "FIVE FEET APART",
        p:
          " Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control "
      }
    ]
  };
  var genre = Object.keys(movieDict);

  var [inputTxt, setCard] = useState([]);

  function clickHandler(name) {
    setCard(movieDict[name]);
  }

  return (
    <div className="App">
      <h1>NETFLIX RECOMMENDATION</h1>

      <div className="but">
        {genre.map((name) => {
          return (
                <button className="option" onClick={() => clickHandler(name)}>
              {name}
            </button>
          );
        })}
      </div>
      
      <div className="container">
        {inputTxt.map((item) => {
          return (
            <Fade left>
                <div className="card">
              <div>
                <Fade right>
                <img src={`./images/${item.poster}`} className="cardimg" alt="cardIMG"></img>
                </Fade>
              </div>
              <div>
                <h3>{item.head}</h3>
                <p>{item.p}</p>
              </div>
              <div>
                <div className="btn">
                  <button className="cardbtn">
                    <a href="https://www.netflix.com/browse">Link TO NETFLIX</a>
                  </button>
                </div>
              </div>
            </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
}
