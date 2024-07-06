document.addEventListener("DOMContentLoaded", function () {
    const pictureInputs = document.querySelectorAll(".picture__input");
  
    pictureInputs.forEach(function (input) {
      const pictureImage = input.previousElementSibling.querySelector(".picture__image");
  
      // Oculta o botão de seleção de arquivo
      input.style.display = "none";
  
      input.addEventListener("change", function (e) {
        const file = e.target.files[0];
  
        if (file) {
          const reader = new FileReader();
  
          reader.addEventListener("load", function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.classList.add("picture__img");
  
            pictureImage.innerHTML = "";
            pictureImage.appendChild(img);
          });
  
          reader.readAsDataURL(file);
        } else {
          pictureImage.innerHTML = "Faça o upload aqui";
        }
      });
    });
  });