// ==========================================================================
// Script Principal - Hub Colaborativo Git
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Atualiza o ano no rodapé automaticamente
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Feedback amigável caso a página ainda não tenha sido criada
  const pageLinks = document.querySelectorAll(".page-link");
  pageLinks.forEach((link) => {
    link.addEventListener("click", async (event) => {
      const href = link.getAttribute("href");
      
      // Se for um link local para página HTML
      if (href && href.endsWith(".html") && href !== "index.html") {
        try {
          const response = await fetch(href, { method: "HEAD" });
          if (!response.ok) {
            event.preventDefault();
            alert(`A página "${href}" ainda está sendo desenvolvida na branch correspondente! 🚀`);
          }
        } catch {
          // Em protocolo file:// direto, fetch HEAD pode falhar; deixa a navegação normal acontecer
        }
      }
    });
  });

  console.log("🚀 GitColab inicializado com sucesso!");
});

