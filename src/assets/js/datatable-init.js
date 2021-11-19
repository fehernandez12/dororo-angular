var a = $("#datatable-buttons").DataTable(
  {
    lengthChange: !1,
    buttons: ["copy", "print"],
    language: {
      paginate: {
        previous: "<i class='mdi mdi-chevron-left'>",
        next: "<i class='mdi mdi-chevron-right'>"
      }
    },
    drawCallback: function () {
      $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    }
  }
);
