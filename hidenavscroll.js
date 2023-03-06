<script>
    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
        document.getElementById("super-navbar__content").style.top = "0";
  } else {
        document.getElementById("super-navbar__content").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
</script>
