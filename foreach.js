function sort(f) {

  var d = [];
  f.map(function(e, i, a) {
    d[i] = e
  })
  var k = [];
  f.forEach(function(e, i, a) {
    var g = d.indexOf(Math.min.apply(null, d))
    var s = d.splice(g, 1)
    k[i] = s
  })

  document.write(k)
}
sort([10,1,9,2,8,3,7,4,6,5])
