$(document).on("pagecreate", "#feedbackPage", function() {
    $("#feedbackForm").submit(function(event) {
      event.preventDefault();
      
      // Collect form data
      var name = $("#userName").val();
      var feedback = $("#feedbackText").val();
      var satisfaction = $("#satisfactionToggle").val() == "1" ? "Unsatisfied" : "Satisfied";
      
      // Display a simple alert for demonstration
      alert("Thank you for your feedback!\n\nName: " + name + "\nFeedback: " + feedback + "\nSatisfaction: " + satisfaction);
      
      // Reset form after submission
      $("#feedbackForm")[0].reset();
    });
  });
  