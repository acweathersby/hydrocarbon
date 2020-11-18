{
    env: [
        {
            name: 'hydrocarbon',
            b: [[{ type: 'production', val: 1, name: 'head' }]]
        },
        {
            name: 'head',
            b: [
                [
                    { type: 'production', val: 3, name: 'pre$pre$preamble' },
                    { type: 'production', val: 19, name: 'prd$prd$productions' }
                ],
                [
                    { type: 'production', val: 19, name: 'prd$prd$productions' }
                ]
            ]
        },
        {
            name: 'pre$_HC_listbody1_100',
            b: [
                [
                    { type: 'production', val: 2, name: 'pre$_HC_listbody1_100' },
                    { type: 'production', val: 4, name: 'pre$preamble_clause' }
                ],
                [{ type: 'production', val: 4, name: 'pre$preamble_clause' }]
            ]
        },
        {
            name: 'pre$preamble',
            b: [
                [
                    { type: 'production', val: 3, name: 'pre$preamble' },
                    { type: 'production', val: 4, name: 'pre$preamble_clause' }
                ],
                [{ type: 'production', val: 4, name: 'pre$preamble_clause' }]
            ]
        },
        {
            name: 'pre$preamble_clause',
            b: [
                [{ type: 'production', val: 8, name: 'pre$ignore_preamble' }],
                [
                    { type: 'production', val: 6, name: 'pre$symbols_preamble' }
                ],
                [
                    {
                        type: 'production',
                        val: 7,
                        name: 'pre$precedence_preamble'
                    }
                ],
                [{ type: 'production', val: 10, name: 'pre$name_preamble' }],
                [{ type: 'production', val: 11, name: 'pre$ext_preamble' }],
                [{ type: 'production', val: 9, name: 'pre$error_preamble' }],
                [
                    { type: 'production', val: 17, name: 'pre$import_preamble' }
                ],
                [{ type: 'production', val: 44, name: 'cm$cm$comment' }]
            ]
        },
        {
            name: 'pre$_HC_listbody2_101',
            b: [
                [
                    { type: 'production', val: 5, name: 'pre$_HC_listbody2_101' },
                    { type: 'production', val: 55, name: 'sym$sym$lexer_symbol' }
                ],
                [
                    { type: 'production', val: 55, name: 'sym$sym$lexer_symbol' }
                ]
            ]
        },
        {
            name: 'pre$symbols_preamble',
            b: [
                [
                    { type: undefined, val: undefined, name: undefined },
                    { type: 'literal', val: 'SYMBOL', name: undefined },
                    { type: 'production', val: 5, name: 'pre$_HC_listbody2_101' },
                    { type: 'generated', val: 'nl', name: undefined }
                ]
            ]
        },
        {
            name: 'pre$precedence_preamble',
            b: [
                [
                    { type: undefined, val: undefined, name: undefined },
                    { type: 'literal', val: 'PREC', name: undefined },
                    {
                        type: 'production',
                        val: 61,
                        name: 'sym$sym$terminal_symbol'
                    },
                    { type: 'generated', val: 'num', name: undefined },
                    { type: 'generated', val: 'nl', name: undefined }
                ]
            ]
        },
        {
            name: 'pre$ignore_preamble',
            b: [
                [
                    { type: undefined, val: undefined, name: undefined },
                    { type: 'literal', val: 'IGNORE', name: undefined },
                    {
                        type: 'production',
                        val: 54,
                        name: 'sym$sym$ignore_symbols'
                    },
                    { type: 'generated', val: 'nl', name: undefined }
                ]
            ]
        },
        {
            name: 'pre$error_preamble',
            b: [
                [
                    { type: undefined, val: undefined, name: undefined },
                    { type: 'literal', val: 'ERROR', name: undefined },
                    {
                        type: 'production',
                        val: 54,
                        name: 'sym$sym$ignore_symbols'
                    },
                    { type: 'generated', val: 'nl', name: undefined }
                ]
            ]
        },
        {
            name: 'pre$name_preamble',
            b: [
                [
                    { type: undefined, val: undefined, name: undefined },
                    { type: 'literal', val: 'NAME', name: undefined },
                    { type: 'production', val: 77, name: 'sym$sym$identifier' },
                    { type: 'generated', val: 'nl', name: undefined }
                ]
            ]
        },
        {
            name: 'pre$ext_preamble',
            b: [
                [
                    { type: undefined, val: undefined, name: undefined },
                    { type: 'literal', val: 'EXT', name: undefined },
                    { type: 'production', val: 77, name: 'sym$sym$identifier' },
                    { type: 'generated', val: 'nl', name: undefined }
                ]
            ]
        },
        {
            name: 'pre$_HC_listbody2_102',
            b: [
                [
                    {
                        type: 'production',
                        val: 12,
                        name: 'pre$_HC_listbody2_102'
                    },
                    { type: 'generated', val: 'ws', name: undefined }
                ],
                [{ type: 'generated', val: 'ws', name: undefined }]
            ]
        },
        {
            name: 'pre$_group_019_103',
            b: [
                [{ type: 'generated', val: 'id', name: undefined }],
                [{ type: 'generated', val: 'key', name: undefined }],
                [{ type: 'generated', val: 'sym', name: undefined }],
                [{ type: 'generated', val: 'tok', name: undefined }]
            ]
        },
        {
            name: 'pre$_HC_listbody1_104',
            b: [
                [
                    {
                        type: 'production',
                        val: 14,
                        name: 'pre$_HC_listbody1_104'
                    },
                    { type: 'production', val: 13, name: 'pre$_group_019_103' }
                ],
                [{ type: 'production', val: 13, name: 'pre$_group_019_103' }]
            ]
        },
        {
            name: 'pre$_HC_listbody4_105',
            b: [
                [
                    {
                        type: 'production',
                        val: 15,
                        name: 'pre$_HC_listbody4_105'
                    },
                    { type: 'generated', val: 'ws', name: undefined }
                ],
                [{ type: 'generated', val: 'ws', name: undefined }]
            ]
        },
        {
            name: 'pre$_group_021_106',
            b: [
                [{ type: 'literal', val: 'AS', name: undefined }],
                [{ type: 'literal', val: 'as', name: undefined }]
            ]
        },
        {
            name: 'pre$import_preamble',
            b: [
                [
                    { type: undefined, val: undefined, name: undefined },
                    { type: 'literal', val: 'IMPORT', name: undefined },
                    {
                        type: 'production',
                        val: 12,
                        name: 'pre$_HC_listbody2_102'
                    },
                    {
                        type: 'production',
                        val: 14,
                        name: 'pre$_HC_listbody1_104'
                    },
                    {
                        type: 'production',
                        val: 15,
                        name: 'pre$_HC_listbody4_105'
                    },
                    { type: 'production', val: 16, name: 'pre$_group_021_106' },
                    { type: 'production', val: 77, name: 'sym$sym$identifier' },
                    { type: 'generated', val: 'nl', name: undefined }
                ],
                [
                    { type: undefined, val: undefined, name: undefined },
                    { type: 'literal', val: 'IMPORT', name: undefined },
                    {
                        type: 'production',
                        val: 14,
                        name: 'pre$_HC_listbody1_104'
                    },
                    {
                        type: 'production',
                        val: 15,
                        name: 'pre$_HC_listbody4_105'
                    },
                    { type: 'production', val: 16, name: 'pre$_group_021_106' },
                    { type: 'production', val: 77, name: 'sym$sym$identifier' },
                    { type: 'generated', val: 'nl', name: undefined }
                ]
            ]
        },
        {
            name: 'prd$start',
            b: [[{ type: 'production', val: 19, name: 'prd$productions' }]]
        },
        {
            name: 'prd$productions',
            b: [
                [{ type: 'production', val: 24, name: 'prd$production' }],
                [
                    {
                        type: 'production',
                        val: 34,
                        name: 'fn$fn$referenced_function'
                    }
                ],
                [
                    { type: 'production', val: 19, name: 'prd$productions' },
                    { type: 'production', val: 24, name: 'prd$production' }
                ],
                [
                    { type: 'production', val: 19, name: 'prd$productions' },
                    { type: 'production', val: 44, name: 'cm$cm$comment' }
                ],
                [
                    { type: 'production', val: 19, name: 'prd$productions' },
                    {
                        type: 'production',
                        val: 34,
                        name: 'fn$fn$referenced_function'
                    }
                ],
                [{ type: undefined, val: undefined, name: undefined }]
            ]
        },
        {
            name: 'prd$_group_08_100',
            b: [
                [
                    {
                        type: 'production',
                        val: 76,
                        name: 'sym$sym$production_id'
                    }
                ]
            ]
        },
        {
            name: 'prd$_group_010_101',
            b: [
                [{ type: 'symbol', val: '│', name: undefined }],
                [{ type: 'symbol', val: '|', name: undefined }]
            ]
        },
        {
            name: 'prd$_group_111_102',
            b: [
                [
                    { type: 'production', val: 21, name: 'prd$_group_010_101' },
                    { type: 'production', val: 35, name: 'fn$fn$error_function' }
                ]
            ]
        },
        {
            name: 'prd$_group_013_103',
            b: [
                [
                    {
                        type: 'production',
                        val: 75,
                        name: 'sym$sym$imported_production_symbol'
                    }
                ]
            ]
        },
        {
            name: 'prd$production',
            b: [
                [
                    { type: 'symbol', val: '<>', name: undefined },
                    { type: 'production', val: 20, name: 'prd$_group_08_100' },
                    {
                        type: 'production',
                        val: 25,
                        name: 'prd$production_start_symbol'
                    },
                    {
                        type: 'production',
                        val: 28,
                        name: 'pb$pb$production_bodies'
                    },
                    { type: 'production', val: 22, name: 'prd$_group_111_102' }
                ],
                [
                    { type: 'symbol', val: '<>', name: undefined },
                    { type: 'production', val: 23, name: 'prd$_group_013_103' },
                    {
                        type: 'production',
                        val: 25,
                        name: 'prd$production_start_symbol'
                    },
                    {
                        type: 'production',
                        val: 28,
                        name: 'pb$pb$production_bodies'
                    }
                ],
                [
                    { type: 'symbol', val: '+>', name: undefined },
                    { type: 'production', val: 23, name: 'prd$_group_013_103' },
                    {
                        type: 'production',
                        val: 25,
                        name: 'prd$production_start_symbol'
                    },
                    {
                        type: 'production',
                        val: 28,
                        name: 'pb$pb$production_bodies'
                    }
                ],
                [
                    { type: 'symbol', val: '<>', name: undefined },
                    { type: 'production', val: 20, name: 'prd$_group_08_100' },
                    {
                        type: 'production',
                        val: 25,
                        name: 'prd$production_start_symbol'
                    },
                    {
                        type: 'production',
                        val: 28,
                        name: 'pb$pb$production_bodies'
                    }
                ]
            ]
        },
        {
            name: 'prd$production_start_symbol',
            b: [
                [{ type: 'symbol', val: '→', name: undefined }],
                [{ type: 'symbol', val: '>', name: undefined }]
            ]
        },
        {
            name: 'pb$start',
            b: [
                [
                    { type: 'production', val: 28, name: 'pb$production_bodies' }
                ]
            ]
        },
        {
            name: 'pb$_group_04_100',
            b: [
                [{ type: 'symbol', val: '│', name: undefined }],
                [{ type: 'symbol', val: '|', name: undefined }]
            ]
        },
        {
            name: 'pb$production_bodies',
            b: [
                [{ type: 'production', val: 29, name: 'pb$production_body' }],
                [
                    { type: 'production', val: 28, name: 'pb$production_bodies' },
                    { type: 'production', val: 27, name: 'pb$_group_04_100' },
                    { type: 'production', val: 29, name: 'pb$production_body' }
                ],
                [
                    { type: 'production', val: 28, name: 'pb$production_bodies' },
                    { type: 'production', val: 44, name: 'cm$cm$comment' }
                ]
            ]
        },
        {
            name: 'pb$production_body',
            b: [
                [
                    { type: 'production', val: 32, name: 'pb$force_fork' },
                    { type: 'production', val: 30, name: 'pb$entries' }
                ],
                [{ type: 'production', val: 30, name: 'pb$entries' }]
            ]
        },
        {
            name: 'pb$entries',
            b: [
                [
                    { type: 'production', val: 31, name: 'pb$body_entries' },
                    {
                        type: 'production',
                        val: 37,
                        name: 'fn$fn$reduce_function'
                    }
                ],
                [
                    { type: 'production', val: 65, name: 'sym$sym$empty_symbol' }
                ],
                [{ type: 'production', val: 64, name: 'sym$sym$EOF_symbol' }],
                [{ type: 'production', val: 31, name: 'pb$body_entries' }]
            ]
        },
        {
            name: 'pb$body_entries',
            b: [
                [{ type: 'production', val: 63, name: 'sym$sym$symbol' }],
                [
                    { type: 'production', val: 33, name: 'pb$condition_clause' }
                ],
                [
                    {
                        type: 'production',
                        val: 38,
                        name: 'fn$fn$function_clause'
                    }
                ],
                [
                    { type: 'production', val: 31, name: 'pb$body_entries' },
                    {
                        type: 'production',
                        val: 38,
                        name: 'fn$fn$function_clause'
                    }
                ],
                [
                    { type: 'production', val: 31, name: 'pb$body_entries' },
                    { type: 'production', val: 33, name: 'pb$condition_clause' }
                ],
                [
                    { type: 'production', val: 31, name: 'pb$body_entries' },
                    { type: 'production', val: 63, name: 'sym$sym$symbol' }
                ],
                [
                    { type: 'symbol', val: '[', name: undefined },
                    { type: 'production', val: 31, name: 'pb$body_entries' },
                    { type: 'symbol', val: ']', name: undefined }
                ]
            ]
        },
        {
            name: 'pb$force_fork',
            b: [
                [
                    { type: 'symbol', val: '(', name: undefined },
                    { type: 'literal', val: 'FORK', name: undefined },
                    { type: 'symbol', val: ')', name: undefined }
                ]
            ]
        },
        {
            name: 'pb$condition_clause',
            b: [
                [
                    { type: 'symbol', val: '(', name: undefined },
                    { type: 'literal', val: 'EXC', name: undefined },
                    {
                        type: 'production',
                        val: 50,
                        name: 'sym$sym$condition_symbol_list'
                    },
                    { type: 'symbol', val: ')', name: undefined }
                ],
                [
                    { type: 'symbol', val: '(', name: undefined },
                    { type: 'literal', val: 'ERR', name: undefined },
                    {
                        type: 'production',
                        val: 50,
                        name: 'sym$sym$condition_symbol_list'
                    },
                    { type: 'symbol', val: ')', name: undefined }
                ],
                [
                    { type: 'symbol', val: '(', name: undefined },
                    { type: 'literal', val: 'IGN', name: undefined },
                    {
                        type: 'production',
                        val: 50,
                        name: 'sym$sym$condition_symbol_list'
                    },
                    { type: 'symbol', val: ')', name: undefined }
                ],
                [
                    { type: 'symbol', val: '(', name: undefined },
                    { type: 'literal', val: 'RST', name: undefined },
                    {
                        type: 'production',
                        val: 50,
                        name: 'sym$sym$condition_symbol_list'
                    },
                    { type: 'symbol', val: ')', name: undefined }
                ],
                [
                    { type: 'symbol', val: '(', name: undefined },
                    { type: 'literal', val: 'RED', name: undefined },
                    { type: 'production', val: 63, name: 'sym$sym$symbol' },
                    { type: 'symbol', val: ')', name: undefined }
                ]
            ]
        },
        {
            name: 'fn$referenced_function',
            b: [
                [
                    {
                        type: 'production',
                        val: 43,
                        name: 'fn$js_function_start_symbol'
                    },
                    { type: 'production', val: 77, name: 'sym$sym$identifier' },
                    { type: undefined, val: undefined, name: undefined },
                    {
                        type: 'production',
                        val: 78,
                        name: 'sym$sym$js_identifier'
                    }
                ],
                [
                    {
                        type: 'production',
                        val: 43,
                        name: 'fn$js_function_start_symbol'
                    },
                    { type: 'production', val: 77, name: 'sym$sym$identifier' },
                    { type: undefined, val: undefined, name: undefined },
                    { type: 'production', val: 39, name: 'fn$js_data' },
                    { type: undefined, val: undefined, name: undefined }
                ]
            ]
        },
        {
            name: 'fn$error_function',
            b: [
                [
                    { type: 'literal', val: 'erh', name: undefined },
                    { type: undefined, val: undefined, name: undefined },
                    { type: undefined, val: undefined, name: undefined },
                    { type: 'production', val: 39, name: 'fn$js_data' },
                    { type: undefined, val: undefined, name: undefined },
                    { type: undefined, val: undefined, name: undefined },
                    { type: 'production', val: 39, name: 'fn$js_data' },
                    { type: undefined, val: undefined, name: undefined }
                ]
            ]
        },
        {
            name: 'fn$_group_07_100',
            b: [
                [{ type: 'literal', val: 'cstr', name: undefined }],
                [{ type: 'literal', val: 'c', name: undefined }],
                [{ type: 'literal', val: 'return', name: undefined }],
                [{ type: 'literal', val: 'r', name: undefined }]
            ]
        },
        {
            name: 'fn$reduce_function',
            b: [
                [
                    {
                        type: 'production',
                        val: 43,
                        name: 'fn$js_function_start_symbol'
                    },
                    { type: 'production', val: 36, name: 'fn$_group_07_100' },
                    { type: undefined, val: undefined, name: undefined },
                    { type: 'production', val: 39, name: 'fn$js_data' },
                    { type: undefined, val: undefined, name: undefined }
                ],
                [
                    {
                        type: 'production',
                        val: 43,
                        name: 'fn$js_function_start_symbol'
                    },
                    { type: 'production', val: 36, name: 'fn$_group_07_100' },
                    { type: undefined, val: undefined, name: undefined },
                    {
                        type: 'production',
                        val: 78,
                        name: 'sym$sym$js_identifier'
                    }
                ],
                [
                    {
                        type: 'production',
                        val: 43,
                        name: 'fn$js_function_start_symbol'
                    },
                    { type: 'production', val: 36, name: 'fn$_group_07_100' },
                    { type: 'symbol', val: '=>', name: undefined },
                    {
                        type: 'production',
                        val: 78,
                        name: 'sym$sym$js_identifier'
                    }
                ]
            ]
        },
        {
            name: 'fn$function_clause',
            b: [
                [
                    {
                        type: 'production',
                        val: 43,
                        name: 'fn$js_function_start_symbol'
                    },
                    { type: undefined, val: undefined, name: undefined },
                    { type: 'production', val: 39, name: 'fn$js_data' },
                    { type: undefined, val: undefined, name: undefined }
                ],
                [
                    {
                        type: 'production',
                        val: 43,
                        name: 'fn$js_function_start_symbol'
                    },
                    { type: undefined, val: undefined, name: undefined },
                    {
                        type: 'production',
                        val: 78,
                        name: 'sym$sym$js_identifier'
                    }
                ]
            ]
        },
        {
            name: 'fn$js_data',
            b: [
                [{ type: 'production', val: 41, name: 'fn$js_primitive' }],
                [{ type: 'production', val: 42, name: 'fn$js_data_block' }],
                [
                    { type: 'production', val: 39, name: 'fn$js_data' },
                    { type: 'production', val: 41, name: 'fn$js_primitive' }
                ],
                [
                    { type: 'production', val: 39, name: 'fn$js_data' },
                    { type: 'production', val: 42, name: 'fn$js_data_block' }
                ],
                [{ type: undefined, val: undefined, name: undefined }]
            ]
        },
        {
            name: 'fn$_group_033_101',
            b: [
                [
                    {
                        type: 'production',
                        val: 61,
                        name: 'sym$sym$terminal_symbol'
                    }
                ],
                [{ type: 'production', val: 64, name: 'sym$sym$EOF_symbol' }]
            ]
        },
        {
            name: 'fn$js_primitive',
            b: [
                [{ type: 'generated', val: 'id', name: undefined }],
                [{ type: 'generated', val: 'num', name: undefined }],
                [{ type: 'generated', val: 'ws', name: undefined }],
                [{ type: 'generated', val: 'sym', name: undefined }],
                [{ type: 'generated', val: 'tok', name: undefined }],
                [{ type: 'generated', val: 'key', name: undefined }],
                [{ type: 'production', val: 40, name: 'fn$_group_033_101' }]
            ]
        },
        {
            name: 'fn$js_data_block',
            b: [
                [
                    { type: undefined, val: undefined, name: undefined },
                    { type: 'production', val: 39, name: 'fn$js_data' },
                    { type: undefined, val: undefined, name: undefined }
                ]
            ]
        },
        {
            name: 'fn$js_function_start_symbol',
            b: [
                [{ type: 'symbol', val: '↦', name: undefined }],
                [
                    { type: 'literal', val: 'f', name: undefined },
                    { type: 'symbol', val: ':', name: undefined }
                ]
            ]
        },
        {
            name: 'cm$comment',
            b: [[{ type: 'production', val: 45, name: 'cm$cm' }]]
        },
        {
            name: 'cm$cm',
            b: [
                [
                    { type: 'symbol', val: '#', name: undefined },
                    { type: 'production', val: 47, name: 'cm$comment_data' },
                    { type: 'production', val: 46, name: 'cm$comment_delimiter' }
                ]
            ]
        },
        {
            name: 'cm$comment_delimiter',
            b: [[{ type: 'generated', val: 'nl', name: undefined }]]
        },
        {
            name: 'cm$comment_data',
            b: [
                [
                    { type: 'production', val: 48, name: 'cm$comment_primitive' }
                ],
                [
                    { type: 'production', val: 47, name: 'cm$comment_data' },
                    { type: 'production', val: 48, name: 'cm$comment_primitive' }
                ]
            ]
        },
        {
            name: 'cm$comment_primitive',
            b: [
                [{ type: 'generated', val: 'sym', name: undefined }],
                [{ type: 'generated', val: 'tok', name: undefined }],
                [{ type: 'generated', val: 'id', name: undefined }],
                [{ type: 'generated', val: 'num', name: undefined }],
                [{ type: 'generated', val: 'ws', name: undefined }],
                [{ type: 'generated', val: 'key', name: undefined }]
            ]
        },
        {
            name: 'sym$_HC_listbody1_100',
            b: [
                [
                    {
                        type: 'production',
                        val: 49,
                        name: 'sym$_HC_listbody1_100'
                    },
                    { type: 'production', val: 61, name: 'sym$terminal_symbol' }
                ],
                [
                    { type: 'production', val: 61, name: 'sym$terminal_symbol' }
                ]
            ]
        },
        {
            name: 'sym$condition_symbol_list',
            b: [
                [
                    {
                        type: 'production',
                        val: 50,
                        name: 'sym$condition_symbol_list'
                    },
                    { type: 'production', val: 61, name: 'sym$terminal_symbol' }
                ],
                [
                    { type: 'production', val: 61, name: 'sym$terminal_symbol' }
                ]
            ]
        },
        {
            name: 'sym$_HC_listbody1_101',
            b: [
                [
                    {
                        type: 'production',
                        val: 51,
                        name: 'sym$_HC_listbody1_101'
                    },
                    { type: 'production', val: 55, name: 'sym$lexer_symbol' }
                ],
                [{ type: 'production', val: 55, name: 'sym$lexer_symbol' }]
            ]
        },
        {
            name: 'sym$lexer_symbols',
            b: [
                [
                    { type: 'production', val: 52, name: 'sym$lexer_symbols' },
                    { type: 'production', val: 55, name: 'sym$lexer_symbol' }
                ],
                [{ type: 'production', val: 55, name: 'sym$lexer_symbol' }]
            ]
        },
        {
            name: 'sym$_HC_listbody1_102',
            b: [
                [
                    {
                        type: 'production',
                        val: 53,
                        name: 'sym$_HC_listbody1_102'
                    },
                    { type: 'production', val: 60, name: 'sym$ignore_symbol' }
                ],
                [{ type: 'production', val: 60, name: 'sym$ignore_symbol' }]
            ]
        },
        {
            name: 'sym$ignore_symbols',
            b: [
                [
                    { type: 'production', val: 54, name: 'sym$ignore_symbols' },
                    { type: 'production', val: 60, name: 'sym$ignore_symbol' }
                ],
                [{ type: 'production', val: 60, name: 'sym$ignore_symbol' }]
            ]
        },
        {
            name: 'sym$lexer_symbol',
            b: [
                [
                    { type: 'production', val: 68, name: 'sym$generated_symbol' }
                ],
                [{ type: 'production', val: 71, name: 'sym$literal_symbol' }],
                [{ type: 'production', val: 73, name: 'sym$escaped_symbol' }],
                [
                    { type: 'production', val: 59, name: 'sym$grouped_symbol' },
                    {
                        type: 'production',
                        val: 56,
                        name: 'sym$grouped_delimiter'
                    }
                ]
            ]
        },
        {
            name: 'sym$grouped_delimiter',
            b: [
                [{ type: 'generated', val: 'nl', name: undefined }],
                [{ type: 'generated', val: 'ws', name: undefined }]
            ]
        },
        {
            name: 'sym$_group_012_103',
            b: [
                [{ type: 'generated', val: 'sym', name: undefined }],
                [{ type: 'generated', val: 'id', name: undefined }],
                [{ type: 'generated', val: 'any', name: undefined }]
            ]
        },
        {
            name: 'sym$_HC_listbody1_104',
            b: [
                [
                    {
                        type: 'production',
                        val: 58,
                        name: 'sym$_HC_listbody1_104'
                    },
                    { type: 'production', val: 57, name: 'sym$_group_012_103' }
                ],
                [{ type: 'production', val: 57, name: 'sym$_group_012_103' }]
            ]
        },
        {
            name: 'sym$grouped_symbol',
            b: [
                [
                    { type: 'production', val: 59, name: 'sym$grouped_symbol' },
                    { type: 'production', val: 57, name: 'sym$_group_012_103' }
                ],
                [{ type: 'production', val: 57, name: 'sym$_group_012_103' }]
            ]
        },
        {
            name: 'sym$ignore_symbol',
            b: [
                [
                    { type: 'production', val: 68, name: 'sym$generated_symbol' }
                ],
                [{ type: 'production', val: 71, name: 'sym$literal_symbol' }],
                [{ type: 'production', val: 73, name: 'sym$escaped_symbol' }],
                [{ type: 'generated', val: 'any', name: undefined }]
            ]
        },
        {
            name: 'sym$terminal_symbol',
            b: [
                [
                    { type: 'production', val: 68, name: 'sym$generated_symbol' }
                ],
                [{ type: 'production', val: 71, name: 'sym$literal_symbol' }],
                [{ type: 'production', val: 73, name: 'sym$escaped_symbol' }],
                [
                    {
                        type: 'production',
                        val: 66,
                        name: 'sym$assert_function_symbol'
                    }
                ],
                [{ type: 'generated', val: 'any', name: undefined }]
            ]
        },
        {
            name: 'sym$_group_032_105',
            b: [
                [{ type: 'symbol', val: '(+', name: undefined }],
                [{ type: 'symbol', val: '(*', name: undefined }]
            ]
        },
        {
            name: 'sym$symbol',
            b: [
                [
                    { type: 'production', val: 68, name: 'sym$generated_symbol' }
                ],
                [
                    {
                        type: 'production',
                        val: 74,
                        name: 'sym$production_symbol'
                    }
                ],
                [
                    {
                        type: 'production',
                        val: 75,
                        name: 'sym$imported_production_symbol'
                    }
                ],
                [{ type: 'production', val: 71, name: 'sym$literal_symbol' }],
                [{ type: 'production', val: 73, name: 'sym$escaped_symbol' }],
                [
                    {
                        type: 'production',
                        val: 66,
                        name: 'sym$assert_function_symbol'
                    }
                ],
                [
                    { type: 'symbol', val: '(', name: undefined },
                    {
                        type: 'production',
                        val: 28,
                        name: 'pb$pb$production_bodies'
                    },
                    { type: 'symbol', val: ')', name: undefined }
                ],
                [
                    { type: 'production', val: 63, name: 'sym$symbol' },
                    { type: 'symbol', val: '?', name: undefined }
                ],
                [
                    { type: 'production', val: 63, name: 'sym$symbol' },
                    { type: 'production', val: 62, name: 'sym$_group_032_105' },
                    { type: 'production', val: 61, name: 'sym$terminal_symbol' },
                    { type: 'symbol', val: ')', name: undefined }
                ],
                [{ type: 'generated', val: 'sym', name: undefined }],
                [{ type: 'generated', val: 'tok', name: undefined }],
                [
                    { type: 'production', val: 63, name: 'sym$symbol' },
                    { type: 'production', val: 62, name: 'sym$_group_032_105' },
                    { type: 'symbol', val: ')', name: undefined }
                ]
            ]
        },
        {
            name: 'sym$EOF_symbol',
            b: [[{ type: 'symbol', val: '$eof', name: undefined }]]
        },
        {
            name: 'sym$empty_symbol',
            b: [[{ type: 'symbol', val: 'ɛ', name: undefined }]]
        },
        {
            name: 'sym$assert_function_symbol',
            b: [
                [
                    { type: 'literal', val: 'assert', name: undefined },
                    { type: 'symbol', val: ':', name: undefined },
                    { type: 'production', val: 77, name: 'sym$identifier' }
                ],
                [
                    { type: 'literal', val: 'shift', name: undefined },
                    { type: 'symbol', val: ':', name: undefined },
                    { type: 'production', val: 77, name: 'sym$identifier' }
                ]
            ]
        },
        {
            name: 'sym$_group_141_106',
            b: [
                [{ type: 'symbol', val: 'θ', name: undefined }],
                [
                    { type: 'literal', val: 'g', name: undefined },
                    { type: 'symbol', val: ':', name: undefined }
                ]
            ]
        },
        {
            name: 'sym$generated_symbol',
            b: [
                [
                    { type: 'production', val: 67, name: 'sym$_group_141_106' },
                    { type: 'production', val: 77, name: 'sym$identifier' }
                ]
            ]
        },
        {
            name: 'sym$_group_144_107',
            b: [
                [{ type: 'symbol', val: 'τ', name: undefined }],
                [
                    { type: 'literal', val: 't', name: undefined },
                    { type: 'symbol', val: ':', name: undefined }
                ]
            ]
        },
        {
            name: 'sym$_group_046_108',
            b: [
                [{ type: 'production', val: 77, name: 'sym$identifier' }],
                [{ type: 'production', val: 90, name: 'def$def$natural' }]
            ]
        },
        {
            name: 'sym$literal_symbol',
            b: [
                [
                    { type: 'production', val: 69, name: 'sym$_group_144_107' },
                    { type: 'production', val: 70, name: 'sym$_group_046_108' }
                ]
            ]
        },
        {
            name: 'sym$_group_050_109',
            b: [
                [{ type: 'generated', val: 'id', name: undefined }],
                [{ type: 'generated', val: 'tok', name: undefined }],
                [{ type: 'generated', val: 'sym', name: undefined }]
            ]
        },
        {
            name: 'sym$escaped_symbol',
            b: [
                [
                    { type: 'symbol', val: '\\', name: undefined },
                    { type: 'production', val: 72, name: 'sym$_group_050_109' }
                ]
            ]
        },
        {
            name: 'sym$production_symbol',
            b: [[{ type: 'production', val: 77, name: 'sym$identifier' }]]
        },
        {
            name: 'sym$imported_production_symbol',
            b: [
                [
                    { type: 'production', val: 76, name: 'sym$production_id' },
                    { type: 'symbol', val: '::', name: undefined },
                    { type: 'production', val: 77, name: 'sym$identifier' }
                ]
            ]
        },
        {
            name: 'sym$production_id',
            b: [[{ type: 'production', val: 77, name: 'sym$identifier' }]]
        },
        {
            name: 'sym$identifier',
            b: [
                [
                    {
                        type: 'production',
                        val: 99,
                        name: 'def$def$js_identifier'
                    }
                ]
            ]
        },
        {
            name: 'sym$js_identifier',
            b: [[{ type: 'production', val: 91, name: 'def$def$id' }]]
        },
        {
            name: 'def$start',
            b: [
                [
                    {
                        type: 'production',
                        val: 81,
                        name: 'def$defaultproductions'
                    }
                ]
            ]
        },
        {
            name: 'def$_HC_listbody1_100',
            b: [
                [
                    {
                        type: 'production',
                        val: 80,
                        name: 'def$_HC_listbody1_100'
                    },
                    {
                        type: 'production',
                        val: 82,
                        name: 'def$defaultproduction'
                    }
                ],
                [
                    {
                        type: 'production',
                        val: 82,
                        name: 'def$defaultproduction'
                    }
                ]
            ]
        },
        {
            name: 'def$defaultproductions',
            b: [
                [
                    {
                        type: 'production',
                        val: 81,
                        name: 'def$defaultproductions'
                    },
                    {
                        type: 'production',
                        val: 82,
                        name: 'def$defaultproduction'
                    }
                ],
                [
                    {
                        type: 'production',
                        val: 82,
                        name: 'def$defaultproduction'
                    }
                ]
            ]
        },
        {
            name: 'def$defaultproduction',
            b: [
                [{ type: 'production', val: 91, name: 'def$id' }],
                [{ type: 'production', val: 84, name: 'def$hex' }],
                [{ type: 'production', val: 85, name: 'def$binary' }],
                [{ type: 'production', val: 86, name: 'def$octal' }],
                [{ type: 'production', val: 87, name: 'def$scientific' }],
                [{ type: 'production', val: 99, name: 'def$js_identifier' }],
                [{ type: 'production', val: 101, name: 'def$identifier' }]
            ]
        },
        {
            name: 'def$hex_digit',
            b: [
                [{ type: 'generated', val: 'int', name: undefined }],
                [{ type: 'literal', val: 'a', name: undefined }],
                [{ type: 'literal', val: 'b', name: undefined }],
                [{ type: 'literal', val: 'c', name: undefined }],
                [{ type: 'literal', val: 'd', name: undefined }],
                [{ type: 'literal', val: 'e', name: undefined }],
                [{ type: 'literal', val: 'f', name: undefined }],
                [{ type: 'literal', val: 'A', name: undefined }],
                [{ type: 'literal', val: 'B', name: undefined }],
                [{ type: 'literal', val: 'C', name: undefined }],
                [{ type: 'literal', val: 'D', name: undefined }],
                [{ type: 'literal', val: 'E', name: undefined }],
                [{ type: 'literal', val: 'F', name: undefined }]
            ]
        },
        {
            name: 'def$hex',
            b: [[{ type: 'generated', val: 'hex', name: undefined }]]
        },
        {
            name: 'def$binary',
            b: [[{ type: 'generated', val: 'bin', name: undefined }]]
        },
        {
            name: 'def$octal',
            b: [[{ type: 'generated', val: 'oct', name: undefined }]]
        },
        {
            name: 'def$scientific',
            b: [
                [{ type: 'generated', val: 'sci', name: undefined }],
                [{ type: 'production', val: 88, name: 'def$float' }]
            ]
        },
        {
            name: 'def$float',
            b: [
                [{ type: 'generated', val: 'flt', name: undefined }],
                [{ type: 'production', val: 89, name: 'def$integer' }]
            ]
        },
        {
            name: 'def$integer',
            b: [[{ type: 'production', val: 90, name: 'def$natural' }]]
        },
        {
            name: 'def$natural',
            b: [[{ type: 'generated', val: 'num', name: undefined }]]
        },
        {
            name: 'def$id',
            b: [[{ type: 'generated', val: 'id', name: undefined }]]
        },
        {
            name: 'def$_group_034_101',
            b: [
                [{ type: 'production', val: 98, name: 'def$string_value' }],
                [{ type: 'generated', val: 'ws', name: undefined }]
            ]
        },
        {
            name: 'def$_HC_listbody1_102',
            b: [
                [
                    {
                        type: 'production',
                        val: 93,
                        name: 'def$_HC_listbody1_102'
                    },
                    { type: 'production', val: 92, name: 'def$_group_034_101' }
                ],
                [{ type: 'production', val: 92, name: 'def$_group_034_101' }]
            ]
        },
        {
            name: 'def$_HC_listbody1_103',
            b: [
                [
                    {
                        type: 'production',
                        val: 94,
                        name: 'def$_HC_listbody1_103'
                    },
                    { type: 'production', val: 92, name: 'def$_group_034_101' }
                ],
                [{ type: 'production', val: 92, name: 'def$_group_034_101' }]
            ]
        },
        {
            name: 'def$string',
            b: [
                [
                    { type: 'symbol', val: '"', name: undefined },
                    {
                        type: 'production',
                        val: 93,
                        name: 'def$_HC_listbody1_102'
                    },
                    { type: 'symbol', val: '"', name: undefined }
                ],
                [
                    { type: 'symbol', val: "'", name: undefined },
                    {
                        type: 'production',
                        val: 94,
                        name: 'def$_HC_listbody1_103'
                    },
                    { type: 'symbol', val: "'", name: undefined }
                ]
            ]
        },
        {
            name: 'def$_group_149_104',
            b: [
                [{ type: 'symbol', val: '/', name: undefined }],
                [{ type: 'symbol', val: '\\', name: undefined }],
                [{ type: 'symbol', val: '-', name: undefined }],
                [{ type: 'symbol', val: '_', name: undefined }],
                [{ type: 'generated', val: 'any', name: undefined }],
                [{ type: 'generated', val: 'ob', name: undefined }],
                [{ type: 'generated', val: 'cb', name: undefined }],
                [{ type: 'generated', val: 'num', name: undefined }],
                [{ type: 'generated', val: 'id', name: undefined }],
                [{ type: 'generated', val: 'sym', name: undefined }],
                [
                    { type: 'symbol', val: '\\', name: undefined },
                    { type: 'generated', val: 'any', name: undefined }
                ]
            ]
        },
        {
            name: 'def$_HC_listbody2_105',
            b: [
                [
                    {
                        type: 'production',
                        val: 97,
                        name: 'def$_HC_listbody2_105'
                    },
                    { type: 'production', val: 96, name: 'def$_group_149_104' }
                ],
                [{ type: 'production', val: 96, name: 'def$_group_149_104' }]
            ]
        },
        {
            name: 'def$string_value',
            b: [
                [
                    { type: 'production', val: 98, name: 'def$string_value' },
                    { type: 'production', val: 96, name: 'def$_group_149_104' }
                ],
                [{ type: 'production', val: 96, name: 'def$_group_149_104' }]
            ]
        },
        {
            name: 'def$js_identifier',
            b: [
                [{ type: 'production', val: 100, name: 'def$js_id_symbols' }]
            ]
        },
        ... 3 more items
    ];
}