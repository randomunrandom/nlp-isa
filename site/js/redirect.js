(function($) {
  "use strict"; // Start of use strict

  console.log(window.location.href);
  let userLang = navigator.language || navigator.userLanguage;
  let path = window.location.href;
  switch (userLang.split("-")[0]) {
    // case 'en':
    // if (path.includes('index')) {
    //   window.location.replace( path.replace('index', 'en/index'));
    // }
    // else {
    //   window.location.replace( path + "en/index.html");
    // }
    // break;
    case "ru":
      if (path.includes("index")) {
        window.location.replace(path.replace("index", "ru/index"));
      } else {
        window.location.replace(path + "ru/index");
      }
      break;
    default:
      if (path.includes("index")) {
        window.location.replace(path.replace("index", "ru/index"));
      } else {
        window.location.replace(path + "ru/index");
      }
      break;
  }
})(jQuery); // End of use strict
