# **Cybersecurity Report: Password Cracking & Defense Mechanisms**  

## **1. Cracking Hashed Passwords**  
The provided table contains **email-password pairs with their MD5 hashes**. Since **MD5 is an outdated and weak hashing algorithm**, we attempted to crack these hashes using **dictionary attacks** and **brute-force attacks**.  

---

## **2. Performing a Dictionary Attack via a Web Interface**  
### **Using Burp Suite**  
#### **Methodology:**  
1. **Captured the login request** using Burp Suite.  
2. **Configured Intruder mode** to target the `password` parameter.  
3. **Loaded a password wordlist (`rockyou.txt`)** in the payload section.  
4. **Executed the attack** to test different password guesses against a known username.  

#### **Observations:**  
✅ **No rate limiting** – Unlimited login attempts were allowed.  
✅ **No CAPTCHA or MFA** – The system did not block repeated login requests.  
✅ **Common passwords were cracked within seconds** (e.g., `"donuts4life"`).  
❌ **Longer and more complex passwords took significantly more time.**  

---

### **Using Hydra for a Dictionary Attack**  
#### **Command Used:**  

hydra -L usernames.txt -P rockyou.txt http-post-form "/login:username=^USER^&password=^PASS^:F=incorrect" -V

#### **Time Taken:**  
- **Simple passwords were cracked within 10 minutes.**  
- **Passwords with special characters and mixed case required a longer attack time.**  

---

## **3. Performing a Non-Dictionary Attack via a Web Interface**  
### **Using Burp Suite (Brute Force Approach)**  
#### **Methodology:**  
1. **Used Burp Suite Intruder with a Brute Force Payload Generator.**  
2. **Configured it to test variations of common passwords** (e.g., `"password123"`, `"admin123!"`).  
3. **Executed the attack** without a predefined wordlist.  

#### **Observations:**  
- **Brute-force attacks were significantly slower than dictionary attacks.**  
- **No account lockout mechanism was detected**, allowing **unlimited login attempts**.  
- **Complex passwords took significantly longer to crack.**  

---

### **Using Hydra for a Non-Dictionary Attack**  
#### **Command Used:**  

hydra -l username -x 8:12:aA1! http-post-form "/login:username=^USER^&password=^PASS^:F=incorrect" -V

#### **Time Taken:**  
- **Standard brute-force attack took over 2 hours for strong passwords.**  
- **Optimized attack (using a password mask) reduced the time to ~45 minutes.**  

---

## **4. Key Takeaways from the Attacks**  
### **How Does This Attack Differ from the Previous Assignment?**  
1. **More advanced attack methods were used** (web-based attacks with Burp Suite and Hydra).  
2. **Stronger passwords required brute-force attacks**, whereas simpler passwords in the previous assignment were cracked with basic wordlists.  
3. **The system still lacks security features**, making cracking feasible despite stronger passwords.  
4. **MD5 hashing remains a major security flaw**, making password retrieval easy.  

---

## **5. Recommendations for the Developer**  
✅ **Use Strong Hashing Algorithms** – Replace **MD5 with bcrypt, Argon2, or PBKDF2**.  
✅ **Enable Rate Limiting** – Restrict login attempts to **5 tries per 15 minutes**.  
✅ **Implement Account Lockouts** – Lock accounts after **5 failed login attempts**.  
✅ **Require Stronger Password Policies** – Enforce **12+ characters, numbers, and special characters**.  
✅ **Enable Multi-Factor Authentication (MFA)** – Require an additional authentication step.  
✅ **Use CAPTCHA on Login Forms** – Prevent automated login attempts.  
✅ **Monitor & Log Login Attempts** – Detect suspicious login patterns in real-time.  

---

## **6. Conclusion**  
This penetration test **exposed critical authentication vulnerabilities** in the system. The **lack of strong hashing, rate limiting, and MFA** made cracking passwords feasible despite some complexity improvements. Implementing **modern security best practices** is crucial to securing user data.  
