from routes import create_app

app = create_app()  # Initialise l’application Flask

if __name__ == "__main__":
    app.run(debug=True, port=5000)