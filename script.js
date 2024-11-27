const age = document.getElementById("calander");
const calc = document.getElementById("btn");
const mass = document.getElementById("message");

age.max = new Date().toISOString().split("T")[0];

calc.addEventListener("click", () => {
    const val = age.value;

    let birthDate = new Date(age.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let y3, m3, d3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDays(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    mass.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> daya old`;
    mass.style.display = "block";



    console.log(y3, m3, d3);
})

function getDays(year, month) {
    return new Date(year, month, 0).getDate();
}