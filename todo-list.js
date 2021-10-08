function addIt() {
  const a = document.querySelector("#formGroupExampleInput");
  const b = document.querySelector(".lis");
  console.log(b);

  const c = `<div class="col-8 mx-auto shadow p-2 bg-light m-5">
                    <h2 class="px-5">${a.value}</h2>
                </div>`;
  b.innerHTML += c;
  a.value = "";
}

function removeIt() {
  const a = document.querySelector("#formGroupExampleInput");
  const b = document.querySelector(".lis");
  console.log(b);
  b.innerHTML = "";
  a.value = "";
}
