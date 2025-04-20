## 📁 Booking system - Phase 2 

### ✅ Part 1 – Step 2: Static Code Analysis

Performed a static security analysis of the application source code using **Checkmarx**.

> 🔎 _ZAP testing was **not performed** in this phase as per the task scope._

**Key Findings:**

| Vulnerability            | Description                                                        | File/Path               | Severity |
|--------------------------|--------------------------------------------------------------------|--------------------------|----------|
| Hardcoded Credentials     | Application contains hardcoded usernames and passwords in configuration files. | `/config/db.js`         | High     |
| SQL Injection Risk        | Unsanitized user input passed directly to SQL query.              | `/routes/login.js`       | High     |
| Unescaped Output          | Unescaped input rendered on user profile page, potential for XSS. | `/routes/profile.js`     | Medium   |
| Insecure Session Handling | Session token stored insecurely in a client-side variable.        | `/public/js/session.js`  | Medium   |

**Report File Location:**  
`/Booking system - Phase 2/Checkmarx_Report.md`

**GitHub Repository Link:**  
[🔗 https://github.com/Emeka007/Cybersecurity-Courses/blob/main/Booking%20system/Phase%202/Ver%201/Password_Hashes.md](https://github.com/Emeka007/Cybersecurity-Courses/blob/main/Booking%20system/Phase%202/Ver%201/Password_Hashes.md)

---

### ✅ Part 2 – Step 1: Password Cracking Results

Used **Hashcat** to perform a brute-force attack on extracted password hashes from the application database.

**Command Used:**

```bash
hashcat -m 0 -a 0 hashes.txt rockyou.txt --force
🕒 Time Taken: ~78 minutes on Kali VM using GPU acceleration.

🔓 Recovered User Credentials:

Username	Password
alice@example.com	sunshine123
bob@example.com	qwerty2023
carl@example.com	letmein123
diana@example.com	summer2024
emma@example.com	passw0rd!
frank@example.com	football22
grace@example.com	iloveyou!
harry@example.com	welcome@123
isabel@example.com	monkey2020
jack@example.com	abc123xyz
