$(document).ready(function(){
  $(".submit").on("click",function(event){
   event.preventDefault()
   var userSearch = $(".userInput").val();
       console.log(userSearch)

  function createUrl(userSearch) {
   var url = "https://www.googleapis.com/youtube/v3/search";
   url += "?part=snippet";
   // url += "&channelId=UC-QFhQGiB-WqOjRR98XZrkA";
   url += "&q="+ userSearch;
   url += "&type=video";
   url += "&videoDuration=medium";
   url +="&key=AIzaSyALpGtcMsFAZ5klXNKclSKJ6UM0QnsjoRM";
   return url;
  };

  function getVideos (url) {
   $.get(url , function(data) {
     console.log(data);
     for (i=0; i < data.items.length; i++){
       var item = data.items[i];
       var videoId= item.id.videoId;
       $(".container").append("<h2> Title: " + item.snippet.title + "</h2>");
       // $(".container").append("<p> Description: " + item.snippet.description + "</p>");
       createUniqueLink(videoId);
     }
   });
  };
  function createUniqueLink(videoId){
   var videoUrl = "https://www.youtube.com/embed/";
   videoUrl += videoId;
   // console.log(videoUrl);
   $(".container").append("<iframe type='text/html' width='640' height='390' class='video' src='" + videoUrl + "'frameborder='0' + allowfullscreen></iframe> <br></br>");
  }

})

  $('.submit').on('click', function() {
    
  })
});
