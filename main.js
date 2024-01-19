async function generateIdea() {
  const url = "https://www.boredapi.com/api/activity";
  const respone = await fetch(url);
  const api = await respone.json();

  const result = document.getElementById("result");
  const activity = document.getElementById("activity");
  const type = document.getElementById("type");
  const capture = document.getElementById("capture");

  activity.textContent = api.activity;
  type.textContent = api.type;
  type.style.display = "block";

  let count = 0;

  capture.addEventListener("click", function () {
    count && location.reload();

    html2canvas(result).then((callback) => {
      capture.setAttribute("href", callback.toDataURL("image/png"));
      capture.textContent = "💾";
      count = 1;
    });
  });
}
