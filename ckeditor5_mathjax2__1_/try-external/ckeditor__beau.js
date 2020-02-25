/*!
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function (t) {
    t.en = Object.assign(t.en || {}, {
        a: "Image toolbar",
        b: "Table toolbar",
        c: "Cannot upload file:",
        d: "Block quote",
        e: "Bold",
        f: "Choose heading",
        g: "Heading",
        h: "Numbered List",
        i: "Bulleted List",
        j: "image widget",
        k: "Full size image",
        l: "Side image",
        m: "Left aligned image",
        n: "Centered image",
        o: "Right aligned image",
        p: "Insert table",
        q: "Header column",
        r: "Insert column left",
        s: "Insert column right",
        t: "Delete column",
        u: "Column",
        v: "Header row",
        w: "Insert row below",
        x: "Insert row above",
        y: "Delete row",
        z: "Row",
        aa: "Merge cell up",
        ab: "Merge cell right",
        ac: "Merge cell down",
        ad: "Merge cell left",
        ae: "Split cell vertically",
        af: "Split cell horizontally",
        ag: "Merge cells",
        ah: "Insert image",
        ai: "media widget",
        aj: "Insert media",
        ak: "The URL must not be empty.",
        al: "This media URL is not supported.",
        am: "Enter image caption",
        an: "Upload failed",
        ao: "Insert math",
        ap: "Italic",
        aq: "Insert image or file",
        ar: "Link",
        as: "Widget toolbar",
        at: "Upload in progress",
        au: "Could not obtain resized image URL.",
        av: "Selecting resized image failed",
        aw: "Could not insert image at the current position.",
        ax: "Inserting image failed",
        ay: "Paragraph",
        az: "Heading 1",
        ba: "Heading 2",
        bb: "Heading 3",
        bc: "Heading 4",
        bd: "Heading 5",
        be: "Heading 6",
        bf: "Change image text alternative",
        bg: "Save",
        bh: "Cancel",
        bi: "Paste the media URL in the input.",
        bj: "Tip: Paste the URL into the content to embed faster.",
        bk: "Media URL",
        bl: "Unlink",
        bm: "Edit link",
        bn: "Open link in new tab",
        bo: "This link has no URL",
        bp: "Link URL",
        bq: "Rich Text Editor",
        br: "Dropdown toolbar",
        bs: "Editor toolbar",
        bt: "Undo",
        bu: "Redo",
        bv: "Text alternative",
        bw: "%0 of %1",
        bx: "Previous",
        by: "Next",
        bz: "Open in a new tab",
        ca: "Downloadable",
        cb: "Equation preview",
        cc: "Insert equation in TeX format.",
        cd: "Display mode",
        ce: "Rich Text Editor, %0"
    })
}(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {})), function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClassicEditor = e() : t.ClassicEditor = e()
}(window, function () {
    return function (t) {
        var e = {};

        function n(i) {
            if (e[i]) return e[i].exports;
            var o = e[i] = {i: i, l: !1, exports: {}};
            return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = t, n.c = e, n.d = function (t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var o in t) n.d(i, o, function (e) {
                return t[e]
            }.bind(null, o));
            return i
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 203)
    }([function (t, e, n) {
        "use strict";
        n.d(e, "b", function () {
            return o
        }), n.d(e, "a", function () {
            return r
        });
        const i = "https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html";

        class o extends Error {
            constructor(t, e, n) {
                t = r(t), n && (t += " " + JSON.stringify(n)), super(t), this.name = "CKEditorError", this.context = e, this.data = n
            }

            is(t) {
                return "CKEditorError" === t
            }
        }

        function r(t) {
            const e = t.match(/^([^:]+):/);
            return e ? t + ` Read more: ${i}#error-${e[1]}\n` : t
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var i = n(13), o = n(5);

        class r {
            constructor(t) {
                this.editor = t
            }

            destroy() {
                this.stopListening()
            }
        }

        Object(o.a)(r, i.a)
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return a
        });
        var i = n(3), o = n(46), r = n(0), s = n(24);

        class a {
            constructor(t, e = null) {
                this.start = i.a._createAt(t), this.end = e ? i.a._createAt(e) : i.a._createAt(t), this.start.stickiness = this.isCollapsed ? "toNone" : "toNext", this.end.stickiness = this.isCollapsed ? "toNone" : "toPrevious"
            }

            * [Symbol.iterator]() {
                yield* new o.a({boundaries: this, ignoreElementEnd: !0})
            }

            get isCollapsed() {
                return this.start.isEqual(this.end)
            }

            get isFlat() {
                const t = this.start.getParentPath(), e = this.end.getParentPath();
                return "same" == Object(s.a)(t, e)
            }

            get root() {
                return this.start.root
            }

            containsPosition(t) {
                return t.isAfter(this.start) && t.isBefore(this.end)
            }

            containsRange(t, e = !1) {
                t.isCollapsed && (e = !1);
                const n = this.containsPosition(t.start) || e && this.start.isEqual(t.start),
                    i = this.containsPosition(t.end) || e && this.end.isEqual(t.end);
                return n && i
            }

            containsItem(t) {
                const e = i.a._createBefore(t);
                return this.containsPosition(e) || this.start.isEqual(e)
            }

            is(t) {
                return "range" == t || "model:range" == t
            }

            isEqual(t) {
                return this.start.isEqual(t.start) && this.end.isEqual(t.end)
            }

            isIntersecting(t) {
                return this.start.isBefore(t.end) && this.end.isAfter(t.start)
            }

            getDifference(t) {
                const e = [];
                return this.isIntersecting(t) ? (this.containsPosition(t.start) && e.push(new a(this.start, t.start)), this.containsPosition(t.end) && e.push(new a(t.end, this.end))) : e.push(new a(this.start, this.end)), e
            }

            getIntersection(t) {
                if (this.isIntersecting(t)) {
                    let e = this.start, n = this.end;
                    return this.containsPosition(t.start) && (e = t.start), this.containsPosition(t.end) && (n = t.end), new a(e, n)
                }
                return null
            }

            getMinimalFlatRanges() {
                const t = [], e = this.start.getCommonPath(this.end).length, n = i.a._createAt(this.start);
                let o = n.parent;
                for (; n.path.length > e + 1;) {
                    const e = o.maxOffset - n.offset;
                    0 !== e && t.push(new a(n, n.getShiftedBy(e))), n.path = n.path.slice(0, -1), n.offset++, o = o.parent
                }
                for (; n.path.length <= this.end.path.length;) {
                    const e = this.end.path[n.path.length - 1], i = e - n.offset;
                    0 !== i && t.push(new a(n, n.getShiftedBy(i))), n.offset = e, n.path.push(0)
                }
                return t
            }

            getWalker(t = {}) {
                return t.boundaries = this, new o.a(t)
            }

            * getItems(t = {}) {
                t.boundaries = this, t.ignoreElementEnd = !0;
                const e = new o.a(t);
                for (const t of e) yield t.item
            }

            * getPositions(t = {}) {
                t.boundaries = this;
                const e = new o.a(t);
                yield e.position;
                for (const t of e) yield t.nextPosition
            }

            getTransformedByOperation(t) {
                switch (t.type) {
                    case"insert":
                        return this._getTransformedByInsertOperation(t);
                    case"move":
                    case"remove":
                    case"reinsert":
                        return this._getTransformedByMoveOperation(t);
                    case"split":
                        return [this._getTransformedBySplitOperation(t)];
                    case"merge":
                        return [this._getTransformedByMergeOperation(t)]
                }
                return [new a(this.start, this.end)]
            }

            getTransformedByOperations(t) {
                const e = [new a(this.start, this.end)];
                for (const n of t) for (let t = 0; t < e.length; t++) {
                    const i = e[t].getTransformedByOperation(n);
                    e.splice(t, 1, ...i), t += i.length - 1
                }
                for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    for (let i = t + 1; i < e.length; i++) {
                        const t = e[i];
                        (n.containsRange(t) || t.containsRange(n) || n.isEqual(t)) && e.splice(i, 1)
                    }
                }
                return e
            }

            getCommonAncestor() {
                return this.start.getCommonAncestor(this.end)
            }

            toJSON() {
                return {start: this.start.toJSON(), end: this.end.toJSON()}
            }

            clone() {
                return new this.constructor(this.start, this.end)
            }

            _getTransformedByInsertOperation(t, e = !1) {
                return this._getTransformedByInsertion(t.position, t.howMany, e)
            }

            _getTransformedByMoveOperation(t, e = !1) {
                const n = t.sourcePosition, i = t.howMany, o = t.targetPosition;
                return this._getTransformedByMove(n, o, i, e)
            }

            _getTransformedBySplitOperation(t) {
                const e = this.start._getTransformedBySplitOperation(t);
                let n = this.end._getTransformedBySplitOperation(t);
                return this.end.isEqual(t.insertionPosition) && (n = this.end.getShiftedBy(1)), e.root != n.root && (n = this.end.getShiftedBy(-1)), new a(e, n)
            }

            _getTransformedByMergeOperation(t) {
                if (this.start.isEqual(t.targetPosition) && this.end.isEqual(t.deletionPosition)) return new a(this.start);
                let e = this.start._getTransformedByMergeOperation(t), n = this.end._getTransformedByMergeOperation(t);
                return e.root != n.root && (n = this.end.getShiftedBy(-1)), e.isAfter(n) ? (t.sourcePosition.isBefore(t.targetPosition) ? (e = i.a._createAt(n)).offset = 0 : (t.deletionPosition.isEqual(e) || (n = t.deletionPosition), e = t.targetPosition), new a(e, n)) : new a(e, n)
            }

            _getTransformedByInsertion(t, e, n = !1) {
                if (n && this.containsPosition(t)) return [new a(this.start, t), new a(t.getShiftedBy(e), this.end._getTransformedByInsertion(t, e))];
                {
                    const n = new a(this.start, this.end);
                    return n.start = n.start._getTransformedByInsertion(t, e), n.end = n.end._getTransformedByInsertion(t, e), [n]
                }
            }

            _getTransformedByMove(t, e, n, i = !1) {
                if (this.isCollapsed) {
                    const i = this.start._getTransformedByMove(t, e, n);
                    return [new a(i)]
                }
                const o = a._createFromPositionAndShift(t, n), r = e._getTransformedByDeletion(t, n);
                if (this.containsPosition(e) && !i && (o.containsPosition(this.start) || o.containsPosition(this.end))) {
                    const i = this.start._getTransformedByMove(t, e, n), o = this.end._getTransformedByMove(t, e, n);
                    return [new a(i, o)]
                }
                let s;
                const c = this.getDifference(o);
                let l = null;
                const d = this.getIntersection(o);
                if (1 == c.length ? l = new a(c[0].start._getTransformedByDeletion(t, n), c[0].end._getTransformedByDeletion(t, n)) : 2 == c.length && (l = new a(this.start, this.end._getTransformedByDeletion(t, n))), s = l ? l._getTransformedByInsertion(r, n, null !== d || i) : [], d) {
                    const t = new a(d.start._getCombined(o.start, r), d.end._getCombined(o.start, r));
                    2 == s.length ? s.splice(1, 0, t) : s.push(t)
                }
                return s
            }

            _getTransformedByDeletion(t, e) {
                let n = this.start._getTransformedByDeletion(t, e), i = this.end._getTransformedByDeletion(t, e);
                return null == n && null == i ? null : (null == n && (n = t), null == i && (i = t), new a(n, i))
            }

            static _createFromPositionAndShift(t, e) {
                const n = t, i = t.getShiftedBy(e);
                return e > 0 ? new this(n, i) : new this(i, n)
            }

            static _createIn(t) {
                return new this(i.a._createAt(t, 0), i.a._createAt(t, t.maxOffset))
            }

            static _createOn(t) {
                return this._createFromPositionAndShift(i.a._createBefore(t), t.offsetSize)
            }

            static _createFromRanges(t) {
                if (0 === t.length) throw new r.b("range-create-from-ranges-empty-array: At least one range has to be passed.", null);
                if (1 == t.length) return t[0].clone();
                const e = t[0];
                t.sort((t, e) => t.start.isAfter(e.start) ? 1 : -1);
                const n = t.indexOf(e), o = new this(e.start, e.end);
                if (n > 0) for (let e = n - 1; t[e].end.isEqual(o.start); e++) o.start = i.a._createAt(t[e].start);
                for (let e = n + 1; e < t.length && t[e].start.isEqual(o.end); e++) o.end = i.a._createAt(t[e].end);
                return o
            }

            static fromJSON(t, e) {
                return new this(i.a.fromJSON(t.start, e), i.a.fromJSON(t.end, e))
            }
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(46), o = n(24), r = n(0), s = n(16);
        var a = function (t) {
            var e = null == t ? 0 : t.length;
            return e ? t[e - 1] : void 0
        };
        n(93);
        n.d(e, "a", function () {
            return c
        });

        class c {
            constructor(t, e, n = "toNone") {
                if (!t.is("element") && !t.is("documentFragment")) throw new r.b("model-position-root-invalid: Position root invalid.", t);
                if (!(e instanceof Array) || 0 === e.length) throw new r.b("model-position-path-incorrect-format: Position path must be an array with at least one item.", t, {path: e});
                e = t.getPath().concat(e), t = t.root, this.root = t, this.path = e, this.stickiness = n
            }

            get offset() {
                return a(this.path)
            }

            set offset(t) {
                this.path[this.path.length - 1] = t
            }

            get parent() {
                let t = this.root;
                for (let e = 0; e < this.path.length - 1; e++) if (!(t = t.getChild(t.offsetToIndex(this.path[e])))) throw new r.b("model-position-path-incorrect: The position's path is incorrect.", this, {position: this});
                if (t.is("text")) throw new r.b("model-position-path-incorrect: The position's path is incorrect.", this, {position: this});
                return t
            }

            get index() {
                return this.parent.offsetToIndex(this.offset)
            }

            get textNode() {
                const t = this.parent.getChild(this.index);
                return t instanceof s.a && t.startOffset < this.offset ? t : null
            }

            get nodeAfter() {
                return null === this.textNode ? this.parent.getChild(this.index) : null
            }

            get nodeBefore() {
                return null === this.textNode ? this.parent.getChild(this.index - 1) : null
            }

            get isAtStart() {
                return 0 === this.offset
            }

            get isAtEnd() {
                return this.offset == this.parent.maxOffset
            }

            compareWith(t) {
                if (this.root != t.root) return "different";
                const e = Object(o.a)(this.path, t.path);
                switch (e) {
                    case"same":
                        return "same";
                    case"prefix":
                        return "before";
                    case"extension":
                        return "after";
                    default:
                        return this.path[e] < t.path[e] ? "before" : "after"
                }
            }

            getLastMatchingPosition(t, e = {}) {
                e.startPosition = this;
                const n = new i.a(e);
                return n.skip(t), n.position
            }

            getParentPath() {
                return this.path.slice(0, -1)
            }

            getAncestors() {
                return this.parent.is("documentFragment") ? [this.parent] : this.parent.getAncestors({includeSelf: !0})
            }

            getCommonPath(t) {
                if (this.root != t.root) return [];
                const e = Object(o.a)(this.path, t.path),
                    n = "string" == typeof e ? Math.min(this.path.length, t.path.length) : e;
                return this.path.slice(0, n)
            }

            getCommonAncestor(t) {
                const e = this.getAncestors(), n = t.getAncestors();
                let i = 0;
                for (; e[i] == n[i] && e[i];) i++;
                return 0 === i ? null : e[i - 1]
            }

            getShiftedBy(t) {
                const e = this.clone(), n = e.offset + t;
                return e.offset = n < 0 ? 0 : n, e
            }

            isAfter(t) {
                return "after" == this.compareWith(t)
            }

            isBefore(t) {
                return "before" == this.compareWith(t)
            }

            isEqual(t) {
                return "same" == this.compareWith(t)
            }

            isTouching(t) {
                let e = null, n = null;
                switch (this.compareWith(t)) {
                    case"same":
                        return !0;
                    case"before":
                        e = c._createAt(this), n = c._createAt(t);
                        break;
                    case"after":
                        e = c._createAt(t), n = c._createAt(this);
                        break;
                    default:
                        return !1
                }
                let i = e.parent;
                for (; e.path.length + n.path.length;) {
                    if (e.isEqual(n)) return !0;
                    if (e.path.length > n.path.length) {
                        if (e.offset !== i.maxOffset) return !1;
                        e.path = e.path.slice(0, -1), i = i.parent, e.offset++
                    } else {
                        if (0 !== n.offset) return !1;
                        n.path = n.path.slice(0, -1)
                    }
                }
            }

            is(t) {
                return "position" == t || "model:position" == t
            }

            hasSameParentAs(t) {
                if (this.root !== t.root) return !1;
                const e = this.getParentPath(), n = t.getParentPath();
                return "same" == Object(o.a)(e, n)
            }

            getTransformedByOperation(t) {
                let e;
                switch (t.type) {
                    case"insert":
                        e = this._getTransformedByInsertOperation(t);
                        break;
                    case"move":
                    case"remove":
                    case"reinsert":
                        e = this._getTransformedByMoveOperation(t);
                        break;
                    case"split":
                        e = this._getTransformedBySplitOperation(t);
                        break;
                    case"merge":
                        e = this._getTransformedByMergeOperation(t);
                        break;
                    default:
                        e = c._createAt(this)
                }
                return e
            }

            _getTransformedByInsertOperation(t) {
                return this._getTransformedByInsertion(t.position, t.howMany)
            }

            _getTransformedByMoveOperation(t) {
                return this._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany)
            }

            _getTransformedBySplitOperation(t) {
                const e = t.movedRange;
                return e.containsPosition(this) || e.start.isEqual(this) && "toNext" == this.stickiness ? this._getCombined(t.splitPosition, t.moveTargetPosition) : t.graveyardPosition ? this._getTransformedByMove(t.graveyardPosition, t.insertionPosition, 1) : this._getTransformedByInsertion(t.insertionPosition, 1)
            }

            _getTransformedByMergeOperation(t) {
                const e = t.movedRange;
                let n;
                return e.containsPosition(this) || e.start.isEqual(this) ? (n = this._getCombined(t.sourcePosition, t.targetPosition), t.sourcePosition.isBefore(t.targetPosition) && (n = n._getTransformedByDeletion(t.deletionPosition, 1))) : n = this.isEqual(t.deletionPosition) ? c._createAt(t.deletionPosition) : this._getTransformedByMove(t.deletionPosition, t.graveyardPosition, 1), n
            }

            _getTransformedByDeletion(t, e) {
                const n = c._createAt(this);
                if (this.root != t.root) return n;
                if ("same" == Object(o.a)(t.getParentPath(), this.getParentPath())) {
                    if (t.offset < this.offset) {
                        if (t.offset + e > this.offset) return null;
                        n.offset -= e
                    }
                } else if ("prefix" == Object(o.a)(t.getParentPath(), this.getParentPath())) {
                    const i = t.path.length - 1;
                    if (t.offset <= this.path[i]) {
                        if (t.offset + e > this.path[i]) return null;
                        n.path[i] -= e
                    }
                }
                return n
            }

            _getTransformedByInsertion(t, e) {
                const n = c._createAt(this);
                if (this.root != t.root) return n;
                if ("same" == Object(o.a)(t.getParentPath(), this.getParentPath())) (t.offset < this.offset || t.offset == this.offset && "toPrevious" != this.stickiness) && (n.offset += e); else if ("prefix" == Object(o.a)(t.getParentPath(), this.getParentPath())) {
                    const i = t.path.length - 1;
                    t.offset <= this.path[i] && (n.path[i] += e)
                }
                return n
            }

            _getTransformedByMove(t, e, n) {
                if (e = e._getTransformedByDeletion(t, n), t.isEqual(e)) return c._createAt(this);
                const i = this._getTransformedByDeletion(t, n);
                return null === i || t.isEqual(this) && "toNext" == this.stickiness || t.getShiftedBy(n).isEqual(this) && "toPrevious" == this.stickiness ? this._getCombined(t, e) : i._getTransformedByInsertion(e, n)
            }

            _getCombined(t, e) {
                const n = t.path.length - 1, i = c._createAt(e);
                return i.stickiness = this.stickiness, i.offset = i.offset + this.path[n] - t.offset, i.path = i.path.concat(this.path.slice(n + 1)), i
            }

            toJSON() {
                return {root: this.root.toJSON(), path: Array.from(this.path), stickiness: this.stickiness}
            }

            clone() {
                return new this.constructor(this.root, this.path, this.stickiness)
            }

            static _createAt(t, e, n = "toNone") {
                if (t instanceof c) return new c(t.root, t.path, t.stickiness);
                {
                    const i = t;
                    if ("end" == e) e = i.maxOffset; else {
                        if ("before" == e) return this._createBefore(i, n);
                        if ("after" == e) return this._createAfter(i, n);
                        if (0 !== e && !e) throw new r.b("model-createPositionAt-offset-required: Model#createPositionAt() requires the offset when the first parameter is a model item.", [this, t])
                    }
                    if (!i.is("element") && !i.is("documentFragment")) throw new r.b("model-position-parent-incorrect: Position parent have to be a element or document fragment.", [this, t]);
                    const o = i.getPath();
                    return o.push(e), new this(i.root, o, n)
                }
            }

            static _createAfter(t, e) {
                if (!t.parent) throw new r.b("model-position-after-root: You cannot make a position after root.", [this, t], {root: t});
                return this._createAt(t.parent, t.endOffset, e)
            }

            static _createBefore(t, e) {
                if (!t.parent) throw new r.b("model-position-before-root: You cannot make a position before root.", t, {root: t});
                return this._createAt(t.parent, t.startOffset, e)
            }

            static fromJSON(t, e) {
                if ("$graveyard" === t.root) {
                    const n = new c(e.graveyard, t.path);
                    return n.stickiness = t.stickiness, n
                }
                if (!e.getRoot(t.root)) throw new r.b("model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.", e, {rootName: t.root});
                return new c(e.getRoot(t.root), t.path, t.stickiness)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return a
        });
        var i = n(59), o = n(24), r = n(0), s = n(80);
        n(93);

        class a {
            constructor(t, e) {
                this.parent = t, this.offset = e
            }

            get nodeAfter() {
                return this.parent.is("text") ? null : this.parent.getChild(this.offset) || null
            }

            get nodeBefore() {
                return this.parent.is("text") ? null : this.parent.getChild(this.offset - 1) || null
            }

            get isAtStart() {
                return 0 === this.offset
            }

            get isAtEnd() {
                const t = this.parent.is("text") ? this.parent.data.length : this.parent.childCount;
                return this.offset === t
            }

            get root() {
                return this.parent.root
            }

            get editableElement() {
                let t = this.parent;
                for (; !(t instanceof s.a);) {
                    if (!t.parent) return null;
                    t = t.parent
                }
                return t
            }

            getShiftedBy(t) {
                const e = a._createAt(this), n = e.offset + t;
                return e.offset = n < 0 ? 0 : n, e
            }

            getLastMatchingPosition(t, e = {}) {
                e.startPosition = this;
                const n = new i.a(e);
                return n.skip(t), n.position
            }

            getAncestors() {
                return this.parent.is("documentFragment") ? [this.parent] : this.parent.getAncestors({includeSelf: !0})
            }

            getCommonAncestor(t) {
                const e = this.getAncestors(), n = t.getAncestors();
                let i = 0;
                for (; e[i] == n[i] && e[i];) i++;
                return 0 === i ? null : e[i - 1]
            }

            is(t) {
                return "position" == t || "view:position" == t
            }

            isEqual(t) {
                return this.parent == t.parent && this.offset == t.offset
            }

            isBefore(t) {
                return "before" == this.compareWith(t)
            }

            isAfter(t) {
                return "after" == this.compareWith(t)
            }

            compareWith(t) {
                if (this.root !== t.root) return "different";
                if (this.isEqual(t)) return "same";
                const e = this.parent.is("node") ? this.parent.getPath() : [],
                    n = t.parent.is("node") ? t.parent.getPath() : [];
                e.push(this.offset), n.push(t.offset);
                const i = Object(o.a)(e, n);
                switch (i) {
                    case"prefix":
                        return "before";
                    case"extension":
                        return "after";
                    default:
                        return e[i] < n[i] ? "before" : "after"
                }
            }

            getWalker(t = {}) {
                return t.startPosition = this, new i.a(t)
            }

            clone() {
                return new a(this.parent, this.offset)
            }

            static _createAt(t, e) {
                if (t instanceof a) return new this(t.parent, t.offset);
                {
                    const n = t;
                    if ("end" == e) e = n.is("text") ? n.data.length : n.childCount; else {
                        if ("before" == e) return this._createBefore(n);
                        if ("after" == e) return this._createAfter(n);
                        if (0 !== e && !e) throw new r.b("view-createPositionAt-offset-required: View#createPositionAt() requires the offset when the first parameter is a view item.", n)
                    }
                    return new a(n, e)
                }
            }

            static _createAfter(t) {
                if (t.is("textProxy")) return new a(t.textNode, t.offsetInText + t.data.length);
                if (!t.parent) throw new r.b("view-position-after-root: You can not make position after root.", t, {root: t});
                return new a(t.parent, t.index + 1)
            }

            static _createBefore(t) {
                if (t.is("textProxy")) return new a(t.textNode, t.offsetInText);
                if (!t.parent) throw new r.b("view-position-before-root: You can not make position before root.", t, {root: t});
                return new a(t.parent, t.index)
            }
        }
    }, function (t, e, n) {
        "use strict";

        function i(t, ...e) {
            e.forEach(e => {
                Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(n => {
                    if (n in t.prototype) return;
                    const i = Object.getOwnPropertyDescriptor(e, n);
                    i.enumerable = !1, Object.defineProperty(t.prototype, n, i)
                })
            })
        }

        n.d(e, "a", function () {
            return i
        })
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return u
        });
        var i = n(0), o = n(44), r = n(53), s = n(69), a = n(13), c = n(28), l = n(5), d = n(34);
        n(126);

        class u {
            constructor(t) {
                this.element = null, this.isRendered = !1, this.locale = t, this.t = t && t.t, this._viewCollections = new c.a, this._unboundChildren = this.createCollection(), this._viewCollections.on("add", (e, n) => {
                    n.locale = t
                }), this.decorate("render")
            }

            get bindTemplate() {
                return this._bindTemplate ? this._bindTemplate : this._bindTemplate = r.a.bind(this, this)
            }

            createCollection() {
                const t = new o.a;
                return this._viewCollections.add(t), t
            }

            registerChild(t) {
                Object(d.a)(t) || (t = [t]);
                for (const e of t) this._unboundChildren.add(e)
            }

            deregisterChild(t) {
                Object(d.a)(t) || (t = [t]);
                for (const e of t) this._unboundChildren.remove(e)
            }

            setTemplate(t) {
                this.template = new r.a(t)
            }

            extendTemplate(t) {
                r.a.extend(this.template, t)
            }

            render() {
                if (this.isRendered) throw new i.b("ui-view-render-already-rendered: This View has already been rendered.", this);
                this.template && (this.element = this.template.render(), this.registerChild(this.template.getViews())), this.isRendered = !0
            }

            destroy() {
                this.stopListening(), this._viewCollections.map(t => t.destroy()), this.template && this.template._revertData && this.template.revert(this.element)
            }
        }

        Object(l.a)(u, s.a), Object(l.a)(u, a.a)
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var i = n(13), o = n(5);

        class r {
            constructor(t) {
                this.editor = t, this.set("value", void 0), this.set("isEnabled", !1), this._disableStack = new Set, this.decorate("execute"), this.listenTo(this.editor.model.document, "change", () => {
                    this.refresh()
                }), this.on("execute", t => {
                    this.isEnabled || t.stop()
                }, {priority: "high"}), this.listenTo(t, "change:isReadOnly", (t, e, n) => {
                    n ? this.forceDisabled("readOnlyMode") : this.clearForceDisabled("readOnlyMode")
                })
            }

            refresh() {
                this.isEnabled = !0
            }

            forceDisabled(t) {
                this._disableStack.add(t), 1 == this._disableStack.size && (this.on("set:isEnabled", s, {priority: "highest"}), this.isEnabled = !1)
            }

            clearForceDisabled(t) {
                this._disableStack.delete(t), 0 == this._disableStack.size && (this.off("set:isEnabled", s), this.refresh())
            }

            execute() {
            }

            destroy() {
                this.stopListening()
            }
        }

        function s(t) {
            t.return = !1, t.stop()
        }

        Object(o.a)(r, i.a)
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return l
        }), n.d(e, "b", function () {
            return d
        });
        var i = n(92), o = n(33), r = n(81);
        n(93);
        const s = Symbol("listeningTo"), a = Symbol("emitterId"), c = {
            on(t, e, n = {}) {
                this.listenTo(this, t, e, n)
            }, once(t, e, n) {
                let i = !1;
                this.listenTo(this, t, function (t, ...n) {
                    i || (i = !0, t.off(), e.call(this, t, ...n))
                }, n)
            }, off(t, e) {
                this.stopListening(this, t, e)
            }, listenTo(t, e, n, i = {}) {
                let o, a;
                this[s] || (this[s] = {});
                const c = this[s];
                u(t) || d(t);
                const l = u(t);
                (o = c[l]) || (o = c[l] = {
                    emitter: t,
                    callbacks: {}
                }), (a = o.callbacks[e]) || (a = o.callbacks[e] = []), a.push(n), function (t, e) {
                    const n = h(t);
                    if (n[e]) return;
                    let i = e, o = null;
                    const r = [];
                    for (; "" !== i && !n[i];) n[i] = {
                        callbacks: [],
                        childEvents: []
                    }, r.push(n[i]), o && n[i].childEvents.push(o), o = i, i = i.substr(0, i.lastIndexOf(":"));
                    if ("" !== i) {
                        for (const t of r) t.callbacks = n[i].callbacks.slice();
                        n[i].childEvents.push(o)
                    }
                }(t, e);
                const m = f(t, e), p = r.a.get(i.priority), g = {callback: n, priority: p};
                for (const t of m) {
                    let e = !1;
                    for (let n = 0; n < t.length; n++) if (t[n].priority < p) {
                        t.splice(n, 0, g), e = !0;
                        break
                    }
                    e || t.push(g)
                }
            }, stopListening(t, e, n) {
                const i = this[s];
                let o = t && u(t);
                const r = i && o && i[o], a = r && e && r.callbacks[e];
                if (!(!i || t && !r || e && !a)) if (n) p(t, e, n); else if (a) {
                    for (; n = a.pop();) p(t, e, n);
                    delete r.callbacks[e]
                } else if (r) {
                    for (e in r.callbacks) this.stopListening(t, e);
                    delete i[o]
                } else {
                    for (o in i) this.stopListening(i[o].emitter);
                    delete this[s]
                }
            }, fire(t, ...e) {
                const n = t instanceof i.a ? t : new i.a(this, t), o = n.name;
                let r = function t(e, n) {
                    let i;
                    if (!e._events || !(i = e._events[n]) || !i.callbacks.length) return n.indexOf(":") > -1 ? t(e, n.substr(0, n.lastIndexOf(":"))) : null;
                    return i.callbacks
                }(this, o);
                if (n.path.push(this), r) {
                    const t = [n, ...e];
                    r = Array.from(r);
                    for (let e = 0; e < r.length && (r[e].callback.apply(this, t), n.off.called && (delete n.off.called, p(this, o, r[e].callback)), !n.stop.called); e++) ;
                }
                if (this._delegations) {
                    const t = this._delegations.get(o), i = this._delegations.get("*");
                    t && m(t, n, e), i && m(i, n, e)
                }
                return n.return
            }, delegate(...t) {
                return {
                    to: (e, n) => {
                        this._delegations || (this._delegations = new Map), t.forEach(t => {
                            const i = this._delegations.get(t);
                            i ? i.set(e, n) : this._delegations.set(t, new Map([[e, n]]))
                        })
                    }
                }
            }, stopDelegating(t, e) {
                if (this._delegations) if (t) if (e) {
                    const n = this._delegations.get(t);
                    n && n.delete(e)
                } else this._delegations.delete(t); else this._delegations.clear()
            }
        };

        function l(t, e) {
            return t[s] && t[s][e] ? t[s][e].emitter : null
        }

        function d(t, e) {
            t[a] || (t[a] = e || Object(o.a)())
        }

        function u(t) {
            return t[a]
        }

        function h(t) {
            return t._events || Object.defineProperty(t, "_events", {value: {}}), t._events
        }

        function f(t, e) {
            const n = h(t)[e];
            if (!n) return [];
            let i = [n.callbacks];
            for (let e = 0; e < n.childEvents.length; e++) {
                const o = f(t, n.childEvents[e]);
                i = i.concat(o)
            }
            return i
        }

        function m(t, e, n) {
            for (let [o, r] of t) {
                r ? "function" == typeof r && (r = r(e.name)) : r = e.name;
                const t = new i.a(e.source, r);
                t.path = [...e.path], o.fire(t, ...n)
            }
        }

        function p(t, e, n) {
            const i = f(t, e);
            for (const t of i) for (let e = 0; e < t.length; e++) t[e].callback == n && (t.splice(e, 1), e--)
        }

        e.c = c
    }, function (t, e, n) {
        "use strict";
        n.d(e, "c", function () {
            return a
        }), n.d(e, "a", function () {
            return c
        }), n.d(e, "d", function () {
            return l
        }), n.d(e, "b", function () {
            return d
        });
        var i = n(0), o = n(23);
        const r = {"⌘": "ctrl", "⇧": "shift", "⌥": "alt"}, s = {ctrl: "⌘", shift: "⇧", alt: "⌥"}, a = function () {
            const t = {
                arrowleft: 37,
                arrowup: 38,
                arrowright: 39,
                arrowdown: 40,
                backspace: 8,
                delete: 46,
                enter: 13,
                space: 32,
                esc: 27,
                tab: 9,
                ctrl: 1114112,
                cmd: 1114112,
                shift: 2228224,
                alt: 4456448
            };
            for (let e = 65; e <= 90; e++) {
                const n = String.fromCharCode(e);
                t[n.toLowerCase()] = e
            }
            for (let e = 48; e <= 57; e++) t[e - 48] = e;
            for (let e = 112; e <= 123; e++) t["f" + (e - 111)] = e;
            return t
        }();

        function c(t) {
            let e;
            if ("string" == typeof t) {
                if (!(e = a[t.toLowerCase()])) throw new i.b("keyboard-unknown-key: Unknown key name.", null, {key: t})
            } else e = t.keyCode + (t.altKey ? a.alt : 0) + (t.ctrlKey ? a.ctrl : 0) + (t.shiftKey ? a.shift : 0);
            return e
        }

        function l(t) {
            return "string" == typeof t && (t = u(t)), t.map(t => "string" == typeof t ? c(t) : t).reduce((t, e) => e + t, 0)
        }

        function d(t) {
            return o.a.isMac ? u(t).map(t => s[t.toLowerCase()] || t).reduce((t, e) => t.slice(-1) in r ? t + e : t + "+" + e) : t
        }

        function u(t) {
            return t.split(/\s*\+\s*/)
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var i = n(4), o = n(59);

        class r {
            constructor(t, e = null) {
                this.start = t.clone(), this.end = e ? e.clone() : t.clone()
            }

            * [Symbol.iterator]() {
                yield* new o.a({boundaries: this, ignoreElementEnd: !0})
            }

            get isCollapsed() {
                return this.start.isEqual(this.end)
            }

            get isFlat() {
                return this.start.parent === this.end.parent
            }

            get root() {
                return this.start.root
            }

            getEnlarged() {
                let t = this.start.getLastMatchingPosition(s, {direction: "backward"}),
                    e = this.end.getLastMatchingPosition(s);
                return t.parent.is("text") && t.isAtStart && (t = i.a._createBefore(t.parent)), e.parent.is("text") && e.isAtEnd && (e = i.a._createAfter(e.parent)), new r(t, e)
            }

            getTrimmed() {
                let t = this.start.getLastMatchingPosition(s);
                if (t.isAfter(this.end) || t.isEqual(this.end)) return new r(t, t);
                let e = this.end.getLastMatchingPosition(s, {direction: "backward"});
                const n = t.nodeAfter, o = e.nodeBefore;
                return n && n.is("text") && (t = new i.a(n, 0)), o && o.is("text") && (e = new i.a(o, o.data.length)), new r(t, e)
            }

            isEqual(t) {
                return this == t || this.start.isEqual(t.start) && this.end.isEqual(t.end)
            }

            containsPosition(t) {
                return t.isAfter(this.start) && t.isBefore(this.end)
            }

            containsRange(t, e = !1) {
                t.isCollapsed && (e = !1);
                const n = this.containsPosition(t.start) || e && this.start.isEqual(t.start),
                    i = this.containsPosition(t.end) || e && this.end.isEqual(t.end);
                return n && i
            }

            getDifference(t) {
                const e = [];
                return this.isIntersecting(t) ? (this.containsPosition(t.start) && e.push(new r(this.start, t.start)), this.containsPosition(t.end) && e.push(new r(t.end, this.end))) : e.push(this.clone()), e
            }

            getIntersection(t) {
                if (this.isIntersecting(t)) {
                    let e = this.start, n = this.end;
                    return this.containsPosition(t.start) && (e = t.start), this.containsPosition(t.end) && (n = t.end), new r(e, n)
                }
                return null
            }

            getWalker(t = {}) {
                return t.boundaries = this, new o.a(t)
            }

            getCommonAncestor() {
                return this.start.getCommonAncestor(this.end)
            }

            clone() {
                return new r(this.start, this.end)
            }

            * getItems(t = {}) {
                t.boundaries = this, t.ignoreElementEnd = !0;
                const e = new o.a(t);
                for (const t of e) yield t.item
            }

            * getPositions(t = {}) {
                t.boundaries = this;
                const e = new o.a(t);
                yield e.position;
                for (const t of e) yield t.nextPosition
            }

            is(t) {
                return "range" == t || "view:range" == t
            }

            isIntersecting(t) {
                return this.start.isBefore(t.end) && this.end.isAfter(t.start)
            }

            static _createFromParentsAndOffsets(t, e, n, o) {
                return new this(new i.a(t, e), new i.a(n, o))
            }

            static _createFromPositionAndShift(t, e) {
                const n = t, i = t.getShiftedBy(e);
                return e > 0 ? new this(n, i) : new this(i, n)
            }

            static _createIn(t) {
                return this._createFromParentsAndOffsets(t, 0, t, t.childCount)
            }

            static _createOn(t) {
                const e = t.is("textProxy") ? t.offsetSize : 1;
                return this._createFromPositionAndShift(i.a._createBefore(t), e)
            }
        }

        function s(t) {
            return !(!t.item.is("attributeElement") && !t.item.is("uiElement"))
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return c
        });
        var i = n(6), o = n(70), r = n(110), s = n(33), a = n(9);
        n(142);

        class c extends i.a {
            constructor(t) {
                super(t);
                const e = this.bindTemplate, n = Object(s.a)();
                this.set("class"), this.set("labelStyle"), this.set("icon"), this.set("isEnabled", !0), this.set("isOn", !1), this.set("isVisible", !0), this.set("isToggleable", !1), this.set("keystroke"), this.set("label"), this.set("tabindex", -1), this.set("tooltip"), this.set("tooltipPosition", "s"), this.set("type", "button"), this.set("withText", !1), this.children = this.createCollection(), this.tooltipView = this._createTooltipView(), this.labelView = this._createLabelView(n), this.iconView = new o.a, this.iconView.extendTemplate({attributes: {class: "ck-button__icon"}}), this.bind("_tooltipString").to(this, "tooltip", this, "label", this, "keystroke", this._getTooltipString.bind(this)), this.setTemplate({
                    tag: "button",
                    attributes: {
                        class: ["ck", "ck-button", e.to("class"), e.if("isEnabled", "ck-disabled", t => !t), e.if("isVisible", "ck-hidden", t => !t), e.to("isOn", t => t ? "ck-on" : "ck-off"), e.if("withText", "ck-button_with-text")],
                        type: e.to("type", t => t || "button"),
                        tabindex: e.to("tabindex"),
                        "aria-labelledby": `ck-editor__aria-label_${n}`,
                        "aria-disabled": e.if("isEnabled", !0, t => !t),
                        "aria-pressed": e.to("isOn", t => !!this.isToggleable && String(t))
                    },
                    children: this.children,
                    on: {
                        mousedown: e.to(t => {
                            t.preventDefault()
                        }), click: e.to(t => {
                            this.isEnabled ? this.fire("execute") : t.preventDefault()
                        })
                    }
                })
            }

            render() {
                super.render(), this.icon && (this.iconView.bind("content").to(this, "icon"), this.children.add(this.iconView)), this.children.add(this.tooltipView), this.children.add(this.labelView)
            }

            focus() {
                this.element.focus()
            }

            _createTooltipView() {
                const t = new r.a;
                return t.bind("text").to(this, "_tooltipString"), t.bind("position").to(this, "tooltipPosition"), t
            }

            _createLabelView(t) {
                const e = new i.a, n = this.bindTemplate;
                return e.setTemplate({
                    tag: "span",
                    attributes: {
                        class: ["ck", "ck-button__label"],
                        style: n.to("labelStyle"),
                        id: `ck-editor__aria-label_${t}`
                    },
                    children: [{text: this.bindTemplate.to("label")}]
                }), e
            }

            _getTooltipString(t, e, n) {
                return t ? "string" == typeof t ? t : (n && (n = Object(a.b)(n)), t instanceof Function ? t(e, n) : `${e}${n ? ` (${n})` : ""}`) : ""
            }
        }
    }, function (t, e, n) {
        "use strict";
        var i = {}, o = function () {
            var t;
            return function () {
                return void 0 === t && (t = Boolean(window && document && document.all && !window.atob)), t
            }
        }(), r = function () {
            var t = {};
            return function (e) {
                if (void 0 === t[e]) {
                    var n = document.querySelector(e);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (t) {
                        n = null
                    }
                    t[e] = n
                }
                return t[e]
            }
        }();

        function s(t, e) {
            for (var n = [], i = {}, o = 0; o < t.length; o++) {
                var r = t[o], s = e.base ? r[0] + e.base : r[0], a = {css: r[1], media: r[2], sourceMap: r[3]};
                i[s] ? i[s].parts.push(a) : n.push(i[s] = {id: s, parts: [a]})
            }
            return n
        }

        function a(t, e) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n], r = i[o.id], s = 0;
                if (r) {
                    for (r.refs++; s < r.parts.length; s++) r.parts[s](o.parts[s]);
                    for (; s < o.parts.length; s++) r.parts.push(f(o.parts[s], e))
                } else {
                    for (var a = []; s < o.parts.length; s++) a.push(f(o.parts[s], e));
                    i[o.id] = {id: o.id, refs: 1, parts: a}
                }
            }
        }

        function c(t) {
            var e = document.createElement("style");
            if (void 0 === t.attributes.nonce) {
                var i = n.nc;
                i && (t.attributes.nonce = i)
            }
            if (Object.keys(t.attributes).forEach(function (n) {
                e.setAttribute(n, t.attributes[n])
            }), "function" == typeof t.insert) t.insert(e); else {
                var o = r(t.insert || "head");
                if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                o.appendChild(e)
            }
            return e
        }

        var l = function () {
            var t = [];
            return function (e, n) {
                return t[e] = n, t.filter(Boolean).join("\n")
            }
        }();

        function d(t, e, n, i) {
            var o = n ? "" : i.css;
            if (t.styleSheet) t.styleSheet.cssText = l(e, o); else {
                var r = document.createTextNode(o), s = t.childNodes;
                s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(r, s[e]) : t.appendChild(r)
            }
        }

        var u = null, h = 0;

        function f(t, e) {
            var n, i, o;
            if (e.singleton) {
                var r = h++;
                n = u || (u = c(e)), i = d.bind(null, n, r, !1), o = d.bind(null, n, r, !0)
            } else n = c(e), i = function (t, e, n) {
                var i = n.css, o = n.media, r = n.sourceMap;
                if (o && t.setAttribute("media", o), r && btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), t.styleSheet) t.styleSheet.cssText = i; else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(i))
                }
            }.bind(null, n, e), o = function () {
                !function (t) {
                    if (null === t.parentNode) return !1;
                    t.parentNode.removeChild(t)
                }(n)
            };
            return i(t), function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    i(t = e)
                } else o()
            }
        }

        t.exports = function (t, e) {
            (e = e || {}).attributes = "object" == typeof e.attributes ? e.attributes : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = o());
            var n = s(t, e);
            return a(n, e), function (t) {
                for (var o = [], r = 0; r < n.length; r++) {
                    var c = n[r], l = i[c.id];
                    l && (l.refs--, o.push(l))
                }
                t && a(s(t, e), e);
                for (var d = 0; d < o.length; d++) {
                    var u = o[d];
                    if (0 === u.refs) {
                        for (var h = 0; h < u.parts.length; h++) u.parts[h]();
                        delete i[u.id]
                    }
                }
            }
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(8), o = n(0), r = n(32), s = n(116);
        const a = Symbol("observableProperties"), c = Symbol("boundObservables"), l = Symbol("boundProperties"), d = {
            set(t, e) {
                if (Object(r.a)(t)) return void Object.keys(t).forEach(e => {
                    this.set(e, t[e])
                }, this);
                u(this);
                const n = this[a];
                if (t in this && !n.has(t)) throw new o.b("observable-set-cannot-override: Cannot override an existing property.", this);
                Object.defineProperty(this, t, {
                    enumerable: !0, configurable: !0, get: () => n.get(t), set(e) {
                        const i = n.get(t);
                        let o = this.fire("set:" + t, t, e, i);
                        void 0 === o && (o = e), i === o && n.has(t) || (n.set(t, o), this.fire("change:" + t, t, o, i))
                    }
                }), this[t] = e
            }, bind(...t) {
                if (!t.length || !m(t)) throw new o.b("observable-bind-wrong-properties: All properties must be strings.", this);
                if (new Set(t).size !== t.length) throw new o.b("observable-bind-duplicate-properties: Properties must be unique.", this);
                u(this);
                const e = this[l];
                t.forEach(t => {
                    if (e.has(t)) throw new o.b("observable-bind-rebind: Cannot bind the same property more that once.", this)
                });
                const n = new Map;
                return t.forEach(t => {
                    const i = {property: t, to: []};
                    e.set(t, i), n.set(t, i)
                }), {to: h, toMany: f, _observable: this, _bindProperties: t, _to: [], _bindings: n}
            }, unbind(...t) {
                if (!(a in this)) return;
                const e = this[l], n = this[c];
                if (t.length) {
                    if (!m(t)) throw new o.b("observable-unbind-wrong-properties: Properties must be strings.", this);
                    t.forEach(t => {
                        const i = e.get(t);
                        if (!i) return;
                        let o, r, s, a;
                        i.to.forEach(t => {
                            o = t[0], r = t[1], s = n.get(o), (a = s[r]).delete(i), a.size || delete s[r], Object.keys(s).length || (n.delete(o), this.stopListening(o, "change"))
                        }), e.delete(t)
                    })
                } else n.forEach((t, e) => {
                    this.stopListening(e, "change")
                }), n.clear(), e.clear()
            }, decorate(t) {
                const e = this[t];
                if (!e) throw new o.b("observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.", this, {
                    object: this,
                    methodName: t
                });
                this.on(t, (t, n) => {
                    t.return = e.apply(this, n)
                }), this[t] = function (...e) {
                    return this.fire(t, e)
                }
            }
        };

        function u(t) {
            a in t || (Object.defineProperty(t, a, {value: new Map}), Object.defineProperty(t, c, {value: new Map}), Object.defineProperty(t, l, {value: new Map}))
        }

        function h(...t) {
            const e = function (...t) {
                if (!t.length) throw new o.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.", null);
                const e = {to: []};
                let n;
                "function" == typeof t[t.length - 1] && (e.callback = t.pop());
                return t.forEach(t => {
                    if ("string" == typeof t) n.properties.push(t); else {
                        if ("object" != typeof t) throw new o.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.", null);
                        n = {observable: t, properties: []}, e.to.push(n)
                    }
                }), e
            }(...t), n = Array.from(this._bindings.keys()), i = n.length;
            if (!e.callback && e.to.length > 1) throw new o.b("observable-bind-to-no-callback: Binding multiple observables only possible with callback.", this);
            if (i > 1 && e.callback) throw new o.b("observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.", this);
            e.to.forEach(t => {
                if (t.properties.length && t.properties.length !== i) throw new o.b("observable-bind-to-properties-length: The number of properties must match.", this);
                t.properties.length || (t.properties = this._bindProperties)
            }), this._to = e.to, e.callback && (this._bindings.get(n[0]).callback = e.callback), function (t, e) {
                e.forEach(e => {
                    const n = t[c];
                    let i;
                    n.get(e.observable) || t.listenTo(e.observable, "change", (o, r) => {
                        (i = n.get(e.observable)[r]) && i.forEach(e => {
                            p(t, e.property)
                        })
                    })
                })
            }(this._observable, this._to), function (t) {
                let e;
                t._bindings.forEach((n, i) => {
                    t._to.forEach(o => {
                        e = o.properties[n.callback ? 0 : t._bindProperties.indexOf(i)], n.to.push([o.observable, e]), function (t, e, n, i) {
                            const o = t[c], r = o.get(n), s = r || {};
                            s[i] || (s[i] = new Set);
                            s[i].add(e), r || o.set(n, s)
                        }(t._observable, n, o.observable, e)
                    })
                })
            }(this), this._bindProperties.forEach(t => {
                p(this._observable, t)
            })
        }

        function f(t, e, n) {
            if (this._bindings.size > 1) throw new o.b("observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().", this);
            this.to(...function (t, e) {
                const n = t.map(t => [t, e]);
                return Array.prototype.concat.apply([], n)
            }(t, e), n)
        }

        function m(t) {
            return t.every(t => "string" == typeof t)
        }

        function p(t, e) {
            const n = t[l].get(e);
            let i;
            i = n.callback ? n.callback.apply(t, n.to.map(t => t[0][t[1]])) : (i = n.to[0])[0][i[1]], t.hasOwnProperty(e) ? t[e] = i : t.set(e, i)
        }

        Object(s.a)(d, i.c), e.a = d
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        }), n.d(e, "d", function () {
            return s
        }), n.d(e, "c", function () {
            return a
        }), n.d(e, "b", function () {
            return c
        }), n.d(e, "i", function () {
            return l
        }), n.d(e, "h", function () {
            return d
        }), n.d(e, "e", function () {
            return u
        }), n.d(e, "g", function () {
            return f
        }), n.d(e, "f", function () {
            return m
        });
        var i = n(9), o = n(26);
        const r = t => {
            const e = t.createElement("br");
            return e.dataset.ckeFiller = !0, e
        }, s = t => t.createTextNode(" "), a = 7;
        let c = "";
        for (let t = 0; t < a; t++) c += "​";

        function l(t) {
            return Object(o.a)(t) && t.data.substr(0, a) === c
        }

        function d(t) {
            return t.data.length == a && l(t)
        }

        function u(t) {
            return l(t) ? t.data.slice(a) : t.data
        }

        const h = new WeakMap;

        function f(t, e) {
            let n = h.get(e);
            return n || (n = e(window.document), h.set(e, n)), t.isEqualNode(n)
        }

        function m(t) {
            t.document.on("keydown", p)
        }

        function p(t, e) {
            if (e.keyCode == i.c.arrowleft) {
                const t = e.domTarget.ownerDocument.defaultView.getSelection();
                if (1 == t.rangeCount && t.getRangeAt(0).collapsed) {
                    const e = t.getRangeAt(0).startContainer, n = t.getRangeAt(0).startOffset;
                    l(e) && n <= a && t.collapse(e, 0)
                }
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return c
        });
        var i = n(56), o = n(57), r = n(16), s = n(37), a = n(34);

        class c extends i.a {
            constructor(t, e, n) {
                super(e), this.name = t, this._children = new o.a, n && this._insertChild(0, n)
            }

            get childCount() {
                return this._children.length
            }

            get maxOffset() {
                return this._children.maxOffset
            }

            get isEmpty() {
                return 0 === this.childCount
            }

            is(t, e = null) {
                const n = t.replace(/^model:/, "");
                return e ? "element" == n && e == this.name : "element" == n || n == this.name || super.is(t)
            }

            getChild(t) {
                return this._children.getNode(t)
            }

            getChildren() {
                return this._children[Symbol.iterator]()
            }

            getChildIndex(t) {
                return this._children.getNodeIndex(t)
            }

            getChildStartOffset(t) {
                return this._children.getNodeStartOffset(t)
            }

            offsetToIndex(t) {
                return this._children.offsetToIndex(t)
            }

            getNodeByPath(t) {
                let e = this;
                for (const n of t) e = e.getChild(e.offsetToIndex(n));
                return e
            }

            toJSON() {
                const t = super.toJSON();
                if (t.name = this.name, this._children.length > 0) {
                    t.children = [];
                    for (const e of this._children) t.children.push(e.toJSON())
                }
                return t
            }

            _clone(t = !1) {
                const e = t ? Array.from(this._children).map(t => t._clone(!0)) : null;
                return new c(this.name, this.getAttributes(), e)
            }

            _appendChild(t) {
                this._insertChild(this.childCount, t)
            }

            _insertChild(t, e) {
                const n = function (t) {
                    if ("string" == typeof t) return [new r.a(t)];
                    Object(a.a)(t) || (t = [t]);
                    return Array.from(t).map(t => "string" == typeof t ? new r.a(t) : t instanceof s.a ? new r.a(t.data, t.getAttributes()) : t)
                }(e);
                for (const t of n) null !== t.parent && t._remove(), t.parent = this;
                this._children._insertNodes(t, n)
            }

            _removeChildren(t, e = 1) {
                const n = this._children._removeNodes(t, e);
                for (const t of n) t.parent = null;
                return n
            }

            static fromJSON(t) {
                let e = null;
                if (t.children) {
                    e = [];
                    for (const n of t.children) n.name ? e.push(c.fromJSON(n)) : e.push(r.a.fromJSON(n))
                }
                return new c(t.name, t.attributes, e)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        });
        var i = n(56);

        class o extends i.a {
            constructor(t, e) {
                super(e), this._data = t || ""
            }

            get offsetSize() {
                return this.data.length
            }

            get data() {
                return this._data
            }

            is(t) {
                return "text" == t || "model:text" == t || super.is(t)
            }

            toJSON() {
                const t = super.toJSON();
                return t.data = this.data, t
            }

            _clone() {
                return new o(this.data, this.getAttributes())
            }

            static fromJSON(t) {
                return new o(t.data, t.attributes)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        });
        var i = n(55);

        class o extends i.a {
            constructor(t) {
                super(), this._textData = t
            }

            is(t) {
                return "text" == t || "view:text" == t || super.is(t)
            }

            get data() {
                return this._textData
            }

            get _data() {
                return this.data
            }

            set _data(t) {
                this._fireChange("text", this), this._textData = t
            }

            isSimilar(t) {
                return t instanceof o && (this === t || this.data === t.data)
            }

            _clone() {
                return new o(this.data)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return l
        });
        var i = n(29), o = n(3), r = n(2), s = n(0), a = n(24), c = n(38);

        class l extends i.a {
            constructor(t, e, n, i) {
                super(i), this.sourcePosition = t.clone(), this.sourcePosition.stickiness = "toNext", this.howMany = e, this.targetPosition = n.clone(), this.targetPosition.stickiness = "toNone"
            }

            get type() {
                return "$graveyard" == this.targetPosition.root.rootName ? "remove" : "$graveyard" == this.sourcePosition.root.rootName ? "reinsert" : "move"
            }

            clone() {
                return new this.constructor(this.sourcePosition, this.howMany, this.targetPosition, this.baseVersion)
            }

            getMovedRangeStart() {
                return this.targetPosition._getTransformedByDeletion(this.sourcePosition, this.howMany)
            }

            getReversed() {
                const t = this.sourcePosition._getTransformedByInsertion(this.targetPosition, this.howMany);
                return new this.constructor(this.getMovedRangeStart(), this.howMany, t, this.baseVersion + 1)
            }

            _validate() {
                const t = this.sourcePosition.parent, e = this.targetPosition.parent, n = this.sourcePosition.offset,
                    i = this.targetPosition.offset;
                if (n + this.howMany > t.maxOffset) throw new s.b("move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.", this);
                if (t === e && n < i && i < n + this.howMany) throw new s.b("move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.", this);
                if (this.sourcePosition.root == this.targetPosition.root && "prefix" == Object(a.a)(this.sourcePosition.getParentPath(), this.targetPosition.getParentPath())) {
                    const t = this.sourcePosition.path.length - 1;
                    if (this.targetPosition.path[t] >= n && this.targetPosition.path[t] < n + this.howMany) throw new s.b("move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.", this)
                }
            }

            _execute() {
                Object(c.b)(r.a._createFromPositionAndShift(this.sourcePosition, this.howMany), this.targetPosition)
            }

            toJSON() {
                const t = super.toJSON();
                return t.sourcePosition = this.sourcePosition.toJSON(), t.targetPosition = this.targetPosition.toJSON(), t
            }

            static get className() {
                return "MoveOperation"
            }

            static fromJSON(t, e) {
                const n = o.a.fromJSON(t.sourcePosition, e), i = o.a.fromJSON(t.targetPosition, e);
                return new this(n, t.howMany, i, t.baseVersion)
            }
        }
    }, , function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return l
        });
        var i = n(29), o = n(27), r = n(3), s = n(2), a = n(38), c = n(0);

        class l extends i.a {
            constructor(t, e, n, i) {
                super(i), this.splitPosition = t.clone(), this.splitPosition.stickiness = "toNext", this.howMany = e, this.insertionPosition = l.getInsertionPosition(t), this.insertionPosition.stickiness = "toNone", this.graveyardPosition = n ? n.clone() : null, this.graveyardPosition && (this.graveyardPosition.stickiness = "toNext")
            }

            get type() {
                return "split"
            }

            get moveTargetPosition() {
                const t = this.insertionPosition.path.slice();
                return t.push(0), new r.a(this.insertionPosition.root, t)
            }

            get movedRange() {
                const t = this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);
                return new s.a(this.splitPosition, t)
            }

            clone() {
                const t = new this.constructor(this.splitPosition, this.howMany, this.graveyardPosition, this.baseVersion);
                return t.insertionPosition = this.insertionPosition, t
            }

            getReversed() {
                const t = this.splitPosition.root.document.graveyard, e = new r.a(t, [0]);
                return new o.a(this.moveTargetPosition, this.howMany, this.splitPosition, e, this.baseVersion + 1)
            }

            _validate() {
                const t = this.splitPosition.parent, e = this.splitPosition.offset;
                if (!t || t.maxOffset < e) throw new c.b("split-operation-position-invalid: Split position is invalid.", this);
                if (!t.parent) throw new c.b("split-operation-split-in-root: Cannot split root element.", this);
                if (this.howMany != t.maxOffset - this.splitPosition.offset) throw new c.b("split-operation-how-many-invalid: Split operation specifies wrong number of nodes to move.", this);
                if (this.graveyardPosition && !this.graveyardPosition.nodeAfter) throw new c.b("split-operation-graveyard-position-invalid: Graveyard position invalid.", this)
            }

            _execute() {
                const t = this.splitPosition.parent;
                if (this.graveyardPosition) Object(a.b)(s.a._createFromPositionAndShift(this.graveyardPosition, 1), this.insertionPosition); else {
                    const e = t._clone();
                    Object(a.a)(this.insertionPosition, e)
                }
                const e = new s.a(r.a._createAt(t, this.splitPosition.offset), r.a._createAt(t, t.maxOffset));
                Object(a.b)(e, this.moveTargetPosition)
            }

            toJSON() {
                const t = super.toJSON();
                return t.splitPosition = this.splitPosition.toJSON(), t.insertionPosition = this.insertionPosition.toJSON(), this.graveyardPosition && (t.graveyardPosition = this.graveyardPosition.toJSON()), t
            }

            static get className() {
                return "SplitOperation"
            }

            static getInsertionPosition(t) {
                const e = t.path.slice(0, -1);
                return e[e.length - 1]++, new r.a(t.root, e)
            }

            static fromJSON(t, e) {
                const n = r.a.fromJSON(t.splitPosition, e), i = r.a.fromJSON(t.insertionPosition, e),
                    o = t.graveyardPosition ? r.a.fromJSON(t.graveyardPosition, e) : null,
                    s = new this(n, t.howMany, o, t.baseVersion);
                return s.insertionPosition = i, s
            }
        }
    }, function (t, e, n) {
        "use strict";
        e.a = {window: window, document: document}
    }, function (t, e, n) {
        "use strict";
        var i = n(98), o = "object" == typeof self && self && self.Object === Object && self,
            r = i.a || o || Function("return this")();
        e.a = r
    }, function (t, e, n) {
        "use strict";
        const i = navigator.userAgent.toLowerCase(), o = {
            isMac: function (t) {
                return t.indexOf("macintosh") > -1
            }(i), isEdge: function (t) {
                return !!t.match(/edge\/(\d+.?\d*)/)
            }(i), isGecko: function (t) {
                return !!t.match(/gecko\/\d+/)
            }(i), isSafari: function (t) {
                return t.indexOf(" applewebkit/") > -1 && -1 === t.indexOf("chrome")
            }(i), isAndroid: function (t) {
                return t.indexOf("android") > -1
            }(i), features: {
                isRegExpUnicodePropertySupported: function () {
                    let t = !1;
                    try {
                        t = 0 === "ć".search(new RegExp("[\\p{L}]", "u"))
                    } catch (t) {
                    }
                    return t
                }()
            }
        };
        e.a = o
    }, function (t, e, n) {
        "use strict";

        function i(t, e) {
            const n = Math.min(t.length, e.length);
            for (let i = 0; i < n; i++) if (t[i] != e[i]) return i;
            return t.length == e.length ? "same" : t.length < e.length ? "prefix" : "extension"
        }

        n.d(e, "a", function () {
            return i
        })
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return a
        });
        var i = n(3), o = n(8), r = n(5), s = n(0);

        class a extends i.a {
            constructor(t, e, n = "toNone") {
                if (super(t, e, n), !this.root.is("rootElement")) throw new s.b("model-liveposition-root-not-rootelement: LivePosition's root has to be an instance of RootElement.", t);
                (function () {
                    this.listenTo(this.root.document.model, "applyOperation", (t, e) => {
                        const n = e[0];
                        n.isDocumentOperation && function (t) {
                            const e = this.getTransformedByOperation(t);
                            if (!this.isEqual(e)) {
                                const t = this.toPosition();
                                this.path = e.path, this.root = e.root, this.fire("change", t)
                            }
                        }.call(this, n)
                    }, {priority: "low"})
                }).call(this)
            }

            detach() {
                this.stopListening()
            }

            is(t) {
                return "livePosition" == t || "model:livePosition" == t || super.is(t)
            }

            toPosition() {
                return new i.a(this.root, this.path.slice(), this.stickiness)
            }

            static fromPosition(t, e) {
                return new this(t.root, t.path.slice(), e || t.stickiness)
            }
        }

        Object(r.a)(a, o.c)
    }, function (t, e, n) {
        "use strict";

        function i(t) {
            return "[object Text]" == Object.prototype.toString.call(t)
        }

        n.d(e, "a", function () {
            return i
        })
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return l
        });
        var i = n(29), o = n(20), r = n(3), s = n(2), a = n(38), c = n(0);

        class l extends i.a {
            constructor(t, e, n, i, o) {
                super(o), this.sourcePosition = t.clone(), this.sourcePosition.stickiness = "toPrevious", this.howMany = e, this.targetPosition = n.clone(), this.targetPosition.stickiness = "toNext", this.graveyardPosition = i.clone()
            }

            get type() {
                return "merge"
            }

            get deletionPosition() {
                return new r.a(this.sourcePosition.root, this.sourcePosition.path.slice(0, -1))
            }

            get movedRange() {
                const t = this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);
                return new s.a(this.sourcePosition, t)
            }

            clone() {
                return new this.constructor(this.sourcePosition, this.howMany, this.targetPosition, this.graveyardPosition, this.baseVersion)
            }

            getReversed() {
                const t = this.targetPosition._getTransformedByMergeOperation(this),
                    e = this.sourcePosition.path.slice(0, -1),
                    n = new r.a(this.sourcePosition.root, e)._getTransformedByMergeOperation(this),
                    i = new o.a(t, this.howMany, this.graveyardPosition, this.baseVersion + 1);
                return i.insertionPosition = n, i
            }

            _validate() {
                const t = this.sourcePosition.parent, e = this.targetPosition.parent;
                if (!t.parent) throw new c.b("merge-operation-source-position-invalid: Merge source position is invalid.", this);
                if (!e.parent) throw new c.b("merge-operation-target-position-invalid: Merge target position is invalid.", this);
                if (this.howMany != t.maxOffset) throw new c.b("merge-operation-how-many-invalid: Merge operation specifies wrong number of nodes to move.", this)
            }

            _execute() {
                const t = this.sourcePosition.parent, e = s.a._createIn(t);
                Object(a.b)(e, this.targetPosition), Object(a.b)(s.a._createOn(t), this.graveyardPosition)
            }

            toJSON() {
                const t = super.toJSON();
                return t.sourcePosition = t.sourcePosition.toJSON(), t.targetPosition = t.targetPosition.toJSON(), t.graveyardPosition = t.graveyardPosition.toJSON(), t
            }

            static get className() {
                return "MergeOperation"
            }

            static fromJSON(t, e) {
                const n = r.a.fromJSON(t.sourcePosition, e), i = r.a.fromJSON(t.targetPosition, e),
                    o = r.a.fromJSON(t.graveyardPosition, e);
                return new this(n, t.howMany, i, o, t.baseVersion)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return a
        });
        var i = n(8), o = n(0), r = n(33), s = n(5);

        class a {
            constructor(t = {}) {
                this._items = [], this._itemMap = new Map, this._idProperty = t.idProperty || "id", this._bindToExternalToInternalMap = new WeakMap, this._bindToInternalToExternalMap = new WeakMap, this._skippedIndexesFromExternal = []
            }

            get length() {
                return this._items.length
            }

            get first() {
                return this._items[0] || null
            }

            get last() {
                return this._items[this.length - 1] || null
            }

            add(t, e) {
                let n;
                const i = this._idProperty;
                if (i in t) {
                    if ("string" != typeof (n = t[i])) throw new o.b("collection-add-invalid-id", this);
                    if (this.get(n)) throw new o.b("collection-add-item-already-exists", this)
                } else t[i] = n = Object(r.a)();
                if (void 0 === e) e = this._items.length; else if (e > this._items.length || e < 0) throw new o.b("collection-add-item-invalid-index", this);
                return this._items.splice(e, 0, t), this._itemMap.set(n, t), this.fire("add", t, e), this
            }

            get(t) {
                let e;
                if ("string" == typeof t) e = this._itemMap.get(t); else {
                    if ("number" != typeof t) throw new o.b("collection-get-invalid-arg: Index or id must be given.", this);
                    e = this._items[t]
                }
                return e || null
            }

            has(t) {
                if ("string" == typeof t) return this._itemMap.has(t);
                {
                    const e = t[this._idProperty];
                    return this._itemMap.has(e)
                }
            }

            getIndex(t) {
                let e;
                return e = "string" == typeof t ? this._itemMap.get(t) : t, this._items.indexOf(e)
            }

            remove(t) {
                let e, n, i, r = !1;
                const s = this._idProperty;
                if ("string" == typeof t ? (n = t, r = !(i = this._itemMap.get(n)), i && (e = this._items.indexOf(i))) : "number" == typeof t ? (e = t, r = !(i = this._items[e]), i && (n = i[s])) : (n = (i = t)[s], r = -1 == (e = this._items.indexOf(i)) || !this._itemMap.get(n)), r) throw new o.b("collection-remove-404: Item not found.", this);
                this._items.splice(e, 1), this._itemMap.delete(n);
                const a = this._bindToInternalToExternalMap.get(i);
                return this._bindToInternalToExternalMap.delete(i), this._bindToExternalToInternalMap.delete(a), this.fire("remove", i, e), i
            }

            map(t, e) {
                return this._items.map(t, e)
            }

            find(t, e) {
                return this._items.find(t, e)
            }

            filter(t, e) {
                return this._items.filter(t, e)
            }

            clear() {
                for (this._bindToCollection && (this.stopListening(this._bindToCollection), this._bindToCollection = null); this.length;) this.remove(0)
            }

            bindTo(t) {
                if (this._bindToCollection) throw new o.b("collection-bind-to-rebind: The collection cannot be bound more than once.", this);
                return this._bindToCollection = t, {
                    as: t => {
                        this._setUpBindToBinding(e => new t(e))
                    }, using: t => {
                        "function" == typeof t ? this._setUpBindToBinding(e => t(e)) : this._setUpBindToBinding(e => e[t])
                    }
                }
            }

            _setUpBindToBinding(t) {
                const e = this._bindToCollection, n = (n, i, o) => {
                    const r = e._bindToCollection == this, s = e._bindToInternalToExternalMap.get(i);
                    if (r && s) this._bindToExternalToInternalMap.set(i, s), this._bindToInternalToExternalMap.set(s, i); else {
                        const n = t(i);
                        if (!n) return void this._skippedIndexesFromExternal.push(o);
                        let r = o;
                        for (const t of this._skippedIndexesFromExternal) o > t && r--;
                        for (const t of e._skippedIndexesFromExternal) r >= t && r++;
                        this._bindToExternalToInternalMap.set(i, n), this._bindToInternalToExternalMap.set(n, i), this.add(n, r);
                        for (let t = 0; t < e._skippedIndexesFromExternal.length; t++) r <= e._skippedIndexesFromExternal[t] && e._skippedIndexesFromExternal[t]++
                    }
                };
                for (const t of e) n(0, t, e.getIndex(t));
                this.listenTo(e, "add", n), this.listenTo(e, "remove", (t, e, n) => {
                    const i = this._bindToExternalToInternalMap.get(e);
                    i && this.remove(i), this._skippedIndexesFromExternal = this._skippedIndexesFromExternal.reduce((t, e) => (n < e && t.push(e - 1), n > e && t.push(e), t), [])
                })
            }

            [Symbol.iterator]() {
                return this._items[Symbol.iterator]()
            }
        }

        Object(s.a)(a, i.c)
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return i
        });

        class i {
            constructor(t) {
                this.baseVersion = t, this.isDocumentOperation = null !== this.baseVersion, this.batch = null
            }

            _validate() {
            }

            toJSON() {
                const t = Object.assign({}, this);
                return t.__className = this.constructor.className, delete t.batch, delete t.isDocumentOperation, t
            }

            static get className() {
                return "Operation"
            }

            static fromJSON(t) {
                return new this(t.baseVersion)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return d
        });
        var i = n(55), o = n(17), r = n(49), s = n(108), a = n(34), c = n(48), l = n(97);

        class d extends i.a {
            constructor(t, e, n) {
                if (super(), this.name = t, this._attrs = function (t) {
                    t = Object(l.a)(t) ? Object(s.a)(t) : new Map(t);
                    for (const [e, n] of t) null === n ? t.delete(e) : "string" != typeof n && t.set(e, String(n));
                    return t
                }(e), this._children = [], n && this._insertChild(0, n), this._classes = new Set, this._attrs.has("class")) {
                    const t = this._attrs.get("class");
                    h(this._classes, t), this._attrs.delete("class")
                }
                this._styles = new Map, this._attrs.has("style") && (u(this._styles, this._attrs.get("style")), this._attrs.delete("style")), this._customProperties = new Map
            }

            get childCount() {
                return this._children.length
            }

            get isEmpty() {
                return 0 === this._children.length
            }

            is(t, e = null) {
                const n = t.replace(/^view:/, "");
                return e ? "element" == n && e == this.name : "element" == n || n == this.name || super.is(t)
            }

            getChild(t) {
                return this._children[t]
            }

            getChildIndex(t) {
                return this._children.indexOf(t)
            }

            getChildren() {
                return this._children[Symbol.iterator]()
            }

            * getAttributeKeys() {
                this._classes.size > 0 && (yield"class"), this._styles.size > 0 && (yield"style"), yield* this._attrs.keys()
            }

            * getAttributes() {
                yield* this._attrs.entries(), this._classes.size > 0 && (yield["class", this.getAttribute("class")]), this._styles.size > 0 && (yield["style", this.getAttribute("style")])
            }

            getAttribute(t) {
                if ("class" == t) return this._classes.size > 0 ? [...this._classes].join(" ") : void 0;
                if ("style" != t) return this._attrs.get(t);
                if (this._styles.size > 0) {
                    let t = "";
                    for (const [e, n] of this._styles) t += `${e}:${n};`;
                    return t
                }
            }

            hasAttribute(t) {
                return "class" == t ? this._classes.size > 0 : "style" == t ? this._styles.size > 0 : this._attrs.has(t)
            }

            isSimilar(t) {
                if (!(t instanceof d)) return !1;
                if (this === t) return !0;
                if (this.name != t.name) return !1;
                if (this._attrs.size !== t._attrs.size || this._classes.size !== t._classes.size || this._styles.size !== t._styles.size) return !1;
                for (const [e, n] of this._attrs) if (!t._attrs.has(e) || t._attrs.get(e) !== n) return !1;
                for (const e of this._classes) if (!t._classes.has(e)) return !1;
                for (const [e, n] of this._styles) if (!t._styles.has(e) || t._styles.get(e) !== n) return !1;
                return !0
            }

            hasClass(...t) {
                for (const e of t) if (!this._classes.has(e)) return !1;
                return !0
            }

            getClassNames() {
                return this._classes.keys()
            }

            getStyle(t) {
                return this._styles.get(t)
            }

            getStyleNames() {
                return this._styles.keys()
            }

            hasStyle(...t) {
                for (const e of t) if (!this._styles.has(e)) return !1;
                return !0
            }

            findAncestor(...t) {
                const e = new c.a(...t);
                let n = this.parent;
                for (; n;) {
                    if (e.match(n)) return n;
                    n = n.parent
                }
                return null
            }

            getCustomProperty(t) {
                return this._customProperties.get(t)
            }

            * getCustomProperties() {
                yield* this._customProperties.entries()
            }

            getIdentity() {
                const t = Array.from(this._classes).sort().join(","),
                    e = Array.from(this._styles).map(t => `${t[0]}:${t[1]}`).sort().join(";"),
                    n = Array.from(this._attrs).map(t => `${t[0]}="${t[1]}"`).sort().join(" ");
                return this.name + ("" == t ? "" : ` class="${t}"`) + ("" == e ? "" : ` style="${e}"`) + ("" == n ? "" : ` ${n}`)
            }

            _clone(t = !1) {
                const e = [];
                if (t) for (const n of this.getChildren()) e.push(n._clone(t));
                const n = new this.constructor(this.name, this._attrs, e);
                return n._classes = new Set(this._classes), n._styles = new Map(this._styles), n._customProperties = new Map(this._customProperties), n.getFillerOffset = this.getFillerOffset, n
            }

            _appendChild(t) {
                return this._insertChild(this.childCount, t)
            }

            _insertChild(t, e) {
                this._fireChange("children", this);
                let n = 0;
                const i = function (t) {
                    if ("string" == typeof t) return [new o.a(t)];
                    Object(a.a)(t) || (t = [t]);
                    return Array.from(t).map(t => "string" == typeof t ? new o.a(t) : t instanceof r.a ? new o.a(t.data) : t)
                }(e);
                for (const e of i) null !== e.parent && e._remove(), e.parent = this, this._children.splice(t, 0, e), t++, n++;
                return n
            }

            _removeChildren(t, e = 1) {
                this._fireChange("children", this);
                for (let n = t; n < t + e; n++) this._children[n].parent = null;
                return this._children.splice(t, e)
            }

            _setAttribute(t, e) {
                e = String(e), this._fireChange("attributes", this), "class" == t ? h(this._classes, e) : "style" == t ? u(this._styles, e) : this._attrs.set(t, e)
            }

            _removeAttribute(t) {
                return this._fireChange("attributes", this), "class" == t ? this._classes.size > 0 && (this._classes.clear(), !0) : "style" == t ? this._styles.size > 0 && (this._styles.clear(), !0) : this._attrs.delete(t)
            }

            _addClass(t) {
                this._fireChange("attributes", this), (t = Array.isArray(t) ? t : [t]).forEach(t => this._classes.add(t))
            }

            _removeClass(t) {
                this._fireChange("attributes", this), (t = Array.isArray(t) ? t : [t]).forEach(t => this._classes.delete(t))
            }

            _setStyle(t, e) {
                if (this._fireChange("attributes", this), Object(l.a)(t)) {
                    const e = Object.keys(t);
                    for (const n of e) this._styles.set(n, t[n])
                } else this._styles.set(t, e)
            }

            _removeStyle(t) {
                this._fireChange("attributes", this), (t = Array.isArray(t) ? t : [t]).forEach(t => this._styles.delete(t))
            }

            _setCustomProperty(t, e) {
                this._customProperties.set(t, e)
            }

            _removeCustomProperty(t) {
                return this._customProperties.delete(t)
            }
        }

        function u(t, e) {
            let n = null, i = 0, o = 0, r = null;
            if (t.clear(), "" !== e) {
                ";" != e.charAt(e.length - 1) && (e += ";");
                for (let s = 0; s < e.length; s++) {
                    const a = e.charAt(s);
                    if (null === n) switch (a) {
                        case":":
                            r || (r = e.substr(i, s - i), o = s + 1);
                            break;
                        case'"':
                        case"'":
                            n = a;
                            break;
                        case";": {
                            const n = e.substr(o, s - o);
                            r && t.set(r.trim(), n.trim()), r = null, i = s + 1;
                            break
                        }
                    } else a === n && (n = null)
                }
            }
        }

        function h(t, e) {
            const n = e.split(/\s+/);
            t.clear(), n.forEach(e => t.add(e))
        }
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) {
            return null != t && "object" == typeof t
        }
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
    }, function (t, e, n) {
        "use strict";

        function i() {
            let t = "e";
            for (let e = 0; e < 8; e++) t += Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            return t
        }

        n.d(e, "a", function () {
            return i
        })
    }, function (t, e, n) {
        "use strict";

        function i(t) {
            return !(!t || !t[Symbol.iterator])
        }

        n.d(e, "a", function () {
            return i
        })
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return i
        }), n.d(e, "c", function () {
            return o
        }), n.d(e, "e", function () {
            return r
        }), n.d(e, "d", function () {
            return l
        }), n.d(e, "b", function () {
            return d
        });
        const i = {engine: "mathjax", outputType: "script", forceOutputType: !1, enablePreview: !0};

        function o(t) {
            const e = t.getSelectedElement();
            return e && e.is("mathtex") ? e : null
        }

        function r(t, e, n = "katex", i = !1, o = !1) {
            "mathjax" === n && "undefined" != typeof MathJax ? !function (t) {
                return t && "string" == typeof t && 3 === t.split(".").length && "3" === t.split(".")[0]
            }(MathJax.version) ? s(e, o, n => {
                setTimeout(() => {
                    !function (t, e, n) {
                        e.innerHTML = n ? "\\[" + t + "\\]" : "\\(" + t + "\\)";
                        MathJax.Hub.Queue(["Typeset", MathJax.Hub, e])
                    }(t, n, i), o && MathJax.Hub.Queue(() => {
                        n.style.display = "block", a(e, n)
                    })
                })
            }) : s(e, o, n => {
                !function (t, e, n, i) {
                    let o = void 0;
                    void 0 !== MathJax.tex2chtmlPromise ? o = MathJax.tex2chtmlPromise : void 0 !== MathJax.tex2svgPromise && (o = MathJax.tex2svgPromise);
                    void 0 !== o && o(t, {display: n}).then(t => {
                        e.firstChild && e.removeChild(e.firstChild), e.appendChild(t), i()
                    })
                }(t, n, i, () => {
                    o && (n.style.display = "block", a(e, n))
                })
            }) : "katex" === n && "undefined" != typeof katex ? s(e, o, n => {
                katex.render(t, n, {throwOnError: !1, displayMode: i}), o && (n.style.display = "block", a(e, n))
            }) : "function" == typeof n ? n(t, e, i) : (e.innerHTML = t, console.warn(`math-tex-typesetting-missing: Missing the mathematical typesetting engine (${n}) for tex.`))
        }

        function s(t, e, n) {
            e ? function (t, e) {
                const n = function (t) {
                    let e = document.getElementById("math-preview");
                    if (!e) {
                        (e = document.createElement("div")).setAttribute("id", "math-preview"), document.body.appendChild(e);
                        let n = !1;
                        const i = () => {
                            n || (window.requestAnimationFrame(() => {
                                c(t, e), n = !1
                            }), n = !0)
                        };
                        window.addEventListener("resize", i), window.addEventListener("scroll", i)
                    }
                    return e
                }(t);
                e(n)
            }(t, t => {
                n(t)
            }) : n(t)
        }

        function a(t, e) {
            c(t, e);
            const n = e.getBoundingClientRect();
            t.style.width = n.width + "px", t.style.height = n.height + "px"
        }

        function c(t, e) {
            const n = t.getBoundingClientRect(), i = window.scrollX + n.left, o = window.scrollY + n.top;
            e.style.position = "absolute", e.style.left = i + "px", e.style.top = o + "px", e.style.zIndex = "var(--ck-z-modal)", e.style.pointerEvents = "none"
        }

        function l(t) {
            return t.match(/^(\\\[.*?\\\]|\\\(.*?\\\))$/)
        }

        function d(t) {
            const e = (t = t.trim()).includes("\\(") && t.includes("\\)"), n = t.includes("\\[") && t.includes("\\]");
            return (e || n) && (t = t.substring(2, t.length - 2).trim()), {equation: t, display: n}
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(29), o = n(2), r = n(0), s = n(38), a = n(112);
        var c = function (t, e) {
            return Object(a.a)(t, e)
        };
        n.d(e, "a", function () {
            return l
        });

        class l extends i.a {
            constructor(t, e, n, i, o) {
                super(o), this.range = t.clone(), this.key = e, this.oldValue = void 0 === n ? null : n, this.newValue = void 0 === i ? null : i
            }

            get type() {
                return null === this.oldValue ? "addAttribute" : null === this.newValue ? "removeAttribute" : "changeAttribute"
            }

            clone() {
                return new l(this.range, this.key, this.oldValue, this.newValue, this.baseVersion)
            }

            getReversed() {
                return new l(this.range, this.key, this.newValue, this.oldValue, this.baseVersion + 1)
            }

            toJSON() {
                const t = super.toJSON();
                return t.range = this.range.toJSON(), t
            }

            _validate() {
                if (!this.range.isFlat) throw new r.b("attribute-operation-range-not-flat: The range to change is not flat.", this);
                for (const t of this.range.getItems({shallow: !0})) {
                    if (null !== this.oldValue && !c(t.getAttribute(this.key), this.oldValue)) throw new r.b("attribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.", this, {
                        item: t,
                        key: this.key,
                        value: this.oldValue
                    });
                    if (null === this.oldValue && null !== this.newValue && t.hasAttribute(this.key)) throw new r.b("attribute-operation-attribute-exists: The attribute with given key already exists.", this, {
                        node: t,
                        key: this.key
                    })
                }
            }

            _execute() {
                c(this.oldValue, this.newValue) || Object(s.e)(this.range, this.key, this.newValue)
            }

            static get className() {
                return "AttributeOperation"
            }

            static fromJSON(t, e) {
                return new l(o.a.fromJSON(t.range, e), t.key, t.oldValue, t.newValue, t.baseVersion)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        });
        var i = n(0);

        class o {
            constructor(t, e, n) {
                if (this.textNode = t, e < 0 || e > t.offsetSize) throw new i.b("model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.", this);
                if (n < 0 || e + n > t.offsetSize) throw new i.b("model-textproxy-wrong-length: Given length value is incorrect.", this);
                this.data = t.data.substring(e, e + n), this.offsetInText = e
            }

            get startOffset() {
                return null !== this.textNode.startOffset ? this.textNode.startOffset + this.offsetInText : null
            }

            get offsetSize() {
                return this.data.length
            }

            get endOffset() {
                return null !== this.startOffset ? this.startOffset + this.offsetSize : null
            }

            get isPartial() {
                return this.offsetSize !== this.textNode.offsetSize
            }

            get parent() {
                return this.textNode.parent
            }

            get root() {
                return this.textNode.root
            }

            get document() {
                return this.textNode.document
            }

            is(t) {
                return "textProxy" == t || "model:textProxy" == t
            }

            getPath() {
                const t = this.textNode.getPath();
                return t.length > 0 && (t[t.length - 1] += this.offsetInText), t
            }

            getAncestors(t = {includeSelf: !1, parentFirst: !1}) {
                const e = [];
                let n = t.includeSelf ? this : this.parent;
                for (; n;) e[t.parentFirst ? "push" : "unshift"](n), n = n.parent;
                return e
            }

            hasAttribute(t) {
                return this.textNode.hasAttribute(t)
            }

            getAttribute(t) {
                return this.textNode.getAttribute(t)
            }

            getAttributes() {
                return this.textNode.getAttributes()
            }

            getAttributeKeys() {
                return this.textNode.getAttributeKeys()
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return d
        }), n.d(e, "d", function () {
            return u
        }), n.d(e, "b", function () {
            return h
        }), n.d(e, "e", function () {
            return f
        }), n.d(e, "c", function () {
            return m
        });
        var i = n(56), o = n(16), r = n(37), s = n(2), a = n(67), c = n(57), l = n(0);

        function d(t, e) {
            const n = (e = m(e)).reduce((t, e) => t + e.offsetSize, 0), i = t.parent;
            g(t);
            const o = t.index;
            return i._insertChild(o, e), p(i, o + e.length), p(i, o), new s.a(t, t.getShiftedBy(n))
        }

        function u(t) {
            if (!t.isFlat) throw new l.b("operation-utils-remove-range-not-flat: Trying to remove a range which starts and ends in different element.", this);
            const e = t.start.parent;
            g(t.start), g(t.end);
            const n = e._removeChildren(t.start.index, t.end.index - t.start.index);
            return p(e, t.start.index), n
        }

        function h(t, e) {
            if (!t.isFlat) throw new l.b("operation-utils-move-range-not-flat: Trying to move a range which starts and ends in different element.", this);
            const n = u(t);
            return d(e = e._getTransformedByDeletion(t.start, t.end.offset - t.start.offset), n)
        }

        function f(t, e, n) {
            g(t.start), g(t.end);
            for (const i of t.getItems({shallow: !0})) {
                const t = i.is("textProxy") ? i.textNode : i;
                null !== n ? t._setAttribute(e, n) : t._removeAttribute(e), p(t.parent, t.index)
            }
            p(t.end.parent, t.end.index)
        }

        function m(t) {
            const e = [];
            t instanceof Array || (t = [t]);
            for (let n = 0; n < t.length; n++) if ("string" == typeof t[n]) e.push(new o.a(t[n])); else if (t[n] instanceof r.a) e.push(new o.a(t[n].data, t[n].getAttributes())); else if (t[n] instanceof a.a || t[n] instanceof c.a) for (const i of t[n]) e.push(i); else t[n] instanceof i.a && e.push(t[n]);
            for (let t = 1; t < e.length; t++) {
                const n = e[t], i = e[t - 1];
                n instanceof o.a && i instanceof o.a && b(n, i) && (e.splice(t - 1, 2, new o.a(i.data + n.data, i.getAttributes())), t--)
            }
            return e
        }

        function p(t, e) {
            const n = t.getChild(e - 1), i = t.getChild(e);
            if (n && i && n.is("text") && i.is("text") && b(n, i)) {
                const r = new o.a(n.data + i.data, n.getAttributes());
                t._removeChildren(e - 1, 2), t._insertChild(e - 1, r)
            }
        }

        function g(t) {
            const e = t.textNode, n = t.parent;
            if (e) {
                const i = t.offset - e.startOffset, r = e.index;
                n._removeChildren(r, 1);
                const s = new o.a(e.data.substr(0, i), e.getAttributes()),
                    a = new o.a(e.data.substr(i), e.getAttributes());
                n._insertChild(r, [s, a])
            }
        }

        function b(t, e) {
            const n = t.getAttributes(), i = e.getAttributes();
            for (const t of n) {
                if (t[1] !== e.getAttribute(t[0])) return !1;
                i.next()
            }
            return i.next().done
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return f
        });
        var i = n(0), o = n(10), r = n(4), s = n(5), a = n(8), c = n(55), l = n(30), d = n(95), u = n(34), h = n(109);

        class f {
            constructor(t = null, e, n) {
                this._ranges = [], this._lastRangeBackward = !1, this._isFake = !1, this._fakeSelectionLabel = "", this.setTo(t, e, n)
            }

            get isFake() {
                return this._isFake
            }

            get fakeSelectionLabel() {
                return this._fakeSelectionLabel
            }

            get anchor() {
                if (!this._ranges.length) return null;
                const t = this._ranges[this._ranges.length - 1];
                return (this._lastRangeBackward ? t.end : t.start).clone()
            }

            get focus() {
                if (!this._ranges.length) return null;
                const t = this._ranges[this._ranges.length - 1];
                return (this._lastRangeBackward ? t.start : t.end).clone()
            }

            get isCollapsed() {
                return 1 === this.rangeCount && this._ranges[0].isCollapsed
            }

            get rangeCount() {
                return this._ranges.length
            }

            get isBackward() {
                return !this.isCollapsed && this._lastRangeBackward
            }

            get editableElement() {
                return this.anchor ? this.anchor.editableElement : null
            }

            * getRanges() {
                for (const t of this._ranges) yield t.clone()
            }

            getFirstRange() {
                let t = null;
                for (const e of this._ranges) t && !e.start.isBefore(t.start) || (t = e);
                return t ? t.clone() : null
            }

            getLastRange() {
                let t = null;
                for (const e of this._ranges) t && !e.end.isAfter(t.end) || (t = e);
                return t ? t.clone() : null
            }

            getFirstPosition() {
                const t = this.getFirstRange();
                return t ? t.start.clone() : null
            }

            getLastPosition() {
                const t = this.getLastRange();
                return t ? t.end.clone() : null
            }

            isEqual(t) {
                if (this.isFake != t.isFake) return !1;
                if (this.isFake && this.fakeSelectionLabel != t.fakeSelectionLabel) return !1;
                if (this.rangeCount != t.rangeCount) return !1;
                if (0 === this.rangeCount) return !0;
                if (!this.anchor.isEqual(t.anchor) || !this.focus.isEqual(t.focus)) return !1;
                for (const e of this._ranges) {
                    let n = !1;
                    for (const i of t._ranges) if (e.isEqual(i)) {
                        n = !0;
                        break
                    }
                    if (!n) return !1
                }
                return !0
            }

            isSimilar(t) {
                if (this.isBackward != t.isBackward) return !1;
                const e = Object(d.a)(this.getRanges());
                if (e != Object(d.a)(t.getRanges())) return !1;
                if (0 == e) return !0;
                for (let e of this.getRanges()) {
                    e = e.getTrimmed();
                    let n = !1;
                    for (let i of t.getRanges()) if (i = i.getTrimmed(), e.start.isEqual(i.start) && e.end.isEqual(i.end)) {
                        n = !0;
                        break
                    }
                    if (!n) return !1
                }
                return !0
            }

            getSelectedElement() {
                if (1 !== this.rangeCount) return null;
                const t = this.getFirstRange();
                let e = t.start.nodeAfter, n = t.end.nodeBefore;
                return t.start.parent.is("text") && t.start.isAtEnd && t.start.parent.nextSibling && (e = t.start.parent.nextSibling), t.end.parent.is("text") && t.end.isAtStart && t.end.parent.previousSibling && (n = t.end.parent.previousSibling), e instanceof l.a && e == n ? e : null
            }

            setTo(t, e, n) {
                if (null === t) this._setRanges([]), this._setFakeOptions(e); else if (t instanceof f || t instanceof h.a) this._setRanges(t.getRanges(), t.isBackward), this._setFakeOptions({
                    fake: t.isFake,
                    label: t.fakeSelectionLabel
                }); else if (t instanceof o.a) this._setRanges([t], e && e.backward), this._setFakeOptions(e); else if (t instanceof r.a) this._setRanges([new o.a(t)]), this._setFakeOptions(e); else if (t instanceof c.a) {
                    const s = !!n && !!n.backward;
                    let a;
                    if (void 0 === e) throw new i.b("view-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.", this);
                    a = "in" == e ? o.a._createIn(t) : "on" == e ? o.a._createOn(t) : new o.a(r.a._createAt(t, e)), this._setRanges([a], s), this._setFakeOptions(n)
                } else {
                    if (!Object(u.a)(t)) throw new i.b("view-selection-setTo-not-selectable: Cannot set selection to given place.", this);
                    this._setRanges(t, e && e.backward), this._setFakeOptions(e)
                }
                this.fire("change")
            }

            setFocus(t, e) {
                if (null === this.anchor) throw new i.b("view-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.", this);
                const n = r.a._createAt(t, e);
                if ("same" == n.compareWith(this.focus)) return;
                const s = this.anchor;
                this._ranges.pop(), "before" == n.compareWith(s) ? this._addRange(new o.a(n, s), !0) : this._addRange(new o.a(s, n)), this.fire("change")
            }

            is(t) {
                return "selection" == t || "view:selection" == t
            }

            _setRanges(t, e = !1) {
                t = Array.from(t), this._ranges = [];
                for (const e of t) this._addRange(e);
                this._lastRangeBackward = !!e
            }

            _setFakeOptions(t = {}) {
                this._isFake = !!t.fake, this._fakeSelectionLabel = t.fake && t.label || ""
            }

            _addRange(t, e = !1) {
                if (!(t instanceof o.a)) throw new i.b("view-selection-add-range-not-range: Selection range set to an object that is not an instance of view.Range", this);
                this._pushRange(t), this._lastRangeBackward = !!e
            }

            _pushRange(t) {
                for (const e of this._ranges) if (t.isIntersecting(e)) throw new i.b("view-selection-range-intersects: Trying to add a range that intersects with another range from selection.", this, {
                    addedRange: t,
                    intersectingRange: e
                });
                this._ranges.push(new o.a(t.start, t.end))
            }
        }

        Object(s.a)(f, a.c)
    }, function (t, e, n) {
        "use strict";
        var i = n(22).a.Symbol;
        e.a = i
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return u
        });
        var i = n(29), o = n(3), r = n(57), s = n(18), a = n(38), c = n(16), l = n(15), d = n(0);

        class u extends i.a {
            constructor(t, e, n) {
                super(n), this.position = t.clone(), this.position.stickiness = "toNone", this.nodes = new r.a(Object(a.c)(e)), this.shouldReceiveAttributes = !1
            }

            get type() {
                return "insert"
            }

            get howMany() {
                return this.nodes.maxOffset
            }

            clone() {
                const t = new r.a([...this.nodes].map(t => t._clone(!0))),
                    e = new u(this.position, t, this.baseVersion);
                return e.shouldReceiveAttributes = this.shouldReceiveAttributes, e
            }

            getReversed() {
                const t = this.position.root.document.graveyard, e = new o.a(t, [0]);
                return new s.a(this.position, this.nodes.maxOffset, e, this.baseVersion + 1)
            }

            _validate() {
                const t = this.position.parent;
                if (!t || t.maxOffset < this.position.offset) throw new d.b("insert-operation-position-invalid: Insertion position is invalid.", this)
            }

            _execute() {
                const t = this.nodes;
                this.nodes = new r.a([...t].map(t => t._clone(!0))), Object(a.a)(this.position, t)
            }

            toJSON() {
                const t = super.toJSON();
                return t.position = this.position.toJSON(), t.nodes = this.nodes.toJSON(), t
            }

            static get className() {
                return "InsertOperation"
            }

            static fromJSON(t, e) {
                const n = [];
                for (const e of t.nodes) e.name ? n.push(l.a.fromJSON(e)) : n.push(c.a.fromJSON(e));
                const i = new u(o.a.fromJSON(t.position, e), n, t.baseVersion);
                return i.shouldReceiveAttributes = t.shouldReceiveAttributes, i
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var i = n(69), o = n(5);

        class r {
            constructor(t) {
                this.view = t, this.document = t.document, this.isEnabled = !1
            }

            enable() {
                this.isEnabled = !0
            }

            disable() {
                this.isEnabled = !1
            }

            destroy() {
                this.disable(), this.stopListening()
            }
        }

        Object(o.a)(r, i.a)
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var i = n(42), o = n(82);

        class r extends i.a {
            constructor(t) {
                super(t), this.useCapture = !1
            }

            observe(t) {
                ("string" == typeof this.domEventType ? [this.domEventType] : this.domEventType).forEach(e => {
                    this.listenTo(t, e, (t, e) => {
                        this.isEnabled && this.onDomEvent(e)
                    }, {useCapture: this.useCapture})
                })
            }

            fire(t, e, n) {
                this.isEnabled && this.document.fire(t, new o.a(this.view, e, n))
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var i = n(0), o = n(28);

        class r extends o.a {
            constructor(t) {
                super({idProperty: "viewUid"}), this.on("add", (t, e, n) => {
                    e.isRendered || e.render(), e.element && this._parentElement && this._parentElement.insertBefore(e.element, this._parentElement.children[n])
                }), this.on("remove", (t, e) => {
                    e.element && this._parentElement && e.element.remove()
                }), this.locale = t, this._parentElement = null
            }

            destroy() {
                this.map(t => t.destroy())
            }

            setParent(t) {
                this._parentElement = t
            }

            delegate(...t) {
                if (!t.length || !function (t) {
                    return t.every(t => "string" == typeof t)
                }(t)) throw new i.b("ui-viewcollection-delegate-wrong-events: All event names must be strings.", this);
                return {
                    to: e => {
                        for (const n of this) for (const i of t) n.delegate(i).to(e);
                        this.on("add", (n, i) => {
                            for (const n of t) i.delegate(n).to(e)
                        }), this.on("remove", (n, i) => {
                            for (const n of t) i.stopDelegating(n, e)
                        })
                    }
                }
            }
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(100), o = n(22).a["__core-js_shared__"], r = function () {
            var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();
        var s = function (t) {
                return !!r && r in t
            }, a = n(32), c = n(66), l = /^\[object .+?Constructor\]$/, d = Function.prototype, u = Object.prototype,
            h = d.toString, f = u.hasOwnProperty,
            m = RegExp("^" + h.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var p = function (t) {
            return !(!Object(a.a)(t) || s(t)) && (Object(i.a)(t) ? m : l).test(Object(c.a)(t))
        };
        var g = function (t, e) {
            return null == t ? void 0 : t[e]
        };
        e.a = function (t, e) {
            var n = g(t, e);
            return p(n) ? n : void 0
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return c
        });
        var i = n(16), o = n(37), r = n(15), s = n(3), a = n(0);

        class c {
            constructor(t = {}) {
                if (!t.boundaries && !t.startPosition) throw new a.b("model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.", null);
                const e = t.direction || "forward";
                if ("forward" != e && "backward" != e) throw new a.b("model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.", t, {direction: e});
                this.direction = e, this.boundaries = t.boundaries || null, t.startPosition ? this.position = t.startPosition.clone() : this.position = s.a._createAt(this.boundaries["backward" == this.direction ? "end" : "start"]), this.position.stickiness = "toNone", this.singleCharacters = !!t.singleCharacters, this.shallow = !!t.shallow, this.ignoreElementEnd = !!t.ignoreElementEnd, this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null, this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null, this._visitedParent = this.position.parent
            }

            [Symbol.iterator]() {
                return this
            }

            skip(t) {
                let e, n, i, o;
                do {
                    i = this.position, o = this._visitedParent, ({done: e, value: n} = this.next())
                } while (!e && t(n));
                e || (this.position = i, this._visitedParent = o)
            }

            next() {
                return "forward" == this.direction ? this._next() : this._previous()
            }

            _next() {
                const t = this.position, e = this.position.clone(), n = this._visitedParent;
                if (null === n.parent && e.offset === n.maxOffset) return {done: !0};
                if (n === this._boundaryEndParent && e.offset == this.boundaries.end.offset) return {done: !0};
                const s = e.textNode ? e.textNode : e.nodeAfter;
                if (s instanceof r.a) return this.shallow ? e.offset++ : (e.path.push(0), this._visitedParent = s), this.position = e, l("elementStart", s, t, e, 1);
                if (s instanceof i.a) {
                    let i;
                    if (this.singleCharacters) i = 1; else {
                        let t = s.endOffset;
                        this._boundaryEndParent == n && this.boundaries.end.offset < t && (t = this.boundaries.end.offset), i = t - e.offset
                    }
                    const r = e.offset - s.startOffset, a = new o.a(s, r, i);
                    return e.offset += i, this.position = e, l("text", a, t, e, i)
                }
                return e.path.pop(), e.offset++, this.position = e, this._visitedParent = n.parent, this.ignoreElementEnd ? this._next() : l("elementEnd", n, t, e)
            }

            _previous() {
                const t = this.position, e = this.position.clone(), n = this._visitedParent;
                if (null === n.parent && 0 === e.offset) return {done: !0};
                if (n == this._boundaryStartParent && e.offset == this.boundaries.start.offset) return {done: !0};
                const s = e.textNode ? e.textNode : e.nodeBefore;
                if (s instanceof r.a) return e.offset--, this.shallow ? (this.position = e, l("elementStart", s, t, e, 1)) : (e.path.push(s.maxOffset), this.position = e, this._visitedParent = s, this.ignoreElementEnd ? this._previous() : l("elementEnd", s, t, e));
                if (s instanceof i.a) {
                    let i;
                    if (this.singleCharacters) i = 1; else {
                        let t = s.startOffset;
                        this._boundaryStartParent == n && this.boundaries.start.offset > t && (t = this.boundaries.start.offset), i = e.offset - t
                    }
                    const r = e.offset - s.startOffset, a = new o.a(s, r - i, i);
                    return e.offset -= i, this.position = e, l("text", a, t, e, i)
                }
                return e.path.pop(), this.position = e, this._visitedParent = n.parent, l("elementStart", n, t, e, 1)
            }
        }

        function l(t, e, n, i, o) {
            return {done: !1, value: {type: t, item: e, previousPosition: n, nextPosition: i, length: o}}
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(40), o = Object.prototype, r = o.hasOwnProperty, s = o.toString, a = i.a ? i.a.toStringTag : void 0;
        var c = function (t) {
            var e = r.call(t, a), n = t[a];
            try {
                t[a] = void 0;
                var i = !0
            } catch (t) {
            }
            var o = s.call(t);
            return i && (e ? t[a] = n : delete t[a]), o
        }, l = Object.prototype.toString;
        var d = function (t) {
            return l.call(t)
        }, u = "[object Null]", h = "[object Undefined]", f = i.a ? i.a.toStringTag : void 0;
        e.a = function (t) {
            return null == t ? void 0 === t ? h : u : f && f in Object(t) ? c(t) : d(t)
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return i
        });

        class i {
            constructor(...t) {
                this._patterns = [], this.add(...t)
            }

            add(...t) {
                for (let e of t) ("string" == typeof e || e instanceof RegExp) && (e = {name: e}), e.classes && ("string" == typeof e.classes || e.classes instanceof RegExp) && (e.classes = [e.classes]), this._patterns.push(e)
            }

            match(...t) {
                for (const e of t) for (const t of this._patterns) {
                    const n = o(e, t);
                    if (n) return {element: e, pattern: t, match: n}
                }
                return null
            }

            matchAll(...t) {
                const e = [];
                for (const n of t) for (const t of this._patterns) {
                    const i = o(n, t);
                    i && e.push({element: n, pattern: t, match: i})
                }
                return e.length > 0 ? e : null
            }

            getElementName() {
                if (1 !== this._patterns.length) return null;
                const t = this._patterns[0], e = t.name;
                return "function" == typeof t || !e || e instanceof RegExp ? null : e
            }
        }

        function o(t, e) {
            if ("function" == typeof e) return e(t);
            const n = {};
            return e.name && (n.name = function (t, e) {
                if (t instanceof RegExp) return t.test(e);
                return t === e
            }(e.name, t.name), !n.name) ? null : e.attributes && (n.attributes = function (t, e) {
                const n = [];
                for (const i in t) {
                    const o = t[i];
                    if (!e.hasAttribute(i)) return null;
                    {
                        const t = e.getAttribute(i);
                        if (!0 === o) n.push(i); else if (o instanceof RegExp) {
                            if (!o.test(t)) return null;
                            n.push(i)
                        } else {
                            if (t !== o) return null;
                            n.push(i)
                        }
                    }
                }
                return n
            }(e.attributes, t), !n.attributes) ? null : !(e.classes && (n.classes = function (t, e) {
                const n = [];
                for (const i of t) if (i instanceof RegExp) {
                    const t = e.getClassNames();
                    for (const e of t) i.test(e) && n.push(e);
                    if (0 === n.length) return null
                } else {
                    if (!e.hasClass(i)) return null;
                    n.push(i)
                }
                return n
            }(e.classes, t), !n.classes)) && (!(e.styles && (n.styles = function (t, e) {
                const n = [];
                for (const i in t) {
                    const o = t[i];
                    if (!e.hasStyle(i)) return null;
                    {
                        const t = e.getStyle(i);
                        if (o instanceof RegExp) {
                            if (!o.test(t)) return null;
                            n.push(i)
                        } else {
                            if (t !== o) return null;
                            n.push(i)
                        }
                    }
                }
                return n
            }(e.styles, t), !n.styles)) && n)
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        });
        var i = n(0);

        class o {
            constructor(t, e, n) {
                if (this.textNode = t, e < 0 || e > t.data.length) throw new i.b("view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.", this);
                if (n < 0 || e + n > t.data.length) throw new i.b("view-textproxy-wrong-length: Given length value is incorrect.", this);
                this.data = t.data.substring(e, e + n), this.offsetInText = e
            }

            get offsetSize() {
                return this.data.length
            }

            get isPartial() {
                return this.data.length !== this.textNode.data.length
            }

            get parent() {
                return this.textNode.parent
            }

            get root() {
                return this.textNode.root
            }

            get document() {
                return this.textNode.document
            }

            is(t) {
                return "textProxy" == t || "view:textProxy" == t
            }

            getAncestors(t = {includeSelf: !1, parentFirst: !1}) {
                const e = [];
                let n = t.includeSelf ? this.textNode : this.parent;
                for (; null !== n;) e[t.parentFirst ? "push" : "unshift"](n), n = n.parent;
                return e
            }
        }
    }, function (t, e, n) {
        "use strict";
        var i = Array.isArray;
        e.a = i
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return s
        });
        var i = n(2), o = n(8), r = n(5);

        class s extends i.a {
            constructor(t, e) {
                super(t, e), function () {
                    this.listenTo(this.root.document.model, "applyOperation", (t, e) => {
                        const n = e[0];
                        n.isDocumentOperation && function (t) {
                            const e = this.getTransformedByOperation(t), n = i.a._createFromRanges(e),
                                o = !n.isEqual(this), r = function (t, e) {
                                    switch (e.type) {
                                        case"insert":
                                            return t.containsPosition(e.position);
                                        case"move":
                                        case"remove":
                                        case"reinsert":
                                        case"merge":
                                            return t.containsPosition(e.sourcePosition) || t.start.isEqual(e.sourcePosition) || t.containsPosition(e.targetPosition);
                                        case"split":
                                            return t.containsPosition(e.splitPosition) || t.containsPosition(e.insertionPosition)
                                    }
                                    return !1
                                }(this, t);
                            let s = null;
                            if (o) {
                                "$graveyard" == n.root.rootName && (s = "remove" == t.type ? t.sourcePosition : t.deletionPosition);
                                const e = this.toRange();
                                this.start = n.start, this.end = n.end, this.fire("change:range", e, {deletionPosition: s})
                            } else r && this.fire("change:content", this.toRange(), {deletionPosition: s})
                        }.call(this, n)
                    }, {priority: "low"})
                }.call(this)
            }

            detach() {
                this.stopListening()
            }

            is(t) {
                return "liveRange" == t || "model:liveRange" == t || super.is(t)
            }

            toRange() {
                return new i.a(this.start, this.end)
            }

            static fromRange(t) {
                return new s(t.start, t.end)
            }
        }

        Object(r.a)(s, o.c)
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var i = n(108), o = n(97);

        function r(t) {
            return Object(o.a)(t) ? Object(i.a)(t) : new Map(t)
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return h
        });
        var i = n(0), o = n(5), r = n(8), s = n(6), a = n(44), c = n(65), l = n(32), d = n(204);
        const u = "http://www.w3.org/1999/xhtml";

        class h {
            constructor(t) {
                Object.assign(this, v(_(t))), this._isRendered = !1, this._revertData = null
            }

            render() {
                const t = this._renderNode({intoFragment: !0});
                return this._isRendered = !0, t
            }

            apply(t) {
                return this._revertData = {children: [], bindings: [], attributes: {}}, this._renderNode({
                    node: t,
                    isApplying: !0,
                    revertData: this._revertData
                }), t
            }

            revert(t) {
                if (!this._revertData) throw new i.b("ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.", [this, t]);
                this._revertTemplateFromNode(t, this._revertData)
            }

            * getViews() {
                yield* function* t(e) {
                    if (e.children) for (const n of e.children) C(n) ? yield n : P(n) && (yield* t(n))
                }(this)
            }

            static bind(t, e) {
                return {
                    to: (n, i) => new m({
                        eventNameOrFunction: n,
                        attribute: n,
                        observable: t,
                        emitter: e,
                        callback: i
                    }), if: (n, i, o) => new p({observable: t, emitter: e, attribute: n, valueIfTrue: i, callback: o})
                }
            }

            static extend(t, e) {
                if (t._isRendered) throw new i.b("template-extend-render: Attempting to extend a template which has already been rendered.", [this, t]);
                !function t(e, n) {
                    n.attributes && (e.attributes || (e.attributes = {}), A(e.attributes, n.attributes));
                    n.eventListeners && (e.eventListeners || (e.eventListeners = {}), A(e.eventListeners, n.eventListeners));
                    n.text && e.text.push(...n.text);
                    if (n.children && n.children.length) {
                        if (e.children.length != n.children.length) throw new i.b("ui-template-extend-children-mismatch: The number of children in extended definition does not match.", e);
                        let o = 0;
                        for (const i of n.children) t(e.children[o++], i)
                    }
                }(t, v(_(e)))
            }

            _renderNode(t) {
                let e;
                if (e = t.node ? this.tag && this.text : this.tag ? this.text : !this.text) throw new i.b('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.', this);
                return this.text ? this._renderText(t) : this._renderElement(t)
            }

            _renderElement(t) {
                let e = t.node;
                return e || (e = t.node = document.createElementNS(this.ns || u, this.tag)), this._renderAttributes(t), this._renderElementChildren(t), this._setUpListeners(t), e
            }

            _renderText(t) {
                let e = t.node;
                return e ? t.revertData.text = e.textContent : e = t.node = document.createTextNode(""), g(this.text) ? this._bindToObservable({
                    schema: this.text,
                    updater: function (t) {
                        return {
                            set(e) {
                                t.textContent = e
                            }, remove() {
                                t.textContent = ""
                            }
                        }
                    }(e),
                    data: t
                }) : e.textContent = this.text.join(""), e
            }

            _renderAttributes(t) {
                let e, n, i, o;
                if (!this.attributes) return;
                const r = t.node, s = t.revertData;
                for (e in this.attributes) if (i = r.getAttribute(e), n = this.attributes[e], s && (s.attributes[e] = i), o = Object(l.a)(n[0]) && n[0].ns ? n[0].ns : null, g(n)) {
                    const a = o ? n[0].value : n;
                    s && O(e) && a.unshift(i), this._bindToObservable({schema: a, updater: w(r, e, o), data: t})
                } else "style" == e && "string" != typeof n[0] ? this._renderStyleAttribute(n[0], t) : (s && i && O(e) && n.unshift(i), T(n = n.map(t => t && t.value || t).reduce((t, e) => t.concat(e), []).reduce(x, "")) || r.setAttributeNS(o, e, n))
            }

            _renderStyleAttribute(t, e) {
                const n = e.node;
                for (const i in t) {
                    const o = t[i];
                    g(o) ? this._bindToObservable({schema: [o], updater: k(n, i), data: e}) : n.style[i] = o
                }
            }

            _renderElementChildren(t) {
                const e = t.node, n = t.intoFragment ? document.createDocumentFragment() : e, i = t.isApplying;
                let o = 0;
                for (const r of this.children) if (M(r)) {
                    if (!i) {
                        r.setParent(e);
                        for (const t of r) n.appendChild(t.element)
                    }
                } else if (C(r)) i || (r.isRendered || r.render(), n.appendChild(r.element)); else if (Object(c.a)(r)) n.appendChild(r); else if (i) {
                    const e = {children: [], bindings: [], attributes: {}};
                    t.revertData.children.push(e), r._renderNode({
                        node: n.childNodes[o++],
                        isApplying: !0,
                        revertData: e
                    })
                } else n.appendChild(r.render());
                t.intoFragment && e.appendChild(n)
            }

            _setUpListeners(t) {
                if (this.eventListeners) for (const e in this.eventListeners) {
                    const n = this.eventListeners[e].map(n => {
                        const [i, o] = e.split("@");
                        return n.activateDomEventListener(i, o, t)
                    });
                    t.revertData && t.revertData.bindings.push(n)
                }
            }

            _bindToObservable({schema: t, updater: e, data: n}) {
                const i = n.revertData;
                b(t, e, n);
                const o = t.filter(t => !T(t)).filter(t => t.observable).map(i => i.activateAttributeListener(t, e, n));
                i && i.bindings.push(o)
            }

            _revertTemplateFromNode(t, e) {
                for (const t of e.bindings) for (const e of t) e();
                if (e.text) t.textContent = e.text; else {
                    for (const n in e.attributes) {
                        const i = e.attributes[n];
                        null === i ? t.removeAttribute(n) : t.setAttribute(n, i)
                    }
                    for (let n = 0; n < e.children.length; ++n) this._revertTemplateFromNode(t.childNodes[n], e.children[n])
                }
            }
        }

        Object(o.a)(h, r.c);

        class f {
            constructor(t) {
                Object.assign(this, t)
            }

            getValue(t) {
                const e = this.observable[this.attribute];
                return this.callback ? this.callback(e, t) : e
            }

            activateAttributeListener(t, e, n) {
                const i = () => b(t, e, n);
                return this.emitter.listenTo(this.observable, "change:" + this.attribute, i), () => {
                    this.emitter.stopListening(this.observable, "change:" + this.attribute, i)
                }
            }
        }

        class m extends f {
            activateDomEventListener(t, e, n) {
                const i = (t, n) => {
                    e && !n.target.matches(e) || ("function" == typeof this.eventNameOrFunction ? this.eventNameOrFunction(n) : this.observable.fire(this.eventNameOrFunction, n))
                };
                return this.emitter.listenTo(n.node, t, i), () => {
                    this.emitter.stopListening(n.node, t, i)
                }
            }
        }

        class p extends f {
            getValue(t) {
                return !T(super.getValue(t)) && (this.valueIfTrue || !0)
            }
        }

        function g(t) {
            return !!t && (t.value && (t = t.value), Array.isArray(t) ? t.some(g) : t instanceof f)
        }

        function b(t, e, {node: n}) {
            let i = function (t, e) {
                return t.map(t => t instanceof f ? t.getValue(e) : t)
            }(t, n);
            T(i = 1 == t.length && t[0] instanceof p ? i[0] : i.reduce(x, "")) ? e.remove() : e.set(i)
        }

        function w(t, e, n) {
            return {
                set(i) {
                    t.setAttributeNS(n, e, i)
                }, remove() {
                    t.removeAttributeNS(n, e)
                }
            }
        }

        function k(t, e) {
            return {
                set(n) {
                    t.style[e] = n
                }, remove() {
                    t.style[e] = null
                }
            }
        }

        function _(t) {
            return Object(d.a)(t, t => {
                if (t && (t instanceof f || P(t) || C(t) || M(t))) return t
            })
        }

        function v(t) {
            if ("string" == typeof t ? t = function (t) {
                return {text: [t]}
            }(t) : t.text && function (t) {
                Array.isArray(t.text) || (t.text = [t.text])
            }(t), t.on && (t.eventListeners = function (t) {
                for (const e in t) y(t, e);
                return t
            }(t.on), delete t.on), !t.text) {
                t.attributes && function (t) {
                    for (const e in t) t[e].value && (t[e].value = [].concat(t[e].value)), y(t, e)
                }(t.attributes);
                const e = [];
                if (t.children) if (M(t.children)) e.push(t.children); else for (const n of t.children) P(n) || C(n) || Object(c.a)(n) ? e.push(n) : e.push(new h(n));
                t.children = e
            }
            return t
        }

        function y(t, e) {
            Array.isArray(t[e]) || (t[e] = [t[e]])
        }

        function x(t, e) {
            return T(e) ? t : T(t) ? e : `${t} ${e}`
        }

        function A(t, e) {
            for (const n in e) t[n] ? t[n].push(...e[n]) : t[n] = e[n]
        }

        function T(t) {
            return !t && 0 !== t
        }

        function C(t) {
            return t instanceof s.a
        }

        function P(t) {
            return t instanceof h
        }

        function M(t) {
            return t instanceof a.a
        }

        function O(t) {
            return "class" == t || "style" == t
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(102), o = n(101);
        e.a = function (t, e, n, r) {
            var s = !n;
            n || (n = {});
            for (var a = -1, c = e.length; ++a < c;) {
                var l = e[a], d = r ? r(n[l], t[l], l, n, t) : void 0;
                void 0 === d && (d = t[l]), s ? Object(o.a)(n, l, d) : Object(i.a)(n, l, d)
            }
            return n
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return c
        });
        var i = n(0), o = n(8), r = n(5), s = n(24), a = n(205);
        n(93);

        class c {
            constructor() {
                this.parent = null
            }

            get index() {
                let t;
                if (!this.parent) return null;
                if (-1 == (t = this.parent.getChildIndex(this))) throw new i.b("view-node-not-found-in-parent: The node's parent does not contain this node.", this);
                return t
            }

            get nextSibling() {
                const t = this.index;
                return null !== t && this.parent.getChild(t + 1) || null
            }

            get previousSibling() {
                const t = this.index;
                return null !== t && this.parent.getChild(t - 1) || null
            }

            get root() {
                let t = this;
                for (; t.parent;) t = t.parent;
                return t
            }

            get document() {
                return this.parent instanceof c ? this.parent.document : null
            }

            getPath() {
                const t = [];
                let e = this;
                for (; e.parent;) t.unshift(e.index), e = e.parent;
                return t
            }

            getAncestors(t = {includeSelf: !1, parentFirst: !1}) {
                const e = [];
                let n = t.includeSelf ? this : this.parent;
                for (; n;) e[t.parentFirst ? "push" : "unshift"](n), n = n.parent;
                return e
            }

            getCommonAncestor(t, e = {}) {
                const n = this.getAncestors(e), i = t.getAncestors(e);
                let o = 0;
                for (; n[o] == i[o] && n[o];) o++;
                return 0 === o ? null : n[o - 1]
            }

            isBefore(t) {
                if (this == t) return !1;
                if (this.root !== t.root) return !1;
                const e = this.getPath(), n = t.getPath(), i = Object(s.a)(e, n);
                switch (i) {
                    case"prefix":
                        return !0;
                    case"extension":
                        return !1;
                    default:
                        return e[i] < n[i]
                }
            }

            isAfter(t) {
                return this != t && (this.root === t.root && !this.isBefore(t))
            }

            _remove() {
                this.parent._removeChildren(this.index)
            }

            _fireChange(t, e) {
                this.fire("change:" + t, e), this.parent && this.parent._fireChange(t, e)
            }

            toJSON() {
                const t = Object(a.a)(this);
                return delete t.parent, t
            }

            is(t) {
                return "node" == t || "view:node" == t
            }
        }

        Object(r.a)(c, o.c)
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return s
        });
        var i = n(52), o = n(0), r = n(24);
        n(93);

        class s {
            constructor(t) {
                this.parent = null, this._attrs = Object(i.a)(t)
            }

            get index() {
                let t;
                if (!this.parent) return null;
                if (null === (t = this.parent.getChildIndex(this))) throw new o.b("model-node-not-found-in-parent: The node's parent does not contain this node.", this);
                return t
            }

            get startOffset() {
                let t;
                if (!this.parent) return null;
                if (null === (t = this.parent.getChildStartOffset(this))) throw new o.b("model-node-not-found-in-parent: The node's parent does not contain this node.", this);
                return t
            }

            get offsetSize() {
                return 1
            }

            get endOffset() {
                return this.parent ? this.startOffset + this.offsetSize : null
            }

            get nextSibling() {
                const t = this.index;
                return null !== t && this.parent.getChild(t + 1) || null
            }

            get previousSibling() {
                const t = this.index;
                return null !== t && this.parent.getChild(t - 1) || null
            }

            get root() {
                let t = this;
                for (; t.parent;) t = t.parent;
                return t
            }

            get document() {
                return this.root == this ? null : this.root.document || null
            }

            getPath() {
                const t = [];
                let e = this;
                for (; e.parent;) t.unshift(e.startOffset), e = e.parent;
                return t
            }

            getAncestors(t = {includeSelf: !1, parentFirst: !1}) {
                const e = [];
                let n = t.includeSelf ? this : this.parent;
                for (; n;) e[t.parentFirst ? "push" : "unshift"](n), n = n.parent;
                return e
            }

            getCommonAncestor(t, e = {}) {
                const n = this.getAncestors(e), i = t.getAncestors(e);
                let o = 0;
                for (; n[o] == i[o] && n[o];) o++;
                return 0 === o ? null : n[o - 1]
            }

            isBefore(t) {
                if (this == t) return !1;
                if (this.root !== t.root) return !1;
                const e = this.getPath(), n = t.getPath(), i = Object(r.a)(e, n);
                switch (i) {
                    case"prefix":
                        return !0;
                    case"extension":
                        return !1;
                    default:
                        return e[i] < n[i]
                }
            }

            isAfter(t) {
                return this != t && (this.root === t.root && !this.isBefore(t))
            }

            hasAttribute(t) {
                return this._attrs.has(t)
            }

            getAttribute(t) {
                return this._attrs.get(t)
            }

            getAttributes() {
                return this._attrs.entries()
            }

            getAttributeKeys() {
                return this._attrs.keys()
            }

            toJSON() {
                const t = {};
                return this._attrs.size && (t.attributes = Array.from(this._attrs).reduce((t, e) => (t[e[0]] = e[1], t), {})), t
            }

            is(t) {
                return "node" == t || "model:node" == t
            }

            _clone() {
                return new s(this._attrs)
            }

            _remove() {
                this.parent._removeChildren(this.index)
            }

            _setAttribute(t, e) {
                this._attrs.set(t, e)
            }

            _setAttributesTo(t) {
                this._attrs = Object(i.a)(t)
            }

            _removeAttribute(t) {
                return this._attrs.delete(t)
            }

            _clearAttributes() {
                this._attrs.clear()
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var i = n(56), o = n(0);

        class r {
            constructor(t) {
                this._nodes = [], t && this._insertNodes(0, t)
            }

            [Symbol.iterator]() {
                return this._nodes[Symbol.iterator]()
            }

            get length() {
                return this._nodes.length
            }

            get maxOffset() {
                return this._nodes.reduce((t, e) => t + e.offsetSize, 0)
            }

            getNode(t) {
                return this._nodes[t] || null
            }

            getNodeIndex(t) {
                const e = this._nodes.indexOf(t);
                return -1 == e ? null : e
            }

            getNodeStartOffset(t) {
                const e = this.getNodeIndex(t);
                return null === e ? null : this._nodes.slice(0, e).reduce((t, e) => t + e.offsetSize, 0)
            }

            indexToOffset(t) {
                if (t == this._nodes.length) return this.maxOffset;
                const e = this._nodes[t];
                if (!e) throw new o.b("model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.", this);
                return this.getNodeStartOffset(e)
            }

            offsetToIndex(t) {
                let e = 0;
                for (const n of this._nodes) {
                    if (t >= e && t < e + n.offsetSize) return this.getNodeIndex(n);
                    e += n.offsetSize
                }
                if (e != t) throw new o.b("model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.", this, {
                    offset: t,
                    nodeList: this
                });
                return this.length
            }

            _insertNodes(t, e) {
                for (const t of e) if (!(t instanceof i.a)) throw new o.b("model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.", this);
                this._nodes.splice(t, 0, ...e)
            }

            _removeNodes(t, e = 1) {
                return this._nodes.splice(t, e)
            }

            toJSON() {
                return this._nodes.map(t => t.toJSON())
            }
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(1), o = n(43), r = n(92);

        class s {
            constructor(t) {
                this.files = function (t) {
                    const e = t.files ? Array.from(t.files) : [], n = t.items ? Array.from(t.items) : [];
                    if (e.length) return e;
                    return n.filter(t => "file" === t.kind).map(t => t.getAsFile())
                }(t), this._native = t
            }

            get types() {
                return this._native.types
            }

            getData(t) {
                return this._native.getData(t)
            }

            setData(t, e) {
                this._native.setData(t, e)
            }
        }

        class a extends o.a {
            constructor(t) {
                super(t);
                const e = this.document;

                function n(t, n) {
                    n.preventDefault();
                    const i = n.dropRange ? [n.dropRange] : Array.from(e.selection.getRanges()),
                        o = new r.a(e, "clipboardInput");
                    e.fire(o, {dataTransfer: n.dataTransfer, targetRanges: i}), o.stop.called && n.stopPropagation()
                }

                this.domEventType = ["paste", "copy", "cut", "drop", "dragover"], this.listenTo(e, "paste", n, {priority: "low"}), this.listenTo(e, "drop", n, {priority: "low"})
            }

            onDomEvent(t) {
                const e = {dataTransfer: new s(t.clipboardData ? t.clipboardData : t.dataTransfer)};
                "drop" == t.type && (e.dropRange = function (t, e) {
                    const n = e.target.ownerDocument, i = e.clientX, o = e.clientY;
                    let r;
                    n.caretRangeFromPoint && n.caretRangeFromPoint(i, o) ? r = n.caretRangeFromPoint(i, o) : e.rangeParent && ((r = n.createRange()).setStart(e.rangeParent, e.rangeOffset), r.collapse(!0));
                    return r ? t.domConverter.domRangeToView(r) : t.document.selection.getFirstRange()
                }(this.view, t)), this.fire(t.type, t, e)
            }
        }

        const c = ["figcaption", "li"];
        var l = n(114);
        n.d(e, "a", function () {
            return d
        });

        class d extends i.a {
            static get pluginName() {
                return "Clipboard"
            }

            init() {
                const t = this.editor, e = t.model.document, n = t.editing.view, i = n.document;

                function o(n, o) {
                    const r = o.dataTransfer;
                    o.preventDefault();
                    const s = t.data.toView(t.model.getSelectedContent(e.selection));
                    i.fire("clipboardOutput", {dataTransfer: r, content: s, method: n.name})
                }

                this._htmlDataProcessor = new l.a, n.addObserver(a), this.listenTo(i, "clipboardInput", e => {
                    t.isReadOnly && e.stop()
                }, {priority: "highest"}), this.listenTo(i, "clipboardInput", (t, e) => {
                    const i = e.dataTransfer;
                    let o = "";
                    i.getData("text/html") ? o = function (t) {
                        return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g, (t, e) => 1 == e.length ? " " : e)
                    }(i.getData("text/html")) : i.getData("text/plain") && (o = function (t) {
                        return (t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "</p><p>").replace(/^\s/, "&nbsp;").replace(/\s$/, "&nbsp;").replace(/\s\s/g, " &nbsp;")).indexOf("</p><p>") > -1 && (t = `<p>${t}</p>`), t
                    }(i.getData("text/plain"))), o = this._htmlDataProcessor.toView(o), this.fire("inputTransformation", {
                        content: o,
                        dataTransfer: i
                    }), n.scrollToTheSelection()
                }, {priority: "low"}), this.listenTo(this, "inputTransformation", (t, e) => {
                    if (!e.content.isEmpty) {
                        const t = this.editor.data, n = this.editor.model, i = t.toModel(e.content, "$clipboardHolder");
                        if (0 == i.childCount) return;
                        n.insertContent(i)
                    }
                }, {priority: "low"}), this.listenTo(i, "copy", o, {priority: "low"}), this.listenTo(i, "cut", (e, n) => {
                    t.isReadOnly ? n.preventDefault() : o(e, n)
                }, {priority: "low"}), this.listenTo(i, "clipboardOutput", (n, i) => {
                    i.content.isEmpty || (i.dataTransfer.setData("text/html", this._htmlDataProcessor.toData(i.content)), i.dataTransfer.setData("text/plain", function t(e) {
                        let n = "";
                        if (e.is("text") || e.is("textProxy")) n = e.data; else if (e.is("img") && e.hasAttribute("alt")) n = e.getAttribute("alt"); else {
                            let i = null;
                            for (const o of e.getChildren()) {
                                const e = t(o);
                                i && (i.is("containerElement") || o.is("containerElement")) && (c.includes(i.name) || c.includes(o.name) ? n += "\n" : n += "\n\n"), n += e, i = o
                            }
                        }
                        return n
                    }(i.content))), "cut" == i.method && t.model.deleteContent(e.selection)
                }, {priority: "low"})
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return c
        });
        var i = n(30), o = n(17), r = n(49), s = n(4), a = n(0);

        class c {
            constructor(t = {}) {
                if (!t.boundaries && !t.startPosition) throw new a.b("view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.", null);
                if (t.direction && "forward" != t.direction && "backward" != t.direction) throw new a.b("view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.", t.startPosition, {direction: t.direction});
                this.boundaries = t.boundaries || null, t.startPosition ? this.position = s.a._createAt(t.startPosition) : this.position = s.a._createAt(t.boundaries["backward" == t.direction ? "end" : "start"]), this.direction = t.direction || "forward", this.singleCharacters = !!t.singleCharacters, this.shallow = !!t.shallow, this.ignoreElementEnd = !!t.ignoreElementEnd, this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null, this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null
            }

            [Symbol.iterator]() {
                return this
            }

            skip(t) {
                let e, n, i;
                do {
                    i = this.position, ({done: e, value: n} = this.next())
                } while (!e && t(n));
                e || (this.position = i)
            }

            next() {
                return "forward" == this.direction ? this._next() : this._previous()
            }

            _next() {
                let t = this.position.clone();
                const e = this.position, n = t.parent;
                if (null === n.parent && t.offset === n.childCount) return {done: !0};
                if (n === this._boundaryEndParent && t.offset == this.boundaries.end.offset) return {done: !0};
                let a;
                if (n instanceof o.a) {
                    if (t.isAtEnd) return this.position = s.a._createAfter(n), this._next();
                    a = n.data[t.offset]
                } else a = n.getChild(t.offset);
                if (a instanceof i.a) return this.shallow ? t.offset++ : t = new s.a(a, 0), this.position = t, this._formatReturnValue("elementStart", a, e, t, 1);
                if (a instanceof o.a) {
                    if (this.singleCharacters) return t = new s.a(a, 0), this.position = t, this._next();
                    {
                        let n, i = a.data.length;
                        return a == this._boundaryEndParent ? (i = this.boundaries.end.offset, n = new r.a(a, 0, i), t = s.a._createAfter(n)) : (n = new r.a(a, 0, a.data.length), t.offset++), this.position = t, this._formatReturnValue("text", n, e, t, i)
                    }
                }
                if ("string" == typeof a) {
                    let i;
                    if (this.singleCharacters) i = 1; else {
                        i = (n === this._boundaryEndParent ? this.boundaries.end.offset : n.data.length) - t.offset
                    }
                    const o = new r.a(n, t.offset, i);
                    return t.offset += i, this.position = t, this._formatReturnValue("text", o, e, t, i)
                }
                return t = s.a._createAfter(n), this.position = t, this.ignoreElementEnd ? this._next() : this._formatReturnValue("elementEnd", n, e, t)
            }

            _previous() {
                let t = this.position.clone();
                const e = this.position, n = t.parent;
                if (null === n.parent && 0 === t.offset) return {done: !0};
                if (n == this._boundaryStartParent && t.offset == this.boundaries.start.offset) return {done: !0};
                let a;
                if (n instanceof o.a) {
                    if (t.isAtStart) return this.position = s.a._createBefore(n), this._previous();
                    a = n.data[t.offset - 1]
                } else a = n.getChild(t.offset - 1);
                if (a instanceof i.a) return this.shallow ? (t.offset--, this.position = t, this._formatReturnValue("elementStart", a, e, t, 1)) : (t = new s.a(a, a.childCount), this.position = t, this.ignoreElementEnd ? this._previous() : this._formatReturnValue("elementEnd", a, e, t));
                if (a instanceof o.a) {
                    if (this.singleCharacters) return t = new s.a(a, a.data.length), this.position = t, this._previous();
                    {
                        let n, i = a.data.length;
                        if (a == this._boundaryStartParent) {
                            const e = this.boundaries.start.offset;
                            i = (n = new r.a(a, e, a.data.length - e)).data.length, t = s.a._createBefore(n)
                        } else n = new r.a(a, 0, a.data.length), t.offset--;
                        return this.position = t, this._formatReturnValue("text", n, e, t, i)
                    }
                }
                if ("string" == typeof a) {
                    let i;
                    if (this.singleCharacters) i = 1; else {
                        const e = n === this._boundaryStartParent ? this.boundaries.start.offset : 0;
                        i = t.offset - e
                    }
                    t.offset -= i;
                    const o = new r.a(n, t.offset, i);
                    return this.position = t, this._formatReturnValue("text", o, e, t, i)
                }
                return t = s.a._createBefore(n), this.position = t, this._formatReturnValue("elementStart", n, e, t, 1)
            }

            _formatReturnValue(t, e, n, i, o) {
                return e instanceof r.a && (e.offsetInText + e.data.length == e.textNode.data.length && ("forward" != this.direction || this.boundaries && this.boundaries.end.isEqual(this.position) ? n = s.a._createAfter(e.textNode) : (i = s.a._createAfter(e.textNode), this.position = i)), 0 === e.offsetInText && ("backward" != this.direction || this.boundaries && this.boundaries.start.isEqual(this.position) ? n = s.a._createBefore(e.textNode) : (i = s.a._createBefore(e.textNode), this.position = i))), {
                    done: !1,
                    value: {type: t, item: e, previousPosition: n, nextPosition: i, length: o}
                }
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var i = n(29), o = n(2);

        class r extends i.a {
            constructor(t, e, n, i, o, r) {
                super(r), this.name = t, this.oldRange = e ? e.clone() : null, this.newRange = n ? n.clone() : null, this.affectsData = o, this._markers = i
            }

            get type() {
                return "marker"
            }

            clone() {
                return new r(this.name, this.oldRange, this.newRange, this._markers, this.affectsData, this.baseVersion)
            }

            getReversed() {
                return new r(this.name, this.newRange, this.oldRange, this._markers, this.affectsData, this.baseVersion + 1)
            }

            _execute() {
                const t = this.newRange ? "_set" : "_remove";
                this._markers[t](this.name, this.newRange, !0, this.affectsData)
            }

            toJSON() {
                const t = super.toJSON();
                return this.oldRange && (t.oldRange = this.oldRange.toJSON()), this.newRange && (t.newRange = this.newRange.toJSON()), delete t._markers, t
            }

            static get className() {
                return "MarkerOperation"
            }

            static fromJSON(t, e) {
                return new r(t.name, t.oldRange ? o.a.fromJSON(t.oldRange, e) : null, t.newRange ? o.a.fromJSON(t.newRange, e) : null, e.model.markers, t.affectsData, t.baseVersion)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return a
        });
        var i = n(29), o = n(15), r = n(0), s = n(3);

        class a extends i.a {
            constructor(t, e, n, i) {
                super(i), this.position = t, this.position.stickiness = "toNext", this.oldName = e, this.newName = n
            }

            get type() {
                return "rename"
            }

            clone() {
                return new a(this.position.clone(), this.oldName, this.newName, this.baseVersion)
            }

            getReversed() {
                return new a(this.position.clone(), this.newName, this.oldName, this.baseVersion + 1)
            }

            _validate() {
                const t = this.position.nodeAfter;
                if (!(t instanceof o.a)) throw new r.b("rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.", this);
                if (t.name !== this.oldName) throw new r.b("rename-operation-wrong-name: Element to change has different name than operation's old name.", this)
            }

            _execute() {
                this.position.nodeAfter.name = this.newName
            }

            toJSON() {
                const t = super.toJSON();
                return t.position = this.position.toJSON(), t
            }

            static get className() {
                return "RenameOperation"
            }

            static fromJSON(t, e) {
                return new a(s.a.fromJSON(t.position, e), t.oldName, t.newName, t.baseVersion)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return c
        });
        var i = n(17), o = n(49), r = n(5), s = n(34), a = n(8);

        class c {
            constructor(t) {
                this._children = [], t && this._insertChild(0, t)
            }

            [Symbol.iterator]() {
                return this._children[Symbol.iterator]()
            }

            get childCount() {
                return this._children.length
            }

            get isEmpty() {
                return 0 === this.childCount
            }

            get root() {
                return this
            }

            get parent() {
                return null
            }

            is(t) {
                return "documentFragment" == t || "view:documentFragment" == t
            }

            _appendChild(t) {
                return this._insertChild(this.childCount, t)
            }

            getChild(t) {
                return this._children[t]
            }

            getChildIndex(t) {
                return this._children.indexOf(t)
            }

            getChildren() {
                return this._children[Symbol.iterator]()
            }

            _insertChild(t, e) {
                this._fireChange("children", this);
                let n = 0;
                const r = function (t) {
                    if ("string" == typeof t) return [new i.a(t)];
                    Object(s.a)(t) || (t = [t]);
                    return Array.from(t).map(t => "string" == typeof t ? new i.a(t) : t instanceof o.a ? new i.a(t.data) : t)
                }(e);
                for (const e of r) null !== e.parent && e._remove(), e.parent = this, this._children.splice(t, 0, e), t++, n++;
                return n
            }

            _removeChildren(t, e = 1) {
                this._fireChange("children", this);
                for (let n = t; n < t + e; n++) this._children[n].parent = null;
                return this._children.splice(t, e)
            }

            _fireChange(t, e) {
                this.fire("change:" + t, e)
            }
        }

        Object(r.a)(c, a.c)
    }, function (t, e, n) {
        "use strict";
        var i = n(45), o = n(22), r = Object(i.a)(o.a, "DataView"), s = n(73), a = Object(i.a)(o.a, "Promise"),
            c = Object(i.a)(o.a, "Set"), l = Object(i.a)(o.a, "WeakMap"), d = n(47), u = n(66), h = Object(u.a)(r),
            f = Object(u.a)(s.a), m = Object(u.a)(a), p = Object(u.a)(c), g = Object(u.a)(l), b = d.a;
        (r && "[object DataView]" != b(new r(new ArrayBuffer(1))) || s.a && "[object Map]" != b(new s.a) || a && "[object Promise]" != b(a.resolve()) || c && "[object Set]" != b(new c) || l && "[object WeakMap]" != b(new l)) && (b = function (t) {
            var e = Object(d.a)(t), n = "[object Object]" == e ? t.constructor : void 0, i = n ? Object(u.a)(n) : "";
            if (i) switch (i) {
                case h:
                    return "[object DataView]";
                case f:
                    return "[object Map]";
                case m:
                    return "[object Promise]";
                case p:
                    return "[object Set]";
                case g:
                    return "[object WeakMap]"
            }
            return e
        });
        e.a = b
    }, function (t, e, n) {
        "use strict";
        (function (t) {
            var i = n(98), o = "object" == typeof exports && exports && !exports.nodeType && exports,
                r = o && "object" == typeof t && t && !t.nodeType && t, s = r && r.exports === o && i.a.process,
                a = function () {
                    try {
                        var t = r && r.require && r.require("util").types;
                        return t || s && s.binding && s.binding("util")
                    } catch (t) {
                    }
                }();
            e.a = a
        }).call(this, n(118)(t))
    }, function (t, e, n) {
        "use strict";

        function i(t) {
            if (t) {
                if (t.defaultView) return t instanceof t.defaultView.Document;
                if (t.ownerDocument && t.ownerDocument.defaultView) return t instanceof t.ownerDocument.defaultView.Node
            }
            return !1
        }

        n.d(e, "a", function () {
            return i
        })
    }, function (t, e, n) {
        "use strict";
        var i = Function.prototype.toString;
        e.a = function (t) {
            if (null != t) {
                try {
                    return i.call(t)
                } catch (t) {
                }
                try {
                    return t + ""
                } catch (t) {
                }
            }
            return ""
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return c
        });
        var i = n(57), o = n(15), r = n(16), s = n(37), a = n(34);

        class c {
            constructor(t) {
                this.markers = new Map, this._children = new i.a, t && this._insertChild(0, t)
            }

            [Symbol.iterator]() {
                return this.getChildren()
            }

            get childCount() {
                return this._children.length
            }

            get maxOffset() {
                return this._children.maxOffset
            }

            get isEmpty() {
                return 0 === this.childCount
            }

            get root() {
                return this
            }

            get parent() {
                return null
            }

            is(t) {
                return "documentFragment" == t || "model:documentFragment" == t
            }

            getChild(t) {
                return this._children.getNode(t)
            }

            getChildren() {
                return this._children[Symbol.iterator]()
            }

            getChildIndex(t) {
                return this._children.getNodeIndex(t)
            }

            getChildStartOffset(t) {
                return this._children.getNodeStartOffset(t)
            }

            getPath() {
                return []
            }

            getNodeByPath(t) {
                let e = this;
                for (const n of t) e = e.getChild(e.offsetToIndex(n));
                return e
            }

            offsetToIndex(t) {
                return this._children.offsetToIndex(t)
            }

            toJSON() {
                const t = [];
                for (const e of this._children) t.push(e.toJSON());
                return t
            }

            static fromJSON(t) {
                const e = [];
                for (const n of t) n.name ? e.push(o.a.fromJSON(n)) : e.push(r.a.fromJSON(n));
                return new c(e)
            }

            _appendChild(t) {
                this._insertChild(this.childCount, t)
            }

            _insertChild(t, e) {
                const n = function (t) {
                    if ("string" == typeof t) return [new r.a(t)];
                    Object(a.a)(t) || (t = [t]);
                    return Array.from(t).map(t => "string" == typeof t ? new r.a(t) : t instanceof s.a ? new r.a(t.data, t.getAttributes()) : t)
                }(e);
                for (const t of n) null !== t.parent && t._remove(), t.parent = this;
                this._children._insertNodes(t, n)
            }

            _removeChildren(t, e = 1) {
                const n = this._children._removeNodes(t, e);
                for (const t of n) t.parent = null;
                return n
            }
        }
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) {
            return t === e || t != t && e != e
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(8), o = n(33), r = n(65), s = n(90), a = n(116);
        const c = Object(a.a)({}, i.c, {
            listenTo(t, ...e) {
                if (Object(r.a)(t) || Object(s.a)(t)) {
                    const n = this._getProxyEmitter(t) || new l(t);
                    n.attach(...e), t = n
                }
                i.c.listenTo.call(this, t, ...e)
            }, stopListening(t, e, n) {
                if (Object(r.a)(t) || Object(s.a)(t)) {
                    const e = this._getProxyEmitter(t);
                    if (!e) return;
                    t = e
                }
                i.c.stopListening.call(this, t, e, n), t instanceof l && t.detach(e)
            }, _getProxyEmitter(t) {
                return Object(i.a)(this, d(t))
            }
        });
        e.a = c;

        class l {
            constructor(t) {
                Object(i.b)(this, d(t)), this._domNode = t
            }
        }

        function d(t) {
            return t["data-ck-expando"] || (t["data-ck-expando"] = Object(o.a)())
        }

        Object(a.a)(l.prototype, i.c, {
            attach(t, e, n = {}) {
                if (this._domListeners && this._domListeners[t]) return;
                const i = this._createDomListener(t, !!n.useCapture);
                this._domNode.addEventListener(t, i, !!n.useCapture), this._domListeners || (this._domListeners = {}), this._domListeners[t] = i
            }, detach(t) {
                let e;
                !this._domListeners[t] || (e = this._events[t]) && e.callbacks.length || this._domListeners[t].removeListener()
            }, _createDomListener(t, e) {
                const n = e => {
                    this.fire(t, e)
                };
                return n.removeListener = (() => {
                    this._domNode.removeEventListener(t, n, e), delete this._domListeners[t]
                }), n
            }
        })
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        });
        var i = n(6);
        n(138);

        class o extends i.a {
            constructor() {
                super();
                const t = this.bindTemplate;
                this.set("content", ""), this.set("viewBox", "0 0 20 20"), this.set("fillColor", ""), this.setTemplate({
                    tag: "svg",
                    ns: "http://www.w3.org/2000/svg",
                    attributes: {class: ["ck", "ck-icon"], viewBox: t.to("viewBox")}
                })
            }

            render() {
                super.render(), this._updateXMLContent(), this._colorFillPaths(), this.on("change:content", () => {
                    this._updateXMLContent(), this._colorFillPaths()
                }), this.on("change:fillColor", () => {
                    this._colorFillPaths()
                })
            }

            _updateXMLContent() {
                if (this.content) {
                    const t = (new DOMParser).parseFromString(this.content.trim(), "image/svg+xml").querySelector("svg"),
                        e = t.getAttribute("viewBox");
                    for (e && (this.viewBox = e), this.element.innerHTML = ""; t.childNodes.length > 0;) this.element.appendChild(t.childNodes[0])
                }
            }

            _colorFillPaths() {
                this.fillColor && this.element.querySelectorAll(".ck-icon__fill").forEach(t => {
                    t.style.fill = this.fillColor
                })
            }
        }
    }, function (t, e, n) {
        "use strict";
        var i = function () {
            this.__data__ = [], this.size = 0
        }, o = n(68);
        var r = function (t, e) {
            for (var n = t.length; n--;) if (Object(o.a)(t[n][0], e)) return n;
            return -1
        }, s = Array.prototype.splice;
        var a = function (t) {
            var e = this.__data__, n = r(e, t);
            return !(n < 0 || (n == e.length - 1 ? e.pop() : s.call(e, n, 1), --this.size, 0))
        };
        var c = function (t) {
            var e = this.__data__, n = r(e, t);
            return n < 0 ? void 0 : e[n][1]
        };
        var l = function (t) {
            return r(this.__data__, t) > -1
        };
        var d = function (t, e) {
            var n = this.__data__, i = r(n, t);
            return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
        };

        function u(t) {
            var e = -1, n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var i = t[e];
                this.set(i[0], i[1])
            }
        }

        u.prototype.clear = i, u.prototype.delete = a, u.prototype.get = c, u.prototype.has = l, u.prototype.set = d;
        e.a = u
    }, function (t, e, n) {
        "use strict";
        var i = n(17), o = n(30), r = n(4), s = n(10), a = n(39), c = n(62), l = n(59), d = n(14), u = n(21);

        function h(t) {
            let e = 0;
            for (; t.previousSibling;) t = t.previousSibling, e++;
            return e
        }

        function f(t) {
            const e = [];
            for (; t && t.nodeType != Node.DOCUMENT_NODE;) e.unshift(t), t = t.parentNode;
            return e
        }

        var m = n(26), p = n(206);
        n.d(e, "a", function () {
            return g
        });

        class g {
            constructor(t = {}) {
                this.blockFiller = t.blockFiller || d.a, this.preElements = ["pre"], this.blockElements = ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"], this._domToViewMapping = new WeakMap, this._viewToDomMapping = new WeakMap, this._fakeSelectionMapping = new WeakMap
            }

            bindFakeSelection(t, e) {
                this._fakeSelectionMapping.set(t, new a.a(e))
            }

            fakeSelectionToView(t) {
                return this._fakeSelectionMapping.get(t)
            }

            bindElements(t, e) {
                this._domToViewMapping.set(t, e), this._viewToDomMapping.set(e, t)
            }

            unbindDomElement(t) {
                const e = this._domToViewMapping.get(t);
                if (e) {
                    this._domToViewMapping.delete(t), this._viewToDomMapping.delete(e);
                    for (const e of Array.from(t.childNodes)) this.unbindDomElement(e)
                }
            }

            bindDocumentFragments(t, e) {
                this._domToViewMapping.set(t, e), this._viewToDomMapping.set(e, t)
            }

            viewToDom(t, e, n = {}) {
                if (t.is("text")) {
                    const n = this._processDataFromViewText(t);
                    return e.createTextNode(n)
                }
                {
                    if (this.mapViewToDom(t)) return this.mapViewToDom(t);
                    let i;
                    if (t.is("documentFragment")) i = e.createDocumentFragment(), n.bind && this.bindDocumentFragments(i, t); else {
                        if (t.is("uiElement")) return i = t.render(e), n.bind && this.bindElements(i, t), i;
                        i = e.createElement(t.name), n.bind && this.bindElements(i, t);
                        for (const e of t.getAttributeKeys()) i.setAttribute(e, t.getAttribute(e))
                    }
                    if (n.withChildren || void 0 === n.withChildren) for (const o of this.viewChildrenToDom(t, e, n)) i.appendChild(o);
                    return i
                }
            }

            * viewChildrenToDom(t, e, n = {}) {
                const i = t.getFillerOffset && t.getFillerOffset();
                let o = 0;
                for (const r of t.getChildren()) i === o && (yield this.blockFiller(e)), yield this.viewToDom(r, e, n), o++;
                i === o && (yield this.blockFiller(e))
            }

            viewRangeToDom(t) {
                const e = this.viewPositionToDom(t.start), n = this.viewPositionToDom(t.end),
                    i = document.createRange();
                return i.setStart(e.parent, e.offset), i.setEnd(n.parent, n.offset), i
            }

            viewPositionToDom(t) {
                const e = t.parent;
                if (e.is("text")) {
                    const n = this.findCorrespondingDomText(e);
                    if (!n) return null;
                    let i = t.offset;
                    return Object(d.i)(n) && (i += d.c), {parent: n, offset: i}
                }
                {
                    let n, i, o;
                    if (0 === t.offset) {
                        if (!(n = this.mapViewToDom(e))) return null;
                        o = n.childNodes[0]
                    } else {
                        const e = t.nodeBefore;
                        if (!(i = e.is("text") ? this.findCorrespondingDomText(e) : this.mapViewToDom(t.nodeBefore))) return null;
                        n = i.parentNode, o = i.nextSibling
                    }
                    if (Object(m.a)(o) && Object(d.i)(o)) return {parent: o, offset: d.c};
                    return {parent: n, offset: i ? h(i) + 1 : 0}
                }
            }

            domToView(t, e = {}) {
                if (Object(d.g)(t, this.blockFiller)) return null;
                const n = this.getParentUIElement(t, this._domToViewMapping);
                if (n) return n;
                if (Object(m.a)(t)) {
                    if (Object(d.h)(t)) return null;
                    {
                        const e = this._processDataFromDomText(t);
                        return "" === e ? null : new i.a(e)
                    }
                }
                if (this.isComment(t)) return null;
                {
                    if (this.mapDomToView(t)) return this.mapDomToView(t);
                    let n;
                    if (this.isDocumentFragment(t)) n = new c.a, e.bind && this.bindDocumentFragments(t, n); else {
                        const i = e.keepOriginalCase ? t.tagName : t.tagName.toLowerCase();
                        n = new o.a(i), e.bind && this.bindElements(t, n);
                        const r = t.attributes;
                        for (let t = r.length - 1; t >= 0; t--) n._setAttribute(r[t].name, r[t].value)
                    }
                    if (e.withChildren || void 0 === e.withChildren) for (const i of this.domChildrenToView(t, e)) n._appendChild(i);
                    return n
                }
            }

            * domChildrenToView(t, e = {}) {
                for (let n = 0; n < t.childNodes.length; n++) {
                    const i = t.childNodes[n], o = this.domToView(i, e);
                    null !== o && (yield o)
                }
            }

            domSelectionToView(t) {
                if (1 === t.rangeCount) {
                    let e = t.getRangeAt(0).startContainer;
                    Object(m.a)(e) && (e = e.parentNode);
                    const n = this.fakeSelectionToView(e);
                    if (n) return n
                }
                const e = this.isDomSelectionBackward(t), n = [];
                for (let e = 0; e < t.rangeCount; e++) {
                    const i = t.getRangeAt(e), o = this.domRangeToView(i);
                    o && n.push(o)
                }
                return new a.a(n, {backward: e})
            }

            domRangeToView(t) {
                const e = this.domPositionToView(t.startContainer, t.startOffset),
                    n = this.domPositionToView(t.endContainer, t.endOffset);
                return e && n ? new s.a(e, n) : null
            }

            domPositionToView(t, e) {
                if (Object(d.g)(t, this.blockFiller)) return this.domPositionToView(t.parentNode, h(t));
                const n = this.mapDomToView(t);
                if (n && n.is("uiElement")) return r.a._createBefore(n);
                if (Object(m.a)(t)) {
                    if (Object(d.h)(t)) return this.domPositionToView(t.parentNode, h(t));
                    const n = this.findCorrespondingViewText(t);
                    let i = e;
                    return n ? (Object(d.i)(t) && (i = (i -= d.c) < 0 ? 0 : i), new r.a(n, i)) : null
                }
                if (0 === e) {
                    const e = this.mapDomToView(t);
                    if (e) return new r.a(e, 0)
                } else {
                    const n = t.childNodes[e - 1],
                        i = Object(m.a)(n) ? this.findCorrespondingViewText(n) : this.mapDomToView(n);
                    if (i && i.parent) return new r.a(i.parent, i.index + 1)
                }
                return null
            }

            mapDomToView(t) {
                return this.getParentUIElement(t) || this._domToViewMapping.get(t)
            }

            findCorrespondingViewText(t) {
                if (Object(d.h)(t)) return null;
                const e = this.getParentUIElement(t);
                if (e) return e;
                const n = t.previousSibling;
                if (n) {
                    if (!this.isElement(n)) return null;
                    const t = this.mapDomToView(n);
                    if (t) {
                        return t.nextSibling instanceof i.a ? t.nextSibling : null
                    }
                } else {
                    const e = this.mapDomToView(t.parentNode);
                    if (e) {
                        const t = e.getChild(0);
                        return t instanceof i.a ? t : null
                    }
                }
                return null
            }

            mapViewToDom(t) {
                return this._viewToDomMapping.get(t)
            }

            findCorrespondingDomText(t) {
                const e = t.previousSibling;
                return e && this.mapViewToDom(e) ? this.mapViewToDom(e).nextSibling : !e && t.parent && this.mapViewToDom(t.parent) ? this.mapViewToDom(t.parent).childNodes[0] : null
            }

            focus(t) {
                const e = this.mapViewToDom(t);
                if (e && e.ownerDocument.activeElement !== e) {
                    const {scrollX: t, scrollY: n} = u.a.window, i = [];
                    w(e, t => {
                        const {scrollLeft: e, scrollTop: n} = t;
                        i.push([e, n])
                    }), e.focus(), w(e, t => {
                        const [e, n] = i.shift();
                        t.scrollLeft = e, t.scrollTop = n
                    }), u.a.window.scrollTo(t, n)
                }
            }

            isElement(t) {
                return t && t.nodeType == Node.ELEMENT_NODE
            }

            isDocumentFragment(t) {
                return t && t.nodeType == Node.DOCUMENT_FRAGMENT_NODE
            }

            isComment(t) {
                return t && t.nodeType == Node.COMMENT_NODE
            }

            isDomSelectionBackward(t) {
                if (t.isCollapsed) return !1;
                const e = document.createRange();
                e.setStart(t.anchorNode, t.anchorOffset), e.setEnd(t.focusNode, t.focusOffset);
                const n = e.collapsed;
                return e.detach(), n
            }

            getParentUIElement(t) {
                const e = f(t);
                for (e.pop(); e.length;) {
                    const t = e.pop(), n = this._domToViewMapping.get(t);
                    if (n && n.is("uiElement")) return n
                }
                return null
            }

            isDomSelectionCorrect(t) {
                return this._isDomSelectionPositionCorrect(t.anchorNode, t.anchorOffset) && this._isDomSelectionPositionCorrect(t.focusNode, t.focusOffset)
            }

            _isDomSelectionPositionCorrect(t, e) {
                if (Object(m.a)(t) && Object(d.i)(t) && e < d.c) return !1;
                if (this.isElement(t) && Object(d.i)(t.childNodes[e])) return !1;
                const n = this.mapDomToView(t);
                return !n || !n.is("uiElement")
            }

            _processDataFromViewText(t) {
                let e = t.data;
                if (t.getAncestors().some(t => this.preElements.includes(t.name))) return e;
                if (" " == e.charAt(0)) {
                    const n = this._getTouchingViewTextNode(t, !1);
                    !(n && this._nodeEndsWithSpace(n)) && n || (e = " " + e.substr(1))
                }
                if (" " == e.charAt(e.length - 1)) {
                    const n = this._getTouchingViewTextNode(t, !0);
                    " " != e.charAt(e.length - 2) && n && " " != n.data.charAt(0) || (e = e.substr(0, e.length - 1) + " ")
                }
                return e.replace(/ {2}/g, "  ")
            }

            _nodeEndsWithSpace(t) {
                if (t.getAncestors().some(t => this.preElements.includes(t.name))) return !1;
                const e = this._processDataFromViewText(t);
                return " " == e.charAt(e.length - 1)
            }

            _processDataFromDomText(t) {
                let e = t.data;
                if (b(t, this.preElements)) return Object(d.e)(t);
                e = e.replace(/[ \n\t\r]{1,}/g, " ");
                const n = this._getTouchingInlineDomNode(t, !1), i = this._getTouchingInlineDomNode(t, !0),
                    o = this._checkShouldLeftTrimDomText(n), r = this._checkShouldRightTrimDomText(t, i);
                return o && (e = e.replace(/^ /, "")), r && (e = e.replace(/ $/, "")), e = (e = Object(d.e)(new Text(e))).replace(/ \u00A0/g, "  "), (/( |\u00A0)\u00A0$/.test(e) || !i || i.data && " " == i.data.charAt(0)) && (e = e.replace(/\u00A0$/, " ")), o && (e = e.replace(/^\u00A0/, " ")), e
            }

            _checkShouldLeftTrimDomText(t) {
                return !t || (!!Object(p.a)(t) || /[^\S\u00A0]/.test(t.data.charAt(t.data.length - 1)))
            }

            _checkShouldRightTrimDomText(t, e) {
                return !e && !Object(d.i)(t)
            }

            _getTouchingViewTextNode(t, e) {
                const n = new l.a({
                    startPosition: e ? r.a._createAfter(t) : r.a._createBefore(t),
                    direction: e ? "forward" : "backward"
                });
                for (const t of n) {
                    if (t.item.is("containerElement")) return null;
                    if (t.item.is("br")) return null;
                    if (t.item.is("textProxy")) return t.item
                }
                return null
            }

            _getTouchingInlineDomNode(t, e) {
                if (!t.parentNode) return null;
                const n = e ? "nextNode" : "previousNode", i = t.ownerDocument, o = f(t)[0],
                    r = i.createTreeWalker(o, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {acceptNode: t => Object(m.a)(t) ? NodeFilter.FILTER_ACCEPT : "BR" == t.tagName ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP});
                r.currentNode = t;
                const s = r[n]();
                if (null !== s) {
                    const e = function (t, e) {
                        const n = f(t), i = f(e);
                        let o = 0;
                        for (; n[o] == i[o] && n[o];) o++;
                        return 0 === o ? null : n[o - 1]
                    }(t, s);
                    if (e && !b(t, this.blockElements, e) && !b(s, this.blockElements, e)) return s
                }
                return null
            }
        }

        function b(t, e, n) {
            let i = f(t);
            return n && (i = i.slice(i.indexOf(n) + 1)), i.some(t => t.tagName && e.includes(t.tagName.toLowerCase()))
        }

        function w(t, e) {
            for (; t && t != u.a.document;) e(t), t = t.parentNode
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(45), o = n(22), r = Object(i.a)(o.a, "Map");
        e.a = r
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        }), n.d(e, "b", function () {
            return r
        });
        var i = n(30);

        class o extends i.a {
            constructor(t, e, n) {
                super(t, e, n), this.getFillerOffset = r
            }

            is(t, e = null) {
                const n = t && t.replace(/^view:/, "");
                return e ? "containerElement" == n && e == this.name || super.is(t, e) : "containerElement" == n || super.is(t)
            }
        }

        function r() {
            const t = [...this.getChildren()], e = t[this.childCount - 1];
            if (e && e.is("element", "br")) return this.childCount;
            for (const e of t) if (!e.is("uiElement")) return null;
            return this.childCount
        }
    }, function (t, e, n) {
        "use strict";
        (function (t) {
            var i = n(22), o = n(120), r = "object" == typeof exports && exports && !exports.nodeType && exports,
                s = r && "object" == typeof t && t && !t.nodeType && t, a = s && s.exports === r ? i.a.Buffer : void 0,
                c = (a ? a.isBuffer : void 0) || o.a;
            e.a = c
        }).call(this, n(118)(t))
    }, function (t, e, n) {
        "use strict";
        var i = n(99), o = Object(i.a)(Object.getPrototypeOf, Object);
        e.a = o
    }, function (t, e, n) {
        "use strict";
        var i = Object.prototype;
        e.a = function (t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || i)
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(100), o = n(105);
        e.a = function (t) {
            return null != t && Object(o.a)(t.length) && !Object(i.a)(t)
        }
    }, function (t, e, n) {
        "use strict";
        e.a = function (t) {
            return function (e) {
                return t(e)
            }
        }
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return c
        });
        var i = n(74), o = n(0), r = n(5), s = n(13);
        const a = Symbol("document");

        class c extends i.a {
            constructor(t, e, n) {
                super(t, e, n), this.set("isReadOnly", !1), this.set("isFocused", !1)
            }

            is(t, e = null) {
                const n = t && t.replace(/^view:/, "");
                return e ? "editableElement" == n && e == this.name || super.is(t, e) : "editableElement" == n || super.is(t)
            }

            destroy() {
                this.stopListening()
            }

            get document() {
                return this.getCustomProperty(a)
            }

            set _document(t) {
                if (this.getCustomProperty(a)) throw new o.b("view-editableelement-document-already-set: View document is already set.", this);
                this._setCustomProperty(a, t), this.bind("isReadOnly").to(t), this.bind("isFocused").to(t, "isFocused", e => e && t.selection.editableElement == this), this.listenTo(t.selection, "change", () => {
                    this.isFocused = t.isFocused && t.selection.editableElement == this
                })
            }
        }

        Object(r.a)(c, s.a)
    }, function (t, e, n) {
        "use strict";
        const i = {
            get(t) {
                return "number" != typeof t ? this[t] || this.normal : t
            }, highest: 1e5, high: 1e3, normal: 0, low: -1e3, lowest: -1e5
        };
        e.a = i
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        });
        var i = n(116);

        class o {
            constructor(t, e, n) {
                this.view = t, this.document = t.document, this.domEvent = e, this.domTarget = e.target, Object(i.a)(this, n)
            }

            get target() {
                return this.view.domConverter.mapDomToView(this.domTarget)
            }

            preventDefault() {
                this.domEvent.preventDefault()
            }

            stopPropagation() {
                this.domEvent.stopPropagation()
            }
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(91);
        var o = function (t, e) {
            for (var n = -1, i = null == t ? 0 : t.length; ++n < i && !1 !== e(t[n], n, t);) ;
            return t
        }, r = n(102), s = n(54), a = n(86);
        var c = function (t, e) {
            return t && Object(s.a)(e, Object(a.a)(e), t)
        }, l = n(85);
        var d = function (t, e) {
            return t && Object(s.a)(e, Object(l.a)(e), t)
        }, u = n(121);
        var h = function (t, e) {
            var n = -1, i = t.length;
            for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
            return e
        }, f = n(87);
        var m = function (t, e) {
            return Object(s.a)(t, Object(f.a)(t), e)
        }, p = n(104), g = n(76), b = n(103), w = Object.getOwnPropertySymbols ? function (t) {
            for (var e = []; t;) Object(p.a)(e, Object(f.a)(t)), t = Object(g.a)(t);
            return e
        } : b.a;
        var k = function (t, e) {
            return Object(s.a)(t, w(t), e)
        }, _ = n(94), v = n(107);
        var y = function (t) {
            return Object(v.a)(t, l.a, w)
        }, x = n(63), A = Object.prototype.hasOwnProperty;
        var T = function (t) {
            var e = t.length, n = new t.constructor(e);
            return e && "string" == typeof t[0] && A.call(t, "index") && (n.index = t.index, n.input = t.input), n
        }, C = n(89);
        var P = function (t) {
            var e = new t.constructor(t.byteLength);
            return new C.a(e).set(new C.a(t)), e
        };
        var M = function (t, e) {
            var n = e ? P(t.buffer) : t.buffer;
            return new t.constructor(n, t.byteOffset, t.byteLength)
        }, O = /\w*$/;
        var S = function (t) {
            var e = new t.constructor(t.source, O.exec(t));
            return e.lastIndex = t.lastIndex, e
        }, E = n(40), I = E.a ? E.a.prototype : void 0, N = I ? I.valueOf : void 0;
        var j = function (t) {
            return N ? Object(N.call(t)) : {}
        };
        var R = function (t, e) {
                var n = e ? P(t.buffer) : t.buffer;
                return new t.constructor(n, t.byteOffset, t.length)
            }, D = "[object Boolean]", L = "[object Date]", V = "[object Map]", z = "[object Number]",
            B = "[object RegExp]", F = "[object Set]", U = "[object String]", H = "[object Symbol]",
            q = "[object ArrayBuffer]", W = "[object DataView]", Y = "[object Float32Array]",
            $ = "[object Float64Array]", G = "[object Int8Array]", Q = "[object Int16Array]", J = "[object Int32Array]",
            K = "[object Uint8Array]", Z = "[object Uint8ClampedArray]", X = "[object Uint16Array]",
            tt = "[object Uint32Array]";
        var et = function (t, e, n) {
            var i = t.constructor;
            switch (e) {
                case q:
                    return P(t);
                case D:
                case L:
                    return new i(+t);
                case W:
                    return M(t, n);
                case Y:
                case $:
                case G:
                case Q:
                case J:
                case K:
                case Z:
                case X:
                case tt:
                    return R(t, n);
                case V:
                    return new i;
                case z:
                case U:
                    return new i(t);
                case B:
                    return S(t);
                case F:
                    return new i;
                case H:
                    return j(t)
            }
        }, nt = n(32), it = Object.create, ot = function () {
            function t() {
            }

            return function (e) {
                if (!Object(nt.a)(e)) return {};
                if (it) return it(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0, n
            }
        }(), rt = n(77);
        var st = function (t) {
            return "function" != typeof t.constructor || Object(rt.a)(t) ? {} : ot(Object(g.a)(t))
        }, at = n(50), ct = n(75), lt = n(31), dt = "[object Map]";
        var ut = function (t) {
            return Object(lt.a)(t) && Object(x.a)(t) == dt
        }, ht = n(79), ft = n(64), mt = ft.a && ft.a.isMap, pt = mt ? Object(ht.a)(mt) : ut, gt = "[object Set]";
        var bt = function (t) {
                return Object(lt.a)(t) && Object(x.a)(t) == gt
            }, wt = ft.a && ft.a.isSet, kt = wt ? Object(ht.a)(wt) : bt, _t = 1, vt = 2, yt = 4, xt = "[object Arguments]",
            At = "[object Function]", Tt = "[object GeneratorFunction]", Ct = "[object Object]", Pt = {};
        Pt[xt] = Pt["[object Array]"] = Pt["[object ArrayBuffer]"] = Pt["[object DataView]"] = Pt["[object Boolean]"] = Pt["[object Date]"] = Pt["[object Float32Array]"] = Pt["[object Float64Array]"] = Pt["[object Int8Array]"] = Pt["[object Int16Array]"] = Pt["[object Int32Array]"] = Pt["[object Map]"] = Pt["[object Number]"] = Pt[Ct] = Pt["[object RegExp]"] = Pt["[object Set]"] = Pt["[object String]"] = Pt["[object Symbol]"] = Pt["[object Uint8Array]"] = Pt["[object Uint8ClampedArray]"] = Pt["[object Uint16Array]"] = Pt["[object Uint32Array]"] = !0, Pt["[object Error]"] = Pt[At] = Pt["[object WeakMap]"] = !1;
        e.a = function t(e, n, s, l, f, p) {
            var g, b = n & _t, w = n & vt, v = n & yt;
            if (s && (g = f ? s(e, l, f, p) : s(e)), void 0 !== g) return g;
            if (!Object(nt.a)(e)) return e;
            var A = Object(at.a)(e);
            if (A) {
                if (g = T(e), !b) return h(e, g)
            } else {
                var C = Object(x.a)(e), P = C == At || C == Tt;
                if (Object(ct.a)(e)) return Object(u.a)(e, b);
                if (C == Ct || C == xt || P && !f) {
                    if (g = w || P ? {} : st(e), !b) return w ? k(e, d(g, e)) : m(e, c(g, e))
                } else {
                    if (!Pt[C]) return f ? e : {};
                    g = et(e, C, b)
                }
            }
            p || (p = new i.a);
            var M = p.get(e);
            if (M) return M;
            p.set(e, g), kt(e) ? e.forEach(function (i) {
                g.add(t(i, n, s, i, e, p))
            }) : pt(e) && e.forEach(function (i, o) {
                g.set(o, t(i, n, s, o, e, p))
            });
            var O = v ? w ? y : _.a : w ? keysIn : a.a, S = A ? void 0 : O(e);
            return o(S || e, function (i, o) {
                S && (i = e[o = i]), Object(r.a)(g, o, t(i, n, s, o, e, p))
            }), g
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(1), o = n(7), r = n(41), s = n(36), a = n(61), c = n(60), l = n(18), d = n(96), u = n(27), h = n(20),
            f = n(29);

        class m extends f.a {
            get type() {
                return "noop"
            }

            clone() {
                return new m(this.baseVersion)
            }

            getReversed() {
                return new m(this.baseVersion + 1)
            }

            _execute() {
            }

            static get className() {
                return "NoOperation"
            }
        }

        var p = n(2), g = n(3), b = n(24);
        const w = new Map;

        function k(t, e, n) {
            let i = w.get(t);
            i || (i = new Map, w.set(t, i)), i.set(e, n)
        }

        function _(t) {
            return [t]
        }

        function v(t, e, n = {}) {
            const i = function (t, e) {
                const n = w.get(t);
                return n && n.has(e) ? n.get(e) : _
            }(t.constructor, e.constructor);
            try {
                return i(t = t.clone(), e, n)
            } catch (t) {
                throw t
            }
        }

        function y(t, e, n) {
            t = t.slice(), e = e.slice();
            const i = new x(n.document, n.useRelations, n.forceWeakRemove);
            i.setOriginalOperations(t), i.setOriginalOperations(e);
            const o = i.originalOperations;
            if (0 == t.length || 0 == e.length) return {operationsA: t, operationsB: e, originalOperations: o};
            const r = new WeakMap;
            for (const e of t) r.set(e, 0);
            const s = {
                nextBaseVersionA: t[t.length - 1].baseVersion + 1,
                nextBaseVersionB: e[e.length - 1].baseVersion + 1,
                originalOperationsACount: t.length,
                originalOperationsBCount: e.length
            };
            let a = 0;
            for (; a < t.length;) {
                const n = t[a], o = r.get(n);
                if (o == e.length) {
                    a++;
                    continue
                }
                const s = e[o], c = v(n, s, i.getContext(n, s, !0)), l = v(s, n, i.getContext(s, n, !1));
                i.updateRelation(n, s), i.setOriginalOperations(c, n), i.setOriginalOperations(l, s);
                for (const t of c) r.set(t, o + l.length);
                t.splice(a, 1, ...c), e.splice(o, 1, ...l)
            }
            if (n.padWithNoOps) {
                const n = t.length - s.originalOperationsACount, i = e.length - s.originalOperationsBCount;
                T(t, i - n), T(e, n - i)
            }
            return A(t, s.nextBaseVersionB), A(e, s.nextBaseVersionA), {
                operationsA: t,
                operationsB: e,
                originalOperations: o
            }
        }

        class x {
            constructor(t, e, n = !1) {
                this.originalOperations = new Map, this._history = t.history, this._useRelations = e, this._forceWeakRemove = !!n, this._relations = new Map
            }

            setOriginalOperations(t, e = null) {
                const n = e ? this.originalOperations.get(e) : null;
                for (const e of t) this.originalOperations.set(e, n || e)
            }

            updateRelation(t, e) {
                switch (t.constructor) {
                    case l.a:
                        switch (e.constructor) {
                            case u.a:
                                t.targetPosition.isEqual(e.sourcePosition) || e.movedRange.containsPosition(t.targetPosition) ? this._setRelation(t, e, "insertAtSource") : t.targetPosition.isEqual(e.deletionPosition) ? this._setRelation(t, e, "insertBetween") : t.targetPosition.isAfter(e.sourcePosition) && this._setRelation(t, e, "moveTargetAfter");
                                break;
                            case l.a:
                                t.targetPosition.isEqual(e.sourcePosition) || t.targetPosition.isBefore(e.sourcePosition) ? this._setRelation(t, e, "insertBefore") : this._setRelation(t, e, "insertAfter")
                        }
                        break;
                    case h.a:
                        switch (e.constructor) {
                            case u.a:
                                t.splitPosition.isBefore(e.sourcePosition) && this._setRelation(t, e, "splitBefore");
                                break;
                            case l.a:
                                (t.splitPosition.isEqual(e.sourcePosition) || t.splitPosition.isBefore(e.sourcePosition)) && this._setRelation(t, e, "splitBefore")
                        }
                        break;
                    case u.a:
                        switch (e.constructor) {
                            case u.a:
                                t.targetPosition.isEqual(e.sourcePosition) || this._setRelation(t, e, "mergeTargetNotMoved"), t.sourcePosition.isEqual(e.targetPosition) && this._setRelation(t, e, "mergeSourceNotMoved"), t.sourcePosition.isEqual(e.sourcePosition) && this._setRelation(t, e, "mergeSameElement");
                                break;
                            case h.a:
                                t.sourcePosition.isEqual(e.splitPosition) && this._setRelation(t, e, "splitAtSource")
                        }
                        break;
                    case c.a: {
                        const n = t.newRange;
                        if (!n) return;
                        switch (e.constructor) {
                            case l.a: {
                                const i = p.a._createFromPositionAndShift(e.sourcePosition, e.howMany),
                                    o = i.containsPosition(n.start) || i.start.isEqual(n.start),
                                    r = i.containsPosition(n.end) || i.end.isEqual(n.end);
                                !o && !r || i.containsRange(n) || this._setRelation(t, e, {
                                    side: o ? "left" : "right",
                                    path: o ? n.start.path.slice() : n.end.path.slice()
                                });
                                break
                            }
                            case u.a: {
                                const i = n.start.isEqual(e.targetPosition), o = n.start.isEqual(e.deletionPosition),
                                    r = n.end.isEqual(e.deletionPosition), s = n.end.isEqual(e.sourcePosition);
                                (i || o || r || s) && this._setRelation(t, e, {
                                    wasInLeftElement: i,
                                    wasStartBeforeMergedElement: o,
                                    wasEndBeforeMergedElement: r,
                                    wasInRightElement: s
                                });
                                break
                            }
                        }
                        break
                    }
                }
            }

            getContext(t, e, n) {
                return {
                    aIsStrong: n,
                    aWasUndone: this._wasUndone(t),
                    bWasUndone: this._wasUndone(e),
                    abRelation: this._useRelations ? this._getRelation(t, e) : null,
                    baRelation: this._useRelations ? this._getRelation(e, t) : null,
                    forceWeakRemove: this._forceWeakRemove
                }
            }

            _wasUndone(t) {
                const e = this.originalOperations.get(t);
                return e.wasUndone || this._history.isUndoneOperation(e)
            }

            _getRelation(t, e) {
                const n = this.originalOperations.get(e), i = this._history.getUndoneOperation(n);
                if (!i) return null;
                const o = this.originalOperations.get(t), r = this._relations.get(o);
                return r && r.get(i) || null
            }

            _setRelation(t, e, n) {
                const i = this.originalOperations.get(t), o = this.originalOperations.get(e);
                let r = this._relations.get(i);
                r || (r = new Map, this._relations.set(i, r)), r.set(o, n)
            }
        }

        function A(t, e) {
            for (const n of t) n.baseVersion = e++
        }

        function T(t, e) {
            for (let n = 0; n < e; n++) t.push(new m(0))
        }

        function C(t, e, n) {
            const i = t.nodes.getNode(0).getAttribute(e);
            if (i == n) return null;
            const o = new p.a(t.position, t.position.getShiftedBy(t.howMany));
            return new s.a(o, e, i, n, 0)
        }

        function P(t, e) {
            return null === t.targetPosition._getTransformedByDeletion(e.sourcePosition, e.howMany)
        }

        function M(t, e) {
            const n = [];
            for (let i = 0; i < t.length; i++) {
                const o = t[i], r = new l.a(o.start, o.end.offset - o.start.offset, e, 0);
                n.push(r);
                for (let e = i + 1; e < t.length; e++) t[e] = t[e]._getTransformedByMove(r.sourcePosition, r.targetPosition, r.howMany)[0];
                e = e._getTransformedByMove(r.sourcePosition, r.targetPosition, r.howMany)
            }
            return n
        }

        k(s.a, s.a, (t, e, n) => {
            if (t.key === e.key) {
                const i = t.range.getDifference(e.range).map(e => new s.a(e, t.key, t.oldValue, t.newValue, 0)),
                    o = t.range.getIntersection(e.range);
                return o && n.aIsStrong && i.push(new s.a(o, e.key, e.newValue, t.newValue, 0)), 0 == i.length ? [new m(0)] : i
            }
            return [t]
        }), k(s.a, r.a, (t, e) => {
            if (t.range.start.hasSameParentAs(e.position) && t.range.containsPosition(e.position)) {
                const n = t.range._getTransformedByInsertion(e.position, e.howMany, !e.shouldReceiveAttributes).map(e => new s.a(e, t.key, t.oldValue, t.newValue, t.baseVersion));
                if (e.shouldReceiveAttributes) {
                    const i = C(e, t.key, t.oldValue);
                    i && n.unshift(i)
                }
                return n
            }
            return t.range = t.range._getTransformedByInsertion(e.position, e.howMany, !1)[0], [t]
        }), k(s.a, u.a, (t, e) => {
            const n = [];
            t.range.start.hasSameParentAs(e.deletionPosition) && (t.range.containsPosition(e.deletionPosition) || t.range.start.isEqual(e.deletionPosition)) && n.push(p.a._createFromPositionAndShift(e.graveyardPosition, 1));
            const i = t.range._getTransformedByMergeOperation(e);
            return i.isCollapsed || n.push(i), n.map(e => new s.a(e, t.key, t.oldValue, t.newValue, t.baseVersion))
        }), k(s.a, l.a, (t, e) => {
            return function (t, e) {
                const n = p.a._createFromPositionAndShift(e.sourcePosition, e.howMany);
                let i = null, o = [];
                n.containsRange(t, !0) ? i = t : t.start.hasSameParentAs(n.start) ? (o = t.getDifference(n), i = t.getIntersection(n)) : o = [t];
                const r = [];
                for (let t of o) {
                    t = t._getTransformedByDeletion(e.sourcePosition, e.howMany);
                    const n = e.getMovedRangeStart(), i = t.start.hasSameParentAs(n);
                    t = t._getTransformedByInsertion(n, e.howMany, i), r.push(...t)
                }
                i && r.push(i._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany, !1)[0]);
                return r
            }(t.range, e).map(e => new s.a(e, t.key, t.oldValue, t.newValue, t.baseVersion))
        }), k(s.a, h.a, (t, e) => {
            if (t.range.end.isEqual(e.insertionPosition)) return e.graveyardPosition || t.range.end.offset++, [t];
            if (t.range.start.hasSameParentAs(e.splitPosition) && t.range.containsPosition(e.splitPosition)) {
                const n = t.clone();
                return n.range = new p.a(e.moveTargetPosition.clone(), t.range.end._getCombined(e.splitPosition, e.moveTargetPosition)), t.range.end = e.splitPosition.clone(), t.range.end.stickiness = "toPrevious", [t, n]
            }
            return t.range = t.range._getTransformedBySplitOperation(e), [t]
        }), k(r.a, s.a, (t, e) => {
            const n = [t];
            if (t.shouldReceiveAttributes && t.position.hasSameParentAs(e.range.start) && e.range.containsPosition(t.position)) {
                const i = C(t, e.key, e.newValue);
                i && n.push(i)
            }
            return n
        }), k(r.a, r.a, (t, e, n) => t.position.isEqual(e.position) && n.aIsStrong ? [t] : (t.position = t.position._getTransformedByInsertOperation(e), [t])), k(r.a, l.a, (t, e) => (t.position = t.position._getTransformedByMoveOperation(e), [t])), k(r.a, h.a, (t, e) => (t.position = t.position._getTransformedBySplitOperation(e), [t])), k(r.a, u.a, (t, e) => (t.position = t.position._getTransformedByMergeOperation(e), [t])), k(c.a, r.a, (t, e) => (t.oldRange && (t.oldRange = t.oldRange._getTransformedByInsertOperation(e)[0]), t.newRange && (t.newRange = t.newRange._getTransformedByInsertOperation(e)[0]), [t])), k(c.a, c.a, (t, e, n) => {
            if (t.name == e.name) {
                if (!n.aIsStrong) return [new m(0)];
                t.oldRange = e.newRange ? e.newRange.clone() : null
            }
            return [t]
        }), k(c.a, u.a, (t, e) => (t.oldRange && (t.oldRange = t.oldRange._getTransformedByMergeOperation(e)), t.newRange && (t.newRange = t.newRange._getTransformedByMergeOperation(e)), [t])), k(c.a, l.a, (t, e, n) => {
            if (t.oldRange && (t.oldRange = p.a._createFromRanges(t.oldRange._getTransformedByMoveOperation(e))), t.newRange) {
                if (n.abRelation) {
                    const i = p.a._createFromRanges(t.newRange._getTransformedByMoveOperation(e));
                    if ("left" == n.abRelation.side && e.targetPosition.isEqual(t.newRange.start)) return t.newRange.start.path = n.abRelation.path, t.newRange.end = i.end, [t];
                    if ("right" == n.abRelation.side && e.targetPosition.isEqual(t.newRange.end)) return t.newRange.start = i.start, t.newRange.end.path = n.abRelation.path, [t]
                }
                t.newRange = p.a._createFromRanges(t.newRange._getTransformedByMoveOperation(e))
            }
            return [t]
        }), k(c.a, h.a, (t, e, n) => {
            if (t.oldRange && (t.oldRange = t.oldRange._getTransformedBySplitOperation(e)), t.newRange) {
                if (n.abRelation) {
                    const i = t.newRange._getTransformedBySplitOperation(e);
                    return t.newRange.start.isEqual(e.splitPosition) && n.abRelation.wasStartBeforeMergedElement ? t.newRange.start = g.a._createAt(e.insertionPosition) : t.newRange.start.isEqual(e.splitPosition) && !n.abRelation.wasInLeftElement && (t.newRange.start = g.a._createAt(e.moveTargetPosition)), t.newRange.end.isEqual(e.splitPosition) && n.abRelation.wasInRightElement ? t.newRange.end = g.a._createAt(e.moveTargetPosition) : t.newRange.end.isEqual(e.splitPosition) && n.abRelation.wasEndBeforeMergedElement ? t.newRange.end = g.a._createAt(e.insertionPosition) : t.newRange.end = i.end, [t]
                }
                t.newRange = t.newRange._getTransformedBySplitOperation(e)
            }
            return [t]
        }), k(u.a, r.a, (t, e) => (t.sourcePosition.hasSameParentAs(e.position) && (t.howMany += e.howMany), t.sourcePosition = t.sourcePosition._getTransformedByInsertOperation(e), t.targetPosition = t.targetPosition._getTransformedByInsertOperation(e), [t])), k(u.a, u.a, (t, e, n) => {
            if (t.sourcePosition.isEqual(e.sourcePosition) && t.targetPosition.isEqual(e.targetPosition)) {
                if (n.bWasUndone) {
                    const n = e.graveyardPosition.path.slice();
                    return n.push(0), t.sourcePosition = new g.a(e.graveyardPosition.root, n), t.howMany = 0, [t]
                }
                return [new m(0)]
            }
            if (t.sourcePosition.isEqual(e.sourcePosition) && !t.targetPosition.isEqual(e.targetPosition) && !n.bWasUndone && "splitAtSource" != n.abRelation) {
                const i = "$graveyard" == t.targetPosition.root.rootName,
                    o = "$graveyard" == e.targetPosition.root.rootName;
                if (o && !i || !(i && !o) && n.aIsStrong) {
                    const n = e.targetPosition._getTransformedByMergeOperation(e),
                        i = t.targetPosition._getTransformedByMergeOperation(e);
                    return [new l.a(n, t.howMany, i, 0)]
                }
                return [new m(0)]
            }
            return t.sourcePosition.hasSameParentAs(e.targetPosition) && (t.howMany += e.howMany), t.sourcePosition = t.sourcePosition._getTransformedByMergeOperation(e), t.targetPosition = t.targetPosition._getTransformedByMergeOperation(e), t.graveyardPosition.isEqual(e.graveyardPosition) && n.aIsStrong || (t.graveyardPosition = t.graveyardPosition._getTransformedByMergeOperation(e)), [t]
        }), k(u.a, l.a, (t, e, n) => {
            const i = p.a._createFromPositionAndShift(e.sourcePosition, e.howMany);
            return "remove" == e.type && !n.bWasUndone && !n.forceWeakRemove && t.deletionPosition.hasSameParentAs(e.sourcePosition) && i.containsPosition(t.sourcePosition) ? [new m(0)] : (t.sourcePosition.hasSameParentAs(e.targetPosition) && (t.howMany += e.howMany), t.sourcePosition.hasSameParentAs(e.sourcePosition) && (t.howMany -= e.howMany), t.sourcePosition = t.sourcePosition._getTransformedByMoveOperation(e), t.targetPosition = t.targetPosition._getTransformedByMoveOperation(e), t.graveyardPosition.isEqual(e.targetPosition) || (t.graveyardPosition = t.graveyardPosition._getTransformedByMoveOperation(e)), [t])
        }), k(u.a, h.a, (t, e, n) => {
            if (e.graveyardPosition && (t.graveyardPosition = t.graveyardPosition._getTransformedByDeletion(e.graveyardPosition, 1), t.deletionPosition.isEqual(e.graveyardPosition) && (t.howMany = e.howMany)), t.targetPosition.isEqual(e.splitPosition)) {
                const i = 0 != e.howMany, o = e.graveyardPosition && t.deletionPosition.isEqual(e.graveyardPosition);
                if (i || o || "mergeTargetNotMoved" == n.abRelation) return t.sourcePosition = t.sourcePosition._getTransformedBySplitOperation(e), [t]
            }
            if (t.sourcePosition.isEqual(e.splitPosition)) {
                if ("mergeSourceNotMoved" == n.abRelation) return t.howMany = 0, t.targetPosition = t.targetPosition._getTransformedBySplitOperation(e), [t];
                if ("mergeSameElement" == n.abRelation || t.sourcePosition.offset > 0) return t.sourcePosition = e.moveTargetPosition.clone(), t.targetPosition = t.targetPosition._getTransformedBySplitOperation(e), [t]
            }
            return t.sourcePosition.hasSameParentAs(e.splitPosition) && (t.howMany = e.splitPosition.offset), t.sourcePosition = t.sourcePosition._getTransformedBySplitOperation(e), t.targetPosition = t.targetPosition._getTransformedBySplitOperation(e), [t]
        }), k(l.a, r.a, (t, e) => {
            const n = p.a._createFromPositionAndShift(t.sourcePosition, t.howMany)._getTransformedByInsertOperation(e, !1)[0];
            return t.sourcePosition = n.start, t.howMany = n.end.offset - n.start.offset, t.targetPosition.isEqual(e.position) || (t.targetPosition = t.targetPosition._getTransformedByInsertOperation(e)), [t]
        }), k(l.a, l.a, (t, e, n) => {
            const i = p.a._createFromPositionAndShift(t.sourcePosition, t.howMany),
                o = p.a._createFromPositionAndShift(e.sourcePosition, e.howMany);
            let r, s = n.aIsStrong, a = !n.aIsStrong;
            if ("insertBefore" == n.abRelation || "insertAfter" == n.baRelation ? a = !0 : "insertAfter" != n.abRelation && "insertBefore" != n.baRelation || (a = !1), r = t.targetPosition.isEqual(e.targetPosition) && a ? t.targetPosition._getTransformedByDeletion(e.sourcePosition, e.howMany) : t.targetPosition._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), P(t, e) && P(e, t)) return [e.getReversed()];
            if (i.containsPosition(e.targetPosition) && i.containsRange(o, !0)) return i.start = i.start._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), i.end = i.end._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), M([i], r);
            if (o.containsPosition(t.targetPosition) && o.containsRange(i, !0)) return i.start = i.start._getCombined(e.sourcePosition, e.getMovedRangeStart()), i.end = i.end._getCombined(e.sourcePosition, e.getMovedRangeStart()), M([i], r);
            const c = Object(b.a)(t.sourcePosition.getParentPath(), e.sourcePosition.getParentPath());
            if ("prefix" == c || "extension" == c) return i.start = i.start._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), i.end = i.end._getTransformedByMove(e.sourcePosition, e.targetPosition, e.howMany), M([i], r);
            "remove" != t.type || "remove" == e.type || n.aWasUndone || n.forceWeakRemove ? "remove" == t.type || "remove" != e.type || n.bWasUndone || n.forceWeakRemove || (s = !1) : s = !0;
            const l = [], d = i.getDifference(o);
            for (const t of d) {
                t.start = t.start._getTransformedByDeletion(e.sourcePosition, e.howMany), t.end = t.end._getTransformedByDeletion(e.sourcePosition, e.howMany);
                const n = "same" == Object(b.a)(t.start.getParentPath(), e.getMovedRangeStart().getParentPath()),
                    i = t._getTransformedByInsertion(e.getMovedRangeStart(), e.howMany, n);
                l.push(...i)
            }
            const u = i.getIntersection(o);
            return null !== u && s && (u.start = u.start._getCombined(e.sourcePosition, e.getMovedRangeStart()), u.end = u.end._getCombined(e.sourcePosition, e.getMovedRangeStart()), 0 === l.length ? l.push(u) : 1 == l.length ? o.start.isBefore(i.start) || o.start.isEqual(i.start) ? l.unshift(u) : l.push(u) : l.splice(1, 0, u)), 0 === l.length ? [new m(t.baseVersion)] : M(l, r)
        }), k(l.a, h.a, (t, e, n) => {
            let i = t.targetPosition.clone();
            t.targetPosition.isEqual(e.insertionPosition) && e.graveyardPosition && "moveTargetAfter" != n.abRelation || (i = t.targetPosition._getTransformedBySplitOperation(e));
            const o = p.a._createFromPositionAndShift(t.sourcePosition, t.howMany);
            if (o.end.isEqual(e.insertionPosition)) return e.graveyardPosition || t.howMany++, t.targetPosition = i, [t];
            if (o.start.hasSameParentAs(e.splitPosition) && o.containsPosition(e.splitPosition)) {
                let t = new p.a(e.splitPosition, o.end);
                return t = t._getTransformedBySplitOperation(e), M([new p.a(o.start, e.splitPosition), t], i)
            }
            t.targetPosition.isEqual(e.splitPosition) && "insertAtSource" == n.abRelation && (i = e.moveTargetPosition), t.targetPosition.isEqual(e.insertionPosition) && "insertBetween" == n.abRelation && (i = t.targetPosition);
            const r = [o._getTransformedBySplitOperation(e)];
            if (e.graveyardPosition) {
                const i = o.start.isEqual(e.graveyardPosition) || o.containsPosition(e.graveyardPosition);
                t.howMany > 1 && i && !n.aWasUndone && r.push(p.a._createFromPositionAndShift(e.insertionPosition, 1))
            }
            return M(r, i)
        }), k(l.a, u.a, (t, e, n) => {
            const i = p.a._createFromPositionAndShift(t.sourcePosition, t.howMany);
            if (e.deletionPosition.hasSameParentAs(t.sourcePosition) && i.containsPosition(e.sourcePosition)) if ("remove" != t.type || n.forceWeakRemove) {
                if (1 == t.howMany) return n.bWasUndone ? (t.sourcePosition = e.graveyardPosition.clone(), t.targetPosition = t.targetPosition._getTransformedByMergeOperation(e), [t]) : [new m(0)]
            } else if (!n.aWasUndone) {
                const n = [];
                let i = e.graveyardPosition.clone(), o = e.targetPosition._getTransformedByMergeOperation(e);
                t.howMany > 1 && (n.push(new l.a(t.sourcePosition, t.howMany - 1, t.targetPosition, 0)), i = i._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany - 1), o = o._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany - 1));
                const r = e.deletionPosition._getCombined(t.sourcePosition, t.targetPosition), s = new l.a(i, 1, r, 0),
                    a = s.getMovedRangeStart().path.slice();
                a.push(0);
                const c = new g.a(s.targetPosition.root, a);
                o = o._getTransformedByMove(i, r, 1);
                const d = new l.a(o, e.howMany, c, 0);
                return n.push(s), n.push(d), n
            }
            const o = p.a._createFromPositionAndShift(t.sourcePosition, t.howMany)._getTransformedByMergeOperation(e);
            return t.sourcePosition = o.start, t.howMany = o.end.offset - o.start.offset, t.targetPosition = t.targetPosition._getTransformedByMergeOperation(e), [t]
        }), k(a.a, r.a, (t, e) => (t.position = t.position._getTransformedByInsertOperation(e), [t])), k(a.a, u.a, (t, e) => t.position.isEqual(e.deletionPosition) ? (t.position = e.graveyardPosition.clone(), t.position.stickiness = "toNext", [t]) : (t.position = t.position._getTransformedByMergeOperation(e), [t])), k(a.a, l.a, (t, e) => (t.position = t.position._getTransformedByMoveOperation(e), [t])), k(a.a, a.a, (t, e, n) => {
            if (t.position.isEqual(e.position)) {
                if (!n.aIsStrong) return [new m(0)];
                t.oldName = e.newName
            }
            return [t]
        }), k(a.a, h.a, (t, e) => {
            const n = t.position.path, i = e.splitPosition.getParentPath();
            if ("same" == Object(b.a)(n, i) && !e.graveyardPosition) {
                return [t, new a.a(t.position.getShiftedBy(1), t.oldName, t.newName, 0)]
            }
            return t.position = t.position._getTransformedBySplitOperation(e), [t]
        }), k(d.a, d.a, (t, e, n) => {
            if (t.root === e.root && t.key === e.key) {
                if (!n.aIsStrong || t.newValue === e.newValue) return [new m(0)];
                t.oldValue = e.newValue
            }
            return [t]
        }), k(h.a, r.a, (t, e) => (t.splitPosition.hasSameParentAs(e.position) && t.splitPosition.offset < e.position.offset && (t.howMany += e.howMany), t.splitPosition = t.splitPosition._getTransformedByInsertOperation(e), t.insertionPosition = h.a.getInsertionPosition(t.splitPosition), [t])), k(h.a, u.a, (t, e, n) => {
            if (!t.graveyardPosition && !n.bWasUndone && t.splitPosition.hasSameParentAs(e.sourcePosition)) {
                const n = e.graveyardPosition.path.slice();
                n.push(0);
                const i = new g.a(e.graveyardPosition.root, n),
                    o = h.a.getInsertionPosition(new g.a(e.graveyardPosition.root, n)), r = new h.a(i, 0, null, 0);
                return r.insertionPosition = o, t.splitPosition = t.splitPosition._getTransformedByMergeOperation(e), t.insertionPosition = h.a.getInsertionPosition(t.splitPosition), t.graveyardPosition = r.insertionPosition.clone(), t.graveyardPosition.stickiness = "toNext", [r, t]
            }
            return t.splitPosition.hasSameParentAs(e.deletionPosition) && !t.splitPosition.isAfter(e.deletionPosition) && t.howMany--, t.splitPosition.hasSameParentAs(e.targetPosition) && (t.howMany += e.howMany), t.splitPosition = t.splitPosition._getTransformedByMergeOperation(e), t.insertionPosition = h.a.getInsertionPosition(t.splitPosition), t.graveyardPosition && (t.graveyardPosition = t.graveyardPosition._getTransformedByMergeOperation(e)), [t]
        }), k(h.a, l.a, (t, e, n) => {
            const i = p.a._createFromPositionAndShift(e.sourcePosition, e.howMany);
            if (t.graveyardPosition) {
                const o = i.start.isEqual(t.graveyardPosition) || i.containsPosition(t.graveyardPosition);
                if (!n.bWasUndone && o) {
                    const n = t.splitPosition._getTransformedByMoveOperation(e),
                        i = t.graveyardPosition._getTransformedByMoveOperation(e), o = i.path.slice();
                    o.push(0);
                    const r = new g.a(i.root, o);
                    return [new l.a(n, t.howMany, r, 0)]
                }
                t.graveyardPosition = t.graveyardPosition._getTransformedByMoveOperation(e)
            }
            if (t.splitPosition.hasSameParentAs(e.sourcePosition) && i.containsPosition(t.splitPosition)) {
                const n = e.howMany - (t.splitPosition.offset - e.sourcePosition.offset);
                return t.howMany -= n, t.splitPosition.hasSameParentAs(e.targetPosition) && t.splitPosition.offset < e.targetPosition.offset && (t.howMany += e.howMany), t.splitPosition = e.sourcePosition.clone(), t.insertionPosition = h.a.getInsertionPosition(t.splitPosition), [t]
            }
            return !t.splitPosition.isEqual(e.targetPosition) || "insertAtSource" != n.baRelation && "splitBefore" != n.abRelation ? (e.sourcePosition.isEqual(e.targetPosition) || (t.splitPosition.hasSameParentAs(e.sourcePosition) && t.splitPosition.offset <= e.sourcePosition.offset && (t.howMany -= e.howMany), t.splitPosition.hasSameParentAs(e.targetPosition) && t.splitPosition.offset < e.targetPosition.offset && (t.howMany += e.howMany)), t.splitPosition.stickiness = "toNone", t.splitPosition = t.splitPosition._getTransformedByMoveOperation(e), t.splitPosition.stickiness = "toNext", t.graveyardPosition ? t.insertionPosition = t.insertionPosition._getTransformedByMoveOperation(e) : t.insertionPosition = h.a.getInsertionPosition(t.splitPosition), [t]) : (t.howMany += e.howMany, t.splitPosition = t.splitPosition._getTransformedByDeletion(e.sourcePosition, e.howMany), t.insertionPosition = h.a.getInsertionPosition(t.splitPosition), [t])
        }), k(h.a, h.a, (t, e, n) => {
            if (t.splitPosition.isEqual(e.splitPosition)) {
                if (!t.graveyardPosition && !e.graveyardPosition) return [new m(0)];
                if (t.graveyardPosition && e.graveyardPosition && t.graveyardPosition.isEqual(e.graveyardPosition)) return [new m(0)];
                if ("splitBefore" == n.abRelation) return t.howMany = 0, t.graveyardPosition = t.graveyardPosition._getTransformedBySplitOperation(e), [t]
            }
            if (t.graveyardPosition && e.graveyardPosition && t.graveyardPosition.isEqual(e.graveyardPosition)) {
                const i = "$graveyard" == t.splitPosition.root.rootName,
                    o = "$graveyard" == e.splitPosition.root.rootName;
                if (o && !i || !(i && !o) && n.aIsStrong) {
                    const n = [];
                    return e.howMany && n.push(new l.a(e.moveTargetPosition, e.howMany, e.splitPosition, 0)), t.howMany && n.push(new l.a(t.splitPosition, t.howMany, t.moveTargetPosition, 0)), n
                }
                return [new m(0)]
            }
            if (t.graveyardPosition && (t.graveyardPosition = t.graveyardPosition._getTransformedBySplitOperation(e)), t.splitPosition.isEqual(e.insertionPosition) && "splitBefore" == n.abRelation) return t.howMany++, [t];
            if (e.splitPosition.isEqual(t.insertionPosition) && "splitBefore" == n.baRelation) {
                const n = e.insertionPosition.path.slice();
                n.push(0);
                const i = new g.a(e.insertionPosition.root, n);
                return [t, new l.a(t.insertionPosition, 1, i, 0)]
            }
            return t.splitPosition.hasSameParentAs(e.splitPosition) && t.splitPosition.offset < e.splitPosition.offset && (t.howMany -= e.howMany), t.splitPosition = t.splitPosition._getTransformedBySplitOperation(e), t.insertionPosition = h.a.getInsertionPosition(t.splitPosition), [t]
        });

        class O extends o.a {
            constructor(t) {
                super(t), this._stack = [], this._createdBatches = new WeakSet, this.refresh()
            }

            refresh() {
                this.isEnabled = this._stack.length > 0
            }

            addBatch(t) {
                const e = this.editor.model.document.selection,
                    n = {ranges: e.hasOwnRange ? Array.from(e.getRanges()) : [], isBackward: e.isBackward};
                this._stack.push({batch: t, selection: n}), this.refresh()
            }

            clearStack() {
                this._stack = [], this.refresh()
            }

            _restoreSelection(t, e, n) {
                const i = this.editor.model, o = i.document, r = [];
                for (const e of t) {
                    const t = S(e, n).find(t => t.start.root != o.graveyard);
                    t && r.push(t)
                }
                r.length && i.change(t => {
                    t.setSelection(r, {backward: e})
                })
            }

            _undo(t, e) {
                const n = this.editor.model, i = n.document;
                this._createdBatches.add(e);
                const o = t.operations.slice().filter(t => t.isDocumentOperation);
                o.reverse();
                for (const t of o) {
                    const o = t.baseVersion + 1, r = Array.from(i.history.getOperations(o)),
                        s = y([t.getReversed()], r, {
                            useRelations: !0,
                            document: this.editor.model.document,
                            padWithNoOps: !1,
                            forceWeakRemove: !0
                        }).operationsA;
                    for (const o of s) e.addOperation(o), n.applyOperation(o), i.history.setOperationAsUndone(t, o)
                }
            }
        }

        function S(t, e) {
            const n = t.getTransformedByOperations(e);
            n.sort((t, e) => t.start.isBefore(e.start) ? -1 : 1);
            for (let t = 1; t < n.length; t++) {
                const e = n[t - 1], i = n[t];
                e.end.isTouching(i.start) && (e.end = i.end, n.splice(t, 1), t--)
            }
            return n
        }

        class E extends O {
            execute(t = null) {
                const e = t ? this._stack.findIndex(e => e.batch == t) : this._stack.length - 1,
                    n = this._stack.splice(e, 1)[0], i = this.editor.model.createBatch("transparent");
                this.editor.model.enqueueChange(i, () => {
                    this._undo(n.batch, i);
                    const t = this.editor.model.document.history.getOperations(n.batch.baseVersion);
                    this._restoreSelection(n.selection.ranges, n.selection.isBackward, t), this.fire("revert", n.batch, i)
                }), this.refresh()
            }
        }

        class I extends O {
            execute() {
                const t = this._stack.pop(), e = this.editor.model.createBatch("transparent");
                this.editor.model.enqueueChange(e, () => {
                    const n = t.batch.operations[t.batch.operations.length - 1].baseVersion + 1,
                        i = this.editor.model.document.history.getOperations(n);
                    this._restoreSelection(t.selection.ranges, t.selection.isBackward, i), this._undo(t.batch, e)
                }), this.refresh()
            }
        }

        class N extends i.a {
            constructor(t) {
                super(t), this._batchRegistry = new WeakSet
            }

            init() {
                const t = this.editor;
                this._undoCommand = new E(t), this._redoCommand = new I(t), t.commands.add("undo", this._undoCommand), t.commands.add("redo", this._redoCommand), this.listenTo(t.model, "applyOperation", (t, e) => {
                    const n = e[0];
                    if (!n.isDocumentOperation) return;
                    const i = n.batch, o = this._redoCommand._createdBatches.has(i),
                        r = this._undoCommand._createdBatches.has(i);
                    this._batchRegistry.has(i) || "transparent" == i.type && !o && !r || (o ? this._undoCommand.addBatch(i) : r || (this._undoCommand.addBatch(i), this._redoCommand.clearStack()), this._batchRegistry.add(i))
                }, {priority: "highest"}), this.listenTo(this._undoCommand, "revert", (t, e, n) => {
                    this._redoCommand.addBatch(n)
                }), t.keystrokes.set("CTRL+Z", "undo"), t.keystrokes.set("CTRL+Y", "redo"), t.keystrokes.set("CTRL+SHIFT+Z", "redo")
            }
        }

        var j = n(11),
            R = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 9.367l2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>',
            D = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.958 9.367l-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>';

        class L extends i.a {
            init() {
                const t = this.editor, e = t.locale, n = t.t, i = "ltr" == e.uiLanguageDirection ? R : D,
                    o = "ltr" == e.uiLanguageDirection ? D : R;
                this._addButton("undo", n("bt"), "CTRL+Z", i), this._addButton("redo", n("bu"), "CTRL+Y", o)
            }

            _addButton(t, e, n, i) {
                const o = this.editor;
                o.ui.componentFactory.add(t, r => {
                    const s = o.commands.get(t), a = new j.a(r);
                    return a.set({
                        label: e,
                        icon: i,
                        keystroke: n,
                        tooltip: !0
                    }), a.bind("isEnabled").to(s, "isEnabled"), this.listenTo(a, "execute", () => o.execute(t)), a
                })
            }
        }

        n.d(e, "a", function () {
            return V
        });

        class V extends i.a {
            static get requires() {
                return [N, L]
            }

            static get pluginName() {
                return "Undo"
            }
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(113), o = n(32), r = n(77);
        var s = function (t) {
            var e = [];
            if (null != t) for (var n in Object(t)) e.push(n);
            return e
        }, a = Object.prototype.hasOwnProperty;
        var c = function (t) {
            if (!Object(o.a)(t)) return s(t);
            var e = Object(r.a)(t), n = [];
            for (var i in t) ("constructor" != i || !e && a.call(t, i)) && n.push(i);
            return n
        }, l = n(78);
        e.a = function (t) {
            return Object(l.a)(t) ? Object(i.a)(t, !0) : c(t)
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(113), o = n(77), r = n(99), s = Object(r.a)(Object.keys, Object), a = Object.prototype.hasOwnProperty;
        var c = function (t) {
            if (!Object(o.a)(t)) return s(t);
            var e = [];
            for (var n in Object(t)) a.call(t, n) && "constructor" != n && e.push(n);
            return e
        }, l = n(78);
        e.a = function (t) {
            return Object(l.a)(t) ? Object(i.a)(t) : c(t)
        }
    }, function (t, e, n) {
        "use strict";
        var i = function (t, e) {
                for (var n = -1, i = null == t ? 0 : t.length, o = 0, r = []; ++n < i;) {
                    var s = t[n];
                    e(s, n, t) && (r[o++] = s)
                }
                return r
            }, o = n(103), r = Object.prototype.propertyIsEnumerable, s = Object.getOwnPropertySymbols,
            a = s ? function (t) {
                return null == t ? [] : (t = Object(t), i(s(t), function (e) {
                    return r.call(t, e)
                }))
            } : o.a;
        e.a = a
    }, function (t, e, n) {
        "use strict";
        var i = n(45), o = function () {
            try {
                var t = Object(i.a)(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {
            }
        }();
        e.a = o
    }, function (t, e, n) {
        "use strict";
        var i = n(22).a.Uint8Array;
        e.a = i
    }, function (t, e, n) {
        "use strict";

        function i(t) {
            const e = Object.prototype.toString.apply(t);
            return "[object Window]" == e || "[object global]" == e
        }

        n.d(e, "a", function () {
            return i
        })
    }, function (t, e, n) {
        "use strict";
        var i = n(71);
        var o = function () {
            this.__data__ = new i.a, this.size = 0
        };
        var r = function (t) {
            var e = this.__data__, n = e.delete(t);
            return this.size = e.size, n
        };
        var s = function (t) {
            return this.__data__.get(t)
        };
        var a = function (t) {
            return this.__data__.has(t)
        }, c = n(73), l = n(111), d = 200;
        var u = function (t, e) {
            var n = this.__data__;
            if (n instanceof i.a) {
                var o = n.__data__;
                if (!c.a || o.length < d - 1) return o.push([t, e]), this.size = ++n.size, this;
                n = this.__data__ = new l.a(o)
            }
            return n.set(t, e), this.size = n.size, this
        };

        function h(t) {
            var e = this.__data__ = new i.a(t);
            this.size = e.size
        }

        h.prototype.clear = o, h.prototype.delete = r, h.prototype.get = s, h.prototype.has = a, h.prototype.set = u;
        e.a = h
    }, function (t, e, n) {
        "use strict";
        var i = function () {
            return function t() {
                t.called = !0
            }
        };
        n.d(e, "a", function () {
            return o
        });

        class o {
            constructor(t, e) {
                this.source = t, this.name = e, this.path = [], this.stop = i(), this.off = i()
            }
        }
    }, function (t, e, n) {
        "use strict";
        (function (t) {
            var e = n(122), i = n(0);
            const o = "object" == typeof window ? window : t;
            if (o.CKEDITOR_VERSION) throw new i.b("ckeditor-duplicated-modules: Some CKEditor 5 modules are duplicated.", null);
            o.CKEDITOR_VERSION = e.a
        }).call(this, n(117))
    }, function (t, e, n) {
        "use strict";
        var i = n(107), o = n(87), r = n(86);
        e.a = function (t) {
            return Object(i.a)(t, r.a, o.a)
        }
    }, function (t, e, n) {
        "use strict";

        function i(t) {
            let e = 0;
            for (const n of t) e++;
            return e
        }

        n.d(e, "a", function () {
            return i
        })
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        });
        var i = n(29), o = n(0);

        class r extends i.a {
            constructor(t, e, n, i, o) {
                super(o), this.root = t, this.key = e, this.oldValue = n, this.newValue = i
            }

            get type() {
                return null === this.oldValue ? "addRootAttribute" : null === this.newValue ? "removeRootAttribute" : "changeRootAttribute"
            }

            clone() {
                return new r(this.root, this.key, this.oldValue, this.newValue, this.baseVersion)
            }

            getReversed() {
                return new r(this.root, this.key, this.newValue, this.oldValue, this.baseVersion + 1)
            }

            _validate() {
                if (this.root != this.root.root || this.root.is("documentFragment")) throw new o.b("rootattribute-operation-not-a-root: The element to change is not a root element.", this, {
                    root: this.root,
                    key: this.key
                });
                if (null !== this.oldValue && this.root.getAttribute(this.key) !== this.oldValue) throw new o.b("rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.", this, {
                    root: this.root,
                    key: this.key
                });
                if (null === this.oldValue && null !== this.newValue && this.root.hasAttribute(this.key)) throw new o.b("rootattribute-operation-attribute-exists: The attribute with given key already exists.", this, {
                    root: this.root,
                    key: this.key
                })
            }

            _execute() {
                null !== this.newValue ? this.root._setAttribute(this.key, this.newValue) : this.root._removeAttribute(this.key)
            }

            toJSON() {
                const t = super.toJSON();
                return t.root = this.root.toJSON(), t
            }

            static get className() {
                return "RootAttributeOperation"
            }

            static fromJSON(t, e) {
                if (!e.getRoot(t.root)) throw new o.b("rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.", this, {rootName: t.root});
                return new r(e.getRoot(t.root), t.key, t.oldValue, t.newValue, t.baseVersion)
            }
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(47), o = n(76), r = n(31), s = "[object Object]", a = Function.prototype, c = Object.prototype,
            l = a.toString, d = c.hasOwnProperty, u = l.call(Object);
        e.a = function (t) {
            if (!Object(r.a)(t) || Object(i.a)(t) != s) return !1;
            var e = Object(o.a)(t);
            if (null === e) return !0;
            var n = d.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && l.call(n) == u
        }
    }, function (t, e, n) {
        "use strict";
        (function (t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.a = n
        }).call(this, n(117))
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) {
            return function (n) {
                return t(e(n))
            }
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(47), o = n(32), r = "[object AsyncFunction]", s = "[object Function]",
            a = "[object GeneratorFunction]", c = "[object Proxy]";
        e.a = function (t) {
            if (!Object(o.a)(t)) return !1;
            var e = Object(i.a)(t);
            return e == s || e == a || e == r || e == c
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(88);
        e.a = function (t, e, n) {
            "__proto__" == e && i.a ? Object(i.a)(t, e, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : t[e] = n
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(101), o = n(68), r = Object.prototype.hasOwnProperty;
        e.a = function (t, e, n) {
            var s = t[e];
            r.call(t, e) && Object(o.a)(s, n) && (void 0 !== n || e in t) || Object(i.a)(t, e, n)
        }
    }, function (t, e, n) {
        "use strict";
        e.a = function () {
            return []
        }
    }, function (t, e, n) {
        "use strict";
        e.a = function (t, e) {
            for (var n = -1, i = e.length, o = t.length; ++n < i;) t[o + n] = e[n];
            return t
        }
    }, function (t, e, n) {
        "use strict";
        var i = 9007199254740991;
        e.a = function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= i
        }
    }, function (t, e, n) {
        "use strict";
        var i = 9007199254740991, o = /^(?:0|[1-9]\d*)$/;
        e.a = function (t, e) {
            var n = typeof t;
            return !!(e = null == e ? i : e) && ("number" == n || "symbol" != n && o.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(104), o = n(50);
        e.a = function (t, e, n) {
            var r = e(t);
            return Object(o.a)(t) ? r : Object(i.a)(r, n(t))
        }
    }, function (t, e, n) {
        "use strict";

        function i(t) {
            const e = new Map;
            for (const n in t) e.set(n, t[n]);
            return e
        }

        n.d(e, "a", function () {
            return i
        })
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return s
        });
        var i = n(39), o = n(5), r = n(8);

        class s {
            constructor(t = null, e, n) {
                this._selection = new i.a, this._selection.delegate("change").to(this), this._selection.setTo(t, e, n)
            }

            get isFake() {
                return this._selection.isFake
            }

            get fakeSelectionLabel() {
                return this._selection.fakeSelectionLabel
            }

            get anchor() {
                return this._selection.anchor
            }

            get focus() {
                return this._selection.focus
            }

            get isCollapsed() {
                return this._selection.isCollapsed
            }

            get rangeCount() {
                return this._selection.rangeCount
            }

            get isBackward() {
                return this._selection.isBackward
            }

            get editableElement() {
                return this._selection.editableElement
            }

            get _ranges() {
                return this._selection._ranges
            }

            * getRanges() {
                yield* this._selection.getRanges()
            }

            getFirstRange() {
                return this._selection.getFirstRange()
            }

            getLastRange() {
                return this._selection.getLastRange()
            }

            getFirstPosition() {
                return this._selection.getFirstPosition()
            }

            getLastPosition() {
                return this._selection.getLastPosition()
            }

            getSelectedElement() {
                return this._selection.getSelectedElement()
            }

            isEqual(t) {
                return this._selection.isEqual(t)
            }

            isSimilar(t) {
                return this._selection.isSimilar(t)
            }

            is(t) {
                return "selection" == t || "documentSelection" == t || "view:selection" == t || "view:documentSelection" == t
            }

            _setTo(t, e, n) {
                this._selection.setTo(t, e, n)
            }

            _setFocus(t, e) {
                this._selection.setFocus(t, e)
            }
        }

        Object(o.a)(s, r.c)
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return o
        });
        var i = n(6);
        n(140);

        class o extends i.a {
            constructor(t) {
                super(t), this.set("text", ""), this.set("position", "s");
                const e = this.bindTemplate;
                this.setTemplate({
                    tag: "span",
                    attributes: {class: ["ck", "ck-tooltip", e.to("position", t => "ck-tooltip_" + t), e.if("text", "ck-hidden", t => !t.trim())]},
                    children: [{
                        tag: "span",
                        attributes: {class: ["ck", "ck-tooltip__text"]},
                        children: [{text: e.to("text")}]
                    }]
                })
            }
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(45), o = Object(i.a)(Object, "create");
        var r = function () {
            this.__data__ = o ? o(null) : {}, this.size = 0
        };
        var s = function (t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0, e
        }, a = "__lodash_hash_undefined__", c = Object.prototype.hasOwnProperty;
        var l = function (t) {
            var e = this.__data__;
            if (o) {
                var n = e[t];
                return n === a ? void 0 : n
            }
            return c.call(e, t) ? e[t] : void 0
        }, d = Object.prototype.hasOwnProperty;
        var u = function (t) {
            var e = this.__data__;
            return o ? void 0 !== e[t] : d.call(e, t)
        }, h = "__lodash_hash_undefined__";
        var f = function (t, e) {
            var n = this.__data__;
            return this.size += this.has(t) ? 0 : 1, n[t] = o && void 0 === e ? h : e, this
        };

        function m(t) {
            var e = -1, n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var i = t[e];
                this.set(i[0], i[1])
            }
        }

        m.prototype.clear = r, m.prototype.delete = s, m.prototype.get = l, m.prototype.has = u, m.prototype.set = f;
        var p = m, g = n(71), b = n(73);
        var w = function () {
            this.size = 0, this.__data__ = {hash: new p, map: new (b.a || g.a), string: new p}
        };
        var k = function (t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
        };
        var _ = function (t, e) {
            var n = t.__data__;
            return k(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
        };
        var v = function (t) {
            var e = _(this, t).delete(t);
            return this.size -= e ? 1 : 0, e
        };
        var y = function (t) {
            return _(this, t).get(t)
        };
        var x = function (t) {
            return _(this, t).has(t)
        };
        var A = function (t, e) {
            var n = _(this, t), i = n.size;
            return n.set(t, e), this.size += n.size == i ? 0 : 1, this
        };

        function T(t) {
            var e = -1, n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var i = t[e];
                this.set(i[0], i[1])
            }
        }

        T.prototype.clear = w, T.prototype.delete = v, T.prototype.get = y, T.prototype.has = x, T.prototype.set = A;
        e.a = T
    }, function (t, e, n) {
        "use strict";
        var i = n(91), o = n(111), r = "__lodash_hash_undefined__";
        var s = function (t) {
            return this.__data__.set(t, r), this
        };
        var a = function (t) {
            return this.__data__.has(t)
        };

        function c(t) {
            var e = -1, n = null == t ? 0 : t.length;
            for (this.__data__ = new o.a; ++e < n;) this.add(t[e])
        }

        c.prototype.add = c.prototype.push = s, c.prototype.has = a;
        var l = c;
        var d = function (t, e) {
            for (var n = -1, i = null == t ? 0 : t.length; ++n < i;) if (e(t[n], n, t)) return !0;
            return !1
        };
        var u = function (t, e) {
            return t.has(e)
        }, h = 1, f = 2;
        var m = function (t, e, n, i, o, r) {
            var s = n & h, a = t.length, c = e.length;
            if (a != c && !(s && c > a)) return !1;
            var m = r.get(t);
            if (m && r.get(e)) return m == e;
            var p = -1, g = !0, b = n & f ? new l : void 0;
            for (r.set(t, e), r.set(e, t); ++p < a;) {
                var w = t[p], k = e[p];
                if (i) var _ = s ? i(k, w, p, e, t, r) : i(w, k, p, t, e, r);
                if (void 0 !== _) {
                    if (_) continue;
                    g = !1;
                    break
                }
                if (b) {
                    if (!d(e, function (t, e) {
                        if (!u(b, e) && (w === t || o(w, t, n, i, r))) return b.push(e)
                    })) {
                        g = !1;
                        break
                    }
                } else if (w !== k && !o(w, k, n, i, r)) {
                    g = !1;
                    break
                }
            }
            return r.delete(t), r.delete(e), g
        }, p = n(40), g = n(89), b = n(68);
        var w = function (t) {
            var e = -1, n = Array(t.size);
            return t.forEach(function (t, i) {
                n[++e] = [i, t]
            }), n
        };
        var k = function (t) {
                var e = -1, n = Array(t.size);
                return t.forEach(function (t) {
                    n[++e] = t
                }), n
            }, _ = 1, v = 2, y = "[object Boolean]", x = "[object Date]", A = "[object Error]", T = "[object Map]",
            C = "[object Number]", P = "[object RegExp]", M = "[object Set]", O = "[object String]",
            S = "[object Symbol]", E = "[object ArrayBuffer]", I = "[object DataView]",
            N = p.a ? p.a.prototype : void 0, j = N ? N.valueOf : void 0;
        var R = function (t, e, n, i, o, r, s) {
            switch (n) {
                case I:
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                    t = t.buffer, e = e.buffer;
                case E:
                    return !(t.byteLength != e.byteLength || !r(new g.a(t), new g.a(e)));
                case y:
                case x:
                case C:
                    return Object(b.a)(+t, +e);
                case A:
                    return t.name == e.name && t.message == e.message;
                case P:
                case O:
                    return t == e + "";
                case T:
                    var a = w;
                case M:
                    var c = i & _;
                    if (a || (a = k), t.size != e.size && !c) return !1;
                    var l = s.get(t);
                    if (l) return l == e;
                    i |= v, s.set(t, e);
                    var d = m(a(t), a(e), i, o, r, s);
                    return s.delete(t), d;
                case S:
                    if (j) return j.call(t) == j.call(e)
            }
            return !1
        }, D = n(94), L = 1, V = Object.prototype.hasOwnProperty;
        var z = function (t, e, n, i, o, r) {
                var s = n & L, a = Object(D.a)(t), c = a.length;
                if (c != Object(D.a)(e).length && !s) return !1;
                for (var l = c; l--;) {
                    var d = a[l];
                    if (!(s ? d in e : V.call(e, d))) return !1
                }
                var u = r.get(t);
                if (u && r.get(e)) return u == e;
                var h = !0;
                r.set(t, e), r.set(e, t);
                for (var f = s; ++l < c;) {
                    var m = t[d = a[l]], p = e[d];
                    if (i) var g = s ? i(p, m, d, e, t, r) : i(m, p, d, t, e, r);
                    if (!(void 0 === g ? m === p || o(m, p, n, i, r) : g)) {
                        h = !1;
                        break
                    }
                    f || (f = "constructor" == d)
                }
                if (h && !f) {
                    var b = t.constructor, w = e.constructor;
                    b != w && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w) && (h = !1)
                }
                return r.delete(t), r.delete(e), h
            }, B = n(63), F = n(50), U = n(75), H = n(115), q = 1, W = "[object Arguments]", Y = "[object Array]",
            $ = "[object Object]", G = Object.prototype.hasOwnProperty;
        var Q = function (t, e, n, o, r, s) {
            var a = Object(F.a)(t), c = Object(F.a)(e), l = a ? Y : Object(B.a)(t), d = c ? Y : Object(B.a)(e),
                u = (l = l == W ? $ : l) == $, h = (d = d == W ? $ : d) == $, f = l == d;
            if (f && Object(U.a)(t)) {
                if (!Object(U.a)(e)) return !1;
                a = !0, u = !1
            }
            if (f && !u) return s || (s = new i.a), a || Object(H.a)(t) ? m(t, e, n, o, r, s) : R(t, e, l, n, o, r, s);
            if (!(n & q)) {
                var p = u && G.call(t, "__wrapped__"), g = h && G.call(e, "__wrapped__");
                if (p || g) {
                    var b = p ? t.value() : t, w = g ? e.value() : e;
                    return s || (s = new i.a), r(b, w, n, o, s)
                }
            }
            return !!f && (s || (s = new i.a), z(t, e, n, o, r, s))
        }, J = n(31);
        e.a = function t(e, n, i, o, r) {
            return e === n || (null == e || null == n || !Object(J.a)(e) && !Object(J.a)(n) ? e != e && n != n : Q(e, n, i, o, t, r))
        }
    }, function (t, e, n) {
        "use strict";
        var i = function (t, e) {
            for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
            return i
        }, o = n(47), r = n(31), s = "[object Arguments]";
        var a = function (t) {
            return Object(r.a)(t) && Object(o.a)(t) == s
        }, c = Object.prototype, l = c.hasOwnProperty, d = c.propertyIsEnumerable, u = a(function () {
            return arguments
        }()) ? a : function (t) {
            return Object(r.a)(t) && l.call(t, "callee") && !d.call(t, "callee")
        }, h = n(50), f = n(75), m = n(106), p = n(115), g = Object.prototype.hasOwnProperty;
        e.a = function (t, e) {
            var n = Object(h.a)(t), o = !n && u(t), r = !n && !o && Object(f.a)(t),
                s = !n && !o && !r && Object(p.a)(t), a = n || o || r || s, c = a ? i(t.length, String) : [],
                l = c.length;
            for (var d in t) !e && !g.call(t, d) || a && ("length" == d || r && ("offset" == d || "parent" == d) || s && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || Object(m.a)(d, l)) || c.push(d);
            return c
        }
    }, function (t, e, n) {
        "use strict";

        class i {
            getHtml(t) {
                const e = document.implementation.createHTMLDocument("").createElement("div");
                return e.appendChild(t), e.innerHTML
            }
        }

        var o = n(72), r = n(14);
        n.d(e, "a", function () {
            return s
        });

        class s {
            constructor() {
                this._domParser = new DOMParser, this._domConverter = new o.a({blockFiller: r.d}), this._htmlWriter = new i
            }

            toData(t) {
                const e = this._domConverter.viewToDom(t, document);
                return this._htmlWriter.getHtml(e)
            }

            toView(t) {
                const e = this._toDom(t);
                return this._domConverter.domToView(e)
            }

            _toDom(t) {
                const e = this._domParser.parseFromString(t, "text/html"), n = e.createDocumentFragment(),
                    i = e.body.childNodes;
                for (; i.length > 0;) n.appendChild(i[0]);
                return n
            }
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(47), o = n(105), r = n(31), s = {};
        s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1;
        var a = function (t) {
            return Object(r.a)(t) && Object(o.a)(t.length) && !!s[Object(i.a)(t)]
        }, c = n(79), l = n(64), d = l.a && l.a.isTypedArray, u = d ? Object(c.a)(d) : a;
        e.a = u
    }, function (t, e, n) {
        "use strict";
        var i = n(54);
        var o = function (t) {
            return t
        };
        var r = function (t, e, n) {
            switch (n.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, n[0]);
                case 2:
                    return t.call(e, n[0], n[1]);
                case 3:
                    return t.call(e, n[0], n[1], n[2])
            }
            return t.apply(e, n)
        }, s = Math.max;
        var a = function (t, e, n) {
            return e = s(void 0 === e ? t.length - 1 : e, 0), function () {
                for (var i = arguments, o = -1, a = s(i.length - e, 0), c = Array(a); ++o < a;) c[o] = i[e + o];
                o = -1;
                for (var l = Array(e + 1); ++o < e;) l[o] = i[o];
                return l[e] = n(c), r(t, this, l)
            }
        };
        var c = function (t) {
            return function () {
                return t
            }
        }, l = n(88), d = l.a ? function (t, e) {
            return Object(l.a)(t, "toString", {configurable: !0, enumerable: !1, value: c(e), writable: !0})
        } : o, u = 800, h = 16, f = Date.now;
        var m = function (t) {
            var e = 0, n = 0;
            return function () {
                var i = f(), o = h - (i - n);
                if (n = i, o > 0) {
                    if (++e >= u) return arguments[0]
                } else e = 0;
                return t.apply(void 0, arguments)
            }
        }(d);
        var p = function (t, e) {
            return m(a(t, e, o), t + "")
        }, g = n(68), b = n(78), w = n(106), k = n(32);
        var _ = function (t, e, n) {
            if (!Object(k.a)(n)) return !1;
            var i = typeof e;
            return !!("number" == i ? Object(b.a)(n) && Object(w.a)(e, n.length) : "string" == i && e in n) && Object(g.a)(n[e], t)
        };
        var v = function (t) {
            return p(function (e, n) {
                var i = -1, o = n.length, r = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
                for (r = t.length > 3 && "function" == typeof r ? (o--, r) : void 0, s && _(n[0], n[1], s) && (r = o < 3 ? void 0 : r, o = 1), e = Object(e); ++i < o;) {
                    var a = n[i];
                    a && t(e, a, i, r)
                }
                return e
            })
        }, y = n(85), x = v(function (t, e) {
            Object(i.a)(e, Object(y.a)(e), t)
        });
        e.a = x
    }, function (t, e) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function (t, e) {
        t.exports = function (t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0, get: function () {
                        return e.l
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0, get: function () {
                        return e.i
                    }
                }), Object.defineProperty(e, "exports", {enumerable: !0}), e.webpackPolyfill = 1
            }
            return e
        }
    }, function (t, e, n) {
        var i = n(178);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e, n) {
        "use strict";
        e.a = function () {
            return !1
        }
    }, function (t, e, n) {
        "use strict";
        (function (t) {
            var i = n(22), o = "object" == typeof exports && exports && !exports.nodeType && exports,
                r = o && "object" == typeof t && t && !t.nodeType && t, s = r && r.exports === o ? i.a.Buffer : void 0,
                a = s ? s.allocUnsafe : void 0;
            e.a = function (t, e) {
                if (e) return t.slice();
                var n = t.length, i = a ? a(n) : new t.constructor(n);
                return t.copy(i), i
            }
        }).call(this, n(118)(t))
    }, function (t) {
        t.exports = JSON.parse('{"a":"12.4.0"}')
    }, function (t, e, n) {
        "use strict";
        (function (t) {
            n.d(e, "a", function () {
                return l
            });
            var i = n(1), o = n(58), r = n(84), s = n(51), a = n(25), c = n(35);

            class l extends i.a {
                static get requires() {
                    return [o.a, r.a]
                }

                static get pluginName() {
                    return "AutoMath"
                }

                constructor(t) {
                    super(t), this._timeoutId = null, this._positionToInsert = null
                }

                init() {
                    const e = this.editor, n = e.model.document;
                    this.listenTo(e.plugins.get(o.a), "inputTransformation", () => {
                        const t = n.selection.getFirstRange(), e = a.a.fromPosition(t.start);
                        e.stickiness = "toPrevious";
                        const i = a.a.fromPosition(t.end);
                        i.stickiness = "toNext", n.once("change:data", () => {
                            this._mathBetweenPositions(e, i), e.detach(), i.detach()
                        }, {priority: "high"})
                    }), e.commands.get("undo").on("execute", () => {
                        this._timeoutId && (t.window.clearTimeout(this._timeoutId), this._positionToInsert.detach(), this._timeoutId = null, this._positionToInsert = null)
                    }, {priority: "high"})
                }

                _mathBetweenPositions(e, n) {
                    const i = this.editor, o = Object.assign(c.a, this.editor.config.get("math")), r = new s.a(e, n),
                        l = r.getWalker({ignoreElementEnd: !0});
                    let d = "";
                    for (const t of l) t.item.is("textProxy") && (d += t.item.data);
                    if (d = d.trim(), !Object(c.d)(d)) return;
                    i.commands.get("math").isEnabled && (this._positionToInsert = a.a.fromPosition(e), this._timeoutId = t.window.setTimeout(() => {
                        i.model.change(t => {
                            let e;
                            this._timeoutId = null, t.remove(r), "$graveyard" !== this._positionToInsert.root.rootName && (e = this._positionToInsert), i.model.change(t => {
                                const n = Object.assign(Object(c.b)(d), {type: o.outputType}),
                                    r = t.createElement("mathtex", n);
                                i.model.insertContent(r, e), t.setSelection(r, "on")
                            }), this._positionToInsert.detach(), this._positionToInsert = null
                        })
                    }, 100))
                }
            }
        }).call(this, n(117))
    }, function (t, e, n) {
        var i = n(125);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-placeholder:before,.ck .ck-placeholder:before{content:attr(data-placeholder);pointer-events:none;cursor:text;color:var(--ck-color-engine-placeholder-text)}"
    }, function (t, e, n) {
        var i = n(127);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999);--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border:#47a4f5;--ck-color-focus-shadow:rgba(119,186,248,0.5);--ck-color-focus-disabled-shadow:rgba(119,186,248,0.3);--ck-color-focus-error-shadow:rgba(255,64,31,0.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,0.15);--ck-color-shadow-drop-active:rgba(0,0,0,0.2);--ck-color-shadow-inner:rgba(0,0,0,0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,0.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#5c5c5c;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,177,255,0.1);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}"
    }, function (t, e, n) {
        var i = n(129);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}"
    }, function (t, e, n) {
        var i = n(131);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}"
    }, function (t, e, n) {
        var i = n(133);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}"
    }, function (t, e, n) {
        var i = n(135);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row wrap;align-items:center}.ck.ck-toolbar.ck-toolbar_vertical{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating{flex-wrap:nowrap}.ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar__newline{display:block;width:100%}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar>*{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-toolbar>*{margin-left:var(--ck-spacing-small);margin-right:0}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck{width:100%;margin:0;border-radius:0;border:0}[dir=ltr] .ck.ck-toolbar>:last-child{margin-right:0}[dir=rtl] .ck.ck-toolbar>:last-child{margin-left:0}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar__separator{align-self:stretch;width:1px;margin-top:0;margin-bottom:0;background:var(--ck-color-toolbar-border)}.ck.ck-toolbar__newline{margin:0}"
    }, function (t, e, n) {
        var i = n(137);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}"
    }, function (t, e, n) {
        var i = n(139);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}"
    }, function (t, e, n) {
        var i = n(141);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = '.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck-tooltip .ck-tooltip__text{display:inline-block}.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0}.ck.ck-tooltip.ck-tooltip_s{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:var(--ck-color-tooltip-background);border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:0}.ck.ck-tooltip.ck-tooltip_n{top:calc(-1*var(--ck-tooltip-arrow-size));transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(-1*var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-top-color:var(--ck-color-tooltip-background);border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:0;border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%}.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s}'
    }, function (t, e, n) {
        var i = n(143);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button .ck-button__label,.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button .ck-button__label,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out;-webkit-appearance:none}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;border-color:transparent}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(-1*var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-right:calc(-1*var(--ck-spacing-small));margin-left:var(--ck-spacing-small)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}"
    }, function (t, e, n) {
        var i = n(145);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:5px solid #ccc}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}"
    }, function (t, e, n) {
        var i = n(147);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-resizer-size:10px;--ck-resizer-border-width:1px;--ck-resizer-border-radius:2px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-tooltip-offset:10px;--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2}.ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;position:absolute;pointer-events:none;left:0;top:0;outline:1px solid var(--ck-color-resizer)}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{position:absolute;pointer-events:all;width:var(--ck-resizer-size);height:var(--ck-resizer-size);background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{top:var(--ck-resizer-offset);left:var(--ck-resizer-offset);cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{top:var(--ck-resizer-offset);right:var(--ck-resizer-offset);cursor:nesw-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset);cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset);cursor:nesw-resize}.ck .ck-widget.ck-widget_with-selection-handler{position:relative}.ck .ck-widget.ck-widget_with-selection-handler:hover .ck-widget__selection-handler{visibility:visible}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler{position:absolute}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected .ck-widget__selection-handler{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);color:var(--ck-color-resizer-tooltip-text);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);font-size:var(--ck-font-size-tiny);display:block;padding:var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{top:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{top:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focus-background)}.ck-editor__editable>.ck-widget.ck-widget_with-selection-handler:first-child,.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handler:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness))}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color)}.ck .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected .ck-widget__selection-handler,.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected:hover .ck-widget__selection-handler{opacity:1;background-color:var(--ck-color-focus-border)}.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handler.ck-widget_selected:hover .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handler:hover .ck-widget__selection-handler{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handler .ck-widget__selection-handler{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handler,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handler:hover,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handler,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handler:hover{background:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-read-only .ck-widget{--ck-widget-outline-thickness:0}"
    }, function (t, e, n) {
        var i = n(149);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-labeled-input .ck-labeled-input__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-input .ck-labeled-input__status_error{color:var(--ck-color-base-error)}"
    }, function (t, e, n) {
        var i = n(151);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ":root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{box-shadow:var(--ck-inner-shadow),0 0;background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition-property:box-shadow,border;transition:.2s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input-text[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text.ck-error{border-color:var(--ck-color-input-error-border);animation:ck-text-input-shake .3s ease both}.ck.ck-input-text.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),var(--ck-inner-shadow)}@keyframes ck-text-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}"
    }, function (t, e, n) {
        var i = n(153);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-input{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-input{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}.ck.ck-text-alternative-form{padding:var(--ck-spacing-standard)}.ck.ck-text-alternative-form:focus{outline:none}[dir=ltr] .ck.ck-text-alternative-form>:not(:first-child),[dir=rtl] .ck.ck-text-alternative-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-text-alternative-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-text-alternative-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-text-alternative-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-text-alternative-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-text-alternative-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-text-alternative-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-text-alternative-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-text-alternative-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}"
    }, function (t, e, n) {
        var i = n(155);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:var(--ck-balloon-arrow-height);border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:0}.ck.ck-balloon-panel[class*=arrow_n]:before{border-bottom-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:0;border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-top-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background);margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(2*var(--ck-balloon-arrow-half-width));top:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(-1*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(2*var(--ck-balloon-arrow-half-width));bottom:calc(-1*var(--ck-balloon-arrow-height))}'
    }, function (t, e, n) {
        var i = n(157);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck .ck-balloon-rotator__navigation{display:flex;align-items:center;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}"
    }, function (t, e, n) {
        var i = n(159);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);width:100%;height:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}"
    }, function (t, e, n) {
        var i = n(161);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck-content .image{display:table;clear:both;text-align:center;margin:1em auto}.ck-content .image>img{display:block;margin:0 auto;max-width:100%;min-width:50px}"
    }, function (t, e, n) {
        var i = n(163);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-editor__editable .image{position:relative}.ck.ck-editor__editable .image .ck-progress-bar{position:absolute;top:0;left:0}.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"
    }, function (t, e, n) {
        var i = n(165);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = '.ck-image-upload-complete-icon{display:block;position:absolute;top:10px;right:10px;border-radius:50%}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20px;--ck-image-upload-icon-width:2px}.ck-image-upload-complete-icon{width:var(--ck-image-upload-icon-size);height:var(--ck-image-upload-icon-size);opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;font-size:var(--ck-image-upload-icon-size);animation-delay:0ms,3s}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards;box-sizing:border-box}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:.3em;height:0}to{opacity:1;width:.3em;height:.45em}}'
    }, function (t, e, n) {
        var i = n(167);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = '.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader:before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}'
    }, function (t, e, n) {
        var i = n(169);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);position:absolute}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block;will-change:transform}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{transform:translate3d(0,100%,0)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}:root{--ck-dropdown-arrow-size:calc(0.5*var(--ck-icon-size))}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0;border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}"
    }, function (t, e, n) {
        var i = n(171);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{min-height:unset;width:100%;text-align:left;border-radius:0;border:0;padding:calc(0.2*var(--ck-line-height-base)*var(--ck-font-size-base)) calc(0.4*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(1.2*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}"
    }, function (t, e, n) {
        var i = n(173);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:1.3846153847em}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(2*var(--ck-spacing-large))}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(2*var(--ck-spacing-large))}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{transition:background .4s ease;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(0.5*var(--ck-border-radius))}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{margin:var(--ck-switch-button-toggle-spacing);width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:all .3s ease}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var(--ck-switch-button-translation))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(-1*var(--ck-switch-button-translation)))}"
    }, function (t, e, n) {
        var i = n(175);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-toolbar-dropdown .ck-toolbar{flex-wrap:nowrap}.ck.ck-toolbar-dropdown .ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}"
    }, function (t, e, n) {
        var i = n(177);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}"
    }, function (t, e) {
        t.exports = ".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}"
    }, function (t, e, n) {
        var i = n(180);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}"
    }, function (t, e, n) {
        var i = n(182);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ":root{--ck-image-style-spacing:1.5em}.ck-content .image-style-align-center:not(.image_resized),.ck-content .image-style-align-left:not(.image_resized),.ck-content .image-style-align-right:not(.image_resized),.ck-content .image-style-side:not(.image_resized){max-width:50%}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}"
    }, function (t, e, n) {
        var i = n(184);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}"
    }, function (t, e, n) {
        var i = n(186);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-input{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form{padding:var(--ck-spacing-standard)}.ck.ck-link-form:focus{outline:none}[dir=ltr] .ck.ck-link-form>:not(:first-child),[dir=rtl] .ck.ck-link-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-link-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-link-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}.ck.ck-link-form_layout-vertical{padding:0;min-width:var(--ck-input-text-width)}.ck.ck-link-form_layout-vertical .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{padding:var(--ck-spacing-standard);margin:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin-left:0}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}"
    }, function (t, e, n) {
        var i = n(188);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions{padding:var(--ck-spacing-standard)}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions:focus{outline:none}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{min-width:0;max-width:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview):last-of-type{border-right:1px solid var(--ck-color-base-border)}}"
    }, function (t, e, n) {
        var i = n(190);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = '.ck-media__wrapper .ck-media__placeholder{display:flex;flex-direction:column;align-items:center}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{visibility:visible;opacity:1}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{overflow:hidden;display:block}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{padding:calc(3*var(--ck-spacing-standard));background:var(--ck-color-base-foreground)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{min-width:var(--ck-media-embed-placeholder-icon-size);height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);background-position:50%;background-size:cover}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{width:100%;height:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);white-space:nowrap;text-align:center;font-style:italic;text-overflow:ellipsis}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-width:300px;max-height:380px}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMDAzLjc4IDEuNjFoNDkuNjIxYzEuNjk0IDAgMy4xOS0uNzk4IDQuMTQ2LTIuMDM3eiIgZmlsbD0iIzVjODhjNSIvPjxwYXRoIGQ9Ik0yMjYuNzQyIDIyMi45ODhjLTkuMjY2IDAtMTYuNzc3IDcuMTctMTYuNzc3IDE2LjAxNC4wMDcgMi43NjIuNjYzIDUuNDc0IDIuMDkzIDcuODc1LjQzLjcwMy44MyAxLjQwOCAxLjE5IDIuMTA3LjMzMy41MDIuNjUgMS4wMDUuOTUgMS41MDguMzQzLjQ3Ny42NzMuOTU3Ljk4OCAxLjQ0IDEuMzEgMS43NjkgMi41IDMuNTAyIDMuNjM3IDUuMTY4Ljc5MyAxLjI3NSAxLjY4MyAyLjY0IDIuNDY2IDMuOTkgMi4zNjMgNC4wOTQgNC4wMDcgOC4wOTIgNC42IDEzLjkxNHYuMDEyYy4xODIuNDEyLjUxNi42NjYuODc5LjY2Ny40MDMtLjAwMS43NjgtLjMxNC45My0uNzk5LjYwMy01Ljc1NiAyLjIzOC05LjcyOSA0LjU4NS0xMy43OTQuNzgyLTEuMzUgMS42NzMtMi43MTUgMi40NjUtMy45OSAxLjEzNy0xLjY2NiAyLjMyOC0zLjQgMy42MzgtNS4xNjkuMzE1LS40ODIuNjQ1LS45NjIuOTg4LTEuNDM5LjMtLjUwMy42MTctMS4wMDYuOTUtMS41MDguMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0eiIgZmlsbD0iI2RkNGIzZSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48ZWxsaXBzZSByeT0iNS41NjQiIHJ4PSI1LjgyOCIgY3k9IjIzOS4wMDIiIGN4PSIyMjYuNzQyIiBmaWxsPSIjODAyZDI3IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0xOTAuMzAxIDIzNy4yODNjLTQuNjcgMC04LjQ1NyAzLjg1My04LjQ1NyA4LjYwNnMzLjc4NiA4LjYwNyA4LjQ1NyA4LjYwN2MzLjA0MyAwIDQuODA2LS45NTggNi4zMzctMi41MTYgMS41My0xLjU1NyAyLjA4Ny0zLjkxMyAyLjA4Ny02LjI5IDAtLjM2Mi0uMDIzLS43MjItLjA2NC0xLjA3OWgtOC4yNTd2My4wNDNoNC44NWMtLjE5Ny43NTktLjUzMSAxLjQ1LTEuMDU4IDEuOTg2LS45NDIuOTU4LTIuMDI4IDEuNTQ4LTMuOTAxIDEuNTQ4LTIuODc2IDAtNS4yMDgtMi4zNzItNS4yMDgtNS4yOTkgMC0yLjkyNiAyLjMzMi01LjI5OSA1LjIwOC01LjI5OSAxLjM5OSAwIDIuNjE4LjQwNyAzLjU4NCAxLjI5M2wyLjM4MS0yLjM4YzAtLjAwMi0uMDAzLS4wMDQtLjAwNC0uMDA1LTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTV6bTQuNDMgNS42NmwuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxNS4xODQgMjUxLjkyOWwtNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMjMzIDUuMjMzIDAgMDAuNDQ5LTIuMTIzdi0zMS4xNjVjLS40NjkuNjc1LS45MzQgMS4zNDktMS4zODIgMi4wMDUtLjc5MiAxLjI3NS0xLjY4MiAyLjY0LTIuNDY1IDMuOTktMi4zNDcgNC4wNjUtMy45ODIgOC4wMzgtNC41ODUgMTMuNzk0LS4xNjIuNDg1LS41MjcuNzk4LS45My43OTktLjM2My0uMDAxLS42OTctLjI1NS0uODc5LS42Njd2LS4wMTJjLS41OTMtNS44MjItMi4yMzctOS44Mi00LjYtMTMuOTE0LS43ODMtMS4zNS0xLjY3My0yLjcxNS0yLjQ2Ni0zLjk5LTEuMTM3LTEuNjY2LTIuMzI3LTMuNC0zLjYzNy01LjE2OWwtLjAwMi0uMDAzeiIgZmlsbD0iI2MzYzNjMyIvPjxwYXRoIGQ9Ik0yMTIuOTgzIDI0OC40OTVsLTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAwNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYuMjc1IDEzNi4yNzUgMCAwMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAwLS45ODktMS40NCAzNS4xMjcgMzUuMTI3IDAgMDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OXoiIGZpbGw9IiNmZGRjNGYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxMS45OTggMjYxLjA4M2wtNi4xNTIgNi4xNTEgMjQuMjY0IDI0LjI2NGguNzgxYTUuMjI3IDUuMjI3IDAgMDA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c8,#b900b4,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OXptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OXoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzN6bTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1ek00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}'
    }, function (t, e, n) {
        var i = n(192);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-media-form{display:flex;align-items:flex-start;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-input{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-input{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}.ck.ck-media-form{padding:var(--ck-spacing-standard)}.ck.ck-media-form:focus{outline:none}[dir=ltr] .ck.ck-media-form>:not(:first-child),[dir=rtl] .ck.ck-media-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-media-form{padding:0;width:calc(0.8*var(--ck-input-text-width))}.ck.ck-media-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-media-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-media-form .ck-labeled-input .ck-labeled-input__error{white-space:normal}.ck.ck-media-form .ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-media-form .ck-button{margin-left:0}[dir=ltr] .ck.ck-media-form .ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-media-form .ck-button{margin-left:0}[dir=rtl] .ck.ck-media-form .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}"
    }, function (t, e, n) {
        var i = n(194);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck-content .media{clear:both;margin:1em 0;display:block;min-width:15em}"
    }, function (t, e, n) {
        var i = n(196);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ":root{--ck-color-table-focused-cell-background:#f5fafe}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}"
    }, function (t, e, n) {
        var i = n(198);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ":root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px;--ck-insert-table-dropdown-box-border-color:#bfbfbf;--ck-insert-table-dropdown-box-border-active-color:#53a0e4;--ck-insert-table-dropdown-box-active-background:#c7e5ff}.ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2);padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{width:var(--ck-insert-table-dropdown-box-width);height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);border:1px solid var(--ck-insert-table-dropdown-box-border-color);border-radius:1px}.ck .ck-insert-table-dropdown-grid-box.ck-on{border-color:var(--ck-insert-table-dropdown-box-border-active-color);background:var(--ck-insert-table-dropdown-box-active-background)}"
    }, function (t, e, n) {
        var i = n(200);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck-content .table{margin:1em auto;display:table}.ck-content .table table{border-collapse:collapse;border-spacing:0;border:1px double #b3b3b3}.ck-content .table table td,.ck-content .table table th{min-width:2em;padding:.4em;border-color:#d9d9d9}.ck-content .table table th{font-weight:700;background:#fafafa}"
    }, function (t, e, n) {
        var i = n(202);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {injectType: "singletonStyleTag", insert: "head", singleton: !0};
        n(12)(i, o);
        i.locals && (t.exports = i.locals)
    }, function (t, e) {
        t.exports = ".ck.ck-math-form{display:flex;align-items:flex-start;flex-direction:row;flex-wrap:nowrap}@media screen and (max-width:600px){.ck.ck-math-form{flex-wrap:wrap}.ck.ck-math-form .ck-math-view,.ck.ck-math-form .ck-math-view .ck-label,.ck.ck-math-form .ck-math-view .ck-labeled-input{flex-basis:100%}.ck.ck-math-form .ck-button{flex-basis:50%}}// Increase toolbar default z-index by one because math preview should be below of it .ck.ck-toolbar-container{z-index:calc(var(--ck-z-modal) + 2)}.ck.ck-math-form{padding:var(--ck-spacing-standard)}.ck.ck-math-form:focus{outline:none}[dir=ltr] .ck.ck-math-form>:not(:first-child),[dir=rtl] .ck.ck-math-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-math-form{padding:0}.ck.ck-math-form .ck-labeled-input{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-math-form .ck-labeled-input .ck-input-text{min-width:0;width:100%}.ck.ck-math-form .ck-label,.ck.ck-math-form .ck-math-view .ck-button,.ck.ck-math-form .ck-math-view .ck.ck-math-preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-math-form>.ck-button{padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-standard);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-math-form>.ck-button{margin-left:0}[dir=ltr] .ck.ck-math-form>.ck-button:first-of-type{border-right:1px solid var(--ck-color-base-border)}[dir=rtl] .ck.ck-math-form>.ck-button{margin-left:0}[dir=rtl] .ck.ck-math-form>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}}"
    }, function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n(97), o = n(204), r = n(206);

        class s {
            constructor(t, e) {
                this._config = {}, e && this.define(e), t && this._setObjectToTarget(this._config, t)
            }

            set(t, e) {
                this._setToTarget(this._config, t, e)
            }

            define(t, e) {
                this._setToTarget(this._config, t, e, !0)
            }

            get(t) {
                return this._getFromSource(this._config, t)
            }

            _setToTarget(t, e, n, o = !1) {
                if (Object(i.a)(e)) return void this._setObjectToTarget(t, e, o);
                const r = e.split(".");
                e = r.pop();
                for (const e of r) Object(i.a)(t[e]) || (t[e] = {}), t = t[e];
                if (Object(i.a)(n)) return Object(i.a)(t[e]) || (t[e] = {}), t = t[e], void this._setObjectToTarget(t, n, o);
                o && void 0 !== t[e] || (t[e] = n)
            }

            _getFromSource(t, e) {
                const n = e.split(".");
                e = n.pop();
                for (const e of n) {
                    if (!Object(i.a)(t[e])) {
                        t = null;
                        break
                    }
                    t = t[e]
                }
                return t ? function (t) {
                    return Object(o.a)(t, a)
                }(t[e]) : void 0
            }

            _setObjectToTarget(t, e, n) {
                Object.keys(e).forEach(i => {
                    this._setToTarget(t, i, e[i], n)
                })
            }
        }

        function a(t) {
            return Object(r.a)(t) ? t : void 0
        }

        var c = n(80);
        const l = Symbol("rootName");

        class d extends c.a {
            constructor(t) {
                super(t), this.rootName = "main"
            }

            is(t, e = null) {
                const n = t.replace(/^view:/, "");
                return e ? "rootElement" == n && e == this.name || super.is(t, e) : "rootElement" == n || super.is(t)
            }

            get rootName() {
                return this.getCustomProperty(l)
            }

            set rootName(t) {
                this._setCustomProperty(l, t)
            }

            set _name(t) {
                this.name = t
            }
        }

        var u = n(109), h = n(28), f = n(5), m = n(13);

        class p {
            constructor() {
                this.selection = new u.a, this.roots = new h.a({idProperty: "rootName"}), this.set("isReadOnly", !1), this.set("isFocused", !1), this.set("isComposing", !1), this._postFixers = new Set
            }

            getRoot(t = "main") {
                return this.roots.get(t)
            }

            registerPostFixer(t) {
                this._postFixers.add(t)
            }

            destroy() {
                this.roots.map(t => t.destroy()), this.stopListening()
            }

            _callPostFixers(t) {
                let e = !1;
                do {
                    for (const n of this._postFixers) if (e = n(t)) break
                } while (e)
            }
        }

        Object(f.a)(p, m.a);
        var g = n(4), b = n(10), w = n(39), k = n(74), _ = n(30), v = n(0);
        const y = 10;

        class x extends _.a {
            constructor(t, e, n) {
                super(t, e, n), this.getFillerOffset = A, this._priority = y, this._id = null, this._clonesGroup = null
            }

            get priority() {
                return this._priority
            }

            get id() {
                return this._id
            }

            getElementsWithSameId() {
                if (null === this.id) throw new v.b("attribute-element-get-elements-with-same-id-no-id: Cannot get elements with the same id for an attribute element without id.", this);
                return new Set(this._clonesGroup)
            }

            is(t, e = null) {
                const n = t && t.replace(/^view:/, "");
                return e ? "attributeElement" == n && e == this.name || super.is(t, e) : "attributeElement" == n || super.is(t)
            }

            isSimilar(t) {
                return null !== this.id || null !== t.id ? this.id === t.id : super.isSimilar(t) && this.priority == t.priority
            }

            _clone(t) {
                const e = super._clone(t);
                return e._priority = this._priority, e._id = this._id, e
            }
        }

        function A() {
            if (T(this)) return null;
            let t = this.parent;
            for (; t && t.is("attributeElement");) {
                if (T(t) > 1) return null;
                t = t.parent
            }
            return !t || T(t) > 1 ? null : this.childCount
        }

        function T(t) {
            return Array.from(t.getChildren()).filter(t => !t.is("uiElement")).length
        }

        x.DEFAULT_PRIORITY = y;
        var C = n(55);

        class P extends _.a {
            constructor(t, e, n) {
                super(t, e, n), this.getFillerOffset = M
            }

            is(t, e = null) {
                const n = t.replace(/^view:/, "");
                return e ? "emptyElement" == n && e == this.name || super.is(t, e) : "emptyElement" == n || super.is(t)
            }

            _insertChild(t, e) {
                if (e && (e instanceof C.a || Array.from(e).length > 0)) throw new v.b("view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.", [this, e])
            }
        }

        function M() {
            return null
        }

        var O = n(9);

        class S extends _.a {
            constructor(t, e, n) {
                super(t, e, n), this.getFillerOffset = I
            }

            is(t, e = null) {
                const n = t.replace(/^view:/, "");
                return e ? "uiElement" == n && e == this.name || super.is(t, e) : "uiElement" == n || super.is(t)
            }

            _insertChild(t, e) {
                if (e && (e instanceof C.a || Array.from(e).length > 0)) throw new v.b("view-uielement-cannot-add: Cannot add child nodes to UIElement instance.", this)
            }

            render(t) {
                return this.toDomElement(t)
            }

            toDomElement(t) {
                const e = t.createElement(this.name);
                for (const t of this.getAttributeKeys()) e.setAttribute(t, this.getAttribute(t));
                return e
            }
        }

        function E(t) {
            t.document.on("keydown", (e, n) => (function (t, e, n) {
                if (e.keyCode == O.c.arrowright) {
                    const t = e.domTarget.ownerDocument.defaultView.getSelection(),
                        i = 1 == t.rangeCount && t.getRangeAt(0).collapsed;
                    if (i || e.shiftKey) {
                        const e = t.focusNode, o = t.focusOffset, r = n.domPositionToView(e, o);
                        if (null === r) return;
                        let s = !1;
                        const a = r.getLastMatchingPosition(t => (t.item.is("uiElement") && (s = !0), !(!t.item.is("uiElement") && !t.item.is("attributeElement"))));
                        if (s) {
                            const e = n.viewPositionToDom(a);
                            i ? t.collapse(e.parent, e.offset) : t.extend(e.parent, e.offset)
                        }
                    }
                }
            })(0, n, t.domConverter))
        }

        function I() {
            return null
        }

        var N = n(62), j = n(34), R = n(17);

        class D {
            constructor(t) {
                this.document = t, this._cloneGroups = new Map
            }

            setSelection(t, e, n) {
                this.document.selection._setTo(t, e, n)
            }

            setSelectionFocus(t, e) {
                this.document.selection._setFocus(t, e)
            }

            createText(t) {
                return new R.a(t)
            }

            createAttributeElement(t, e, n = {}) {
                const i = new x(t, e);
                return n.priority && (i._priority = n.priority), n.id && (i._id = n.id), i
            }

            createContainerElement(t, e) {
                return new k.a(t, e)
            }

            createEditableElement(t, e) {
                const n = new c.a(t, e);
                return n._document = this.document, n
            }

            createEmptyElement(t, e) {
                return new P(t, e)
            }

            createUIElement(t, e, n) {
                const i = new S(t, e);
                return n && (i.render = n), i
            }

            setAttribute(t, e, n) {
                n._setAttribute(t, e)
            }

            removeAttribute(t, e) {
                e._removeAttribute(t)
            }

            addClass(t, e) {
                e._addClass(t)
            }

            removeClass(t, e) {
                e._removeClass(t)
            }

            setStyle(t, e, n) {
                Object(i.a)(t) && void 0 === n && (n = e), n._setStyle(t, e)
            }

            removeStyle(t, e) {
                e._removeStyle(t)
            }

            setCustomProperty(t, e, n) {
                n._setCustomProperty(t, e)
            }

            removeCustomProperty(t, e) {
                return e._removeCustomProperty(t)
            }

            breakAttributes(t) {
                return t instanceof g.a ? this._breakAttributes(t) : this._breakAttributesRange(t)
            }

            breakContainer(t) {
                const e = t.parent;
                if (!e.is("containerElement")) throw new v.b("view-writer-break-non-container-element: Trying to break an element which is not a container element.", this.document);
                if (!e.parent) throw new v.b("view-writer-break-root: Trying to break root element.", this.document);
                if (t.isAtStart) return g.a._createBefore(e);
                if (!t.isAtEnd) {
                    const n = e._clone(!1);
                    this.insert(g.a._createAfter(e), n);
                    const i = new b.a(t, g.a._createAt(e, "end")), o = new g.a(n, 0);
                    this.move(i, o)
                }
                return g.a._createAfter(e)
            }

            mergeAttributes(t) {
                const e = t.offset, n = t.parent;
                if (n.is("text")) return t;
                if (n.is("attributeElement") && 0 === n.childCount) {
                    const t = n.parent, e = n.index;
                    return n._remove(), this._removeFromClonedElementsGroup(n), this.mergeAttributes(new g.a(t, e))
                }
                const i = n.getChild(e - 1), o = n.getChild(e);
                if (!i || !o) return t;
                if (i.is("text") && o.is("text")) return F(i, o);
                if (i.is("attributeElement") && o.is("attributeElement") && i.isSimilar(o)) {
                    const t = i.childCount;
                    return i._appendChild(o.getChildren()), o._remove(), this._removeFromClonedElementsGroup(o), this.mergeAttributes(new g.a(i, t))
                }
                return t
            }

            mergeContainers(t) {
                const e = t.nodeBefore, n = t.nodeAfter;
                if (!(e && n && e.is("containerElement") && n.is("containerElement"))) throw new v.b("view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.", this.document);
                const i = e.getChild(e.childCount - 1),
                    o = i instanceof R.a ? g.a._createAt(i, "end") : g.a._createAt(e, "end");
                return this.move(b.a._createIn(n), g.a._createAt(e, "end")), this.remove(b.a._createOn(n)), o
            }

            insert(t, e) {
                (function t(e, n) {
                    for (const i of e) {
                        if (!U.some(t => i instanceof t)) throw new v.b("view-writer-insert-invalid-node", n);
                        i.is("text") || t(i.getChildren(), n)
                    }
                })(e = Object(j.a)(e) ? [...e] : [e], this.document);
                const n = L(t);
                if (!n) throw new v.b("view-writer-invalid-position-container", this.document);
                const i = this._breakAttributes(t, !0), o = n._insertChild(i.offset, e);
                for (const t of e) this._addToClonedElementsGroup(t);
                const r = i.getShiftedBy(o), s = this.mergeAttributes(i);
                if (0 === o) return new b.a(s, s);
                {
                    s.isEqual(i) || r.offset--;
                    const t = this.mergeAttributes(r);
                    return new b.a(s, t)
                }
            }

            remove(t) {
                const e = t instanceof b.a ? t : b.a._createOn(t);
                if (q(e, this.document), e.isCollapsed) return new N.a;
                const {start: n, end: i} = this._breakAttributesRange(e, !0), o = n.parent, r = i.offset - n.offset,
                    s = o._removeChildren(n.offset, r);
                for (const t of s) this._removeFromClonedElementsGroup(t);
                const a = this.mergeAttributes(n);
                return e.start = a, e.end = a.clone(), new N.a(s)
            }

            clear(t, e) {
                q(t, this.document);
                const n = t.getWalker({direction: "backward", ignoreElementEnd: !0});
                for (const i of n) {
                    const n = i.item;
                    let o;
                    if (n.is("element") && e.isSimilar(n)) o = b.a._createOn(n); else if (!i.nextPosition.isAfter(t.start) && n.is("textProxy")) {
                        const t = n.getAncestors().find(t => t.is("element") && e.isSimilar(t));
                        t && (o = b.a._createIn(t))
                    }
                    o && (o.end.isAfter(t.end) && (o.end = t.end), o.start.isBefore(t.start) && (o.start = t.start), this.remove(o))
                }
            }

            move(t, e) {
                let n;
                if (e.isAfter(t.end)) {
                    const i = (e = this._breakAttributes(e, !0)).parent, o = i.childCount;
                    t = this._breakAttributesRange(t, !0), n = this.remove(t), e.offset += i.childCount - o
                } else n = this.remove(t);
                return this.insert(e, n)
            }

            wrap(t, e) {
                if (!(e instanceof x)) throw new v.b("view-writer-wrap-invalid-attribute", this.document);
                if (q(t, this.document), t.isCollapsed) {
                    let n = t.start;
                    n.parent.is("element") && !function (t) {
                        return Array.from(t.getChildren()).some(t => !t.is("uiElement"))
                    }(n.parent) && (n = n.getLastMatchingPosition(t => t.item.is("uiElement"))), n = this._wrapPosition(n, e);
                    const i = this.document.selection;
                    return i.isCollapsed && i.getFirstPosition().isEqual(t.start) && this.setSelection(n), new b.a(n)
                }
                return this._wrapRange(t, e)
            }

            unwrap(t, e) {
                if (!(e instanceof x)) throw new v.b("view-writer-unwrap-invalid-attribute", this.document);
                if (q(t, this.document), t.isCollapsed) return t;
                const {start: n, end: i} = this._breakAttributesRange(t, !0), o = n.parent,
                    r = this._unwrapChildren(o, n.offset, i.offset, e), s = this.mergeAttributes(r.start);
                s.isEqual(r.start) || r.end.offset--;
                const a = this.mergeAttributes(r.end);
                return new b.a(s, a)
            }

            rename(t, e) {
                const n = new k.a(t, e.getAttributes());
                return this.insert(g.a._createAfter(e), n), this.move(b.a._createIn(e), g.a._createAt(n, 0)), this.remove(b.a._createOn(e)), n
            }

            clearClonedElementsGroup(t) {
                this._cloneGroups.delete(t)
            }

            createPositionAt(t, e) {
                return g.a._createAt(t, e)
            }

            createPositionAfter(t) {
                return g.a._createAfter(t)
            }

            createPositionBefore(t) {
                return g.a._createBefore(t)
            }

            createRange(t, e) {
                return new b.a(t, e)
            }

            createRangeOn(t) {
                return b.a._createOn(t)
            }

            createRangeIn(t) {
                return b.a._createIn(t)
            }

            createSelection(t, e, n) {
                return new w.a(t, e, n)
            }

            _wrapChildren(t, e, n, i) {
                let o = e;
                const r = [];
                for (; o < n;) {
                    const e = t.getChild(o), n = e.is("text"), s = e.is("attributeElement"), a = e.is("emptyElement"),
                        c = e.is("uiElement");
                    if (s && this._wrapAttributeElement(i, e)) r.push(new g.a(t, o)); else if (n || a || c || s && V(i, e)) {
                        const n = i._clone();
                        e._remove(), n._appendChild(e), t._insertChild(o, n), this._addToClonedElementsGroup(n), r.push(new g.a(t, o))
                    } else s && this._wrapChildren(e, 0, e.childCount, i);
                    o++
                }
                let s = 0;
                for (const t of r) {
                    if (t.offset -= s, t.offset == e) continue;
                    this.mergeAttributes(t).isEqual(t) || (s++, n--)
                }
                return b.a._createFromParentsAndOffsets(t, e, t, n)
            }

            _unwrapChildren(t, e, n, i) {
                let o = e;
                const r = [];
                for (; o < n;) {
                    const e = t.getChild(o);
                    if (e.is("attributeElement")) if (e.isSimilar(i)) {
                        const i = e.getChildren(), s = e.childCount;
                        e._remove(), t._insertChild(o, i), this._removeFromClonedElementsGroup(e), r.push(new g.a(t, o), new g.a(t, o + s)), o += s, n += s - 1
                    } else this._unwrapAttributeElement(i, e) ? (r.push(new g.a(t, o), new g.a(t, o + 1)), o++) : (this._unwrapChildren(e, 0, e.childCount, i), o++); else o++
                }
                let s = 0;
                for (const t of r) {
                    if (t.offset -= s, t.offset == e || t.offset == n) continue;
                    this.mergeAttributes(t).isEqual(t) || (s++, n--)
                }
                return b.a._createFromParentsAndOffsets(t, e, t, n)
            }

            _wrapRange(t, e) {
                const {start: n, end: i} = this._breakAttributesRange(t, !0), o = n.parent,
                    r = this._wrapChildren(o, n.offset, i.offset, e), s = this.mergeAttributes(r.start);
                s.isEqual(r.start) || r.end.offset--;
                const a = this.mergeAttributes(r.end);
                return new b.a(s, a)
            }

            _wrapPosition(t, e) {
                if (e.isSimilar(t.parent)) return z(t.clone());
                t.parent.is("text") && (t = B(t));
                const n = this.createAttributeElement();
                n._priority = Number.POSITIVE_INFINITY, n.isSimilar = (() => !1), t.parent._insertChild(t.offset, n);
                const i = new b.a(t, t.getShiftedBy(1));
                this.wrap(i, e);
                const o = new g.a(n.parent, n.index);
                n._remove();
                const r = o.nodeBefore, s = o.nodeAfter;
                return r instanceof R.a && s instanceof R.a ? F(r, s) : z(o)
            }

            _wrapAttributeElement(t, e) {
                if (!W(t, e)) return !1;
                if (t.name !== e.name || t.priority !== e.priority) return !1;
                for (const n of t.getAttributeKeys()) if ("class" !== n && "style" !== n && e.hasAttribute(n) && e.getAttribute(n) !== t.getAttribute(n)) return !1;
                for (const n of t.getStyleNames()) if (e.hasStyle(n) && e.getStyle(n) !== t.getStyle(n)) return !1;
                for (const n of t.getAttributeKeys()) "class" !== n && "style" !== n && (e.hasAttribute(n) || this.setAttribute(n, t.getAttribute(n), e));
                for (const n of t.getStyleNames()) e.hasStyle(n) || this.setStyle(n, t.getStyle(n), e);
                for (const n of t.getClassNames()) e.hasClass(n) || this.addClass(n, e);
                return !0
            }

            _unwrapAttributeElement(t, e) {
                if (!W(t, e)) return !1;
                if (t.name !== e.name || t.priority !== e.priority) return !1;
                for (const n of t.getAttributeKeys()) if ("class" !== n && "style" !== n && (!e.hasAttribute(n) || e.getAttribute(n) !== t.getAttribute(n))) return !1;
                if (!e.hasClass(...t.getClassNames())) return !1;
                for (const n of t.getStyleNames()) if (!e.hasStyle(n) || e.getStyle(n) !== t.getStyle(n)) return !1;
                for (const n of t.getAttributeKeys()) "class" !== n && "style" !== n && this.removeAttribute(n, e);
                return this.removeClass(Array.from(t.getClassNames()), e), this.removeStyle(Array.from(t.getStyleNames()), e), !0
            }

            _breakAttributesRange(t, e = !1) {
                const n = t.start, i = t.end;
                if (q(t, this.document), t.isCollapsed) {
                    const n = this._breakAttributes(t.start, e);
                    return new b.a(n, n)
                }
                const o = this._breakAttributes(i, e), r = o.parent.childCount, s = this._breakAttributes(n, e);
                return o.offset += o.parent.childCount - r, new b.a(s, o)
            }

            _breakAttributes(t, e = !1) {
                const n = t.offset, i = t.parent;
                if (t.parent.is("emptyElement")) throw new v.b("view-writer-cannot-break-empty-element", this.document);
                if (t.parent.is("uiElement")) throw new v.b("view-writer-cannot-break-ui-element", this.document);
                if (!e && i.is("text") && H(i.parent)) return t.clone();
                if (H(i)) return t.clone();
                if (i.is("text")) return this._breakAttributes(B(t), e);
                if (n == i.childCount) {
                    const t = new g.a(i.parent, i.index + 1);
                    return this._breakAttributes(t, e)
                }
                if (0 === n) {
                    const t = new g.a(i.parent, i.index);
                    return this._breakAttributes(t, e)
                }
                {
                    const t = i.index + 1, o = i._clone();
                    i.parent._insertChild(t, o), this._addToClonedElementsGroup(o);
                    const r = i.childCount - n, s = i._removeChildren(n, r);
                    o._appendChild(s);
                    const a = new g.a(i.parent, t);
                    return this._breakAttributes(a, e)
                }
            }

            _addToClonedElementsGroup(t) {
                if (!t.root.is("rootElement")) return;
                if (t.is("element")) for (const e of t.getChildren()) this._addToClonedElementsGroup(e);
                const e = t.id;
                if (!e) return;
                let n = this._cloneGroups.get(e);
                n || (n = new Set, this._cloneGroups.set(e, n)), n.add(t), t._clonesGroup = n
            }

            _removeFromClonedElementsGroup(t) {
                if (t.is("element")) for (const e of t.getChildren()) this._removeFromClonedElementsGroup(e);
                const e = t.id;
                if (!e) return;
                const n = this._cloneGroups.get(e);
                n && n.delete(t)
            }
        }

        function L(t) {
            let e = t.parent;
            for (; !H(e);) {
                if (!e) return;
                e = e.parent
            }
            return e
        }

        function V(t, e) {
            return t.priority < e.priority || !(t.priority > e.priority) && t.getIdentity() < e.getIdentity()
        }

        function z(t) {
            const e = t.nodeBefore;
            if (e && e.is("text")) return new g.a(e, e.data.length);
            const n = t.nodeAfter;
            return n && n.is("text") ? new g.a(n, 0) : t
        }

        function B(t) {
            if (t.offset == t.parent.data.length) return new g.a(t.parent.parent, t.parent.index + 1);
            if (0 === t.offset) return new g.a(t.parent.parent, t.parent.index);
            const e = t.parent.data.slice(t.offset);
            return t.parent._data = t.parent.data.slice(0, t.offset), t.parent.parent._insertChild(t.parent.index + 1, new R.a(e)), new g.a(t.parent.parent, t.parent.index + 1)
        }

        function F(t, e) {
            const n = t.data.length;
            return t._data += e.data, e._remove(), new g.a(t, n)
        }

        const U = [R.a, x, k.a, P, S];

        function H(t) {
            return t && (t.is("containerElement") || t.is("documentFragment"))
        }

        function q(t, e) {
            const n = L(t.start), i = L(t.end);
            if (!n || !i || n !== i) throw new v.b("view-writer-invalid-range-container", e)
        }

        function W(t, e) {
            return null === t.id && null === e.id
        }

        var Y = n(14);

        function $(t, e, n, i = !1) {
            n = n || function (t, e) {
                return t === e
            }, Array.isArray(t) || (t = Array.from(t)), Array.isArray(e) || (e = Array.from(e));
            const o = function (t, e, n) {
                const i = G(t, e, n);
                if (-1 === i) return {firstIndex: -1, lastIndexOld: -1, lastIndexNew: -1};
                const o = Q(t, i), r = Q(e, i), s = G(o, r, n), a = t.length - s, c = e.length - s;
                return {firstIndex: i, lastIndexOld: a, lastIndexNew: c}
            }(t, e, n);
            return i ? function (t, e) {
                const {firstIndex: n, lastIndexOld: i, lastIndexNew: o} = t;
                if (-1 === n) return Array(e).fill("equal");
                let r = [];
                n > 0 && (r = r.concat(Array(n).fill("equal")));
                o - n > 0 && (r = r.concat(Array(o - n).fill("insert")));
                i - n > 0 && (r = r.concat(Array(i - n).fill("delete")));
                o < e && (r = r.concat(Array(e - o).fill("equal")));
                return r
            }(o, e.length) : function (t, e) {
                const n = [], {firstIndex: i, lastIndexOld: o, lastIndexNew: r} = e;
                r - i > 0 && n.push({index: i, type: "insert", values: t.slice(i, r)});
                o - i > 0 && n.push({index: i + (r - i), type: "delete", howMany: o - i});
                return n
            }(e, o)
        }

        function G(t, e, n) {
            for (let i = 0; i < Math.max(t.length, e.length); i++) if (void 0 === t[i] || void 0 === e[i] || !n(t[i], e[i])) return i;
            return -1
        }

        function Q(t, e) {
            return t.slice(e).reverse()
        }

        function J(t, e, n) {
            n = n || function (t, e) {
                return t === e
            };
            const i = t.length, o = e.length;
            if (i > 200 || o > 200 || i + o > 300) return J.fastDiff(t, e, n, !0);
            let r, s;
            if (o < i) {
                const n = t;
                t = e, e = n, r = "delete", s = "insert"
            } else r = "insert", s = "delete";
            const a = t.length, c = e.length, l = c - a, d = {}, u = {};

            function h(i) {
                const o = (void 0 !== u[i - 1] ? u[i - 1] : -1) + 1, l = void 0 !== u[i + 1] ? u[i + 1] : -1,
                    h = o > l ? -1 : 1;
                d[i + h] && (d[i] = d[i + h].slice(0)), d[i] || (d[i] = []), d[i].push(o > l ? r : s);
                let f = Math.max(o, l), m = f - i;
                for (; m < a && f < c && n(t[m], e[f]);) m++, f++, d[i].push("equal");
                return f
            }

            let f, m = 0;
            do {
                for (f = -m; f < l; f++) u[f] = h(f);
                for (f = l + m; f > l; f--) u[f] = h(f);
                u[l] = h(l), m++
            } while (u[l] !== c);
            return d[l].slice(1)
        }

        function K(t, e, n) {
            t.insertBefore(n, t.childNodes[e] || null)
        }

        function Z(t) {
            const e = t.parentNode;
            e && e.removeChild(t)
        }

        J.fastDiff = $;
        var X = n(26), tt = n(65), et = n(23);

        class nt {
            constructor(t, e) {
                this.domDocuments = new Set, this.domConverter = t, this.markedAttributes = new Set, this.markedChildren = new Set, this.markedTexts = new Set, this.selection = e, this.isFocused = !1, this._inlineFiller = null, this._fakeSelectionContainer = null
            }

            markToSync(t, e) {
                if ("text" === t) this.domConverter.mapViewToDom(e.parent) && this.markedTexts.add(e); else {
                    if (!this.domConverter.mapViewToDom(e)) return;
                    if ("attributes" === t) this.markedAttributes.add(e); else {
                        if ("children" !== t) throw new v.b("view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.", this);
                        this.markedChildren.add(e)
                    }
                }
            }

            render() {
                let t;
                for (const t of this.markedChildren) this._updateChildrenMappings(t);
                this._inlineFiller && !this._isSelectionInInlineFiller() && this._removeInlineFiller(), this._inlineFiller ? t = this._getInlineFillerPosition() : this._needsInlineFillerAtSelection() && (t = this.selection.getFirstPosition(), this.markedChildren.add(t.parent));
                for (const t of this.markedAttributes) this._updateAttrs(t);
                for (const e of this.markedChildren) this._updateChildren(e, {inlineFillerPosition: t});
                for (const e of this.markedTexts) !this.markedChildren.has(e.parent) && this.domConverter.mapViewToDom(e.parent) && this._updateText(e, {inlineFillerPosition: t});
                if (t) {
                    const e = this.domConverter.viewPositionToDom(t), n = e.parent.ownerDocument;
                    Object(Y.i)(e.parent) ? this._inlineFiller = e.parent : this._inlineFiller = it(n, e.parent, e.offset)
                } else this._inlineFiller = null;
                this._updateSelection(), this._updateFocus(), this.markedTexts.clear(), this.markedAttributes.clear(), this.markedChildren.clear()
            }

            _updateChildrenMappings(t) {
                const e = this.domConverter.mapViewToDom(t);
                if (!e) return;
                const n = this.domConverter.mapViewToDom(t).childNodes,
                    i = Array.from(this.domConverter.viewChildrenToDom(t, e.ownerDocument, {withChildren: !1})),
                    o = this._diffNodeLists(n, i), r = this._findReplaceActions(o, n, i);
                if (-1 !== r.indexOf("replace")) {
                    const e = {equal: 0, insert: 0, delete: 0};
                    for (const o of r) if ("replace" === o) {
                        const o = e.equal + e.insert, r = e.equal + e.delete, s = t.getChild(o);
                        s && !s.is("uiElement") && this._updateElementMappings(s, n[r]), Z(i[o]), e.equal++
                    } else e[o]++
                }
            }

            _updateElementMappings(t, e) {
                this.domConverter.unbindDomElement(e), this.domConverter.bindElements(e, t), this.markedChildren.add(t), this.markedAttributes.add(t)
            }

            _getInlineFillerPosition() {
                const t = this.selection.getFirstPosition();
                return t.parent.is("text") ? g.a._createBefore(this.selection.getFirstPosition().parent) : t
            }

            _isSelectionInInlineFiller() {
                if (1 != this.selection.rangeCount || !this.selection.isCollapsed) return !1;
                const t = this.selection.getFirstPosition(), e = this.domConverter.viewPositionToDom(t);
                return !!(e && Object(X.a)(e.parent) && Object(Y.i)(e.parent))
            }

            _removeInlineFiller() {
                const t = this._inlineFiller;
                if (!Object(Y.i)(t)) throw new v.b("view-renderer-filler-was-lost: The inline filler node was lost.", this);
                Object(Y.h)(t) ? t.parentNode.removeChild(t) : t.data = t.data.substr(Y.c), this._inlineFiller = null
            }

            _needsInlineFillerAtSelection() {
                if (1 != this.selection.rangeCount || !this.selection.isCollapsed) return !1;
                const t = this.selection.getFirstPosition(), e = t.parent, n = t.offset;
                if (!this.domConverter.mapViewToDom(e.root)) return !1;
                if (!e.is("element")) return !1;
                if (!function (t) {
                    if ("false" == t.getAttribute("contenteditable")) return !1;
                    const e = t.findAncestor(t => t.hasAttribute("contenteditable"));
                    return !e || "true" == e.getAttribute("contenteditable")
                }(e)) return !1;
                if (n === e.getFillerOffset()) return !1;
                const i = t.nodeBefore, o = t.nodeAfter;
                return !(i instanceof R.a || o instanceof R.a)
            }

            _updateText(t, e) {
                const n = this.domConverter.findCorrespondingDomText(t),
                    i = this.domConverter.viewToDom(t, n.ownerDocument), o = n.data;
                let r = i.data;
                const s = e.inlineFillerPosition;
                if (s && s.parent == t.parent && s.offset == t.index && (r = Y.b + r), o != r) {
                    const t = $(o, r);
                    for (const e of t) "insert" === e.type ? n.insertData(e.index, e.values.join("")) : n.deleteData(e.index, e.howMany)
                }
            }

            _updateAttrs(t) {
                const e = this.domConverter.mapViewToDom(t);
                if (!e) return;
                const n = Array.from(e.attributes).map(t => t.name), i = t.getAttributeKeys();
                for (const n of i) e.setAttribute(n, t.getAttribute(n));
                for (const i of n) t.hasAttribute(i) || e.removeAttribute(i)
            }

            _updateChildren(t, e) {
                const n = this.domConverter.mapViewToDom(t);
                if (!n) return;
                const i = e.inlineFillerPosition, o = this.domConverter.mapViewToDom(t).childNodes,
                    r = Array.from(this.domConverter.viewChildrenToDom(t, n.ownerDocument, {
                        bind: !0,
                        inlineFillerPosition: i
                    }));
                i && i.parent === t && it(n.ownerDocument, r, i.offset);
                const s = this._diffNodeLists(o, r);
                let a = 0;
                const c = new Set;
                for (const t of s) "insert" === t ? (K(n, a, r[a]), a++) : "delete" === t ? (c.add(o[a]), Z(o[a])) : (this._markDescendantTextToSync(this.domConverter.domToView(r[a])), a++);
                for (const t of c) t.parentNode || this.domConverter.unbindDomElement(t)
            }

            _diffNodeLists(t, e) {
                return J(t = function (t, e) {
                    const n = Array.from(t);
                    if (0 == n.length || !e) return n;
                    n[n.length - 1] == e && n.pop();
                    return n
                }(t, this._fakeSelectionContainer), e, function (t, e, n) {
                    if (e === n) return !0;
                    if (Object(X.a)(e) && Object(X.a)(n)) return e.data === n.data;
                    if (Object(Y.g)(e, t) && Object(Y.g)(n, t)) return !0;
                    return !1
                }.bind(null, this.domConverter.blockFiller))
            }

            _findReplaceActions(t, e, n) {
                if (-1 === t.indexOf("insert") || -1 === t.indexOf("delete")) return t;
                let i = [], o = [], r = [];
                const s = {equal: 0, insert: 0, delete: 0};
                for (const a of t) "insert" === a ? r.push(n[s.equal + s.insert]) : "delete" === a ? o.push(e[s.equal + s.delete]) : ((i = i.concat(J(o, r, ot).map(t => "equal" === t ? "replace" : t))).push("equal"), o = [], r = []), s[a]++;
                return i.concat(J(o, r, ot).map(t => "equal" === t ? "replace" : t))
            }

            _markDescendantTextToSync(t) {
                if (t) if (t.is("text")) this.markedTexts.add(t); else if (t.is("element")) for (const e of t.getChildren()) this._markDescendantTextToSync(e)
            }

            _updateSelection() {
                if (0 === this.selection.rangeCount) return this._removeDomSelection(), void this._removeFakeSelection();
                const t = this.domConverter.mapViewToDom(this.selection.editableElement);
                this.isFocused && t && (this.selection.isFake ? this._updateFakeSelection(t) : (this._removeFakeSelection(), this._updateDomSelection(t)))
            }

            _updateFakeSelection(t) {
                const e = t.ownerDocument;
                let n = this._fakeSelectionContainer;
                n || (this._fakeSelectionContainer = n = e.createElement("div"), Object.assign(n.style, {
                    position: "fixed",
                    top: 0,
                    left: "-9999px",
                    width: "42px"
                }), n.textContent = " "), n.parentElement && n.parentElement == t || t.appendChild(n), n.textContent = this.selection.fakeSelectionLabel || " ";
                const i = e.getSelection(), o = e.createRange();
                i.removeAllRanges(), o.selectNodeContents(n), i.addRange(o), this.domConverter.bindFakeSelection(n, this.selection)
            }

            _updateDomSelection(t) {
                const e = t.ownerDocument.defaultView.getSelection();
                if (!this._domSelectionNeedsUpdate(e)) return;
                const n = this.domConverter.viewPositionToDom(this.selection.anchor),
                    i = this.domConverter.viewPositionToDom(this.selection.focus);
                t.focus(), e.collapse(n.parent, n.offset), e.extend(i.parent, i.offset), et.a.isGecko && function (t, e) {
                    const n = t.parent;
                    if (n.nodeType != Node.ELEMENT_NODE || t.offset != n.childNodes.length - 1) return;
                    const i = n.childNodes[t.offset];
                    i && "BR" == i.tagName && e.addRange(e.getRangeAt(0))
                }(i, e)
            }

            _domSelectionNeedsUpdate(t) {
                if (!this.domConverter.isDomSelectionCorrect(t)) return !0;
                const e = t && this.domConverter.domSelectionToView(t);
                return (!e || !this.selection.isEqual(e)) && !(!this.selection.isCollapsed && this.selection.isSimilar(e))
            }

            _removeDomSelection() {
                for (const t of this.domDocuments) {
                    if (t.getSelection().rangeCount) {
                        const e = t.activeElement, n = this.domConverter.mapDomToView(e);
                        e && n && t.getSelection().removeAllRanges()
                    }
                }
            }

            _removeFakeSelection() {
                const t = this._fakeSelectionContainer;
                t && t.remove()
            }

            _updateFocus() {
                if (this.isFocused) {
                    const t = this.selection.editableElement;
                    t && this.domConverter.focus(t)
                }
            }
        }

        function it(t, e, n) {
            const i = e instanceof Array ? e : e.childNodes, o = i[n];
            if (Object(X.a)(o)) return o.data = Y.b + o.data, o;
            {
                const o = t.createTextNode(Y.b);
                return Array.isArray(e) ? i.splice(n, 0, o) : K(e, n, o), o
            }
        }

        function ot(t, e) {
            return Object(tt.a)(t) && Object(tt.a)(e) && !Object(X.a)(t) && !Object(X.a)(e) && t.tagName.toLowerCase() === e.tagName.toLowerCase()
        }

        Object(f.a)(nt, m.a);
        var rt = n(72), st = n(42), at = n(112);
        var ct = function (t, e, n) {
            var i = (n = "function" == typeof n ? n : void 0) ? n(t, e) : void 0;
            return void 0 === i ? Object(at.a)(t, e, void 0, n) : !!i
        };

        class lt extends st.a {
            constructor(t) {
                super(t), this._config = {
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    subtree: !0
                }, this.domConverter = t.domConverter, this.renderer = t._renderer, this._domElements = [], this._mutationObserver = new window.MutationObserver(this._onMutations.bind(this))
            }

            flush() {
                this._onMutations(this._mutationObserver.takeRecords())
            }

            observe(t) {
                this._domElements.push(t), this.isEnabled && this._mutationObserver.observe(t, this._config)
            }

            enable() {
                super.enable();
                for (const t of this._domElements) this._mutationObserver.observe(t, this._config)
            }

            disable() {
                super.disable(), this._mutationObserver.disconnect()
            }

            destroy() {
                super.destroy(), this._mutationObserver.disconnect()
            }

            _onMutations(t) {
                if (0 === t.length) return;
                const e = this.domConverter, n = new Map, i = new Set;
                for (const n of t) if ("childList" === n.type) {
                    const t = e.mapDomToView(n.target);
                    if (t && t.is("uiElement")) continue;
                    t && !this._isBogusBrMutation(n) && i.add(t)
                }
                for (const o of t) {
                    const t = e.mapDomToView(o.target);
                    if ((!t || !t.is("uiElement")) && "characterData" === o.type) {
                        const t = e.findCorrespondingViewText(o.target);
                        t && !i.has(t.parent) ? n.set(t, {
                            type: "text",
                            oldText: t.data,
                            newText: Object(Y.e)(o.target),
                            node: t
                        }) : !t && Object(Y.i)(o.target) && i.add(e.mapDomToView(o.target.parentNode))
                    }
                }
                const o = [];
                for (const t of n.values()) this.renderer.markToSync("text", t.node), o.push(t);
                for (const t of i) {
                    const n = e.mapViewToDom(t), i = Array.from(t.getChildren()),
                        r = Array.from(e.domChildrenToView(n, {withChildren: !1}));
                    ct(i, r, a) || (this.renderer.markToSync("children", t), o.push({
                        type: "children",
                        oldChildren: i,
                        newChildren: r,
                        node: t
                    }))
                }
                const r = t[0].target.ownerDocument.getSelection();
                let s = null;
                if (r && r.anchorNode) {
                    const t = e.domPositionToView(r.anchorNode, r.anchorOffset),
                        n = e.domPositionToView(r.focusNode, r.focusOffset);
                    t && n && (s = new w.a(t)).setFocus(n)
                }

                function a(t, e) {
                    if (!Array.isArray(t)) return t === e || !(!t.is("text") || !e.is("text")) && t.data === e.data
                }

                this.document.fire("mutations", o, s), this.view.forceRender()
            }

            _isBogusBrMutation(t) {
                let e = null;
                return null === t.nextSibling && 0 === t.removedNodes.length && 1 == t.addedNodes.length && (e = this.domConverter.domToView(t.addedNodes[0], {withChildren: !1})), e && e.is("element", "br")
            }
        }

        var dt = n(43);

        class ut extends dt.a {
            constructor(t) {
                super(t), this.domEventType = ["keydown", "keyup"]
            }

            onDomEvent(t) {
                this.fire(t.type, t, {
                    keyCode: t.keyCode,
                    altKey: t.altKey,
                    ctrlKey: t.ctrlKey || t.metaKey,
                    shiftKey: t.shiftKey,
                    get keystroke() {
                        return Object(O.a)(this)
                    }
                })
            }
        }

        var ht = n(32), ft = n(22), mt = function () {
            return ft.a.Date.now()
        }, pt = n(47), gt = n(31), bt = "[object Symbol]";
        var wt = function (t) {
            return "symbol" == typeof t || Object(gt.a)(t) && Object(pt.a)(t) == bt
        }, kt = NaN, _t = /^\s+|\s+$/g, vt = /^[-+]0x[0-9a-f]+$/i, yt = /^0b[01]+$/i, xt = /^0o[0-7]+$/i, At = parseInt;
        var Tt = function (t) {
            if ("number" == typeof t) return t;
            if (wt(t)) return kt;
            if (Object(ht.a)(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = Object(ht.a)(e) ? e + "" : e
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(_t, "");
            var n = yt.test(t);
            return n || xt.test(t) ? At(t.slice(2), n ? 2 : 8) : vt.test(t) ? kt : +t
        }, Ct = "Expected a function", Pt = Math.max, Mt = Math.min;
        var Ot = function (t, e, n) {
            var i, o, r, s, a, c, l = 0, d = !1, u = !1, h = !0;
            if ("function" != typeof t) throw new TypeError(Ct);

            function f(e) {
                var n = i, r = o;
                return i = o = void 0, l = e, s = t.apply(r, n)
            }

            function m(t) {
                var n = t - c;
                return void 0 === c || n >= e || n < 0 || u && t - l >= r
            }

            function p() {
                var t = mt();
                if (m(t)) return g(t);
                a = setTimeout(p, function (t) {
                    var n = e - (t - c);
                    return u ? Mt(n, r - (t - l)) : n
                }(t))
            }

            function g(t) {
                return a = void 0, h && i ? f(t) : (i = o = void 0, s)
            }

            function b() {
                var t = mt(), n = m(t);
                if (i = arguments, o = this, c = t, n) {
                    if (void 0 === a) return function (t) {
                        return l = t, a = setTimeout(p, e), d ? f(t) : s
                    }(c);
                    if (u) return clearTimeout(a), a = setTimeout(p, e), f(c)
                }
                return void 0 === a && (a = setTimeout(p, e)), s
            }

            return e = Tt(e) || 0, Object(ht.a)(n) && (d = !!n.leading, r = (u = "maxWait" in n) ? Pt(Tt(n.maxWait) || 0, e) : r, h = "trailing" in n ? !!n.trailing : h), b.cancel = function () {
                void 0 !== a && clearTimeout(a), l = 0, i = c = o = a = void 0
            }, b.flush = function () {
                return void 0 === a ? s : g(mt())
            }, b
        };

        class St extends st.a {
            constructor(t) {
                super(t), this._fireSelectionChangeDoneDebounced = Ot(t => this.document.fire("selectionChangeDone", t), 200)
            }

            observe() {
                const t = this.document;
                t.on("keydown", (e, n) => {
                    t.selection.isFake && function (t) {
                        return t == O.c.arrowright || t == O.c.arrowleft || t == O.c.arrowup || t == O.c.arrowdown
                    }(n.keyCode) && this.isEnabled && (n.preventDefault(), this._handleSelectionMove(n.keyCode))
                }, {priority: "lowest"})
            }

            destroy() {
                super.destroy(), this._fireSelectionChangeDoneDebounced.cancel()
            }

            _handleSelectionMove(t) {
                const e = this.document.selection, n = new w.a(e.getRanges(), {backward: e.isBackward, fake: !1});
                t != O.c.arrowleft && t != O.c.arrowup || n.setTo(n.getFirstPosition()), t != O.c.arrowright && t != O.c.arrowdown || n.setTo(n.getLastPosition());
                const i = {oldSelection: e, newSelection: n, domSelection: null};
                this.document.fire("selectionChange", i), this._fireSelectionChangeDoneDebounced(i)
            }
        }

        class Et extends st.a {
            constructor(t) {
                super(t), this.mutationObserver = t.getObserver(lt), this.selection = this.document.selection, this.domConverter = t.domConverter, this._documents = new WeakSet, this._fireSelectionChangeDoneDebounced = Ot(t => this.document.fire("selectionChangeDone", t), 200), this._clearInfiniteLoopInterval = setInterval(() => this._clearInfiniteLoop(), 1e3), this._loopbackCounter = 0
            }

            observe(t) {
                const e = t.ownerDocument;
                this._documents.has(e) || (this.listenTo(e, "selectionchange", () => {
                    this._handleSelectionChange(e)
                }), this._documents.add(e))
            }

            destroy() {
                super.destroy(), clearInterval(this._clearInfiniteLoopInterval), this._fireSelectionChangeDoneDebounced.cancel()
            }

            _handleSelectionChange(t) {
                if (!this.isEnabled || !this.document.isFocused && !this.document.isReadOnly) return;
                this.mutationObserver.flush();
                const e = t.defaultView.getSelection(), n = this.domConverter.domSelectionToView(e);
                if (!(this.selection.isEqual(n) && this.domConverter.isDomSelectionCorrect(e) || ++this._loopbackCounter > 60)) if (this.selection.isSimilar(n)) this.view.forceRender(); else {
                    const t = {oldSelection: this.selection, newSelection: n, domSelection: e};
                    this.document.fire("selectionChange", t), this._fireSelectionChangeDoneDebounced(t)
                }
            }

            _clearInfiniteLoop() {
                this._loopbackCounter = 0
            }
        }

        class It extends dt.a {
            constructor(t) {
                super(t), this.domEventType = ["focus", "blur"], this.useCapture = !0;
                const e = this.document;
                e.on("focus", () => {
                    e.isFocused = !0, this._renderTimeoutId = setTimeout(() => t.forceRender(), 50)
                }), e.on("blur", (n, i) => {
                    const o = e.selection.editableElement;
                    null !== o && o !== i.target || (e.isFocused = !1, t.forceRender())
                })
            }

            onDomEvent(t) {
                this.fire(t.type, t)
            }

            destroy() {
                this._renderTimeoutId && clearTimeout(this._renderTimeoutId), super.destroy()
            }
        }

        class Nt extends dt.a {
            constructor(t) {
                super(t), this.domEventType = ["compositionstart", "compositionupdate", "compositionend"];
                const e = this.document;
                e.on("compositionstart", () => {
                    e.isComposing = !0
                }), e.on("compositionend", () => {
                    e.isComposing = !1
                })
            }

            onDomEvent(t) {
                this.fire(t.type, t)
            }
        }

        class jt extends dt.a {
            constructor(t) {
                super(t), this.domEventType = ["beforeinput"]
            }

            onDomEvent(t) {
                this.fire(t.type, t)
            }
        }

        function Rt(t) {
            return "[object Range]" == Object.prototype.toString.apply(t)
        }

        var Dt = n(90);

        function Lt(t) {
            const e = t.ownerDocument.defaultView.getComputedStyle(t);
            return {
                top: parseInt(e.borderTopWidth, 10),
                right: parseInt(e.borderRightWidth, 10),
                bottom: parseInt(e.borderBottomWidth, 10),
                left: parseInt(e.borderLeftWidth, 10)
            }
        }

        const Vt = ["top", "right", "bottom", "left", "width", "height"];

        class zt {
            constructor(t) {
                const e = Rt(t);
                if (Object.defineProperty(this, "_source", {
                    value: t._source || t,
                    writable: !0,
                    enumerable: !1
                }), Object(r.a)(t) || e) Bt(this, e ? zt.getDomRangeRects(t)[0] : t.getBoundingClientRect()); else if (Object(Dt.a)(t)) {
                    const {innerWidth: e, innerHeight: n} = t;
                    Bt(this, {top: 0, right: e, bottom: n, left: 0, width: e, height: n})
                } else Bt(this, t)
            }

            clone() {
                return new zt(this)
            }

            moveTo(t, e) {
                return this.top = e, this.right = t + this.width, this.bottom = e + this.height, this.left = t, this
            }

            moveBy(t, e) {
                return this.top += e, this.right += t, this.left += t, this.bottom += e, this
            }

            getIntersection(t) {
                const e = {
                    top: Math.max(this.top, t.top),
                    right: Math.min(this.right, t.right),
                    bottom: Math.min(this.bottom, t.bottom),
                    left: Math.max(this.left, t.left)
                };
                return e.width = e.right - e.left, e.height = e.bottom - e.top, e.width < 0 || e.height < 0 ? null : new zt(e)
            }

            getIntersectionArea(t) {
                const e = this.getIntersection(t);
                return e ? e.getArea() : 0
            }

            getArea() {
                return this.width * this.height
            }

            getVisible() {
                const t = this._source;
                let e = this.clone();
                if (!Ft(t)) {
                    let n = t.parentNode || t.commonAncestorContainer;
                    for (; n && !Ft(n);) {
                        const t = new zt(n), i = e.getIntersection(t);
                        if (!i) return null;
                        i.getArea() < e.getArea() && (e = i), n = n.parentNode
                    }
                }
                return e
            }

            isEqual(t) {
                for (const e of Vt) if (this[e] !== t[e]) return !1;
                return !0
            }

            contains(t) {
                const e = this.getIntersection(t);
                return !(!e || !e.isEqual(t))
            }

            excludeScrollbarsAndBorders() {
                const t = this._source;
                let e, n;
                if (Object(Dt.a)(t)) e = t.innerWidth - t.document.documentElement.clientWidth, n = t.innerHeight - t.document.documentElement.clientHeight; else {
                    const i = Lt(this._source);
                    e = t.offsetWidth - t.clientWidth, n = t.offsetHeight - t.clientHeight, this.moveBy(i.left, i.top)
                }
                return this.width -= e, this.right -= e, this.height -= n, this.bottom -= n, this
            }

            static getDomRangeRects(t) {
                const e = [], n = Array.from(t.getClientRects());
                if (n.length) for (const t of n) e.push(new zt(t)); else {
                    let n = t.startContainer;
                    Object(X.a)(n) && (n = n.parentNode);
                    const i = new zt(n.getBoundingClientRect());
                    i.right = i.left, i.width = 0, e.push(i)
                }
                return e
            }
        }

        function Bt(t, e) {
            for (const n of Vt) t[n] = e[n]
        }

        function Ft(t) {
            return !!Object(r.a)(t) && t === t.ownerDocument.body
        }

        function Ut({target: t, viewportOffset: e = 0}) {
            const n = Qt(t);
            let i = n, o = null;
            for (; i;) {
                let r;
                qt(r = Jt(i == n ? t : o), () => Kt(t, i));
                const s = Kt(t, i);
                if (Ht(i, s, e), i.parent != i) {
                    if (o = i.frameElement, i = i.parent, !o) return
                } else i = null
            }
        }

        function Ht(t, e, n) {
            const i = e.clone().moveBy(0, n), o = e.clone().moveBy(0, -n), r = new zt(t).excludeScrollbarsAndBorders();
            if (![o, i].every(t => r.contains(t))) {
                let {scrollX: s, scrollY: a} = t;
                Yt(o, r) ? a -= r.top - e.top + n : Wt(i, r) && (a += e.bottom - r.bottom + n), $t(e, r) ? s -= r.left - e.left + n : Gt(e, r) && (s += e.right - r.right + n), t.scrollTo(s, a)
            }
        }

        function qt(t, e) {
            const n = Qt(t);
            let i, o;
            for (; t != n.document.body;) o = e(), (i = new zt(t).excludeScrollbarsAndBorders()).contains(o) || (Yt(o, i) ? t.scrollTop -= i.top - o.top : Wt(o, i) && (t.scrollTop += o.bottom - i.bottom), $t(o, i) ? t.scrollLeft -= i.left - o.left : Gt(o, i) && (t.scrollLeft += o.right - i.right)), t = t.parentNode
        }

        function Wt(t, e) {
            return t.bottom > e.bottom
        }

        function Yt(t, e) {
            return t.top < e.top
        }

        function $t(t, e) {
            return t.left < e.left
        }

        function Gt(t, e) {
            return t.right > e.right
        }

        function Qt(t) {
            return Rt(t) ? t.startContainer.ownerDocument.defaultView : t.ownerDocument.defaultView
        }

        function Jt(t) {
            if (Rt(t)) {
                let e = t.commonAncestorContainer;
                return Object(X.a)(e) && (e = e.parentNode), e
            }
            return t.parentNode
        }

        function Kt(t, e) {
            const n = Qt(t), i = new zt(t);
            if (n === e) return i;
            {
                let t = n;
                for (; t != e;) {
                    const e = t.frameElement, n = new zt(e).excludeScrollbarsAndBorders();
                    i.moveBy(n.left, n.top), t = t.parent
                }
            }
            return i
        }

        Object.assign({}, {
            scrollViewportToShowTarget: Ut, scrollAncestorsToShowTarget: function (t) {
                qt(Jt(t), () => new zt(t))
            }
        });

        class Zt {
            constructor() {
                this.document = new p, this.domConverter = new rt.a, this.domRoots = new Map, this.set("isRenderingInProgress", !1), this._renderer = new nt(this.domConverter, this.document.selection), this._renderer.bind("isFocused").to(this.document), this._initialDomRootAttributes = new WeakMap, this._observers = new Map, this._ongoingChange = !1, this._postFixersInProgress = !1, this._renderingDisabled = !1, this._hasChangedSinceTheLastRendering = !1, this._writer = new D(this.document), this.addObserver(lt), this.addObserver(Et), this.addObserver(It), this.addObserver(ut), this.addObserver(St), this.addObserver(Nt), et.a.isAndroid && this.addObserver(jt), Object(Y.f)(this), E(this), this.on("render", () => {
                    this._render(), this.document.fire("layoutChanged"), this._hasChangedSinceTheLastRendering = !1
                }), this.listenTo(this.document.selection, "change", () => {
                    this._hasChangedSinceTheLastRendering = !0
                })
            }

            attachDomRoot(t, e = "main") {
                const n = this.document.getRoot(e);
                n._name = t.tagName.toLowerCase();
                const i = {};
                for (const {name: e, value: o} of Array.from(t.attributes)) i[e] = o, "class" === e ? this._writer.addClass(o.split(" "), n) : this._writer.setAttribute(e, o, n);
                this._initialDomRootAttributes.set(t, i);
                const o = () => {
                    this._writer.setAttribute("contenteditable", !n.isReadOnly, n), n.isReadOnly ? this._writer.addClass("ck-read-only", n) : this._writer.removeClass("ck-read-only", n)
                };
                o(), this.domRoots.set(e, t), this.domConverter.bindElements(t, n), this._renderer.markToSync("children", n), this._renderer.markToSync("attributes", n), this._renderer.domDocuments.add(t.ownerDocument), n.on("change:children", (t, e) => this._renderer.markToSync("children", e)), n.on("change:attributes", (t, e) => this._renderer.markToSync("attributes", e)), n.on("change:text", (t, e) => this._renderer.markToSync("text", e)), n.on("change:isReadOnly", () => this.change(o)), n.on("change", () => {
                    this._hasChangedSinceTheLastRendering = !0
                });
                for (const n of this._observers.values()) n.observe(t, e)
            }

            detachDomRoot(t) {
                const e = this.domRoots.get(t);
                Array.from(e.attributes).forEach(({name: t}) => e.removeAttribute(t));
                const n = this._initialDomRootAttributes.get(e);
                for (const t in n) e.setAttribute(t, n[t]);
                this.domRoots.delete(t), this.domConverter.unbindDomElement(e)
            }

            getDomRoot(t = "main") {
                return this.domRoots.get(t)
            }

            addObserver(t) {
                let e = this._observers.get(t);
                if (e) return e;
                e = new t(this), this._observers.set(t, e);
                for (const [t, n] of this.domRoots) e.observe(n, t);
                return e.enable(), e
            }

            getObserver(t) {
                return this._observers.get(t)
            }

            disableObservers() {
                for (const t of this._observers.values()) t.disable()
            }

            enableObservers() {
                for (const t of this._observers.values()) t.enable()
            }

            scrollToTheSelection() {
                const t = this.document.selection.getFirstRange();
                t && Ut({target: this.domConverter.viewRangeToDom(t), viewportOffset: 20})
            }

            focus() {
                if (!this.document.isFocused) {
                    const t = this.document.selection.editableElement;
                    t && (this.domConverter.focus(t), this.forceRender())
                }
            }

            change(t) {
                if (this.isRenderingInProgress || this._postFixersInProgress) throw new v.b("cannot-change-view-tree: Attempting to make changes to the view when it is in an incorrect state: rendering or post-fixers are in progress. This may cause some unexpected behavior and inconsistency between the DOM and the view.", this);
                if (this._ongoingChange) return t(this._writer);
                this._ongoingChange = !0;
                const e = t(this._writer);
                return this._ongoingChange = !1, !this._renderingDisabled && this._hasChangedSinceTheLastRendering && (this._postFixersInProgress = !0, this.document._callPostFixers(this._writer), this._postFixersInProgress = !1, this.fire("render")), e
            }

            forceRender() {
                this._hasChangedSinceTheLastRendering = !0, this.change(() => {
                })
            }

            destroy() {
                for (const t of this._observers.values()) t.destroy();
                this.document.destroy(), this.stopListening()
            }

            createPositionAt(t, e) {
                return g.a._createAt(t, e)
            }

            createPositionAfter(t) {
                return g.a._createAfter(t)
            }

            createPositionBefore(t) {
                return g.a._createBefore(t)
            }

            createRange(t, e) {
                return new b.a(t, e)
            }

            createRangeOn(t) {
                return b.a._createOn(t)
            }

            createRangeIn(t) {
                return b.a._createIn(t)
            }

            createSelection(t, e, n) {
                return new w.a(t, e, n)
            }

            _disableRendering(t) {
                this._renderingDisabled = t, 0 == t && this.change(() => {
                })
            }

            _render() {
                this.isRenderingInProgress = !0, this.disableObservers(), this._renderer.render(), this.enableObservers(), this.isRenderingInProgress = !1
            }
        }

        Object(f.a)(Zt, m.a);
        var Xt = n(3), te = n(2), ee = n(8);

        class ne {
            constructor() {
                this._modelToViewMapping = new WeakMap, this._viewToModelMapping = new WeakMap, this._viewToModelLengthCallbacks = new Map, this._markerNameToElements = new Map, this._elementToMarkerNames = new Map, this._unboundMarkerNames = new Set, this.on("modelToViewPosition", (t, e) => {
                    if (e.viewPosition) return;
                    const n = this._modelToViewMapping.get(e.modelPosition.parent);
                    e.viewPosition = this._findPositionIn(n, e.modelPosition.offset)
                }, {priority: "low"}), this.on("viewToModelPosition", (t, e) => {
                    if (e.modelPosition) return;
                    const n = this.findMappedViewAncestor(e.viewPosition), i = this._viewToModelMapping.get(n),
                        o = this._toModelOffset(e.viewPosition.parent, e.viewPosition.offset, n);
                    e.modelPosition = Xt.a._createAt(i, o)
                }, {priority: "low"})
            }

            bindElements(t, e) {
                this._modelToViewMapping.set(t, e), this._viewToModelMapping.set(e, t)
            }

            unbindViewElement(t) {
                const e = this.toModelElement(t);
                if (this._viewToModelMapping.delete(t), this._elementToMarkerNames.has(t)) for (const e of this._elementToMarkerNames.get(t)) this._unboundMarkerNames.add(e);
                this._modelToViewMapping.get(e) == t && this._modelToViewMapping.delete(e)
            }

            unbindModelElement(t) {
                const e = this.toViewElement(t);
                this._modelToViewMapping.delete(t), this._viewToModelMapping.get(e) == t && this._viewToModelMapping.delete(e)
            }

            bindElementToMarker(t, e) {
                const n = this._markerNameToElements.get(e) || new Set;
                n.add(t);
                const i = this._elementToMarkerNames.get(t) || new Set;
                i.add(e), this._markerNameToElements.set(e, n), this._elementToMarkerNames.set(t, i)
            }

            unbindElementFromMarkerName(t, e) {
                const n = this._markerNameToElements.get(e);
                n && (n.delete(t), 0 == n.size && this._markerNameToElements.delete(e));
                const i = this._elementToMarkerNames.get(t);
                i && (i.delete(e), 0 == i.size && this._elementToMarkerNames.delete(t))
            }

            flushUnboundMarkerNames() {
                const t = Array.from(this._unboundMarkerNames);
                return this._unboundMarkerNames.clear(), t
            }

            clearBindings() {
                this._modelToViewMapping = new WeakMap, this._viewToModelMapping = new WeakMap, this._markerNameToElements = new Map, this._elementToMarkerNames = new Map, this._unboundMarkerNames = new Set
            }

            toModelElement(t) {
                return this._viewToModelMapping.get(t)
            }

            toViewElement(t) {
                return this._modelToViewMapping.get(t)
            }

            toModelRange(t) {
                return new te.a(this.toModelPosition(t.start), this.toModelPosition(t.end))
            }

            toViewRange(t) {
                return new b.a(this.toViewPosition(t.start), this.toViewPosition(t.end))
            }

            toModelPosition(t) {
                const e = {viewPosition: t, mapper: this};
                return this.fire("viewToModelPosition", e), e.modelPosition
            }

            toViewPosition(t, e = {isPhantom: !1}) {
                const n = {modelPosition: t, mapper: this, isPhantom: e.isPhantom};
                return this.fire("modelToViewPosition", n), n.viewPosition
            }

            markerNameToElements(t) {
                const e = this._markerNameToElements.get(t);
                if (!e) return null;
                const n = new Set;
                for (const t of e) if (t.is("attributeElement")) for (const e of t.getElementsWithSameId()) n.add(e); else n.add(t);
                return n
            }

            registerViewToModelLength(t, e) {
                this._viewToModelLengthCallbacks.set(t, e)
            }

            findMappedViewAncestor(t) {
                let e = t.parent;
                for (; !this._viewToModelMapping.has(e);) e = e.parent;
                return e
            }

            _toModelOffset(t, e, n) {
                if (n != t) {
                    return this._toModelOffset(t.parent, t.index, n) + this._toModelOffset(t, e, t)
                }
                if (t.is("text")) return e;
                let i = 0;
                for (let n = 0; n < e; n++) i += this.getModelLength(t.getChild(n));
                return i
            }

            getModelLength(t) {
                if (this._viewToModelLengthCallbacks.get(t.name)) {
                    return this._viewToModelLengthCallbacks.get(t.name)(t)
                }
                if (this._viewToModelMapping.has(t)) return 1;
                if (t.is("text")) return t.data.length;
                if (t.is("uiElement")) return 0;
                {
                    let e = 0;
                    for (const n of t.getChildren()) e += this.getModelLength(n);
                    return e
                }
            }

            _findPositionIn(t, e) {
                let n, i = 0, o = 0, r = 0;
                if (t.is("text")) return new g.a(t, e);
                for (; o < e;) n = t.getChild(r), o += i = this.getModelLength(n), r++;
                return o == e ? this._moveViewPositionToTextNode(new g.a(t, r)) : this._findPositionIn(n, e - (o - i))
            }

            _moveViewPositionToTextNode(t) {
                const e = t.nodeBefore, n = t.nodeAfter;
                return e instanceof R.a ? new g.a(e, e.data.length) : n instanceof R.a ? new g.a(n, 0) : t
            }
        }

        Object(f.a)(ne, ee.c);
        var ie = n(37);

        class oe {
            constructor() {
                this._consumable = new Map, this._textProxyRegistry = new Map
            }

            add(t, e) {
                e = re(e), t instanceof ie.a && (t = this._getSymbolForTextProxy(t)), this._consumable.has(t) || this._consumable.set(t, new Map), this._consumable.get(t).set(e, !0)
            }

            consume(t, e) {
                return e = re(e), t instanceof ie.a && (t = this._getSymbolForTextProxy(t)), !!this.test(t, e) && (this._consumable.get(t).set(e, !1), !0)
            }

            test(t, e) {
                e = re(e), t instanceof ie.a && (t = this._getSymbolForTextProxy(t));
                const n = this._consumable.get(t);
                if (void 0 === n) return null;
                const i = n.get(e);
                return void 0 === i ? null : i
            }

            revert(t, e) {
                e = re(e), t instanceof ie.a && (t = this._getSymbolForTextProxy(t));
                const n = this.test(t, e);
                return !1 === n ? (this._consumable.get(t).set(e, !0), !0) : !0 !== n && null
            }

            _getSymbolForTextProxy(t) {
                let e = null;
                const n = this._textProxyRegistry.get(t.startOffset);
                if (n) {
                    const i = n.get(t.endOffset);
                    i && (e = i.get(t.parent))
                }
                return e || (e = this._addSymbolForTextProxy(t.startOffset, t.endOffset, t.parent)), e
            }

            _addSymbolForTextProxy(t, e, n) {
                const i = Symbol("textProxySymbol");
                let o, r;
                return (o = this._textProxyRegistry.get(t)) || (o = new Map, this._textProxyRegistry.set(t, o)), (r = o.get(e)) || (r = new Map, o.set(e, r)), r.set(n, i), i
            }
        }

        function re(t) {
            const e = t.split(":");
            return e.length > 1 ? e[0] + ":" + e[1] : e[0]
        }

        var se = n(116);

        class ae {
            constructor(t) {
                this.conversionApi = Object(se.a)({dispatcher: this}, t)
            }

            convertChanges(t, e, n) {
                for (const e of t.getMarkersToRemove()) this.convertMarkerRemove(e.name, e.range, n);
                for (const e of t.getChanges()) "insert" == e.type ? this.convertInsert(te.a._createFromPositionAndShift(e.position, e.length), n) : "remove" == e.type ? this.convertRemove(e.position, e.length, e.name, n) : this.convertAttribute(e.range, e.attributeKey, e.attributeOldValue, e.attributeNewValue, n);
                for (const t of this.conversionApi.mapper.flushUnboundMarkerNames()) {
                    const i = e.get(t).getRange();
                    this.convertMarkerRemove(t, i, n), this.convertMarkerAdd(t, i, n)
                }
                for (const e of t.getMarkersToAdd()) this.convertMarkerAdd(e.name, e.range, n)
            }

            convertInsert(t, e) {
                this.conversionApi.writer = e, this.conversionApi.consumable = this._createInsertConsumable(t);
                for (const e of t) {
                    const t = e.item,
                        n = {item: t, range: te.a._createFromPositionAndShift(e.previousPosition, e.length)};
                    this._testAndFire("insert", n);
                    for (const e of t.getAttributeKeys()) n.attributeKey = e, n.attributeOldValue = null, n.attributeNewValue = t.getAttribute(e), this._testAndFire(`attribute:${e}`, n)
                }
                this._clearConversionApi()
            }

            convertRemove(t, e, n, i) {
                this.conversionApi.writer = i, this.fire("remove:" + n, {
                    position: t,
                    length: e
                }, this.conversionApi), this._clearConversionApi()
            }

            convertAttribute(t, e, n, i, o) {
                this.conversionApi.writer = o, this.conversionApi.consumable = this._createConsumableForRange(t, `attribute:${e}`);
                for (const o of t) {
                    const t = {
                        item: o.item,
                        range: te.a._createFromPositionAndShift(o.previousPosition, o.length),
                        attributeKey: e,
                        attributeOldValue: n,
                        attributeNewValue: i
                    };
                    this._testAndFire(`attribute:${e}`, t)
                }
                this._clearConversionApi()
            }

            convertSelection(t, e, n) {
                const i = Array.from(e.getMarkersAtPosition(t.getFirstPosition()));
                if (this.conversionApi.writer = n, this.conversionApi.consumable = this._createSelectionConsumable(t, i), this.fire("selection", {selection: t}, this.conversionApi), t.isCollapsed) {
                    for (const e of i) {
                        const n = e.getRange();
                        if (!ce(t.getFirstPosition(), e, this.conversionApi.mapper)) continue;
                        const i = {item: t, markerName: e.name, markerRange: n};
                        this.conversionApi.consumable.test(t, "addMarker:" + e.name) && this.fire("addMarker:" + e.name, i, this.conversionApi)
                    }
                    for (const e of t.getAttributeKeys()) {
                        const n = {
                            item: t,
                            range: t.getFirstRange(),
                            attributeKey: e,
                            attributeOldValue: null,
                            attributeNewValue: t.getAttribute(e)
                        };
                        this.conversionApi.consumable.test(t, "attribute:" + n.attributeKey) && this.fire("attribute:" + n.attributeKey + ":$text", n, this.conversionApi)
                    }
                    this._clearConversionApi()
                }
            }

            convertMarkerAdd(t, e, n) {
                if (!e.root.document || "$graveyard" == e.root.rootName) return;
                this.conversionApi.writer = n;
                const i = "addMarker:" + t, o = new oe;
                if (o.add(e, i), this.conversionApi.consumable = o, this.fire(i, {
                    markerName: t,
                    markerRange: e
                }, this.conversionApi), o.test(e, i)) {
                    this.conversionApi.consumable = this._createConsumableForRange(e, i);
                    for (const n of e.getItems()) {
                        if (!this.conversionApi.consumable.test(n, i)) continue;
                        const o = {item: n, range: te.a._createOn(n), markerName: t, markerRange: e};
                        this.fire(i, o, this.conversionApi)
                    }
                    this._clearConversionApi()
                }
            }

            convertMarkerRemove(t, e, n) {
                e.root.document && "$graveyard" != e.root.rootName && (this.conversionApi.writer = n, this.fire("removeMarker:" + t, {
                    markerName: t,
                    markerRange: e
                }, this.conversionApi), this._clearConversionApi())
            }

            _createInsertConsumable(t) {
                const e = new oe;
                for (const n of t) {
                    const t = n.item;
                    e.add(t, "insert");
                    for (const n of t.getAttributeKeys()) e.add(t, "attribute:" + n)
                }
                return e
            }

            _createConsumableForRange(t, e) {
                const n = new oe;
                for (const i of t.getItems()) n.add(i, e);
                return n
            }

            _createSelectionConsumable(t, e) {
                const n = new oe;
                n.add(t, "selection");
                for (const i of e) n.add(t, "addMarker:" + i.name);
                for (const e of t.getAttributeKeys()) n.add(t, "attribute:" + e);
                return n
            }

            _testAndFire(t, e) {
                if (!this.conversionApi.consumable.test(e.item, t)) return;
                const n = e.item.name || "$text";
                this.fire(t + ":" + n, e, this.conversionApi)
            }

            _clearConversionApi() {
                delete this.conversionApi.writer, delete this.conversionApi.consumable
            }
        }

        function ce(t, e, n) {
            const i = e.getRange(), o = Array.from(t.getAncestors());
            return o.shift(), o.reverse(), !o.some(t => {
                if (i.containsItem(t)) {
                    return !!n.toViewElement(t).getCustomProperty("addHighlight")
                }
            })
        }

        Object(f.a)(ae, ee.c);
        var le = n(15), de = n(56);

        class ue {
            constructor(t, e, n) {
                this._lastRangeBackward = !1, this._ranges = [], this._attrs = new Map, t && this.setTo(t, e, n)
            }

            get anchor() {
                if (this._ranges.length > 0) {
                    const t = this._ranges[this._ranges.length - 1];
                    return this._lastRangeBackward ? t.end : t.start
                }
                return null
            }

            get focus() {
                if (this._ranges.length > 0) {
                    const t = this._ranges[this._ranges.length - 1];
                    return this._lastRangeBackward ? t.start : t.end
                }
                return null
            }

            get isCollapsed() {
                return 1 === this._ranges.length && this._ranges[0].isCollapsed
            }

            get rangeCount() {
                return this._ranges.length
            }

            get isBackward() {
                return !this.isCollapsed && this._lastRangeBackward
            }

            isEqual(t) {
                if (this.rangeCount != t.rangeCount) return !1;
                if (0 === this.rangeCount) return !0;
                if (!this.anchor.isEqual(t.anchor) || !this.focus.isEqual(t.focus)) return !1;
                for (const e of this._ranges) {
                    let n = !1;
                    for (const i of t._ranges) if (e.isEqual(i)) {
                        n = !0;
                        break
                    }
                    if (!n) return !1
                }
                return !0
            }

            * getRanges() {
                for (const t of this._ranges) yield new te.a(t.start, t.end)
            }

            getFirstRange() {
                let t = null;
                for (const e of this._ranges) t && !e.start.isBefore(t.start) || (t = e);
                return t ? new te.a(t.start, t.end) : null
            }

            getLastRange() {
                let t = null;
                for (const e of this._ranges) t && !e.end.isAfter(t.end) || (t = e);
                return t ? new te.a(t.start, t.end) : null
            }

            getFirstPosition() {
                const t = this.getFirstRange();
                return t ? t.start.clone() : null
            }

            getLastPosition() {
                const t = this.getLastRange();
                return t ? t.end.clone() : null
            }

            setTo(t, e, n) {
                if (null === t) this._setRanges([]); else if (t instanceof ue) this._setRanges(t.getRanges(), t.isBackward); else if (t && "function" == typeof t.getRanges) this._setRanges(t.getRanges(), t.isBackward); else if (t instanceof te.a) this._setRanges([t], !!e && !!e.backward); else if (t instanceof Xt.a) this._setRanges([new te.a(t)]); else if (t instanceof de.a) {
                    const i = !!n && !!n.backward;
                    let o;
                    if ("in" == e) o = te.a._createIn(t); else if ("on" == e) o = te.a._createOn(t); else {
                        if (void 0 === e) throw new v.b("model-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.", [this, t]);
                        o = new te.a(Xt.a._createAt(t, e))
                    }
                    this._setRanges([o], i)
                } else {
                    if (!Object(j.a)(t)) throw new v.b("model-selection-setTo-not-selectable: Cannot set the selection to the given place.", [this, t]);
                    this._setRanges(t, e && !!e.backward)
                }
            }

            _setRanges(t, e = !1) {
                const n = (t = Array.from(t)).some(e => {
                    if (!(e instanceof te.a)) throw new v.b("model-selection-set-ranges-not-range: Selection range set to an object that is not an instance of model.Range.", [this, t]);
                    return this._ranges.every(t => !t.isEqual(e))
                });
                if (t.length !== this._ranges.length || n) {
                    this._removeAllRanges();
                    for (const e of t) this._pushRange(e);
                    this._lastRangeBackward = !!e, this.fire("change:range", {directChange: !0})
                }
            }

            setFocus(t, e) {
                if (null === this.anchor) throw new v.b("model-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.", [this, t]);
                const n = Xt.a._createAt(t, e);
                if ("same" == n.compareWith(this.focus)) return;
                const i = this.anchor;
                this._ranges.length && this._popRange(), "before" == n.compareWith(i) ? (this._pushRange(new te.a(n, i)), this._lastRangeBackward = !0) : (this._pushRange(new te.a(i, n)), this._lastRangeBackward = !1), this.fire("change:range", {directChange: !0})
            }

            getAttribute(t) {
                return this._attrs.get(t)
            }

            getAttributes() {
                return this._attrs.entries()
            }

            getAttributeKeys() {
                return this._attrs.keys()
            }

            hasAttribute(t) {
                return this._attrs.has(t)
            }

            removeAttribute(t) {
                this.hasAttribute(t) && (this._attrs.delete(t), this.fire("change:attribute", {
                    attributeKeys: [t],
                    directChange: !0
                }))
            }

            setAttribute(t, e) {
                this.getAttribute(t) !== e && (this._attrs.set(t, e), this.fire("change:attribute", {
                    attributeKeys: [t],
                    directChange: !0
                }))
            }

            getSelectedElement() {
                if (1 !== this.rangeCount) return null;
                const t = this.getFirstRange(), e = t.start.nodeAfter, n = t.end.nodeBefore;
                return e instanceof le.a && e == n ? e : null
            }

            is(t) {
                return "selection" == t || "model:selection" == t
            }

            * getSelectedBlocks() {
                const t = new WeakSet;
                for (const e of this.getRanges()) {
                    const n = fe(e.start, t);
                    n && (yield n);
                    for (const n of e.getWalker()) "elementEnd" == n.type && he(n.item, t) && (yield n.item);
                    const i = fe(e.end, t);
                    i && !e.end.isTouching(Xt.a._createAt(i, 0)) && (yield i)
                }
            }

            * getTopMostBlocks() {
                const t = Array.from(this.getSelectedBlocks());
                for (const e of t) {
                    const n = me(e);
                    n && t.includes(n) || (yield e)
                }
            }

            containsEntireContent(t = this.anchor.root) {
                const e = Xt.a._createAt(t, 0), n = Xt.a._createAt(t, "end");
                return e.isTouching(this.getFirstPosition()) && n.isTouching(this.getLastPosition())
            }

            _pushRange(t) {
                this._checkRange(t), this._ranges.push(new te.a(t.start, t.end))
            }

            _checkRange(t) {
                for (let e = 0; e < this._ranges.length; e++) if (t.isIntersecting(this._ranges[e])) throw new v.b("model-selection-range-intersects: Trying to add a range that intersects with another range in the selection.", [this, t], {
                    addedRange: t,
                    intersectingRange: this._ranges[e]
                })
            }

            _removeAllRanges() {
                for (; this._ranges.length > 0;) this._popRange()
            }

            _popRange() {
                this._ranges.pop()
            }
        }

        function he(t, e) {
            return !e.has(t) && (e.add(t), t.document.model.schema.isBlock(t) && t.parent)
        }

        function fe(t, e) {
            const n = t.parent.document.model.schema, i = t.parent.getAncestors({parentFirst: !0, includeSelf: !0});
            let o = !1;
            const r = i.find(t => !o && (!(o = n.isLimit(t)) && he(t, e)));
            return i.forEach(t => e.add(t)), r
        }

        function me(t) {
            const e = t.document.model.schema;
            let n = t.parent;
            for (; n;) {
                if (e.isBlock(n)) return n;
                n = n.parent
            }
        }

        Object(f.a)(ue, ee.c);
        var pe = n(51), ge = n(16), be = n(52), we = n(33);
        const ke = "selection:";

        class _e {
            constructor(t) {
                this._selection = new ve(t), this._selection.delegate("change:range").to(this), this._selection.delegate("change:attribute").to(this)
            }

            get isCollapsed() {
                return this._selection.isCollapsed
            }

            get anchor() {
                return this._selection.anchor
            }

            get focus() {
                return this._selection.focus
            }

            get rangeCount() {
                return this._selection.rangeCount
            }

            get hasOwnRange() {
                return this._selection.hasOwnRange
            }

            get isBackward() {
                return this._selection.isBackward
            }

            get isGravityOverridden() {
                return this._selection.isGravityOverridden
            }

            get markers() {
                return this._selection.markers
            }

            get _ranges() {
                return this._selection._ranges
            }

            getRanges() {
                return this._selection.getRanges()
            }

            getFirstPosition() {
                return this._selection.getFirstPosition()
            }

            getLastPosition() {
                return this._selection.getLastPosition()
            }

            getFirstRange() {
                return this._selection.getFirstRange()
            }

            getLastRange() {
                return this._selection.getLastRange()
            }

            getSelectedBlocks() {
                return this._selection.getSelectedBlocks()
            }

            getTopMostBlocks() {
                return this._selection.getTopMostBlocks()
            }

            getSelectedElement() {
                return this._selection.getSelectedElement()
            }

            containsEntireContent(t) {
                return this._selection.containsEntireContent(t)
            }

            destroy() {
                this._selection.destroy()
            }

            getAttributeKeys() {
                return this._selection.getAttributeKeys()
            }

            getAttributes() {
                return this._selection.getAttributes()
            }

            getAttribute(t) {
                return this._selection.getAttribute(t)
            }

            hasAttribute(t) {
                return this._selection.hasAttribute(t)
            }

            refresh() {
                this._selection._updateMarkers(), this._selection._updateAttributes(!1)
            }

            is(t) {
                return "selection" == t || "model:selection" == t || "documentSelection" == t || "model:documentSelection" == t
            }

            _setFocus(t, e) {
                this._selection.setFocus(t, e)
            }

            _setTo(t, e, n) {
                this._selection.setTo(t, e, n)
            }

            _setAttribute(t, e) {
                this._selection.setAttribute(t, e)
            }

            _removeAttribute(t) {
                this._selection.removeAttribute(t)
            }

            _getStoredAttributes() {
                return this._selection._getStoredAttributes()
            }

            _overrideGravity() {
                return this._selection.overrideGravity()
            }

            _restoreGravity(t) {
                this._selection.restoreGravity(t)
            }

            static _getStoreAttributeKey(t) {
                return ke + t
            }

            static _isStoreAttributeKey(t) {
                return t.startsWith(ke)
            }
        }

        Object(f.a)(_e, ee.c);

        class ve extends ue {
            constructor(t) {
                super(), this.markers = new h.a({idProperty: "name"}), this._model = t.model, this._document = t, this._attributePriority = new Map, this._fixGraveyardRangesData = [], this._hasChangedRange = !1, this._overriddenGravityRegister = new Set, this.listenTo(this._model, "applyOperation", (t, e) => {
                    const n = e[0];
                    if (n.isDocumentOperation && "marker" != n.type && "rename" != n.type && "noop" != n.type) {
                        for (; this._fixGraveyardRangesData.length;) {
                            const {liveRange: t, sourcePosition: e} = this._fixGraveyardRangesData.shift();
                            this._fixGraveyardSelection(t, e)
                        }
                        this._hasChangedRange && (this._hasChangedRange = !1, this.fire("change:range", {directChange: !1}))
                    }
                }, {priority: "lowest"}), this.on("change:range", () => {
                    for (const t of this.getRanges()) if (!this._document._validateSelectionRange(t)) throw new v.b("document-selection-wrong-position: Range from document selection starts or ends at incorrect position.", this, {range: t})
                }), this.listenTo(this._model.markers, "update", () => this._updateMarkers()), this.listenTo(this._document, "change", (t, e) => {
                    !function (t, e) {
                        const n = t.document.differ;
                        for (const i of n.getChanges()) {
                            if ("insert" != i.type) continue;
                            const n = i.position.parent, o = i.length === n.maxOffset;
                            o && t.enqueueChange(e, t => {
                                const e = Array.from(n.getAttributeKeys()).filter(t => t.startsWith(ke));
                                for (const i of e) t.removeAttribute(i, n)
                            })
                        }
                    }(this._model, e)
                })
            }

            get isCollapsed() {
                return 0 === this._ranges.length ? this._document._getDefaultRange().isCollapsed : super.isCollapsed
            }

            get anchor() {
                return super.anchor || this._document._getDefaultRange().start
            }

            get focus() {
                return super.focus || this._document._getDefaultRange().end
            }

            get rangeCount() {
                return this._ranges.length ? this._ranges.length : 1
            }

            get hasOwnRange() {
                return this._ranges.length > 0
            }

            get isGravityOverridden() {
                return !!this._overriddenGravityRegister.size
            }

            destroy() {
                for (let t = 0; t < this._ranges.length; t++) this._ranges[t].detach();
                this.stopListening()
            }

            * getRanges() {
                this._ranges.length ? yield* super.getRanges() : yield this._document._getDefaultRange()
            }

            getFirstRange() {
                return super.getFirstRange() || this._document._getDefaultRange()
            }

            getLastRange() {
                return super.getLastRange() || this._document._getDefaultRange()
            }

            setTo(t, e, n) {
                super.setTo(t, e, n), this._updateAttributes(!0)
            }

            setFocus(t, e) {
                super.setFocus(t, e), this._updateAttributes(!0)
            }

            setAttribute(t, e) {
                if (this._setAttribute(t, e)) {
                    const e = [t];
                    this.fire("change:attribute", {attributeKeys: e, directChange: !0})
                }
            }

            removeAttribute(t) {
                if (this._removeAttribute(t)) {
                    const e = [t];
                    this.fire("change:attribute", {attributeKeys: e, directChange: !0})
                }
            }

            overrideGravity() {
                const t = Object(we.a)();
                return this._overriddenGravityRegister.add(t), 1 === this._overriddenGravityRegister.size && this._updateAttributes(!0), t
            }

            restoreGravity(t) {
                if (!this._overriddenGravityRegister.has(t)) throw new v.b("document-selection-gravity-wrong-restore: Attempting to restore the selection gravity for an unknown UID.", this, {uid: t});
                this._overriddenGravityRegister.delete(t), this.isGravityOverridden || this._updateAttributes(!0)
            }

            _popRange() {
                this._ranges.pop().detach()
            }

            _pushRange(t) {
                const e = this._prepareRange(t);
                e && this._ranges.push(e)
            }

            _prepareRange(t) {
                if (this._checkRange(t), t.root == this._document.graveyard) return;
                const e = pe.a.fromRange(t);
                return e.on("change:range", (t, n, i) => {
                    this._hasChangedRange = !0, e.root == this._document.graveyard && this._fixGraveyardRangesData.push({
                        liveRange: e,
                        sourcePosition: i.deletionPosition
                    })
                }), e
            }

            _updateMarkers() {
                const t = [];
                for (const e of this._model.markers) {
                    const n = e.getRange();
                    for (const i of this.getRanges()) n.containsRange(i, !i.isCollapsed) && t.push(e)
                }
                for (const e of t) this.markers.has(e) || this.markers.add(e);
                for (const e of Array.from(this.markers)) t.includes(e) || this.markers.remove(e)
            }

            _updateAttributes(t) {
                const e = Object(be.a)(this._getSurroundingAttributes()), n = Object(be.a)(this.getAttributes());
                if (t) this._attributePriority = new Map, this._attrs = new Map; else for (const [t, e] of this._attributePriority) "low" == e && (this._attrs.delete(t), this._attributePriority.delete(t));
                this._setAttributesTo(e);
                const i = [];
                for (const [t, e] of this.getAttributes()) n.has(t) && n.get(t) === e || i.push(t);
                for (const [t] of n) this.hasAttribute(t) || i.push(t);
                i.length > 0 && this.fire("change:attribute", {attributeKeys: i, directChange: !1})
            }

            _setAttribute(t, e, n = !0) {
                const i = n ? "normal" : "low";
                return ("low" != i || "normal" != this._attributePriority.get(t)) && (super.getAttribute(t) !== e && (this._attrs.set(t, e), this._attributePriority.set(t, i), !0))
            }

            _removeAttribute(t, e = !0) {
                const n = e ? "normal" : "low";
                return ("low" != n || "normal" != this._attributePriority.get(t)) && (this._attributePriority.set(t, n), !!super.hasAttribute(t) && (this._attrs.delete(t), !0))
            }

            _setAttributesTo(t) {
                const e = new Set;
                for (const [e, n] of this.getAttributes()) t.get(e) !== n && this._removeAttribute(e, !1);
                for (const [n, i] of t) {
                    this._setAttribute(n, i, !1) && e.add(n)
                }
                return e
            }

            * _getStoredAttributes() {
                const t = this.getFirstPosition().parent;
                if (this.isCollapsed && t.isEmpty) for (const e of t.getAttributeKeys()) if (e.startsWith(ke)) {
                    yield[e.substr(ke.length), t.getAttribute(e)]
                }
            }

            _getSurroundingAttributes() {
                const t = this.getFirstPosition(), e = this._model.schema;
                let n = null;
                if (this.isCollapsed) {
                    const e = t.textNode ? t.textNode : t.nodeBefore, i = t.textNode ? t.textNode : t.nodeAfter;
                    if (this.isGravityOverridden || (n = ye(e)), n || (n = ye(i)), !this.isGravityOverridden && !n) {
                        let t = e;
                        for (; t && !n;) n = ye(t = t.previousSibling)
                    }
                    if (!n) {
                        let t = i;
                        for (; t && !n;) n = ye(t = t.nextSibling)
                    }
                    n || (n = this._getStoredAttributes())
                } else {
                    const t = this.getFirstRange();
                    for (const i of t) {
                        if (i.item.is("element") && e.isObject(i.item)) break;
                        if ("text" == i.type) {
                            n = i.item.getAttributes();
                            break
                        }
                    }
                }
                return n
            }

            _fixGraveyardSelection(t, e) {
                const n = e.clone(), i = this._model.schema.getNearestSelectionRange(n), o = this._ranges.indexOf(t);
                if (this._ranges.splice(o, 1), t.detach(), i) {
                    const t = this._prepareRange(i);
                    this._ranges.splice(o, 0, t)
                }
            }
        }

        function ye(t) {
            return t instanceof ie.a || t instanceof ge.a ? t.getAttributes() : null
        }

        class xe {
            constructor(t) {
                this._dispatchers = t
            }

            add(t) {
                for (const e of this._dispatchers) t(e);
                return this
            }
        }

        var Ae = n(83), Te = 1, Ce = 4;
        var Pe = function (t) {
            return Object(Ae.a)(t, Te | Ce)
        };

        class Me extends xe {
            elementToElement(t) {
                return this.add(function (t) {
                    return (t = Pe(t)).view = Se(t.view, "container"), e => {
                        e.on("insert:" + t.model, function (t) {
                            return (e, n, i) => {
                                const o = t(n.item, i.writer);
                                if (!o) return;
                                if (!i.consumable.consume(n.item, "insert")) return;
                                const r = i.mapper.toViewPosition(n.range.start);
                                i.mapper.bindElements(n.item, o), i.writer.insert(r, o)
                            }
                        }(t.view), {priority: t.converterPriority || "normal"})
                    }
                }(t))
            }

            attributeToElement(t) {
                return this.add(function (t) {
                    let e = "attribute:" + ((t = Pe(t)).model.key ? t.model.key : t.model);
                    t.model.name && (e += ":" + t.model.name);
                    if (t.model.values) for (const e of t.model.values) t.view[e] = Se(t.view[e], "attribute"); else t.view = Se(t.view, "attribute");
                    const n = Ee(t);
                    return i => {
                        i.on(e, function (t) {
                            return (e, n, i) => {
                                const o = t(n.attributeOldValue, i.writer), r = t(n.attributeNewValue, i.writer);
                                if (!o && !r) return;
                                if (!i.consumable.consume(n.item, e.name)) return;
                                const s = i.writer, a = s.document.selection;
                                if (n.item instanceof ue || n.item instanceof _e) s.wrap(a.getFirstRange(), r); else {
                                    let t = i.mapper.toViewRange(n.range);
                                    null !== n.attributeOldValue && o && (t = s.unwrap(t, o)), null !== n.attributeNewValue && r && s.wrap(t, r)
                                }
                            }
                        }(n), {priority: t.converterPriority || "normal"})
                    }
                }(t))
            }

            attributeToAttribute(t) {
                return this.add(function (t) {
                    let e = "attribute:" + ((t = Pe(t)).model.key ? t.model.key : t.model);
                    t.model.name && (e += ":" + t.model.name);
                    if (t.model.values) for (const e of t.model.values) t.view[e] = Ie(t.view[e]); else t.view = Ie(t.view);
                    const n = Ee(t);
                    return i => {
                        i.on(e, function (t) {
                            return (e, n, i) => {
                                const o = t(n.attributeOldValue, n), r = t(n.attributeNewValue, n);
                                if (!o && !r) return;
                                if (!i.consumable.consume(n.item, e.name)) return;
                                const s = i.mapper.toViewElement(n.item), a = i.writer;
                                if (!s) throw new v.b("conversion-attribute-to-attribute-on-text: Trying to convert text node's attribute with attribute-to-attribute converter.", [n, i]);
                                if (null !== n.attributeOldValue && o) if ("class" == o.key) {
                                    const t = Array.isArray(o.value) ? o.value : [o.value];
                                    for (const e of t) a.removeClass(e, s)
                                } else if ("style" == o.key) {
                                    const t = Object.keys(o.value);
                                    for (const e of t) a.removeStyle(e, s)
                                } else a.removeAttribute(o.key, s);
                                if (null !== n.attributeNewValue && r) if ("class" == r.key) {
                                    const t = Array.isArray(r.value) ? r.value : [r.value];
                                    for (const e of t) a.addClass(e, s)
                                } else if ("style" == r.key) {
                                    const t = Object.keys(r.value);
                                    for (const e of t) a.setStyle(e, r.value[e], s)
                                } else a.setAttribute(r.key, r.value, s)
                            }
                        }(n), {priority: t.converterPriority || "normal"})
                    }
                }(t))
            }

            markerToElement(t) {
                return this.add(function (t) {
                    return (t = Pe(t)).view = Se(t.view, "ui"), e => {
                        e.on("addMarker:" + t.model, function (t) {
                            return (e, n, i) => {
                                n.isOpening = !0;
                                const o = t(n, i.writer);
                                n.isOpening = !1;
                                const r = t(n, i.writer);
                                if (!o || !r) return;
                                const s = n.markerRange;
                                if (s.isCollapsed && !i.consumable.consume(s, e.name)) return;
                                for (const t of s) if (!i.consumable.consume(t.item, e.name)) return;
                                const a = i.mapper, c = i.writer;
                                c.insert(a.toViewPosition(s.start), o), i.mapper.bindElementToMarker(o, n.markerName), s.isCollapsed || (c.insert(a.toViewPosition(s.end), r), i.mapper.bindElementToMarker(r, n.markerName)), e.stop()
                            }
                        }(t.view), {priority: t.converterPriority || "normal"}), e.on("removeMarker:" + t.model, (t.view, (t, e, n) => {
                            const i = n.mapper.markerNameToElements(e.markerName);
                            if (i) {
                                for (const t of i) n.mapper.unbindElementFromMarkerName(t, e.markerName), n.writer.clear(n.writer.createRangeOn(t), t);
                                n.writer.clearClonedElementsGroup(e.markerName), t.stop()
                            }
                        }), {priority: t.converterPriority || "normal"})
                    }
                }(t))
            }

            markerToHighlight(t) {
                return this.add(function (t) {
                    return e => {
                        e.on("addMarker:" + t.model, function (t) {
                            return (e, n, i) => {
                                if (!n.item) return;
                                if (!(n.item instanceof ue || n.item instanceof _e || n.item.is("textProxy"))) return;
                                const o = Ne(t, n, i);
                                if (!o) return;
                                if (!i.consumable.consume(n.item, e.name)) return;
                                const r = Oe(o), s = i.writer, a = s.document.selection;
                                if (n.item instanceof ue || n.item instanceof _e) s.wrap(a.getFirstRange(), r, a); else {
                                    const t = i.mapper.toViewRange(n.range), e = s.wrap(t, r);
                                    for (const t of e.getItems()) if (t.is("attributeElement") && t.isSimilar(r)) {
                                        i.mapper.bindElementToMarker(t, n.markerName);
                                        break
                                    }
                                }
                            }
                        }(t.view), {priority: t.converterPriority || "normal"}), e.on("addMarker:" + t.model, function (t) {
                            return (e, n, i) => {
                                if (!n.item) return;
                                if (!(n.item instanceof le.a)) return;
                                const o = Ne(t, n, i);
                                if (!o) return;
                                if (!i.consumable.test(n.item, e.name)) return;
                                const r = i.mapper.toViewElement(n.item);
                                if (r && r.getCustomProperty("addHighlight")) {
                                    i.consumable.consume(n.item, e.name);
                                    for (const t of te.a._createIn(n.item)) i.consumable.consume(t.item, e.name);
                                    r.getCustomProperty("addHighlight")(r, o, i.writer), i.mapper.bindElementToMarker(r, n.markerName)
                                }
                            }
                        }(t.view), {priority: t.converterPriority || "normal"}), e.on("removeMarker:" + t.model, function (t) {
                            return (e, n, i) => {
                                if (n.markerRange.isCollapsed) return;
                                const o = Ne(t, n, i);
                                if (!o) return;
                                const r = Oe(o), s = i.mapper.markerNameToElements(n.markerName);
                                if (s) {
                                    for (const t of s) i.mapper.unbindElementFromMarkerName(t, n.markerName), t.is("attributeElement") ? i.writer.unwrap(i.writer.createRangeOn(t), r) : t.getCustomProperty("removeHighlight")(t, o.id, i.writer);
                                    i.writer.clearClonedElementsGroup(n.markerName), e.stop()
                                }
                            }
                        }(t.view), {priority: t.converterPriority || "normal"})
                    }
                }(t))
            }
        }

        function Oe(t) {
            const e = new x("span", t.attributes);
            return t.classes && e._addClass(t.classes), t.priority && (e._priority = t.priority), e._id = t.id, e
        }

        function Se(t, e) {
            return "function" == typeof t ? t : (n, i) => (function (t, e, n) {
                "string" == typeof t && (t = {name: t});
                let i;
                const o = Object.assign({}, t.attributes);
                if ("container" == n) i = e.createContainerElement(t.name, o); else if ("attribute" == n) {
                    const n = {priority: t.priority || x.DEFAULT_PRIORITY};
                    i = e.createAttributeElement(t.name, o, n)
                } else i = e.createUIElement(t.name, o);
                if (t.styles) {
                    const n = Object.keys(t.styles);
                    for (const o of n) e.setStyle(o, t.styles[o], i)
                }
                if (t.classes) {
                    const n = t.classes;
                    if ("string" == typeof n) e.addClass(n, i); else for (const t of n) e.addClass(t, i)
                }
                return i
            })(t, i, e)
        }

        function Ee(t) {
            return t.model.values ? (e, n) => {
                const i = t.view[e];
                return i ? i(e, n) : null
            } : t.view
        }

        function Ie(t) {
            return "string" == typeof t ? e => ({
                key: t,
                value: e
            }) : "object" == typeof t ? t.value ? () => t : e => ({key: t.key, value: e}) : t
        }

        function Ne(t, e, n) {
            const i = "function" == typeof t ? t(e, n) : t;
            return i ? (i.priority || (i.priority = 10), i.id || (i.id = e.markerName), i) : null
        }

        var je = n(48);

        class Re extends xe {
            elementToElement(t) {
                return this.add(De(t))
            }

            elementToAttribute(t) {
                return this.add(function (t) {
                    Ve(t = Pe(t));
                    const e = ze(t, !1), n = Le(t), i = n ? "element:" + n : "element";
                    return n => {
                        n.on(i, e, {priority: t.converterPriority || "low"})
                    }
                }(t))
            }

            attributeToAttribute(t) {
                return this.add(function (t) {
                    let e = null;
                    ("string" == typeof (t = Pe(t)).view || t.view.key) && (e = function (t) {
                        "string" == typeof t.view && (t.view = {key: t.view});
                        const e = t.view.key;
                        let n;
                        if ("class" == e || "style" == e) {
                            const i = "class" == e ? "classes" : "styles";
                            n = {[i]: t.view.value}
                        } else {
                            const i = void 0 === t.view.value ? /[\s\S]*/ : t.view.value;
                            n = {attributes: {[e]: i}}
                        }
                        t.view.name && (n.name = t.view.name);
                        return t.view = n, e
                    }(t));
                    Ve(t, e);
                    const n = ze(t, !0);
                    return e => {
                        e.on("element", n, {priority: t.converterPriority || "low"})
                    }
                }(t))
            }

            elementToMarker(t) {
                return this.add(function (t) {
                    return function (t) {
                        const e = t.model;
                        t.model = ((t, n) => {
                            const i = "string" == typeof e ? e : e(t);
                            return n.createElement("$marker", {"data-name": i})
                        })
                    }(t = Pe(t)), De(t)
                }(t))
            }
        }

        function De(t) {
            const e = function (t) {
                const e = t.view ? new je.a(t.view) : null;
                return (n, i, o) => {
                    let r = {};
                    if (e) {
                        const t = e.match(i.viewItem);
                        if (!t) return;
                        r = t.match
                    }
                    r.name = !0;
                    const s = function (t, e, n) {
                        return t instanceof Function ? t(e, n) : n.createElement(t)
                    }(t.model, i.viewItem, o.writer);
                    if (!s) return;
                    if (!o.consumable.test(i.viewItem, r)) return;
                    const a = o.splitToAllowedParent(s, i.modelCursor);
                    if (!a) return;
                    o.writer.insert(s, a.position), o.convertChildren(i.viewItem, o.writer.createPositionAt(s, 0)), o.consumable.consume(i.viewItem, r);
                    const c = o.getSplitParts(s);
                    i.modelRange = new te.a(o.writer.createPositionBefore(s), o.writer.createPositionAfter(c[c.length - 1])), a.cursorParent ? i.modelCursor = o.writer.createPositionAt(a.cursorParent, 0) : i.modelCursor = i.modelRange.end
                }
            }(t = Pe(t)), n = Le(t), i = n ? "element:" + n : "element";
            return n => {
                n.on(i, e, {priority: t.converterPriority || "normal"})
            }
        }

        function Le(t) {
            return "string" == typeof t.view ? t.view : "object" == typeof t.view && "string" == typeof t.view.name ? t.view.name : null
        }

        function Ve(t, e = null) {
            const n = null === e || (t => t.getAttribute(e)), i = "object" != typeof t.model ? t.model : t.model.key,
                o = "object" != typeof t.model || void 0 === t.model.value ? n : t.model.value;
            t.model = {key: i, value: o}
        }

        function ze(t, e) {
            const n = new je.a(t.view);
            return (i, o, r) => {
                const s = n.match(o.viewItem);
                if (!s) return;
                const a = t.model.key,
                    c = "function" == typeof t.model.value ? t.model.value(o.viewItem) : t.model.value;
                null !== c && (!function (t) {
                    if ("object" == typeof t.view && !Le(t)) return !1;
                    return !t.view.classes && !t.view.attributes && !t.view.styles
                }(t) ? delete s.match.name : s.match.name = !0, r.consumable.test(o.viewItem, s.match) && (o.modelRange || (o = Object.assign(o, r.convertChildren(o.viewItem, o.modelCursor))), function (t, e, n, i) {
                    let o = !1;
                    for (const r of Array.from(t.getItems({shallow: n}))) i.schema.checkAttribute(r, e.key) && (i.writer.setAttribute(e.key, e.value, r), o = !0);
                    return o
                }(o.modelRange, {key: a, value: c}, e, r) && r.consumable.consume(o.viewItem, s.match)))
            }
        }

        class Be {
            constructor(t) {
                this.model = t, this.view = new Zt, this.mapper = new ne, this.downcastDispatcher = new ae({mapper: this.mapper});
                const e = this.model.document, n = e.selection, i = this.model.markers;
                this.listenTo(this.model, "_beforeChanges", () => {
                    this.view._disableRendering(!0)
                }, {priority: "highest"}), this.listenTo(this.model, "_afterChanges", () => {
                    this.view._disableRendering(!1)
                }, {priority: "lowest"}), this.listenTo(e, "change", () => {
                    this.view.change(t => {
                        this.downcastDispatcher.convertChanges(e.differ, i, t), this.downcastDispatcher.convertSelection(n, i, t)
                    })
                }, {priority: "low"}), this.listenTo(this.view.document, "selectionChange", function (t, e) {
                    return (n, i) => {
                        const o = i.newSelection, r = new ue, s = [];
                        for (const t of o.getRanges()) s.push(e.toModelRange(t));
                        r.setTo(s, {backward: o.isBackward}), r.isEqual(t.document.selection) || t.change(t => {
                            t.setSelection(r)
                        })
                    }
                }(this.model, this.mapper)), this.downcastDispatcher.on("insert:$text", (t, e, n) => {
                    if (!n.consumable.consume(e.item, "insert")) return;
                    const i = n.writer, o = n.mapper.toViewPosition(e.range.start), r = i.createText(e.item.data);
                    i.insert(o, r)
                }, {priority: "lowest"}), this.downcastDispatcher.on("remove", (t, e, n) => {
                    const i = n.mapper.toViewPosition(e.position), o = e.position.getShiftedBy(e.length),
                        r = n.mapper.toViewPosition(o, {isPhantom: !0}), s = n.writer.createRange(i, r),
                        a = n.writer.remove(s.getTrimmed());
                    for (const t of n.writer.createRangeIn(a).getItems()) n.mapper.unbindViewElement(t)
                }, {priority: "low"}), this.downcastDispatcher.on("selection", (t, e, n) => {
                    const i = n.writer, o = i.document.selection;
                    for (const t of o.getRanges()) t.isCollapsed && t.end.parent.document && n.writer.mergeAttributes(t.start);
                    i.setSelection(null)
                }, {priority: "low"}), this.downcastDispatcher.on("selection", (t, e, n) => {
                    const i = e.selection;
                    if (i.isCollapsed) return;
                    if (!n.consumable.consume(i, "selection")) return;
                    const o = [];
                    for (const t of i.getRanges()) {
                        const e = n.mapper.toViewRange(t);
                        o.push(e)
                    }
                    n.writer.setSelection(o, {backward: i.isBackward})
                }, {priority: "low"}), this.downcastDispatcher.on("selection", (t, e, n) => {
                    const i = e.selection;
                    if (!i.isCollapsed) return;
                    if (!n.consumable.consume(i, "selection")) return;
                    const o = n.writer, r = i.getFirstPosition(), s = n.mapper.toViewPosition(r),
                        a = o.breakAttributes(s);
                    o.setSelection(a)
                }, {priority: "low"}), this.view.document.roots.bindTo(this.model.document.roots).using(t => {
                    if ("$graveyard" == t.rootName) return null;
                    const e = new d(t.name);
                    return e.rootName = t.rootName, e._document = this.view.document, this.mapper.bindElements(t, e), e
                })
            }

            destroy() {
                this.view.destroy(), this.stopListening()
            }
        }

        Object(f.a)(Be, m.a);

        class Fe {
            constructor(t, e = []) {
                this._editor = t, this._availablePlugins = new Map, this._plugins = new Map;
                for (const t of e) this._availablePlugins.set(t, t), t.pluginName && this._availablePlugins.set(t.pluginName, t)
            }

            * [Symbol.iterator]() {
                for (const t of this._plugins) "function" == typeof t[0] && (yield t)
            }

            get(t) {
                const e = this._plugins.get(t);
                if (!e) {
                    const e = "plugincollection-plugin-not-loaded: The requested plugin is not loaded.";
                    let n = t;
                    throw"function" == typeof t && (n = t.pluginName || t.name), new v.b(e, this._editor, {plugin: n})
                }
                return e
            }

            has(t) {
                return this._plugins.has(t)
            }

            init(t, e = []) {
                const n = this, i = this._editor, o = new Set, r = [], s = h(t), a = h(e), c = function (t) {
                    const e = [];
                    for (const n of t) u(n) || e.push(n);
                    return e.length ? e : null
                }(t);
                if (c) {
                    const t = "plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.";
                    return console.error(Object(v.a)(t), {plugins: c}), Promise.reject(new v.b(t, this._editor, {plugins: c}))
                }
                return Promise.all(s.map(l)).then(() => d(r, "init")).then(() => d(r, "afterInit")).then(() => r);

                function l(t) {
                    if (!a.includes(t) && !n._plugins.has(t) && !o.has(t)) return function (t) {
                        return new Promise(s => {
                            o.add(t), t.requires && t.requires.forEach(n => {
                                const o = u(n);
                                if (e.includes(o)) throw new v.b("plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.", i, {
                                    plugin: o,
                                    requiredBy: t
                                });
                                l(o)
                            });
                            const a = new t(i);
                            n._add(t, a), r.push(a), s()
                        })
                    }(t).catch(e => {
                        throw console.error(Object(v.a)("plugincollection-load: It was not possible to load the plugin."), {plugin: t}), e
                    })
                }

                function d(t, e) {
                    return t.reduce((t, n) => n[e] ? t.then(n[e].bind(n)) : t, Promise.resolve())
                }

                function u(t) {
                    return "function" == typeof t ? t : n._availablePlugins.get(t)
                }

                function h(t) {
                    return t.map(t => u(t)).filter(t => !!t)
                }
            }

            destroy() {
                const t = Array.from(this).map(([, t]) => t).filter(t => "function" == typeof t.destroy).map(t => t.destroy());
                return Promise.all(t)
            }

            _add(t, e) {
                this._plugins.set(t, e);
                const n = t.pluginName;
                if (n) {
                    if (this._plugins.has(n)) throw new v.b("plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.", null, {
                        pluginName: n,
                        plugin1: this._plugins.get(n).constructor,
                        plugin2: t
                    });
                    this._plugins.set(n, e)
                }
            }
        }

        Object(f.a)(Fe, ee.c);

        class Ue {
            constructor() {
                this._commands = new Map
            }

            add(t, e) {
                this._commands.set(t, e)
            }

            get(t) {
                return this._commands.get(t)
            }

            execute(t, ...e) {
                const n = this.get(t);
                if (!n) throw new v.b("commandcollection-command-not-found: Command does not exist.", this, {commandName: t});
                n.execute(...e)
            }

            * names() {
                yield* this._commands.keys()
            }

            * commands() {
                yield* this._commands.values()
            }

            [Symbol.iterator]() {
                return this._commands[Symbol.iterator]()
            }

            destroy() {
                for (const t of this.commands()) t.destroy()
            }
        }

        function He(t, e) {
            const n = Object.keys(window.CKEDITOR_TRANSLATIONS).length;
            return 1 === n && (t = Object.keys(window.CKEDITOR_TRANSLATIONS)[0]), 0 !== n && function (t, e) {
                return t in window.CKEDITOR_TRANSLATIONS && e in window.CKEDITOR_TRANSLATIONS[t]
            }(t, e) ? window.CKEDITOR_TRANSLATIONS[t][e].replace(/ \[context: [^\]]+\]$/, "") : e.replace(/ \[context: [^\]]+\]$/, "")
        }

        window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {});
        const qe = ["ar", "fa", "he", "ku", "ug"];

        class We {
            constructor(t = {}) {
                this.uiLanguage = t.uiLanguage || "en", this.contentLanguage = t.contentLanguage || this.uiLanguage, this.uiLanguageDirection = Ye(this.uiLanguage), this.contentLanguageDirection = Ye(this.contentLanguage), this.t = ((...t) => this._t(...t))
            }

            get language() {
                return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."), this.uiLanguage
            }

            _t(t, e) {
                let n = He(this.uiLanguage, t);
                return e && (n = n.replace(/%(\d+)/g, (t, n) => n < e.length ? e[n] : t)), n
            }
        }

        function Ye(t) {
            return qe.includes(t) ? "rtl" : "ltr"
        }

        var $e = n(50);

        class Ge {
            constructor() {
                this._consumables = new Map
            }

            add(t, e) {
                let n;
                t.is("text") || t.is("documentFragment") ? this._consumables.set(t, !0) : (this._consumables.has(t) ? n = this._consumables.get(t) : (n = new Qe, this._consumables.set(t, n)), n.add(e))
            }

            test(t, e) {
                const n = this._consumables.get(t);
                return void 0 === n ? null : t.is("text") || t.is("documentFragment") ? n : n.test(e)
            }

            consume(t, e) {
                return !!this.test(t, e) && (t.is("text") || t.is("documentFragment") ? this._consumables.set(t, !1) : this._consumables.get(t).consume(e), !0)
            }

            revert(t, e) {
                const n = this._consumables.get(t);
                void 0 !== n && (t.is("text") || t.is("documentFragment") ? this._consumables.set(t, !0) : n.revert(e))
            }

            static consumablesFromElement(t) {
                const e = {name: !0, attributes: [], classes: [], styles: []}, n = t.getAttributeKeys();
                for (const t of n) "style" != t && "class" != t && e.attributes.push(t);
                const i = t.getClassNames();
                for (const t of i) e.classes.push(t);
                const o = t.getStyleNames();
                for (const t of o) e.styles.push(t);
                return e
            }

            static createFrom(t, e) {
                if (e || (e = new Ge), t.is("text")) return e.add(t), e;
                t.is("element") && e.add(t, Ge.consumablesFromElement(t)), t.is("documentFragment") && e.add(t);
                for (const n of t.getChildren()) e = Ge.createFrom(n, e);
                return e
            }
        }

        class Qe {
            constructor() {
                this._canConsumeName = null, this._consumables = {
                    attributes: new Map,
                    styles: new Map,
                    classes: new Map
                }
            }

            add(t) {
                t.name && (this._canConsumeName = !0);
                for (const e in this._consumables) e in t && this._add(e, t[e])
            }

            test(t) {
                if (t.name && !this._canConsumeName) return this._canConsumeName;
                for (const e in this._consumables) if (e in t) {
                    const n = this._test(e, t[e]);
                    if (!0 !== n) return n
                }
                return !0
            }

            consume(t) {
                t.name && (this._canConsumeName = !1);
                for (const e in this._consumables) e in t && this._consume(e, t[e])
            }

            revert(t) {
                t.name && (this._canConsumeName = !0);
                for (const e in this._consumables) e in t && this._revert(e, t[e])
            }

            _add(t, e) {
                const n = Object($e.a)(e) ? e : [e], i = this._consumables[t];
                for (const e of n) {
                    if ("attributes" === t && ("class" === e || "style" === e)) throw new v.b("viewconsumable-invalid-attribute: Classes and styles should be handled separately.", this);
                    i.set(e, !0)
                }
            }

            _test(t, e) {
                const n = Object($e.a)(e) ? e : [e], i = this._consumables[t];
                for (const e of n) if ("attributes" !== t || "class" !== e && "style" !== e) {
                    const t = i.get(e);
                    if (void 0 === t) return null;
                    if (!t) return !1
                } else {
                    const t = "class" == e ? "classes" : "styles", n = this._test(t, [...this._consumables[t].keys()]);
                    if (!0 !== n) return n
                }
                return !0
            }

            _consume(t, e) {
                const n = Object($e.a)(e) ? e : [e], i = this._consumables[t];
                for (const e of n) if ("attributes" !== t || "class" !== e && "style" !== e) i.set(e, !1); else {
                    const t = "class" == e ? "classes" : "styles";
                    this._consume(t, [...this._consumables[t].keys()])
                }
            }

            _revert(t, e) {
                const n = Object($e.a)(e) ? e : [e], i = this._consumables[t];
                for (const e of n) if ("attributes" !== t || "class" !== e && "style" !== e) {
                    !1 === i.get(e) && i.set(e, !0)
                } else {
                    const t = "class" == e ? "classes" : "styles";
                    this._revert(t, [...this._consumables[t].keys()])
                }
            }
        }

        var Je = n(46);

        class Ke {
            constructor() {
                this._sourceDefinitions = {}, this._attributeProperties = {}, this.decorate("checkChild"), this.decorate("checkAttribute"), this.on("checkAttribute", (t, e) => {
                    e[0] = new Ze(e[0])
                }, {priority: "highest"}), this.on("checkChild", (t, e) => {
                    e[0] = new Ze(e[0]), e[1] = this.getDefinition(e[1])
                }, {priority: "highest"})
            }

            register(t, e) {
                if (this._sourceDefinitions[t]) throw new v.b("schema-cannot-register-item-twice: A single item cannot be registered twice in the schema.", this, {itemName: t});
                this._sourceDefinitions[t] = [Object.assign({}, e)], this._clearCache()
            }

            extend(t, e) {
                if (!this._sourceDefinitions[t]) throw new v.b("schema-cannot-extend-missing-item: Cannot extend an item which was not registered yet.", this, {itemName: t});
                this._sourceDefinitions[t].push(Object.assign({}, e)), this._clearCache()
            }

            getDefinitions() {
                return this._compiledDefinitions || this._compile(), this._compiledDefinitions
            }

            getDefinition(t) {
                let e;
                return e = "string" == typeof t ? t : t.is && (t.is("text") || t.is("textProxy")) ? "$text" : t.name, this.getDefinitions()[e]
            }

            isRegistered(t) {
                return !!this.getDefinition(t)
            }

            isBlock(t) {
                const e = this.getDefinition(t);
                return !(!e || !e.isBlock)
            }

            isLimit(t) {
                const e = this.getDefinition(t);
                return !!e && !(!e.isLimit && !e.isObject)
            }

            isObject(t) {
                const e = this.getDefinition(t);
                return !(!e || !e.isObject)
            }

            isInline(t) {
                const e = this.getDefinition(t);
                return !(!e || !e.isInline)
            }

            checkChild(t, e) {
                return !!e && this._checkContextMatch(e, t)
            }

            checkAttribute(t, e) {
                const n = this.getDefinition(t.last);
                return !!n && n.allowAttributes.includes(e)
            }

            checkMerge(t, e = null) {
                if (t instanceof Xt.a) {
                    const e = t.nodeBefore, n = t.nodeAfter;
                    if (!(e instanceof le.a)) throw new v.b("schema-check-merge-no-element-before: The node before the merge position must be an element.", this);
                    if (!(n instanceof le.a)) throw new v.b("schema-check-merge-no-element-after: The node after the merge position must be an element.", this);
                    return this.checkMerge(e, n)
                }
                for (const n of e.getChildren()) if (!this.checkChild(t, n)) return !1;
                return !0
            }

            addChildCheck(t) {
                this.on("checkChild", (e, [n, i]) => {
                    if (!i) return;
                    const o = t(n, i);
                    "boolean" == typeof o && (e.stop(), e.return = o)
                }, {priority: "high"})
            }

            addAttributeCheck(t) {
                this.on("checkAttribute", (e, [n, i]) => {
                    const o = t(n, i);
                    "boolean" == typeof o && (e.stop(), e.return = o)
                }, {priority: "high"})
            }

            setAttributeProperties(t, e) {
                this._attributeProperties[t] = Object.assign(this.getAttributeProperties(t), e)
            }

            getAttributeProperties(t) {
                return this._attributeProperties[t] || {}
            }

            getLimitElement(t) {
                let e;
                if (t instanceof Xt.a) e = t.parent; else {
                    e = (t instanceof te.a ? [t] : Array.from(t.getRanges())).reduce((t, e) => {
                        const n = e.getCommonAncestor();
                        return t ? t.getCommonAncestor(n, {includeSelf: !0}) : n
                    }, null)
                }
                for (; !this.isLimit(e) && e.parent;) e = e.parent;
                return e
            }

            checkAttributeInSelection(t, e) {
                if (t.isCollapsed) {
                    const n = [...t.getFirstPosition().getAncestors(), new ge.a("", t.getAttributes())];
                    return this.checkAttribute(n, e)
                }
                {
                    const n = t.getRanges();
                    for (const t of n) for (const n of t) if (this.checkAttribute(n.item, e)) return !0
                }
                return !1
            }

            * getValidRanges(t, e) {
                t = function* (t) {
                    for (const e of t) yield* e.getMinimalFlatRanges()
                }(t);
                for (const n of t) yield* this._getValidRangesForRange(n, e)
            }

            getNearestSelectionRange(t, e = "both") {
                if (this.checkChild(t, "$text")) return new te.a(t);
                let n, i;
                "both" != e && "backward" != e || (n = new Je.a({
                    startPosition: t,
                    direction: "backward"
                })), "both" != e && "forward" != e || (i = new Je.a({startPosition: t}));
                for (const t of function* (t, e) {
                    let n = !1;
                    for (; !n;) {
                        if (n = !0, t) {
                            const e = t.next();
                            e.done || (n = !1, yield{walker: t, value: e.value})
                        }
                        if (e) {
                            const t = e.next();
                            t.done || (n = !1, yield{walker: e, value: t.value})
                        }
                    }
                }(n, i)) {
                    const e = t.walker == n ? "elementEnd" : "elementStart", i = t.value;
                    if (i.type == e && this.isObject(i.item)) return te.a._createOn(i.item);
                    if (this.checkChild(i.nextPosition, "$text")) return new te.a(i.nextPosition)
                }
                return null
            }

            findAllowedParent(t, e) {
                let n = t.parent;
                for (; n;) {
                    if (this.checkChild(n, e)) return n;
                    if (this.isLimit(n)) return null;
                    n = n.parent
                }
                return null
            }

            removeDisallowedAttributes(t, e) {
                for (const n of t) {
                    for (const t of n.getAttributeKeys()) this.checkAttribute(n, t) || e.removeAttribute(t, n);
                    n.is("element") && this.removeDisallowedAttributes(n.getChildren(), e)
                }
            }

            createContext(t) {
                return new Ze(t)
            }

            _clearCache() {
                this._compiledDefinitions = null
            }

            _compile() {
                const t = {}, e = this._sourceDefinitions, n = Object.keys(e);
                for (const i of n) t[i] = Xe(e[i], i);
                for (const e of n) tn(t, e);
                for (const e of n) en(t, e);
                for (const e of n) nn(t, e), on(t, e);
                for (const e of n) rn(t, e), sn(t, e);
                this._compiledDefinitions = t
            }

            _checkContextMatch(t, e, n = e.length - 1) {
                const i = e.getItem(n);
                if (t.allowIn.includes(i.name)) {
                    if (0 == n) return !0;
                    {
                        const t = this.getDefinition(i);
                        return this._checkContextMatch(t, e, n - 1)
                    }
                }
                return !1
            }

            * _getValidRangesForRange(t, e) {
                let n = t.start, i = t.start;
                for (const o of t.getItems({shallow: !0})) o.is("element") && (yield* this._getValidRangesForRange(te.a._createIn(o), e)), this.checkAttribute(o, e) || (n.isEqual(i) || (yield new te.a(n, i)), n = Xt.a._createAfter(o)), i = Xt.a._createAfter(o);
                n.isEqual(i) || (yield new te.a(n, i))
            }
        }

        Object(f.a)(Ke, m.a);

        class Ze {
            constructor(t) {
                if (t instanceof Ze) return t;
                "string" == typeof t ? t = [t] : Array.isArray(t) || (t = t.getAncestors({includeSelf: !0})), t[0] && "string" != typeof t[0] && t[0].is("documentFragment") && t.shift(), this._items = t.map(ln)
            }

            get length() {
                return this._items.length
            }

            get last() {
                return this._items[this._items.length - 1]
            }

            [Symbol.iterator]() {
                return this._items[Symbol.iterator]()
            }

            push(t) {
                const e = new Ze([t]);
                return e._items = [...this._items, ...e._items], e
            }

            getItem(t) {
                return this._items[t]
            }

            * getNames() {
                yield* this._items.map(t => t.name)
            }

            endsWith(t) {
                return Array.from(this.getNames()).join(" ").endsWith(t)
            }
        }

        function Xe(t, e) {
            const n = {
                name: e,
                allowIn: [],
                allowContentOf: [],
                allowWhere: [],
                allowAttributes: [],
                allowAttributesOf: [],
                inheritTypesFrom: []
            };
            return function (t, e) {
                for (const n of t) {
                    const t = Object.keys(n).filter(t => t.startsWith("is"));
                    for (const i of t) e[i] = n[i]
                }
            }(t, n), an(t, n, "allowIn"), an(t, n, "allowContentOf"), an(t, n, "allowWhere"), an(t, n, "allowAttributes"), an(t, n, "allowAttributesOf"), an(t, n, "inheritTypesFrom"), function (t, e) {
                for (const n of t) {
                    const t = n.inheritAllFrom;
                    t && (e.allowContentOf.push(t), e.allowWhere.push(t), e.allowAttributesOf.push(t), e.inheritTypesFrom.push(t))
                }
            }(t, n), n
        }

        function tn(t, e) {
            for (const n of t[e].allowContentOf) if (t[n]) {
                cn(t, n).forEach(t => {
                    t.allowIn.push(e)
                })
            }
            delete t[e].allowContentOf
        }

        function en(t, e) {
            for (const n of t[e].allowWhere) {
                const i = t[n];
                if (i) {
                    const n = i.allowIn;
                    t[e].allowIn.push(...n)
                }
            }
            delete t[e].allowWhere
        }

        function nn(t, e) {
            for (const n of t[e].allowAttributesOf) {
                const i = t[n];
                if (i) {
                    const n = i.allowAttributes;
                    t[e].allowAttributes.push(...n)
                }
            }
            delete t[e].allowAttributesOf
        }

        function on(t, e) {
            const n = t[e];
            for (const e of n.inheritTypesFrom) {
                const i = t[e];
                if (i) {
                    const t = Object.keys(i).filter(t => t.startsWith("is"));
                    for (const e of t) e in n || (n[e] = i[e])
                }
            }
            delete n.inheritTypesFrom
        }

        function rn(t, e) {
            const n = t[e], i = n.allowIn.filter(e => t[e]);
            n.allowIn = Array.from(new Set(i))
        }

        function sn(t, e) {
            const n = t[e];
            n.allowAttributes = Array.from(new Set(n.allowAttributes))
        }

        function an(t, e, n) {
            for (const i of t) "string" == typeof i[n] ? e[n].push(i[n]) : Array.isArray(i[n]) && e[n].push(...i[n])
        }

        function cn(t, e) {
            const n = t[e];
            return function (t) {
                return Object.keys(t).map(e => t[e])
            }(t).filter(t => t.allowIn.includes(n.name))
        }

        function ln(t) {
            return "string" == typeof t ? {
                name: t, * getAttributeKeys() {
                }, getAttribute() {
                }
            } : {
                name: t.is("element") ? t.name : "$text", * getAttributeKeys() {
                    yield* t.getAttributeKeys()
                }, getAttribute: e => t.getAttribute(e)
            }
        }

        class dn {
            constructor(t = {}) {
                this._splitParts = new Map, this._modelCursor = null, this.conversionApi = Object.assign({}, t), this.conversionApi.convertItem = this._convertItem.bind(this), this.conversionApi.convertChildren = this._convertChildren.bind(this), this.conversionApi.splitToAllowedParent = this._splitToAllowedParent.bind(this), this.conversionApi.getSplitParts = this._getSplitParts.bind(this)
            }

            convert(t, e, n = ["$root"]) {
                this.fire("viewCleanup", t), this._modelCursor = function (t, e) {
                    let n;
                    for (const i of new Ze(t)) {
                        const t = {};
                        for (const e of i.getAttributeKeys()) t[e] = i.getAttribute(e);
                        const o = e.createElement(i.name, t);
                        n && e.append(o, n), n = Xt.a._createAt(o, 0)
                    }
                    return n
                }(n, e), this.conversionApi.writer = e, this.conversionApi.consumable = Ge.createFrom(t), this.conversionApi.store = {};
                const {modelRange: i} = this._convertItem(t, this._modelCursor), o = e.createDocumentFragment();
                if (i) {
                    this._removeEmptyElements();
                    for (const t of Array.from(this._modelCursor.parent.getChildren())) e.append(t, o);
                    o.markers = function (t, e) {
                        const n = new Set, i = new Map, o = te.a._createIn(t).getItems();
                        for (const t of o) "$marker" == t.name && n.add(t);
                        for (const t of n) {
                            const n = t.getAttribute("data-name"), o = e.createPositionBefore(t);
                            i.has(n) ? i.get(n).end = o.clone() : i.set(n, new te.a(o.clone())), e.remove(t)
                        }
                        return i
                    }(o, e)
                }
                return this._modelCursor = null, this._splitParts.clear(), this.conversionApi.writer = null, this.conversionApi.store = null, o
            }

            _convertItem(t, e) {
                const n = Object.assign({viewItem: t, modelCursor: e, modelRange: null});
                if (t.is("element") ? this.fire("element:" + t.name, n, this.conversionApi) : t.is("text") ? this.fire("text", n, this.conversionApi) : this.fire("documentFragment", n, this.conversionApi), n.modelRange && !(n.modelRange instanceof te.a)) throw new v.b("view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.", this);
                return {modelRange: n.modelRange, modelCursor: n.modelCursor}
            }

            _convertChildren(t, e) {
                const n = new te.a(e);
                let i = e;
                for (const e of Array.from(t.getChildren())) {
                    const t = this._convertItem(e, i);
                    t.modelRange instanceof te.a && (n.end = t.modelRange.end, i = t.modelCursor)
                }
                return {modelRange: n, modelCursor: i}
            }

            _splitToAllowedParent(t, e) {
                const n = this.conversionApi.schema.findAllowedParent(e, t);
                if (!n) return null;
                if (n === e.parent) return {position: e};
                if (this._modelCursor.parent.getAncestors().includes(n)) return null;
                const i = this.conversionApi.writer.split(e, n), o = [];
                for (const t of i.range.getWalker()) if ("elementEnd" == t.type) o.push(t.item); else {
                    const e = o.pop(), n = t.item;
                    this._registerSplitPair(e, n)
                }
                return {position: i.position, cursorParent: i.range.end.parent}
            }

            _registerSplitPair(t, e) {
                this._splitParts.has(t) || this._splitParts.set(t, [t]);
                const n = this._splitParts.get(t);
                this._splitParts.set(e, n), n.push(e)
            }

            _getSplitParts(t) {
                let e;
                return e = this._splitParts.has(t) ? this._splitParts.get(t) : [t]
            }

            _removeEmptyElements() {
                let t = !1;
                for (const e of this._splitParts.keys()) e.isEmpty && (this.conversionApi.writer.remove(e), this._splitParts.delete(e), t = !0);
                t && this._removeEmptyElements()
            }
        }

        Object(f.a)(dn, ee.c);

        class un {
            constructor(t, e) {
                this.model = t, this.processor = e, this.mapper = new ne, this.downcastDispatcher = new ae({mapper: this.mapper}), this.downcastDispatcher.on("insert:$text", (t, e, n) => {
                    if (!n.consumable.consume(e.item, "insert")) return;
                    const i = n.writer, o = n.mapper.toViewPosition(e.range.start), r = i.createText(e.item.data);
                    i.insert(o, r)
                }, {priority: "lowest"}), this.upcastDispatcher = new dn({schema: t.schema}), this.upcastDispatcher.on("text", (t, e, n) => {
                    if (n.schema.checkChild(e.modelCursor, "$text") && n.consumable.consume(e.viewItem)) {
                        const t = n.writer.createText(e.viewItem.data);
                        n.writer.insert(t, e.modelCursor), e.modelRange = te.a._createFromPositionAndShift(e.modelCursor, t.offsetSize), e.modelCursor = e.modelRange.end
                    }
                }, {priority: "lowest"}), this.upcastDispatcher.on("element", (t, e, n) => {
                    if (!e.modelRange && n.consumable.consume(e.viewItem, {name: !0})) {
                        const {modelRange: t, modelCursor: i} = n.convertChildren(e.viewItem, e.modelCursor);
                        e.modelRange = t, e.modelCursor = i
                    }
                }, {priority: "lowest"}), this.upcastDispatcher.on("documentFragment", (t, e, n) => {
                    if (!e.modelRange && n.consumable.consume(e.viewItem, {name: !0})) {
                        const {modelRange: t, modelCursor: i} = n.convertChildren(e.viewItem, e.modelCursor);
                        e.modelRange = t, e.modelCursor = i
                    }
                }, {priority: "lowest"}), this.decorate("init"), this.on("init", () => {
                    this.fire("ready")
                }, {priority: "lowest"})
            }

            get(t) {
                const {rootName: e = "main", trim: n = "empty"} = t || {};
                if (!this._checkIfRootsExists([e])) throw new v.b("datacontroller-get-non-existent-root: Attempting to get data from a non-existing root.", this);
                const i = this.model.document.getRoot(e);
                return "empty" !== n || this.model.hasContent(i, {ignoreWhitespaces: !0}) ? this.stringify(i) : ""
            }

            stringify(t) {
                const e = this.toView(t);
                return this.processor.toData(e)
            }

            toView(t) {
                this.mapper.clearBindings();
                const e = te.a._createIn(t), n = new N.a, i = new D(new p);
                if (this.mapper.bindElements(t, n), this.downcastDispatcher.convertInsert(e, i), !t.is("documentFragment")) {
                    const e = function (t) {
                        const e = [], n = t.root.document;
                        if (!n) return [];
                        const i = te.a._createIn(t);
                        for (const t of n.model.markers) {
                            const n = i.getIntersection(t.getRange());
                            n && e.push([t.name, n])
                        }
                        return e
                    }(t);
                    for (const [t, n] of e) this.downcastDispatcher.convertMarkerAdd(t, n, i)
                }
                return n
            }

            init(t) {
                if (this.model.document.version) throw new v.b("datacontroller-init-document-not-empty: Trying to set initial data to not empty document.", this);
                let e = {};
                if ("string" == typeof t ? e.main = t : e = t, !this._checkIfRootsExists(Object.keys(e))) throw new v.b("datacontroller-init-non-existent-root: Attempting to init data on a non-existing root.", this);
                return this.model.enqueueChange("transparent", t => {
                    for (const n of Object.keys(e)) {
                        const i = this.model.document.getRoot(n);
                        t.insert(this.parse(e[n], i), i, 0)
                    }
                }), Promise.resolve()
            }

            set(t) {
                let e = {};
                if ("string" == typeof t ? e.main = t : e = t, !this._checkIfRootsExists(Object.keys(e))) throw new v.b("datacontroller-set-non-existent-root: Attempting to set data on a non-existing root.", this);
                this.model.enqueueChange("transparent", t => {
                    t.setSelection(null), t.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());
                    for (const n of Object.keys(e)) {
                        const i = this.model.document.getRoot(n);
                        t.remove(t.createRangeIn(i)), t.insert(this.parse(e[n], i), i, 0)
                    }
                })
            }

            parse(t, e = "$root") {
                const n = this.processor.toView(t);
                return this.toModel(n, e)
            }

            toModel(t, e = "$root") {
                return this.model.change(n => this.upcastDispatcher.convert(t, n, e))
            }

            destroy() {
                this.stopListening()
            }

            _checkIfRootsExists(t) {
                for (const e of t) if (!this.model.document.getRootNames().includes(e)) return !1;
                return !0
            }
        }

        Object(f.a)(un, m.a);

        class hn {
            constructor(t, e) {
                this._helpers = new Map, this._downcast = Array.isArray(t) ? t : [t], this._createConversionHelpers({
                    name: "downcast",
                    dispatchers: this._downcast,
                    isDowncast: !0
                }), this._upcast = Array.isArray(e) ? e : [e], this._createConversionHelpers({
                    name: "upcast",
                    dispatchers: this._upcast,
                    isDowncast: !1
                })
            }

            addAlias(t, e) {
                const n = this._downcast.includes(e);
                if (!this._upcast.includes(e) && !n) throw new v.b("conversion-add-alias-dispatcher-not-registered: Trying to register and alias for a dispatcher that nas not been registered.", this);
                this._createConversionHelpers({name: t, dispatchers: [e], isDowncast: n})
            }

            for(t) {
                if (!this._helpers.has(t)) throw new v.b("conversion-for-unknown-group: Trying to add a converter to an unknown dispatchers group.", this);
                return this._helpers.get(t)
            }

            elementToElement(t) {
                this.for("downcast").elementToElement(t);
                for (const {model: e, view: n} of fn(t)) this.for("upcast").elementToElement({
                    model: e,
                    view: n,
                    converterPriority: t.converterPriority
                })
            }

            attributeToElement(t) {
                this.for("downcast").attributeToElement(t);
                for (const {model: e, view: n} of fn(t)) this.for("upcast").elementToAttribute({
                    view: n,
                    model: e,
                    converterPriority: t.converterPriority
                })
            }

            attributeToAttribute(t) {
                this.for("downcast").attributeToAttribute(t);
                for (const {model: e, view: n} of fn(t)) this.for("upcast").attributeToAttribute({view: n, model: e})
            }

            _createConversionHelpers({name: t, dispatchers: e, isDowncast: n}) {
                if (this._helpers.has(t)) throw new v.b("conversion-group-exists: Trying to register a group name that has already been registered.", this);
                const i = n ? new Me(e) : new Re(e);
                this._helpers.set(t, i)
            }
        }

        function* fn(t) {
            if (t.model.values) for (const e of t.model.values) {
                yield* mn({key: t.model.key, value: e}, t.view[e], t.upcastAlso ? t.upcastAlso[e] : void 0)
            } else yield* mn(t.model, t.view, t.upcastAlso)
        }

        function* mn(t, e, n) {
            if (yield{model: t, view: e}, n) {
                n = Array.isArray(n) ? n : [n];
                for (const e of n) yield{model: t, view: e}
            }
        }

        class pn {
            constructor(t = "default") {
                this.operations = [], this.type = t
            }

            get baseVersion() {
                for (const t of this.operations) if (null !== t.baseVersion) return t.baseVersion;
                return null
            }

            addOperation(t) {
                return t.batch = this, this.operations.push(t), t
            }
        }

        var gn = n(36), bn = n(29), wn = n(38);

        class kn extends bn.a {
            constructor(t, e) {
                super(null), this.sourcePosition = t.clone(), this.howMany = e
            }

            get type() {
                return "detach"
            }

            toJSON() {
                const t = super.toJSON();
                return t.sourcePosition = this.sourcePosition.toJSON(), t
            }

            _validate() {
                if (this.sourcePosition.root.document) throw new v.b("detach-operation-on-document-node: Cannot detach document node.", this)
            }

            _execute() {
                Object(wn.d)(te.a._createFromPositionAndShift(this.sourcePosition, this.howMany))
            }

            static get className() {
                return "DetachOperation"
            }
        }

        var _n = n(41), vn = n(60), yn = n(18), xn = n(61), An = n(96), Tn = n(20), Cn = n(27), Pn = n(67);

        class Mn extends le.a {
            constructor(t, e, n = "main") {
                super(e), this._doc = t, this.rootName = n
            }

            get document() {
                return this._doc
            }

            is(t, e) {
                const n = t.replace("model:", "");
                return e ? "rootElement" == n && e == this.name || super.is(t, e) : "rootElement" == n || super.is(t)
            }

            toJSON() {
                return this.rootName
            }
        }

        class On {
            constructor(t, e) {
                this.model = t, this.batch = e
            }

            createText(t, e) {
                return new ge.a(t, e)
            }

            createElement(t, e) {
                return new le.a(t, e)
            }

            createDocumentFragment() {
                return new Pn.a
            }

            insert(t, e, n = 0) {
                if (this._assertWriterUsedCorrectly(), t instanceof ge.a && "" == t.data) return;
                const i = Xt.a._createAt(e, n);
                if (t.parent) {
                    if (jn(t.root, i.root)) return void this.move(te.a._createOn(t), i);
                    if (t.root.document) throw new v.b("model-writer-insert-forbidden-move: Cannot move a node from a document to a different tree. It is forbidden to move a node that was already in a document outside of it.", this);
                    this.remove(t)
                }
                const o = i.root.document ? i.root.document.version : null, r = new _n.a(i, t, o);
                if (t instanceof ge.a && (r.shouldReceiveAttributes = !0), this.batch.addOperation(r), this.model.applyOperation(r), t instanceof Pn.a) for (const [e, n] of t.markers) {
                    const t = Xt.a._createAt(n.root, 0), o = {
                        range: new te.a(n.start._getCombined(t, i), n.end._getCombined(t, i)),
                        usingOperation: !0,
                        affectsData: !0
                    };
                    this.model.markers.has(e) ? this.updateMarker(e, o) : this.addMarker(e, o)
                }
            }

            insertText(t, e, n, i) {
                e instanceof Pn.a || e instanceof le.a || e instanceof Xt.a ? this.insert(this.createText(t), e, n) : this.insert(this.createText(t, e), n, i)
            }

            insertElement(t, e, n, i) {
                e instanceof Pn.a || e instanceof le.a || e instanceof Xt.a ? this.insert(this.createElement(t), e, n) : this.insert(this.createElement(t, e), n, i)
            }

            append(t, e) {
                this.insert(t, e, "end")
            }

            appendText(t, e, n) {
                e instanceof Pn.a || e instanceof le.a ? this.insert(this.createText(t), e, "end") : this.insert(this.createText(t, e), n, "end")
            }

            appendElement(t, e, n) {
                e instanceof Pn.a || e instanceof le.a ? this.insert(this.createElement(t), e, "end") : this.insert(this.createElement(t, e), n, "end")
            }

            setAttribute(t, e, n) {
                if (this._assertWriterUsedCorrectly(), n instanceof te.a) {
                    const i = n.getMinimalFlatRanges();
                    for (const n of i) Sn(this, t, e, n)
                } else En(this, t, e, n)
            }

            setAttributes(t, e) {
                for (const [n, i] of Object(be.a)(t)) this.setAttribute(n, i, e)
            }

            removeAttribute(t, e) {
                if (this._assertWriterUsedCorrectly(), e instanceof te.a) {
                    const n = e.getMinimalFlatRanges();
                    for (const e of n) Sn(this, t, null, e)
                } else En(this, t, null, e)
            }

            clearAttributes(t) {
                this._assertWriterUsedCorrectly();
                const e = t => {
                    for (const e of t.getAttributeKeys()) this.removeAttribute(e, t)
                };
                if (t instanceof te.a) for (const n of t.getItems()) e(n); else e(t)
            }

            move(t, e, n) {
                if (this._assertWriterUsedCorrectly(), !(t instanceof te.a)) throw new v.b("writer-move-invalid-range: Invalid range to move.", this);
                if (!t.isFlat) throw new v.b("writer-move-range-not-flat: Range to move is not flat.", this);
                const i = Xt.a._createAt(e, n);
                if (i.isEqual(t.start)) return;
                if (this._addOperationForAffectedMarkers("move", t), !jn(t.root, i.root)) throw new v.b("writer-move-different-document: Range is going to be moved between different documents.", this);
                const o = t.root.document ? t.root.document.version : null,
                    r = new yn.a(t.start, t.end.offset - t.start.offset, i, o);
                this.batch.addOperation(r), this.model.applyOperation(r)
            }

            remove(t) {
                this._assertWriterUsedCorrectly();
                const e = (t instanceof te.a ? t : te.a._createOn(t)).getMinimalFlatRanges().reverse();
                for (const t of e) this._addOperationForAffectedMarkers("move", t), Nn(t.start, t.end.offset - t.start.offset, this.batch, this.model)
            }

            merge(t) {
                this._assertWriterUsedCorrectly();
                const e = t.nodeBefore, n = t.nodeAfter;
                if (this._addOperationForAffectedMarkers("merge", t), !(e instanceof le.a)) throw new v.b("writer-merge-no-element-before: Node before merge position must be an element.", this);
                if (!(n instanceof le.a)) throw new v.b("writer-merge-no-element-after: Node after merge position must be an element.", this);
                t.root.document ? this._merge(t) : this._mergeDetached(t)
            }

            createPositionFromPath(t, e, n) {
                return this.model.createPositionFromPath(t, e, n)
            }

            createPositionAt(t, e) {
                return this.model.createPositionAt(t, e)
            }

            createPositionAfter(t) {
                return this.model.createPositionAfter(t)
            }

            createPositionBefore(t) {
                return this.model.createPositionBefore(t)
            }

            createRange(t, e) {
                return this.model.createRange(t, e)
            }

            createRangeIn(t) {
                return this.model.createRangeIn(t)
            }

            createRangeOn(t) {
                return this.model.createRangeOn(t)
            }

            createSelection(t, e, n) {
                return this.model.createSelection(t, e, n)
            }

            _mergeDetached(t) {
                const e = t.nodeBefore, n = t.nodeAfter;
                this.move(te.a._createIn(n), Xt.a._createAt(e, "end")), this.remove(n)
            }

            _merge(t) {
                const e = Xt.a._createAt(t.nodeBefore, "end"), n = Xt.a._createAt(t.nodeAfter, 0),
                    i = t.root.document.graveyard, o = new Xt.a(i, [0]), r = t.root.document.version,
                    s = new Cn.a(n, t.nodeAfter.maxOffset, e, o, r);
                this.batch.addOperation(s), this.model.applyOperation(s)
            }

            rename(t, e) {
                if (this._assertWriterUsedCorrectly(), !(t instanceof le.a)) throw new v.b("writer-rename-not-element-instance: Trying to rename an object which is not an instance of Element.", this);
                const n = t.root.document ? t.root.document.version : null,
                    i = new xn.a(Xt.a._createBefore(t), t.name, e, n);
                this.batch.addOperation(i), this.model.applyOperation(i)
            }

            split(t, e) {
                this._assertWriterUsedCorrectly();
                let n, i, o = t.parent;
                if (!o.parent) throw new v.b("writer-split-element-no-parent: Element with no parent can not be split.", this);
                if (e || (e = o.parent), !t.parent.getAncestors({includeSelf: !0}).includes(e)) throw new v.b("writer-split-invalid-limit-element: Limit element is not a position ancestor.", this);
                do {
                    const e = o.root.document ? o.root.document.version : null, r = o.maxOffset - t.offset,
                        s = new Tn.a(t, r, null, e);
                    this.batch.addOperation(s), this.model.applyOperation(s), n || i || (n = o, i = t.parent.nextSibling), o = (t = this.createPositionAfter(t.parent)).parent
                } while (o !== e);
                return {position: t, range: new te.a(Xt.a._createAt(n, "end"), Xt.a._createAt(i, 0))}
            }

            wrap(t, e) {
                if (this._assertWriterUsedCorrectly(), !t.isFlat) throw new v.b("writer-wrap-range-not-flat: Range to wrap is not flat.", this);
                const n = e instanceof le.a ? e : new le.a(e);
                if (n.childCount > 0) throw new v.b("writer-wrap-element-not-empty: Element to wrap with is not empty.", this);
                if (null !== n.parent) throw new v.b("writer-wrap-element-attached: Element to wrap with is already attached to tree model.", this);
                this.insert(n, t.start);
                const i = new te.a(t.start.getShiftedBy(1), t.end.getShiftedBy(1));
                this.move(i, Xt.a._createAt(n, 0))
            }

            unwrap(t) {
                if (this._assertWriterUsedCorrectly(), null === t.parent) throw new v.b("writer-unwrap-element-no-parent: Trying to unwrap an element which has no parent.", this);
                this.move(te.a._createIn(t), this.createPositionAfter(t)), this.remove(t)
            }

            addMarker(t, e) {
                if (this._assertWriterUsedCorrectly(), !e || "boolean" != typeof e.usingOperation) throw new v.b("writer-addMarker-no-usingOperation: The options.usingOperation parameter is required when adding a new marker.", this);
                const n = e.usingOperation, i = e.range, o = void 0 !== e.affectsData && e.affectsData;
                if (this.model.markers.has(t)) throw new v.b("writer-addMarker-marker-exists: Marker with provided name already exists.", this);
                if (!i) throw new v.b("writer-addMarker-no-range: Range parameter is required when adding a new marker.", this);
                return n ? (In(this, t, null, i, o), this.model.markers.get(t)) : this.model.markers._set(t, i, n, o)
            }

            updateMarker(t, e) {
                this._assertWriterUsedCorrectly();
                const n = "string" == typeof t ? t : t.name, i = this.model.markers.get(n);
                if (!i) throw new v.b("writer-updateMarker-marker-not-exists: Marker with provided name does not exists.", this);
                if (!e) return void this.model.markers._refresh(i);
                const o = "boolean" == typeof e.usingOperation, r = "boolean" == typeof e.affectsData,
                    s = r ? e.affectsData : i.affectsData;
                if (!o && !e.range && !r) throw new v.b("writer-updateMarker-wrong-options: One of the options is required - provide range, usingOperations or affectsData.", this);
                const a = i.getRange(), c = e.range ? e.range : a;
                o && e.usingOperation !== i.managedUsingOperations ? e.usingOperation ? In(this, n, null, c, s) : (In(this, n, a, null, s), this.model.markers._set(n, c, void 0, s)) : i.managedUsingOperations ? In(this, n, a, c, s) : this.model.markers._set(n, c, void 0, s)
            }

            removeMarker(t) {
                this._assertWriterUsedCorrectly();
                const e = "string" == typeof t ? t : t.name;
                if (!this.model.markers.has(e)) throw new v.b("writer-removeMarker-no-marker: Trying to remove marker which does not exist.", this);
                const n = this.model.markers.get(e);
                n.managedUsingOperations ? In(this, e, n.getRange(), null, n.affectsData) : this.model.markers._remove(e)
            }

            setSelection(t, e, n) {
                this._assertWriterUsedCorrectly(), this.model.document.selection._setTo(t, e, n)
            }

            setSelectionFocus(t, e) {
                this._assertWriterUsedCorrectly(), this.model.document.selection._setFocus(t, e)
            }

            setSelectionAttribute(t, e) {
                if (this._assertWriterUsedCorrectly(), "string" == typeof t) this._setSelectionAttribute(t, e); else for (const [e, n] of Object(be.a)(t)) this._setSelectionAttribute(e, n)
            }

            removeSelectionAttribute(t) {
                if (this._assertWriterUsedCorrectly(), "string" == typeof t) this._removeSelectionAttribute(t); else for (const e of t) this._removeSelectionAttribute(e)
            }

            overrideSelectionGravity() {
                return this.model.document.selection._overrideGravity()
            }

            restoreSelectionGravity(t) {
                this.model.document.selection._restoreGravity(t)
            }

            _setSelectionAttribute(t, e) {
                const n = this.model.document.selection;
                if (n.isCollapsed && n.anchor.parent.isEmpty) {
                    const i = _e._getStoreAttributeKey(t);
                    this.setAttribute(i, e, n.anchor.parent)
                }
                n._setAttribute(t, e)
            }

            _removeSelectionAttribute(t) {
                const e = this.model.document.selection;
                if (e.isCollapsed && e.anchor.parent.isEmpty) {
                    const n = _e._getStoreAttributeKey(t);
                    this.removeAttribute(n, e.anchor.parent)
                }
                e._removeAttribute(t)
            }

            _assertWriterUsedCorrectly() {
                if (this.model._currentWriter !== this) throw new v.b("writer-incorrect-use: Trying to use a writer outside the change() block.", this)
            }

            _addOperationForAffectedMarkers(t, e) {
                for (const n of this.model.markers) {
                    if (!n.managedUsingOperations) continue;
                    const i = n.getRange();
                    let o = !1;
                    if ("move" == t) o = e.containsPosition(i.start) || e.start.isEqual(i.start) || e.containsPosition(i.end) || e.end.isEqual(i.end); else {
                        const t = e.nodeBefore, n = e.nodeAfter, r = i.start.parent == t && i.start.isAtEnd,
                            s = i.end.parent == n && 0 == i.end.offset, a = i.end.nodeAfter == n,
                            c = i.start.nodeAfter == n;
                        o = r || s || a || c
                    }
                    o && this.updateMarker(n.name, {range: i})
                }
            }
        }

        function Sn(t, e, n, i) {
            const o = t.model, r = o.document;
            let s, a, c, l = i.start;
            for (const t of i.getWalker({shallow: !0})) c = t.item.getAttribute(e), s && a != c && (a != n && d(), l = s), s = t.nextPosition, a = c;

            function d() {
                const i = new te.a(l, s), c = i.root.document ? r.version : null, d = new gn.a(i, e, a, n, c);
                t.batch.addOperation(d), o.applyOperation(d)
            }

            s instanceof Xt.a && s != l && a != n && d()
        }

        function En(t, e, n, i) {
            const o = t.model, r = o.document, s = i.getAttribute(e);
            let a, c;
            if (s != n) {
                if (i.root === i) {
                    const t = i.document ? r.version : null;
                    c = new An.a(i, e, s, n, t)
                } else {
                    const o = (a = new te.a(Xt.a._createBefore(i), t.createPositionAfter(i))).root.document ? r.version : null;
                    c = new gn.a(a, e, s, n, o)
                }
                t.batch.addOperation(c), o.applyOperation(c)
            }
        }

        function In(t, e, n, i, o) {
            const r = t.model, s = r.document, a = new vn.a(e, n, i, r.markers, o, s.version);
            t.batch.addOperation(a), r.applyOperation(a)
        }

        function Nn(t, e, n, i) {
            let o;
            if (t.root.document) {
                const n = i.document, r = new Xt.a(n.graveyard, [0]);
                o = new yn.a(t, e, r, n.version)
            } else o = new kn(t, e);
            n.addOperation(o), i.applyOperation(o)
        }

        function jn(t, e) {
            return t === e || t instanceof Mn && e instanceof Mn
        }

        class Rn {
            constructor(t) {
                this._markerCollection = t, this._changesInElement = new Map, this._elementSnapshots = new Map, this._changedMarkers = new Map, this._changeCount = 0, this._cachedChanges = null, this._cachedChangesWithGraveyard = null
            }

            get isEmpty() {
                return 0 == this._changesInElement.size && 0 == this._changedMarkers.size
            }

            refreshItem(t) {
                if (this._isInInsertedElement(t.parent)) return;
                this._markRemove(t.parent, t.startOffset, t.offsetSize), this._markInsert(t.parent, t.startOffset, t.offsetSize);
                const e = te.a._createOn(t);
                for (const t of this._markerCollection.getMarkersIntersectingRange(e)) {
                    const e = t.getRange();
                    this.bufferMarkerChange(t.name, e, e, t.affectsData)
                }
                this._cachedChanges = null
            }

            bufferOperation(t) {
                switch (t.type) {
                    case"insert":
                        if (this._isInInsertedElement(t.position.parent)) return;
                        this._markInsert(t.position.parent, t.position.offset, t.nodes.maxOffset);
                        break;
                    case"addAttribute":
                    case"removeAttribute":
                    case"changeAttribute":
                        for (const e of t.range.getItems({shallow: !0})) this._isInInsertedElement(e.parent) || this._markAttribute(e);
                        break;
                    case"remove":
                    case"move":
                    case"reinsert": {
                        if (t.sourcePosition.isEqual(t.targetPosition) || t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition)) return;
                        const e = this._isInInsertedElement(t.sourcePosition.parent),
                            n = this._isInInsertedElement(t.targetPosition.parent);
                        e || this._markRemove(t.sourcePosition.parent, t.sourcePosition.offset, t.howMany), n || this._markInsert(t.targetPosition.parent, t.getMovedRangeStart().offset, t.howMany);
                        break
                    }
                    case"rename": {
                        if (this._isInInsertedElement(t.position.parent)) return;
                        this._markRemove(t.position.parent, t.position.offset, 1), this._markInsert(t.position.parent, t.position.offset, 1);
                        const e = te.a._createFromPositionAndShift(t.position, 1);
                        for (const t of this._markerCollection.getMarkersIntersectingRange(e)) {
                            const e = t.getRange();
                            this.bufferMarkerChange(t.name, e, e, t.affectsData)
                        }
                        break
                    }
                    case"split": {
                        const e = t.splitPosition.parent;
                        this._isInInsertedElement(e) || this._markRemove(e, t.splitPosition.offset, t.howMany), this._isInInsertedElement(t.insertionPosition.parent) || this._markInsert(t.insertionPosition.parent, t.insertionPosition.offset, 1), t.graveyardPosition && this._markRemove(t.graveyardPosition.parent, t.graveyardPosition.offset, 1);
                        break
                    }
                    case"merge": {
                        const e = t.sourcePosition.parent;
                        this._isInInsertedElement(e.parent) || this._markRemove(e.parent, e.startOffset, 1);
                        const n = t.graveyardPosition.parent;
                        this._markInsert(n, t.graveyardPosition.offset, 1);
                        const i = t.targetPosition.parent;
                        this._isInInsertedElement(i) || this._markInsert(i, t.targetPosition.offset, e.maxOffset);
                        break
                    }
                }
                this._cachedChanges = null
            }

            bufferMarkerChange(t, e, n, i) {
                const o = this._changedMarkers.get(t);
                o ? (o.newRange = n, o.affectsData = i, null == o.oldRange && null == o.newRange && this._changedMarkers.delete(t)) : this._changedMarkers.set(t, {
                    oldRange: e,
                    newRange: n,
                    affectsData: i
                })
            }

            getMarkersToRemove() {
                const t = [];
                for (const [e, n] of this._changedMarkers) null != n.oldRange && t.push({name: e, range: n.oldRange});
                return t
            }

            getMarkersToAdd() {
                const t = [];
                for (const [e, n] of this._changedMarkers) null != n.newRange && t.push({name: e, range: n.newRange});
                return t
            }

            getChangedMarkers() {
                return Array.from(this._changedMarkers).map(t => ({
                    name: t[0],
                    data: {oldRange: t[1].oldRange, newRange: t[1].newRange}
                }))
            }

            hasDataChanges() {
                for (const [, t] of this._changedMarkers) if (t.affectsData) return !0;
                return this._changesInElement.size > 0
            }

            getChanges(t = {includeChangesInGraveyard: !1}) {
                if (this._cachedChanges) return t.includeChangesInGraveyard ? this._cachedChangesWithGraveyard.slice() : this._cachedChanges.slice();
                const e = [];
                for (const t of this._changesInElement.keys()) {
                    const n = this._changesInElement.get(t).sort((t, e) => t.offset === e.offset ? t.type != e.type ? "remove" == t.type ? -1 : 1 : 0 : t.offset < e.offset ? -1 : 1),
                        i = this._elementSnapshots.get(t), o = Dn(t.getChildren()), r = Ln(i.length, n);
                    let s = 0, a = 0;
                    for (const n of r) if ("i" === n) e.push(this._getInsertDiff(t, s, o[s].name)), s++; else if ("r" === n) e.push(this._getRemoveDiff(t, s, i[a].name)), a++; else if ("a" === n) {
                        const n = o[s].attributes, r = i[a].attributes;
                        let c;
                        if ("$text" == o[s].name) c = new te.a(Xt.a._createAt(t, s), Xt.a._createAt(t, s + 1)); else {
                            const e = t.offsetToIndex(s);
                            c = new te.a(Xt.a._createAt(t, s), Xt.a._createAt(t.getChild(e), 0))
                        }
                        e.push(...this._getAttributesDiff(c, r, n)), s++, a++
                    } else s++, a++
                }
                e.sort((t, e) => t.position.root != e.position.root ? t.position.root.rootName < e.position.root.rootName ? -1 : 1 : t.position.isEqual(e.position) ? t.changeCount - e.changeCount : t.position.isBefore(e.position) ? -1 : 1);
                for (let t = 1; t < e.length; t++) {
                    const n = e[t - 1], i = e[t],
                        o = "remove" == n.type && "remove" == i.type && "$text" == n.name && "$text" == i.name && n.position.isEqual(i.position),
                        r = "insert" == n.type && "insert" == i.type && "$text" == n.name && "$text" == i.name && n.position.parent == i.position.parent && n.position.offset + n.length == i.position.offset,
                        s = "attribute" == n.type && "attribute" == i.type && n.position.parent == i.position.parent && n.range.isFlat && i.range.isFlat && n.position.offset + n.length == i.position.offset && n.attributeKey == i.attributeKey && n.attributeOldValue == i.attributeOldValue && n.attributeNewValue == i.attributeNewValue;
                    (o || r || s) && (e[t - 1].length++, s && (e[t - 1].range.end = e[t - 1].range.end.getShiftedBy(1)), e.splice(t, 1), t--)
                }
                for (const t of e) delete t.changeCount, "attribute" == t.type && (delete t.position, delete t.length);
                return this._changeCount = 0, this._cachedChangesWithGraveyard = e.slice(), this._cachedChanges = e.slice().filter(Vn), t.includeChangesInGraveyard ? this._cachedChangesWithGraveyard : this._cachedChanges
            }

            reset() {
                this._changesInElement.clear(), this._elementSnapshots.clear(), this._changedMarkers.clear(), this._cachedChanges = null
            }

            _markInsert(t, e, n) {
                const i = {type: "insert", offset: e, howMany: n, count: this._changeCount++};
                this._markChange(t, i)
            }

            _markRemove(t, e, n) {
                const i = {type: "remove", offset: e, howMany: n, count: this._changeCount++};
                this._markChange(t, i), this._removeAllNestedChanges(t, e, n)
            }

            _markAttribute(t) {
                const e = {type: "attribute", offset: t.startOffset, howMany: t.offsetSize, count: this._changeCount++};
                this._markChange(t.parent, e)
            }

            _markChange(t, e) {
                this._makeSnapshot(t);
                const n = this._getChangesForElement(t);
                this._handleChange(e, n), n.push(e);
                for (let t = 0; t < n.length; t++) n[t].howMany < 1 && (n.splice(t, 1), t--)
            }

            _getChangesForElement(t) {
                let e;
                return this._changesInElement.has(t) ? e = this._changesInElement.get(t) : (e = [], this._changesInElement.set(t, e)), e
            }

            _makeSnapshot(t) {
                this._elementSnapshots.has(t) || this._elementSnapshots.set(t, Dn(t.getChildren()))
            }

            _handleChange(t, e) {
                t.nodesToHandle = t.howMany;
                for (const n of e) {
                    const i = t.offset + t.howMany, o = n.offset + n.howMany;
                    if ("insert" == t.type && ("insert" == n.type && (t.offset <= n.offset ? n.offset += t.howMany : t.offset < o && (n.howMany += t.nodesToHandle, t.nodesToHandle = 0)), "remove" == n.type && t.offset < n.offset && (n.offset += t.howMany), "attribute" == n.type)) if (t.offset <= n.offset) n.offset += t.howMany; else if (t.offset < o) {
                        const o = n.howMany;
                        n.howMany = t.offset - n.offset, e.unshift({
                            type: "attribute",
                            offset: i,
                            howMany: o - n.howMany,
                            count: this._changeCount++
                        })
                    }
                    if ("remove" == t.type) {
                        if ("insert" == n.type) if (i <= n.offset) n.offset -= t.howMany; else if (i <= o) if (t.offset < n.offset) {
                            const e = i - n.offset;
                            n.offset = t.offset, n.howMany -= e, t.nodesToHandle -= e
                        } else n.howMany -= t.nodesToHandle, t.nodesToHandle = 0; else if (t.offset <= n.offset) t.nodesToHandle -= n.howMany, n.howMany = 0; else if (t.offset < o) {
                            const e = o - t.offset;
                            n.howMany -= e, t.nodesToHandle -= e
                        }
                        if ("remove" == n.type && (i <= n.offset ? n.offset -= t.howMany : t.offset < n.offset && (t.nodesToHandle += n.howMany, n.howMany = 0)), "attribute" == n.type) if (i <= n.offset) n.offset -= t.howMany; else if (t.offset < n.offset) {
                            const e = i - n.offset;
                            n.offset = t.offset, n.howMany -= e
                        } else if (t.offset < o) if (i <= o) {
                            const i = n.howMany;
                            n.howMany = t.offset - n.offset;
                            const o = i - n.howMany - t.nodesToHandle;
                            e.unshift({type: "attribute", offset: t.offset, howMany: o, count: this._changeCount++})
                        } else n.howMany -= o - t.offset
                    }
                    if ("attribute" == t.type) {
                        if ("insert" == n.type) if (t.offset < n.offset && i > n.offset) {
                            if (i > o) {
                                const t = {type: "attribute", offset: o, howMany: i - o, count: this._changeCount++};
                                this._handleChange(t, e), e.push(t)
                            }
                            t.nodesToHandle = n.offset - t.offset, t.howMany = t.nodesToHandle
                        } else t.offset >= n.offset && t.offset < o && (i > o ? (t.nodesToHandle = i - o, t.offset = o) : t.nodesToHandle = 0);
                        if ("remove" == n.type && t.offset < n.offset && i > n.offset) {
                            const o = {
                                type: "attribute",
                                offset: n.offset,
                                howMany: i - n.offset,
                                count: this._changeCount++
                            };
                            this._handleChange(o, e), e.push(o), t.nodesToHandle = n.offset - t.offset, t.howMany = t.nodesToHandle
                        }
                        "attribute" == n.type && (t.offset >= n.offset && i <= o ? (t.nodesToHandle = 0, t.howMany = 0, t.offset = 0) : t.offset <= n.offset && i >= o && (n.howMany = 0))
                    }
                }
                t.howMany = t.nodesToHandle, delete t.nodesToHandle
            }

            _getInsertDiff(t, e, n) {
                return {
                    type: "insert",
                    position: Xt.a._createAt(t, e),
                    name: n,
                    length: 1,
                    changeCount: this._changeCount++
                }
            }

            _getRemoveDiff(t, e, n) {
                return {
                    type: "remove",
                    position: Xt.a._createAt(t, e),
                    name: n,
                    length: 1,
                    changeCount: this._changeCount++
                }
            }

            _getAttributesDiff(t, e, n) {
                const i = [];
                n = new Map(n);
                for (const [o, r] of e) {
                    const e = n.has(o) ? n.get(o) : null;
                    e !== r && i.push({
                        type: "attribute",
                        position: t.start,
                        range: t.clone(),
                        length: 1,
                        attributeKey: o,
                        attributeOldValue: r,
                        attributeNewValue: e,
                        changeCount: this._changeCount++
                    }), n.delete(o)
                }
                for (const [e, o] of n) i.push({
                    type: "attribute",
                    position: t.start,
                    range: t.clone(),
                    length: 1,
                    attributeKey: e,
                    attributeOldValue: null,
                    attributeNewValue: o,
                    changeCount: this._changeCount++
                });
                return i
            }

            _isInInsertedElement(t) {
                const e = t.parent;
                if (!e) return !1;
                const n = this._changesInElement.get(e), i = t.startOffset;
                if (n) for (const t of n) if ("insert" == t.type && i >= t.offset && i < t.offset + t.howMany) return !0;
                return this._isInInsertedElement(e)
            }

            _removeAllNestedChanges(t, e, n) {
                const i = new te.a(Xt.a._createAt(t, e), Xt.a._createAt(t, e + n));
                for (const t of i.getItems({shallow: !0})) t.is("element") && (this._elementSnapshots.delete(t), this._changesInElement.delete(t), this._removeAllNestedChanges(t, 0, t.maxOffset))
            }
        }

        function Dn(t) {
            const e = [];
            for (const n of t) if (n.is("text")) for (let t = 0; t < n.data.length; t++) e.push({
                name: "$text",
                attributes: new Map(n.getAttributes())
            }); else e.push({name: n.name, attributes: new Map(n.getAttributes())});
            return e
        }

        function Ln(t, e) {
            const n = [];
            let i = 0, o = 0;
            for (const t of e) {
                if (t.offset > i) {
                    for (let e = 0; e < t.offset - i; e++) n.push("e");
                    o += t.offset - i
                }
                if ("insert" == t.type) {
                    for (let e = 0; e < t.howMany; e++) n.push("i");
                    i = t.offset + t.howMany
                } else if ("remove" == t.type) {
                    for (let e = 0; e < t.howMany; e++) n.push("r");
                    i = t.offset, o += t.howMany
                } else n.push(..."a".repeat(t.howMany).split("")), i = t.offset + t.howMany, o += t.howMany
            }
            if (o < t) for (let e = 0; e < t - o - i; e++) n.push("e");
            return n
        }

        function Vn(t) {
            const e = t.position && "$graveyard" == t.position.root.rootName,
                n = t.range && "$graveyard" == t.range.root.rootName;
            return !e && !n
        }

        class zn {
            constructor() {
                this._operations = [], this._undoPairs = new Map, this._undoneOperations = new Set
            }

            addOperation(t) {
                this._operations.includes(t) || this._operations.push(t)
            }

            getOperations(t = 0, e = Number.POSITIVE_INFINITY) {
                return t < 0 ? [] : this._operations.slice(t, e)
            }

            getOperation(t) {
                return this._operations[t]
            }

            setOperationAsUndone(t, e) {
                this._undoPairs.set(e, t), this._undoneOperations.add(t)
            }

            isUndoingOperation(t) {
                return this._undoPairs.has(t)
            }

            isUndoneOperation(t) {
                return this._undoneOperations.has(t)
            }

            getUndoneOperation(t) {
                return this._undoPairs.get(t)
            }
        }

        function Bn(t, e) {
            return function (t) {
                return !!t && 1 == t.length && /[\ud800-\udbff]/.test(t)
            }(t.charAt(e - 1)) && function (t) {
                return !!t && 1 == t.length && /[\udc00-\udfff]/.test(t)
            }(t.charAt(e))
        }

        function Fn(t, e) {
            return function (t) {
                return !!t && 1 == t.length && /[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t)
            }(t.charAt(e))
        }

        var Un = n(205);
        const Hn = "$graveyard";

        class qn {
            constructor(t) {
                this.model = t, this.version = 0, this.history = new zn(this), this.selection = new _e(this), this.roots = new h.a({idProperty: "rootName"}), this.differ = new Rn(t.markers), this._postFixers = new Set, this._hasSelectionChangedFromTheLastChangeBlock = !1, this.createRoot("$root", Hn), this.listenTo(t, "applyOperation", (t, e) => {
                    const n = e[0];
                    if (n.isDocumentOperation && n.baseVersion !== this.version) throw new v.b("model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.", this, {operation: n})
                }, {priority: "highest"}), this.listenTo(t, "applyOperation", (t, e) => {
                    const n = e[0];
                    n.isDocumentOperation && this.differ.bufferOperation(n)
                }, {priority: "high"}), this.listenTo(t, "applyOperation", (t, e) => {
                    const n = e[0];
                    n.isDocumentOperation && (this.version++, this.history.addOperation(n))
                }, {priority: "low"}), this.listenTo(this.selection, "change", () => {
                    this._hasSelectionChangedFromTheLastChangeBlock = !0
                }), this.listenTo(t.markers, "update", (t, e, n, i) => {
                    this.differ.bufferMarkerChange(e.name, n, i, e.affectsData), null === n && e.on("change", (t, n) => {
                        this.differ.bufferMarkerChange(e.name, n, e.getRange(), e.affectsData)
                    })
                })
            }

            get graveyard() {
                return this.getRoot(Hn)
            }

            createRoot(t = "$root", e = "main") {
                if (this.roots.get(e)) throw new v.b("model-document-createRoot-name-exists: Root with specified name already exists.", this, {name: e});
                const n = new Mn(this, t, e);
                return this.roots.add(n), n
            }

            destroy() {
                this.selection.destroy(), this.stopListening()
            }

            getRoot(t = "main") {
                return this.roots.get(t)
            }

            getRootNames() {
                return Array.from(this.roots, t => t.rootName).filter(t => t != Hn)
            }

            registerPostFixer(t) {
                this._postFixers.add(t)
            }

            toJSON() {
                const t = Object(Un.a)(this);
                return t.selection = "[engine.model.DocumentSelection]", t.model = "[engine.model.Model]", t
            }

            _handleChangeBlock(t) {
                this._hasDocumentChangedFromTheLastChangeBlock() && (this._callPostFixers(t), this.selection.refresh(), this.differ.hasDataChanges() ? this.fire("change:data", t.batch) : this.fire("change", t.batch), this.selection.refresh(), this.differ.reset()), this._hasSelectionChangedFromTheLastChangeBlock = !1
            }

            _hasDocumentChangedFromTheLastChangeBlock() {
                return !this.differ.isEmpty || this._hasSelectionChangedFromTheLastChangeBlock
            }

            _getDefaultRoot() {
                for (const t of this.roots) if (t !== this.graveyard) return t;
                return this.graveyard
            }

            _getDefaultRange() {
                const t = this._getDefaultRoot(), e = this.model, n = e.schema, i = e.createPositionFromPath(t, [0]);
                return n.getNearestSelectionRange(i) || e.createRange(i)
            }

            _validateSelectionRange(t) {
                return Wn(t.start) && Wn(t.end)
            }

            _callPostFixers(t) {
                let e = !1;
                do {
                    for (const n of this._postFixers) if (this.selection.refresh(), e = n(t)) break
                } while (e)
            }
        }

        function Wn(t) {
            const e = t.textNode;
            if (e) {
                const n = e.data, i = t.offset - e.startOffset;
                return !Bn(n, i) && !Fn(n, i)
            }
            return !0
        }

        Object(f.a)(qn, ee.c);

        class Yn {
            constructor() {
                this._markers = new Map
            }

            [Symbol.iterator]() {
                return this._markers.values()
            }

            has(t) {
                return this._markers.has(t)
            }

            get(t) {
                return this._markers.get(t) || null
            }

            _set(t, e, n = !1, i = !1) {
                const o = t instanceof $n ? t.name : t, r = this._markers.get(o);
                if (r) {
                    const t = r.getRange();
                    let s = !1;
                    return t.isEqual(e) || (r._attachLiveRange(pe.a.fromRange(e)), s = !0), n != r.managedUsingOperations && (r._managedUsingOperations = n, s = !0), "boolean" == typeof i && i != r.affectsData && (r._affectsData = i, s = !0), s && this.fire("update:" + o, r, t, e), r
                }
                const s = pe.a.fromRange(e), a = new $n(o, s, n, i);
                return this._markers.set(o, a), this.fire("update:" + o, a, null, e), a
            }

            _remove(t) {
                const e = t instanceof $n ? t.name : t, n = this._markers.get(e);
                return !!n && (this._markers.delete(e), this.fire("update:" + e, n, n.getRange(), null), this._destroyMarker(n), !0)
            }

            _refresh(t) {
                const e = t instanceof $n ? t.name : t, n = this._markers.get(e);
                if (!n) throw new v.b("markercollection-refresh-marker-not-exists: Marker with provided name does not exists.", this);
                const i = n.getRange();
                this.fire("update:" + e, n, i, i, n.managedUsingOperations, n.affectsData)
            }

            * getMarkersAtPosition(t) {
                for (const e of this) e.getRange().containsPosition(t) && (yield e)
            }

            * getMarkersIntersectingRange(t) {
                for (const e of this) null !== e.getRange().getIntersection(t) && (yield e)
            }

            destroy() {
                for (const t of this._markers.values()) this._destroyMarker(t);
                this._markers = null, this.stopListening()
            }

            * getMarkersGroup(t) {
                for (const e of this._markers.values()) e.name.startsWith(t + ":") && (yield e)
            }

            _destroyMarker(t) {
                t.stopListening(), t._detachLiveRange()
            }
        }

        Object(f.a)(Yn, ee.c);

        class $n {
            constructor(t, e, n, i) {
                this.name = t, this._liveRange = this._attachLiveRange(e), this._managedUsingOperations = n, this._affectsData = i
            }

            get managedUsingOperations() {
                if (!this._liveRange) throw new v.b("marker-destroyed: Cannot use a destroyed marker instance.", this);
                return this._managedUsingOperations
            }

            get affectsData() {
                if (!this._liveRange) throw new v.b("marker-destroyed: Cannot use a destroyed marker instance.", this);
                return this._affectsData
            }

            getStart() {
                if (!this._liveRange) throw new v.b("marker-destroyed: Cannot use a destroyed marker instance.", this);
                return this._liveRange.start.clone()
            }

            getEnd() {
                if (!this._liveRange) throw new v.b("marker-destroyed: Cannot use a destroyed marker instance.", this);
                return this._liveRange.end.clone()
            }

            getRange() {
                if (!this._liveRange) throw new v.b("marker-destroyed: Cannot use a destroyed marker instance.", this);
                return this._liveRange.toRange()
            }

            is(t) {
                return "marker" == t || "model:marker" == t
            }

            _attachLiveRange(t) {
                return this._liveRange && this._detachLiveRange(), t.delegate("change:range").to(this), t.delegate("change:content").to(this), this._liveRange = t, t
            }

            _detachLiveRange() {
                this._liveRange.stopDelegating("change:range", this), this._liveRange.stopDelegating("change:content", this), this._liveRange.detach(), this._liveRange = null
            }
        }

        Object(f.a)($n, ee.c);
        var Gn = n(25);

        class Qn {
            constructor(t, e, n) {
                this.model = t, this.writer = e, this.position = n, this.canMergeWith = new Set([this.position.parent]), this.schema = t.schema, this._filterAttributesOf = [], this._affectedStart = null, this._affectedEnd = null
            }

            handleNodes(t, e) {
                t = Array.from(t);
                for (let n = 0; n < t.length; n++) {
                    const i = t[n];
                    this._handleNode(i, {isFirst: 0 === n && e.isFirst, isLast: n === t.length - 1 && e.isLast})
                }
                this.schema.removeDisallowedAttributes(this._filterAttributesOf, this.writer), this._filterAttributesOf = []
            }

            getSelectionRange() {
                return this.nodeToSelect ? te.a._createOn(this.nodeToSelect) : this.model.schema.getNearestSelectionRange(this.position)
            }

            getAffectedRange() {
                return this._affectedStart ? new te.a(this._affectedStart, this._affectedEnd) : null
            }

            destroy() {
                this._affectedStart && this._affectedStart.detach(), this._affectedEnd && this._affectedEnd.detach()
            }

            _handleNode(t, e) {
                if (this.schema.isObject(t)) return void this._handleObject(t, e);
                this._checkAndSplitToAllowedPosition(t, e) ? (this._insert(t), this._mergeSiblingsOf(t, e)) : this._handleDisallowedNode(t, e)
            }

            _handleObject(t, e) {
                this._checkAndSplitToAllowedPosition(t) ? this._insert(t) : this._tryAutoparagraphing(t, e)
            }

            _handleDisallowedNode(t, e) {
                t.is("element") ? this.handleNodes(t.getChildren(), e) : this._tryAutoparagraphing(t, e)
            }

            _insert(t) {
                if (!this.schema.checkChild(this.position, t)) throw new v.b("insertcontent-wrong-position: Given node cannot be inserted on the given position.", this, {
                    node: t,
                    position: this.position
                });
                const e = Gn.a.fromPosition(this.position, "toNext");
                this._setAffectedBoundaries(this.position), this.writer.insert(t, this.position), this.position = e.toPosition(), e.detach(), this.schema.isObject(t) && !this.schema.checkChild(this.position, "$text") ? this.nodeToSelect = t : this.nodeToSelect = null, this._filterAttributesOf.push(t)
            }

            _setAffectedBoundaries(t) {
                this._affectedStart || (this._affectedStart = Gn.a.fromPosition(t, "toPrevious")), this._affectedEnd && !this._affectedEnd.isBefore(t) || (this._affectedEnd && this._affectedEnd.detach(), this._affectedEnd = Gn.a.fromPosition(t, "toNext"))
            }

            _mergeSiblingsOf(t, e) {
                if (!(t instanceof le.a)) return;
                const n = this._canMergeLeft(t, e), i = this._canMergeRight(t, e), o = Gn.a._createBefore(t);
                o.stickiness = "toNext";
                const r = Gn.a._createAfter(t);
                if (r.stickiness = "toNext", n) {
                    const t = Gn.a.fromPosition(this.position);
                    t.stickiness = "toNext", this._affectedStart.isEqual(o) && (this._affectedStart.detach(), this._affectedStart = Gn.a._createAt(o.nodeBefore, "end", "toPrevious")), this.writer.merge(o), o.isEqual(this._affectedEnd) && e.isLast && (this._affectedEnd.detach(), this._affectedEnd = Gn.a._createAt(o.nodeBefore, "end", "toNext")), this.position = t.toPosition(), t.detach()
                }
                if (i) {
                    if (!this.position.isEqual(r)) throw new v.b("insertcontent-invalid-insertion-position", this);
                    this.position = Xt.a._createAt(r.nodeBefore, "end");
                    const t = Gn.a.fromPosition(this.position, "toPrevious");
                    this._affectedEnd.isEqual(r) && (this._affectedEnd.detach(), this._affectedEnd = Gn.a._createAt(r.nodeBefore, "end", "toNext")), this.writer.merge(r), r.getShiftedBy(-1).isEqual(this._affectedStart) && e.isFirst && (this._affectedStart.detach(), this._affectedStart = Gn.a._createAt(r.nodeBefore, 0, "toPrevious")), this.position = t.toPosition(), t.detach()
                }
                (n || i) && this._filterAttributesOf.push(this.position.parent), o.detach(), r.detach()
            }

            _canMergeLeft(t, e) {
                const n = t.previousSibling;
                return e.isFirst && n instanceof le.a && this.canMergeWith.has(n) && this.model.schema.checkMerge(n, t)
            }

            _canMergeRight(t, e) {
                const n = t.nextSibling;
                return e.isLast && n instanceof le.a && this.canMergeWith.has(n) && this.model.schema.checkMerge(t, n)
            }

            _tryAutoparagraphing(t, e) {
                const n = this.writer.createElement("paragraph");
                this._getAllowedIn(n, this.position.parent) && this.schema.checkChild(n, t) && (n._appendChild(t), this._handleNode(n, e))
            }

            _checkAndSplitToAllowedPosition(t) {
                const e = this._getAllowedIn(t, this.position.parent);
                if (!e) return !1;
                for (; e != this.position.parent;) {
                    if (this.schema.isLimit(this.position.parent)) return !1;
                    if (this.position.isAtStart) {
                        const t = this.position.parent;
                        this.position = this.writer.createPositionBefore(t), t.isEmpty && t.parent === e && this.writer.remove(t)
                    } else if (this.position.isAtEnd) this.position = this.writer.createPositionAfter(this.position.parent); else {
                        const t = this.writer.createPositionAfter(this.position.parent);
                        this._setAffectedBoundaries(this.position), this.writer.split(this.position), this.position = t, this.canMergeWith.add(this.position.nodeAfter)
                    }
                }
                return !0
            }

            _getAllowedIn(t, e) {
                return this.schema.checkChild(e, t) ? e : e.parent ? this._getAllowedIn(t, e.parent) : null
            }
        }

        function Jn(t, e, n = {}) {
            if (e.isCollapsed) return;
            const i = e.getFirstRange();
            if ("$graveyard" == i.root.rootName) return;
            const o = t.schema;
            t.change(t => {
                if (!n.doNotResetEntireContent && function (t, e) {
                    const n = t.getLimitElement(e);
                    if (!e.containsEntireContent(n)) return !1;
                    const i = e.getFirstRange();
                    if (i.start.parent == i.end.parent) return !1;
                    return t.checkChild(n, "paragraph")
                }(o, e)) return void function (t, e) {
                    const n = t.model.schema.getLimitElement(e);
                    t.remove(t.createRangeIn(n)), Kn(t, t.createPositionAt(n, 0), e)
                }(t, e);
                const r = i.start, s = Gn.a.fromPosition(i.end, "toNext");
                if (i.start.isTouching(i.end) || t.remove(i), n.leaveUnmerged || (!function t(e, n, i) {
                    const o = n.parent;
                    const r = i.parent;
                    if (o == r) return;
                    if (e.model.schema.isLimit(o) || e.model.schema.isLimit(r)) return;
                    if (!function (t, e, n) {
                        const i = new te.a(t, e);
                        for (const t of i.getWalker()) if (n.isLimit(t.item)) return !1;
                        return !0
                    }(n, i, e.model.schema)) return;
                    n = e.createPositionAfter(o);
                    i = e.createPositionBefore(r);
                    i.isEqual(n) || e.insert(r, n);
                    e.merge(n);
                    for (; i.parent.isEmpty;) {
                        const t = i.parent;
                        i = e.createPositionBefore(t), e.remove(t)
                    }
                    t(e, n, i)
                }(t, r, s), o.removeDisallowedAttributes(r.parent.getChildren(), t)), Zn(t, e, r), function (t, e) {
                    const n = t.checkChild(e, "$text"), i = t.checkChild(e, "paragraph");
                    return !n && i
                }(o, r)) {
                    const i = o.getNearestSelectionRange(r);
                    n.doNotAutoparagraph && i ? Zn(t, e, i) : Kn(t, r, e)
                }
                s.detach()
            })
        }

        function Kn(t, e, n) {
            const i = t.createElement("paragraph");
            t.insert(i, e), Zn(t, n, t.createPositionAt(i, 0))
        }

        function Zn(t, e, n) {
            e instanceof _e ? t.setSelection(n) : e.setTo(n)
        }

        const Xn = ' ,.?!:;"-()';

        function ti(t, e, n = {}) {
            const i = t.schema, o = "backward" != n.direction, r = n.unit ? n.unit : "character", s = e.focus,
                a = new Je.a({
                    boundaries: function (t, e) {
                        const n = t.root, i = Xt.a._createAt(n, e ? "end" : 0);
                        return e ? new te.a(t, i) : new te.a(i, t)
                    }(s, o), singleCharacters: !0, direction: o ? "forward" : "backward"
                }), c = {walker: a, schema: i, isForward: o, unit: r};
            let l;
            for (; l = a.next();) {
                if (l.done) return;
                const n = ei(c, l.value);
                if (n) return void (e instanceof _e ? t.change(t => {
                    t.setSelectionFocus(n)
                }) : e.setFocus(n))
            }
        }

        function ei(t, e) {
            if ("text" == e.type) return "word" === t.unit ? function (t, e) {
                let n = t.position.textNode;
                if (n) {
                    let i = t.position.offset - n.startOffset;
                    for (; !ni(n.data, i, e) && !ii(n, i, e);) {
                        t.next();
                        const o = e ? t.position.nodeAfter : t.position.nodeBefore;
                        if (o && o.is("text")) {
                            const i = o.data.charAt(e ? 0 : o.data.length - 1);
                            Xn.includes(i) || (t.next(), n = t.position.textNode)
                        }
                        i = t.position.offset - n.startOffset
                    }
                }
                return t.position
            }(t.walker, t.isForward) : function (t, e) {
                const n = t.position.textNode;
                if (n) {
                    const i = n.data;
                    let o = t.position.offset - n.startOffset;
                    for (; Bn(i, o) || "character" == e && Fn(i, o);) t.next(), o = t.position.offset - n.startOffset
                }
                return t.position
            }(t.walker, t.unit, t.isForward);
            if (e.type == (t.isForward ? "elementStart" : "elementEnd")) {
                if (t.schema.isObject(e.item)) return Xt.a._createAt(e.item, t.isForward ? "after" : "before");
                if (t.schema.checkChild(e.nextPosition, "$text")) return e.nextPosition
            } else {
                if (t.schema.isLimit(e.item)) return void t.walker.skip(() => !0);
                if (t.schema.checkChild(e.nextPosition, "$text")) return e.nextPosition
            }
        }

        function ni(t, e, n) {
            const i = e + (n ? 0 : -1);
            return Xn.includes(t.charAt(i))
        }

        function ii(t, e, n) {
            return e === (n ? t.endOffset : 0)
        }

        function oi(t, e) {
            const n = [];
            Array.from(t.getItems({direction: "backward"})).map(t => e.createRangeOn(t)).filter(e => {
                return (e.start.isAfter(t.start) || e.start.isEqual(t.start)) && (e.end.isBefore(t.end) || e.end.isEqual(t.end))
            }).forEach(t => {
                n.push(t.start.parent), e.remove(t)
            }), n.forEach(t => {
                let n = t;
                for (; n.parent && n.isEmpty;) {
                    const t = e.createRangeOn(n);
                    n = n.parent, e.remove(t)
                }
            })
        }

        function ri(t) {
            t.document.registerPostFixer(e => (function (t, e) {
                const n = e.document.selection, i = e.schema, o = [];
                let r = !1;
                for (const t of n.getRanges()) {
                    const e = si(t, i);
                    e ? (o.push(e), r = !0) : o.push(t)
                }
                if (r) {
                    let e = o;
                    if (o.length > 1) {
                        const t = o[0].start, n = o[o.length - 1].end;
                        e = [new te.a(t, n)]
                    }
                    t.setSelection(e, {backward: n.isBackward})
                }
            })(e, t))
        }

        function si(t, e) {
            return t.isCollapsed ? function (t, e) {
                const n = t.start, i = e.getNearestSelectionRange(n);
                if (!i) return null;
                const o = i.start;
                if (n.isEqual(o)) return null;
                if (o.nodeAfter && e.isLimit(o.nodeAfter)) return new te.a(o, Xt.a._createAfter(o.nodeAfter));
                return new te.a(o)
            }(t, e) : function (t, e) {
                const n = t.start, i = t.end, o = e.checkChild(n, "$text"), r = e.checkChild(i, "$text"),
                    s = e.getLimitElement(n), a = e.getLimitElement(i);
                if (s === a) {
                    if (o && r) return null;
                    if (function (t, e, n) {
                        const i = t.nodeAfter && !n.isLimit(t.nodeAfter) || n.checkChild(t, "$text"),
                            o = e.nodeBefore && !n.isLimit(e.nodeBefore) || n.checkChild(e, "$text");
                        return i || o
                    }(n, i, e)) {
                        const t = n.nodeAfter && e.isObject(n.nodeAfter),
                            o = t ? null : e.getNearestSelectionRange(n, "forward"),
                            r = i.nodeBefore && e.isObject(i.nodeBefore),
                            s = r ? null : e.getNearestSelectionRange(i, "backward"), a = o ? o.start : n,
                            c = s ? s.start : i;
                        return new te.a(a, c)
                    }
                }
                const c = s && !s.is("rootElement"), l = a && !a.is("rootElement");
                if (c || l) {
                    const t = n.nodeAfter && i.nodeBefore && n.nodeAfter.parent === i.nodeBefore.parent,
                        o = c && (!t || !ci(n.nodeAfter, e)), r = l && (!t || !ci(i.nodeBefore, e));
                    let d = n, u = i;
                    return o && (d = Xt.a._createBefore(ai(s, e))), r && (u = Xt.a._createAfter(ai(a, e))), new te.a(d, u)
                }
                return null
            }(t, e)
        }

        function ai(t, e) {
            let n = t, i = n;
            for (; e.isLimit(i) && i.parent;) n = i, i = i.parent;
            return n
        }

        function ci(t, e) {
            return t && e.isObject(t)
        }

        class li {
            constructor() {
                this.markers = new Yn, this.document = new qn(this), this.schema = new Ke, this._pendingChanges = [], this._currentWriter = null, ["insertContent", "deleteContent", "modifySelection", "getSelectedContent", "applyOperation"].forEach(t => this.decorate(t)), this.on("applyOperation", (t, e) => {
                    e[0]._validate()
                }, {priority: "highest"}), this.schema.register("$root", {isLimit: !0}), this.schema.register("$block", {
                    allowIn: "$root",
                    isBlock: !0
                }), this.schema.register("$text", {
                    allowIn: "$block",
                    isInline: !0
                }), this.schema.register("$clipboardHolder", {
                    allowContentOf: "$root",
                    isLimit: !0
                }), this.schema.extend("$text", {allowIn: "$clipboardHolder"}), this.schema.register("$marker"), this.schema.addChildCheck((t, e) => {
                    if ("$marker" === e.name) return !0
                }), ri(this)
            }

            change(t) {
                return 0 === this._pendingChanges.length ? (this._pendingChanges.push({
                    batch: new pn,
                    callback: t
                }), this._runPendingChanges()[0]) : t(this._currentWriter)
            }

            enqueueChange(t, e) {
                "string" == typeof t ? t = new pn(t) : "function" == typeof t && (e = t, t = new pn), this._pendingChanges.push({
                    batch: t,
                    callback: e
                }), 1 == this._pendingChanges.length && this._runPendingChanges()
            }

            applyOperation(t) {
                t._execute()
            }

            insertContent(t, e, n) {
                return function (t, e, n, i) {
                    return t.change(o => {
                        let r;
                        const s = (r = n ? n instanceof ue || n instanceof _e ? n : o.createSelection(n, i) : t.document.selection).getFirstPosition();
                        r.isCollapsed || t.deleteContent(r, {doNotAutoparagraph: !0});
                        const a = new Qn(t, o, s);
                        let c;
                        c = e.is("documentFragment") ? e.getChildren() : [e], a.handleNodes(c, {
                            isFirst: !0,
                            isLast: !0
                        });
                        const l = a.getSelectionRange();
                        l && (r instanceof _e ? o.setSelection(l) : r.setTo(l));
                        const d = a.getAffectedRange() || t.createRange(s);
                        return a.destroy(), d
                    })
                }(this, t, e, n)
            }

            deleteContent(t, e) {
                Jn(this, t, e)
            }

            modifySelection(t, e) {
                ti(this, t, e)
            }

            getSelectedContent(t) {
                return function (t, e) {
                    return t.change(t => {
                        const n = t.createDocumentFragment(), i = e.getFirstRange();
                        if (!i || i.isCollapsed) return n;
                        const o = i.start.root, r = i.start.getCommonPath(i.end), s = o.getNodeByPath(r);
                        let a;
                        const c = (a = i.start.parent == i.end.parent ? i : t.createRange(t.createPositionAt(s, i.start.path[r.length]), t.createPositionAt(s, i.end.path[r.length] + 1))).end.offset - a.start.offset;
                        for (const e of a.getItems({shallow: !0})) e.is("textProxy") ? t.appendText(e.data, e.getAttributes(), n) : t.append(e._clone(!0), n);
                        if (a != i) {
                            const e = i._getTransformedByMove(a.start, t.createPositionAt(n, 0), c)[0],
                                o = t.createRange(t.createPositionAt(n, 0), e.start);
                            oi(t.createRange(e.end, t.createPositionAt(n, "end")), t), oi(o, t)
                        }
                        return n
                    })
                }(this, t)
            }

            hasContent(t, e) {
                const n = t instanceof le.a ? te.a._createIn(t) : t;
                if (n.isCollapsed) return !1;
                for (const t of this.markers.getMarkersIntersectingRange(n)) if (t.affectsData) return !0;
                const {ignoreWhitespaces: i = !1} = e || {};
                for (const t of n.getItems()) if (t.is("textProxy")) {
                    if (!i) return !0;
                    if (-1 !== t.data.search(/\S/)) return !0
                } else if (this.schema.isObject(t)) return !0;
                return !1
            }

            createPositionFromPath(t, e, n) {
                return new Xt.a(t, e, n)
            }

            createPositionAt(t, e) {
                return Xt.a._createAt(t, e)
            }

            createPositionAfter(t) {
                return Xt.a._createAfter(t)
            }

            createPositionBefore(t) {
                return Xt.a._createBefore(t)
            }

            createRange(t, e) {
                return new te.a(t, e)
            }

            createRangeIn(t) {
                return te.a._createIn(t)
            }

            createRangeOn(t) {
                return te.a._createOn(t)
            }

            createSelection(t, e, n) {
                return new ue(t, e, n)
            }

            createBatch(t) {
                return new pn(t)
            }

            destroy() {
                this.document.destroy(), this.stopListening()
            }

            _runPendingChanges() {
                const t = [];
                for (this.fire("_beforeChanges"); this._pendingChanges.length;) {
                    const e = this._pendingChanges[0].batch;
                    this._currentWriter = new On(this, e);
                    const n = this._pendingChanges[0].callback(this._currentWriter);
                    t.push(n), this.document._handleChangeBlock(this._currentWriter), this._pendingChanges.shift(), this._currentWriter = null
                }
                return this.fire("_afterChanges"), t
            }
        }

        Object(f.a)(li, m.a);
        var di = n(69);

        class ui {
            constructor() {
                this._listener = Object.create(di.a)
            }

            listenTo(t) {
                this._listener.listenTo(t, "keydown", (t, e) => {
                    this._listener.fire("_keydown:" + Object(O.a)(e), e)
                })
            }

            set(t, e, n = {}) {
                const i = Object(O.d)(t), o = n.priority;
                this._listener.listenTo(this._listener, "_keydown:" + i, (t, n) => {
                    e(n, () => {
                        n.preventDefault(), n.stopPropagation(), t.stop()
                    }), t.return = !0
                }, {priority: o})
            }

            press(t) {
                return !!this._listener.fire("_keydown:" + Object(O.a)(t), t)
            }

            destroy() {
                this._listener.stopListening()
            }
        }

        class hi extends ui {
            constructor(t) {
                super(), this.editor = t
            }

            set(t, e, n = {}) {
                if ("string" == typeof e) {
                    const t = e;
                    e = ((e, n) => {
                        this.editor.execute(t), n()
                    })
                }
                super.set(t, e, n)
            }
        }

        class fi {
            constructor(t) {
                const e = this.constructor.builtinPlugins;
                this.config = new s(t, this.constructor.defaultConfig), this.config.define("plugins", e), this.plugins = new Fe(this, e), this.commands = new Ue;
                const n = this.config.get("language") || {};
                this.locale = new We({
                    uiLanguage: "string" == typeof n ? n : n.ui,
                    contentLanguage: this.config.get("language.content")
                }), this.t = this.locale.t, this.set("state", "initializing"), this.once("ready", () => this.state = "ready", {priority: "high"}), this.once("destroy", () => this.state = "destroyed", {priority: "high"}), this.set("isReadOnly", !1), this.model = new li, this.data = new un(this.model), this.editing = new Be(this.model), this.editing.view.document.bind("isReadOnly").to(this), this.conversion = new hn([this.editing.downcastDispatcher, this.data.downcastDispatcher], this.data.upcastDispatcher), this.conversion.addAlias("dataDowncast", this.data.downcastDispatcher), this.conversion.addAlias("editingDowncast", this.editing.downcastDispatcher), this.keystrokes = new hi(this), this.keystrokes.listenTo(this.editing.view.document)
            }

            initPlugins() {
                const t = this.config, e = t.get("plugins") || [], n = t.get("removePlugins") || [],
                    i = t.get("extraPlugins") || [];
                return this.plugins.init(e.concat(i), n)
            }

            destroy() {
                let t = Promise.resolve();
                return "initializing" == this.state && (t = new Promise(t => this.once("ready", t))), t.then(() => {
                    this.fire("destroy"), this.stopListening(), this.commands.destroy()
                }).then(() => this.plugins.destroy()).then(() => {
                    this.model.destroy(), this.data.destroy(), this.editing.destroy(), this.keystrokes.destroy()
                })
            }

            execute(...t) {
                this.commands.execute(...t)
            }
        }

        Object(f.a)(fi, m.a);
        var mi = {
            setData(t) {
                this.data.set(t)
            }, getData(t) {
                return this.data.get(t)
            }
        };
        var pi = {
            updateSourceElement() {
                if (!this.sourceElement) throw new v.b("editor-missing-sourceelement: Cannot update the source element of a detached editor.", this);
                !function (t, e) {
                    t instanceof HTMLTextAreaElement && (t.value = e), t.innerHTML = e
                }(this.sourceElement, this.data.get())
            }
        }, gi = n(100);
        var bi = n(114);

        class wi {
            constructor(t) {
                this.editor = t, this._components = new Map
            }

            * names() {
                for (const t of this._components.values()) yield t.originalName
            }

            add(t, e) {
                if (this.has(t)) throw new v.b("componentfactory-item-exists: The item already exists in the component factory.", this, {name: t});
                this._components.set(ki(t), {callback: e, originalName: t})
            }

            create(t) {
                if (!this.has(t)) throw new v.b("componentfactory-item-missing: The required component is not registered in the factory.", this, {name: t});
                return this._components.get(ki(t)).callback(this.editor.locale)
            }

            has(t) {
                return this._components.has(ki(t))
            }
        }

        function ki(t) {
            return String(t).toLowerCase()
        }

        class _i {
            constructor() {
                this.set("isFocused", !1), this.set("focusedElement", null), this._elements = new Set, this._nextEventLoopTimeout = null
            }

            add(t) {
                if (this._elements.has(t)) throw new v.b("focusTracker-add-element-already-exist", this);
                this.listenTo(t, "focus", () => this._focus(t), {useCapture: !0}), this.listenTo(t, "blur", () => this._blur(), {useCapture: !0}), this._elements.add(t)
            }

            remove(t) {
                t === this.focusedElement && this._blur(t), this._elements.has(t) && (this.stopListening(t), this._elements.delete(t))
            }

            destroy() {
                this.stopListening()
            }

            _focus(t) {
                clearTimeout(this._nextEventLoopTimeout), this.focusedElement = t, this.isFocused = !0
            }

            _blur() {
                clearTimeout(this._nextEventLoopTimeout), this._nextEventLoopTimeout = setTimeout(() => {
                    this.focusedElement = null, this.isFocused = !1
                }, 0)
            }
        }

        Object(f.a)(_i, di.a), Object(f.a)(_i, m.a);

        class vi {
            constructor(t) {
                this.editor = t, this.componentFactory = new wi(t), this.focusTracker = new _i, this._editableElementsMap = new Map, this.listenTo(t.editing.view.document, "layoutChanged", () => this.update())
            }

            get element() {
                return null
            }

            update() {
                this.fire("update")
            }

            destroy() {
                this.stopListening(), this.focusTracker.destroy();
                for (const t of this._editableElementsMap.values()) t.ckeditorInstance = null;
                this._editableElementsMap = new Map
            }

            setEditableElement(t, e) {
                this._editableElementsMap.set(t, e), e.ckeditorInstance || (e.ckeditorInstance = this.editor)
            }

            getEditableElement(t = "main") {
                return this._editableElementsMap.get(t)
            }

            getEditableElementsNames() {
                return this._editableElementsMap.keys()
            }

            get _editableElements() {
                return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.", {editorUI: this}), this._editableElementsMap
            }
        }

        Object(f.a)(vi, ee.c);
        n(124);
        const yi = new WeakMap;

        function xi(t) {
            const {view: e, element: n, text: i, isDirectHost: o = !0} = t, r = e.document;
            yi.has(r) || (yi.set(r, new Map), r.registerPostFixer(t => Ti(r, t))), yi.get(r).set(n, {
                text: i,
                isDirectHost: o
            }), e.change(t => Ti(r, t))
        }

        function Ai(t, e) {
            return !!e.hasClass("ck-placeholder") && (t.removeClass("ck-placeholder", e), !0)
        }

        function Ti(t, e) {
            const n = yi.get(t);
            let i = !1;
            for (const [t, o] of n) Ci(e, t, o) && (i = !0);
            return i
        }

        function Ci(t, e, n) {
            const {text: i, isDirectHost: o} = n, r = o ? e : function (t) {
                if (1 === t.childCount) {
                    const e = t.getChild(0);
                    if (e.is("element") && !e.is("uiElement")) return e
                }
                return null
            }(e);
            let s = !1;
            return !!r && (n.hostElement = r, r.getAttribute("data-placeholder") !== i && (t.setAttribute("data-placeholder", i, r), s = !0), !function (t) {
                const e = t.document;
                if (!e) return !1;
                const n = !Array.from(t.getChildren()).some(t => !t.is("uiElement"));
                if (!e.isFocused && n) return !0;
                const i = e.selection.anchor;
                return !(!n || !i || i.parent === t)
            }(r) ? Ai(t, r) && (s = !0) : function (t, e) {
                return !e.hasClass("ck-placeholder") && (t.addClass("ck-placeholder", e), !0)
            }(t, r) && (s = !0), s)
        }

        class Pi {
            constructor() {
                this._replacedElements = []
            }

            replace(t, e) {
                this._replacedElements.push({
                    element: t,
                    newElement: e
                }), t.style.display = "none", e && t.parentNode.insertBefore(e, t.nextSibling)
            }

            restore() {
                this._replacedElements.forEach(({element: t, newElement: e}) => {
                    t.style.display = "", e && e.remove()
                }), this._replacedElements = []
            }
        }

        class Mi extends vi {
            constructor(t, e) {
                super(t), this.view = e, this._toolbarConfig = function (t) {
                    return Array.isArray(t) ? {items: t} : t ? Object.assign({items: []}, t) : {items: []}
                }(t.config.get("toolbar")), this._elementReplacer = new Pi
            }

            get element() {
                return this.view.element
            }

            init(t) {
                const e = this.editor, n = this.view, i = e.editing.view, o = n.editable, r = i.document.getRoot();
                o.name = r.rootName, n.render();
                const s = o.element;
                this.setEditableElement(o.name, s), this.focusTracker.add(s), n.editable.bind("isFocused").to(this.focusTracker), i.attachDomRoot(s), t && this._elementReplacer.replace(t, this.element), this._initPlaceholder(), this._initToolbar(), this.fire("ready")
            }

            destroy() {
                const t = this.view, e = this.editor.editing.view;
                this._elementReplacer.restore(), e.detachDomRoot(t.editable.name), t.destroy(), super.destroy()
            }

            _initToolbar() {
                const t = this.editor, e = this.view, n = t.editing.view;
                e.stickyPanel.bind("isActive").to(this.focusTracker, "isFocused"), e.stickyPanel.limiterElement = e.element, this._toolbarConfig.viewportTopOffset && (e.stickyPanel.viewportTopOffset = this._toolbarConfig.viewportTopOffset), e.toolbar.fillFromConfig(this._toolbarConfig.items, this.componentFactory), function ({origin: t, originKeystrokeHandler: e, originFocusTracker: n, toolbar: i, beforeFocus: o, afterBlur: r}) {
                    n.add(i.element), e.set("Alt+F10", (t, e) => {
                        n.isFocused && !i.focusTracker.isFocused && (o && o(), i.focus(), e())
                    }), i.keystrokes.set("Esc", (e, n) => {
                        i.focusTracker.isFocused && (t.focus(), r && r(), n())
                    })
                }({
                    origin: n,
                    originFocusTracker: this.focusTracker,
                    originKeystrokeHandler: t.keystrokes,
                    toolbar: e.toolbar
                })
            }

            _initPlaceholder() {
                const t = this.editor, e = t.editing.view, n = e.document.getRoot(), i = t.sourceElement,
                    o = t.config.get("placeholder") || i && "textarea" === i.tagName.toLowerCase() && i.getAttribute("placeholder");
                o && xi({view: e, element: n, text: o, isDirectHost: !1})
            }
        }

        var Oi = n(6), Si = n(53);
        n(128);

        class Ei extends Oi.a {
            constructor(t) {
                super(t), this.body = this.createCollection()
            }

            render() {
                super.render(), this._renderBodyCollection()
            }

            destroy() {
                return this._bodyCollectionContainer.remove(), super.destroy()
            }

            _renderBodyCollection() {
                const t = this.locale, e = this._bodyCollectionContainer = new Si.a({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-reset_all", "ck-body", "ck-rounded-corners"],
                        dir: t.uiLanguageDirection
                    },
                    children: this.body
                }).render();
                document.body.appendChild(e)
            }
        }

        n(130);

        class Ii extends Oi.a {
            constructor(t) {
                super(t), this.set("text"), this.set("for");
                const e = this.bindTemplate;
                this.setTemplate({
                    tag: "label",
                    attributes: {class: ["ck", "ck-label"], for: e.to("for")},
                    children: [{text: e.to("text")}]
                })
            }
        }

        class Ni extends Ei {
            constructor(t) {
                super(t);
                const e = Object(we.a)();
                this.top = this.createCollection(), this.main = this.createCollection(), this._voiceLabelView = this._createVoiceLabel(e), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-reset", "ck-editor", "ck-rounded-corners"],
                        role: "application",
                        dir: t.uiLanguageDirection,
                        lang: t.uiLanguage,
                        "aria-labelledby": `ck-editor__aria-label_${e}`
                    },
                    children: [this._voiceLabelView, {
                        tag: "div",
                        attributes: {class: ["ck", "ck-editor__top", "ck-reset_all"], role: "presentation"},
                        children: this.top
                    }, {
                        tag: "div",
                        attributes: {class: ["ck", "ck-editor__main"], role: "presentation"},
                        children: this.main
                    }]
                })
            }

            _createVoiceLabel(t) {
                const e = this.t, n = new Ii;
                return n.text = e("bq"), n.extendTemplate({
                    attributes: {
                        id: `ck-editor__aria-label_${t}`,
                        class: "ck-voice-label"
                    }
                }), n
            }
        }

        class ji extends Oi.a {
            constructor(t, e, n) {
                super(t), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-content", "ck-editor__editable", "ck-rounded-corners"],
                        lang: t.contentLanguage,
                        dir: t.contentLanguageDirection
                    }
                }), this.name = null, this.set("isFocused", !1), this._editableElement = n, this._hasExternalElement = !!this._editableElement, this._editingView = e
            }

            render() {
                super.render(), this._hasExternalElement ? this.template.apply(this.element = this._editableElement) : this._editableElement = this.element, this.on("change:isFocused", () => this._updateIsFocusedClasses()), this._updateIsFocusedClasses()
            }

            destroy() {
                this._hasExternalElement && this.template.revert(this._editableElement), super.destroy()
            }

            _updateIsFocusedClasses() {
                const t = this._editingView;

                function e(e) {
                    t.change(n => {
                        const i = t.document.getRoot(e.name);
                        n.addClass(e.isFocused ? "ck-focused" : "ck-blurred", i), n.removeClass(e.isFocused ? "ck-blurred" : "ck-focused", i)
                    })
                }

                t.isRenderingInProgress ? function n(i) {
                    t.once("change:isRenderingInProgress", (t, o, r) => {
                        r ? n(i) : e(i)
                    })
                }(this) : e(this)
            }
        }

        class Ri extends ji {
            constructor(t, e, n) {
                super(t, e, n), this.extendTemplate({
                    attributes: {
                        role: "textbox",
                        class: "ck-editor__editable_inline"
                    }
                })
            }

            render() {
                super.render();
                const t = this._editingView, e = this.t;
                t.change(n => {
                    const i = t.document.getRoot(this.name);
                    n.setAttribute("aria-label", e("ce", [this.name]), i)
                })
            }
        }

        var Di = n(21);

        function Li(t) {
            return e => e + t
        }

        n(132);
        const Vi = Li("px");

        class zi extends Oi.a {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.set("isActive", !1), this.set("isSticky", !1), this.set("limiterElement", null), this.set("limiterBottomOffset", 50), this.set("viewportTopOffset", 0), this.set("_marginLeft", null), this.set("_isStickyToTheLimiter", !1), this.set("_hasViewportTopOffset", !1), this.content = this.createCollection(), this._contentPanelPlaceholder = new Si.a({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-sticky-panel__placeholder"],
                        style: {
                            display: e.to("isSticky", t => t ? "block" : "none"),
                            height: e.to("isSticky", t => t ? Vi(this._panelRect.height) : null)
                        }
                    }
                }).render(), this._contentPanel = new Si.a({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-sticky-panel__content", e.if("isSticky", "ck-sticky-panel__content_sticky"), e.if("_isStickyToTheLimiter", "ck-sticky-panel__content_sticky_bottom-limit")],
                        style: {
                            width: e.to("isSticky", t => t ? Vi(this._contentPanelPlaceholder.getBoundingClientRect().width) : null),
                            top: e.to("_hasViewportTopOffset", t => t ? Vi(this.viewportTopOffset) : null),
                            bottom: e.to("_isStickyToTheLimiter", t => t ? Vi(this.limiterBottomOffset) : null),
                            marginLeft: e.to("_marginLeft")
                        }
                    },
                    children: this.content
                }).render(), this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck", "ck-sticky-panel"]},
                    children: [this._contentPanelPlaceholder, this._contentPanel]
                })
            }

            render() {
                super.render(), this._checkIfShouldBeSticky(), this.listenTo(Di.a.window, "scroll", () => {
                    this._checkIfShouldBeSticky()
                }), this.listenTo(this, "change:isActive", () => {
                    this._checkIfShouldBeSticky()
                })
            }

            _checkIfShouldBeSticky() {
                const t = this._panelRect = this._contentPanel.getBoundingClientRect();
                let e;
                this.limiterElement ? (e = this._limiterRect = this.limiterElement.getBoundingClientRect(), this.isSticky = this.isActive && e.top < this.viewportTopOffset && this._panelRect.height + this.limiterBottomOffset < e.height) : this.isSticky = !1, this.isSticky ? (this._isStickyToTheLimiter = e.bottom < t.height + this.limiterBottomOffset + this.viewportTopOffset, this._hasViewportTopOffset = !this._isStickyToTheLimiter && !!this.viewportTopOffset, this._marginLeft = this._isStickyToTheLimiter ? null : Vi(-Di.a.window.scrollX)) : (this._isStickyToTheLimiter = !1, this._hasViewportTopOffset = !1, this._marginLeft = null)
            }
        }

        class Bi {
            constructor(t) {
                if (Object.assign(this, t), t.actions && t.keystrokeHandler) for (const e in t.actions) {
                    let n = t.actions[e];
                    "string" == typeof n && (n = [n]);
                    for (const i of n) t.keystrokeHandler.set(i, (t, n) => {
                        this[e](), n()
                    })
                }
            }

            get first() {
                return this.focusables.find(Fi) || null
            }

            get last() {
                return this.focusables.filter(Fi).slice(-1)[0] || null
            }

            get next() {
                return this._getFocusableItem(1)
            }

            get previous() {
                return this._getFocusableItem(-1)
            }

            get current() {
                let t = null;
                return null === this.focusTracker.focusedElement ? null : (this.focusables.find((e, n) => {
                    const i = e.element === this.focusTracker.focusedElement;
                    return i && (t = n), i
                }), t)
            }

            focusFirst() {
                this._focus(this.first)
            }

            focusLast() {
                this._focus(this.last)
            }

            focusNext() {
                this._focus(this.next)
            }

            focusPrevious() {
                this._focus(this.previous)
            }

            _focus(t) {
                t && t.focus()
            }

            _getFocusableItem(t) {
                const e = this.current, n = this.focusables.length;
                if (!n) return null;
                if (null === e) return this[1 === t ? "first" : "last"];
                let i = (e + n + t) % n;
                do {
                    const e = this.focusables.get(i);
                    if (Fi(e)) return e;
                    i = (i + n + t) % n
                } while (i !== e);
                return null
            }
        }

        function Fi(t) {
            return !(!t.focus || "none" == Di.a.window.getComputedStyle(t.element).display)
        }

        class Ui extends Oi.a {
            constructor(t) {
                super(t), this.setTemplate({tag: "span", attributes: {class: ["ck", "ck-toolbar__separator"]}})
            }
        }

        n(134);

        class Hi extends Oi.a {
            constructor(t) {
                super(t);
                const e = this.bindTemplate, n = this.t;
                this.set("ariaLabel", n("bs")), this.items = this.createCollection(), this.focusTracker = new _i, this.keystrokes = new ui, this.set("isVertical", !1), this.set("class"), this._focusCycler = new Bi({
                    focusables: this.items,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: ["arrowleft", "arrowup"], focusNext: ["arrowright", "arrowdown"]}
                }), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-toolbar", e.if("isVertical", "ck-toolbar_vertical"), e.to("class")],
                        role: "toolbar",
                        "aria-label": e.to("ariaLabel")
                    },
                    children: this.items,
                    on: {
                        mousedown: function (t) {
                            return t.bindTemplate.to(e => {
                                e.target === t.element && e.preventDefault()
                            })
                        }(this)
                    }
                })
            }

            render() {
                super.render();
                for (const t of this.items) this.focusTracker.add(t.element);
                this.items.on("add", (t, e) => {
                    this.focusTracker.add(e.element)
                }), this.items.on("remove", (t, e) => {
                    this.focusTracker.remove(e.element)
                }), this.keystrokes.listenTo(this.element)
            }

            focus() {
                this._focusCycler.focusFirst()
            }

            focusLast() {
                this._focusCycler.focusLast()
            }

            fillFromConfig(t, e) {
                t.map(t => {
                    "|" == t ? this.items.add(new Ui) : e.has(t) ? this.items.add(e.create(t)) : console.warn(Object(v.a)("toolbarview-item-unavailable: The requested toolbar item is unavailable."), {name: t})
                })
            }
        }

        n(136);

        class qi extends Ni {
            constructor(t, e) {
                super(t), this.stickyPanel = new zi(t), this.toolbar = new Hi(t), this.editable = new Ri(t, e)
            }

            render() {
                super.render(), this.stickyPanel.content.add(this.toolbar), this.top.add(this.stickyPanel), this.main.add(this.editable)
            }
        }

        class Wi extends fi {
            constructor(t, e) {
                super(e), Object(r.a)(t) && (this.sourceElement = t), this.data.processor = new bi.a, this.model.document.createRoot(), this.ui = new Mi(this, new qi(this.locale, this.editing.view)), function (t) {
                    if (!Object(gi.a)(t.updateSourceElement)) throw new v.b("attachtoform-missing-elementapi-interface: Editor passed to attachToForm() must implement ElementApi.", t);
                    const e = t.sourceElement;
                    if (e && "textarea" === e.tagName.toLowerCase() && e.form) {
                        let n;
                        const i = e.form, o = () => t.updateSourceElement();
                        Object(gi.a)(i.submit) && (n = i.submit, i.submit = (() => {
                            o(), n.apply(i)
                        })), i.addEventListener("submit", o), t.on("destroy", () => {
                            i.removeEventListener("submit", o), n && (i.submit = n)
                        })
                    }
                }(this)
            }

            destroy() {
                return this.sourceElement && this.updateSourceElement(), this.ui.destroy(), super.destroy()
            }

            static create(t, e = {}) {
                return new Promise(n => {
                    const i = new this(t, e);
                    n(i.initPlugins().then(() => i.ui.init(Object(r.a)(t) ? t : null)).then(() => {
                        if (!Object(r.a)(t) && e.initialData) throw new v.b("editor-create-initial-data: The config.initialData option cannot be used together with initial data passed in Editor.create().", null);
                        const n = e.initialData || function (t) {
                            return Object(r.a)(t) ? function (t) {
                                return t instanceof HTMLTextAreaElement ? t.value : t.innerHTML
                            }(t) : t
                        }(t);
                        return i.data.init(n)
                    }).then(() => i.fire("ready")).then(() => i))
                })
            }
        }

        Object(f.a)(Wi, mi), Object(f.a)(Wi, pi);
        var Yi = n(1), $i = n(58), Gi = n(7);

        function* Qi(t, e) {
            for (const n of e) n && t.getAttributeProperties(n[0]).copyOnEnter && (yield n)
        }

        class Ji extends Gi.a {
            execute() {
                const t = this.editor.model, e = t.document;
                t.change(n => {
                    !function (t, e, n, i) {
                        const o = n.isCollapsed, r = n.getFirstRange(), s = r.start.parent, a = r.end.parent;
                        if (i.isLimit(s) || i.isLimit(a)) return void (o || s != a || t.deleteContent(n));
                        if (o) {
                            const t = Qi(e.model.schema, n.getAttributes());
                            Ki(e, r.start), e.setSelectionAttribute(t)
                        } else {
                            const i = !(r.start.isAtStart && r.end.isAtEnd), o = s == a;
                            t.deleteContent(n, {leaveUnmerged: i}), i && (o ? Ki(e, n.focus) : e.setSelection(a, 0))
                        }
                    }(this.editor.model, n, e.selection, t.schema), this.fire("afterExecute", {writer: n})
                })
            }
        }

        function Ki(t, e) {
            t.split(e), t.setSelection(e.parent.nextSibling, 0)
        }

        var Zi = n(82);

        class Xi extends st.a {
            constructor(t) {
                super(t);
                const e = this.document;
                e.on("keydown", (t, n) => {
                    if (this.isEnabled && n.keyCode == O.c.enter) {
                        let i;
                        e.once("enter", t => i = t, {priority: "highest"}), e.fire("enter", new Zi.a(e, n.domEvent, {isSoft: n.shiftKey})), i && i.stop.called && t.stop()
                    }
                })
            }

            observe() {
            }
        }

        class to extends Yi.a {
            static get pluginName() {
                return "Enter"
            }

            init() {
                const t = this.editor, e = t.editing.view, n = e.document;
                e.addObserver(Xi), t.commands.add("enter", new Ji(t)), this.listenTo(n, "enter", (n, i) => {
                    i.preventDefault(), i.isSoft || (t.execute("enter"), e.scrollToTheSelection())
                }, {priority: "low"})
            }
        }

        class eo extends Gi.a {
            execute() {
                const t = this.editor.model, e = t.document;
                t.change(n => {
                    !function (t, e, n) {
                        const i = n.isCollapsed, o = n.getFirstRange(), r = o.start.parent, s = o.end.parent,
                            a = r == s;
                        if (i) {
                            const i = Qi(t.schema, n.getAttributes());
                            no(e, o.end), e.removeSelectionAttribute(n.getAttributeKeys()), e.setSelectionAttribute(i)
                        } else {
                            const i = !(o.start.isAtStart && o.end.isAtEnd);
                            t.deleteContent(n, {leaveUnmerged: i}), a ? no(e, n.focus) : i && e.setSelection(s, 0)
                        }
                    }(t, n, e.selection), this.fire("afterExecute", {writer: n})
                })
            }

            refresh() {
                const t = this.editor.model, e = t.document;
                this.isEnabled = function (t, e) {
                    if (e.rangeCount > 1) return !1;
                    const n = e.anchor;
                    if (!n || !t.checkChild(n, "softBreak")) return !1;
                    const i = e.getFirstRange(), o = i.start.parent, r = i.end.parent;
                    if ((io(o, t) || io(r, t)) && o !== r) return !1;
                    return !0
                }(t.schema, e.selection)
            }
        }

        function no(t, e) {
            const n = t.createElement("softBreak");
            t.insert(n, e), t.setSelection(n, "after")
        }

        function io(t, e) {
            return !t.is("rootElement") && (e.isLimit(t) || io(t.parent, e))
        }

        class oo extends Yi.a {
            static get pluginName() {
                return "ShiftEnter"
            }

            init() {
                const t = this.editor, e = t.model.schema, n = t.conversion, i = t.editing.view, o = i.document;
                e.register("softBreak", {
                    allowWhere: "$text",
                    isInline: !0
                }), n.for("upcast").elementToElement({
                    model: "softBreak",
                    view: "br"
                }), n.for("downcast").elementToElement({
                    model: "softBreak",
                    view: (t, e) => e.createEmptyElement("br")
                }), i.addObserver(Xi), t.commands.add("shiftEnter", new eo(t)), this.listenTo(o, "enter", (e, n) => {
                    n.preventDefault(), n.isSoft && (t.execute("shiftEnter"), i.scrollToTheSelection())
                }, {priority: "low"})
            }
        }

        class ro {
            constructor(t, e = 20) {
                this.model = t, this.size = 0, this.limit = e, this.isLocked = !1, this._changeCallback = ((t, e) => {
                    "transparent" != e.type && e !== this._batch && this._reset(!0)
                }), this._selectionChangeCallback = (() => {
                    this._reset()
                }), this.model.document.on("change", this._changeCallback), this.model.document.selection.on("change:range", this._selectionChangeCallback), this.model.document.selection.on("change:attribute", this._selectionChangeCallback)
            }

            get batch() {
                return this._batch || (this._batch = this.model.createBatch()), this._batch
            }

            input(t) {
                this.size += t, this.size >= this.limit && this._reset(!0)
            }

            lock() {
                this.isLocked = !0
            }

            unlock() {
                this.isLocked = !1
            }

            destroy() {
                this.model.document.off("change", this._changeCallback), this.model.document.selection.off("change:range", this._selectionChangeCallback), this.model.document.selection.off("change:attribute", this._selectionChangeCallback)
            }

            _reset(t) {
                this.isLocked && !t || (this._batch = null, this.size = 0)
            }
        }

        class so extends Gi.a {
            constructor(t, e) {
                super(t), this._buffer = new ro(t.model, e), this._batches = new WeakSet
            }

            get buffer() {
                return this._buffer
            }

            destroy() {
                super.destroy(), this._buffer.destroy()
            }

            execute(t = {}) {
                const e = this.editor.model, n = e.document, i = t.text || "", o = i.length,
                    r = t.range || n.selection.getFirstRange(), s = t.resultRange;
                e.enqueueChange(this._buffer.batch, t => {
                    const a = r.isCollapsed;
                    this._buffer.lock(), e.deleteContent(e.createSelection(r)), i && e.insertContent(t.createText(i, n.selection.getAttributes()), r.start), s ? t.setSelection(s) : a && t.setSelection(r.start.getShiftedBy(o)), this._buffer.unlock(), this._buffer.input(o), this._batches.add(this._buffer.batch)
                })
            }
        }

        function ao(t) {
            let e = null;
            const n = t.model, i = t.editing.view, o = t.commands.get("input");

            function r(t) {
                const r = n.document, a = i.document.isComposing, c = e && e.isEqual(r.selection);
                e = null, o.isEnabled && (function (t) {
                    if (t.ctrlKey) return !0;
                    return co.includes(t.keyCode)
                }(t) || r.selection.isCollapsed || a && 229 === t.keyCode || !a && 229 === t.keyCode && c || s())
            }

            function s() {
                const t = o.buffer;
                t.lock(), n.enqueueChange(t.batch, () => {
                    n.deleteContent(n.document.selection)
                }), t.unlock()
            }

            et.a.isAndroid ? i.document.on("beforeinput", (t, e) => r(e), {priority: "lowest"}) : i.document.on("keydown", (t, e) => r(e), {priority: "lowest"}), i.document.on("compositionstart", function () {
                const t = n.document, e = 1 !== t.selection.rangeCount || t.selection.getFirstRange().isFlat;
                if (t.selection.isCollapsed || e) return;
                s()
            }, {priority: "lowest"}), i.document.on("compositionend", () => {
                e = n.createSelection(n.document.selection)
            }, {priority: "lowest"})
        }

        const co = [Object(O.a)("arrowUp"), Object(O.a)("arrowRight"), Object(O.a)("arrowDown"), Object(O.a)("arrowLeft"), 9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 45, 91, 93, 144, 145, 173, 174, 175, 176, 177, 178, 179, 255];
        for (let t = 112; t <= 135; t++) co.push(t);

        function lo(t) {
            if (t.newChildren.length - t.oldChildren.length != 1) return;
            const e = function (t, e) {
                const n = [];
                let i, o = 0;
                return t.forEach(t => {
                    "equal" == t ? (r(), o++) : "insert" == t ? (s("insert") ? i.values.push(e[o]) : (r(), i = {
                        type: "insert",
                        index: o,
                        values: [e[o]]
                    }), o++) : s("delete") ? i.howMany++ : (r(), i = {type: "delete", index: o, howMany: 1})
                }), r(), n;

                function r() {
                    i && (n.push(i), i = null)
                }

                function s(t) {
                    return i && i.type == t
                }
            }(J(t.oldChildren, t.newChildren, uo), t.newChildren);
            if (e.length > 1) return;
            const n = e[0];
            return n.values[0] && n.values[0].is("text") ? n : void 0
        }

        function uo(t, e) {
            return t && t.is("text") && e && e.is("text") ? t.data === e.data : t === e
        }

        class ho {
            constructor(t) {
                this.editor = t, this.editing = this.editor.editing
            }

            handle(t, e) {
                if (function (t) {
                    if (0 == t.length) return !1;
                    for (const e of t) if ("children" === e.type && !lo(e)) return !0;
                    return !1
                }(t)) this._handleContainerChildrenMutations(t, e); else for (const n of t) this._handleTextMutation(n, e), this._handleTextNodeInsertion(n)
            }

            _handleContainerChildrenMutations(t, e) {
                const n = function (t) {
                    const e = t.map(t => t.node).reduce((t, e) => t.getCommonAncestor(e, {includeSelf: !0}));
                    if (!e) return;
                    return e.getAncestors({
                        includeSelf: !0,
                        parentFirst: !0
                    }).find(t => t.is("containerElement") || t.is("rootElement"))
                }(t);
                if (!n) return;
                const i = this.editor.editing.view.domConverter.mapViewToDom(n), o = new rt.a,
                    r = this.editor.data.toModel(o.domToView(i)).getChild(0),
                    s = this.editor.editing.mapper.toModelElement(n);
                if (!s) return;
                const a = Array.from(r.getChildren()), c = Array.from(s.getChildren()), l = a[a.length - 1],
                    d = c[c.length - 1];
                l && l.is("softBreak") && d && !d.is("softBreak") && a.pop();
                const u = this.editor.model.schema;
                if (!fo(a, u) || !fo(c, u)) return;
                const h = a.map(t => t.is("text") ? t.data : "@").join("").replace(/\u00A0/g, " "),
                    f = c.map(t => t.is("text") ? t.data : "@").join("").replace(/\u00A0/g, " ");
                if (f === h) return;
                const m = J(f, h), {firstChangeAt: p, insertions: g, deletions: b} = mo(m);
                let w = null;
                e && (w = this.editing.mapper.toModelRange(e.getFirstRange()));
                const k = h.substr(p, g),
                    _ = this.editor.model.createRange(this.editor.model.createPositionAt(s, p), this.editor.model.createPositionAt(s, p + b));
                this.editor.execute("input", {text: k, range: _, resultRange: w})
            }

            _handleTextMutation(t, e) {
                if ("text" != t.type) return;
                const n = t.newText.replace(/\u00A0/g, " "), i = t.oldText.replace(/\u00A0/g, " ");
                if (i === n) return;
                const o = J(i, n), {firstChangeAt: r, insertions: s, deletions: a} = mo(o);
                let c = null;
                e && (c = this.editing.mapper.toModelRange(e.getFirstRange()));
                const l = this.editing.view.createPositionAt(t.node, r), d = this.editing.mapper.toModelPosition(l),
                    u = this.editor.model.createRange(d, d.getShiftedBy(a)), h = n.substr(r, s);
                this.editor.execute("input", {text: h, range: u, resultRange: c})
            }

            _handleTextNodeInsertion(t) {
                if ("children" != t.type) return;
                const e = lo(t), n = this.editing.view.createPositionAt(t.node, e.index),
                    i = this.editing.mapper.toModelPosition(n), o = e.values[0].data;
                this.editor.execute("input", {text: o.replace(/\u00A0/g, " "), range: this.editor.model.createRange(i)})
            }
        }

        function fo(t, e) {
            return t.every(t => e.isInline(t))
        }

        function mo(t) {
            let e = null, n = null;
            for (let i = 0; i < t.length; i++) {
                "equal" != t[i] && (e = null === e ? i : e, n = i)
            }
            let i = 0, o = 0;
            for (let r = e; r <= n; r++) "insert" != t[r] && i++, "delete" != t[r] && o++;
            return {insertions: o, deletions: i, firstChangeAt: e}
        }

        class po extends Yi.a {
            static get pluginName() {
                return "Input"
            }

            init() {
                const t = this.editor, e = new so(t, t.config.get("typing.undoStep") || 20);
                t.commands.add("input", e), ao(t), function (t) {
                    t.editing.view.document.on("mutations", (e, n, i) => {
                        new ho(t).handle(n, i)
                    })
                }(t)
            }

            isInput(t) {
                return this.editor.commands.get("input")._batches.has(t)
            }
        }

        var go = n(95);

        class bo extends Gi.a {
            constructor(t, e) {
                super(t), this.direction = e, this._buffer = new ro(t.model, t.config.get("typing.undoStep"))
            }

            get buffer() {
                return this._buffer
            }

            execute(t = {}) {
                const e = this.editor.model, n = e.document;
                e.enqueueChange(this._buffer.batch, i => {
                    this._buffer.lock();
                    const o = i.createSelection(t.selection || n.selection), r = o.isCollapsed;
                    if (o.isCollapsed && e.modifySelection(o, {
                        direction: this.direction,
                        unit: t.unit
                    }), this._shouldEntireContentBeReplacedWithParagraph(t.sequence || 1)) return void this._replaceEntireContentWithParagraph(i);
                    if (o.isCollapsed) return;
                    let s = 0;
                    o.getFirstRange().getMinimalFlatRanges().forEach(t => {
                        s += Object(go.a)(t.getWalker({singleCharacters: !0, ignoreElementEnd: !0, shallow: !0}))
                    }), e.deleteContent(o, {doNotResetEntireContent: r}), this._buffer.input(s), i.setSelection(o), this._buffer.unlock()
                })
            }

            _shouldEntireContentBeReplacedWithParagraph(t) {
                if (t > 1) return !1;
                const e = this.editor.model, n = e.document.selection, i = e.schema.getLimitElement(n);
                if (!(n.isCollapsed && n.containsEntireContent(i))) return !1;
                if (!e.schema.checkChild(i, "paragraph")) return !1;
                const o = i.getChild(0);
                return !o || "paragraph" !== o.name
            }

            _replaceEntireContentWithParagraph(t) {
                const e = this.editor.model, n = e.document.selection, i = e.schema.getLimitElement(n),
                    o = t.createElement("paragraph");
                t.remove(t.createRangeIn(i)), t.insert(o, i), t.setSelection(o, 0)
            }
        }

        class wo extends st.a {
            constructor(t) {
                super(t);
                const e = t.document;
                let n = 0;

                function i(t, n, i) {
                    let o;
                    e.once("delete", t => o = t, {priority: Number.POSITIVE_INFINITY}), e.fire("delete", new Zi.a(e, n, i)), o && o.stop.called && t.stop()
                }

                e.on("keyup", (t, e) => {
                    e.keyCode != O.c.delete && e.keyCode != O.c.backspace || (n = 0)
                }), e.on("keydown", (t, e) => {
                    const o = {};
                    if (e.keyCode == O.c.delete) o.direction = "forward", o.unit = "character"; else {
                        if (e.keyCode != O.c.backspace) return;
                        o.direction = "backward", o.unit = "codePoint"
                    }
                    const r = et.a.isMac ? e.altKey : e.ctrlKey;
                    o.unit = r ? "word" : o.unit, o.sequence = ++n, i(t, e.domEvent, o)
                }), et.a.isAndroid && e.on("beforeinput", (e, n) => {
                    if ("deleteContentBackward" != n.domEvent.inputType) return;
                    const o = {unit: "codepoint", direction: "backward", sequence: 1},
                        r = n.domTarget.ownerDocument.defaultView.getSelection();
                    r.anchorNode == r.focusNode && r.anchorOffset + 1 != r.focusOffset && (o.selectionToRemove = t.domConverter.domSelectionToView(r)), i(e, n.domEvent, o)
                })
            }

            observe() {
            }
        }

        class ko extends Yi.a {
            static get pluginName() {
                return "Delete"
            }

            init() {
                const t = this.editor, e = t.editing.view, n = e.document;
                if (e.addObserver(wo), t.commands.add("forwardDelete", new bo(t, "forward")), t.commands.add("delete", new bo(t, "backward")), this.listenTo(n, "delete", (n, i) => {
                    const o = {unit: i.unit, sequence: i.sequence};
                    if (i.selectionToRemove) {
                        const e = t.model.createSelection(), n = [];
                        for (const e of i.selectionToRemove.getRanges()) n.push(t.editing.mapper.toModelRange(e));
                        e.setTo(n), o.selection = e
                    }
                    t.execute("forward" == i.direction ? "forwardDelete" : "delete", o), i.preventDefault(), e.scrollToTheSelection()
                }), et.a.isAndroid) {
                    let t = null;
                    this.listenTo(n, "delete", (e, n) => {
                        const i = n.domTarget.ownerDocument.defaultView.getSelection();
                        t = {
                            anchorNode: i.anchorNode,
                            anchorOffset: i.anchorOffset,
                            focusNode: i.focusNode,
                            focusOffset: i.focusOffset
                        }
                    }, {priority: "lowest"}), this.listenTo(n, "keyup", (e, n) => {
                        if (t) {
                            const e = n.domTarget.ownerDocument.defaultView.getSelection();
                            e.collapse(t.anchorNode, t.anchorOffset), e.extend(t.focusNode, t.focusOffset), t = null
                        }
                    })
                }
            }
        }

        class _o extends Yi.a {
            static get requires() {
                return [po, ko]
            }

            static get pluginName() {
                return "Typing"
            }
        }

        var vo = n(84);

        class yo extends Yi.a {
            static get pluginName() {
                return "PendingActions"
            }

            init() {
                this.set("hasAny", !1), this._actions = new h.a({idProperty: "_id"}), this._actions.delegate("add", "remove").to(this)
            }

            add(t) {
                if ("string" != typeof t) throw new v.b("pendingactions-add-invalid-message: The message must be a string.", this);
                const e = Object.create(m.a);
                return e.set("message", t), this._actions.add(e), this.hasAny = !0, e
            }

            remove(t) {
                this._actions.remove(t), this.hasAny = !!this._actions.length
            }

            get first() {
                return this._actions.get(0)
            }

            [Symbol.iterator]() {
                return this._actions[Symbol.iterator]()
            }
        }

        class xo {
            constructor() {
                const t = new window.FileReader;
                this._reader = t, this._data = void 0, this.set("loaded", 0), t.onprogress = (t => {
                    this.loaded = t.loaded
                })
            }

            get error() {
                return this._reader.error
            }

            get data() {
                return this._data
            }

            read(t) {
                const e = this._reader;
                return this.total = t.size, new Promise((n, i) => {
                    e.onload = (() => {
                        const t = e.result;
                        this._data = t, n(t)
                    }), e.onerror = (() => {
                        i("error")
                    }), e.onabort = (() => {
                        i("aborted")
                    }), this._reader.readAsDataURL(t)
                })
            }

            abort() {
                this._reader.abort()
            }
        }

        Object(f.a)(xo, m.a);

        class Ao extends Yi.a {
            static get pluginName() {
                return "FileRepository"
            }

            static get requires() {
                return [yo]
            }

            init() {
                this.loaders = new h.a, this.loaders.on("add", () => this._updatePendingAction()), this.loaders.on("remove", () => this._updatePendingAction()), this._loadersMap = new Map, this._pendingAction = null, this.set("uploaded", 0), this.set("uploadTotal", null), this.bind("uploadedPercent").to(this, "uploaded", this, "uploadTotal", (t, e) => e ? t / e * 100 : 0)
            }

            getLoader(t) {
                return this._loadersMap.get(t) || null
            }

            createLoader(t) {
                if (!this.createUploadAdapter) return console.warn(Object(v.a)("filerepository-no-upload-adapter: Upload adapter is not defined.")), null;
                const e = new To(Promise.resolve(t), this.createUploadAdapter);
                return this.loaders.add(e), this._loadersMap.set(t, e), t instanceof Promise && e.file.then(t => {
                    this._loadersMap.set(t, e)
                }), e.file.catch(() => {
                }), e.on("change:uploaded", () => {
                    let t = 0;
                    for (const e of this.loaders) t += e.uploaded;
                    this.uploaded = t
                }), e.on("change:uploadTotal", () => {
                    let t = 0;
                    for (const e of this.loaders) e.uploadTotal && (t += e.uploadTotal);
                    this.uploadTotal = t
                }), e
            }

            destroyLoader(t) {
                const e = t instanceof To ? t : this.getLoader(t);
                e._destroy(), this.loaders.remove(e), this._loadersMap.forEach((t, n) => {
                    t === e && this._loadersMap.delete(n)
                })
            }

            _updatePendingAction() {
                const t = this.editor.plugins.get(yo);
                if (this.loaders.length) {
                    if (!this._pendingAction) {
                        const e = this.editor.t, n = t => `${e("at")} ${parseInt(t)}%.`;
                        this._pendingAction = t.add(n(this.uploadedPercent)), this._pendingAction.bind("message").to(this, "uploadedPercent", n)
                    }
                } else t.remove(this._pendingAction), this._pendingAction = null
            }
        }

        Object(f.a)(Ao, m.a);

        class To {
            constructor(t, e) {
                this.id = Object(we.a)(), this._filePromiseWrapper = this._createFilePromiseWrapper(t), this._adapter = e(this), this._reader = new xo, this.set("status", "idle"), this.set("uploaded", 0), this.set("uploadTotal", null), this.bind("uploadedPercent").to(this, "uploaded", this, "uploadTotal", (t, e) => e ? t / e * 100 : 0), this.set("uploadResponse", null)
            }

            get file() {
                return this._filePromiseWrapper ? this._filePromiseWrapper.promise.then(t => this._filePromiseWrapper ? t : null) : Promise.resolve(null)
            }

            get data() {
                return this._reader.data
            }

            read() {
                if ("idle" != this.status) throw new v.b("filerepository-read-wrong-status: You cannot call read if the status is different than idle.", this);
                return this.status = "reading", this._filePromiseWrapper.promise.then(t => this._reader.read(t)).then(t => (this.status = "idle", t)).catch(t => {
                    if ("aborted" === t) throw this.status = "aborted", "aborted";
                    throw this.status = "error", this._reader.error ? this._reader.error : t
                })
            }

            upload() {
                if ("idle" != this.status) throw new v.b("filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.", this);
                return this.status = "uploading", this._filePromiseWrapper.promise.then(() => this._adapter.upload()).then(t => (this.uploadResponse = t, this.status = "idle", t)).catch(t => {
                    if ("aborted" === this.status) throw"aborted";
                    throw this.status = "error", t
                })
            }

            abort() {
                const t = this.status;
                this.status = "aborted", this._filePromiseWrapper.isFulfilled ? "reading" == t ? this._reader.abort() : "uploading" == t && this._adapter.abort && this._adapter.abort() : this._filePromiseWrapper.rejecter("aborted"), this._destroy()
            }

            _destroy() {
                this._filePromiseWrapper = void 0, this._reader = void 0, this._adapter = void 0, this.uploadResponse = void 0
            }

            _createFilePromiseWrapper(t) {
                const e = {};
                return e.promise = new Promise((n, i) => {
                    e.resolver = n, e.rejecter = i, e.isFulfilled = !1, t.then(t => {
                        e.isFulfilled = !0, n(t)
                    }).catch(t => {
                        e.isFulfilled = !0, i(t)
                    })
                }), e
            }
        }

        Object(f.a)(To, m.a);
        const Co = "ckCsrfToken", Po = 40, Mo = "abcdefghijklmnopqrstuvwxyz0123456789";

        function Oo() {
            let t = function (t) {
                t = t.toLowerCase();
                const e = document.cookie.split(";");
                for (const n of e) {
                    const e = n.split("="), i = decodeURIComponent(e[0].trim().toLowerCase());
                    if (i === t) return decodeURIComponent(e[1])
                }
                return null
            }(Co);
            return t && t.length == Po || (t = function (t) {
                let e = "";
                const n = new Uint8Array(t);
                window.crypto.getRandomValues(n);
                for (let t = 0; t < n.length; t++) {
                    const i = Mo.charAt(n[t] % Mo.length);
                    e += Math.random() > .5 ? i.toUpperCase() : i
                }
                return e
            }(Po), function (t, e) {
                document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + ";path=/"
            }(Co, t)), t
        }

        class So extends Yi.a {
            static get requires() {
                return [Ao]
            }

            static get pluginName() {
                return "CKFinderUploadAdapter"
            }

            init() {
                const t = this.editor.config.get("ckfinder.uploadUrl");
                t && (this.editor.plugins.get(Ao).createUploadAdapter = (e => new Eo(e, t, this.editor.t)))
            }
        }

        class Eo {
            constructor(t, e, n) {
                this.loader = t, this.url = e, this.t = n
            }

            upload() {
                return this.loader.file.then(t => new Promise((e, n) => {
                    this._initRequest(), this._initListeners(e, n, t), this._sendRequest(t)
                }))
            }

            abort() {
                this.xhr && this.xhr.abort()
            }

            _initRequest() {
                const t = this.xhr = new XMLHttpRequest;
                t.open("POST", this.url, !0), t.responseType = "json"
            }

            _initListeners(t, e, n) {
                const i = this.xhr, o = this.loader, r = (0, this.t)("c") + ` ${n.name}.`;
                i.addEventListener("error", () => e(r)), i.addEventListener("abort", () => e()), i.addEventListener("load", () => {
                    const n = i.response;
                    if (!n || !n.uploaded) return e(n && n.error && n.error.message ? n.error.message : r);
                    t({default: n.url})
                }), i.upload && i.upload.addEventListener("progress", t => {
                    t.lengthComputable && (o.uploadTotal = t.total, o.uploaded = t.loaded)
                })
            }

            _sendRequest(t) {
                const e = new FormData;
                e.append("upload", t), e.append("ckCsrfToken", Oo()), this.xhr.send(e)
            }
        }

        class Io {
            constructor(t, e, n) {
                let i, o = null;
                "function" == typeof n ? i = n : (o = t.commands.get(n), i = (() => {
                    t.execute(n)
                })), t.model.document.on("change", (n, r) => {
                    if (o && !o.isEnabled) return;
                    if ("transparent" == r.type) return;
                    const s = Array.from(t.model.document.differ.getChanges()), a = s[0];
                    if (1 != s.length || "insert" !== a.type || "$text" != a.name || 1 != a.length) return;
                    const c = a.position.textNode || a.position.nodeAfter;
                    if (!c.parent.is("paragraph")) return;
                    const l = e.exec(c.data);
                    l && t.model.enqueueChange(t => {
                        const e = t.createPositionAt(c.parent, 0), n = t.createPositionAt(c.parent, l[0].length),
                            o = new pe.a(e, n);
                        !1 !== i({match: l}) && t.remove(o), o.detach()
                    })
                })
            }
        }

        class No {
            constructor(t, e, n) {
                let i, o, r, s;
                e instanceof RegExp ? i = e : r = e, "string" == typeof n ? o = n : s = n, r = r || (t => {
                    let e;
                    const n = [], o = [];
                    for (; null !== (e = i.exec(t)) && !(e && e.length < 4);) {
                        let {index: t, 1: i, 2: r, 3: s} = e;
                        const a = i + r + s, c = [t += e[0].length - a.length, t + i.length],
                            l = [t + i.length + r.length, t + i.length + r.length + s.length];
                        n.push(c), n.push(l), o.push([t + i.length, t + i.length + r.length])
                    }
                    return {remove: n, format: o}
                }), s = s || ((e, n) => {
                    const i = t.model.schema.getValidRanges(n, o);
                    for (const t of i) e.setAttribute(o, !0, t);
                    e.removeSelectionAttribute(o)
                }), t.model.document.on("change", (e, n) => {
                    if ("transparent" == n.type) return;
                    const i = t.model.document.selection;
                    if (!i.isCollapsed) return;
                    const o = Array.from(t.model.document.differ.getChanges()), a = o[0];
                    if (1 != o.length || "insert" !== a.type || "$text" != a.name || 1 != a.length) return;
                    const c = i.focus.parent, l = function (t) {
                        return Array.from(t.getChildren()).reduce((t, e) => t + e.data, "")
                    }(c).slice(0, i.focus.offset), d = r(l), u = jo(c, d.format, t.model), h = jo(c, d.remove, t.model);
                    u.length && h.length && t.model.enqueueChange(t => {
                        if (!1 !== s(t, u)) for (const e of h.reverse()) t.remove(e)
                    })
                })
            }
        }

        function jo(t, e, n) {
            return e.filter(t => void 0 !== t[0] && void 0 !== t[1]).map(e => n.createRange(n.createPositionAt(t, e[0]), n.createPositionAt(t, e[1])))
        }

        function Ro(t, e) {
            return (n, i) => {
                if (!t.commands.get(e).isEnabled) return !1;
                const o = t.model.schema.getValidRanges(i, e);
                for (const t of o) n.setAttribute(e, !0, t);
                n.removeSelectionAttribute(e)
            }
        }

        class Do extends Gi.a {
            constructor(t, e) {
                super(t), this.attributeKey = e
            }

            refresh() {
                const t = this.editor.model, e = t.document;
                this.value = this._getValueFromFirstAllowedNode(), this.isEnabled = t.schema.checkAttributeInSelection(e.selection, this.attributeKey)
            }

            execute(t = {}) {
                const e = this.editor.model, n = e.document.selection,
                    i = void 0 === t.forceValue ? !this.value : t.forceValue;
                e.change(t => {
                    if (n.isCollapsed) i ? t.setSelectionAttribute(this.attributeKey, !0) : t.removeSelectionAttribute(this.attributeKey); else {
                        const o = e.schema.getValidRanges(n.getRanges(), this.attributeKey);
                        for (const e of o) i ? t.setAttribute(this.attributeKey, i, e) : t.removeAttribute(this.attributeKey, e)
                    }
                })
            }

            _getValueFromFirstAllowedNode() {
                const t = this.editor.model, e = t.schema, n = t.document.selection;
                if (n.isCollapsed) return n.hasAttribute(this.attributeKey);
                for (const t of n.getRanges()) for (const n of t.getItems()) if (e.checkAttribute(n, this.attributeKey)) return n.hasAttribute(this.attributeKey);
                return !1
            }
        }

        const Lo = "bold";

        class Vo extends Yi.a {
            init() {
                const t = this.editor;
                t.model.schema.extend("$text", {allowAttributes: Lo}), t.model.schema.setAttributeProperties(Lo, {
                    isFormatting: !0,
                    copyOnEnter: !0
                }), t.conversion.attributeToElement({
                    model: Lo,
                    view: "strong",
                    upcastAlso: ["b", {styles: {"font-weight": "bold"}}]
                }), t.commands.add(Lo, new Do(t, Lo)), t.keystrokes.set("CTRL+B", Lo)
            }
        }

        var zo = n(11),
            Bo = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>';
        const Fo = "bold";

        class Uo extends Yi.a {
            init() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add(Fo, n => {
                    const i = t.commands.get(Fo), o = new zo.a(n);
                    return o.set({
                        label: e("e"),
                        icon: Bo,
                        keystroke: "CTRL+B",
                        tooltip: !0,
                        isToggleable: !0
                    }), o.bind("isOn", "isEnabled").to(i, "value", "isEnabled"), this.listenTo(o, "execute", () => t.execute(Fo)), o
                })
            }
        }

        const Ho = "italic";

        class qo extends Yi.a {
            init() {
                const t = this.editor;
                t.model.schema.extend("$text", {allowAttributes: Ho}), t.model.schema.setAttributeProperties(Ho, {
                    isFormatting: !0,
                    copyOnEnter: !0
                }), t.conversion.attributeToElement({
                    model: Ho,
                    view: "i",
                    upcastAlso: ["em", {styles: {"font-style": "italic"}}]
                }), t.commands.add(Ho, new Do(t, Ho)), t.keystrokes.set("CTRL+I", Ho)
            }
        }

        var Wo = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>';
        const Yo = "italic";

        class $o extends Yi.a {
            init() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add(Yo, n => {
                    const i = t.commands.get(Yo), o = new zo.a(n);
                    return o.set({
                        label: e("ap"),
                        icon: Wo,
                        keystroke: "CTRL+I",
                        tooltip: !0,
                        isToggleable: !0
                    }), o.bind("isOn", "isEnabled").to(i, "value", "isEnabled"), this.listenTo(o, "execute", () => t.execute(Yo)), o
                })
            }
        }

        function Go(t) {
            const e = t.next();
            return e.done ? null : e.value
        }

        class Qo extends Gi.a {
            refresh() {
                this.value = this._getValue(), this.isEnabled = this._checkEnabled()
            }

            execute(t = {}) {
                const e = this.editor.model, n = e.schema, i = e.document.selection,
                    o = Array.from(i.getTopMostBlocks()), r = void 0 === t.forceValue ? !this.value : t.forceValue;
                e.change(t => {
                    if (r) {
                        const e = o.filter(t => Jo(t) || Zo(n, t));
                        this._applyQuote(t, e)
                    } else this._removeQuote(t, o.filter(Jo))
                })
            }

            _getValue() {
                const t = Go(this.editor.model.document.selection.getTopMostBlocks());
                return !(!t || !Jo(t))
            }

            _checkEnabled() {
                if (this.value) return !0;
                const t = this.editor.model.document.selection, e = this.editor.model.schema,
                    n = Go(t.getSelectedBlocks());
                return !!n && Zo(e, n)
            }

            _removeQuote(t, e) {
                Ko(t, e).reverse().forEach(e => {
                    if (e.start.isAtStart && e.end.isAtEnd) return void t.unwrap(e.start.parent);
                    if (e.start.isAtStart) {
                        const n = t.createPositionBefore(e.start.parent);
                        return void t.move(e, n)
                    }
                    e.end.isAtEnd || t.split(e.end);
                    const n = t.createPositionAfter(e.end.parent);
                    t.move(e, n)
                })
            }

            _applyQuote(t, e) {
                const n = [];
                Ko(t, e).reverse().forEach(e => {
                    let i = Jo(e.start);
                    i || (i = t.createElement("blockQuote"), t.wrap(e, i)), n.push(i)
                }), n.reverse().reduce((e, n) => e.nextSibling == n ? (t.merge(t.createPositionAfter(e)), e) : n)
            }
        }

        function Jo(t) {
            return "blockQuote" == t.parent.name ? t.parent : null
        }

        function Ko(t, e) {
            let n, i = 0;
            const o = [];
            for (; i < e.length;) {
                const r = e[i], s = e[i + 1];
                n || (n = t.createPositionBefore(r)), s && r.nextSibling == s || (o.push(t.createRange(n, t.createPositionAfter(r))), n = null), i++
            }
            return o
        }

        function Zo(t, e) {
            const n = t.checkChild(e.parent, "blockQuote"), i = t.checkChild(["$root", "blockQuote"], e);
            return n && i
        }

        class Xo extends Yi.a {
            init() {
                const t = this.editor, e = t.model.schema;
                t.commands.add("blockQuote", new Qo(t)), e.register("blockQuote", {
                    allowWhere: "$block",
                    allowContentOf: "$root"
                }), e.addChildCheck((t, e) => {
                    if (t.endsWith("blockQuote") && "blockQuote" == e.name) return !1
                }), t.conversion.elementToElement({
                    model: "blockQuote",
                    view: "blockquote"
                }), t.model.document.registerPostFixer(n => {
                    const i = t.model.document.differ.getChanges();
                    for (const t of i) if ("insert" == t.type) {
                        const i = t.position.nodeAfter;
                        if (!i) continue;
                        if (i.is("blockQuote") && i.isEmpty) return n.remove(i), !0;
                        if (i.is("blockQuote") && !e.checkChild(t.position, i)) return n.unwrap(i), !0;
                        if (i.is("element")) {
                            const t = n.createRangeIn(i);
                            for (const i of t.getItems()) if (i.is("blockQuote") && !e.checkChild(n.createPositionBefore(i), i)) return n.unwrap(i), !0
                        }
                    } else if ("remove" == t.type) {
                        const e = t.position.parent;
                        if (e.is("blockQuote") && e.isEmpty) return n.remove(e), !0
                    }
                    return !1
                })
            }

            afterInit() {
                const t = this.editor.commands.get("blockQuote");
                this.listenTo(this.editor.editing.view.document, "enter", (e, n) => {
                    const i = this.editor.model.document, o = i.selection.getLastPosition().parent;
                    i.selection.isCollapsed && o.isEmpty && t.value && (this.editor.execute("blockQuote"), this.editor.editing.view.scrollToTheSelection(), n.preventDefault(), e.stop())
                })
            }
        }

        var tr = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>';
        n(144);

        class er extends Yi.a {
            init() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add("blockQuote", n => {
                    const i = t.commands.get("blockQuote"), o = new zo.a(n);
                    return o.set({
                        label: e("d"),
                        icon: tr,
                        tooltip: !0,
                        isToggleable: !0
                    }), o.bind("isOn", "isEnabled").to(i, "value", "isEnabled"), this.listenTo(o, "execute", () => t.execute("blockQuote")), o
                })
            }
        }

        var nr = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>';

        class ir extends Yi.a {
            static get pluginName() {
                return "CKFinderUI"
            }

            init() {
                const t = this.editor, e = t.ui.componentFactory, n = t.t;
                e.add("ckfinder", e => {
                    const i = t.commands.get("ckfinder"), o = new zo.a(e);
                    return o.set({
                        label: n("aq"),
                        icon: nr,
                        tooltip: !0
                    }), o.bind("isEnabled").to(i), o.on("execute", () => {
                        t.execute("ckfinder"), t.editing.view.focus()
                    }), o
                })
            }
        }

        class or extends Yi.a {
            static get pluginName() {
                return "Notification"
            }

            init() {
                this.on("show:warning", (t, e) => {
                    window.alert(e.message)
                }, {priority: "lowest"})
            }

            showSuccess(t, e = {}) {
                this._showNotification({message: t, type: "success", namespace: e.namespace, title: e.title})
            }

            showInfo(t, e = {}) {
                this._showNotification({message: t, type: "info", namespace: e.namespace, title: e.title})
            }

            showWarning(t, e = {}) {
                this._showNotification({message: t, type: "warning", namespace: e.namespace, title: e.title})
            }

            _showNotification(t) {
                const e = `show:${t.type}` + (t.namespace ? `:${t.namespace}` : "");
                this.fire(e, {message: t.message, type: t.type, title: t.title || ""})
            }
        }

        class rr extends Gi.a {
            constructor(t) {
                super(t), this.stopListening(this.editor.model.document, "change"), this.listenTo(this.editor.model.document, "change", () => this.refresh(), {priority: "low"})
            }

            refresh() {
                const t = this.editor.commands.get("imageUpload"), e = this.editor.commands.get("link");
                this.isEnabled = t && e && (t.isEnabled || e.isEnabled)
            }

            execute() {
                const t = this.editor, e = this.editor.config.get("ckfinder.openerMethod") || "modal";
                if ("popup" != e && "modal" != e) throw new v.b('ckfinder-unknown-openerMethod: The openerMethod config option must by "popup" or "modal".', t);
                const n = this.editor.config.get("ckfinder.options") || {};
                n.chooseFiles = !0;
                const i = n.onInit;
                n.language || (n.language = t.locale.uiLanguage), n.onInit = (e => {
                    i && i(e), e.on("files:choose", n => {
                        const i = n.data.files.toArray(), o = i.filter(t => !t.isImage()),
                            r = i.filter(t => t.isImage());
                        for (const e of o) t.execute("link", e.getUrl());
                        const s = [];
                        for (const t of r) {
                            const n = t.getUrl();
                            s.push(n || e.request("file:getProxyUrl", {file: t}))
                        }
                        s.length && sr(t, s)
                    }), e.on("file:choose:resizedImage", e => {
                        const n = e.data.resizedUrl;
                        if (n) sr(t, [n]); else {
                            const e = t.plugins.get("Notification"), n = t.locale.t;
                            e.showWarning(n("au"), {title: n("av"), namespace: "ckfinder"})
                        }
                    })
                }), window.CKFinder[e](n)
            }
        }

        function sr(t, e) {
            if (t.commands.get("imageUpload").isEnabled) t.execute("imageInsert", {source: e}); else {
                const e = t.plugins.get("Notification"), n = t.locale.t;
                e.showWarning(n("aw"), {title: n("ax"), namespace: "ckfinder"})
            }
        }

        class ar extends Yi.a {
            static get pluginName() {
                return "CKFinderEditing"
            }

            static get requires() {
                return [or]
            }

            init() {
                const t = this.editor;
                t.commands.add("ckfinder", new rr(t))
            }
        }

        const cr = /^data:(\S*?);base64,/;

        class lr {
            constructor(t, e, n) {
                if (!t) throw new v.b("fileuploader-missing-file: File must be provided as the first argument", null);
                if (!e) throw new v.b("fileuploader-missing-token: Token must be provided as the second argument.", null);
                if (!n) throw new v.b("fileuploader-missing-api-address: Api address must be provided as the third argument.", null);
                this.file = function (t) {
                    if ("string" != typeof t) return !1;
                    const e = t.match(cr);
                    return !(!e || !e.length)
                }(t) ? function (t, e = 512) {
                    try {
                        const n = t.match(cr)[1], i = atob(t.replace(cr, "")), o = [];
                        for (let t = 0; t < i.length; t += e) {
                            const n = i.slice(t, t + e), r = new Array(n.length);
                            for (let t = 0; t < n.length; t++) r[t] = n.charCodeAt(t);
                            o.push(new Uint8Array(r))
                        }
                        return new Blob(o, {type: n})
                    } catch (t) {
                        throw new v.b("fileuploader-decoding-image-data-error: Problem with decoding Base64 image data.", null)
                    }
                }(t) : t, this._token = e, this._apiAddress = n
            }

            onProgress(t) {
                return this.on("progress", (e, n) => t(n)), this
            }

            onError(t) {
                return this.once("error", (e, n) => t(n)), this
            }

            abort() {
                this.xhr.abort()
            }

            send() {
                return this._prepareRequest(), this._attachXHRListeners(), this._sendRequest()
            }

            _prepareRequest() {
                const t = new XMLHttpRequest;
                t.open("POST", this._apiAddress), t.setRequestHeader("Authorization", this._token.value), t.responseType = "json", this.xhr = t
            }

            _attachXHRListeners() {
                const t = this, e = this.xhr;

                function n(e) {
                    return () => t.fire("error", e)
                }

                e.addEventListener("error", n("Network Error")), e.addEventListener("abort", n("Abort")), e.upload && e.upload.addEventListener("progress", t => {
                    t.lengthComputable && this.fire("progress", {total: t.total, uploaded: t.loaded})
                }), e.addEventListener("load", () => {
                    const t = e.status, n = e.response;
                    if (t < 200 || t > 299) return this.fire("error", n.message || n.error)
                })
            }

            _sendRequest() {
                const t = new FormData, e = this.xhr;
                return t.append("file", this.file), new Promise((n, i) => {
                    e.addEventListener("load", () => {
                        const t = e.status, o = e.response;
                        return t < 200 || t > 299 ? o.message ? i(new v.b("fileuploader-uploading-data-failed: Uploading file failed.", this, {message: o.message})) : i(o.error) : n(o)
                    }), e.addEventListener("error", () => i(new Error("Network Error"))), e.addEventListener("abort", () => i(new Error("Abort"))), e.send(t)
                })
            }
        }

        Object(f.a)(lr, ee.c);
        const dr = {refreshInterval: 36e5, autoRefresh: !0};

        class ur {
            constructor(t, e = dr) {
                if (!t) throw new v.b("token-missing-token-url: A `tokenUrl` must be provided as the first constructor argument.", this);
                this.set("value", e.initValue), this._refresh = "function" == typeof t ? t : () => (function (t) {
                    return new Promise((e, n) => {
                        const i = new XMLHttpRequest;
                        i.open("GET", t), i.addEventListener("load", () => {
                            const t = i.status, o = i.response;
                            return t < 200 || t > 299 ? n(new v.b("token-cannot-download-new-token: Cannot download new token from the provided url.", null)) : e(o)
                        }), i.addEventListener("error", () => n(new Error("Network Error"))), i.addEventListener("abort", () => n(new Error("Abort"))), i.send()
                    })
                })(t), this._options = Object.assign({}, dr, e)
            }

            init() {
                return new Promise((t, e) => {
                    this._options.autoRefresh && this._startRefreshing(), this.value ? t(this) : this._refreshToken().then(t).catch(e)
                })
            }

            _refreshToken() {
                return this._refresh().then(t => this.set("value", t)).then(() => this)
            }

            destroy() {
                this._stopRefreshing()
            }

            _startRefreshing() {
                this._refreshInterval = setInterval(() => this._refreshToken(), this._options.refreshInterval)
            }

            _stopRefreshing() {
                clearInterval(this._refreshInterval)
            }

            static create(t, e = dr) {
                return new ur(t, e).init()
            }
        }

        Object(f.a)(ur, m.a);
        var hr = ur;

        class fr extends Yi.a {
            static get pluginName() {
                return "CloudServices"
            }

            init() {
                const t = this.editor.config.get("cloudServices") || {};
                for (const e in t) this[e] = t[e];
                if (this.tokenUrl) return this.token = new fr.Token(this.tokenUrl), this.token.init();
                this.token = null
            }
        }

        fr.Token = hr;

        class mr extends Yi.a {
            static get requires() {
                return [Ao, fr]
            }

            init() {
                const t = this.editor, e = t.plugins.get(fr), n = e.token, i = e.uploadUrl;
                n && (this._uploadGateway = new mr._UploadGateway(n, i), t.plugins.get(Ao).createUploadAdapter = (t => new pr(this._uploadGateway, t)))
            }
        }

        class pr {
            constructor(t, e) {
                this.uploadGateway = t, this.loader = e
            }

            upload() {
                return this.loader.file.then(t => (this.fileUploader = this.uploadGateway.upload(t), this.fileUploader.on("progress", (t, e) => {
                    this.loader.uploadTotal = e.total, this.loader.uploaded = e.uploaded
                }), this.fileUploader.send()))
            }

            abort() {
                this.fileUploader.abort()
            }
        }

        mr._UploadGateway = class {
            constructor(t, e) {
                if (!t) throw new v.b("uploadgateway-missing-token: Token must be provided.", null);
                if (!e) throw new v.b("uploadgateway-missing-api-address: Api address must be provided.", null);
                this._token = t, this._apiAddress = e
            }

            upload(t) {
                return new lr(t, this._token, this._apiAddress)
            }
        };

        class gr extends st.a {
            constructor(t) {
                super(t), this._observedElements = new Set
            }

            observe(t, e) {
                this.document.getRoot(e).on("change:children", (e, n) => {
                    this.view.once("render", () => this._updateObservedElements(t, n))
                })
            }

            _updateObservedElements(t, e) {
                if (!e.is("element") || e.is("attributeElement")) return;
                const n = this.view.domConverter.mapViewToDom(e);
                if (n) {
                    for (const t of n.querySelectorAll("img")) this._observedElements.has(t) || (this.listenTo(t, "load", (t, e) => this._fireEvents(e)), this._observedElements.add(t));
                    for (const e of this._observedElements) t.contains(e) || (this.stopListening(e), this._observedElements.delete(e))
                }
            }

            _fireEvents(t) {
                this.isEnabled && (this.document.fire("layoutChanged"), this.document.fire("imageLoaded", t))
            }

            destroy() {
                this._observedElements.clear(), super.destroy()
            }
        }

        function br(t) {
            return n => {
                n.on(`attribute:${t}:image`, e)
            };

            function e(t, e, n) {
                if (!n.consumable.consume(e.item, t.name)) return;
                const i = n.writer, o = n.mapper.toViewElement(e.item).getChild(0);
                null !== e.attributeNewValue ? i.setAttribute(e.attributeKey, e.attributeNewValue, o) : i.removeAttribute(e.attributeKey, o)
            }
        }

        class wr {
            constructor() {
                this._stack = []
            }

            add(t, e) {
                const n = this._stack, i = n[0];
                this._insertDescriptor(t);
                const o = n[0];
                i === o || kr(i, o) || this.fire("change:top", {oldDescriptor: i, newDescriptor: o, writer: e})
            }

            remove(t, e) {
                const n = this._stack, i = n[0];
                this._removeDescriptor(t);
                const o = n[0];
                i === o || kr(i, o) || this.fire("change:top", {oldDescriptor: i, newDescriptor: o, writer: e})
            }

            _insertDescriptor(t) {
                const e = this._stack, n = e.findIndex(e => e.id === t.id);
                if (kr(t, e[n])) return;
                n > -1 && e.splice(n, 1);
                let i = 0;
                for (; e[i] && _r(e[i], t);) i++;
                e.splice(i, 0, t)
            }

            _removeDescriptor(t) {
                const e = this._stack, n = e.findIndex(e => e.id === t);
                n > -1 && e.splice(n, 1)
            }
        }

        function kr(t, e) {
            return t && e && t.priority == e.priority && vr(t.classes) == vr(e.classes)
        }

        function _r(t, e) {
            return t.priority > e.priority || !(t.priority < e.priority) && vr(t.classes) > vr(e.classes)
        }

        function vr(t) {
            return Array.isArray(t) ? t.sort().join(",") : t
        }

        Object(f.a)(wr, ee.c);
        var yr = n(70),
            xr = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>';
        const Ar = "ck-widget", Tr = "ck-widget_selected";

        function Cr(t) {
            return !!t.is("element") && !!t.getCustomProperty("widget")
        }

        function Pr(t, e, n = {}) {
            return et.a.isEdge || e.setAttribute("contenteditable", "false", t), e.addClass(Ar, t), e.setCustomProperty("widget", !0, t), t.getFillerOffset = Er, n.label && function (t, e, n) {
                n.setCustomProperty("widgetLabel", e, t)
            }(t, n.label, e), n.hasSelectionHandler && function (t, e) {
                const n = e.createUIElement("div", {class: "ck ck-widget__selection-handler"}, function (t) {
                    const e = this.toDomElement(t), n = new yr.a;
                    return n.set("content", xr), n.render(), e.appendChild(n.element), e
                });
                e.insert(e.createPositionAt(t, 0), n), e.addClass(["ck-widget_with-selection-handler"], t)
            }(t, e), function (t, e, n, i) {
                const o = new wr;
                o.on("change:top", (e, o) => {
                    o.oldDescriptor && i(t, o.oldDescriptor, o.writer), o.newDescriptor && n(t, o.newDescriptor, o.writer)
                }), e.setCustomProperty("addHighlight", (t, e, n) => o.add(e, n), t), e.setCustomProperty("removeHighlight", (t, e, n) => o.remove(e, n), t)
            }(t, e, (t, e, n) => n.addClass(i(e.classes), t), (t, e, n) => n.removeClass(i(e.classes), t)), t;

            function i(t) {
                return Array.isArray(t) ? t : [t]
            }
        }

        function Mr(t) {
            const e = t.getCustomProperty("widgetLabel");
            return e ? "function" == typeof e ? e() : e : ""
        }

        function Or(t, e) {
            return e.addClass(["ck-editor__editable", "ck-editor__nested-editable"], t), et.a.isEdge || (e.setAttribute("contenteditable", t.isReadOnly ? "false" : "true", t), t.on("change:isReadOnly", (n, i, o) => {
                e.setAttribute("contenteditable", o ? "false" : "true", t)
            })), t.on("change:isFocused", (n, i, o) => {
                o ? e.addClass("ck-editor__nested-editable_focused", t) : e.removeClass("ck-editor__nested-editable_focused", t)
            }), t
        }

        function Sr(t, e) {
            const n = t.getSelectedElement();
            if (n && e.schema.isBlock(n)) return e.createPositionAfter(n);
            const i = t.getSelectedBlocks().next().value;
            if (i) {
                if (i.isEmpty) return e.createPositionAt(i, 0);
                const n = e.createPositionAfter(i);
                return t.focus.isTouching(n) ? n : e.createPositionBefore(i)
            }
            return t.focus
        }

        function Er() {
            return null
        }

        function Ir(t) {
            const e = t.getSelectedElement();
            return e && function (t) {
                return !!t.getCustomProperty("image") && Cr(t)
            }(e) ? e : null
        }

        function Nr(t) {
            return !!t && t.is("image")
        }

        function jr(t, e, n = {}) {
            const i = t.createElement("image", n), o = Sr(e.document.selection, e);
            e.insertContent(i, o), i.parent && t.setSelection(i, "on")
        }

        function Rr(t) {
            const e = t.schema, n = t.document.selection;
            return function (t, e, n) {
                const i = function (t, e) {
                    const n = Sr(t, e).parent;
                    if (n.isEmpty && !n.is("$root")) return n.parent;
                    return n
                }(t, n);
                return e.checkChild(i, "image")
            }(n, e, t) && !function (t, e) {
                const n = t.getSelectedElement();
                return n && e.isObject(n)
            }(n, e) && function (t) {
                return [...t.focus.getAncestors()].every(t => !t.is("image"))
            }(n)
        }

        class Dr extends Gi.a {
            refresh() {
                this.isEnabled = Rr(this.editor.model)
            }

            execute(t) {
                const e = this.editor.model;
                e.change(n => {
                    const i = Array.isArray(t.source) ? t.source : [t.source];
                    for (const t of i) jr(n, e, {src: t})
                })
            }
        }

        class Lr extends Yi.a {
            init() {
                const t = this.editor, e = t.model.schema, n = t.t, i = t.conversion;
                t.editing.view.addObserver(gr), e.register("image", {
                    isObject: !0,
                    isBlock: !0,
                    allowWhere: "$block",
                    allowAttributes: ["alt", "src", "srcset"]
                }), i.for("dataDowncast").elementToElement({
                    model: "image",
                    view: (t, e) => Vr(e)
                }), i.for("editingDowncast").elementToElement({
                    model: "image", view: (t, e) => (function (t, e, n) {
                        return e.setCustomProperty("image", !0, t), Pr(t, e, {
                            label: function () {
                                const e = t.getChild(0).getAttribute("alt");
                                return e ? `${e} ${n}` : n
                            }
                        })
                    })(Vr(e), e, n("j"))
                }), i.for("downcast").add(br("src")).add(br("alt")).add(function () {
                    return e => {
                        e.on("attribute:srcset:image", t)
                    };

                    function t(t, e, n) {
                        if (!n.consumable.consume(e.item, t.name)) return;
                        const i = n.writer, o = n.mapper.toViewElement(e.item).getChild(0);
                        if (null === e.attributeNewValue) {
                            const t = e.attributeOldValue;
                            t.data && (i.removeAttribute("srcset", o), i.removeAttribute("sizes", o), t.width && i.removeAttribute("width", o))
                        } else {
                            const t = e.attributeNewValue;
                            t.data && (i.setAttribute("srcset", t.data, o), i.setAttribute("sizes", "100vw", o), t.width && i.setAttribute("width", t.width, o))
                        }
                    }
                }()), i.for("upcast").elementToElement({
                    view: {name: "img", attributes: {src: !0}},
                    model: (t, e) => e.createElement("image", {src: t.getAttribute("src")})
                }).attributeToAttribute({
                    view: {name: "img", key: "alt"},
                    model: "alt"
                }).attributeToAttribute({
                    view: {name: "img", key: "srcset"}, model: {
                        key: "srcset", value: t => {
                            const e = {data: t.getAttribute("srcset")};
                            return t.hasAttribute("width") && (e.width = t.getAttribute("width")), e
                        }
                    }
                }).add(function () {
                    return e => {
                        e.on("element:figure", t)
                    };

                    function t(t, e, n) {
                        if (!n.consumable.test(e.viewItem, {name: !0, classes: "image"})) return;
                        const i = Array.from(e.viewItem.getChildren()).find(t => t.is("img"));
                        if (!i || !i.hasAttribute("src") || !n.consumable.test(i, {name: !0})) return;
                        const o = n.convertItem(i, e.modelCursor), r = Go(o.modelRange.getItems());
                        r && (n.convertChildren(e.viewItem, n.writer.createPositionAt(r, 0)), e.modelRange = o.modelRange, e.modelCursor = o.modelCursor)
                    }
                }()), t.commands.add("imageInsert", new Dr(t))
            }
        }

        function Vr(t) {
            const e = t.createEmptyElement("img"), n = t.createContainerElement("figure", {class: "image"});
            return t.insert(t.createPositionAt(n, 0), e), n
        }

        class zr extends dt.a {
            constructor(t) {
                super(t), this.domEventType = "mousedown"
            }

            onDomEvent(t) {
                this.fire(t.type, t)
            }
        }

        n(146);
        const Br = Object(O.d)("Ctrl+A");

        class Fr extends Yi.a {
            static get pluginName() {
                return "Widget"
            }

            init() {
                const t = this.editor.editing.view, e = t.document;
                this._previouslySelected = new Set, this.editor.editing.downcastDispatcher.on("selection", (t, e, n) => {
                    this._clearPreviouslySelectedWidgets(n.writer);
                    const i = n.writer, o = i.document.selection, r = o.getSelectedElement();
                    let s = null;
                    for (const t of o.getRanges()) for (const e of t) {
                        const t = e.item;
                        Cr(t) && !Ur(t, s) && (i.addClass(Tr, t), this._previouslySelected.add(t), s = t, t == r && i.setSelection(o.getRanges(), {
                            fake: !0,
                            label: Mr(r)
                        }))
                    }
                }, {priority: "low"}), t.addObserver(zr), this.listenTo(e, "mousedown", (...t) => this._onMousedown(...t)), this.listenTo(e, "keydown", (...t) => this._onKeydown(...t), {priority: "high"}), this.listenTo(e, "delete", (t, e) => {
                    this._handleDelete("forward" == e.direction) && (e.preventDefault(), t.stop())
                }, {priority: "high"})
            }

            _onMousedown(t, e) {
                const n = this.editor, i = n.editing.view, o = i.document;
                let r = e.target;
                if (function (t) {
                    for (; t;) {
                        if (t.is("editableElement") && !t.is("rootElement")) return !0;
                        if (Cr(t)) return !1;
                        t = t.parent
                    }
                    return !1
                }(r)) {
                    if (et.a.isSafari && e.domEvent.detail >= 3) {
                        const t = n.editing.mapper.toModelElement(r);
                        this.editor.model.change(n => {
                            e.preventDefault(), n.setSelection(t, "in")
                        })
                    }
                    return
                }
                if (!Cr(r) && !(r = r.findAncestor(Cr))) return;
                e.preventDefault(), o.isFocused || i.focus();
                const s = n.editing.mapper.toModelElement(r);
                this._setSelectionOverElement(s)
            }

            _onKeydown(t, e) {
                const n = e.keyCode, i = n == O.c.arrowdown || n == O.c.arrowright;
                let o = !1;
                !function (t) {
                    return t == O.c.arrowright || t == O.c.arrowleft || t == O.c.arrowup || t == O.c.arrowdown
                }(n) ? !function (t) {
                    return Object(O.a)(t) == Br
                }(e) ? n === O.c.enter && (o = this._handleEnterKey(e.shiftKey)) : o = this._selectAllNestedEditableContent() || this._selectAllContent() : o = this._handleArrowKeys(i), o && (e.preventDefault(), t.stop())
            }

            _handleDelete(t) {
                if (this.editor.isReadOnly) return;
                const e = this.editor.model.document.selection;
                if (!e.isCollapsed) return;
                const n = this._getObjectElementNextToSelection(t);
                return n ? (this.editor.model.change(t => {
                    let i = e.anchor.parent;
                    for (; i.isEmpty;) {
                        const e = i;
                        i = e.parent, t.remove(e)
                    }
                    this._setSelectionOverElement(n)
                }), !0) : void 0
            }

            _handleArrowKeys(t) {
                const e = this.editor.model, n = e.schema, i = e.document.selection, o = i.getSelectedElement();
                if (o && n.isObject(o)) {
                    const o = t ? i.getLastPosition() : i.getFirstPosition(),
                        r = n.getNearestSelectionRange(o, t ? "forward" : "backward");
                    return r && e.change(t => {
                        t.setSelection(r)
                    }), !0
                }
                if (!i.isCollapsed) return;
                const r = this._getObjectElementNextToSelection(t);
                return r && n.isObject(r) ? (this._setSelectionOverElement(r), !0) : void 0
            }

            _handleEnterKey(t) {
                const e = this.editor.model, n = e.document.selection.getSelectedElement();
                if (function (t, e) {
                    return t && e.isObject(t) && !e.isInline(t)
                }(n, e.schema)) return e.change(i => {
                    let o = i.createPositionAt(n, t ? "before" : "after");
                    const r = i.createElement("paragraph");
                    if (e.schema.isBlock(n.parent)) {
                        const t = e.schema.findAllowedParent(o, r);
                        o = i.split(o, t).position
                    }
                    i.insert(r, o), i.setSelection(r, "in")
                }), !0
            }

            _selectAllNestedEditableContent() {
                const t = this.editor.model, e = t.document.selection, n = t.schema.getLimitElement(e);
                return e.getFirstRange().root != n && (t.change(t => {
                    t.setSelection(t.createRangeIn(n))
                }), !0)
            }

            _selectAllContent() {
                const t = this.editor.model, e = this.editor.editing,
                    n = e.view.document.selection.getSelectedElement();
                if (n && Cr(n)) {
                    const i = e.mapper.toModelElement(n.parent);
                    return t.change(t => {
                        t.setSelection(t.createRangeIn(i))
                    }), !0
                }
                return !1
            }

            _setSelectionOverElement(t) {
                this.editor.model.change(e => {
                    e.setSelection(e.createRangeOn(t))
                })
            }

            _getObjectElementNextToSelection(t) {
                const e = this.editor.model, n = e.schema, i = e.document.selection, o = e.createSelection(i);
                e.modifySelection(o, {direction: t ? "forward" : "backward"});
                const r = t ? o.focus.nodeBefore : o.focus.nodeAfter;
                return r && n.isObject(r) ? r : null
            }

            _clearPreviouslySelectedWidgets(t) {
                for (const e of this._previouslySelected) t.removeClass(Tr, e);
                this._previouslySelected.clear()
            }
        }

        function Ur(t, e) {
            return !!e && Array.from(t.getAncestors()).includes(e)
        }

        class Hr extends Gi.a {
            refresh() {
                const t = this.editor.model.document.selection.getSelectedElement();
                this.isEnabled = Nr(t), Nr(t) && t.hasAttribute("alt") ? this.value = t.getAttribute("alt") : this.value = !1
            }

            execute(t) {
                const e = this.editor.model, n = e.document.selection.getSelectedElement();
                e.change(e => {
                    e.setAttribute("alt", t.newValue, n)
                })
            }
        }

        class qr extends Yi.a {
            init() {
                this.editor.commands.add("imageTextAlternative", new Hr(this.editor))
            }
        }

        function Wr({emitter: t, activator: e, callback: n, contextElements: i}) {
            t.listenTo(document, "mousedown", (t, {target: o}) => {
                if (e()) {
                    for (const t of i) if (t.contains(o)) return;
                    n()
                }
            })
        }

        var Yr = n(44);
        n(148);

        class $r extends Oi.a {
            constructor(t, e) {
                super(t);
                const n = `ck-input-${Object(we.a)()}`, i = `ck-status-${Object(we.a)()}`;
                this.set("label"), this.set("value"), this.set("isReadOnly", !1), this.set("errorText", null), this.set("infoText", null), this.labelView = this._createLabelView(n), this.inputView = this._createInputView(e, n, i), this.statusView = this._createStatusView(i), this.bind("_statusText").to(this, "errorText", this, "infoText", (t, e) => t || e);
                const o = this.bindTemplate;
                this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck", "ck-labeled-input", o.if("isReadOnly", "ck-disabled")]},
                    children: [this.labelView, this.inputView, this.statusView]
                })
            }

            _createLabelView(t) {
                const e = new Ii(this.locale);
                return e.for = t, e.bind("text").to(this, "label"), e
            }

            _createInputView(t, e, n) {
                const i = new t(this.locale, n);
                return i.id = e, i.ariaDescribedById = n, i.bind("value").to(this), i.bind("isReadOnly").to(this), i.bind("hasError").to(this, "errorText", t => !!t), i.on("input", () => {
                    this.errorText = null
                }), i
            }

            _createStatusView(t) {
                const e = new Oi.a(this.locale), n = this.bindTemplate;
                return e.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-labeled-input__status", n.if("errorText", "ck-labeled-input__status_error"), n.if("_statusText", "ck-hidden", t => !t)],
                        id: t,
                        role: n.if("errorText", "alert")
                    },
                    children: [{text: n.to("_statusText")}]
                }), e
            }

            select() {
                this.inputView.select()
            }

            focus() {
                this.inputView.focus()
            }
        }

        n(150);

        class Gr extends Oi.a {
            constructor(t) {
                super(t), this.set("value"), this.set("id"), this.set("placeholder"), this.set("isReadOnly", !1), this.set("hasError", !1), this.set("ariaDescribedById");
                const e = this.bindTemplate;
                this.setTemplate({
                    tag: "input",
                    attributes: {
                        type: "text",
                        class: ["ck", "ck-input", "ck-input-text", e.if("hasError", "ck-error")],
                        id: e.to("id"),
                        placeholder: e.to("placeholder"),
                        readonly: e.to("isReadOnly"),
                        "aria-invalid": e.if("hasError", !0),
                        "aria-describedby": e.to("ariaDescribedById")
                    },
                    on: {input: e.to("input")}
                })
            }

            render() {
                super.render();
                const t = t => {
                    this.element.value = t || 0 === t ? t : ""
                };
                t(this.value), this.on("change:value", (e, n, i) => {
                    t(i)
                })
            }

            select() {
                this.element.select()
            }

            focus() {
                this.element.focus()
            }
        }

        function Qr({view: t}) {
            t.listenTo(t.element, "submit", (e, n) => {
                n.preventDefault(), t.fire("submit")
            }, {useCapture: !0})
        }

        var Jr = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',
            Kr = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.591 10.177l4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>';
        n(152);

        class Zr extends Oi.a {
            constructor(t) {
                super(t);
                const e = this.locale.t;
                this.focusTracker = new _i, this.keystrokes = new ui, this.labeledInput = this._createLabeledInputView(), this.saveButtonView = this._createButton(e("bg"), Jr, "ck-button-save"), this.saveButtonView.type = "submit", this.cancelButtonView = this._createButton(e("bh"), Kr, "ck-button-cancel", "cancel"), this._focusables = new Yr.a, this._focusCycler = new Bi({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: "shift + tab", focusNext: "tab"}
                }), this.setTemplate({
                    tag: "form",
                    attributes: {class: ["ck", "ck-text-alternative-form"], tabindex: "-1"},
                    children: [this.labeledInput, this.saveButtonView, this.cancelButtonView]
                })
            }

            render() {
                super.render(), this.keystrokes.listenTo(this.element), Qr({view: this}), [this.labeledInput, this.saveButtonView, this.cancelButtonView].forEach(t => {
                    this._focusables.add(t), this.focusTracker.add(t.element)
                })
            }

            _createButton(t, e, n, i) {
                const o = new zo.a(this.locale);
                return o.set({
                    label: t,
                    icon: e,
                    tooltip: !0
                }), o.extendTemplate({attributes: {class: n}}), i && o.delegate("execute").to(this, i), o
            }

            _createLabeledInputView() {
                const t = this.locale.t, e = new $r(this.locale, Gr);
                return e.label = t("bv"), e.inputView.placeholder = t("bv"), e
            }
        }

        function Xr({element: t, target: e, positions: n, limiter: i, fitInViewport: o}) {
            Object(gi.a)(e) && (e = e()), Object(gi.a)(i) && (i = i());
            const r = function (t) {
                for (; t && "html" != t.tagName.toLowerCase();) {
                    if ("static" != Di.a.window.getComputedStyle(t).position) return t;
                    t = t.parentElement
                }
                return null
            }(t.parentElement), s = new zt(t), a = new zt(e);
            let c, l;
            if (i || o) {
                const t = i && new zt(i).getVisible(), e = o && new zt(Di.a.window);
                [l, c] = function (t, e, n, i, o) {
                    let r, s, a = 0, c = 0;
                    const l = n.getArea();
                    return t.some(t => {
                        const [d, u] = ts(t, e, n);
                        let h, f;
                        if (i) if (o) {
                            const t = i.getIntersection(o);
                            h = t ? t.getIntersectionArea(u) : 0
                        } else h = i.getIntersectionArea(u);

                        function m() {
                            c = f, a = h, r = u, s = d
                        }

                        return o && (f = o.getIntersectionArea(u)), o && !i ? f > c && m() : !o && i ? h > a && m() : f > c && h >= a ? m() : f >= c && h > a && m(), h === l
                    }), r ? [s, r] : null
                }(n, a, s, t, e) || ts(n[0], a, s)
            } else [l, c] = ts(n[0], a, s);
            let {left: d, top: u} = es(c);
            if (r) {
                const t = es(new zt(r)), e = Lt(r);
                d -= t.left, u -= t.top, d += r.scrollLeft, u += r.scrollTop, d -= e.left, u -= e.top
            }
            return {left: d, top: u, name: l}
        }

        function ts(t, e, n) {
            const {left: i, top: o, name: r} = t(e, n);
            return [r, n.clone().moveTo(i, o)]
        }

        function es({left: t, top: e}) {
            const {scrollX: n, scrollY: i} = Di.a.window;
            return {left: t + n, top: e + i}
        }

        n(154);
        const ns = Li("px"), is = Di.a.document.body;

        class os extends Oi.a {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.set("top", 0), this.set("left", 0), this.set("position", "arrow_nw"), this.set("isVisible", !1), this.set("withArrow", !0), this.set("class"), this.content = this.createCollection(), this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck", "ck-balloon-panel", e.to("position", t => `ck-balloon-panel_${t}`), e.if("isVisible", "ck-balloon-panel_visible"), e.if("withArrow", "ck-balloon-panel_with-arrow"), e.to("class")],
                        style: {top: e.to("top", ns), left: e.to("left", ns)}
                    },
                    children: this.content
                })
            }

            show() {
                this.isVisible = !0
            }

            hide() {
                this.isVisible = !1
            }

            attachTo(t) {
                this.show();
                const e = os.defaultPositions, n = Object.assign({}, {
                    element: this.element,
                    positions: [e.southArrowNorth, e.southArrowNorthWest, e.southArrowNorthEast, e.northArrowSouth, e.northArrowSouthWest, e.northArrowSouthEast],
                    limiter: is,
                    fitInViewport: !0
                }, t), i = os._getOptimalPosition(n), o = parseInt(i.left), r = parseInt(i.top), s = i.name;
                Object.assign(this, {top: r, left: o, position: s})
            }

            pin(t) {
                this.unpin(), this._pinWhenIsVisibleCallback = (() => {
                    this.isVisible ? this._startPinning(t) : this._stopPinning()
                }), this._startPinning(t), this.listenTo(this, "change:isVisible", this._pinWhenIsVisibleCallback)
            }

            unpin() {
                this._pinWhenIsVisibleCallback && (this._stopPinning(), this.stopListening(this, "change:isVisible", this._pinWhenIsVisibleCallback), this._pinWhenIsVisibleCallback = null, this.hide())
            }

            _startPinning(t) {
                this.attachTo(t);
                const e = rs(t.target), n = t.limiter ? rs(t.limiter) : is;
                this.listenTo(Di.a.document, "scroll", (i, o) => {
                    const r = o.target, s = e && r.contains(e), a = n && r.contains(n);
                    !s && !a && e && n || this.attachTo(t)
                }, {useCapture: !0}), this.listenTo(Di.a.window, "resize", () => {
                    this.attachTo(t)
                })
            }

            _stopPinning() {
                this.stopListening(Di.a.document, "scroll"), this.stopListening(Di.a.window, "resize")
            }
        }

        function rs(t) {
            return Object(r.a)(t) ? t : Rt(t) ? t.commonAncestorContainer : "function" == typeof t ? rs(t()) : null
        }

        function ss(t, e) {
            return t.top - e.height - os.arrowVerticalOffset
        }

        function as(t) {
            return t.bottom + os.arrowVerticalOffset
        }

        os.arrowHorizontalOffset = 25, os.arrowVerticalOffset = 10, os._getOptimalPosition = Xr, os.defaultPositions = {
            northArrowSouth: (t, e) => ({top: ss(t, e), left: t.left + t.width / 2 - e.width / 2, name: "arrow_s"}),
            northArrowSouthEast: (t, e) => ({
                top: ss(t, e),
                left: t.left + t.width / 2 - e.width + os.arrowHorizontalOffset,
                name: "arrow_se"
            }),
            northArrowSouthWest: (t, e) => ({
                top: ss(t, e),
                left: t.left + t.width / 2 - os.arrowHorizontalOffset,
                name: "arrow_sw"
            }),
            northWestArrowSouth: (t, e) => ({top: ss(t, e), left: t.left - e.width / 2, name: "arrow_s"}),
            northWestArrowSouthWest: (t, e) => ({
                top: ss(t, e),
                left: t.left - os.arrowHorizontalOffset,
                name: "arrow_sw"
            }),
            northWestArrowSouthEast: (t, e) => ({
                top: ss(t, e),
                left: t.left - e.width + os.arrowHorizontalOffset,
                name: "arrow_se"
            }),
            northEastArrowSouth: (t, e) => ({top: ss(t, e), left: t.right - e.width / 2, name: "arrow_s"}),
            northEastArrowSouthEast: (t, e) => ({
                top: ss(t, e),
                left: t.right - e.width + os.arrowHorizontalOffset,
                name: "arrow_se"
            }),
            northEastArrowSouthWest: (t, e) => ({
                top: ss(t, e),
                left: t.right - os.arrowHorizontalOffset,
                name: "arrow_sw"
            }),
            southArrowNorth: (t, e) => ({top: as(t), left: t.left + t.width / 2 - e.width / 2, name: "arrow_n"}),
            southArrowNorthEast: (t, e) => ({
                top: as(t),
                left: t.left + t.width / 2 - e.width + os.arrowHorizontalOffset,
                name: "arrow_ne"
            }),
            southArrowNorthWest: (t, e) => ({
                top: as(t),
                left: t.left + t.width / 2 - os.arrowHorizontalOffset,
                name: "arrow_nw"
            }),
            southWestArrowNorth: (t, e) => ({top: as(t), left: t.left - e.width / 2, name: "arrow_n"}),
            southWestArrowNorthWest: (t, e) => ({
                top: as(t),
                left: t.left - os.arrowHorizontalOffset,
                name: "arrow_nw"
            }),
            southWestArrowNorthEast: (t, e) => ({
                top: as(t),
                left: t.left - e.width + os.arrowHorizontalOffset,
                name: "arrow_ne"
            }),
            southEastArrowNorth: (t, e) => ({top: as(t), left: t.right - e.width / 2, name: "arrow_n"}),
            southEastArrowNorthEast: (t, e) => ({
                top: as(t),
                left: t.right - e.width + os.arrowHorizontalOffset,
                name: "arrow_ne"
            }),
            southEastArrowNorthWest: (t, e) => ({
                top: as(t),
                left: t.right - os.arrowHorizontalOffset,
                name: "arrow_nw"
            })
        };
        var cs = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z" /></svg>\n',
            ls = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>\n';
        n(156), n(158);
        const ds = Li("px");

        class us extends Yi.a {
            static get pluginName() {
                return "ContextualBalloon"
            }

            constructor(t) {
                super(t), this.positionLimiter = (() => {
                    const t = this.editor.editing.view, e = t.document.selection.editableElement;
                    return e ? t.domConverter.mapViewToDom(e.root) : null
                }), this.set("visibleView", null), this.view = new os(t.locale), t.ui.view.body.add(this.view), t.ui.focusTracker.add(this.view.element), this._viewToStack = new Map, this._idToStack = new Map, this.set("_numberOfStacks", 0), this.set("_singleViewMode", !1), this._rotatorView = this._createRotatorView(), this._fakePanelsView = this._createFakePanelsView()
            }

            hasView(t) {
                return Array.from(this._viewToStack.keys()).includes(t)
            }

            add(t) {
                if (this.hasView(t.view)) throw new v.b("contextualballoon-add-view-exist: Cannot add configuration of the same view twice.", [this, t]);
                const e = t.stackId || "main";
                if (!this._idToStack.has(e)) return this._idToStack.set(e, new Map([[t.view, t]])), this._viewToStack.set(t.view, this._idToStack.get(e)), this._numberOfStacks = this._idToStack.size, void (this._visibleStack && !t.singleViewMode || this.showStack(e));
                const n = this._idToStack.get(e);
                t.singleViewMode && this.showStack(e), n.set(t.view, t), this._viewToStack.set(t.view, n), n === this._visibleStack && this._showView(t)
            }

            remove(t) {
                if (!this.hasView(t)) throw new v.b("contextualballoon-remove-view-not-exist: Cannot remove the configuration of a non-existent view.", [this, t]);
                const e = this._viewToStack.get(t);
                this._singleViewMode && this.visibleView === t && (this._singleViewMode = !1), this.visibleView === t && (1 === e.size ? this._idToStack.size > 1 ? this._showNextStack() : (this.view.hide(), this.visibleView = null, this._rotatorView.hideView()) : this._showView(Array.from(e.values())[e.size - 2])), 1 === e.size ? (this._idToStack.delete(this._getStackId(e)), this._numberOfStacks = this._idToStack.size) : e.delete(t), this._viewToStack.delete(t)
            }

            updatePosition(t) {
                t && (this._visibleStack.get(this.visibleView).position = t), this.view.pin(this._getBalloonPosition()), this._fakePanelsView.updatePosition()
            }

            showStack(t) {
                this.visibleStack = t;
                const e = this._idToStack.get(t);
                if (!e) throw new v.b("contextualballoon-showstack-stack-not-exist: Cannot show a stack that does not exist.", this);
                this._visibleStack !== e && this._showView(Array.from(e.values()).pop())
            }

            get _visibleStack() {
                return this._viewToStack.get(this.visibleView)
            }

            _getStackId(t) {
                return Array.from(this._idToStack.entries()).find(e => e[1] === t)[0]
            }

            _showNextStack() {
                const t = Array.from(this._idToStack.values());
                let e = t.indexOf(this._visibleStack) + 1;
                t[e] || (e = 0), this.showStack(this._getStackId(t[e]))
            }

            _showPrevStack() {
                const t = Array.from(this._idToStack.values());
                let e = t.indexOf(this._visibleStack) - 1;
                t[e] || (e = t.length - 1), this.showStack(this._getStackId(t[e]))
            }

            _createRotatorView() {
                const t = new hs(this.editor.locale), e = this.editor.locale.t;
                return this.view.content.add(t), t.bind("isNavigationVisible").to(this, "_numberOfStacks", this, "_singleViewMode", (t, e) => !e && t > 1), t.on("change:isNavigationVisible", () => this.updatePosition(), {priority: "low"}), t.bind("counter").to(this, "visibleView", this, "_numberOfStacks", (t, n) => {
                    if (n < 2) return "";
                    const i = Array.from(this._idToStack.values()).indexOf(this._visibleStack) + 1;
                    return e("bw", [i, n])
                }), t.buttonNextView.on("execute", () => {
                    t.focusTracker.isFocused && this.editor.editing.view.focus(), this._showNextStack()
                }), t.buttonPrevView.on("execute", () => {
                    t.focusTracker.isFocused && this.editor.editing.view.focus(), this._showPrevStack()
                }), t
            }

            _createFakePanelsView() {
                const t = new fs(this.editor.locale, this.view);
                return t.bind("numberOfPanels").to(this, "_numberOfStacks", this, "_singleViewMode", (t, e) => {
                    return !e && t >= 2 ? Math.min(t - 1, 2) : 0
                }), t.listenTo(this.view, "change:top", () => t.updatePosition()), t.listenTo(this.view, "change:left", () => t.updatePosition()), this.editor.ui.view.body.add(t), t
            }

            _showView({view: t, balloonClassName: e = "", withArrow: n = !0, singleViewMode: i = !1}) {
                this.view.class = e, this.view.withArrow = n, this._rotatorView.showView(t), this.visibleView = t, this.view.pin(this._getBalloonPosition()), this._fakePanelsView.updatePosition(), i && (this._singleViewMode = !0)
            }

            _getBalloonPosition() {
                let t = Array.from(this._visibleStack.values()).pop().position;
                return t && !t.limiter && (t = Object.assign({}, t, {limiter: this.positionLimiter})), t
            }
        }

        class hs extends Oi.a {
            constructor(t) {
                super(t);
                const e = t.t, n = this.bindTemplate;
                this.set("isNavigationVisible", !0), this.focusTracker = new _i, this.buttonPrevView = this._createButtonView(e("bx"), cs), this.buttonNextView = this._createButtonView(e("by"), ls), this.content = this.createCollection(), this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck", "ck-balloon-rotator"], "z-index": "-1"},
                    children: [{
                        tag: "div",
                        attributes: {class: ["ck-balloon-rotator__navigation", n.to("isNavigationVisible", t => t ? "" : "ck-hidden")]},
                        children: [this.buttonPrevView, {
                            tag: "span",
                            attributes: {class: ["ck-balloon-rotator__counter"]},
                            children: [{text: n.to("counter")}]
                        }, this.buttonNextView]
                    }, {tag: "div", attributes: {class: "ck-balloon-rotator__content"}, children: this.content}]
                })
            }

            render() {
                super.render(), this.focusTracker.add(this.element)
            }

            showView(t) {
                this.hideView(), this.content.add(t)
            }

            hideView() {
                this.content.clear()
            }

            _createButtonView(t, e) {
                const n = new zo.a(this.locale);
                return n.set({label: t, icon: e, tooltip: !0}), n
            }
        }

        class fs extends Oi.a {
            constructor(t, e) {
                super(t);
                const n = this.bindTemplate;
                this.set("top", 0), this.set("left", 0), this.set("height", 0), this.set("width", 0), this.set("numberOfPanels", 0), this.content = this.createCollection(), this._balloonPanelView = e, this.setTemplate({
                    tag: "div",
                    attributes: {
                        class: ["ck-fake-panel", n.to("numberOfPanels", t => t ? "" : "ck-hidden")],
                        style: {
                            top: n.to("top", ds),
                            left: n.to("left", ds),
                            width: n.to("width", ds),
                            height: n.to("height", ds)
                        }
                    },
                    children: this.content
                }), this.on("change:numberOfPanels", (t, e, n, i) => {
                    n > i ? this._addPanels(n - i) : this._removePanels(i - n), this.updatePosition()
                })
            }

            _addPanels(t) {
                for (; t--;) {
                    const t = new Oi.a;
                    t.setTemplate({tag: "div"}), this.content.add(t), this.registerChild(t)
                }
            }

            _removePanels(t) {
                for (; t--;) {
                    const t = this.content.last;
                    this.content.remove(t), this.deregisterChild(t), t.destroy()
                }
            }

            updatePosition() {
                if (this.numberOfPanels) {
                    const {top: t, left: e} = this._balloonPanelView, {width: n, height: i} = new zt(this._balloonPanelView.element);
                    Object.assign(this, {top: t, left: e, width: n, height: i})
                }
            }
        }

        var ms = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22L2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>';

        function ps(t) {
            const e = t.editing.view, n = os.defaultPositions;
            return {
                target: e.domConverter.viewToDom(e.document.selection.getSelectedElement()),
                positions: [n.northArrowSouth, n.northArrowSouthWest, n.northArrowSouthEast, n.southArrowNorth, n.southArrowNorthWest, n.southArrowNorthEast]
            }
        }

        class gs extends Yi.a {
            static get requires() {
                return [us]
            }

            static get pluginName() {
                return "ImageTextAlternativeUI"
            }

            init() {
                this._createButton(), this._createForm()
            }

            destroy() {
                super.destroy(), this._form.destroy()
            }

            _createButton() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add("imageTextAlternative", n => {
                    const i = t.commands.get("imageTextAlternative"), o = new zo.a(n);
                    return o.set({
                        label: e("bf"),
                        icon: ms,
                        tooltip: !0
                    }), o.bind("isEnabled").to(i, "isEnabled"), this.listenTo(o, "execute", () => this._showForm()), o
                })
            }

            _createForm() {
                const t = this.editor, e = t.editing.view.document;
                this._balloon = this.editor.plugins.get("ContextualBalloon"), this._form = new Zr(t.locale), this._form.render(), this.listenTo(this._form, "submit", () => {
                    t.execute("imageTextAlternative", {newValue: this._form.labeledInput.inputView.element.value}), this._hideForm(!0)
                }), this.listenTo(this._form, "cancel", () => {
                    this._hideForm(!0)
                }), this._form.keystrokes.set("Esc", (t, e) => {
                    this._hideForm(!0), e()
                }), this.listenTo(t.ui, "update", () => {
                    Ir(e.selection) ? this._isVisible && function (t) {
                        const e = t.plugins.get("ContextualBalloon");
                        if (Ir(t.editing.view.document.selection)) {
                            const n = ps(t);
                            e.updatePosition(n)
                        }
                    }(t) : this._hideForm(!0)
                }), Wr({
                    emitter: this._form,
                    activator: () => this._isVisible,
                    contextElements: [this._balloon.view.element],
                    callback: () => this._hideForm()
                })
            }

            _showForm() {
                if (this._isVisible) return;
                const t = this.editor, e = t.commands.get("imageTextAlternative"), n = this._form.labeledInput;
                this._isInBalloon || this._balloon.add({
                    view: this._form,
                    position: ps(t)
                }), n.value = n.inputView.element.value = e.value || "", this._form.labeledInput.select()
            }

            _hideForm(t) {
                this._isInBalloon && (this._form.focusTracker.isFocused && this._form.saveButtonView.focus(), this._balloon.remove(this._form), t && this.editor.editing.view.focus())
            }

            get _isVisible() {
                return this._balloon.visibleView === this._form
            }

            get _isInBalloon() {
                return this._balloon.hasView(this._form)
            }
        }

        class bs extends Yi.a {
            static get requires() {
                return [qr, gs]
            }

            static get pluginName() {
                return "ImageTextAlternative"
            }
        }

        n(160);

        class ws extends Yi.a {
            static get requires() {
                return [Lr, Fr, bs]
            }

            static get pluginName() {
                return "Image"
            }
        }

        class ks extends Oi.a {
            constructor(t) {
                super(t), this.buttonView = new zo.a(t), this._fileInputView = new _s(t), this._fileInputView.bind("acceptedType").to(this), this._fileInputView.bind("allowMultipleFiles").to(this), this._fileInputView.delegate("done").to(this), this.setTemplate({
                    tag: "span",
                    attributes: {class: "ck-file-dialog-button"},
                    children: [this.buttonView, this._fileInputView]
                }), this.buttonView.on("execute", () => {
                    this._fileInputView.open()
                })
            }

            focus() {
                this.buttonView.focus()
            }
        }

        class _s extends Oi.a {
            constructor(t) {
                super(t), this.set("acceptedType"), this.set("allowMultipleFiles", !1);
                const e = this.bindTemplate;
                this.setTemplate({
                    tag: "input",
                    attributes: {
                        class: ["ck-hidden"],
                        type: "file",
                        tabindex: "-1",
                        accept: e.to("acceptedType"),
                        multiple: e.to("allowMultipleFiles")
                    },
                    on: {
                        change: e.to(() => {
                            this.element && this.element.files && this.element.files.length && this.fire("done", this.element.files), this.element.value = ""
                        })
                    }
                })
            }

            open() {
                this.element.click()
            }
        }

        var vs = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>';

        function ys(t) {
            return /^image\/(jpeg|png|gif|bmp)$/.test(t.type)
        }

        function xs(t) {
            return new Promise((e, n) => {
                const i = t.getAttribute("src");
                fetch(i).then(t => t.blob()).then(t => {
                    const o = function (t, e) {
                        return t.type ? t.type : e.match(/data:(image\/\w+);base64/) ? e.match(/data:(image\/\w+);base64/)[1].toLowerCase() : "image/jpeg"
                    }(t, i), r = function (t, e, n) {
                        try {
                            return new File([t], e, {type: n})
                        } catch (t) {
                            return null
                        }
                    }(t, `image.${o.replace("image/", "")}`, o);
                    r ? e(r) : n()
                }).catch(n)
            })
        }

        class As extends Yi.a {
            init() {
                const t = this.editor, e = t.t;
                t.ui.componentFactory.add("imageUpload", n => {
                    const i = new ks(n), o = t.commands.get("imageUpload");
                    return i.set({acceptedType: "image/*", allowMultipleFiles: !0}), i.buttonView.set({
                        label: e("ah"),
                        icon: vs,
                        tooltip: !0
                    }), i.buttonView.bind("isEnabled").to(o), i.on("done", (e, n) => {
                        const i = Array.from(n).filter(ys);
                        i.length && t.execute("imageUpload", {file: i})
                    }), i
                })
            }
        }

        var Ts = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><rect rx="4"/></svg>';
        n(162), n(164), n(166);

        class Cs extends Yi.a {
            constructor(t) {
                super(t), this.placeholder = "data:image/svg+xml;utf8," + encodeURIComponent(Ts)
            }

            init() {
                this.editor.editing.downcastDispatcher.on("attribute:uploadStatus:image", (...t) => this.uploadStatusChange(...t))
            }

            uploadStatusChange(t, e, n) {
                const i = this.editor, o = e.item, r = o.getAttribute("uploadId");
                if (!n.consumable.consume(e.item, t.name)) return;
                const s = i.plugins.get(Ao), a = r ? e.attributeNewValue : null, c = this.placeholder,
                    l = i.editing.mapper.toViewElement(o), d = n.writer;
                if ("reading" == a) return Ps(l, d), void Ms(c, l, d);
                if ("uploading" == a) {
                    const t = s.loaders.get(r);
                    return Ps(l, d), void (t ? (Os(l, d), function (t, e, n, i) {
                        const o = function (t) {
                            const e = t.createUIElement("div", {class: "ck-progress-bar"});
                            return t.setCustomProperty("progressBar", !0, e), e
                        }(e);
                        e.insert(e.createPositionAt(t, "end"), o), n.on("change:uploadedPercent", (t, e, n) => {
                            i.change(t => {
                                t.setStyle("width", n + "%", o)
                            })
                        })
                    }(l, d, t, i.editing.view), function (t, e, n) {
                        if (n.data) {
                            const i = t.getChild(0);
                            e.setAttribute("src", n.data, i)
                        }
                    }(l, d, t)) : Ms(c, l, d))
                }
                "complete" == a && s.loaders.get(r) && !et.a.isEdge && function (t, e, n) {
                    const i = e.createUIElement("div", {class: "ck-image-upload-complete-icon"});
                    e.insert(e.createPositionAt(t, "end"), i), setTimeout(() => {
                        n.change(t => t.remove(t.createRangeOn(i)))
                    }, 3e3)
                }(l, d, i.editing.view), function (t, e) {
                    Es(t, e, "progressBar")
                }(l, d), Os(l, d), function (t, e) {
                    e.removeClass("ck-appear", t)
                }(l, d)
            }
        }

        function Ps(t, e) {
            t.hasClass("ck-appear") || e.addClass("ck-appear", t)
        }

        function Ms(t, e, n) {
            e.hasClass("ck-image-upload-placeholder") || n.addClass("ck-image-upload-placeholder", e);
            const i = e.getChild(0);
            i.getAttribute("src") !== t && n.setAttribute("src", t, i), Ss(e, "placeholder") || n.insert(n.createPositionAfter(i), function (t) {
                const e = t.createUIElement("div", {class: "ck-upload-placeholder-loader"});
                return t.setCustomProperty("placeholder", !0, e), e
            }(n))
        }

        function Os(t, e) {
            t.hasClass("ck-image-upload-placeholder") && e.removeClass("ck-image-upload-placeholder", t), Es(t, e, "placeholder")
        }

        function Ss(t, e) {
            for (const n of t.getChildren()) if (n.getCustomProperty(e)) return n
        }

        function Es(t, e, n) {
            const i = Ss(t, n);
            i && e.remove(e.createRangeOn(i))
        }

        class Is {
            createDocumentFragment(t) {
                return new N.a(t)
            }

            createElement(t, e, n) {
                return new _.a(t, e, n)
            }

            createText(t) {
                return new R.a(t)
            }

            clone(t, e = !1) {
                return t._clone(e)
            }

            appendChild(t, e) {
                return e._appendChild(t)
            }

            insertChild(t, e, n) {
                return n._insertChild(t, e)
            }

            removeChildren(t, e, n) {
                return n._removeChildren(t, e)
            }

            remove(t) {
                const e = t.parent;
                return e ? this.removeChildren(e.getChildIndex(t), 1, e) : []
            }

            replace(t, e) {
                const n = t.parent;
                if (n) {
                    const i = n.getChildIndex(t);
                    return this.removeChildren(i, 1, n), this.insertChild(i, e, n), !0
                }
                return !1
            }

            unwrapElement(t) {
                const e = t.parent;
                if (e) {
                    const n = e.getChildIndex(t);
                    this.remove(t), this.insertChild(n, t.getChildren(), e)
                }
            }

            rename(t, e) {
                const n = new _.a(t, e.getAttributes(), e.getChildren());
                return this.replace(e, n) ? n : null
            }

            setAttribute(t, e, n) {
                n._setAttribute(t, e)
            }

            removeAttribute(t, e) {
                e._removeAttribute(t)
            }

            addClass(t, e) {
                e._addClass(t)
            }

            removeClass(t, e) {
                e._removeClass(t)
            }

            setStyle(t, e, n) {
                Object(i.a)(t) && void 0 === n && (n = e), n._setStyle(t, e)
            }

            removeStyle(t, e) {
                e._removeStyle(t)
            }

            setCustomProperty(t, e, n) {
                n._setCustomProperty(t, e)
            }

            removeCustomProperty(t, e) {
                return e._removeCustomProperty(t)
            }

            createPositionAt(t, e) {
                return g.a._createAt(t, e)
            }

            createPositionAfter(t) {
                return g.a._createAfter(t)
            }

            createPositionBefore(t) {
                return g.a._createBefore(t)
            }

            createRange(t, e) {
                return new b.a(t, e)
            }

            createRangeOn(t) {
                return b.a._createOn(t)
            }

            createRangeIn(t) {
                return b.a._createIn(t)
            }

            createSelection(t, e, n) {
                return new w.a(t, e, n)
            }
        }

        class Ns extends Gi.a {
            refresh() {
                this.isEnabled = Rr(this.editor.model)
            }

            execute(t) {
                const e = this.editor, n = e.model, i = e.plugins.get(Ao);
                n.change(e => {
                    const o = Array.isArray(t.file) ? t.file : [t.file];
                    for (const t of o) js(e, n, i, t)
                })
            }
        }

        function js(t, e, n, i) {
            const o = n.createLoader(i);
            o && jr(t, e, {uploadId: o.id})
        }

        class Rs extends Yi.a {
            static get requires() {
                return [Ao, or]
            }

            init() {
                const t = this.editor, e = t.model.document, n = t.model.schema, i = t.conversion,
                    o = t.plugins.get(Ao);
                n.extend("image", {allowAttributes: ["uploadId", "uploadStatus"]}), t.commands.add("imageUpload", new Ns(t)), i.for("upcast").attributeToAttribute({
                    view: {
                        name: "img",
                        key: "uploadId"
                    }, model: "uploadId"
                }), this.listenTo(t.editing.view.document, "clipboardInput", (e, n) => {
                    if (function (t) {
                        return Array.from(t.types).includes("text/html") && "" !== t.getData("text/html")
                    }(n.dataTransfer)) return;
                    const i = Array.from(n.dataTransfer.files).filter(t => !!t && ys(t)),
                        o = n.targetRanges.map(e => t.editing.mapper.toModelRange(e));
                    t.model.change(n => {
                        n.setSelection(o), i.length && (e.stop(), t.model.enqueueChange("default", () => {
                            t.execute("imageUpload", {file: i})
                        }))
                    })
                }), t.plugins.has("Clipboard") && this.listenTo(t.plugins.get("Clipboard"), "inputTransformation", (e, n) => {
                    const i = Array.from(t.editing.view.createRangeIn(n.content)).filter(t => (function (t) {
                        return !(!t.is("element", "img") || !t.getAttribute("src")) && (t.getAttribute("src").match(/^data:image\/\w+;base64,/g) || t.getAttribute("src").match(/^blob:/g))
                    })(t.item) && !t.item.getAttribute("uploadProcessed")).map(t => ({
                        promise: xs(t.item),
                        imageElement: t.item
                    }));
                    if (!i.length) return;
                    const r = new Is;
                    for (const t of i) {
                        r.setAttribute("uploadProcessed", !0, t.imageElement);
                        const e = o.createLoader(t.promise);
                        e && (r.setAttribute("src", "", t.imageElement), r.setAttribute("uploadId", e.id, t.imageElement))
                    }
                }), t.editing.view.document.on("dragover", (t, e) => {
                    e.preventDefault()
                }), e.on("change", () => {
                    const n = e.differ.getChanges({includeChangesInGraveyard: !0});
                    for (const e of n) if ("insert" == e.type && "$text" != e.name) {
                        const n = e.position.nodeAfter, i = "$graveyard" == e.position.root.rootName;
                        for (const e of Ds(t, n)) {
                            const t = e.getAttribute("uploadId");
                            if (!t) continue;
                            const n = o.loaders.get(t);
                            n && (i ? n.abort() : "idle" == n.status && this._readAndUpload(n, e))
                        }
                    }
                })
            }

            _readAndUpload(t, e) {
                const n = this.editor, i = n.model, o = n.locale.t, r = n.plugins.get(Ao), s = n.plugins.get(or);
                return i.enqueueChange("transparent", t => {
                    t.setAttribute("uploadStatus", "reading", e)
                }), t.read().then(() => {
                    const o = t.upload();
                    if (et.a.isSafari) {
                        const t = n.editing.mapper.toViewElement(e).getChild(0);
                        n.editing.view.once("render", () => {
                            if (!t.parent) return;
                            const e = n.editing.view.domConverter.mapViewToDom(t.parent);
                            if (!e) return;
                            const i = e.style.display;
                            e.style.display = "none", e._ckHack = e.offsetHeight, e.style.display = i
                        })
                    }
                    return i.enqueueChange("transparent", t => {
                        t.setAttribute("uploadStatus", "uploading", e)
                    }), o
                }).then(t => {
                    i.enqueueChange("transparent", n => {
                        n.setAttributes({
                            uploadStatus: "complete",
                            src: t.default
                        }, e), this._parseAndSetSrcsetAttributeOnImage(t, e, n)
                    }), a()
                }).catch(n => {
                    if ("error" !== t.status && "aborted" !== t.status) throw n;
                    "error" == t.status && n && s.showWarning(n, {
                        title: o("an"),
                        namespace: "upload"
                    }), a(), i.enqueueChange("transparent", t => {
                        t.remove(e)
                    })
                });

                function a() {
                    i.enqueueChange("transparent", t => {
                        t.removeAttribute("uploadId", e), t.removeAttribute("uploadStatus", e)
                    }), r.destroyLoader(t)
                }
            }

            _parseAndSetSrcsetAttributeOnImage(t, e, n) {
                let i = 0;
                const o = Object.keys(t).filter(t => {
                    const e = parseInt(t, 10);
                    if (!isNaN(e)) return i = Math.max(i, e), !0
                }).map(e => `${t[e]} ${e}w`).join(", ");
                "" != o && n.setAttribute("srcset", {data: o, width: i}, e)
            }
        }

        function Ds(t, e) {
            return Array.from(t.model.createRangeOn(e)).filter(t => t.item.is("image")).map(t => t.item)
        }

        class Ls extends Yi.a {
            static get pluginName() {
                return "ImageUpload"
            }

            static get requires() {
                return [Rs, As, Cs]
            }
        }

        class Vs extends Gi.a {
            refresh() {
                const t = this.editor.model, e = Go(t.document.selection.getSelectedBlocks());
                this.value = !!e && e.is("paragraph"), this.isEnabled = !!e && zs(e, t.schema)
            }

            execute(t = {}) {
                const e = this.editor.model, n = e.document;
                e.change(i => {
                    const o = (t.selection || n.selection).getSelectedBlocks();
                    for (const t of o) !t.is("paragraph") && zs(t, e.schema) && i.rename(t, "paragraph")
                })
            }
        }

        function zs(t, e) {
            return e.checkChild(t.parent, "paragraph") && !e.isObject(t)
        }

        class Bs extends Yi.a {
            static get pluginName() {
                return "Paragraph"
            }

            init() {
                const t = this.editor, e = t.model, n = t.data;
                t.commands.add("paragraph", new Vs(t)), e.schema.register("paragraph", {inheritAllFrom: "$block"}), t.conversion.elementToElement({
                    model: "paragraph",
                    view: "p"
                }), t.conversion.for("upcast").elementToElement({
                    model: (t, e) => Bs.paragraphLikeElements.has(t.name) ? t.isEmpty ? null : e.createElement("paragraph") : null,
                    converterPriority: "low"
                }), n.upcastDispatcher.on("element", (t, e, n) => {
                    n.consumable.test(e.viewItem, {name: e.viewItem.name}) && Us(e.viewItem, e.modelCursor, n.schema) && Object.assign(e, Fs(e.viewItem, e.modelCursor, n))
                }, {priority: "low"}), n.upcastDispatcher.on("text", (t, e, n) => {
                    e.modelRange || Us(e.viewItem, e.modelCursor, n.schema) && Object.assign(e, Fs(e.viewItem, e.modelCursor, n))
                }, {priority: "lowest"}), e.document.registerPostFixer(t => this._autoparagraphEmptyRoots(t)), t.data.on("ready", () => {
                    e.enqueueChange("transparent", t => this._autoparagraphEmptyRoots(t))
                }, {priority: "lowest"})
            }

            _autoparagraphEmptyRoots(t) {
                const e = this.editor.model;
                for (const n of e.document.getRootNames()) {
                    const i = e.document.getRoot(n);
                    if (i.isEmpty && "$graveyard" != i.rootName && e.schema.checkChild(i, "paragraph")) return t.insertElement("paragraph", i), !0
                }
            }
        }

        function Fs(t, e, n) {
            const i = n.writer.createElement("paragraph");
            return n.writer.insert(i, e), n.convertItem(t, n.writer.createPositionAt(i, 0))
        }

        function Us(t, e, n) {
            const i = n.createContext(e);
            return !!n.checkChild(i, "paragraph") && !!n.checkChild(i.push("paragraph"), t)
        }

        Bs.paragraphLikeElements = new Set(["blockquote", "dd", "div", "dt", "h1", "h2", "h3", "h4", "h5", "h6", "li", "p", "td"]);

        class Hs extends Gi.a {
            constructor(t, e) {
                super(t), this.modelElements = e
            }

            refresh() {
                const t = Go(this.editor.model.document.selection.getSelectedBlocks());
                this.value = !!t && this.modelElements.includes(t.name) && t.name, this.isEnabled = !!t && this.modelElements.some(e => qs(t, e, this.editor.model.schema))
            }

            execute(t) {
                const e = this.editor.model, n = e.document, i = t.value;
                e.change(t => {
                    const o = Array.from(n.selection.getSelectedBlocks()).filter(t => qs(t, i, e.schema));
                    for (const e of o) e.is(i) || t.rename(e, i)
                })
            }
        }

        function qs(t, e, n) {
            return n.checkChild(t.parent, e) && !n.isObject(t)
        }

        var Ws = n(81);
        const Ys = "paragraph";

        class $s extends Yi.a {
            constructor(t) {
                super(t), t.config.define("heading", {
                    options: [{
                        model: "paragraph",
                        title: "Paragraph",
                        class: "ck-heading_paragraph"
                    }, {
                        model: "heading1",
                        view: "h2",
                        title: "Heading 1",
                        class: "ck-heading_heading1"
                    }, {
                        model: "heading2",
                        view: "h3",
                        title: "Heading 2",
                        class: "ck-heading_heading2"
                    }, {model: "heading3", view: "h4", title: "Heading 3", class: "ck-heading_heading3"}]
                })
            }

            static get requires() {
                return [Bs]
            }

            init() {
                const t = this.editor, e = t.config.get("heading.options"), n = [];
                for (const i of e) i.model !== Ys && (t.model.schema.register(i.model, {inheritAllFrom: "$block"}), t.conversion.elementToElement(i), n.push(i.model));
                this._addDefaultH1Conversion(t), t.commands.add("heading", new Hs(t, n))
            }

            afterInit() {
                const t = this.editor, e = t.commands.get("enter"), n = t.config.get("heading.options");
                e && this.listenTo(e, "afterExecute", (e, i) => {
                    const o = t.model.document.selection.getFirstPosition().parent;
                    n.some(t => o.is(t.model)) && !o.is(Ys) && 0 === o.childCount && i.writer.rename(o, Ys)
                })
            }

            _addDefaultH1Conversion(t) {
                t.conversion.for("upcast").elementToElement({
                    model: "heading1",
                    view: "h1",
                    converterPriority: Ws.a.get("low") + 1
                })
            }
        }

        class Gs {
            constructor(t, e) {
                e && Object(se.a)(this, e), t && this.set(t)
            }
        }

        Object(f.a)(Gs, m.a);

        class Qs extends Oi.a {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.set("isVisible", !1), this.set("position", "se"), this.children = this.createCollection(), this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck", "ck-reset", "ck-dropdown__panel", e.to("position", t => `ck-dropdown__panel_${t}`), e.if("isVisible", "ck-dropdown__panel-visible")]},
                    children: this.children,
                    on: {selectstart: e.to(t => t.preventDefault())}
                })
            }

            focus() {
                this.children.length && this.children.first.focus()
            }

            focusLast() {
                if (this.children.length) {
                    const t = this.children.last;
                    "function" == typeof t.focusLast ? t.focusLast() : t.focus()
                }
            }
        }

        n(168);

        class Js extends Oi.a {
            constructor(t, e, n) {
                super(t);
                const i = this.bindTemplate;
                this.buttonView = e, this.panelView = n, this.set("isOpen", !1), this.set("isEnabled", !0), this.set("class"), this.set("panelPosition", "auto"), this.focusTracker = new _i, this.keystrokes = new ui, this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck", "ck-dropdown", i.to("class"), i.if("isEnabled", "ck-disabled", t => !t)]},
                    children: [e, n]
                }), e.extendTemplate({attributes: {class: ["ck-dropdown__button"]}})
            }

            render() {
                super.render(), this.listenTo(this.buttonView, "open", () => {
                    this.isOpen = !this.isOpen
                }), this.panelView.bind("isVisible").to(this, "isOpen"), this.on("change:isOpen", () => {
                    this.isOpen && ("auto" === this.panelPosition ? this.panelView.position = Js._getOptimalPosition({
                        element: this.panelView.element,
                        target: this.buttonView.element,
                        fitInViewport: !0,
                        positions: this._panelPositions
                    }).name : this.panelView.position = this.panelPosition)
                }), this.keystrokes.listenTo(this.element), this.focusTracker.add(this.element);
                const t = (t, e) => {
                    this.isOpen && (this.buttonView.focus(), this.isOpen = !1, e())
                };
                this.keystrokes.set("arrowdown", (t, e) => {
                    this.buttonView.isEnabled && !this.isOpen && (this.isOpen = !0, e())
                }), this.keystrokes.set("arrowright", (t, e) => {
                    this.isOpen && e()
                }), this.keystrokes.set("arrowleft", t), this.keystrokes.set("esc", t)
            }

            focus() {
                this.buttonView.focus()
            }

            get _panelPositions() {
                const {southEast: t, southWest: e, northEast: n, northWest: i} = Js.defaultPanelPositions;
                return "ltr" === this.locale.uiLanguageDirection ? [t, e, n, i] : [e, t, i, n]
            }
        }

        Js.defaultPanelPositions = {
            southEast: t => ({top: t.bottom, left: t.left, name: "se"}),
            southWest: (t, e) => ({top: t.bottom, left: t.left - e.width + t.width, name: "sw"}),
            northEast: (t, e) => ({top: t.top - e.height, left: t.left, name: "ne"}),
            northWest: (t, e) => ({top: t.bottom - e.height, left: t.left - e.width + t.width, name: "nw"})
        }, Js._getOptimalPosition = Xr;
        var Ks = '<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';

        class Zs extends zo.a {
            constructor(t) {
                super(t), this.arrowView = this._createArrowView(), this.extendTemplate({attributes: {"aria-haspopup": !0}}), this.delegate("execute").to(this, "open")
            }

            render() {
                super.render(), this.children.add(this.arrowView)
            }

            _createArrowView() {
                const t = new yr.a;
                return t.content = Ks, t.extendTemplate({attributes: {class: "ck-dropdown__arrow"}}), t
            }
        }

        n(170);

        class Xs extends Oi.a {
            constructor() {
                super(), this.items = this.createCollection(), this.focusTracker = new _i, this.keystrokes = new ui, this._focusCycler = new Bi({
                    focusables: this.items,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: "arrowup", focusNext: "arrowdown"}
                }), this.setTemplate({
                    tag: "ul",
                    attributes: {class: ["ck", "ck-reset", "ck-list"]},
                    children: this.items
                })
            }

            render() {
                super.render();
                for (const t of this.items) this.focusTracker.add(t.element);
                this.items.on("add", (t, e) => {
                    this.focusTracker.add(e.element)
                }), this.items.on("remove", (t, e) => {
                    this.focusTracker.remove(e.element)
                }), this.keystrokes.listenTo(this.element)
            }

            focus() {
                this._focusCycler.focusFirst()
            }

            focusLast() {
                this._focusCycler.focusLast()
            }
        }

        class ta extends Oi.a {
            constructor(t) {
                super(t), this.children = this.createCollection(), this.setTemplate({
                    tag: "li",
                    attributes: {class: ["ck", "ck-list__item"]},
                    children: this.children
                })
            }

            focus() {
                this.children.first.focus()
            }
        }

        class ea extends Oi.a {
            constructor(t) {
                super(t), this.setTemplate({tag: "li", attributes: {class: ["ck", "ck-list__separator"]}})
            }
        }

        n(172);

        class na extends zo.a {
            constructor(t) {
                super(t), this.isToggleable = !0, this.toggleSwitchView = this._createToggleView(), this.extendTemplate({attributes: {class: "ck-switchbutton"}})
            }

            render() {
                super.render(), this.children.add(this.toggleSwitchView)
            }

            _createToggleView() {
                const t = new Oi.a;
                return t.setTemplate({
                    tag: "span",
                    attributes: {class: ["ck", "ck-button__toggle"]},
                    children: [{tag: "span", attributes: {class: ["ck", "ck-button__toggle__inner"]}}]
                }), t
            }
        }

        n(174), n(176);

        function ia(t, e = Zs) {
            const n = new e(t), i = new Qs(t), o = new Js(t, n, i);
            return n.bind("isEnabled").to(o), n instanceof Zs ? n.bind("isOn").to(o, "isOpen") : n.arrowView.bind("isOn").to(o, "isOpen"), function (t) {
                (function (t) {
                    t.on("render", () => {
                        Wr({
                            emitter: t, activator: () => t.isOpen, callback: () => {
                                t.isOpen = !1
                            }, contextElements: [t.element]
                        })
                    })
                })(t), function (t) {
                    t.on("execute", e => {
                        e.source instanceof na || (t.isOpen = !1)
                    })
                }(t), function (t) {
                    t.keystrokes.set("arrowdown", (e, n) => {
                        t.isOpen && (t.panelView.focus(), n())
                    }), t.keystrokes.set("arrowup", (e, n) => {
                        t.isOpen && (t.panelView.focusLast(), n())
                    })
                }(t)
            }(o), o
        }

        function oa(t, e) {
            const n = t.locale, i = t.listView = new Xs(n);
            i.items.bindTo(e).using(({type: t, model: e}) => {
                if ("separator" === t) return new ea(n);
                if ("button" === t || "switchbutton" === t) {
                    const i = new ta(n);
                    let o;
                    return (o = "button" === t ? new zo.a(n) : new na(n)).bind(...Object.keys(e)).to(e), o.delegate("execute").to(i), i.children.add(o), i
                }
            }), t.panelView.children.add(i), i.items.delegate("execute").to(t)
        }

        n(119);

        class ra extends Yi.a {
            init() {
                const t = this.editor, e = t.t, n = function (t) {
                    const e = t.t, n = {
                        Paragraph: e("ay"),
                        "Heading 1": e("az"),
                        "Heading 2": e("ba"),
                        "Heading 3": e("bb"),
                        "Heading 4": e("bc"),
                        "Heading 5": e("bd"),
                        "Heading 6": e("be")
                    };
                    return t.config.get("heading.options").map(t => {
                        const e = n[t.title];
                        return e && e != t.title && (t.title = e), t
                    })
                }(t), i = e("f"), o = e("g");
                t.ui.componentFactory.add("heading", e => {
                    const r = {}, s = new h.a, a = t.commands.get("heading"), c = t.commands.get("paragraph"), l = [a];
                    for (const t of n) {
                        const e = {type: "button", model: new Gs({label: t.title, class: t.class, withText: !0})};
                        "paragraph" === t.model ? (e.model.bind("isOn").to(c, "value"), e.model.set("commandName", "paragraph"), l.push(c)) : (e.model.bind("isOn").to(a, "value", e => e === t.model), e.model.set({
                            commandName: "heading",
                            commandValue: t.model
                        })), s.add(e), r[t.model] = t.title
                    }
                    const d = ia(e);
                    return oa(d, s), d.buttonView.set({
                        isOn: !1,
                        withText: !0,
                        tooltip: o
                    }), d.extendTemplate({attributes: {class: ["ck-heading-dropdown"]}}), d.bind("isEnabled").toMany(l, "isEnabled", (...t) => t.some(t => t)), d.buttonView.bind("label").to(a, "value", c, "value", (t, e) => {
                        const n = t || e && "paragraph";
                        return r[n] ? r[n] : i
                    }), this.listenTo(d, "execute", e => {
                        t.execute(e.source.commandName, e.source.commandValue ? {value: e.source.commandValue} : void 0), t.editing.view.focus()
                    }), d
                })
            }
        }

        function sa(t) {
            for (const e of t.getChildren()) if (e && e.is("caption")) return e;
            return null
        }

        function aa(t) {
            const e = t.parent;
            return "figcaption" == t.name && e && "figure" == e.name && e.hasClass("image") ? {name: !0} : null
        }

        class ca extends Yi.a {
            init() {
                const t = this.editor, e = t.editing.view, n = t.model.schema, i = t.data, o = t.editing, r = t.t;
                n.register("caption", {
                    allowIn: "image",
                    allowContentOf: "$block",
                    isLimit: !0
                }), t.model.document.registerPostFixer(t => this._insertMissingModelCaptionElement(t)), t.conversion.for("upcast").elementToElement({
                    view: aa,
                    model: "caption"
                });
                i.downcastDispatcher.on("insert:caption", la(t => t.createContainerElement("figcaption"), !1));
                const s = function (t, e) {
                    return n => {
                        const i = n.createEditableElement("figcaption");
                        return n.setCustomProperty("imageCaption", !0, i), xi({view: t, element: i, text: e}), Or(i, n)
                    }
                }(e, r("am"));
                o.downcastDispatcher.on("insert:caption", la(s)), o.downcastDispatcher.on("insert", this._fixCaptionVisibility(t => t.item), {priority: "high"}), o.downcastDispatcher.on("remove", this._fixCaptionVisibility(t => t.position.parent), {priority: "high"}), e.document.registerPostFixer(t => this._updateCaptionVisibility(t))
            }

            _updateCaptionVisibility(t) {
                const e = this.editor.editing.mapper, n = this._lastSelectedCaption;
                let i;
                const o = this.editor.model.document.selection, r = o.getSelectedElement();
                if (r && r.is("image")) {
                    const t = sa(r);
                    i = e.toViewElement(t)
                }
                const s = da(o.getFirstPosition().parent);
                if (s && (i = e.toViewElement(s)), i) return n ? n === i ? ha(i, t) : (ua(n, t), this._lastSelectedCaption = i, ha(i, t)) : (this._lastSelectedCaption = i, ha(i, t));
                if (n) {
                    const e = ua(n, t);
                    return this._lastSelectedCaption = null, e
                }
                return !1
            }

            _fixCaptionVisibility(t) {
                return (e, n, i) => {
                    const o = da(t(n)), r = this.editor.editing.mapper, s = i.writer;
                    if (o) {
                        const t = r.toViewElement(o);
                        t && (o.childCount ? s.removeClass("ck-hidden", t) : s.addClass("ck-hidden", t))
                    }
                }
            }

            _insertMissingModelCaptionElement(t) {
                const e = this.editor.model, n = e.document.differ.getChanges(), i = [];
                for (const t of n) if ("insert" == t.type && "$text" != t.name) {
                    const n = t.position.nodeAfter;
                    if (n.is("image") && !sa(n) && i.push(n), !n.is("image") && n.childCount) for (const t of e.createRangeIn(n).getItems()) t.is("image") && !sa(t) && i.push(t)
                }
                for (const e of i) t.appendElement("caption", e);
                return !!i.length
            }
        }

        function la(t, e = !0) {
            return (n, i, o) => {
                const r = i.item;
                if ((r.childCount || e) && Nr(r.parent)) {
                    if (!o.consumable.consume(i.item, "insert")) return;
                    const e = o.mapper.toViewElement(i.range.start.parent), n = t(o.writer), s = o.writer;
                    r.childCount || s.addClass("ck-hidden", n), function (t, e, n, i) {
                        const o = i.writer.createPositionAt(n, "end");
                        i.writer.insert(o, t), i.mapper.bindElements(e, t)
                    }(n, i.item, e, o)
                }
            }
        }

        function da(t) {
            const e = t.getAncestors({includeSelf: !0}).find(t => "caption" == t.name);
            return e && e.parent && "image" == e.parent.name ? e : null
        }

        function ua(t, e) {
            return !t.childCount && !t.hasClass("ck-hidden") && (e.addClass("ck-hidden", t), !0)
        }

        function ha(t, e) {
            return !!t.hasClass("ck-hidden") && (e.removeClass("ck-hidden", t), !0)
        }

        n(179);

        class fa extends Gi.a {
            constructor(t, e) {
                super(t), this.defaultStyle = !1, this.styles = e.reduce((t, e) => (t[e.name] = e, e.isDefault && (this.defaultStyle = e.name), t), {})
            }

            refresh() {
                const t = this.editor.model.document.selection.getSelectedElement();
                if (this.isEnabled = Nr(t), t) if (t.hasAttribute("imageStyle")) {
                    const e = t.getAttribute("imageStyle");
                    this.value = !!this.styles[e] && e
                } else this.value = this.defaultStyle; else this.value = !1
            }

            execute(t) {
                const e = t.value, n = this.editor.model, i = n.document.selection.getSelectedElement();
                n.change(t => {
                    this.styles[e].isDefault ? t.removeAttribute("imageStyle", i) : t.setAttribute("imageStyle", e, i)
                })
            }
        }

        function ma(t, e) {
            for (const n of e) if (n.name === t) return n
        }

        var pa = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm2.5 3V12h11V7.5h-11zM4.061 6H15.94c.586 0 1.061.407 1.061.91v5.68c0 .503-.475.91-1.061.91H4.06c-.585 0-1.06-.407-1.06-.91V6.91C3 6.406 3.475 6 4.061 6zM2 16.5V15h16v1.5z"/></svg>',
            ga = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18 4.5V3H2v1.5h16zm0 3V6h-5.674v1.5H18zm0 3V9h-5.674v1.5H18zm0 3V12h-5.674v1.5H18zm-8.5-6V12h-6V7.5h6zm.818-1.5H2.682C2.305 6 2 6.407 2 6.91v5.68c0 .503.305.91.682.91h7.636c.377 0 .682-.407.682-.91V6.91c0-.503-.305-.91-.682-.91zM18 16.5V15H2v1.5h16z"/></svg>',
            ba = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm4.5 3V12h7V7.5h-7zM5.758 6h8.484c.419 0 .758.407.758.91v5.681c0 .502-.34.909-.758.909H5.758c-.419 0-.758-.407-.758-.91V6.91c0-.503.34-.91.758-.91zM2 16.5V15h16v1.5z"/></svg>',
            wa = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 4.5V3h16v1.5zm0 3V6h5.674v1.5zm0 3V9h5.674v1.5zm0 3V12h5.674v1.5zm8.5-6V12h6V7.5h-6zM9.682 6h7.636c.377 0 .682.407.682.91v5.68c0 .503-.305.91-.682.91H9.682c-.377 0-.682-.407-.682-.91V6.91c0-.503.305-.91.682-.91zM2 16.5V15h16v1.5z"/></svg>';
        const ka = {
            full: {name: "full", title: "Full size image", icon: pa, isDefault: !0},
            side: {name: "side", title: "Side image", icon: wa, className: "image-style-side"},
            alignLeft: {name: "alignLeft", title: "Left aligned image", icon: ga, className: "image-style-align-left"},
            alignCenter: {
                name: "alignCenter",
                title: "Centered image",
                icon: ba,
                className: "image-style-align-center"
            },
            alignRight: {
                name: "alignRight",
                title: "Right aligned image",
                icon: wa,
                className: "image-style-align-right"
            }
        }, _a = {full: pa, left: ga, right: wa, center: ba};

        function va(t = []) {
            return t.map(ya)
        }

        function ya(t) {
            if ("string" == typeof t) {
                const e = t;
                ka[e] ? t = Object.assign({}, ka[e]) : (console.warn(Object(v.a)("image-style-not-found: There is no such image style of given name."), {name: e}), t = {name: e})
            } else if (ka[t.name]) {
                const e = ka[t.name], n = Object.assign({}, t);
                for (const i in e) t.hasOwnProperty(i) || (n[i] = e[i]);
                t = n
            }
            return "string" == typeof t.icon && _a[t.icon] && (t.icon = _a[t.icon]), t
        }

        class xa extends Yi.a {
            static get pluginName() {
                return "ImageStyleEditing"
            }

            init() {
                const t = this.editor, e = t.model.schema, n = t.data, i = t.editing;
                t.config.define("image.styles", ["full", "side"]);
                const o = va(t.config.get("image.styles"));
                e.extend("image", {allowAttributes: "imageStyle"});
                const r = function (t) {
                    return (e, n, i) => {
                        if (!i.consumable.consume(n.item, e.name)) return;
                        const o = ma(n.attributeNewValue, t), r = ma(n.attributeOldValue, t),
                            s = i.mapper.toViewElement(n.item), a = i.writer;
                        r && a.removeClass(r.className, s), o && a.addClass(o.className, s)
                    }
                }(o);
                i.downcastDispatcher.on("attribute:imageStyle:image", r), n.downcastDispatcher.on("attribute:imageStyle:image", r), n.upcastDispatcher.on("element:figure", function (t) {
                    const e = t.filter(t => !t.isDefault);
                    return (t, n, i) => {
                        if (!n.modelRange) return;
                        const o = n.viewItem, r = Go(n.modelRange.getItems());
                        if (i.schema.checkAttribute(r, "imageStyle")) for (const t of e) i.consumable.consume(o, {classes: t.className}) && i.writer.setAttribute("imageStyle", t.name, r)
                    }
                }(o), {priority: "low"}), t.commands.add("imageStyle", new fa(t, o))
            }
        }

        n(181);

        class Aa extends Yi.a {
            static get pluginName() {
                return "ImageStyleUI"
            }

            get localizedDefaultStylesTitles() {
                const t = this.editor.t;
                return {
                    "Full size image": t("k"),
                    "Side image": t("l"),
                    "Left aligned image": t("m"),
                    "Centered image": t("n"),
                    "Right aligned image": t("o")
                }
            }

            init() {
                const t = function (t, e) {
                    for (const n of t) e[n.title] && (n.title = e[n.title]);
                    return t
                }(va(this.editor.config.get("image.styles")), this.localizedDefaultStylesTitles);
                for (const e of t) this._createButton(e)
            }

            _createButton(t) {
                const e = this.editor, n = `imageStyle:${t.name}`;
                e.ui.componentFactory.add(n, n => {
                    const i = e.commands.get("imageStyle"), o = new zo.a(n);
                    return o.set({
                        label: t.title,
                        icon: t.icon,
                        tooltip: !0,
                        isToggleable: !0
                    }), o.bind("isEnabled").to(i, "isEnabled"), o.bind("isOn").to(i, "value", e => e === t.name), this.listenTo(o, "execute", () => e.execute("imageStyle", {value: t.name})), o
                })
            }
        }

        class Ta extends Yi.a {
            static get requires() {
                return [us]
            }

            static get pluginName() {
                return "WidgetToolbarRepository"
            }

            init() {
                const t = this.editor;
                if (t.plugins.has("BalloonToolbar")) {
                    const e = t.plugins.get("BalloonToolbar");
                    this.listenTo(e, "show", e => {
                        (function (t) {
                            const e = t.getSelectedElement();
                            return !(!e || !Cr(e))
                        })(t.editing.view.document.selection) && e.stop()
                    }, {priority: "high"})
                }
                this._toolbarDefinitions = new Map, this._balloon = this.editor.plugins.get("ContextualBalloon"), this.listenTo(t.ui, "update", () => {
                    this._updateToolbarsVisibility()
                }), this.listenTo(t.ui.focusTracker, "change:isFocused", () => {
                    this._updateToolbarsVisibility()
                }, {priority: "low"})
            }

            destroy() {
                super.destroy();
                for (const t of this._toolbarDefinitions.values()) t.view.destroy()
            }

            register(t, {ariaLabel: e, items: n, getRelatedElement: i, balloonClassName: o = "ck-toolbar-container"}) {
                const r = this.editor, s = r.t, a = new Hi(r.locale);
                if (a.ariaLabel = e || s("as"), this._toolbarDefinitions.has(t)) throw new v.b("widget-toolbar-duplicated: Toolbar with the given id was already added.", this, {toolbarId: t});
                a.fillFromConfig(n, r.ui.componentFactory), this._toolbarDefinitions.set(t, {
                    view: a,
                    getRelatedElement: i,
                    balloonClassName: o
                })
            }

            _updateToolbarsVisibility() {
                let t = 0, e = null, n = null;
                for (const i of this._toolbarDefinitions.values()) {
                    const o = i.getRelatedElement(this.editor.editing.view.document.selection);
                    if (this.editor.ui.focusTracker.isFocused) if (o) {
                        const r = o.getAncestors().length;
                        r > t && (t = r, e = o, n = i)
                    } else this._isToolbarInBalloon(i) && this._hideToolbar(i); else this._isToolbarVisible(i) && this._hideToolbar(i)
                }
                n && this._showToolbar(n, e)
            }

            _hideToolbar(t) {
                this._balloon.remove(t.view), this.stopListening(this._balloon, "change:visibleView")
            }

            _showToolbar(t, e) {
                this._isToolbarVisible(t) ? Ca(this.editor, e) : this._isToolbarInBalloon(t) || (this._balloon.add({
                    view: t.view,
                    position: Pa(this.editor, e),
                    balloonClassName: t.balloonClassName
                }), this.listenTo(this._balloon, "change:visibleView", () => {
                    for (const t of this._toolbarDefinitions.values()) if (this._isToolbarVisible(t)) {
                        const e = t.getRelatedElement(this.editor.editing.view.document.selection);
                        Ca(this.editor, e)
                    }
                }))
            }

            _isToolbarVisible(t) {
                return this._balloon.visibleView === t.view
            }

            _isToolbarInBalloon(t) {
                return this._balloon.hasView(t.view)
            }
        }

        function Ca(t, e) {
            const n = t.plugins.get("ContextualBalloon"), i = Pa(t, e);
            n.updatePosition(i)
        }

        function Pa(t, e) {
            const n = t.editing.view, i = os.defaultPositions;
            return {
                target: n.domConverter.mapViewToDom(e),
                positions: [i.northArrowSouth, i.northArrowSouthWest, i.northArrowSouthEast, i.southArrowNorth, i.southArrowNorthWest, i.southArrowNorthEast]
            }
        }

        function Ma(t, e, n) {
            return n.createRange(Oa(t, e, !0, n), Oa(t, e, !1, n))
        }

        function Oa(t, e, n, i) {
            let o = t.textNode || (n ? t.nodeBefore : t.nodeAfter), r = null;
            for (; o && o.getAttribute("linkHref") == e;) r = o, o = n ? o.previousSibling : o.nextSibling;
            return r ? i.createPositionAt(r, n ? "before" : "after") : t
        }

        class Sa extends Gi.a {
            constructor(t) {
                super(t), this.manualDecorators = new h.a
            }

            restoreManualDecoratorStates() {
                for (const t of this.manualDecorators) t.value = this._getDecoratorStateFromModel(t.id)
            }

            refresh() {
                const t = this.editor.model, e = t.document;
                this.value = e.selection.getAttribute("linkHref");
                for (const t of this.manualDecorators) t.value = this._getDecoratorStateFromModel(t.id);
                this.isEnabled = t.schema.checkAttributeInSelection(e.selection, "linkHref")
            }

            execute(t, e = {}) {
                const n = this.editor.model, i = n.document.selection, o = [], r = [];
                for (const t in e) e[t] ? o.push(t) : r.push(t);
                n.change(e => {
                    if (i.isCollapsed) {
                        const s = i.getFirstPosition();
                        if (i.hasAttribute("linkHref")) {
                            const a = Ma(s, i.getAttribute("linkHref"), n);
                            e.setAttribute("linkHref", t, a), o.forEach(t => {
                                e.setAttribute(t, !0, a)
                            }), r.forEach(t => {
                                e.removeAttribute(t, a)
                            }), e.setSelection(a)
                        } else if ("" !== t) {
                            const r = Object(be.a)(i.getAttributes());
                            r.set("linkHref", t), o.forEach(t => {
                                r.set(t, !0)
                            });
                            const a = e.createText(t, r);
                            n.insertContent(a, s), e.setSelection(e.createRangeOn(a))
                        }
                    } else {
                        const s = n.schema.getValidRanges(i.getRanges(), "linkHref");
                        for (const n of s) e.setAttribute("linkHref", t, n), o.forEach(t => {
                            e.setAttribute(t, !0, n)
                        }), r.forEach(t => {
                            e.removeAttribute(t, n)
                        })
                    }
                })
            }

            _getDecoratorStateFromModel(t) {
                return this.editor.model.document.selection.getAttribute(t) || !1
            }
        }

        class Ea extends Gi.a {
            refresh() {
                this.isEnabled = this.editor.model.document.selection.hasAttribute("linkHref")
            }

            execute() {
                const t = this.editor, e = this.editor.model, n = e.document.selection, i = t.commands.get("link");
                e.change(t => {
                    const o = n.isCollapsed ? [Ma(n.getFirstPosition(), n.getAttribute("linkHref"), e)] : n.getRanges();
                    for (const e of o) if (t.removeAttribute("linkHref", e), i) for (const n of i.manualDecorators) t.removeAttribute(n.id, e)
                })
            }
        }

        var Ia = function (t, e, n) {
            var i = -1, o = t.length;
            e < 0 && (e = -e > o ? 0 : o + e), (n = n > o ? o : n) < 0 && (n += o), o = e > n ? 0 : n - e >>> 0, e >>>= 0;
            for (var r = Array(o); ++i < o;) r[i] = t[i + e];
            return r
        };
        var Na = function (t, e, n) {
            var i = t.length;
            return n = void 0 === n ? i : n, !e && n >= i ? t : Ia(t, e, n)
        }, ja = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
        var Ra = function (t) {
            return ja.test(t)
        };
        var Da = function (t) {
                return t.split("")
            }, La = "[\\ud800-\\udfff]", Va = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            za = "\\ud83c[\\udffb-\\udfff]", Ba = "[^\\ud800-\\udfff]", Fa = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Ua = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ha = "(?:" + Va + "|" + za + ")" + "?",
            qa = "[\\ufe0e\\ufe0f]?" + Ha + ("(?:\\u200d(?:" + [Ba, Fa, Ua].join("|") + ")[\\ufe0e\\ufe0f]?" + Ha + ")*"),
            Wa = "(?:" + [Ba + Va + "?", Va, Fa, Ua, La].join("|") + ")",
            Ya = RegExp(za + "(?=" + za + ")|" + Wa + qa, "g");
        var $a = function (t) {
            return t.match(Ya) || []
        };
        var Ga = function (t) {
            return Ra(t) ? $a(t) : Da(t)
        }, Qa = n(40);
        var Ja = function (t, e) {
            for (var n = -1, i = null == t ? 0 : t.length, o = Array(i); ++n < i;) o[n] = e(t[n], n, t);
            return o
        }, Ka = 1 / 0, Za = Qa.a ? Qa.a.prototype : void 0, Xa = Za ? Za.toString : void 0;
        var tc = function t(e) {
            if ("string" == typeof e) return e;
            if (Object($e.a)(e)) return Ja(e, t) + "";
            if (wt(e)) return Xa ? Xa.call(e) : "";
            var n = e + "";
            return "0" == n && 1 / e == -Ka ? "-0" : n
        };
        var ec = function (t) {
            return null == t ? "" : tc(t)
        };
        var nc = function (t) {
            return function (e) {
                e = ec(e);
                var n = Ra(e) ? Ga(e) : void 0, i = n ? n[0] : e.charAt(0), o = n ? Na(n, 1).join("") : e.slice(1);
                return i[t]() + o
            }
        }("toUpperCase");
        const ic = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,
            oc = /^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i;

        function rc(t, e) {
            const n = e.createAttributeElement("a", {href: t}, {priority: 5});
            return e.setCustomProperty("link", !0, n), n
        }

        function sc(t) {
            return function (t) {
                return t.replace(ic, "").match(oc)
            }(t = String(t)) ? t : "#"
        }

        class ac {
            constructor() {
                this._definitions = new Set
            }

            get length() {
                return this._definitions.size
            }

            add(t) {
                Array.isArray(t) ? t.forEach(t => this._definitions.add(t)) : this._definitions.add(t)
            }

            getDispatcher() {
                return t => {
                    t.on("attribute:linkHref", (t, e, n) => {
                        if (!n.consumable.test(e.item, "attribute:linkHref")) return;
                        const i = n.writer, o = i.document.selection;
                        for (const t of this._definitions) {
                            const r = i.createAttributeElement("a", t.attributes, {priority: 5});
                            i.setCustomProperty("link", !0, r), t.callback(e.attributeNewValue) ? e.item.is("selection") ? i.wrap(o.getFirstRange(), r) : i.wrap(n.mapper.toViewRange(e.range), r) : i.unwrap(n.mapper.toViewRange(e.range), r)
                        }
                    }, {priority: "high"})
                }
            }
        }

        class cc {
            constructor({id: t, label: e, attributes: n}) {
                this.id = t, this.set("value"), this.label = e, this.attributes = n
            }
        }

        Object(f.a)(cc, m.a);

        class lc {
            constructor(t, e, n) {
                this.model = t, this.attribute = n, this._modelSelection = t.document.selection, this._overrideUid = null, this._isNextGravityRestorationSkipped = !1, e.listenTo(this._modelSelection, "change:range", (t, e) => {
                    this._isNextGravityRestorationSkipped ? this._isNextGravityRestorationSkipped = !1 : this._isGravityOverridden && (!e.directChange && dc(this._modelSelection.getFirstPosition(), n) || this._restoreGravity())
                })
            }

            handleForwardMovement(t, e) {
                const n = this.attribute;
                if (!(this._isGravityOverridden || t.isAtStart && this._hasSelectionAttribute)) return fc(t, n) && this._hasSelectionAttribute ? (this._preventCaretMovement(e), this._removeSelectionAttribute(), !0) : uc(t, n) ? (this._preventCaretMovement(e), this._overrideGravity(), !0) : hc(t, n) && this._hasSelectionAttribute ? (this._preventCaretMovement(e), this._overrideGravity(), !0) : void 0
            }

            handleBackwardMovement(t, e) {
                const n = this.attribute;
                return this._isGravityOverridden ? fc(t, n) && this._hasSelectionAttribute ? (this._preventCaretMovement(e), this._restoreGravity(), this._removeSelectionAttribute(), !0) : (this._preventCaretMovement(e), this._restoreGravity(), t.isAtStart && this._removeSelectionAttribute(), !0) : fc(t, n) && !this._hasSelectionAttribute ? (this._preventCaretMovement(e), this._setSelectionAttributeFromTheNodeBefore(t), !0) : t.isAtEnd && hc(t, n) ? this._hasSelectionAttribute ? void (mc(t, n) && (this._skipNextAutomaticGravityRestoration(), this._overrideGravity())) : (this._preventCaretMovement(e), this._setSelectionAttributeFromTheNodeBefore(t), !0) : t.isAtStart ? this._hasSelectionAttribute ? (this._removeSelectionAttribute(), this._preventCaretMovement(e), !0) : void 0 : void (mc(t, n) && (this._skipNextAutomaticGravityRestoration(), this._overrideGravity()))
            }

            get _isGravityOverridden() {
                return !!this._overrideUid
            }

            get _hasSelectionAttribute() {
                return this._modelSelection.hasAttribute(this.attribute)
            }

            _overrideGravity() {
                this._overrideUid = this.model.change(t => t.overrideSelectionGravity())
            }

            _restoreGravity() {
                this.model.change(t => {
                    t.restoreSelectionGravity(this._overrideUid), this._overrideUid = null
                })
            }

            _preventCaretMovement(t) {
                t.preventDefault()
            }

            _removeSelectionAttribute() {
                this.model.change(t => {
                    t.removeSelectionAttribute(this.attribute)
                })
            }

            _setSelectionAttributeFromTheNodeBefore(t) {
                const e = this.attribute;
                this.model.change(n => {
                    n.setSelectionAttribute(this.attribute, t.nodeBefore.getAttribute(e))
                })
            }

            _skipNextAutomaticGravityRestoration() {
                this._isNextGravityRestorationSkipped = !0
            }
        }

        function dc(t, e) {
            return uc(t, e) || hc(t, e)
        }

        function uc(t, e) {
            const {nodeBefore: n, nodeAfter: i} = t, o = !!n && n.hasAttribute(e);
            return !!i && i.hasAttribute(e) && (!o || n.getAttribute(e) !== i.getAttribute(e))
        }

        function hc(t, e) {
            const {nodeBefore: n, nodeAfter: i} = t, o = !!n && n.hasAttribute(e), r = !!i && i.hasAttribute(e);
            return o && (!r || n.getAttribute(e) !== i.getAttribute(e))
        }

        function fc(t, e) {
            const {nodeBefore: n, nodeAfter: i} = t, o = !!n && n.hasAttribute(e);
            if (!!i && i.hasAttribute(e) && o) return i.getAttribute(e) !== n.getAttribute(e)
        }

        function mc(t, e) {
            return dc(t.getShiftedBy(-1), e)
        }

        n(183);
        const pc = "ck-link_selected", gc = "automatic", bc = "manual", wc = /^(https?:)?\/\//;

        class kc extends Yi.a {
            constructor(t) {
                super(t), t.config.define("link", {addTargetToExternalLinks: !1})
            }

            init() {
                const t = this.editor, e = t.locale;
                t.model.schema.extend("$text", {allowAttributes: "linkHref"}), t.conversion.for("dataDowncast").attributeToElement({
                    model: "linkHref",
                    view: rc
                }), t.conversion.for("editingDowncast").attributeToElement({
                    model: "linkHref",
                    view: (t, e) => rc(sc(t), e)
                }), t.conversion.for("upcast").elementToAttribute({
                    view: {name: "a", attributes: {href: !0}},
                    model: {key: "linkHref", value: t => t.getAttribute("href")}
                }), t.commands.add("link", new Sa(t)), t.commands.add("unlink", new Ea(t));
                const n = function (t, e) {
                    const n = {"Open in a new tab": t("bz"), Downloadable: t("ca")};
                    return e.forEach(t => (t.label && n[t.label] && (t.label = n[t.label]), t)), e
                }(t.t, function (t) {
                    const e = [];
                    if (t) for (const [n, i] of Object.entries(t)) {
                        const t = Object.assign({}, i, {id: `link${nc(n)}`});
                        e.push(t)
                    }
                    return e
                }(t.config.get("link.decorators")));
                this._enableAutomaticDecorators(n.filter(t => t.mode === gc)), this._enableManualDecorators(n.filter(t => t.mode === bc)), function ({view: t, model: e, emitter: n, attribute: i, locale: o}) {
                    const r = new lc(e, n, i), s = e.document.selection;
                    n.listenTo(t.document, "keydown", (t, e) => {
                        if (!s.isCollapsed) return;
                        if (e.shiftKey || e.altKey || e.ctrlKey) return;
                        const n = e.keyCode == O.c.arrowright, i = e.keyCode == O.c.arrowleft;
                        if (!n && !i) return;
                        const a = s.getFirstPosition(), c = o.contentLanguageDirection;
                        let l;
                        (l = "ltr" === c && n || "rtl" === c && i ? r.handleForwardMovement(a, e) : r.handleBackwardMovement(a, e)) && t.stop()
                    }, {priority: Ws.a.get("high") + 1})
                }({
                    view: t.editing.view,
                    model: t.model,
                    emitter: this,
                    attribute: "linkHref",
                    locale: e
                }), this._setupLinkHighlight()
            }

            _enableAutomaticDecorators(t) {
                const e = this.editor, n = new ac;
                e.config.get("link.addTargetToExternalLinks") && n.add({
                    id: "linkIsExternal",
                    mode: gc,
                    callback: t => wc.test(t),
                    attributes: {target: "_blank", rel: "noopener noreferrer"}
                }), n.add(t), n.length && e.conversion.for("downcast").add(n.getDispatcher())
            }

            _enableManualDecorators(t) {
                if (!t.length) return;
                const e = this.editor, n = e.commands.get("link").manualDecorators;
                t.forEach(t => {
                    e.model.schema.extend("$text", {allowAttributes: t.id}), n.add(new cc(t)), e.conversion.for("downcast").attributeToElement({
                        model: t.id,
                        view: (e, i) => {
                            if (e) {
                                const e = n.get(t.id).attributes, o = i.createAttributeElement("a", e, {priority: 5});
                                return i.setCustomProperty("link", !0, o), o
                            }
                        }
                    }), e.conversion.for("upcast").elementToAttribute({
                        view: {
                            name: "a",
                            attributes: n.get(t.id).attributes
                        }, model: {key: t.id}
                    })
                })
            }

            _setupLinkHighlight() {
                const t = this.editor, e = t.editing.view, n = new Set;
                e.document.registerPostFixer(e => {
                    const i = t.model.document.selection;
                    let o = !1;
                    if (i.hasAttribute("linkHref")) {
                        const r = Ma(i.getFirstPosition(), i.getAttribute("linkHref"), t.model),
                            s = t.editing.mapper.toViewRange(r);
                        for (const t of s.getItems()) t.is("a") && !t.hasClass(pc) && (e.addClass(pc, t), n.add(t), o = !0)
                    }
                    return o
                }), t.conversion.for("editingDowncast").add(t => {
                    function i() {
                        e.change(t => {
                            for (const e of n.values()) t.removeClass(pc, e), n.delete(e)
                        })
                    }

                    t.on("insert", i, {priority: "highest"}), t.on("remove", i, {priority: "highest"}), t.on("attribute", i, {priority: "highest"}), t.on("selection", i, {priority: "highest"})
                })
            }
        }

        class _c extends dt.a {
            constructor(t) {
                super(t), this.domEventType = "click"
            }

            onDomEvent(t) {
                this.fire(t.type, t)
            }
        }

        n(185);

        class vc extends Oi.a {
            constructor(t, e = []) {
                super(t);
                const n = t.t;
                this.focusTracker = new _i, this.keystrokes = new ui, this.urlInputView = this._createUrlInput(), this.saveButtonView = this._createButton(n("bg"), Jr, "ck-button-save"), this.saveButtonView.type = "submit", this.cancelButtonView = this._createButton(n("bh"), Kr, "ck-button-cancel", "cancel"), this._manualDecoratorSwitches = this._createManualDecoratorSwitches(e), this.children = this._createFormChildren(e), this._focusables = new Yr.a, this._focusCycler = new Bi({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: "shift + tab", focusNext: "tab"}
                });
                const i = ["ck", "ck-link-form"];
                e.length && i.push("ck-link-form_layout-vertical"), this.setTemplate({
                    tag: "form",
                    attributes: {class: i, tabindex: "-1"},
                    children: this.children
                })
            }

            getDecoratorSwitchesState() {
                return Array.from(this._manualDecoratorSwitches).reduce((t, e) => (t[e.name] = e.isOn, t), {})
            }

            render() {
                super.render(), Qr({view: this}), [this.urlInputView, ...this._manualDecoratorSwitches, this.saveButtonView, this.cancelButtonView].forEach(t => {
                    this._focusables.add(t), this.focusTracker.add(t.element)
                }), this.keystrokes.listenTo(this.element)
            }

            focus() {
                this._focusCycler.focusFirst()
            }

            _createUrlInput() {
                const t = this.locale.t, e = new $r(this.locale, Gr);
                return e.label = t("bp"), e.inputView.placeholder = "https://example.com", e
            }

            _createButton(t, e, n, i) {
                const o = new zo.a(this.locale);
                return o.set({
                    label: t,
                    icon: e,
                    tooltip: !0
                }), o.extendTemplate({attributes: {class: n}}), i && o.delegate("execute").to(this, i), o
            }

            _createManualDecoratorSwitches(t) {
                const e = this.createCollection();
                for (const n of t) {
                    const t = new na(this.locale);
                    t.set({
                        name: n.id,
                        label: n.label,
                        withText: !0
                    }), t.bind("isOn").to(n, "value"), t.on("execute", () => {
                        n.set("value", !t.isOn)
                    }), e.add(t)
                }
                return e
            }

            _createFormChildren(t) {
                const e = this.createCollection();
                if (e.add(this.urlInputView), t.length) {
                    const t = new Oi.a;
                    t.setTemplate({
                        tag: "ul",
                        children: this._manualDecoratorSwitches.map(t => ({
                            tag: "li",
                            children: [t],
                            attributes: {class: ["ck", "ck-list__item"]}
                        })),
                        attributes: {class: ["ck", "ck-reset", "ck-list"]}
                    }), e.add(t)
                }
                return e.add(this.saveButtonView), e.add(this.cancelButtonView), e
            }
        }

        var yc = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562l-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>',
            xc = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 17.37l-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506L13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5L9.375 17H19v1.5H8z"/></svg>';
        n(187);

        class Ac extends Oi.a {
            constructor(t) {
                super(t);
                const e = t.t;
                this.focusTracker = new _i, this.keystrokes = new ui, this.previewButtonView = this._createPreviewButton(), this.unlinkButtonView = this._createButton(e("bl"), yc, "unlink"), this.editButtonView = this._createButton(e("bm"), xc, "edit"), this.set("href"), this._focusables = new Yr.a, this._focusCycler = new Bi({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: "shift + tab", focusNext: "tab"}
                }), this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck", "ck-link-actions"], tabindex: "-1"},
                    children: [this.previewButtonView, this.editButtonView, this.unlinkButtonView]
                })
            }

            render() {
                super.render(), [this.previewButtonView, this.editButtonView, this.unlinkButtonView].forEach(t => {
                    this._focusables.add(t), this.focusTracker.add(t.element)
                }), this.keystrokes.listenTo(this.element)
            }

            focus() {
                this._focusCycler.focusFirst()
            }

            _createButton(t, e, n) {
                const i = new zo.a(this.locale);
                return i.set({label: t, icon: e, tooltip: !0}), i.delegate("execute").to(this, n), i
            }

            _createPreviewButton() {
                const t = new zo.a(this.locale), e = this.bindTemplate, n = this.t;
                return t.set({
                    withText: !0,
                    tooltip: n("bn")
                }), t.extendTemplate({
                    attributes: {
                        class: ["ck", "ck-link-actions__preview"],
                        href: e.to("href", t => t && sc(t)),
                        target: "_blank"
                    }
                }), t.bind("label").to(this, "href", t => t || n("bo")), t.bind("isEnabled").to(this, "href", t => !!t), t.template.tag = "a", t.template.eventListeners = {}, t
            }
        }

        var Tc = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>';
        const Cc = "Ctrl+K";

        class Pc extends Yi.a {
            static get requires() {
                return [us]
            }

            static get pluginName() {
                return "LinkUI"
            }

            init() {
                const t = this.editor;
                t.editing.view.addObserver(_c), this.actionsView = this._createActionsView(), this.formView = this._createFormView(), this._balloon = t.plugins.get(us), this._createToolbarLinkButton(), this._enableUserBalloonInteractions()
            }

            destroy() {
                super.destroy(), this.formView.destroy()
            }

            _createActionsView() {
                const t = this.editor, e = new Ac(t.locale), n = t.commands.get("link"), i = t.commands.get("unlink");
                return e.bind("href").to(n, "value"), e.editButtonView.bind("isEnabled").to(n), e.unlinkButtonView.bind("isEnabled").to(i), this.listenTo(e, "edit", () => {
                    this._addFormView()
                }), this.listenTo(e, "unlink", () => {
                    t.execute("unlink"), this._hideUI()
                }), e.keystrokes.set("Esc", (t, e) => {
                    this._hideUI(), e()
                }), e.keystrokes.set(Cc, (t, e) => {
                    this._addFormView(), e()
                }), e
            }

            _createFormView() {
                const t = this.editor, e = t.commands.get("link"), n = new vc(t.locale, e.manualDecorators);
                return n.urlInputView.bind("value").to(e, "value"), n.urlInputView.bind("isReadOnly").to(e, "isEnabled", t => !t), n.saveButtonView.bind("isEnabled").to(e), this.listenTo(n, "submit", () => {
                    t.execute("link", n.urlInputView.inputView.element.value, n.getDecoratorSwitchesState()), this._closeFormView()
                }), this.listenTo(n, "cancel", () => {
                    this._closeFormView()
                }), n.keystrokes.set("Esc", (t, e) => {
                    this._closeFormView(), e()
                }), n
            }

            _createToolbarLinkButton() {
                const t = this.editor, e = t.commands.get("link"), n = t.t;
                t.keystrokes.set(Cc, (t, n) => {
                    n(), e.isEnabled && this._showUI(!0)
                }), t.ui.componentFactory.add("link", t => {
                    const i = new zo.a(t);
                    return i.isEnabled = !0, i.label = n("ar"), i.icon = Tc, i.keystroke = Cc, i.tooltip = !0, i.isToggleable = !0, i.bind("isEnabled").to(e, "isEnabled"), i.bind("isOn").to(e, "value", t => !!t), this.listenTo(i, "execute", () => this._showUI(!0)), i
                })
            }

            _enableUserBalloonInteractions() {
                const t = this.editor.editing.view.document;
                this.listenTo(t, "click", () => {
                    this._getSelectedLinkElement() && this._showUI()
                }), this.editor.keystrokes.set("Tab", (t, e) => {
                    this._areActionsVisible && !this.actionsView.focusTracker.isFocused && (this.actionsView.focus(), e())
                }, {priority: "high"}), this.editor.keystrokes.set("Esc", (t, e) => {
                    this._isUIVisible && (this._hideUI(), e())
                }), Wr({
                    emitter: this.formView,
                    activator: () => this._isUIInPanel,
                    contextElements: [this._balloon.view.element],
                    callback: () => this._hideUI()
                })
            }

            _addActionsView() {
                this._areActionsInPanel || this._balloon.add({
                    view: this.actionsView,
                    position: this._getBalloonPositionData()
                })
            }

            _addFormView() {
                if (this._isFormInPanel) return;
                const t = this.editor.commands.get("link");
                this._balloon.add({
                    view: this.formView,
                    position: this._getBalloonPositionData()
                }), this._balloon.visibleView === this.formView && this.formView.urlInputView.select(), this.formView.urlInputView.inputView.element.value = t.value || ""
            }

            _closeFormView() {
                const t = this.editor.commands.get("link");
                t.restoreManualDecoratorStates(), void 0 !== t.value ? this._removeFormView() : this._hideUI()
            }

            _removeFormView() {
                this._isFormInPanel && (this.formView.saveButtonView.focus(), this._balloon.remove(this.formView), this.editor.editing.view.focus())
            }

            _showUI(t = !1) {
                this.editor.commands.get("link").isEnabled && (this._getSelectedLinkElement() ? (this._areActionsVisible ? this._addFormView() : this._addActionsView(), t && this._balloon.showStack("main")) : (this._addActionsView(), t && this._balloon.showStack("main"), this._addFormView()), this._startUpdatingUI())
            }

            _hideUI() {
                if (!this._isUIInPanel) return;
                const t = this.editor;
                this.stopListening(t.ui, "update"), this.stopListening(this._balloon, "change:visibleView"), t.editing.view.focus(), this._removeFormView(), this._balloon.remove(this.actionsView)
            }

            _startUpdatingUI() {
                const t = this.editor, e = t.editing.view.document;
                let n = this._getSelectedLinkElement(), i = r();
                const o = () => {
                    const t = this._getSelectedLinkElement(), e = r();
                    n && !t || !n && e !== i ? this._hideUI() : this._isUIVisible && this._balloon.updatePosition(this._getBalloonPositionData()), n = t, i = e
                };

                function r() {
                    return e.selection.focus.getAncestors().reverse().find(t => t.is("element"))
                }

                this.listenTo(t.ui, "update", o), this.listenTo(this._balloon, "change:visibleView", o)
            }

            get _isFormInPanel() {
                return this._balloon.hasView(this.formView)
            }

            get _areActionsInPanel() {
                return this._balloon.hasView(this.actionsView)
            }

            get _areActionsVisible() {
                return this._balloon.visibleView === this.actionsView
            }

            get _isUIInPanel() {
                return this._isFormInPanel || this._areActionsInPanel
            }

            get _isUIVisible() {
                return this._balloon.visibleView == this.formView || this._areActionsVisible
            }

            _getBalloonPositionData() {
                const t = this.editor.editing.view, e = t.document, n = this._getSelectedLinkElement();
                return {target: n ? t.domConverter.mapViewToDom(n) : t.domConverter.viewRangeToDom(e.selection.getFirstRange())}
            }

            _getSelectedLinkElement() {
                const t = this.editor.editing.view, e = t.document.selection;
                if (e.isCollapsed) return Mc(e.getFirstPosition());
                {
                    const n = e.getFirstRange().getTrimmed(), i = Mc(n.start), o = Mc(n.end);
                    return i && i == o && t.createRangeIn(i).getTrimmed().isEqual(n) ? i : null
                }
            }
        }

        function Mc(t) {
            return t.getAncestors().find(t => (function (t) {
                return t.is("attributeElement") && !!t.getCustomProperty("link")
            })(t))
        }

        class Oc extends Gi.a {
            constructor(t, e) {
                super(t), this.type = e
            }

            refresh() {
                this.value = this._getValue(), this.isEnabled = this._checkEnabled()
            }

            execute() {
                const t = this.editor.model, e = t.document,
                    n = Array.from(e.selection.getSelectedBlocks()).filter(e => Ec(e, t.schema)), i = !0 === this.value;
                t.change(t => {
                    if (i) {
                        let e = n[n.length - 1].nextSibling, i = Number.POSITIVE_INFINITY, o = [];
                        for (; e && "listItem" == e.name && 0 !== e.getAttribute("listIndent");) {
                            const t = e.getAttribute("listIndent");
                            t < i && (i = t);
                            const n = t - i;
                            o.push({element: e, listIndent: n}), e = e.nextSibling
                        }
                        o = o.reverse();
                        for (const e of o) t.setAttribute("listIndent", e.listIndent, e.element)
                    }
                    if (!i) {
                        let t = Number.POSITIVE_INFINITY;
                        for (const e of n) e.is("listItem") && e.getAttribute("listIndent") < t && (t = e.getAttribute("listIndent"));
                        Sc(n, !0, t = 0 === t ? 1 : t), Sc(n, !1, t)
                    }
                    for (const e of n.reverse()) i && "listItem" == e.name ? t.rename(e, "paragraph") : i || "listItem" == e.name ? i || "listItem" != e.name || e.getAttribute("listType") == this.type || t.setAttribute("listType", this.type, e) : (t.setAttributes({
                        listType: this.type,
                        listIndent: 0
                    }, e), t.rename(e, "listItem"))
                })
            }

            _getValue() {
                const t = Go(this.editor.model.document.selection.getSelectedBlocks());
                return !!t && t.is("listItem") && t.getAttribute("listType") == this.type
            }

            _checkEnabled() {
                if (this.value) return !0;
                const t = this.editor.model.document.selection, e = this.editor.model.schema,
                    n = Go(t.getSelectedBlocks());
                return !!n && Ec(n, e)
            }
        }

        function Sc(t, e, n) {
            const i = e ? t[0] : t[t.length - 1];
            if (i.is("listItem")) {
                let o = i[e ? "previousSibling" : "nextSibling"], r = i.getAttribute("listIndent");
                for (; o && o.is("listItem") && o.getAttribute("listIndent") >= n;) r > o.getAttribute("listIndent") && (r = o.getAttribute("listIndent")), o.getAttribute("listIndent") == r && t[e ? "unshift" : "push"](o), o = o[e ? "previousSibling" : "nextSibling"]
            }
        }

        function Ec(t, e) {
            return e.checkChild(t.parent, "listItem") && !e.isObject(t)
        }

        class Ic extends Gi.a {
            constructor(t, e) {
                super(t), this._indentBy = "forward" == e ? 1 : -1
            }

            refresh() {
                this.isEnabled = this._checkEnabled()
            }

            execute() {
                const t = this.editor.model, e = t.document;
                let n = Array.from(e.selection.getSelectedBlocks());
                t.change(t => {
                    const e = n[n.length - 1];
                    let i = e.nextSibling;
                    for (; i && "listItem" == i.name && i.getAttribute("listIndent") > e.getAttribute("listIndent");) n.push(i), i = i.nextSibling;
                    this._indentBy < 0 && (n = n.reverse());
                    for (const e of n) {
                        const n = e.getAttribute("listIndent") + this._indentBy;
                        n < 0 ? t.rename(e, "paragraph") : t.setAttribute("listIndent", n, e)
                    }
                })
            }

            _checkEnabled() {
                const t = Go(this.editor.model.document.selection.getSelectedBlocks());
                if (!t || !t.is("listItem")) return !1;
                if (this._indentBy > 0) {
                    const e = t.getAttribute("listIndent"), n = t.getAttribute("listType");
                    let i = t.previousSibling;
                    for (; i && i.is("listItem") && i.getAttribute("listIndent") >= e;) {
                        if (i.getAttribute("listIndent") == e) return i.getAttribute("listType") == n;
                        i = i.previousSibling
                    }
                    return !1
                }
                return !0
            }
        }

        function Nc(t, e) {
            const n = e.mapper, i = e.writer, o = "numbered" == t.getAttribute("listType") ? "ol" : "ul",
                r = function (t) {
                    const e = t.createContainerElement("li");
                    return e.getFillerOffset = zc, e
                }(i), s = i.createContainerElement(o, null);
            return i.insert(i.createPositionAt(s, 0), r), n.bindElements(t, r), r
        }

        function jc(t, e, n, i) {
            const o = e.parent, r = n.mapper, s = n.writer;
            let a = r.toViewPosition(i.createPositionBefore(t));
            const c = Lc(t.previousSibling, {
                sameIndent: !0,
                smallerIndent: !0,
                listIndent: t.getAttribute("listIndent")
            }), l = t.previousSibling;
            if (c && c.getAttribute("listIndent") == t.getAttribute("listIndent")) {
                const t = r.toViewElement(c);
                a = s.breakContainer(s.createPositionAfter(t))
            } else a = l && "listItem" == l.name ? r.toViewPosition(i.createPositionAt(l, "end")) : r.toViewPosition(i.createPositionBefore(t));
            if (a = Dc(a), s.insert(a, o), l && "listItem" == l.name) {
                const t = r.toViewElement(l),
                    n = s.createRange(s.createPositionAt(t, 0), a).getWalker({ignoreElementEnd: !0});
                for (const t of n) if (t.item.is("li")) {
                    const i = s.breakContainer(s.createPositionBefore(t.item)), o = t.item.parent,
                        r = s.createPositionAt(e, "end");
                    Rc(s, r.nodeBefore, r.nodeAfter), s.move(s.createRangeOn(o), r), n.position = i
                }
            } else {
                const n = o.nextSibling;
                if (n && (n.is("ul") || n.is("ol"))) {
                    let i = null;
                    for (const e of n.getChildren()) {
                        const n = r.toModelElement(e);
                        if (!(n && n.getAttribute("listIndent") > t.getAttribute("listIndent"))) break;
                        i = e
                    }
                    i && (s.breakContainer(s.createPositionAfter(i)), s.move(s.createRangeOn(i.parent), s.createPositionAt(e, "end")))
                }
            }
            Rc(s, o, o.nextSibling), Rc(s, o.previousSibling, o)
        }

        function Rc(t, e, n) {
            return !e || !n || "ul" != e.name && "ol" != e.name ? null : e.name != n.name || e.getAttribute("class") !== n.getAttribute("class") ? null : t.mergeContainers(t.createPositionAfter(e))
        }

        function Dc(t) {
            return t.getLastMatchingPosition(t => t.item.is("uiElement"))
        }

        function Lc(t, e) {
            const n = !!e.sameIndent, i = !!e.smallerIndent, o = e.listIndent;
            let r = t;
            for (; r && "listItem" == r.name;) {
                const t = r.getAttribute("listIndent");
                if (n && o == t || i && o > t) return r;
                r = r.previousSibling
            }
            return null
        }

        function Vc(t, e, n, i) {
            t.ui.componentFactory.add(e, o => {
                const r = t.commands.get(e), s = new zo.a(o);
                return s.set({
                    label: n,
                    icon: i,
                    tooltip: !0,
                    isToggleable: !0
                }), s.bind("isOn", "isEnabled").to(r, "value", "isEnabled"), s.on("execute", () => t.execute(e)), s
            })
        }

        function zc() {
            const t = !this.isEmpty && ("ul" == this.getChild(0).name || "ol" == this.getChild(0).name);
            return this.isEmpty || t ? 0 : k.b.call(this)
        }

        function Bc(t) {
            return (e, n, i) => {
                const o = i.consumable;
                if (!o.test(n.item, "insert") || !o.test(n.item, "attribute:listType") || !o.test(n.item, "attribute:listIndent")) return;
                o.consume(n.item, "insert"), o.consume(n.item, "attribute:listType"), o.consume(n.item, "attribute:listIndent");
                const r = n.item;
                jc(r, Nc(r, i), i, t)
            }
        }

        function Fc(t, e, n) {
            if (!n.consumable.consume(e.item, "attribute:listType")) return;
            const i = n.mapper.toViewElement(e.item), o = n.writer;
            o.breakContainer(o.createPositionBefore(i)), o.breakContainer(o.createPositionAfter(i));
            const r = i.parent, s = "numbered" == e.attributeNewValue ? "ol" : "ul";
            o.rename(s, r)
        }

        function Uc(t, e, n) {
            const i = n.mapper.toViewElement(e.item).parent, o = n.writer;
            Rc(o, i, i.nextSibling), Rc(o, i.previousSibling, i);
            for (const t of e.item.getChildren()) n.consumable.consume(t, "insert")
        }

        function Hc(t, e, n) {
            if ("listItem" != e.item.name) {
                let t = n.mapper.toViewPosition(e.range.start);
                const i = n.writer, o = [];
                for (; ("ul" == t.parent.name || "ol" == t.parent.name) && "li" == (t = i.breakContainer(t)).parent.name;) {
                    const e = t, n = i.createPositionAt(t.parent, "end");
                    if (!e.isEqual(n)) {
                        const t = i.remove(i.createRange(e, n));
                        o.push(t)
                    }
                    t = i.createPositionAfter(t.parent)
                }
                if (o.length > 0) {
                    for (let e = 0; e < o.length; e++) {
                        const n = t.nodeBefore;
                        if (t = i.insert(t, o[e]).end, e > 0) {
                            const e = Rc(i, n, n.nextSibling);
                            e && e.parent == n && t.offset--
                        }
                    }
                    Rc(i, t.nodeBefore, t.nodeAfter)
                }
            }
        }

        function qc(t, e, n) {
            const i = n.mapper.toViewPosition(e.position), o = i.nodeBefore, r = i.nodeAfter;
            Rc(n.writer, o, r)
        }

        function Wc(t, e, n) {
            if (n.consumable.consume(e.viewItem, {name: !0})) {
                const t = n.writer, i = this.conversionApi.store, o = t.createElement("listItem");
                i.indent = i.indent || 0, t.setAttribute("listIndent", i.indent, o);
                const r = e.viewItem.parent && "ol" == e.viewItem.parent.name ? "numbered" : "bulleted";
                t.setAttribute("listType", r, o), i.indent++;
                const s = n.splitToAllowedParent(o, e.modelCursor);
                if (!s) return;
                t.insert(o, s.position);
                const a = function (t, e, n) {
                    const {writer: i, schema: o} = n;
                    let r = i.createPositionAfter(t);
                    for (const s of e) if ("ul" == s.name || "ol" == s.name) r = n.convertItem(s, r).modelCursor; else {
                        const e = n.convertItem(s, i.createPositionAt(t, "end")), a = e.modelRange.start.nodeAfter,
                            c = a && a.is("element") && !o.checkChild(t, a.name);
                        c && (t = e.modelCursor.parent.is("listItem") ? e.modelCursor.parent : Jc(e.modelCursor), r = i.createPositionAfter(t))
                    }
                    return r
                }(o, e.viewItem.getChildren(), n);
                i.indent--, e.modelRange = t.createRange(e.modelCursor, a), s.cursorParent ? e.modelCursor = t.createPositionAt(s.cursorParent, 0) : e.modelCursor = e.modelRange.end
            }
        }

        function Yc(t, e, n) {
            if (n.consumable.test(e.viewItem, {name: !0})) {
                const t = Array.from(e.viewItem.getChildren());
                for (const e of t) e.is("li") || e._remove()
            }
        }

        function $c(t, e, n) {
            if (n.consumable.test(e.viewItem, {name: !0})) {
                if (0 === e.viewItem.childCount) return;
                const t = [...e.viewItem.getChildren()];
                let n = !1, i = !0;
                for (const e of t) !n || e.is("ul") || e.is("ol") || e._remove(), e.is("text") ? (i && (e._data = e.data.replace(/^\s+/, "")), (!e.nextSibling || e.nextSibling.is("ul") || e.nextSibling.is("ol")) && (e._data = e.data.replace(/\s+$/, ""))) : (e.is("ul") || e.is("ol")) && (n = !0), i = !1
            }
        }

        function Gc(t) {
            return (e, n) => {
                if (n.isPhantom) return;
                const i = n.modelPosition.nodeBefore;
                if (i && i.is("listItem")) {
                    const e = n.mapper.toViewElement(i), o = e.getAncestors().find(t => t.is("ul") || t.is("ol")),
                        r = t.createPositionAt(e, 0).getWalker();
                    for (const t of r) {
                        if ("elementStart" == t.type && t.item.is("li")) {
                            n.viewPosition = t.previousPosition;
                            break
                        }
                        if ("elementEnd" == t.type && t.item == o) {
                            n.viewPosition = t.nextPosition;
                            break
                        }
                    }
                }
            }
        }

        function Qc(t, [e, n]) {
            let i, o = e.is("documentFragment") ? e.getChild(0) : e;
            if (i = n ? this.createSelection(n) : this.document.selection, o && o.is("listItem")) {
                const t = i.getFirstPosition();
                let e = null;
                if (t.parent.is("listItem") ? e = t.parent : t.nodeBefore && t.nodeBefore.is("listItem") && (e = t.nodeBefore), e) {
                    const t = e.getAttribute("listIndent");
                    if (t > 0) for (; o && o.is("listItem");) o._setAttribute("listIndent", o.getAttribute("listIndent") + t), o = o.nextSibling
                }
            }
        }

        function Jc(t) {
            const e = new Je.a({startPosition: t});
            let n;
            do {
                n = e.next()
            } while (!n.value.item.is("listItem"));
            return n.value.item
        }

        function Kc(t, e, n, i, o, r) {
            const s = Lc(e.nodeBefore, {sameIndent: !0, smallerIndent: !0, listIndent: t, foo: "b"}), a = o.mapper,
                c = o.writer, l = s ? s.getAttribute("listIndent") : null;
            let d;
            if (s) if (l == t) {
                const t = a.toViewElement(s).parent;
                d = c.createPositionAfter(t)
            } else {
                const t = r.createPositionAt(s, "end");
                d = a.toViewPosition(t)
            } else d = n;
            d = Dc(d);
            for (const t of [...i.getChildren()]) (t.is("ul") || t.is("ol")) && (d = c.move(c.createRangeOn(t), d).end, Rc(c, t, t.nextSibling), Rc(c, t.previousSibling, t))
        }

        class Zc extends Yi.a {
            static get requires() {
                return [Bs]
            }

            init() {
                const t = this.editor;
                t.model.schema.register("listItem", {
                    inheritAllFrom: "$block",
                    allowAttributes: ["listType", "listIndent"]
                });
                const e = t.data, n = t.editing;
                t.model.document.registerPostFixer(e => (function (t, e) {
                    const n = t.document.differ.getChanges(), i = new Map;
                    let o = !1;
                    for (const t of n) if ("insert" == t.type && "listItem" == t.name) r(t.position); else if ("insert" == t.type && "listItem" != t.name) {
                        if ("$text" != t.name) {
                            const n = t.position.nodeAfter;
                            n.hasAttribute("listIndent") && (e.removeAttribute("listIndent", n), o = !0), n.hasAttribute("listType") && (e.removeAttribute("listType", n), o = !0)
                        }
                        r(t.position.getShiftedBy(t.length))
                    } else "remove" == t.type && "listItem" == t.name ? r(t.position) : "attribute" == t.type && "listIndent" == t.attributeKey ? r(t.range.start) : "attribute" == t.type && "listType" == t.attributeKey && r(t.range.start);
                    for (const t of i.values()) s(t), a(t);
                    return o;

                    function r(t) {
                        const e = t.nodeBefore;
                        if (e && e.is("listItem")) {
                            let n = e;
                            if (i.has(n)) return;
                            for (; n.previousSibling && n.previousSibling.is("listItem");) if (n = n.previousSibling, i.has(n)) return;
                            i.set(t.nodeBefore, n)
                        } else {
                            const e = t.nodeAfter;
                            e && e.is("listItem") && i.set(e, e)
                        }
                    }

                    function s(t) {
                        let n = 0, i = null;
                        for (; t && t.is("listItem");) {
                            const r = t.getAttribute("listIndent");
                            if (r > n) {
                                let s;
                                null === i ? (i = r - n, s = n) : (i > r && (i = r), s = r - i), e.setAttribute("listIndent", s, t), o = !0
                            } else i = null, n = t.getAttribute("listIndent") + 1;
                            t = t.nextSibling
                        }
                    }

                    function a(t) {
                        let n = [], i = null;
                        for (; t && t.is("listItem");) {
                            const r = t.getAttribute("listIndent");
                            if (i && i.getAttribute("listIndent") > r && (n = n.slice(0, r + 1)), 0 != r) if (n[r]) {
                                const i = n[r];
                                t.getAttribute("listType") != i && (e.setAttribute("listType", i, t), o = !0)
                            } else n[r] = t.getAttribute("listType");
                            i = t, t = t.nextSibling
                        }
                    }
                })(t.model, e)), n.mapper.registerViewToModelLength("li", Xc), e.mapper.registerViewToModelLength("li", Xc), n.mapper.on("modelToViewPosition", Gc(n.view)), n.mapper.on("viewToModelPosition", function (t) {
                    return (e, n) => {
                        const i = n.viewPosition, o = i.parent, r = n.mapper;
                        if ("ul" == o.name || "ol" == o.name) {
                            if (i.isAtEnd) {
                                const e = r.toModelElement(i.nodeBefore), o = r.getModelLength(i.nodeBefore);
                                n.modelPosition = t.createPositionBefore(e).getShiftedBy(o)
                            } else {
                                const e = r.toModelElement(i.nodeAfter);
                                n.modelPosition = t.createPositionBefore(e)
                            }
                            e.stop()
                        } else if ("li" == o.name && i.nodeBefore && ("ul" == i.nodeBefore.name || "ol" == i.nodeBefore.name)) {
                            const s = r.toModelElement(o);
                            let a = 1, c = i.nodeBefore;
                            for (; c && (c.is("ul") || c.is("ol"));) a += r.getModelLength(c), c = c.previousSibling;
                            n.modelPosition = t.createPositionBefore(s).getShiftedBy(a), e.stop()
                        }
                    }
                }(t.model)), e.mapper.on("modelToViewPosition", Gc(n.view)), n.downcastDispatcher.on("insert", Hc, {priority: "high"}), n.downcastDispatcher.on("insert:listItem", Bc(t.model)), e.downcastDispatcher.on("insert", Hc, {priority: "high"}), e.downcastDispatcher.on("insert:listItem", Bc(t.model)), n.downcastDispatcher.on("attribute:listType:listItem", Fc, {priority: "high"}), n.downcastDispatcher.on("attribute:listType:listItem", Uc, {priority: "low"}), n.downcastDispatcher.on("attribute:listIndent:listItem", function (t) {
                    return (e, n, i) => {
                        if (!i.consumable.consume(n.item, "attribute:listIndent")) return;
                        const o = i.mapper.toViewElement(n.item), r = i.writer;
                        r.breakContainer(r.createPositionBefore(o)), r.breakContainer(r.createPositionAfter(o));
                        const s = o.parent, a = s.previousSibling, c = r.createRangeOn(s);
                        r.remove(c), a && a.nextSibling && Rc(r, a, a.nextSibling), Kc(n.attributeOldValue + 1, n.range.start, c.start, o, i, t), jc(n.item, o, i, t);
                        for (const t of n.item.getChildren()) i.consumable.consume(t, "insert")
                    }
                }(t.model)), n.downcastDispatcher.on("remove:listItem", function (t) {
                    return (e, n, i) => {
                        const o = i.mapper.toViewPosition(n.position).getLastMatchingPosition(t => !t.item.is("li")).nodeAfter,
                            r = i.writer;
                        r.breakContainer(r.createPositionBefore(o)), r.breakContainer(r.createPositionAfter(o));
                        const s = o.parent, a = s.previousSibling, c = r.createRangeOn(s), l = r.remove(c);
                        a && a.nextSibling && Rc(r, a, a.nextSibling), Kc(i.mapper.toModelElement(o).getAttribute("listIndent") + 1, n.position, c.start, o, i, t);
                        for (const t of r.createRangeIn(l).getItems()) i.mapper.unbindViewElement(t);
                        e.stop()
                    }
                }(t.model)), n.downcastDispatcher.on("remove", qc, {priority: "low"}), e.upcastDispatcher.on("element:ul", Yc, {priority: "high"}), e.upcastDispatcher.on("element:ol", Yc, {priority: "high"}), e.upcastDispatcher.on("element:li", $c, {priority: "high"}), e.upcastDispatcher.on("element:li", Wc), t.model.on("insertContent", Qc, {priority: "high"}), t.commands.add("numberedList", new Oc(t, "numbered")), t.commands.add("bulletedList", new Oc(t, "bulleted")), t.commands.add("indentList", new Ic(t, "forward")), t.commands.add("outdentList", new Ic(t, "backward"));
                const i = n.view.document;
                this.listenTo(i, "enter", (t, e) => {
                    const n = this.editor.model.document, i = n.selection.getLastPosition().parent;
                    n.selection.isCollapsed && "listItem" == i.name && i.isEmpty && (this.editor.execute("outdentList"), e.preventDefault(), t.stop())
                }), this.listenTo(i, "delete", (t, e) => {
                    if ("backward" !== e.direction) return;
                    const n = this.editor.model.document.selection;
                    if (!n.isCollapsed) return;
                    const i = n.getFirstPosition();
                    if (!i.isAtStart) return;
                    const o = i.parent;
                    "listItem" === o.name && (o.previousSibling && "listItem" === o.previousSibling.name || (this.editor.execute("outdentList"), e.preventDefault(), t.stop()))
                }, {priority: "high"});
                const o = t => (e, n) => {
                    this.editor.commands.get(t).isEnabled && (this.editor.execute(t), n())
                };
                t.keystrokes.set("Tab", o("indentList")), t.keystrokes.set("Shift+Tab", o("outdentList"))
            }

            afterInit() {
                const t = this.editor.commands, e = t.get("indent"), n = t.get("outdent");
                e && e.registerChildCommand(t.get("indentList")), n && n.registerChildCommand(t.get("outdentList"))
            }
        }

        function Xc(t) {
            let e = 1;
            for (const n of t.getChildren()) if ("ul" == n.name || "ol" == n.name) for (const t of n.getChildren()) e += Xc(t);
            return e
        }

        var tl = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>',
            el = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>';

        class nl extends Yi.a {
            init() {
                const t = this.editor.t;
                Vc(this.editor, "numberedList", t("h"), tl), Vc(this.editor, "bulletedList", t("i"), el)
            }
        }

        function il(t, e) {
            return t => {
                t.on("attribute:url:media", n)
            };

            function n(n, i, o) {
                if (!o.consumable.consume(i.item, n.name)) return;
                const r = i.attributeNewValue, s = o.writer, a = o.mapper.toViewElement(i.item);
                s.remove(s.createRangeIn(a));
                const c = t.getMediaViewElement(s, r, e);
                s.insert(s.createPositionAt(a, 0), c)
            }
        }

        function ol(t, e, n, i) {
            const o = t.createContainerElement("figure", {class: "media"});
            return o.getFillerOffset = al, t.insert(t.createPositionAt(o, 0), e.getMediaViewElement(t, n, i)), o
        }

        function rl(t) {
            const e = t.getSelectedElement();
            return e && e.is("media") ? e : null
        }

        function sl(t, e, n) {
            t.change(i => {
                const o = i.createElement("media", {url: e});
                t.insertContent(o, n), i.setSelection(o, "on")
            })
        }

        function al() {
            return null
        }

        class cl extends Gi.a {
            refresh() {
                const t = this.editor.model, e = t.document.selection, n = t.schema, i = e.getFirstPosition(),
                    o = rl(e);
                let r = i.parent;
                r != r.root && (r = r.parent), this.value = o ? o.getAttribute("url") : null, this.isEnabled = n.checkChild(r, "media")
            }

            execute(t) {
                const e = this.editor.model, n = e.document.selection, i = rl(n);
                if (i) e.change(e => {
                    e.setAttribute("url", t, i)
                }); else {
                    const i = Sr(n, e);
                    sl(e, t, i)
                }
            }
        }

        var ll = '<svg viewBox="0 0 64 42" xmlns="http://www.w3.org/2000/svg"><path d="M47.426 17V3.713L63.102 0v19.389h-.001l.001.272c0 1.595-2.032 3.43-4.538 4.098-2.506.668-4.538-.083-4.538-1.678 0-1.594 2.032-3.43 4.538-4.098.914-.244 2.032-.565 2.888-.603V4.516L49.076 7.447v9.556A1.014 1.014 0 0 0 49 17h-1.574zM29.5 17h-8.343a7.073 7.073 0 1 0-4.657 4.06v3.781H3.3a2.803 2.803 0 0 1-2.8-2.804V8.63a2.803 2.803 0 0 1 2.8-2.805h4.082L8.58 2.768A1.994 1.994 0 0 1 10.435 1.5h8.985c.773 0 1.477.448 1.805 1.149l1.488 3.177H26.7c1.546 0 2.8 1.256 2.8 2.805V17zm-11.637 0H17.5a1 1 0 0 0-1 1v.05A4.244 4.244 0 1 1 17.863 17zm29.684 2c.97 0 .953-.048.953.889v20.743c0 .953.016.905-.953.905H19.453c-.97 0-.953.048-.953-.905V19.89c0-.937-.016-.889.97-.889h28.077zm-4.701 19.338V22.183H24.154v16.155h18.692zM20.6 21.375v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616V37.53H20.6zm24.233-16.155v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615V37.53h-1.615zM29.485 25.283a.4.4 0 0 1 .593-.35l9.05 4.977a.4.4 0 0 1 0 .701l-9.05 4.978a.4.4 0 0 1-.593-.35v-9.956z"/></svg>',
            dl = n(110);
        const ul = "0 0 64 42";

        class hl {
            constructor(t, e) {
                const n = e.providers, i = e.extraProviders || [], o = new Set(e.removeProviders),
                    r = n.concat(i).filter(t => {
                        const e = t.name;
                        return e ? !o.has(e) : (console.warn(Object(v.a)("media-embed-no-provider-name: The configured media provider has no name and cannot be used."), {provider: t}), !1)
                    });
                this.locale = t, this.providerDefinitions = r
            }

            hasMedia(t) {
                return !!this._getMedia(t)
            }

            getMediaViewElement(t, e, n) {
                return this._getMedia(e).getViewElement(t, n)
            }

            _getMedia(t) {
                if (!t) return new fl(this.locale);
                t = t.trim();
                for (const e of this.providerDefinitions) {
                    const n = e.html;
                    let i = e.url;
                    Array.isArray(i) || (i = [i]);
                    for (const e of i) {
                        const i = this._getUrlMatches(t, e);
                        if (i) return new fl(this.locale, t, i, n)
                    }
                }
                return null
            }

            _getUrlMatches(t, e) {
                let n = t.match(e);
                if (n) return n;
                let i = t.replace(/^https?:\/\//, "");
                return (n = i.match(e)) ? n : (n = (i = i.replace(/^www\./, "")).match(e)) || null
            }
        }

        class fl {
            constructor(t, e, n, i) {
                this.url = this._getValidUrl(e), this._t = t.t, this._match = n, this._previewRenderer = i
            }

            getViewElement(t, e) {
                const n = {};
                if (e.renderForEditingView || e.renderMediaPreview && this.url && this._previewRenderer) {
                    this.url && (n["data-oembed-url"] = this.url), e.renderForEditingView && (n.class = "ck-media__wrapper");
                    const i = this._getPreviewHtml(e);
                    return t.createUIElement("div", n, function (t) {
                        const e = this.toDomElement(t);
                        return e.innerHTML = i, e
                    })
                }
                return this.url && (n.url = this.url), t.createEmptyElement("oembed", n)
            }

            _getPreviewHtml(t) {
                return this._previewRenderer ? this._previewRenderer(this._match) : this.url && t.renderForEditingView ? this._getPlaceholderHtml() : ""
            }

            _getPlaceholderHtml() {
                const t = new dl.a, e = new yr.a;
                return t.text = this._t("Open media in new tab"), e.content = ll, e.viewBox = ul, new Si.a({
                    tag: "div",
                    attributes: {class: "ck ck-reset_all ck-media__placeholder"},
                    children: [{
                        tag: "div",
                        attributes: {class: "ck-media__placeholder__icon"},
                        children: [e]
                    }, {
                        tag: "a",
                        attributes: {
                            class: "ck-media__placeholder__url",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: this.url
                        },
                        children: [{
                            tag: "span",
                            attributes: {class: "ck-media__placeholder__url__text"},
                            children: [this.url]
                        }, t]
                    }]
                }).render().outerHTML
            }

            _getValidUrl(t) {
                return t ? t.match(/^https?/) ? t : "https://" + t : null
            }
        }

        n(189);

        class ml extends Yi.a {
            static get pluginName() {
                return "MediaEmbedEditing"
            }

            constructor(t) {
                super(t), t.config.define("mediaEmbed", {
                    providers: [{
                        name: "dailymotion", url: /^dailymotion\.com\/video\/(\w+)/, html: t => {
                            return '<div style="position: relative; padding-bottom: 100%; height: 0; ">' + `<iframe src="https://www.dailymotion.com/embed/video/${t[1]}" ` + 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" width="480" height="270" allowfullscreen allow="autoplay"></iframe></div>'
                        }
                    }, {
                        name: "spotify",
                        url: [/^open\.spotify\.com\/(artist\/\w+)/, /^open\.spotify\.com\/(album\/\w+)/, /^open\.spotify\.com\/(track\/\w+)/],
                        html: t => {
                            return '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;">' + `<iframe src="https://open.spotify.com/embed/${t[1]}" ` + 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>'
                        }
                    }, {
                        name: "youtube",
                        url: [/^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/, /^(?:m\.)?youtube\.com\/v\/([\w-]+)/, /^youtube\.com\/embed\/([\w-]+)/, /^youtu\.be\/([\w-]+)/],
                        html: t => {
                            return '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' + `<iframe src="https://www.youtube.com/embed/${t[1]}" ` + 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>'
                        }
                    }, {
                        name: "vimeo",
                        url: [/^vimeo\.com\/(\d+)/, /^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/, /^vimeo\.com\/album\/[^/]+\/video\/(\d+)/, /^vimeo\.com\/channels\/[^/]+\/(\d+)/, /^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/, /^vimeo\.com\/ondemand\/[^/]+\/(\d+)/, /^player\.vimeo\.com\/video\/(\d+)/],
                        html: t => {
                            return '<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' + `<iframe src="https://player.vimeo.com/video/${t[1]}" ` + 'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
                        }
                    }, {name: "instagram", url: /^instagram\.com\/p\/(\w+)/}, {
                        name: "twitter",
                        url: /^twitter\.com/
                    }, {name: "googleMaps", url: /^google\.com\/maps/}, {
                        name: "flickr",
                        url: /^flickr\.com/
                    }, {name: "facebook", url: /^facebook\.com/}]
                }), this.registry = new hl(t.locale, t.config.get("mediaEmbed"))
            }

            init() {
                const t = this.editor, e = t.model.schema, n = t.t, i = t.conversion,
                    o = t.config.get("mediaEmbed.previewsInData"), r = this.registry;
                t.commands.add("mediaEmbed", new cl(t)), e.register("media", {
                    isObject: !0,
                    isBlock: !0,
                    allowWhere: "$block",
                    allowAttributes: ["url"]
                }), i.for("dataDowncast").elementToElement({
                    model: "media", view: (t, e) => {
                        const n = t.getAttribute("url");
                        return ol(e, r, n, {renderMediaPreview: n && o})
                    }
                }), i.for("dataDowncast").add(il(r, {renderMediaPreview: o})), i.for("editingDowncast").elementToElement({
                    model: "media",
                    view: (t, e) => {
                        const i = t.getAttribute("url");
                        return function (t, e, n) {
                            return e.setCustomProperty("media", !0, t), Pr(t, e, {label: n})
                        }(ol(e, r, i, {renderForEditingView: !0}), e, n("ai"))
                    }
                }), i.for("editingDowncast").add(il(r, {renderForEditingView: !0})), i.for("upcast").elementToElement({
                    view: {
                        name: "oembed",
                        attributes: {url: !0}
                    }, model: (t, e) => {
                        const n = t.getAttribute("url");
                        if (r.hasMedia(n)) return e.createElement("media", {url: n})
                    }
                }).elementToElement({
                    view: {name: "div", attributes: {"data-oembed-url": !0}}, model: (t, e) => {
                        const n = t.getAttribute("data-oembed-url");
                        if (r.hasMedia(n)) return e.createElement("media", {url: n})
                    }
                })
            }
        }

        const pl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/;

        class gl extends Yi.a {
            static get requires() {
                return [$i.a, vo.a]
            }

            static get pluginName() {
                return "AutoMediaEmbed"
            }

            constructor(t) {
                super(t), this._timeoutId = null, this._positionToInsert = null
            }

            init() {
                const t = this.editor, e = t.model.document;
                this.listenTo(t.plugins.get($i.a), "inputTransformation", () => {
                    const t = e.selection.getFirstRange(), n = Gn.a.fromPosition(t.start);
                    n.stickiness = "toPrevious";
                    const i = Gn.a.fromPosition(t.end);
                    i.stickiness = "toNext", e.once("change:data", () => {
                        this._embedMediaBetweenPositions(n, i), n.detach(), i.detach()
                    }, {priority: "high"})
                }), t.commands.get("undo").on("execute", () => {
                    this._timeoutId && (Di.a.window.clearTimeout(this._timeoutId), this._positionToInsert.detach(), this._timeoutId = null, this._positionToInsert = null)
                }, {priority: "high"})
            }

            _embedMediaBetweenPositions(t, e) {
                const n = this.editor, i = n.plugins.get(ml).registry, o = new pe.a(t, e),
                    r = o.getWalker({ignoreElementEnd: !0});
                let s = "";
                for (const t of r) t.item.is("textProxy") && (s += t.item.data);
                if (!(s = s.trim()).match(pl)) return;
                if (!i.hasMedia(s)) return;
                n.commands.get("mediaEmbed").isEnabled && (this._positionToInsert = Gn.a.fromPosition(t), this._timeoutId = Di.a.window.setTimeout(() => {
                    n.model.change(t => {
                        let e;
                        this._timeoutId = null, t.remove(o), "$graveyard" !== this._positionToInsert.root.rootName && (e = this._positionToInsert), sl(n.model, s, e), this._positionToInsert.detach(), this._positionToInsert = null
                    })
                }, 100))
            }
        }

        n(191);

        class bl extends Oi.a {
            constructor(t, e) {
                super(e);
                const n = e.t;
                this.focusTracker = new _i, this.keystrokes = new ui, this.urlInputView = this._createUrlInput(), this.saveButtonView = this._createButton(n("bg"), Jr, "ck-button-save"), this.saveButtonView.type = "submit", this.cancelButtonView = this._createButton(n("bh"), Kr, "ck-button-cancel", "cancel"), this._focusables = new Yr.a, this._focusCycler = new Bi({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: "shift + tab", focusNext: "tab"}
                }), this._validators = t, this.setTemplate({
                    tag: "form",
                    attributes: {class: ["ck", "ck-media-form"], tabindex: "-1"},
                    children: [this.urlInputView, this.saveButtonView, this.cancelButtonView]
                })
            }

            render() {
                super.render(), Qr({view: this}), [this.urlInputView, this.saveButtonView, this.cancelButtonView].forEach(t => {
                    this._focusables.add(t), this.focusTracker.add(t.element)
                }), this.keystrokes.listenTo(this.element);
                const t = t => t.stopPropagation();
                this.keystrokes.set("arrowright", t), this.keystrokes.set("arrowleft", t), this.keystrokes.set("arrowup", t), this.keystrokes.set("arrowdown", t), this.listenTo(this.urlInputView.element, "selectstart", (t, e) => {
                    e.stopPropagation()
                }, {priority: "high"})
            }

            focus() {
                this._focusCycler.focusFirst()
            }

            get url() {
                return this.urlInputView.inputView.element.value.trim()
            }

            set url(t) {
                this.urlInputView.inputView.element.value = t.trim()
            }

            isValid() {
                this.resetFormStatus();
                for (const t of this._validators) {
                    const e = t(this);
                    if (e) return this.urlInputView.errorText = e, !1
                }
                return !0
            }

            resetFormStatus() {
                this.urlInputView.errorText = null, this.urlInputView.infoText = this._urlInputViewInfoDefault
            }

            _createUrlInput() {
                const t = this.locale.t, e = new $r(this.locale, Gr), n = e.inputView;
                return this._urlInputViewInfoDefault = t("bi"), this._urlInputViewInfoTip = t("bj"), e.label = t("bk"), e.infoText = this._urlInputViewInfoDefault, n.placeholder = "https://example.com", n.on("input", () => {
                    e.infoText = n.element.value ? this._urlInputViewInfoTip : this._urlInputViewInfoDefault
                }), e
            }

            _createButton(t, e, n, i) {
                const o = new zo.a(this.locale);
                return o.set({
                    label: t,
                    icon: e,
                    tooltip: !0
                }), o.extendTemplate({attributes: {class: n}}), i && o.delegate("execute").to(this, i), o
            }
        }

        var wl = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18.68 2.53c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.08c0-.58-.01-.55.6-.55h17.38zM15.77 14.5v-10H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 6.677a.4.4 0 0 1 .593-.351l5.133 2.824a.4.4 0 0 1 0 .7l-5.133 2.824a.4.4 0 0 1-.593-.35V6.676z"/></svg>';

        class kl extends Yi.a {
            static get requires() {
                return [ml]
            }

            static get pluginName() {
                return "MediaEmbedUI"
            }

            init() {
                const t = this.editor, e = t.commands.get("mediaEmbed"), n = t.plugins.get(ml).registry;
                this.form = new bl(function (t, e) {
                    return [e => {
                        if (!e.url.length) return t("ak")
                    }, n => {
                        if (!e.hasMedia(n.url)) return t("al")
                    }]
                }(t.t, n), t.locale), t.ui.componentFactory.add("mediaEmbed", n => {
                    const i = ia(n);
                    return this._setUpDropdown(i, this.form, e, t), this._setUpForm(this.form, i, e), i
                })
            }

            _setUpDropdown(t, e, n) {
                const i = this.editor, o = i.t, r = t.buttonView;

                function s() {
                    i.editing.view.focus(), t.isOpen = !1
                }

                t.bind("isEnabled").to(n), t.panelView.children.add(e), r.set({
                    label: o("aj"),
                    icon: wl,
                    tooltip: !0
                }), r.on("open", () => {
                    e.url = n.value || "", e.urlInputView.select(), e.focus()
                }, {priority: "low"}), t.on("submit", () => {
                    e.isValid() && (i.execute("mediaEmbed", e.url), s())
                }), t.on("change:isOpen", () => e.resetFormStatus()), t.on("cancel", () => s())
            }

            _setUpForm(t, e, n) {
                t.delegate("submit", "cancel").to(e), t.urlInputView.bind("value").to(n, "value"), t.urlInputView.bind("isReadOnly").to(n, "isEnabled", t => !t), t.saveButtonView.bind("isEnabled").to(n)
            }
        }

        n(193);

        function _l(t, e) {
            if (!t.childCount) return;
            const n = new Is, i = function (t, e) {
                const n = e.createRangeIn(t), i = new je.a({name: /^p|h\d+$/, styles: {"mso-list": /.*/}}), o = [];
                for (const t of n) if ("elementStart" === t.type && i.match(t.item)) {
                    const e = vl(t.item);
                    o.push({element: t.item, id: e.id, order: e.order, indent: e.indent})
                }
                return o
            }(t, n);
            if (!i.length) return;
            let o = null;
            i.forEach((t, r) => {
                if (!o || function (t, e) {
                    if (t.id !== e.id) return !0;
                    const n = e.element.previousSibling;
                    if (!n) return !0;
                    return !yl(n)
                }(i[r - 1], t)) {
                    const i = function (t, e) {
                        const n = /mso-level-number-format:([^;]*);/gi,
                            i = new RegExp(`@list l${t.id}:level${t.indent}\\s*({[^}]*)`, "gi").exec(e);
                        let o = "decimal";
                        if (i && i[1]) {
                            const t = n.exec(i[1]);
                            t && t[1] && (o = t[1].trim())
                        }
                        return {type: "bullet" !== o && "image" !== o ? "ol" : "ul", style: o}
                    }(t, e);
                    o = function (t, e, n) {
                        const i = new _.a(t.type), o = e.parent.getChildIndex(e);
                        return n.insertChild(o, i, e.parent), i
                    }(i, t.element, n)
                }
                const s = function (t, e) {
                    return function (t, e) {
                        const n = new je.a({name: "span", styles: {"mso-list": "Ignore"}}), i = e.createRangeIn(t);
                        for (const t of i) "elementStart" === t.type && n.match(t.item) && e.remove(t.item)
                    }(t, e), e.rename("li", t)
                }(t.element, n);
                n.appendChild(s, o)
            })
        }

        function vl(t) {
            const e = {}, n = t.getStyle("mso-list");
            return n && (e.id = parseInt(n.match(/(^|\s+)l(\d+)/i)[2]), e.order = parseInt(n.match(/\s*lfo(\d+)/i)[1]), e.indent = parseInt(n.match(/\s*level(\d+)/i)[1])), e
        }

        function yl(t) {
            return t.is("ol") || t.is("ul")
        }

        const xl = /id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;

        class Al {
            isActive(t) {
                return xl.test(t)
            }

            execute(t) {
                const e = new Is;
                !function (t, e) {
                    for (const n of t.getChildren()) if (n.is("b") && "normal" === n.getStyle("font-weight")) {
                        const i = t.getChildIndex(n);
                        e.remove(n), e.insertChild(i, n.getChildren(), t)
                    }
                }(t.content, e), function (t, e) {
                    for (const n of e.createRangeIn(t)) {
                        const t = n.item;
                        if (t.is("li")) {
                            const n = t.nextSibling;
                            n && yl(n) && (e.remove(n), e.insertChild(t.childCount, n, t))
                        }
                        if (yl(t)) {
                            let n = t.getChild(0);
                            for (; yl(n);) e.unwrapElement(n), n = t.getChild(0)
                        }
                    }
                }(t.content, e), function (t, e) {
                    for (const n of e.createRangeIn(t)) {
                        const t = n.item;
                        if (t.is("li")) {
                            const n = t.getChild(0);
                            n.is("p") && e.unwrapElement(n)
                        }
                    }
                }(t.content, e)
            }
        }

        function Tl(t) {
            return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g, (t, e) => 1 === e.length ? " " : Array(e.length + 1).join("  ").substr(0, e.length))
        }

        const Cl = {
            "∑": "sum",
            "∫": "int",
            "∬": "iint",
            "∭": "iiint",
            "∮": "oint",
            "∏": "prod",
            "∐": "coprod",
            "∯": "oiint",
            "⨂": "bigotimes",
            "⨁": "bigoplus",
            "⨀": "bigodot",
            "⨄": "biguplus",
            "∰": "oiiint",
            "⋁": "bigvee",
            "⋀": "bigwedge",
            "⋂": "bigcap",
            "⋃": "bigcup",
            "⨆": "bigsqcup",
            undOvr: "int",
            subSup: "int",
            "±": "pm",
            "∞": "infty",
            "π": "pi",
            "ρ": "rho",
            "θ": "theta"
        };

        function Pl(t) {
            const e = new DOMParser;
            (function t(e) {
                const n = [];
                for (let i = 0; i < e.childNodes.length; i++) {
                    const o = e.childNodes[i];
                    o.nodeType === Node.COMMENT_NODE ? n.push(o) : n.push.apply(n, t(o))
                }
                return n
            })(t).forEach(t => {
                const n = t.textContent, i = new RegExp(/^\[if gte msEquation 12\]>((.|[\r?\n])*?)<!\[endif\]$/),
                    o = n.match(i);
                if (o) {
                    let n = o[1];
                    n = Ml(n = Ml(n = Ml(n = n.replace(/^(<)(.*?)(>)/, (t, e, n, i) => e + n + " xmlns:m='http://schemas.openxmlformats.org/officeDocument/2006/math'" + i), "span"), "span"), "i");
                    const i = {maxDepth: 0, parts: []};
                    !function t(e, n, i, o) {
                        let r = !1;
                        const s = [];
                        o > n.maxDepth && (n.maxDepth = o);
                        const a = e.tagName;
                        switch (a) {
                            case"m:rad":
                                i.push("\\sqrt{"), i.push(s), i.push("}");
                                break;
                            case"m:f": {
                                const s = e.childNodes;
                                for (let e = 0; e < s.length; e++) {
                                    const r = s[e];
                                    if ("m:num" === r.tagName) {
                                        const e = [];
                                        t(r, n, e, o + 1), i.push("\\frac{"), i.push(e), i.push("}")
                                    } else if ("m:den" === r.tagName) {
                                        const e = [];
                                        t(r, n, e, o + 1), i.push("{"), i.push(e), i.push("}")
                                    }
                                }
                                r = !0;
                                break
                            }
                            case"m:sup":
                                i.push("^{"), i.push(s), i.push("}");
                                break;
                            case"m:sub":
                                i.push("_{"), i.push(s), i.push("}");
                                break;
                            case"m:d":
                                i.push("("), i.push(s), i.push(")");
                                break;
                            case"m:nary": {
                                const s = e.querySelector("chr") || e.querySelector("limLoc");
                                if (!s) break;
                                const a = s.getAttribute("m:val"), c = Cl[a];
                                if (void 0 === c) {
                                    a && console.warn("Operator entity (" + a + ") in't yet supported");
                                    break
                                }
                                i.push("\\"), i.push(c);
                                const l = e.childNodes;
                                for (let e = 0; e < l.length; e++) {
                                    const r = l[e];
                                    if ("m:sub" === r.tagName) {
                                        const e = [];
                                        t(r, n, e, o + 1), i.push("_{"), i.push(e), i.push("}")
                                    } else if ("m:sup" === r.tagName) {
                                        const e = [];
                                        t(r, n, e, o + 1), i.push("^{"), i.push(e), i.push("}")
                                    } else if ("m:e" === r.tagName) {
                                        const e = [];
                                        t(r, n, e, o + 1), i.push("{"), i.push(e), i.push("}")
                                    }
                                }
                                r = !0;
                                break
                            }
                            case"m:m": {
                                i.push("\\begin{matrix}");
                                const s = e.childNodes;
                                for (let e = 0; e < s.length; e++) {
                                    const r = s[e];
                                    if ("m:mr" === r.tagName) {
                                        const e = [], s = r.childNodes;
                                        for (let i = 0; i < s.length; i++) {
                                            const r = [];
                                            t(s[i], n, r, o + 1), e.push(r), e.push("&")
                                        }
                                        i.push(e), e.push("\\\\")
                                    }
                                }
                                i.push("\\end{matrix}"), r = !0;
                                break
                            }
                            default:
                                i.push(s)
                        }
                        switch (e.nodeType) {
                            case Node.TEXT_NODE: {
                                let t = e.textContent;
                                t = (t = t.replace(/\s/g, " ")).replace(/[^\x00-\x7F]{1}/g, t => {
                                    const e = Cl[t];
                                    return void 0 === e ? (console.warn("Entity (" + t + ") is't supported yet"), t) : "{\\" + e + "}"
                                }), s.push(t);
                                break
                            }
                        }
                        if (!r) {
                            const i = e.childNodes;
                            for (let e = 0; e < i.length; e++) t(i[e], n, s, o + 1)
                        }
                    }(e.parseFromString(n, "text/xml").documentElement, i, i.parts, 0);
                    const r = i.parts.flat(i.maxDepth + 1).join(""), s = t.nextSibling.nextSibling,
                        a = document.createElement("span");
                    a.classList.add("math-tex"), "relative" === s.style.position ? a.innerHTML = "\\(" + r + "\\)" : a.innerHTML = "\\[" + r + "\\]", t.parentNode.replaceChild(a, s)
                }
            })
        }

        function Ml(t, e) {
            const n = new RegExp("<" + e + "((.|[\\r?\\n])*?)>((.|[\\r?\\n])*?)<\\/" + e + ">", "g"),
                i = t.replace(n, (t, e, n, i) => i);
            return i.match(n) ? Ml(i, e) : i
        }

        function Ol(t) {
            const e = new DOMParser, n = function (t) {
                return Tl(Tl(t)).replace(/(<span style=['"]mso-spacerun:yes['"]>[\s]*?)[\r\n]+(\s*<\/span>)/g, "$1$2").replace(/<span style=['"]mso-spacerun:yes['"]><\/span>/g, "").replace(/ <\//g, " </").replace(/ <o:p><\/o:p>/g, " <o:p></o:p>").replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g, "").replace(/>(\s*[\r\n]\s*)</g, "><")
            }(function (t) {
                const e = t.match(/<\/body>(.*?)(<\/html>|$)/);
                e && e[1] && (t = t.slice(0, e.index) + t.slice(e.index).replace(e[1], ""));
                return t
            }(t = t.replace(/<!--\[if gte vml 1]>/g, ""))), i = e.parseFromString(n, "text/html");
            !function (t) {
                t.querySelectorAll("span[style*=spacerun]").forEach(t => {
                    const e = t.childNodes[0].data.length;
                    t.innerHTML = Array(e + 1).join("  ").substr(0, e)
                })
            }(i);
            const o = i.body.innerHTML;
            Pl(i);
            const r = function (t) {
                const e = new rt.a({blockFillerMode: "nbsp"}), n = t.createDocumentFragment(), i = t.body.childNodes;
                for (; i.length > 0;) n.appendChild(i[0]);
                return e.domToView(n)
            }(i), s = function (t) {
                const e = [], n = [], i = Array.from(t.getElementsByTagName("style"));
                for (const t of i) t.sheet && t.sheet.cssRules && t.sheet.cssRules.length && (e.push(t.sheet), n.push(t.innerHTML));
                return {styles: e, stylesString: n.join(" ")}
            }(i);
            return {body: r, bodyString: o, styles: s.styles, stylesString: s.stylesString}
        }

        function Sl(t, e) {
            if (!t.childCount) return;
            const n = new Is;
            !function (t, e, n) {
                const i = n.createRangeIn(e), o = new je.a({name: "img"}), r = [];
                for (const e of i) if (o.match(e.item)) {
                    const n = e.item, i = n.getAttribute("v:shapes") ? n.getAttribute("v:shapes").split(" ") : [];
                    i.length && i.every(e => t.indexOf(e) > -1) ? r.push(n) : n.getAttribute("src") || r.push(n)
                }
                for (const t of r) n.remove(t)
            }(function (t, e) {
                const n = e.createRangeIn(t), i = new je.a({name: /v:(.+)/}), o = [];
                for (const t of n) {
                    const e = t.item, n = e.previousSibling && e.previousSibling.name || null;
                    i.match(e) && e.getAttribute("o:gfxdata") && "v:shapetype" !== n && o.push(t.item.getAttribute("id"))
                }
                return o
            }(t, n), t, n), function (t, e) {
                const n = e.createRangeIn(t), i = new je.a({name: /v:(.+)/}), o = [];
                for (const t of n) i.match(t.item) && o.push(t.item);
                for (const t of o) e.remove(t)
            }(t, n);
            const i = function (t, e) {
                const n = e.createRangeIn(t), i = new je.a({name: "img"}), o = [];
                for (const t of n) i.match(t.item) && t.item.getAttribute("src").startsWith("file://") && o.push(t.item);
                return o
            }(t, n);
            i.length && function (t, e, n) {
                if (t.length === e.length) for (let i = 0; i < t.length; i++) {
                    const o = `data:${e[i].type};base64,${El(e[i].hex)}`;
                    n.setAttribute("src", o, t[i])
                }
            }(i, function (t) {
                if (!t) return [];
                const e = /{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,
                    n = new RegExp("(?:(" + e.source + "))([\\da-fA-F\\s]+)\\}", "g"), i = t.match(n), o = [];
                if (i) for (const t of i) {
                    let n = !1;
                    t.includes("\\pngblip") ? n = "image/png" : t.includes("\\jpegblip") && (n = "image/jpeg"), n && o.push({
                        hex: t.replace(e, "").replace(/[^\da-fA-F]/g, ""),
                        type: n
                    })
                }
                return o
            }(e), n)
        }

        function El(t) {
            return btoa(t.match(/\w{2}/g).map(t => String.fromCharCode(parseInt(t, 16))).join(""))
        }

        const Il = /<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,
            Nl = /xmlns:o="urn:schemas-microsoft-com/i;

        class jl {
            isActive(t) {
                return Il.test(t) || Nl.test(t)
            }

            execute(t) {
                const {body: e, stylesString: n} = Ol(t.dataTransfer.getData("text/html"));
                _l(e, n), Sl(e, t.dataTransfer.getData("text/rtf")), t.content = e
            }
        }

        function Rl(t, e) {
            let n = e.parent;
            for (; n;) {
                if (n.name === t) return n;
                n = n.parent
            }
        }

        function Dl(t, e, n, i, o = 1) {
            e > o ? i.setAttribute(t, e, n) : i.removeAttribute(t, n)
        }

        function Ll(t, e, n = {}) {
            const i = t.createElement("tableCell", n);
            t.insertElement("paragraph", i), t.insert(i, e)
        }

        function Vl() {
            return t => {
                t.on("element:table", (t, e, n) => {
                    const i = e.viewItem;
                    if (!n.consumable.test(i, {name: !0})) return;
                    const {rows: o, headingRows: r, headingColumns: s} = function (t) {
                        const e = {headingRows: 0, headingColumns: 0}, n = [], i = [];
                        let o;
                        for (const r of Array.from(t.getChildren())) if ("tbody" === r.name || "thead" === r.name || "tfoot" === r.name) {
                            "thead" !== r.name || o || (o = r);
                            const t = Array.from(r.getChildren()).filter(t => t.is("element", "tr"));
                            for (const r of t) if ("thead" === r.parent.name && r.parent === o) e.headingRows++, n.push(r); else {
                                i.push(r);
                                const t = Bl(r);
                                t > e.headingColumns && (e.headingColumns = t)
                            }
                        }
                        return e.rows = [...n, ...i], e
                    }(i), a = {};
                    s && (a.headingColumns = s), r && (a.headingRows = r);
                    const c = n.writer.createElement("table", a), l = n.splitToAllowedParent(c, e.modelCursor);
                    if (l) {
                        if (n.writer.insert(c, l.position), n.consumable.consume(i, {name: !0}), o.length) o.forEach(t => n.convertItem(t, n.writer.createPositionAt(c, "end"))); else {
                            const t = n.writer.createElement("tableRow");
                            n.writer.insert(t, n.writer.createPositionAt(c, "end")), Ll(n.writer, n.writer.createPositionAt(t, "end"))
                        }
                        e.modelRange = n.writer.createRange(n.writer.createPositionBefore(c), n.writer.createPositionAfter(c)), l.cursorParent ? e.modelCursor = n.writer.createPositionAt(l.cursorParent, 0) : e.modelCursor = e.modelRange.end
                    }
                })
            }
        }

        function zl(t) {
            return e => {
                e.on(`element:${t}`, (t, e, n) => {
                    const i = e.viewItem;
                    if (!n.consumable.test(i, {name: !0})) return;
                    const o = n.writer.createElement("tableCell"), r = n.splitToAllowedParent(o, e.modelCursor);
                    if (!r) return;
                    n.writer.insert(o, r.position), n.consumable.consume(i, {name: !0});
                    const s = n.writer.createPositionAt(o, 0);
                    n.convertChildren(i, s), o.childCount || n.writer.insertElement("paragraph", s), e.modelRange = n.writer.createRange(n.writer.createPositionBefore(o), n.writer.createPositionAfter(o)), e.modelCursor = e.modelRange.end
                })
            }
        }

        function Bl(t) {
            let e = 0, n = 0;
            const i = Array.from(t.getChildren()).filter(t => "th" === t.name || "td" === t.name);
            for (; n < i.length && "th" === i[n].name;) {
                const t = i[n];
                e += parseInt(t.getAttribute("colspan") || 1), n++
            }
            return e
        }

        class Fl {
            constructor(t, e = {}) {
                this.table = t, this.startRow = e.startRow || 0, this.endRow = "number" == typeof e.endRow ? e.endRow : void 0, this.includeSpanned = !!e.includeSpanned, this.column = "number" == typeof e.column ? e.column : void 0, this._skipRows = new Set, this._row = 0, this._column = 0, this._cellIndex = 0, this._spannedCells = new Map, this._nextCellAtColumn = -1
            }

            [Symbol.iterator]() {
                return this
            }

            next() {
                const t = this.table.getChild(this._row);
                if (!t || this._isOverEndRow()) return {done: !0};
                let e, n, i;
                if (this._isSpanned(this._row, this._column)) e = this._getSpanned(this._row, this._column), n = !this.includeSpanned || this._shouldSkipRow() || this._shouldSkipColumn(), i = this._formatOutValue(e, this._column, !0); else {
                    if (!(e = t.getChild(this._cellIndex))) return this._row++, this._column = 0, this._cellIndex = 0, this._nextCellAtColumn = -1, this.next();
                    const o = parseInt(e.getAttribute("colspan") || 1), r = parseInt(e.getAttribute("rowspan") || 1);
                    (o > 1 || r > 1) && this._recordSpans(this._row, this._column, r, o, e), this._nextCellAtColumn = this._column + o, n = this._shouldSkipRow() || this._shouldSkipColumn(), i = this._formatOutValue(e, this._column, !1, r, o)
                }
                return this._column++, this._column == this._nextCellAtColumn && this._cellIndex++, n ? this.next() : i
            }

            skipRow(t) {
                this._skipRows.add(t)
            }

            _isOverEndRow() {
                return void 0 !== this.endRow && this._row > this.endRow
            }

            _formatOutValue(t, e, n, i = 1, o = 1) {
                return {
                    done: !1,
                    value: {
                        cell: t,
                        row: this._row,
                        column: e,
                        isSpanned: n,
                        rowspan: i,
                        colspan: o,
                        cellIndex: this._cellIndex
                    }
                }
            }

            _shouldSkipRow() {
                const t = this._row < this.startRow, e = this._skipRows.has(this._row);
                return t || e
            }

            _shouldSkipColumn() {
                return void 0 !== this.column && this.column != this._column
            }

            _isSpanned(t, e) {
                if (!this._spannedCells.has(t)) return !1;
                return this._spannedCells.get(t).has(e)
            }

            _getSpanned(t, e) {
                return this._spannedCells.get(t).get(e)
            }

            _recordSpans(t, e, n, i, o) {
                for (let n = e + 1; n <= e + i - 1; n++) this._markSpannedCell(t, n, o);
                for (let r = t + 1; r < t + n; r++) for (let t = e; t <= e + i - 1; t++) this._markSpannedCell(r, t, o)
            }

            _markSpannedCell(t, e, n) {
                this._spannedCells.has(t) || this._spannedCells.set(t, new Map), this._spannedCells.get(t).set(e, n)
            }
        }

        function Ul(t) {
            return !!t.getCustomProperty("table") && Cr(t)
        }

        function Hl(t) {
            const e = t.getSelectedElement();
            return e && Ul(e) ? e : null
        }

        function ql(t) {
            const e = Rl("table", t.getFirstPosition());
            return e && Ul(e.parent) ? e.parent : null
        }

        function Wl(t = {}) {
            return e => e.on("insert:table", (e, n, i) => {
                const o = n.item;
                if (!i.consumable.consume(o, "insert")) return;
                i.consumable.consume(o, "attribute:headingRows:table"), i.consumable.consume(o, "attribute:headingColumns:table");
                const r = t && t.asWidget, s = i.writer.createContainerElement("figure", {class: "table"}),
                    a = i.writer.createContainerElement("table");
                let c;
                i.writer.insert(i.writer.createPositionAt(s, 0), a), r && (c = function (t, e) {
                    return e.setCustomProperty("table", !0, t), Pr(t, e, {hasSelectionHandler: !0})
                }(s, i.writer));
                const l = new Fl(o), d = {
                    headingRows: o.getAttribute("headingRows") || 0,
                    headingColumns: o.getAttribute("headingColumns") || 0
                }, u = new Map;
                for (const e of l) {
                    const {row: n, cell: r} = e, s = nd(ed(n, d), a, i), c = o.getChild(n),
                        l = u.get(n) || Xl(c, n, s, i);
                    u.set(n, l), i.consumable.consume(r, "insert"), Zl(e, d, i.writer.createPositionAt(l, "end"), i, t)
                }
                const h = i.mapper.toViewPosition(n.range.start);
                i.mapper.bindElements(o, r ? c : s), i.writer.insert(h, r ? c : s)
            })
        }

        function Yl(t = {}) {
            return e => e.on("insert:tableRow", (e, n, i) => {
                const o = n.item;
                if (!i.consumable.consume(o, "insert")) return;
                const r = o.parent, s = sd(i.mapper.toViewElement(r)), a = r.getChildIndex(o),
                    c = new Fl(r, {startRow: a, endRow: a}), l = {
                        headingRows: r.getAttribute("headingRows") || 0,
                        headingColumns: r.getAttribute("headingColumns") || 0
                    }, d = new Map;
                for (const e of c) {
                    const n = nd(ed(a, l), s, i), r = d.get(a) || Xl(o, a, n, i);
                    d.set(a, r), i.consumable.consume(e.cell, "insert"), Zl(e, l, i.writer.createPositionAt(r, "end"), i, t)
                }
            })
        }

        function $l(t = {}) {
            return e => e.on("insert:tableCell", (e, n, i) => {
                const o = n.item;
                if (!i.consumable.consume(o, "insert")) return;
                const r = o.parent, s = r.parent, a = s.getChildIndex(r), c = new Fl(s, {startRow: a, endRow: a}), l = {
                    headingRows: s.getAttribute("headingRows") || 0,
                    headingColumns: s.getAttribute("headingColumns") || 0
                };
                for (const e of c) if (e.cell === o) {
                    const n = i.mapper.toViewElement(r);
                    return void Zl(e, l, i.writer.createPositionAt(n, r.getChildIndex(o)), i, t)
                }
            })
        }

        function Gl(t = {}) {
            const e = !!t.asWidget;
            return t => t.on("attribute:headingRows:table", (t, n, i) => {
                const o = n.item;
                if (!i.consumable.consume(n.item, t.name)) return;
                const r = sd(i.mapper.toViewElement(o)), s = n.attributeOldValue, a = n.attributeNewValue;
                if (a > s) {
                    const t = Array.from(o.getChildren()).filter(({index: t}) => c(t, s - 1, a));
                    rd(t, nd("thead", r, i), i, "end");
                    for (const n of t) for (const t of n.getChildren()) Jl(t, "th", i, e);
                    od("tbody", r, i)
                } else {
                    rd(Array.from(o.getChildren()).filter(({index: t}) => c(t, a - 1, s)).reverse(), nd("tbody", r, i), i, 0);
                    const t = new Fl(o, {startRow: a ? a - 1 : a, endRow: s - 1}), n = {
                        headingRows: o.getAttribute("headingRows") || 0,
                        headingColumns: o.getAttribute("headingColumns") || 0
                    };
                    for (const o of t) Kl(o, n, i, e);
                    od("thead", r, i)
                }

                function c(t, e, n) {
                    return t > e && t < n
                }
            })
        }

        function Ql(t = {}) {
            const e = !!t.asWidget;
            return t => t.on("attribute:headingColumns:table", (t, n, i) => {
                const o = n.item;
                if (!i.consumable.consume(n.item, t.name)) return;
                const r = {
                    headingRows: o.getAttribute("headingRows") || 0,
                    headingColumns: o.getAttribute("headingColumns") || 0
                }, s = n.attributeOldValue, a = n.attributeNewValue, c = (s > a ? s : a) - 1;
                for (const t of new Fl(o)) t.column > c || Kl(t, r, i, e)
            })
        }

        function Jl(t, e, n, i) {
            const o = n.writer, r = n.mapper.toViewElement(t);
            if (!r) return;
            let s;
            if (i) {
                s = Or(o.createEditableElement(e, r.getAttributes()), o), o.insert(o.createPositionAfter(r), s), o.move(o.createRangeIn(r), o.createPositionAt(s, 0)), o.remove(o.createRangeOn(r))
            } else s = o.rename(e, r);
            n.mapper.unbindViewElement(r), n.mapper.bindElements(t, s)
        }

        function Kl(t, e, n, i) {
            const {cell: o} = t, r = td(t, e), s = n.mapper.toViewElement(o);
            s && s.name !== r && Jl(o, r, n, i)
        }

        function Zl(t, e, n, i, o) {
            const r = o && o.asWidget, s = td(t, e),
                a = r ? Or(i.writer.createEditableElement(s), i.writer) : i.writer.createContainerElement(s),
                c = t.cell, l = c.getChild(0), d = 1 === c.childCount && "paragraph" === l.name;
            if (i.writer.insert(n, a), d && !function (t) {
                return !![...t.getAttributeKeys()].length
            }(l)) {
                const t = c.getChild(0), e = i.writer.createPositionAt(a, "end");
                if (i.consumable.consume(t, "insert"), o.asWidget) {
                    const n = i.writer.createContainerElement("span");
                    i.mapper.bindElements(t, n), i.writer.insert(e, n), i.mapper.bindElements(c, a)
                } else i.mapper.bindElements(c, a), i.mapper.bindElements(t, a)
            } else i.mapper.bindElements(c, a)
        }

        function Xl(t, e, n, i) {
            i.consumable.consume(t, "insert");
            const o = i.writer.createContainerElement("tr");
            i.mapper.bindElements(t, o);
            const r = t.parent.getAttribute("headingRows") || 0, s = r > 0 && e >= r ? e - r : e,
                a = i.writer.createPositionAt(n, s);
            return i.writer.insert(a, o), o
        }

        function td(t, e) {
            const {row: n, column: i} = t, {headingColumns: o, headingRows: r} = e;
            return r && r > n ? "th" : o && o > i ? "th" : "td"
        }

        function ed(t, e) {
            return t < e.headingRows ? "thead" : "tbody"
        }

        function nd(t, e, n) {
            const i = id(t, e);
            return i || function (t, e, n) {
                const i = n.writer.createContainerElement(t),
                    o = n.writer.createPositionAt(e, "tbody" == t ? "end" : 0);
                return n.writer.insert(o, i), i
            }(t, e, n)
        }

        function id(t, e) {
            for (const n of e.getChildren()) if (n.name == t) return n
        }

        function od(t, e, n) {
            const i = id(t, e);
            i && 0 === i.childCount && n.writer.remove(n.writer.createRangeOn(i))
        }

        function rd(t, e, n, i) {
            for (const o of t) {
                const t = n.mapper.toViewElement(o);
                t && n.writer.move(n.writer.createRangeOn(t), n.writer.createPositionAt(e, i))
            }
        }

        function sd(t) {
            for (const e of t.getChildren()) if ("table" === e.name) return e
        }

        class ad extends Gi.a {
            refresh() {
                const t = this.editor.model, e = t.document.selection, n = t.schema, i = function (t) {
                    const e = t.parent;
                    return e === e.root ? e : e.parent
                }(e.getFirstPosition());
                this.isEnabled = n.checkChild(i, "table")
            }

            execute(t = {}) {
                const e = this.editor.model, n = e.document.selection, i = this.editor.plugins.get("TableUtils"),
                    o = parseInt(t.rows) || 2, r = parseInt(t.columns) || 2, s = Sr(n, e);
                e.change(t => {
                    const n = i.createTable(t, o, r);
                    e.insertContent(n, s), t.setSelection(t.createPositionAt(n.getNodeByPath([0, 0, 0]), 0))
                })
            }
        }

        class cd extends Gi.a {
            constructor(t, e = {}) {
                super(t), this.order = e.order || "below"
            }

            refresh() {
                const t = Rl("table", this.editor.model.document.selection.getFirstPosition());
                this.isEnabled = !!t
            }

            execute() {
                const t = this.editor, e = t.model.document.selection, n = t.plugins.get("TableUtils"),
                    i = Rl("tableCell", e.getFirstPosition()).parent, o = i.parent, r = o.getChildIndex(i),
                    s = "below" === this.order ? r + 1 : r;
                n.insertRows(o, {rows: 1, at: s})
            }
        }

        class ld extends Gi.a {
            constructor(t, e = {}) {
                super(t), this.order = e.order || "right"
            }

            refresh() {
                const t = Rl("table", this.editor.model.document.selection.getFirstPosition());
                this.isEnabled = !!t
            }

            execute() {
                const t = this.editor, e = t.model.document.selection, n = t.plugins.get("TableUtils"),
                    i = Rl("tableCell", e.getFirstPosition()), o = i.parent.parent, {column: r} = n.getCellLocation(i),
                    s = "right" === this.order ? r + 1 : r;
                n.insertColumns(o, {columns: 1, at: s})
            }
        }

        class dd extends Gi.a {
            constructor(t, e = {}) {
                super(t), this.direction = e.direction || "horizontally"
            }

            refresh() {
                const t = Rl("tableCell", this.editor.model.document.selection.getFirstPosition());
                this.isEnabled = !!t
            }

            execute() {
                const t = Rl("tableCell", this.editor.model.document.selection.getFirstPosition()),
                    e = "horizontally" === this.direction, n = this.editor.plugins.get("TableUtils");
                e ? n.splitCellHorizontally(t, 2) : n.splitCellVertically(t, 2)
            }
        }

        class ud extends Gi.a {
            constructor(t, e) {
                super(t), this.direction = e.direction, this.isHorizontal = "right" == this.direction || "left" == this.direction
            }

            refresh() {
                const t = this._getMergeableCell();
                this.isEnabled = !!t, this.value = t
            }

            execute() {
                const t = this.editor.model, e = Rl("tableCell", t.document.selection.getFirstPosition()),
                    n = this.value, i = this.direction;
                t.change(t => {
                    const o = "right" == i || "down" == i, r = o ? e : n, s = o ? n : e, a = s.parent;
                    !function (t, e, n) {
                        hd(t) || (hd(e) && n.remove(n.createRangeIn(e)), n.move(n.createRangeIn(t), n.createPositionAt(e, "end")));
                        n.remove(t)
                    }(s, r, t);
                    const c = this.isHorizontal ? "colspan" : "rowspan", l = parseInt(e.getAttribute(c) || 1),
                        d = parseInt(n.getAttribute(c) || 1);
                    t.setAttribute(c, l + d, r), t.setSelection(t.createRangeIn(r)), a.childCount || function (t, e) {
                        const n = t.parent, i = n.getChildIndex(t);
                        for (const {cell: t, row: o, rowspan: r} of new Fl(n, {endRow: i})) {
                            const n = o + r - 1 >= i;
                            n && Dl("rowspan", r - 1, t, e)
                        }
                        e.remove(t)
                    }(a, t)
                })
            }

            _getMergeableCell() {
                const t = Rl("tableCell", this.editor.model.document.selection.getFirstPosition());
                if (!t) return;
                const e = this.editor.plugins.get("TableUtils"), n = this.isHorizontal ? function (t, e, n) {
                    const i = "right" == e ? t.nextSibling : t.previousSibling;
                    if (!i) return;
                    const o = "right" == e ? t : i,
                        r = "right" == e ? i : t, {column: s} = n.getCellLocation(o), {column: a} = n.getCellLocation(r),
                        c = parseInt(o.getAttribute("colspan") || 1);
                    return s + c === a ? i : void 0
                }(t, this.direction, e) : function (t, e) {
                    const n = t.parent, i = n.parent, o = i.getChildIndex(n);
                    if ("down" == e && o === i.childCount - 1 || "up" == e && 0 === o) return;
                    const r = parseInt(t.getAttribute("rowspan") || 1), s = i.getAttribute("headingRows") || 0;
                    if (s && ("down" == e && o + r === s || "up" == e && o === s)) return;
                    const a = parseInt(t.getAttribute("rowspan") || 1), c = "down" == e ? o + a : o,
                        l = [...new Fl(i, {endRow: c})], d = l.find(e => e.cell === t).column,
                        u = l.find(({row: t, rowspan: n, column: i}) => i === d && ("down" == e ? t === c : c === t + n));
                    return u && u.cell
                }(t, this.direction);
                if (!n) return;
                const i = this.isHorizontal ? "rowspan" : "colspan", o = parseInt(t.getAttribute(i) || 1);
                return parseInt(n.getAttribute(i) || 1) === o ? n : void 0
            }
        }

        function hd(t) {
            return 1 == t.childCount && t.getChild(0).is("paragraph") && t.getChild(0).isEmpty
        }

        class fd extends Gi.a {
            refresh() {
                const t = Rl("tableCell", this.editor.model.document.selection.getFirstPosition());
                this.isEnabled = !!t && t.parent.parent.childCount > 1
            }

            execute() {
                const t = this.editor.model, e = Rl("tableCell", t.document.selection.getFirstPosition()).parent,
                    n = e.parent, i = n.getChildIndex(e), o = n.getAttribute("headingRows") || 0;
                t.change(t => {
                    o && i <= o && Dl("headingRows", o - 1, n, t, 0);
                    const r = [...new Fl(n, {endRow: i})], s = new Map;
                    r.filter(({row: t, rowspan: e}) => t === i && e > 1).forEach(({column: t, cell: e, rowspan: n}) => s.set(t, {
                        cell: e,
                        rowspanToSet: n - 1
                    })), r.filter(({row: t, rowspan: e}) => t <= i - 1 && t + e > i).forEach(({cell: e, rowspan: n}) => Dl("rowspan", n - 1, e, t));
                    const a = i + 1, c = new Fl(n, {includeSpanned: !0, startRow: a, endRow: a});
                    let l;
                    for (const {row: e, column: i, cell: o} of [...c]) if (s.has(i)) {
                        const {cell: o, rowspanToSet: r} = s.get(i),
                            a = l ? t.createPositionAfter(l) : t.createPositionAt(n.getChild(e), 0);
                        t.move(t.createRangeOn(o), a), Dl("rowspan", r, o, t), l = o
                    } else l = o;
                    t.remove(e)
                })
            }
        }

        class md extends Gi.a {
            refresh() {
                const t = this.editor, e = t.model.document.selection, n = t.plugins.get("TableUtils"),
                    i = Rl("tableCell", e.getFirstPosition());
                this.isEnabled = !!i && n.getColumns(i.parent.parent) > 1
            }

            execute() {
                const t = this.editor.model, e = Rl("tableCell", t.document.selection.getFirstPosition()), n = e.parent,
                    i = n.parent, o = i.getAttribute("headingColumns") || 0, r = i.getChildIndex(n), s = [...new Fl(i)],
                    a = s.find(t => t.cell === e).column;
                t.change(t => {
                    o && r <= o && t.setAttribute("headingColumns", o - 1, i);
                    for (const {cell: e, column: n, colspan: i} of s) n <= a && i > 1 && n + i > a ? Dl("colspan", i - 1, e, t) : n === a && t.remove(e)
                })
            }
        }

        class pd extends Gi.a {
            refresh() {
                const t = Rl("tableCell", this.editor.model.document.selection.getFirstPosition()), e = !!t;
                this.isEnabled = e, this.value = e && this._isInHeading(t, t.parent.parent)
            }

            execute(t = {}) {
                const e = this.editor.model, n = Rl("tableCell", e.document.selection.getFirstPosition()).parent,
                    i = n.parent, o = i.getAttribute("headingRows") || 0, r = n.index;
                if (t.forceValue === this.value) return;
                const s = this.value ? r : r + 1;
                e.change(t => {
                    if (s) {
                        const e = function (t, e, n) {
                            const i = [], o = new Fl(t, {startRow: e > n ? n : 0, endRow: e - 1});
                            for (const {row: t, rowspan: n, cell: r} of o) n > 1 && t + n > e && i.push(r);
                            return i
                        }(i, s, o);
                        for (const n of e) gd(n, s, t)
                    }
                    Dl("headingRows", s, i, t, 0)
                })
            }

            _isInHeading(t, e) {
                const n = parseInt(e.getAttribute("headingRows") || 0);
                return !!n && t.parent.index < n
            }
        }

        function gd(t, e, n) {
            const i = t.parent, o = i.parent, r = e - i.index, s = {}, a = parseInt(t.getAttribute("rowspan")) - r;
            a > 1 && (s.rowspan = a);
            const c = parseInt(t.getAttribute("colspan") || 1);
            c > 1 && (s.colspan = c);
            const l = o.getChildIndex(i), d = l + r, u = [...new Fl(o, {startRow: l, endRow: d, includeSpanned: !0})];
            let h;
            for (const {row: e, column: i, cell: r, cellIndex: a} of u) if (r === t && void 0 === h && (h = i), void 0 !== h && h === i && e === d) {
                const t = o.getChild(e);
                Ll(n, n.createPositionAt(t, a), s)
            }
            Dl("rowspan", r, t, n)
        }

        class bd extends Gi.a {
            refresh() {
                const t = Rl("tableCell", this.editor.model.document.selection.getFirstPosition()), e = !!t;
                this.isEnabled = e, this.value = e && this._isInHeading(t, t.parent.parent)
            }

            execute(t = {}) {
                const e = this.editor.model, n = e.document.selection, i = this.editor.plugins.get("TableUtils"),
                    o = Rl("tableCell", n.getFirstPosition()), r = o.parent.parent, {column: s} = i.getCellLocation(o);
                if (t.forceValue === this.value) return;
                const a = this.value ? s : s + 1;
                e.change(t => {
                    Dl("headingColumns", a, r, t, 0)
                })
            }

            _isInHeading(t, e) {
                const n = parseInt(e.getAttribute("headingColumns") || 0),
                    i = this.editor.plugins.get("TableUtils"), {column: o} = i.getCellLocation(t);
                return !!n && o < n
            }
        }

        class wd extends Yi.a {
            static get pluginName() {
                return "TableUtils"
            }

            getCellLocation(t) {
                const e = t.parent, n = e.parent, i = n.getChildIndex(e), o = new Fl(n, {startRow: i, endRow: i});
                for (const {cell: e, row: n, column: i} of o) if (e === t) return {row: n, column: i}
            }

            createTable(t, e, n) {
                const i = t.createElement("table");
                return kd(t, i, 0, e, n), i
            }

            insertRows(t, e = {}) {
                const n = this.editor.model, i = e.at || 0, o = e.rows || 1;
                n.change(e => {
                    const n = t.getAttribute("headingRows") || 0;
                    if (n > i && e.setAttribute("headingRows", n + o, t), 0 === i || i === t.childCount) return void kd(e, t, i, o, this.getColumns(t));
                    const r = new Fl(t, {endRow: i});
                    let s = 0;
                    for (const {row: t, rowspan: n, colspan: a, cell: c} of r) {
                        t < i && t + n > i && e.setAttribute("rowspan", n + o, c), t === i && (s += a)
                    }
                    kd(e, t, i, o, s)
                })
            }

            insertColumns(t, e = {}) {
                const n = this.editor.model, i = e.at || 0, o = e.columns || 1;
                n.change(e => {
                    const n = t.getAttribute("headingColumns");
                    i < n && e.setAttribute("headingColumns", n + o, t);
                    const r = this.getColumns(t);
                    if (0 === i || r === i) {
                        for (const n of t.getChildren()) _d(o, e, e.createPositionAt(n, i ? "end" : 0));
                        return
                    }
                    const s = new Fl(t, {column: i, includeSpanned: !0});
                    for (const {row: n, cell: r, cellIndex: a} of s) {
                        const c = parseInt(r.getAttribute("rowspan") || 1),
                            l = parseInt(r.getAttribute("colspan") || 1);
                        if (r.index !== i && l > 1) {
                            if (e.setAttribute("colspan", l + o, r), s.skipRow(n), c > 1) for (let t = n + 1; t < n + c; t++) s.skipRow(t)
                        } else {
                            const i = e.createPositionAt(t.getChild(n), a);
                            _d(o, e, i)
                        }
                    }
                })
            }

            splitCellVertically(t, e = 2) {
                const n = this.editor.model, i = t.parent.parent, o = parseInt(t.getAttribute("rowspan") || 1),
                    r = parseInt(t.getAttribute("colspan") || 1);
                n.change(n => {
                    if (r > 1) {
                        const {newCellsSpan: i, updatedSpan: s} = vd(r, e);
                        Dl("colspan", s, t, n);
                        const a = {};
                        i > 1 && (a.colspan = i), o > 1 && (a.rowspan = o), _d(r > e ? e - 1 : r - 1, n, n.createPositionAfter(t), a)
                    }
                    if (r < e) {
                        const s = e - r, a = [...new Fl(i)], {column: c} = a.find(({cell: e}) => e === t),
                            l = a.filter(({cell: e, colspan: n, column: i}) => {
                                return e !== t && i === c || i < c && i + n > c
                            });
                        for (const {cell: t, colspan: e} of l) n.setAttribute("colspan", e + s, t);
                        const d = {};
                        o > 1 && (d.rowspan = o), _d(s, n, n.createPositionAfter(t), d);
                        const u = i.getAttribute("headingColumns") || 0;
                        u > c && Dl("headingColumns", u + s, i, n)
                    }
                })
            }

            splitCellHorizontally(t, e = 2) {
                const n = this.editor.model, i = t.parent, o = i.parent, r = o.getChildIndex(i),
                    s = parseInt(t.getAttribute("rowspan") || 1), a = parseInt(t.getAttribute("colspan") || 1);
                n.change(n => {
                    if (s > 1) {
                        const i = [...new Fl(o, {
                            startRow: r,
                            endRow: r + s - 1,
                            includeSpanned: !0
                        })], {newCellsSpan: c, updatedSpan: l} = vd(s, e);
                        Dl("rowspan", l, t, n);
                        const {column: d} = i.find(({cell: e}) => e === t), u = {};
                        c > 1 && (u.rowspan = c), a > 1 && (u.colspan = a);
                        for (const {column: t, row: e, cellIndex: s} of i) {
                            if (e >= r + l && t === d && (e + r + l) % c == 0) {
                                _d(1, n, n.createPositionAt(o.getChild(e), s), u)
                            }
                        }
                    }
                    if (s < e) {
                        const i = e - s, c = [...new Fl(o, {startRow: 0, endRow: r})];
                        for (const {cell: e, rowspan: o, row: s} of c) if (e !== t && s + o > r) {
                            const t = o + i;
                            n.setAttribute("rowspan", t, e)
                        }
                        const l = {};
                        a > 1 && (l.colspan = a), kd(n, o, r + 1, i, 1, l);
                        const d = o.getAttribute("headingRows") || 0;
                        d > r && Dl("headingRows", d + i, o, n)
                    }
                })
            }

            getColumns(t) {
                return [...t.getChild(0).getChildren()].reduce((t, e) => {
                    return t + parseInt(e.getAttribute("colspan") || 1)
                }, 0)
            }
        }

        function kd(t, e, n, i, o, r = {}) {
            for (let s = 0; s < i; s++) {
                const i = t.createElement("tableRow");
                t.insert(i, e, n), _d(o, t, t.createPositionAt(i, "end"), r)
            }
        }

        function _d(t, e, n, i = {}) {
            for (let o = 0; o < t; o++) Ll(e, n, i)
        }

        function vd(t, e) {
            if (t < e) return {newCellsSpan: 1, updatedSpan: 1};
            const n = Math.floor(t / e);
            return {newCellsSpan: n, updatedSpan: t - n * e + n}
        }

        function yd(t) {
            t.document.registerPostFixer(e => (function (t, e) {
                const n = e.document.differ.getChanges();
                let i = !1;
                const o = new Set;
                for (const e of n) {
                    let n;
                    "table" == e.name && "insert" == e.type && (n = e.position.nodeAfter), "tableRow" != e.name && "tableCell" != e.name || (n = Rl("table", e.position)), Td(e) && (n = Rl("table", e.range.start)), n && !o.has(n) && (i = xd(n, t) || i, i = Ad(n, t) || i, o.add(n))
                }
                return i
            })(e, t))
        }

        function xd(t, e) {
            let n = !1;
            const i = function (t) {
                const e = parseInt(t.getAttribute("headingRows") || 0), n = t.childCount, i = [];
                for (const {row: o, rowspan: r, cell: s} of new Fl(t)) {
                    if (r < 2) continue;
                    const t = o < e, a = t ? e : n;
                    if (o + r > a) {
                        const t = a - o;
                        i.push({cell: s, rowspan: t})
                    }
                }
                return i
            }(t);
            if (i.length) {
                n = !0;
                for (const t of i) Dl("rowspan", t.rowspan, t.cell, e, 1)
            }
            return n
        }

        function Ad(t, e) {
            let n = !1;
            const i = function (t) {
                const e = {};
                for (const {row: n} of new Fl(t, {includeSpanned: !0})) e[n] || (e[n] = 0), e[n] += 1;
                return e
            }(t), o = i[0];
            if (!Object.values(i).every(t => t === o)) {
                const o = Object.values(i).reduce((t, e) => e > t ? e : t, 0);
                for (const [r, s] of Object.entries(i)) {
                    const i = o - s;
                    if (i) {
                        for (let n = 0; n < i; n++) Ll(e, e.createPositionAt(t.getChild(r), "end"));
                        n = !0
                    }
                }
            }
            return n
        }

        function Td(t) {
            const e = "attribute" === t.type, n = t.attributeKey;
            return e && ("headingRows" === n || "colspan" === n || "rowspan" === n)
        }

        function Cd(t) {
            t.document.registerPostFixer(e => (function (t, e) {
                const n = e.document.differ.getChanges();
                let i = !1;
                for (const e of n) "insert" == e.type && "table" == e.name && (i = Pd(e.position.nodeAfter, t) || i), "insert" == e.type && "tableRow" == e.name && (i = Md(e.position.nodeAfter, t) || i), "insert" == e.type && "tableCell" == e.name && (i = Od(e.position.nodeAfter, t) || i), Sd(e) && (i = Od(e.position.parent, t) || i);
                return i
            })(e, t))
        }

        function Pd(t, e) {
            let n = !1;
            for (const i of t.getChildren()) n = Md(i, e) || n;
            return n
        }

        function Md(t, e) {
            let n = !1;
            for (const i of t.getChildren()) n = Od(i, e) || n;
            return n
        }

        function Od(t, e) {
            if (0 == t.childCount) return e.insertElement("paragraph", t), !0;
            const n = Array.from(t.getChildren()).filter(t => t.is("text"));
            for (const t of n) e.wrap(e.createRangeOn(t), "paragraph");
            return !!n.length
        }

        function Sd(t) {
            return !(!t.position || !t.position.parent.is("tableCell")) && ("insert" == t.type && "$text" == t.name || "remove" == t.type)
        }

        function Ed(t) {
            t.document.registerPostFixer(() => (function (t) {
                const e = t.document.differ, n = new Set;
                for (const t of e.getChanges()) {
                    const e = "insert" == t.type || "remove" == t.type ? t.position.parent : t.range.start.parent;
                    e.is("tableCell") && Id(e, t.type) && n.add(e)
                }
                if (n.size) {
                    for (const t of n.values()) e.refreshItem(t);
                    return !0
                }
                return !1
            })(t))
        }

        function Id(t, e) {
            if (!Array.from(t.getChildren()).some(t => t.is("paragraph"))) return !1;
            if ("attribute" == e) {
                const e = Array.from(t.getChild(0).getAttributeKeys()).length;
                return 1 === t.childCount && e < 2
            }
            return t.childCount <= ("insert" == e ? 2 : 1)
        }

        n(195);

        class Nd extends Yi.a {
            init() {
                const t = this.editor, e = t.model, n = e.schema, i = t.conversion;
                n.register("table", {
                    allowWhere: "$block",
                    allowAttributes: ["headingRows", "headingColumns"],
                    isLimit: !0,
                    isObject: !0,
                    isBlock: !0
                }), n.register("tableRow", {
                    allowIn: "table",
                    isLimit: !0
                }), n.register("tableCell", {
                    allowIn: "tableRow",
                    allowAttributes: ["colspan", "rowspan"],
                    isLimit: !0
                }), n.extend("$block", {allowIn: "tableCell"}), n.addChildCheck((t, e) => {
                    if ("table" == e.name && Array.from(t.getNames()).includes("table")) return !1
                }), i.for("upcast").add(Vl()), i.for("editingDowncast").add(Wl({asWidget: !0})), i.for("dataDowncast").add(Wl()), i.for("upcast").elementToElement({
                    model: "tableRow",
                    view: "tr"
                }), i.for("editingDowncast").add(Yl({asWidget: !0})), i.for("dataDowncast").add(Yl()), i.for("downcast").add(t => t.on("remove:tableRow", (t, e, n) => {
                    t.stop();
                    const i = n.writer, o = n.mapper,
                        r = o.toViewPosition(e.position).getLastMatchingPosition(t => !t.item.is("tr")).nodeAfter,
                        s = r.parent, a = i.createRangeOn(r), c = i.remove(a);
                    for (const t of i.createRangeIn(c).getItems()) o.unbindViewElement(t);
                    s.childCount || i.remove(i.createRangeOn(s))
                }, {priority: "higher"})), i.for("upcast").add(zl("td")), i.for("upcast").add(zl("th")), i.for("editingDowncast").add($l({asWidget: !0})), i.for("dataDowncast").add($l()), i.attributeToAttribute({
                    model: "colspan",
                    view: "colspan"
                }), i.attributeToAttribute({
                    model: "rowspan",
                    view: "rowspan"
                }), i.for("editingDowncast").add(Ql({asWidget: !0})), i.for("dataDowncast").add(Ql()), i.for("editingDowncast").add(Gl({asWidget: !0})), i.for("dataDowncast").add(Gl()), t.commands.add("insertTable", new ad(t)), t.commands.add("insertTableRowAbove", new cd(t, {order: "above"})), t.commands.add("insertTableRowBelow", new cd(t, {order: "below"})), t.commands.add("insertTableColumnLeft", new ld(t, {order: "left"})), t.commands.add("insertTableColumnRight", new ld(t, {order: "right"})), t.commands.add("removeTableRow", new fd(t)), t.commands.add("removeTableColumn", new md(t)), t.commands.add("splitTableCellVertically", new dd(t, {direction: "vertically"})), t.commands.add("splitTableCellHorizontally", new dd(t, {direction: "horizontally"})), t.commands.add("mergeTableCellRight", new ud(t, {direction: "right"})), t.commands.add("mergeTableCellLeft", new ud(t, {direction: "left"})), t.commands.add("mergeTableCellDown", new ud(t, {direction: "down"})), t.commands.add("mergeTableCellUp", new ud(t, {direction: "up"})), t.commands.add("setTableColumnHeader", new bd(t)), t.commands.add("setTableRowHeader", new pd(t)), yd(e), Ed(e), Cd(e), this.editor.keystrokes.set("Tab", (...t) => this._handleTabOnSelectedTable(...t), {priority: "low"}), this.editor.keystrokes.set("Tab", this._getTabHandler(!0), {priority: "low"}), this.editor.keystrokes.set("Shift+Tab", this._getTabHandler(!1), {priority: "low"})
            }

            static get requires() {
                return [wd]
            }

            _handleTabOnSelectedTable(t, e) {
                const n = this.editor, i = n.model.document.selection;
                if (!i.isCollapsed && 1 === i.rangeCount && i.getFirstRange().isFlat) {
                    const t = i.getSelectedElement();
                    if (!t || !t.is("table")) return;
                    e(), n.model.change(e => {
                        e.setSelection(e.createRangeIn(t.getChild(0).getChild(0)))
                    })
                }
            }

            _getTabHandler(t) {
                const e = this.editor;
                return (n, i) => {
                    const o = Rl("tableCell", e.model.document.selection.getFirstPosition());
                    if (!o) return;
                    i();
                    const r = o.parent, s = r.parent, a = s.getChildIndex(r), c = r.getChildIndex(o), l = 0 === c;
                    if (!t && l && 0 === a) return;
                    const d = c === r.childCount - 1, u = a === s.childCount - 1;
                    if (t && u && d && (e.execute("insertTableRowBelow"), a === s.childCount - 1)) return;
                    let h;
                    if (t && d) {
                        const t = s.getChild(a + 1);
                        h = t.getChild(0)
                    } else if (!t && l) {
                        const t = s.getChild(a - 1);
                        h = t.getChild(t.childCount - 1)
                    } else h = r.getChild(c + (t ? 1 : -1));
                    e.model.change(t => {
                        t.setSelection(t.createRangeIn(h))
                    })
                }
            }
        }

        n(197);

        class jd extends Oi.a {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.items = this.createCollection(), this.set("rows", 0), this.set("columns", 0), this.bind("label").to(this, "columns", this, "rows", (t, e) => `${e} × ${t}`), this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck"]},
                    children: [{
                        tag: "div",
                        attributes: {class: ["ck-insert-table-dropdown__grid"]},
                        children: this.items
                    }, {
                        tag: "div",
                        attributes: {class: ["ck-insert-table-dropdown__label"]},
                        children: [{text: e.to("label")}]
                    }],
                    on: {
                        mousedown: e.to(t => {
                            t.preventDefault()
                        }), click: e.to(() => {
                            this.fire("execute")
                        })
                    }
                });
                for (let t = 0; t < 100; t++) {
                    const e = new Rd;
                    e.on("over", () => {
                        const e = Math.floor(t / 10), n = t % 10;
                        this.set("rows", e + 1), this.set("columns", n + 1)
                    }), this.items.add(e)
                }
                this.on("change:columns", () => {
                    this._highlightGridBoxes()
                }), this.on("change:rows", () => {
                    this._highlightGridBoxes()
                })
            }

            focus() {
            }

            focusLast() {
            }

            _highlightGridBoxes() {
                const t = this.rows, e = this.columns;
                this.items.map((n, i) => {
                    const o = Math.floor(i / 10) < t && i % 10 < e;
                    n.set("isOn", o)
                })
            }
        }

        class Rd extends Oi.a {
            constructor(t) {
                super(t);
                const e = this.bindTemplate;
                this.set("isOn", !1), this.setTemplate({
                    tag: "div",
                    attributes: {class: ["ck-insert-table-dropdown-grid-box", e.if("isOn", "ck-on")]},
                    on: {mouseover: e.to("over")}
                })
            }
        }

        var Dd = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>',
            Ld = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></svg>',
            Vd = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></svg>',
            zd = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></svg>';

        class Bd extends Yi.a {
            init() {
                const t = this.editor, e = this.editor.t;
                t.ui.componentFactory.add("insertTable", n => {
                    const i = t.commands.get("insertTable"), o = ia(n);
                    o.bind("isEnabled").to(i), o.buttonView.set({icon: Dd, label: e("p"), tooltip: !0});
                    const r = new jd(n);
                    return o.panelView.children.add(r), r.delegate("execute").to(o), o.buttonView.on("open", () => {
                        r.rows = 0, r.columns = 0
                    }), o.on("execute", () => {
                        t.execute("insertTable", {rows: r.rows, columns: r.columns}), t.editing.view.focus()
                    }), o
                }), t.ui.componentFactory.add("tableColumn", t => {
                    const n = [{
                        type: "switchbutton",
                        model: {commandName: "setTableColumnHeader", label: e("q"), bindIsOn: !0}
                    }, {type: "separator"}, {
                        type: "button",
                        model: {commandName: "insertTableColumnLeft", label: e("r")}
                    }, {type: "button", model: {commandName: "insertTableColumnRight", label: e("s")}}, {
                        type: "button",
                        model: {commandName: "removeTableColumn", label: e("t")}
                    }];
                    return this._prepareDropdown(e("u"), Ld, n, t)
                }), t.ui.componentFactory.add("tableRow", t => {
                    const n = [{
                        type: "switchbutton",
                        model: {commandName: "setTableRowHeader", label: e("v"), bindIsOn: !0}
                    }, {type: "separator"}, {
                        type: "button",
                        model: {commandName: "insertTableRowBelow", label: e("w")}
                    }, {type: "button", model: {commandName: "insertTableRowAbove", label: e("x")}}, {
                        type: "button",
                        model: {commandName: "removeTableRow", label: e("y")}
                    }];
                    return this._prepareDropdown(e("z"), Vd, n, t)
                }), t.ui.componentFactory.add("mergeTableCells", t => {
                    const n = [{
                        type: "button",
                        model: {commandName: "mergeTableCellUp", label: e("aa")}
                    }, {type: "button", model: {commandName: "mergeTableCellRight", label: e("ab")}}, {
                        type: "button",
                        model: {commandName: "mergeTableCellDown", label: e("ac")}
                    }, {
                        type: "button",
                        model: {commandName: "mergeTableCellLeft", label: e("ad")}
                    }, {type: "separator"}, {
                        type: "button",
                        model: {commandName: "splitTableCellVertically", label: e("ae")}
                    }, {type: "button", model: {commandName: "splitTableCellHorizontally", label: e("af")}}];
                    return this._prepareDropdown(e("ag"), zd, n, t)
                })
            }

            _prepareDropdown(t, e, n, i) {
                const o = this.editor, r = ia(i), s = [], a = new h.a;
                for (const t of n) Fd(t, o, s, a);
                return oa(r, a), r.buttonView.set({
                    label: t,
                    icon: e,
                    tooltip: !0
                }), r.bind("isEnabled").toMany(s, "isEnabled", (...t) => t.some(t => t)), this.listenTo(r, "execute", t => {
                    o.execute(t.source.commandName), o.editing.view.focus()
                }), r
            }
        }

        function Fd(t, e, n, i) {
            const o = t.model = new Gs(t.model), {commandName: r, bindIsOn: s} = t.model;
            if ("separator" !== t.type) {
                const t = e.commands.get(r);
                n.push(t), o.set({commandName: r}), o.bind("isEnabled").to(t), s && o.bind("isOn").to(t, "value")
            }
            o.set({withText: !0}), i.add(t)
        }

        n(199);
        var Ud = n(35);

        class Hd extends Oi.a {
            constructor(t, e) {
                super(e), this.engine = t, this.set("value", ""), this.set("display", !1), this.on("change", () => {
                    this.isRendered && this.updateMath()
                }), this.setTemplate({tag: "div", attributes: {class: ["ck", "ck-math-preview"]}})
            }

            updateMath() {
                Object(Ud.e)(this.value, this.element, this.engine, this.display, !0)
            }

            render() {
                super.render(), this.updateMath()
            }
        }

        n(201);

        class qd extends Oi.a {
            constructor(t, e, n) {
                super(t);
                const i = t.t;
                this._createKeyAndFocusTrackers(), this.mathInputView = this._createMathInput(), this.displayButtonView = this._createDisplayButton(), this.saveButtonView = this._createButton(i("bg"), Jr, "ck-button-save", null), this.saveButtonView.type = "submit", this.cancelButtonView = this._createButton(i("bh"), Kr, "ck-button-cancel", "cancel"), this.previewEnabled = n;
                let o = [];
                this.previewEnabled ? (this.previewLabel = new Ii(t), this.previewLabel.text = i("cb"), this.mathView = new Hd(e, t), this.mathView.bind("display").to(this.displayButtonView, "isOn"), o = [this.mathInputView, this.displayButtonView, this.previewLabel, this.mathView]) : o = [this.mathInputView, this.displayButtonView], this.setTemplate({
                    tag: "form",
                    attributes: {class: ["ck", "ck-math-form"], tabindex: "-1", spellcheck: "false"},
                    children: [{
                        tag: "div",
                        attributes: {class: ["ck-math-view"]},
                        children: o
                    }, this.saveButtonView, this.cancelButtonView]
                })
            }

            render() {
                super.render(), Qr({view: this}), [this.mathInputView, this.displayButtonView, this.saveButtonView, this.cancelButtonView].forEach(t => {
                    this._focusables.add(t), this.focusTracker.add(t.element)
                }), this.keystrokes.listenTo(this.element)
            }

            focus() {
                this._focusCycler.focusFirst()
            }

            get equation() {
                return this.mathInputView.inputView.element.value
            }

            set equation(t) {
                this.mathInputView.inputView.element.value = t, this.previewEnabled && (this.mathView.value = t)
            }

            _createKeyAndFocusTrackers() {
                this.focusTracker = new _i, this.keystrokes = new ui, this._focusables = new Yr.a, this._focusCycler = new Bi({
                    focusables: this._focusables,
                    focusTracker: this.focusTracker,
                    keystrokeHandler: this.keystrokes,
                    actions: {focusPrevious: "shift + tab", focusNext: "tab"}
                })
            }

            _createMathInput() {
                const t = this.locale.t, e = new $r(this.locale, Gr), n = e.inputView;
                return e.infoText = t("cc"), n.on("input", () => {
                    if (this.previewEnabled) {
                        const t = n.element.value.trim();
                        if (Object(Ud.d)(t)) {
                            const e = Object(Ud.b)(t);
                            n.element.value = e.equation, this.displayButtonView.isOn = e.display, this.previewEnabled && (this.mathView.value = e.equation)
                        } else this.mathView.value = t
                    }
                }), e
            }

            _createButton(t, e, n, i) {
                const o = new zo.a(this.locale);
                return o.set({
                    label: t,
                    icon: e,
                    tooltip: !0
                }), o.extendTemplate({attributes: {class: n}}), i && o.delegate("execute").to(this, i), o
            }

            _createDisplayButton() {
                const t = this.locale.t, e = new zo.a(this.locale);
                return e.set({
                    label: t("cd"),
                    withText: !0
                }), e.extendTemplate({attributes: {class: "ck-button-display-toggle"}}), e.on("execute", () => {
                    e.isOn = !e.isOn, this.previewEnabled && (this.mathView.display = e.isOn)
                }), e
            }
        }

        class Wd extends Gi.a {
            execute(t, e, n, i) {
                const o = this.editor.model, r = o.document.selection.getSelectedElement();
                o.change(s => {
                    let a;
                    if (r && r.is("mathtex")) {
                        const o = r.getAttribute("type"), c = i ? n : o || n;
                        a = s.createElement("mathtex", {equation: t, type: c, display: e})
                    } else a = s.createElement("mathtex", {equation: t, type: n, display: e});
                    o.insertContent(a), s.setSelection(a, "on")
                })
            }

            refresh() {
                const t = this.editor.model, e = t.document.selection,
                    n = t.schema.checkChild(e.focus.parent, "mathtex");
                this.isEnabled = n;
                const i = Object(Ud.c)(e);
                this.value = i ? i.getAttribute("equation") : null, this.display = i ? i.getAttribute("display") : null
            }
        }

        class Yd extends Yi.a {
            static get requires() {
                return [Fr]
            }

            static get pluginName() {
                return "MathEditing"
            }

            init() {
                const t = this.editor;
                t.commands.add("math", new Wd(t)), this._defineSchema(), this._defineConverters()
            }

            _defineSchema() {
                this.editor.model.schema.register("mathtex", {
                    allowWhere: "$text",
                    isInline: !0,
                    isObject: !0,
                    allowAttributes: ["equation", "type", "display"]
                })
            }

            _defineConverters() {
                const t = this.editor.conversion, e = Object.assign(Ud.a, this.editor.config.get("math"));
                t.for("upcast").elementToElement({
                    view: {name: "script", attributes: {type: "math/tex"}},
                    model: (t, n) => {
                        const i = t.getChild(0).data.trim();
                        return n.createElement("mathtex", {
                            equation: i,
                            type: e.forceOutputType ? e.outputType : "script",
                            display: !1
                        })
                    }
                }).elementToElement({
                    view: {name: "script", attributes: {type: "math/tex; mode=display"}},
                    model: (t, n) => {
                        const i = t.getChild(0).data.trim();
                        return n.createElement("mathtex", {
                            equation: i,
                            type: e.forceOutputType ? e.outputType : "script",
                            display: !0
                        })
                    }
                }).elementToElement({
                    view: {name: "span", classes: ["math-tex"]}, model: (t, n) => {
                        const i = t.getChild(0).data.trim(),
                            o = Object.assign(Object(Ud.b)(i), {type: e.forceOutputType ? e.outputType : "span"});
                        return n.createElement("mathtex", o)
                    }
                }), t.for("editingDowncast").elementToElement({
                    model: "mathtex", view: (t, n) => {
                        return Pr(function (t, n) {
                            const i = t.getAttribute("equation"), o = t.getAttribute("display"),
                                r = "user-select: none; " + (o ? "" : "display: inline-block;"),
                                s = "ck-math-tex " + (o ? "ck-math-tex-display" : "ck-math-tex-inline"),
                                a = n.createContainerElement("div", {style: r, class: s}),
                                c = n.createUIElement("div", null, function (t) {
                                    const n = this.toDomElement(t);
                                    return Object(Ud.e)(i, n, e.engine, o, !1), n
                                });
                            return n.insert(n.createPositionAt(a, 0), c), a
                        }(t, n), n)
                    }
                }), t.for("dataDowncast").elementToElement({
                    model: "mathtex", view: function (t, e) {
                        const n = t.getAttribute("equation"), i = t.getAttribute("type"), o = t.getAttribute("display");
                        if ("span" === i) {
                            const t = e.createContainerElement("span", {class: "math-tex"});
                            return o ? e.insert(e.createPositionAt(t, 0), e.createText("\\[" + n + "\\]")) : e.insert(e.createPositionAt(t, 0), e.createText("\\(" + n + "\\)")), t
                        }
                        {
                            const t = e.createContainerElement("script", {type: o ? "math/tex; mode=display" : "math/tex"});
                            return e.insert(e.createPositionAt(t, 0), e.createText(n)), t
                        }
                    }
                })
            }
        }

        var $d = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.44 10.78" height="40.74" width="58.35"><path d="M8.15 0c-.06 0-.1.02-.11.03a.12.12 0 0 0-.02.01 6.81 6.81 0 0 0-2.32 4.9v.9a6.82 6.82 0 0 0 2.32 4.9.12.12 0 0 0 .02 0c.02.02.06.04.11.04.07 0 .12-.03.16-.07a.22.22 0 0 0 0-.32.12.12 0 0 0-.02-.02A4.4 4.4 0 0 1 7 8.44a7.62 7.62 0 0 1-.5-2.6v-.9c0-.82.19-1.76.5-2.6A4.4 4.4 0 0 1 8.3.42.12.12 0 0 0 8.3.39a.22.22 0 0 0 .08-.16.22.22 0 0 0-.07-.16.22.22 0 0 0-.16-.07zm4.83 0a.22.22 0 0 0-.16.07.22.22 0 0 0-.07.16c0 .08.05.13.08.16a.12.12 0 0 0 .01.02c.52.39.98 1.1 1.3 1.94.3.83.49 1.77.49 2.6v.88c0 .83-.18 1.78-.5 2.6a4.4 4.4 0 0 1-1.29 1.95.22.22 0 0 0-.01.33c.03.04.08.07.15.07.05 0 .09-.02.12-.03a.12.12 0 0 0 .02-.01 6.82 6.82 0 0 0 2.32-4.9v-.9a6.81 6.81 0 0 0-2.32-4.9.12.12 0 0 0-.02 0c-.03-.02-.06-.04-.12-.04zm-8.5.46c-.4 0-1.13.23-1.46 1.32-.06.2-.11.45-.33 1.58h-.64c-.1 0-.19-.01-.28.03a.25.25 0 0 0-.12.12.38.38 0 0 0-.03.17c0 .04 0 .1.04.14.03.04.07.07.11.08.09.03.16.02.26.02h.56l-.77 4.04c-.1.51-.19 1-.32 1.36-.06.18-.14.32-.22.4-.08.1-.16.13-.26.13-.03 0-.1 0-.2-.03.11-.05.2-.13.26-.2a.7.7 0 0 0 .13-.4.48.48 0 0 0-.16-.38.53.53 0 0 0-.35-.12c-.34 0-.7.3-.7.76 0 .27.14.5.34.64s.44.2.68.2c.33 0 .61-.17.83-.4.21-.21.37-.48.47-.69.18-.35.32-.84.43-1.25a14.17 14.17 0 0 0 .18-.8l.61-3.26h.81c.1 0 .2.01.3-.03.04-.03.09-.07.11-.13.02-.05.03-.1.03-.17 0-.05-.01-.1-.05-.14a.23.23 0 0 0-.11-.07c-.08-.03-.16-.02-.25-.02h-.73l.2-1.07a26.3 26.3 0 0 1 .24-1.07c.08-.17.22-.3.39-.3l.21.05a.7.7 0 0 0-.25.2.7.7 0 0 0-.13.4c0 .15.06.28.16.37.1.08.22.12.35.12.34 0 .7-.3.7-.76 0-.28-.15-.5-.35-.64-.2-.14-.45-.2-.7-.2zm5.4 2.78c-.6 0-1.06.37-1.36.76-.16.2-.27.4-.35.57-.07.18-.12.3-.12.42 0 .1.08.18.14.2.06.03.1.02.1.02.06 0 .12 0 .18-.04.05-.05.07-.1.08-.17v.02c.35-1.09 1-1.3 1.3-1.3.09 0 .2.01.29.09.09.07.17.2.17.5 0 .27-.18 1-.57 2.48a1.8 1.8 0 0 1-.37.75.7.7 0 0 1-.52.26c-.04 0-.13 0-.22-.03a.68.68 0 0 0 .3-.56.47.47 0 0 0-.18-.39.55.55 0 0 0-.32-.1c-.4 0-.7.33-.7.74 0 .28.16.5.38.63.21.13.48.18.73.18.39 0 .69-.2.89-.41.09-.1.15-.19.2-.27.2.36.59.68 1.16.68.6 0 1.05-.37 1.35-.76.15-.2.27-.4.34-.57.08-.18.12-.3.12-.42a.24.24 0 0 0-.11-.2c-.06-.03-.12-.02-.13-.02a.26.26 0 0 0-.18.06c-.05.05-.06.1-.07.14-.34 1.1-1.02 1.3-1.3 1.3-.17 0-.27-.06-.35-.17a.72.72 0 0 1-.11-.4c0-.22.06-.45.18-.91l.36-1.45c.03-.14.1-.44.25-.7.15-.25.36-.46.68-.46.03 0 .12 0 .22.03a.7.7 0 0 0-.32.56c0 .11.04.23.13.33.08.1.22.16.4.16.14 0 .3-.06.44-.18a.73.73 0 0 0 .24-.55c0-.32-.2-.54-.42-.66a1.52 1.52 0 0 0-.68-.16c-.34 0-.62.16-.82.34a1.8 1.8 0 0 0-.3.35 1.32 1.32 0 0 0-.5-.54 1.37 1.37 0 0 0-.63-.15z" style="line-height:1.25;-inkscape-font-specification:\'Latin Modern Math\'" font-weight="400" font-size="10.58" font-family="Latin Modern Math" letter-spacing="-1.06" word-spacing="0"/></svg>\n';
        const Gd = "Ctrl+M";

        class Qd extends Yi.a {
            static get requires() {
                return [us, Yd]
            }

            static get pluginName() {
                return "MathUI"
            }

            init() {
                const t = this.editor;
                t.editing.view.addObserver(_c), this._form = this._createFormView(), this._balloon = t.plugins.get(us), this._createToolbarMathButton(), this._enableUserBalloonInteractions()
            }

            destroy() {
                super.destroy(), this._form.destroy()
            }

            _showUI() {
                this.editor.commands.get("math").isEnabled && (this._addFormView(), this._balloon.showStack("main"))
            }

            _createFormView() {
                const t = this.editor, e = t.commands.get("math"),
                    n = Object.assign(Ud.a, this.editor.config.get("math")),
                    i = new qd(t.locale, n.engine, n.enablePreview);
                return i.mathInputView.bind("value").to(e, "value"), i.displayButtonView.bind("isOn").to(e, "display"), this.listenTo(i, "submit", () => {
                    t.execute("math", i.equation, i.displayButtonView.isOn, n.outputType, n.forceOutputType), this._closeFormView()
                }), this.listenTo(i, "cancel", () => {
                    this._closeFormView()
                }), i.keystrokes.set("esc", (t, e) => {
                    this._closeFormView(), e()
                }), i
            }

            _addFormView() {
                if (this._isFormInPanel) return;
                const t = this.editor.commands.get("math");
                this._balloon.add({
                    view: this._form,
                    position: this._getBalloonPositionData()
                }), this._balloon.visibleView === this._form && this._form.mathInputView.select();
                document.getElementById("math-preview") && this._form.previewEnabled && this._form.mathView.updateMath(), this._form.equation = t.value || "", this._form.displayButtonView.isOn = t.display || !1
            }

            _hideUI() {
                if (!this._isFormInPanel) return;
                const t = this.editor;
                this.stopListening(t.ui, "update"), this.stopListening(this._balloon, "change:visibleView"), t.editing.view.focus(), this._removeFormView()
            }

            _closeFormView() {
                void 0 !== this.editor.commands.get("math").value ? this._removeFormView() : this._hideUI()
            }

            _removeFormView() {
                if (this._isFormInPanel) {
                    this._form.saveButtonView.focus(), this._balloon.remove(this._form);
                    const t = "math-preview";
                    let e = document.getElementById(t);
                    e && (e.style.display = "none"), this.editor.editing.view.focus()
                }
            }

            _getBalloonPositionData() {
                const t = this.editor.editing.view, e = t.document;
                return {target: t.domConverter.viewRangeToDom(e.selection.getFirstRange())}
            }

            _createToolbarMathButton() {
                const t = this.editor, e = t.commands.get("math"), n = t.t;
                t.keystrokes.set(Gd, (t, n) => {
                    n(), e.isEnabled && this._showUI()
                }), this.editor.ui.componentFactory.add("math", t => {
                    const i = new zo.a(t);
                    return i.isEnabled = !0, i.label = n("ao"), i.icon = $d, i.keystroke = Gd, i.tooltip = !0, i.isToggleable = !0, i.bind("isEnabled").to(e, "isEnabled"), this.listenTo(i, "execute", () => this._showUI()), i
                })
            }

            _enableUserBalloonInteractions() {
                this.editor.keystrokes.set("Esc", (t, e) => {
                    this._isUIVisible && (this._hideUI(), e())
                }), Wr({
                    emitter: this._form,
                    activator: () => this._isFormInPanel,
                    contextElements: [this._balloon.view.element],
                    callback: () => this._hideUI()
                })
            }

            get _isUIVisible() {
                return this._balloon.visibleView == this._form
            }

            get _isFormInPanel() {
                return this._balloon.hasView(this._form)
            }
        }

        var Jd = n(123);
        n.d(e, "default", function () {
            return Kd
        });

        class Kd extends Wi {
        }

        Kd.builtinPlugins = [class extends Yi.a {
            static get requires() {
                return [$i.a, to, oo, _o, vo.a]
            }

            static get pluginName() {
                return "Essentials"
            }
        }, So, class extends Yi.a {
            static get pluginName() {
                return "Autoformat"
            }

            afterInit() {
                this._addListAutoformats(), this._addBasicStylesAutoformats(), this._addHeadingAutoformats(), this._addBlockQuoteAutoformats()
            }

            _addListAutoformats() {
                const t = this.editor.commands;
                t.get("bulletedList") && new Io(this.editor, /^[*-]\s$/, "bulletedList"), t.get("numberedList") && new Io(this.editor, /^1[.|)]\s$/, "numberedList")
            }

            _addBasicStylesAutoformats() {
                const t = this.editor.commands;
                if (t.get("bold")) {
                    const t = Ro(this.editor, "bold");
                    new No(this.editor, /(\*\*)([^*]+)(\*\*)$/g, t), new No(this.editor, /(__)([^_]+)(__)$/g, t)
                }
                if (t.get("italic")) {
                    const t = Ro(this.editor, "italic");
                    new No(this.editor, /(?:^|[^*])(\*)([^*_]+)(\*)$/g, t), new No(this.editor, /(?:^|[^_])(_)([^_]+)(_)$/g, t)
                }
                if (t.get("code")) {
                    const t = Ro(this.editor, "code");
                    new No(this.editor, /(`)([^`]+)(`)$/g, t)
                }
            }

            _addHeadingAutoformats() {
                const t = this.editor.commands.get("heading");
                t && t.modelElements.filter(t => t.match(/^heading[1-6]$/)).forEach(e => {
                    const n = e[7], i = new RegExp(`^(#{${n}})\\s$`);
                    new Io(this.editor, i, () => {
                        if (!t.isEnabled) return !1;
                        this.editor.execute("heading", {value: e})
                    })
                })
            }

            _addBlockQuoteAutoformats() {
                this.editor.commands.get("blockQuote") && new Io(this.editor, /^>\s$/, "blockQuote")
            }
        }, class extends Yi.a {
            static get requires() {
                return [Vo, Uo]
            }

            static get pluginName() {
                return "Bold"
            }
        }, class extends Yi.a {
            static get requires() {
                return [qo, $o]
            }

            static get pluginName() {
                return "Italic"
            }
        }, class extends Yi.a {
            static get requires() {
                return [Xo, er]
            }

            static get pluginName() {
                return "BlockQuote"
            }
        }, class extends Yi.a {
            static get pluginName() {
                return "CKFinder"
            }

            static get requires() {
                return [ar, ir, So]
            }
        }, class extends Yi.a {
            static get requires() {
                return [mr, ws, Ls]
            }

            static get pluginName() {
                return "EasyImage"
            }
        }, class extends Yi.a {
            static get requires() {
                return [$s, ra]
            }

            static get pluginName() {
                return "Heading"
            }
        }, ws, class extends Yi.a {
            static get requires() {
                return [ca]
            }

            static get pluginName() {
                return "ImageCaption"
            }
        }, class extends Yi.a {
            static get requires() {
                return [xa, Aa]
            }

            static get pluginName() {
                return "ImageStyle"
            }
        }, class extends Yi.a {
            static get requires() {
                return [Ta]
            }

            static get pluginName() {
                return "ImageToolbar"
            }

            afterInit() {
                const t = this.editor, e = t.t;
                t.plugins.get(Ta).register("image", {
                    ariaLabel: e("a"),
                    items: t.config.get("image.toolbar") || [],
                    getRelatedElement: Ir
                })
            }
        }, Ls, class extends Yi.a {
            static get requires() {
                return [kc, Pc]
            }

            static get pluginName() {
                return "Link"
            }
        }, class extends Yi.a {
            static get requires() {
                return [Zc, nl]
            }

            static get pluginName() {
                return "List"
            }
        }, class extends Yi.a {
            static get requires() {
                return [ml, kl, gl, Fr]
            }

            static get pluginName() {
                return "MediaEmbed"
            }
        }, Bs, class extends Yi.a {
            static get pluginName() {
                return "PasteFromOffice"
            }

            static get requires() {
                return [$i.a]
            }

            init() {
                const t = this.editor, e = [];
                e.push(new jl), e.push(new Al), t.plugins.get("Clipboard").on("inputTransformation", (t, n) => {
                    if (n.isTransformedWithPasteFromOffice) return;
                    const i = n.dataTransfer.getData("text/html"), o = e.find(t => t.isActive(i));
                    o && (o.execute(n), n.isTransformedWithPasteFromOffice = !0)
                }, {priority: "high"})
            }
        }, class extends Yi.a {
            static get requires() {
                return [Nd, Bd, Fr]
            }

            static get pluginName() {
                return "Table"
            }
        }, class extends Yi.a {
            static get requires() {
                return [Ta]
            }

            static get pluginName() {
                return "TableToolbar"
            }

            afterInit() {
                const t = this.editor, e = t.t, n = t.plugins.get(Ta), i = t.config.get("table.contentToolbar"),
                    o = t.config.get("table.tableToolbar");
                i && n.register("tableContent", {
                    ariaLabel: e("b"),
                    items: i,
                    getRelatedElement: ql
                }), o && n.register("table", {ariaLabel: e("b"), items: o, getRelatedElement: Hl})
            }
        }, class extends Yi.a {
            static get requires() {
                return [Yd, Qd, Fr, Jd.a]
            }

            static get pluginName() {
                return "Math"
            }
        }], Kd.defaultConfig = {
            toolbar: {items: ["heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", "imageUpload", "blockQuote", "insertTable", "mediaEmbed", "math", "undo", "redo"]},
            image: {toolbar: ["imageStyle:full", "imageStyle:side", "|", "imageTextAlternative"]},
            table: {contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]},
            language: "en"
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(83), o = 1, r = 4;
        e.a = function (t, e) {
            return e = "function" == typeof e ? e : void 0, Object(i.a)(t, o | r, e)
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(83), o = 4;
        e.a = function (t) {
            return Object(i.a)(t, o)
        }
    }, function (t, e, n) {
        "use strict";
        var i = n(31), o = n(97);
        e.a = function (t) {
            return Object(i.a)(t) && 1 === t.nodeType && !Object(o.a)(t)
        }
    }]).default
});
//# sourceMappingURL=ckeditor.js.map
