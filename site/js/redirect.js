(function($) {
  "use strict"; // Start of use strict

  console.log(window.location.href);
  let userLang = navigator.language || navigator.userLanguage;
  switch (userLang.split('-')[0]) {
    // case 'en':
    //   window.location.replace(window.location.href + "en/index.html");
    //   break;
    case 'ru':
      window.location.replace(window.location.href + "ru/index.html");
      break;
    default:
      window.location.replace(window.location.href + "ru/index.html");
      break;
  }
  
  
})(jQuery); // End of use strict
