document.getElementById("topicForm").addEventListener("submit", function(e) {
      e.preventDefault();

      let category = document.getElementById("category").value;
      let name = document.getElementById("name").value.trim();
      let desc = document.getElementById("desc").value.trim();

      if (!category || !name || !desc) return;

      let topics = JSON.parse(localStorage.getItem("topics")) || [];

      topics.push({ category, name, desc });

      localStorage.setItem("topics", JSON.stringify(topics));

      document.getElementById("topicForm").reset();

      alert("✅ Topic added successfully!");
    });