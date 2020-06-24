const meal = document.querySelector('.meal');
const mouth = document.querySelector('.mouth');
const snack = document.querySelector('.snack');
const counter = document.querySelector('.counter span');
const upgrade = document.querySelector('.item span');
const upgradeBtn = document.querySelector('button');
const bonus = document.querySelector('.laser-dog');
const catBonus = document.querySelector('.cat');
const xPoints = document.querySelector('.x-number');
const images = document.querySelector('.images');

const imagesArray = ['url(./img/city-2.png)', 'url(./img/city-3.png)', 'url(./img/city-4.png)', 'url(./img/city-7.png)', 'url(./img/city-8.png)', 'url(./img/city-10.png)', 'url(./img/city-11.png)', 'url(./img/city-15.png)', 'url(./img/city-16.png)', 'url(./img/mountains-1.png)', 'url(./img/mountains-3.png)', 'url(./img/mountains-4.png)', 'url(./img/sea-1.png)', 'url(./img/sea-3.png)', 'url(./img/sea-4.png)', 'url(./img/sea-5.png)', 'url(./img/earth.png)', 'url(./img/space-1.png)', 'url(./img/space-2.png)', 'url(./img/space-3.png)']



let image = 0;
let countDog = 0;
let bonusCountDog = 1;




const dogClick = () => {
    let actualPoints = countDog += bonusCountDog;

    counter.textContent = actualPoints;

    if (window.innerHeight > window.innerWidth) {
        document.querySelector('.mouth img').style.top = '50%'
    } else(document.querySelector('.mouth img').style.top = '20%')



    const openMouth = () => {
        if (window.innerHeight > window.innerWidth) {
            document.querySelector('.mouth img').style.top = '51%';
        } else(
            document.querySelector('.mouth img').style.top = '22%');

        if (document.querySelector('.snackDiv img').classList == 'snack') {
            document.querySelector('.snackDiv img').classList.remove('snack')
        }
    }

    meal.addEventListener('mousedown', openMouth);
    meal.addEventListener('touchstart', openMouth)
    // DODAĆ TOUCH EVENT


    if (document.querySelector('.snackDiv img').classList == !'snack') {
        document.querySelector('.snackDiv img').classList.add('snack')
    }


    // bonusGame()

    upgradeBtn.addEventListener('click', upgradePoints)

    if (countDog >= 100000000000) {
        images.style.backgroundColor = `rgb(0, 11, 58)`;
        images.style.transition = '4s'
    }



    return actualPoints

}


let bleep = new Audio();
bleep.src = 'sound/danger.wav';

function laserSound() {
    bleep.play()
}

const bonusGame = () => {

    console.log('bonus działa')




    // if (countDog >= 25) {
    //     catBonus.classList.add('catActive')
    //     if (countDog >= 30) {
    //         bonus.classList.add('onActive');
    //     }

    // }
    // if (countDog >= 35) {
    //     catBonus.classList.remove('catActive')
    //     if (countDog >= 40) {
    //         bonus.classList.remove('onActive');
    //     }
    // }

    // if (countDog >= 145) {
    //     catBonus.classList.add('catActive')
    //     if (countDog >= 150) {
    //         bonus.classList.add('onActive');
    //     }

    // }
    // if (countDog >= 155) {
    //     catBonus.classList.remove('catActive')
    //     if (countDog >= 160) {
    //         bonus.classList.remove('onActive');
    //     }
    // }

    const bonusActive = () => {
        catBonus.classList.add('catActive');
        bonus.classList.add('onActive');
        // laserSound()

    }

    setTimeout(bonusActive, 1000);

    const bonusInActive = () => {
        catBonus.classList.remove('catActive');
        bonus.classList.remove('onActive')

    }

    setTimeout(bonusInActive, 5000);

}
setInterval(bonusGame, 65000)




xPoints.style.display = 'none'

const upgradePoints = () => {

    console.log('działa');
    // xPoints.style.color = 'slateblue'
    // xPoints.style.fontSize = '4em'
    // xPoints.style.top = '10%'
    xPoints.style.display = 'block'
    // xPoints.style.fontFamily = `'Permanent Marker', cursive, sans-serif`;
    upgradeBtn.style.fontFamily = `'Rancho', cursive, sans-serif`;


    upgradeInstructions()

}

// DO POKOMBINOWANIA !!!!!!!

