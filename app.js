let colors = {
	issue8: "#f1e1a3",
	issue7: "#ff608c",
	issue6: "#fff",
	issue5: "#00c1b5",
	issue4: "#ff651a",
	issue3: "#ffbe00",
	issue2: "#1d3fbb",
  issue1: "#e30512"
}
const magazines = document.querySelectorAll(".magazine");

function changeBackgroundColorOnScroll() {
  let found = false;

  magazines.forEach((magazine, index) => {
    const rect = magazine.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
      // Si el div está cerca de la mitad de la pantalla, cambia el color
      const colorKey = `issue${index + 1}`;
      document.body.style.backgroundColor = colors[colorKey];
      found = true;
    }
  });

  // Si ningún div está en la mitad, podemos restaurar el color por defecto
  if (!found) {
    document.body.style.backgroundColor = "";
  }
}
window.addEventListener("scroll", changeBackgroundColorOnScroll);