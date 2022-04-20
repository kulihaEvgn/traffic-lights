const button = document.querySelector('.btn')
const bigLamp = {
    red: document.getElementById('bRed'),
    yallow: document.getElementById('bYal'),
    green: document.getElementById('bGre'),
    turnRedLigth() {
        this.yallow.classList.remove('active')
        this.green.classList.remove('active')
        this.red.classList.add('active')
    },
    turnYellowLigth() {
        this.yallow.classList.add('active')
        this.green.classList.remove('active')
        this.red.classList.remove('active')
    },
    turnGreenLigth() {
        this.yallow.classList.remove('active')
        this.green.classList.add('active')
        this.red.classList.remove('active')
    }
};
const smallLamp = {
    red: document.getElementById('sRed'),
    green: document.getElementById('sGre'),
    turnRedLigth() {
        this.green.classList.remove('active')
        this.red.classList.add('active')
    },
    turnGreenLigth() {
        this.green.classList.add('active')
        this.red.classList.remove('active')
    }

}

const blink = (elem) => elem.classList.toggle('active');

const delay = (time) => new Promise((res, rej) => setTimeout(res, time));

const trafficLightCycle = (e) => {
    let interval;
    let interval2;
    e.target.disabled = true;

    delay(1000)
        .then(() => {
            interval = setInterval(() => {
                blink(bigLamp.green)
            }, 500);
            return delay(4000)
        })
        .then(() => {
            clearInterval(interval, blink);
            bigLamp.turnYellowLigth()
            return delay(1500)
        })
        .then(() => {
            setTimeout(() => {
                interval2 = setInterval(() => {
                    blink(smallLamp.green)
                }, 500)
            }, 1000);

            bigLamp.turnRedLigth();
            smallLamp.turnGreenLigth()
            return delay(6000)
        })
        .then(() => {
            bigLamp.turnYellowLigth();
            clearInterval(interval2, blink);
            smallLamp.turnRedLigth();

            setTimeout(() => {
                bigLamp.turnGreenLigth()
                setTimeout(() => e.target.disabled = false, 500)
            }, 1000)
        })
}




button.addEventListener('click', trafficLightCycle)











