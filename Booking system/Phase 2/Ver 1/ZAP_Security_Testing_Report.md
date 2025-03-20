# Checkmarx and ZAP Security Testing Report

## 1. Introduction

This report details the security testing conducted on the Booking System application using Checkmarx SAST and OWASP ZAP. The objective is to identify vulnerabilities, analyze potential security threats, and propose mitigations.

## 2. Tools Used

- **Checkmarx** – Static Application Security Testing (SAST) for source code analysis.
- **OWASP ZAP** – Dynamic Application Security Testing (DAST) for penetration testing.

## 3. Checkmarx Findings

### 3.1 High-Risk Vulnerabilities

| Vulnerability       | Description                              | Affected Files |  Risk Level | 
|---------------------|----------------------------------------|---------------|---------------|
| SQL Injection      | Unsanitized user input in SQL queries  | database.js      | High | 
| Cross-Site Scripting (XSS) | Improperly escaped input fields | register.js    | High |

### 3.2 Medium-Risk Vulnerabilities

| Vulnerability        | Description                               | Affected Files | Risk Level |
|----------------------|-------------------------------------------|---------------|
| Hardcoded Credentials | Hardcoded admin passwords found         | env.config    | Medium    |
| Open Redirect        | User can be redirected to an arbitrary website | routes.js |Medium    |

### 3.3 Low-Risk Vulnerabilities

| Vulnerability        | Description                                      | Affected Files | Risk Level |
|----------------------|--------------------------------------------------|---------------|
| Information Exposure | Verbose error messages revealing system details | error.log     |Low    |
| Deprecated API Usage | Usage of outdated API functions                 | api.js        |Low    |

## 4. OWASP ZAP Findings

### 4.1 High-Risk Issues

| Vulnerability        | Description                                      | Affected URLs | | Risk Level |
|----------------------|--------------------------------------------------|--------------|
| SQL Injection       | Input validation failure leading to SQL injection | /login      | High    |
| Cross-Site Scripting | Unescaped input causing XSS vulnerability       | /profile    | High   |

### 4.2 Medium-Risk Issues

| Vulnerability          | Description                          | Affected URLs || Risk Level |
|------------------------|------------------------------------|--------------|
| Missing Security Headers | Lack of CSP and X-Frame-Options | /dashboard  | Medium    |
| Session Fixation       | Session ID remains unchanged after login | /session | Medium    |

### 4.3 Low-Risk Issues

| Vulnerability      | Description                                | Affected URLs || Risk Level |
|--------------------|------------------------------------------|--------------|
| Directory Listing | Files accessible without authentication | /uploads    |Low    |

## 5. Password Hacking Results

A brute-force attack was conducted using Hashcat to test password strength. The following results were observed:

- Weak passwords were cracked within minutes.
- Stronger passwords (12+ characters with special symbols) remained uncracked.
- Additionally, two other passwords were successfully cracked using [CrackStation](https://crackstation.net/).

### Recommendations

- Enforce strong password policies (minimum 12 characters, special symbols, uppercase & lowercase letters).
- Implement multi-factor authentication (MFA).
- Use salted password hashing with bcrypt or Argon2.

## 6. Recommendations & Mitigations

- **Fix SQL Injection** – Implement prepared statements and parameterized queries.
- **Prevent XSS** – Sanitize all user inputs and use Content Security Policy (CSP).
- **Secure Credentials** – Store passwords securely using hashing algorithms.
- **Enforce HTTPS** – Encrypt all data transmission.
- **Apply Security Headers** – Add X-Frame-Options, Content-Security-Policy, and Strict-Transport-Security headers.
- **Regular Security Audits** – Conduct periodic SAST and DAST scans to identify new vulnerabilities.

## 7. Conclusion

The Booking System application has multiple security vulnerabilities that need to be addressed. Implementing the recommended security measures will significantly improve the application's security posture.
