document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const locationSearch = document.getElementById('locationSearch');
  
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchTerm = locationSearch.value.trim();
      if (searchTerm) {
        window.location.href = `dashboard.html?location=${encodeURIComponent(searchTerm)}`;
      }
    });
  
    // Add autocomplete functionality
    locationSearch.addEventListener('input', function() {
      const value = this.value.toLowerCase();
      const options = document.getElementById('locationSuggestions').options;
      for (let i = 0; i < options.length; i++) {
        const option = options[i];
        if (option.value.toLowerCase().startsWith(value)) {
          option.style.display = 'block';
        } else {
          option.style.display = 'none';
        }
      }
    });
  });