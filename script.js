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
			{ data: 'process35' },
			{ data: 'process120' },
			{ data: 'processlf' },
			{ data: 'processc41' },
			{ data: 'processbw' },
			{ data: 'processe6' },
			{ data: 'scanning' },
			{ data: 'postal' },
			{ data: 'instore'},
			{ data: 'notes' }
		]
	} );
} );
