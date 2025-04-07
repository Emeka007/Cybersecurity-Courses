# 🛡️ Authorization Testing Report

## 📝 Overview

This report documents the results of role-based authorization testing across the application's pages and API endpoints. Each functionality was validated against the three defined user roles: **Guest**, **Reserver**, and **Administrator**.

---

## 👤 User Roles

- **Guest**: Unauthenticated user.
- **Reserver**: Authenticated user with reservation permissions.
- **Administrator**: Full-access user with elevated permissions.

---

## 📊 Authorization Matrix by Page & Function

| Page / Function                         | Guest       | Reserver       | Admin        | Authorization Note                             |
|----------------------------------------|-------------|----------------|--------------|------------------------------------------------|
| `/` (index)                            | ✅          | ✅             | ✅           | Public landing page                            |
| └─ View resource form                  | ❌          | ✅             | ✅           | Reserver/Admin only                            |
| └─ Create new resource                 | ❌ *1       | ❌ *2          | ✅           | Guest can bypass; Admin only                   |
| `/login`                               | ✅          | ✅             | ✅           | Public login                                   |
| └─ Register new account                | ✅ *4       | ✅ *4          | ✅ *4        | Email uniqueness enforced                      |
| └─ Email validation                    | ✅ *5       | ✅ *5          | ✅ *5        | Regex-based pattern check                      |
| └─ Password validation                 | ✅ *6       | ✅ *6          | ✅ *6        | Minimum 8-character length                     |
| └─ Age restriction (15+)               | ✅ *14      | ✅ *14         | ✅ *14       | Users must be 15 or older                      |
| └─ Login with wrong creds              | ❌ *7       | ❌ *7          | ❌ *7        | Rejected with error message                    |
| `/reservation`                         | ❌ *8       | ✅             | ✅           | Guests blocked from access                     |
| └─ View all reservations               | ❌ *15      | ✅             | ✅           | Guest ambiguous access                         |
| └─ Create reservation                  | ❌          | ✅             | ✅           | Reservation requires authentication            |
| └─ Validation: date logic              | ❌          | ✅ *9          | ✅ *9        | Backend validation enforced                    |
| └─ Edit own reservation                | ❌          | ✅ *10         | ✅           | Reserver limited to own reservations           |
| └─ Edit others' reservation            | ❌          | ❌ *16         | ✅           | Authorization flaw identified                  |
| └─ Change reserver name                | ❌          | ✅ *11         | ✅           | Potential impersonation vulnerability          |
| └─ Edit resource from reservation      | ❌          | ❌             | ✅           | Admin-only action                              |
| └─ Edit reservation dates              | ❌          | ✅ (own only)  | ✅           | Role-specific access                           |
| └─ Date picker missing time            | ❌          | ✅ *17         | ✅           | UX limitation                                  |
| `/resources`                           | ✅ *12      | ✅             | ✅           | Guests can reach page                          |
| └─ Add new resource                    | ✅ *12      | ❌             | ✅           | Guest access via routing flaw                  |
| `/api/users`                           | ❌          | ❌             | ✅           | Admin-only endpoint                            |
| `/api/resources`                       | ❌          | ✅             | ✅           | Role-based access                              |
| `/api/resources/XXX`                   | ❌          | ✅             | ✅           | Resource-specific view                         |
| `/api/reservations/XXX`               | ❌          | ✅             | ✅           | Reservation-specific; possible ID overreach    |
| `/api/session`                         | ✅          | ✅             | ✅           | Public access to session data                  |
| `/logout`                              | ❌          | ❌             | ✅           | Admin logout functionality                     |

---

## 🔍 Key Findings

### 🚨 Major Issues

- **Improper Access Controls**:
  - Guests can access `/resources` directly and create resources via route manipulation.
  - Reservers can view or edit other users’ reservations using direct ID references (`/reservation?id=XXX`).
  
- **Session Endpoint Exposure**:
  - `/api/session` exposes role/session data without authentication enforcement.

- **Reserver Name Change**:
  - Reservers can change names on reservations, introducing impersonation risks.

### ⚠️ Minor Issues

- Static files are publicly accessible.
- Role-based errors are not consistently shown (user confusion and security ambiguity).

---

## 🛠️ Recommendations

- Enforce backend role-based authorization for all critical endpoints and actions.
- Restrict resource creation to Administrators only — prevent Guest routing bypass.
- Validate `reserver_id` server-side when editing or viewing reservations.
- Protect `/api/session` endpoint from unauthenticated access.
- Improve frontend route guards and back them with backend checks.

---

## ✅ Conclusion

Role-based access control (RBAC) requires **significant reinforcement**, especially between **Guest** and **Reserver** boundaries. Several access control gaps currently allow for **unauthorized access**, **impersonation**, or **privilege escalation**. Ensuring backend validation and aligning it with frontend restrictions will improve the application’s overall security posture and user data protection.

