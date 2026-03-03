/**
 * 🔍 Regular Expressions (The Search Filter Analogy)
 * 
 * Think of Regex as a very specific "Search" instruction.
 * If you want to find only "Apples" that are "Red", Regex is your filter.
 */

// --- 💡 Real World Example: Form Validation ---

// 1. Validating a Username (Rules: Only letters and numbers, 3-10 chars)
const usernameRegex = /^[a-zA-Z0-9]{3,10}$/;

const user1 = "Dev_123";  // Has an underscore (_) -> Invalid
const user2 = "Coder";    // Correct length and chars -> Valid

console.log(`Is '${user1}' valid?`, usernameRegex.test(user1));
console.log(`Is '${user2}' valid?`, usernameRegex.test(user2));

// 2. Finding and Replacing (Privacy Masking)
const secretMessage = "My phone number is 123-456-7890 and my zip is 54321.";
const phoneFilter = /\d{3}-\d{3}-\d{4}/g;

const hiddenMessage = secretMessage.replace(phoneFilter, "[HIDDEN]");
console.log("\nOriginal:", secretMessage);
console.log("Safe Version:", hiddenMessage);

/**
 * 🎓 KEY LESSON:
 * 1. /pattern/ is the syntax.
 * 2. .test() checks if a string matches.
 * 3. .replace() swaps the pattern with something else.
 */


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test("test@example.com")); // true
/* 
^ - start of the string
[^\s@]+ - one or more characters that are not spaces or @
@ - @
[^\s@]+ - one or more characters that are not spaces or @
\. - .
[^\s@]+ - one or more characters that are not spaces or @
$ - end of the string
*/

const phoneRegex = /\d{3}-\d{3}-\d{4}/; // 123-456-7890
console.log(phoneRegex.test("123-456-7890")); // true

const passwordRegex = /^[a-zA-Z0-9]{8,}$/;
console.log(passwordRegex.test("12345678")); // true
