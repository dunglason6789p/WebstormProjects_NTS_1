import View from '@ckeditor/ckeditor5-ui/src/view';

import { renderEquation } from '../utils';

/**The preview part of the `balloon form`.*/
export default class MathView extends View {
	constructor( engine, locale, previewUid ) {
		super( locale );

		this.engine = engine;
		this.previewUid = previewUid;

		this.set( 'value', '' );
		this.set( 'display', false );

		this.on( 'change', () => {
			if ( this.isRendered ) {
				this.updateMath();
			}
		} );

		this.setTemplate( {
			tag: 'div',
			attributes: {
				class: [
					'ck',
					'ck-math-preview'
				],
			}
		} );
	}

	updateMath() {
		renderEquation( this.value, this.element, this.engine, this.display, true, this.previewUid );
	}

	render() {
		super.render();
		this.updateMath();
	}
}
