from flask import Flask, redirect, render_template, request, url_for, session, jsonify, abort
from flask_security import  UserMixin
from flask_sqlalchemy import SQLAlchemy
from flask_wtf.csrf import CSRFProtect
from flask_session import Session
import os, random, time, requests, rsa, json, cryptography
from crypto import encrypt_text, decrypt_text
from sl_json import save_json, load_json


login_data = {
    "Username": "admin_pc",
    "Password": ""
    }

def request_to_APC(URL, created_file_name, login_data):
    x = requests.get("http://188.235.104.21:65000" + URL + "?" + encrypt_text(str(login_data)))
    data = decrypt_text(x.text).replace("\'", "\"").replace("None", "\"None\"").replace("False", "\"False\"")
    data = json.loads(data)
    save_json(created_file_name, data)
    return data


def get_data_from_db(table):
    dict = {}
    data = db.session.execute("SELECT * FROM {}".format(table)).cursor.fetchall()
    for i in range(len(data)):
        dict[data[i][0]] = data[i][1]
    return dict

app = Flask(__name__)

app.config["SECRET_KEY"] = "text"
app.config["SECURITY_PASSWORD_SALT"] = "text"
app.config["WTF_CSRF_SECRET_KEY"] = "text"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///static/db/db.app"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["SESSION_FILE_DIR"] = "./session"
app.config["SESSION_COOKIE_SECURE"] = True
app.config["SESSION_TYPE"] = "filesystem"

db = SQLAlchemy(app)

#sess = Session(app)

#csrf = CSRFProtect(app)

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True)
    password = db.Column(db.String(30), unique=True)

class News(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item = db.Column(db.String(512), unique=False)

class Akie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item = db.Column(db.String(512), unique=False)

class Connect(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    item = db.Column(db.String(512), unique=False)

class Place(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    state = db.Column(db.String(5), unique=False)

json_from_APC_dir = "./static/json_from_APC/"

@app.post("/login")
def login():
    try:
        session.pop("user_id", None)
        username = str(request.form["key"])
        password = str(request.form["value"]) 
        login_data.update({"user": username})
        login_data.update({"pass": password})
        login_result = request_to_APC("/login", json_from_APC_dir + "login_result.json", login_data)
        if(login_result["result"]==0):
            #print("1")
            session["user_id"] = login_result["userId"]
            user = request_to_APC("/userId/{}".format(login_result["userId"]), json_from_APC_dir + "user_{}.json".format(login_result["userId"]), login_data)
            balance = request_to_APC("/balance/{}".format(login_result["userId"]), json_from_APC_dir + "user_{}_balance.json".format(login_result["userId"]), login_data)  

            user["result"]["deposits"] = balance["result"]["deposits"]
            user["result"]["points"] = balance["result"]["points"]
            user["result"]["balance"] = balance["result"]["balance"]

            print(user["result"])
            login_data.pop("user")
            login_data.pop("pass")
            return user["result"]
        elif(login_result["result"]==8):
            login_data.pop("user")
            login_data.pop("pass")
            return "Uncorrect Username/Password"
        else:
            login_data.pop("user")
            login_data.pop("pass")
            return "Error"
    except:
        login_data.pop("user")
        login_data.pop("pass")
        


@app.get("/admin")
def admin():
    if "user_id" not in session:
        return redirect(url_for("login"))
    return render_template("admin.html")

@app.route("/", methods = ["GET", "POST"])
def user():
    user_sessions = request_to_APC("/usersessions", json_from_APC_dir + "active_user_sessions.json", login_data)
    #print(user_sessions)

    #save_json(json_from_APC_dir + "hostId_hostName.json", hostId_hostName_user)
    save_json(json_from_APC_dir + "hostId_hostName.json", user_sessions)
    return render_template("user.html")


@app.post("/append_<table>")
def append(table):
    if "user_id" not in session:
        return abort(421)
    db.session.execute("INSERT INTO {} (item) VALUES (\"{}\")".format(table, request.form.get("value")))
    db.session.commit()
    return "True"

@app.post("/delete_<table>")
def delete(table):
    if "user_id" not in session:
        return abort(421)
    db.session.execute("DELETE FROM {} WHERE item = \"{}\"".format(table, request.form.get("value")))
    db.session.commit()
    return "True"

@app.post("/update_<table>")
def update(table):
    if "user_id" not in session:
        return abort(421)
    db.session.execute("UPDATE {} SET item = \"{}\" WHERE id = \"{}\"".format(table, request.form.get("value"), request.form.get("key").replace("item_", "")))
    db.session.commit()
    return "True"

@app.get("/get_data_<table>")
def get_data(table):
    dict = get_data_from_db(str(table))
    return jsonify(dict)

@app.post("/place")
def place():
    if "user_id" not in session:
        print(session)
        return abort(421)
    db.session.execute("UPDATE place SET state = \"{}\" WHERE id = \"{}\"".format(request.form.get("value"), request.form.get("key")))
    db.session.commit()
    return "True"

@app.get("/logout")
def logout():
    if "user_id" in session:
        session.pop("user_id")
    else:
        redirect(url_for(".user"))
    return redirect(url_for(".user"))

if __name__ == "__main__":
	app.run(debug=True, port=int(os.environ.get("PORT", 5000)))
