const Feature = require("../../core/Feature");
const Global = require("../../sections/Global");

class PmHighlighting extends Feature {
  constructor() {
    super({
      section: Global,
      name: "pm Highlighting",
      default: true,
      description: "Favorite messages by highlighting them."
    });
  }

  run() {
    //  Highlight button
    const buttonName = $(".button[name=\"moveto\"]");
    $(buttonName).clone().addClass("mark").prependTo(".tfoot");
    const favoriteButton = $(".button.mark")[0];
    favoriteButton.value = "Favorite";
    favoriteButton.name = "favorite";
    favoriteButton.type = "button";

    let uid = [];

    //  Compare <a> innerText UID with UID in array
    for (var i = 0; i < uid.length; i++) {
      if ($("old_pm").$("a").includes(uid[i])) {
        alert("yes");
      }
    }

    // Keep only numbers in uid array
    function removeText(start, middle, end, array) {
      var newArray = [];
      for (var i = 0; i < array.length; i++) {
        var text = array[i];
        text = text.split(start).join("");
        text = text.split(middle).join("");
        text = text.split(end).join("");
        newArray.push(text);
      }
      return newArray;
    }

    //  Get array of checked boxes
    $(favoriteButton).each(function() {
      this.addEventListener("click", function() {
        let checkboxes = $("input[type='checkbox']");
        checkboxes.filter(":checked").map(function() {
          uid.push(this.name);
          uid = removeText("check", "[", "]", uid);
        }).get();
        alert(uid);
      });
    });
  }
};

module.exports = new PmHighlighting();
