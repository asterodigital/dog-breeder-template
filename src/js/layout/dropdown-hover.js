export const dropdownHover = () => {
  document.addEventListener('DOMContentLoaded', function () {
    // Select all dropdown toggle elements within nav-items
    const dropdownToggles = document.querySelectorAll('.nav-item.dropdown')

    // Check if any dropdowns were found
    if (dropdownToggles.length > 0) {
      dropdownToggles.forEach(function (dropdown) {
        const toggleLink = dropdown.querySelector('.dropdown-toggle')
        const menu = dropdown.querySelector('.dropdown-menu')

        if (!toggleLink || !menu) {
          console.warn('Could not find toggle link or menu for a dropdown:', dropdown)
          return
        }

        toggleLink.addEventListener('click', function (e) {
          e.preventDefault()
        })

        // --- Event Listener for Hovering IN ---
        dropdown.addEventListener('mouseenter', function () {
          // Add 'show' class to the menu
          menu.classList.add('show')
          // Update aria-expanded for accessibility
          toggleLink.setAttribute('aria-expanded', 'true')
        })

        // --- Event Listener for Hovering OUT ---
        dropdown.addEventListener('mouseleave', function () {
          // Remove 'show' class from the menu
          menu.classList.remove('show')
          // Update aria-expanded for accessibility
          toggleLink.setAttribute('aria-expanded', 'false')
        })
      })
    } else {
      console.log("No elements with class '.nav-item.dropdown' found.")
    }
  })
}
