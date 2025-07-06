# Search Range 📈🍌

🟢 **Binary Search Beyond the Basics**

## 📌 Overview

Today we pushed **Binary Search** beyond static arrays and into the world of **range guessing**, **threshold detection**, and **problem-specific constraints**. Whether it was guessing numbers, locating a bad version, or helping Koko conquer banana mountains — every challenge demanded precise control over the **search boundaries**.

Each of these problems showed how **Binary Search** can do more than find — it can **decide**, **optimize**, and even **strategize** around hidden values in constrained ranges.

## 🏆 Key Learnings

- **Binary Decision Space** → Search can help answer "How fast? How many? When?"
- **Search on Answers** → Learn to binary search **possible outcomes**, not just indices.
- **Monotonic Property** → Ensures binary logic works even with non-array data sources.
- **Loop Invariants** → Clarified when to use `low <= high` and how to update mid smartly.

## 📂 Problems Solved

### **Guess Number Higher or Lower**

🔗 [Problem Link](https://leetcode.com/problems/guess-number-higher-or-lower/)

- Simulated a hidden value guessing game using **classic binary search**.
- Practiced adapting return values (`-1`, `1`, `0`) into **boundary movement logic**.
- Reinforced intuitive understanding of **midpoint narrowing**.

### **First Bad Version**

🔗 [Problem Link](https://leetcode.com/problems/first-bad-version/)

- Located the **first occurrence** in a sea of booleans using modified binary search.
- Practiced maintaining a **valid answer** (`first_bad`) while searching.
- Applied mid-preservation in cases where left and right must stay inclusive.

### **Koko Eating Bananas**

🔗 [Problem Link](https://leetcode.com/problems/koko-eating-bananas/)

- Used binary search over **speeds**, not indexes — aka “**binary search on answers**.”
- Minimized the speed Koko could eat bananas while still finishing in time.
- Practiced building a **time-evaluation function** for search condition evaluation.

## 🔗 Course Link

🔗 [Neetcode’s DSA for Beginners](https://neetcode.io/courses/dsa-for-beginners)

## 🎯 Key Takeaways

- Not all binary search problems are about sorted arrays — many involve **decision-making over a range**.
- Thinking in terms of "**searching the answer**" unlocks powerful problem-solving patterns.
- These types of problems teach us how to combine **logic + domain constraints** seamlessly.

---

✨ If searching for you was binary, I'd never hit the wrong half 💘💻