import random, csv, os, json


#convert csv file to json file
def csv_to_json(csv_file_path, json_file_path):
    #create dictonary 
    data = { }
    #open a csv_reader called DictReader
    with open(csv_file_path, encoding="UTF-8") as csvf:
        csv_reader = csv.reader(csvf)
        #convert each row into a Dictonary
        #and add it to Data
        for key, value in csv_reader:
            data[key] = value
            #print(key, value)
        #open json file for write and write dict{data} use json.dumps
    with open(json_file_path, "w", encoding="UTF-8") as jsonf:
        jsonf.write(json.dumps(data, indent = 4))

def set_variable(variable_name, variable):
    with open ("./static/js/request.js", "r") as file:
        data = file.read()
        data = data.replace(variable_name, str(variable))
    with open ("./static/js/request_client.js", "w") as file:
        file.write(data)

def get_random_color_set():
    file = open("./static/json/color.json", "r")
    data = json.load(file)
    set = random.choice(data)
    return set

def read_data_from_csv(filename, kv):
    data = []
    file = open(filename, "r")
    reader = csv.reader(file)
    if(kv == "v"):
        for key, value in list(reader):
            data.append(value)
    elif(kv == "kv"):
        data = list(reader)
    file.close()
    return data

def update_data_in_csv(filename, key, value, pn):
    input = open(filename, "r")
    result = open("output.csv", "w")
    reader = csv.reader(input)
    writer = csv.writer(result)
    for row in reader:
        if(pn == "dn" and row[0] != key):
            writer.writerow(row)
        elif(pn == "uc"):
            if(row[0] == key):
                writer.writerow((row[0], value))
            else:
                writer.writerow(row)
    result.close()
    input.close()
    os.remove(filename)
    os.rename("output.csv", filename)
    
def write_data_to_csv(filename, data):
    file = open(filename, "a")
    writer = csv.writer(file)
    writer.writerow(data)
    file.close()