# Fuzzing and Directory Enumeration Results

# 🔍 WFUZZ Endpoint Discovery

This section outlines additional endpoints discovered using **WFUZZ**, along with their accessibility status across different user roles.

---

## 📋 Endpoint Access Matrix

| Endpoint URL     | Guest | Reserver | Admin | Notes                            |
|------------------|--------|----------|--------|----------------------------------|
| `/login`         | ✅     | ✅       | ✅     | Login page                       |
| `/register`      | ✅     | ✅       | ✅     | Registration page                |
| `/resources`     | ✅     | ✅       | ✅     | Resource page                    |
| `/reservation`   | ❌     | ❌       | ✅     | Requires authentication (401)    |


## Conclusion

WFUZZ revealed a minimal but important set of endpoints, confirming general public accessibility and identifying one restricted route:

### ✔️ Positive Findings:
- Pages such as `/login`, `/register`, and `/resources` are publicly available as expected.

### ⚠️ Key Issues:
- The `/reservation` endpoint correctly returns a `401 Unauthorized` for unauthenticated users, but **Reserver access is incorrectly denied**, suggesting a misconfiguration or incomplete session handling logic.

### 🛠️ Recommendation:
Review session handling and authentication flow for Reservers, especially for access-controlled pages like `/reservation`.
