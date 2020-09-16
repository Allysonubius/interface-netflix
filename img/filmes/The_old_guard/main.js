<!DOCTYPE html>
<!-- saved from url=(0116)https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/f38f7011-2bd0-4646-966b-2a229f0fd7eb -->
<html lang="pt-br" class=""><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style id="autocompletion.css">.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #3a674e;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);    position: absolute;    z-index: 2;}.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid rgba(109, 150, 13, 0.8);    background: rgba(58, 103, 78, 0.62);}.ace_completion-meta {    opacity: 0.5;    margin: 0.9em;}.ace_completion-message {    color: blue;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #2d69c7;}.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #93ca12;}.ace_editor.ace_autocomplete {    width: 300px;    z-index: 200000;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;    background: #fefefe;    color: #111;}.ace_dark.ace_editor.ace_autocomplete {    border: 1px #484747 solid;    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);    line-height: 1.4;    background: #25282c;    color: #c1c1c1;}
/*# sourceURL=ace/css/autocompletion.css */</style><style>.ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}</style><style id="ace-xcode">.ace-xcode .ace_gutter {background: #e8e8e8;color: #333}.ace-xcode .ace_print-margin {width: 1px;background: #e8e8e8}.ace-xcode {background-color: #FFFFFF;color: #000000}.ace-xcode .ace_cursor {color: #000000}.ace-xcode .ace_marker-layer .ace_selection {background: #B5D5FF}.ace-xcode.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #FFFFFF;}.ace-xcode .ace_marker-layer .ace_step {background: rgb(198, 219, 174)}.ace-xcode .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #BFBFBF}.ace-xcode .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.071)}.ace-xcode .ace_gutter-active-line {background-color: rgba(0, 0, 0, 0.071)}.ace-xcode .ace_marker-layer .ace_selected-word {border: 1px solid #B5D5FF}.ace-xcode .ace_constant.ace_language,.ace-xcode .ace_keyword,.ace-xcode .ace_meta,.ace-xcode .ace_variable.ace_language {color: #C800A4}.ace-xcode .ace_invisible {color: #BFBFBF}.ace-xcode .ace_constant.ace_character,.ace-xcode .ace_constant.ace_other {color: #275A5E}.ace-xcode .ace_constant.ace_numeric {color: #3A00DC}.ace-xcode .ace_entity.ace_other.ace_attribute-name,.ace-xcode .ace_support.ace_constant,.ace-xcode .ace_support.ace_function {color: #450084}.ace-xcode .ace_fold {background-color: #C800A4;border-color: #000000}.ace-xcode .ace_entity.ace_name.ace_tag,.ace-xcode .ace_support.ace_class,.ace-xcode .ace_support.ace_type {color: #790EAD}.ace-xcode .ace_storage {color: #C900A4}.ace-xcode .ace_string {color: #DF0002}.ace-xcode .ace_comment {color: #008E00}.ace-xcode .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==) right repeat-y}
/*# sourceURL=ace/css/ace-xcode */</style><style id="ace-twilight">.ace-twilight .ace_gutter {background: #232323;color: #E2E2E2}.ace-twilight .ace_print-margin {width: 1px;background: #232323}.ace-twilight {background-color: #141414;color: #F8F8F8}.ace-twilight .ace_cursor {color: #A7A7A7}.ace-twilight .ace_marker-layer .ace_selection {background: rgba(221, 240, 255, 0.20)}.ace-twilight.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #141414;}.ace-twilight .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-twilight .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(255, 255, 255, 0.25)}.ace-twilight .ace_marker-layer .ace_active-line {background: rgba(255, 255, 255, 0.031)}.ace-twilight .ace_gutter-active-line {background-color: rgba(255, 255, 255, 0.031)}.ace-twilight .ace_marker-layer .ace_selected-word {border: 1px solid rgba(221, 240, 255, 0.20)}.ace-twilight .ace_invisible {color: rgba(255, 255, 255, 0.25)}.ace-twilight .ace_keyword,.ace-twilight .ace_meta {color: #CDA869}.ace-twilight .ace_constant,.ace-twilight .ace_constant.ace_character,.ace-twilight .ace_constant.ace_character.ace_escape,.ace-twilight .ace_constant.ace_other,.ace-twilight .ace_heading,.ace-twilight .ace_markup.ace_heading,.ace-twilight .ace_support.ace_constant {color: #CF6A4C}.ace-twilight .ace_invalid.ace_illegal {color: #F8F8F8;background-color: rgba(86, 45, 86, 0.75)}.ace-twilight .ace_invalid.ace_deprecated {text-decoration: underline;font-style: italic;color: #D2A8A1}.ace-twilight .ace_support {color: #9B859D}.ace-twilight .ace_fold {background-color: #AC885B;border-color: #F8F8F8}.ace-twilight .ace_support.ace_function {color: #DAD085}.ace-twilight .ace_list,.ace-twilight .ace_markup.ace_list,.ace-twilight .ace_storage {color: #F9EE98}.ace-twilight .ace_entity.ace_name.ace_function,.ace-twilight .ace_meta.ace_tag,.ace-twilight .ace_variable {color: #AC885B}.ace-twilight .ace_string {color: #8F9D6A}.ace-twilight .ace_string.ace_regexp {color: #E9C062}.ace-twilight .ace_comment {font-style: italic;color: #5F5A60}.ace-twilight .ace_variable {color: #7587A6}.ace-twilight .ace_xml-pe {color: #494949}.ace-twilight .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC) right repeat-y}
/*# sourceURL=ace/css/ace-twilight */</style><style id="ace-tomorrow-night">.ace-tomorrow-night .ace_gutter {background: #25282c;color: #C5C8C6}.ace-tomorrow-night .ace_print-margin {width: 1px;background: #25282c}.ace-tomorrow-night {background-color: #1D1F21;color: #C5C8C6}.ace-tomorrow-night .ace_cursor {color: #AEAFAD}.ace-tomorrow-night .ace_marker-layer .ace_selection {background: #373B41}.ace-tomorrow-night.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #1D1F21;}.ace-tomorrow-night .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-tomorrow-night .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #4B4E55}.ace-tomorrow-night .ace_marker-layer .ace_active-line {background: #282A2E}.ace-tomorrow-night .ace_gutter-active-line {background-color: #282A2E}.ace-tomorrow-night .ace_marker-layer .ace_selected-word {border: 1px solid #373B41}.ace-tomorrow-night .ace_invisible {color: #4B4E55}.ace-tomorrow-night .ace_keyword,.ace-tomorrow-night .ace_meta,.ace-tomorrow-night .ace_storage,.ace-tomorrow-night .ace_storage.ace_type,.ace-tomorrow-night .ace_support.ace_type {color: #B294BB}.ace-tomorrow-night .ace_keyword.ace_operator {color: #8ABEB7}.ace-tomorrow-night .ace_constant.ace_character,.ace-tomorrow-night .ace_constant.ace_language,.ace-tomorrow-night .ace_constant.ace_numeric,.ace-tomorrow-night .ace_keyword.ace_other.ace_unit,.ace-tomorrow-night .ace_support.ace_constant,.ace-tomorrow-night .ace_variable.ace_parameter {color: #DE935F}.ace-tomorrow-night .ace_constant.ace_other {color: #CED1CF}.ace-tomorrow-night .ace_invalid {color: #CED2CF;background-color: #DF5F5F}.ace-tomorrow-night .ace_invalid.ace_deprecated {color: #CED2CF;background-color: #B798BF}.ace-tomorrow-night .ace_fold {background-color: #81A2BE;border-color: #C5C8C6}.ace-tomorrow-night .ace_entity.ace_name.ace_function,.ace-tomorrow-night .ace_support.ace_function,.ace-tomorrow-night .ace_variable {color: #81A2BE}.ace-tomorrow-night .ace_support.ace_class,.ace-tomorrow-night .ace_support.ace_type {color: #F0C674}.ace-tomorrow-night .ace_heading,.ace-tomorrow-night .ace_markup.ace_heading,.ace-tomorrow-night .ace_string {color: #B5BD68}.ace-tomorrow-night .ace_entity.ace_name.ace_tag,.ace-tomorrow-night .ace_entity.ace_other.ace_attribute-name,.ace-tomorrow-night .ace_meta.ace_tag,.ace-tomorrow-night .ace_string.ace_regexp,.ace-tomorrow-night .ace_variable {color: #CC6666}.ace-tomorrow-night .ace_comment {color: #969896}.ace-tomorrow-night .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y}
/*# sourceURL=ace/css/ace-tomorrow-night */</style><style id="ace-tomorrow">.ace-tomorrow .ace_gutter {background: #f6f6f6;color: #4D4D4C}.ace-tomorrow .ace_print-margin {width: 1px;background: #f6f6f6}.ace-tomorrow {background-color: #FFFFFF;color: #4D4D4C}.ace-tomorrow .ace_cursor {color: #AEAFAD}.ace-tomorrow .ace_marker-layer .ace_selection {background: #D6D6D6}.ace-tomorrow.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #FFFFFF;}.ace-tomorrow .ace_marker-layer .ace_step {background: rgb(255, 255, 0)}.ace-tomorrow .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #D1D1D1}.ace-tomorrow .ace_marker-layer .ace_active-line {background: #EFEFEF}.ace-tomorrow .ace_gutter-active-line {background-color : #dcdcdc}.ace-tomorrow .ace_marker-layer .ace_selected-word {border: 1px solid #D6D6D6}.ace-tomorrow .ace_invisible {color: #D1D1D1}.ace-tomorrow .ace_keyword,.ace-tomorrow .ace_meta,.ace-tomorrow .ace_storage,.ace-tomorrow .ace_storage.ace_type,.ace-tomorrow .ace_support.ace_type {color: #8959A8}.ace-tomorrow .ace_keyword.ace_operator {color: #3E999F}.ace-tomorrow .ace_constant.ace_character,.ace-tomorrow .ace_constant.ace_language,.ace-tomorrow .ace_constant.ace_numeric,.ace-tomorrow .ace_keyword.ace_other.ace_unit,.ace-tomorrow .ace_support.ace_constant,.ace-tomorrow .ace_variable.ace_parameter {color: #F5871F}.ace-tomorrow .ace_constant.ace_other {color: #666969}.ace-tomorrow .ace_invalid {color: #FFFFFF;background-color: #C82829}.ace-tomorrow .ace_invalid.ace_deprecated {color: #FFFFFF;background-color: #8959A8}.ace-tomorrow .ace_fold {background-color: #4271AE;border-color: #4D4D4C}.ace-tomorrow .ace_entity.ace_name.ace_function,.ace-tomorrow .ace_support.ace_function,.ace-tomorrow .ace_variable {color: #4271AE}.ace-tomorrow .ace_support.ace_class,.ace-tomorrow .ace_support.ace_type {color: #C99E00}.ace-tomorrow .ace_heading,.ace-tomorrow .ace_markup.ace_heading,.ace-tomorrow .ace_string {color: #718C00}.ace-tomorrow .ace_entity.ace_name.ace_tag,.ace-tomorrow .ace_entity.ace_other.ace_attribute-name,.ace-tomorrow .ace_meta.ace_tag,.ace-tomorrow .ace_string.ace_regexp,.ace-tomorrow .ace_variable {color: #C82829}.ace-tomorrow .ace_comment {color: #8E908C}.ace-tomorrow .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bdu3f/BwAlfgctduB85QAAAABJRU5ErkJggg==) right repeat-y}
/*# sourceURL=ace/css/ace-tomorrow */</style><style id="ace-terminal-theme">.ace-terminal-theme .ace_gutter {background: #1a0005;color: steelblue}.ace-terminal-theme .ace_print-margin {width: 1px;background: #1a1a1a}.ace-terminal-theme {background-color: black;color: #DEDEDE}.ace-terminal-theme .ace_cursor {color: #9F9F9F}.ace-terminal-theme .ace_marker-layer .ace_selection {background: #424242}.ace-terminal-theme.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px black;}.ace-terminal-theme .ace_marker-layer .ace_step {background: rgb(0, 0, 0)}.ace-terminal-theme .ace_marker-layer .ace_bracket {background: #090;}.ace-terminal-theme .ace_marker-layer .ace_bracket-start {background: #090;}.ace-terminal-theme .ace_marker-layer .ace_bracket-unmatched {margin: -1px 0 0 -1px;border: 1px solid #900}.ace-terminal-theme .ace_marker-layer .ace_active-line {background: #2A2A2A}.ace-terminal-theme .ace_gutter-active-line {background-color: #2A112A}.ace-terminal-theme .ace_marker-layer .ace_selected-word {border: 1px solid #424242}.ace-terminal-theme .ace_invisible {color: #343434}.ace-terminal-theme .ace_keyword,.ace-terminal-theme .ace_meta,.ace-terminal-theme .ace_storage,.ace-terminal-theme .ace_storage.ace_type,.ace-terminal-theme .ace_support.ace_type {color: tomato}.ace-terminal-theme .ace_keyword.ace_operator {color: deeppink}.ace-terminal-theme .ace_constant.ace_character,.ace-terminal-theme .ace_constant.ace_language,.ace-terminal-theme .ace_constant.ace_numeric,.ace-terminal-theme .ace_keyword.ace_other.ace_unit,.ace-terminal-theme .ace_support.ace_constant,.ace-terminal-theme .ace_variable.ace_parameter {color: #E78C45}.ace-terminal-theme .ace_constant.ace_other {color: gold}.ace-terminal-theme .ace_invalid {color: yellow;background-color: red}.ace-terminal-theme .ace_invalid.ace_deprecated {color: #CED2CF;background-color: #B798BF}.ace-terminal-theme .ace_fold {background-color: #7AA6DA;border-color: #DEDEDE}.ace-terminal-theme .ace_entity.ace_name.ace_function,.ace-terminal-theme .ace_support.ace_function,.ace-terminal-theme .ace_variable {color: #7AA6DA}.ace-terminal-theme .ace_support.ace_class,.ace-terminal-theme .ace_support.ace_type {color: #E7C547}.ace-terminal-theme .ace_heading,.ace-terminal-theme .ace_string {color: #B9CA4A}.ace-terminal-theme .ace_entity.ace_name.ace_tag,.ace-terminal-theme .ace_entity.ace_other.ace_attribute-name,.ace-terminal-theme .ace_meta.ace_tag,.ace-terminal-theme .ace_string.ace_regexp,.ace-terminal-theme .ace_variable {color: #D54E53}.ace-terminal-theme .ace_comment {color: orangered}.ace-terminal-theme .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYLBWV/8PAAK4AYnhiq+xAAAAAElFTkSuQmCC) right repeat-y;}
/*# sourceURL=ace/css/ace-terminal-theme */</style><style id="ace-sqlserver">.ace-sqlserver .ace_gutter {background: #ebebeb;color: #333;overflow: hidden;}.ace-sqlserver .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-sqlserver {background-color: #FFFFFF;color: black;}.ace-sqlserver .ace_identifier {color: black;}.ace-sqlserver .ace_keyword {color: #0000FF;}.ace-sqlserver .ace_numeric {color: black;}.ace-sqlserver .ace_storage {color: #11B7BE;}.ace-sqlserver .ace_keyword.ace_operator,.ace-sqlserver .ace_lparen,.ace-sqlserver .ace_rparen,.ace-sqlserver .ace_punctuation {color: #808080;}.ace-sqlserver .ace_set.ace_statement {color: #0000FF;text-decoration: underline;}.ace-sqlserver .ace_cursor {color: black;}.ace-sqlserver .ace_invisible {color: rgb(191, 191, 191);}.ace-sqlserver .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-sqlserver .ace_constant.ace_language {color: #979797;}.ace-sqlserver .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-sqlserver .ace_invalid {background-color: rgb(153, 0, 0);color: white;}.ace-sqlserver .ace_support.ace_function {color: #FF00FF;}.ace-sqlserver .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-sqlserver .ace_class {color: #008080;}.ace-sqlserver .ace_support.ace_other {color: #6D79DE;}.ace-sqlserver .ace_variable.ace_parameter {font-style: italic;color: #FD971F;}.ace-sqlserver .ace_comment {color: #008000;}.ace-sqlserver .ace_constant.ace_numeric {color: black;}.ace-sqlserver .ace_variable {color: rgb(49, 132, 149);}.ace-sqlserver .ace_xml-pe {color: rgb(104, 104, 91);}.ace-sqlserver .ace_support.ace_storedprocedure {color: #800000;}.ace-sqlserver .ace_heading {color: rgb(12, 7, 255);}.ace-sqlserver .ace_list {color: rgb(185, 6, 144);}.ace-sqlserver .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-sqlserver .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-sqlserver .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-sqlserver .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-sqlserver .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-sqlserver .ace_gutter-active-line {background-color: #dcdcdc;}.ace-sqlserver .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-sqlserver .ace_meta.ace_tag {color: #0000FF;}.ace-sqlserver .ace_string.ace_regex {color: #FF0000;}.ace-sqlserver .ace_string {color: #FF0000;}.ace-sqlserver .ace_entity.ace_other.ace_attribute-name {color: #994409;}.ace-sqlserver .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-sqlserver */</style><style id="ace-github">.ace-github .ace_gutter {background: #e8e8e8;color: #AAA;}.ace-github  {background: #fff;color: #000;}.ace-github .ace_keyword {font-weight: bold;}.ace-github .ace_string {color: #D14;}.ace-github .ace_variable.ace_class {color: teal;}.ace-github .ace_constant.ace_numeric {color: #099;}.ace-github .ace_constant.ace_buildin {color: #0086B3;}.ace-github .ace_support.ace_function {color: #0086B3;}.ace-github .ace_comment {color: #998;font-style: italic;}.ace-github .ace_variable.ace_language  {color: #0086B3;}.ace-github .ace_paren {font-weight: bold;}.ace-github .ace_boolean {font-weight: bold;}.ace-github .ace_string.ace_regexp {color: #009926;font-weight: normal;}.ace-github .ace_variable.ace_instance {color: teal;}.ace-github .ace_constant.ace_language {font-weight: bold;}.ace-github .ace_cursor {color: black;}.ace-github.ace_focus .ace_marker-layer .ace_active-line {background: rgb(255, 255, 204);}.ace-github .ace_marker-layer .ace_active-line {background: rgb(245, 245, 245);}.ace-github .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-github.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-github.ace_nobold .ace_line > span {font-weight: normal !important;}.ace-github .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-github .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-github .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-github .ace_gutter-active-line {background-color : rgba(0, 0, 0, 0.07);}.ace-github .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-github .ace_invisible {color: #BFBFBF}.ace-github .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-github .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-github */</style><style id="ace-eclipse">.ace-eclipse .ace_gutter {background: #ebebeb;border-right: 1px solid rgb(159, 159, 159);color: rgb(136, 136, 136);}.ace-eclipse .ace_print-margin {width: 1px;background: #ebebeb;}.ace-eclipse {background-color: #FFFFFF;color: black;}.ace-eclipse .ace_fold {background-color: rgb(60, 76, 114);}.ace-eclipse .ace_cursor {color: black;}.ace-eclipse .ace_storage,.ace-eclipse .ace_keyword,.ace-eclipse .ace_variable {color: rgb(127, 0, 85);}.ace-eclipse .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-eclipse .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-eclipse .ace_function {color: rgb(60, 76, 114);}.ace-eclipse .ace_string {color: rgb(42, 0, 255);}.ace-eclipse .ace_comment {color: rgb(113, 150, 130);}.ace-eclipse .ace_comment.ace_doc {color: rgb(63, 95, 191);}.ace-eclipse .ace_comment.ace_doc.ace_tag {color: rgb(127, 159, 191);}.ace-eclipse .ace_constant.ace_numeric {color: darkblue;}.ace-eclipse .ace_tag {color: rgb(25, 118, 116);}.ace-eclipse .ace_type {color: rgb(127, 0, 127);}.ace-eclipse .ace_xml-pe {color: rgb(104, 104, 91);}.ace-eclipse .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-eclipse .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-eclipse .ace_meta.ace_tag {color:rgb(25, 118, 116);}.ace-eclipse .ace_invisible {color: #ddd;}.ace-eclipse .ace_entity.ace_other.ace_attribute-name {color:rgb(127, 0, 127);}.ace-eclipse .ace_marker-layer .ace_step {background: rgb(255, 255, 0);}.ace-eclipse .ace_active-line {background: rgb(232, 242, 254);}.ace-eclipse .ace_gutter-active-line {background-color : #DADADA;}.ace-eclipse .ace_marker-layer .ace_selected-word {border: 1px solid rgb(181, 213, 255);}.ace-eclipse .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-eclipse */</style><style id="ace-dreamweaver">.ace-dreamweaver .ace_gutter {background: #e8e8e8;color: #333;}.ace-dreamweaver .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-dreamweaver {background-color: #FFFFFF;color: black;}.ace-dreamweaver .ace_fold {background-color: #757AD8;}.ace-dreamweaver .ace_cursor {color: black;}.ace-dreamweaver .ace_invisible {color: rgb(191, 191, 191);}.ace-dreamweaver .ace_storage,.ace-dreamweaver .ace_keyword {color: blue;}.ace-dreamweaver .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-dreamweaver .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-dreamweaver .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-dreamweaver .ace_invalid {background-color: rgb(153, 0, 0);color: white;}.ace-dreamweaver .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-dreamweaver .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-dreamweaver .ace_support.ace_type,.ace-dreamweaver .ace_support.ace_class {color: #009;}.ace-dreamweaver .ace_support.ace_php_tag {color: #f00;}.ace-dreamweaver .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-dreamweaver .ace_string {color: #00F;}.ace-dreamweaver .ace_comment {color: rgb(76, 136, 107);}.ace-dreamweaver .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-dreamweaver .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-dreamweaver .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-dreamweaver .ace_variable {color: #06F}.ace-dreamweaver .ace_xml-pe {color: rgb(104, 104, 91);}.ace-dreamweaver .ace_entity.ace_name.ace_function {color: #00F;}.ace-dreamweaver .ace_heading {color: rgb(12, 7, 255);}.ace-dreamweaver .ace_list {color:rgb(185, 6, 144);}.ace-dreamweaver .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-dreamweaver .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-dreamweaver .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-dreamweaver .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-dreamweaver .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-dreamweaver .ace_gutter-active-line {background-color : #DCDCDC;}.ace-dreamweaver .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-dreamweaver .ace_meta.ace_tag {color:#009;}.ace-dreamweaver .ace_meta.ace_tag.ace_anchor {color:#060;}.ace-dreamweaver .ace_meta.ace_tag.ace_form {color:#F90;}.ace-dreamweaver .ace_meta.ace_tag.ace_image {color:#909;}.ace-dreamweaver .ace_meta.ace_tag.ace_script {color:#900;}.ace-dreamweaver .ace_meta.ace_tag.ace_style {color:#909;}.ace-dreamweaver .ace_meta.ace_tag.ace_table {color:#099;}.ace-dreamweaver .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-dreamweaver .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-dreamweaver */</style><style id="ace-dracula">.ace-dracula .ace_gutter {background: #282a36;color: rgb(144,145,148)}.ace-dracula .ace_print-margin {width: 1px;background: #44475a}.ace-dracula {background-color: #282a36;color: #f8f8f2}.ace-dracula .ace_cursor {color: #f8f8f0}.ace-dracula .ace_marker-layer .ace_selection {background: #44475a}.ace-dracula.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #282a36;border-radius: 2px}.ace-dracula .ace_marker-layer .ace_step {background: rgb(198, 219, 174)}.ace-dracula .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #a29709}.ace-dracula .ace_marker-layer .ace_active-line {background: #44475a}.ace-dracula .ace_gutter-active-line {background-color: #44475a}.ace-dracula .ace_marker-layer .ace_selected-word {box-shadow: 0px 0px 0px 1px #a29709;border-radius: 3px;}.ace-dracula .ace_fold {background-color: #50fa7b;border-color: #f8f8f2}.ace-dracula .ace_keyword {color: #ff79c6}.ace-dracula .ace_constant.ace_language {color: #bd93f9}.ace-dracula .ace_constant.ace_numeric {color: #bd93f9}.ace-dracula .ace_constant.ace_character {color: #bd93f9}.ace-dracula .ace_constant.ace_character.ace_escape {color: #ff79c6}.ace-dracula .ace_constant.ace_other {color: #bd93f9}.ace-dracula .ace_support.ace_function {color: #8be9fd}.ace-dracula .ace_support.ace_constant {color: #6be5fd}.ace-dracula .ace_support.ace_class {font-style: italic;color: #66d9ef}.ace-dracula .ace_support.ace_type {font-style: italic;color: #66d9ef}.ace-dracula .ace_storage {color: #ff79c6}.ace-dracula .ace_storage.ace_type {font-style: italic;color: #8be9fd}.ace-dracula .ace_invalid {color: #F8F8F0;background-color: #ff79c6}.ace-dracula .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #bd93f9}.ace-dracula .ace_string {color: #f1fa8c}.ace-dracula .ace_comment {color: #6272a4}.ace-dracula .ace_variable {color: #50fa7b}.ace-dracula .ace_variable.ace_parameter {font-style: italic;color: #ffb86c}.ace-dracula .ace_entity.ace_other.ace_attribute-name {color: #50fa7b}.ace-dracula .ace_entity.ace_name.ace_function {color: #50fa7b}.ace-dracula .ace_entity.ace_name.ace_tag {color: #ff79c6}.ace-dracula .ace_invisible {color: #626680;}.ace-dracula .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y}
/*# sourceURL=ace/css/ace-dracula */</style><style id="ace-chrome">.ace-chrome .ace_gutter {background: #ebebeb;color: #333;overflow : hidden;}.ace-chrome .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-chrome {background-color: #FFFFFF;color: black;}.ace-chrome .ace_cursor {color: black;}.ace-chrome .ace_invisible {color: rgb(191, 191, 191);}.ace-chrome .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-chrome .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-chrome .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-chrome .ace_invalid {background-color: rgb(153, 0, 0);color: white;}.ace-chrome .ace_fold {}.ace-chrome .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-chrome .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-chrome .ace_support.ace_type,.ace-chrome .ace_support.ace_class.ace-chrome .ace_support.ace_other {color: rgb(109, 121, 222);}.ace-chrome .ace_variable.ace_parameter {font-style:italic;color:#FD971F;}.ace-chrome .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-chrome .ace_comment {color: #236e24;}.ace-chrome .ace_comment.ace_doc {color: #236e24;}.ace-chrome .ace_comment.ace_doc.ace_tag {color: #236e24;}.ace-chrome .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-chrome .ace_variable {color: rgb(49, 132, 149);}.ace-chrome .ace_xml-pe {color: rgb(104, 104, 91);}.ace-chrome .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-chrome .ace_heading {color: rgb(12, 7, 255);}.ace-chrome .ace_list {color:rgb(185, 6, 144);}.ace-chrome .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-chrome .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-chrome .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-chrome .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-chrome .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-chrome .ace_gutter-active-line {background-color : #dcdcdc;}.ace-chrome .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-chrome .ace_storage,.ace-chrome .ace_keyword,.ace-chrome .ace_meta.ace_tag {color: rgb(147, 15, 128);}.ace-chrome .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-chrome .ace_string {color: #1A1AA6;}.ace-chrome .ace_entity.ace_other.ace_attribute-name {color: #994409;}.ace-chrome .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-chrome */</style><style id="ace-monokai">.ace-monokai .ace_gutter {background: #2F3129;color: #8F908A}.ace-monokai .ace_print-margin {width: 1px;background: #555651}.ace-monokai {background-color: #272822;color: #F8F8F2}.ace-monokai .ace_cursor {color: #F8F8F0}.ace-monokai .ace_marker-layer .ace_selection {background: #49483E}.ace-monokai.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #272822;}.ace-monokai .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-monokai .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #49483E}.ace-monokai .ace_marker-layer .ace_active-line {background: #202020}.ace-monokai .ace_gutter-active-line {background-color: #272727}.ace-monokai .ace_marker-layer .ace_selected-word {border: 1px solid #49483E}.ace-monokai .ace_invisible {color: #52524d}.ace-monokai .ace_entity.ace_name.ace_tag,.ace-monokai .ace_keyword,.ace-monokai .ace_meta.ace_tag,.ace-monokai .ace_storage {color: #F92672}.ace-monokai .ace_punctuation,.ace-monokai .ace_punctuation.ace_tag {color: #fff}.ace-monokai .ace_constant.ace_character,.ace-monokai .ace_constant.ace_language,.ace-monokai .ace_constant.ace_numeric,.ace-monokai .ace_constant.ace_other {color: #AE81FF}.ace-monokai .ace_invalid {color: #F8F8F0;background-color: #F92672}.ace-monokai .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #AE81FF}.ace-monokai .ace_support.ace_constant,.ace-monokai .ace_support.ace_function {color: #66D9EF}.ace-monokai .ace_fold {background-color: #A6E22E;border-color: #F8F8F2}.ace-monokai .ace_storage.ace_type,.ace-monokai .ace_support.ace_class,.ace-monokai .ace_support.ace_type {font-style: italic;color: #66D9EF}.ace-monokai .ace_entity.ace_name.ace_function,.ace-monokai .ace_entity.ace_other,.ace-monokai .ace_entity.ace_other.ace_attribute-name,.ace-monokai .ace_variable {color: #A6E22E}.ace-monokai .ace_variable.ace_parameter {font-style: italic;color: #FD971F}.ace-monokai .ace_string {color: #E6DB74}.ace-monokai .ace_comment {color: #75715E}.ace-monokai .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y}
/*# sourceURL=ace/css/ace-monokai */</style><style>    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }</style><style id="ace-tm">.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-tm */</style><style id="ace_editor.css">.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_editor {position: relative;overflow: hidden;padding: 0;font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;box-sizing: border-box;min-width: 100%;contain: style size layout;font-variant-ligatures: no-common-ligatures;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: '';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;contain: style size layout;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {position: absolute;top: 0;left: 0;right: 0;padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {contain: strict;position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;contain: strict;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: transparent;color: inherit;z-index: 1000;opacity: 1;}.ace_composition_placeholder { color: transparent }.ace_composition_marker { border-bottom: 1px solid;position: absolute;border-radius: 0;margin-top: 1px;}[ace_nocontext=true] {transform: none!important;filter: none!important;clip-path: none!important;mask : none!important;contain: none!important;perspective: none!important;mix-blend-mode: initial!important;z-index: auto;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;height: 1000000px;contain: style size layout;}.ace_text-layer {font: inherit !important;position: absolute;height: 1000000px;width: 1000000px;contain: style size layout;}.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {contain: style size layout;position: absolute;top: 0;left: 0;right: 0;}.ace_hidpi .ace_text-layer,.ace_hidpi .ace_gutter-layer,.ace_hidpi .ace_content,.ace_hidpi .ace_gutter {contain: strict;will-change: transform;}.ace_hidpi .ace_text-layer > .ace_line, .ace_hidpi .ace_text-layer > .ace_line_group {contain: strict;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {opacity: 0;}.ace_smooth-blinking .ace_cursor {transition: opacity 0.18s;}.ace_animate-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: step-end;animation-name: blink-ace-animate;animation-iteration-count: infinite;}.ace_animate-blinking.ace_smooth-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: ease-in-out;animation-name: blink-ace-animate-smooth;}@keyframes blink-ace-animate {from, to { opacity: 1; }60% { opacity: 0; }}@keyframes blink-ace-animate-smooth {from, to { opacity: 1; }45% { opacity: 1; }60% { opacity: 0; }85% { opacity: 0; }}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_error_bracket {position: absolute;border-bottom: 1px solid #DE5555;border-radius: 0;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;box-sizing: border-box;}.ace_line .ace_fold {box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_inline_button {border: 1px solid lightgray;display: inline-block;margin: -1px 8px;padding: 0 5px;pointer-events: auto;cursor: pointer;}.ace_inline_button:hover {border-color: gray;background: rgba(200,200,200,0.2);display: inline-block;pointer-events: auto;}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_mobile-menu {position: absolute;line-height: 1.5;border-radius: 4px;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;background: white;box-shadow: 1px 3px 2px grey;border: 1px solid #dcdcdc;color: black;}.ace_dark > .ace_mobile-menu {background: #333;color: #ccc;box-shadow: 1px 3px 2px grey;border: 1px solid #444;}.ace_mobile-button {padding: 2px;cursor: pointer;overflow: hidden;}.ace_mobile-button:hover {background-color: #eee;opacity:1;}.ace_mobile-button:active {background-color: #ddd;}.ace_placeholder {font-family: arial;transform: scale(0.9);transform-origin: left;white-space: pre;opacity: 0.7;margin: 0 10px;}
/*# sourceURL=ace/css/ace_editor.css */</style><script async="" src="./main_files/insight.old.min.js"></script><script type="text/javascript" async="" src="./main_files/amplitude-5.2.2-min.gz.js"></script><script type="text/javascript" id="www-widgetapi-script" src="./main_files/www-widgetapi.js" async=""></script><script src="./main_files/diffuser.js" async=""></script><script type="text/javascript" async="" src="./main_files/insight.min.js"></script><script type="text/javascript" async="" src="./main_files/analytics.js"></script><script src="./main_files/614551849008360" async=""></script><script src="./main_files/529970670506180" async=""></script><script src="./main_files/identity.js" async=""></script><script async="" src="./main_files/fbevents.js"></script><script async="" src="./main_files/analytics.js"></script><script src="./main_files/iframe_api"></script><script type="text/javascript" async="" src="./main_files/analytics.min.js"></script><script async="" src="./main_files/gtm.js"></script><script>!function(e,t,a,n,g){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var m=t.getElementsByTagName(a)[0],r=t.createElement(a);r.async=!0,r.src="https://www.googletagmanager.com/gtm.js?id=GTM-KNTPB4F",m.parentNode.insertBefore(r,m)}(window,document,"script","dataLayer")</script><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"><title>Digital Innovation One</title><link rel="manifest" href="https://web.digitalinnovation.one/manifest.json"><link rel="apple-touch-icon" sizes="57x57" href="https://web.digitalinnovation.one/assets/img/icons/57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="https://web.digitalinnovation.one/assets/img/icons/60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="https://web.digitalinnovation.one/assets/img/icons/72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="https://web.digitalinnovation.one/assets/img/icons/76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="https://web.digitalinnovation.one/assets/img/icons/114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="https://web.digitalinnovation.one/assets/img/icons/120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="https://web.digitalinnovation.one/assets/img/icons/144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="https://web.digitalinnovation.one/assets/img/icons/152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="https://web.digitalinnovation.one/assets/img/icons/180x180.png"><link rel="icon" type="image/png" sizes="192x192" href="https://web.digitalinnovation.one/assets/img/icons/192x192.png"><link rel="icon" type="image/png" sizes="32x32" href="https://web.digitalinnovation.one/assets/img/icons/32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="https://web.digitalinnovation.one/assets/img/icons/96x96.png"><link rel="icon" type="image/png" sizes="16x16" href="https://web.digitalinnovation.one/assets/img/icons/16x16.png"><meta name="apple-itunes-app" content="app-id=1439709522"><meta name="google-play-app" content="app-id=one.digitalinnovation.app"><link rel="apple-touch-icon" href="https://web.digitalinnovation.one/assets/img/minimized.png"><link rel="android-touch-icon" href="https://web.digitalinnovation.one/assets/img/minimized.png"><style>@font-face{font-family:AntDesign;font-style:normal;font-weight:400;src:url(/assets/fonts/AntDesign.ttf) format("truetype")}@font-face{font-family:Entypo;font-style:normal;font-weight:400;src:url(/assets/fonts/Entypo.ttf) format("truetype")}@font-face{font-family:EvilIcons;font-style:normal;font-weight:400;src:url(/assets/fonts/EvilIcons.ttf) format("truetype")}@font-face{font-family:Feather;font-style:normal;font-weight:400;src:url(/assets/fonts/Feather.ttf) format("truetype")}@font-face{font-family:FontAwesome;font-style:normal;font-weight:400;src:url(/assets/fonts/FontAwesome.ttf) format("truetype")}@font-face{font-family:FontAwesome5;font-style:normal;font-weight:400;src:url(/assets/fonts/FontAwesome5.ttf) format("truetype")}@font-face{font-family:FontAwesome5Brands;font-style:normal;font-weight:400;src:url(/assets/fonts/FontAwesome5_Brands.ttf) format("truetype")}@font-face{font-family:Foundation;font-style:normal;font-weight:400;src:url(/assets/fonts/Foundation.ttf) format("truetype")}@font-face{font-family:Ionicons;font-style:normal;font-weight:400;src:url(/assets/fonts/Ionicons.ttf) format("truetype")}@font-face{font-family:MaterialCommunityIcons;font-style:normal;font-weight:400;src:url(/assets/fonts/MaterialCommunityIcons.ttf) format("truetype")}@font-face{font-family:MaterialIcons;font-style:normal;font-weight:400;src:url(/assets/fonts/MaterialIcons.ttf) format("truetype")}@font-face{font-family:Octicons;font-style:normal;font-weight:400;src:url(/assets/fonts/Octicons.ttf) format("truetype")}@font-face{font-family:SimpleLineIcons;font-style:normal;font-weight:400;src:url(/assets/fonts/SimpleLineIcons.ttf) format("truetype")}@font-face{font-family:Zocial;font-style:normal;font-weight:400;src:url(/assets/fonts/Zocial.ttf) format("truetype")}</style><link href="./main_files/1.705bd553.chunk.css" rel="stylesheet"><link href="./main_files/main.e0c44cd0.chunk.css" rel="stylesheet"><script type="text/javascript" src="./main_files/jquery.min.js"></script><script type="text/javascript" src="./main_files/easyXDM.js"></script><style type="text/css"></style><style type="text/css">.container[data-container] {
  position: absolute;
  background-color: black;
  height: 100%;
  width: 100%;
  max-width: 100%; }
  .container[data-container] .chromeless {
    cursor: default; }

[data-player]:not(.nocursor) .container[data-container]:not(.chromeless).pointer-enabled {
  cursor: pointer; }
[data-player] {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  overflow: hidden;
  font-size: 100%;
  font-family: "Roboto", "Open Sans", Arial, sans-serif;
  text-shadow: 0 0 0;
  box-sizing: border-box; }
  [data-player] div, [data-player] span, [data-player] applet, [data-player] object, [data-player] iframe,
  [data-player] h1, [data-player] h2, [data-player] h3, [data-player] h4, [data-player] h5, [data-player] h6, [data-player] p, [data-player] blockquote, [data-player] pre,
  [data-player] a, [data-player] abbr, [data-player] acronym, [data-player] address, [data-player] big, [data-player] cite, [data-player] code,
  [data-player] del, [data-player] dfn, [data-player] em, [data-player] img, [data-player] ins, [data-player] kbd, [data-player] q, [data-player] s, [data-player] samp,
  [data-player] small, [data-player] strike, [data-player] strong, [data-player] sub, [data-player] sup, [data-player] tt, [data-player] var,
  [data-player] b, [data-player] u, [data-player] i, [data-player] center,
  [data-player] dl, [data-player] dt, [data-player] dd, [data-player] ol, [data-player] ul, [data-player] li,
  [data-player] fieldset, [data-player] form, [data-player] label, [data-player] legend,
  [data-player] table, [data-player] caption, [data-player] tbody, [data-player] tfoot, [data-player] thead, [data-player] tr, [data-player] th, [data-player] td,
  [data-player] article, [data-player] aside, [data-player] canvas, [data-player] details, [data-player] embed,
  [data-player] figure, [data-player] figcaption, [data-player] footer, [data-player] header, [data-player] hgroup,
  [data-player] menu, [data-player] nav, [data-player] output, [data-player] ruby, [data-player] section, [data-player] summary,
  [data-player] time, [data-player] mark, [data-player] audio, [data-player] video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline; }
  [data-player] table {
    border-collapse: collapse;
    border-spacing: 0; }
  [data-player] caption, [data-player] th, [data-player] td {
    text-align: left;
    font-weight: normal;
    vertical-align: middle; }
  [data-player] q, [data-player] blockquote {
    quotes: none; }
    [data-player] q:before, [data-player] q:after, [data-player] blockquote:before, [data-player] blockquote:after {
      content: "";
      content: none; }
  [data-player] a img {
    border: none; }
  [data-player]:focus {
    outline: 0; }
  [data-player] * {
    max-width: none;
    box-sizing: inherit;
    float: none; }
  [data-player] div {
    display: block; }
  [data-player].fullscreen {
    width: 100% !important;
    height: 100% !important;
    top: 0;
    left: 0; }
  [data-player].nocursor {
    cursor: none; }

.clappr-style {
  display: none !important; }
[data-html5-video] {
  position: absolute;
  height: 100%;
  width: 100%;
  display: block; }
.clappr-flash-playback[data-flash-playback] {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none; }
[data-html-img] {
  max-width: 100%;
  max-height: 100%; }
[data-no-op] {
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center; }

[data-no-op] p[data-no-op-msg] {
  position: absolute;
  text-align: center;
  font-size: 25px;
  left: 0;
  right: 0;
  color: white;
  padding: 10px;
  /* center vertically */
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
  max-height: 100%;
  overflow: auto; }

[data-no-op] canvas[data-no-op-canvas] {
  background-color: #777;
  height: 100%;
  width: 100%; }
.spinner-three-bounce[data-spinner] {
  position: absolute;
  margin: 0 auto;
  width: 70px;
  text-align: center;
  z-index: 999;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  /* center vertically */
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%); }
  .spinner-three-bounce[data-spinner] > div {
    width: 18px;
    height: 18px;
    background-color: #FFFFFF;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
            animation: bouncedelay 1.4s infinite ease-in-out;
    /* Prevent first frame from flickering when animation starts */
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both; }
  .spinner-three-bounce[data-spinner] [data-bounce1] {
    -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s; }
  .spinner-three-bounce[data-spinner] [data-bounce2] {
    -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s; }

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); }
  40% {
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); }
  40% {
    -webkit-transform: scale(1);
            transform: scale(1); } }
.clappr-watermark[data-watermark] {
  position: absolute;
  min-width: 70px;
  max-width: 200px;
  width: 12%;
  text-align: center;
  z-index: 10; }

.clappr-watermark[data-watermark] a {
  outline: none;
  cursor: pointer; }

.clappr-watermark[data-watermark] img {
  max-width: 100%; }

.clappr-watermark[data-watermark-bottom-left] {
  bottom: 10px;
  left: 10px; }

.clappr-watermark[data-watermark-bottom-right] {
  bottom: 10px;
  right: 42px; }

.clappr-watermark[data-watermark-top-left] {
  top: 10px;
  left: 10px; }

.clappr-watermark[data-watermark-top-right] {
  top: 10px;
  right: 37px; }
.player-poster[data-poster] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 998;
  top: 0;
  left: 0;
  background-color: #000;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%; }
  .player-poster[data-poster].clickable {
    cursor: pointer; }
  .player-poster[data-poster]:hover .play-wrapper[data-poster] {
    opacity: 1; }
  .player-poster[data-poster] .play-wrapper[data-poster] {
    width: 100%;
    height: 25%;
    margin: 0 auto;
    opacity: 0.75;
    transition: opacity 0.1s ease; }
    .player-poster[data-poster] .play-wrapper[data-poster] svg {
      height: 100%; }
      .player-poster[data-poster] .play-wrapper[data-poster] svg path {
        fill: #fff; }
.media-control-notransition {
  transition: none !important; }

.media-control[data-media-control] {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none; }
  .media-control[data-media-control].dragging {
    pointer-events: auto;
    cursor: -webkit-grabbing !important;
    cursor: grabbing !important;
    cursor: url(<%=baseUrl%>/a8c874b93b3d848f39a71260c57e3863.cur), move; }
    .media-control[data-media-control].dragging * {
      cursor: -webkit-grabbing !important;
      cursor: grabbing !important;
      cursor: url(<%=baseUrl%>/a8c874b93b3d848f39a71260c57e3863.cur), move; }
  .media-control[data-media-control] .media-control-background[data-background] {
    position: absolute;
    height: 40%;
    width: 100%;
    bottom: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
    transition: opacity 0.6s ease-out; }
  .media-control[data-media-control] .media-control-icon {
    line-height: 0;
    letter-spacing: 0;
    speak: none;
    color: #fff;
    opacity: 0.5;
    vertical-align: middle;
    text-align: left;
    transition: all 0.1s ease; }
  .media-control[data-media-control] .media-control-icon:hover {
    color: white;
    opacity: 0.75;
    text-shadow: rgba(255, 255, 255, 0.8) 0 0 5px; }
  .media-control[data-media-control].media-control-hide .media-control-background[data-background] {
    opacity: 0; }
  .media-control[data-media-control].media-control-hide .media-control-layer[data-controls] {
    bottom: -50px; }
    .media-control[data-media-control].media-control-hide .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar] {
      opacity: 0; }
  .media-control[data-media-control] .media-control-layer[data-controls] {
    position: absolute;
    bottom: 7px;
    width: 100%;
    height: 32px;
    font-size: 0;
    vertical-align: middle;
    pointer-events: auto;
    transition: bottom 0.4s ease-out; }
    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-left-panel[data-media-control] {
      position: absolute;
      top: 0;
      left: 4px;
      height: 100%; }
    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-center-panel[data-media-control] {
      height: 100%;
      text-align: center;
      line-height: 32px; }
    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-right-panel[data-media-control] {
      position: absolute;
      top: 0;
      right: 4px;
      height: 100%; }
    .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button {
      background-color: transparent;
      border: 0;
      margin: 0 6px;
      padding: 0;
      cursor: pointer;
      display: inline-block;
      width: 32px;
      height: 100%; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button svg {
        width: 100%;
        height: 22px; }
        .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button svg path {
          fill: white; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button:focus {
        outline: none; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-play] {
        float: left;
        height: 100%; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-pause] {
        float: left;
        height: 100%; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-stop] {
        float: left;
        height: 100%; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-fullscreen] {
        float: right;
        background-color: transparent;
        border: 0;
        height: 100%; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator] {
        background-color: transparent;
        border: 0;
        cursor: default;
        display: none;
        float: right;
        height: 100%; }
        .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator].enabled {
          display: block;
          opacity: 1.0; }
          .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator].enabled:hover {
            opacity: 1.0;
            text-shadow: none; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-playpause] {
        float: left; }
      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-playstop] {
        float: left; }
    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-position], .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration] {
      display: inline-block;
      font-size: 10px;
      color: white;
      cursor: default;
      line-height: 32px;
      position: relative; }
    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-position] {
      margin: 0 6px 0 7px; }
    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration] {
      color: rgba(255, 255, 255, 0.5);
      margin-right: 6px; }
      .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration]:before {
        content: "|";
        margin-right: 7px; }
    .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] {
      position: absolute;
      top: -20px;
      left: 0;
      display: inline-block;
      vertical-align: middle;
      width: 100%;
      height: 25px;
      cursor: pointer; }
      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] {
        width: 100%;
        height: 1px;
        position: relative;
        top: 12px;
        background-color: #666666; }
        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-1[data-seekbar] {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: #c2c2c2;
          transition: all 0.1s ease-out; }
        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: #005aff;
          transition: all 0.1s ease-out; }
        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-hover[data-seekbar] {
          opacity: 0;
          position: absolute;
          top: -3px;
          width: 5px;
          height: 7px;
          background-color: rgba(255, 255, 255, 0.5);
          transition: opacity 0.1s ease; }
      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar]:hover .bar-background[data-seekbar] .bar-hover[data-seekbar] {
        opacity: 1; }
      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar].seek-disabled {
        cursor: default; }
        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar].seek-disabled:hover .bar-background[data-seekbar] .bar-hover[data-seekbar] {
          opacity: 0; }
      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar] {
        position: absolute;
        -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
        top: 2px;
        left: 0;
        width: 20px;
        height: 20px;
        opacity: 1;
        transition: all 0.1s ease-out; }
        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar] .bar-scrubber-icon[data-seekbar] {
          position: absolute;
          left: 6px;
          top: 6px;
          width: 8px;
          height: 8px;
          border-radius: 10px;
          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2);
          background-color: white; }
    .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] {
      float: right;
      display: inline-block;
      height: 32px;
      cursor: pointer;
      margin: 0 6px;
      box-sizing: border-box; }
      .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] {
        float: left;
        bottom: 0; }
        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] {
          background-color: transparent;
          border: 0;
          box-sizing: content-box;
          width: 32px;
          height: 32px;
          opacity: 0.5; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume]:hover {
            opacity: 0.75; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] svg {
            height: 24px;
            position: relative;
            top: 3px; }
            .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] svg path {
              fill: white; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume].muted svg {
            margin-left: 2px; }
      .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] {
        float: left;
        position: relative;
        overflow: hidden;
        top: 6px;
        width: 42px;
        height: 18px;
        padding: 3px 0;
        transition: width .2s ease-out; }
        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] {
          height: 1px;
          position: relative;
          top: 7px;
          margin: 0 3px;
          background-color: #666666; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-fill-1[data-volume] {
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background-color: #c2c2c2;
            transition: all 0.1s ease-out; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-fill-2[data-volume] {
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background-color: #005aff;
            transition: all 0.1s ease-out; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-hover[data-volume] {
            opacity: 0;
            position: absolute;
            top: -3px;
            width: 5px;
            height: 7px;
            background-color: rgba(255, 255, 255, 0.5);
            transition: opacity 0.1s ease; }
        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-scrubber[data-volume] {
          position: absolute;
          -webkit-transform: translateX(-50%);
                  transform: translateX(-50%);
          top: 0px;
          left: 0;
          width: 20px;
          height: 20px;
          opacity: 1;
          transition: all 0.1s ease-out; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-scrubber[data-volume] .bar-scrubber-icon[data-volume] {
            position: absolute;
            left: 6px;
            top: 6px;
            width: 8px;
            height: 8px;
            border-radius: 10px;
            box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2);
            background-color: white; }
        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume] {
          float: left;
          width: 4px;
          padding-left: 2px;
          height: 12px;
          opacity: 0.5;
          box-shadow: inset 2px 0 0 white;
          transition: -webkit-transform .2s ease-out;
          transition: transform .2s ease-out;
          transition: transform .2s ease-out, -webkit-transform .2s ease-out; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume].fill {
            box-shadow: inset 2px 0 0 #fff;
            opacity: 1; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume]:nth-of-type(1) {
            padding-left: 0; }
          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume]:hover {
            -webkit-transform: scaleY(1.5);
                    transform: scaleY(1.5); }
  .media-control[data-media-control].w320 .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume].volume-bar-hide {
    width: 0;
    height: 12px;
    top: 9px;
    padding: 0; }
