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

    function changeTitle() {

        var alerts = document.getElementById("notify_number_notify").innerHTML

        if (!document.querySelector('.notify-num-displayed')) {
            alerts = document.getElementById("notify_number_notify").innerHTML = "0";
        }


        if (alerts == "0") {
            document.title = "Hack Forums";
        } else {
            var newTitle = '(' + alerts + ') ' + nTitle;
            document.title = newTitle;
        }

    }

    function newUpdate() {
        var update = setInterval(changeTitle, 1000);

    }

    newUpdate(newUpdate);
  }
};

module.exports = new TabNotifications();
