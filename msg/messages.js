/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview English strings.
 * @author fraser@google.com (Neil Fraser)
 *
 * After modifying this file, either run "npm run build:langfiles" from the
 * parent directory, or run (from this directory):
 * ../scripts/i18n/js_to_json.py
 * to regenerate json/{en,qqq,synonyms}.json.
 *
 * To convert all of the json files to .js files, run:
 * ../scripts/i18n/create_messages.py json/*.json
 */
'use strict';


/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Each message is preceded with a triple-slash comment that becomes the
 * message descriptor.  The build process extracts these descriptors, adds
 * them to msg/json/qqq.json, and they show up in the translation console.
 */

// /** @type {string} */
// /// {{Notranslate}} Hue value for all logic blocks.
// Blockly.Msg.LOGIC_HUE = '210';
// /** @type {string} */
// /// {{Notranslate}} Hue value for all loop blocks.
// Blockly.Msg.LOOPS_HUE = '120';
// /** @type {string} */
// /// {{Notranslate}} Hue value for all math blocks.
// Blockly.Msg.MATH_HUE = '230';
// /** @type {string} */
// /// {{Notranslate}} Hue value for all text blocks.
// Blockly.Msg.TEXTS_HUE = '160';
// /** @type {string} */
// /// {{Notranslate}} Hue value for all list blocks.
// Blockly.Msg.LISTS_HUE = '260';
// /** @type {string} */
// /// {{Notranslate}} Hue value for all colour blocks.
// Blockly.Msg.COLOUR_HUE = '20';
// /** @type {string} */
// /// {{Notranslate}} Hue value for all variable blocks.
// Blockly.Msg.VARIABLES_HUE = '330';
// /** @type {string} */
// /// {{Notranslate}} Hue value for all variable dynamic blocks.
// Blockly.Msg.VARIABLES_DYNAMIC_HUE = '310';
// /** @type {string} */
// /// {{Notranslate}} Hue value for all procedure blocks.
// Blockly.Msg.PROCEDURES_HUE = '290';

/** @type {string} */
/// default name - A simple, general default name for a variable, preferably short.
/// For more context, see
/// [[Translating:Blockly#infrequent_message_types]].\n{{Identical|Item}}
Blockly.Msg.VARIABLES_DEFAULT_NAME = 'item';
// /** @type {string} */
// /// default name - A simple, default name for an unnamed function or variable. Preferably indicates that the item is unnamed.
// Blockly.Msg.UNNAMED_KEY = 'unnamed';
/** @type {string} */
/// button text - Button that sets a calendar to today's date.\n{{Identical|Today}}
Blockly.Msg.TODAY = 'Today';

// Context menus.
/** @type {string} */
/// context menu - Make a copy of the selected block (and any blocks it contains).\n{{Identical|Duplicate}}
Blockly.Msg.DUPLICATE_BLOCK = 'Duplicate';
/** @type {string} */
/// context menu - Add a descriptive comment to the selected block.
Blockly.Msg.ADD_COMMENT = 'Add Comment';
/** @type {string} */
/// context menu - Remove the descriptive comment from the selected block.
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
// /** @type {string} */
// /// context menu - Make a copy of the selected workspace comment.\n{{Identical|Duplicate}}
// Blockly.Msg.DUPLICATE_COMMENT = 'Duplicate Comment';
/** @type {string} */
/// context menu - Change from 'external' to 'inline' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.EXTERNAL_INPUTS = 'External Inputs';
/** @type {string} */
/// context menu - Change from 'internal' to 'external' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.INLINE_INPUTS = 'Inline Inputs';
/** @type {string} */
/// context menu - Permanently delete the selected block.
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
/** @type {string} */
/// context menu - Permanently delete the %1 selected blocks.\n\nParameters:\n* %1 - an integer greater than 1.
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
/** @type {string} */
/// confirmation prompt - Question the user if they really wanted to permanently delete all %1 blocks.\n\nParameters:\n* %1 - an integer greater than 1.
Blockly.Msg.DELETE_ALL_BLOCKS = 'Delete all %1 blocks?';
/** @type {string} */
/// context menu - Reposition all the blocks so that they form a neat line.
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
/** @type {string} */
/// context menu - Make the appearance of the selected block smaller by hiding some information about it.
Blockly.Msg.COLLAPSE_BLOCK = 'Collapse Block';
/** @type {string} */
/// context menu - Make the appearance of all blocks smaller by hiding some information about it.  Use the same terminology as in the previous message.
Blockly.Msg.COLLAPSE_ALL = 'Collapse Blocks';
/** @type {string} */
/// context menu - Restore the appearance of the selected block by showing information about it that was hidden (collapsed) earlier.
Blockly.Msg.EXPAND_BLOCK = 'Expand Block';
/** @type {string} */
/// context menu - Restore the appearance of all blocks by showing information about it that was hidden (collapsed) earlier.  Use the same terminology as in the previous message.
Blockly.Msg.EXPAND_ALL = 'Expand Blocks';
/** @type {string} */
/// context menu - Make the selected block have no effect (unless reenabled).
Blockly.Msg.DISABLE_BLOCK = 'Disable Block';
/** @type {string} */
/// context menu - Make the selected block have effect (after having been disabled earlier).
Blockly.Msg.ENABLE_BLOCK = 'Enable Block';
/** @type {string} */
/// context menu - Provide helpful information about the selected block.\n{{Identical|Help}}
Blockly.Msg.HELP = 'Help';
// /** @type {string} */
// /// context menu - Undo the previous action.\n{{Identical|Undo}}
// Blockly.Msg.UNDO = 'Undo';
// /** @type {string} */
// /// context menu - Undo the previous undo action.\n{{Identical|Redo}}
// Blockly.Msg.REDO = 'Redo';

// Variable renaming.
/** @type {string} */
/// prompt - This message is only seen in the Opera browser.  With most browsers, users can edit numeric values in blocks by just clicking and typing.  Opera does not allows this, so we have to open a new window and prompt users with this message to chanage a value.
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
/** @type {string} */
/// dropdown choice - When the user clicks on a variable block, this is one of the dropdown menu choices.  It is used to rename the current variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.RENAME_VARIABLE = 'Rename variable...';
/** @type {string} */
/// prompt - Prompts the user to enter the new name for the selected variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].\n\nParameters:\n* %1 - the name of the variable to be renamed.
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';

// Variable creation
/** @type {string} */
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_VARIABLE = 'Create variable...';
// /** @type {string} */
// /// button text - Text on the button used to launch the variable creation dialogue.
// Blockly.Msg.NEW_STRING_VARIABLE = 'Create string variable...';
// /** @type {string} */
// /// button text - Text on the button used to launch the variable creation dialogue.
// Blockly.Msg.NEW_NUMBER_VARIABLE = 'Create number variable...';
// /** @type {string} */
// /// button text - Text on the button used to launch the variable creation dialogue.
// Blockly.Msg.NEW_COLOUR_VARIABLE = 'Create colour variable...';
// /** @type {string} */
// /// prompt - Prompts the user to enter the type for a variable.
// Blockly.Msg.NEW_VARIABLE_TYPE_TITLE = 'New variable type:';
/** @type {string} */
/// prompt - Prompts the user to enter the name for a new variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
// /** @type {string} */
// /// alert - Tells the user that the name they entered is already in use.
// Blockly.Msg.VARIABLE_ALREADY_EXISTS = 'A variable named "%1" already exists.';
// /** @type {string} */
// /// alert - Tells the user that the name they entered is already in use for another type.
// Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = 'A variable named "%1" already exists for another type: "%2".';

// Variable deletion.
// /** @type {string} */
// /// confirm -  Ask the user to confirm their deletion of multiple uses of a variable.
// Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = 'Delete %1 uses of the "%2" variable?';
// /** @type {string} */
// /// alert - Tell the user that they can't delete a variable because it's part of the definition of a function.
// Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = 'Can\'t delete the variable "%1" because it\'s part of the definition of the function "%2"';
// /** @type {string} */
// /// dropdown choice - Delete the currently selected variable.
// Blockly.Msg.DELETE_VARIABLE = 'Delete the "%1" variable';

// Colour Blocks.
// /** @type {string} */
// /// {{Optional}} url - Information about colour.
// Blockly.Msg.COLOUR_PICKER_HELPURL = 'https://en.wikipedia.org/wiki/Color';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette].
// Blockly.Msg.COLOUR_PICKER_TOOLTIP = 'Choose a colour from the palette.';
// /** @type {string} */
// /// {{Optional}} url - A link that displays a random colour each time you visit it.
// Blockly.Msg.COLOUR_RANDOM_HELPURL = 'http://randomcolour.com';
// /** @type {string} */
// /// block text - Title of block that generates a colour at random.
// Blockly.Msg.COLOUR_RANDOM_TITLE = 'random colour';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Colour#generating-a-random-colour https://github.com/google/blockly/wiki/Colour#generating-a-random-colour].
// Blockly.Msg.COLOUR_RANDOM_TOOLTIP = 'Choose a colour at random.';
// /** @type {string} */
// /// {{Optional}} url - A link for colour codes with percentages (0-100%) for each component, instead of the more common 0-255, which may be more difficult for beginners.
// Blockly.Msg.COLOUR_RGB_HELPURL = 'https://www.december.com/html/spec/colorpercompact.html';
// /** @type {string} */
// /// block text - Title of block for [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
// Blockly.Msg.COLOUR_RGB_TITLE = 'colour with';
// /** @type {string} */
// /// block input text - The amount of red (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].\n{{Identical|Red}}
// Blockly.Msg.COLOUR_RGB_RED = 'red';
// /** @type {string} */
// /// block input text - The amount of green (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
// Blockly.Msg.COLOUR_RGB_GREEN = 'green';
// /** @type {string} */
// /// block input text - The amount of blue (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].\n{{Identical|Blue}}
// Blockly.Msg.COLOUR_RGB_BLUE = 'blue';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
// Blockly.Msg.COLOUR_RGB_TOOLTIP = 'Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.';
// /** @type {string} */
// /// {{Optional}} url - A useful link that displays blending of two colours.
// Blockly.Msg.COLOUR_BLEND_HELPURL = 'https://meyerweb.com/eric/tools/color-blend/#:::rgbp';
// /** @type {string} */
// /// block text - A verb for blending two shades of paint.
// Blockly.Msg.COLOUR_BLEND_TITLE = 'blend';
// /** @type {string} */
// /// block input text - The first of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
// Blockly.Msg.COLOUR_BLEND_COLOUR1 = 'colour 1';
// /** @type {string} */
// /// block input text - The second of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
// Blockly.Msg.COLOUR_BLEND_COLOUR2 = 'colour 2';
// /** @type {string} */
// /// block input text - The proportion of the [https://github.com/google/blockly/wiki/Colour#blending-colours blend] containing the first colour; the remaining proportion is of the second colour.  For example, if the first colour is red and the second colour blue, a ratio of 1 would yield pure red, a ratio of .5 would yield purple (equal amounts of red and blue), and a ratio of 0 would yield pure blue.\n{{Identical|Ratio}}
// Blockly.Msg.COLOUR_BLEND_RATIO = 'ratio';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Colour#blending-colours https://github.com/google/blockly/wiki/Colour#blending-colours].
// Blockly.Msg.COLOUR_BLEND_TOOLTIP = 'Blends two colours together with a given ratio (0.0 - 1.0).';

// Loop Blocks.
/** @type {string} */
/// {{Optional}} url - Describes 'repeat loops' in computer programs; consider using the translation of the page [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_REPEAT_HELPURL = 'https://en.wikipedia.org/wiki/For_loop';
/** @type {string} */
/// block input text - Title of [https://github.com/google/blockly/wiki/Loops#repeat repeat block].\n\nParameters:\n* %1 - the number of times the body of the loop should be repeated.
Blockly.Msg.CONTROLS_REPEAT_TITLE = 'repeat %1 times';
/** @type {string} */
/// block text - Preceding the blocks in the body of the loop.  See [https://github.com/google/blockly/wiki/Loops https://github.com/google/blockly/wiki/Loops].\n{{Identical|Do}}
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = 'do';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat https://github.com/google/blockly/wiki/Loops#repeat].
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = 'Do some statements several times.';
/** @type {string} */
/// {{Optional}} url - Describes 'while loops' in computer programs; consider using the translation of [https://en.wikipedia.org/wiki/While_loop https://en.wikipedia.org/wiki/While_loop], if present, or [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL = 'https://github.com/google/blockly/wiki/Loops#repeat';
/** @type {string} */
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/** @type {string} */
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-while repeat while] the following condition is true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'repeat while';
/** @type {string} */
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-until repeat until] the following condition becomes true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'repeat until';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'While a value is true, then do some statements.';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-until https://github.com/google/blockly/wiki/Loops#repeat-until].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'While a value is false, then do some statements.';

/** @type {string} */
/// {{Optional}} url - Describes 'for loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/For_loop https://en.wikipedia.org/wiki/For_loop], if present.
Blockly.Msg.CONTROLS_FOR_HELPURL = 'https://github.com/google/blockly/wiki/Loops#count-with';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#count-with https://github.com/google/blockly/wiki/Loops#count-with].\n\nParameters:\n* %1 - the name of the loop variable.
Blockly.Msg.CONTROLS_FOR_TOOLTIP = 'Have the variable "%1" take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.';
/** @type {string} */
/// block text - Repeatedly counts a variable (%1)
/// starting with a (usually lower) number in a range (%2),
/// ending with a (usually higher) number in a range (%3), and counting the
/// iterations by a number of steps (%4).  As in
/// [https://github.com/google/blockly/wiki/Loops#count-with
/// https://github.com/google/blockly/wiki/Loops#count-with].
/// [[File:Blockly-count-with.png]]
Blockly.Msg.CONTROLS_FOR_TITLE = 'count with %1 from %2 to %3 by %4';
/** @type {string} */
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;

// /** @type {string} */
// /// {{Optional}} url - Describes 'for-each loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Foreach https://en.wikipedia.org/wiki/Foreach] if present.
// Blockly.Msg.CONTROLS_FOREACH_HELPURL = 'https://github.com/google/blockly/wiki/Loops#for-each';
// /** @type {string} */
// /// block text - Title of [https://github.com/google/blockly/wiki/Loops#for-each for each block].
// /// Sequentially assigns every item in array %2 to the valiable %1.
// Blockly.Msg.CONTROLS_FOREACH_TITLE = 'for each item %1 in list %2';
// /** @type {string} */
// Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
// /** @type {string} */
// /// block text - Description of [https://github.com/google/blockly/wiki/Loops#for-each for each blocks].\n\nParameters:\n* %1 - the name of the loop variable.
// Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = 'For each item in a list, set the variable "%1" to the item, and then do some statements.';

// /** @type {string} */
// /// {{Optional}} url - Describes control flow in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow], if it exists.
// Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = 'https://github.com/google/blockly/wiki/Loops#loop-termination-blocks';
// /** @type {string} */
// /// dropdown - The current loop should be exited.  See [https://github.com/google/blockly/wiki/Loops#break https://github.com/google/blockly/wiki/Loops#break].
// Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out of loop';
// /** @type {string} */
// /// dropdown - The current iteration of the loop should be ended and the next should begin.  See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
// Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue with next iteration of loop';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Loops#break-out-of-loop https://github.com/google/blockly/wiki/Loops#break-out-of-loop].
// Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Break out of the containing loop.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
// Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Skip the rest of this loop, and continue with the next iteration.';
// /** @type {string} */
// /// warning - The user has tried placing a block outside of a loop (for each, while, repeat, etc.), but this type of block may only be used within a loop.  See [https://github.com/google/blockly/wiki/Loops#loop-termination-blocks https://github.com/google/blockly/wiki/Loops#loop-termination-blocks].
// Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = 'Warning: This block may only be used within a loop.';

// Logic Blocks.
/** @type {string} */
/// {{Optional}} url - Describes conditional statements (if-then-else) in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_else https://en.wikipedia.org/wiki/If_else], if present.
Blockly.Msg.CONTROLS_IF_HELPURL = 'https://github.com/google/blockly/wiki/IfElse';
/** @type {string} */
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-blocks 'if' blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = 'If a value is true, then do some statements.';
/** @type {string} */
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-blocks if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = 'If a value is true, then do the first block of statements. Otherwise, do the second block of statements.';
/** @type {string} */
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-blocks if-else-if blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.';
/** @type {string} */
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-else-blocks if-else-if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement], if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = 'If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].
/// It is recommended, but not essential, that this have text in common with the translation of 'else if'\n{{Identical|If}}
Blockly.Msg.CONTROLS_IF_MSG_IF = 'if';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English words "otherwise if" would probably be clearer than "else if", but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = 'else if';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English word "otherwise" would probably be superior to "else", but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSE = 'else';
/** @type {string} */
Blockly.Msg.CONTROLS_IF_MSG_THEN = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/** @type {string} */
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
/** @type {string} */
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this if block.';
/** @type {string} */
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
/** @type {string} */
/// tooltip - Describes the 'else if' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = 'Add a condition to the if block.';
/** @type {string} */
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
/** @type {string} */
/// tooltip - Describes the 'else' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = 'Add a final, catch-all condition to the if block.';

// /** @type {string} */
// /// button text - Text on a button inside a dialogue window, which will accept or acknowledge the contents of the dialogue when pressed.\n{{Identical|OK}}
// Blockly.Msg.IOS_OK = 'OK';
// /** @type {string} */
// /// button text - Text on a button inside a dialogue window, which will close or cancel the dialogue when pressed.\n{{Identical|Cancel}}
// Blockly.Msg.IOS_CANCEL = 'Cancel';
// /** @type {string} */
// /// alert - Title text for an error dialogue.\n{{Identical|Error}}
// Blockly.Msg.IOS_ERROR = 'Error';
// /** @type {string} */
// /// header text - Title of a section that displays a list of parameters (aka. "inputs") that have been defined for a procedure. This is used inside a dialogue window to configure a procedure.\n{{Identical|Input}}
// Blockly.Msg.IOS_PROCEDURES_INPUTS = 'INPUTS';
// /** @type {string} */
// /// button text - Text on a button which will add a parameter (aka. "input") to a procedure. This is used inside a dialogue window to configure a procedure. NOTE: The "+" should be preserved at the beginning of the text.
// Blockly.Msg.IOS_PROCEDURES_ADD_INPUT = '+ Add Input';
// /** @type {string} */
// /// option text - Text describing an option to allow statements to be added within a procedure. This is used inside a dialogue window to configure a procedure.
// Blockly.Msg.IOS_PROCEDURES_ALLOW_STATEMENTS = 'Allow statements';
// /** @type {string} */
// /// alert - Error message when duplicate parameters (aka. "inputs") have been defined on a procedure. This is used inside a dialogue window to configure procedure parameters.
// Blockly.Msg.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR = 'This function has duplicate inputs.';
// /** @type {string} */
// /// button text - Text on a button which will open a variable creation dialogue when pressed. NOTE: The "+" should be preserved at the beginning of the text.
// Blockly.Msg.IOS_VARIABLES_ADD_VARIABLE = '+ Add Variable';
// /** @type {string} */
// /// button text - Text on a button inside a variable creation dialogue, which will add a variable when pressed.\n{{Identical|Add}}
// Blockly.Msg.IOS_VARIABLES_ADD_BUTTON = 'Add';
// /** @type {string} */
// /// button text - Text on a button inside a variable rename dialogue, which will rename a variable when pressed.\n{{Identical|Rename}}
// Blockly.Msg.IOS_VARIABLES_RENAME_BUTTON = 'Rename';
// /** @type {string} */
// /// button text - Text on a button inside a variable deletion dialogue, which will delete a variable when pressed.\n{{Identical|Delete}}
// Blockly.Msg.IOS_VARIABLES_DELETE_BUTTON = 'Delete';
// /** @type {string} */
// /// placeholder text - Placeholder text used inside a text input, where a variable name should be entered.
// Blockly.Msg.IOS_VARIABLES_VARIABLE_NAME = 'Variable name';
// /** @type {string} */
// /// alert - Error message that is displayed when the user attempts to create a variable without a name.
// Blockly.Msg.IOS_VARIABLES_EMPTY_NAME_ERROR = 'You can\'t use an empty variable name.';

