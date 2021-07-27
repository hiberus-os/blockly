/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Helper functions for generating Arduino for blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Arduino');

goog.require('Blockly.Generator');
goog.require('Blockly.inputTypes');
goog.require('Blockly.utils.string');


/**
 * Arduino code generator.
 * @type {!Blockly.Generator}
 */
Blockly.Arduino = new Blockly.Generator('Arduino');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.Arduino.addReservedWords(
    // import keyword
    // print(','.join(sorted(keyword.kwlist)))
    // https://docs.Arduino.org/3/reference/lexical_analysis.html#keywords
    // https://docs.Arduino.org/2/reference/lexical_analysis.html#keywords
    'False,None,True,and,as,assert,break,class,continue,def,del,elif,else,' +
    'except,exec,finally,for,from,global,if,import,in,is,lambda,nonlocal,not,' +
    'or,pass,print,raise,return,try,while,with,yield,' +
    // https://docs.Arduino.org/3/library/constants.html
    // https://docs.Arduino.org/2/library/constants.html
    'NotImplemented,Ellipsis,__debug__,quit,exit,copyright,license,credits,' +
    // >>> print(','.join(sorted(dir(__builtins__))))
    // https://docs.Arduino.org/3/library/functions.html
    // https://docs.Arduino.org/2/library/functions.html
    'ArithmeticError,AssertionError,AttributeError,BaseException,' +
    'BlockingIOError,BrokenPipeError,BufferError,BytesWarning,' +
    'ChildProcessError,ConnectionAbortedError,ConnectionError,' +
    'ConnectionRefusedError,ConnectionResetError,DeprecationWarning,EOFError,' +
    'Ellipsis,EnvironmentError,Exception,FileExistsError,FileNotFoundError,' +
    'FloatingPointError,FutureWarning,GeneratorExit,IOError,ImportError,' +
    'ImportWarning,IndentationError,IndexError,InterruptedError,' +
    'IsADirectoryError,KeyError,KeyboardInterrupt,LookupError,MemoryError,' +
    'ModuleNotFoundError,NameError,NotADirectoryError,NotImplemented,' +
    'NotImplementedError,OSError,OverflowError,PendingDeprecationWarning,' +
    'PermissionError,ProcessLookupError,RecursionError,ReferenceError,' +
    'ResourceWarning,RuntimeError,RuntimeWarning,StandardError,' +
    'StopAsyncIteration,StopIteration,SyntaxError,SyntaxWarning,SystemError,' +
    'SystemExit,TabError,TimeoutError,TypeError,UnboundLocalError,' +
    'UnicodeDecodeError,UnicodeEncodeError,UnicodeError,' +
    'UnicodeTranslateError,UnicodeWarning,UserWarning,ValueError,Warning,' +
    'ZeroDivisionError,_,__build_class__,__debug__,__doc__,__import__,' +
    '__loader__,__name__,__package__,__spec__,abs,all,any,apply,ascii,' +
    'basestring,bin,bool,buffer,bytearray,bytes,callable,chr,classmethod,cmp,' +
    'coerce,compile,complex,copyright,credits,delattr,dict,dir,divmod,' +
    'enumerate,eval,exec,execfile,exit,file,filter,float,format,frozenset,' +
    'getattr,globals,hasattr,hash,help,hex,id,input,int,intern,isinstance,' +
    'issubclass,iter,len,license,list,locals,long,map,max,memoryview,min,' +
    'next,object,oct,open,ord,pow,print,property,quit,range,raw_input,reduce,' +
    'reload,repr,reversed,round,set,setattr,slice,sorted,staticmethod,str,' +
    'sum,super,tuple,type,unichr,unicode,vars,xrange,zip'
);

/**
 * Order of operation ENUMs.
 * http://docs.Arduino.org/reference/expressions.html#summary
 */
