from flask import Flask
# from config import Config, DevelopmentConfig
# from app.models import db


# def create_app(config_class: Config=DevelopmentConfig):
app = Flask(__name__)
# app.config.from_object(DevelopmentConfig)
with app.app_context():
    from app import routes

    # db.init_app(app)

    # with app.app_context():
    #     from app import routes
    #     db.create_all()

    # return app