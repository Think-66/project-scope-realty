jQuery(".iconCollapse i").click(function () {
  jQuery(".navMenuSidebar").addClass("ExpandNav");
});

jQuery(".closeNav").click(function () {
  jQuery(".navMenuSidebar").removeClass("ExpandNav");
});

!(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });
  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  $(window).on("load", function () {
    aos_init();
  });
})(jQuery);

jQuery("div#accordionExample .card:first-child").addClass("active");

jQuery("div#accordionExample .card").click(function () {
  jQuery("div#accordionExample .card.active").removeClass("active");
  jQuery(this).addClass("active");
});

jQuery(".profile_dropdown").click(function () {
  jQuery(".my_profile_dropdown_nav").toggleClass("active");
});

var ctext = jQuery(".row.text-center.course_row .course_item")
  .map(function () {
    return jQuery(this).height();
  })
  .get();

ctextH = Math.max.apply(null, ctext);

jQuery(".row.text-center.course_row .course_item").css("height", ctextH + "px");
// var editor; // use a global for the submit and return data rendering in the examples

// $(document).ready(function() {
//     editor = new $.fn.dataTable.Editor( {
//         "ajax": "../php/staff.php",
//         "table": "#example",
//         "fields": [ {
//                 "label": "First name:",
//                 "name": "first_name"
//             }, {
//                 "label": "Last name:",
//                 "name": "last_name"
//             }, {
//                 "label": "Position:",
//                 "name": "position"
//             }, {
//                 "label": "Office:",
//                 "name": "office"
//             }, {
//                 "label": "Extension:",
//                 "name": "extn"
//             }, {
//                 "label": "Start date:",
//                 "name": "start_date",
//                 "type": "datetime"
//             }, {
//                 "label": "Salary:",
//                 "name": "salary"
//             }
//         ]
//     } );

//     // New record
//     $('a.editor-create').on('click', function (e) {
//         e.preventDefault();

//         editor.create( {
//             title: 'Create new record',
//             buttons: 'Add'
//         } );
//     } );

//     // Edit record
//     $('#example').on('click', 'td.editor-edit', function (e) {
//         e.preventDefault();

//         editor.edit( $(this).closest('tr'), {
//             title: 'Edit record',
//             buttons: 'Update'
//         } );
//     } );

//     // Delete a record
//     $('#example').on('click', 'td.editor-delete', function (e) {
//         e.preventDefault();

//         editor.remove( $(this).closest('tr'), {
//             title: 'Delete record',
//             message: 'Are you sure you wish to remove this record?',
//             buttons: 'Delete'
//         } );
//     } );

//     $('#example').DataTable( {
//         ajax: "../php/staff.php",
//         columns: [
//             { data: null, render: function ( data, type, row ) {
//                 // Combine the first and last names into a single table field
//                 return data.first_name+' '+data.last_name;
//             } },
//             { data: "position" },
//             { data: "office" },
//             { data: "extn" },
//             { data: "start_date" },
//             { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) },
//             {
//                 data: null,
//                 className: "dt-center editor-edit",
//                 defaultContent: '<i class="fa fa-pencil"/>',
//                 orderable: false
//             },
//             {
//                 data: null,
//                 className: "dt-center editor-delete",
//                 defaultContent: '<i class="fa fa-trash"/>',
//                 orderable: false
//             }
//         ]
//     } );
// } );
