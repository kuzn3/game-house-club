from flask import Flask
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), unique=True)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.get("/login")
def login():
    user = User.query.filter_by(username = "Dmitrii").first()
    print(user.username)
    login_user(user)
    return "You are now logged in!"

@app.get("/logout")
@login_required
def logout():
    logout_user()
    return "You are now logged out!"

@app.get("/home")
@login_required
def home():
    return current_user.username

@app.get("/logout")
def logout():
    session.pop("user_id", None)
    return "You are now logged out!"

@app.get("/")
def user():
    set = get_random_color_set()
    news = read_data_from_csv("./static/csv/data.csv", "v")
    place = read_data_from_csv("./static/csv/place.csv", "kv")
    return render_template("admin.html", place = place, \
        news = news, set = set)

@admin.post("/delete_news")
def delete_news():
    if "user_id" not in session:
        return redirect(url_for("login"))
    update_data_in_csv("./static/csv/data.csv", request.form.get("key"), \
        request.form.get("value"), "dn")
    return "true"

@admin.post("/place")
def place():
    if "user_id" not in session:
        return redirect(url_for("login"))
    update_data_in_csv("./static/csv/place.csv", request.form.get("key"), \
        request.form.get("value"), "uc")
    print( request.form.get("key"), request.form.get("value"))
    return "true"