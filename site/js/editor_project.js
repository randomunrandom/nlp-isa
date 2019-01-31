(function($) {
  // let editor_ids = ['short_description', 'description', 'demos', 'datasets', 'publications'];_
  let short_desc_editor = CodeMirror.fromTextArea(document.getElementById("short_desc_editor", {
    lineNumbers: true
    // mode:  "xml"
  }));
  let description_editor = CodeMirror.fromTextArea(document.getElementById("description_editor", {
    lineNumbers: true
    // mode:  "xml"
  }));
  let demos_editor = CodeMirror.fromTextArea(document.getElementById("demos_editor", {
    lineNumbers: true
    // mode:  "xml"
  }));
  let datasets_editor = CodeMirror.fromTextArea(document.getElementById("datasets_editor", {
    lineNumbers: true
    // mode:  "xml"
  }));
  let publications_editor = CodeMirror.fromTextArea(document.getElementById("publications_editor", {
    lineNumbers: true
    // mode:  "xml"
  }));

})(jQuery);
