var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
  "<ul>";

// Add a "Top" button to scroll to the top of the page
ToC += "<li><a href='#'>Top</a></li>";

// Define an object to store encountered headings and their counts
var headingCounts = {};

// Iterate over heading elements from <h1> to <h6>
$("article h1, article h3, article h4, article h5, article h6").each(function () {
  var el = $(this);
  var title = el.text().trim(); // Trim whitespace from the title
  var link = "#" + el.attr("id");

  // Ensure the heading has an ID and is one of h1 to h6
  if (title && link && el.is("h1, h2, h3, h4, h5, h6")) {
    // Check if the heading ID has been encountered before
    if (headingCounts[el.attr("id")]) {
      // If encountered, increment the count and append it to the title
      var count = headingCounts[el.attr("id")];
      title += " (" + count + ")";
      headingCounts[el.attr("id")]++; // Increment count
    } else {
      // If not encountered before, initialize the count to 1
      headingCounts[el.attr("id")] = 2; // Start count from 2 (first occurrence is 1)
    }

    var newLine = "<li><a href='" + link + "'>" + title + "</a></li>";
    ToC += newLine;
  }
});

ToC += "</ul></nav>";

// Insert the generated TOC into the specified container
$(".table-of-contents").html(ToC);

// Add click event handler to scroll to top when "Top" button is clicked
$(".table-of-contents a[href='#']").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

// Add smooth scrolling for section links
$(".table-of-contents a").not("[href='#']").on("click", function (e) {
  e.preventDefault();
  var target = $(this.hash);
  if (target.length) {
    $("html, body").animate({
      scrollTop: target.offset().top
    }, 800, function () {
      target.addClass("highlight"); // Add the highlight class after scrolling
      setTimeout(function () {
        target.removeClass("highlight"); // Remove the highlight class after 1 second
      }, 1000);
    });
  }
});
