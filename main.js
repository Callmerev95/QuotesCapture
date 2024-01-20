async function generateIdea() {
  const url = "https://api.quotable.io/quotes/random";
  const respone = await fetch(url);
  const api = await respone.json();

  const result = document.getElementById("result");
  const content = document.getElementById("content");
  const author = document.getElementById("author");
  const capture = document.getElementById("capture");

  content.textContent = api[0].content;
  author.textContent = api[0].author;
  author.style.display = "block";

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
