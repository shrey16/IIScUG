// JavaScript Document
var svgButtons=['FilledCircleSvg1', 'FilledCircleSvg2', 'FilledCircleSvg3', 'FilledCircleSvg4'];
var stage = 0;
var stages=['Stage1','Stage2','Stage3','Stage4'];
var leftButton=document.getElementById('LeftArrow');
var rightButton=document.getElementById('RightArrow');
var elem = document.getElementById(svgButtons[stage]);
elem.classList.toggle('final');
var bg_elem = document.getElementById('SmallDots');
var bg_elem1 = document.getElementById('BigDots');
bg_elem.classList.add(stages[stage]);
bg_elem1.classList.add(stages[stage]);

function changeFocus(f)
{
	'use strict';
	bg_elem.classList.remove(stages[stage]);
	bg_elem1.classList.remove(stages[stage]);
	var elem1 = document.getElementById(svgButtons[stage]);
	elem1.classList.toggle('final');
	stage = f;
	elem1 = document.getElementById(svgButtons[stage]);
	elem1.classList.toggle('final');
	bg_elem.classList.add(stages[stage]);
	bg_elem1.classList.add(stages[stage]);
}

function moveLeft()
{
	'use strict';
	if(stage === 0)
	{
		changeFocus(3);
	}
	else
	{
		changeFocus(stage-1);
	}
}

function moveRight()
{
	'use strict';
	if(stage === 3)
	{
		changeFocus(0);
	}
	else
	{
		changeFocus(stage+1);
	}
}

leftButton.onclick = moveLeft;
rightButton.onclick = moveRight;
document.getElementById('FilledCircle1').onclick = function() {
	'use strict';
	changeFocus(0);
};

document.getElementById('FilledCircle2').onclick = function() {
	'use strict';
	changeFocus(1);
};

document.getElementById('FilledCircle3').onclick = function() {
	'use strict';
	changeFocus(2);
};

document.getElementById('FilledCircle4').onclick = function() {
	'use strict';
	changeFocus(3);
};