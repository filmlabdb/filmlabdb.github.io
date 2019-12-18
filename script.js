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
			{ data: 'location.city' },
			{ data: 'location.country' },
			{ data: '135.c41',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: '135.b&w',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: '135.e6',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: '135.ecn2',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: '135.scan' },
			{ data: '120.c41',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: '120.b&w',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: '120.e6',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: '120.scan' },
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
