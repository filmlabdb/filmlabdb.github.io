function emoj (data, type, row) {
	if (data == true) {
		return '✔️';
	} else if (data == false) {
		return '❌';
	}
}

$(document).ready( function () {
	$('#labs').DataTable( {
		ajax: {
			url: 'labs.json',
			dataSrc: "labs",
		},
		columns: [
			{ data: 'name' },
			{ data: 'website' },
			{ data: 'city' },
			{ data: 'country' },
			{ data: 'process35',
			  render: emoj },
			{ data: 'process120',
			  render: emoj },
			{ data: 'processlf',
			  render: emoj },
			{ data: 'processc41',
			  render: emoj },
			{ data: 'processbw',
			  render: emoj },
			{ data: 'processe6',
			  render: emoj },
			{ data: 'scanning',
			  render: emoj },
			{ data: 'postal',
			  render: emoj },
			{ data: 'instore',
			  render: emoj },
			{ data: 'notes' }
		]
	} );
} );
