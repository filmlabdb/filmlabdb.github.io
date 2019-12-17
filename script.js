function emoj (data, type, row) {
	if (data == true) {
		return '✔️';
	} else if (data == false) {
		return '❌';
	} else if (data == null) {
		return '🤷';
	}
}

function link (data, type, row) {
	return "<a href='" + row.website + "'>" + row.name + "</a>"
}

$(document).ready( function () {
	$('#labs').DataTable( {
		keepConditions: true,
		ajax: {
			url: 'labs.json',
			dataSrc: "labs",
		},
		columns: [
			{ data: 'name',
			  render: link },
			{ data: 'city' },
			{ data: 'country' },
			{ data: 'process35',
			  className: 'dt-body-center' },
			{ data: 'process120',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: 'processlf',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: 'processc41',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: 'processbw',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: 'processe6',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: 'scanning',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: 'postal',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: 'instore',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: 'notes' }
		]
	});
});
