import json

def load_json(file_name):
    with open(file_name, "r") as f:
        data = json.load(f)
    return data
    
def save_json(created_file_name, data):
    with open(created_file_name, "w") as f:
        json.dump(data, f, indent=4)