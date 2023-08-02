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


@if(request()->routeIs("language.index"))
    <script src="{{url("moment/moment.min.js")}}"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.12.3/cdn.min.js" integrity="sha512-XpPnaYn/Y/hcDzJa//4tOusxoA8/blkeeehF/qLAQPm3rej3Ds3msq1lLZCsFtnvnTtpIDQcyua4ZnELbwyy1Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script  src="{{url("dist/js/main.js")}}"></script>
@elseif(request()->routeIs("*.edit") || request()->routeIs("*.create") )
    <script src="{{url("moment/moment.min.js")}}"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.12.3/cdn.min.js" integrity="sha512-XpPnaYn/Y/hcDzJa//4tOusxoA8/blkeeehF/qLAQPm3rej3Ds3msq1lLZCsFtnvnTtpIDQcyua4ZnELbwyy1Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script  src="{{url("dist/js/main.js")}}"></script>
@endif
{{-- <!-- Sparkline -->
<script src={{asset("plugins/sparklines/sparkline.js")}}></script> --}}







</body>
</html>
