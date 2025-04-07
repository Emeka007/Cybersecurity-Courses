|Document|Hours|Status|Date Started|Date Completed|Notes|
| :- | :- | :- | :- | :- | :- |
|Introduction to Cybersecurity v3.0 - Module 1|3|Completed|2025-01-17|2025-01-17|Covers the basics of cybersecurity, including its impact on individuals, organizations, and governments.|
|Introduction to Cybersecurity v3.0 - Module 2|3|Completed|2025-01-18|2025-01-18|Explores common cyber threats, types of malware, and attack methods.|
|Introduction to Cybersecurity v3.0 - Module 3|3|Completed|2025-01-20|2025-01-20|Discusses how to protect personal data, secure devices, and ensure online privacy.|
|Introduction to Cybersecurity v3.0 - Module 4|3|Completed|2025-01-20|2025-01-20|Focuses on organizational cybersecurity practices and defense strategies.|
|Introduction to Cybersecurity v3.0 - Module 5|3|Completed|2025-01-21|2025-01-21|Covers career pathways, certifications, and ethical/legal considerations in cybersecurity.|
|SQL Injection  |4|Completed| 2025-02-03|2025-02-04| Covered 2 lab apprentice level of SQL Injection which includes: SQL injection vulnerability in WHERE clause allowing retrieval of hidden data and SQL injection vulnerability allowing login bypass
|Access Control Vulnerabilities |4|Completed| 2025-02-05|2025-02-06| Covered 2 lab apprentice level of Access Control Vulnerabilities which includes: Unprotected admin functionality and Unprotected admin functionality with unpredictable URL.|
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
| **SQL Injection UNION Attack - Finding Column** | 2 | ✅ Solved | 1 Mar 2025 | 1 Mar 2025 | Identified columns with text data using UNION-based attack. | 
| **SQL Injection UNION Attack - Extract Data** | 2 | ✅ Solved | 1 Mar 2025 | 1 Mar 2025 | Retrieved data from another table using UNION injection. |
 | **Reflected XSS in HTML (No Encoding)** | 1.5 | ✅ Solved | 2 Mar 2025 | 2 Mar 2025 | Exploited reflected XSS in an HTML context with no encoding. |
 | **Stored XSS in HTML (No Encoding)** | 2 | ✅ Solved | 2 Mar 2025 | 2 Mar 2025 | Injected stored XSS payload in an HTML page. | 
 | **DOM XSS in `document.write` Using `location.search`** | 2 | ✅ Solved | 3 Mar 2025 | 3 Mar 2025 | Used `document.write` to execute malicious JavaScript. | 
