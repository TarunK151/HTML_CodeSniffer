/**
 * +--------------------------------------------------------------------+
 * | This HTML_CodeSniffer file is Copyright (c)                        |
 * | Squiz Pty Ltd (ABN 77 084 670 600)                                 |
 * +--------------------------------------------------------------------+
 * | IMPORTANT: Your use of this Software is subject to the terms of    |
 * | the Licence provided in the file licence.txt. If you cannot find   |
 * | this file please contact Squiz (www.squiz.com.au) so we may        |
 * | provide you a copy.                                                |
 * +--------------------------------------------------------------------+
 *
 */

_global.HTMLCS_WCAG2BT = {
    name: 'WCAG2BT',
    description: 'BT, EE and PlusNet Web Content Accessibility Guidelines (WCAG) 2.1 AA',
    sniffs: [
        {
            standard: 'WCAG2AAA',
            include: [
                'Principle3.Guideline3_1.3_1_4',
                'Principle2.Guideline2_1.2_1_1',
                'Principle2.Guideline2_3.2_3_3',
                'Principle2.Guideline2_2.2_2_2',
                'Principle3.Guideline3_2.3_2_2',
                'Principle4.Guideline4_1.4_1_2',
                'Principle1.Guideline1_3.1_3_1',
                'Principle1.Guideline1_3.1_3_1_A',
                'Principle1.Guideline1_4.1_4_1',
                'Principle1.Guideline1_4.1_4_3',
                'Principle1.Guideline1_4.1_4_3_F24',
                'Principle1.Guideline1_4.1_4_3_Contrast',
                'Principle3.Guideline3_3.3_3_2',
                'Principle2.Guideline2_4.2_4_7',
                'Principle2.Guideline2_4.2_4_6',
                'Principle1.Guideline1_1.1_1_1',
                'Principle3.Guideline3_1.3_1_3',
                'Principle3.Guideline3_1.3_1_1',
                'Principle3.Guideline3_1.3_1_2',
                'Principle2.Guideline2_4.2_4_4',
                'Principle1.Guideline1_3.1_3_2',
                'Principle2.Guideline2_4.2_4_1',
                'Principle2.Guideline2_4.2_4_3',
                'Principle2.Guideline2_4.2_4_5',
                'Principle3.Guideline3_2.3_2_3',
                'Principle2.Guideline2_4.2_4_2',
                'Principle1.Guideline1_4.1_4_10',
                'Principle3.Guideline3_1.3_1_5',
                'Principle1.Guideline1_4.1_4_4',
                'Principle1.Guideline1_4.1_4_6',
                'Principle1.Guideline1_4.1_4_12',
                'Principle2.Guideline2_2.2_2_1',
                'Principle2.Guideline2_2.2_2_3',
                'Principle1.Guideline1_2.1_2_1',
                'Principle1.Guideline1_2.1_2_2',
                'Principle1.Guideline1_4.1_4_8'
            ]
        }
    ],
    getMsgInfo: function(code) {
        return HTMLCS_WCAG2AAA.getMsgInfo(code);
    }
};
