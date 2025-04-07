# 🔒 ZAP Security Testing – Discovered Endpoints

## Introduction

This report provides a comprehensive analysis of the OWASP ZAP security scan conducted on the Booking System. The objective was to identify potential vulnerabilities, including injection flaws, broken authentication, and security misconfigurations.

Below is a list of backend endpoints discovered through OWASP ZAP and verified for accessibility by different user roles.

---

## 📋 Endpoint Access Matrix

| Endpoint URL                      | Guest | Reserver | Admin | Notes                                       |
|----------------------------------|--------|----------|--------|---------------------------------------------|
| `/api/users`                     | ❌     | ❌       | ✅     | Admin-only user list                        |
| `/api/resources`                 | ❌     | ✅       | ✅     | Accessible via GET                          |
| `/api/resources/13`             | ❌     | ✅       | ✅     | Resource detail view                        |
| `/api/reservations/14`         | ❌     | ✅       | ✅     | Reserver may access own reservation only?   |
| `/api/session`                  | ✅     | ✅       | ✅     | Returns session/login info                  |
| `/logout`                        | ❌     | ❌       | ✅     | Admin can log out                           |
| `/register`                      | ✅     | ✅       | ✅     | Registration page                           |
| `/reservation`                   | ❌     | ✅       | ✅     | Reserver can make/edit reservations         |
| `/reservation?id=14`            | ❌     | ✅       | ✅     | Reservation with specific ID                |
| `/resources`                     | ✅     | ✅       | ✅     | Accessible resource list                    |
| `/resources?id=13`             | ✅     | ✅       | ✅     | Resource with specific ID                   |
| `/static/reservationsForm.js`  | ✅     | ✅       | ✅     | Public JS file                              |
| `/static/resourceForm.js`      | ✅     | ✅       | ✅     | Public JS file                              |

---

## 📝 Notes

- Endpoints like `/api/resources` and `/api/reservations/14` are accessible by both the reserver and admin, while guests are restricted.
- Admin-only resources include `/api/users` and `/logout`.
- Guest users have access to public pages such as `/register` and `/static/reservationsForm.js`.
- Reserver-only access for endpoints like `/reservation` and `/reservation?id=14` for managing their own reservations.

---

## 🧠 Key Observations

### Guest Access:
- Can access static files and session endpoint.
- Restricted from reservation/resource data.
- ⚠️ Can try accessing `/resources` via direct URL (*12).

### Reserver Access:
- Can access their own resources and reservations.
- ⚠️ May access or edit others' reservations via ID in URL (*16).
- Can change reserver name (*11) — potential impersonation or data integrity risk.

### Admin Access:
- Full access to all endpoints as expected.

### Conclusion
The OWASP ZAP scan provided visibility into backend routes and their accessibility by different user roles:

### ✔️ Positive Findings:
- Admin-only APIs such as `/api/users` are correctly restricted from Guests and Reservers.
- Static assets and login/session endpoints are properly exposed to all roles.

### ⚠️ Key Issues:
- **Reserver Endpoint Access**: Reservers may access specific resources or reservations via predictable IDs.
- **Insecure Guest Exposure**: Endpoints like `/resources` are accessible by Guests through direct navigation.
- **Potential BOLA Vulnerabilities**: Broken Object-Level Authorization risks exist in ID-based access patterns.

### 🛠️ Recommendation:
Implement strict backend checks to validate ownership and role before granting access to dynamic ID-based endpoints (e.g., `/reservation?id=14`).

