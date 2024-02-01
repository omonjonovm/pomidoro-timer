let start_btn = document.querySelector(".start");
let pause_btn = document.querySelector(".pause");
let reset_btn = document.querySelector(".reset");
minut_elem = document.querySelector(".minut"),
    sekund_elem = document.querySelector(".sekund");

let full_time = 1500,
    daqiqa = parseInt(full_time / 60),
    sekund = full_time % 60;
    time_interval  = null;

const nol = (son) => {
    return son < 10 ? "0" + son : son;
};

const time_render = () => {
    minut_elem.innerHTML = nol(daqiqa);
    sekund_elem.innerHTML = nol(sekund);
};
time_render();

start_btn.addEventListener("click", () => {
    start_btn.classList.add("hidden_element");
    pause_btn.classList.remove("hidden_element");
    reset_btn.classList.remove("hidden_element");
    startFunc();
});
pause_btn.addEventListener("click", () => {
    start_btn.classList.remove("hidden_element");
    pause_btn.classList.add("hidden_element");
    clearInterval(time_interval);
});
reset_btn.addEventListener("click", () => {
    start_btn.classList.remove("hidden_element");
    pause_btn.classList.add("hidden_element");
    reset_btn.classList.add("hidden_element");

    clearInterval(time_interval);
    time_interval = null;
    full_time =1500;
    daqiqa=parseInt(full_time / 60 );
    time_render();
});

const startFunc = () => {
    let time_interval = setInterval(() => {
        full_time--;
        daqiqa = parseInt(full_time / 60);
        sekund = full_time % 60;
        time_render();

        if (full_time <= 0) {
            clearInterval(time_interval);
            start_btn.classList.remove("hidden_element");
            pause_btn.classList.add("hidden_element");
            reset_btn.classList.add("hidden_element");
            full_time = 1500;
            daqiqa = parseInt(full_time / 60);
            sekund = full_time % 60 ;
            time_interval = null;
        }
    }, 1000)
};
// console.log(full_time, daqiqa,sekund);