(function($) {
  "use strict";
  let lang = window.location.href.indexOf("/en/") >= 0 ? "en" : "ru";

  axios
    .get("../assets/" + lang + "/data/publications.json")
    .then(response => {
      let options = {
        valueNames: [
          "name",
          "short_description",
          { name: "link", attr: "href" },
          "year"
        ],
        page: 20,
        pagination: {
          innerWindow: 2,
          outerWindow: 1
        },
        item:
          '<li><h4 class="name"></h4><p class="short_description text-left"></p>' +
          '<a class="link btn btn-warning" href="">Страница публикации</a><hr></li>'
      };
      let values = [];
      Object.keys(response["data"]).forEach(function(key) {
        let data = response["data"][key];
        data["link"] =
          window.location.href.replace("/publications", "/publication/") + key;
        values.push(data);
      });
      let list = new List("publications_list", options, values);
      list.sort("year", { order: "desc" });
      let style_pagination = function() {
        $("ul.pagination li").addClass("page-item");
        $("ul.pagination li a").addClass("page-link text-dark");
        $("ul.pagination li.active a").addClass("bg-warning border");
      };
      style_pagination();
      $("ul.pagination").click(() => {
        style_pagination();
      });
    })
    .catch(function(error) {
      console.log(error);
      // window.location.href = window.location.href.replace('projects', '404');
    });
})(jQuery);
