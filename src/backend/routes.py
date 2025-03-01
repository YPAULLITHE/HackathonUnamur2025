from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Event


def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)

    with app.app_context():
        db.create_all()  # Crée la base de données et les tables si elles n'existent pas
        seed_database()  # Remplir la base de données avec des valeurs par défaut

    return app

def seed_database():
    """ Ajoute des données de base si la table est vide """

    if Event.query.first() is None:  # Vérifier si la table est vide
        sample_events = [
            Event(name="Concert Rock", date="2025-06-15"),
            Event(name="Conférence AI", date="2025-07-01"),
            Event(name="Exposition Art", date="2025-08-20"),
        ]
        db.session.add_all(sample_events)
        db.session.commit()
        print("✅ Données initiales ajoutées !")

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