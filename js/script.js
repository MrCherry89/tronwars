$(document).ready(function () {
  $(".product-count .btn-minus").addClass("btn-disabled");

  $(".product-count .input-number").on("change", function () {
    if ($(this).val() == 1) {
      $(this)
        .closest(".product-count")
        .find(".btn-minus")
        .addClass("btn-disabled");
    } else {
      $(this)
        .closest(".product-count")
        .find(".btn-minus")
        .removeClass("btn-disabled");
    }
  });

  $(".btn-minus").on("click", function (e) {
    e.preventDefault();
    var number =
      parseInt($(this).closest(".product-count").find(".input-number").val()) -
      1;
    $(this)
      .closest(".product-count")
      .find(".input-number")
      .val(number > 0 ? number : 1)
      .change();
  });

  $(".btn-plus").on("click", function (e) {
    e.preventDefault();
    var number =
      parseInt($(this).closest(".product-count").find(".input-number").val()) +
      1;
    $(this)
      .closest(".product-count")
      .find(".input-number")
      .val(number)
      .change();
  });
});
