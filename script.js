function add_items(review_item) {
    var reviews = review_item.find('#review_section');
    reviews.empty();
    var promise = $.ajax('https://student.computing.edgehill.ac.uk/~walshd/cis1110api/product-reviews/bikeoil');
    promise.done(function (data) {
        for (var idx = 0; idx < 5; idx++) {
            reviews.append('<article class="review"> <img src="Images/reviewicon1.jpg"> <div>  <p class="red_text">*****</p> <p class="nickname">' + data[idx].nickname + '</p> </div> <p>' + data[idx].review + '</p> </article> <div class="review_seperator"></div>');
        };
    });
}


$(document).ready(function () {
    var review_item = $(this);
    add_items(review_item);

    $('button.more_reviews_button').on('click', function(event){
      $(this).hide();
      var reviews = review_item.find('#review_section');
      reviews.empty();
      var promise = $.ajax('https://student.computing.edgehill.ac.uk/~walshd/cis1110api/product-reviews/bikeoil');
      promise.done(function (data) {
          for (var idx = 0; idx < data.length; idx++) {
              reviews.append('<article class="review"> <img src="Images/reviewicon1.jpg"> <div>  <p class="red_text">*****</p> <p class="nickname">' + data[idx].nickname + '</p> </div> <p>' + data[idx].review + '</p> </article> <div class="review_seperator"></div>');
          };
      });

})

});




