/// <reference types="../@types/jquery" />
import { allgames } from "./display.module.js";
import { details } from "./details.module.js";
export class games {
  constructor() {
    this.allcategories("MMORPG");
  }
  async allcategories(cat) {
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
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,
        options
      );
      let data = [];
      data = await response.json();
      // console.log(data);
      let dispaly = new allgames(data);
      $(".loader").fadeOut(1000);
      $(".loading").fadeOut(500);
      this.navv();
      this.theDetailS();
      document
        .getElementById("the-buttom")
        .addEventListener("click", function () {
          let detail = new details(this.getAttribute("theId"));
        });
    } catch (error) {
      console.log(error);
    }
  }
  theDetailS() {
    $(".col-lg-3").on("click", function () {
      let detail = new details(this.getAttribute("id"));
    });
  }
  navv() {
    let that = this;
    $(".nav-link").on("click", function () {
      // calling (the all games) ==> function allcategories( with nav-word )
      let navLinkInfo = this.innerHTML;
      that.allcategories(navLinkInfo);

      // active nav word
      let clickedA = $(this).parent();
      console.log(clickedA);
      $(this).addClass("active");
      $(clickedA).siblings(".nav-item").children().removeClass("active");
    });
  }
}
$(function () {
  $(".loader").fadeOut(1000, function () {
    $(".loading").fadeOut(500, function () {
      $("body").css("overflow", "auto");
    });
  });
});
