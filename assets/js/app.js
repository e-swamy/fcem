$(document).ready(function () {
    $("#aside-bar").mCustomScrollbar({
        theme: "minimal",
        autoExpandScrollbar: true
    });

    $('#sidebarToggle').on('click', function () {
        $('.aside-navbar, .app-wrapper, .overlay').toggleClass('hide-sidebar');
    });

    $(".overlay").click(function () {
        $("#sidebarToggle").trigger("click");
        $(".overlay").fadeOut(0);
    });

    $(".dropdown-menu-macos").mCustomScrollbar({
        theme: "minimal-dark",
        autoExpandScrollbar: true
    });

    $('.sales-summary-dropdown a').click(function () {
        $('#select-sales-summary span').text($(this).text());
    });

    $('.payment-summary-dropdown a').click(function () {
        $('#select-payment-summary span').text($(this).text());
    });

    $('.customers-status-dropdown a').click(function () {
        $('#select-customers-status span').text($(this).text());
    });

    $('.staff-performance-dropdown a').click(function () {
        $('#select-staff-performance span').text($(this).text());
    });

    $('.service-performance-dropdown a').click(function () {
        $('#select-service-performance span').text($(this).text());
    });

    $('.offcanvas_customer_dropdown h6').click(function () {
        $('#offcanvas_customer_details .option-text').text($(this).text());
    });

   // Select2
	$('.select2').select2({
		minimumResultsForSearch: Infinity,
		width: '100%'
	});
    $('.select2-show-search').select2({
        dropdownParent: $('#offcanvasRight'),
        minimumResultsForSearch: '',
        placeholder: 'Select an option',
        width: '100%'
    });

    $(document).ready(function () {
        $('#selectAppointmentDate').daterangepicker({
            locale: {
                format: 'DD-MM-YYYY'
            },
            singleDatePicker: true,
            // showDropdowns: true
        });
        $('#selectInvoiceDate').daterangepicker({
            parentEl: "#offcanvasRight",
            locale: {
                format: 'DD-MM-YYYY'
            },
            singleDatePicker: true,
            // showDropdowns: true
        })
    });
});