# Heap ⛏️📊

🟢 **Priority-Driven Data Structure for Fast Decisions**

## 📌 Overview

Today we mined the depths of the **Heap** — a specialized tree-based structure that keeps the **highest (or lowest) priority element** at the top. Whether it's a **min-heap** or **max-heap**, heaps are all about fast access to extremes, making them perfect for dynamic ranking problems.

We applied this concept to a real-time challenge: tracking the **Kth largest element in a stream**. With every new number, the heap reshapes itself to maintain order — proving that heaps are not just efficient, but adaptive.

## 🏆 Key Learnings

- **Min-Heap vs Max-Heap** → Choose based on whether you want smallest or largest on top.
- **Heap Size Control** → Keep only the top `k` elements to track rankings efficiently.
- **Dynamic Updates** → Heaps can handle streaming data with real-time adjustments.
- **Priority Queue Implementation** → JavaScript doesn't have native heaps, so we simulate with arrays + sorting or use external libraries.

## 📂 Problem Solved

### **Kth Largest Element in a Stream**

🔗 [Problem Link](https://leetcode.com/problems/kth-largest-element-in-a-stream/)

- Maintained a **min-heap of size k** to track the Kth largest element.
- Inserted new elements and removed the smallest when heap size exceeded `k`.
- Returned the root of the heap as the current Kth largest value.
- Practiced building custom heap logic using arrays and helper functions.

## 🔗 Course Link

🔗 [Neetcode’s DSA for Beginners](https://neetcode.io/courses/dsa-for-beginners)

## 🎯 Key Takeaways

- Heaps are perfect for **ranking problems** — especially when data is streaming or dynamic.
- Keeping the heap size fixed helps optimize space and time.
- Understanding heap operations unlocks advanced algorithms like Dijkstra, Prim, and Median tracking.

---

✨ If life were a heap, you'd always be my top priority — no need to sift 😌💖