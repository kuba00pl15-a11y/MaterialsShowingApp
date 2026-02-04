const data = {
  "Kamień naturalny": {
    Kwarcyt: [
      "Alpine_Blue.jpg",
      "Arctic_Storm.jpg",
      "Belvedere.jpg",
      "Carnia_Grey.jpg",
      "Emerald_Green.jpg",
      "Forest.jpg",
      "infinity.jpg",
      "Madreperola.jpg",
      "Taj_Mahal.jpg",
      "White_Babilon.jpg",
    ],
  },
  "Konglomeraty kwarcowe": {
    InterQ: [
      "Almond_Milk.jpg",
      "Angel_White.jpg",
      "Ash.jpg",
      "Biancone.jpg",
      "Black_Carrara.jpg",
      "Botticino.jpg",
      "Botticino_Turtle.jpg",
      "Calacatta_Bella.jpg",
      "Calacatta_Gold.jpg",
      "Calacatta_Vagli.jpg",
      "Calacatta_Viola.jpg",
      "Carrara_Grigio.jpg",
      "Carrara_Liberty.jpg",
      "Carrara_Oro.jpg",
      "Cloudy_Beige.jpg",
      "Cremo_Perlato.jpg",
      "Dune_White.jpg",
      "Fantasy_Frost.jpg",
      "Lincoln_White.jpg",
      "Marfil.jpg",
      "Marmorino.jpg",
      "Mystic_White.jpg",
      "Neve.jpg",
      "Perla_Santana.jpg",
      "Royal_Perlato.jpg",
      "Sahara.jpg",
      "Taj_Mahal.jpg",
      "Venatino.jpg",
      "White_Frost.jpg",
    ],
    Silestone: [
      "Arden_Blue.jpg",
      "Ariel.jpg",
      "Blanco_Maple.jpg",
      "Blanco_Norte14.jpg",
      "Blanco_Zeus.jpg",
      "Blanc_Elysee.jpg",
      "Brass_Relish.jpg",
      "Bronze_Rivers.jpg",
      "Calacatta_Gold.jpg",
      "Calacatta_Tova.jpg",
      "Charcoal_Soapstone.jpg",
      "Chateau_Brown.jpg",
      "Cinder_Craze.jpg",
      "Concrete_Pulse.jpg",
      "Coral_Clay.jpg",
      "Corktown.jpg",
      "Desert_Silver.jpg",
      "Eclectic_Pearl.jpg",
      "Ethereal_Glow.jpg",
      "Ethereal_Noctis.jpg",
      "Et_Marquina.jpg",
      "Et_Statuario.jpg",
      "Ffrom01.jpg",
      "Ffrom02.jpg",
      "Ffrom03.jpg",
      "Gris_Expo.jpg",
      "Jardin_Emerald.jpg",
      "Lagoon.jpg",
      "Lime_Delight.jpg",
      "Linen_Cream.jpg",
      "Marengo.jpg",
      "Miami_Vena.jpg",
      "Miami_White.jpg",
      "Motion_Grey.jpg",
      "Night_Tebas18.jpg",
      "Nolita.jpg",
      "Parisien_Bleu.jpg",
      "Persian_White.jpg",
      "Poblenou.jpg",
      "Raw_A.jpg",
      "Raw_G.jpg",
      "Riviere_Rose.jpg",
      "Romantic_Ash.jpg",
      "Seaport.jpg",
      "Siberian.jpg",
      "Snowy_Ibiza.jpg",
      "Stellar_Blanco13.jpg",
      "Versailles_Ivory.jpg",
      "White_Arabesque.jpg",
      "White_Storm14.jpg",
      "Yukon.jpg",
    ],
    "Smart Quartz": ["Atlas_Gold.jpg", "Atlas_White.jpg", "Pico.jpg"],
    Technistone: [
      "Altamonte.jpg",
      "Ambiente_Light.jpg",
      "Badal_Grey.jpg",
      "Brilliant_Black.jpg",
      "Brilliant_White.jpg",
      "Bronze_Coast.jpg",
      "Calacatta_Olympos.jpg",
      "Calacatta_Serchio.jpg",
      "Calacatta_Silva.jpg",
      "Calacatta_Volegno.jpg",
      "Country_Rose.jpg",
      "Crystal_Absolute_White.jpg",
      "Crystal_Anthracite.jpg",
      "Crystal_Diamond.jpg",
      "Crystal_Polar_White.jpg",
      "Crystal_Royal.jpg",
      "Diuna_Beige.jpg",
      "Elegance_Eco_Nev.jpg",
      "Elysian Gold.jpg",
      "Glencoe.jpg",
      "Gobi_Black.jpg",
      "Gobi_Grey.jpg",
      "Gobi_Urban.jpg",
      "Harmonia_Navajo.jpg",
      "Mistral_White.jpg",
      "Morning_Daisy.jpg",
      "Mystery_White.jpg",
      "Noble_Arco.jpg",
      "Noble_Areti_Bianco.jpg",
      "Noble_Athos_Brown.jpg",
      "Noble_Botticino.jpg",
      "Noble_Carrara.jpg",
      "Noble_Concrete_Grey.jpg",
      "Noble_Imperial_Grey.jpg",
      "Noble_Ivory_White.jpg",
      "Noble_Linea.jpg",
      "Noble_Olympos_Mist.jpg",
      "Noble_Pietra_Grey.jpg",
      "Noble_Pro_Cloud.jpg",
      "Noble_Pro_Frost.jpg",
      "Noble_Quartzite.jpg",
      "Noble_Supreme_White.jpg",
      "Noble_Troya.jpg",
      "Noble_Villa.jpg",
      "Noble_Vintage.jpg",
      "Pearl_Delta.jpg",
      "Residente_Dark.jpg",
      "Starlight_Black.jpg",
      "Starlight_White.jpg",
      "Taj_Mahal_Gold.jpg",
      "Taurus_Black.jpg",
      "Taurus_Terazzo_Dark.jpg",
      "Verde_Peak.jpg",
      "Wedding_Lily.jpg",
      "Wild_Yucca.jpg",
    ],
  },
};

