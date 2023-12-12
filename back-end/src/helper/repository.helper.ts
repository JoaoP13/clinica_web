import { Transaction, Deferrable } from 'sequelize';

import * as database from '../database/index';

function getTransaction(): Transaction {
    return database.default.db.sequelize.transaction({
        deferrable: Deferrable.SET_DEFERRED,
    });
}

export default { getTransaction };
