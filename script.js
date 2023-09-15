window.onload = function () {
  const chooseFile = document.getElementById("file_upload");
  const imgPreview = document.getElementById("image_holder");
  const imageContainer = document.getElementById("image_preview");
  const text = document.getElementById("instruction_text");

  chooseFile.addEventListener("change", function () {
    getImageData();
  });

  function getImageData() {
    const files = chooseFile.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        text.style.display = "none";
        imageContainer.style.border = "none";
        imgPreview.src = this.result;
      });
    }
  }

  document.body.addEventListener(
    "keydown",
    function (ev) {
      // function to check the detection
      ev = ev || window.event; // Event object 'ev'
      var key = ev.which || ev.keyCode; // Detecting keyCode

      // Detecting Ctrl
      var ctrl = ev.ctrlKey ? ev.ctrlKey : key === 17 ? true : false;

      // If key pressed is V and if ctrl is true.
      if (key == 86 && ctrl) {
        // print in console.
        console.log("Ctrl+V is pressed.");
      }
    },
    false
  );

  document.onpaste = function (pasteEvent) {
    // consider the first item (can be easily extended for multiple items)
    var item = pasteEvent.clipboardData.items[0];

    if (item.type.indexOf("image") === 0) {
      var blob = item.getAsFile();

      var reader = new FileReader();
      reader.onload = function (event) {
        imgPreview.src = event.target.result;
      };

      reader.readAsDataURL(blob);
    }
  };


};
