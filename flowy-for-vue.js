/* eslint-disable prefer-spread */
/* eslint-disable max-params */
/* eslint-disable max-depth */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable complexity */
/* eslint-disable new-cap */
/* eslint-disable no-void */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-sequences */
/* eslint-disable block-scoped-var */
/* eslint-disable eqeqeq */
/* eslint-disable radix */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
var flowy = function (e, t, l, i, n, o, r) {
	t || (t = function () {}),
	l || (l = function () {}),
	i
      || (i = function () {
      	return !0;
      }),
	n
      || (n = function () {
      	return !1;
      }),
	o || (o = 20),
	r || (r = 80),
	Element.prototype.matches
      || (Element.prototype.matches
        = Element.prototype.msMatchesSelector
        || Element.prototype.webkitMatchesSelector),
	Element.prototype.closest
      || (Element.prototype.closest = function (e) {
      	let t = this;
      	do {
      		if (Element.prototype.matches.call(t, e)) {
      			return t;
      		}

      		t = t.parentElement || t.parentNode;
      	} while (t !== null && t.nodeType === 1);

      	return null;
      });
	let d = !1;

	function c(e, t, l) {
		return i(e, t, l);
	}

	function a(e, t) {
		return n(e, t);
	}

	(flowy.load = function () {
		if (!d) {
			d = !0;
			var i = [];
			var n = [];
			var s = e;
			var u = 0;
			var p = 0;
			(window.getComputedStyle(s).position != 'absolute'
        && window.getComputedStyle(s).position != 'fixed')
        || ((u = s.getBoundingClientRect().left),
        (p = s.getBoundingClientRect().top));
			var g;
			var w;
			var f;
			let h;
			var y;
			var C;
			var v = !1;
			var m = o;
			var B = r;
			var x = 0;
			var R = !1;
			var S = !1;
			let b = 0;
			const L = document.createElement('DIV');
			L.classList.add('indicator'),
			L.classList.add('invisible'),
			s.appendChild(L),
			(flowy.import = function (e) {
				s.innerHTML = e.html;
				// For (var t = 0; t < e.blockarr.length; t++)
				//   i.push({
				//     childwidth: parseFloat(e.blockarr[t].childwidth),
				//     parent: parseFloat(e.blockarr[t].parent),
				//     id: parseFloat(e.blockarr[t].id),
				//     x: parseFloat(e.blockarr[t].x),
				//     y: parseFloat(e.blockarr[t].y),
				//     width: parseFloat(e.blockarr[t].width),
				//     height: parseFloat(e.blockarr[t].height),
				//   });
				// i.length > 1 && (D(), E());
			}),
			(flowy.output = function () {
				const e = {
					html: s.innerHTML,
					blockarr: i,
					blocks: [],
				};
				if (i.length > 0) {
					for (var t = 0; t < i.length; t++) {
						e.blocks.push({
							id: i[t].id,
							parent: i[t].parent,
							data: [],
							attr: [],
						});
						const l = document.querySelector(
							'.blockid[value=\'' + i[t].id + '\']',
						).parentNode;
						l.querySelectorAll('input').forEach(l => {
							const i = l.getAttribute('name');
							const n = l.value;
							e.blocks[t].data.push({
								name: i,
								value: n,
								action: n,
							});
						}),
						Array.prototype.slice.call(l.attributes).forEach(l => {
							const i = {};
							(i[l.name] = l.value), e.blocks[t].attr.push(i);
						});
					}

					return e;
				}
			}),
			(flowy.deleteBlocks = function () {
				(i = []), (s.innerHTML = '<div class=\'indicator invisible\'></div>');
			}),
			(flowy.beginDrag = function (e) {
				if (
					((window.getComputedStyle(s).position != 'absolute'
              && window.getComputedStyle(s).position != 'fixed')
              || ((u = s.getBoundingClientRect().left),
              (p = s.getBoundingClientRect().top)),
					e.targetTouches
						? ((y = e.changedTouches[0].clientX),
						(C = e.changedTouches[0].clientY))
						: ((y = e.clientX), (C = e.clientY)),
					e.which != 3 && e.target.closest('.create-flowy'))
				) {
					h = e.target.closest('.create-flowy');
					const l = e.target.closest('.create-flowy').cloneNode(!0);
					e.target.closest('.create-flowy').classList.add('dragnow'),
					l.classList.add('block'),
					l.classList.remove('create-flowy'),
					i.length === 0
						? ((l.innerHTML
                    += '<input type=\'hidden\' name=\'blockid\' class=\'blockid\' value=\''
                    + i.length
                    + '\'>'),
						document.body.appendChild(l),
						(g = document.querySelector(
							'.blockid[value=\'' + i.length + '\']',
						).parentNode))
						: ((l.innerHTML
                    += '<input type=\'hidden\' name=\'blockid\' class=\'blockid\' value=\''
                    + (Math.max.apply(
                    	Math,
                    	i.map(e => e.id),
                    )
                      + 1)
                    + '\'>'),
						document.body.appendChild(l),
						(g = document.querySelector(
							'.blockid[value=\''
                      + (parseInt(
                      	Math.max.apply(
                      		Math,
                      		i.map(e => e.id),
                      	),
                      )
                        + 1)
                      + '\']',
						).parentNode)),
					(n = e.target.closest('.create-flowy')),
					t(n),
					g.classList.add('dragging'),
					(v = !0),
					(w
                = y
                - e.target.closest('.create-flowy').getBoundingClientRect().left),
					(f
                = C
                - e.target.closest('.create-flowy').getBoundingClientRect().top),
					(g.style.left = y - w + 'px'),
					(g.style.top = C - f + 'px');
				}

				let n;
			}),
			(flowy.endDrag = function (e) {
				if (e.which != 3 && (v || R)) {
					if (
						((S = !1),
						l(),
						document
							.querySelector('.indicator')
							.classList.contains('invisible')
                || document.querySelector('.indicator').classList.add('invisible'),
						v
                && (h.classList.remove('dragnow'), g.classList.remove('dragging')),
						parseInt(g.querySelector('.blockid').value) === 0 && R)
					) {
						X('rearrange');
					} else if (
						v
              && i.length == 0
              && g.getBoundingClientRect().top + window.scrollY
                > s.getBoundingClientRect().top + window.scrollY
              && g.getBoundingClientRect().left + window.scrollX
                > s.getBoundingClientRect().left + window.scrollX
					) {
						X('drop');
					} else if (v && i.length == 0) {
						q();
					} else if (v) {
						for (var t = i.map(e => e.id), o = 0; o < i.length; o++) {
							if (k(t[o])) {
								(v = !1),
								c(
									g,
									!1,
									document.querySelector('.blockid[value=\'' + t[o] + '\']')
										.parentNode,
								)
									? T(g, o, t)
									: ((v = !1), q());
								break;
							}

							o == i.length - 1 && ((v = !1), q());
						}
					} else if (R) {
						for (t = i.map(e => e.id), o = 0; o < i.length; o++) {
							if (k(t[o])) {
								(v = !1), g.classList.remove('dragging'), T(g, o, t);
								break;
							}

							if (o == i.length - 1) {
								if (a(g, i.filter(e => e.id == t[o])[0])) {
									(v = !1),
									g.classList.remove('dragging'),
									T(g, t.indexOf(b), t);
									break;
								}

								(R = !1), (n = []), (v = !1), q();
								break;
							}
						}
					}
				}
			}),
			(flowy.moveBlock = function (e) {
				if (
					(e.targetTouches
						? ((y = e.targetTouches[0].clientX),
						(C = e.targetTouches[0].clientY))
						: ((y = e.clientX), (C = e.clientY)),
					S)
				) {
					(R = !0), g.classList.add('dragging');
					const t = parseInt(g.querySelector('.blockid').value);
					(b = i.filter(e => e.id == t)[0].parent),
					n.push(i.filter(e => e.id == t)[0]),
					(i = i.filter(e => e.id != t)),
					t != 0
                && document
                	.querySelector('.arrowid[value=\'' + t + '\']')
                	.parentNode.remove();
					for (
						var l = i.filter(e => e.parent == t), o = !1, r = [], d = [];
						!o;

					) {
						for (var c = 0; c < l.length; c++) {
							if (l[c] != t) {
								n.push(i.filter(e => e.id == l[c].id)[0]);
								const e = document.querySelector(
									'.blockid[value=\'' + l[c].id + '\']',
								).parentNode;
								const t = document.querySelector(
									'.arrowid[value=\'' + l[c].id + '\']',
								).parentNode;
								(e.style.left
                    = e.getBoundingClientRect().left
                    + window.scrollX
                    - (g.getBoundingClientRect().left + window.scrollX)
                    + 'px'),
								(e.style.top
                      = e.getBoundingClientRect().top
                      + window.scrollY
                      - (g.getBoundingClientRect().top + window.scrollY)
                      + 'px'),
								(t.style.left
                      = t.getBoundingClientRect().left
                      + window.scrollX
                      - (g.getBoundingClientRect().left + window.scrollX)
                      + 'px'),
								(t.style.top
                      = t.getBoundingClientRect().top
                      + window.scrollY
                      - (g.getBoundingClientRect().top + window.scrollY)
                      + 'px'),
								g.appendChild(e),
								g.appendChild(t),
								r.push(l[c].id),
								d.push(l[c].id);
							}
						}

						r.length == 0
							? (o = !0)
							: ((l = i.filter(e => r.includes(e.parent))), (r = []));
					}

					for (c = 0; c < i.filter(e => e.parent == t).length; c++) {
						var a = i.filter(e => e.parent == t)[c];
						i = i.filter(e => e.id != a);
					}

					for (c = 0; c < d.length; c++) {
						a = d[c];
						i = i.filter(e => e.id != a);
					}

					i.length > 1 && D(), (S = !1);
				}

				if (
					(v
						? ((g.style.left = y - w + 'px'), (g.style.top = C - f + 'px'))
						: R
                && ((g.style.left
                  = y - w - (window.scrollX + u) + s.scrollLeft + 'px'),
                (g.style.top
                  = C - f - (window.scrollY + p) + s.scrollTop + 'px'),
                (n.filter(
                	e => e.id == parseInt(g.querySelector('.blockid').value),
                ).x
                  = g.getBoundingClientRect().left
                  + window.scrollX
                  + parseInt(window.getComputedStyle(g).width) / 2
                  + s.scrollLeft),
                (n.filter(
                	e => e.id == parseInt(g.querySelector('.blockid').value),
                ).y
                  = g.getBoundingClientRect().top
                  + window.scrollY
                  + parseInt(window.getComputedStyle(g).height) / 2
                  + s.scrollTop)),
					v || R)
				) {
					y
              > s.getBoundingClientRect().width
                + s.getBoundingClientRect().left
                - 10
            && y
              < s.getBoundingClientRect().width
                + s.getBoundingClientRect().left
                + 10
						? (s.scrollLeft += 10)
						: y < s.getBoundingClientRect().left + 10
                && y > s.getBoundingClientRect().left - 10
							? (s.scrollLeft -= 10)
							: C
                  > s.getBoundingClientRect().height
                    + s.getBoundingClientRect().top
                    - 10
                && C
                  < s.getBoundingClientRect().height
                    + s.getBoundingClientRect().top
                    + 10
								? (s.scrollTop += 10)
								: C < s.getBoundingClientRect().top + 10
                && C > s.getBoundingClientRect().top - 10
                && (s.scrollLeft -= 10);
					g.getBoundingClientRect().left,
					window.scrollX,
					parseInt(window.getComputedStyle(g).width),
					s.scrollLeft,
					s.getBoundingClientRect().left,
					g.getBoundingClientRect().top,
					window.scrollY,
					s.scrollTop,
					s.getBoundingClientRect().top;
					const h = i.map(e => e.id);
					for (c = 0; c < i.length; c++) {
						if (k(h[c])) {
							document
								.querySelector('.blockid[value=\'' + h[c] + '\']')
								.parentNode.appendChild(document.querySelector('.indicator')),
							(document.querySelector('.indicator').style.left
                    = document.querySelector('.blockid[value=\'' + h[c] + '\']')
                    	.parentNode.offsetWidth
                      / 2
                    - 5
                    + 'px'),
							(document.querySelector('.indicator').style.top
                    = document.querySelector('.blockid[value=\'' + h[c] + '\']')
                    	.parentNode.offsetHeight + 'px'),
							document
								.querySelector('.indicator')
								.classList.remove('invisible');
							break;
						}

						c == i.length - 1
                && (document
                	.querySelector('.indicator')
                	.classList.contains('invisible')
                  || document
                  	.querySelector('.indicator')
                  	.classList.add('invisible'));
					}
				}
			}),
			document.addEventListener('mousedown', flowy.beginDrag),
			document.addEventListener('mousedown', Y, !1),
			document.addEventListener('touchstart', flowy.beginDrag),
			document.addEventListener('touchstart', Y, !1),
			document.addEventListener('mouseup', Y, !1),
			document.addEventListener('mousemove', flowy.moveBlock, !1),
			document.addEventListener('touchmove', flowy.moveBlock, !1),
			document.addEventListener('mouseup', flowy.endDrag, !1),
			document.addEventListener('touchend', flowy.endDrag, !1);
		}

		function k(e) {
			const t
          = g.getBoundingClientRect().left
          + window.scrollX
          + parseInt(window.getComputedStyle(g).width) / 2
          + s.scrollLeft
          - s.getBoundingClientRect().left;
			const l
          = g.getBoundingClientRect().top
          + window.scrollY
          + s.scrollTop
          - s.getBoundingClientRect().top;
			return (
				t
          >= i.filter(t => t.id == e)[0].x
            - i.filter(t => t.id == e)[0].width / 2
            - m
        && t
          <= i.filter(t => t.id == e)[0].x
            + i.filter(t => t.id == e)[0].width / 2
            + m
        && l
          >= i.filter(t => t.id == e)[0].y
            - i.filter(t => t.id == e)[0].height / 2
        && l
          <= i.filter(t => t.id == e)[0].y + i.filter(t => t.id == e)[0].height
			);
		}

		function q() {
			s.appendChild(document.querySelector('.indicator')),
			g.parentNode.removeChild(g);
		}

		function X(e) {
			if (e == 'drop') {
				c(g, !0, void 0),
				(v = !1),
				(g.style.top
            = g.getBoundingClientRect().top
            + window.scrollY
            - (p + window.scrollY)
            + s.scrollTop
            + 'px'),
				(g.style.left
            = g.getBoundingClientRect().left
            + window.scrollX
            - (u + window.scrollX)
            + s.scrollLeft
            + 'px'),
				s.appendChild(g),
				i.push({
					parent: -1,
					childwidth: 0,
					id: parseInt(g.querySelector('.blockid').value),
					x:
              g.getBoundingClientRect().left
              + window.scrollX
              + parseInt(window.getComputedStyle(g).width) / 2
              + s.scrollLeft
              - s.getBoundingClientRect().left,
					y:
              g.getBoundingClientRect().top
              + window.scrollY
              + parseInt(window.getComputedStyle(g).height) / 2
              + s.scrollTop
              - s.getBoundingClientRect().top,
					width: parseInt(window.getComputedStyle(g).width),
					height: parseInt(window.getComputedStyle(g).height),
				});
			} else if (e == 'rearrange') {
				g.classList.remove('dragging'), (R = !1);
				for (let t = 0; t < n.length; t++) {
					if (n[t].id != parseInt(g.querySelector('.blockid').value)) {
						const e = document.querySelector(
							'.blockid[value=\'' + n[t].id + '\']',
						).parentNode;
						const l = document.querySelector(
							'.arrowid[value=\'' + n[t].id + '\']',
						).parentNode;
						(e.style.left
              = e.getBoundingClientRect().left
              + window.scrollX
              - window.scrollX
              + s.scrollLeft
              - 1
              - u
              + 'px'),
						(e.style.top
                = e.getBoundingClientRect().top
                + window.scrollY
                - window.scrollY
                + s.scrollTop
                - p
                - 1
                + 'px'),
						(l.style.left
                = l.getBoundingClientRect().left
                + window.scrollX
                - window.scrollX
                + s.scrollLeft
                - u
                - 1
                + 'px'),
						(l.style.top
                = l.getBoundingClientRect().top
                + window.scrollY
                + s.scrollTop
                - 1
                - p
                + 'px'),
						s.appendChild(e),
						s.appendChild(l),
						(n[t].x
                = e.getBoundingClientRect().left
                + window.scrollX
                + parseInt(e.offsetWidth) / 2
                + s.scrollLeft
                - s.getBoundingClientRect().left
                - 1),
						(n[t].y
                = e.getBoundingClientRect().top
                + window.scrollY
                + parseInt(e.offsetHeight) / 2
                + s.scrollTop
                - s.getBoundingClientRect().top
                - 1);
					}
				}

				(n.filter(e => e.id == 0)[0].x
          = g.getBoundingClientRect().left
          + window.scrollX
          + parseInt(window.getComputedStyle(g).width) / 2
          + s.scrollLeft
          - s.getBoundingClientRect().left),
				(n.filter(e => e.id == 0)[0].y
            = g.getBoundingClientRect().top
            + window.scrollY
            + parseInt(window.getComputedStyle(g).height) / 2
            + s.scrollTop
            - s.getBoundingClientRect().top),
				(i = i.concat(n)),
				(n = []);
			}
		}

		function I(e, t, l, n) {
			t < 0
				? ((s.innerHTML
            += '<div class="arrowblock"><input type="hidden" class="arrowid" value="'
            + g.querySelector('.blockid').value
            + '"><svg preserveaspectratio="none" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M'
            + (i.filter(e => e.id == n)[0].x - e.x + 5)
            + ' 0L'
            + (i.filter(e => e.id == n)[0].x - e.x + 5)
            + ' '
            + B / 2
            + 'L5 '
            + B / 2
            + 'L5 '
            + l
            + '" stroke="#C5CCD0" stroke-width="2px"/><path d="M0 '
            + (l - 5)
            + 'H10L5 '
            + l
            + 'L0 '
            + (l - 5)
            + 'Z" fill="#C5CCD0"/></svg></div>'),
				(document.querySelector(
					'.arrowid[value="' + g.querySelector('.blockid').value + '"]',
				).parentNode.style.left
            = e.x
            - 5
            - (u + window.scrollX)
            + s.scrollLeft
            + s.getBoundingClientRect().left
            + 'px'))
				: ((s.innerHTML
            += '<div class="arrowblock"><input type="hidden" class="arrowid" value="'
            + g.querySelector('.blockid').value
            + '"><svg preserveaspectratio="none" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0L20 '
            + B / 2
            + 'L'
            + t
            + ' '
            + B / 2
            + 'L'
            + t
            + ' '
            + l
            + '" stroke="#C5CCD0" stroke-width="2px"/><path d="M'
            + (t - 5)
            + ' '
            + (l - 5)
            + 'H'
            + (t + 5)
            + 'L'
            + t
            + ' '
            + l
            + 'L'
            + (t - 5)
            + ' '
            + (l - 5)
            + 'Z" fill="#C5CCD0"/></svg></div>'),
				(document.querySelector(
					'.arrowid[value="'
              + parseInt(g.querySelector('.blockid').value)
              + '"]',
				).parentNode.style.left
            = i.filter(e => e.id == n)[0].x
            - 20
            - (u + window.scrollX)
            + s.scrollLeft
            + s.getBoundingClientRect().left
            + 'px')),
			(document.querySelector(
				'.arrowid[value="'
            + parseInt(g.querySelector('.blockid').value)
            + '"]',
			).parentNode.style.top
          = i.filter(e => e.id == n)[0].y
          + i.filter(e => e.id == n)[0].height / 2
          + s.getBoundingClientRect().top
          - p
          + 'px');
		}

		function N(e, t, l, n) {
			t < 0
				? ((document.querySelector(
					'.arrowid[value="' + n.id + '"]',
				).parentNode.style.left
            = e.x
            - 5
            - (u + window.scrollX)
            + s.getBoundingClientRect().left
            + 'px'),
				(document.querySelector(
					'.arrowid[value="' + n.id + '"]',
				).parentNode.innerHTML
            = '<input type="hidden" class="arrowid" value="'
            + n.id
            + '"><svg preserveaspectratio="none" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M'
            + (i.filter(e => e.id == n.parent)[0].x - e.x + 5)
            + ' 0L'
            + (i.filter(e => e.id == n.parent)[0].x - e.x + 5)
            + ' '
            + B / 2
            + 'L5 '
            + B / 2
            + 'L5 '
            + l
            + '" stroke="#C5CCD0" stroke-width="2px"/><path d="M0 '
            + (l - 5)
            + 'H10L5 '
            + l
            + 'L0 '
            + (l - 5)
            + 'Z" fill="#C5CCD0"/></svg>'))
				: ((document.querySelector(
					'.arrowid[value="' + n.id + '"]',
				).parentNode.style.left
            = i.filter(e => e.id == n.parent)[0].x
            - 20
            - (u + window.scrollX)
            + s.getBoundingClientRect().left
            + 'px'),
				(document.querySelector(
					'.arrowid[value="' + n.id + '"]',
				).parentNode.innerHTML
            = '<input type="hidden" class="arrowid" value="'
            + n.id
            + '"><svg preserveaspectratio="none" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0L20 '
            + B / 2
            + 'L'
            + t
            + ' '
            + B / 2
            + 'L'
            + t
            + ' '
            + l
            + '" stroke="#C5CCD0" stroke-width="2px"/><path d="M'
            + (t - 5)
            + ' '
            + (l - 5)
            + 'H'
            + (t + 5)
            + 'L'
            + t
            + ' '
            + l
            + 'L'
            + (t - 5)
            + ' '
            + (l - 5)
            + 'Z" fill="#C5CCD0"/></svg>'));
		}

		function T(e, t, l) {
			R || s.appendChild(e);
			for (
				var o = 0, r = 0, d = 0;
				d < i.filter(e => e.parent == l[t]).length;
				d++
			) {
				(f = i.filter(e => e.parent == l[t])[d]).childwidth > f.width
					? (o += f.childwidth + m)
					: (o += f.width + m);
			}

			o += parseInt(window.getComputedStyle(e).width);
			for (d = 0; d < i.filter(e => e.parent == l[t]).length; d++) {
				(f = i.filter(e => e.parent == l[t])[d]).childwidth > f.width
					? ((document.querySelector(
						'.blockid[value=\'' + f.id + '\']',
					).parentNode.style.left
              = i.filter(e => e.id == l[t])[0].x
              - o / 2
              + r
              + f.childwidth / 2
              - f.width / 2
              + 'px'),
					(f.x
              = i.filter(e => e.parent == l[t])[0].x
              - o / 2
              + r
              + f.childwidth / 2),
					(r += f.childwidth + m))
					: ((document.querySelector(
						'.blockid[value=\'' + f.id + '\']',
					).parentNode.style.left
              = i.filter(e => e.id == l[t])[0].x - o / 2 + r + 'px'),
					(f.x
              = i.filter(e => e.parent == l[t])[0].x - o / 2 + r + f.width / 2),
					(r += f.width + m));
			}

			if (
				((e.style.left
          = i.filter(e => e.id == l[t])[0].x
          - o / 2
          + r
          - (window.scrollX + u)
          + s.scrollLeft
          + s.getBoundingClientRect().left
          + 'px'),
				(e.style.top
          = i.filter(e => e.id == l[t])[0].y
          + i.filter(e => e.id == l[t])[0].height / 2
          + B
          - (window.scrollY + p)
          + s.getBoundingClientRect().top
          + 'px'),
				R)
			) {
				(n.filter(
					t => t.id == parseInt(e.querySelector('.blockid').value),
				)[0].x
          = e.getBoundingClientRect().left
          + window.scrollX
          + parseInt(window.getComputedStyle(e).width) / 2
          + s.scrollLeft
          - s.getBoundingClientRect().left),
				(n.filter(
					t => t.id == parseInt(e.querySelector('.blockid').value),
				)[0].y
            = e.getBoundingClientRect().top
            + window.scrollY
            + parseInt(window.getComputedStyle(e).height) / 2
            + s.scrollTop
            - s.getBoundingClientRect().top),
				(n.filter(
					t => t.id == e.querySelector('.blockid').value,
				)[0].parent = l[t]);
				for (d = 0; d < n.length; d++) {
					if (n[d].id != parseInt(e.querySelector('.blockid').value)) {
						const e = document.querySelector(
							'.blockid[value=\'' + n[d].id + '\']',
						).parentNode;
						const t = document.querySelector(
							'.arrowid[value=\'' + n[d].id + '\']',
						).parentNode;
						(e.style.left
              = e.getBoundingClientRect().left
              + window.scrollX
              - (window.scrollX + s.getBoundingClientRect().left)
              + s.scrollLeft
              + 'px'),
						(e.style.top
                = e.getBoundingClientRect().top
                + window.scrollY
                - (window.scrollY + s.getBoundingClientRect().top)
                + s.scrollTop
                + 'px'),
						(t.style.left
                = t.getBoundingClientRect().left
                + window.scrollX
                - (window.scrollX + s.getBoundingClientRect().left)
                + s.scrollLeft
                + 20
                + 'px'),
						(t.style.top
                = t.getBoundingClientRect().top
                + window.scrollY
                - (window.scrollY + s.getBoundingClientRect().top)
                + s.scrollTop
                + 'px'),
						s.appendChild(e),
						s.appendChild(t),
						(n[d].x
                = e.getBoundingClientRect().left
                + window.scrollX
                + parseInt(window.getComputedStyle(e).width) / 2
                + s.scrollLeft
                - s.getBoundingClientRect().left),
						(n[d].y
                = e.getBoundingClientRect().top
                + window.scrollY
                + parseInt(window.getComputedStyle(e).height) / 2
                + s.scrollTop
                - s.getBoundingClientRect().top);
					}
				}

				(i = i.concat(n)), (n = []);
			} else {
				i.push({
					childwidth: 0,
					parent: l[t],
					id: parseInt(e.querySelector('.blockid').value),
					x:
            e.getBoundingClientRect().left
            + window.scrollX
            + parseInt(window.getComputedStyle(e).width) / 2
            + s.scrollLeft
            - s.getBoundingClientRect().left,
					y:
            e.getBoundingClientRect().top
            + window.scrollY
            + parseInt(window.getComputedStyle(e).height) / 2
            + s.scrollTop
            - s.getBoundingClientRect().top,
					width: parseInt(window.getComputedStyle(e).width),
					height: parseInt(window.getComputedStyle(e).height),
				});
			}

			const c = i.filter(
				t => t.id == parseInt(e.querySelector('.blockid').value),
			)[0];
			if (
				(I(c, c.x - i.filter(e => e.id == l[t])[0].x + 20, B, l[t]),
				i.filter(e => e.id == l[t])[0].parent != -1)
			) {
				for (var a = !1, g = l[t]; !a;) {
					if (i.filter(e => e.id == g)[0].parent == -1) {
						a = !0;
					} else {
						let w = 0;
						for (d = 0; d < i.filter(e => e.parent == g).length; d++) {
							var f;
							(f = i.filter(e => e.parent == g)[d]).childwidth > f.width
								? d == i.filter(e => e.parent == g).length - 1
									? (w += f.childwidth)
									: (w += f.childwidth + m)
								: d == i.filter(e => e.parent == g).length - 1
									? (w += f.width)
									: (w += f.width + m);
						}

						(i.filter(e => e.id == g)[0].childwidth = w),
						(g = i.filter(e => e.id == g)[0].parent);
					}
				}

				i.filter(e => e.id == g)[0].childwidth = o;
			}

			R && ((R = !1), e.classList.remove('dragging')), D(), E();
		}

		function Y(e) {
			if (((S = !1), M(e.target, 'block'))) {
				const t = e.target.closest('.block');
				e.targetTouches
					? ((y = e.targetTouches[0].clientX), (C = e.targetTouches[0].clientY))
					: ((y = e.clientX), (C = e.clientY)),
				e.type !== 'mouseup'
            && M(e.target, 'block')
            && e.which != 3
            && (v
              || R
              || ((S = !0),
              (w = y - ((g = t).getBoundingClientRect().left + window.scrollX)),
              (f = C - (g.getBoundingClientRect().top + window.scrollY))));
			}
		}

		function M(e, t) {
			return (
				Boolean(e.className && e.className.split(' ').indexOf(t) >= 0)
        || (e.parentNode && M(e.parentNode, t))
			);
		}

		function E() {
			x = i.map(e => e.x);
			const e = i.map(e => e.width);
			const t = x.map((t, l) => t - e[l] / 2);
			if (
				(x = Math.min.apply(Math, t))
        < s.getBoundingClientRect().left + window.scrollX - u
			) {
				for (var l = i.map(e => e.id), n = 0; n < i.length; n++) {
					if (
						((document.querySelector(
							'.blockid[value=\'' + i.filter(e => e.id == l[n])[0].id + '\']',
						).parentNode.style.left
              = i.filter(e => e.id == l[n])[0].x
              - i.filter(e => e.id == l[n])[0].width / 2
              - x
              + s.getBoundingClientRect().left
              - u
              + 20
              + 'px'),
						i.filter(e => e.id == l[n])[0].parent != -1)
					) {
						const o = i.filter(e => e.id == l[n])[0];
						const r
                = o.x
                - i.filter(
                	e => e.id == i.filter(e => e.id == l[n])[0].parent,
                )[0].x;
						document.querySelector(
							'.arrowid[value="' + l[n] + '"]',
						).parentNode.style.left
              = r < 0
              	? o.x - x + 20 - 5 + s.getBoundingClientRect().left - u + 'px'
              	: i.filter(
              		e => e.id == i.filter(e => e.id == l[n])[0].parent,
								)[0].x
                  - 20
                  - x
                  + s.getBoundingClientRect().left
                  - u
                  + 20
                  + 'px';
					}
				}

				for (n = 0; n < i.length; n++) {
					i[n].x
            = document
            	.querySelector('.blockid[value=\'' + i[n].id + '\']')
            	.parentNode.getBoundingClientRect().left
            + window.scrollX
            + s.scrollLeft
            + parseInt(
            	window.getComputedStyle(
            		document.querySelector('.blockid[value=\'' + i[n].id + '\']')
            			.parentNode,
            	).width,
            )
              / 2
            - 20
            - s.getBoundingClientRect().left;
				}
			}
		}

		function D() {
			for (var e = i.map(e => e.parent), t = 0; t < e.length; t++) {
				e[t] == -1 && t++;
				for (
					var l = 0, n = 0, o = 0;
					o < i.filter(l => l.parent == e[t]).length;
					o++
				) {
					var r = i.filter(l => l.parent == e[t])[o];
					i.filter(e => e.parent == r.id).length == 0 && (r.childwidth = 0),
					r.childwidth > r.width
						? o == i.filter(l => l.parent == e[t]).length - 1
							? (l += r.childwidth)
							: (l += r.childwidth + m)
						: o == i.filter(l => l.parent == e[t]).length - 1
							? (l += r.width)
							: (l += r.width + m);
				}

				e[t] != -1 && (i.filter(l => l.id == e[t])[0].childwidth = l);
				for (o = 0; o < i.filter(l => l.parent == e[t]).length; o++) {
					r = i.filter(l => l.parent == e[t])[o];
					const c = document.querySelector(
						'.blockid[value=\'' + r.id + '\']',
					).parentNode;
					const a = i.filter(l => l.id == e[t]);
					(c.style.top = a.y + B + s.getBoundingClientRect().top - p + 'px'),
					(a.y += B),
					r.childwidth > r.width
						? ((c.style.left
                  = a[0].x
                  - l / 2
                  + n
                  + r.childwidth / 2
                  - r.width / 2
                  - (u + window.scrollX)
                  + s.getBoundingClientRect().left
                  + 'px'),
						(r.x = a[0].x - l / 2 + n + r.childwidth / 2),
						(n += r.childwidth + m))
						: ((c.style.left
                  = a[0].x
                  - l / 2
                  + n
                  - (u + window.scrollX)
                  + s.getBoundingClientRect().left
                  + 'px'),
						(r.x = a[0].x - l / 2 + n + r.width / 2),
						(n += r.width + m));
					const d = i.filter(e => e.id == r.id)[0];
					N(d, d.x - i.filter(e => e.id == r.parent)[0].x + 20, B, r);
				}
			}
		}
	}),
	flowy.load();
};
