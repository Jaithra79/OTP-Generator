const otpOutput = document.querySelector(".otp-showcase");
const generatorButton = document.querySelector("#otp-btn");

generatorButton.addEventListener("click",() =>{

    const otpNumber = Math.floor
    (900000 * Math.random() + 100000)

    otpOutput.innerHTML=`
    <span>${otpNumber}</span>
    `;
});