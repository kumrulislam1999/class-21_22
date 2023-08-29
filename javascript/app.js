
setInterval(function () {
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('seconds')
    const d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();


    let hRotate = 30 * hr + min / 2;
    let minRotate = 6 * min;
    let secRotate = 6 * sec;

    hour.style.transform = `rotateZ(${hRotate}deg)`;
    minute.style.transform = `rotate(${minRotate}deg)`;
    second.style.transform = `rotate(${secRotate}deg)`;
}, 1000);



let btn = document.getElementById('mode_toggler');
let htmlClassList = document.documentElement.classList;
btn.addEventListener("click", function () {
    if (htmlClassList.contains('dark')) {
        htmlClassList.remove('dark');
        btn.innerHTML = `<i class="fa-solid fa-moon"></i>`
        localStorage.removeItem('mode')
    } else {
        htmlClassList.add('dark');
        btn.innerHTML = `<i class="fa-solid fa-sun"></i>`
        localStorage.setItem('mode', 'dark')
    }
})
if (localStorage.getItem('mode') == 'dark') { htmlClassList.add('dark'); }