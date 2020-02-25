mathedit
========

Math-Edit plugin for CKEditor

A Math editor plugin for CKEditor.

Uses MathQuill to ( http://mathquill.com/ ) to provide a editable WYSIWYG-latex field 
in a CKEditor-dialog and CodeCogs ( http://www.codecogs.com/ ) to generate pictures 
from the latex values.

Original icon by David Vignoni ( http://icones.pro/en/edu-mathematics-png-image.html ) 
and licensed under LGPL.

Implementation is inspired by Vaadin-RichMathArea
( https://github.com/ripla/VMathQuill ) and CodeCogs Equation Editor CKEditor -plugin 
( http://ckeditor.com/addon/equation ). The main difference between this plugin and the 
'original' CodeCogs plugin is that this plugin aims to integrate more smoothly with 
CKEditor.

Special thanks also to creators of the great CKEditor -plugin tutorials:
  http://docs.cksource.com/CKEditor_3.x/Tutorials/Abbr_Plugin_Part_1 and
  http://docs.cksource.com/CKEditor_3.x/Tutorials/Abbr_Plugin_Part_2
  
Author: Riku Haavisto
License: GPL, LGPL and MPL

******

USAGE:

Requires CKEditor, JQuery and MathQuill

Add plugin folder (mathedit) to CKEditor's plugins-folder and add mathedit 
to CKEditor's config.extraplugins

This will add a 'mathedit' button to your CKEditor's toolbar (if you have 
not limited which buttons are shown) that you can use to open a dialog for editing 
latex with MathQuill. When click 'ok' on the dialog the edited latex will be 
rendered to a gif-image by CodeCogs and added to the cursor position in your 
CKEditor. You can further edit the math-value by right-clicking on it and 
choosing math-editor from the context-menu or by double-clicking on it.

*****

EXAMPLE:

A simple test-installation including all the needed dependencies can be found in 
'test'-folder. You should be able to run it by simple opening 'test/test.html' 
in a browser (won't probably open in IE though without little changes).

*****

TODO:

- the MathQuill-text field should be styled to stand out more
- integrating a visual latex-toolbar be a good idea
