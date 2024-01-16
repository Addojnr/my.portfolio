function addSubmission() {
    // Get the message of the new submission
    let submission = document.getElementById("new_submission");
    // If the user has left a submission, display a pop-up
    if (submission.value != null && submission.value.trim() != "") {
      console.log("New submission added");
      showPopup(true);
      //Call showPopup here
  
      // Create a new 'submission' element and set it's value to the user's message
      var element = document.createElement("div");
      element.setAttribute("class","submission");
      element.innerHTML = "\<span\>&#8220;\</span\>" + submission.value + "\<span\>&#8221;\</span\>";
      // Add this element to the end of the list of submissions
      document.getElementById("all_submissions").appendChild(element); 
      
      // Reset the value of the textarea
      submission.value = "";
    }
  }
  
  function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible'
    } else {
      document.getElementById('popup').style.visibility = 'hidden'
    }
  }
  