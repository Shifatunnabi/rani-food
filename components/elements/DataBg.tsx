"use client";

import { useEffect } from "react";

export default function DataBg() {
  useEffect(() => {
    // Select all elements with `data-bg` attribute
    const elements = document.querySelectorAll<HTMLElement>("[data-bg]");

    elements.forEach((el) => {
      const bg = el.getAttribute("data-bg");
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
        el.style.backgroundSize = "cover";
        el.style.backgroundPosition = "center";
        el.style.backgroundRepeat = "no-repeat";
      }
    });
  }, []);

  return null;
}
