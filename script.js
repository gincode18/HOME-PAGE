function googleSearch() {
  var searchInput = document.getElementById('search');
  var searchTerm = searchInput.value;
  var cleanQuery = searchTerm.replace(" ", "+");
  var url = 'http://www.google.com/search?q=' + cleanQuery;

  window.location.href = url;
}

function handleSearchKeyPress(event) {
  if (event.key === 'Enter') {
    googleSearch();
  }
}
