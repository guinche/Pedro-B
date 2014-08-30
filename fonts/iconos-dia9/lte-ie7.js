/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'any-old-icon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-vectortuts-pirate-panda' : '&#x61;',
			'icon-matt-hakes-moustache' : '&#x62;',
			'icon-quin-robinson-casual-shoe' : '&#x63;',
			'icon-justin-burns-skull' : '&#x64;',
			'icon-ian-yates-milk' : '&#x65;',
			'icon-ian-yates-porridge' : '&#x66;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};