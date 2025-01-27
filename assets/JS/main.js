// JavaScript Document

// Typewriter Effect //
$(document).ready(function() {
    $('#two').delay(5000);
});

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

// 	if (this.isDeleting) {
//	this.txt = fullTxt.substring(0, this.txt.length - 1);
//	} else {
 	this.txt = fullTxt.substring(0, this.txt.length + 1);

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	var that = this;
	var delta = 100 - Math.random() * 100;

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
	
		// Line 1 //
		window.onload = function() {
		var elements = document.getElementsByClassName('typewrite');
		console.log(elements);
		for (var i=0; i<elements.length; i++) {
				var toRotate = elements[i].getAttribute('data-type');
				var period = elements[i].getAttribute('data-period');
				if (toRotate) {
					new TxtType(elements[i], JSON.parse(toRotate), period);
				}
			}
	};
	
		// Line 2 //
		setTimeout(function() {
			var elements = document.getElementsByClassName('typewrite2');
			console.log(elements);
			for (var i=0; i<elements.length; i++) {
				var toRotate = elements[i].getAttribute('data-type');
				var period = elements[i].getAttribute('data-period');
				if (toRotate) {
					new TxtType(elements[i], JSON.parse(toRotate), period);
				}
			}
	}, 1500);
	

		// Line 3 //
		setTimeout(function() {
			var elements = document.getElementsByClassName('typewrite3');
			console.log(elements);
			for (var i=0; i<elements.length; i++) {
				var toRotate = elements[i].getAttribute('data-type');
				var period = elements[i].getAttribute('data-period');
				if (toRotate) {
					new TxtType(elements[i], JSON.parse(toRotate), period);
				}
			}
	}, 3500);