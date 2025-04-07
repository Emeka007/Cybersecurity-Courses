# ✅ Test Matrix

## 📊 Access Matrix Overview

| Page / Feature                          | Guest        | Reserver        | Administrator      |
|----------------------------------------|--------------|------------------|---------------------|
| `/`                                    | ✅           | ✅               | ✅                  |
| └─ View resource form                  | ❌           | ✅               | ✅ (*note added)    |
| └─ Create new resource                 | ❌ (*1)      | ❌ (*2)          | ✅ (*3)             |
| `/login`                               | ✅           | ✅               | ✅                  |
| └─ Register new account                | ✅ (*4)      | ✅ (*4)          | ✅ (*4)             |
| └─ Email validation                    | ✅ (*5)      | ✅ (*5)          | ✅ (*5)             |
| └─ Password validation                 | ✅ (*6)      | ✅ (*6)          | ✅ (*6)             |
| └─ Age restriction (15+)               | ✅ (*14)     | ✅ (*14)         | ✅ (*14)            |
| └─ Login with wrong creds              | ❌ (*7)      | ❌ (*7)          | ❌ (*7)             |
| `/reservation`                         | ❌ (*8)      | ✅               | ✅                  |
| └─ View all reservations               | ❌ (*15)     | ✅               | ✅                  |
| └─ Create reservation                  | ❌           | ✅               | ✅                  |
| └─ Validation: date logic              | ❌           | ✅ (*9)          | ✅ (*9)             |
| └─ Edit own reservation                | ❌           | ✅ (*10)         | ✅                  |
| └─ Edit others' reservation            | ❌           | ❌ (*16)         | ✅                  |
| └─ Change reserver name                | ❌           | ✅ (*11)         | ✅                  |
| └─ Edit resource from reservation      | ❌           | ❌               | ✅                  |
| └─ Edit reservation dates              | ❌           | ✅ (own only)    | ✅                  |
| └─ Date picker missing time            | ❌           | ✅ (*17)         | ✅                  |
| `/resources`                           | ✅ (*12)     | ✅               | ✅                  |
| └─ Add new resource                    | ✅ (*12)     | ❌               | ✅                  |
| └─ Symbols & numbers allowed           | ✅           | ✅               | ✅                  |
| Other: Email uniqueness                | ✅ (*13)     | ✅ (*13)         | ✅ (*13)            |

---

## 📝 Notes Summary

- **(*1)**: Guest can access resource creation via URL – unintended
- **(*2)**: Reserver cannot add new resource
- **(*3)**: Admin can add and edit resources
- **(*4)**: Cannot reuse existing email
- **(*5)**: Email must follow proper format
- **(*6)**: Password must be minimum 8 characters
- **(*7)**: Invalid login attempt fails as expected
- **(*8)**: Guest unauthorized to view `/reservation`
- **(*9)**: Reservation start date must be before end date
- **(*10)**: Reserver can only edit their reservations
- **(*11)**: Reserver can edit their displayed name (integrity concern)
- **(*12)**: Guest can access resource form directly via URL
- **(*13)**: Enforced email uniqueness
- **(*14)**: Users must be at least 15 years old
- **(*15)**: Ambiguity in guest visibility of reservations (read-only?)
- **(*16)**: Reserver can access/edit others’ reservations via URL (security flaw)
- **(*17)**: Date picker lacks time component

---

## 📌 Conclusion

The matrix clearly demonstrates role-based functionality and reveals multiple privilege bypasses and misconfigured permissions, particularly involving **Guest** and **Reserver** roles.

### ⚠️ Key Findings:
- **Guests** can access restricted areas (like resource creation forms) via direct URLs, bypassing UI restrictions.
- **Reservers** are able to perform unauthorized actions, such as editing others’ reservations or changing reserver names — indicating broken access control.
- Several input validation issues (date logic, email format, password strength) require backend enforcement.

### 🛠️ Recommendation:
Implement robust server-side access control and validation. Ensure that frontend restrictions are supported by backend enforcement to avoid privilege escalation or unauthorized access across all user roles.