.dvr-controls[data-dvr-controls] {
  display: inline-block;
  float: left;
  color: #fff;
  line-height: 32px;
  font-size: 10px;
  font-weight: bold;
  margin-left: 6px; }
  .dvr-controls[data-dvr-controls] .live-info {
    cursor: default;
    font-family: "Roboto", "Open Sans", Arial, sans-serif;
    text-transform: uppercase; }
    .dvr-controls[data-dvr-controls] .live-info:before {
      content: "";
      display: inline-block;
      position: relative;
      width: 7px;
      height: 7px;
      border-radius: 3.5px;
      margin-right: 3.5px;
      background-color: #ff0101; }
    .dvr-controls[data-dvr-controls] .live-info.disabled {
      opacity: 0.3; }
      .dvr-controls[data-dvr-controls] .live-info.disabled:before {
        background-color: #fff; }
  .dvr-controls[data-dvr-controls] .live-button {
    cursor: pointer;
    outline: none;
    display: none;
    border: 0;
    color: #fff;
    background-color: transparent;
    height: 32px;
    padding: 0;
    opacity: 0.7;
    font-family: "Roboto", "Open Sans", Arial, sans-serif;
    text-transform: uppercase;
    transition: all 0.1s ease; }
    .dvr-controls[data-dvr-controls] .live-button:before {
      content: "";
      display: inline-block;
      position: relative;
      width: 7px;
      height: 7px;
      border-radius: 3.5px;
      margin-right: 3.5px;
      background-color: #fff; }
    .dvr-controls[data-dvr-controls] .live-button:hover {
      opacity: 1;
      text-shadow: rgba(255, 255, 255, 0.75) 0 0 5px; }

.dvr .dvr-controls[data-dvr-controls] .live-info {
  display: none; }

.dvr .dvr-controls[data-dvr-controls] .live-button {
  display: block; }

.dvr.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {
  background-color: #005aff; }

.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {
  background-color: #ff0101; }
.cc-controls[data-cc-controls] {
  float: right;
  position: relative;
  display: none; }
  .cc-controls[data-cc-controls].available {
    display: block; }
  .cc-controls[data-cc-controls] .cc-button {
    padding: 6px !important; }
    .cc-controls[data-cc-controls] .cc-button.enabled {
      display: block;
      opacity: 1.0; }
      .cc-controls[data-cc-controls] .cc-button.enabled:hover {
        opacity: 1.0;
        text-shadow: none; }
  .cc-controls[data-cc-controls] > ul {
    list-style-type: none;
    position: absolute;
    bottom: 25px;
    border: 1px solid black;
    display: none;
    background-color: #e6e6e6; }
  .cc-controls[data-cc-controls] li {
    font-size: 10px; }
    .cc-controls[data-cc-controls] li[data-title] {
      background-color: #c3c2c2;
      padding: 5px; }
    .cc-controls[data-cc-controls] li a {
      color: #444;
      padding: 2px 10px;
      display: block;
      text-decoration: none; }
      .cc-controls[data-cc-controls] li a:hover {
        background-color: #555;
        color: white; }
        .cc-controls[data-cc-controls] li a:hover a {
          color: white;
          text-decoration: none; }
    .cc-controls[data-cc-controls] li.current a {
      color: #f00; }
.seek-time[data-seek-time] {
  position: absolute;
  white-space: nowrap;
  height: 20px;
  line-height: 20px;
  font-size: 0;
  left: -100%;
  bottom: 55px;
  background-color: rgba(2, 2, 2, 0.5);
  z-index: 9999;
  transition: opacity 0.1s ease; }
  .seek-time[data-seek-time].hidden[data-seek-time] {
    opacity: 0; }
  .seek-time[data-seek-time] [data-seek-time] {
    display: inline-block;
    color: white;
    font-size: 10px;
    padding-left: 7px;
    padding-right: 7px;
    vertical-align: top; }
  .seek-time[data-seek-time] [data-duration] {
    display: inline-block;
    color: rgba(255, 255, 255, 0.5);
    font-size: 10px;
    padding-right: 7px;
    vertical-align: top; }
    .seek-time[data-seek-time] [data-duration]:before {
      content: "|";
      margin-right: 7px; }
div.player-error-screen {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #CCCACA;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center; }
  div.player-error-screen__content[data-error-screen] {
    font-size: 14px;
    color: #CCCACA;
    margin-top: 45px; }
  div.player-error-screen__title[data-error-screen] {
    font-weight: bold;
    line-height: 30px;
    font-size: 18px; }
  div.player-error-screen__message[data-error-screen] {
    width: 90%;
    margin: 0 auto; }
  div.player-error-screen__code[data-error-screen] {
    font-size: 13px;
    margin-top: 15px; }
  div.player-error-screen__reload {
    cursor: pointer;
    width: 30px;
    margin: 15px auto 0; }
</style><style type="text/css">.level_selector[data-level-selector] {
  float: right;
  position: relative;
  height: 100%; }
  .level_selector[data-level-selector] button {
    background-color: transparent;
    color: #fff;
    font-family: Roboto,"Open Sans",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    border: none;
    font-size: 12px;
    height: 100%; }
    .level_selector[data-level-selector] button:hover {
      color: #c9c9c9; }
    .level_selector[data-level-selector] button.changing {
      -webkit-animation: pulse 0.5s infinite alternate; }
  .level_selector[data-level-selector] > ul {
    list-style-type: none;
    position: absolute;
    bottom: 100%;
    display: none;
    background-color: rgba(28, 28, 28, 0.9);
    white-space: nowrap; }
  .level_selector[data-level-selector] li {
    font-size: 12px;
    color: #eee; }
    .level_selector[data-level-selector] li[data-title] {
      background-color: #333;
      padding: 8px 25px; }
    .level_selector[data-level-selector] li a {
      color: #eee;
      padding: 5px 10px;
      display: block;
      text-decoration: none; }
      .level_selector[data-level-selector] li a:hover {
        background-color: rgba(255, 255, 255, 0.1);
        color: #fff; }
        .level_selector[data-level-selector] li a:hover a {
          color: #fff;
          text-decoration: none; }
    .level_selector[data-level-selector] li.current a {
      color: #2ecc71; }
</style><style data-styled="" data-styled-version="4.3.2"></style><style type="text/css">/* Chart.js */
@-webkit-keyframes chartjs-render-animation{from{opacity:0.99}to{opacity:1}}@keyframes chartjs-render-animation{from{opacity:0.99}to{opacity:1}}.chartjs-render-monitor{-webkit-animation:chartjs-render-animation 0.001s;animation:chartjs-render-animation 0.001s;}</style><style type="text/css">.smooth-dnd-container{position:relative;}.smooth-dnd-container *{box-sizing:border-box;}.smooth-dnd-container.horizontal{white-space:nowrap;}.smooth-dnd-container.horizontal > .smooth-dnd-stretcher-element{display:inline-block;}.smooth-dnd-container.horizontal > .smooth-dnd-draggable-wrapper{height:100%;display:inline-block;vertical-align:top;white-space:normal;}.smooth-dnd-container.vertical > .smooth-dnd-draggable-wrapper{overflow:hidden;display:block;}.smooth-dnd-draggable-wrapper{}.smooth-dnd-draggable-wrapper.horizontal{height:100%;display:inline-block;vertical-align:top;white-space:normal;}.smooth-dnd-draggable-wrapper.vertical{overflow:hidden;display:block;}.smooth-dnd-draggable-wrapper.animated{transition:transform ease;}.smooth-dnd-ghost *{box-sizing:border-box;}.smooth-dnd-ghost.animated{transition:all ease-in-out;}.smooth-dnd-disable-touch-action *{touch-actions:none;-ms-touch-actions:none;}.smooth-dnd-no-user-select *{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}</style><script async="" src="./main_files/hotjar-1255605.js"></script><script async="" src="./main_files/hotjar-1255605.js"></script><script async="" src="./main_files/modules.811c53310ba8b78aa99f.js" charset="utf-8"></script><style type="text/css">iframe#_hjRemoteVarsFrame {display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;}</style><script type="text/javascript" charset="utf-8" src="./main_files/saved_resource" async=""></script><script type="text/javascript" charset="utf-8" src="./main_files/t_prism_sitemessages.php" async=""></script><style data-emotion="css"></style><style class="clappr-style">@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"), url(https://web.digitalinnovation.one/static/js/38861cba61c66739c1452c3a71e39852.ttf) format("truetype");
}
</style></head><body onload="onLoadPage()" class="header-fixed s"><iframe id="dotz-iframe" mozbrowser="" src="./main_files/index.html" style="display: none !important;" width="365"></iframe><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNTPB4F" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"><div class="container"><div class="row"><div class="lesson-content col-12 col-md-8"><div class="lesson-video  card"><div class="card-header"><div class="row"><div class="back-icon-lesson col-1 col-md-1"><a href="https://web.digitalinnovation.one/labs"><i style="font-size: 24px; color: rgb(255, 255, 255); font-family: FontAwesome; font-weight: normal; font-style: normal;"></i></a></div><div class="title col-10 col-md-10"><h5 class="title-video">Recriando a Interface do Netflix</h5></div><div class="text-right col-1 col-md-1"><a href="https://hermes.digitalinnovation.one/lab_projects/files/b30832b8-e9dc-42da-98a5-24d908dc3011.zip" target="_blank"><i style="font-size: 24px; color: rgb(255, 255, 255); cursor: pointer; font-family: FontAwesome; font-weight: normal; font-style: normal;"></i></a></div></div></div><div class="next-and-previous--container--1bSoH user-activity--hide-when-user-inactive--pDPGx"><a href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/4c57061c-3ec9-4d0c-88e0-51378188f45e"><div class="item-link item-link--common--RP3fp next-and-previous--button--2BBCj"><i style="font-size: 16px; color: rgb(255, 255, 255); font-family: FontAwesome; font-weight: normal; font-style: normal;"></i></div></a><a href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/770e12eb-c0ae-4967-a59e-8f992173ae0d"><div class="item-link item-link--common--RP3fp next-and-previous--button--2BBCj"><i style="font-size: 16px; color: rgb(255, 255, 255); font-family: FontAwesome; font-weight: normal; font-style: normal;"></i></div></a></div><div style="width: 100%; height: 77vh;"><div data-player="" tabindex="9999" class="fullscreen nocursor" style=""><div class="container pointer-enabled" data-container=""><div data-spinner="" class="spinner-three-bounce" style="display: none;"><div data-bounce1=""></div><div data-bounce2=""></div><div data-bounce3=""></div>
</div><div class="player-poster" data-poster="" style="display: none;"><div class="play-wrapper" data-poster=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-poster="" class="poster-icon" style="display: none;"><path fill="#010101" d="M1.425.35L14.575 8l-13.15 7.65V.35z"></path></svg></div>
</div><video data-html5-video="" preload="metadata" src="https://dio-hermes.s3-sa-east-1.amazonaws.com/contents/video/eb22f03f-c109-4be9-96f6-ea1b53da00ee.mp4"></video></div><div class="media-control media-control-hide" data-media-control="" style=""><div class="media-control-background" data-background=""></div>
<div class="media-control-layer" data-controls="">
  
  
  
  
  
  
  
  <div class="media-control-center-panel" data-media-control="">
    
      <div class="bar-container" data-seekbar="">
        <div class="bar-background" data-seekbar="">
          <div class="bar-fill-1" data-seekbar="" style="left: 32.9076%; width: 37.0283%;"></div>
          <div class="bar-fill-2" data-seekbar="" style="width: 69.3272%;"></div>
          <div class="bar-hover" data-seekbar="" style="left: 338.5px;"></div>
        </div>
        <div class="bar-scrubber" data-seekbar="" style="left: 69.3272%;">
          <div class="bar-scrubber-icon" data-seekbar=""></div>
        </div>
      </div>
  
  </div>
  
  
  <div class="media-control-left-panel" data-media-control="">
    
    <button type="button" class="media-control-button media-control-icon paused" data-playpause="" aria-label="playpause"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M1.425.35L14.575 8l-13.15 7.65V.35z"></path></svg></button>
  
      <div class="media-control-indicator" data-position="">15:50</div>
  
      <div class="media-control-indicator" data-duration="">22:50</div>
  
  </div>
  
  
  <div class="media-control-right-panel" data-media-control="">
    
    <button type="button" class="media-control-button media-control-icon" data-fullscreen="" aria-label="fullscreen"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M13.5 3.344l-.844-.844L9.5 5.656V3h-1v4.5H13v-1h-2.656L13.5 3.344zM3 9.5h2.656L2.5 12.656l.844.844L6.5 10.344V13h1V8.5H3v1z"></path></svg></button><div class="cc-controls" data-cc-controls=""><button type="button" class="cc-button media-control-button media-control-icon" data-cc-button="" aria-label="cc-button"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 49 41.8" style="enable-background:new 0 0 49 41.8;" xml:space="preserve"><path d="M47.1,0H3.2C1.6,0,0,1.2,0,2.8v31.5C0,35.9,1.6,37,3.2,37h11.9l3.2,1.9l4.7,2.7c0.9,0.5,2-0.1,2-1.1V37h22.1 c1.6,0,1.9-1.1,1.9-2.7V2.8C49,1.2,48.7,0,47.1,0z M7.2,18.6c0-4.8,3.5-9.3,9.9-9.3c4.8,0,7.1,2.7,7.1,2.7l-2.5,4 c0,0-1.7-1.7-4.2-1.7c-2.8,0-4.3,2.1-4.3,4.3c0,2.1,1.5,4.4,4.5,4.4c2.5,0,4.9-2.1,4.9-2.1l2.2,4.2c0,0-2.7,2.9-7.6,2.9 C10.8,27.9,7.2,23.5,7.2,18.6z M36.9,27.9c-6.4,0-9.9-4.4-9.9-9.3c0-4.8,3.5-9.3,9.9-9.3C41.7,9.3,44,12,44,12l-2.5,4 c0,0-1.7-1.7-4.2-1.7c-2.8,0-4.3,2.1-4.3,4.3c0,2.1,1.5,4.4,4.5,4.4c2.5,0,4.9-2.1,4.9-2.1l2.2,4.2C44.5,25,41.9,27.9,36.9,27.9z"></path></svg></button>
<ul style="display: none;">
  
  <li><a href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/f38f7011-2bd0-4646-966b-2a229f0fd7eb#" data-cc-select="-1">Disabled</a></li>
  
</ul>
</div>
  
      <div class="drawer-container" data-volume="">
        <div class="drawer-icon-container" data-volume="">
          <div class="drawer-icon media-control-icon" data-volume=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M11.5 11h-.002v1.502L7.798 10H4.5V6h3.297l3.7-2.502V4.5h.003V11zM11 4.49L7.953 6.5H5v3h2.953L11 11.51V4.49z"></path></svg></div>
          <span class="drawer-text" data-volume=""></span>
        </div>
        
    <div class="bar-container volume-bar-hide" data-volume="">
    
      <div class="segmented-bar-element fill" data-volume=""></div>
    
      <div class="segmented-bar-element fill" data-volume=""></div>
    
      <div class="segmented-bar-element fill" data-volume=""></div>
    
      <div class="segmented-bar-element fill" data-volume=""></div>
    
      <div class="segmented-bar-element fill" data-volume=""></div>
    
      <div class="segmented-bar-element fill" data-volume=""></div>
    
      <div class="segmented-bar-element fill" data-volume=""></div>
    
      <div class="segmented-bar-element fill" data-volume=""></div>
    
      <div class="segmented-bar-element fill" data-volume=""></div>
    
      <div class="segmented-bar-element fill" data-volume=""></div>
    
    </div>
  
      </div>
  
    <button type="button" class="media-control-button media-control-icon" data-hd-indicator="" aria-label="hd-indicator"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M5.375 7.062H2.637V4.26H.502v7.488h2.135V8.9h2.738v2.848h2.133V4.26H5.375v2.802zm5.97-2.81h-2.84v7.496h2.798c2.65 0 4.195-1.607 4.195-3.77v-.022c0-2.162-1.523-3.704-4.154-3.704zm2.06 3.758c0 1.21-.81 1.896-2.03 1.896h-.83V6.093h.83c1.22 0 2.03.696 2.03 1.896v.02z"></path></svg></button>
  
  <div class="playback_rate" data-playback-rate-select=""><button class="media-control-button media-control-icon" data-playback-rate-button="">1x</button>
<ul style="display: none;">
  
    <li><a href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/f38f7011-2bd0-4646-966b-2a229f0fd7eb#" data-playback-rate-select="0.5" class="">0.5x</a></li>
  
    <li><a href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/f38f7011-2bd0-4646-966b-2a229f0fd7eb#" data-playback-rate-select="1.0" class="active">1x</a></li>
  
    <li><a href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/f38f7011-2bd0-4646-966b-2a229f0fd7eb#" data-playback-rate-select="1.25" class="">1.25x</a></li>
  
    <li><a href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/f38f7011-2bd0-4646-966b-2a229f0fd7eb#" data-playback-rate-select="1.5" class="">1.5x</a></li>
  
    <li><a href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/f38f7011-2bd0-4646-966b-2a229f0fd7eb#" data-playback-rate-select="1.75" class="">1.75x</a></li>
  
    <li><a href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/f38f7011-2bd0-4646-966b-2a229f0fd7eb#" data-playback-rate-select="2.0" class="">2x</a></li>
  
    <li><a href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/f38f7011-2bd0-4646-966b-2a229f0fd7eb#" data-playback-rate-select="3.0" class="">3x</a></li>
  
</ul>
<style class="clappr-style">button[data-playback-rate-button]{white-space:nowrap}.media-control[data-media-control] .media-control-layer[data-controls] .playback_rate[data-playback-rate-select]{float:right;margin-top:5px;position:relative}.media-control[data-media-control] .media-control-layer[data-controls] .playback_rate[data-playback-rate-select] button.media-control-button.media-control-icon{font-family:Roboto,"Open Sans",Arial,sans-serif;-webkit-font-smoothing:antialiased;font-size:12px;cursor:pointer;padding-top:10px;margin-right:10px}.media-control[data-media-control] .media-control-layer[data-controls] .playback_rate[data-playback-rate-select] button.media-control-button.media-control-icon:hover{color:#c9c9c9}.media-control[data-media-control] .media-control-layer[data-controls] .playback_rate[data-playback-rate-select] button.media-control-button.media-control-icon.changing{-webkit-animation:pulse 0.5s infinite alternate}.media-control[data-media-control] .media-control-layer[data-controls] .playback_rate[data-playback-rate-select]>ul{display:none;list-style-type:none;position:absolute;bottom:25px;border:1px solid black;border-radius:4px;background-color:rgba(0,0,0,0.7)}.media-control[data-media-control] .media-control-layer[data-controls] .playback_rate[data-playback-rate-select] li{position:relative;font-size:12px}.media-control[data-media-control] .media-control-layer[data-controls] .playback_rate[data-playback-rate-select] li[data-title]{padding:5px}.media-control[data-media-control] .media-control-layer[data-controls] .playback_rate[data-playback-rate-select] li a{color:#aaa;padding:2px 10px 2px 15px;display:block;text-decoration:none}.media-control[data-media-control] .media-control-layer[data-controls] .playback_rate[data-playback-rate-select] li a.active{background-color:#000;font-weight:bold;color:#fff}.media-control[data-media-control] .media-control-layer[data-controls] .playback_rate[data-playback-rate-select] li a.active:before{content:'\2713';position:absolute;top:2px;left:4px}.media-control[data-media-control] .media-control-layer[data-controls] .playback_rate[data-playback-rate-select] li a:hover{color:#fff;text-decoration:none}@-webkit-keyframes pulse{0%{color:#fff}50%{color:#ff0101}100%{color:#B80000}}
</style></div></div>
  
</div>
<div class="seek-time" data-seek-time="" style="display: none; left: -100%;"><span data-seek-time="">04:00</span>
<span data-duration="" style="display: none;"></span>
</div></div></div></div></div></div><div class="track-lessons col-12 col-md-4"><ul class="border-o text-center font-weight-bold mb-1 nav nav-pills"><li class="w-50 p-2 nav-item"><a class="active nav-link">CONTEÚDOS</a></li><li class="w-50 p-2 nav-item"><a class="nav-link">INFORMAÇÕES</a></li></ul><div class="tab-content border-0"><div class="tab-pane p-0 active"><div class="mb-0 card"><div class="card-body"><ul class="timeline list-group list-group-flush"><a class="" href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/d75bfc6e-a532-47d9-a18d-b5b6c43a660e" style="text-decoration: none;"><li class=" play list-group-item"><span class="content-title">Parte 1</span></li></a><a class="" href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/58b5e5d3-9c23-4dc2-80b7-49e787bf050a" style="text-decoration: none;"><li class=" play list-group-item"><span class="content-title">Parte 2</span></li></a><a class="" href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/17afd4ec-f06f-4f18-86bd-fb44c2d2b598" style="text-decoration: none;"><li class=" play list-group-item"><span class="content-title">Parte 3</span></li></a><a class="" href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/fd4e1739-eb40-4b84-b827-92f760627261" style="text-decoration: none;"><li class=" play list-group-item"><span class="content-title">Parte 4</span></li></a><a class="" href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/bbaf8a48-e35b-4438-b861-6e8c44ba5613" style="text-decoration: none;"><li class=" play list-group-item"><span class="content-title">Parte 5</span></li></a><a class="" href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/4c57061c-3ec9-4d0c-88e0-51378188f45e" style="text-decoration: none;"><li class=" play list-group-item"><span class="content-title">Parte 6</span></li></a><a class="" href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/f38f7011-2bd0-4646-966b-2a229f0fd7eb" style="text-decoration: none;"><li class="content-active play list-group-item"><span class="content-title">Parte 7</span></li></a><a class="" href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/770e12eb-c0ae-4967-a59e-8f992173ae0d" style="text-decoration: none;"><li class=" play list-group-item"><span class="content-title">Parte 8</span></li></a><a class="" href="https://web.digitalinnovation.one/lab/recriando-a-interface-do-netflix/learning/2069ecdf-36d6-4ad7-87fd-dab5632e722e" style="text-decoration: none;"><li class=" play list-group-item"><span class="content-title">Parte 9</span></li></a><a class="" href="https://web.digitalinnovation.one/" style="text-decoration: none;"><li class=" check-square list-group-item"><button type="button" bsstyle="default" class="font-weight-bold btn btn-danger btn-block" style="text-decoration: none;">ENTREGAR PROJETO</button></li></a></ul></div></div></div><div class="tab-pane p-0 project-info"><div class="mb-0 p-3 card"><div class="card-body"><div class="row"><div class="col-md-12"><h6>DESCRIÇÃO</h6><p>Recrie a interface do principal site de streaming mundial utilizando tecnologias simples como HTML5, CSS3 e JavaScript. Nesse projeto você aprenderá: como estruturar um layout, técnicas de CSS3 com containers e variáveis, como posicionar os elementos com Flexbox e como utilizar plugins Jquery a favor da sua aplicação.</p><span class="mr-1 badge badge-primary badge-pill">HTML</span><span class="mr-1 badge badge-primary badge-pill">CSS</span><span class="mr-1 badge badge-primary badge-pill">JavaScript</span></div></div><hr><div class="row"><div class="col-md-6"><h6>Front-End</h6></div><div class="col-md-6"><h6>Avançado</h6></div></div><hr><div class="row"><div class="col-md-12"><h6>ESPECIALISTA</h6></div></div><div class="row"><div class="col-md-3"> <img src="./main_files/e0aa7c57-89e3-41ff-a60b-09dc7a9bc6e9.png" class="img-author"></div><div class="author no-padding col-md-9"><h6>Felipe Aguiar</h6><span class="text-corp">Desenvolvedor, Grupo FCamara</span><a href="https://www.linkedin.com/in/felipe-aguiar-047/" class="link-social" target="_blank"><i style="font-size: 24px; color: rgb(14, 118, 168); font-family: FontAwesome; font-weight: normal; font-style: normal;"></i></a> </div></div></div></div></div></div></div></div></div></div><script>!function(){var o=window.analytics=window.analytics||[];if(!o.initialize)if(o.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{o.invoked=!0,o.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],o.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);return e.unshift(t),o.push(e),o}};for(var e=0;e<o.methods.length;e++){var t=o.methods[e];o[t]=o.factory(t)}o.load=function(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://cdn.segment.com/analytics.js/v1/"+e+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a),o._loadOptions=t},o.SNIPPET_VERSION="4.1.0",o.load("3OVnvIh6yXupEgIXmtJLWnJd7gwJACnx"),o.page()}}()</script><script src="./main_files/checkout.js"></script><script async="" src="./main_files/f.txt"></script><script>function onLoadPage(){window.adsbygoogle=window.adsbygoogle||[],window.zE&&window.zE("webWidget:on","chat:connected",function(){window.enableChat()||$zopim.livechat.window.hide()})}var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag)</script><script>!function(l){function e(e){for(var r,t,n=e[0],o=e[1],u=e[2],f=0,i=[];f<n.length;f++)t=n[f],p[t]&&i.push(p[t][0]),p[t]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(l[r]=o[r]);for(s&&s(e);i.length;)i.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,r=0;r<c.length;r++){for(var t=c[r],n=!0,o=1;o<t.length;o++){var u=t[o];0!==p[u]&&(n=!1)}n&&(c.splice(r--,1),e=f(f.s=t[0]))}return e}var t={},p={2:0},c=[];function f(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return l[e].call(r.exports,r,r.exports,f),r.l=!0,r.exports}f.m=l,f.c=t,f.d=function(e,r,t){f.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(r,e){if(1&e&&(r=f(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)f.d(t,n,function(e){return r[e]}.bind(null,n));return t},f.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(r,"a",r),r},f.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},f.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var s=n;a()}([])</script><script src="./main_files/1.24f34ddf.chunk.js"></script><script src="./main_files/main.498f7161.chunk.js"></script>
<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","529970670506180");fbq("track","PageView");</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=529970670506180&amp;ev=PageView&amp;noscript=1"></noscript>

<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","614551849008360");fbq("track","PageView");</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=614551849008360&amp;ev=PageView&amp;noscript=1"></noscript>

<script type="text/javascript" id="">(function(a,c,e,f,d,b){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:1255605,hjsv:6};d=c.getElementsByTagName("head")[0];b=c.createElement("script");b.async=1;b.src=e+a._hjSettings.hjid+f+a._hjSettings.hjsv;d.appendChild(b)})(window,document,"https://static.hotjar.com/c/hotjar-",".js?sv\x3d");</script><script type="text/javascript" id="">(function(a,d,e,f,g,b,c){a.visitorGlobalObjectAlias=f;a[a.visitorGlobalObjectAlias]=a[a.visitorGlobalObjectAlias]||function(){(a[a.visitorGlobalObjectAlias].q=a[a.visitorGlobalObjectAlias].q||[]).push(arguments)};a[a.visitorGlobalObjectAlias].l=(new Date).getTime();b=d.createElement("script");b.src=e;b.async=!0;c=d.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");vgo("setAccount","475833027");
vgo("setTrackByDefault",!0);vgo("process");</script><div style="z-index: 2147483647;"></div><iframe name="_hjRemoteVarsFrame" title="_hjRemoteVarsFrame" id="_hjRemoteVarsFrame" src="./main_files/box-469cf41adb11dc78be68c1ae7f9457a4.html" style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;"></iframe></body></html>