var labs = document.getElementById('labs').tBodies[0];
var inner = labs.innerHTML 

function reponsiveLabs(mq) {
	if (mq.matches) {
		Array.from(labs.rows).map(row => row.innerHTML = Array.from(row.cells).map(cell => cell.innerHTML).join(', '));
	} else {
		labs.innerHTML = inner
	}
}

var mq = window.matchMedia("(max-width: 42em)");
reponsiveLabs(mq);
mq.addListener(reponsiveLabs);
