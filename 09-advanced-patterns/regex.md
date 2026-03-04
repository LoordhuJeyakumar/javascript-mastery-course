### 1. The "Anything Goes" (Basic Search)

**Use Case:** Finding a specific word regardless of where it is in a sentence.

- **Regex:** `\bcat\b`
- **What it does:** The `\b` stands for **boundary**. It ensures you find the word "cat" but not "category" or "bobcat."

### 2. The Email Validator (Simplified)

**Use Case:** Checking if an input looks like an email address.

- **Regex:** `^[\w.-]+@[\w.-]+\.[a-z]{2,3}$`
- **Explanation:**
- `^` : Start of the string.
- `[\w.-]+` : One or more letters, numbers, dots, or dashes.
- `@` : Must have an @ symbol.
- `[\w.-]+` : The domain name (e.g., "gmail").
- `\.` : A literal dot (we use the backslash because a plain `.` means "any character" in regex).
- `[a-z]{2,3}` : A 2 or 3-letter suffix (like .com or .net).
- `$` : End of the string.

### 3. Cleaning Phone Numbers

**Use Case:** Stripping out everything except the digits.

- **Regex:** `\D`
- **Explanation:** \* `\d` (lowercase) means "any digit."
- `\D` (uppercase) means **"anything that is NOT a digit."**

- **Pro Tip:** If you use a "Replace" function with `\D` and replace it with an empty string, `(555) 123-4567` becomes `5551234567`.

### 4. Finding Dates (YYYY-MM-DD)

**Use Case:** Pulling dates out of a log file or document.

- **Regex:** `\d{4}-\d{2}-\d{2}`
- **Explanation:**
- `\d{4}` : Exactly four digits (the year).
- `-` : A literal dash.
- `\d{2}` : Exactly two digits (the month).
- `-` : Another dash.
- `\d{2}` : Exactly two digits (the day).

---

### The Beginner's "Cheat Sheet" Table

If you are teaching this, have your students memorize these five symbols first:

| Symbol | Meaning                           | Memory Trick                              |
| ------ | --------------------------------- | ----------------------------------------- |
| `.`    | Any character at all              | A "period" covers everything.             |
| `\d`   | Any Digit (0-9)                   | **D** for **D**igit.                      |
| `\w`   | Any Word character (Alphanumeric) | **W** for **W**ord.                       |
| `+`    | One or more                       | The "plus" means add more.                |
| `*`    | Zero or more                      | The "star" is an explosion of any amount. |

---

### How to Explain it to a Beginner:

Think of Regex like **"Control + F" on steroids.** Instead of searching for a specific word, you are searching for a **shape**.

- **Standard Search:** Find "123".
- **Regex Search:** Find "Any three numbers in a row" (`\d{3}`).

> **Quick Tip:** Use a tool like **RegExr.com** or **Regex101.com**. They provide real-time highlighting and explain exactly what each character is doing as you type it.