/** @type {string} */
/// {{Optional}} url - Information about comparisons.
Blockly.Msg.LOGIC_COMPARE_HELPURL = 'https://en.wikipedia.org/wiki/Inequality_(mathematics)';
/** @type {string} */
/// tooltip - Describes the equals (=) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = 'Return true if both inputs equal each other.';
/** @type {string} */
/// tooltip - Describes the not equals (≠) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = 'Return true if both inputs are not equal to each other.';
/** @type {string} */
/// tooltip - Describes the less than (<) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = 'Return true if the first input is smaller than the second input.';
/** @type {string} */
/// tooltip - Describes the less than or equals (≤) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = 'Return true if the first input is smaller than or equal to the second input.';
/** @type {string} */
/// tooltip - Describes the greater than (>) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = 'Return true if the first input is greater than the second input.';
/** @type {string} */
/// tooltip - Describes the greater than or equals (≥) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = 'Return true if the first input is greater than or equal to the second input.';

/** @type {string} */
/// {{Optional}} url - Information about the Boolean conjunction ("and") and disjunction ("or") operators.  Consider using the translation of [https://en.wikipedia.org/wiki/Boolean_logic https://en.wikipedia.org/wiki/Boolean_logic], if it exists in your language.
Blockly.Msg.LOGIC_OPERATION_HELPURL = 'https://github.com/google/blockly/wiki/Logic#logical-operations';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = 'Return true if both inputs are true.';
/** @type {string} */
/// block text - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction].\n{{Identical|And}}
Blockly.Msg.LOGIC_OPERATION_AND = 'and';
/** @type {string} */
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = 'Return true if at least one of the inputs is true.';
/** @type {string} */
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction].\n{{Identical|Or}}
Blockly.Msg.LOGIC_OPERATION_OR = 'or';

/** @type {string} */
/// {{Optional}} url - Information about logical negation.  The translation of [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation] is recommended if it exists in the target language.
Blockly.Msg.LOGIC_NEGATE_HELPURL = 'https://github.com/google/blockly/wiki/Logic#not';
/** @type {string} */
/// block text - This is a unary operator that returns ''false'' when the input is ''true'', and ''true'' when the input is ''false''.
/// \n\nParameters:\n* %1 - the input (which should be either the value "true" or "false")
Blockly.Msg.LOGIC_NEGATE_TITLE = 'not %1';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation].
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = 'Returns true if the input is false. Returns false if the input is true.';

/** @type {string} */
/// {{Optional}} url - Information about the logic values ''true'' and ''false''.  Consider using the translation of [https://en.wikipedia.org/wiki/Truth_value https://en.wikipedia.org/wiki/Truth_value] if it exists in your language.
Blockly.Msg.LOGIC_BOOLEAN_HELPURL = 'https://github.com/google/blockly/wiki/Logic#values';
/** @type {string} */
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''true''.\n{{Identical|True}}
Blockly.Msg.LOGIC_BOOLEAN_TRUE = 'true';
/** @type {string} */
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''false''.\n{{Identical|False}}
Blockly.Msg.LOGIC_BOOLEAN_FALSE = 'false';
/** @type {string} */
/// tooltip - Indicates that the block returns either of the two possible [https://en.wikipedia.org/wiki/Truth_value logical values].
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = 'Returns either true or false.';

// /** @type {string} */
// /// {{Optional}} url - Provide a link to the translation of [https://en.wikipedia.org/wiki/Nullable_type https://en.wikipedia.org/wiki/Nullable_type], if it exists in your language; otherwise, do not worry about translating this advanced concept.
// Blockly.Msg.LOGIC_NULL_HELPURL = 'https://en.wikipedia.org/wiki/Nullable_type';
// /** @type {string} */
// /// block text - In computer languages, ''null'' is a special value that indicates that no value has been set.  You may use your language's word for "nothing" or "invalid".\n{{Identical|Null}}
// Blockly.Msg.LOGIC_NULL = 'null';
// /** @type {string} */
// /// tooltip - This should use the word from the previous message.
// Blockly.Msg.LOGIC_NULL_TOOLTIP = 'Returns null.';

// /** @type {string} */
// /// {{Optional}} url - Describes the programming language operator known as the ''ternary'' or ''conditional'' operator.  It is recommended that you use the translation of [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:] if it exists.
// Blockly.Msg.LOGIC_TERNARY_HELPURL = 'https://en.wikipedia.org/wiki/%3F:';
// /** @type {string} */
// /// block input text - Label for the input whose value determines which of the other two inputs is returned.  In some programming languages, this is called a ''''predicate''''.
// Blockly.Msg.LOGIC_TERNARY_CONDITION = 'test';
// /** @type {string} */
// /// block input text - Indicates that the following input should be returned (used as output) if the test input is true.  Remember to try to keep block text terse (short).
// Blockly.Msg.LOGIC_TERNARY_IF_TRUE = 'if true';
// /** @type {string} */
// /// block input text - Indicates that the following input should be returned (used as output) if the test input is false.
// Blockly.Msg.LOGIC_TERNARY_IF_FALSE = 'if false';
// /** @type {string} */
// /// tooltip - See [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:].
// Blockly.Msg.LOGIC_TERNARY_TOOLTIP = 'Check the condition in "test". If the condition is true, returns the "if true" value; otherwise returns the "if false" value.';

// Math Blocks.
/** @type {string} */
/// {{Optional}} url - Information about (real) numbers.
Blockly.Msg.MATH_NUMBER_HELPURL = 'https://en.wikipedia.org/wiki/Number';
/** @type {string} */
/// tooltip - Any positive or negative number, not necessarily an integer.
Blockly.Msg.MATH_NUMBER_TOOLTIP = 'A number.';

/** @type {string} */
/// {{Optional}} math - The symbol for the binary operation addition.
Blockly.Msg.MATH_ADDITION_SYMBOL = '+';
/** @type {string} */
/// {{Optional}} math - The symbol for the binary operation indicating that the right operand should be
/// subtracted from the left operand.
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = '-';
/** @type {string} */
/// {{Optional}} math - The binary operation indicating that the left operand should be divided by
/// the right operand.
Blockly.Msg.MATH_DIVISION_SYMBOL = '÷';
/** @type {string} */
/// {{Optional}} math - The symbol for the binary operation multiplication.
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = '×';
/** @type {string} */
/// {{Optional}} math - The symbol for the binary operation exponentiation.  Specifically, if the
/// value of the left operand is L and the value of the right operand (the exponent) is
/// R, multiply L by itself R times.  (Fractional and negative exponents are also legal.)
Blockly.Msg.MATH_POWER_SYMBOL = '^';

/** @type {string} */
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_SIN = 'sin';
/** @type {string} */
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_COS = 'cos';
/** @type {string} */
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_TAN = 'tan';
/** @type {string} */
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_ASIN = 'asin';
/** @type {string} */
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_ACOS = 'acos';
/** @type {string} */
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_ATAN = 'atan';

/** @type {string} */
/// {{Optional}} url - Information about addition, subtraction, multiplication, division, and exponentiation.
Blockly.Msg.MATH_ARITHMETIC_HELPURL = 'https://en.wikipedia.org/wiki/Arithmetic';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = 'Return the sum of the two numbers.';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Subtraction https://en.wikipedia.org/wiki/Subtraction].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = 'Return the difference of the two numbers.';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Multiplication https://en.wikipedia.org/wiki/Multiplication].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Return the product of the two numbers.';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Division_(mathematics) https://en.wikipedia.org/wiki/Division_(mathematics)].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Return the quotient of the two numbers.';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Exponentiation https://en.wikipedia.org/wiki/Exponentiation].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = 'Return the first number raised to the power of the second number.';

/** @type {string} */
/// {{Optional}} url - Information about the square root operation.
Blockly.Msg.MATH_SINGLE_HELPURL = 'https://en.wikipedia.org/wiki/Square_root';
/** @type {string} */
/// dropdown - This computes the positive [https://en.wikipedia.org/wiki/Square_root square root] of its input.  For example, the square root of 16 is 4.
Blockly.Msg.MATH_SINGLE_OP_ROOT = 'square root';
/** @type {string} */
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = 'Return the square root of a number.';
/** @type {string} */
/// dropdown - This leaves positive numeric inputs changed and inverts negative inputs.  For example, the absolute value of 5 is 5; the absolute value of -5 is also 5.  For more information, see [https://en.wikipedia.org/wiki/Absolute_value https://en.wikipedia.org/wiki/Absolute_value].
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = 'absolute';
/** @type {string} */
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = 'Return the absolute value of a number.';

/** @type {string} */
/// tooltip - Calculates '''0-n''', where '''n''' is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = 'Return the negation of a number.';
/** @type {string} */
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Natural_logarithm|natural logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = 'Return the natural logarithm of a number.';
/** @type {string} */
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Common_logarithm common logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = 'Return the base 10 logarithm of a number.';
/** @type {string} */
/// tooltip - Multiplies [https://en.wikipedia.org/wiki/E_(mathematical_constant) e] by itself n times, where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = 'Return e to the power of a number.';
/** @type {string} */
/// tooltip - Multiplies 10 by itself n times, where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = 'Return 10 to the power of a number.';

/** @type {string} */
/// {{Optional}} url - Information about the trigonometric functions sine, cosine, tangent, and their inverses (ideally using degrees, not radians).
Blockly.Msg.MATH_TRIG_HELPURL = 'https://en.wikipedia.org/wiki/Trigonometric_functions';
/** @type {string} */
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = 'Return the sine of a degree (not radian).';
/** @type {string} */
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = 'Return the cosine of a degree (not radian).';
/** @type {string} */
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = 'Return the tangent of a degree (not radian).';
/** @type {string} */
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent sine function], using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = 'Return the arcsine of a number.';
/** @type {string} */
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent cosine] function, using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = 'Return the arccosine of a number.';
/** @type {string} */
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent tangent] function, using [https://en.wikipedia.org/wiki/Degree_(angle) degrees], not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = 'Return the arctangent of a number.';

/** @type {string} */
/// {{Optional}} url - Information about the mathematical constants Pi (π), e, the golden ratio (φ), √ 2, √ 1/2, and infinity (∞).
Blockly.Msg.MATH_CONSTANT_HELPURL = 'https://en.wikipedia.org/wiki/Mathematical_constant';
/** @type {string} */
/// tooltip - Provides the specified [https://en.wikipedia.org/wiki/Mathematical_constant mathematical constant].
Blockly.Msg.MATH_CONSTANT_TOOLTIP = 'Return one of the common constants: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).';
// /** @type {string} */
// /// dropdown - A number is '''even''' if it is a multiple of 2.  For example, 4 is even (yielding true), but 3 is not (false).
// Blockly.Msg.MATH_IS_EVEN = 'is even';
// /** @type {string} */
// /// dropdown - A number is '''odd''' if it is not a multiple of 2.  For example, 3 is odd (yielding true), but 4 is not (false).  The opposite of "odd" is "even".
// Blockly.Msg.MATH_IS_ODD = 'is odd';
// /** @type {string} */
// /// dropdown - A number is [https://en.wikipedia.org/wiki/Prime prime] if it cannot be evenly divided by any positive integers except for 1 and itself.  For example, 5 is prime, but 6 is not because 2 × 3 = 6.
// Blockly.Msg.MATH_IS_PRIME = 'is prime';
// /** @type {string} */
// /// dropdown - A number is '''whole''' if it is an [https://en.wikipedia.org/wiki/Integer integer].  For example, 5 is whole, but 5.1 is not.
// Blockly.Msg.MATH_IS_WHOLE = 'is whole';
// /** @type {string} */
// /// dropdown - A number is '''positive''' if it is greater than 0.  (0 is neither negative nor positive.)
// Blockly.Msg.MATH_IS_POSITIVE = 'is positive';
// /** @type {string} */
// /// dropdown - A number is '''negative''' if it is less than 0.  (0 is neither negative nor positive.)
// Blockly.Msg.MATH_IS_NEGATIVE = 'is negative';
// /** @type {string} */
// /// dropdown - A number x is divisible by y if y goes into x evenly.  For example, 10 is divisible by 5, but 10 is not divisible by 3.
// Blockly.Msg.MATH_IS_DIVISIBLE_BY = 'is divisible by';
// /** @type {string} */
// /// tooltip - This block lets the user specify via a dropdown menu whether to check if the numeric input is even, odd, prime, whole, positive, negative, or divisible by a given value.
// Blockly.Msg.MATH_IS_TOOLTIP = 'Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.';

/** @type {string} */
/// {{Optional}} url - Information about incrementing (increasing the value of) a variable.
/// For other languages, just use the translation of the Wikipedia page about
/// addition ([https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition]).
Blockly.Msg.MATH_CHANGE_HELPURL = 'https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter';
/** @type {string} */
/// - As in: ''change'' [the value of variable] ''item'' ''by'' 1 (e.g., if the variable named 'item' had the value 5, change it to 6).
/// %1 is a variable name.
/// %2 is the amount of change.
Blockly.Msg.MATH_CHANGE_TITLE = 'change %1 by %2';
/** @type {string} */
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/** @type {string} */
/// tooltip - This updates the value of the variable by adding to it the following numeric input.\n\nParameters:\n* %1 - the name of the variable whose value should be increased.
Blockly.Msg.MATH_CHANGE_TOOLTIP = 'Add a number to variable "%1".';

/** @type {string} */
/// {{Optional}} url - Information about how numbers are rounded to the nearest integer
Blockly.Msg.MATH_ROUND_HELPURL = 'https://en.wikipedia.org/wiki/Rounding';
/** @type {string} */
/// tooltip - See [https://en.wikipedia.org/wiki/Rounding https://en.wikipedia.org/wiki/Rounding].
Blockly.Msg.MATH_ROUND_TOOLTIP = 'Round a number up or down.';
/** @type {string} */
/// dropdown - This rounds its input to the nearest whole number.  For example, 3.4 is rounded to 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = 'round';
/** @type {string} */
/// dropdown - This rounds its input up to the nearest whole number.  For example, if the input was 2.2, the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = 'round up';
/** @type {string} */
/// dropdown - This rounds its input down to the nearest whole number.  For example, if the input was 3.8, the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = 'round down';

// /** @type {string} */
// /// {{Optional}} url - Information about applying a function to a list of numbers.  (We were unable to find such information in English.  Feel free to skip this and any other URLs that are difficult.)
// Blockly.Msg.MATH_ONLIST_HELPURL = '';
// /** @type {string} */
// /// dropdown - This computes the sum of the numeric elements in the list.  For example, the sum of the list {1, 4} is 5.
// Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = 'sum of list';
// /** @type {string} */
// /// tooltip - Please use the same term for "sum" as in the previous message.
// Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = 'Return the sum of all the numbers in the list.';
// /** @type {string} */
// /// dropdown - This finds the smallest (minimum) number in a list.  For example, the smallest number in the list [-5, 0, 3] is -5.
// Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = 'min of list';
// /** @type {string} */
// /// tooltip - Please use the same term for "min" or "minimum" as in the previous message.
// Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = 'Return the smallest number in the list.';
// /** @type {string} */
// /// dropdown - This finds the largest (maximum) number in a list.  For example, the largest number in the list [-5, 0, 3] is 3.
// Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = 'max of list';
// /** @type {string} */
// /// tooltip
// Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = 'Return the largest number in the list.';
// /** @type {string} */
// /// dropdown - This adds up all of the numbers in a list and divides the sum by the number of elements in the list.  For example, the [https://en.wikipedia.org/wiki/Arithmetic_mean average] of the list [1, 2, 3, 4] is 2.5 (10/4).
// Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = 'average of list';
// /** @type {string} */
// /// tooltip - See [https://en.wikipedia.org/wiki/Arithmetic_mean https://en.wikipedia.org/wiki/Arithmetic_mean] for more informatin.
// Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = 'Return the average (arithmetic mean) of the numeric values in the list.';
// /** @type {string} */
// /// dropdown - This finds the [https://en.wikipedia.org/wiki/Median median] of the numeric values in a list.  For example, the median of the list {1, 2, 7, 12, 13} is 7.
// Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = 'median of list';
// /** @type {string} */
// /// tooltip - See [https://en.wikipedia.org/wiki/Median median https://en.wikipedia.org/wiki/Median median] for more information.
// Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = 'Return the median number in the list.';
// /** @type {string} */
// /// dropdown - This finds the most common numbers ([https://en.wikipedia.org/wiki/Mode_(statistics) modes]) in a list.  For example, the modes of the list {1, 3, 9, 3, 9}  are {3, 9}.
// Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = 'modes of list';
// /** @type {string} */
// /// tooltip - See [https://en.wikipedia.org/wiki/Mode_(statistics) https://en.wikipedia.org/wiki/Mode_(statistics)] for more information.
// Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = 'Return a list of the most common item(s) in the list.';
// /** @type {string} */
// /// dropdown - This finds the [https://en.wikipedia.org/wiki/Standard_deviation standard deviation] of the numeric values in a list.
// Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = 'standard deviation of list';
// /** @type {string} */
// /// tooltip - See [https://en.wikipedia.org/wiki/Standard_deviation https://en.wikipedia.org/wiki/Standard_deviation] for more information.
// Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = 'Return the standard deviation of the list.';
// /** @type {string} */
// /// dropdown - This choose an element at random from a list.  Each element is chosen with equal probability.
// Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = 'random item of list';
// /** @type {string} */
// /// tooltip - Please use same term for 'random' as in previous entry.
// Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = 'Return a random element from the list.';

/** @type {string} */
/// {{Optional}} url - information about the modulo (remainder) operation.
Blockly.Msg.MATH_MODULO_HELPURL = 'https://en.wikipedia.org/wiki/Modulo_operation';
/** @type {string} */
/// block text - Title of block providing the remainder when dividing the first numerical input by the second.  For example, the remainder of 10 divided by 3 is 1.\n\nParameters:\n* %1 - the dividend (10, in our example)\n* %2 - the divisor (3 in our example).
Blockly.Msg.MATH_MODULO_TITLE = 'remainder of %1 ÷ %2';
/** @type {string} */
/// tooltip - For example, the remainder of 10 divided by 3 is 1.
Blockly.Msg.MATH_MODULO_TOOLTIP = 'Return the remainder from dividing the two numbers.';

/** @type {string} */
/// {{Optional}} url - Information about constraining a numeric value to be in a specific range.  (The English URL is not ideal.  Recall that translating URLs is the lowest priority.)
Blockly.Msg.MATH_CONSTRAIN_HELPURL = 'https://en.wikipedia.org/wiki/Clamping_(graphics)';
/** @type {string} */
/// block text - The title of the block that '''constrain'''s (forces) a number to be in a given range.
///For example, if the number 150 is constrained to be between 5 and 100, the result will be 100.
///\n\nParameters:\n* %1 - the value to constrain (e.g., 150)\n* %2 - the minimum value (e.g., 5)\n* %3 - the maximum value (e.g., 100).
Blockly.Msg.MATH_CONSTRAIN_TITLE = 'constrain %1 low %2 high %3';
/** @type {string} */
/// tooltip - This compares a number ''x'' to a low value ''L'' and a high value ''H''.  If ''x'' is less then ''L'', the result is ''L''.  If ''x'' is greater than ''H'', the result is ''H''.  Otherwise, the result is ''x''.
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = 'Constrain a number to be between the specified limits (inclusive).';

/** @type {string} */
/// {{Optional}} url - Information about how computers generate random numbers.
Blockly.Msg.MATH_RANDOM_INT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
/** @type {string} */
/// block text - The title of the block that generates a random integer (whole number) in the specified range.  For example, if the range is from 5 to 7, this returns 5, 6, or 7 with equal likelihood. %1 is a placeholder for the lower number, %2 is the placeholder for the larger number.
Blockly.Msg.MATH_RANDOM_INT_TITLE = 'random integer from %1 to %2';
/** @type {string} */
/// tooltip - Return a random integer between two values specified as inputs.  For example, if one input was 7 and another 9, any of the numbers 7, 8, or 9 could be produced.
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = 'Return a random integer between the two specified limits, inclusive.';

// /** @type {string} */
// /// {{Optional}} url - Information about how computers generate random numbers (specifically, numbers in the range from 0 to just below 1).
// Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
// /** @type {string} */
// /// block text - The title of the block that generates a random number greater than or equal to 0 and less than 1.
// Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = 'random fraction';
// /** @type {string} */
// /// tooltip - Return a random fraction between 0 and 1.  The value may be equal to 0 but must be less than 1.
// Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = 'Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).';

// /** @type {string} */
// /// {{Optional}} url - Information about how to calculate atan2.
// Blockly.Msg.MATH_ATAN2_HELPURL = 'https://en.wikipedia.org/wiki/Atan2';
// /** @type {string} */
// /// block text - The title of the block that calculates atan2 of point (X, Y).  For example, if the point is (-1, -1), this returns -135. %1 is a placeholder for the X coordinate, %2 is the placeholder for the Y coordinate.
// Blockly.Msg.MATH_ATAN2_TITLE = 'atan2 of X:%1 Y:%2';
// /** @type {string} */
// /// tooltip - Return the arctangent of point (X, Y) in degrees from -180 to 180. For example, if the point is (-1, -1) this returns -135.
// Blockly.Msg.MATH_ATAN2_TOOLTIP = 'Return the arctangent of point (X, Y) in degrees from -180 to 180.';

// Text Blocks.
/** @type {string} */
/// {{Optional}} url - Information about how computers represent text (sometimes referred to as ''string''s).
Blockly.Msg.TEXT_TEXT_HELPURL = 'https://en.wikipedia.org/wiki/String_(computer_science)';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text https://github.com/google/blockly/wiki/Text].
Blockly.Msg.TEXT_TEXT_TOOLTIP = 'A letter, word, or line of text.';

/** @type {string} */
/// {{Optional}} url - Information on concatenating/appending pieces of text.
Blockly.Msg.TEXT_JOIN_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-creation';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation].
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = 'create text with';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation create text with] for more information.
Blockly.Msg.TEXT_JOIN_TOOLTIP = 'Create a piece of text by joining together any number of items.';

