@if(request()->routeIs("*.index") && !request()->routeIs("language.index"))

<script src="{{url("jquery/jquery.min.js")}}"></script>
<script src="{{url("moment/moment.min.js")}}"></script>



<script src= {{url("plugins/jquery-ui/jquery-ui.js")}}></script>
<script src= {{url("plugins/chart.js/Chart.js")}}></script>
<script src= {{url('plugins/bootstrap/js/bootstrap.bundle.js')}}></script>
<script src= {{url("plugins/daterangepicker/daterangepicker.js")}}></script>
<script src= {{url("plugins/overlayScrollbars/js/OverlayScrollbars.min.js")}}></script>
<script src= {{url("plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js")}}></script>
<script src= {{url("dist/js/adminlte.min.js")}}></script>
<script src={{url("plugins/datatables/jquery.dataTables.min.js")}}></script>
@endif

{{-- <script src= {{url("dist/js/pages/dashboard.js")}}></script> --}}
@stack("scripts")

{{-- <script src= {{url("js/demo.js")}}></script> --}}




<script  defer src="{{url("dist/js/app.js")}}"></script>
<script src="{{url("dist/js/alpine.js")}}"></script>


{{-- <!-- Sparkline -->
<script src={{asset("plugins/sparklines/sparkline.js")}}></script> --}}







</body>
</html>