const upgradeInstructions = () => {
    console.log('bonusy')



    switch (bonusCountDog) {
        case 1:
            if (countDog >= 100) {
                countDog -= 100;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'upgrade for 200 snacks';
                bonusCountDog = 20;
                xPoints.textContent = 'x20';
                console.log('1 bonus')
            }
            break;
        case 20:
            if (countDog >= 200) {
                countDog -= 200;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'upgrade for 300 snacks';
                bonusCountDog = 40;
                xPoints.textContent = 'x40';
                console.log('2 bonus')
            }
            break;
        case 40:
            if (countDog >= 300) {
                countDog -= 300;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'upgrade for 400 snacks';
                bonusCountDog = 100;
                xPoints.textContent = 'x100';
                console.log('3 bonus')
            }
            break;
        case 100:
            if (countDog >= 400) {
                countDog -= 400;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'upgrade for 5000 snacks';
                bonusCountDog = 200;
                xPoints.textContent = 'x200';
                console.log('4 bonus')
            }
            break;
        case 200:
            if (countDog >= 5000) {
                countDog -= 5000;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'Round 2 for 10000 snacks';
                bonusCountDog = 500;
                xPoints.textContent = 'x500';
                console.log('5 bonus')
            }
            break;
        case 500:
            if (countDog >= 10000) {
                console.log('koniec');
                alert('Click and clean the poop :) ');
                endRound();
                countDog -= 10000;
                counter.textContent = countDog;

                bonusCountDog = 700;
                xPoints.textContent = 'x700';
                console.log('6 bonus')

                upgradeBtn.textContent = 'upgrade for 100K snacks';
            }
            break;
        case 700:
            if (countDog >= 100000) {
                countDog -= 100000;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'upgrade for 250K snacks';
                bonusCountDog = 1000;
                xPoints.textContent = 'x1K';
                console.log('7 bonus')
            }
            break;
        case 1000:
            if (countDog >= 250000) {
                countDog -= 250000;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'upgrade for 500K snacks';
                bonusCountDog = 2500;
                xPoints.textContent = 'x2.5K';
                console.log('8 bonus')
            }
            break;
        case 2500:
            if (countDog >= 500000) {
                countDog -= 500000;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'upgrade for 1M snacks';
                bonusCountDog = 5000;
                xPoints.textContent = 'x5K';
                console.log('8 bonus')
            }
            break;
        case 5000:
            if (countDog >= 1000000) {
                countDog -= 1000000;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'upgrade for 2M snacks';
                bonusCountDog = 10000;
                xPoints.textContent = 'x10K';
                console.log('9 bonus')
            }
            break;
        case 10000:
            if (countDog >= 2000000) {
                countDog -= 2000000;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'Round 3 for 3M snacks';
                bonusCountDog = 15000;
                xPoints.textContent = 'x15K';
                console.log('10 bonus')
            }
            break;
        case 15000:
            if (countDog >= 3000000) {
                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 3000000;
                counter.textContent = countDog;

                bonusCountDog = 25000;
                xPoints.textContent = 'x25K';
                console.log('11 bonus');

                upgradeBtn.textContent = 'upgrade for 5M snacks';

            }
            break;
        case 25000:
            if (countDog >= 5000000) {
                countDog -= 5000000;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'upgrade for 8M snacks';
                bonusCountDog = 50000;
                xPoints.textContent = 'x50K';
                console.log('12 bonus');

            }
            break;
        case 50000:
            if (countDog >= 8000000) {
                countDog -= 8000000;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'upgrade for 10M snacks';
                bonusCountDog = 100000;
                xPoints.textContent = 'x100K';
                console.log('13 bonus');

            }
            break;
        case 100000:
            if (countDog >= 10000000) {
                countDog -= 10000000;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'Round 4 for 15M snacks';
                bonusCountDog = 250000;
                xPoints.textContent = 'x250K';
                console.log('14 bonus');
            }
            break;
        case 250000:
            if (countDog >= 15000000) {
                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 15000000;
                counter.textContent = countDog;

                bonusCountDog = 500000;
                xPoints.textContent = 'x500K';
                console.log('15 bonus');

                upgradeBtn.textContent = 'upgrade for 30M snacks';

            }
            break;
        case 500000:
            if (countDog >= 30000000) {
                countDog -= 30000000;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'upgrade for 50M snacks';
                bonusCountDog = 750000;
                xPoints.textContent = 'x750K';
                console.log('16 bonus');

            }
            break;
        case 750000:
            if (countDog >= 50000000) {
                countDog -= 50000000;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'Round 5 for 80M snacks';
                bonusCountDog = 1000000;
                xPoints.textContent = 'x1M';
                console.log('17 bonus');
            }
            break;
        case 1000000:
            if (countDog >= 80000000) {
                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 80000000;
                counter.textContent = countDog;

                bonusCountDog = 1500000;
                xPoints.textContent = 'x1.5M';
                console.log('18 bonus');

                upgradeBtn.textContent = 'upgrade for 150M snacks';

            }
            break;
        case 1500000:
            if (countDog >= 150000000) {
                countDog -= 150000000;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'upgrade for 300M snacks';
                bonusCountDog = 3000000;
                xPoints.textContent = 'x3M';
                console.log('19 bonus');

            }
            break;
        case 3000000:
            if (countDog >= 300000000) {
                countDog -= 300000000;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'Round 6 for 500M snacks';
                bonusCountDog = 5000000;
                xPoints.textContent = 'x5M';
                console.log('20 bonus');
            }
            break;
        case 5000000:
            if (countDog >= 500000000) {
                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 500000000;
                counter.textContent = countDog;

                bonusCountDog = 7500000;
                xPoints.textContent = 'x7.5M';
                console.log('21 bonus');

                upgradeBtn.textContent = 'upgrade for 750M snacks';

            }
            break;
        case 7500000:
            if (countDog >= 750000000) {
                countDog -= 750000000;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'upgrade for 1000M snacks';
                bonusCountDog = 10000000;
                xPoints.textContent = 'x10M';
                console.log('22 bonus');

            }
            break;
        case 10000000:
            if (countDog >= 1000000000) {
                alert('Congrats!!! You have crossed the 1000M-point barrier! Now you can travel faster!')
                countDog -= 1000000000;
                counter.textContent = countDog;
                upgradeBtn.textContent = 'Round 7 for 1300M snacks';
                bonusCountDog = 15000000;
                xPoints.textContent = 'x15M';
                console.log('23 bonus');
            }
            break;
        case 15000000:
            if (countDog >= 1300000000) {
                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 1300000000;
                counter.textContent = countDog;

                bonusCountDog = 30000000;
                xPoints.textContent = 'x30M';
                console.log('24 bonus');

                upgradeBtn.textContent = 'Round 8 for 2000M snacks';

            }
            break;
        case 30000000:
            if (countDog >= 2000000000) {
                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 2000000000;
                counter.textContent = countDog;

                bonusCountDog = 50000000;
                xPoints.textContent = 'x50M';
                console.log('25 bonus');

                upgradeBtn.textContent = 'Round 9 for 3000M snacks';

            }
            break;
        case 50000000:
            if (countDog >= 3000000000) {
                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 3000000000;
                counter.textContent = countDog;

                bonusCountDog = 75000000;
                xPoints.textContent = 'x75M';
                console.log('26 bonus');

                upgradeBtn.textContent = 'Round 10 for 5000M snacks';

            }
            break;
        case 75000000:
            if (countDog >= 5000000000) {
                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 5000000000;
                counter.textContent = countDog;

                bonusCountDog = 100000000;
                xPoints.textContent = 'x100M';
                console.log('27 bonus');

                upgradeBtn.textContent = 'Round 11 for 7500M snacks';

            }
            break;
        case 100000000:
            if (countDog >= 7500000000) {
                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 7500000000;
                counter.textContent = countDog;

                bonusCountDog = 125000000;
                xPoints.textContent = 'x125M';
                console.log('28 bonus');

                upgradeBtn.textContent = 'Round 11 for 10BLN snacks';

            }
            break;
        case 125000000:
            if (countDog >= 10000000000) {
                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 10000000000;
                counter.textContent = countDog;

                bonusCountDog = 250000000;
                xPoints.textContent = 'x250M';
                console.log('29 bonus');

                upgradeBtn.textContent = 'Round 12 for 15BLN snacks';

            }
            break;
        case 250000000:
            if (countDog >= 15000000000) {
                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 15000000000;
                counter.textContent = countDog;

                bonusCountDog = 500000000;
                xPoints.textContent = 'x500M';
                console.log('30 bonus');

                upgradeBtn.textContent = 'Round 13 for 25BLN snacks';

            }
            break;
        case 500000000:
            if (countDog >= 25000000000) {
                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 25000000000;
                counter.textContent = countDog;

                bonusCountDog = 750000000;
                xPoints.textContent = 'x750M';
                console.log('31 bonus');

                upgradeBtn.textContent = 'Round 14 for 40BLN snacks';

            }
            break;
        case 750000000:
            if (countDog >= 40000000000) {
                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 40000000000;
                counter.textContent = countDog;

                bonusCountDog = 1000000000;
                xPoints.textContent = 'x1000M';
                console.log('32 bonus');

                upgradeBtn.textContent = 'Round 15 for 60BLN snacks';

            }
            break;
        case 1000000000:
            if (countDog >= 60000000000) {
                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 60000000000;
                counter.textContent = countDog;

                bonusCountDog = 1250000000;
                xPoints.textContent = 'x1250M';
                console.log('33 bonus');

                upgradeBtn.textContent = 'Round 16 for 80BLN snacks';

            }
            break;
        case 1250000000:
            if (countDog >= 80000000000) {

                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 80000000000;
                counter.textContent = countDog;

                bonusCountDog = 1500000000;
                xPoints.textContent = 'x1500M';
                console.log('34 bonus');

                upgradeBtn.textContent = 'Round 17 for 100BLN snacks';

            }
            break;
        case 1500000000:
            if (countDog >= 100000000000) {
                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 100000000000;
                counter.textContent = countDog;

                bonusCountDog = 1750000000;
                xPoints.textContent = 'x1750M';
                console.log('35 bonus');

                upgradeBtn.textContent = 'Round 18 for 150BLN snacks';

            }
            break;
        case 1750000000:
            if (countDog >= 150000000000) {

                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 150000000000;
                counter.textContent = countDog;

                bonusCountDog = 2000000000;
                xPoints.textContent = 'x2000M';
                console.log('36 bonus');

                upgradeBtn.textContent = 'Round 19 for 200BLN snacks';

            }
            break;
        case 2000000000:
            if (countDog >= 200000000000) {

                console.log('koniec');
                alert('Click and clean the poop :)');
                endRound();
                countDog -= 200000000000;
                counter.textContent = countDog;

                bonusCountDog = 2500000000;
                xPoints.textContent = 'x2500M';
                console.log('37 bonus');

                upgradeBtn.textContent = 'Round 20 for 500BLN snacks';

            }
            break;
        case 2500000000:
            if (countDog >= 500000000000) {

                console.log('koniec');
                alert('Now the space dog is very fat and full of snakcs, go home and let him rest :)  ');
                endRound();
                countDog -= 500000000000;
                counter.textContent = countDog;

                bonusCountDog = 2500000000;
                xPoints.textContent = 'x2500M';
                console.log('38 bonus');

                upgradeBtn.textContent = 'GAME OVER';

            }
            break;


    }


}

