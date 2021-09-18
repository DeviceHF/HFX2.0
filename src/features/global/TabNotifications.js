const Feature = require("../../core/Feature");
const Global = require("../../sections/Global");

class TabNotifications extends Feature {
  constructor() {
    super({
      section: Global,
      name: "Tab Notifications",
      default: true,
      description: "Show Notifications in browser tab."
    });
  }

  run() {
    var nTitle = "Hack Forums";
    var alertStatus = "";
    let src = "https://store2.gofile.io/download/ca848df4-fc96-4496-83e3-457b77fa062c/mixkit-message-pop-alert-2354.mp3";
    let audio = new Audio(src);
    var alerts = document.getElementById("notify_number_notify").innerHTML;

    function changeTitle() {
      if (!document.Notify.notifyIcon.hasClass("notify-num-displayed")) {
        alerts = document.getElementById("notify_number_notify").innerHTML = "0";
        alertStatus = 1;
      }

      if (alerts === "0") {
        document.title = "Hack Forums";
      } else if (alertStatus === "x") {
        var newTitle = "(" + alerts + ") " + nTitle;
        document.title = newTitle;
      } else {
        newTitle = "(" + alerts + ") " + nTitle;
        document.title = newTitle;
        audio.play();
        alertStatus = "x";
      }
    }

    function newUpdate() {
      var update = setInterval(changeTitle, 1000);
    }

    newUpdate(newUpdate);
  }
};

module.exports = new TabNotifications();
