//gloabal vars
var endPoint = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=";
var searchInput = "";
//get endpoint from search box
$("#search-btn").on("click", function () {
    searchInput = $("#searchTerm").val();
    endPoint += searchInput;
    $.getJSON(endPoint, function (json) {
        var html = "";
        for (var i = 0; i < json[1].length; i++) {
            html += "<a href='" + json[3][i] + "' class='list-group-item list-group-item-action bg-info text-light wow fadeInUp'>";
            html += "<strong>" + json[1][i] + ": </strong>" + json[2][i] + "</a>"
        }; 
        $("#data").html(html);
    }); 
    endPoint = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=";
});
// Helper function for add element box list in WOW
WOW.prototype.addBox = function (element) {
    this.boxes.push(element);
  };
  // Init WOW.js
  new WOW().init();
