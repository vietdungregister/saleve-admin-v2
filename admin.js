/* salevề admin prototype · admin.js · 13/10/2026
   Chỉ phục vụ xem mẫu: sprite icon, thanh demo, mở/đóng drawer-modal-popover, tab, toast, phím tắt.
   Không phải code sản phẩm. */
(function () { try { if (!/[?&]clean=/.test(location.search)) history.replaceState(null, '', location.pathname + (location.search ? location.search + '&' : '?') + 'clean=1' + location.hash); } catch (e) {}

  'use strict';
  /* ---------- 1. Icon sprite (outline, stroke 1.75, viewBox 24) ---------- */
  var S = {
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v10h13V10"/><path d="M10 20v-6h4v6"/>',
    support: '<path d="M4 6h16v10H9l-5 4z"/><path d="M8 10h8M8 13h5"/>',
    unmatched: '<path d="M10 13a4 4 0 0 0 5.7 0l2.3-2.3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 11a4 4 0 0 0-5.7 0L6 13.3a4 4 0 0 0 5.7 5.7l1-1"/><path d="M4 4l16 16"/>',
    wallet: '<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 10h18M16 15h2"/>',
    adjust: '<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
    users: '<circle cx="12" cy="9" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>',
    log: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    content: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
    bell: '<path d="M6 17V11a6 6 0 0 1 12 0v6l1.5 2H4.5z"/><path d="M10 21h4"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    'chevron-right': '<path d="M9 6l6 6-6 6"/>',
    'chevron-left': '<path d="M15 6l-6 6 6 6"/>',
    'chevron-down': '<path d="M6 9l6 6 6-6"/>',
    check: '<path d="M5 12.5 10 17 19 7"/>',
    'check-circle': '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/>',
    'x-circle': '<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
    alert: '<path d="M12 4 2.5 20h19z"/><path d="M12 10v4M12 17v.5"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.5"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M19 13v6H5V5h6"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5"/><path d="M4 19h16"/>',
    upload: '<path d="M12 16V5M7 10l5-5 5 5"/><path d="M4 19h16"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    filter: '<path d="M4 6h16l-6 7v5l-4 2v-7z"/>',
    refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v5h-5"/>',
    eye: '<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="3"/>',
    image: '<rect x="4" y="5" width="16" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.5"/><path d="M20 15l-5-5-8 8"/>',
    trash: '<path d="M5 7h14M9 7V4h6v3M8 7l1 13h6l1-13"/>',
    edit: '<path d="M4 20h4l10-10-4-4L4 16z"/><path d="M12.5 7.5l4 4"/>',
    send: '<path d="M21 3 10 14"/><path d="M21 3l-7 18-4-7-7-4z"/>',
    more: '<circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    bank: '<path d="M3 10 12 4l9 6"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    shield: '<path d="M12 3 4.5 6v6c0 4.5 3 7.5 7.5 9 4.5-1.5 7.5-4.5 7.5-9V6z"/><path d="M12 8v4M12 15v.5"/>',
    sync: '<path d="M4 12a8 8 0 0 1 13.7-5.7"/><path d="M20 12a8 8 0 0 1-13.7 5.7"/><path d="M18 2v5h-5M6 22v-5h5"/>',
    'arrow-left': '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
    'arrow-up-right': '<path d="M7 17 17 7M8 7h9v9"/>',
    keyboard: '<rect x="3" y="7" width="18" height="11" rx="2"/><path d="M7 11h.5M11 11h.5M15 11h.5M7 14h10"/>',
    tag: '<path d="M3 12V4h8l9 9-8 8z"/><circle cx="7.5" cy="8.5" r="1.2"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3 8l9 6 9-6"/>',
    star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8z"/>',
    megaphone: '<path d="M4 10v4h3l8 4V6l-8 4z"/><path d="M18 9a4 4 0 0 1 0 6"/>',
    link: '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
    package: '<path d="M12 3 4 7v10l8 4 8-4V7z"/><path d="M4 7l8 4 8-4M12 11v10"/>',
    layers: '<path d="M12 4 3 9l9 5 9-5z"/><path d="M3 14l9 5 9-5"/>',
    history: '<path d="M4 12a8 8 0 1 0 2.3-5.7"/><path d="M4 4v5h5"/><path d="M12 8v4l3 2"/>',
    paperclip: '<path d="M20 12 11.5 20.5a5 5 0 0 1-7-7L13 5a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L15 7"/>'
  };
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">';
  Object.keys(S).forEach(function (k) { svg += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + S[k] + '</symbol>'; });
  svg += '</svg>';
  document.body.insertAdjacentHTML('afterbegin', svg);

  /* ---------- 2. Tham số URL: ?clean=1 ẩn thanh demo, ?role=ops|finance|admin ---------- */
  var q = new URLSearchParams(location.search);
  var body = document.body;
  var LBL = { admin: 'Quản trị', ops: 'Vận hành', finance: 'Kế toán' };
  var MAIL = { admin: 'admin@saleve.vn', ops: 'ops@saleve.vn', finance: 'ketoan@saleve.vn' };
  var NAME = { admin: 'Nguyễn Sơn', ops: 'Trần Đức Minh', finance: 'Lê Thu Hà' };
  var TOTAL = { admin: 9, ops: 5, finance: 4 };
  function setRole(r) {
    if (!LBL[r]) r = 'admin';
    body.setAttribute('data-role', r);
    document.querySelectorAll('[data-roles]').forEach(function (el) {
      el.hidden = el.getAttribute('data-roles').split(/\s+/).indexOf(r) < 0;
    });
    document.querySelectorAll('[data-role-label]').forEach(function (e) { e.textContent = LBL[r] + ' · ' + r; });
    document.querySelectorAll('[data-role-label-short]').forEach(function (e) { e.textContent = LBL[r]; });
    document.querySelectorAll('[data-role-total]').forEach(function (e) { e.textContent = TOTAL[r]; });
    document.title = '(' + TOTAL[r] + ') ' + document.title.replace(/^\(\d+\) /, '');
    document.querySelectorAll('[data-role-name]').forEach(function (e) { e.textContent = NAME[r]; });
    document.querySelectorAll('[data-role-mail]').forEach(function (e) { e.textContent = LBL[r] + ' · ' + MAIL[r]; });
    document.querySelectorAll('[data-role-avatar]').forEach(function (e) { e.textContent = NAME[r].split(' ').pop().charAt(0); });
    var s = document.getElementById('demo-role'); if (s) s.value = r;
  }
  if (q.get('clean')) body.classList.add('is-clean'); else body.classList.add('has-demo');
  setRole(q.get('role') || body.getAttribute('data-role') || 'admin');

  /* ---------- 3. Thanh demo (không thuộc thiết kế) ---------- */
  var SCREENS = window.ADM_SCREENS || [];
  if (!body.classList.contains('is-clean')) {
    var cur = location.pathname.split('/').pop() || 'index.html';
    var opts = SCREENS.map(function (s) { return '<option value="' + s[0] + '"' + (s[0] === cur ? ' selected' : '') + '>' + s[1] + '</option>'; }).join('');
    var bar = document.createElement('div');
    bar.className = 'demo';
    bar.innerHTML = '<span class="demo__tag">prototype</span><span>salevề · admin</span>' +
      '<select id="demo-screen" aria-label="Màn">' + opts + '</select>' +
      '<select id="demo-role" aria-label="Vai trò"><option value="admin">Xem với vai: Quản trị (admin)</option><option value="ops">Xem với vai: Vận hành (ops)</option><option value="finance">Xem với vai: Kế toán (finance)</option></select>' +
      '<span class="demo__r">Thanh này không thuộc thiết kế · <a href="?clean=1">ẩn</a> · phím <span class="kbd">?</span> xem phím tắt</span>';
    body.insertBefore(bar, body.firstChild.nextSibling);
    document.getElementById('demo-screen').addEventListener('change', function (e) {
      var r = body.getAttribute('data-role');
      location.href = e.target.value + (r && r !== 'admin' ? '?role=' + r : '');
    });
    document.getElementById('demo-role').addEventListener('change', function (e) { setRole(e.target.value); });
  }

  /* ---------- 4. Mở / đóng drawer, modal, popover; tab; toast ---------- */
  function closeAll() {
    document.querySelectorAll('.drawer.is-open,.modal-wrap.is-open,.scrim.is-open,.pop.is-open').forEach(function (e) { e.classList.remove('is-open'); });
  }
  function open(sel) {
    var el = document.querySelector(sel); if (!el) return;
    if (el.classList.contains('drawer')) {
      document.querySelectorAll('.drawer.is-open').forEach(function (d) { if (d !== el) d.classList.remove('is-open'); });
      /* drawer không có lớp phủ: bảng phía sau vẫn đọc được, bấm hàng khác là đổi drawer */
    }
    el.classList.add('is-open');
    var fx = el.querySelector('textarea, input, select, button:not([data-close])'); if (fx) setTimeout(function () { fx.focus(); }, 30);
  }
  var toastT;
  function toast(msg) {
    var t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; body.appendChild(t); }
    t.innerHTML = '<svg class="ic"><use href="#i-check-circle"/></svg><span>' + msg + '</span>';
    t.classList.add('is-on'); clearTimeout(toastT);
    toastT = setTimeout(function () { t.classList.remove('is-on'); }, 3800);
  }
  window.admToast = toast; window.admOpen = open; window.admClose = closeAll;

  document.addEventListener('click', function (e) {
    var t = e.target;
    var o = t.closest('[data-open]');
    if (o) { e.preventDefault(); open(o.getAttribute('data-open')); return; }
    var c = t.closest('[data-close]');
    if (c) { e.preventDefault(); closeAll(); return; }
    var ts = t.closest('[data-toast]');
    if (ts) {
      e.preventDefault();
      /* hộp có lý do bắt buộc: chưa đủ thì không cho xác nhận */
      var box = ts.closest('.modal, .drawer');
      if (box) {
        var bad = [].slice.call(box.querySelectorAll('textarea[data-min]')).filter(function (a) { return !a.closest('[hidden]') && a.value.trim().length < +a.getAttribute('data-min'); });
        if (bad.length) { bad.forEach(function (a) { a.classList.add('is-err'); }); bad[0].focus(); toast('Cần ghi lý do trước khi xác nhận'); return; }
      }
      closeAll(); toast(ts.getAttribute('data-toast')); return;
    }
    var tab = t.closest('[data-tab]');
    if (tab) {
      e.preventDefault();
      var grp = tab.parentElement;
      grp.querySelectorAll('[data-tab]').forEach(function (x) { x.classList.toggle('is-active', x === tab); });
      var name = tab.getAttribute('data-tab');
      var scope = tab.closest('[data-tabs]') || document;
      scope.querySelectorAll('[data-panel]').forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== name; });
      return;
    }
    var p = t.closest('[data-pop]');
    if (p) { e.preventDefault(); var el = document.querySelector(p.getAttribute('data-pop')); if (el) el.classList.toggle('is-open'); return; }
    if (!t.closest('.pop')) document.querySelectorAll('.pop.is-open').forEach(function (x) { x.classList.remove('is-open'); });
    if (t.classList.contains('scrim') || t.classList.contains('modal-wrap')) closeAll();
    var chk = t.closest('.check');
    if (chk && !chk.closest('.tbl')) { var i = chk.querySelector('i'); if (i) i.classList.toggle('on'); }
    var tg = t.closest('.toggle');
    if (tg) tg.classList.toggle('on');
    var opt = t.closest('.opt');
    if (opt) { opt.parentElement.querySelectorAll('.opt').forEach(function (x) { x.classList.toggle('is-on', x === opt); }); }
    var seg = t.closest('.seg__i');
    if (seg) { seg.parentElement.querySelectorAll('.seg__i').forEach(function (x) { x.classList.toggle('is-on', x === seg); }); }
    var chip = t.closest('.chip');
    if (chip && chip.parentElement.classList.contains('chips') && !chip.hasAttribute('data-static')) {
      chip.parentElement.querySelectorAll('.chip').forEach(function (x) { x.classList.toggle('is-active', x === chip); });
    }
  });
  document.addEventListener('keydown', function (e) {
    var tag = (e.target.tagName || '').toLowerCase();
    var typing = tag === 'input' || tag === 'textarea' || tag === 'select';
    if (e.key === 'Escape') { closeAll(); return; }
    if (typing) return;
    if (e.key === '/') { var s = document.querySelector('.hd__search input'); if (s) { e.preventDefault(); s.focus(); } }
    if (e.key === '?') { open('#modal-keys'); }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { var s2 = document.querySelector('.hd__search input'); if (s2) { e.preventDefault(); s2.focus(); } }
  });
  /* đếm ký tự textarea có data-min */
  document.querySelectorAll('textarea[data-min]').forEach(function (ta) {
    var c = ta.parentElement.querySelector('.counter'); if (!c) return;
    var min = +ta.getAttribute('data-min');
    var upd = function () { var n = ta.value.trim().length; c.textContent = n + ' ký tự' + (n < min ? ' · cần ≥ ' + min : ''); c.classList.toggle('is-ok', n >= min); };
    ta.addEventListener('input', upd); upd();
  });
})();
/* ---------- Đổi theme (hiện cả ở ?clean=1 để client duyệt) ---------- */
(function () {
  var T = [['muc', 'Kem + mực', '#2A211B'], ['reu', 'Rêu', '#2F5D50'], ['sang', 'Sáng', '#F6F4F1']];
  var q = new URLSearchParams(location.search).get('theme'), cur = 'muc';
  try { cur = q || localStorage.getItem('adm-theme') || 'muc'; } catch (e) { cur = q || 'muc'; }
  function set(t) { document.documentElement.setAttribute('data-theme', t); try { localStorage.setItem('adm-theme', t); } catch (e) {}
    document.querySelectorAll('.theme-sw button').forEach(function (b) { b.classList.toggle('is-on', b.getAttribute('data-t') === t); }); }
  var w = document.createElement('div'); w.className = 'theme-sw';
  w.innerHTML = '<span>Màu</span>' + T.map(function (x) { return '<button type="button" data-t="' + x[0] + '"><i style="background:' + x[2] + '"></i>' + x[1] + '</button>'; }).join('');
  document.body.appendChild(w);
  w.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) set(b.getAttribute('data-t')); });
  set(cur);
})();

