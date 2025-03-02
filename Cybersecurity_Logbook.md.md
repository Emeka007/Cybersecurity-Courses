|Document|Hours|Status|Date Started|Date Completed|Notes|
| :- | :- | :- | :- | :- | :- |
|Introduction to Cybersecurity v3.0 - Module 1|4|Completed|2025-01-17|2025-01-17|Covers the basics of cybersecurity, including its impact on individuals, organizations, and governments.|
|Introduction to Cybersecurity v3.0 - Module 2|5|Completed|2025-01-18|2025-01-18|Explores common cyber threats, types of malware, and attack methods.|
|Introduction to Cybersecurity v3.0 - Module 3|3|Completed|2025-01-20|2025-01-20|Discusses how to protect personal data, secure devices, and ensure online privacy.|
|Introduction to Cybersecurity v3.0 - Module 4|5|Completed|2025-01-20|2025-01-20|Focuses on organizational cybersecurity practices and defense strategies.|
|Introduction to Cybersecurity v3.0 - Module 5|5|Completed|2025-01-21|2025-01-21|Covers career pathways, certifications, and ethical/legal considerations in cybersecurity.|
|SQL Injection  |6|Completed| 2025-02-03|2025-02-04| Covered 2 lab apprentice level of SQL Injection which includes: SQL injection vulnerability in WHERE clause allowing retrieval of hidden data and SQL injection vulnerability allowing login bypass
|Access Control Vulnerabilities |6|Completed| 2025-02-05|2025-02-06| Covered 2 lab apprentice level of Access Control Vulnerabilities which includes: Unprotected admin functionality and Unprotected admin functionality with unpredictable URL.|
|Authentication |6|Completed| 2025-02-07|2025-02-08| Covered 2 lab apprentice level of Authentication which includes: Username enumeration via different responses and 2FA simple bypass.|
| Setting Up Project Environment | 3     | ✅ Completed | 14th Feb     | 14th Feb    | Installed Kali Linux, Docker, and VirtualBox. Configured testing environment. |
| Cloning Repository & Setup     | 2     | ✅ Completed | 14th Feb     | 14th Feb    | Cloned GitHub repo, found missing files, and verified repository integrity. |
| Running the Application        | 3     | ⚠️ Issues Found | 15th Feb     | 15th Feb    | Encountered **404 error** when accessing `http://localhost:8000/register`. Troubleshooting missing files and incorrect paths. |
| Fixing Missing Files & Folders | 3     | ✅ Completed | 15th Feb     | 15th Feb    | Discovered incorrect folder names, used `find` and `ls -b` to correct file paths. |
| Setting Up Docker Containers   | 2     | ⚠️ Errors | 16th Feb     | 16th Feb    | Faced **port conflict issue** (`8000 already in use`). Used `netstat` to find and free the port. |
| Running Docker Compose         | 2     | ✅ Completed | 16th Feb     | 16th Feb    | Successfully ran `docker-compose up` after resolving conflicts. |
| Penetration Testing - SQLi     | 3     | ✅ Completed | 17th Feb     | 17th Feb    | Found **SQL Injection vulnerability** in the registration form using Burp Suite & SQLMap. |
| Penetration Testing - Auth Bypass | 3   | ✅ Completed | 17th Feb     | 17th Feb    | Successfully bypassed login using session manipulation in Burp Suite. |
| Report Writing - Test Report.md | 2     | ✅ Completed | 18th Feb     | 18th Feb    | Created **Markdown report**, documented findings, included recommendations. |
| ZAP & Checkmarx Scans         | 3     | ✅ Completed | 18th Feb     | 18th Feb    | Performed **OWASP ZAP** scans, exported reports, and analyzed results. |
| Git Issues & Fixes            | 2     | ⚠️ Challenges | 19th Feb     | 19th Feb    | Encountered **fatal: not a git repository** issue, fixed by initializing Git in the correct directory. |
| Pushing Report to GitHub       | 2     | ✅ Completed | 19th Feb     | 19th Feb    | Fixed **missing file path** issues and successfully pushed reports. |
| Final Submission & Review     | 3     | ✅ Completed | 20th Feb     | 20th Feb    | Verified all files were uploaded correctly, submitted GitHub repo link. |
| **Setting Up Docker & App** | 2 | ✅ Completed | 23 Feb 2025 | 23 Feb 2025 | Cloned updated app, set up Docker, and verified access. |
 | **Initial Security Assessment**| 3 | ✅ Completed | 23 Feb 2025 | 23 Feb 2025 | Performed OWASP ZAP quick scan and reviewed key endpoints. |
 | **SQL Injection Testing** | 2 | ✅ Completed | 24 Feb 2025 | 24 Feb 2025 | Verified if SQL Injection vulnerabilities were patched. | 
| **XSS Injection Testing** | 2 | ✅ Completed | 24 Feb 2025 | 24 Feb 2025 | Found persistent XSS in comments, documented results. | 
| **Broken Access Control Tests**| 2 | ⚠️ Issues Found | 25 Feb 2025 | 25 Feb 2025 | Admin panel still accessible without authentication. | 
| **Session Management Tests** | 2 | ✅ Completed | 25 Feb 2025 | 25 Feb 2025 | Found predictable session tokens, recommended secure generation. | 
| **Checkmarx Static Scan** | 3 | ✅ Completed | 26 Feb 2025 | 26 Feb 2025 | Ran Checkmarx scan, found insecure API endpoints. |
 | **OWASP ZAP Full Scan** | 3 | ✅ Completed | 26 Feb 2025 | 26 Feb 2025 | Conducted full dynamic analysis, documented security gaps. | 
| **Report Writing & Updates** | 3 | ✅ Completed | 27 Feb 2025 | 27 Feb 2025 | Updated markdown reports for test findings. |
| **GitHub Submission** | 1 | ✅ Completed | 27 Feb 2025 | 27 Feb 2025 | Pushed updated reports to repository and verified upload. |



### **✅ Summary & Key Learnings** - **Major security issues** such as XSS and Broken Access Control still exist. - **Session management improvements** are necessary to prevent token hijacking. - **Regular security scans** should be integrated into the development process. - 

**Next Steps:** Re-run tests after developers apply fixes and verify patches.







| **SQL Injection UNION Attack - Finding Column** | 2 | ✅ Solved | 1 Mar 2025 | 1 Mar 2025 | Identified columns with text data using UNION-based attack. | 
| **SQL Injection UNION Attack - Extract Data** | 2 | ✅ Solved | 1 Mar 2025 | 1 Mar 2025 | Retrieved data from another table using UNION injection. |
 | **Reflected XSS in HTML (No Encoding)** | 1.5 | ✅ Solved | 2 Mar 2025 | 2 Mar 2025 | Exploited reflected XSS in an HTML context with no encoding. |
 | **Stored XSS in HTML (No Encoding)** | 2 | ✅ Solved | 2 Mar 2025 | 2 Mar 2025 | Injected stored XSS payload in an HTML page. | 

