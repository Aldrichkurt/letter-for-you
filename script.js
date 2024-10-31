// Flag to track if the envelope is open or closed
let isEnvelopeOpen = false;

function toggleEnvelope() {
  if (isEnvelopeOpen) {
    closeEnvelope();
  } else {
    openEnvelope();
  }
}

function openEnvelope() {
  document.querySelector(".flap.top").style.transform = "rotateX(-180deg)";
  document.querySelector(".flap.bottom").style.transform = "rotateX(180deg)";
  document.getElementById("loveLetter").style.display = "block";
  document.querySelector(".seal").style.display = "none"; // Hide the seal
  isEnvelopeOpen = true;
}

function closeEnvelope() {
  document.querySelector(".flap.top").style.transform = "rotateX(0deg)";
  document.querySelector(".flap.bottom").style.transform = "rotateX(0deg)";
  document.getElementById("loveLetter").style.display = "none";
  document.querySelector(".seal").style.display = "block"; // Show the seal
  isEnvelopeOpen = false;
}
