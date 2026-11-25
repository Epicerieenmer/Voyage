document.addEventListener("DOMContentLoaded", () => {
  const isMobileViewport = () => window.innerWidth <= 640;
  const isTabletOrMobileViewport = () => window.innerWidth <= 1024;

  const escapeAttr = (val) =>
    String(val ?? "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const normalizeText = (str) =>
    (str || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

  // 1. Repositionner le bouton Accueil dans l'en-tête de destination
  const stickyNavEl = document.querySelector(".sticky-nav");
  const headerBlockEl = document.querySelector(".destination-header-block");
  if (stickyNavEl && headerBlockEl) {
    headerBlockEl.insertBefore(stickyNavEl, headerBlockEl.firstChild);

    const eyebrowEl = headerBlockEl.querySelector(".destination-eyebrow");
    if (eyebrowEl) eyebrowEl.remove();

    const heroTitleEl = headerBlockEl.querySelector(".destination-hero-title");
    if (heroTitleEl) {
      heroTitleEl.innerHTML = heroTitleEl.innerHTML
        .replace(/guide\s+de\s+voyage\s*[:\-–—]?\s*/gi, "")
        .trim();
    }
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
                  .map((act) => {
                    const summaryText = act.summary || act.description || "";
                    const durationText = act.duration || "";
                    const departureText = act.departure || "";
                    const transportText = act.transport || "";
                    const priceText =
                      act.priceLabel || (act.price === 0 ? "Gratuit" : `~${act.price} €/p`);

                    return `
                      <label
                        class="check-item activity-item"
                        data-subplace="${escapeAttr(act.islandId)}"
                        data-subplace-label="${escapeAttr(act.islandLabel)}"
                        data-theme="${escapeAttr(tKey)}"
                        data-lat="${escapeAttr(act.lat)}"
                        data-lng="${escapeAttr(act.lng)}"
                        data-price="${escapeAttr(act.price)}"
                        data-transport="${escapeAttr(transportText)}"
                        data-duration="${escapeAttr(durationText)}"
                        data-departure="${escapeAttr(departureText)}"
                        data-summary="${escapeAttr(summaryText)}"
                      >
                        <input type="checkbox">
                        <div class="activity-content">
                          <span class="activity-title">${act.title}</span>
                          <div class="activity-details">
                            <p class="activity-summary">${summaryText || "Résumé non renseigné pour cette activité."}</p>
                            <div class="activity-specs">
                              ${durationText ? `<span class="activity-spec">⏱️ <strong>Temps :</strong> ${escapeAttr(durationText)}</span>` : ""}
                              ${departureText ? `<span class="activity-spec">🚩 <strong>Départ :</strong> ${escapeAttr(departureText)}</span>` : ""}
                              ${transportText ? `<span class="activity-spec">🧭 <strong>Accès :</strong> ${escapeAttr(transportText)}</span>` : ""}
                              <span class="activity-spec">💶 <strong>Budget :</strong> ${escapeAttr(priceText)}</span>
                            </div>
                          </div>
                          <div class="activity-meta">
                            <span class="activity-tag price-tag">${priceText}</span>
                            ${durationText ? `<span class="activity-tag duration-tag">⏱️ ${escapeAttr(durationText)}</span>` : ""}
                            ${transportText ? `<span class="activity-tag transport-tag">${escapeAttr(transportText)}</span>` : ""}
                          </div>
                        </div>
                      </label>
                    `;
                  })
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
  let focusActivityOnMap = () => {};
  let syncPanelShortcutsUI = () => {};
  let previewedActivityEl = null;

  const scrollItemIntoMobileComfort = (item) => {
    if (!isMobileViewport() || !item) return;
    const panelHeight = document.querySelector(".sticky-top-panel")?.offsetHeight || 0;
    const targetY = item.getBoundingClientRect().top + window.scrollY - panelHeight - 14;
    window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
  };

  // 3. Sauvegarde & logique à 2 clics sur les activités des pages destinations
  const pageKey = "checklist_" + window.location.pathname;
  const activityItems = Array.from(document.querySelectorAll(".activity-item"));
  const checkboxes = Array.from(document.querySelectorAll(".check-item input[type='checkbox']"));

  const persistCheckboxes = () => {
    localStorage.setItem(pageKey, JSON.stringify(checkboxes.map((cb) => cb.checked)));
  };

  const syncActivityVisualStates = () => {
    activityItems.forEach((item) => {
      const cb = item.querySelector("input[type='checkbox']");
      const isDone = Boolean(cb?.checked);
      item.classList.toggle("is-done", isDone);
      if (isDone) {
        item.classList.remove("is-preview");
        if (previewedActivityEl === item) {
          previewedActivityEl = null;
        }
      }
    });
  };

  if (checkboxes.length > 0) {
    const saved = JSON.parse(localStorage.getItem(pageKey) || "null");
    if (Array.isArray(saved)) {
      checkboxes.forEach((box, i) => {
        if (typeof saved[i] === "boolean") {
          box.checked = saved[i];
        }
      });
    }
    syncActivityVisualStates();

    activityItems.forEach((item) => {
      const box = item.querySelector("input[type='checkbox']");
      if (!box) return;

      box.addEventListener("change", (e) => {
        e.preventDefault();
        box.checked = item.classList.contains("is-done");
      });

      item.addEventListener("click", (e) => {
        if (e.target.closest(".delete-custom-poi-btn, .verify-poi-btn, .report-activity-btn")) return;
        e.preventDefault();
        e.stopPropagation();

        const isCurrentlyDone = Boolean(box.checked);
        const isCurrentlyPreview = item.classList.contains("is-preview");

        if (isCurrentlyDone) {
          box.checked = false;
          item.classList.remove("is-done", "is-preview");
          if (previewedActivityEl === item) previewedActivityEl = null;
          persistCheckboxes();
          syncMapWithFilters();
          updateFilterStatus();
          return;
        }

        if (!isCurrentlyPreview) {
          activityItems.forEach((other) => {
            if (other !== item) {
              other.classList.remove("is-preview");
            }
          });
          previewedActivityEl = item;
          item.classList.add("is-preview");
          focusActivityOnMap(item);
          scrollItemIntoMobileComfort(item);
        } else {
          item.classList.remove("is-preview");
          if (previewedActivityEl === item) previewedActivityEl = null;
          box.checked = true;
          item.classList.add("is-done");
          persistCheckboxes();
          syncMapWithFilters();
          updateFilterStatus();
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

  const refreshMapSize = (delay = 80) => {
    if (!map) return;
    setTimeout(() => {
      if (map) map.invalidateSize();
    }, delay);
  };

  if (realMapEl && typeof L !== "undefined") {
    const isPolynesiePage =
      window.location.pathname.includes("polynesie") ||
      document.body.getAttribute("data-place-name")?.toLowerCase().includes("polyn");

    if (isPolynesiePage) {
      defaultCenter = [-17.6797, -149.4068];
      defaultZoom = 6;
    }

    map = L.map("real-map", {
      scrollWheelZoom: false,
      tap: true
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

    refreshMapSize(120);
  }

  let resizeTimer = null;
  const handleViewportResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (map) map.invalidateSize();
    }, 160);
  };
  window.addEventListener("resize", handleViewportResize, { passive: true });
  window.addEventListener("orientationchange", handleViewportResize, { passive: true });

  focusActivityOnMap = (item) => {
    if (!map || !item) return;
    const lat = Number(item.getAttribute("data-lat"));
    const lng = Number(item.getAttribute("data-lng"));
    const title = item.querySelector(".activity-title")?.textContent?.trim() || "Activité";

    syncMapWithFilters();

    if (!Number.isNaN(lat) && !Number.isNaN(lng)) {
      const targetZoom = Math.max(map.getZoom() || 11, isTabletOrMobileViewport() ? 12 : 13);
      map.flyTo([lat, lng], targetZoom, { duration: 0.55 });
      if (mapLabelEl) {
        mapLabelEl.textContent = `Aperçu : ${title} (2e clic pour valider)`;
      }
      refreshMapSize(70);
    }
  };

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
        refreshMapSize(260);
      }
    });
    headerBar.appendChild(toggleBtn);
  }

  let activeState = "all";
  let activeSubplace = "all";
  let activeBudget = "all";
  let activeTheme = "all";

  let showMapInPanel = true;
  let showPriceInPanel = false;
  let showFiltersInPanel = false;
  let isPanelMinimized = false;

  if (stickyTopPanelEl && !stickyTopPanelEl.querySelector(".panel-shortcuts-bar")) {
    const mapBoxShortcutEl =
      stickyTopPanelEl.querySelector(".sticky-map-box") || document.querySelector(".sticky-map-box");
    const budgetBarShortcutEl =
      document.getElementById("budget-filter-bar") || document.querySelector(".budget-pills");
    const themeBarShortcutEl =
      document.getElementById("theme-filter-bar") || document.querySelector(".theme-pills");

    const shortcutsBar = document.createElement("div");
    shortcutsBar.className = "panel-shortcuts-bar";
    shortcutsBar.innerHTML = `
      <div class="panel-shortcuts-group">
        <button type="button" class="panel-shortcut-btn" data-shortcut="map">🗺️ Carte</button>
        <button type="button" class="panel-shortcut-btn" data-shortcut="price">💶 Prix</button>
        <button type="button" class="panel-shortcut-btn" data-shortcut="filters">🏷️ Filtres</button>
      </div>
      <button type="button" class="panel-collapse-btn" id="toggle-full-panel-btn" hidden>
        ⬆ Réduire
      </button>
    `;

    if (mapBoxShortcutEl && mapBoxShortcutEl.parentNode === stickyTopPanelEl) {
      stickyTopPanelEl.insertBefore(shortcutsBar, mapBoxShortcutEl);
    } else {
      stickyTopPanelEl.prepend(shortcutsBar);
    }

    const mapShortcutBtn = shortcutsBar.querySelector('[data-shortcut="map"]');
    const priceShortcutBtn = shortcutsBar.querySelector('[data-shortcut="price"]');
    const filtersShortcutBtn = shortcutsBar.querySelector('[data-shortcut="filters"]');
    const collapsePanelBtn = document.getElementById("toggle-full-panel-btn");

    syncPanelShortcutsUI = () => {
      const hasSelectedPlace = activeState !== "all";

      if (collapsePanelBtn) {
        collapsePanelBtn.hidden = !hasSelectedPlace;
        collapsePanelBtn.textContent = isPanelMinimized ? "⬇ Déplier" : "⬆ Réduire";
      }

      stickyTopPanelEl.classList.toggle("is-panel-minimized", hasSelectedPlace && isPanelMinimized);

      const hideDetails = hasSelectedPlace && isPanelMinimized;

      if (mapBoxShortcutEl) {
        const shouldShowMap = !hideDetails && showMapInPanel;
        mapBoxShortcutEl.hidden = !shouldShowMap;
        mapBoxShortcutEl.classList.toggle("is-collapsed", !shouldShowMap);
        if (mapShortcutBtn) {
          mapShortcutBtn.classList.toggle("is-active", showMapInPanel && !hideDetails);
        }
        if (shouldShowMap) {
          refreshMapSize(100);
        }
      }

      if (budgetBarShortcutEl) {
        const shouldShowPrice = !hideDetails && hasSelectedPlace && showPriceInPanel;
        budgetBarShortcutEl.hidden = !shouldShowPrice;
        if (priceShortcutBtn) {
          const hasBudget = activeBudget !== "all";
          priceShortcutBtn.classList.toggle("is-active", shouldShowPrice || hasBudget);
        }
      }

      if (themeBarShortcutEl) {
        const shouldShowFilters = !hideDetails && hasSelectedPlace && showFiltersInPanel;
        themeBarShortcutEl.hidden = !shouldShowFilters;
        if (filtersShortcutBtn) {
          const hasTheme = activeTheme !== "all";
          filtersShortcutBtn.classList.toggle("is-active", shouldShowFilters || hasTheme);
        }
      }
    };

    mapShortcutBtn?.addEventListener("click", () => {
      isPanelMinimized = false;
      showMapInPanel = !showMapInPanel;
      syncPanelShortcutsUI();
    });

    priceShortcutBtn?.addEventListener("click", () => {
      isPanelMinimized = false;
      showPriceInPanel = !showPriceInPanel;
      syncPanelShortcutsUI();
    });

    filtersShortcutBtn?.addEventListener("click", () => {
      isPanelMinimized = false;
      showFiltersInPanel = !showFiltersInPanel;
      syncPanelShortcutsUI();
    });

    collapsePanelBtn?.addEventListener("click", () => {
      isPanelMinimized = !isPanelMinimized;
      syncPanelShortcutsUI();
    });
  }

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
          radius: isTabletOrMobileViewport() ? 8 : 7,
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

      refreshMapSize(60);
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
          radius: isTabletOrMobileViewport() ? 8 : 7,
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
    let hasFocusedPreview = false;

    visibleActivities.forEach((item) => {
      const lat = Number(item.getAttribute("data-lat"));
      const lng = Number(item.getAttribute("data-lng"));
      if (Number.isNaN(lat) || Number.isNaN(lng)) return;

      const title = item.querySelector(".activity-title")?.textContent?.trim() || "Activité";
      const priceTag = item.querySelector(".price-tag")?.textContent?.trim() || "";
      const theme = item.getAttribute("data-theme") || "activite";
      const icon = themeIcons[theme] || "📍";
      const isChecked = Boolean(item.querySelector("input[type='checkbox']")?.checked);
      const isPreview = item.classList.contains("is-preview") && !isChecked;

      if (isPreview) hasFocusedPreview = true;

      actCoords.push([lat, lng]);
      allCoordsToFit.push([lat, lng]);

      const stateClass = isChecked ? "is-done" : isPreview ? "is-preview" : "";
      const divIcon = L.divIcon({
        className: "",
        html: `<div class="theme-pin-marker ${stateClass}">${icon}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });

      const marker = L.marker([lat, lng], { icon: divIcon })
        .bindTooltip(`${icon} ${title}${priceTag ? ` (${priceTag})` : ""}`, { direction: "top" })
        .addTo(activityMarkersLayer);

      marker.on("click", () => {
        item.click();
        const panelHeight = document.querySelector(".sticky-top-panel")?.offsetHeight || 0;
        const yOffset = panelHeight + (isMobileViewport() ? 16 : 24);
        const targetY = item.getBoundingClientRect().top + window.scrollY - yOffset;
        window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
      });
    });

    if (hasFocusedPreview) {
      refreshMapSize(60);
      return;
    }

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

    refreshMapSize(60);
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
        ${escapeAttr(allLabel)}
      </button>
      ${places
        .map(
          (p) => `
            <button type="button" class="filter-pill ${activeSubplace === p.id ? "is-active" : ""}" data-subplace="${escapeAttr(p.id)}">
              ${escapeAttr(p.label)}
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
      if (budgetBarEl) budgetBarEl.hidden = !hasSelectedPlace || !showPriceInPanel || isPanelMinimized;
      if (themeBarEl) themeBarEl.hidden = !hasSelectedPlace || !showFiltersInPanel || isPanelMinimized;

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

      syncPanelShortcutsUI();
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
        isPanelMinimized = false;
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
        isPanelMinimized = false;
        showMapInPanel = true;
        syncPanelShortcutsUI();
        map.flyTo([lat, lng], zoom, { duration: 0.7 });
        if (mapLabelEl && label) mapLabelEl.textContent = `Lieu : ${label}`;
        refreshMapSize(80);
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

  // 6. Bloc 1 ("Où voyages-tu ?") : Continent -> Sous-continent -> Pays (filtré sur ready: true)
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
    let activeTravelSubcontinent = null;
    let travelStep = "continents";

    const hasReadySheet = (entry) => Boolean(entry && entry.ready);

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
        if (!hasReadySheet(entry)) return;
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
        if (!hasReadySheet(entry)) return;
        if ((entry.continent || "Autres") === continent && entry.subcontinent && !seen.has(entry.subcontinent)) {
          seen.add(entry.subcontinent);
          list.push(entry.subcontinent);
        }
      });
      return list;
    };

    const getTravelCountries = (continent, subcontinent = null) => {
      return Object.entries(VISITOR_REGIONS_DATA)
        .filter(([, entry]) => {
          if (!hasReadySheet(entry)) return false;
          const matchContinent = (entry.continent || "Autres") === continent;
          if (!matchContinent) return false;
          if (!subcontinent) return true;
          return (entry.subcontinent || "Autres") === subcontinent;
        })
        .map(([name]) => name);
    };

    const setTravelPanelsVisibility = (step) => {
      const showContinents = step === "continents";
      const showSubcontinents = step === "subcontinents";
      const showCountries = step === "countries";

      whereTravelContinentsGrid.hidden = !showContinents;
      whereTravelContinentsGrid.style.display = showContinents ? "" : "none";

      if (whereTravelSubcontinentsPanel) {
        whereTravelSubcontinentsPanel.hidden = !showSubcontinents;
        whereTravelSubcontinentsPanel.style.display = showSubcontinents ? "" : "none";
        if (!showSubcontinents) whereTravelSubcontinentsPanel.innerHTML = "";
      }

      whereTravelCountriesPanel.hidden = !showCountries;
      whereTravelCountriesPanel.style.display = showCountries ? "" : "none";
      if (!showCountries) whereTravelCountriesPanel.innerHTML = "";
    };

    const renderWhereTravelView = () => {
      if (travelStep === "continents" || !activeTravelContinent) {
        travelStep = "continents";
        setTravelPanelsVisibility("continents");

        const continents = getTravelContinents();
        whereTravelContinentsGrid.innerHTML = continents
          .map((continent) => {
            const emoji = travelContinentEmojis[continent] || "🌐";
            const count = getTravelCountries(continent, null).length;

            return `
              <button
                type="button"
                class="visitor-bubble"
                data-travel-continent="${escapeAttr(continent)}"
              >
                <span>${emoji} ${escapeAttr(continent)}</span>
                <span class="visitor-bubble-percent">${count} pays</span>
              </button>
            `;
          })
          .join("");

        whereTravelContinentsGrid.querySelectorAll("[data-travel-continent]").forEach((btn) => {
          btn.addEventListener("click", () => {
            if (searchInputEl) {
              searchInputEl.value = "";
              const clearBtn = searchInputEl.parentElement?.querySelector(".search-clear-btn");
              if (clearBtn) clearBtn.hidden = true;
            }
            if (searchResultsEl) {
              searchResultsEl.hidden = true;
              searchResultsEl.style.display = "none";
              searchResultsEl.innerHTML = "";
            }
            const chosenContinent = btn.getAttribute("data-travel-continent");
            activeTravelContinent = chosenContinent;
            activeTravelSubcontinent = null;
            const subs = getTravelSubcontinents(chosenContinent);
            travelStep = subs.length > 0 ? "subcontinents" : "countries";
            renderWhereTravelView();
          });
        });
        return;
      }

      if (travelStep === "subcontinents") {
        setTravelPanelsVisibility("subcontinents");

        if (whereTravelSubcontinentsPanel) {
          const subs = getTravelSubcontinents(activeTravelContinent);
          const emoji = travelContinentEmojis[activeTravelContinent] || "🌐";
          whereTravelSubcontinentsPanel.innerHTML = `
            <div class="countries-view-header">
              <button type="button" class="back-continents-btn" id="travel-back-to-continents">
                ← Continents
              </button>
              <div class="countries-view-title">
                <h3>${emoji} ${escapeAttr(activeTravelContinent)}</h3>
                <span class="region-panel-sub">Choisis un sous-continent</span>
              </div>
            </div>
            <div class="visitor-countries-multi-list">
              ${subs
                .map((sub) => {
                  const subCount = getTravelCountries(activeTravelContinent, sub).length;
                  return `
                    <button
                      type="button"
                      class="visitor-bubble"
                      data-travel-sub="${escapeAttr(sub)}"
                    >
                      <span>${escapeAttr(sub)}</span>
                      <span class="visitor-bubble-percent">${subCount} pays</span>
                    </button>
                  `;
                })
                .join("")}
            </div>
          `;

          document.getElementById("travel-back-to-continents")?.addEventListener("click", () => {
            activeTravelContinent = null;
            activeTravelSubcontinent = null;
            travelStep = "continents";
            renderWhereTravelView();
          });

          whereTravelSubcontinentsPanel.querySelectorAll("[data-travel-sub]").forEach((btn) => {
            btn.addEventListener("click", () => {
              activeTravelSubcontinent = btn.getAttribute("data-travel-sub");
              travelStep = "countries";
              renderWhereTravelView();
            });
          });
        }
        return;
      }

      setTravelPanelsVisibility("countries");

      const emoji = travelContinentEmojis[activeTravelContinent] || "🌐";
      const countries = getTravelCountries(activeTravelContinent, activeTravelSubcontinent);
      const hasSubs = getTravelSubcontinents(activeTravelContinent).length > 0;

      whereTravelCountriesPanel.innerHTML = `
        <div class="countries-view-header">
          <button type="button" class="back-continents-btn" id="travel-back-from-countries">
            ${hasSubs && activeTravelSubcontinent ? "← Sous-continents" : "← Continents"}
          </button>
          <div class="countries-view-title">
            <h3>${emoji} ${escapeAttr(activeTravelContinent)}${activeTravelSubcontinent ? ` — ${escapeAttr(activeTravelSubcontinent)}` : ""}</h3>
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
                  data-travel-country="${escapeAttr(country)}"
                >
                  <span>${flag} ${escapeAttr(country)}</span>
                  <span class="visitor-bubble-percent">→</span>
                </button>
              `;
            })
            .join("")}
        </div>
      `;

      document.getElementById("travel-back-from-countries")?.addEventListener("click", () => {
        if (hasSubs && activeTravelSubcontinent) {
          activeTravelSubcontinent = null;
          travelStep = "subcontinents";
        } else {
          activeTravelContinent = null;
          activeTravelSubcontinent = null;
          travelStep = "continents";
        }
        renderWhereTravelView();
      });

      whereTravelCountriesPanel.querySelectorAll("[data-travel-country]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const chosen = btn.getAttribute("data-travel-country");
          openCountryDestination(chosen);
        });
      });
    };

    if (searchInputEl && searchResultsEl) {
      let clearBtn = searchInputEl.parentElement?.querySelector(".search-clear-btn");
      if (!clearBtn && searchInputEl.parentElement) {
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
        searchResultsEl.style.display = "none";
        searchResultsEl.innerHTML = "";
        if (clearBtn) clearBtn.hidden = true;
        renderWhereTravelView();
      };

      const renderSearchResults = (rawQuery) => {
        if (clearBtn) clearBtn.hidden = !rawQuery;
        const query = normalizeText(rawQuery);

        if (!query) {
          restoreTravelView();
          return;
        }

        const matches = Object.entries(VISITOR_REGIONS_DATA)
          .filter(([country, entry]) => {
            if (!hasReadySheet(entry)) return false;
            const hay = normalizeText(
              `${country} ${entry.continent || ""} ${entry.subcontinent || ""}`
            );
            return hay.includes(query);
          })
          .slice(0, 12);

        whereTravelContinentsGrid.hidden = true;
        whereTravelContinentsGrid.style.display = "none";
        whereTravelCountriesPanel.hidden = true;
        whereTravelCountriesPanel.style.display = "none";
        if (whereTravelSubcontinentsPanel) {
          whereTravelSubcontinentsPanel.hidden = true;
          whereTravelSubcontinentsPanel.style.display = "none";
        }

        searchResultsEl.hidden = false;
        searchResultsEl.style.display = "";

        if (matches.length === 0) {
          searchResultsEl.innerHTML = `
            <p class="search-empty-msg">Aucune destination trouvée pour « ${escapeAttr(rawQuery)} ».</p>
          `;
          return;
        }

        searchResultsEl.innerHTML = matches
          .map(([country, entry]) => {
            const flag = entry.flag || "🏳️";
            const sub = entry.subcontinent || entry.continent || "";
            return `
              <button
                type="button"
                class="visitor-bubble"
                data-search-country="${escapeAttr(country)}"
              >
                <span>${flag} ${escapeAttr(country)}${sub ? ` · <small style="opacity:.72">${escapeAttr(sub)}</small>` : ""}</span>
                <span class="visitor-bubble-percent">→</span>
              </button>
            `;
          })
          .join("");

        searchResultsEl.querySelectorAll("[data-search-country]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const chosen = btn.getAttribute("data-search-country");
            openCountryDestination(chosen);
          });
        });
      };

      searchInputEl.addEventListener("input", (e) => {
        renderSearchResults(e.target.value);
      });

      clearBtn?.addEventListener("click", () => {
        searchInputEl.value = "";
        restoreTravelView();
        searchInputEl.focus();
      });
    }

    renderWhereTravelView();
  }

  // 7. Bloc 2 ("Et toi") : Continent -> Sous-continent -> Pays + carte + modale à cocher (tout affiché)
  const etToiMapEl = document.getElementById("visitor-world-map");
  const etToiMapLabelEl = document.getElementById("visitor-map-label");
  const etToiContinentsGrid = document.getElementById("visitor-continents-grid");
  const etToiSubcontinentsPanel = document.getElementById("visitor-subcontinents-panel");
  const etToiCountriesPanel = document.getElementById("visitor-countries-panel");
  const etToiCounterEl = document.getElementById("visitor-counter");

  const etToiModalBackdrop = document.getElementById("region-modal-backdrop");
  const etToiModalTitle = document.getElementById("region-modal-title");
  const etToiModalSubtitle = document.getElementById("region-modal-subtitle");
  const etToiModalList = document.getElementById("region-modal-list");
  const etToiModalClose = document.getElementById("region-modal-close");
  const etToiSelectAllBtn = document.getElementById("modal-select-all");
  const etToiClearAllBtn = document.getElementById("modal-clear-all");

  if (typeof VISITOR_REGIONS_DATA !== "undefined" && (etToiMapEl || etToiCountriesPanel)) {
    const etToiStorageKey = "et_toi_visited_places_v1";

    let savedPlaces = {};
    try {
      savedPlaces = JSON.parse(localStorage.getItem(etToiStorageKey) || "{}");
    } catch (_) {
      savedPlaces = {};
    }

    const saveEtToiPlaces = () => {
      try {
        localStorage.setItem(etToiStorageKey, JSON.stringify(savedPlaces));
      } catch (_) {}
    };

    const extractCountryPlaces = (countryName, entry) => {
      if (!entry) return [{ id: `${countryName}__main`, label: countryName }];
      const candidates = entry.regions || entry.places || entry.states || entry.islands || entry.items;
      if (Array.isArray(candidates) && candidates.length > 0) {
        return candidates
          .map((item, index) => {
            if (typeof item === "string") {
              return { id: `${countryName}__${index}__${item}`, label: item };
            }
            const label = item.label || item.name || item.title || `${countryName} ${index + 1}`;
            return {
              id: item.id || `${countryName}__${index}__${label}`,
              label
            };
          })
          .filter((p) => Boolean(p.label));
      }
      return [{ id: `${countryName}__main`, label: countryName }];
    };

    const getCountryCoords = (entry) => {
      if (!entry) return null;
      const lat = Number(entry.lat ?? entry.latitude);
      const lng = Number(entry.lng ?? entry.lon ?? entry.longitude);
      if (Number.isNaN(lat) || Number.isNaN(lng)) return null;
      return [lat, lng];
    };

    const getCountryStats = (countryName, entry) => {
      const places = extractCountryPlaces(countryName, entry);
      const total = places.length;
      const checked = places.filter((p) => Boolean(savedPlaces[p.id])).length;
      const pct = total > 0 ? Math.round((checked / total) * 100) : 0;
      return { places, total, checked, pct };
    };

    const updateGlobalEtToiStats = () => {
      const entries = Object.entries(VISITOR_REGIONS_DATA);
      let totalPlaces = 0;
      let totalChecked = 0;
      let countriesCompleted = 0;

      entries.forEach(([countryName, entry]) => {
        const { total, checked, pct } = getCountryStats(countryName, entry);
        totalPlaces += total;
        totalChecked += checked;
        if (total > 0 && pct === 100) countriesCompleted += 1;
      });

      const globalPct = totalPlaces > 0 ? Math.round((totalChecked / totalPlaces) * 100) : 0;
      if (etToiCounterEl) {
        etToiCounterEl.textContent = `${totalChecked} / ${totalPlaces} lieux (${globalPct}%) · ${countriesCompleted} pays à 100 %`;
      }
    };

    let etToiMap = null;
    let etToiMarkersLayer = null;

    if (etToiMapEl && typeof L !== "undefined") {
      etToiMap = L.map("visitor-world-map", {
        scrollWheelZoom: false,
        tap: true
      }).setView([20, 0], 2);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 18
      }).addTo(etToiMap);

      etToiMarkersLayer = L.layerGroup().addTo(etToiMap);
    }

    let activeModalCountry = null;
    let activeModalEntry = null;
    let activeEtToiContinent = null;
    let activeEtToiSubcontinent = null;
    let etToiStep = "continents";

    const getEtToiContinents = () => {
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

    const getEtToiSubcontinents = (continent) => {
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

    const getMapEntriesForCurrentState = () => {
      return Object.entries(VISITOR_REGIONS_DATA).filter(([, entry]) => {
        const cont = entry.continent || "Autres";
        if (activeEtToiContinent && cont !== activeEtToiContinent) return false;
        if (activeEtToiSubcontinent && (entry.subcontinent || "Autres") !== activeEtToiSubcontinent) {
          return false;
        }
        return true;
      });
    };

    const syncEtToiMap = (entriesList, focusCountry = null) => {
      if (!etToiMap || !etToiMarkersLayer) return;
      etToiMarkersLayer.clearLayers();

      const bounds = [];
      let focusedCoord = null;

      entriesList.forEach(([countryName, entry]) => {
        const coords = getCountryCoords(entry);
        if (!coords) return;

        const { checked, total, pct } = getCountryStats(countryName, entry);
        const flag = entry.flag || "📍";
        const isComplete = pct === 100 && total > 0;
        const isPartial = checked > 0 && !isComplete;
        const isFocused = focusCountry === countryName;

        const fillColor = isFocused
          ? "#f97316"
          : isComplete
            ? "#16a34a"
            : isPartial
              ? "#0284c7"
              : "#64748b";

        const marker = L.circleMarker(coords, {
          radius: isFocused ? 10 : isTabletOrMobileViewport() ? 8 : 7,
          fillColor,
          color: "#ffffff",
          weight: 2,
          opacity: 1,
          fillOpacity: 0.94
        })
          .bindTooltip(`${flag} ${countryName} (${checked}/${total} · ${pct}%)`, { direction: "top" })
          .addTo(etToiMarkersLayer);

        marker.on("click", () => {
          const cont = entry.continent || "Autres";
          activeEtToiContinent = cont;
          activeEtToiSubcontinent = entry.subcontinent || null;
          etToiStep = "countries";
          openEtToiModalForCountry(countryName, entry);
        });

        bounds.push(coords);
        if (isFocused) {
          focusedCoord = coords;
        }
      });

      if (etToiMapLabelEl) {
        if (focusCountry) {
          etToiMapLabelEl.textContent = `Carte : ${focusCountry} — coche ses lieux dans la fenêtre`;
        } else if (activeEtToiSubcontinent) {
          etToiMapLabelEl.textContent = `Carte : ${activeEtToiContinent} — ${activeEtToiSubcontinent}`;
        } else if (activeEtToiContinent) {
          etToiMapLabelEl.textContent = `Carte : ${activeEtToiContinent}`;
        } else {
          etToiMapLabelEl.textContent = "Carte : progression par pays (gris = 0 %, bleu = en cours, vert = 100 %)";
        }
      }

      if (focusedCoord) {
        etToiMap.flyTo(focusedCoord, Math.max(etToiMap.getZoom() || 4, 5), { duration: 0.55 });
      } else if (bounds.length === 1) {
        etToiMap.setView(bounds[0], 5);
      } else if (bounds.length > 1) {
        etToiMap.fitBounds(bounds, { padding: [24, 24], maxZoom: 5 });
      }

      setTimeout(() => {
        if (etToiMap) etToiMap.invalidateSize();
      }, 70);
    };

    const closeEtToiModal = () => {
      if (!etToiModalBackdrop) return;
      etToiModalBackdrop.hidden = true;
      etToiModalBackdrop.classList.remove("is-open");
      document.body.classList.remove("modal-open");
      activeModalCountry = null;
      activeModalEntry = null;
      renderEtToiView();
    };

    const openEtToiModalForCountry = (countryName, entry) => {
      activeModalCountry = countryName;
      activeModalEntry = entry;

      const { places, checked, total, pct } = getCountryStats(countryName, entry);
      const flag = entry?.flag || "🏳️";

      if (etToiModalTitle) {
        etToiModalTitle.textContent = `${flag} ${countryName}`;
      }
      if (etToiModalSubtitle) {
        etToiModalSubtitle.textContent = `${checked} / ${total} lieu(x) coché(s) (${pct}%)`;
      }

      if (etToiModalList) {
        etToiModalList.innerHTML = places
          .map((place) => {
            const isChecked = Boolean(savedPlaces[place.id]);
            return `
              <label class="region-check-item">
                <input
                  type="checkbox"
                  data-place-id="${escapeAttr(place.id)}"
                  ${isChecked ? "checked" : ""}
                >
                <span>${escapeAttr(place.label)}</span>
              </label>
            `;
          })
          .join("");

        etToiModalList.querySelectorAll("input[type='checkbox']").forEach((cb) => {
          cb.addEventListener("change", () => {
            const placeId = cb.getAttribute("data-place-id");
            if (!placeId) return;
            savedPlaces[placeId] = cb.checked;
            saveEtToiPlaces();

            const updated = getCountryStats(activeModalCountry, activeModalEntry);
            if (etToiModalSubtitle) {
              etToiModalSubtitle.textContent = `${updated.checked} / ${updated.total} lieu(x) coché(s) (${updated.pct}%)`;
            }
            updateGlobalEtToiStats();
            renderEtToiView(activeModalCountry);
          });
        });
      }

      if (etToiModalBackdrop) {
        etToiModalBackdrop.hidden = false;
        etToiModalBackdrop.classList.add("is-open");
        document.body.classList.add("modal-open");
      }

      renderEtToiView(countryName);
    };

    if (etToiModalClose) {
      etToiModalClose.addEventListener("click", closeEtToiModal);
    }
    if (etToiModalBackdrop) {
      etToiModalBackdrop.addEventListener("click", (e) => {
        if (e.target === etToiModalBackdrop) {
          closeEtToiModal();
        }
      });
    }
    if (etToiSelectAllBtn) {
      etToiSelectAllBtn.addEventListener("click", () => {
        if (!activeModalCountry || !activeModalEntry) return;
        const { places } = getCountryStats(activeModalCountry, activeModalEntry);
        places.forEach((p) => {
          savedPlaces[p.id] = true;
        });
        saveEtToiPlaces();
        openEtToiModalForCountry(activeModalCountry, activeModalEntry);
        updateGlobalEtToiStats();
      });
    }
    if (etToiClearAllBtn) {
      etToiClearAllBtn.addEventListener("click", () => {
        if (!activeModalCountry || !activeModalEntry) return;
        const { places } = getCountryStats(activeModalCountry, activeModalEntry);
        places.forEach((p) => {
          delete savedPlaces[p.id];
        });
        saveEtToiPlaces();
        openEtToiModalForCountry(activeModalCountry, activeModalEntry);
        updateGlobalEtToiStats();
      });
    }

    const setEtToiPanelsVisibility = (step) => {
      const showContinents = step === "continents";
      const showSubcontinents = step === "subcontinents";
      const showCountries = step === "countries";

      if (etToiContinentsGrid) {
        etToiContinentsGrid.hidden = !showContinents;
        etToiContinentsGrid.style.display = showContinents ? "" : "none";
      }
      if (etToiSubcontinentsPanel) {
        etToiSubcontinentsPanel.hidden = !showSubcontinents;
        etToiSubcontinentsPanel.style.display = showSubcontinents ? "" : "none";
        if (!showSubcontinents) etToiSubcontinentsPanel.innerHTML = "";
      }
      if (etToiCountriesPanel) {
        etToiCountriesPanel.hidden = !showCountries;
        etToiCountriesPanel.style.display = showCountries ? "" : "none";
        if (!showCountries) etToiCountriesPanel.innerHTML = "";
      }
    };

    const renderEtToiView = (focusCountry = null) => {
      if (etToiStep === "continents" || !activeEtToiContinent) {
        etToiStep = "continents";
        setEtToiPanelsVisibility("continents");

        if (etToiContinentsGrid) {
          const continents = getEtToiContinents();
          etToiContinentsGrid.innerHTML = continents
            .map((continent) => {
              const emoji = travelContinentEmojis[continent] || "🌐";
              const count = Object.values(VISITOR_REGIONS_DATA).filter(
                (e) => (e.continent || "Autres") === continent
              ).length;
              return `
                <button
                  type="button"
                  class="visitor-bubble"
                  data-et-continent="${escapeAttr(continent)}"
                >
                  <span>${emoji} ${escapeAttr(continent)}</span>
                  <span class="visitor-bubble-percent">${count} pays</span>
                </button>
              `;
            })
            .join("");

          etToiContinentsGrid.querySelectorAll("[data-et-continent]").forEach((btn) => {
            btn.addEventListener("click", () => {
              const chosenContinent = btn.getAttribute("data-et-continent");
              activeEtToiContinent = chosenContinent;
              activeEtToiSubcontinent = null;
              const subs = getEtToiSubcontinents(chosenContinent);
              etToiStep = subs.length > 0 ? "subcontinents" : "countries";
              renderEtToiView();
            });
          });
        }
        syncEtToiMap(getMapEntriesForCurrentState(), focusCountry);
        return;
      }

      if (etToiStep === "subcontinents") {
        setEtToiPanelsVisibility("subcontinents");

        if (etToiSubcontinentsPanel) {
          const subs = getEtToiSubcontinents(activeEtToiContinent);
          const emoji = travelContinentEmojis[activeEtToiContinent] || "🌐";
          etToiSubcontinentsPanel.innerHTML = `
            <div class="countries-view-header">
              <button type="button" class="back-continents-btn" id="et-back-to-continents">
                ← Continents
              </button>
              <div class="countries-view-title">
                <h3>${emoji} ${escapeAttr(activeEtToiContinent)}</h3>
                <span class="region-panel-sub">Choisis un sous-continent</span>
              </div>
            </div>
            <div class="visitor-countries-multi-list">
              ${subs
                .map((sub) => {
                  const subCount = Object.values(VISITOR_REGIONS_DATA).filter(
                    (e) => (e.continent || "Autres") === activeEtToiContinent && e.subcontinent === sub
                  ).length;
                  return `
                    <button
                      type="button"
                      class="visitor-bubble"
                      data-et-sub="${escapeAttr(sub)}"
                    >
                      <span>${escapeAttr(sub)}</span>
                      <span class="visitor-bubble-percent">${subCount} pays</span>
                    </button>
                  `;
                })
                .join("")}
            </div>
          `;

          document.getElementById("et-back-to-continents")?.addEventListener("click", () => {
            activeEtToiContinent = null;
            activeEtToiSubcontinent = null;
            etToiStep = "continents";
            renderEtToiView();
          });

          etToiSubcontinentsPanel.querySelectorAll("[data-et-sub]").forEach((btn) => {
            btn.addEventListener("click", () => {
              activeEtToiSubcontinent = btn.getAttribute("data-et-sub");
              etToiStep = "countries";
              renderEtToiView();
            });
          });
        }
        syncEtToiMap(getMapEntriesForCurrentState(), focusCountry);
        return;
      }

      setEtToiPanelsVisibility("countries");

      const entries = getMapEntriesForCurrentState();
      const emoji = travelContinentEmojis[activeEtToiContinent] || "🌐";
      const hasSubs = getEtToiSubcontinents(activeEtToiContinent).length > 0;

      if (etToiCountriesPanel) {
        etToiCountriesPanel.innerHTML = `
          <div class="countries-view-header">
            <button type="button" class="back-continents-btn" id="et-back-from-countries">
              ${hasSubs && activeEtToiSubcontinent ? "← Sous-continents" : "← Continents"}
            </button>
            <div class="countries-view-title">
              <h3>${emoji} ${escapeAttr(activeEtToiContinent)}${activeEtToiSubcontinent ? ` — ${escapeAttr(activeEtToiSubcontinent)}` : ""}</h3>
              <span class="region-panel-sub">Clique sur un pays pour cocher ses lieux</span>
            </div>
          </div>
          <div class="visitor-countries-multi-list">
            ${entries
              .map(([countryName, entry]) => {
                const { checked, total, pct } = getCountryStats(countryName, entry);
                const flag = entry.flag || "🏳️";
                const isComplete = pct === 100 && total > 0;
                const isPartial = checked > 0 && !isComplete;
                const isFocused = focusCountry === countryName;

                return `
                  <button
                    type="button"
                    class="visitor-bubble ${isComplete ? "is-complete" : ""} ${isPartial ? "is-partial" : ""} ${isFocused ? "is-active" : ""}"
                    data-et-toi-country="${escapeAttr(countryName)}"
                  >
                    <span>${flag} ${escapeAttr(countryName)}</span>
                    <span class="visitor-bubble-percent">${checked}/${total} · ${pct}%</span>
                  </button>
                `;
              })
              .join("")}
          </div>
        `;

        document.getElementById("et-back-from-countries")?.addEventListener("click", () => {
          if (hasSubs && activeEtToiSubcontinent) {
            activeEtToiSubcontinent = null;
            etToiStep = "subcontinents";
          } else {
            activeEtToiContinent = null;
            activeEtToiSubcontinent = null;
            etToiStep = "continents";
          }
          renderEtToiView();
        });

        etToiCountriesPanel.querySelectorAll("[data-et-toi-country]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const cName = btn.getAttribute("data-et-toi-country");
            const cEntry = VISITOR_REGIONS_DATA[cName];
            if (cName && cEntry) {
              openEtToiModalForCountry(cName, cEntry);
            }
          });
        });
      }

      syncEtToiMap(entries, focusCountry);
    };

    window.addEventListener(
      "resize",
      () => {
        if (etToiMap) {
          setTimeout(() => etToiMap.invalidateSize(), 160);
        }
      },
      { passive: true }
    );
    window.addEventListener(
      "orientationchange",
      () => {
        if (etToiMap) {
          setTimeout(() => etToiMap.invalidateSize(), 180);
        }
      },
      { passive: true }
    );

    updateGlobalEtToiStats();
    renderEtToiView();
  }

  // --- 8. Ajout depuis la carte, validation (3/3), masquage croix si vérifié & signalement masqué ---
  const REPORT_WEBHOOK_URL = "";

  const reportsStorageKey = "admin_poi_reports_v1";
  let adminReports = [];
  try {
    adminReports = JSON.parse(localStorage.getItem(reportsStorageKey) || "[]");
  } catch (_) {
    adminReports = [];
  }

  const persistAdminReports = () => {
    try {
      localStorage.setItem(reportsStorageKey, JSON.stringify(adminReports));
    } catch (_) {}
  };

  const submitActivityMessage = async (reportPayload) => {
    adminReports.unshift(reportPayload);
    persistAdminReports();

    if (REPORT_WEBHOOK_URL) {
      try {
        const res = await fetch(REPORT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reportPayload)
        });
        if (res.ok) {
          return { sent: true };
        }
      } catch (_) {}
    }

    return { sent: false };
  };

  let reportModalBackdrop = document.getElementById("report-poi-modal-backdrop");
  if (!reportModalBackdrop) {
    reportModalBackdrop = document.createElement("div");
    reportModalBackdrop.id = "report-poi-modal-backdrop";
    reportModalBackdrop.className = "region-modal-backdrop";
    reportModalBackdrop.hidden = true;
    reportModalBackdrop.innerHTML = `
      <div class="region-modal-card poi-modal-card report-modal-card" role="dialog" aria-modal="true" aria-labelledby="report-poi-title">
        <div class="region-modal-header">
          <div>
            <h3 id="report-poi-title">🚩 Signaler un lieu ou une activité</h3>
            <p class="region-panel-sub" id="report-poi-target">—</p>
          </div>
          <button type="button" class="region-close-btn" id="report-poi-close" aria-label="Fermer">✕</button>
        </div>
        <form id="report-poi-form" class="poi-form">
          <label class="poi-field">
            <span>Ton message *</span>
            <textarea
              id="report-poi-message"
              rows="3"
              required
              placeholder="Ex. Lieu fermé, accès modifié, erreur de tarif ou de coordonnées..."
            ></textarea>
          </label>
          <p class="report-modal-feedback" id="report-poi-feedback" hidden></p>
          <div class="poi-actions">
            <button type="button" class="modal-bulk-btn" id="report-poi-cancel">Annuler</button>
            <button type="submit" class="poi-submit-btn report-submit-btn" id="report-poi-submit">Envoyer</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(reportModalBackdrop);
  }

  const reportTargetEl = document.getElementById("report-poi-target");
  const reportForm = document.getElementById("report-poi-form");
  const reportMessageInput = document.getElementById("report-poi-message");
  const reportFeedbackEl = document.getElementById("report-poi-feedback");
  const reportSubmitBtn = document.getElementById("report-poi-submit");

  let activeReportContext = null;

  const closeReportModal = () => {
    reportModalBackdrop.hidden = true;
    reportModalBackdrop.classList.remove("is-open");
    document.body.classList.remove("modal-open");
    activeReportContext = null;
    if (reportFeedbackEl) {
      reportFeedbackEl.hidden = true;
      reportFeedbackEl.textContent = "";
    }
  };

  document.getElementById("report-poi-close")?.addEventListener("click", closeReportModal);
  document.getElementById("report-poi-cancel")?.addEventListener("click", closeReportModal);
  reportModalBackdrop.addEventListener("click", (e) => {
    if (e.target === reportModalBackdrop) closeReportModal();
  });

  reportForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!activeReportContext) return;

    const cleanMessage = reportMessageInput?.value?.trim() || "";
    if (!cleanMessage) {
      if (reportFeedbackEl) {
        reportFeedbackEl.textContent = "Merci d'écrire un message avant d'envoyer.";
        reportFeedbackEl.hidden = false;
      }
      return;
    }

    if (reportSubmitBtn) reportSubmitBtn.disabled = true;

    const { btn, metaInfo } = activeReportContext;
    const payload = {
      id: "msg_" + Date.now(),
      createdAt: new Date().toISOString(),
      page: window.location.pathname,
      activityId: metaInfo.activityId || null,
      customId: metaInfo.customId || null,
      activityTitle: metaInfo.title,
      lat: metaInfo.lat ?? null,
      lng: metaInfo.lng ?? null,
      confirmations: metaInfo.confirmations ?? null,
      message: cleanMessage
    };

    const result = await submitActivityMessage(payload);

    if (btn) {
      btn.classList.add("is-reported");
      btn.textContent = "🚩 Envoyé";
    }

    if (reportFeedbackEl) {
      reportFeedbackEl.textContent = result.sent
        ? "✓ Merci, ton message a bien été envoyé."
        : "✓ Message enregistré en local (ajoute REPORT_WEBHOOK_URL pour l'envoi distant).";
      reportFeedbackEl.hidden = false;
    }

    if (reportSubmitBtn) reportSubmitBtn.disabled = false;

    setTimeout(() => {
      closeReportModal();
    }, 900);
  });

  const handleReportButtonClick = (e, metaInfo) => {
    e.preventDefault();
    e.stopPropagation();

    activeReportContext = {
      btn: e.currentTarget,
      metaInfo
    };

    if (reportTargetEl) {
      reportTargetEl.textContent = `Concernant : ${metaInfo.title}`;
    }
    if (reportMessageInput) {
      reportMessageInput.value = "";
    }
    if (reportFeedbackEl) {
      reportFeedbackEl.hidden = true;
      reportFeedbackEl.textContent = "";
    }

    reportModalBackdrop.hidden = false;
    reportModalBackdrop.classList.add("is-open");
    document.body.classList.add("modal-open");
    setTimeout(() => reportMessageInput?.focus(), 50);
  };

  document.querySelectorAll(".activity-item:not(.is-user-added)").forEach((item, idx) => {
    const contentEl = item.querySelector(".activity-content");
    const titleEl = item.querySelector(".activity-title");
    if (!contentEl || !titleEl || item.querySelector(".report-activity-btn")) return;

    const activityId =
      item.getAttribute("data-activity-id") ||
      `page_act_${idx}_${normalizeText(titleEl.textContent).slice(0, 24)}`;
    item.setAttribute("data-activity-id", activityId);

    let titleRow = item.querySelector(".activity-title-row");
    if (!titleRow) {
      titleRow = document.createElement("div");
      titleRow.className = "activity-title-row";
      titleEl.parentNode.insertBefore(titleRow, titleEl);
      titleRow.appendChild(titleEl);
    }

    let actionsBox = titleRow.querySelector(".poi-item-actions");
    if (!actionsBox) {
      actionsBox = document.createElement("div");
      actionsBox.className = "poi-item-actions";
      titleRow.appendChild(actionsBox);
    }

    const reportBtn = document.createElement("button");
    reportBtn.type = "button";
    reportBtn.className = "report-activity-btn";
    reportBtn.title = "Envoyer un message sur cette activité";
    reportBtn.textContent = "🚩 Signaler";
    actionsBox.appendChild(reportBtn);

    reportBtn.addEventListener("click", (e) => {
      handleReportButtonClick(e, {
        activityId,
        title: titleEl.textContent.trim(),
        lat: item.getAttribute("data-lat"),
        lng: item.getAttribute("data-lng")
      });
    });
  });

  if (map && typeof L !== "undefined" && destinationSections.length > 0) {
    const customActivitiesKey = "custom_activities_" + window.location.pathname;
    const confirmationsKey = "poi_confirmed_ids_" + window.location.pathname;
    const REQUIRED_CONFIRMATIONS = 3;

    let isAddPinMode = false;
    let pendingCoords = null;

    let customActivities = [];
    try {
      customActivities = JSON.parse(localStorage.getItem(customActivitiesKey) || "[]");
    } catch (_) {
      customActivities = [];
    }

    let confirmedByMe = [];
    try {
      confirmedByMe = JSON.parse(localStorage.getItem(confirmationsKey) || "[]");
    } catch (_) {
      confirmedByMe = [];
    }

    const persistCustomActivities = () => {
      try {
        localStorage.setItem(customActivitiesKey, JSON.stringify(customActivities));
      } catch (_) {}
    };

    const persistConfirmedByMe = () => {
      try {
        localStorage.setItem(confirmationsKey, JSON.stringify(confirmedByMe));
      } catch (_) {}
    };

    const getVerificationMeta = (act) => {
      const count = Math.max(0, Number(act.confirmations) || 0);
      const isVerified = count >= REQUIRED_CONFIRMATIONS;
      return {
        count,
        isVerified,
        label: isVerified
          ? `✓ Vérifié (${count}/${REQUIRED_CONFIRMATIONS})`
          : `🔍 À vérifier (${count}/${REQUIRED_CONFIRMATIONS})`
      };
    };

    const syncDeleteButtonVisibility = (labelEl, isVerified) => {
      const delBtn = labelEl.querySelector(".delete-custom-poi-btn");
      if (delBtn) {
        delBtn.hidden = Boolean(isVerified);
      }
    };

    let addModalBackdrop = document.getElementById("add-poi-modal-backdrop");
    if (!addModalBackdrop) {
      addModalBackdrop = document.createElement("div");
      addModalBackdrop.id = "add-poi-modal-backdrop";
      addModalBackdrop.className = "region-modal-backdrop";
      addModalBackdrop.hidden = true;
      addModalBackdrop.innerHTML = `
        <div class="region-modal-card poi-modal-card" role="dialog" aria-modal="true" aria-labelledby="add-poi-title">
          <div class="region-modal-header">
            <div>
              <h3 id="add-poi-title">➕ Ajouter un lieu sur la carte</h3>
              <p class="region-panel-sub" id="add-poi-coords">Coordonnées : —</p>
            </div>
            <button type="button" class="region-close-btn" id="add-poi-close" aria-label="Fermer">✕</button>
          </div>
          <form id="add-poi-form" class="poi-form">
            <label class="poi-field">
              <span>Titre de l'activité / du lieu *</span>
              <input type="text" id="poi-title-input" required placeholder="Ex. Crique cachée, Marché local...">
            </label>
            <div class="poi-row-2">
              <label class="poi-field">
                <span>Région / Zone</span>
                <select id="poi-state-select"></select>
              </label>
              <label class="poi-field">
                <span>Sous-lieu (optionnel)</span>
                <select id="poi-subplace-select"></select>
              </label>
            </div>
            <div class="poi-row-2">
              <label class="poi-field">
                <span>Thème</span>
                <select id="poi-theme-select">
                  <option value="activite">🚤 Activités & Excursions</option>
                  <option value="rando">🥾 Randonnées</option>
                  <option value="parc">🌿 Parcs & Nature</option>
                  <option value="point-de-vue">🌄 Points de vue</option>
                  <option value="monument">🏛️ Monuments & Culture</option>
                  <option value="marche">🧺 Marchés & Gastronomie</option>
                </select>
              </label>
              <label class="poi-field">
                <span>Budget estimé (€ / pers)</span>
                <input type="number" id="poi-price-input" min="0" step="1" value="0" placeholder="0 = Gratuit">
              </label>
            </div>
            <div class="poi-row-2">
              <label class="poi-field">
                <span>Durée</span>
                <input type="text" id="poi-duration-input" placeholder="Ex. 2h, Demi-journée">
              </label>
              <label class="poi-field">
                <span>Accès / Départ</span>
                <input type="text" id="poi-transport-input" placeholder="Ex. À pied, Bateau, Voiture">
              </label>
            </div>
            <label class="poi-field">
              <span>Notes / Résumé</span>
              <textarea id="poi-summary-input" rows="2" placeholder="Ce qu'il ne faut pas rater, bon plan..."></textarea>
            </label>
            <div class="poi-actions">
              <button type="button" class="modal-bulk-btn" id="add-poi-cancel">Annuler</button>
              <button type="submit" class="poi-submit-btn">Enregistrer le lieu</button>
            </div>
          </form>
        </div>
      `;
      document.body.appendChild(addModalBackdrop);
    }

    const poiCoordsEl = document.getElementById("add-poi-coords");
    const poiForm = document.getElementById("add-poi-form");
    const poiTitleInput = document.getElementById("poi-title-input");
    const poiStateSelect = document.getElementById("poi-state-select");
    const poiSubplaceSelect = document.getElementById("poi-subplace-select");
    const poiThemeSelect = document.getElementById("poi-theme-select");
    const poiPriceInput = document.getElementById("poi-price-input");
    const poiDurationInput = document.getElementById("poi-duration-input");
    const poiTransportInput = document.getElementById("poi-transport-input");
    const poiSummaryInput = document.getElementById("poi-summary-input");

    const shortcutsGroup = document.querySelector(".panel-shortcuts-group");
    let addModeBtn = document.getElementById("toggle-add-poi-mode");
    if (shortcutsGroup && !addModeBtn) {
      addModeBtn = document.createElement("button");
      addModeBtn.type = "button";
      addModeBtn.id = "toggle-add-poi-mode";
      addModeBtn.className = "panel-shortcut-btn";
      addModeBtn.textContent = "➕ Ajouter";
      shortcutsGroup.appendChild(addModeBtn);
    }

    const setAddPinMode = (enabled) => {
      isAddPinMode = Boolean(enabled);
      if (addModeBtn) {
        addModeBtn.classList.toggle("is-active", isAddPinMode);
        addModeBtn.textContent = isAddPinMode ? "📍 Clique sur la carte..." : "➕ Ajouter";
      }
      if (realMapEl) {
        realMapEl.classList.toggle("is-picking-location", isAddPinMode);
      }
      if (isAddPinMode && mapLabelEl) {
        mapLabelEl.textContent = "Mode ajout : clique sur la carte à l'endroit souhaité";
      } else if (!isAddPinMode && typeof syncMapWithFilters === "function") {
        syncMapWithFilters();
      }
    };

    addModeBtn?.addEventListener("click", () => {
      isPanelMinimized = false;
      showMapInPanel = true;
      syncPanelShortcutsUI();
      setAddPinMode(!isAddPinMode);
    });

    const populateSubplaceOptions = (sectionId, selectedSubId = "") => {
      if (!poiSubplaceSelect) return;
      const sec = document.getElementById(sectionId);
      const subs = sec
        ? Array.from(sec.querySelectorAll(".subplace-group[data-subplace], .island-subgroup[data-island]"))
        : [];

      const options = [`<option value="">— Zone générale —</option>`];
      subs.forEach((sub) => {
        const id = sub.getAttribute("data-subplace") || sub.getAttribute("data-island") || "";
        const label =
          sub.getAttribute("data-subplace-label") ||
          sub.querySelector(".subplace-heading, .island-heading")?.textContent?.trim() ||
          id;
        if (id) {
          options.push(`<option value="${escapeAttr(id)}">${escapeAttr(label)}</option>`);
        }
      });

      poiSubplaceSelect.innerHTML = options.join("");
      if (selectedSubId) poiSubplaceSelect.value = selectedSubId;
    };

    const openAddPoiModal = (lat, lng) => {
      pendingCoords = {
        lat: Number(lat.toFixed(5)),
        lng: Number(lng.toFixed(5))
      };

      if (poiCoordsEl) {
        poiCoordsEl.textContent = `Coordonnées : ${pendingCoords.lat}, ${pendingCoords.lng}`;
      }
      if (poiTitleInput) poiTitleInput.value = "";
      if (poiPriceInput) poiPriceInput.value = "0";
      if (poiDurationInput) poiDurationInput.value = "";
      if (poiTransportInput) poiTransportInput.value = "";
      if (poiSummaryInput) poiSummaryInput.value = "";

      if (poiStateSelect) {
        poiStateSelect.innerHTML = destinationSections
          .map((sec) => {
            const label =
              sec.getAttribute("data-map-label") ||
              sec.querySelector("h3")?.textContent?.trim() ||
              sec.id;
            return `<option value="${escapeAttr(sec.id)}">${escapeAttr(label)}</option>`;
          })
          .join("");

        const defaultSec =
          activeState !== "all" ? activeState : destinationSections[0]?.id || "";
        poiStateSelect.value = defaultSec;
        populateSubplaceOptions(
          defaultSec,
          activeSubplace !== "all" ? activeSubplace : ""
        );
      }

      addModalBackdrop.hidden = false;
      addModalBackdrop.classList.add("is-open");
      document.body.classList.add("modal-open");
      setTimeout(() => poiTitleInput?.focus(), 50);
    };

    const closeAddPoiModal = () => {
      addModalBackdrop.hidden = true;
      addModalBackdrop.classList.remove("is-open");
      document.body.classList.remove("modal-open");
      pendingCoords = null;
      setAddPinMode(false);
    };

    poiStateSelect?.addEventListener("change", () => {
      populateSubplaceOptions(poiStateSelect.value);
    });

    document.getElementById("add-poi-close")?.addEventListener("click", closeAddPoiModal);
    document.getElementById("add-poi-cancel")?.addEventListener("click", closeAddPoiModal);
    addModalBackdrop.addEventListener("click", (e) => {
      if (e.target === addModalBackdrop) closeAddPoiModal();
    });

    const renderCustomActivityItem = (act) => {
      const targetSection = document.getElementById(act.stateId) || destinationSections[0];
      if (!targetSection) return;

      if (targetSection.querySelector(`.activity-item[data-custom-id="${act.id}"]`)) return;

      let container = targetSection;
      if (act.subplaceId) {
        const subEl = targetSection.querySelector(
          `.subplace-group[data-subplace="${act.subplaceId}"], .island-subgroup[data-island="${act.subplaceId}"]`
        );
        if (subEl) container = subEl;
      }

      let themeGroup = container.querySelector(`.theme-group[data-theme="${act.theme}"]`);
      if (!themeGroup) {
        themeGroup = document.createElement("div");
        themeGroup.className = "theme-group";
        themeGroup.setAttribute("data-theme", act.theme);
        themeGroup.innerHTML = `<h5 class="theme-title">${themeLabels[act.theme] || act.theme}</h5>`;
        container.appendChild(themeGroup);
      }

      const meta = getVerificationMeta(act);
      const alreadyConfirmed = confirmedByMe.includes(act.id);
      const priceText = act.price === 0 ? "Gratuit" : `~${act.price} €/p`;

      const labelEl = document.createElement("label");
      labelEl.className = `check-item activity-item is-user-added ${meta.isVerified ? "is-verified-poi" : "is-unverified-poi"}`;
      labelEl.setAttribute("data-custom-id", act.id);
      labelEl.setAttribute("data-subplace", act.subplaceId || "");
      labelEl.setAttribute("data-theme", act.theme);
      labelEl.setAttribute("data-lat", String(act.lat));
      labelEl.setAttribute("data-lng", String(act.lng));
      labelEl.setAttribute("data-price", String(act.price));

      labelEl.innerHTML = `
        <input type="checkbox">
        <div class="activity-content">
          <div class="activity-title-row">
            <span class="activity-title">${escapeAttr(act.title)}</span>
            <div class="poi-item-actions">
              <button
                type="button"
                class="verify-poi-btn ${meta.isVerified ? "is-verified" : ""} ${alreadyConfirmed ? "is-confirmed-by-me" : ""}"
                title="${alreadyConfirmed ? "Déjà confirmé sur cet appareil" : "Confirmer ce lieu"}"
              >
                ${alreadyConfirmed ? `✓ Confirmé (${meta.count}/${REQUIRED_CONFIRMATIONS})` : `👍 Valider (${meta.count}/${REQUIRED_CONFIRMATIONS})`}
              </button>
              <button
                type="button"
                class="report-activity-btn"
                title="Envoyer un message sur ce lieu"
              >
                🚩 Signaler
              </button>
              <button
                type="button"
                class="delete-custom-poi-btn"
                title="Supprimer ce lieu ajouté"
                ${meta.isVerified ? "hidden" : ""}
              >
                ✕
              </button>
            </div>
          </div>
          <div class="activity-details">
            <p class="activity-summary">${escapeAttr(act.summary || "Lieu ajouté depuis la carte.")}</p>
            <div class="activity-specs">
              ${act.duration ? `<span class="activity-spec">⏱️ <strong>Temps :</strong> ${escapeAttr(act.duration)}</span>` : ""}
              ${act.transport ? `<span class="activity-spec">🧭 <strong>Accès :</strong> ${escapeAttr(act.transport)}</span>` : ""}
              <span class="activity-spec">💶 <strong>Budget :</strong> ${escapeAttr(priceText)}</span>
              <span class="activity-spec">🛡️ <strong>Statut :</strong> ${escapeAttr(meta.label)}</span>
            </div>
          </div>
          <div class="activity-meta">
            <span class="activity-tag price-tag">${escapeAttr(priceText)}</span>
            <span class="activity-tag verify-status-tag ${meta.isVerified ? "is-verified" : "is-unverified"}">${escapeAttr(meta.label)}</span>
            ${act.duration ? `<span class="activity-tag duration-tag">⏱️ ${escapeAttr(act.duration)}</span>` : ""}
            ${act.transport ? `<span class="activity-tag transport-tag">${escapeAttr(act.transport)}</span>` : ""}
          </div>
        </div>
      `;

      syncDeleteButtonVisibility(labelEl, meta.isVerified);

      const verifyBtn = labelEl.querySelector(".verify-poi-btn");
      verifyBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (confirmedByMe.includes(act.id)) {
          return;
        }

        const targetAct = customActivities.find((item) => item.id === act.id);
        if (!targetAct) return;

        targetAct.confirmations = (Number(targetAct.confirmations) || 0) + 1;
        confirmedByMe.push(act.id);

        persistCustomActivities();
        persistConfirmedByMe();

        const nextMeta = getVerificationMeta(targetAct);
        labelEl.classList.toggle("is-verified-poi", nextMeta.isVerified);
        labelEl.classList.toggle("is-unverified-poi", !nextMeta.isVerified);
        syncDeleteButtonVisibility(labelEl, nextMeta.isVerified);

        verifyBtn.classList.add("is-confirmed-by-me");
        verifyBtn.classList.toggle("is-verified", nextMeta.isVerified);
        verifyBtn.textContent = `✓ Confirmé (${nextMeta.count}/${REQUIRED_CONFIRMATIONS})`;
        verifyBtn.title = "Déjà confirmé sur cet appareil";

        const statusTag = labelEl.querySelector(".verify-status-tag");
        if (statusTag) {
          statusTag.textContent = nextMeta.label;
          statusTag.classList.toggle("is-verified", nextMeta.isVerified);
          statusTag.classList.toggle("is-unverified", !nextMeta.isVerified);
        }

        const statusSpec = Array.from(labelEl.querySelectorAll(".activity-spec")).find((el) =>
          el.textContent.includes("Statut :")
        );
        if (statusSpec) {
          statusSpec.innerHTML = `🛡️ <strong>Statut :</strong> ${escapeAttr(nextMeta.label)}`;
        }
      });

      labelEl.querySelector(".report-activity-btn")?.addEventListener("click", (e) => {
        const currentAct = customActivities.find((item) => item.id === act.id) || act;
        handleReportButtonClick(e, {
          customId: act.id,
          title: currentAct.title,
          lat: currentAct.lat,
          lng: currentAct.lng,
          confirmations: currentAct.confirmations || 0
        });
      });

      labelEl.querySelector(".delete-custom-poi-btn")?.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const currentAct = customActivities.find((item) => item.id === act.id);
        if (currentAct && getVerificationMeta(currentAct).isVerified) {
          return;
        }
        customActivities = customActivities.filter((item) => item.id !== act.id);
        confirmedByMe = confirmedByMe.filter((id) => id !== act.id);
        persistCustomActivities();
        persistConfirmedByMe();
        labelEl.remove();
        if (typeof applyDestinationFilters === "function") applyDestinationFilters();
      });

      const box = labelEl.querySelector("input[type='checkbox']");
      labelEl.addEventListener("click", (e) => {
        if (e.target.closest(".delete-custom-poi-btn, .verify-poi-btn, .report-activity-btn")) return;
        e.preventDefault();
        e.stopPropagation();

        if (box.checked) {
          box.checked = false;
          labelEl.classList.remove("is-done", "is-preview");
          syncMapWithFilters();
          updateFilterStatus();
          return;
        }

        if (!labelEl.classList.contains("is-preview")) {
          document.querySelectorAll(".activity-item.is-preview").forEach((el) => el.classList.remove("is-preview"));
          labelEl.classList.add("is-preview");
          focusActivityOnMap(labelEl);
          scrollItemIntoMobileComfort(labelEl);
        } else {
          labelEl.classList.remove("is-preview");
          box.checked = true;
          labelEl.classList.add("is-done");
          syncMapWithFilters();
          updateFilterStatus();
        }
      });

      themeGroup.appendChild(labelEl);
    };

    customActivities.forEach(renderCustomActivityItem);

    poiForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!pendingCoords) return;
      const title = poiTitleInput?.value?.trim();
      if (!title) return;

      const newAct = {
        id: "poi_" + Date.now(),
        title,
        stateId: poiStateSelect?.value || destinationSections[0]?.id || "",
        subplaceId: poiSubplaceSelect?.value || "",
        theme: poiThemeSelect?.value || "activite",
        price: Math.max(0, Number(poiPriceInput?.value) || 0),
        duration: poiDurationInput?.value?.trim() || "",
        transport: poiTransportInput?.value?.trim() || "",
        summary: poiSummaryInput?.value?.trim() || "",
        lat: pendingCoords.lat,
        lng: pendingCoords.lng,
        confirmations: 0
      };

      customActivities.push(newAct);
      persistCustomActivities();
      renderCustomActivityItem(newAct);
      closeAddPoiModal();

      if (typeof applyDestinationFilters === "function") {
        applyDestinationFilters();
      }
    });

    map.on("click", (e) => {
      if (!isAddPinMode) return;
      openAddPoiModal(e.latlng.lat, e.latlng.lng);
    });
  }

  updateFilterStatus();
});
