<script src="{{url("jquery/jquery.min.js")}}"></script>
<script src= {{url('plugins/bootstrap/js/bootstrap.bundle.js')}}></script>
@if(request()->routeIs("*.index") )








<script src={{url("plugins/datatables/jquery.dataTables.min.js")}}></script>
@endif
<script src= {{url("dist/js/adminlte.min.js")}}></script>
{{-- <script src= {{url("dist/js/pages/dashboard.js")}}></script> --}}
@stack("scripts")

{{-- <script src= {{url("js/demo.js")}}></script> --}}



<script src="{{url("plugins/sweetalert2/sweetalert2.all.min.js")}}"></script>
<script  defer src="{{url("dist/js/app.min.js")}}"></script>
<script src="{{url("dist/js/alpine.js")}}"></script>


{{-- <!-- Sparkline -->
<script src={{asset("plugins/sparklines/sparkline.js")}}></script> --}}







</body>
</html>