Blockly.Arduino.ORDER_ATOMIC = 0;            // 0 "" ...
Blockly.Arduino.ORDER_COLLECTION = 1;        // tuples, lists, dictionaries
Blockly.Arduino.ORDER_STRING_CONVERSION = 1; // `expression...`
Blockly.Arduino.ORDER_MEMBER = 2.1;          // . []
Blockly.Arduino.ORDER_FUNCTION_CALL = 2.2;   // ()
Blockly.Arduino.ORDER_EXPONENTIATION = 3;    // **
Blockly.Arduino.ORDER_UNARY_SIGN = 4;        // + -
Blockly.Arduino.ORDER_BITWISE_NOT = 4;       // ~
Blockly.Arduino.ORDER_MULTIPLICATIVE = 5;    // * / // %
Blockly.Arduino.ORDER_ADDITIVE = 6;          // + -
Blockly.Arduino.ORDER_BITWISE_SHIFT = 7;     // << >>
Blockly.Arduino.ORDER_BITWISE_AND = 8;       // &
Blockly.Arduino.ORDER_BITWISE_XOR = 9;       // ^
Blockly.Arduino.ORDER_BITWISE_OR = 10;       // |
Blockly.Arduino.ORDER_RELATIONAL = 11;       // in, not in, is, is not,
                                            //     <, <=, >, >=, <>, !=, ==
Blockly.Arduino.ORDER_LOGICAL_NOT = 12;      // not
Blockly.Arduino.ORDER_LOGICAL_AND = 13;      // and
Blockly.Arduino.ORDER_LOGICAL_OR = 14;       // or
Blockly.Arduino.ORDER_CONDITIONAL = 15;      // if else
Blockly.Arduino.ORDER_LAMBDA = 16;           // lambda
Blockly.Arduino.ORDER_NONE = 99;             // (...)

/**
 * List of outer-inner pairings that do NOT require parentheses.
 * @type {!Array<!Array<number>>}
 */
Blockly.Arduino.ORDER_OVERRIDES = [
  // (foo()).bar -> foo().bar
  // (foo())[0] -> foo()[0]
  [Blockly.Arduino.ORDER_FUNCTION_CALL, Blockly.Arduino.ORDER_MEMBER],
  // (foo())() -> foo()()
  [Blockly.Arduino.ORDER_FUNCTION_CALL, Blockly.Arduino.ORDER_FUNCTION_CALL],
  // (foo.bar).baz -> foo.bar.baz
  // (foo.bar)[0] -> foo.bar[0]
  // (foo[0]).bar -> foo[0].bar
  // (foo[0])[1] -> foo[0][1]
  [Blockly.Arduino.ORDER_MEMBER, Blockly.Arduino.ORDER_MEMBER],
  // (foo.bar)() -> foo.bar()
  // (foo[0])() -> foo[0]()
  [Blockly.Arduino.ORDER_MEMBER, Blockly.Arduino.ORDER_FUNCTION_CALL],

  // not (not foo) -> not not foo
  [Blockly.Arduino.ORDER_LOGICAL_NOT, Blockly.Arduino.ORDER_LOGICAL_NOT],
  // a and (b and c) -> a and b and c
  [Blockly.Arduino.ORDER_LOGICAL_AND, Blockly.Arduino.ORDER_LOGICAL_AND],
  // a or (b or c) -> a or b or c
  [Blockly.Arduino.ORDER_LOGICAL_OR, Blockly.Arduino.ORDER_LOGICAL_OR]
];

/**
 * Whether the init method has been called.
 * @type {?boolean}
 */
Blockly.Arduino.isInitialized = false;

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 * @this {Blockly.Generator}
 */
Blockly.Arduino.init = function(workspace) {
  // Call Blockly.Generator's init.
  Object.getPrototypeOf(this).init.call(this);

  /**
   * Empty loops or conditionals are not allowed in Arduino.
   */
  this.PASS = this.INDENT + 'pass\n';

  if (!this.nameDB_) {
    this.nameDB_ = new Blockly.Names(this.RESERVED_WORDS_);
  } else {
    this.nameDB_.reset();
  }

  this.nameDB_.setVariableMap(workspace.getVariableMap());
  this.nameDB_.populateVariables(workspace);
  this.nameDB_.populateProcedures(workspace);

  var defvars = [];
  // Add developer variables (not created or named by the user).
  var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
  for (var i = 0; i < devVarList.length; i++) {
    defvars.push(this.nameDB_.getName(devVarList[i],
        Blockly.Names.DEVELOPER_VARIABLE_TYPE) + ' = None');
  }

  // Add user variables, but only ones that are being used.
  var variables = Blockly.Variables.allUsedVarModels(workspace);
  for (var i = 0; i < variables.length; i++) {
    defvars.push(this.nameDB_.getName(variables[i].getId(),
        Blockly.VARIABLE_CATEGORY_NAME) + ' = None');
  }

  this.definitions_['variables'] = defvars.join('\n');
  this.isInitialized = true;
};