const state = {
  path: [],
  atHome: true,
  atImages: false,
  query: "",
};

const browser = document.getElementById("browser");
const grid = document.getElementById("grid");
const pathLabel = document.getElementById("pathLabel");
const backBtn = document.getElementById("backBtn");
const homeBtn = document.getElementById("homeBtn");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");

const encodePath = (segments) =>
  segments.map((segment) => encodeURIComponent(segment)).join("/");

const formatLabel = (value) =>
  value
    .replace(/\.jpg$/i, "")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const collectMaterials = (node, currentPath = []) => {
  if (Array.isArray(node)) {
    return node.map((file) => ({
      file,
      path: currentPath,
    }));
  }

  return Object.keys(node).flatMap((key) =>
    collectMaterials(node[key], [...currentPath, key])
  );
};

const getCurrentNode = () => {
  let node = data;
  for (const part of state.path) {
    node = node[part];
  }
  return node;
};

const updateBackButton = () => {
  backBtn.style.visibility = !state.atHome ? "visible" : "hidden";
};

const goTo = (nextPath, nextHome = false) => {
  state.path = [...nextPath];
  state.atHome = nextHome;
  render();
};

const updatePathLabel = () => {
  pathLabel.innerHTML = "";

  if (state.atHome) {
    return;
  }

  const rootBtn = document.createElement("button");
  rootBtn.type = "button";
  rootBtn.textContent = "Materiały";
  rootBtn.addEventListener("click", () => {
    goTo([], false);
  });
  pathLabel.appendChild(rootBtn);

  state.path.forEach((part, index) => {
    const sep = document.createElement("span");
    sep.className = "sep";
    sep.textContent = "/";
    pathLabel.appendChild(sep);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = part;
    btn.addEventListener("click", () => {
      goTo(state.path.slice(0, index + 1), false);
    });
    pathLabel.appendChild(btn);
  });

  if (state.atImages) {
    const sep = document.createElement("span");
    sep.className = "sep";
    sep.textContent = "/";
    pathLabel.appendChild(sep);

    const current = document.createElement("span");
    current.className = "current";
    current.textContent = "Zdjęcia";
    pathLabel.appendChild(current);
  }
};

