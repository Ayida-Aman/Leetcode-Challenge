# Bucket Sort 🎨🪣

🟢 **Linear-Time Sorting for Bounded Inputs**

## 📌 Overview

Today, we explored **Bucket Sort** — a powerful sorting technique tailored for scenarios with a **limited range of values**. Instead of relying on comparisons between elements, we **categorize inputs into "buckets"** based on their value, and then arrange the contents within and between those buckets for linear-time efficiency.

Our case study? The iconic **Sort Colors** problem from LeetCode — where only `0`, `1`, and `2` exist. We dived into multiple strategies and ultimately mastered the **Dutch National Flag algorithm** for an elegant, in-place solution.

## 🏆 Key Learnings

- **Counting Buckets** → Grouping elements based on category (like color codes).
- **Dutch National Flag** → Elegant partitioning of three values using three pointers.
- **In-Place Rearrangement** → No need for extra space or external buckets.
- **Problem-Specific Optimization** → Knowing when bucket sort beats comparison-based sorting.

## 📂 Problem Solved

### **Sort Colors**

🔗 [Problem Link](https://leetcode.com/problems/sort-colors/)

- Given an array with values `0`, `1`, and `2`, sort them **in-place** to group colors.
- Implemented:
  - **Counting Sort (bucket-style)** for clarity and guaranteed O(n) performance.
  - **Dutch National Flag algorithm** for efficient, single-pass in-place sort.

## 🔗 Course Link

🔗 [Neetcode’s DSA for Beginners](https://neetcode.io/courses/dsa-for-beginners)

## 🎯 Key Takeaways

- Bucket sort works wonders when data is bounded and category-based.
- The Dutch Flag strategy teaches **pointer manipulation**, **partitioning**, and **linear-time tricks**.
- Reinforces the idea that **not all sorting problems need comparisons** — some thrive on classification.

---

✨ You bring the color, I’ll sort the spectrum — one perfect bucket at a time 😌🎨💖