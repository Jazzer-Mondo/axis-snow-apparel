function showLogin() {
  alert("Login system will connect to Firebase soon.");
}

function editPost() {
  let text = prompt("Edit post:");
  if (text) {
    document.getElementById("post").innerText = text;
  }
}
