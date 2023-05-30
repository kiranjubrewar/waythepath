document.addEventListener("DOMContentLoaded", function () {
    var categoryLinks = document.getElementsByClassName("category-link");
    var stateList = document.getElementById("state-list");
    var placeList = document.getElementById("place-list");
  
    for (var i = 0; i < categoryLinks.length; i++) {
      categoryLinks[i].addEventListener("click", showStatesInCategory.bind(null, categoryLinks[i].dataset.category));
    }
  
    function showStatesInCategory(category) {
      var states = getStatesInCategory(category);
  
      stateList.innerHTML = "";
      placeList.innerHTML = "";
  
      for (var i = 0; i < states.length; i++) {
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        link.href = "#";
        link.className = "state-link";
        link.dataset.state = states[i].name;
        link.textContent = states[i].name;
        listItem.appendChild(link);
        stateList.appendChild(listItem);
      }
  
      var stateLinks = document.getElementsByClassName("state-link");
      for (var i = 0; i < stateLinks.length; i++) {
        stateLinks[i].addEventListener("click", showPlacesInState.bind(null, stateLinks[i].dataset.state));
      }
  
      stateList.classList.add("active");
      placeList.classList.remove("active");
    }
  
    function showPlacesInState(state) {
      var places = getPlacesInState(state);
  
      placeList.innerHTML = "";
  
      for (var i = 0; i < places.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = places[i].name;
        placeList.appendChild(listItem);
  
        fetchPlaceImage(places[i].name, function (placeName, imageUrl) {
          var image = new Image();
          image.src = imageUrl;
          image.alt = placeName;
  
          var placeItem = placeList.querySelector("li:last-child");
          if (placeItem && placeItem.textContent === placeName) {
            placeItem.appendChild(image);
          }
        });
      }
  
      placeList.classList.add("active");
    }
  
    function getStatesInCategory(category) {
      var states = [];
  
      switch (category) {
        case "north":
          states = [
            { name: "Jammu and Kashmir", places: ["Srinagar", "Leh", "Pahalgam"] },
            { name: "Himachal Pradesh", places: ["Shimla", "Manali", "Dharamshala"] },
            { name: "Uttarakhand", places: ["Dehradun", "Nainital", "Mussoorie"] },
            // Add more states in North India
          ];
          break;
        case "south":
          states = [
            { name: "Kerala", places: ["Munnar", "Alleppey", "Kovalam"] },
            { name: "Tamil Nadu", places: ["Chennai", "Madurai", "Ooty"] },
            { name: "Karnataka", places: ["Bangalore", "Mysore", "Coorg"] },
            // Add more states in South India
          ];
          break;
        case "northeast":
          states = [
            { name: "Assam", places: ["Guwahati", "Kaziranga", "Shillong"] },
            { name: "Meghalaya", places: ["Cherrapunji", "Shillong", "Mawlynnong"] },
            { name: "Arunachal Pradesh", places: ["Tawang", "Itanagar", "Ziro"] },
            // Add more states in Northeast India
          ];
          break;
        // Add more cases for additional categories
      }
  
      return states;
    }
  
    function getPlacesInState(state) {
        var places = [];
      
        switch (state) {
          case "Jammu and Kashmir":
            places = [
              { name: "Srinagar", places: ["Dal Lake", "Shalimar Bagh", "Nishat Bagh"] },
              { name: "Leh", places: ["Pangong Lake", "Nubra Valley", "Hemis Monastery"] },
              { name: "Pahalgam", places: ["Betaab Valley", "Aru Valley", "Chandanwari"] },
            ];
            break;
          case "Himachal Pradesh":
            places = [
              { name: "Shimla", places: ["The Ridge", "Mall Road", "Kufri"] },
              { name: "Manali", places: ["Rohtang Pass", "Solang Valley", "Hadimba Temple"] },
              { name: "Dharamshala", places: ["Tsuglagkhang Complex", "Namgyal Monastery", "Triund Trek"] },
            ];
            break;
          case "Uttarakhand":
            places = [
              { name: "Dehradun", places: ["Robber's Cave", "Tapkeshwar Temple", "Sahastradhara"] },
              { name: "Nainital", places: ["Naini Lake", "Nainital Zoo", "Tiffin Top"] },
              { name: "Mussoorie", places: ["Kempty Falls", "Gun Hill", "Camel's Back Road"] },
            ];
            break;
          // Add more cases for other states
        }
      
        return places;
      }
      
    function fetchPlaceImage(placeName, callback) {
      // Replace the placeholder image URL with your actual image fetching logic
      var placeholderImageUrl = "https://via.placeholder.com/150";
      callback(placeName, placeholderImageUrl);
    }
  });
  