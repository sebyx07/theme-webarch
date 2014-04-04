Package.describe({
  summary: "Webarch theme packed for meteor."
});

Package.on_use(function (api) {

  api.use(['jquery','templating'],'client');

  var path = Npm.require('path');
  var assetPath = path.join('lib/');
  var views = path.join('client/views/');
  var mainWebarch = [
    views + 'main-webarch.html',
    views + 'main-webarch.js'
  ];



    var assetJs = [
        assetPath + 'assets/plugins/jquery-1.8.3.min.js',
        assetPath + 'assets/plugins/jquery-ui/jquery-ui-1.10.1.custom.min.js',
        assetPath + 'assets/plugins/boostrapv3/js/bootstrap.min.js',
        assetPath + 'assets/plugins/breakpoints.js',
        assetPath + 'assets/plugins/jquery-unveil/jquery.unveil.min.js',
        assetPath + 'assets/plugins/jquery-block-ui/jqueryblockui.js',
        assetPath + 'assets/plugins/jquery-slider/jquery.sidr.min.js',
        assetPath + 'assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js',
        assetPath + 'assets/plugins/pace/pace.min.js',
        assetPath + 'assets/plugins/jquery-numberAnimate/jquery.animateNumbers.js',
        assetPath + 'assets/js/core.js',
        assetPath + 'assets/js/chat.js',
        assetPath + 'assets/js/demo.js'
        //assetPath + 'assets/plugins/bootstrap/js/bootstrap.min.js',
        //assetPath + 'assets/plugins/jquery-ui-touch/jquery.ui.touch-punch.min.js',
        //assetPath + 'assets/plugins/fullcalendar/fullcalendar.min.js',
        //assetPath + 'assets/js/calender.js',
        //assetPath + 'assets/plugins/jquery-ricksaw-chart/js/d3.v2.js',
        //assetPath + 'assets/plugins/jquery-ricksaw-chart/js/rickshaw.min.js',
        //assetPath + 'assets/plugins/jquery-morris-chart/js/morris.min.js',
        //assetPath + 'assets/plugins/jquery-easy-pie-chart/js/jquery.easypiechart.min.js',
        //assetPath + 'assets/plugins/jquery-flot/jquery.flot.js',
        //assetPath + 'assets/plugins/jquery-flot/jquery.flot.time.min.js',
        //assetPath + 'assets/plugins/jquery-flot/jquery.flot.selection.min.js',
        //assetPath + 'assets/plugins/jquery-flot/jquery.flot.animator.min.js',
        //assetPath + 'assets/plugins/jquery-flot/jquery.flot.orderBars.js',
        //assetPath + 'assets/plugins/jquery-sparkline/jquery-sparkline.js',
        //assetPath + 'assets/js/charts.js',
        //assetPath + 'assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
        //assetPath + 'assets/plugins/bootstrap-select2/select2.min.js',
        //assetPath + 'assets/plugins/jquery-ricksaw-chart/js/raphael-min.js',
        //assetPath + 'assets/plugins/jquery-jvectormap/js/jquery-jvectormap-1.2.2.min.js',
        //assetPath + 'assets/plugins/jquery-jvectormap/js/jquery-jvectormap-us-lcc-en.js',
        //assetPath + 'assets/plugins/jquery-flot/jquery.flot.min.js',
        //assetPath + 'assets/plugins/skycons/skycons.js',
        //assetPath + 'assets/js/dashboard.js',
        //assetPath + 'assets/plugins/jquery-datatable/js/jquery.dataTables.min.js',
        //assetPath + 'assets/plugins/jquery-datatable/extra/js/TableTools.min.js',
        //assetPath + 'assets/plugins/datatables-responsive/js/datatables.responsive.js',
        //assetPath + 'assets/plugins/datatables-responsive/js/lodash.min.js',
        //assetPath + 'assets/js/datatables.js',
        //assetPath + 'assets/js/email_comman.js',
        //assetPath + 'assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
        //assetPath + 'assets/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js',
        //assetPath + 'assets/plugins/jquery-inputmask/jquery.inputmask.min.js',
        //assetPath + 'assets/plugins/jquery-autonumeric/autoNumeric.js',
        //assetPath + 'assets/plugins/ios-switch/ios7-switch.js',
        //assetPath + 'assets/plugins/bootstrap-wysihtml5/wysihtml5-0.3.0.js',
        //assetPath + 'assets/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.js',
        //assetPath + 'assets/plugins/bootstrap-tag/bootstrap-tagsinput.min.js',
        //assetPath + 'assets/plugins/dropzone/dropzone.min.js',
        //assetPath + 'assets/js/form_elements.js',
        //assetPath + 'assets/plugins/boostrap-form-wizard/js/jquery.bootstrap.wizard.min.js',
        //assetPath + 'assets/plugins/jquery-validation/js/jquery.validate.min.js',
        //assetPath + 'assets/js/form_validations.js',
        //assetPath + 'assets/plugins/jquery-superbox/js/superbox.js',
        //assetPath + 'assets/plugins/jquery-gmap/gmaps.js',
        //assetPath + 'assets/js/google_maps.js',
        //assetPath + 'assets/plugins/jquery-nestable/jquery.nestable.js',
        //assetPath + 'assets/js/group_list.js',
        //assetPath + 'assets/plugins/modernizr.js',
        //assetPath + 'assets/plugins/boostrap-slider/js/bootstrap-slider.js',
        //assetPath + 'assets/js/icon.js',
        //assetPath + 'assets/plugins/jquery-lazyload/jquery.lazyload.min.js',
        //assetPath + 'assets/plugins/owl-carousel/owl.carousel.min.js',
        //assetPath + 'assets/plugins/jquery-polymaps/polymaps.min.js',
        //assetPath + 'assets/plugins/jquery-flot/jquery.flot.resize.min.js',
        //assetPath + 'assets/plugins/jquery-metrojs/MetroJs.min.js',
        //assetPath + 'assets/js/dashboard_v2.js',
        //assetPath + 'assets/js/login.js',
        //assetPath + 'assets/js/login_v2.js',
        //assetPath + 'assets/js/messages_notifications.js',
        //assetPath + 'assets/plugins/jquery-notifications/js/messenger.min.js',
        //assetPath + 'assets/plugins/jquery-notifications/js/messenger-theme-future.js',
        //assetPath + 'assets/plugins/jquery-notifications/js/demo/location-sel.js',
        //assetPath + 'assets/plugins/jquery-notifications/js/demo/theme-sel.js',
        //assetPath + 'assets/plugins/jquery-notifications/js/demo/demo.js',
        //assetPath + 'assets/js/notifications.js',
        //assetPath + 'assets/plugins/jquery-mixitup/jquery.mixitup.min.js',
        //assetPath + 'assets/js/search_results.js',
        //assetPath + 'assets/js/support_ticket.js',
        //assetPath + 'assets/js/tabs_accordian.js',
        //assetPath + 'assets/plugins/jquery-jvectormap/js/jquery-jvectormap-world-mill-en.js',
        //assetPath + 'assets/js/vector_maps.js',
        //assetPath + 'assets/plugins/shape-hover/js/snap.svg-min.js',
        //assetPath + 'assets/js/widgets.js',
    ];





    var assetCss = [
        assetPath + 'assets/plugins/pace/pace-theme-flash.css',
        assetPath + 'assets/plugins/jquery-slider/css/jquery.sidr.light.css',
        assetPath + 'assets/plugins/boostrapv3/css/bootstrap.min.css',
        assetPath + 'assets/plugins/boostrapv3/css/bootstrap-theme.min.css',
        assetPath + 'assets/plugins/font-awesome/css/font-awesome.css',
        assetPath + 'assets/css/animate.min.css',
        assetPath + 'assets/css/style.css',
        assetPath + 'assets/css/responsive.css',
        assetPath + 'assets/css/custom-icon-set.css'
        //assetPath + 'assets/plugins/fullcalendar/fullcalendar.css',
        //assetPath + 'assets/plugins/boostrap-checkbox/css/bootstrap-checkbox.css',
        //assetPath + 'assets/plugins/jquery-ricksaw-chart/css/rickshaw.css',
        //assetPath + 'assets/plugins/jquery-morris-chart/css/morris.css',
        //assetPath + 'assets/plugins/gritter/css/jquery.gritter.css',
        //assetPath + 'assets/plugins/bootstrap-datepicker/css/datepicker.css',
        //assetPath + 'assets/plugins/bootstrap-select2/select2.css',
        //assetPath + 'assets/plugins/jquery-jvectormap/css/jquery-jvectormap-1.2.2.css',
        //assetPath + 'assets/plugins/jquery-datatable/css/jquery.dataTables.css',
        //assetPath + 'assets/plugins/datatables-responsive/css/datatables.responsive.css',
        //assetPath + 'assets/plugins/bootstrap-tag/bootstrap-tagsinput.css',
        //assetPath + 'assets/plugins/dropzone/css/dropzone.css',
        //assetPath + 'assets/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.css',
        //assetPath + 'assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.css',
        //assetPath + 'assets/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.css',
        //assetPath + 'assets/plugins/ios-switch/ios7-switch.css',
        //assetPath + 'assets/plugins/boostrap-slider/css/slider.css',
        //assetPath + 'assets/plugins/jquery-superbox/css/style.css',
        //assetPath + 'assets/plugins/jquery-nestable/jquery.nestable.css',
        //assetPath + 'assets/plugins/jquery-polymaps/style.css',
        //assetPath + 'assets/plugins/jquery-metrojs/MetroJs.css',
        //assetPath + 'assets/plugins/shape-hover/css/demo.css',
        //assetPath + 'assets/plugins/shape-hover/css/component.css',
        //assetPath + 'assets/plugins/owl-carousel/owl.carousel.css',
        //assetPath + 'assets/plugins/owl-carousel/owl.theme.css',
        //assetPath + 'assets/plugins/jquery-isotope/isotope.css',
        //assetPath + 'assets/css/magic_space.css',
        //assetPath + 'assets/css/tiles_responsive.css',
        //assetPath + 'assets/css/print.css',
        //assetPath + 'assets/plugins/jquery-notifications/css/messenger.css',
        //assetPath + 'assets/plugins/jquery-notifications/css/messenger-theme-flat.css',
        //assetPath + 'assets/plugins/jquery-notifications/css/location-sel.css',
        //assetPath + 'assets/css/large_screen_tweak.css',
    ];

  api.add_files(mainWebarch, 'client');
  api.add_files(assetJs, 'client');
  api.add_files(assetCss, 'client');

});