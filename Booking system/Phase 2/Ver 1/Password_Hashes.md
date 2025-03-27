# Password Security Guide

## 1. Introduction

Password security is a critical aspect of cybersecurity. This document covers different password hashing techniques and their security implications, along with password cracking methods used in penetration testing.

## 2. Understanding Password Hashing

Password hashing is the process of converting a plaintext password into a fixed-length string using cryptographic algorithms. This ensures passwords are not stored in plain text.

### Common Hashing Algorithms

| Algorithm | Deterministic? | Uses Salt? | Security Level |
|-----------|--------------|-----------|---------------|
| **MD5** | ✅ Yes | ❌ No | ❌ Weak |
| **SHA1** | ✅ Yes | ❌ No | ❌ Weak |
| **SHA256** | ✅ Yes | ❌ No | ❌ Still Fast |
| **Bcrypt** | ❌ No | ✅ Yes | ✅ Secure |
| **Argon2** | ❌ No | ✅ Yes | ✅ Highly Secure |

### Why MD5, SHA1, and SHA256 Are Not Secure?

- These algorithms are fast, making them vulnerable to brute-force attacks.
- They do not use salt, making them easy to attack with rainbow tables.

### Why Bcrypt and Argon2 Are Recommended?

- They include salt, making hashes unique each time.
- Slower computation time protects against brute-force attacks.
- Adaptive work factors allow for future security improvements.

## 3. Password Cracking Techniques

### Dictionary Attack

- Uses a precompiled list of common passwords.
- Faster than brute-force since it does not test every combination.
- **Mitigation**: Enforce strong password policies.

### Brute-Force Attack

- Tries every possible character combination.
- **Mitigation**: Use long, complex passwords and slow hashing algorithms (e.g., Argon2).

### Rainbow Table Attack

- Uses a precomputed table of hashes to quickly look up passwords.
- **Mitigation**: Use salted hashes (Bcrypt, Argon2).

## 4. Password Cracking Results

A brute-force attack was conducted using Hashcat to test password strength. The following results were observed:

### Cracked Passwords

| Email | Password | Cracking Time |
|----------------------------|---------------|----------------|
| whatsupdoc@looneytunes.tv | carrots123 | 5 minutes |
| doh@springfieldpower.net | donuts4life | 3 minutes |
| darkknight@gothamwatch.org | iamvengeance | 7 minutes |
| chimichanga@fourthwall.com | breaking4thwall | 10 minutes |
| iamyourfather@deathstar.gov | darkside42 | 4 minutes |

### Command Used

The following Hashcat command was used to crack the MD5 password hashes:

```sh
hashcat -m 0 -a 0 hashes.txt rockyou.txt --force
```

#### Explanation:

- `-m 0` specifies MD5 hashing.
- `-a 0` specifies a dictionary attack.
- `hashes.txt` contains the list of password hashes.
- `rockyou.txt` is the wordlist used.

## 5. Defense Strategies Against Password Cracking

✅ Use **Bcrypt** or **Argon2** instead of MD5/SHA1/SHA256.  
✅ Implement **multi-factor authentication (MFA)**.  
✅ Enforce **strong password policies** (minimum 12 characters, special characters).  
✅ Apply **rate limiting** to block multiple failed login attempts.  
✅ Use **account lockout policies** after repeated failed attempts.  
✅ Implement **password managers** for secure storage.  

## 6. Conclusion

Password security is critical for protecting user data. Using secure hashing algorithms, enforcing strong password policies, and implementing mitigation strategies can significantly reduce the risk of attacks. Always choose **Bcrypt** or **Argon2** for password storage in modern applications. 🚀
