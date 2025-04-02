# Role-Based Access Control Test Matrix

## Introduction

This document presents a role-based access control (RBAC) matrix for the Booking System, outlining the permissions for different user roles. The objective is to ensure appropriate access rights are enforced for each role.

## Roles and Permissions

| Role  | View Dashboard | View Profile | Modify Profile | Access Admin Panel | Manage Users | Delete Records |
|-------|----------------|--------------|----------------|--------------------|--------------|----------------|
| Admin | ✅             | ✅           | ✅             | ✅                 | ✅           | ✅             |
| User  | ✅             | ✅           | ✅             | ❌                 | ❌           | ❌             |
| Guest | ❌             | ❌           | ❌             | ❌                 | ❌           | ❌             |

## Testing Scenarios

| Test Case ID | Role  | Action               | Expected Outcome  | Actual Outcome    |
|--------------|-------|----------------------|-------------------|-------------------|
| TC-01        | Admin | Access admin panel   | Access granted    | Access granted    |
| TC-02        | User  | Access admin panel   | Access denied     | Access denied     |
| TC-03        | Guest | Access user profile  | Access denied     | Access denied     |
| TC-04        | Admin | Delete records       | Access granted    | Access granted    |
| TC-05        | User  | Modify own profile   | Access granted    | Access granted    |

## Findings

- RBAC is effectively implemented with minor improvements needed for handling unauthorized access attempts.
- No privilege escalation vulnerabilities were identified.

## Recommendations

- Implement detailed logging for unauthorized access attempts.
- Regularly review and update access control policies.

## Conclusion

The role-based access control (RBAC) model is functioning correctly, with minor recommendations for improved security and monitoring.