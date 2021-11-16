// * TYPEWRITER.JS 


const element = document.querySelector('.typewrite');

const arrayOfStrings = `["${String.fromCodePoint('👋'.codePointAt(0))} Hello, I&#39m Miguel Cruz ${String.fromCodePoint('😺'.codePointAt(0))}", "${String.fromCodePoint('💻 '.codePointAt(0))} I&#39m a Front End Developer", "I live in London ${String.fromCodePoint('💂🏼'.codePointAt(0))} (uk)", "I LOVE THIS GAME ${String.fromCodePoint('🏀"'.codePointAt(0))}"]`;
// const arrayOfStrings = `["Hello, I&#39m Miguel Cruz😺", "💻 I&#39m a Front End Developer", "I live in London💂🏼(uk)", "I LOVE THIS GAME 🏀"]`;

const time = 1000;


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

function typewritePlaying() {
    new TxtType(element, JSON.parse(arrayOfStrings), time);
};

export { typewritePlaying}