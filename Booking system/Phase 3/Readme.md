
# Scanning Report

## Summary of Alerts

| **Risk Level**    | **Number of Alerts** |
|-------------------|----------------------|
| High              | 0                    |
| Medium            | 1                    |
| Low               | 1                    |
| Informational     | 5                    |

---

## Alerts

### 1. **Format String Error**
- **Risk Level:** Medium
- **Number of Instances:** 1
- **Description:** A Format String error occurs when the submitted data of an input string is evaluated as a command by the application.
- **URL:** [http://localhost:8000/resources](http://localhost:8000/resources)
- **Method:** POST
- **Parameter:** `resource_name`
- **Attack:** `ZAP %1!s%2!s%3!s%4!s%5!s%6!s%7!s%8!s%9!s%10!s%11!s%12!s%13!s%14!s%15!s%16!s%17!s%18!s%19!s%20!s%21!n%22!n%23!n%24!n%25!n%26!n%27!n%28!n%29!n%30!n%31!n%32!n%33!n%34!n%35!n%36!n%37!n%38!n%39!n%40!n`
- **Evidence:** ``
- **Other Info:** Potential Format String Error. The script closed the connection on a Microsoft format string error.

#### Solution:
- Rewrite the background program using proper deletion of bad character strings. This will require a recompile of the background executable.

#### Reference:
- [OWASP Format String Attack](https://owasp.org/www-community/attacks/Format_string_attack)

---

### 2. **Cross Site Scripting Weakness (Persistent in JSON Response)**
- **Risk Level:** Low
- **Number of Instances:** 2
- **Description:** A XSS attack was found in a JSON response. This might leave content consumers vulnerable to attack if they don't appropriately handle the data.
- **URLs:** 
  - [http://localhost:8000/api/resources](http://localhost:8000/api/resources)
  - [http://localhost:8000/api/resources](http://localhost:8000/api/resources)
- **Method:** GET
- **Parameter:** `resource_description` / `resource_name`
- **Attack:** `<script>alert(1);</script>`
- **Evidence:** ``
- **Other Info:** Raised with LOW confidence as the Content-Type is not HTML.

#### Solution:
- Use a vetted library or framework that prevents this weakness.
- Ensure proper encoding strategies are used when transmitting data between components.

#### Reference:
- [OWASP XSS Prevention Cheat Sheet](https://owasp.org/www-community/attacks/xss/)

---

### 3. **Authentication Request Identified**
- **Risk Level:** Informational
- **Number of Instances:** 1
- **Description:** The request has been identified as an authentication request.
- **URL:** [http://localhost:8000/login](http://localhost:8000/login)
- **Method:** POST
- **Parameter:** `username`
- **Other Info:** userParam=username userValue=foo-bar@example.com passwordParam=password referer=http://localhost:8000/login csrfToken=csrf_token

#### Solution:
- This is an informational alert; no action required.

#### Reference:
- [ZAP Authentication Helper](https://www.zaproxy.org/docs/desktop/addons/authentication-helper/auth-req-id/)

---

### 4. **Information Disclosure - Suspicious Comments**
- **Risk Level:** Informational
- **Number of Instances:** 4
- **Description:** The response appears to contain suspicious comments which may help an attacker.
- **URLs:**
  - [http://localhost:8000/static/reservationsForm.js](http://localhost:8000/static/reservationsForm.js)
  - [http://localhost:8000/static/reservationsForm.js](http://localhost:8000/static/reservationsForm.js)
  - [http://localhost:8000/static/reservationsForm.js](http://localhost:8000/static/reservationsForm.js)
  - [http://localhost:8000/reservation?id=14](http://localhost:8000/reservation?id=14)
- **Method:** GET
- **Evidence:** `select`, `user`, `username`
- **Other Info:** Patterns detected like `\bSELECT\b`, `\bUSER\b`, and `\bUSERNAME\b`.

#### Solution:
- Remove all comments that return information that may help an attacker and fix any underlying issues.

#### Reference:
- [CWE-200](https://cwe.mitre.org/data/definitions/200.html)

---

### 5. **Loosely Scoped Cookie**
- **Risk Level:** Informational
- **Number of Instances:** 5
- **Description:** Cookies can be scoped by domain or path. In this case, cookies may be loosely scoped.
- **URLs:**
  - [http://localhost:8000/login](http://localhost:8000/login)
  - [http://localhost:8000/logout](http://localhost:8000/logout)
  - [http://localhost:8000/register](http://localhost:8000/register)
- **Method:** GET / POST
- **Evidence:** `csrf_token=87042135`, `session_id="";$Path="/";$Domain="localhost"`

#### Solution:
- Always scope cookies to a Fully Qualified Domain Name (FQDN).

#### Reference:
- [RFC 6265](https://tools.ietf.org/html/rfc6265#section-4.1)

---

### 6. **Session Management Response Identified**
- **Risk Level:** Informational
- **Number of Instances:** 4
- **Description:** The response contains a session management token.
- **URLs:**
  - [http://localhost:8000/login](http://localhost:8000/login)
  - [http://localhost:8000/register](http://localhost:8000/register)
- **Method:** GET
- **Evidence:** `csrf_token` / `session_id`

#### Solution:
- This is an informational alert; no action required.

#### Reference:
- [ZAP Session Management Helper](https://www.zaproxy.org/docs/desktop/addons/authentication-helper/session-mgmt-id)

---

### 7. **User Agent Fuzzer**
- **Risk Level:** Informational
- **Number of Instances:** 132
- **Description:** Checks for differences in responses based on fuzzed User-Agent headers.
- **URLs:**
  - [http://localhost:8000/api/resources](http://localhost:8000/api/resources)
  - [http://localhost:8000/api/resources/13](http://localhost:8000/api/resources/13)
- **Method:** GET
- **Parameter:** Header `User-Agent`
- **Attack:** Various User-Agent headers

#### Solution:
- This is an informational alert; no action required.
Here's your request in Markdown format:

```markdown
- **URL:** http://localhost:8000/api/resources/13
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/resources/13
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** msnbot/1.1 (+http://search.msn.com/msnbot.htm)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/session
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/session
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/session
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/session
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/session
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3739.0 Safari/537.36 Edg/75.0.109.0
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/session
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/session
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/91.0
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/session
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/session
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/session
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A366 Safari/600.1.4
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/session
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/session
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** msnbot/1.1 (+http://search.msn.com/msnbot.htm)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/login
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/login
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/login
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/login
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/login
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3739.0 Safari/537.36 Edg/75.0.109.0
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/login
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/login
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/91.0
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/login
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/login
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/login
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A366 Safari/600.1.4
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/login
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (iPhone; U; CPU iPhone

 OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/login
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** msnbot/1.1 (+http://search.msn.com/msnbot.htm)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/logs
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/logs
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/logs
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/logs
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/logs
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3739.0 Safari/537.36 Edg/75.0.109.0
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/logs
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/logs
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/91.0
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/logs
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/logs
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/logs
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A366 Safari/600.1.4
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/logs
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/api/logs
  - **Method:** GET
  - **Parameter:** Header User-Agent
  - **Attack:** msnbot/1.1 (+http://search.msn.com/msnbot.htm)
  - **Evidence:** ``
  - **Other Info:** ``
```
Here's your request formatted in Markdown:

```markdown
- **URL:** http://localhost:8000/reservation
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/91.0
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/reservation
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/reservation
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/reservation
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A366 Safari/600.1.4
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/reservation
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/reservation
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** msnbot/1.1 (+http://search.msn.com/msnbot.htm)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/resources
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/resources
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/resources
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/resources
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/resources
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3739.0 Safari/537.36 Edg/75.0.109.0
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/resources
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/resources
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/91.0
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/resources
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/resources
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/resources
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (iPhone; CPU iPhone OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A366 Safari/600.1.4
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/resources
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16
  - **Evidence:** ``
  - **Other Info:** ``

- **URL:** http://localhost:8000/resources
  - **Method:** POST
  - **Parameter:** Header User-Agent
  - **Attack:** msnbot/1.1 (+http://search.msn.com/msnbot.htm)
  - **Evidence:** ``
  - **Other Info:** ``

**Instances:** 132

**Solution Reference:**
- [OWASP Web Security Testing Guide (WSTG)](https://owasp.org/wstg)
  
**Source ID:** 1
```
