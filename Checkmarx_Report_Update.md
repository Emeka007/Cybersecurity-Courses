# 📌 Checkmarx Security Analysis Report - Booking System (Phase 1 Part 2)

**Date:** _23 February 2025_  
**Tester:** _Chukwuemeka Obanya_  
**Scan Tool:** Checkmarx SAST  

---

## **1️⃣ Scan Summary**
| 🔹 **Category** | 🚨 **Severity** | 🛠️ **Fix Needed?** |
|---------------|------------|----------------|
| SQL Injection (SQLi) | 🔴 **Critical** | ✅ **Yes** |
| Cross-Site Scripting (XSS) | 🔴 **Critical** | ✅ **Yes** |
| Hardcoded Credentials | 🟡 **Medium** | ✅ **Yes** |
| Insecure API Endpoints | 🟡 **Medium** | ✅ **Yes** |

---

## **2️⃣ Critical Security Issues**
### **1️⃣ SQL Injection in User Authentication**
- **Affected File:** `routes/register.js`
- **Issue:** User inputs **are not sanitized** before database queries.
- **Risk:** Attackers can **manipulate queries** and gain unauthorized access.
- **Recommendation:** Use **parameterized queries** and **input validation**.

```javascript
// ❌ Vulnerable Code
db.query("SELECT * FROM users WHERE username = '" + req.body.username + "'");
✅ Fix it:

javascript
Copy code
// ✅ Secure Code
db.query("SELECT * FROM users WHERE username = ?", [req.body.username]);
2️⃣ Hardcoded Credentials in .env File
Risk: API keys and database passwords are stored in plaintext.
Recommendation: Store credentials securely using environment variables.
plaintext
Copy code
# ❌ Vulnerable
DB_PASSWORD=mysecretpassword
✅ Fix it: Move sensitive values to a secrets manager.