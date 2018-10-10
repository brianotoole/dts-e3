// Applied globally on all textareas
$(document)
  .one("focus.textarea", "textarea", function() {
    var savedValue = this.value;
    this.value = "";
    this.baseScrollHeight = this.scrollHeight;
    this.value = savedValue;
  })
  .on("input.textarea", "textarea", function() {
    var minRows = this.getAttribute("data-min-rows") | 0,
      rows;
    this.rows = minRows;
    rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
    this.rows = minRows + rows;
  });
