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

			// 135
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

			// 120
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

			// 4x5
			{ data: '4x5.c41',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '4x5.b&w',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '4x5.e6',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '4x5.scan',
			  visible: false,
			  render: scan },

			// 5x7
			{ data: '5x7.c41',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '5x7.b&w',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '5x7.e6',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '5x7.scan',
			  visible: false,
			  render: scan },

			// 8x10
			{ data: '8x10.c41',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '8x10.b&w',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '8x10.e6',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '8x10.scan',
			  visible: false,
			  render: scan },

			// 110
			{ data: '110.c41',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '110.b&w',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '110.e6',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '110.scan',
			  visible: false,
			  render: scan },

			// 126
			{ data: '126.c41',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '126.b&w',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '126.e6',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '126.scan',
			  visible: false,
			  render: scan },

			// 127
			{ data: '127.c41',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '127.b&w',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '127.e6',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: '127.scan',
			  visible: false,
			  render: scan },

			// aps
			{ data: 'aps.c41',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: 'aps.b&w',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: 'aps.e6',
			  render: emoj,
			  visible: false,
			  className: 'dt-body-center' },
			{ data: 'aps.scan',
			  visible: false,
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
