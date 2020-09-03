;(function ($) {
  $(document).ready(function () {
    updateQueryStringParameter = function (uri, key, value) {
      var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
      var separator = uri.indexOf('?') !== -1 ? '&' : '?'
      if (uri.match(re)) {
        return uri.replace(re, '$1' + key + '=' + value + '$2')
      } else {
        return uri + separator + key + '=' + value
      }
    }

    $('.gw-go-col-inner .gw-go-btn').each(function () {
      var $btn = $(this)
      var $col = $btn.closest('.gw-go-col-inner')
      var title = $.trim($col.find('.gw-go-header-top h3').first().text())
      var href = $btn.attr('href')
      href = updateQueryStringParameter(href, 'choose[]', title)
      $btn.attr('href', href)
    })
  })
})(jQuery)
