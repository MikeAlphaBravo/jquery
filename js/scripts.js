$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#pink").click(function() {
    $("body").removeClass();
    $("body").addClass("pink-background");
  });

  $("button#reset").click(function() {
    $("body").removeClass();
  });

  $("#pclick").click(function() {
    $("#pclick").addClass("highlight-show");
  });
});
