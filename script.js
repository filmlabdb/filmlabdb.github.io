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
	return "<a href='" + row.website + "'>" + row.name + "</a>";
}

function scan (data, type, row) {
	if (Array.isArray(data)) {
		return data.map(x => x[0].toUpperCase() + x.slice(1)).join("<br/>");
	} else if (typeof data === 'string') {
		return data[0].toUpperCase() + data.slice(1);
	} else if (typeof data === 'boolean') {
		if (data) {
			return "Yes - Unknown";
		} else {
		return '❌';
		}
	}
}

$(document).ready( function () {
	var table = $('#labs').DataTable( {
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
			{ data: '135.scan',
			  render: scan },
			{ data: '120.c41',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: '120.b&w',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: '120.e6',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: '120.scan',
			  render: scan },
			{ data: 'postal',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: 'instore',
			  render: emoj,
			  className: 'dt-body-center' },
			{ data: 'notes' }
		]
	});

	$('a.toggle-vis').on('click', function(e) {
		e.preventDefault();
		var cols = $(this).attr('data-column').split(", ").map(x =>
			table.column(x));

		cols.map(x => x.visible(!x.visible()));
	});
});