/**
 * Prepend the generated code with import statements and variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.Arduino.finish = function(code) {
  // Convert the definitions dictionary into a list.
  var imports = [];
  var definitions = [];
  for (var name in this.definitions_) {
    var def = this.definitions_[name];
    if (def.match(/^(from\s+\S+\s+)?import\s+\S+/)) {
      imports.push(def);
    } else {
      definitions.push(def);
    }
  }
  // Call Blockly.Generator's finish.
  code = Object.getPrototypeOf(this).finish.call(this, code);
  this.isInitialized = false;

  this.nameDB_.reset();
  var allDefs = imports.join('\n') + '\n\n' + definitions.join('\n\n');
  return allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n\n') + code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.Arduino.scrubNakedValue = function(line) {
  return line + '\n';
};

/**
 * Encode a string as a properly escaped Arduino string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} Arduino string.
 * @protected
 */
Blockly.Arduino.quote_ = function(string) {
  // Can't use goog.string.quote since % must also be escaped.
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n');

  // Follow the CArduino behaviour of repr() for a non-byte string.
  var quote = '\'';
  if (string.indexOf('\'') !== -1) {
    if (string.indexOf('"') === -1) {
      quote = '"';
    } else {
      string = string.replace(/'/g, '\\\'');
    }
  }
  return quote + string + quote;
};

/**
 * Encode a string as a properly escaped multiline Arduino string, complete
 * with quotes.
 * @param {string} string Text to encode.
 * @return {string} Arduino string.
 * @protected
 */
Blockly.Arduino.multiline_quote_ = function(string) {
  var lines = string.split(/\n/g).map(this.quote_);
  // Join with the following, plus a newline:
  // + '\n' +
  return lines.join(' + \'\\n\' + \n');
};

/**
 * Common tasks for generating Arduino from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The Arduino code created for this block.
 * @param {boolean=} opt_thisOnly True to generate code for only this statement.
 * @return {string} Arduino code with comments and subsequent blocks added.
 * @protected
 */
Blockly.Arduino.scrub_ = function(block, code, opt_thisOnly) {
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      comment = Blockly.utils.string.wrap(comment, this.COMMENT_WRAP - 3);
      commentCode += this.prefixLines(comment + '\n', '# ');
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var i = 0; i < block.inputList.length; i++) {
      if (block.inputList[i].type == Blockly.inputTypes.VALUE) {
        var childBlock = block.inputList[i].connection.targetBlock();
        if (childBlock) {
          comment = this.allNestedComments(childBlock);
          if (comment) {
            commentCode += this.prefixLines(comment, '# ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = opt_thisOnly ? '' : this.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};

/**
 * Gets a property and adjusts the value, taking into account indexing, and
 * casts to an integer.
 * @param {!Blockly.Block} block The block.
 * @param {string} atId The property ID of the element to get.
 * @param {number=} opt_delta Value to add.
 * @param {boolean=} opt_negate Whether to negate the value.
 * @return {string|number}
 */
Blockly.Arduino.getAdjustedInt = function(block, atId, opt_delta, opt_negate) {
  var delta = opt_delta || 0;
  if (block.workspace.options.oneBasedIndex) {
    delta--;
  }
  var defaultAtIndex = block.workspace.options.oneBasedIndex ? '1' : '0';
  var atOrder = delta ? this.ORDER_ADDITIVE : this.ORDER_NONE;
  var at = this.valueToCode(block, atId, atOrder) || defaultAtIndex;

  if (Blockly.isNumber(at)) {
    // If the index is a naked number, adjust it right now.
    at = parseInt(at, 10) + delta;
    if (opt_negate) {
      at = -at;
    }
  } else {
    // If the index is dynamic, adjust it in code.
    if (delta > 0) {
      at = 'int(' + at + ' + ' + delta + ')';
    } else if (delta < 0) {
      at = 'int(' + at + ' - ' + -delta + ')';
    } else {
      at = 'int(' + at + ')';
    }
    if (opt_negate) {
      at = '-' + at;
    }
  }
  return at;
};
