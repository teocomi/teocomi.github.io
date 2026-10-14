---
layout: null
---
$(document).ready(function () {
  if (window.location.pathname !== '{{ "/" | relative_url }}' && window.location.pathname !== '{{ "/index.html" | relative_url }}') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }
})
