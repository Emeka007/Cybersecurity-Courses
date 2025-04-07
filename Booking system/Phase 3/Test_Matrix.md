# 🧪 Test Matrix

## 📘 Overview

This document provides a comprehensive matrix of all available pages and their related functions, mapped to the three user roles: **Guest**, **Reserver**, and **Administrator**. It helps clarify which features are functionally accessible by which roles.

---

## 👤 User Roles

- **Guest**: Unauthenticated visitor.
- **Reserver**: Registered user with reservation permissions.
- **Administrator**: User with full access and management capabilities.

---

## 📊 Role-Based Functional Matrix

| Page / Feature                    | Functionality                        | Guest       | Reserver    | Admin       |
|----------------------------------|--------------------------------------|-------------|-------------|-------------|
| `/` (index)                      | Homepage                             | ✅          | ✅          | ✅          |
| └─ View resource form            | Display form for resource submission | ❌          | ✅          | ✅          |
| └─ Create new resource           | Submit a new resource                | ❌ *1       | ❌ *2       | ✅ *3       |
| `/login`                         | Login page                           | ✅          | ✅          | ✅          |
| └─ Register new account          | Create a new user account            | ✅ *4       | ✅ *4       | ✅ *4       |
| └─ Email validation              | Email format validation              | ✅ *5       | ✅ *5       | ✅ *5       |
| └─ Password validation           | Password strength enforcement        | ✅ *6       | ✅ *6       | ✅ *6       |
| └─ Age restriction (15+)         | Minimum age requirement              | ✅ *14      | ✅ *14      | ✅ *14      |
| └─ Login with wrong creds        | Invalid login attempt                | ❌ *7       | ❌ *7       | ❌ *7       |
| `/reservation`                  | View/manage reservations             | ❌ *8       | ✅          | ✅          |
| └─ View all reservations         | List of user reservations            | ❌ *15      | ✅          | ✅          |
| └─ Create reservation            | Make a reservation                   | ❌          | ✅          | ✅          |
| └─ Validation: date logic        | Check date consistency               | ❌          | ✅ *9       | ✅ *9       |
| └─ Edit own reservation          | Modify own reservation               | ❌          | ✅ *10      | ✅          |
| └─ Edit others' reservation      | Modify others' reservations          | ❌          | ❌ *16      | ✅          |
| └─ Change reserver name          | Update reserver name                 | ❌          | ✅ *11      | ✅          |
| └─ Edit resource from reservation| Edit resource via reservation        | ❌          | ❌          | ✅          |
| └─ Edit reservation dates        | Change reservation timeframe         | ❌          | ✅ (own)    | ✅          |
| └─ Date picker missing time      | UI lacks time selection              | ❌          | ✅ *17      | ✅          |
| `/resources`                    | View list of resources               | ✅ *12      | ✅          | ✅          |
| └─ Add new resource              | Add resource via URL access          | ✅ *12      | ❌          | ✅          |
| └─ Symbols & numbers allowed     | Special characters in names          | ✅          | ✅          | ✅          |
| `/api/resources`                | Fetch all resources                  | ❌          | ✅          | ✅          |
| `/api/resources/XXX`            | Fetch specific resource              | ❌          | ✅          | ✅          |
| `/api/reservations/XXX`         | Fetch specific reservation           | ❌          | ✅          | ✅          |
| `/api/users`                    | List system users                    | ❌          | ❌          | ✅          |
| `/api/session`                  | Get current session info             | ✅          | ✅          | ✅          |
| `/logout`                       | Logout from session                  | ❌          | ❌          | ✅          |

---

## 🗒️ Notes

- *1: Guest can reach resource creation via direct URL.
- *2: Reserver role does not have resource creation rights.
- *3: Admin can manage resources fully.
- *4: Email must be unique to register.
- *5: Valid email format required.
- *6: Password must be at least 8 characters.
- *7: Login fails with incorrect credentials.
- *8: Guest cannot access the reservation page.
- *9: End date must follow start date.
- *10: Reserver can only edit their own reservations.
- *11: Reservers can update their own names on reservations.
- *12: Guests may access `/resources` through direct routing.
- *13: Email uniqueness is enforced.
- *14: Age 15+ is required to register.
- *15: Guest access to reservation data is limited or not intended.
- *16: Reservers cannot edit others' reservations.
- *17: Time selection is not available in the reservation UI.

---

## ✅ Summary

This matrix outlines the intended access behavior by user role across all major functional areas of the application. It supports validation of role-based user journeys and helps guide secure and intentional design and development decisions.
