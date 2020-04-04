/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module xxx
 */

import View from '@ckeditor/ckeditor5-ui/src/view';
import '@ckeditor/ckeditor5-ui/theme/components/inputtext/inputtext.css';


/**
 * The text input view class.
 *
 * @extends module:ui/view~View
 */
export default class MathquillInputTextView extends View {
	/**
	 * @inheritDoc
	 */
	constructor( locale ) {
		super( locale );

		/**
		 * The value of the input.
		 *
		 * @observable
		 * @member {String} #value
		 */
		this.set( 'value' );

		/**
		 * The `id` attribute of the input (i.e. to pair with a `<label>` element).
		 *
		 * @observable
		 * @member {String} #id
		 */
		this.set( 'id' );

		/**
		 * The `placeholder` attribute of the input.
		 *
		 * @observable
		 * @member {String} #placeholder
		 */
		this.set( 'placeholder' );

		/**
		 * Controls whether the input view is in read-only mode.
		 *
		 * @observable
		 * @member {Boolean} #isReadOnly
		 */
		this.set( 'isReadOnly', false );

		/**
		 * Set to `true` when the field has some error. Usually controlled via
		 * {@link module:ui/labeledinput/labeledinputview~LabeledInputView#errorText}.
		 *
		 * @observable
		 * @member {Boolean} #hasError
		 */
		this.set( 'hasError', false );

		/**
		 * The `id` of the element describing this field, e.g. when it has
		 * some error, it helps screen readers read the error text.
		 *
		 * @observable
		 * @member {Boolean} #ariaDescribedById
		 */
		this.set( 'ariaDescribedById' );

		const bind = this.bindTemplate;

		/*this.setTemplate( {
			tag: 'input',
			attributes: {
				type: 'text',
				class: [
					'ck',
					'ck-input',
					'ck-input-text',
					bind.if( 'hasError', 'ck-error' )
				],
				id: bind.to( 'id' ),
				placeholder: bind.to( 'placeholder' ),
				readonly: bind.to( 'isReadOnly' ),
				'aria-invalid': bind.if( 'hasError', true ),
				'aria-describedby': bind.to( 'ariaDescribedById' )
			},
			on: {
				input: bind.to( 'input' )
			}
		} );*/

		/*const mqTarget = document.createElement("div");
		const mqField = MQ.MathField(mqTarget, {
			handlers: {
				edit: function() {
					var enteredMath = mqField.latex(); // Get entered math in LaTeX format
					//checkAnswer(enteredMath);
				}
			}
		});
		this.element = mqField;*/

		/*const newElm = document.createElement("div");
        newElm.innerHTML = "<div><button>Btn1</button><span>Hello world</span><div><a href='#'>clickme</a></div></div>";
		this.element = newElm;*/

		/*const newElm = document.createElement("div");
		newElm.innerHTML = "<div><div id='mqTargetId'></div></div>";
		this.element = newElm;

		const mqTarget = document.getElementById('mqTargetId');
		const mqMathField = MQ.MathField(mqTarget, {
			handlers: {
				edit: function() {
					const enteredMath = mqMathField.latex(); // Get entered math in LaTeX format
					//checkAnswer(enteredMath);
				}
			}
		});*/

		const newElm = document.createElement("div");
		const mqMathField = MQ.MathField(newElm, {
			handlers: {
				edit: function() {
					const enteredMath = mqMathField.latex(); // Get entered math in LaTeX format
					//checkAnswer(enteredMath);
				}
			}
		});
		newElm.style.width = "250px";
		this.element = newElm;
		this.element.select = function(){
			console.log("select()");
		};
		this.element.focus = function(){
			console.log("focus()");
		};
		Object.defineProperty(this.element, 'value',
			{
				get: function() {
					// return "bla \\sqrt{a/b}";
					return mqMathField.latex()
				},
				set: function (v) {
					// console.log("set:"+v);
					mqMathField.latex(v)
				}
			}
		);

		/**
		 * Fired when the user types in the input. Corresponds to the native
		 * DOM `input` event.
		 *
		 * @event input
		 */
	}

	/**
	 * @inheritDoc
	 */
	render() {
		super.render();

		//TODO start.[NTS]
		const setValue = value => {
			this.element.value = ( !value && value !== 0 ) ? '' : value;
		};

		setValue( this.value );

		// Bind `this.value` to the DOM element's value.
		// We cannot use `value` DOM attribute because removing it on Edge does not clear the DOM element's value property.
		this.on( 'change:value', ( evt, name, value ) => {
			setValue( value );
		} );
		//TODO end.[NTS]
	}

	/**
	 * Moves the focus to the input and selects the value.
	 */
	select() {
		this.element.select();
	}

	/**
	 * Focuses the input.
	 */
	focus() {
		this.element.focus();
	}
}
