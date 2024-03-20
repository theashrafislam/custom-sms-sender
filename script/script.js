const sendHandle = () => {
    // console.log('clickded')

    const targetNumber = document.getElementById('text');
    const number = targetNumber.value;
    // console.log(number)

    const targetMessages = document.getElementById('message');
    const messages = targetMessages.value;
    // console.log(number, messages)

    const url = `http://tbbtech.great-site.net/halfcustomsms.php?number=${number}&msg=${messages}`;

    targetMessages.value = "";
    targetNumber.value = "";

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('SMS sent successfully!');
        }
    };

    xhr.send();
}