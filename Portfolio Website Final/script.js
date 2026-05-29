// ===== About Tabs =====
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-links");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabLinks.forEach(button => {
    button.addEventListener("click", () => {

      // Remove active from all buttons
      tabLinks.forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });

      // Hide all panels
      tabPanels.forEach(panel => {
        panel.classList.remove("active");
        panel.hidden = true;
      });

      // Activate clicked button
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");

      // Show target panel
      const targetId = button.getAttribute("data-target");
      const targetPanel = document.getElementById(targetId);

      targetPanel.classList.add("active");
      targetPanel.hidden = false;
    });
  });
});
