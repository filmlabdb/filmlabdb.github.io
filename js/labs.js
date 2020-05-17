var labs = document.getElementById('labs').tBodies[0];
var head = document.getElementById('labs').tHead.rows;
var inner = labs.innerHTML 

function reponsiveLabs(mq) {
	if (mq.matches) {
		Array.from(labs.rows).map(
			function(row) {
				var r = [];
				r.push(row.cells[0].innerHTML + ":");
				r.push(row.cells[1].innerHTML);
				if (Array.from(row.cells).slice(2, 5).some(i => i.innerHTML == "true")) {
					r.push(head[0].cells[2].innerHTML + ":")
					for (var i = 2; i < 5; i++) {
						if (row.cells[i].innerHTML == "true") {
							r.push(head[1].cells[i].innerHTML)
						}
					}
				}
				if (Array.from(row.cells).slice(5, 8).some(i => i.innerHTML == "true")) {
					r.push(head[0].cells[3].innerHTML + ":")
					for (var i = 5; i < 8; i++) {
						if (row.cells[i].innerHTML == "true") {
							r.push(head[1].cells[i].innerHTML)
						}
					}
				}
				if (row.cells[8].innerText == "true" && row.cells[9].innerText == "true") {
					r.push("postal & walk-in");
				} else if (row.cells[8].innerText == "true") {
					r.push("postal only");
				} else if (row.cells[9].innerText == "true") {
					r.push("walk-in only");
				}
				row.innerHTML = r.join(' ');
			});
	} else {
		labs.innerHTML = inner
	}
}

var mq = window.matchMedia("(max-width: 29em)");
reponsiveLabs(mq);
mq.addListener(reponsiveLabs);
