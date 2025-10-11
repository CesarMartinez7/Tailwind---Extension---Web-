// Crear contenedor principal
const panel = document.createElement("div");

const logoURL = chrome.runtime.getURL("assets/tailwind.svg");

panel.className = "breakpoint-panel";

panel.innerHTML = `
  <div class="header">
    <img src="${logoURL}" alt="Tailwind Breakpoint Logo" />
    <span class="title">Tailwind Breakpoints</span>
  </div>

  <div class="bp-current">0px</div>

  <div class="bp-list">
    <div data-bp="XS">
    <img src="${chrome.runtime.getURL("assets/mobile.svg")}" alt="mobile"/> &lt
     640px</div>
    <div data-bp="SM"><img src="${chrome.runtime.getURL(
      "assets/mobile.svg"
    )}" alt="mobile"/> ≥640px</div>
    <div data-bp="MD"><img src="${chrome.runtime.getURL(
      "assets/tablet.svg"
    )}" alt="tablet"/> ≥768px</div>
    <div data-bp="LG"><img src="${chrome.runtime.getURL(
      "assets/monitor.svg"
    )}" alt="monitor"/> ≥1024px</div>
    <div data-bp="XL"><img src="${chrome.runtime.getURL(
      "assets/tv.svg"
    )}" alt="tv"/> ≥1280px</div>
    <div data-bp="2XL"><img src="${chrome.runtime.getURL(
      "assets/tv.svg"
    )}" alt="tv"/> ≥1536px</div>
  </div>
`;

document.body.appendChild(panel);

// Obtener breakpoint activo
function getActiveBreakpoint(width) {
  if (width < 640) return "XS";
  if (width < 768) return "SM";
  if (width < 1024) return "MD";
  if (width < 1280) return "LG";
  if (width < 1536) return "XL";
  return "2XL";
}

// Actualizar panel según el ancho
function updatePanel() {
  const width = window.innerWidth;
  const active = getActiveBreakpoint(width);

  panel.querySelector(".bp-current").textContent = `${width}px - ${active}`;
  panel.querySelectorAll(".bp-list div").forEach((el) => {
    el.classList.toggle("active", el.dataset.bp === active);
  });
}

window.addEventListener("resize", updatePanel);
updatePanel();
