let person = prompt("Anna sukunimesi", "");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Terve " + person + "! Mitä kuuluu?";
}