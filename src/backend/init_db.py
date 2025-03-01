from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Event

def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)

    from routes import routes  # Importer les routes
    app.register_blueprint(routes)  # Enregistrer les routes

    with app.app_context():
        db.create_all()  # Crée la base de données et les tables si elles n'existent pas
        seed_database()  # Remplir la base de données avec des valeurs par défaut

    return app

def seed_database():
    """ Ajoute des données de base si la table est vide """

    if Event.query.first() is None:  # Vérifier si la table est vide
        sample_events = [
            Event(id=1, name="Concert Rock", date="2025-06-15"),
            Event(id=2, name="Conférence AI", date="2025-07-01"),
            Event(id=3, name="Exposition Art", date="2025-08-20"),
        ]
        db.session.add_all(sample_events)
        db.session.commit()
        print("✅ Données initiales ajoutées !")

app = create_app()  # Initialise l’application Flask