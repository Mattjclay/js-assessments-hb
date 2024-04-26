/*
    Regular expressions, often abbreviated as regex, are powerful tools for pattern
    matching and manipulation of strings. In JavaScript, regular expressions are objects
    that represent patterns of text. They can be used for tasks such as validating input,
    searching and replacing text, and extracting specific information from strings.

    Often used in conjunction with string methods (for our purposes, a method is the same
    as a function), regex can provide patterns for efficient search and replace versus
    requiring developers to manually check for individual characters in separate
    functions.

    The string methods commonly used with regex are: - replace() - search() - includes() -
        test() - match()

    Here's a very helpful cheat sheet for regex:
    https://www.interviewbit.com/regex-cheat-sheet/
*/

/*
    STEP 1 - Introduction to Regex

    Regular expressions are patterns used to match character combinations in strings. They
    can be simple or complex, depending on the task at hand. Here's how you define a regex
    pattern in JavaScript.

    const pattern = /regex_pattern/;

    The forward slashes let JavaScript know you're using regex, and the words or
    characters you put in-between them specify what characters you are looking for. Note
    that regex is case-sensitive! Keep that in mind when identifying what characters you
    like to find.

*/

////////////////// PROBLEM 1 ////////////////////
/*
    Create a pattern that matches the string "hello" exactly. Store this pattern into a
    variable called "pattern1".
*/

// CODE HERE
const pattern1 = /hello/;

/*
    STEP 2 - Basics of Regex

    Getting acquainted with regex simply takes practice and exposure. There are several
    groups of symbols and syntax for regex.

    Metacharacters: Special characters with a predefined meaning in regex. Some of these
        characters are... - Backslash: \
        - Caret: ^
        - Pipe: |
        - Period: .
        - Dollar Sign: $
        - Asterisk: *
        - Square Brackets: []
        - Curly Brackets: {}
        - Parentheses: ()
    What if we want to look for one of these metacharacters in a string? We use a
    backslash! For example, "/\?/" will search for question marks.

    Here's some more information on metacharacteres:
    https://www.ibm.com/docs/en/informix-servers/12.10?topic=matching-metacharacters
*/

////////////////// PROBLEM 2 ////////////////////
/*
    Create a pattern that matches any word that starts with the letter "k". Store this
    pattern into a variable called "pattern2".

    HINT: Use a period.
*/

// CODE HERE
const pattern2 = /k\w*/;

////////////////// PROBLEM 3 ////////////////////
/*
    Create a pattern that matches any word that starts with the letter "s" and ends with
    "e", regardless of the number of characters between those characters. Store this
    pattern into a variable called "sePattern".

    HINT: Use an asterisk.
*/

// CODE HERE
const sePattern = /s\w*e/;
////////////////// PROBLEM 4 ////////////////////
/*
    Create a pattern that defines a character set of vowels, meaning any vowel gets
    identified. Store this pattern into a variable called "vowelsPattern".

    HINT: Use brackets.
*/

// CODE HERE
const vowelsPattern = /[aeiou]/;

////////////////// PROBLEM 5 ////////////////////
/*
    Create a pattern that checks if the last characters are "com". Store this pattern into
    a variable called "comPattern".

    HINT: Use a dollar sign.
*/

// CODE HERE
const comPattern = /com$/;

////////////////// PROBLEM 6 - CHALLENGE ////////////////////
/*
    Create a pattern that identifies the whitespace before a string. Store this pattern
    into a variable called "startPattern".

    HINT: Use a combination of metacharacters, specifically three. If you get stuck, think
    about it in order, meaning STARTing at the beginning, locate WHITESPACE.
*/

// CODE HERE
const startPattern = /^\s+/;

////////////////// PROBLEM 7 - CHALLENGE ////////////////////
/*
    Create a pattern that identifies the whitespace after a string. Store this pattern
    into a variable called "endPattern".

    HINT: Use a combination of metacharacters.
*/

// CODE HERE
const endPattern = /\s+$/;
