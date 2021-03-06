/*
 * highlight.js Structured Text syntax highlighting definition
 *
 * @see https://github.com/highlightjs/highlight.js
 *
 * @package: highlightjs-iecst
 * @author:  Sergey Romanov <serg4172@mail.ru>
 * @since:   2019-08-02
 *
 * Description: Structured Text is one of the 6 languages of IEC 61131-3
 * standard, for developing PLC programs.
 * Category: scripting
 */

var module = module ? module : {}; // shim for browser use

function hljsDefineIECST(hljs) {
    return {
        aliases: ["iecst", "scl", "stl", "structured-text"],
        name: "Structured Text",
        case_insensitive: true,
        keywords: {
            keyword:
                "if then end_if elsif else case of end_case " +
                "to do by while repeat end_while end_repeat for end_for from " +
                "private public protected " +
                "or and not xor le ge eq ne ge lt constant return exit at retain non_retain task with until using extends implements",
            title:
                "program end_program function end_function function_block end_function_block configuration " +
                "end_configuration action end_action transition end_transition type end_type struct end_struct step " +
                "end_step initial_step namespace end_namespace channel end_channel library end_library folder end_folder resource end_resource " +
                "var var_global end_var var_input VAR_EXTERNAL var_out var_output var_in_out var_temp var_interval var_access var_config method end_method property end_property interface end_interface",
            literal: "false true null ",
            built_in:
                "array pointer int sint dint lint usint uint udint ulint real lreal time date time_of_day date_and_time dt tod string bool byte world dworld lworld ref_to any_num any_int any_string",
            function:
                "mod abs acos asin atan cos exp expt ln log sin sqrt tan sel max min limit mux shl shr rol ror indexof sizeof adr ref adrinst bitadr add mul div sub trunc move"
        },
        contains: [
            {
                className: "string",
                begin: "'",
                end: "'",
                contains: [hljs.BACKSLASH_ESCAPE, { begin: "''" }],
                relevance: 0
            },
            {
                className: "string",
                begin: '"',
                end: '"',
                contains: [hljs.BACKSLASH_ESCAPE, { begin: '""' }],
                relevance: 0
            },
            {
                className: "symbol",
                begin: "(T|DT|TOD)#[0-9:-_shmyd]*"
            },
            {
                className: "symbol",
                begin: "[A-Za-z]{1,6}#[0-9_.e]*",
                relevance: 0
            },
            {
                className: "number",
                begin: "[0-9]*#[a-zA-Z0-9_]*",
                relevance: 0
            },
            {
                className: "number",
                begin: "[a-zA-Z_]*#[a-zA-Z_]*",
                relevance: 0
            },
            {
                className: "symbol",
                begin: "%(I|Q|M)(X|B|W|D|L)[0-9.]*"
            },
            {
                className: "symbol",
                begin: "%(I|Q|M)[0-9.]*"
            },
            hljs.C_NUMBER_MODE,
            hljs.COMMENT("//", "$"),
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.COMMENT("\\(\\*", "\\*\\)")
        ]
    };
}

module.exports = function(hljs) {
    hljs.registerLanguage("iecst", hljsDefineIECST);
};

module.exports.definer = hljsDefineIECST;
