import React from 'react'
import "./MainPage.css"
import dnaImage from "./../../assets/MainPage/dna.png"
import dnaCover from "./../../assets/MainPage/dna-cover.png"
import dnaText from "./../../assets/MainPage/text.png"

const MainPage = () => {
  return (
    <div className="main-page">
      <img src={dnaImage} alt="" className="main-page__bg --blurred" />
      <img src={dnaImage} alt="" className="main-page__bg" />
      <img src={dnaText} alt="" className="main-page__text" />
      <img src={dnaCover} alt="" className="main-page__bg" />
      <div className="main-page__buttons-box">
        <button className="main-page__button --left">Wpisz</button>
        <button className="main-page__button --right">Wgraj Plik</button>
      </div>
    </div>
  )
}

export default MainPage