(function($) {
  let short_desc_editor = CodeMirror.fromTextArea(document.getElementById("input_short_desc"), {
    lineNumbers: true,
    mode:  "xml",
    htmlMode: true
  });

})(jQuery);
