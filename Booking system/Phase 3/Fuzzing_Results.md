# Fuzzing and Directory Enumeration Results

## Introduction

This report documents the results of directory enumeration and fuzzing tests conducted on the Booking System. The objective was to uncover hidden directories, files, and inputs that could be exploited by attackers.

## Testing Methodology

**Tools used:**
- Fuzzing Tool: OWASP ZAP
- Directory Enumeration Tool: Dirb

**Tests were performed to:**
- Identify hidden endpoints and directories
- Locate sensitive files
- Discover input validation weaknesses

## Test Scenarios

| Test ID | Tool Used  | Target Path       | Expected Outcome                     | Actual Outcome               |
|---------|------------|-------------------|--------------------------------------|------------------------------|
| FT-01   | Dirb       | /admin            | Access denied                        | Access denied                |
| FT-02   | Dirb       | /backup           | Access denied                        | Access denied                |
| FT-03   | OWASP ZAP  | /login?user=FUZZ  | Detect invalid inputs (SQLi, XSS, LFI)| SQLi vulnerability detected   |
| FT-04   | OWASP ZAP  | /search?query=FUZZ| Identify input validation issues      | Input validation passed      |

## Findings

- Hidden directories and files were effectively restricted
- SQL injection vulnerability found in the login input
- Input validation needs reinforcement

## Recommendations

- Implement input validation to prevent SQL injection
- Monitor logs for unusual access patterns
- Limit exposure of hidden directories and files

## Conclusion

The fuzzing and directory enumeration tests revealed critical input validation flaws. Immediate remediation is recommended to prevent exploitation.