/** @type {string} */
/// block text - This is shown when the programmer wants to change the number of pieces of text being joined together.  See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.\n{{Identical|Join}}
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = 'join';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this text block.';
/** @type {string} */
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation], specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Add an item to the text.';

// /** @type {string} */
// /// {{Optional}} url - This and the other text-related URLs are going to be hard to translate.  As always, it is okay to leave untranslated or paste in the English-language URL.  For these URLs, you might also consider a general URL about how computers represent text (such as the translation of [https://en.wikipedia.org/wiki/String_(computer_science) this Wikipedia page]).
// Blockly.Msg.TEXT_APPEND_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
// /** @type {string} */
// /// block input text - Message that the variable name at %1 will have the item at %2 appended to it.
// /// [[File:blockly-append-text.png]]
// Blockly.Msg.TEXT_APPEND_TITLE = 'to %1 append text %2';
// /** @type {string} */
// Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Text#text-modification https://github.com/google/blockly/wiki/Text#text-modification] for more information.\n\nParameters:\n* %1 - the name of the variable to which text should be appended
// Blockly.Msg.TEXT_APPEND_TOOLTIP = 'Append some text to variable "%1".';

/** @type {string} */
/// {{Optional}} url - Information about text on computers (usually referred to as 'strings').
Blockly.Msg.TEXT_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
/// \n\nParameters:\n* %1 - the piece of text to take the length of
Blockly.Msg.TEXT_LENGTH_TITLE = 'length of %1';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
Blockly.Msg.TEXT_LENGTH_TOOLTIP = 'Returns the number of letters (including spaces) in the provided text.';

// /** @type {string} */
// /// {{Optional}} url - Information about empty pieces of text on computers (usually referred to as 'empty strings').
// Blockly.Msg.TEXT_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Text#checking-for-empty-text';
// /** @type {string} */
// /// block text - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
// /// \n\nParameters:\n* %1 - the piece of text to test for emptiness
// Blockly.Msg.TEXT_ISEMPTY_TITLE = '%1 is empty';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
// Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = 'Returns true if the provided text is empty.';

// /** @type {string} */
// /// {{Optional}} url - Information about finding a character in a piece of text.
// Blockly.Msg.TEXT_INDEXOF_HELPURL = 'https://github.com/google/blockly/wiki/Text#finding-text';
// /** @type {string} */
// /// tooltip - %1 will be replaced by either the number 0 or -1 depending on the indexing mode. See [https://github.com/google/blockly/wiki/Text#finding-text https://github.com/google/blockly/wiki/Text#finding-text].
// Blockly.Msg.TEXT_INDEXOF_TOOLTIP = 'Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.';
// /** @type {string} */
// /// block text - Title of blocks allowing users to find text.  See
// /// [https://github.com/google/blockly/wiki/Text#finding-text
// /// https://github.com/google/blockly/wiki/Text#finding-text].
// /// [[File:Blockly-find-text.png]].
// /// In English the expanded message is "in text %1 find (first|last) occurance of text %3"
// /// where %1 and %3 are added by the user. See TEXT_INDEXOF_OPERATOR_FIRST and
// /// TEXT_INDEXOF_OPERATOR_LAST for the dropdown text that replaces %2.
// Blockly.Msg.TEXT_INDEXOF_TITLE = 'in text %1 %2 %3';
// /** @type {string} */
// /// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
// /// https://github.com/google/blockly/wiki/Text#finding-text].
// /// [[File:Blockly-find-text.png]].
// Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST = 'find first occurrence of text';
// /** @type {string} */
// /// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
// /// https://github.com/google/blockly/wiki/Text#finding-text].  This would
// /// replace "find first occurrence of text" below.  (For more information on
// /// how common text is factored out of dropdown menus, see
// /// [https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus
// /// https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus)].)
// /// [[File:Blockly-find-text.png]].
// Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST = 'find last occurrence of text';
// /** @type {string} */

// /// {{Optional}} url - Information about extracting characters (letters, number, symbols, etc.) from text.
// Blockly.Msg.TEXT_CHARAT_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-text';
// /** @type {string} */
// /// block text - Text for a block to extract a letter (or number,
// /// punctuation character, etc.) from a string, as shown below. %1 is added by
// /// the user and %2 is replaced by a dropdown of options, possibly followed by
// /// another user supplied string. TEXT_CHARAT_TAIL is then added to the end.  See
// /// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
// /// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
// /// [[File:Blockly-text-get.png]]
// Blockly.Msg.TEXT_CHARAT_TITLE = 'in text %1 %2';
// /** @type {string} */
// /// dropdown - Indicates that the letter (or number, punctuation character, etc.) with the
// /// specified index should be obtained from the preceding piece of text.  See
// /// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
// /// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
// /// [[File:Blockly-text-get.png]]
// Blockly.Msg.TEXT_CHARAT_FROM_START = 'get letter #';
// /** @type {string} */
// /// block text - Indicates that the letter (or number, punctuation character, etc.) with the
// /// specified index from the end of a given piece of text should be obtained. See
// /// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
// /// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
// /// [[File:Blockly-text-get.png]]
// Blockly.Msg.TEXT_CHARAT_FROM_END = 'get letter # from end';
// /** @type {string} */
// /// block text - Indicates that the first letter of the following piece of text should be
// /// retrieved.  See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
// /// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
// /// [[File:Blockly-text-get.png]]
// Blockly.Msg.TEXT_CHARAT_FIRST = 'get first letter';
// /** @type {string} */
// /// block text - Indicates that the last letter (or number, punctuation mark, etc.) of the
// /// following piece of text should be retrieved.  See
// /// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
// /// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
// /// [[File:Blockly-text-get.png]]
// Blockly.Msg.TEXT_CHARAT_LAST = 'get last letter';
// /** @type {string} */
// /// block text - Indicates that any letter (or number, punctuation mark, etc.) in the
// /// following piece of text should be randomly selected.  See
// /// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
// /// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
// /// [[File:Blockly-text-get.png]]
// Blockly.Msg.TEXT_CHARAT_RANDOM = 'get random letter';
// /** @type {string} */
// /// block text - Text that goes after the rightmost block/dropdown when getting a single letter from
// /// a piece of text, as in [https://blockly-demo.appspot.com/static/apps/code/index.html#3m23km these
// /// blocks] or shown below.  For most languages, this will be blank.
// /// [[File:Blockly-text-get.png]]
// Blockly.Msg.TEXT_CHARAT_TAIL = '';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
// /// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
// /// [[File:Blockly-text-get.png]]
// Blockly.Msg.TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.';

// /** @type {string} */
// /// See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
// /// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
// Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP = 'Returns a specified portion of the text.';
// /** @type {string} */
// /// {{Optional}} url - Information about extracting characters from text.  Reminder: urls are the
// /// lowest priority translations.  Feel free to skip.
// Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text';
// /** @type {string} */
// /// block text - Precedes a piece of text from which a portion should be extracted.
// /// [[File:Blockly-get-substring.png]]
// Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = 'in text';
// /** @type {string} */
// /// dropdown - Indicates that the following number specifies the position (relative to the start
// /// position) of the beginning of the region of text that should be obtained from the preceding
// /// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
// /// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
// /// [[File:Blockly-get-substring.png]]
// Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START = 'get substring from letter #';
// /** @type {string} */
// /// dropdown - Indicates that the following number specifies the position (relative to the end
// /// position) of the beginning of the region of text that should be obtained from the preceding
// /// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
// /// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
// /// Note: If {{msg-blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
// /// automatically appear ''after'' this and any other
// /// [https://translatewiki.net/wiki/Translating:Blockly#Ordinal_numbers ordinal numbers]
// /// on this block.
// /// [[File:Blockly-get-substring.png]]
// Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END = 'get substring from letter # from end';
// /** @type {string} */
// /// block text - Indicates that a region starting with the first letter of the preceding piece
// /// of text should be extracted.  See
// /// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
// /// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
// /// [[File:Blockly-get-substring.png]]
// Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST = 'get substring from first letter';
// /** @type {string} */
// /// dropdown - Indicates that the following number specifies the position (relative to
// /// the start position) of the end of the region of text that should be obtained from the
// /// preceding piece of text.  See
// /// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
// /// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
// /// [[File:Blockly-get-substring.png]]
// Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START = 'to letter #';
// /** @type {string} */
// /// dropdown - Indicates that the following number specifies the position (relative to the
// /// end position) of the end of the region of text that should be obtained from the preceding
// /// piece of text.  See
// /// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
// /// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
// /// [[File:Blockly-get-substring.png]]
// Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END = 'to letter # from end';
// /** @type {string} */
// /// block text - Indicates that a region ending with the last letter of the preceding piece
// /// of text should be extracted.  See
// /// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
// /// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
// /// [[File:Blockly-get-substring.png]]
// Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST = 'to last letter';
// /** @type {string} */
// /// block text - Text that should go after the rightmost block/dropdown when
// /// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
// /// extracting a region of text].  In most languages, this will be the empty string.
// /// [[File:Blockly-get-substring.png]]
// Blockly.Msg.TEXT_GET_SUBSTRING_TAIL = '';

// /** @type {string} */
// /// {{Optional}} url - Information about the case of letters (upper-case and lower-case).
// Blockly.Msg.TEXT_CHANGECASE_HELPURL = 'https://github.com/google/blockly/wiki/Text#adjusting-text-case';
// /** @type {string} */
// /// tooltip - Describes a block to adjust the case of letters.  For more information on this block,
// /// see [https://github.com/google/blockly/wiki/Text#adjusting-text-case
// /// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
// Blockly.Msg.TEXT_CHANGECASE_TOOLTIP = 'Return a copy of the text in a different case.';
// /** @type {string} */
// /// block text - Indicates that all of the letters in the following piece of text should be
// /// capitalized.  If your language does not use case, you may indicate that this is not
// /// applicable to your language.  For more information on this block, see
// /// [https://github.com/google/blockly/wiki/Text#adjusting-text-case
// /// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
// Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'to UPPER CASE';
// /** @type {string} */
// /// block text - Indicates that all of the letters in the following piece of text should be converted to lower-case.  If your language does not use case, you may indicate that this is not applicable to your language.  For more information on this block, see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
// Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = 'to lower case';
// /** @type {string} */
// /// block text - Indicates that the first letter of each of the following words should be capitalized and the rest converted to lower-case.  If your language does not use case, you may indicate that this is not applicable to your language.  For more information on this block, see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
// Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = 'to Title Case';

// /** @type {string} */
// /// {{Optional}} url - Information about trimming (removing) text off the beginning and ends of pieces of text.
// Blockly.Msg.TEXT_TRIM_HELPURL = 'https://github.com/google/blockly/wiki/Text#trimming-removing-spaces';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
// /// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
// Blockly.Msg.TEXT_TRIM_TOOLTIP = 'Return a copy of the text with spaces removed from one or both ends.';
// /** @type {string} */
// /// dropdown - Removes spaces from the beginning and end of a piece of text.  See
// /// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
// /// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].  Note that neither
// /// this nor the other options modify the original piece of text (that follows);
// /// the block just returns a version of the text without the specified spaces.
// Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH = 'trim spaces from both sides of';
// /** @type {string} */
// /// dropdown - Removes spaces from the beginning of a piece of text.  See
// /// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
// /// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
// /// Note that in right-to-left scripts, this will remove spaces from the right side.
// Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT = 'trim spaces from left side of';
// /** @type {string} */
// /// dropdown - Removes spaces from the end of a piece of text.  See
// /// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
// /// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
// /// Note that in right-to-left scripts, this will remove spaces from the left side.
// Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT = 'trim spaces from right side of';

// /** @type {string} */
// /// {{Optional}} url - Information about displaying text on computers.
// Blockly.Msg.TEXT_PRINT_HELPURL = 'https://github.com/google/blockly/wiki/Text#printing-text';
// /** @type {string} */
// /// block text - Display the input on the screen.  See
// /// [https://github.com/google/blockly/wiki/Text#printing-text
// /// https://github.com/google/blockly/wiki/Text#printing-text].
// /// \n\nParameters:\n* %1 - the value to print
// Blockly.Msg.TEXT_PRINT_TITLE = 'print %1';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Text#printing-text
// /// https://github.com/google/blockly/wiki/Text#printing-text].
// Blockly.Msg.TEXT_PRINT_TOOLTIP = 'Print the specified text, number or other value.';
// /** @type {string} */
// /// {{Optional}} url - Information about getting text from users.
// Blockly.Msg.TEXT_PROMPT_HELPURL = 'https://github.com/google/blockly/wiki/Text#getting-input-from-the-user';
// /** @type {string} */
// /// dropdown - Specifies that a piece of text should be requested from the user with
// /// the following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
// /// https://github.com/google/blockly/wiki/Text#printing-text].
// Blockly.Msg.TEXT_PROMPT_TYPE_TEXT = 'prompt for text with message';
// /** @type {string} */
// /// dropdown - Specifies that a number should be requested from the user with the
// /// following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
// /// https://github.com/google/blockly/wiki/Text#printing-text].
// Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER = 'prompt for number with message';
// /** @type {string} */
// /// dropdown - Precedes the message with which the user should be prompted for
// /// a number.  See [https://github.com/google/blockly/wiki/Text#printing-text
// /// https://github.com/google/blockly/wiki/Text#printing-text].
// Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = 'Prompt for user for a number.';
// /** @type {string} */
// /// dropdown - Precedes the message with which the user should be prompted for some text.
// /// See [https://github.com/google/blockly/wiki/Text#printing-text
// /// https://github.com/google/blockly/wiki/Text#printing-text].
// Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT = 'Prompt for user for some text.';

// /** @type {string} */
// /// block text - Title of a block that counts the number of instances of
// /// a smaller pattern (%1) inside a longer string (%2).
// Blockly.Msg.TEXT_COUNT_MESSAGE0 = 'count %1 in %2';
// /** @type {string} */
// /// {{Optional}} url - Information about counting how many times a string appears in another string.
// Blockly.Msg.TEXT_COUNT_HELPURL = 'https://github.com/google/blockly/wiki/Text#counting-substrings';
// /** @type {string} */
// /// tooltip - Short description of a block that counts how many times some text occurs within some other text.
// Blockly.Msg.TEXT_COUNT_TOOLTIP = 'Count how many times some text occurs within some other text.';

// /** @type {string} */
// /// block text - Title of a block that returns a copy of text (%3) with all
// /// instances of some smaller text (%1) replaced with other text (%2).
// Blockly.Msg.TEXT_REPLACE_MESSAGE0 = 'replace %1 with %2 in %3';
// /** @type {string} */
// /// {{Optional}} url - Information about replacing each copy text (or string, in computer lingo) with other text.
// Blockly.Msg.TEXT_REPLACE_HELPURL = 'https://github.com/google/blockly/wiki/Text#replacing-substrings';
// /** @type {string} */
// /// tooltip - Short description of a block that replaces copies of text in a large text with other text.
// Blockly.Msg.TEXT_REPLACE_TOOLTIP = 'Replace all occurances of some text within some other text.';

// /** @type {string} */
// /// block text - Title of block that returns a copy of text (%1) with the order
// /// of letters and characters reversed.
// Blockly.Msg.TEXT_REVERSE_MESSAGE0 = 'reverse %1';
// /** @type {string} */
// /// {{Optional}} url - Information about reversing a letters/characters in text.
// Blockly.Msg.TEXT_REVERSE_HELPURL = 'https://github.com/google/blockly/wiki/Text#reversing-text';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Text].
// Blockly.Msg.TEXT_REVERSE_TOOLTIP = 'Reverses the order of the characters in the text.';

// Lists Blocks.
// /** @type {string} */
// /// {{Optional}} url - Information on empty lists.
// Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-empty-list';
// /** @type {string} */
// /// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
// Blockly.Msg.LISTS_CREATE_EMPTY_TITLE = 'create empty list';
// /** @type {string} */
// /// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
// Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP = 'Returns a list, of length 0, containing no data records';

