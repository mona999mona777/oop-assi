/// <reference types="../@types/jquery" />
export class allgames {
  constructor(data) {
    this.displayallcategories(data);
  }
  displayallcategories(data) {
    let all = ``;
    for (let i = 0; i < data.length; i++) {
      // id is a custom attribute....
      all += ` <div class="col-lg-3" id=${data[i].id}>
        <div class="card border-style rounded">
       <div class="the-image p-2">
        <img src="${
          data[i].thumbnail
        }" class="card-img-top w-100 change-scale rounded" alt="itis a game image for ${
        data[i].title
      } /">
       </div>
       <div class="card-body p-2">
        <div class="d-flex align-items-center justify-content-between">
         <h2 class="card-title font-h2">${data[i].title}</h2>
         <a id=" the-buttom" theId=${
           data[i].id
         } class="btn btn-primary change-color font-button">free</a>
         </div>
         <p class="card-text text-secondary text-center font-p mt-1">${data[
           i
         ].short_description.split(" ", 8)}</p>
         </div>
         <div class="card-footer d-flex align-items-center justify-content-between p-2"><span class="p-1 rounded button-bgr font-span">${
           data[i].genre
         }</span>
               <span class="p-1 rounded button-bgr font-span">${
                 data[i].platform
               }</span></div>
           </div>
           </div>`;
    }

    // id is a custom attribute....
    /*   all += `  <div class="col-lg-3" id=${data[i].id}>
          <div class="border-style rounded">
            <div class="the-image p-2">
              <img class="w-100 change-scale rounded" src="${
                data[i].thumbnail
              }" alt="game image"/>
              </div>
              <div class="d-flex align-items-center justify-content-between p-2">
                <h2 class="font-h2">${data[i].title}</h2>
                <button class="rounded change-color font-button">free</button>
              </div>
             <p class="text-secondary text-center font-p">  ${data[
               i
             ].short_description.split(" ", 8)}</p>
              <div class="the-border d-flex align-items-center justify-content-between p-2">
                <span class="p-1 rounded button-bgr font-span">${
                  data[i].genre
                }</span>
                <span class="p-1 rounded button-bgr font-span">${
                  data[i].platform
                }</span>
              </div>
            </div>
            </div>`;
    } */
    document.getElementById("all-data").innerHTML = all;
  }
}
export class alldetails {
  constructor(dataDetails) {
    this.displayDetailsData(dataDetails);
  }
  displayDetailsData(dataDetails) {
    $(".sectionOne-all-games").removeClass("d-block").addClass("d-none");
    $(".sectionTwo-details").removeClass("d-none").addClass("d-block");
    let all = ` <div class="title">
                  <h2 class="h2-font">Details Game</h2>
                </div>
                <div class="col-md-4">
                  <img class="w-100" src="${dataDetails.thumbnail}" alt="itis a game image for ${dataDetails.title}" />
                </div>
                <div class="col-md-8">
                  <h3 class="mt-3 h2-font">Title:  ${dataDetails.title}</h3>
                  <h3 class="h3-font mt-3">Category: <span class="rounded p-1 bg-info span-font">  ${dataDetails.genre}</span></h3>
                  <h3 class="h3-font mt-3">Platform: <span class="rounded p-1 bg-info span-font">  ${dataDetails.platform}</span></h3>
                  <h3 class="h3-font my-3">Status: <span class="rounded p-1 bg-info span-font">  ${dataDetails.status}</span></h3>
                  <p class="p-font">${dataDetails.description}</p>
                  <a href="${dataDetails.game_url}"
                    ><button class="btn btn-outline-warning button-font">
                      Show Game
                    </button></a
                  >
                </div>`;
    document.getElementById("the-data").innerHTML = all;
  }
}
