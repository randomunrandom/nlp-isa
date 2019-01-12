(function($) {
  "use strict"; // Start of use strict

  let userLang = navigator.language || navigator.userLanguage;
  console.log(userLang.split('-')[0]);
  switch (userLang.split('-')[0]) {
    // case 'en':
    //   window.location.replace(window.location.href + "en/index");
    //   break;
    case 'ru':
      window.location.replace(window.location.href + "ru/index");
      break;
    default:
      window.location.replace(window.location.href + "ru/index");
      break;
  }
  
  
})(jQuery); // End of use strict
