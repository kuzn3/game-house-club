from flask import Flask, redirect, render_template, request, url_for, session, jsonify
from flask_security import UserMixin, Security
from flask_sqlalchemy import SQLAlchemy
from flask_wtf.csrf import CSRFProtect
from flask_session import Session
from bp_admin import admin
import os

def get_data_from_db(table):
    dict = {}
    data = db.session.execute("SELECT * FROM " + table).cursor.fetchall()
    for i in range(len(data)):
        dict[data[i][0]] = data[i][1]
    return dict

app = Flask(__name__)
app.register_blueprint(admin)

app.config["SECRET_KEY"] = "text"
app.config["SECURITY_PASSWORD_SALT"] = "text"
app.config["WTF_CSRF_SECRET_KEY"] = "text"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///static/db/db.login"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["SESSION_FILE_DIR"] = "/Users/dmitrijkuznecov/Documents/Programms/site/session"
app.config["SESSION_COOKIE_SECURE"] = True
app.config["SESSION_TYPE"] = "filesystem"

db = SQLAlchemy(app)

sess = Session(app)

csrf = CSRFProtect(app)



class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True)
    password = db.Column(db.String(30), unique=True)

class News(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    news = db.Column(db.String(512), unique=False)

class Akie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    news = db.Column(db.String(512), unique=False)

class Place(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    state = db.Column(db.String(5), unique=False)


@app.route("/login", methods = ["GET", "POST"])
def login():
    if request.method == "POST":
        session.pop("user_id", None)
        username = str(request.form["username"])
        password = str(request.form["password"])
        try:
            user = [x for x in User.query.all() if x.username == username and x.password == password][0]
            session["user_id"] = user.id
            return redirect(url_for("admin"))
        except:
            return render_template("login.html")
    return render_template("login.html")

@app.get("/admin")
def admin():
    if "user_id" not in session:
        return redirect(url_for("login"))
    return render_template("admin.html")

@app.get("/")
def user():
    return render_template("admin.html")

@app.post("/append_news")
def append_news():
    if "user_id" not in session:
        return redirect(url_for("login"))
    db.session.execute("INSERT INTO news (news) VALUES (\"" + request.form.get("value") + "\")")
    db.session.commit()
    data = db.session.execute("SELECT * FROM news").cursor.fetchall()
    print(data)
    return "True"

@app.post("/delete_news")
def delete_news():
    if "user_id" not in session:
        return redirect(url_for("login"))
    db.session.execute("DELETE FROM news WHERE news = \"" + request.form.get("value") + "\"")
    db.session.commit()
    return "True"

@app.post("/append_akie")
def append_akie():
    if "user_id" not in session:
        return redirect(url_for("login"))
    db.session.execute("INSERT INTO akie (news) VALUES (\"" + request.form.get("value") + "\")")
    db.session.commit()
    data = db.session.execute("SELECT * FROM akie").cursor.fetchall()
    print(data)
    return "True"

@app.post("/delete_akie")
def delete_akie():
    if "user_id" not in session:
        return redirect(url_for("login"))
    db.session.execute("DELETE FROM akie WHERE news = \"" + request.form.get("value") + "\"")
    db.session.commit()
    return "True"

@app.get("/get_data_akie")
def get_data_akie():
    dict_akie = get_data_from_db("akie")
    return jsonify(dict_akie)

@app.get("/get_data_news")
def get_data_news():
    dict_news = get_data_from_db("news")
    return jsonify(dict_news)

@app.get("/get_data_places")
def get_data_places():
    dict_places = get_data_from_db("place")
    return jsonify(dict_places)

@app.post("/place")
def place():
    db.session.execute("UPDATE place SET state = \"" + request.form.get("value") + "\" WHERE id = \"" + request.form.get("key") + "\"")
    db.session.commit()
    return "true"


if __name__ == "__main__":
	app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
