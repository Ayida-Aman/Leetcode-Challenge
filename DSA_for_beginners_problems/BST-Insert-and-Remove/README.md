# BST Insert & Delete 🌿🛠️

🟢 **Sculpting Binary Search Trees with Precision**

## 📌 Overview

Today we dug into the hands-on mechanics of **modifying Binary Search Trees** — the art of inserting new nodes to expand structure and removing them without compromising order. These operations require careful consideration of **tree balance**, **node relationships**, and **invariant preservation** (`left < root < right`).

Armed with recursion and pointer wizardry, we tackled two essential operations that form the backbone of many real-world BST applications — from memory management to dynamic indexing.

## 🏆 Key Learnings

- **Recursive Placement** → Insert nodes by comparing values and recursing toward empty branches.
- **Three-Case Deletion** → Handle:
  - 🟩 Node has no children (leaf)
  - 🟨 Node has one child
  - 🟥 Node has two children — replace with **in-order successor**
- **BST Property Preservation** → Every move made must keep `left < root < right` intact.
- **In-Order Successor** → Smallest node in the right subtree used to fill deletion gaps.

## 📂 Problems Solved

### **Insert into a Binary Search Tree**

🔗 [Problem Link](https://leetcode.com/problems/insert-into-a-binary-search-tree/)

- Inserted new nodes recursively.
- Navigated left or right based on comparisons, placing the value at the correct leaf.
- Practiced setting left/right child pointers without disrupting tree structure.

### **Delete Node in a BST**

🔗 [Problem Link](https://leetcode.com/problems/delete-node-in-a-bst/)

- Removed a node while maintaining BST order.
- Implemented logic for leaf, single-child, and two-child deletion cases.
- Used **in-order successor** to replace values for two-child nodes elegantly.

## 🔗 Course Link

🔗 [Neetcode’s DSA for Beginners](https://neetcode.io/courses/dsa-for-beginners)

## 🎯 Key Takeaways

- BST manipulation demands logic + care — it's like coding bonsai.
- Deletion isn’t scary when you break it into cases.
- Insertions help grow a tree, deletions refine its shape.
- Understanding structure mutation builds confidence for AVL and Red-Black Trees next 🍷

---

✨ If I were a BST, you’d be the node I’d never want to delete — perfectly placed in my recursion 😌💖