| **DOM XSS in `innerHTML` Using `location.search`** | 2 | ✅ Solved | 3 Mar 2025 | 3 Mar 2025 | Exploited `innerHTML` vulnerability to execute JavaScript. | 
| **DOM XSS in jQuery Anchor `href` Using `location.search`** | 2 | ✅ Solved | 4 Mar 2025 | 4 Mar 2025 | Used `location.search` to manipulate jQuery `href` attribute. | 
| **DOM XSS in jQuery Selector Using `hashchange` Event** | 2 | ✅ Solved | 4 Mar 2025 | 4 Mar 2025 | Leveraged `hashchange` event for DOM-based XSS. |
| **Phase1-Ver1: Cloned and reviewed the application** | 1 | ✅ Completed  | 10/02/2025 | 10/02/2025 |  Set up the application for testing. |
| **Phase1-Ver1: Docker environment setup** | 1 | ✅ Completed  | 10/02/2025 | 12/02/2025 | App running locally, tested with browser.  |
| **Phase1-Ver1: Initial scan** | 2 | ✅ Completed  | 10/02/2025 | 12/02/2025 |  Found CSRF, XSS, insecure headers. |
| **Phase1-Ver1: Manual testing** | 1.5 | ✅ Completed |  10/02/2025 | 14/02/2025 | Observed hidden fields, session tokens. |
| **Phase1-Ver1: Static code analysis** | 1.5 | ✅ Completed  | 10/02/2025 | 14/02/2025 | Found hardcoded secrets. |
| **Phase1-Ver1: SQL Injection attempt** | 1.5 | ✅ Completed  | 10/02/2025 | 15/02/2025 | Tested login/search – no major findings. |
| **Phase1-Ver1: Created ZAP Report** | 1 | ✅ Completed  | 10/02/2025 | 17/02/2025 | Saved as ZAP_Report_Initial.md. |
| **Phase1-Ver1: Wrote initial Test Report** | 1 | ✅ Completed  | 10/02/2025 | 17/02/2025 | Logged all vulnerabilities and fixes. |
| **Phase1-Ver2: Pulled updated version from GitHub** | 0.5 | ✅ Completed  | 22/02/2025 | 23/02/2025 |   Ver2 ready for retesting. |
| **Phase1-Ver2: Docker relaunch** | 0.5 | ✅ Completed |  22/02/2025 | 23/02/2025 | App relaunched successfully.  |
| **Phase1-Ver2: Retesting with ZAP** | 2 | ✅ Completed  | 22/02/2025 | 25/02/2025 |  Verified fixed vulnerabilities. |
| **Phase1-Ver2: Manual validation of previous issues** | 1 | ✅ Completed |   22/02/2025 | 26/02/2025 | CSRF fix confirmed, XSS partially fixed. |
| **Phase1-Ver2: Updated Test Report** | 1 | ✅ Completed |  22/02/2025 | 26/02/2025 | Comparison table between Ver1 and Ver2.  |
| **Phase1-Ver2: Second ZAP Report** | 1 | ✅ Completed |  22/02/2025 | 28/02/2025 | Saved as ZAP_Report_Updated.md.  |
| **Phase1-Ver2: SQLMap update** | 1 | ✅ Completed |  22/02/2025 | 28/02/2025 | Documented as SQLMap_Results.md.  |
| **Phase1-Ver2: GitHub structure update** | 0.5 | ✅ Completed | 22/02/2025 | 01/03/2025 |  All files committed under Phase 1.  |
| **Phase2-Ver1: Password cracking (hashes)** | 2.5 | ✅ Completed   | 07/03/2025 | 07/03/2025 | Cracked common weak passwords. |
| **Phase2-Ver1: Brute-force testing (login page)** | 2 | ✅ Completed | 07/03/2025 | 09/03/2025 |  Found valid combinations.  |
| **Phase2-Ver1: Added results to report** | 1 | ✅ Completed |   07/03/2025 | 10/03/2025 | Included commands and time taken. |
| **Phase2-Ver1: Uploaded to GitHub** | 0.5 | ✅ Completed  | 07/03/2025 | 12/03/2025 |  Under Phase 2/Ver 1. |
| **Phase2-Ver2: Revalidated password security** | 1.5 | ✅ Completed |  18/03/2025 | 18/03/2025 | Some accounts still using weak passwords. |
| **Phase2-Ver2: Added results to Phase 2 report** | 1 | ✅ Completed |  18/03/2025 | 20/03/2025 | Updated existing file. |
| **Phase2-Ver2: Additional Burp Suite login fuzzing** | 1 | ✅ Completed |   18/03/2025 | 21/03/2025 | No lockout policy detected.  |
| **Phase2-Ver2: Discussion posted on forum** | 0.5 | ✅ Completed |   18/03/2025 | 22/03/2025 | Shared password cracking insights. |
| **Phase3: Role-Based Access Control Testing** | 2 | ✅ Completed  | 25/03/2025 | 25/03/2025 |  Tested routes for users/admins. |
| **Phase3: Created Authorization Test Matrix** | 1 | ✅ Completed |  25/03/2025 | 27/03/2025 |Logged each role’s access level.   |
| **Phase3: Session hijacking tests** | 1.5 | ✅ Completed  | 25/03/2025 | 29/03/2025 |  Session ID predictable. Reported. |
| **Phase3: Final Report Compilation** | 2 | ✅ Completed |   25/03/2025 | 31/03/2025 | All findings wrapped into summary. |
| **Phase3: Repo updated and cleaned** | 1 | ✅ Completed |   25/03/2025 | 03/04/2025 | All phases organized and pushed. |


