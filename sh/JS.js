
window.addEventListener("DOMContentLoaded", function () {
    const type = document.getElementById("type");
    const kol = document.getElementById("kol");
    const radios = document.getElementById("radios");
    const check = document.getElementById("checkbox");
    radios.style.display = "none";
    check.style.display = "none";
    kol.addEventListener("input", function () {
      if (Number.isNaN(Number(kol.value))) {
        alert("Неверно введенные данные");
        return;
      }
      let t = type.value;
      switch (t) {
        case "1":
          cP(1);
          break;
        case "2":
          cP(2);
          break;
        case "3":
          cP(3);
          break;
      }
    });
    type.addEventListener("change", function () {
      switch (type.value) {
        case "1":
          radios.style.display = "none";
          check.style.display = "none";
          cP(1);
          break;
        case "2":
          radios.style.display = "block";
          check.style.display = "none";
          cP(2);
          break;
        case "3":
          radios.style.display = "none";
          check.style.display = "block";
          cP(3);
          break;
      }
    });
  });
  
  function cP(option) {
    const count = Number(document.getElementById("kol").value);
    const m = 2;
    const total = document.getElementById("total");
    let r = document.querySelectorAll("#radios input[type=radio]");
    let c = document.getElementById("checkbox-check");
    let res = m * count;
    switch (option) {
      case 1:
        total.value = res;
        break;
      case 2:
        r.forEach(function (p) {
          p.addEventListener("change", function () {
            res = m * count + Number(p.value);
            total.value = res;
          });
          total.value = res;
        });
        break;
      case 3:
        c.addEventListener("change", function () {
          if (c.checked) {
            res = m * count + Number(c.value);
            total.value = res;
          } else {
            res = m * count;
            total.value = res;
          }
        });
        total.value = res;
        break;
    }
  }
