from flask import Blueprint, request, jsonify
from models import db, Event

routes = Blueprint("routes", __name__)  # Définition du Blueprint

# Récupérer tous les événements
@routes.route("/events", methods=["GET"])
def get_events():
    events = Event.query.all()
    return jsonify([{"id": e.id, "name": e.name, "date": e.date} for e in events])

# Ajouter un événement
@routes.route("/events", methods=["POST"])
def add_event():
    data = request.get_json()
    new_event = Event(name=data["name"], date=data["date"])
    db.session.add(new_event)
    db.session.commit()
    return jsonify({"message": "Événement ajouté avec succès"}), 201