// /** @type {string} */
// /// {{Optional}} url - Information on building lists.
// Blockly.Msg.LISTS_CREATE_WITH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
// Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = 'Create a list with any number of items.';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = 'create list with';
/** @type {string} */
/// block text - This appears in a sub-block when [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs changing the number of inputs in a ''''create list with'''' block].\n{{Identical|List}}
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'list';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this list block.';
/** @type {string} */
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the list.';

// /** @type {string} */
// /// {{Optional}} url - Information about [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
// Blockly.Msg.LISTS_REPEAT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
// /** @type {string} */
// /// {{Optional}} url - See [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
// Blockly.Msg.LISTS_REPEAT_TOOLTIP = 'Creates a list consisting of the given value repeated the specified number of times.';
// /** @type {string} */
// /// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with
// /// https://github.com/google/blockly/wiki/Lists#create-list-with].
// ///\n\nParameters:\n* %1 - the item (text) to be repeated\n* %2 - the number of times to repeat it
// Blockly.Msg.LISTS_REPEAT_TITLE = 'create list with item %1 repeated %2 times';

/** @type {string} */
/// {{Optional}} url - Information about how the length of a list is computed (i.e., by the total number of elements, not the number of different elements).
Blockly.Msg.LISTS_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#length-of';
/** @type {string} */
/// block text - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of].
/// \n\nParameters:\n* %1 - the list whose length is desired
Blockly.Msg.LISTS_LENGTH_TITLE = 'length of %1';
/** @type {string} */
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of Blockly:Lists:length of].
Blockly.Msg.LISTS_LENGTH_TOOLTIP = 'Returns the length of a list.';

// /** @type {string} */
// /// {{Optional}} url - See [https://github.com/google/blockly/wiki/Lists#is-empty https://github.com/google/blockly/wiki/Lists#is-empty].
// Blockly.Msg.LISTS_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#is-empty';
// /** @type {string} */
// /// block text - See [https://github.com/google/blockly/wiki/Lists#is-empty
// /// https://github.com/google/blockly/wiki/Lists#is-empty].
// /// \n\nParameters:\n* %1 - the list to test
// Blockly.Msg.LISTS_ISEMPTY_TITLE = '%1 is empty';
// /** @type {string} */
// /// block tooltip - See [https://github.com/google/blockly/wiki/Lists#is-empty
// /// https://github.com/google/blockly/wiki/Lists#is-empty].
// Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = 'Returns true if the list is empty.';

// /** @type {string} */
// /// block text - Title of blocks operating on [https://github.com/google/blockly/wiki/Lists lists].
// Blockly.Msg.LISTS_INLIST = 'in list';

// /** @type {string} */
// /// {{Optional}} url - See [https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list
// /// https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list].
// Blockly.Msg.LISTS_INDEX_OF_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list';
// /** @type {string} */
// Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
// /** @type {string} */
// /// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
// /// Lists#finding-items-in-a-list].
// /// [[File:Blockly-list-find.png]]
// Blockly.Msg.LISTS_INDEX_OF_FIRST = 'find first occurrence of item';
// /** @type {string} */
// /// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
// /// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
// /// [[File:Blockly-list-find.png]]
// Blockly.Msg.LISTS_INDEX_OF_LAST = 'find last occurrence of item';
// /** @type {string} */
// /// tooltip - %1 will be replaced by either the number 0 or -1 depending on the indexing mode.  See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
// /// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
// /// [[File:Blockly-list-find.png]]
// Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.';

/** @type {string} */
Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
/** @type {string} */
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get an item from a list] without removing it from the list.
Blockly.Msg.LISTS_GET_INDEX_GET = 'get';
// /** @type {string} */
// /// dropdown - Indicates that the user wishes to
// /// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
// /// get and remove an item from a list], as opposed to merely getting
// /// it without modifying the list.
// Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = 'get and remove';
// /** @type {string} */
// /// dropdown - Indicates that the user wishes to
// /// [https://github.com/google/blockly/wiki/Lists#removing-an-item
// /// remove an item from a list].\n{{Identical|Remove}}
// Blockly.Msg.LISTS_GET_INDEX_REMOVE = 'remove';
/** @type {string} */
/// dropdown - Indicates that an index relative to the front of the list should be used to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item get and/or remove
/// an item from a list].  Note: If {{msg-blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FROM_START = '#';
// /** @type {string} */
// /// dropdown - Indicates that an index relative to the end of the list should be used
// /// to [https://github.com/google/blockly/wiki/Lists#getting-a-single-item access an item in a list].
// /// [[File:Blockly-list-get-item.png]]
// Blockly.Msg.LISTS_GET_INDEX_FROM_END = '# from end';
// /** @type {string} */
// /// dropdown - Indicates that the '''first''' item should be
// /// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
// /// [[File:Blockly-list-get-item.png]]
// Blockly.Msg.LISTS_GET_INDEX_FIRST = 'first';
// /** @type {string} */
// /// dropdown - Indicates that the '''last''' item should be
// /// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
// /// [[File:Blockly-list-get-item.png]]
// Blockly.Msg.LISTS_GET_INDEX_LAST = 'last';
// /** @type {string} */
// /// dropdown - Indicates that a '''random''' item should be
// /// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
// /// [[File:Blockly-list-get-item.png]]
// Blockly.Msg.LISTS_GET_INDEX_RANDOM = 'random';
// /** @type {string} */
// /// block text - Text that should go after the rightmost block/dropdown when
// /// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
// /// accessing an item from a list].  In most languages, this will be the empty string.
// /// [[File:Blockly-list-get-item.png]]
// Blockly.Msg.LISTS_GET_INDEX_TAIL = '';
/** @type {string} */
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
// /** @type {string} */
// /// tooltip - Indicates the ordinal number that the first item in a list is referenced by.  %1 will be replaced by either "#0" or "#1" depending on the indexing mode.
// Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP = '%1 is the first item.';
// /** @type {string} */
// /// tooltip - Indicates the ordinal number that the last item in a list is referenced by.  %1 will be replaced by either "#0" or "#1" depending on the indexing mode.
// Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP = '%1 is the last item.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
// Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM = 'Returns the item at the specified position in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
// Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = 'Returns the first item in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
// Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = 'Returns the last item in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
// Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = 'Returns a random item in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
// Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = 'Removes and returns the item at the specified position in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
// Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = 'Removes and returns the first item in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
// Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = 'Removes and returns the last item in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
// Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = 'Removes and returns a random item in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
// Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = 'Removes the item at the specified position in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
// Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = 'Removes the first item in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
// Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = 'Removes the last item in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
// Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = 'Removes a random item in a list.';
/** @type {string} */
/// {{Optional}} url - Information about putting items in lists.
Blockly.Msg.LISTS_SET_INDEX_HELPURL = 'https://github.com/google/blockly/wiki/Lists#in-list--set';
// /** @type {string} */
// Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/** @type {string} */
/// block text - [https://github.com/google/blockly/wiki/Lists#in-list--set
/// Replaces an item in a list].
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_SET = 'set';
// /** @type {string} */
// /// block text - [https://github.com/google/blockly/wiki/Lists#in-list--insert-at
// /// Inserts an item into a list].
// /// [[File:Blockly-in-list-set-insert.png]]
// Blockly.Msg.LISTS_SET_INDEX_INSERT = 'insert at';
// /** @type {string} */
// /// block text - The word(s) after the position in the list and before the item to be set/inserted.
// /// [[File:Blockly-in-list-set-insert.png]]
// Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = 'as';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
// Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM = 'Sets the item at the specified position in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
// Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = 'Sets the first item in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
// Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = 'Sets the last item in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
// Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = 'Sets a random item in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
// Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = 'Inserts the item at the specified position in a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
// Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = 'Inserts the item at the start of a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
// Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = 'Append the item to the end of a list.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
// Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = 'Inserts the item randomly in a list.';

// /** @type {string} */
// /// {{Optional}} url - Information describing extracting a sublist from an existing list.
// Blockly.Msg.LISTS_GET_SUBLIST_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-a-sublist';
// /** @type {string} */
// Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
// /** @type {string} */
// /// dropdown - Indicates that an index relative to the front of the list should be used
// /// to specify the beginning of the range from which to
// /// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
// /// [[File:Blockly-get-sublist.png]]
// /// Note: If {{msg-blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
// /// automatically appear ''after'' this number (and any other ordinal numbers on this block).
// /// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
// Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = 'get sub-list from #';
// /** @type {string} */
// /// dropdown - Indicates that an index relative to the end of the list should be used
// /// to specify the beginning of the range from which to
// /// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
// Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = 'get sub-list from # from end';
// /** @type {string} */
// /// dropdown - Indicates that the
// /// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist sublist to extract]
// /// should begin with the list's first item.
// Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = 'get sub-list from first';
// /** @type {string} */
// /// dropdown - Indicates that an index relative to the front of the list should be
// /// used to specify the end of the range from which to
// /// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
// /// [[File:Blockly-get-sublist.png]]
// Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = 'to #';
// /** @type {string} */
// /// dropdown - Indicates that an index relative to the end of the list should be
// /// used to specify the end of the range from which to
// /// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
// /// [[File:Blockly-get-sublist.png]]
// Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = 'to # from end';
// /** @type {string} */
// /// dropdown - Indicates that the '''last''' item in the given list should be
// /// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist the end
// /// of the selected sublist].
// /// [[File:Blockly-get-sublist.png]]
// Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = 'to last';
// /** @type {string} */
// /// block text - This appears in the rightmost position ("tail") of the
// /// sublist block, as described at
// /// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
// /// https://github.com/google/blockly/wiki/Lists#getting-a-sublist].
// /// In English and most other languages, this is the empty string.
// /// [[File:Blockly-get-sublist.png]]
// Blockly.Msg.LISTS_GET_SUBLIST_TAIL = '';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
// /// https://github.com/google/blockly/wiki/Lists#getting-a-sublist] for more information.
// /// [[File:Blockly-get-sublist.png]]
// Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = 'Creates a copy of the specified portion of a list.';

// /** @type {string} */
// /// {{Optional}} url - Information describing sorting a list.
// Blockly.Msg.LISTS_SORT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#sorting-a-list';
// /** @type {string} */
// /// Sort as type %1 (numeric or alphabetic) in order %2 (ascending or descending) a list of items %3.\n{{Identical|Sort}}
// Blockly.Msg.LISTS_SORT_TITLE = 'sort %1 %2 %3';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#sorting-a-list].
// Blockly.Msg.LISTS_SORT_TOOLTIP = 'Sort a copy of a list.';
// /** @type {string} */
// /// sorting order or direction from low to high value for numeric, or A-Z for alphabetic.\n{{Identical|Ascending}}
// Blockly.Msg.LISTS_SORT_ORDER_ASCENDING = 'ascending';
// /** @type {string} */
// /// sorting order or direction from high to low value for numeric, or Z-A for alphabetic.\n{{Identical|Descending}}
// Blockly.Msg.LISTS_SORT_ORDER_DESCENDING = 'descending';
// /** @type {string} */
// /// sort by treating each item as a number.
// Blockly.Msg.LISTS_SORT_TYPE_NUMERIC = 'numeric';
// /** @type {string} */
// /// sort by treating each item alphabetically, case-sensitive.
// Blockly.Msg.LISTS_SORT_TYPE_TEXT = 'alphabetic';
// /** @type {string} */
// /// sort by treating each item alphabetically, ignoring differences in case.
// Blockly.Msg.LISTS_SORT_TYPE_IGNORECASE = 'alphabetic, ignore case';

// /** @type {string} */
// /// {{Optional}} url - Information describing splitting text into a list, or joining a list into text.
// Blockly.Msg.LISTS_SPLIT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists';
// /** @type {string} */
// /// dropdown - Indicates that text will be split up into a list (e.g. "a-b-c" -> ["a", "b", "c"]).
// Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT = 'make list from text';
// /** @type {string} */
// /// dropdown - Indicates that a list will be joined together to form text (e.g. ["a", "b", "c"] -> "a-b-c").
// Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST = 'make text from list';
// /** @type {string} */
// /// block text - Prompts for a letter to be used as a separator when splitting or joining text.
// Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER = 'with delimiter';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-list-from-text
// /// https://github.com/google/blockly/wiki/Lists#make-list-from-text] for more information.
// Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT = 'Split text into a list of texts, breaking at each delimiter.';
// /** @type {string} */
// /// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-text-from-list
// /// https://github.com/google/blockly/wiki/Lists#make-text-from-list] for more information.
// Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN = 'Join a list of texts into one text, separated by a delimiter.';

// /** @type {string} */
// /// {{Optional}} url - Information describing reversing a list.
// Blockly.Msg.LISTS_REVERSE_HELPURL = 'https://github.com/google/blockly/wiki/Lists#reversing-a-list';
// /** @type {string} */
// /// block text - Title of block that returns a copy of a list (%1) with the order of items reversed.
// Blockly.Msg.LISTS_REVERSE_MESSAGE0 = 'reverse %1';
// /** @type {string} */
// /// tooltip - Short description for a block that reverses a copy of a list.
// Blockly.Msg.LISTS_REVERSE_TOOLTIP = 'Reverse a copy of a list.';

// /** @type {string} */
// /// grammar - Text that follows an ordinal number (a number that indicates
// /// position relative to other numbers).  In most languages, such text appears
// /// before the number, so this should be blank.  An exception is Hungarian.
// /// See [[Translating:Blockly#Ordinal_numbers]] for more information.
// Blockly.Msg.ORDINAL_NUMBER_SUFFIX = '';

// Variables Blocks.
/** @type {string} */
/// {{Optional}} url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)], if it exists.
Blockly.Msg.VARIABLES_GET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#get';
/** @type {string} */
/// tooltip - This gets the value of the named variable without modifying it.
Blockly.Msg.VARIABLES_GET_TOOLTIP = 'Returns the value of this variable.';
/** @type {string} */
/// context menu - Selecting this creates a block to set (change) the value of this variable.
/// \n\nParameters:\n* %1 - the name of the variable.
Blockly.Msg.VARIABLES_GET_CREATE_SET = 'Create "set %1"';

/** @type {string} */
/// {{Optional}} url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)], if it exists.
Blockly.Msg.VARIABLES_SET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#set';
/** @type {string} */
/// block text - Change the value of a mathematical variable: '''set [the value of] x to 7'''.\n\nParameters:\n* %1 - the name of the variable.\n* %2 - the value to be assigned.
Blockly.Msg.VARIABLES_SET = 'set %1 to %2';
/** @type {string} */
/// tooltip - This initializes or changes the value of the named variable.
Blockly.Msg.VARIABLES_SET_TOOLTIP = 'Sets this variable to be equal to the input.';
/** @type {string} */
/// context menu - Selecting this creates a block to get (change) the value of
/// this variable.\n\nParameters:\n* %1 - the name of the variable.
Blockly.Msg.VARIABLES_SET_CREATE_GET = 'Create "get %1"';

// Procedures Blocks.
/** @type {string} */
/// {{Optional}} url - Information about defining [https://en.wikipedia.org/wiki/Subroutine functions] that do not have return values.
Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/** @type {string} */
/// block text - This precedes the name of the function when defining it.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#c84aoc this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = 'to';
/** @type {string} */
/// default name - This acts as a placeholder for the name of a function on a
/// function definition block, as shown on
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#w7cfju this block].
/// The user will replace it with the function's name.
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = 'do something';
/** @type {string} */
/// block text - This precedes the list of parameters on a function's definition block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_BEFORE_PARAMS = 'with:';
/** @type {string} */
/// block text - This precedes the list of parameters on a function's caller block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = 'with:';
/** @type {string} */
/// block text - This appears next to the function's "body", the blocks that should be
/// run when the function is called, as shown in
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = '';
/** @type {string} */
/// tooltip
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = 'Creates a function with no output.';
/** @type {string} */
/// Placeholder text that the user is encouraged to replace with a description of what their function does.
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = 'Describe this function...';
/** @type {string} */
/// {{Optional}} url - Information about defining [https://en.wikipedia.org/wiki/Subroutine functions] that have return values.
Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/** @type {string} */
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE;
/** @type {string} */
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
/** @type {string} */
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
/** @type {string} */
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;
/** @type {string} */
/// block text - This imperative or infinite verb precedes the value that is used as the return value
/// (output) of this function.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#6ot5y5 this sample
/// function that returns a value].
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = 'return';
/** @type {string} */
/// tooltip
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = 'Creates a function with an output.';
/** @type {string} */
/// Label for a checkbox that controls if statements are allowed in a function.
Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS = 'allow statements';

/** @type {string} */
/// alert - The user has created a function with two parameters that have the same name.  Every parameter must have a different name.
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = 'Warning: This function has duplicate parameters.';

/** @type {string} */
/// {{Optional}} url - Information about calling [https://en.wikipedia.org/wiki/Subroutine functions] that do not return values.
Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/** @type {string} */
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = 'Run the user-defined function "%1".';

/** @type {string} */
/// {{Optional}} url - Information about calling [https://en.wikipedia.org/wiki/Subroutine functions] that return values.
Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/** @type {string} */
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.\n\nParameters:\n* %1 - the name of the function.
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = 'Run the user-defined function "%1" and use its output.';

/** @type {string} */
/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block.  It refers to the set of parameters
/// (referred to by the simpler term "inputs") to the function.  See
/// [[Translating:Blockly#function_definitions]].\n{{Identical|Input}}
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = 'inputs';
/** @type {string} */
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = 'Add, remove, or reorder inputs to this function.';
/** @type {string} */
/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block].  It appears on the block for
/// adding an individual parameter (referred to by the simpler term "inputs") to the function.
/// See [[Translating:Blockly#function_definitions]].
Blockly.Msg.PROCEDURES_MUTATORARG_TITLE = 'input name:';
/** @type {string} */
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = 'Add an input to the function.';

/** @type {string} */
/// context menu - This appears on the context menu for function calls.  Selecting
/// it causes the corresponding function definition to be highlighted (as shown at
/// [[Translating:Blockly#context_menus]].
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = 'Highlight function definition';
/** @type {string} */
/// context menu - This appears on the context menu for function definitions.
/// Selecting it creates a block to call the function.\n\nParameters:\n* %1 - the name of the function.\n{{Identical|Create}}
Blockly.Msg.PROCEDURES_CREATE_DO = 'Create "%1"';

// /** @type {string} */
// /// tooltip - If the first value is true, this causes the second value to be returned
// /// immediately from the enclosing function.
// Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = 'If a value is true, then return a second value.';
// /** @type {string} */
// /// {{Optional}} url - Information about guard clauses.
// Blockly.Msg.PROCEDURES_IFRETURN_HELPURL = 'http://c2.com/cgi/wiki?GuardClause';
// /** @type {string} */
// /// warning - This appears if the user tries to use this block outside of a function definition.
// Blockly.Msg.PROCEDURES_IFRETURN_WARNING = 'Warning: This block may be used only within a function definition.';

// /** @type {string} */
// /// comment text - This text appears in a new workspace comment, to hint that
// /// the user can type here.
// Blockly.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT = 'Say something...';

// /** @type {string} */
// /// workspace - This text is read out when a user navigates to the workspace while
// /// using a screen reader.
// Blockly.Msg.WORKSPACE_ARIA_LABEL = 'Blockly Workspace';

