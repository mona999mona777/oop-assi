/// <reference types="../@types/jquery" />
import { alldetails } from "./display.module.js";
export class details {
  constructor(idValue) {
    this.details(idValue);
  }
  async details(idValue) {
    $(".loader").fadeIn();
    $(".loading").fadeIn();
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "23dd3da3b2msh40841a2eccef85fp1dad4fjsn0d99d3438c36",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      let response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idValue}`,
        options
      );
      let dataDetails = {};
      dataDetails = await response.json();
      $(".loader").fadeOut(1000);
      $(".loading").fadeOut(500);
      // console.log(dataDetails);
      let display = new alldetails(dataDetails);
    } catch (error) {
      console.log(error);
    }
  }
}
