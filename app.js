document.addEventListener("DOMContentLoaded", () => {
  // 1. Repositionner le bouton Accueil dans l'en-tête de destination
  const stickyNavEl = document.querySelector(".sticky-nav");
  const headerBlockEl = document.querySelector(".destination-header-block");
  if (stickyNavEl && headerBlockEl) {
    headerBlockEl.insertBefore(stickyNavEl, headerBlockEl.firstChild);
  }

  // Placer le panneau (avec la carte et les filtres) juste sous le titre et au-dessus du résumé
  const stickyTopPanelEl = document.querySelector(".sticky-top-panel");
  const overviewBox = document.querySelector(".country-overview-box");
  if (stickyTopPanelEl && overviewBox && overviewBox.parentNode) {
    overviewBox.parentNode.insertBefore(stickyTopPanelEl, overviewBox);
  }

  // Ordre exact de haut en bas : Région -> Ville -> Maps -> Budget -> Filtre (Thème)
  if (stickyTopPanelEl) {
    stickyTopPanelEl.classList.remove("is-state-selected");

    const statePillsEl = stickyTopPanelEl.querySelector(".state-pills") || document.querySelector(".state-pills");
    const subplacePillsEl =
      stickyTopPanelEl.querySelector(".subplace-pills, #subplace-filter-bar") ||
      document.querySelector(".subplace-pills, #subplace-filter-bar");
    const mapBoxEl = stickyTopPanelEl.querySelector(".sticky-map-box") || document.querySelector(".sticky-map-box");
    const controlsEl =
      stickyTopPanelEl.querySelector(".destination-controls") || document.querySelector(".destination-controls");
    const budgetBar = document.getElementById("budget-filter-bar") || document.querySelector(".budget-pills");
    const themeBar = document.getElementById("theme-filter-bar") || document.querySelector(".theme-pills");

    if (statePillsEl) stickyTopPanelEl.appendChild(statePillsEl);
    if (subplacePillsEl) stickyTopPanelEl.appendChild(subplacePillsEl);
    if (mapBoxEl) stickyTopPanelEl.appendChild(mapBoxEl);

    if (controlsEl) {
      stickyTopPanelEl.appendChild(controlsEl);
      if (budgetBar) controlsEl.appendChild(budgetBar);
      if (themeBar) controlsEl.appendChild(themeBar);
    } else {
      if (budgetBar) stickyTopPanelEl.appendChild(budgetBar);
      if (themeBar) stickyTopPanelEl.appendChild(themeBar);
    }
  }

  let lastScrollY = window.scrollY;
  const handleScrollUpButton = () => {
    const currentY = window.scrollY;
    const isScrollingUp = currentY < lastScrollY && currentY > 60;

    if (stickyNavEl) {
      stickyNavEl.classList.toggle("is-scrolling-up", isScrollingUp);
    }

    lastScrollY = Math.max(0, currentY);
  };

  window.addEventListener("scroll", handleScrollUpButton, { passive: true });

  // 2. Génération dynamique des sections de destination
  const dynamicSectionsMount = document.getElementById("destination-dynamic-sections");
  const destData =
    typeof DESTINATION_PAGE_DATA !== "undefined"
      ? DESTINATION_PAGE_DATA
      : typeof POLYNESIE_FRANCAISE_DATA !== "undefined"
        ? POLYNESIE_FRANCAISE_DATA
        : null;

  const pageLabels =
    typeof DESTINATION_PAGE_DATA !== "undefined" && DESTINATION_PAGE_DATA.labels
      ? DESTINATION_PAGE_DATA.labels
      : {};

  const GROUP_LABEL = pageLabels.group || "Archipel";
  const GROUP_LABEL_LOWER = GROUP_LABEL.toLowerCase();
  const ITEM_LABEL = pageLabels.item || "Île";
  const ITEM_LABEL_LOWER = ITEM_LABEL.toLowerCase();
  const ALL_ITEMS_LABEL = pageLabels.allItems || `Toutes les ${ITEM_LABEL_LOWER}s`;

  const themeIcons = {
    rando: "🥾",
    parc: "🌿",
    "point-de-vue": "🌄",
    monument: "🏛️",
    marche: "🧺",
    activite: "🚤"
  };

  const themeLabels = {
    rando: "🥾 Randonnées",
    parc: "🌿 Parcs & Nature",
    "point-de-vue": "🌄 Points de vue",
    monument: "🏛️ Monuments & Culture",
    marche: "🧺 Marchés & Gastronomie",
    activite: "🚤 Activités & Excursions"
  };

  if (dynamicSectionsMount && destData && Array.isArray(destData.archipels)) {
    const themeOrder = ["rando", "parc", "point-de-vue", "monument", "marche", "activite"];

    dynamicSectionsMount.innerHTML = destData.archipels
      .map((arch) => {
        const islandsHtml = (arch.islands || [])
          .map((isl) => {
            const grouped = {};
            (isl.activities || []).forEach((act) => {
              const t = act.theme || "activite";
              if (!grouped[t]) grouped[t] = [];
              grouped[t].push({ ...act, islandId: isl.id, islandLabel: isl.label });
            });

            const themesHtml = Object.keys(grouped)
              .sort((a, b) => {
                const ia = themeOrder.indexOf(a);
                const ib = themeOrder.indexOf(b);
                return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
              })
              .map((tKey) => {
                const itemsHtml = grouped[tKey]
                  .map(
                    (act) => `
                      <label
                        class="check-item activity-item"
                        data-subplace="${act.islandId}"
                        data-subplace-label="${act.islandLabel}"
                        data-theme="${tKey}"
                        data-lat="${act.lat}"
                        data-lng="${act.lng}"
                        data-price="${act.price}"
                        data-transport="${act.transport || ""}"
                      >
                        <input type="checkbox">
                        <div class="activity-content">
                          <span class="activity-title">${act.title}</span>
                          <div class="activity-meta">
                            <span class="activity-tag price-tag">${act.priceLabel || (act.price === 0 ? "Gratuit" : `~${act.price} €/p`)}</span>
                            ${act.transport ? `<span class="activity-tag transport-tag">${act.transport}</span>` : ""}
                          </div>
                        </div>
                      </label>
                    `
                  )
                  .join("");

                return `
                  <div class="theme-group" data-theme="${tKey}">
                    <h5 class="theme-title">${themeLabels[tKey] || tKey}</h5>
                    ${itemsHtml}
                  </div>
                `;
              })
              .join("");

            return `
              <div class="subplace-group" data-subplace="${isl.id}" data-subplace-label="${isl.label}"${typeof isl.lat === "number" ? ` data-lat="${isl.lat}"` : ""}${typeof isl.lng === "number" ? ` data-lng="${isl.lng}"` : ""}${typeof isl.zoom === "number" ? ` data-zoom="${isl.zoom}"` : ""}>
                <h4 class="subplace-heading">🏝️ ${isl.label}</h4>
                ${themesHtml}
              </div>
            `;
          })
          .join("");

        return `
          <section id="${arch.id}" data-lat="${arch.lat}" data-lng="${arch.lng}" data-zoom="${arch.zoom || 8}" data-map-label="${arch.mapLabel || arch.title}" hidden>
            <h3>${arch.title}</h3>
            <p class="state-intro">${arch.intro || ""}</p>
            ${islandsHtml}
          </section>
        `;
      })
      .join("");
  }

  let syncMapWithFilters = () => {};
  let updateFilterStatus = () => {};

  // 3. Sauvegarde des cases cochées sur les pages destinations
  const pageKey = "checklist_" + window.location.pathname;
  const checkboxes = Array.from(document.querySelectorAll(".check-item input[type='checkbox']"));

  if (checkboxes.length > 0) {
    const saved = JSON.parse(localStorage.getItem(pageKey) || "null");
    if (Array.isArray(saved)) {
      checkboxes.forEach((box, i) => {
        if (typeof saved[i] === "boolean") {
          box.checked = saved[i];
        }
      });
    }

    checkboxes.forEach((box) => {
      box.addEventListener("change", () => {
        const state = checkboxes.map((cb) => cb.checked);
        localStorage.setItem(pageKey, JSON.stringify(state));
        syncMapWithFilters();
        updateFilterStatus();
        if (map) {
          requestAnimationFrame(() => map.invalidateSize());
        }
      });
    });
  }

  // 4. Carte interactive Leaflet & filtres destinations
  const realMapEl = document.getElementById("real-map");
  const mapLabelEl = document.getElementById("map-active-place");
  const overviewBoxEl = document.querySelector(".country-overview-box");
  const budgetBarEl = document.getElementById("budget-filter-bar");
  const themeBarEl = document.getElementById("theme-filter-bar");
  const subplaceBarEl = document.getElementById("subplace-filter-bar") || document.querySelector(".subplace-pills");
  const stateBarEl = document.querySelector(".state-pills");
  const budgetButtons = Array.from(document.querySelectorAll("#budget-filter-bar [data-budget]"));
  const themeButtons = Array.from(document.querySelectorAll("#theme-filter-bar [data-theme]"));
  const stateButtons = Array.from(document.querySelectorAll(".state-pills [data-state]"));
  const destinationSections = Array.from(document.querySelectorAll(".container section[id]"));
  const allSections = Array.from(document.querySelectorAll(".container section[id][data-lat][data-lng]"));

  const enableHorizontalWheelScroll = (barEl) => {
    if (!barEl) return;
    barEl.addEventListener(
      "wheel",
      (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          barEl.scrollLeft += e.deltaY;
          e.preventDefault();
        }
      },
      { passive: false }
    );
  };

  enableHorizontalWheelScroll(stateBarEl);
  enableHorizontalWheelScroll(subplaceBarEl);

  let map = null;
  let stateMarkersLayer = null;
  let activityMarkersLayer = null;
  let countryBounds = null;
  let defaultCenter = [23.6345, -102.5528];
  let defaultZoom = 5;

  if (realMapEl && typeof L !== "undefined") {
    const isPolynesiePage =
      window.location.pathname.includes("polynesie") ||
      document.body.getAttribute("data-place-name")?.toLowerCase().includes("polyn");

    if (isPolynesiePage) {
      defaultCenter = [-17.6797, -149.4068];
      defaultZoom = 6;
    }

    map = L.map("real-map", {
      scrollWheelZoom: false
    }).setView(defaultCenter, defaultZoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
      maxZoom: 18
    }).addTo(map);

    stateMarkersLayer = L.layerGroup().addTo(map);
    activityMarkersLayer = L.layerGroup().addTo(map);

    const coords = [];

    allSections.forEach((sec) => {
      const lat = Number(sec.getAttribute("data-lat"));
      const lng = Number(sec.getAttribute("data-lng"));
      if (Number.isNaN(lat) || Number.isNaN(lng)) return;
      coords.push([lat, lng]);
    });

    if (coords.length > 1) {
      const bounds = L.latLngBounds(coords);
      if (bounds.isValid()) {
        countryBounds = bounds;
        map.fitBounds(countryBounds, { padding: [20, 20], maxZoom: 6 });
        defaultCenter = bounds.getCenter();
      }
    } else if (coords.length === 1) {
      defaultCenter = coords[0];
      defaultZoom = 6;
      map.setView(defaultCenter, defaultZoom);
    }

    setTimeout(() => {
      if (map) map.invalidateSize();
    }, 100);
  }

  // Bouton Masquer / Afficher la carte dans le panneau collant
  const mapBox = document.querySelector(".sticky-map-box");
  if (mapBox && mapLabelEl && !mapBox.querySelector(".map-header-bar")) {
    const headerBar = document.createElement("div");
    headerBar.className = "map-header-bar";
    mapLabelEl.parentNode.insertBefore(headerBar, mapLabelEl);
    headerBar.appendChild(mapLabelEl);

    const toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.className = "map-toggle-btn";
    toggleBtn.textContent = "Masquer la carte";
    toggleBtn.addEventListener("click", () => {
      const collapsed = mapBox.classList.toggle("is-collapsed");
      toggleBtn.textContent = collapsed ? "Afficher la carte" : "Masquer la carte";
      if (!collapsed && map) {
        setTimeout(() => map.invalidateSize(), 260);
      }
    });
    headerBar.appendChild(toggleBtn);
  }

  let activeState = "all";
  let activeSubplace = "all";
  let activeBudget = "all";
  let activeTheme = "all";

  const getSubplaceId = (el) => el.getAttribute("data-subplace") || el.getAttribute("data-island") || "";

  const matchesSubplace = (itemSubplaceId) => {
    if (activeSubplace === "all") return true;
    return (itemSubplaceId || "") === activeSubplace;
  };

  const matchesBudget = (price) => {
    if (activeBudget === "all") return true;
    if (activeBudget === "free") return price === 0;
    if (activeBudget === "50") return price <= 50;
    if (activeBudget === "100") return price <= 100;
    return true;
  };

  const matchesTheme = (theme) => {
    if (activeTheme === "all") return true;
    return (theme || "activite") === activeTheme;
  };

  // Déplacement fluide du bouton cliqué vers la gauche
  const movePillSmoothlyToLeft = (barEl, pillEl) => {
    if (!barEl || !pillEl) return;

    const scrollNow = () => {
      const barRect = barEl.getBoundingClientRect();
      const pillRect = pillEl.getBoundingClientRect();
      const offsetFromBarLeft = pillRect.left - barRect.left;
      const targetScrollLeft = Math.max(0, barEl.scrollLeft + offsetFromBarLeft - 4);

      barEl.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth"
      });
    };

    requestAnimationFrame(() => {
      scrollNow();
      setTimeout(scrollNow, 60);
    });
  };

  syncMapWithFilters = () => {
    if (!map || typeof L === "undefined") return;

    stateMarkersLayer.clearLayers();
    activityMarkersLayer.clearLayers();

    if (activeState === "all") {
      allSections.forEach((sec) => {
        const lat = Number(sec.getAttribute("data-lat"));
        const lng = Number(sec.getAttribute("data-lng"));
        if (Number.isNaN(lat) || Number.isNaN(lng)) return;

        const isVisited = sec.getAttribute("data-state-visited") === "true";
        const label = sec.getAttribute("data-map-label") || sec.querySelector("h3")?.textContent?.trim() || sec.id;

        const pointMarker = L.circleMarker([lat, lng], {
          radius: 7,
          fillColor: isVisited ? "#16a34a" : "#0f766e",
          color: "#ffffff",
          weight: 2,
          opacity: 1,
          fillOpacity: 0.95
        })
          .bindTooltip(`${label} (cliquer pour voir les ${ITEM_LABEL_LOWER}s et activités)`, { direction: "top" })
          .addTo(stateMarkersLayer);

        pointMarker.on("click", () => {
          const targetBtn = document.querySelector(`.state-pills [data-state="${sec.id}"]`);
          if (targetBtn) targetBtn.click();
        });
      });

      if (mapLabelEl) {
        mapLabelEl.textContent = `Lieu : Vue d'ensemble (clique sur un(e) ${GROUP_LABEL_LOWER} ou un point)`;
      }

      if (countryBounds && countryBounds.isValid()) {
        map.fitBounds(countryBounds, { padding: [20, 20], maxZoom: 6 });
      } else {
        map.setView(defaultCenter, defaultZoom);
      }

      setTimeout(() => {
        if (map) map.invalidateSize();
      }, 50);
      return;
    }

    const selectedSection = document.getElementById(activeState);
    if (!selectedSection) return;

    const allSubplacesInSec = Array.from(
      selectedSection.querySelectorAll(".subplace-group[data-subplace], .island-subgroup[data-island]")
    );

    const activeSubplaceEl =
      activeSubplace !== "all"
        ? selectedSection.querySelector(
            `.subplace-group[data-subplace="${activeSubplace}"], .island-subgroup[data-island="${activeSubplace}"]`
          )
        : null;

    const activeSubplaceLabel =
      activeSubplace !== "all"
        ? activeSubplaceEl?.getAttribute("data-subplace-label") ||
          activeSubplaceEl
            ?.querySelector(".subplace-heading, .island-heading")
            ?.textContent?.replace(/^🏝️\s*|^📍\s*/, "")
            .trim() ||
          activeSubplace
        : null;

    const secLabel =
      selectedSection.getAttribute("data-map-label") ||
      selectedSection.querySelector("h3")?.textContent?.trim() ||
      activeState;

    if (mapLabelEl) {
      mapLabelEl.textContent = activeSubplaceLabel
        ? `Lieu : ${secLabel} — ${activeSubplaceLabel}`
        : `Lieu : ${secLabel} — ${ALL_ITEMS_LABEL}`;
    }

    const allCoordsToFit = [];

    if (activeSubplace === "all") {
      allSubplacesInSec.forEach((sub) => {
        const subId = getSubplaceId(sub);
        const subLat = Number(sub.getAttribute("data-lat"));
        const subLng = Number(sub.getAttribute("data-lng"));
        if (Number.isNaN(subLat) || Number.isNaN(subLng)) return;

        const subLabel =
          sub.getAttribute("data-subplace-label") ||
          sub
            .querySelector(".subplace-heading, .island-heading")
            ?.textContent?.replace(/^🏝️\s*|^📍\s*/, "")
            .trim() ||
          subId;

        allCoordsToFit.push([subLat, subLng]);

        const islandMarker = L.circleMarker([subLat, subLng], {
          radius: 7,
          fillColor: "#0284c7",
          color: "#ffffff",
          weight: 2,
          opacity: 1,
          fillOpacity: 0.95
        })
          .bindTooltip(`${subLabel} (cliquer pour filtrer)`, { direction: "top" })
          .addTo(stateMarkersLayer);

        islandMarker.on("click", () => {
          activeSubplace = subId;
          applyDestinationFilters({ scrollSubplaceToStart: true });
        });
      });
    }

    const visibleActivities = Array.from(
      selectedSection.querySelectorAll(".activity-item[data-price][data-lat][data-lng]")
    ).filter((item) => !item.hidden);

    const actCoords = [];

    visibleActivities.forEach((item) => {
      const lat = Number(item.getAttribute("data-lat"));
      const lng = Number(item.getAttribute("data-lng"));
      if (Number.isNaN(lat) || Number.isNaN(lng)) return;

      const title = item.querySelector(".activity-title")?.textContent?.trim() || "Activité";
      const priceTag = item.querySelector(".price-tag")?.textContent?.trim() || "";
      const theme = item.getAttribute("data-theme") || "activite";
      const icon = themeIcons[theme] || "📍";
      const isChecked = Boolean(item.querySelector("input[type='checkbox']")?.checked);

      actCoords.push([lat, lng]);
      allCoordsToFit.push([lat, lng]);

      const divIcon = L.divIcon({
        className: "",
        html: `<div class="theme-pin-marker ${isChecked ? "is-done" : ""}">${icon}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });

      const marker = L.marker([lat, lng], { icon: divIcon })
        .bindTooltip(`${icon} ${title}${priceTag ? ` (${priceTag})` : ""}`, { direction: "top" })
        .addTo(activityMarkersLayer);

      marker.on("click", () => {
        const panelHeight = document.getElementById("sticky-map-controls")?.offsetHeight || 0;
        const yOffset = panelHeight + 24;

        const targetY = item.getBoundingClientRect().top + window.scrollY - yOffset;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });

        document.querySelectorAll(".activity-item.is-map-target").forEach((el) => {
          el.classList.remove("is-map-target");
        });
        item.classList.add("is-map-target");
        setTimeout(() => item.classList.remove("is-map-target"), 1800);

        const checkbox = item.querySelector("input[type='checkbox']");
        checkbox?.focus({ preventScroll: true });
      });
    });

    if (activeSubplace !== "all" && activeSubplaceEl) {
      const subLat = Number(activeSubplaceEl.getAttribute("data-lat"));
      const subLng = Number(activeSubplaceEl.getAttribute("data-lng"));
      const subZoom = Number(activeSubplaceEl.getAttribute("data-zoom")) || 11;

      if (actCoords.length > 1) {
        map.fitBounds(L.latLngBounds(actCoords), { padding: [24, 24], maxZoom: 13 });
      } else if (actCoords.length === 1) {
        map.setView(actCoords[0], subZoom);
      } else if (!Number.isNaN(subLat) && !Number.isNaN(subLng)) {
        L.circleMarker([subLat, subLng], {
          radius: 8,
          fillColor: "#0f766e",
          color: "#ffffff",
          weight: 2,
          opacity: 1,
          fillOpacity: 0.95
        })
          .bindTooltip(`${activeSubplaceLabel || activeSubplace}`, { direction: "top" })
          .addTo(activityMarkersLayer);

        map.setView([subLat, subLng], subZoom);
      }
    } else if (allCoordsToFit.length > 1) {
      map.fitBounds(L.latLngBounds(allCoordsToFit), { padding: [24, 24], maxZoom: 10 });
    } else if (allCoordsToFit.length === 1) {
      const secZoom = Number(selectedSection.getAttribute("data-zoom")) || 8;
      map.setView(allCoordsToFit[0], secZoom);
    } else {
      const secLat = Number(selectedSection.getAttribute("data-lat"));
      const secLng = Number(selectedSection.getAttribute("data-lng"));
      const secZoom = Number(selectedSection.getAttribute("data-zoom")) || 8;
      if (!Number.isNaN(secLat) && !Number.isNaN(secLng)) {
        map.setView([secLat, secLng], secZoom);
      }
    }

    setTimeout(() => {
      if (map) map.invalidateSize();
    }, 50);
  };

  let applyDestinationFilters = () => {};

  const renderSubplacePillsForSection = (sectionEl) => {
    if (!subplaceBarEl) return;

    if (!sectionEl) {
      subplaceBarEl.hidden = true;
      subplaceBarEl.innerHTML = "";
      return;
    }

    const subgroups = Array.from(
      sectionEl.querySelectorAll(".subplace-group[data-subplace], .island-subgroup[data-island]")
    );
    if (subgroups.length === 0) {
      subplaceBarEl.hidden = true;
      subplaceBarEl.innerHTML = "";
      return;
    }

    const allLabel = subplaceBarEl.getAttribute("data-all-label") || ALL_ITEMS_LABEL;

    const places = subgroups.map((sub) => {
      const id = getSubplaceId(sub);
      const label =
        sub.getAttribute("data-subplace-label") ||
        sub
          .querySelector(".subplace-heading, .island-heading")
          ?.textContent?.replace(/^🏝️\s*|^📍\s*/, "")
          .trim() ||
        id;
      return { id, label };
    });

    subplaceBarEl.hidden = false;
    subplaceBarEl.innerHTML = `
      <button type="button" class="filter-pill ${activeSubplace === "all" ? "is-active" : ""}" data-subplace="all">
        ${allLabel}
      </button>
      ${places
        .map(
          (p) => `
            <button type="button" class="filter-pill ${activeSubplace === p.id ? "is-active" : ""}" data-subplace="${p.id}">
              ${p.label}
            </button>
          `
        )
        .join("")}
    `;

    subplaceBarEl.querySelectorAll("[data-subplace]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeSubplace = btn.getAttribute("data-subplace") || "all";
        applyDestinationFilters({ scrollSubplaceToStart: true });
        const updatedBtn = subplaceBarEl.querySelector(`[data-subplace="${activeSubplace}"]`);
        if (activeSubplace !== "all") {
          movePillSmoothlyToLeft(subplaceBarEl, updatedBtn);
        }
      });
    });
  };

  // Barre d'état des filtres (compteur d'activités + bouton Réinitialiser)
  const stickyPanel = document.querySelector(".sticky-top-panel");
  if (stickyPanel && !document.querySelector(".filter-status-bar")) {
    const statusBar = document.createElement("div");
    statusBar.className = "filter-status-bar";
    statusBar.innerHTML = `
      <span class="filter-status-count"></span>
      <button type="button" class="reset-filters-btn" hidden>✕ Réinitialiser les filtres</button>
    `;
    stickyPanel.insertAdjacentElement("afterend", statusBar);

    const countEl = statusBar.querySelector(".filter-status-count");
    const resetBtn = statusBar.querySelector(".reset-filters-btn");

    updateFilterStatus = () => {
      if (activeState === "all") {
        statusBar.hidden = true;
        return;
      }
      statusBar.hidden = false;

      const visibleItems = Array.from(document.querySelectorAll(".activity-item"))
        .filter((el) => !el.hidden && !el.closest("[hidden]"));
      const checkedCount = visibleItems.filter((el) => el.querySelector("input[type='checkbox']")?.checked).length;

      countEl.innerHTML = `<strong>${visibleItems.length}</strong> activité${visibleItems.length > 1 ? "s" : ""} affichée${visibleItems.length > 1 ? "s" : ""} · <strong>${checkedCount}</strong> faite${checkedCount > 1 ? "s" : ""}`;

      const hasSubFilter = activeSubplace !== "all" || activeBudget !== "all" || activeTheme !== "all";
      resetBtn.hidden = !hasSubFilter;
    };

    resetBtn.addEventListener("click", () => {
      activeSubplace = "all";
      activeBudget = "all";
      activeTheme = "all";
      applyDestinationFilters({ scrollSubplaceToStart: true });
    });
  }

  if (stateButtons.length > 0 && destinationSections.length > 0) {
    const filterStorageKey = "dest_filters_" + window.location.pathname;
    const savedFilters = JSON.parse(localStorage.getItem(filterStorageKey) || "{}");

    const validBudgets = new Set(["all", "free", "50", "100"]);
    const validThemes = new Set(["all", "rando", "parc", "point-de-vue", "monument", "marche", "activite"]);

    activeState = "all";
    activeSubplace = "all";
    activeBudget = validBudgets.has(savedFilters.budget) ? savedFilters.budget : "all";
    activeTheme = validThemes.has(savedFilters.theme) ? savedFilters.theme : "all";

    applyDestinationFilters = (options = {}) => {
      const { scrollStateToStart = false, scrollSubplaceToStart = false } = options;
      const hasSelectedPlace = activeState !== "all";
      const currentSection = hasSelectedPlace ? document.getElementById(activeState) : null;

      if (stickyTopPanelEl) {
        stickyTopPanelEl.classList.toggle("is-state-selected", hasSelectedPlace);
      }

      localStorage.setItem(
        filterStorageKey,
        JSON.stringify({
          state: activeState,
          subplace: activeSubplace,
          budget: activeBudget,
          theme: activeTheme
        })
      );

      if (overviewBoxEl) overviewBoxEl.hidden = hasSelectedPlace;
      if (budgetBarEl) budgetBarEl.hidden = !hasSelectedPlace;
      if (themeBarEl) themeBarEl.hidden = !hasSelectedPlace;

      renderSubplacePillsForSection(currentSection);

      destinationSections.forEach((sec) => {
        const stateMatch = hasSelectedPlace && sec.id === activeState;
        sec.hidden = !stateMatch;

        if (!stateMatch) return;

        const itemsInSec = Array.from(sec.querySelectorAll(".activity-item[data-price]"));
        itemsInSec.forEach((item) => {
          const rawPrice = Number(item.getAttribute("data-price"));
          const price = Number.isNaN(rawPrice) ? 0 : rawPrice;
          const theme = item.getAttribute("data-theme") || "activite";
          const subplaceId = getSubplaceId(item);
          item.hidden = !(matchesSubplace(subplaceId) && matchesBudget(price) && matchesTheme(theme));
        });

        sec.querySelectorAll(".theme-group").forEach((group) => {
          const hasVisible = Array.from(group.querySelectorAll(".activity-item[data-price]")).some(
            (el) => !el.hidden
          );
          group.hidden = !hasVisible;
        });

        sec.querySelectorAll(".subplace-group, .island-subgroup").forEach((sub) => {
          const hasVisibleInSub = Array.from(sub.querySelectorAll(".activity-item[data-price]")).some(
            (el) => !el.hidden
          );
          sub.hidden = !hasVisibleInSub;
        });
      });

      stateButtons.forEach((btn) => {
        const isAct = btn.getAttribute("data-state") === activeState;
        btn.classList.toggle("is-active", isAct);
      });

      budgetButtons.forEach((btn) => {
        btn.classList.toggle("is-active", btn.getAttribute("data-budget") === activeBudget);
      });

      themeButtons.forEach((btn) => {
        btn.classList.toggle("is-active", btn.getAttribute("data-theme") === activeTheme);
      });

      if (scrollStateToStart && activeState !== "all") {
        const activeStateBtn = stateBarEl?.querySelector(`[data-state="${activeState}"]`);
        movePillSmoothlyToLeft(stateBarEl, activeStateBtn);
      }

      if (scrollSubplaceToStart && activeSubplace !== "all") {
        const activeSubBtn = subplaceBarEl?.querySelector(`[data-subplace="${activeSubplace}"]`);
        movePillSmoothlyToLeft(subplaceBarEl, activeSubBtn);
      }

      syncMapWithFilters();
      updateFilterStatus();
      if (map) {
        requestAnimationFrame(() => map.invalidateSize());
      }
    };

    stateButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const clicked = btn.getAttribute("data-state") || "all";
        activeState = clicked === activeState && clicked !== "all" ? "all" : clicked;
        activeSubplace = "all";
        applyDestinationFilters({ scrollStateToStart: true, scrollSubplaceToStart: true });
      });
    });

    budgetButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        activeBudget = btn.getAttribute("data-budget") || "all";
        applyDestinationFilters();
      });
    });

    themeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        activeTheme = btn.getAttribute("data-theme") || "all";
        applyDestinationFilters();
      });
    });

    applyDestinationFilters();
  }

  document.querySelectorAll(".place-mention[data-lat][data-lng]").forEach((mention) => {
    mention.addEventListener("click", () => {
      if (!map) return;
      document.querySelectorAll(".place-mention.is-active").forEach((el) => el.classList.remove("is-active"));
      mention.classList.add("is-active");
      const lat = Number(mention.getAttribute("data-lat"));
      const lng = Number(mention.getAttribute("data-lng"));
      const zoom = Number(mention.getAttribute("data-zoom")) || 8;
      const label = mention.getAttribute("data-label") || mention.textContent.trim();
      if (!Number.isNaN(lat) && !Number.isNaN(lng)) {
        map.flyTo([lat, lng], zoom, { duration: 0.7 });
        if (mapLabelEl && label) mapLabelEl.textContent = `Lieu : ${label}`;
      }
    });
  });

  // 5. Enrichissement visuel de la page d'accueil (badge + barres de progression)
  const homeHero = document.querySelector(".home-container .hero");
  if (homeHero && !homeHero.querySelector(".home-eyebrow")) {
    const eyebrow = document.createElement("span");
    eyebrow.className = "home-eyebrow";
    eyebrow.textContent = "Carnet & Checklist de Voyage";
    homeHero.insertBefore(eyebrow, homeHero.firstChild);
  }

  document.querySelectorAll(".trip-card").forEach((card) => {
    if (card.querySelector(".trip-progress-track")) return;
    const badge = card.querySelector(".trip-badge");
    const text = badge ? badge.textContent.trim() : "";
    const match = text.match(/(\d+)\s*%/);
    let pct = match ? parseInt(match[1], 10) : (badge?.classList.contains("done") ? 100 : 0);
    pct = Math.max(0, Math.min(100, pct));

    const track = document.createElement("div");
    track.className = "trip-progress-track";
    track.innerHTML = `<div class="trip-progress-fill" style="width: ${pct}%"></div>`;
    card.appendChild(track);
  });

  // 6. Navigation par continents & recherche sur l'accueil ("Où voyages-tu ?")
  const whereTravelContinentsGrid = document.getElementById("my-trips-continents-grid");
  const whereTravelSubcontinentsPanel = document.getElementById("my-trips-subcontinents-panel");
  const whereTravelCountriesPanel = document.getElementById("my-trips-countries-panel");
  const searchInputEl = document.getElementById("travel-country-search");
  const searchResultsEl = document.getElementById("travel-search-results");

  if (
    whereTravelContinentsGrid &&
    whereTravelCountriesPanel &&
    typeof VISITOR_REGIONS_DATA !== "undefined"
  ) {
    let activeTravelContinent = null;
    let activeTravelSubcontinent = "all";

    const travelContinentEmojis = {
      "Europe": "🇪🇺",
      "Amériques": "🌎",
      "Amérique du Nord": "🌎",
      "Amérique du Sud": "🏔️",
      "Océanie": "🌏",
      "Asie": "🏮",
      "Afrique": "🌍",
      "Antarctique": "🇦🇶"
    };

    const normalizeText = (str) =>
      (str || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

    const getDestinationUrl = (countryName) => {
      const slug = countryName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      return `destinations/${slug}.html`;
    };

    const openCountryDestination = async (countryName) => {
      if (!countryName) return;

      const customUrl = VISITOR_REGIONS_DATA[countryName]?.url;
      const targetUrl = customUrl || getDestinationUrl(countryName);
      const fallbackUrl = `destinations/en-construction.html?pays=${encodeURIComponent(countryName)}`;

      try {
        const response = await fetch(targetUrl, { method: "HEAD" });
        if (response.ok) {
          window.location.href = targetUrl;
          return;
        }
      } catch (_) {}

      window.location.href = fallbackUrl;
    };

    const getTravelContinents = () => {
      const seen = new Set();
      const list = [];
      Object.values(VISITOR_REGIONS_DATA).forEach((entry) => {
        const c = entry.continent || "Autres";
        if (!seen.has(c)) {
          seen.add(c);
          list.push(c);
        }
      });
      return list;
    };

    const getTravelSubcontinents = (continent) => {
      const seen = new Set();
      const list = [];
      Object.values(VISITOR_REGIONS_DATA).forEach((entry) => {
        if ((entry.continent || "Autres") === continent && entry.subcontinent && !seen.has(entry.subcontinent)) {
          seen.add(entry.subcontinent);
          list.push(entry.subcontinent);
        }
      });
      return list;
    };

    const getTravelCountries = (continent, subcontinent = "all") => {
      return Object.entries(VISITOR_REGIONS_DATA)
        .filter(([, entry]) => {
          const matchContinent = (entry.continent || "Autres") === continent;
          if (!matchContinent) return false;
          if (subcontinent === "all") return true;
          return (entry.subcontinent || "Autres") === subcontinent;
        })
        .map(([name]) => name);
    };

    const renderWhereTravelSubcontinents = (continent) => {
      if (!whereTravelSubcontinentsPanel) return;

      const subs = getTravelSubcontinents(continent);
      if (subs.length <= 1) {
        whereTravelSubcontinentsPanel.hidden = true;
        whereTravelSubcontinentsPanel.innerHTML = "";
        return;
      }

      whereTravelSubcontinentsPanel.hidden = false;
      whereTravelSubcontinentsPanel.innerHTML = `
        <button
          type="button"
          class="filter-pill ${activeTravelSubcontinent === "all" ? "is-active" : ""}"
          data-travel-sub="all"
        >
          Tous
        </button>
        ${subs
          .map(
            (sub) => `
              <button
                type="button"
                class="filter-pill ${activeTravelSubcontinent === sub ? "is-active" : ""}"
                data-travel-sub="${sub}"
              >
                ${sub}
              </button>
            `
          )
          .join("")}
      `;

      whereTravelSubcontinentsPanel.querySelectorAll("[data-travel-sub]").forEach((btn) => {
        btn.addEventListener("click", () => {
          activeTravelSubcontinent = btn.getAttribute("data-travel-sub") || "all";
          renderWhereTravelCountries(continent, activeTravelSubcontinent);
        });
      });
    };

    const renderWhereTravelCountries = (continent, subcontinent = "all") => {
      whereTravelContinentsGrid.hidden = true;
      whereTravelCountriesPanel.hidden = false;
      renderWhereTravelSubcontinents(continent);

      const emoji = travelContinentEmojis[continent] || "🌐";
      const countries = getTravelCountries(continent, subcontinent);

      whereTravelCountriesPanel.innerHTML = `
        <div class="countries-view-header">
          <button type="button" class="back-continents-btn" id="back-to-travel-continents">
            ← Continents
          </button>
          <div class="countries-view-title">
            <h3>${emoji} ${continent}${subcontinent !== "all" ? ` — ${subcontinent}` : ""}</h3>
            <span class="region-panel-sub">Clique sur un pays pour ouvrir sa fiche</span>
          </div>
        </div>

        <div class="visitor-countries-multi-list">
          ${countries
            .map((country) => {
              const flag = VISITOR_REGIONS_DATA[country]?.flag || "🏳️";
              return `
                <button
                  type="button"
                  class="visitor-bubble"
                  data-travel-country="${country}"
                >
                  <span>${flag} ${country}</span>
                  <span class="visitor-bubble-percent">→</span>
                </button>
              `;
            })
            .join("")}
        </div>
      `;

      document
        .getElementById("back-to-travel-continents")
        ?.addEventListener("click", () => {
          activeTravelContinent = null;
          activeTravelSubcontinent = "all";
          renderWhereTravelContinents();
        });

      whereTravelCountriesPanel.querySelectorAll("[data-travel-country]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const chosen = btn.getAttribute("data-travel-country");
          openCountryDestination(chosen);
        });
      });
    };

    const renderWhereTravelContinents = () => {
      whereTravelCountriesPanel.hidden = true;
      whereTravelCountriesPanel.innerHTML = "";
      if (whereTravelSubcontinentsPanel) {
        whereTravelSubcontinentsPanel.hidden = true;
        whereTravelSubcontinentsPanel.innerHTML = "";
      }
      whereTravelContinentsGrid.hidden = false;

      const continents = getTravelContinents();
      whereTravelContinentsGrid.innerHTML = continents
        .map((continent) => {
          const emoji = travelContinentEmojis[continent] || "🌐";
          const count = getTravelCountries(continent, "all").length;

          return `
            <button
              type="button"
              class="visitor-bubble"
              data-travel-continent="${continent}"
            >
              <span>${emoji} ${continent}</span>
              <span class="visitor-bubble-percent">${count} pays</span>
            </button>
          `;
        })
        .join("");

      whereTravelContinentsGrid.querySelectorAll("[data-travel-continent]").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (searchInputEl) {
            searchInputEl.value = "";
            const clearBtn = searchInputEl.parentElement.querySelector(".search-clear-btn");
            if (clearBtn) clearBtn.hidden = true;
          }
          if (searchResultsEl) {
            searchResultsEl.hidden = true;
            searchResultsEl.innerHTML = "";
          }
          activeTravelContinent = btn.getAttribute("data-travel-continent");
          activeTravelSubcontinent = "all";
          renderWhereTravelCountries(activeTravelContinent, activeTravelSubcontinent);
        });
      });
    };

    if (searchInputEl && searchResultsEl) {
      let clearBtn = searchInputEl.parentElement.querySelector(".search-clear-btn");
      if (!clearBtn) {
        clearBtn = document.createElement("button");
        clearBtn.type = "button";
        clearBtn.className = "search-clear-btn";
        clearBtn.textContent = "✕";
        clearBtn.title = "Effacer la recherche";
        clearBtn.hidden = !searchInputEl.value;
        searchInputEl.parentElement.appendChild(clearBtn);
      }

      const restoreTravelView = () => {
        searchResultsEl.hidden = true;
        searchResultsEl.innerHTML = "";
        clearBtn.hidden = true;

        if (activeTravelContinent) {
          renderWhereTravelCountries(activeTravelContinent, activeTravelSubcontinent);
        } else {
          renderWhereTravelContinents();
        }
      };

      const renderSearchResults = (rawQuery) => {
        clearBtn.hidden = !rawQuery;
        const query = normalizeText(rawQuery);

        if (!query) {
          restoreTravelView();
          return;
        }

        const matches = Object.entries(VISITOR_REGIONS_DATA)
          .filter(([countryName, info]) => {
            const haystack = normalizeText(
              `${countryName} ${info.continent || ""} ${info.subcontinent || ""}`
            );
            return haystack.includes(query);
          })
          .slice(0, 12);

        whereTravelContinentsGrid.hidden = true;
        if (whereTravelSubcontinentsPanel) whereTravelSubcontinentsPanel.hidden = true;
        whereTravelCountriesPanel.hidden = true;
        searchResultsEl.hidden = false;

        if (matches.length === 0) {
          searchResultsEl.innerHTML = `<p class="region-panel-sub">Aucun pays trouvé pour « ${rawQuery} ».</p>`;
          return;
        }

        searchResultsEl.innerHTML = matches
          .map(([countryName, info]) => {
            const flag = info.flag || "🏳️";
            const subtitle = [info.continent, info.subcontinent].filter(Boolean).join(" · ");
            return `
              <button
                type="button"
                class="visitor-bubble"
                data-travel-country="${countryName}"
              >
                <span>${flag} ${countryName}${subtitle ? ` <small class="region-panel-sub">(${subtitle})</small>` : ""}</span>
                <span class="visitor-bubble-percent">→</span>
              </button>
            `;
          })
          .join("");

        searchResultsEl.querySelectorAll("[data-travel-country]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const chosen = btn.getAttribute("data-travel-country");
            openCountryDestination(chosen);
          });
        });
      };

      clearBtn.addEventListener("click", () => {
        searchInputEl.value = "";
        renderSearchResults("");
        searchInputEl.focus();
      });

      searchInputEl.addEventListener("input", (e) => {
        renderSearchResults(e.target.value);
      });

      searchInputEl.addEventListener("search", (e) => {
        renderSearchResults(e.target.value);
      });

      searchInputEl.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          searchInputEl.value = "";
          renderSearchResults("");
        }
      });
    }

    renderWhereTravelContinents();
  }

  // 7. Checklist visiteur mondiale & modale des régions
  const continentsGrid = document.getElementById("visitor-continents-grid");
  const subcontinentsPanel = document.getElementById("visitor-subcontinents-panel");
  const countriesPanel = document.getElementById("visitor-countries-panel");
  const visitorCounter = document.getElementById("visitor-counter");

  if (!continentsGrid || !countriesPanel || typeof VISITOR_REGIONS_DATA === "undefined") return;

  let modalBackdrop = document.getElementById("region-modal-backdrop");
  if (!modalBackdrop) {
    modalBackdrop = document.createElement("div");
    modalBackdrop.id = "region-modal-backdrop";
    modalBackdrop.className = "region-modal-backdrop";
    modalBackdrop.hidden = true;
    document.body.appendChild(modalBackdrop);
  }

  const continentEmojis = {
    "Europe": "🇪🇺",
    "Amériques": "🌎",
    "Amérique du Nord": "🌎",
    "Amérique du Sud": "🏔️",
    "Océanie": "🌏",
    "Asie": "🏮",
    "Afrique": "🌍",
    "Antarctique": "🇦🇶"
  };

  const getContinents = () => {
    const seen = new Set();
    const list = [];
    Object.values(VISITOR_REGIONS_DATA).forEach((entry) => {
      const c = entry.continent || "Autres";
      if (!seen.has(c)) {
        seen.add(c);
        list.push(c);
      }
    });
    return list;
  };

  const getCountriesInContinent = (continent, subcontinent = "all") => {
    return Object.entries(VISITOR_REGIONS_DATA)
      .filter(([, entry]) => {
        const matchContinent = (entry.continent || "Autres") === continent;
        if (!matchContinent) return false;
        if (subcontinent === "all") return true;
        return (entry.subcontinent || "Autres") === subcontinent;
      })
      .map(([name]) => name);
  };

  const getSubcontinentsInContinent = (continent) => {
    const seen = new Set();
    const list = [];
    Object.values(VISITOR_REGIONS_DATA).forEach((entry) => {
      if ((entry.continent || "Autres") === continent && entry.subcontinent && !seen.has(entry.subcontinent)) {
        seen.add(entry.subcontinent);
        list.push(entry.subcontinent);
      }
    });
    return list;
  };

  const getRegionLabel = (region) => (typeof region === "string" ? region : region.name);

  const storageKey = "visitor_continents_v2";
  const savedState = JSON.parse(localStorage.getItem(storageKey) || "{}");
  let activeContinent = null;
  let activeSubcontinent = "all";
  let activeCountry = null;

  const continentNames = getContinents();

  Object.entries(VISITOR_REGIONS_DATA).forEach(([country, entry]) => {
    const regions = Array.isArray(entry.regions) ? entry.regions : [];
    const total = regions.length;
    if (!Array.isArray(savedState[country]) || savedState[country].length !== total) {
      savedState[country] = Array(total).fill(false);
    }
  });

  const visitorMapEl = document.getElementById("visitor-world-map");
  const visitorMapLabel = document.getElementById("visitor-map-label");
  let visitorMap = null;
  const visitorCountryMarkers = {};

  const getProgressColor = (percent) => {
    if (percent >= 100) return "#16a34a";
    if (percent > 0) return "#f59e0b";
    return "#64748b";
  };

  const getCountryStats = (country) => {
    const list = savedState[country] || [];
    const total = list.length;
    const checked = list.filter(Boolean).length;
    const percent = total > 0 ? Math.round((checked / total) * 100) : 0;
    const isComplete = total > 0 && checked === total;
    return { checked, total, percent, isComplete };
  };

  const getContinentStats = (continent) => {
    const countries = getCountriesInContinent(continent, "all");
    let totalRegions = 0;
    let checkedRegions = 0;

    countries.forEach((country) => {
      const stats = getCountryStats(country);
      totalRegions += stats.total;
      checkedRegions += stats.checked;
    });

    const percent = totalRegions > 0 ? Math.round((checkedRegions / totalRegions) * 100) : 0;
    const isComplete = totalRegions > 0 && checkedRegions === totalRegions;
    return { checkedRegions, totalRegions, percent, isComplete };
  };

  const updateVisitorMap = (focusContinent = null) => {
    if (!visitorMapEl || typeof L === "undefined") return;

    if (!visitorMap) {
      visitorMap = L.map("visitor-world-map", { scrollWheelZoom: false }).setView([20, 10], 2);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 18
      }).addTo(visitorMap);

      const allCoords = [];

      Object.entries(VISITOR_REGIONS_DATA).forEach(([country, info]) => {
        if (typeof info.lat !== "number" || typeof info.lng !== "number") return;
        const continent = info.continent || "Autres";

        allCoords.push([info.lat, info.lng]);
        const marker = L.circleMarker([info.lat, info.lng], {
          radius: 8,
          color: "#ffffff",
          weight: 2,
          opacity: 1,
          fillOpacity: 0.92
        }).addTo(visitorMap);

        marker.on("click", () => {
          activeContinent = continent;
          activeSubcontinent = "all";
          activeCountry = country;
          renderCountriesView(continent, "all");
          renderRegionsModal(continent, country);
        });

        visitorCountryMarkers[country] = { marker, continent, info };
      });

      if (allCoords.length > 0) {
        visitorMap.fitBounds(L.latLngBounds(allCoords), { padding: [20, 20], maxZoom: 3 });
      }
    }

    const continentCoords = [];

    Object.entries(visitorCountryMarkers).forEach(([country, { marker, continent, info }]) => {
      const stats = getCountryStats(country);
      const color = getProgressColor(stats.percent);
      const flag = info.flag || "🏳️";

      marker.setStyle({
        fillColor: color,
        radius: stats.percent > 0 ? 9 : 7
      });

      marker.bindTooltip(`${flag} ${country} : ${stats.percent}%`, { direction: "top" });

      if (focusContinent && continent === focusContinent) {
        continentCoords.push([info.lat, info.lng]);
      }
    });

    if (focusContinent && continentCoords.length > 0) {
      visitorMap.fitBounds(L.latLngBounds(continentCoords), { padding: [28, 28], maxZoom: 5 });
      if (visitorMapLabel) {
        visitorMapLabel.textContent = `Carte : ${focusContinent}`;
      }
    } else if (visitorMapLabel) {
      visitorMapLabel.textContent = "Carte : progression par pays (gris = 0 %, ambre = en cours, vert = 100 %)";
    }

    setTimeout(() => visitorMap.invalidateSize(), 0);
  };

  const saveState = () => {
    localStorage.setItem(storageKey, JSON.stringify(savedState));
    updateVisitorMap(activeContinent);
  };

  const closeRegionsModal = () => {
    activeCountry = null;
    modalBackdrop.hidden = true;
    modalBackdrop.innerHTML = "";
    document.body.classList.remove("modal-open");
  };

  const renderRegionsModal = (continent, country) => {
    const info = VISITOR_REGIONS_DATA[country];
    if (!continent || !country || !info) {
      closeRegionsModal();
      return;
    }

    const flag = info.flag || "🏳️";
    const regions = Array.isArray(info.regions) ? info.regions : [];
    const unit = info.unit || "régions";
    const stats = getCountryStats(country);

    modalBackdrop.hidden = false;
    document.body.classList.add("modal-open");

    modalBackdrop.innerHTML = `
      <div class="region-modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-country-title">
        <div class="region-modal-header">
          <div>
            <h3 id="modal-country-title">${flag} ${country}</h3>
            <p class="region-panel-sub">${stats.checked} / ${stats.total} ${unit} cochés (${stats.percent}%)</p>
          </div>
          <button type="button" class="region-close-btn" id="close-regions-modal" aria-label="Fermer">✕</button>
        </div>
        ${
          regions.length > 0
            ? `<div class="modal-bulk-actions">
                <button type="button" class="modal-bulk-btn" data-action="check-all">✓ Tout cocher</button>
                <button type="button" class="modal-bulk-btn" data-action="uncheck-all">✕ Tout décocher</button>
              </div>`
            : ""
        }
        <div class="region-modal-list">
          ${
            regions.length > 0
              ? regions
                  .map((region, idx) => {
                    const checked = savedState[country][idx] ? "checked" : "";
                    return `
                      <label class="region-check-item">
                        <input type="checkbox" data-idx="${idx}" ${checked}>
                        <span>${getRegionLabel(region)}</span>
                      </label>
                    `;
                  })
                  .join("")
              : `<p class="region-panel-sub">Aucune région enregistrée pour le moment dans regions.data.js.</p>`
          }
        </div>
      </div>
    `;

    modalBackdrop.querySelectorAll(".modal-bulk-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const shouldCheck = btn.dataset.action === "check-all";
        savedState[country] = savedState[country].map(() => shouldCheck);
        saveState();
        renderCountriesView(continent, activeSubcontinent);
        renderRegionsModal(continent, country);
      });
    });

    modalBackdrop.querySelectorAll(".region-modal-list input[type='checkbox']").forEach((input) => {
      input.addEventListener("change", () => {
        const idx = Number(input.getAttribute("data-idx"));
        savedState[country][idx] = input.checked;
        saveState();
        renderCountriesView(continent, activeSubcontinent);
        renderRegionsModal(continent, country);
      });
    });

    document.getElementById("close-regions-modal")?.addEventListener("click", closeRegionsModal);
  };

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeRegionsModal();
    }
  });

  const renderSubcontinentsBar = (continent) => {
    if (!subcontinentsPanel) return;

    const subcontinents = getSubcontinentsInContinent(continent);

    if (subcontinents.length <= 1) {
      subcontinentsPanel.hidden = true;
      subcontinentsPanel.innerHTML = "";
      return;
    }

    subcontinentsPanel.hidden = false;
    subcontinentsPanel.innerHTML = `
      <button
        type="button"
        class="filter-pill ${activeSubcontinent === "all" ? "is-active" : ""}"
        data-subcontinent="all"
      >
        Tous
      </button>
      ${subcontinents
        .map(
          (sub) => `
            <button
              type="button"
              class="filter-pill ${activeSubcontinent === sub ? "is-active" : ""}"
              data-subcontinent="${sub}"
            >
              ${sub}
            </button>
          `
        )
        .join("")}
    `;

    subcontinentsPanel.querySelectorAll("[data-subcontinent]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeSubcontinent = btn.getAttribute("data-subcontinent") || "all";
        renderCountriesView(continent, activeSubcontinent);
      });
    });
  };

  const renderCountriesView = (continent, subcontinent = "all") => {
    continentsGrid.hidden = true;
    countriesPanel.hidden = false;

    const emoji = continentEmojis[continent] || "🌐";
    const continentStats = getContinentStats(continent);

    renderSubcontinentsBar(continent);

    const countryNames = getCountriesInContinent(continent, subcontinent);

    countriesPanel.innerHTML = `
      <div class="countries-view-header">
        <button type="button" class="back-continents-btn" id="back-to-continents">
          ← Continents
        </button>
        <div class="countries-view-title">
          <h3>${emoji} ${continent}${subcontinent !== "all" ? ` — ${subcontinent}` : ""}</h3>
          <span class="region-panel-sub">${continentStats.percent}%</span>
        </div>
      </div>

      <div class="visitor-countries-multi-list">
        ${countryNames
          .map((country) => {
            const flag = VISITOR_REGIONS_DATA[country]?.flag || "🏳️";
            const stats = getCountryStats(country);

            return `
              <button
                type="button"
                class="visitor-bubble ${stats.isComplete ? "is-complete" : ""}"
                data-country="${country}"
              >
                <span>${flag} ${country}</span>
                <span class="visitor-bubble-percent">${stats.percent}%</span>
              </button>
            `;
          })
          .join("")}
      </div>
    `;

    document
      .getElementById("back-to-continents")
      ?.addEventListener("click", () => {
        activeContinent = null;
        activeSubcontinent = "all";
        closeRegionsModal();
        renderContinentsView();
      });

    countriesPanel.querySelectorAll(".visitor-bubble").forEach((btn) => {
      btn.addEventListener("click", () => {
        const country = btn.getAttribute("data-country");
        activeCountry = country;
        renderRegionsModal(continent, activeCountry);
      });
    });

    updateVisitorMap(continent);
  };

  const renderContinentsView = () => {
    countriesPanel.hidden = true;
    countriesPanel.innerHTML = "";
    if (subcontinentsPanel) {
      subcontinentsPanel.hidden = true;
      subcontinentsPanel.innerHTML = "";
    }
    continentsGrid.hidden = false;

    let completedContinents = 0;

    continentsGrid.innerHTML = continentNames
      .map((continent) => {
        const emoji = continentEmojis[continent] || "🌐";
        const stats = getContinentStats(continent);
        if (stats.isComplete) completedContinents += 1;

        return `
          <button
            type="button"
            class="visitor-bubble ${stats.isComplete ? "is-complete" : ""}"
            data-continent="${continent}"
          >
            <span>${emoji} ${continent}</span>
            <span class="visitor-bubble-percent">${stats.percent}%</span>
          </button>
        `;
      })
      .join("");

    if (visitorCounter) {
      visitorCounter.textContent =
        completedContinents > 0
          ? completedContinents === 1
            ? "1 continent à 100 %"
            : `${completedContinents} continents à 100 %`
          : "Progression mondiale";
    }

    continentsGrid.querySelectorAll(".visitor-bubble").forEach((btn) => {
      btn.addEventListener("click", () => {
        const continent = btn.getAttribute("data-continent");
        activeContinent = continent;
        activeSubcontinent = "all";
        renderCountriesView(activeContinent, activeSubcontinent);
      });
    });

    updateVisitorMap(null);
  };

  renderContinentsView();
});
