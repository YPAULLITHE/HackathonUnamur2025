from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Event

app = Flask(__name__)
CORS(app)

# Configuration de la base SQLite
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)

# Création de la base
with app.app_context():
    db.create_all()

# Récupérer tous les événements
@app.route("/events", methods=["GET"])
def get_events():
    events = Event.query.all()
    return jsonify([{"id": e.id, "name": e.name, "date": e.date} for e in events])

# Ajouter un événement
@app.route("/events", methods=["POST"])
def add_event():
    data = request.get_json()
    new_event = Event(name=data["name"], date=data["date"])
    db.session.add(new_event)
    db.session.commit()
    return jsonify({"message": "Événement ajouté avec succès"}), 201