;(function (n, r, l, d) {
  try {
    var h = r.head || r.getElementsByTagName("head")[0],
      s = r.createElement("script")
    s.defer = true
    s.setAttribute("type", "text/javascript")
    s.setAttribute("src", l)
    n.neuroleadId = d
    h.appendChild(s)
  } catch (e) {}
})(
  window,
  document,
  "https://cdn.leadster.com.br/neurolead/neurolead.min.js",
  55277
)
