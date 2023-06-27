from flask import Flask, redirect,render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from werkzeug.security import generate_password_hash, check_password_hash
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SECRET_KEY'] = os.urandom(24)
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)

#データベース
class Tweet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(20), nullable=False)
    body = db.Column(db.String(140), nullable=False)

class User(UserMixin, db.Model):
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(50), nullable=False, unique=True)
	password = db.Column(db.String(25))

#id関係
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

#ログインページ開く
@app.route('/')
def top():
    return render_template('login.html')

@app.route('/kk')
def kk():
    return render_template('kk.html')

@app.route('/signup', methods=['GET','POST'])
def signup():
    if request.method == "POST":
        username = request.form.get('username')
        password = request.form.get('password')
        # Userのインスタンスを作成
        user = User(username=username, password=generate_password_hash(password, method='sha256'))
        db.session.add(user)
        db.session.commit()
        return redirect('login')
    else:
        return render_template('signup.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        username = request.form.get('username')
        password = request.form.get('password')
        # Userテーブルからusernameに一致するユーザを取得
        user = User.query.filter_by(username=username).first()
        if check_password_hash(user.password, password):
            login_user(user)
            return redirect('/kk')
    else:
        return render_template('login.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect('login')

@app.route("/index", methods=["GET"])
def index():
    return render_template('index.html')