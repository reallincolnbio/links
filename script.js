document.addEventListener("DOMContentLoaded", function() {
  var shareButton = document.querySelector(".share-button");
  var sharePopup = document.querySelector(".share-popup");
  var copyUrlButton = document.querySelector("#copy-url-button");
  var urlInput = document.querySelector("#url-input");

  shareButton.addEventListener("click", function() {
    sharePopup.style.display = "block";
  });

  document.addEventListener("click", function(event) {
    var target = event.target;
    if (!target.closest(".share-popup") && !target.closest(".share-button")) {
      sharePopup.style.display = "none";
    }
  });

  copyUrlButton.addEventListener("click", function() {
    urlInput.select();
    urlInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("URL copied to clipboard!");
  });
});
