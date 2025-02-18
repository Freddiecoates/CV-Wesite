document.addEventListener("DOMContentLoaded", function() {
    // Typing Animation
    const nameText = "Freddie Coates";
    const jobTitleText = "Software Analyst";
    const speed = 100;
    let nameIndex = 0;
    let jobIndex = 0;
    
    function typeWriter(elementId, text, index, callback) {
      if (index < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(index);
        setTimeout(() => typeWriter(elementId, text, index + 1, callback), speed);
      } else if (callback) {
        callback();
      }
    }
    
    typeWriter("name", nameText, 0, function() {
      typeWriter("jobTitle", jobTitleText, 0);
    });
    
    // Toggle the CV iframe on Home page
    const downloadBtn = document.getElementById("downloadBtn");
    const iframeContainer = document.getElementById("iframeContainer");
    
    if (downloadBtn && iframeContainer) {
      downloadBtn.addEventListener("click", function() {
        if (iframeContainer.style.display === "block") {
          iframeContainer.style.display = "none";
        } else {
          iframeContainer.style.display = "block";
        }
      });
    }
  });
  