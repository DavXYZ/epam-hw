# Node.js HTTPS Server Setup

This guide will help you create SSL/TLS certificates using OpenSSL, set up an HTTPS server in Node.js, and run it locally.

## Prerequisites

- **Node.js** installed on your system.
- **OpenSSL** installed on your system.

### Step 1: Install OpenSSL on Windows

1. **Download OpenSSL:**
   - Go to the [OpenSSL for Windows website](https://slproweb.com/products/Win32OpenSSL.html).
   - Download the latest version of `Win64 OpenSSL` if you have a 64-bit system or `Win32 OpenSSL` for 32-bit.

2. **Install OpenSSL:**
   - Run the installer and follow the prompts.
   - During installation, when asked to copy OpenSSL DLLs to the system directory, select the option to do so.

3. **Add OpenSSL to System Path:**
   - Right-click on `This PC` or `My Computer` and select `Properties`.
   - Click on `Advanced system settings`.
   - Go to the `Environment Variables` section.
   - Find the `Path` variable in the `System variables` section, select it, and click `Edit`.
   - Click `New` and add the path to the OpenSSL `bin` folder (e.g., `C:\OpenSSL-Win64\bin`).
   - Click `OK` to save.

4. **Verify OpenSSL Installation:**
   - Open a new Command Prompt and type `openssl version`.
   - If installed correctly, it will display the version of OpenSSL.

### Step 2: Create SSL Certificates

1. **Generate a Private Key:**

   openssl genrsa -out key.pem 2048

2. **Create a Certificate Signing Request (CSR):**

    openssl req -new -key key.pem -out csr.pem

When prompted, fill out the required fields. For Common Name (e.g., server FQDN or YOUR name), use localhost.

3. **Create a Self-Signed Certificate:**
    openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem

This will create a certificate valid for 365 days.

### Step 3: Create and Run the Node.js HTTPS Server
PORT 8080
1. node server.js 
PORT 443
2. node server-https.js
PORT 8080
3. node redirect-server.js


### Troubleshooting
1. If you see a message that your connection is not private, this is normal for self-signed certificates. You can click through the warning to .access your site.
2. If you want to avoid the warning, consider obtaining a certificate from a trusted certificate authority like Let's Encrypt.
### Additional Notes
1. For production environments, use a certificate from a trusted CA.
2. The server will listen on port 8080 by default. Ensure no other service is running on this port.
3. OpenSSL is a powerful tool, but it has many options. Feel free to explore its documentation for advanced usage.


This `README.md` file provides a comprehensive guide to set up an HTTPS server with a self-signed certificate using Node.js on a Windows system.
