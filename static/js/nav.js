<script>
$('nav a').removeClass('active');
var currentUrl = window.location.pathname;

$('nav a[href="'+currentUrl+'"]').addClass('active');
</script>