// /** @type {string} */
// /// warning - This appears if the user collapses a block, and blocks inside
// /// that block have warnings attached to them. It should inform the user that the
// /// block they collapsed contains blocks that have warnings.
// Blockly.Msg.COLLAPSED_WARNINGS_WARNING = 'Collapsed blocks contain warnings.';



/// In arduino_json
/** @type {string} */
/// ACTUATOR_BUZZER
Blockly.Msg.ACTUATOR_BUZZER = '';
/** @type {string} */
/// ACTUATOR_BUZZER_FREQ
Blockly.Msg.ACTUATOR_BUZZER_FREQ = '';
/** @type {string} */
/// ACTUATOR_BUZZER_TONE
Blockly.Msg.ACTUATOR_BUZZER_TONE = '';
/** @type {string} */
/// ACTUATOR_IRTX
Blockly.Msg.ACTUATOR_IRTX = '';
/** @type {string} */
/// ACTUATOR_IRTX_BITS
Blockly.Msg.ACTUATOR_IRTX_BITS = '';
/** @type {string} */
/// ACTUATOR_IRTX_CODE
Blockly.Msg.ACTUATOR_IRTX_CODE = '';
/** @type {string} */
/// ACTUATOR_IRTX_PROTOCOL
Blockly.Msg.ACTUATOR_IRTX_PROTOCOL = '';
/** @type {string} */
/// ACTUATOR_LED
Blockly.Msg.ACTUATOR_LED = '';
/** @type {string} */
/// ACTUATOR_LED_PWM
Blockly.Msg.ACTUATOR_LED_PWM = '';
/** @type {string} */
/// ACTUATOR_RELAY
Blockly.Msg.ACTUATOR_RELAY = '';
/** @type {string} */
/// ACTUATOR_RGBLED
Blockly.Msg.ACTUATOR_RGBLED = '';
/** @type {string} */
/// ADDRESS
Blockly.Msg.ADDRESS = '';
/** @type {string} */
/// ADD_NEW_LINE
Blockly.Msg.ADD_NEW_LINE = '';
/** @type {string} */
/// AND
Blockly.Msg.AND = '';
/** @type {string} */
/// ANTICLOCKWISE
Blockly.Msg.ANTICLOCKWISE = '';
/** @type {string} */
/// AS
Blockly.Msg.AS = '';
/** @type {string} */
/// AS_STRING
Blockly.Msg.AS_STRING = '';
/** @type {string} */
/// BACKWARD
Blockly.Msg.BACKWARD = '';
/** @type {string} */
/// BLUETOOTH_AVAILABLE
Blockly.Msg.BLUETOOTH_AVAILABLE = '';
/** @type {string} */
/// BLUETOOTH_BAUDRATE
Blockly.Msg.BLUETOOTH_BAUDRATE = '';
/** @type {string} */
/// BLUETOOTH_DEVNAME
Blockly.Msg.BLUETOOTH_DEVNAME = '';
/** @type {string} */
/// BLUETOOTH_FLUSH
Blockly.Msg.BLUETOOTH_FLUSH = '';
/** @type {string} */
/// BLUETOOTH_INIT
Blockly.Msg.BLUETOOTH_INIT = '';
/** @type {string} */
/// BLUETOOTH_PIN
Blockly.Msg.BLUETOOTH_PIN = '';
/** @type {string} */
/// BLUETOOTH_PRINT
Blockly.Msg.BLUETOOTH_PRINT = '';
/** @type {string} */
/// BLUETOOTH_PRINTLN
Blockly.Msg.BLUETOOTH_PRINTLN = '';
/** @type {string} */
/// BLUETOOTH_READ
Blockly.Msg.BLUETOOTH_READ = '';
/** @type {string} */
/// BLUETOOTH_READBYTE
Blockly.Msg.BLUETOOTH_READBYTE = '';
/** @type {string} */
/// BLUETOOTH_READFLOAT
Blockly.Msg.BLUETOOTH_READFLOAT = '';
/** @type {string} */
/// BLUETOOTH_READINT
Blockly.Msg.BLUETOOTH_READINT = '';
/** @type {string} */
/// BLUETOOTH_READSTRING
Blockly.Msg.BLUETOOTH_READSTRING = '';
/** @type {string} */
/// BLUETOOTH_READSTRINGLINE
Blockly.Msg.BLUETOOTH_READSTRINGLINE = '';
/** @type {string} */
/// BLUETOOTH_WRITEBYTE
Blockly.Msg.BLUETOOTH_WRITEBYTE = '';
/** @type {string} */
/// BLYNK_APP_CONNECTED
Blockly.Msg.BLYNK_APP_CONNECTED = '';
/** @type {string} */
/// BLYNK_APP_DISCONNECTED
Blockly.Msg.BLYNK_APP_DISCONNECTED = '';
/** @type {string} */
/// BLYNK_APP_READ
Blockly.Msg.BLYNK_APP_READ = '';
/** @type {string} */
/// BLYNK_APP_WRITE
Blockly.Msg.BLYNK_APP_WRITE = '';
/** @type {string} */
/// BLYNK_AUTH
Blockly.Msg.BLYNK_AUTH = '';
/** @type {string} */
/// BLYNK_CONNECTED
Blockly.Msg.BLYNK_CONNECTED = '';
/** @type {string} */
/// BLYNK_INIT
Blockly.Msg.BLYNK_INIT = '';
/** @type {string} */
/// BLYNK_LCD_CLEAR
Blockly.Msg.BLYNK_LCD_CLEAR = '';
/** @type {string} */
/// BLYNK_LCD_PRINT
Blockly.Msg.BLYNK_LCD_PRINT = '';
/** @type {string} */
/// BLYNK_LED
Blockly.Msg.BLYNK_LED = '';
/** @type {string} */
/// BLYNK_LED_INTENSITY
Blockly.Msg.BLYNK_LED_INTENSITY = '';
/** @type {string} */
/// BLYNK_LOCALPORT
Blockly.Msg.BLYNK_LOCALPORT = '';
/** @type {string} */
/// BLYNK_LOCALSERVER
Blockly.Msg.BLYNK_LOCALSERVER = '';
/** @type {string} */
/// BLYNK_MAP
Blockly.Msg.BLYNK_MAP = '';
/** @type {string} */
/// BLYNK_PARAM_READ_INT
Blockly.Msg.BLYNK_PARAM_READ_INT = '';
/** @type {string} */
/// BLYNK_PARAM_READ_STRING
Blockly.Msg.BLYNK_PARAM_READ_STRING = '';
/** @type {string} */
/// BLYNK_SET_PROPERTY
Blockly.Msg.BLYNK_SET_PROPERTY = '';
/** @type {string} */
/// BLYNK_TERMINAL_CLEAR
Blockly.Msg.BLYNK_TERMINAL_CLEAR = '';
/** @type {string} */
/// BLYNK_TERMINAL_PRINT
Blockly.Msg.BLYNK_TERMINAL_PRINT = '';
/** @type {string} */
/// BLYNK_TIMER
Blockly.Msg.BLYNK_TIMER = '';
/** @type {string} */
/// BLYNK_VIRTUALWRITE
Blockly.Msg.BLYNK_VIRTUALWRITE = '';
/** @type {string} */
/// BLYNK_VPIN
Blockly.Msg.BLYNK_VPIN = '';
/** @type {string} */
/// BLYNK_VPIN_VALUE
Blockly.Msg.BLYNK_VPIN_VALUE = '';
/** @type {string} */
/// CLOCKWISE
Blockly.Msg.CLOCKWISE = '';
/** @type {string} */
/// COLOUR
Blockly.Msg.COLOUR = '';
/** @type {string} */
/// COL_BLUE
Blockly.Msg.COL_BLUE = '';
/** @type {string} */
/// COL_GREEN
Blockly.Msg.COL_GREEN = '';
/** @type {string} */
/// COL_RED
Blockly.Msg.COL_RED = '';
/** @type {string} */
/// COMMON_ANODE
Blockly.Msg.COMMON_ANODE = '';
/** @type {string} */
/// COMMON_CATHODE
Blockly.Msg.COMMON_CATHODE = '';
/** @type {string} */
/// CONTROL_ARDUINO_LOOP
Blockly.Msg.CONTROL_ARDUINO_LOOP = '';
/** @type {string} */
/// CONTROL_ARDUINO_SETUP
Blockly.Msg.CONTROL_ARDUINO_SETUP = '';
/** @type {string} */
/// CONTROL_GROUP
Blockly.Msg.CONTROL_GROUP = '';
/** @type {string} */
/// DEPRECATED
Blockly.Msg.DEPRECATED = '';
/** @type {string} */
/// DOMOTICS_INA219_CURRENT
Blockly.Msg.DOMOTICS_INA219_CURRENT = '';
/** @type {string} */
/// DOMOTICS_INA219_INIT
Blockly.Msg.DOMOTICS_INA219_INIT = '';
/** @type {string} */
/// DOMOTICS_INA219_POWER
Blockly.Msg.DOMOTICS_INA219_POWER = '';
/** @type {string} */
/// DOMOTICS_INA219_VOLTAGE
Blockly.Msg.DOMOTICS_INA219_VOLTAGE = '';
/** @type {string} */
/// DOMOTICS_PZEM004T_CURRENT
Blockly.Msg.DOMOTICS_PZEM004T_CURRENT = '';
/** @type {string} */
/// DOMOTICS_PZEM004T_ENERGY
Blockly.Msg.DOMOTICS_PZEM004T_ENERGY = '';
/** @type {string} */
/// DOMOTICS_PZEM004T_FREQUENCY
Blockly.Msg.DOMOTICS_PZEM004T_FREQUENCY = '';
/** @type {string} */
/// DOMOTICS_PZEM004T_INIT
Blockly.Msg.DOMOTICS_PZEM004T_INIT = '';
/** @type {string} */
/// DOMOTICS_PZEM004T_POWER
Blockly.Msg.DOMOTICS_PZEM004T_POWER = '';
/** @type {string} */
/// DOMOTICS_PZEM004T_POWERFACTOR
Blockly.Msg.DOMOTICS_PZEM004T_POWERFACTOR = '';
/** @type {string} */
/// DOMOTICS_PZEM004T_SETADDRESS
Blockly.Msg.DOMOTICS_PZEM004T_SETADDRESS = '';
/** @type {string} */
/// DOMOTICS_PZEM004T_VALUE
Blockly.Msg.DOMOTICS_PZEM004T_VALUE = '';
/** @type {string} */
/// DOMOTICS_PZEM004T_VOLTAGE
Blockly.Msg.DOMOTICS_PZEM004T_VOLTAGE = '';
/** @type {string} */
/// DOWN
Blockly.Msg.DOWN = '';
/** @type {string} */
/// EEPROM_ADDRESS
Blockly.Msg.EEPROM_ADDRESS = '';
/** @type {string} */
/// EEPROM_READ
Blockly.Msg.EEPROM_READ = '';
/** @type {string} */
/// EEPROM_WRITE
Blockly.Msg.EEPROM_WRITE = '';
/** @type {string} */
/// FILTER_MEDIAN
Blockly.Msg.FILTER_MEDIAN = '';
/** @type {string} */
/// FILTER_MEDIAN_ADD
Blockly.Msg.FILTER_MEDIAN_ADD = '';
/** @type {string} */
/// FILTER_MEDIAN_SAMPLES
Blockly.Msg.FILTER_MEDIAN_SAMPLES = '';
/** @type {string} */
/// FILTER_MEDIAN_SETWINDOW
Blockly.Msg.FILTER_MEDIAN_SETWINDOW = '';
/** @type {string} */
/// FORWARD
Blockly.Msg.FORWARD = '';
/** @type {string} */
/// GPS_DAY
Blockly.Msg.GPS_DAY = '';
/** @type {string} */
/// GPS_DISTANCEBETWEEN
Blockly.Msg.GPS_DISTANCEBETWEEN = '';
/** @type {string} */
/// GPS_GETALTITUDE
Blockly.Msg.GPS_GETALTITUDE = '';
/** @type {string} */
/// GPS_GETCOURSE
Blockly.Msg.GPS_GETCOURSE = '';
/** @type {string} */
/// GPS_GETDATETIME
Blockly.Msg.GPS_GETDATETIME = '';
/** @type {string} */
/// GPS_GETPOSITION
Blockly.Msg.GPS_GETPOSITION = '';
/** @type {string} */
/// GPS_GETSPEED
Blockly.Msg.GPS_GETSPEED = '';
/** @type {string} */
/// GPS_HOUR
Blockly.Msg.GPS_HOUR = '';
/** @type {string} */
/// GPS_HUND
Blockly.Msg.GPS_HUND = '';
/** @type {string} */
/// GPS_INIT
Blockly.Msg.GPS_INIT = '';
/** @type {string} */
/// GPS_KMPH
Blockly.Msg.GPS_KMPH = '';
/** @type {string} */
/// GPS_LAT
Blockly.Msg.GPS_LAT = '';
/** @type {string} */
/// GPS_LONG
Blockly.Msg.GPS_LONG = '';
/** @type {string} */
/// GPS_MIN
Blockly.Msg.GPS_MIN = '';
/** @type {string} */
/// GPS_MONTH
Blockly.Msg.GPS_MONTH = '';
/** @type {string} */
/// GPS_MPH
Blockly.Msg.GPS_MPH = '';
/** @type {string} */
/// GPS_SEC
Blockly.Msg.GPS_SEC = '';
/** @type {string} */
/// GPS_VALIDDATA
Blockly.Msg.GPS_VALIDDATA = '';
/** @type {string} */
/// GPS_YEAR
Blockly.Msg.GPS_YEAR = '';
/** @type {string} */
/// HEIGHT
Blockly.Msg.HEIGHT = '';
/** @type {string} */
/// ID
Blockly.Msg.ID = '';
/** @type {string} */
/// IO_ANALOG_READ
Blockly.Msg.IO_ANALOG_READ = '';
/** @type {string} */
/// IO_ANALOG_READ_DIF
Blockly.Msg.IO_ANALOG_READ_DIF = '';
/** @type {string} */
/// IO_ANALOG_WRITE
Blockly.Msg.IO_ANALOG_WRITE = '';
/** @type {string} */
/// IO_BOOLEAN_OFF
Blockly.Msg.IO_BOOLEAN_OFF = '';
/** @type {string} */
/// IO_BOOLEAN_ON
Blockly.Msg.IO_BOOLEAN_ON = '';
/** @type {string} */
/// IO_CAPACITIVE_READ
Blockly.Msg.IO_CAPACITIVE_READ = '';
/** @type {string} */
/// IO_DIGITAL_READ
Blockly.Msg.IO_DIGITAL_READ = '';
/** @type {string} */
/// IO_DIGITAL_WRITE
Blockly.Msg.IO_DIGITAL_WRITE = '';
/** @type {string} */
/// IO_INTERRUPT
Blockly.Msg.IO_INTERRUPT = '';
/** @type {string} */
/// IO_PINMODE
Blockly.Msg.IO_PINMODE = '';
/** @type {string} */
/// IO_PINMODE_AS
Blockly.Msg.IO_PINMODE_AS = '';
/** @type {string} */
/// IO_PULSEIN
Blockly.Msg.IO_PULSEIN = '';
/** @type {string} */
/// IO_PULSEIN_TIMEOUT
Blockly.Msg.IO_PULSEIN_TIMEOUT = '';
/** @type {string} */
/// KEYBOARD
Blockly.Msg.KEYBOARD = '';
/** @type {string} */
/// KEYBOARD_KEY
Blockly.Msg.KEYBOARD_KEY = '';
/** @type {string} */
/// KEYBOARD_KEYSTROKE
Blockly.Msg.KEYBOARD_KEYSTROKE = '';
/** @type {string} */
/// KEYBOARD_PRESS
Blockly.Msg.KEYBOARD_PRESS = '';
/** @type {string} */
/// KEYBOARD_RELEASE
Blockly.Msg.KEYBOARD_RELEASE = '';
/** @type {string} */
/// KEYBOT_BUZZER
Blockly.Msg.KEYBOT_BUZZER = '';
/** @type {string} */
/// KEYBOT_BUZZER_FREQ
Blockly.Msg.KEYBOT_BUZZER_FREQ = '';
/** @type {string} */
/// KEYBOT_DISTANCE
Blockly.Msg.KEYBOT_DISTANCE = '';
/** @type {string} */
/// KEYBOT_IRSENSOR
Blockly.Msg.KEYBOT_IRSENSOR = '';
/** @type {string} */
/// KEYBOT_IRSENSOR_LEFT
Blockly.Msg.KEYBOT_IRSENSOR_LEFT = '';
/** @type {string} */
/// KEYBOT_IRSENSOR_MIDDLE
Blockly.Msg.KEYBOT_IRSENSOR_MIDDLE = '';
/** @type {string} */
/// KEYBOT_IRSENSOR_RIGHT
Blockly.Msg.KEYBOT_IRSENSOR_RIGHT = '';
/** @type {string} */
/// KEYBOT_LEFT
Blockly.Msg.KEYBOT_LEFT = '';
/** @type {string} */
/// KEYBOT_MOTOR
Blockly.Msg.KEYBOT_MOTOR = '';
/** @type {string} */
/// KEYBOT_MOVE
Blockly.Msg.KEYBOT_MOVE = '';
/** @type {string} */
/// KEYBOT_MOVE_BACKWARD
Blockly.Msg.KEYBOT_MOVE_BACKWARD = '';
/** @type {string} */
/// KEYBOT_MOVE_FAST
Blockly.Msg.KEYBOT_MOVE_FAST = '';
/** @type {string} */
/// KEYBOT_MOVE_FORWARD
Blockly.Msg.KEYBOT_MOVE_FORWARD = '';
/** @type {string} */
/// KEYBOT_MOVE_LEFT
Blockly.Msg.KEYBOT_MOVE_LEFT = '';
/** @type {string} */
/// KEYBOT_MOVE_NORMAL
Blockly.Msg.KEYBOT_MOVE_NORMAL = '';
/** @type {string} */
/// KEYBOT_MOVE_RIGHT
Blockly.Msg.KEYBOT_MOVE_RIGHT = '';
/** @type {string} */
/// KEYBOT_MOVE_ROTATE_LEFT
Blockly.Msg.KEYBOT_MOVE_ROTATE_LEFT = '';
/** @type {string} */
/// KEYBOT_MOVE_ROTATE_RIGHT
Blockly.Msg.KEYBOT_MOVE_ROTATE_RIGHT = '';
/** @type {string} */
/// KEYBOT_MOVE_SLOW
Blockly.Msg.KEYBOT_MOVE_SLOW = '';
/** @type {string} */
/// KEYBOT_MOVE_SPEED
Blockly.Msg.KEYBOT_MOVE_SPEED = '';
/** @type {string} */
/// KEYBOT_MOVE_STOP
Blockly.Msg.KEYBOT_MOVE_STOP = '';
/** @type {string} */
/// KEYBOT_MOVE_VERYFAST
Blockly.Msg.KEYBOT_MOVE_VERYFAST = '';
/** @type {string} */
/// KEYBOT_MOVE_VERYSLOW
Blockly.Msg.KEYBOT_MOVE_VERYSLOW = '';
/** @type {string} */
/// KEYBOT_RIGHT
Blockly.Msg.KEYBOT_RIGHT = '';
/** @type {string} */
/// KEYPAD
Blockly.Msg.KEYPAD = '';
/** @type {string} */
/// KEYPAD_COL
Blockly.Msg.KEYPAD_COL = '';
/** @type {string} */
/// KEYPAD_KEY
Blockly.Msg.KEYPAD_KEY = '';
/** @type {string} */
/// KEYPAD_NOKEY
Blockly.Msg.KEYPAD_NOKEY = '';
/** @type {string} */
/// KEYPAD_ROW
Blockly.Msg.KEYPAD_ROW = '';
/** @type {string} */
/// LCD
Blockly.Msg.LCD = '';
/** @type {string} */
/// LCD_BACKLIGHT
Blockly.Msg.LCD_BACKLIGHT = '';
/** @type {string} */
/// LCD_BEGIN
Blockly.Msg.LCD_BEGIN = '';
/** @type {string} */
/// LCD_BEGIN_I2C
Blockly.Msg.LCD_BEGIN_I2C = '';
/** @type {string} */
/// LCD_BLINK
Blockly.Msg.LCD_BLINK = '';
/** @type {string} */
/// LCD_CLEAR
Blockly.Msg.LCD_CLEAR = '';
/** @type {string} */
/// LCD_COL
Blockly.Msg.LCD_COL = '';
/** @type {string} */
/// LCD_CURSOR
Blockly.Msg.LCD_CURSOR = '';
/** @type {string} */
/// LCD_DEFINE
Blockly.Msg.LCD_DEFINE = '';
/** @type {string} */
/// LCD_DISPLAY
Blockly.Msg.LCD_DISPLAY = '';
/** @type {string} */
/// LCD_PRINT
Blockly.Msg.LCD_PRINT = '';
/** @type {string} */
/// LCD_ROW
Blockly.Msg.LCD_ROW = '';
/** @type {string} */
/// LCD_SCROLL
Blockly.Msg.LCD_SCROLL = '';
/** @type {string} */
/// LCD_SYMBOL
Blockly.Msg.LCD_SYMBOL = '';
/** @type {string} */
/// LEDMATRIX
Blockly.Msg.LEDMATRIX = '';
/** @type {string} */
/// LEDMATRIX_CLEAR
Blockly.Msg.LEDMATRIX_CLEAR = '';
/** @type {string} */
/// LEDMATRIX_DRAWBITMAP
Blockly.Msg.LEDMATRIX_DRAWBITMAP = '';
/** @type {string} */
/// LEDMATRIX_DRAWCIRCLE
Blockly.Msg.LEDMATRIX_DRAWCIRCLE = '';
/** @type {string} */
/// LEDMATRIX_DRAWPIXEL
Blockly.Msg.LEDMATRIX_DRAWPIXEL = '';
/** @type {string} */
/// LEDMATRIX_DRAWTEXT
Blockly.Msg.LEDMATRIX_DRAWTEXT = '';
/** @type {string} */
/// LEDMATRIX_FILL
Blockly.Msg.LEDMATRIX_FILL = '';
/** @type {string} */
/// LEDMATRIX_INIT
Blockly.Msg.LEDMATRIX_INIT = '';
/** @type {string} */
/// LEDMATRIX_LINE
Blockly.Msg.LEDMATRIX_LINE = '';
/** @type {string} */
/// LEDMATRIX_RECTANGLE
Blockly.Msg.LEDMATRIX_RECTANGLE = '';
/** @type {string} */
/// LEDMATRIX_ROTATION
Blockly.Msg.LEDMATRIX_ROTATION = '';
/** @type {string} */
/// LEDMATRIX_ROUND
Blockly.Msg.LEDMATRIX_ROUND = '';
/** @type {string} */
/// LEDMATRIX_SHOW
Blockly.Msg.LEDMATRIX_SHOW = '';
/** @type {string} */
/// LEFT
Blockly.Msg.LEFT = '';
/** @type {string} */
/// LISTS_CREATE_WITH_INPUT_WITH_TEXT
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH_TEXT = '';
/** @type {string} */
/// LISTS_LISTNAME
Blockly.Msg.LISTS_LISTNAME = '';
/** @type {string} */
/// LISTS_LISTNAME_TEXT
Blockly.Msg.LISTS_LISTNAME_TEXT = '';
/** @type {string} */
/// MATH_ANGLE
Blockly.Msg.MATH_ANGLE = '';
/** @type {string} */
/// MATH_MAP_HELPURL
Blockly.Msg.MATH_MAP_HELPURL = '';
/** @type {string} */
/// MATH_MAP_TITLE
Blockly.Msg.MATH_MAP_TITLE = '';
/** @type {string} */
/// MATH_MAP_TOOLTIP
Blockly.Msg.MATH_MAP_TOOLTIP = '';
/** @type {string} */
/// MATH_TO_INT
Blockly.Msg.MATH_TO_INT = '';
/** @type {string} */
/// MATH_TO_UINT
Blockly.Msg.MATH_TO_UINT = '';
/** @type {string} */
/// MATH_TRIG_ATAN2
Blockly.Msg.MATH_TRIG_ATAN2 = '';
/** @type {string} */
/// MATH_TRIG_TOOLTIP_ATAN2
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN2 = '';
/** @type {string} */
/// MOTORSHIELD_DC
Blockly.Msg.MOTORSHIELD_DC = '';
/** @type {string} */
/// MOTORSHIELD_SERVO
Blockly.Msg.MOTORSHIELD_SERVO = '';
/** @type {string} */
/// MOTORSHIELD_STEPPER
Blockly.Msg.MOTORSHIELD_STEPPER = '';
/** @type {string} */
/// MOTOR_LM298N
Blockly.Msg.MOTOR_LM298N = '';
/** @type {string} */
/// MOTOR_LM298N_BW
Blockly.Msg.MOTOR_LM298N_BW = '';
/** @type {string} */
/// MOTOR_LM298N_FW
Blockly.Msg.MOTOR_LM298N_FW = '';
/** @type {string} */
/// MOTOR_LM298N_INIT
Blockly.Msg.MOTOR_LM298N_INIT = '';
/** @type {string} */
/// MOTOR_LM298N_MOTOR
Blockly.Msg.MOTOR_LM298N_MOTOR = '';
/** @type {string} */
/// MOTOR_LM298N_MOVE
Blockly.Msg.MOTOR_LM298N_MOVE = '';
/** @type {string} */
/// MOTOR_LM298N_SPEED
Blockly.Msg.MOTOR_LM298N_SPEED = '';
/** @type {string} */
/// MOTOR_LM298P
Blockly.Msg.MOTOR_LM298P = '';
/** @type {string} */
/// MOTOR_SERVO
Blockly.Msg.MOTOR_SERVO = '';
/** @type {string} */
/// MOTOR_SERVO_DEGREE_RANGE
Blockly.Msg.MOTOR_SERVO_DEGREE_RANGE = '';
/** @type {string} */
/// MOTOR_SERVO_DELAY
Blockly.Msg.MOTOR_SERVO_DELAY = '';
/** @type {string} */
/// MOTOR_SERVO_OSCILLATOR
Blockly.Msg.MOTOR_SERVO_OSCILLATOR = '';
/** @type {string} */
/// MOTOR_SERVO_OSCILLATOR_AMPLITUDE
Blockly.Msg.MOTOR_SERVO_OSCILLATOR_AMPLITUDE = '';
/** @type {string} */
/// MOTOR_SERVO_OSCILLATOR_OFFSET
Blockly.Msg.MOTOR_SERVO_OSCILLATOR_OFFSET = '';
/** @type {string} */
/// MOTOR_SERVO_OSCILLATOR_PERIOD
Blockly.Msg.MOTOR_SERVO_OSCILLATOR_PERIOD = '';
/** @type {string} */
/// MOTOR_SERVO_OSCILLATOR_PHASE
Blockly.Msg.MOTOR_SERVO_OSCILLATOR_PHASE = '';
/** @type {string} */
/// MOTOR_SERVO_OSCILLATOR_REFRESH
Blockly.Msg.MOTOR_SERVO_OSCILLATOR_REFRESH = '';
/** @type {string} */
/// MOTOR_SERVO_OSCILLATOR_RESET
Blockly.Msg.MOTOR_SERVO_OSCILLATOR_RESET = '';
/** @type {string} */
/// MOTOR_SERVO_OSCILLATOR_SET
Blockly.Msg.MOTOR_SERVO_OSCILLATOR_SET = '';
/** @type {string} */
/// MOTOR_SERVO_OSCILLATOR_START
Blockly.Msg.MOTOR_SERVO_OSCILLATOR_START = '';
/** @type {string} */
/// MOTOR_SERVO_OSCILLATOR_STOP
Blockly.Msg.MOTOR_SERVO_OSCILLATOR_STOP = '';
/** @type {string} */
/// MOTOR_SERVO_READ
Blockly.Msg.MOTOR_SERVO_READ = '';
/** @type {string} */
/// MOTOR_STEPPER
Blockly.Msg.MOTOR_STEPPER = '';
/** @type {string} */
/// MOTOR_STEPPER_RPM
Blockly.Msg.MOTOR_STEPPER_RPM = '';
/** @type {string} */
/// MOTOR_STEPPER_STEP
Blockly.Msg.MOTOR_STEPPER_STEP = '';
/** @type {string} */
/// MOTOR_STEPPER_STEPS
Blockly.Msg.MOTOR_STEPPER_STEPS = '';
/** @type {string} */
/// MOUSE
Blockly.Msg.MOUSE = '';
/** @type {string} */
/// MOUSE_BUTTON
Blockly.Msg.MOUSE_BUTTON = '';
/** @type {string} */
/// MOUSE_CLICK
Blockly.Msg.MOUSE_CLICK = '';
/** @type {string} */
/// MOUSE_MIDDLE
Blockly.Msg.MOUSE_MIDDLE = '';
/** @type {string} */
/// MOUSE_MOVE
Blockly.Msg.MOUSE_MOVE = '';
/** @type {string} */
/// MOUSE_WHEEL
Blockly.Msg.MOUSE_WHEEL = '';
/** @type {string} */
/// MP3_CONTROL
Blockly.Msg.MP3_CONTROL = '';
/** @type {string} */
/// MP3_EQ
Blockly.Msg.MP3_EQ = '';
/** @type {string} */
/// MP3_FILE
Blockly.Msg.MP3_FILE = '';
/** @type {string} */
/// MP3_FOLDER
Blockly.Msg.MP3_FOLDER = '';
/** @type {string} */
/// MP3_INIT
Blockly.Msg.MP3_INIT = '';
/** @type {string} */
/// MP3_NEXT
Blockly.Msg.MP3_NEXT = '';
/** @type {string} */
/// MP3_PAUSE
Blockly.Msg.MP3_PAUSE = '';
/** @type {string} */
/// MP3_PLAY
Blockly.Msg.MP3_PLAY = '';
/** @type {string} */
/// MP3_PREV
Blockly.Msg.MP3_PREV = '';
/** @type {string} */
/// MP3_REPEAT
Blockly.Msg.MP3_REPEAT = '';
/** @type {string} */
/// MP3_RESET
Blockly.Msg.MP3_RESET = '';
/** @type {string} */
/// MP3_SHUFFLE
Blockly.Msg.MP3_SHUFFLE = '';
/** @type {string} */
/// MP3_STOP
Blockly.Msg.MP3_STOP = '';
/** @type {string} */
/// MP3_VOLUME
Blockly.Msg.MP3_VOLUME = '';
/** @type {string} */
/// MQTT_BROKER
Blockly.Msg.MQTT_BROKER = '';
/** @type {string} */
/// MQTT_CLIENTID
Blockly.Msg.MQTT_CLIENTID = '';
/** @type {string} */
/// MQTT_INIT
Blockly.Msg.MQTT_INIT = '';
/** @type {string} */
/// MQTT_ISCONNECTED
Blockly.Msg.MQTT_ISCONNECTED = '';
/** @type {string} */
/// MQTT_MAC
Blockly.Msg.MQTT_MAC = '';
/** @type {string} */
/// MQTT_PASS
Blockly.Msg.MQTT_PASS = '';
/** @type {string} */
/// MQTT_PORT
Blockly.Msg.MQTT_PORT = '';
/** @type {string} */
/// MQTT_PUB
Blockly.Msg.MQTT_PUB = '';
/** @type {string} */
/// MQTT_SUB
Blockly.Msg.MQTT_SUB = '';
/** @type {string} */
/// MQTT_TOPIC
Blockly.Msg.MQTT_TOPIC = '';
/** @type {string} */
/// MQTT_USER
Blockly.Msg.MQTT_USER = '';
/** @type {string} */
/// MQTT_VALUE
Blockly.Msg.MQTT_VALUE = '';
/** @type {string} */
/// MQTT_WIFI_NAME
Blockly.Msg.MQTT_WIFI_NAME = '';
/** @type {string} */
/// MQTT_WIFI_PASS
Blockly.Msg.MQTT_WIFI_PASS = '';
/** @type {string} */
/// NEOPIXEL_CLEAR
Blockly.Msg.NEOPIXEL_CLEAR = '';
/** @type {string} */
/// NEOPIXEL_INIT
Blockly.Msg.NEOPIXEL_INIT = '';
/** @type {string} */
/// NEOPIXEL_LEDCOUNT
Blockly.Msg.NEOPIXEL_LEDCOUNT = '';
/** @type {string} */
/// NEOPIXEL_PIXEL
Blockly.Msg.NEOPIXEL_PIXEL = '';
/** @type {string} */
/// NEOPIXEL_SETMATRIX
Blockly.Msg.NEOPIXEL_SETMATRIX = '';
/** @type {string} */
/// NEOPIXEL_SETPIXEL
Blockly.Msg.NEOPIXEL_SETPIXEL = '';
/** @type {string} */
/// NEOPIXEL_SETRAW
Blockly.Msg.NEOPIXEL_SETRAW = '';
/** @type {string} */
/// NEOPIXEL_SHOW
Blockly.Msg.NEOPIXEL_SHOW = '';
/** @type {string} */
/// NOTE_A
Blockly.Msg.NOTE_A = '';
/** @type {string} */
/// NOTE_AS
Blockly.Msg.NOTE_AS = '';
/** @type {string} */
/// NOTE_B
Blockly.Msg.NOTE_B = '';
/** @type {string} */
/// NOTE_C
Blockly.Msg.NOTE_C = '';
/** @type {string} */
/// NOTE_CS
Blockly.Msg.NOTE_CS = '';
/** @type {string} */
/// NOTE_D
Blockly.Msg.NOTE_D = '';
/** @type {string} */
/// NOTE_DS
Blockly.Msg.NOTE_DS = '';
/** @type {string} */
/// NOTE_E
Blockly.Msg.NOTE_E = '';
/** @type {string} */
/// NOTE_F
Blockly.Msg.NOTE_F = '';
/** @type {string} */
/// NOTE_FS
Blockly.Msg.NOTE_FS = '';
/** @type {string} */
/// NOTE_G
Blockly.Msg.NOTE_G = '';
/** @type {string} */
/// NOTE_GS
Blockly.Msg.NOTE_GS = '';
/** @type {string} */
/// NUMBER
Blockly.Msg.NUMBER = '';
/** @type {string} */
/// NUNCHUK
Blockly.Msg.NUNCHUK = '';
/** @type {string} */
/// NUNCHUK_X
Blockly.Msg.NUNCHUK_X = '';
/** @type {string} */
/// NUNCHUK_Y
Blockly.Msg.NUNCHUK_Y = '';
/** @type {string} */
/// NUNCHUK_aX
Blockly.Msg.NUNCHUK_aX = '';
/** @type {string} */
/// NUNCHUK_aY
Blockly.Msg.NUNCHUK_aY = '';
/** @type {string} */
/// NUNCHUK_aZ
Blockly.Msg.NUNCHUK_aZ = '';
/** @type {string} */
/// NUNCHUK_bC
Blockly.Msg.NUNCHUK_bC = '';
/** @type {string} */
/// NUNCHUK_bZ
Blockly.Msg.NUNCHUK_bZ = '';
/** @type {string} */
/// OK
Blockly.Msg.OK = '';
/** @type {string} */
/// OLED_AUTOSHOW
Blockly.Msg.OLED_AUTOSHOW = '';
/** @type {string} */
/// OTTO_AMP
Blockly.Msg.OTTO_AMP = '';
/** @type {string} */
/// OTTO_AMP_BIG
Blockly.Msg.OTTO_AMP_BIG = '';
/** @type {string} */
/// OTTO_AMP_NORMAL
Blockly.Msg.OTTO_AMP_NORMAL = '';
/** @type {string} */
/// OTTO_AMP_SMALL
Blockly.Msg.OTTO_AMP_SMALL = '';
/** @type {string} */
/// OTTO_BUTTON
Blockly.Msg.OTTO_BUTTON = '';
/** @type {string} */
/// OTTO_CALIBRATE
Blockly.Msg.OTTO_CALIBRATE = '';
/** @type {string} */
/// OTTO_CALIB_FOOTL
Blockly.Msg.OTTO_CALIB_FOOTL = '';
/** @type {string} */
/// OTTO_CALIB_FOOTR
Blockly.Msg.OTTO_CALIB_FOOTR = '';
/** @type {string} */
/// OTTO_CALIB_LEGL
Blockly.Msg.OTTO_CALIB_LEGL = '';
/** @type {string} */
/// OTTO_CALIB_LEGR
Blockly.Msg.OTTO_CALIB_LEGR = '';
/** @type {string} */
/// OTTO_DISTANCE
Blockly.Msg.OTTO_DISTANCE = '';
/** @type {string} */
/// OTTO_GESTURE
Blockly.Msg.OTTO_GESTURE = '';
/** @type {string} */
/// OTTO_GESTURE_ANGRY
Blockly.Msg.OTTO_GESTURE_ANGRY = '';
/** @type {string} */
/// OTTO_GESTURE_CONFUSED
Blockly.Msg.OTTO_GESTURE_CONFUSED = '';
/** @type {string} */
/// OTTO_GESTURE_FAIL
Blockly.Msg.OTTO_GESTURE_FAIL = '';
/** @type {string} */
/// OTTO_GESTURE_FART
Blockly.Msg.OTTO_GESTURE_FART = '';
/** @type {string} */
/// OTTO_GESTURE_FRETFUL
Blockly.Msg.OTTO_GESTURE_FRETFUL = '';
/** @type {string} */
/// OTTO_GESTURE_HAPPY
Blockly.Msg.OTTO_GESTURE_HAPPY = '';
/** @type {string} */
/// OTTO_GESTURE_LOVE
Blockly.Msg.OTTO_GESTURE_LOVE = '';
/** @type {string} */
/// OTTO_GESTURE_MAGIC
Blockly.Msg.OTTO_GESTURE_MAGIC = '';
/** @type {string} */
/// OTTO_GESTURE_SAD
Blockly.Msg.OTTO_GESTURE_SAD = '';
/** @type {string} */
/// OTTO_GESTURE_SLEEPING
Blockly.Msg.OTTO_GESTURE_SLEEPING = '';
/** @type {string} */
/// OTTO_GESTURE_SUPERHAPPY
Blockly.Msg.OTTO_GESTURE_SUPERHAPPY = '';
/** @type {string} */
/// OTTO_GESTURE_VICTORY
Blockly.Msg.OTTO_GESTURE_VICTORY = '';
/** @type {string} */
/// OTTO_GESTURE_WAVE
Blockly.Msg.OTTO_GESTURE_WAVE = '';
/** @type {string} */
/// OTTO_MOUTH
Blockly.Msg.OTTO_MOUTH = '';
/** @type {string} */
/// OTTO_MOUTH_ANGRY
Blockly.Msg.OTTO_MOUTH_ANGRY = '';
/** @type {string} */
/// OTTO_MOUTH_BIGSURPRISE
Blockly.Msg.OTTO_MOUTH_BIGSURPRISE = '';
/** @type {string} */
/// OTTO_MOUTH_CLEAR
Blockly.Msg.OTTO_MOUTH_CLEAR = '';
/** @type {string} */
/// OTTO_MOUTH_CONFUSED
Blockly.Msg.OTTO_MOUTH_CONFUSED = '';
/** @type {string} */
/// OTTO_MOUTH_CULITO
Blockly.Msg.OTTO_MOUTH_CULITO = '';
/** @type {string} */
/// OTTO_MOUTH_DIAGONAL
Blockly.Msg.OTTO_MOUTH_DIAGONAL = '';
/** @type {string} */
/// OTTO_MOUTH_EIGHT
Blockly.Msg.OTTO_MOUTH_EIGHT = '';
/** @type {string} */
/// OTTO_MOUTH_FIVE
Blockly.Msg.OTTO_MOUTH_FIVE = '';
/** @type {string} */
/// OTTO_MOUTH_FOUR
Blockly.Msg.OTTO_MOUTH_FOUR = '';
/** @type {string} */
/// OTTO_MOUTH_HAPPYCLOSED
Blockly.Msg.OTTO_MOUTH_HAPPYCLOSED = '';
/** @type {string} */
/// OTTO_MOUTH_HAPPYOPEN
Blockly.Msg.OTTO_MOUTH_HAPPYOPEN = '';
/** @type {string} */
/// OTTO_MOUTH_HEART
Blockly.Msg.OTTO_MOUTH_HEART = '';
/** @type {string} */
/// OTTO_MOUTH_INTERROGATION
Blockly.Msg.OTTO_MOUTH_INTERROGATION = '';
/** @type {string} */
/// OTTO_MOUTH_LINEMOUTH
Blockly.Msg.OTTO_MOUTH_LINEMOUTH = '';
/** @type {string} */
/// OTTO_MOUTH_NINE
Blockly.Msg.OTTO_MOUTH_NINE = '';
/** @type {string} */
/// OTTO_MOUTH_OKMOUTH
Blockly.Msg.OTTO_MOUTH_OKMOUTH = '';
/** @type {string} */
/// OTTO_MOUTH_ONE
Blockly.Msg.OTTO_MOUTH_ONE = '';
/** @type {string} */
/// OTTO_MOUTH_SAD
Blockly.Msg.OTTO_MOUTH_SAD = '';
/** @type {string} */
/// OTTO_MOUTH_SADCLOSED
Blockly.Msg.OTTO_MOUTH_SADCLOSED = '';
/** @type {string} */
/// OTTO_MOUTH_SADOPEN
Blockly.Msg.OTTO_MOUTH_SADOPEN = '';
/** @type {string} */
/// OTTO_MOUTH_SEVEN
Blockly.Msg.OTTO_MOUTH_SEVEN = '';
/** @type {string} */
/// OTTO_MOUTH_SIX
Blockly.Msg.OTTO_MOUTH_SIX = '';
/** @type {string} */
/// OTTO_MOUTH_SMALLSURPRISE
Blockly.Msg.OTTO_MOUTH_SMALLSURPRISE = '';
/** @type {string} */
/// OTTO_MOUTH_SMILE
Blockly.Msg.OTTO_MOUTH_SMILE = '';
/** @type {string} */
/// OTTO_MOUTH_THREE
Blockly.Msg.OTTO_MOUTH_THREE = '';
/** @type {string} */
/// OTTO_MOUTH_THUNDER
Blockly.Msg.OTTO_MOUTH_THUNDER = '';
/** @type {string} */
/// OTTO_MOUTH_TONGUEOUT
Blockly.Msg.OTTO_MOUTH_TONGUEOUT = '';
/** @type {string} */
/// OTTO_MOUTH_TWO
Blockly.Msg.OTTO_MOUTH_TWO = '';
/** @type {string} */
/// OTTO_MOUTH_VAMP1
Blockly.Msg.OTTO_MOUTH_VAMP1 = '';
/** @type {string} */
/// OTTO_MOUTH_VAMP2
Blockly.Msg.OTTO_MOUTH_VAMP2 = '';
/** @type {string} */
/// OTTO_MOUTH_XMOUTH
Blockly.Msg.OTTO_MOUTH_XMOUTH = '';
/** @type {string} */
/// OTTO_MOUTH_ZERO
Blockly.Msg.OTTO_MOUTH_ZERO = '';
/** @type {string} */
/// OTTO_MOVE
Blockly.Msg.OTTO_MOVE = '';
/** @type {string} */
/// OTTO_MOVE2
Blockly.Msg.OTTO_MOVE2 = '';
/** @type {string} */
/// OTTO_MOVE_ASCTURN
Blockly.Msg.OTTO_MOVE_ASCTURN = '';
/** @type {string} */
/// OTTO_MOVE_BENDL
Blockly.Msg.OTTO_MOVE_BENDL = '';
/** @type {string} */
/// OTTO_MOVE_BENDR
Blockly.Msg.OTTO_MOVE_BENDR = '';
/** @type {string} */
/// OTTO_MOVE_CRUSAITO1
Blockly.Msg.OTTO_MOVE_CRUSAITO1 = '';
/** @type {string} */
/// OTTO_MOVE_CRUSAITO2
Blockly.Msg.OTTO_MOVE_CRUSAITO2 = '';
/** @type {string} */
/// OTTO_MOVE_FLAPPING1
Blockly.Msg.OTTO_MOVE_FLAPPING1 = '';
/** @type {string} */
/// OTTO_MOVE_FLAPPING2
Blockly.Msg.OTTO_MOVE_FLAPPING2 = '';
/** @type {string} */
/// OTTO_MOVE_HOME
Blockly.Msg.OTTO_MOVE_HOME = '';
/** @type {string} */
/// OTTO_MOVE_JITTER
Blockly.Msg.OTTO_MOVE_JITTER = '';
/** @type {string} */
/// OTTO_MOVE_JUMP
Blockly.Msg.OTTO_MOVE_JUMP = '';
/** @type {string} */
/// OTTO_MOVE_MOONWALKL
Blockly.Msg.OTTO_MOVE_MOONWALKL = '';
/** @type {string} */
/// OTTO_MOVE_MOONWALKR
Blockly.Msg.OTTO_MOVE_MOONWALKR = '';
/** @type {string} */
/// OTTO_MOVE_SHAKEL
Blockly.Msg.OTTO_MOVE_SHAKEL = '';
/** @type {string} */
/// OTTO_MOVE_SHAKER
Blockly.Msg.OTTO_MOVE_SHAKER = '';
/** @type {string} */
/// OTTO_MOVE_SWING
Blockly.Msg.OTTO_MOVE_SWING = '';
/** @type {string} */
/// OTTO_MOVE_TIPTOESWING
Blockly.Msg.OTTO_MOVE_TIPTOESWING = '';
/** @type {string} */
/// OTTO_MOVE_TURNL
Blockly.Msg.OTTO_MOVE_TURNL = '';
/** @type {string} */
/// OTTO_MOVE_TURNR
Blockly.Msg.OTTO_MOVE_TURNR = '';
/** @type {string} */
/// OTTO_MOVE_UPDOWN
Blockly.Msg.OTTO_MOVE_UPDOWN = '';
/** @type {string} */
/// OTTO_MOVE_WALKB
Blockly.Msg.OTTO_MOVE_WALKB = '';
/** @type {string} */
/// OTTO_MOVE_WALKF
Blockly.Msg.OTTO_MOVE_WALKF = '';
/** @type {string} */
/// OTTO_NOISE
Blockly.Msg.OTTO_NOISE = '';
/** @type {string} */
/// OTTO_NOTE
Blockly.Msg.OTTO_NOTE = '';
/** @type {string} */
/// OTTO_NOTE_DURATION
Blockly.Msg.OTTO_NOTE_DURATION = '';
/** @type {string} */
/// OTTO_SING
Blockly.Msg.OTTO_SING = '';
/** @type {string} */
/// OTTO_SOUND_BUTTON
Blockly.Msg.OTTO_SOUND_BUTTON = '';
/** @type {string} */
/// OTTO_SOUND_CONFUSED
Blockly.Msg.OTTO_SOUND_CONFUSED = '';
/** @type {string} */
/// OTTO_SOUND_CONNECTION
Blockly.Msg.OTTO_SOUND_CONNECTION = '';
/** @type {string} */
/// OTTO_SOUND_CUDDLY
Blockly.Msg.OTTO_SOUND_CUDDLY = '';
/** @type {string} */
/// OTTO_SOUND_DISCONNECTION
Blockly.Msg.OTTO_SOUND_DISCONNECTION = '';
/** @type {string} */
/// OTTO_SOUND_FART1
Blockly.Msg.OTTO_SOUND_FART1 = '';
/** @type {string} */
/// OTTO_SOUND_FART2
Blockly.Msg.OTTO_SOUND_FART2 = '';
/** @type {string} */
/// OTTO_SOUND_FART3
Blockly.Msg.OTTO_SOUND_FART3 = '';
/** @type {string} */
/// OTTO_SOUND_HAPPY
Blockly.Msg.OTTO_SOUND_HAPPY = '';
/** @type {string} */
/// OTTO_SOUND_HAPPYSHOR
Blockly.Msg.OTTO_SOUND_HAPPYSHOR = '';
/** @type {string} */
/// OTTO_SOUND_MODE1
Blockly.Msg.OTTO_SOUND_MODE1 = '';
/** @type {string} */
/// OTTO_SOUND_MODE2
Blockly.Msg.OTTO_SOUND_MODE2 = '';
/** @type {string} */
/// OTTO_SOUND_MODE3
Blockly.Msg.OTTO_SOUND_MODE3 = '';
/** @type {string} */
/// OTTO_SOUND_OH2
Blockly.Msg.OTTO_SOUND_OH2 = '';
/** @type {string} */
/// OTTO_SOUND_OH_
Blockly.Msg.OTTO_SOUND_OH_ = '';
/** @type {string} */
/// OTTO_SOUND_SAD
Blockly.Msg.OTTO_SOUND_SAD = '';
/** @type {string} */
/// OTTO_SOUND_SLEEPING
Blockly.Msg.OTTO_SOUND_SLEEPING = '';
/** @type {string} */
/// OTTO_SOUND_SUPERHAPPY
Blockly.Msg.OTTO_SOUND_SUPERHAPPY = '';
/** @type {string} */
/// OTTO_SOUND_SURPRISE
Blockly.Msg.OTTO_SOUND_SURPRISE = '';
/** @type {string} */
/// OTTO_SPEED
Blockly.Msg.OTTO_SPEED = '';
/** @type {string} */
/// OTTO_SPEED_FAST
Blockly.Msg.OTTO_SPEED_FAST = '';
/** @type {string} */
/// OTTO_SPEED_NORMAL
Blockly.Msg.OTTO_SPEED_NORMAL = '';
/** @type {string} */
/// OTTO_SPEED_SLOW
Blockly.Msg.OTTO_SPEED_SLOW = '';
/** @type {string} */
/// OTTO_SPEED_VERYFAST
Blockly.Msg.OTTO_SPEED_VERYFAST = '';
/** @type {string} */
/// OTTO_SPEED_VERYSLOW
Blockly.Msg.OTTO_SPEED_VERYSLOW = '';
/** @type {string} */
/// PIN
Blockly.Msg.PIN = '';
/** @type {string} */
/// PRESSED
Blockly.Msg.PRESSED = '';
/** @type {string} */
/// RFID_EJECTCARD
Blockly.Msg.RFID_EJECTCARD = '';
/** @type {string} */
/// RFID_INIT
Blockly.Msg.RFID_INIT = '';
/** @type {string} */
/// RFID_NEWCARDPRESENT
Blockly.Msg.RFID_NEWCARDPRESENT = '';
/** @type {string} */
/// RFID_READUID
Blockly.Msg.RFID_READUID = '';
/** @type {string} */
/// RIGHT
Blockly.Msg.RIGHT = '';
/** @type {string} */
/// RTC
Blockly.Msg.RTC = '';
/** @type {string} */
/// RTC_DATE_TEXT
Blockly.Msg.RTC_DATE_TEXT = '';
/** @type {string} */
/// RTC_DAY
Blockly.Msg.RTC_DAY = '';
/** @type {string} */
/// RTC_DAYOFWEEK
Blockly.Msg.RTC_DAYOFWEEK = '';
/** @type {string} */
/// RTC_FRIDAY
Blockly.Msg.RTC_FRIDAY = '';
/** @type {string} */
/// RTC_HOUR
Blockly.Msg.RTC_HOUR = '';
/** @type {string} */
/// RTC_MINUTE
Blockly.Msg.RTC_MINUTE = '';
/** @type {string} */
/// RTC_MONDAY
Blockly.Msg.RTC_MONDAY = '';
/** @type {string} */
/// RTC_MONTH
Blockly.Msg.RTC_MONTH = '';
/** @type {string} */
/// RTC_SATURDAY
Blockly.Msg.RTC_SATURDAY = '';
/** @type {string} */
/// RTC_SECOND
Blockly.Msg.RTC_SECOND = '';
/** @type {string} */
/// RTC_SUNDAY
Blockly.Msg.RTC_SUNDAY = '';
/** @type {string} */
/// RTC_THURSDAY
Blockly.Msg.RTC_THURSDAY = '';
/** @type {string} */
/// RTC_TIME_TEXT
Blockly.Msg.RTC_TIME_TEXT = '';
/** @type {string} */
/// RTC_TUESDAY
Blockly.Msg.RTC_TUESDAY = '';
/** @type {string} */
/// RTC_WEDNESDAY
Blockly.Msg.RTC_WEDNESDAY = '';
/** @type {string} */
/// RTC_YEAR
Blockly.Msg.RTC_YEAR = '';
/** @type {string} */
/// SD_BEGIN
Blockly.Msg.SD_BEGIN = '';
/** @type {string} */
/// SD_EXISTS
Blockly.Msg.SD_EXISTS = '';
/** @type {string} */
/// SD_POS
Blockly.Msg.SD_POS = '';
/** @type {string} */
/// SD_PRINT
Blockly.Msg.SD_PRINT = '';
/** @type {string} */
/// SD_READBYTE
Blockly.Msg.SD_READBYTE = '';
/** @type {string} */
/// SD_READLOOP
Blockly.Msg.SD_READLOOP = '';
/** @type {string} */
/// SD_REMOVE
Blockly.Msg.SD_REMOVE = '';
/** @type {string} */
/// SD_SIZE
Blockly.Msg.SD_SIZE = '';
/** @type {string} */
/// SD_WRITEBYTE
Blockly.Msg.SD_WRITEBYTE = '';
/** @type {string} */
/// SENSOR_18B20
Blockly.Msg.SENSOR_18B20 = '';
/** @type {string} */
/// SENSOR_ACCEL
Blockly.Msg.SENSOR_ACCEL = '';
/** @type {string} */
/// SENSOR_ACCEL_ADXL345
Blockly.Msg.SENSOR_ACCEL_ADXL345 = '';
/** @type {string} */
/// SENSOR_ACCEL_X
Blockly.Msg.SENSOR_ACCEL_X = '';
/** @type {string} */
/// SENSOR_ACCEL_Y
Blockly.Msg.SENSOR_ACCEL_Y = '';
/** @type {string} */
/// SENSOR_ACCEL_Z
Blockly.Msg.SENSOR_ACCEL_Z = '';
/** @type {string} */
/// SENSOR_AIR
Blockly.Msg.SENSOR_AIR = '';
/** @type {string} */
/// SENSOR_ALCOHOL
Blockly.Msg.SENSOR_ALCOHOL = '';
/** @type {string} */
/// SENSOR_ALTITUDE
Blockly.Msg.SENSOR_ALTITUDE = '';
/** @type {string} */
/// SENSOR_BAROMETRIC
Blockly.Msg.SENSOR_BAROMETRIC = '';
/** @type {string} */
/// SENSOR_BUTTON
Blockly.Msg.SENSOR_BUTTON = '';
/** @type {string} */
/// SENSOR_BUTTON_DEBOUNCED
Blockly.Msg.SENSOR_BUTTON_DEBOUNCED = '';
/** @type {string} */
/// SENSOR_BUTTON_DEBOUNCED_PRESSED
Blockly.Msg.SENSOR_BUTTON_DEBOUNCED_PRESSED = '';
/** @type {string} */
/// SENSOR_BUTTON_DEBOUNCED_RELEASED
Blockly.Msg.SENSOR_BUTTON_DEBOUNCED_RELEASED = '';
/** @type {string} */
/// SENSOR_BUTTON_INVERT
Blockly.Msg.SENSOR_BUTTON_INVERT = '';
/** @type {string} */
/// SENSOR_CCS811
Blockly.Msg.SENSOR_CCS811 = '';
/** @type {string} */
/// SENSOR_CCS811_CO2
Blockly.Msg.SENSOR_CCS811_CO2 = '';
/** @type {string} */
/// SENSOR_CCS811_CO2_UGM3
Blockly.Msg.SENSOR_CCS811_CO2_UGM3 = '';
/** @type {string} */
/// SENSOR_CCS811_TVOC
Blockly.Msg.SENSOR_CCS811_TVOC = '';
/** @type {string} */
/// SENSOR_COLOR
Blockly.Msg.SENSOR_COLOR = '';
/** @type {string} */
/// SENSOR_COLOR_BLACK
Blockly.Msg.SENSOR_COLOR_BLACK = '';
/** @type {string} */
/// SENSOR_COLOR_BLUE
Blockly.Msg.SENSOR_COLOR_BLUE = '';
/** @type {string} */
/// SENSOR_COLOR_CYAN
Blockly.Msg.SENSOR_COLOR_CYAN = '';
/** @type {string} */
/// SENSOR_COLOR_GREEN
Blockly.Msg.SENSOR_COLOR_GREEN = '';
/** @type {string} */
/// SENSOR_COLOR_HSV_H
Blockly.Msg.SENSOR_COLOR_HSV_H = '';
/** @type {string} */
/// SENSOR_COLOR_HSV_S
Blockly.Msg.SENSOR_COLOR_HSV_S = '';
/** @type {string} */
/// SENSOR_COLOR_HSV_V
Blockly.Msg.SENSOR_COLOR_HSV_V = '';
/** @type {string} */
/// SENSOR_COLOR_ISCOLOR
Blockly.Msg.SENSOR_COLOR_ISCOLOR = '';
/** @type {string} */
/// SENSOR_COLOR_NAME
Blockly.Msg.SENSOR_COLOR_NAME = '';
/** @type {string} */
/// SENSOR_COLOR_ORANGE
Blockly.Msg.SENSOR_COLOR_ORANGE = '';
/** @type {string} */
/// SENSOR_COLOR_PURPLE
Blockly.Msg.SENSOR_COLOR_PURPLE = '';
/** @type {string} */
/// SENSOR_COLOR_READCOLOR
Blockly.Msg.SENSOR_COLOR_READCOLOR = '';
/** @type {string} */
/// SENSOR_COLOR_RED
Blockly.Msg.SENSOR_COLOR_RED = '';
/** @type {string} */
/// SENSOR_COLOR_RGB_B
Blockly.Msg.SENSOR_COLOR_RGB_B = '';
/** @type {string} */
/// SENSOR_COLOR_RGB_CLEAR
Blockly.Msg.SENSOR_COLOR_RGB_CLEAR = '';
/** @type {string} */
/// SENSOR_COLOR_RGB_G
Blockly.Msg.SENSOR_COLOR_RGB_G = '';
/** @type {string} */
/// SENSOR_COLOR_RGB_R
Blockly.Msg.SENSOR_COLOR_RGB_R = '';
/** @type {string} */
/// SENSOR_COLOR_WHITE
Blockly.Msg.SENSOR_COLOR_WHITE = '';
/** @type {string} */
/// SENSOR_COLOR_YELLOW
Blockly.Msg.SENSOR_COLOR_YELLOW = '';
/** @type {string} */
/// SENSOR_CRASH
Blockly.Msg.SENSOR_CRASH = '';
/** @type {string} */
/// SENSOR_DATA_RAW
Blockly.Msg.SENSOR_DATA_RAW = '';
/** @type {string} */
/// SENSOR_DHT11
Blockly.Msg.SENSOR_DHT11 = '';
/** @type {string} */
/// SENSOR_DHT22
Blockly.Msg.SENSOR_DHT22 = '';
/** @type {string} */
/// SENSOR_DS18B20
Blockly.Msg.SENSOR_DS18B20 = '';
/** @type {string} */
/// SENSOR_FLAME
Blockly.Msg.SENSOR_FLAME = '';
/** @type {string} */
/// SENSOR_GAS
Blockly.Msg.SENSOR_GAS = '';
/** @type {string} */
/// SENSOR_HALL
Blockly.Msg.SENSOR_HALL = '';
/** @type {string} */
/// SENSOR_HUMIDITY
Blockly.Msg.SENSOR_HUMIDITY = '';
/** @type {string} */
/// SENSOR_IRRX
Blockly.Msg.SENSOR_IRRX = '';
/** @type {string} */
/// SENSOR_JOYSTICK
Blockly.Msg.SENSOR_JOYSTICK = '';
/** @type {string} */
/// SENSOR_KNOCK
Blockly.Msg.SENSOR_KNOCK = '';
/** @type {string} */
/// SENSOR_LDR
Blockly.Msg.SENSOR_LDR = '';
/** @type {string} */
/// SENSOR_LINETRACKING
Blockly.Msg.SENSOR_LINETRACKING = '';
/** @type {string} */
/// SENSOR_LM35
Blockly.Msg.SENSOR_LM35 = '';
/** @type {string} */
/// SENSOR_MICS4514
Blockly.Msg.SENSOR_MICS4514 = '';
/** @type {string} */
/// SENSOR_MLX90614
Blockly.Msg.SENSOR_MLX90614 = '';
/** @type {string} */
/// SENSOR_MLX90614_AMBIENT
Blockly.Msg.SENSOR_MLX90614_AMBIENT = '';
/** @type {string} */
/// SENSOR_MLX90614_OBJECT
Blockly.Msg.SENSOR_MLX90614_OBJECT = '';
/** @type {string} */
/// SENSOR_NTC
Blockly.Msg.SENSOR_NTC = '';
/** @type {string} */
/// SENSOR_OBSTACLE
Blockly.Msg.SENSOR_OBSTACLE = '';
/** @type {string} */
/// SENSOR_PAJ7620
Blockly.Msg.SENSOR_PAJ7620 = '';
/** @type {string} */
/// SENSOR_PHOTOINT
Blockly.Msg.SENSOR_PHOTOINT = '';
/** @type {string} */
/// SENSOR_PIR
Blockly.Msg.SENSOR_PIR = '';
/** @type {string} */
/// SENSOR_PM25
Blockly.Msg.SENSOR_PM25 = '';
/** @type {string} */
/// SENSOR_PM25_DENSITY
Blockly.Msg.SENSOR_PM25_DENSITY = '';
/** @type {string} */
/// SENSOR_PM25_PARTICLESM3
Blockly.Msg.SENSOR_PM25_PARTICLESM3 = '';
/** @type {string} */
/// SENSOR_POT
Blockly.Msg.SENSOR_POT = '';
/** @type {string} */
/// SENSOR_PRESSURE
Blockly.Msg.SENSOR_PRESSURE = '';
/** @type {string} */
/// SENSOR_REED
Blockly.Msg.SENSOR_REED = '';
/** @type {string} */
/// SENSOR_ROTARY_ENCODER
Blockly.Msg.SENSOR_ROTARY_ENCODER = '';
/** @type {string} */
/// SENSOR_ROTARY_ENCODER_POS
Blockly.Msg.SENSOR_ROTARY_ENCODER_POS = '';
/** @type {string} */
/// SENSOR_SOILHUMIDITY
Blockly.Msg.SENSOR_SOILHUMIDITY = '';
/** @type {string} */
/// SENSOR_SOUND
Blockly.Msg.SENSOR_SOUND = '';
/** @type {string} */
/// SENSOR_TEMPERATURE
Blockly.Msg.SENSOR_TEMPERATURE = '';
/** @type {string} */
/// SENSOR_TEMT6000
Blockly.Msg.SENSOR_TEMT6000 = '';
/** @type {string} */
/// SENSOR_TILT
Blockly.Msg.SENSOR_TILT = '';
/** @type {string} */
/// SENSOR_TMP36
Blockly.Msg.SENSOR_TMP36 = '';
/** @type {string} */
/// SENSOR_TOUCH
Blockly.Msg.SENSOR_TOUCH = '';
/** @type {string} */
/// SENSOR_ULTRASONIC
Blockly.Msg.SENSOR_ULTRASONIC = '';
/** @type {string} */
/// SENSOR_ULTRASONIC_MAXDISTANCE
Blockly.Msg.SENSOR_ULTRASONIC_MAXDISTANCE = '';
/** @type {string} */
/// SENSOR_VIBRATION
Blockly.Msg.SENSOR_VIBRATION = '';
/** @type {string} */
/// SENSOR_VL53L0X
Blockly.Msg.SENSOR_VL53L0X = '';
/** @type {string} */
/// SENSOR_WATER
Blockly.Msg.SENSOR_WATER = '';
/** @type {string} */
/// SERIAL_AVAILABLE
Blockly.Msg.SERIAL_AVAILABLE = '';
/** @type {string} */
/// SERIAL_BAUDRATE
Blockly.Msg.SERIAL_BAUDRATE = '';
/** @type {string} */
/// SERIAL_FLUSH
Blockly.Msg.SERIAL_FLUSH = '';
/** @type {string} */
/// SERIAL_INIT
Blockly.Msg.SERIAL_INIT = '';
/** @type {string} */
/// SERIAL_INT
Blockly.Msg.SERIAL_INT = '';
/** @type {string} */
/// SERIAL_PLOT
Blockly.Msg.SERIAL_PLOT = '';
/** @type {string} */
/// SERIAL_PLOTVALUE
Blockly.Msg.SERIAL_PLOTVALUE = '';
/** @type {string} */
/// SERIAL_PLOTVAR
Blockly.Msg.SERIAL_PLOTVAR = '';
/** @type {string} */
/// SERIAL_PRINT
Blockly.Msg.SERIAL_PRINT = '';
/** @type {string} */
/// SERIAL_PRINTLN
Blockly.Msg.SERIAL_PRINTLN = '';
/** @type {string} */
/// SERIAL_READ
Blockly.Msg.SERIAL_READ = '';
/** @type {string} */
/// SERIAL_READBYTE
Blockly.Msg.SERIAL_READBYTE = '';
/** @type {string} */
/// SERIAL_READFLOAT
Blockly.Msg.SERIAL_READFLOAT = '';
/** @type {string} */
/// SERIAL_READINT
Blockly.Msg.SERIAL_READINT = '';
/** @type {string} */
/// SERIAL_READSTRING
Blockly.Msg.SERIAL_READSTRING = '';
/** @type {string} */
/// SERIAL_READSTRINGLINE
Blockly.Msg.SERIAL_READSTRINGLINE = '';
/** @type {string} */
/// SERIAL_TIMEOUT
Blockly.Msg.SERIAL_TIMEOUT = '';
/** @type {string} */
/// SERIAL_WRITEBYTE
Blockly.Msg.SERIAL_WRITEBYTE = '';
/** @type {string} */
/// SHOP
Blockly.Msg.SHOP = '';
/** @type {string} */
/// SOUND_FREQ
Blockly.Msg.SOUND_FREQ = '';
/** @type {string} */
/// SOUND_NOTE
Blockly.Msg.SOUND_NOTE = '';
/** @type {string} */
/// SOUND_NOTONE
Blockly.Msg.SOUND_NOTONE = '';
/** @type {string} */
/// SOUND_PLAY
Blockly.Msg.SOUND_PLAY = '';
/** @type {string} */
/// SOUND_TONE
Blockly.Msg.SOUND_TONE = '';
/** @type {string} */
/// STATUS
Blockly.Msg.STATUS = '';
/** @type {string} */
/// TEXT
Blockly.Msg.TEXT = '';
/** @type {string} */
/// TEXT_ASCII
Blockly.Msg.TEXT_ASCII = '';
/** @type {string} */
/// TEXT_COMMENT
Blockly.Msg.TEXT_COMMENT = '';
/** @type {string} */
/// TEXT_CONTAINS
Blockly.Msg.TEXT_CONTAINS = '';
/** @type {string} */
/// TEXT_CONTAINS_1
Blockly.Msg.TEXT_CONTAINS_1 = '';
/** @type {string} */
/// TEXT_DECIMAL
Blockly.Msg.TEXT_DECIMAL = '';
/** @type {string} */
/// TEXT_ENDSWITH
Blockly.Msg.TEXT_ENDSWITH = '';
/** @type {string} */
/// TEXT_EQUALS
Blockly.Msg.TEXT_EQUALS = '';
/** @type {string} */
/// TEXT_EQUALS_IGNORE
Blockly.Msg.TEXT_EQUALS_IGNORE = '';
/** @type {string} */
/// TEXT_FORMAT
Blockly.Msg.TEXT_FORMAT = '';
/** @type {string} */
/// TEXT_INDEXOF
Blockly.Msg.TEXT_INDEXOF = '';
/** @type {string} */
/// TEXT_INDEXOF_1
Blockly.Msg.TEXT_INDEXOF_1 = '';
/** @type {string} */
/// TEXT_INDEXOF_FIRST
Blockly.Msg.TEXT_INDEXOF_FIRST = '';
/** @type {string} */
/// TEXT_INDEXOF_LAST
Blockly.Msg.TEXT_INDEXOF_LAST = '';
/** @type {string} */
/// TEXT_LOWERCASE
Blockly.Msg.TEXT_LOWERCASE = '';
/** @type {string} */
/// TEXT_NOT_EQUALS
Blockly.Msg.TEXT_NOT_EQUALS = '';
/** @type {string} */
/// TEXT_REPLACE
Blockly.Msg.TEXT_REPLACE = '';
/** @type {string} */
/// TEXT_REPLACE_1
Blockly.Msg.TEXT_REPLACE_1 = '';
/** @type {string} */
/// TEXT_REPLACE_2
Blockly.Msg.TEXT_REPLACE_2 = '';
/** @type {string} */
/// TEXT_STARTSWITH
Blockly.Msg.TEXT_STARTSWITH = '';
/** @type {string} */
/// TEXT_SUBSTRING
Blockly.Msg.TEXT_SUBSTRING = '';
/** @type {string} */
/// TEXT_SUBSTRING_1
Blockly.Msg.TEXT_SUBSTRING_1 = '';
/** @type {string} */
/// TEXT_SUBSTRING_2
Blockly.Msg.TEXT_SUBSTRING_2 = '';
/** @type {string} */
/// TEXT_TONUMBER
Blockly.Msg.TEXT_TONUMBER = '';
/** @type {string} */
/// TEXT_UPPERCASE
Blockly.Msg.TEXT_UPPERCASE = '';
/** @type {string} */
/// TIME_MICROS
Blockly.Msg.TIME_MICROS = '';
/** @type {string} */
/// TIME_MILLIS
Blockly.Msg.TIME_MILLIS = '';
/** @type {string} */
/// TIME_RUNEVERYMS
Blockly.Msg.TIME_RUNEVERYMS = '';
/** @type {string} */
/// TIME_SNOOZE
Blockly.Msg.TIME_SNOOZE = '';
/** @type {string} */
/// TIME_TIMER
Blockly.Msg.TIME_TIMER = '';
/** @type {string} */
/// TIME_TIMER_RESET
Blockly.Msg.TIME_TIMER_RESET = '';
/** @type {string} */
/// TIME_TIME_ELAPSED
Blockly.Msg.TIME_TIME_ELAPSED = '';
/** @type {string} */
/// TIME_WAIT
Blockly.Msg.TIME_WAIT = '';
/** @type {string} */
/// TIME_WAIT_FOREVER
Blockly.Msg.TIME_WAIT_FOREVER = '';
/** @type {string} */
/// TIME_WAIT_UNTIL
Blockly.Msg.TIME_WAIT_UNTIL = '';
/** @type {string} */
/// TIME_WAIT_WHILE
Blockly.Msg.TIME_WAIT_WHILE = '';
/** @type {string} */
/// TO
Blockly.Msg.TO = '';
/** @type {string} */
/// UNTIL_NEW_LINE
Blockly.Msg.UNTIL_NEW_LINE = '';
/** @type {string} */
/// UP
Blockly.Msg.UP = '';
/** @type {string} */
/// VALUE
Blockly.Msg.VALUE = '';
/** @type {string} */
/// VARIABLES_DEFAULT_NAME_BOOL
Blockly.Msg.VARIABLES_DEFAULT_NAME_BOOL = '';
/** @type {string} */
/// VARIABLES_DEFAULT_NAME_TEXT
Blockly.Msg.VARIABLES_DEFAULT_NAME_TEXT = '';
/** @type {string} */
/// WAVE
Blockly.Msg.WAVE = '';
/** @type {string} */
/// WIDTH
Blockly.Msg.WIDTH = '';
/** @type {string} */
/// WIFI_NAME
Blockly.Msg.WIFI_NAME = '';
/** @type {string} */
/// WIFI_PASS
Blockly.Msg.WIFI_PASS = '';
/** @type {string} */
/// WITH
Blockly.Msg.WITH = '';
/** @type {string} */
/// _3DBOT_BUTTON
Blockly.Msg._3DBOT_BUTTON = '';
/** @type {string} */
/// _3DBOT_BUZZER
Blockly.Msg._3DBOT_BUZZER = '';
/** @type {string} */
/// _3DBOT_BUZZER_FREQ
Blockly.Msg._3DBOT_BUZZER_FREQ = '';
/** @type {string} */
/// _3DBOT_DISTANCE
Blockly.Msg._3DBOT_DISTANCE = '';
/** @type {string} */
/// _3DBOT_IRRX
Blockly.Msg._3DBOT_IRRX = '';
/** @type {string} */
/// _3DBOT_IRSENSOR
Blockly.Msg._3DBOT_IRSENSOR = '';
/** @type {string} */
/// _3DBOT_IRSENSOR_LEFT
Blockly.Msg._3DBOT_IRSENSOR_LEFT = '';
/** @type {string} */
/// _3DBOT_IRSENSOR_MIDDLE
Blockly.Msg._3DBOT_IRSENSOR_MIDDLE = '';
/** @type {string} */
/// _3DBOT_IRSENSOR_RIGHT
Blockly.Msg._3DBOT_IRSENSOR_RIGHT = '';
/** @type {string} */
/// _3DBOT_IRTX
Blockly.Msg._3DBOT_IRTX = '';
/** @type {string} */
/// _3DBOT_LDR
Blockly.Msg._3DBOT_LDR = '';
/** @type {string} */
/// _3DBOT_LED_GREEN
Blockly.Msg._3DBOT_LED_GREEN = '';
/** @type {string} */
/// _3DBOT_LED_PWM
Blockly.Msg._3DBOT_LED_PWM = '';
/** @type {string} */
/// _3DBOT_LED_RED
Blockly.Msg._3DBOT_LED_RED = '';
/** @type {string} */
/// _3DBOT_LED_YELLOW
Blockly.Msg._3DBOT_LED_YELLOW = '';
/** @type {string} */
/// _3DBOT_LEFT
Blockly.Msg._3DBOT_LEFT = '';
/** @type {string} */
/// _3DBOT_MOTOR
Blockly.Msg._3DBOT_MOTOR = '';
/** @type {string} */
/// _3DBOT_MOVE
Blockly.Msg._3DBOT_MOVE = '';
/** @type {string} */
/// _3DBOT_MOVE_BACKWARD
Blockly.Msg._3DBOT_MOVE_BACKWARD = '';
/** @type {string} */
/// _3DBOT_MOVE_BACKWARD_LEFT
Blockly.Msg._3DBOT_MOVE_BACKWARD_LEFT = '';
/** @type {string} */
/// _3DBOT_MOVE_BACKWARD_RIGHT
Blockly.Msg._3DBOT_MOVE_BACKWARD_RIGHT = '';
/** @type {string} */
/// _3DBOT_MOVE_FAST
Blockly.Msg._3DBOT_MOVE_FAST = '';
/** @type {string} */
/// _3DBOT_MOVE_FORWARD
Blockly.Msg._3DBOT_MOVE_FORWARD = '';
/** @type {string} */
/// _3DBOT_MOVE_LEFT
Blockly.Msg._3DBOT_MOVE_LEFT = '';
/** @type {string} */
/// _3DBOT_MOVE_NORMAL
Blockly.Msg._3DBOT_MOVE_NORMAL = '';
/** @type {string} */
/// _3DBOT_MOVE_RIGHT
Blockly.Msg._3DBOT_MOVE_RIGHT = '';
/** @type {string} */
/// _3DBOT_MOVE_ROTATE_LEFT
Blockly.Msg._3DBOT_MOVE_ROTATE_LEFT = '';
/** @type {string} */
/// _3DBOT_MOVE_ROTATE_RIGHT
Blockly.Msg._3DBOT_MOVE_ROTATE_RIGHT = '';
/** @type {string} */
/// _3DBOT_MOVE_SLOW
Blockly.Msg._3DBOT_MOVE_SLOW = '';
/** @type {string} */
/// _3DBOT_MOVE_SPEED
Blockly.Msg._3DBOT_MOVE_SPEED = '';
/** @type {string} */
/// _3DBOT_MOVE_STOP
Blockly.Msg._3DBOT_MOVE_STOP = '';
/** @type {string} */
/// _3DBOT_MOVE_VERYFAST
Blockly.Msg._3DBOT_MOVE_VERYFAST = '';
/** @type {string} */
/// _3DBOT_MOVE_VERYSLOW
Blockly.Msg._3DBOT_MOVE_VERYSLOW = '';
/** @type {string} */
/// _3DBOT_NTC
Blockly.Msg._3DBOT_NTC = '';
/** @type {string} */
/// _3DBOT_RIGHT
Blockly.Msg._3DBOT_RIGHT = '';
/** @type {string} */
/// _3DBOT_STEPS
Blockly.Msg._3DBOT_STEPS = '';
/** @type {string} */
/// _3DBOT_WAIT
Blockly.Msg._3DBOT_WAIT = '';