const endRound = () => {
    console.log('end round działa')



    // meal.removeEventListener('click', dogClick);


    mouth.style.display = 'none';
    const dog = document.querySelector('.dog img');
    dog.src = 'img/dog-full.png';

    // dog.style.top = '-5%';
    dog.style.transform = 'rotate(-35deg)'
    // dog.style.left = '-80%';

    if (window.innerHeight > window.innerWidth) {
        dog.style.height = '75%',
            dog.style.top = '40%',
            dog.style.left = '30%'
    } else(dog.style.height = '150%',
        dog.style.top = '-5%',
        dog.style.left = '-80%'
    )


    dog.style.transition = 'linear 4s'
    const poop = document.createElement('img');
    poop.classList.add('poop');
    document.querySelector('.dog').appendChild(poop);

    poop.style.width = 'auto';
    poop.style.height = 'auto';
    poop.src = 'img/poop.png';
    // poop.style.left = '85%';
    // poop.style.top = '70%';
    poop.style.cursor = 'pointer';

    if (window.innerHeight > window.innerWidth) {
        poop.style.left = '25%',
            poop.style.top = '85%'
    } else(poop.style.left = '65%',
        poop.style.top = '70%')



    newRound = () => {
        console.log('new round działa')
        poop.style.display = 'none';
        meal.addEventListener('click', dogClick);
        mouth.style.display = 'block';
        dog.src = 'img/mela.png';

        if (window.innerHeight > window.innerWidth) {
            dog.style.height = '50%',
                dog.style.width = 'auto',
                dog.style.left = '50%',
                dog.style.top = '50%'
        } else(
            dog.style.height = '100%',
            dog.style.width = 'auto',
            dog.style.left = '65%',
            dog.style.top = '20%'
        )


        dog.style.transform = 'rotate(0deg)';
        dog.style.transition = 'none';
        // upgradeBtn.textContent = 'upgrade for 50k snacks';
        image++;
        images.style.backgroundImage = imagesArray[image];
        console.log(imagesArray[image]);









    }
    poop.addEventListener('click', newRound);

}


meal.addEventListener('click', dogClick);