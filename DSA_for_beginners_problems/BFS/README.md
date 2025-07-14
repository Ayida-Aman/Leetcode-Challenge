# Breadth-First Search (BFS) 🧬🏁

🟢 **Exploring Trees Level by Level**

## 📌 Overview

Today we traversed the binary forest with **Breadth-First Search (BFS)** — a strategy that explores nodes **horizontally**, layer by layer, using queues to guide the journey. Unlike DFS, which dives deep, BFS keeps things wide, ensuring we visit every level in order.

Our challenges revealed how BFS offers not just structure, but **perspective** — whether it’s recording entire levels or glimpsing the tree’s right-side silhouette. The use of queues and careful tracking turned each node visit into a beautiful layer reveal.

## 🏆 Key Learnings

- **Level-Wise Traversal** → BFS captures each layer of a tree, ideal for visual hierarchies.
- **Queue-Based Logic** → Process nodes FIFO style, ensuring fair left-right coverage.
- **Perspective Handling** → Track edge nodes for specialized views like the right side.
- **Iteration Efficiency** → BFS avoids recursion depth concerns and handles shallow processing better.

## 📂 Problems Solved

### **Binary Tree Level Order Traversal**

🔗 [Problem Link](https://leetcode.com/problems/binary-tree-level-order-traversal/)

- Used a **queue** to traverse the tree level by level.
- Captured each layer’s node values into structured arrays.
- Reinforced pattern of enqueueing `left` and `right` children consistently.

### **Binary Tree Right Side View**

🔗 [Problem Link](https://leetcode.com/problems/binary-tree-right-side-view/)

- Modified BFS to only record the **last node** in each level.
- Mastered tracking positions within levels to build the visible side.
- Strengthened control flow and level boundary detection with queues.

## 🔗 Course Link

🔗 [Neetcode’s DSA for Beginners](https://neetcode.io/courses/dsa-for-beginners)

## 🎯 Key Takeaways

- BFS gives a panoramic view of the tree — great for levels, symmetry, and edge insights.
- Queues are the backbone of BFS — efficient, predictable, and wide-scanning.
- With careful level tracking, BFS can uncover rich perspectives beyond traversal.

---

✨ If trees were crowds, you’d always be the standout on the right side 😌🌄💖