function addTeacher() {
    const name = document.getElementById("teacherName").value;
    const dept = document.getElementById("teacherDept").value;

    firebase.firestore().collection("teachers").add({
      name,
      dept
    }).then(() => {
      alert("Teacher added successfully");
    }).catch(err => {
      alert("Error adding teacher: " + err.message);
    });
  }