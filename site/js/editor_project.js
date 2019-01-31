(function($) {
  let editor_ids = ['short_description', 'description', 'demos', 'datasets', 'publications'];
  editor_ids.forEach(
    CodeMirror.fromTextArea(document.getElementById("editor"), {
      lineNumbers: true
      // mode:  "xml"
      })
  );
})(jQuery);
