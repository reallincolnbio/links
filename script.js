// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  var shareButton = document.querySelector(".share-button");
  var sharePopup = document.querySelector(".share-popup");

  // Delay before closing the share popup
  var closeDelay = 500; // Delay in milliseconds (adjust as needed)

  // Open the share popup when clicking on the share button
  shareButton.addEventListener("click", function () {
    sharePopup.style.display = "block";
  });

  // Close the share popup when clicking outside of it
  document.addEventListener("click", function (event) {
    if (!shareButton.contains(event.target) && !sharePopup.contains(event.target)) {
      sharePopup.style.display = "none";
    }
  });

  // Delay closing the share popup after moving the mouse out
  var closeTimeout;
  shareButton.addEventListener("mouseout", function () {
    closeTimeout = setTimeout(function () {
      sharePopup.style.display = "none";
    }, closeDelay);
  });

  // Clear the close timeout when moving the mouse back in
  shareButton.addEventListener("mouseover", function () {
    clearTimeout(closeTimeout);
  });
});
