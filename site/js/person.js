(function($) {
  "use strict";
  const href_list = window.location.href.split('/');
  let user_id = href_list[href_list.length - 1];
  // console.log(user_id);
  let lang = window.location.href.indexOf('/en/') >= 0 ? 'en' : 'ru';

  axios.get('../../assets/' + lang + '/data/people.json')
    .then((response) => {
      // console.log(response);
      if (!(user_id in response['data'])) {
        window.location.href = '/' + lang + '/404';
      }
      let data = response['data'][user_id];
      $('#name').html('<h4 class="card-text">' + data['name'] + '</h4>');
      console.log(data['photo']);
      $('#photo').html('<img src="../../assets/imgs/photo/' + data['photo'] + '" alt="Фото" width="100%" height="100%">');
      let replace_params = ['short_description'];
      let str_params = ['description'];
      replace_params.forEach((key) => {
        data = response['data'][user_id][key];
        // console.log(data);
        $('#' + key).html('<div class="container"><p class="text-justify">' + data + '</p></div>');
      });
      str_params.forEach((key) => {
        data = response['data'][user_id][key];
        if (data.length > 0) {
          $('#' + key).append('<div class="container"><p class="text-justify">' + data + '</p></div>');
        }
        else {
          $('#' + key).hide();
        }
      });
    })
    .catch((error) => {
      console.log(error);
      // window.location.href = window.location.href.replace('project', '404');
    });

})(jQuery);
