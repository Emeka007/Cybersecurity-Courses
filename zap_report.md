-----

### **ZAP Test Report**  
**Project:** Booking System - Phase 1  
**Tester:** Chukwuemeka Obanya   
**Date:** 20-02-2025   
**Tools Used:** OWASP ZAP   

---

## **1. Overview**  
OWASP ZAP (Zed Attack Proxy) was used to perform an automated security assessment of the registration page (`http://localhost:8000/register`). The objective was to identify vulnerabilities such as injection flaws, authentication weaknesses, and security misconfigurations.

---

## **2. Target Information**  
- **Target URL:** `http://localhost:8000/register`  
- **Scan Type:** Active Scan & Passive Scan  
- **Authentication:** No authentication required  

---

## **3. Scan Configuration & Methodology**  
### **Passive Scan:**  
Executed a passive scan while browsing the application to identify security issues without actively attacking the system.

### **Active Scan:**  
Performed an active scan to detect vulnerabilities by sending crafted requests to the application.

---

## **4. Findings & Results**  
### **4.1 High-Risk Vulnerabilities**  
#### **1. SQL Injection (Critical)**  
- **Affected Parameter:** `username` (POST request)  
- **Description:** The input field is vulnerable to SQL injection, potentially allowing attackers to extract sensitive data.  
- **Recommended Fix:** Implement parameterized queries and input validation.

#### **2. Cross-Site Scripting (XSS) (High)**  
- **Affected Parameter:** `username` (POST request)  
- **Description:** Reflected XSS vulnerability detected, allowing malicious scripts to be executed in users' browsers.  
- **Recommended Fix:** Implement proper input encoding and use Content Security Policy (CSP).

### **4.2 Medium-Risk Vulnerabilities**  
#### **3. Missing Security Headers**  
- **Description:** The application does not implement essential security headers like `X-Frame-Options`, `X-XSS-Protection`, and `Content-Security-Policy`.  
- **Recommended Fix:** Configure security headers in the server response to mitigate potential exploits.

#### **4. Weak Password Policy**  
- **Description:** The registration page allows weak passwords, increasing the risk of credential-based attacks.  
- **Recommended Fix:** Enforce strong password policies with a mix of uppercase, lowercase, numbers, and special characters.

### **4.3 Low-Risk Vulnerabilities**  
#### **5. Server Version Disclosure**  
- **Description:** The HTTP response headers reveal the web server and framework versions, which could help attackers craft targeted exploits.  
- **Recommended Fix:** Hide server version details in response headers.

---

## **5. Recommendations**  
### **Immediate Actions:**  
✅ Fix SQL injection vulnerability using parameterized queries.  
✅ Implement input validation and sanitization to prevent XSS.  
✅ Add missing security headers.  

### **Long-Term Security Improvements:**  
✅ Implement Web Application Firewall (WAF) to monitor and block suspicious traffic.  
✅ Perform regular security audits and penetration tests.  
✅ Enforce multi-factor authentication (MFA) for enhanced security.  

---

## **6. Conclusion**  
The ZAP scan revealed multiple security issues, including **SQL Injection**, **XSS**, and **missing security headers**. Immediate remediation steps are necessary to enhance the security of the **Booking System** registration page. 

### **Attached Reports:**  
- [SQLMap Test Report](./SQLMap_Report.md)  
- [Checkmarx Scan Results](./Checkmarx_Report.md)  

---