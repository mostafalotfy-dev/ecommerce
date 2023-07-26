<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Al Ecommerce</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  @vite("resources/sass/app.scss")

</head>
<body class="hold-transition sidebar-mini layout-fixed">

<script src="{{url("jquery/jquery.min.js")}}"></script>
<script src="{{url("moment/moment.min.js")}}"></script>

<script src= {{url('plugins/bootstrap/js/bootstrap.bundle.js')}}></script>

<script src= {{url("plugins/jquery-ui/jquery-ui.js")}}></script>
<script src= {{url("plugins/chart.js/Chart.js")}}></script>

<script src= {{url("plugins/daterangepicker/daterangepicker.js")}}></script>
<script src= {{url("plugins/overlayScrollbars/js/OverlayScrollbars.min.js")}}></script>
<script src= {{url("plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js")}}></script>
<script src= {{url("dist/js/adminlte.min.js")}}></script>
{{-- <script src= {{url("dist/js/pages/dashboard.js")}}></script> --}}


{{-- <script src= {{url("js/demo.js")}}></script> --}}

<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>


{{-- <!-- Sparkline -->
<script src={{asset("plugins/sparklines/sparkline.js")}}></script> --}}







</body>
</html>
