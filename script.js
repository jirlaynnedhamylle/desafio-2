const imagem = document.getElementById("minhaImagem");

imagem.addEventListener("mouseover", function() {
  imagem.src = "https://th.bing.com/th/id/R.96c09442b3bbadbf0440427d10cb7f6b?rik=hbS5xYJiJF3QBQ&pid=ImgRaw&r=0";
});

imagem.addEventListener("mouseout", function() {
  imagem.src = "https://i.pinimg.com/736x/28/9c/49/289c49b688ae35dca7d6ef2c3ffc8449.jpg";
});