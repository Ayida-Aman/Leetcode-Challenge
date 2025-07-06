# Binary Search Tree (BST) 🌲💡

🟢 **Hierarchical Order for Optimal Lookup and Structure**

## 📌 Overview

Today we branched into the realm of **Binary Search Trees** — a structure that elegantly balances order and efficiency. In a BST, for every node: **left < root < right**. This property powers blazing-fast lookups, insertions, and deletions — making it a cornerstone of many DSA ecosystems.

We tackled key problems that reinforce this core logic: finding specific values and determining shared ancestry deep within the branches. With every traversal, we learned to let the tree guide us — pruning our path and zooming in on answers.

## 🏆 Key Learnings

- **BST Invariants** → Left node < Root < Right node — use it to prune your search path.
- **Recursive Tree Traversals** → Elegant base cases & condition-driven subtrees.
- **Targeted Search** → Zoom straight to your node without wasting a step.
- **Ancestor Logic** → Compare current node with both target nodes to move left or right.

## 📂 Problems Solved

### **Search in a Binary Search Tree**

🔗 [Problem Link](https://leetcode.com/problems/search-in-a-binary-search-tree/)

- Traversed a BST to find a target node with either recursion or iteration.
- Used property `val < root.val` to go left, `val > root.val` to go right.
- Practiced precise pruning — no need to explore irrelevant branches.

### **Lowest Common Ancestor of a BST**

🔗 [Problem Link](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

- Identified the **lowest node** in a BST such that both `p` and `q` lie in its subtree.
- Leveraged BST rules to search **top-down**:
  - If both values are smaller → go left.
  - If both are larger → go right.
  - If they diverge → you’ve found the split = the LCA!

## 🔗 Course Link

🔗 [Neetcode’s DSA for Beginners](https://neetcode.io/courses/dsa-for-beginners)

## 🎯 Key Takeaways

- BSTs aren't just trees — they’re **fast, ordered decisions** waiting to be made.
- Root-to-leaf logic helps solve problems with both **efficiency** and **grace**.
- Once you see the structure, the tree practically solves itself 🌱

---

✨ If you were a BST, you’d be my lowest common ancestor — ‘cause all paths lead to you 💚🌳