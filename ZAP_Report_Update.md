# 📌 OWASP ZAP Security Scan Report - Booking System (Phase 1 Part 2)

**Date:** _23 February 2025_  
**Tester:** _Chukwuemeka Obanya_  
**Scan Tool:** OWASP ZAP  

---

## **1️⃣ Summary of Findings**
| 🔹 **Issue** | 🚨 **Severity** | 🛠️ **Recommendation** |
|--------------|--------------|-----------------------|
| Cross-Site Scripting (XSS) | 🔴 **Critical** | ✅ **Sanitize inputs & use CSP** |
| SQL Injection | 🔴 **Critical** | ✅ **Use prepared statements** |
| Weak Session Tokens | 🟡 **Medium** | ✅ **Implement secure session IDs** |
| Exposed Debug Information | 🟢 **Low** | ✅ **Disable debug mode** |

---

## **2️⃣ Detailed Vulnerability Analysis**
### **1️⃣ Cross-Site Scripting (XSS)**
- **Impact:** Attackers can inject JavaScript into form fields.
- **Affected Page:** `/register`
- **Recommendation:** Use **input sanitization & Content Security Policy (CSP)**.

---

### **2️⃣ SQL Injection**
- **Impact:** Unauthorized database access.
- **Affected Endpoint:** `/login`
- **Recommendation:** Use **parameterized queries**.

---

## **3️⃣ Conclusion & Next Steps**
- **Immediate fixes required** for **XSS & SQLi** vulnerabilities.
- **Re-test application after patches are applied**.
- **Re-run OWASP ZAP scan after security improvements**.
