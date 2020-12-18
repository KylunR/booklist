var baseUrl = "https://billgatesbooks.wl.r.appspot.com/";
var year = "";

function getBookData() {
    year = $('#year').val();
    var myUrl = baseUrl + "" + year;

    // Send GET request and parse data
    $.ajax({
        type: "GET",
        dataType: "json",
        url: myUrl,
        success: function(result) {
            // console.log("Successfully retireved data");
            // console.log(result);
            parseBookData(result);
        },
        error: function(e) { 
            console.log("Error: " + e);
        }
    });
}


function parseBookData(data) {

    // Clear out the list if anything is in it
    $(".book-list").empty();
    
    // Add data for each book to list
    data[year].forEach(element => {
        $(".book-list").append(
            "<div class='book-item'>" + 
                "<img class='book-image' src=" + element.image + "/>" +
                "<h3 class='book-title'>" + element.title + " (" + element.year + ")</h3>" + 
                "<h5 class='book-author'>" + element.author + "</h5>" +
                "<p class='book-abstract'>" + element.abstract + "</p>" +    
            "</div>"
        );
    });

}