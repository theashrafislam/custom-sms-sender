// const sendHandle = () => {
//     // console.log('clickded')

//     const targetNumber = document.getElementById('text');
//     const number = targetNumber.value;
//     // console.log(number)

//     const targetMessages = document.getElementById('message');
//     const messages = targetMessages.value;
//     // console.log(number, messages)

//     

//     targetMessages.value = "";
//     targetNumber.value = "";

//     setTimeout(function () {
//         window.open(url, 'name', 'height=10, width=10');
//     }, 1000);
// }

const closeModal = () => {
    const targetNumber = document.getElementById('text');
    const number = targetNumber.value;
    // console.log(number)

    const targetMessages = document.getElementById('message');
    const messages = targetMessages.value;
    // console.log(number, messages)

    //here implement main api link. ok thank you!

    targetMessages.value = "";
    targetNumber.value = "";

    setTimeout(function () {
        window.open(url, 'name', 'height=10, width=10');
    }, 1000);
}
