import { connect, connection, Connection } from 'mongoose';
import { Contact, ContactModel } from './SomeModel';

declare interface IModels {
    Contact: ContactModel;
}

export class DB {
    private static instance: DB;

    private _db: Connection;

    private _models: IModels;
    public static get Models() {
        if (!DB.instance) {
            DB.instance = new DB();
        }
        return DB.instance._models;
    }

    private constructor() {
        connect(process.env.MONGO_URI, { useNewUrlParser: true });
        this._db = connection;
        this._db.on('open', this.connected);
        this._db.on('error', this.error);

        this._models = {
            Contact: new Contact().model
            // this is where we initialise all models
        }
    }

    private connected() {
        console.log('Mongoose has connected');
    }

    private error(error) {
        console.log('Mongoose has errored', error);
    }
}