const renderTiles = (node) => {
  grid.innerHTML = "";
  Object.keys(node).forEach((key) => {
    const tile = document.createElement("button");
    tile.className = "tile";
    tile.setAttribute("role", "listitem");
    tile.innerHTML = `
      <div>
        <h3>${key}</h3>
      </div>
    `;
    tile.addEventListener("click", () => {
      state.path.push(key);
      render();
    });
    grid.appendChild(tile);
  });
};

const renderHomeTile = () => {
  grid.innerHTML = "";
  const tile = document.createElement("button");
  tile.className = "tile";
  tile.setAttribute("role", "listitem");
  tile.innerHTML = `
      <div>
        <h3>Materiały</h3>
      </div>
    `;
  tile.addEventListener("click", () => {
    goTo([], false);
  });
  grid.appendChild(tile);
};

const renderImages = (images, basePath = null) => {
  grid.innerHTML = "";
  const pathSegments = basePath ?? ["data", ...state.path];
  images.forEach((file) => {
    const card = document.createElement("div");
    card.className = "image-card";
    card.setAttribute("role", "listitem");

    const img = document.createElement("img");
    const imgPath = `${encodePath(pathSegments)}/${encodeURIComponent(file)}`;
    img.loading = "lazy";
    img.decoding = "async";
    img.src = imgPath;
    img.alt = formatLabel(file);

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = formatLabel(file);

    card.appendChild(img);
    card.appendChild(label);
    card.addEventListener("click", () => openLightbox(imgPath, label.textContent));
    grid.appendChild(card);
  });
};

const openLightbox = (src, caption) => {
  lightboxImg.src = src;
  lightboxImg.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.setAttribute("aria-hidden", "false");
};

const closeLightbox = () => {
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
};

const render = () => {
  browser.setAttribute("aria-hidden", "false");

  if (state.query) {
    const results = collectMaterials(data).filter(({ file }) =>
      formatLabel(file).toLowerCase().includes(state.query.toLowerCase())
    );
    grid.classList.remove("single");
    state.atImages = true;
    updateBackButton();
    updatePathLabel();
    grid.innerHTML = "";

    results.forEach(({ file, path }) => {
      const pathSegments = ["data", ...path];
      const card = document.createElement("div");
      card.className = "image-card";
      card.setAttribute("role", "listitem");

      const img = document.createElement("img");
      const imgPath = `${encodePath(pathSegments)}/${encodeURIComponent(file)}`;
      img.loading = "lazy";
      img.decoding = "async";
      img.src = imgPath;
      img.alt = formatLabel(file);

      const label = document.createElement("div");
      label.className = "label";
      label.textContent = `${formatLabel(file)} — ${path.join(" / ")}`;

      card.appendChild(img);
      card.appendChild(label);
      card.addEventListener("click", () => openLightbox(imgPath, label.textContent));
      grid.appendChild(card);
    });
    triggerGridAnimation();
    return;
  }

  grid.classList.toggle("single", state.atHome);
  if (state.atHome) {
    state.atImages = false;
    updateBackButton();
    updatePathLabel();
    renderHomeTile();
    return;
  }

  const node = getCurrentNode();
  state.atImages = Array.isArray(node);
  updateBackButton();
  updatePathLabel();
  if (state.atImages) {
    renderImages(node);
  } else {
    renderTiles(node);
  }
  triggerGridAnimation();
};

const triggerGridAnimation = () => {
  grid.classList.remove("animate");
  requestAnimationFrame(() => {
    grid.classList.add("animate");
  });
};

backBtn.addEventListener("click", () => {
  if (state.path.length > 0) {
    goTo(state.path.slice(0, -1), false);
    return;
  }
  if (!state.atHome) {
    goTo([], true);
  }
});

homeBtn.addEventListener("click", () => {
  goTo([], true);
});

lightbox.addEventListener("click", closeLightbox);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

render();

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  render();
});

clearSearch.addEventListener("click", () => {
  state.query = "";
  searchInput.value = "";
  render();
});
