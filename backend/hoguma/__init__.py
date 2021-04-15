from flask import Flask

from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

import config

db = SQLAlchemy()
migrate = Migrate()


def create_app():
    app = Flask(__name__)

    # app에 config 적용
    app.config.from_object(config)

    CORS(app, supports_credentials=True)

    db.init_app(app)
    migrate.init_app(app, db)

    return app
