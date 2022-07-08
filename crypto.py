from cryptography.fernet import Fernet

key = b'rjzOVHeeHbNZUVXPqzWE5lLMcAX2JmhbwgR1IWbK5K0='

def encrypt_text(plain_text):
    f = Fernet(key)
    encrypted_text = f.encrypt(bytes(plain_text, "UTF-8"))
    return encrypted_text.decode()
    
def decrypt_text(encrypted_text):
    f = Fernet(key)
    return f.decrypt(bytes(encrypted_text, "UTF-8")).decode()