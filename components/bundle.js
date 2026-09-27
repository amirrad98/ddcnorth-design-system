/* @ds-bundle: {"format":4,"namespace":"DdcNorth","components":[{"name":"Logo"},{"name":"Button"},{"name":"Label"},{"name":"Card"},{"name":"Note"},{"name":"Icon"}]} */
(function () {
  var React = window.React, h = React.createElement;
  var P = {"rotor": "M108.07878 0.00000L140.69187 0.00000L171.91490 52.90768L174.74772 7.18814L202.99148 23.49468L203.57758 84.92559L228.89064 46.74772L245.19719 74.99148L214.98931 128.48526L256.00000 108.07878L256.00000 140.69187L203.09232 171.91490L248.81186 174.74772L232.50532 202.99148L171.07441 203.57758L209.25228 228.89064L181.00852 245.19719L127.51474 214.98931L147.92122 256.00000L115.30813 256.00000L84.08510 203.09232L81.25228 248.81186L53.00852 232.50532L52.42242 171.07441L27.10936 209.25228L10.80281 181.00852L41.01069 127.51474L0.00000 147.92122L0.00000 115.30813L52.90768 84.08510L7.18814 81.25228L23.49468 53.00852L84.92559 52.42242L46.74772 27.10936L74.99148 10.80281L128.48526 41.01069ZM178.8 128A50.8 50.8 0 1 0 77.2 128A50.8 50.8 0 1 0 178.8 128Z", "d": "M66.5 0H48V31.7C42.5 25 36 21.8 27 21.8C10.8 21.8 -0.5 34.3 -0.5 52.5C-0.5 71 10.5 82.5 26.5 82.5C35.6 82.5 42.6 79.2 48 71V81.3H66.5ZM32.5 35.3C23.2 35.3 17.6 41.8 17.6 52C17.6 62.3 23.2 68 32.6 68C42.1 68 48.1 61.8 48.1 52C48.1 41.8 42.1 35.3 32.5 35.3Z", "c": "M62.5 45H44.7C43.1 37.5 38.7 34.8 32.6 34.8C23.5 34.8 17.8 41.4 17.8 52.5C17.8 63.5 23.6 69.4 32.6 69.4C38.8 69.4 43.4 65.9 44.7 59H62.5C60.8 74.3 49.5 82.5 32 82.5C11.7 82.5 -0.4 71.2 -0.4 52.4C-0.4 33.7 11.7 21.5 32.5 21.5C50.9 21.5 61.1 29.5 62.5 45Z", "north": "M9.26354029062087 47.51651254953764C9.26354029062087 35.90984147952443 16.020475561426686 31.060105680317037 24.41215323645971 31.060105680317037C33.02179656538969 31.060105680317037 38.03500660501981 36.12780713342139 38.03500660501981 46.09973579920739V81.19220607661822H47.29854689564068V45.445838837516504C47.29854689564068 30.133751651254947 37.76254953764861 22.55944517833553 26.1558784676354 22.55944517833553C18.854029062087186 22.55944517833553 13.02344782034346 25.556472919418752 9.04557463672391 32.0954425363276V23.649273447820335H0.0V81.19220607661822H9.26354029062087ZM83.00306472919418 82.49999999999999C98.96904887714663 82.49999999999999 109.70385733157198 70.07595772787317 109.70385733157198 52.52972258916776C109.70385733157198 34.874504623513864 98.96904887714663 22.34147952443857 83.00306472919418 22.34147952443857C67.03708058124174 22.34147952443857 56.302272126816376 34.874504623513864 56.302272126816376 52.52972258916776C56.302272126816376 70.07595772787317 67.03708058124174 82.49999999999999 83.00306472919418 82.49999999999999ZM83.00306472919418 74.10832232496696C72.1047820343461 74.10832232496696 65.67479524438573 65.60766182298546 65.67479524438573 52.52972258916776C65.67479524438573 39.342800528401575 72.15927344782034 30.73315719947159 83.00306472919418 30.73315719947159C93.84685601056802 30.73315719947159 100.33133421400262 39.39729194187582 100.33133421400262 52.52972258916776C100.33133421400262 65.55317040951122 93.90134742404226 74.10832232496696 83.00306472919418 74.10832232496696ZM118.70758256274767 81.19220607661822H127.97112285336854V45.77278731836195C127.97112285336854 36.018824306472915 133.47475561426683 31.71400264200792 139.85025099075295 31.71400264200792C142.52033025099075 31.71400264200792 144.7544782034346 32.14993394980184 145.51735799207398 32.3678996036988V23.10435931307793C144.7544782034346 22.99537648612945 143.28321003963012 22.77741083223249 141.59397622192864 22.77741083223249C134.4011096433289 22.77741083223249 129.87832232496697 26.75528401585204 127.75315719947159 32.69484808454425H127.53519154557463V23.649273447820335H118.70758256274767ZM178.00688243064727 23.649273447820335H166.34571994715984V7.955746367239101H157.08217965653895V23.649273447820335H146.83779392338175V31.605019815059435H157.08217965653895V68.223249669749C157.08217965653895 76.88738441215322 161.93191545574635 81.19220607661822 171.79486129458388 81.19220607661822H178.00688243064727V73.23645970937912H172.6667239101717C167.9259709379128 73.23645970937912 166.34571994715984 71.71070013210038 166.34571994715984 67.24240422721267V31.605019815059435H178.00688243064727ZM195.07533685601055 47.51651254953764C195.07533685601055 35.90984147952443 201.83227212681638 31.060105680317037 210.2239498018494 31.060105680317037C218.83359313077938 31.060105680317037 223.8468031704095 36.12780713342139 223.8468031704095 46.09973579920739V81.19220607661822H233.11034346103037V45.445838837516504C233.11034346103037 30.133751651254947 223.5743461030383 22.55944517833553 211.9676750330251 22.55944517833553C204.8292998678996 22.55944517833553 199.0532100396301 25.447490092470268 195.07533685601055 31.71400264200792V0.0H185.8117965653897V81.19220607661822H195.07533685601055Z"};
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function rest(p, omit) { var o = {}; for (var k in p) if (omit.indexOf(k) < 0) o[k] = p[k]; return o; }

  function rotor(tx, ty, s) {
    return h('g', { transform: 'translate(' + tx + ' ' + ty + ') scale(' + s + ')' },
      h('path', { fill: 'currentColor', fillRule: 'evenodd', d: P.rotor }));
  }
  function word(tx, ty, s) {
    return h('g', { transform: 'translate(' + tx + ' ' + ty + ') scale(' + s + ')', fill: 'currentColor' },
      h('path', { d: P.d, fillRule: 'evenodd' }),
      h('path', { d: P.d, fillRule: 'evenodd', transform: 'translate(70 0)' }),
      h('path', { d: P.c, transform: 'translate(140 0)' }),
      h('path', { d: P.north, transform: 'translate(205.8 0)' }));
  }
  var LAYOUTS = {
    horizontal: { vb: '0 0 958.415 288', w: 958.415, parts: function () { return [rotor(16, 16, 1), word(304, 84, 1.4545454545454546)]; } },
    stacked:    { vb: '0 0 500.171 340', w: 500.171, parts: function () { return [rotor(154.08551626666667, 16, 0.75), word(16, 236, 1.0666666666666667)]; } },
    wordmark:   { vb: '0 0 670.415 152', w: 670.415, parts: function () { return [word(16, 16, 1.4545454545454546)]; } },
    symbol:     { vb: '0 0 256 256', w: 256, parts: function () { return [rotor(0, 0, 1)]; } }
  };

  function Logo(props) {
    var variant = props.variant || 'horizontal', L = LAYOUTS[variant] || LAYOUTS.horizontal;
    var title = props.title || 'ddcnorth';
    var o = rest(props, ['variant', 'title', 'width', 'className', 'tone']);
    o.xmlns = 'http://www.w3.org/2000/svg'; o.viewBox = L.vb; o.role = 'img'; o['aria-label'] = title;
    o.className = cx('ddc-logo', props.tone && 'ddc-logo--' + props.tone, props.className);
    if (props.width != null) o.width = props.width;
    return h.apply(null, ['svg', o, h('title', null, title)].concat(L.parts()));
  }

  function Button(props) {
    var variant = props.variant || 'secondary';
    var o = rest(props, ['variant', 'className', 'href', 'children']);
    o.className = cx('ddc-btn', 'ddc-btn--' + variant, props.className);
    if (props.href) { o.href = props.href; return h('a', o, props.children); }
    if (!o.type) o.type = 'button';
    return h('button', o, props.children);
  }

  function Label(props) {
    var o = rest(props, ['as', 'className', 'children']);
    o.className = cx('ddc-label-text', props.className);
    return h(props.as || 'span', o, props.children);
  }

  function Card(props) {
    var o = rest(props, ['caption', 'media', 'tone', 'className', 'children']);
    o.className = cx('ddc-card', props.tone === 'reversed' && 'ddc-card--reversed', props.className);
    return h('div', o,
      props.media ? h('div', { className: 'ddc-card__media' }, props.media) : null,
      props.children,
      props.caption ? h('p', { className: 'ddc-card__caption' }, props.caption) : null);
  }

  function Note(props) {
    var o = rest(props, ['className', 'children']);
    o.className = cx('ddc-note', props.className);
    o.role = o.role || 'note';
    return h('p', o, props.children);
  }

  function spokes(len, step, count) {
    var out = [];
    for (var i = 0; i < count; i++) out.push(h('path', { key: i, d: 'M32 5V' + (5 + len), transform: 'rotate(' + (i * step) + ' 32 32)' }));
    return out;
  }
  var ICONS = {
    clarity: function () { return spokes(15, 30, 12); },
    cycle: function () { return spokes(5, 15, 24); },
    direction: function () { return [h('path', { key: 0, d: 'M7 25H36V12L57 32L36 52V39H7Z' })]; },
    network: function () {
      var out = [];
      for (var i = 0; i < 12; i++) out.push(h('circle', { key: i, cx: 32, cy: 7, r: 1.9, fill: 'currentColor', stroke: 'none', transform: 'rotate(' + (i * 30) + ' 32 32)' }));
      return out;
    },
    signal: function () {
      return [['13', '40'], ['25', '29'], ['37', '18'], ['49', '7']].map(function (b, i) {
        return h('path', { key: i, d: 'M' + b[0] + ' 52V' + b[1], strokeWidth: 7 });
      });
    }
  };
  function Icon(props) {
    var name = ICONS[props.name] ? props.name : 'clarity';
    var size = props.size || 32;
    var o = rest(props, ['name', 'size', 'label', 'className']);
    o.xmlns = 'http://www.w3.org/2000/svg'; o.viewBox = '0 0 64 64'; o.width = size; o.height = size;
    o.className = cx('ddc-icon', props.className);
    if (props.label) { o.role = 'img'; o['aria-label'] = props.label; } else { o['aria-hidden'] = 'true'; }
    return h('svg', o, h.apply(null, ['g', { stroke: 'currentColor', strokeWidth: 2, fill: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter' }].concat(ICONS[name]())));
  }
  Icon.names = Object.keys(ICONS);

  window.DdcNorth = Object.assign(window.DdcNorth || {}, { Logo: Logo, Button: Button, Label: Label, Card: Card, Note: Note, Icon: Icon });
})();
