window.addEventListener("load", function() {
  var selectedString = "";

  var twIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 20 17" xml:space="preserve" style=" margin: 5px 3px 3px;width: 12px; fill: rgb(255, 255, 255);"><g id="Symbols"><g id="Footer_White" transform="translate(-1176.000000, -77.000000)"><path id="Imported-Layers" class="st0" d="M1196,78.9c-0.7,0.3-1.5,0.5-2.4,0.6c0.8-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1    c-0.7-0.8-1.8-1.3-3-1.3c-2.3,0-4.1,1.8-4.1,4.1c0,0.3,0,0.6,0.1,0.9c-3.4-0.2-6.4-1.8-8.5-4.3c-0.4,0.6-0.6,1.3-0.6,2.1    c0,1.4,0.7,2.7,1.8,3.4c-0.7,0-1.3-0.2-1.9-0.5v0.1c0,2,1.4,3.6,3.3,4c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1    c0.5,1.6,2,2.8,3.8,2.8c-1.4,1.1-3.2,1.8-5.1,1.8c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.8,6.3,1.8c7.5,0,11.7-6.3,11.7-11.7    c0-0.2,0-0.4,0-0.5C1194.8,80.5,1195.4,79.7,1196,78.9"/></g></g></svg>';
  var fbIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="20" viewBox="0 0 10 20" style=" margin: 3px 3px 3px 5px;width: 6px;"><defs><path id="sy3aa" d="M1135.47 94h-4.2V84h-2.1v-3.45h2.1v-2.07c0-2.8 1.19-4.48 4.55-4.48h2.8v3.45h-1.75c-1.3 0-1.4.48-1.4 1.38v1.72h3.17l-.37 3.45h-2.8v10"/></defs><g><g transform="translate(-1129 -74)"><use fill="#fff" xlink:href="#sy3aa"/></g></g></svg>';
  var LinIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-linkedin-3" class="at-icon at-icon-linkedin" style=" margin: 3px;fill: rgb(255, 255, 255); width: 18px;"><title id="at-svg-linkedin-3">LinkedIn</title><g><path d="M26 25.963h-4.185v-6.55c0-1.56-.027-3.57-2.175-3.57-2.18 0-2.51 1.7-2.51 3.46v6.66h-4.182V12.495h4.012v1.84h.058c.558-1.058 1.924-2.174 3.96-2.174 4.24 0 5.022 2.79 5.022 6.417v7.386zM8.23 10.655a2.426 2.426 0 0 1 0-4.855 2.427 2.427 0 0 1 0 4.855zm-2.098 1.84h4.19v13.468h-4.19V12.495z" fill-rule="evenodd"></path></g></svg>';

  document.body.addEventListener("mouseup", function(e) {
    var selectionPositionX = e.pageX - 20;
    var selectionPositionY = e.pageY - 60;
    if (window.getSelection().toString().length !== 0) {
      selectedString = window.getSelection().toString();
      selectionContainer.style =
        "position: absolute;opacity: 1000; visibility: visible;top:" +
        selectionPositionY +
        "px; left:" +
        selectionPositionX +
        "px;";
    } else {
      selectionContainer.style =
        "position: absolute;opacity: 0; visibility: hidden;top:" +
        selectionPositionY +
        "px; left:" +
        selectionPositionX +
        "px;";
    }
  });

  var selectionContainer = document.createElement("div");

  selectionContainer.style = "opacity: 0; visibility: hidden;";
  selectionContainer.innerHTML =
    "<ul style='list-style-type:none;display:flex; align-items: center;padding:0; margin: 0;background: #000;border-radius: 10px;padding: 5px 10px;'>" +
    "<li><a href='' class='selection-twitter'>" +
    twIcon +
    "</a></li>" +
    "<li><a href='' class='selection-facebook'>" +
    fbIcon +
    "</a></li>" +
    "<li><a href='' class='selection-linkedin'>" +
    LinIcon +
    "</a></li>" +
    "</ul>";

  document.body.appendChild(selectionContainer);

  //twitter handler
  document
    .querySelector(".selection-twitter")
    .addEventListener("click", function(e) {
      e.preventDefault();
      var targetLink =
        "https://twitter.com/intent/tweet?url=" +
        location.pathname +
        "&text=" +
        selectedString;
      window.open(targetLink);
    });

  //facebook handler
  document
    .querySelector(".selection-facebook")
    .addEventListener("click", function(e) {
      e.preventDefault();
      var targetLink =
        "https://www.facebook.com/sharer/sharer.php?u=" +
        location.href +
        "&quote=" +
        encodeURIComponent(selectedString);
      window.open(targetLink);
    });

  //linkedin handler

  document
    .querySelector(".selection-linkedin")
    .addEventListener("click", function(e) {
      e.preventDefault();
      var targetLink =
        "https://www.linkedin.com/shareArticle?mini=true&amp;url=" +
        location.href +
        "&amp;title=" +
        encodeURIComponent(selectedString);

      window.open(targetLink);
    });
});
