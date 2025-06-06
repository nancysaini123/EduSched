function bookAppointment() {
    const student = firebase.auth().currentUser;
    const teacherName = document.getElementById("teacherName").value;
    const time = document.getElementById("appointmentTime").value;
    const message = document.getElementById("appointmentMessage").value;

    firebase.firestore().collection("appointments").add({
      studentId: student.uid,
      teacherName,
      time,
      message,
      status: "pending"
    }).then(() => {
      alert("Appointment booked successfully!");
    }).catch(err => {
      alert("Error booking appointment: " + err.message);
    });
  }