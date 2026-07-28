(function () {
  "use strict";

  var measurementId = "G-1K0MTEPTS0";
  var script = document.createElement("script");
  script.async = true;
  script.src =
    "https://www.googletagmanager.com/gtag/js?id=" +
    encodeURIComponent(measurementId);
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: true,
  });

  function sourceFromUrl(url) {
    try {
      return new URL(url, window.location.href).searchParams.get("from") || "";
    } catch (error) {
      return "";
    }
  }

  window.trackLogisticsEvent = function (name, parameters) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, parameters || {});
  };

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[href]");
    if (!link) return;

    var href = link.getAttribute("href") || "";
    var label = (link.textContent || "").replace(/\s+/g, " ").trim();

    if (href.indexOf("tel:") === 0) {
      window.trackLogisticsEvent("phone_click", {
        link_text: label,
        page_path: window.location.pathname,
      });
      return;
    }

    var target;
    try {
      target = new URL(href, window.location.href);
    } catch (error) {
      return;
    }

    if (target.pathname === "/consultation/") {
      window.trackLogisticsEvent("consultation_click", {
        link_text: label,
        landing_source: sourceFromUrl(target.href),
        page_path: window.location.pathname,
      });
      return;
    }

    if (
      target.origin === window.location.origin &&
      target.pathname.indexOf("/logistics-guide/") === 0 &&
      target.pathname !== "/logistics-guide/"
    ) {
      window.trackLogisticsEvent("guide_click", {
        link_text: label,
        target_path: target.pathname,
        page_path: window.location.pathname,
      });
    }
  });
})();
